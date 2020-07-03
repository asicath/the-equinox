const fs = require('fs');
const data = require('./data').data;

// lets add APR just for making pdfs
const apr = require('./books/apr').data;
data.books.push(apr);

function filenameFromPageNumber(n) {
    let filename = n.toString();
    while (filename.length < 3) {
        filename = "0" + filename;
    }
    filename += '.png';
    return filename;
}

let goToFolder = false; // set to true if there are too many pages for command line, CMD must be copied to the "scans" folder of google drive

let googleFolder = 'D:/googledrive/The Equinox/scans';
let baseFolder = googleFolder;
if (goToFolder) baseFolder = '.';

function pathFromFilename(book, filename, imgFolder) {
    return baseFolder + `/${book.folder}/${imgFolder}/${filename}`;
}

const lines = [], linesLow = [], merge = [];

if (goToFolder) {
    lines.push('cd ' + googleFolder);
    lines.push('D:');
}


data.books.forEach(book => {

    let imgFolder = book.imgFolder || '600dpi';
    let imgFolderRe = new RegExp(imgFolder, 'g'); ///600dpi/g;

    let makeLowRes = book.makeLowRes || true;

    book.contents.forEach(item => {

        if (book.folder !== 'book4/3') return;

        //if (!item.hasOwnProperty('filename')) return;
        //if (!(item.title.indexOf('Elemental Weapons') > -1 || item.title.indexOf('COVER AND TITLE PAGE') > -1)) return;
        //if (item.pageStart > 200 || !item.hasOwnProperty('pageStart')) return;
        if (item.prefix !== 'p') return;

        // compile images
        let images = [];
        let after = {};

        // add the images before hand
        if (item.hasOwnProperty('addPage')) {
            item.addPage.forEach(page => {
                let path = pathFromFilename(book, page.filename, imgFolder);

                // if position specified
                if (page.hasOwnProperty('after')) {
                    if (!after.hasOwnProperty(page.after)) after[page.after] = [];
                    after[page.after].push(path);
                }

                // otherwise push on the stack now
                else images.push(path);
            });
        }

        let pageInfo = item.pageInfo || "";

        if (item.hasOwnProperty('pageStart')) {

            if (pageInfo.length === 0) {
                if (item.pageStart === item.pageEnd) pageInfo = item.pageStart.toString();
                else pageInfo = item.pageStart + "-" + item.pageEnd;
            }

            let skip = item['skip'] || null;

            // add the default images
            for (let i = item.pageStart; i <= item.pageEnd; i++) {

                if (skip !== null && skip.indexOf(i) !== -1) continue;

                let filename = filenameFromPageNumber(i);
                if (item.hasOwnProperty('prefix')) filename = item.prefix + filename;

                let path = pathFromFilename(book, filename, imgFolder);
                images.push(path);

                // find any images that must appear after this
                if (after.hasOwnProperty(filename)) {
                    after[filename].forEach(p => {
                        images.push(p);
                    });
                }
            }

        }

        // --- TITLE ---
        let title = item.altTitle || item.title;
        title = title.replace(/—/g, "-");

        let pubTitle = 'The Equinox ' + book.folder;
        if (book.hasOwnProperty('pubTitle')) {
            pubTitle = book.pubTitle;
        }

        //MLA: Crowley, Aleister. "LIBER O." The Equinox 1.2 (1909): 11-30.
        let pdfTitle = `""${title}."" ${pubTitle} (${book.pubYear}): ${pageInfo}.`;

        pdfTitle = pdfTitle.replace(/∴/g, "").replace(/Æ/g, "AE").replace(/æ/g, "ae").replace(/É/g, 'E').replace(/Ä/g, 'A');


        // --- FILENAME ---
        if (!item.hasOwnProperty('filename')) {
            item.filename = title.replace(/É/g, 'E').replace(/Ä/g, 'A').replace(/æ/g, "ae").replace(/,/g, '').replace(/∴/g, "").replace(/Æ/g, "AE").replace(/—/g, "-").replace(/:/g, "").toLowerCase();
        }
        let filename = item.filename.replace(/\s/g, '-').replace(/[.!?]/g, '');
        let pdfName = baseFolder + `/${book.folder}/pdf-${imgFolder}/${filename}.pdf`;

        // --- compile the command ---
        let imagesCmd = images.join(';');
        const cmd = `naps2.console -i "${imagesCmd}" -n 0 -o "${pdfName}" --enableocr --ocrlang "eng+lat+grc+heb" --pdftitle "${pdfTitle}" --force`;
        lines.push(cmd);
        console.log(cmd);

        // --- now add a credit joining line to the other .cmd ---
        let creditFilename = 'credits.pdf';
        if (book.hasOwnProperty('creditFilename')) creditFilename = book.creditFilename;
        if (item.hasOwnProperty('creditFilename')) creditFilename = item.creditFilename;
        const creditPdf = baseFolder + '/credits/pdf-600dpi/' + creditFilename;
        const creditMerged = `./${book.folder}/${filename}.pdf`;
        const cmdMerge = `java -Xmx1024m -jar pdfbox-app-2.0.8.jar PDFMerger "${pdfName}" "${creditPdf}" ${creditMerged}`;
        merge.push(cmdMerge);

        if (makeLowRes) {
            // --- now the LOW res version ---
            const cmdLow = cmd.replace(imgFolderRe, '150dpi').replace(/\.pdf/, '_low.pdf');
            linesLow.push(cmdLow);

            const pdfNameLow = pdfName.replace(imgFolderRe, '150dpi').replace(/\.pdf/, '_low.pdf');
            const creditPdfLow = baseFolder + '/credits/pdf-150dpi/' + creditFilename;
            const creditMergedLow = `./${book.folder}/${filename}_low.pdf`;
            const cmdMergeLow = `java -jar pdfbox-app-2.0.8.jar PDFMerger "${pdfNameLow}" "${creditPdfLow}" ${creditMergedLow}`;
            merge.push(cmdMergeLow);
        }

    });

    fs.writeFileSync('pdfs/make-pdfs.cmd', lines.join('\n') + '\n' + linesLow.join('\n'));
    fs.writeFileSync('pdfs/join-pdfs.cmd', merge.join('\n'));

});


//