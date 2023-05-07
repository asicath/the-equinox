/*

 0 PROBATIONER
 LIBER CXL (ALEPH) THE BOOK OF WISDOM OR FOLLY.

 2 COURSE IV - Zelator
 LIBER XVII. LIBER I.A.O. (This book has not been published.)
 LIBER CLXXXV. LIBER COLLEGII SANCTI. Being the tasks of the Grades and their Oaths proper to Liber XIII.  This is the official Paper of the various grades.  It includes the Task and Oath of a Probationer.

 TANNHÄUSER, by A. Crowley. An allegorical drama concerning the Progress of the Soul; the Tannhäuser story slightly remodelled.

 */

const replacementRegex = [
    {re: /Æ/g, with: 'AE'},
    {re: /æ/g, with: 'ae'},
    {re: /É/g, with: 'E'},
    {re: /Ä/g, with: 'A'},
    {re: /—/g, with: '-'},
    {re: /\s/g, with: '-'},
    {re: /&/g, with: 'and'},
    {re: /[":.!?∴,]/g, with: ''}
];

function filenameFromPageNumber(n, ext = '.png') {
    let filename = n.toString();
    while (filename.length < 3) {
        filename = "0" + filename;
    }
    filename += ext;
    return filename;
}

class Book {
    
    constructor(data) {
        this.data = data;

        // needed by jsx TODO: limit to just required fields and output to small json
        for (let key of Object.keys(this.data)) {
            this[key] = this.data[key];
        }

        //this.folder = this.data.folder;

        // --- citation title
        this.pubTitle = this.data.hasOwnProperty('pubTitle') ? this.data.pubTitle : 'The Equinox ' + this.folder;
        this.pubYear = this.data.pubYear;

        this.items = this.data.contents.map(item => {
            return new BookItem(this, item);
        });

    }

}

class BookItem {

    constructor(book, data) {
        this.book = book;
        this.data = data;

        // needed by jsx TODO: limit to just required fields and output to small json
        for (let key of Object.keys(this.data)) {
            this[key] = this.data[key];
        }

        this._initImages();
        this._initTitlesAndFilenames();
    }

    _initImages() {
        // compile images
        let images = [];
        let after = {};

        // add the images before hand
        if (this.data.hasOwnProperty('addPage')) {
            this.data.addPage.forEach(page => {

                // if position specified
                if (page.hasOwnProperty('after')) {
                    if (!after.hasOwnProperty(page.after)) after[page.after] = [];
                    after[page.after].push(page.filename);
                }

                // otherwise push on the stack now
                else {
                    images.push(page.filename);
                }
            });
        }

        let pageInfo = this.data.pageInfo || "";

        if (this.data.hasOwnProperty('pageStart')) {

            if (pageInfo.length === 0) {
                if (this.data.pageStart === this.data.pageEnd) pageInfo = this.data.pageStart.toString();
                else pageInfo = this.data.pageStart + "-" + this.data.pageEnd;
            }

            let skip = this.data['skip'] || null;

            // add the default images
            for (let i = this.data.pageStart; i <= this.data.pageEnd; i++) {

                if (skip !== null && skip.indexOf(i) !== -1) continue;

                let filename = filenameFromPageNumber(i, this.data.ext);
                if (this.data.hasOwnProperty('prefix')) filename = this.data.prefix + filename;

                images.push(filename);

                // find any images that must appear after this
                if (after.hasOwnProperty(filename)) {
                    after[filename].forEach(p => {
                        images.push(p);
                    });
                }
            }
        }

        this.pageImages = images;
        this.pageInfo = pageInfo;
    }

    _initTitlesAndFilenames() {
        // title
        this.title = this.data.altTitle || this.data.title.replace(/—/g, "-");

        //MLA: Crowley, Aleister. "LIBER O." The Equinox 1.2 (1909): 11-30.
        this.pdfTitle = `""${this.title}."" ${this.book.pubTitle} (${this.book.pubYear}): ${this.pageInfo}.`;
        this.pdfTitle = this.pdfTitle
            .replace(/∴/g, "")
            .replace(/Æ/g, "AE")
            .replace(/æ/g, "ae")
            .replace(/É/g, 'E')
            .replace(/Ä/g, 'A');

        // PDF name
        let filename = null;
        if (this.data.hasOwnProperty('filename')) {
            filename = this.data.filename;
        }
        else {
            filename = this.title;
            replacementRegex.forEach(o => {
                filename = filename.replace(o.re, o.with);
            });
            filename = filename.toLowerCase();
        }

        this.pdfName = `${filename}.pdf`; // ${this.book.folder}/
        this.pdfLowName = this.pdfName.replace(/\.pdf/, '_low.pdf');
    }

}

const books = [
    //require('./books/apr').data, // lets add APR just for making pdfs
    require('./books/goetia').data,
    require('./books/collectedworks1').data,
    require('./books/collectedworks2').data,
    require('./books/collectedworks3').data,
    require('./books/konx-om-pax').data,
    require('./books/777').data,
    require('./books/thelema').data,
    require('./books/eq1.01').data,
    require('./books/eq1.02').data,
    require('./books/eq1.03').data,
    require('./books/eq1.04').data,
    require('./books/eq1.05').data,
    require('./books/eq1.06').data,
    require('./books/eq1.07').data,
    require('./books/eq1.08').data,
    require('./books/333').data,
    require('./books/eq1.09').data,
    require('./books/eq1.10').data,
    require('./books/book4.1').data,
    require('./books/book4.2').data,
    require('./books/eq3.01').data,
    require('./books/magick').data,
    require('./books/magick-insert').data,
    require('./books/thoth-exhibition').data,
    require('./books/thoth-book').data,
    require('./books/thoth-design').data
].map(data => {
    return new Book(data);
});

const authors = [
    {last:'Archer', other:'Ethel'},
    {last:'Baudelaire', other:'Charles Pierre'},
    {last:'Bennett', other:'Allen'},
    {last:'Blavatsky', other: 'Helena Petrovna'},
    {last:'Close', other:'Herbert'},
    {last:'Crowley', other:'Aleister'},
    {last:'Dunsany', other:'Lord'},
    {last:'Fuller', other:'J.F.C.'},
    {last:'Grimble', other:'Arthur F.'},
    {last:'Harris', other:'Frank'},
    {last:'Honorius', other:'Pope'},
    {last:'Jenkins', other:'David Hamish'},
    {last:'John', other:'Augustus'},
    {last:'Jones', other:'Charles Stansfeld'},
    {last:'Kelly', other:'Gerald'},
    {last:'Kennedy', other:'Leon Engers'},
    {last:'Lévi', other:'Éliphas'},
    {last:'Ludlow', other:'Fitz Hugh'},
    {last:'Mathers', other:'Macgregor'},
    {last:'Murchison', other:'Hector'},
    {last:'Neuburg', other:'Victor B.'},
    {last:'Perry', other:'S.H.'},
    {last:'Pinsent', other:'G.H.S.'},
    {last:'Prichard', other:'Katharine Susannah'},
    {last:'Raffalovich', other:'George'},
    {last:'Roe', other:'Norman'},
    {last:'Storer', other:'Edward'},
    {last:'Sturges', other:"Mary d'Este"},
    {last:'Waddell', other:'Laylah'},
    {last:'Whineray', other:'Edward P.'}
];

if (typeof exports !== 'undefined') {
    exports.data = {
        authors,
        books
    };
}
