/*

 0 PROBATIONER
 LIBER CXL (ALEPH) THE BOOK OF WISDOM OR FOLLY.

 2 COURSE IV - Zelator
 LIBER XVII. LIBER I.A.O. (This book has not been published.)
 LIBER CLXXXV. LIBER COLLEGII SANCTI. Being the tasks of the Grades and their Oaths proper to Liber XIII.  This is the official Paper of the various grades.  It includes the Task and Oath of a Probationer.

 TANNHÄUSER, by A. Crowley. An allegorical drama concerning the Progress of the Soul; the Tannhäuser story slightly remodelled.

 */

const data = {
    books: [
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
        require('./books/thoth').data
    ]
};

data.authors = [
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

const replacementRegex = [
    {re: /Æ/g, with: 'AE'},
    {re: /æ/g, with: 'ae'},
    {re: /É/g, with: 'E'},
    {re: /Ä/g, with: 'A'}
];

data.parseItem = (book, item) => {
    let title = item.altTitle || item.title;
    title = title.replace(/—/g, "-");

    let filename = null;
    if (item.hasOwnProperty('filename')) {
        filename = item.filename;
    }
    else {
        filename = title;
        replacementRegex.forEach(o => {
            filename = filename.replace(o.re, o.with);
        });
        filename = filename.toLowerCase();
    }
    filename = filename.replace(/\s/g, '-').replace(/[:.!?∴,]/g, '');
    const pdfName = `${book.folder}/${filename}.pdf`;
    const pdfLowName = pdfName.replace(/\.pdf/, '_low.pdf');

    return {
        title,
        pdfName,
        pdfLowName
    }
};

if (typeof exports !== 'undefined') exports.data = data;
