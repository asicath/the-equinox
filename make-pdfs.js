const fs = require('fs');
const data = require('./data').data;

function filenameFromPageNumber(n) {
    let filename = n.toString();
    while (filename.length < 3) {
        filename = "0" + filename;
    }
    filename += '.png';
    return filename;
}

let goToFolder = false; // set to true if there are too many pages for command line, CMD must be copied to the google drive folder

let googleFolder = 'F:/googledrive/The Equinox';
let baseFolder = googleFolder;
if (goToFolder) baseFolder = '.';

function pathFromFilename(book, filename) {
    return baseFolder + `/scans/${book.folder}/600dpi/${filename}`;
}

const lines = [], linesLow = [], merge = [];

if (goToFolder) {
    lines.push('cd ' + googleFolder);
    lines.push('F:');
}


data.books.forEach(book => {

    book.contents.forEach(item => {

        if (book.folder === '1.9' && item.pageStart===23) {}
        else return;

        //if (!item.hasOwnProperty('filename')) return;

        //if (item.title !== 'LIBER XXX AERUM') return;
        //if (item.pageStart !== 211) return;


        // compile images
        let images = [];
        let after = {};

        // add the images before hand
        if (item.hasOwnProperty('addPage')) {
            item.addPage.forEach(page => {
                let path = pathFromFilename(book, page.filename);

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

                let path = pathFromFilename(book, filename);
                images.push(path);

                // find any images that must appear after this
                if (after.hasOwnProperty(filename)) {
                    after[filename].forEach(p => {
                        images.push(p);
                    });
                }
            }

        }


        // finally add the credit
        //images.push('../scans/credits/600dpi/_credits.png');

        let imagesCmd = images.join(';');
        //let pdfName = `./${book.folder}/${item.filename}.pdf`;

        if (!item.hasOwnProperty('filename')) {
            item.filename = item.title.replace(/É/g, 'E').toLowerCase().replace(/,/g, '').replace(/∴/g, "").replace(/Æ/g, "AE");
        }
        let filename = item.filename.replace(/\s/g, '-').replace(/[.!?]/g, '');
        let pdfName = baseFolder + `/scans/${book.folder}/pdf-600dpi/${filename}.pdf`;


        let pubTitle = 'The Equinox ' + book.folder;
        if (book.hasOwnProperty('pubTitle')) {
            pubTitle = book.pubTitle;
        }

        //let bookTitle = `The Equinox ${book.folder} (${book.pubLocation}: ${book.pubName}, ${book.pubYear})`;
        //let pdfTitle = `${item.title}. ${bookTitle}, ${pageInfo}.`;

        //MLA: Crowley, Aleister. "LIBER O." The Equinox 1.2 (1909): 11-30.
        let pdfTitle = `""${item.title}."" ${pubTitle} (${book.pubYear}): ${pageInfo}.`;

        pdfTitle = pdfTitle.replace(/∴/g, "").replace(/Æ/g, "AE").replace(/É/g, 'E');

        const cmd = `naps2.console -i "${imagesCmd}" -n 0 -o "${pdfName}" --enableocr --ocrlang "eng+lat+grc+heb" --pdftitle "${pdfTitle}" --force`;
        lines.push(cmd);

        let cmdLow = cmd.replace(/600dpi/g, '150dpi').replace(/\.pdf/, '_low.pdf');
        linesLow.push(cmdLow);

        let creditFilename = 'credits.pdf';
        if (book.hasOwnProperty('creditFilename')) creditFilename = book.creditFilename;
        if (item.hasOwnProperty('creditFilename')) creditFilename = item.creditFilename;

        let creditPdf = baseFolder + '/scans/credits/pdf-600dpi/' + creditFilename;
        let creditPdfLow = baseFolder + '/scans/credits/pdf-150dpi/' + creditFilename;
        let creditMerged = `./${book.folder}/${filename}.pdf`;
        let creditMergedLow = `./${book.folder}/${filename}_low.pdf`;

        let cmdMerge = `java -jar pdfbox-app-2.0.8.jar PDFMerger "${pdfName}" "${creditPdf}" ${creditMerged}`;
        merge.push(cmdMerge);

        let pdfNameLow = pdfName.replace(/600dpi/g, '150dpi').replace(/\.pdf/, '_low.pdf');
        let cmdMergeLow = `java -jar pdfbox-app-2.0.8.jar PDFMerger "${pdfNameLow}" "${creditPdfLow}" ${creditMergedLow}`;
        merge.push(cmdMergeLow);

        console.log(cmd);
    });

    //fs.writeFileSync('pdfs/make-pdfs_high.cmd', lines.join('\n'));
    //fs.writeFileSync('pdfs/make-pdfs_low.cmd', linesLow.join('\n'));
    fs.writeFileSync('pdfs/make-pdfs.cmd', lines.join('\n') + '\n' + linesLow.join('\n'));

    fs.writeFileSync('pdfs/join-pdfs.cmd', merge.join('\n'));

    // java -jar pdfbox-app-x.y.z.jar PDFMerger <Source PDF files (2 ..n)> <Target PDF file>
    //sejda-console merge -f ../scans/1.2/pdf-150dpi/advertisements_low.pdf ../scans/credits/pdf-150dpi/credits.pdf -o ./1.2/advertisements_low.pdf

});


//