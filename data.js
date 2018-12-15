/*

 0 PROBATIONER
 LIBER CXL (ALEPH) THE BOOK OF WISDOM OR FOLLY.
 LIBER XXV. (THE STAR RUBY)
 LIBER CCVII. SYLLABUS. An enumeration of the Official Publications of the AA, with a brief description of the contents of each book.

 2 COURSE IV - Zelator
 LIBER XVII. LIBER I.A.O. (This book has not been published.)
 LIBER XXXVI. THE STAR SAPPHIRE.
 LIBER CLXXXV. LIBER COLLEGII SANCTI. Being the tasks of the Grades and their Oaths proper to Liber XIII.  This is the official Paper of the various grades.  It includes the Task and Oath of a Probationer.
 LIBER CCCXXXIII. THE BOOK OF LIEs

 3 COURSE V - Practicus
 LIBER DXXXVI. BATRACHOPHRENOBOOCOSMOMACHIA.
 LIBER LXVII. THE SWORD OF SONG.

 4 COURSE VI - Philosophus
 LIBER XLVI. THE KEY OF THE MYSTERIES.

 5 COURSE VII Dominus Liminis
 LIBER XCV. THE WAKE WORLD (in Konx Om Pax).

 6 COURSE VIII - Major Adept
 LIBER XLIV. THE MASS OF THE PHCENIX. A Ritual of the Law.
 LIBER XLI. THIEN TAO. An Essay on Attainment by the Way of Equilibrium.  (in Konx Om Pax).

 */

const data = {
    books: [
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
        require('./books/eq1.09').data,
        require('./books/book4.1').data,
        require('./books/eq3.01').data
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
    {last:'Kennedy', other:'Leon Engers'},
    {last:'Lévi', other:'Éliphas'},
    {last:'Ludlow', other:'Fitz Hugh'},
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

if (typeof exports !== 'undefined') exports.data = data;

//exports.data = data;
//export default data;

/*

ILLUSTRATIONS

1.1


1.2

 */