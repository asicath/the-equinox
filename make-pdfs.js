const fs = require('fs');
const path = require('path');
const {books} = require('./data').data;

const googleFolder = 'K:/googledrive/The Equinox/scans';
const goToFolder = false; // set to true if there are too many pages for command line, CMD must be copied to the "scans" folder of google drive

main();

function main() {
    let baseFolder = googleFolder;
    if (goToFolder) baseFolder = '.';

    function pathFromFilename(book, filename, imgFolder) {
        return baseFolder + `/${book.folder}/${imgFolder}/${filename}`;
    }

    const lines = [], linesLow = [], merge = [];

    if (goToFolder) {
        lines.push('cd ' + googleFolder);
        lines.push('K:');
    }

    // filter the books/items
    const filteredBooks = books.filter(book => {
        //if (book.folder.indexOf('thoth-book') === -1) return false;

        // also filter the items
        book.items = book.items.filter(item => {
            //if (!item.hasOwnProperty('filename')) return;
            //if (!(item.title.indexOf('Elemental Weapons') > -1 || item.title.indexOf('COVER AND TITLE PAGE') > -1)) return;
            //if (item.data.pageStart !== 223) return false;
            //if (item.prefix !== '_') return;
            return true;
        });

        return true;
    })

    const startLines = lines.length + linesLow.length;

    filteredBooks.forEach(book => {

        const imgFolder = book.imgFolder || '600dpi';
        const imgFolderLow = '150dpi';
        const imgFolderRe = new RegExp(imgFolder, 'g'); ///600dpi/g;

        const makeLowRes = book.makeLowRes || true;

        book.items.forEach(item => {

            const pdfFilepath = baseFolder + `/${book.folder}/pdf-${imgFolder}/${item.pdfName}`;

            // warn in case we missed anything that shouldn't be in a file name
            if (item.pdfName.match(/^[a-zA-Z0-9.;'()-]+$/) === null) {
                console.warn(`possible invalid filename ${pdfFilepath}`);
            }

            // apply path to the images
            const pageImages = item.pageImages.map(filename => {
                return pathFromFilename(book, filename, imgFolder);
            });

            // --- compile the command ---
            const imagesCmd = pageImages.join(';');
            const cmd = `naps2.console -i "${imagesCmd}" -n 0 -o "${pdfFilepath}" --enableocr --ocrlang "eng+lat+grc+heb" --pdftitle "${item.pdfTitle}" --force`;
            lines.push(cmd);

            // --- now add a credit joining line to the other .cmd ---
            let creditFilename = 'credits.pdf';
            if (book.hasOwnProperty('creditFilename')) creditFilename = book.creditFilename;
            if (item.hasOwnProperty('creditFilename')) creditFilename = item.creditFilename;
            const creditPdf = baseFolder + '/credits/pdf-600dpi/' + creditFilename;
            const creditMerged = `./${book.folder}/${item.pdfName}`;
            const cmdMerge = `java -Xmx1024m -jar pdfbox-app-2.0.8.jar PDFMerger "${pdfFilepath}" "${creditPdf}" ${creditMerged}`;
            merge.push(cmdMerge);
            checkForFile(creditMerged);

            if (!makeLowRes) {
                return;
            }

            // --- now the LOW res version ---
            const pdfFilepathLow = baseFolder + `/${book.folder}/pdf-${imgFolderLow}/${item.pdfLowName}`;

            const cmdLow = cmd.replace(imgFolderRe, imgFolderLow).replace(/\.pdf/, '_low.pdf');
            linesLow.push(cmdLow);

            const creditPdfLow = baseFolder + '/credits/pdf-150dpi/' + creditFilename;
            const creditMergedLow = `./${book.folder}/${item.pdfLowName}`;
            const cmdMergeLow = `java -jar pdfbox-app-2.0.8.jar PDFMerger "${pdfFilepathLow}" "${creditPdfLow}" ${creditMergedLow}`;
            merge.push(cmdMergeLow);
            checkForFile(creditMergedLow);
        });

        fs.writeFileSync('pdfs/make-pdfs.cmd', lines.join('\n') + '\n' + linesLow.join('\n'));
        fs.writeFileSync('pdfs/join-pdfs.cmd', merge.join('\n'));
    });

    console.log(`lines in make-pdfs.cmd: ${lines.length + linesLow.length - startLines}`);
    console.log(`lines in join-pdfs.cmd: ${merge.length}`);
}

function checkForFile(filepath) {
    const filePathResolved = path.resolve(__dirname + '/pdfs', filepath);

    if (fs.existsSync(filePathResolved)) {

    }
    else {
        console.warn(`file doesn't exist ${filePathResolved}`);
    }
}