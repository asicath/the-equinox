/*
 Aleister Crowley
 Frank Harris
 J.F.C. Fuller
 E. Whineray, M.P.S.
 Victor B. Neuburg
 G.H.S. Pinsent
 Allen Bennett
 Lord Dunsany
 Norman Roe
 George Raffalovich
 Chas. Baudelaire
 Arthur F. Grimble
 Ethel Archer
 H.G. Ludlow
 Edward Storer
 Mary d'Este Sturges
 S.H. Perry
 Katharine Susannah Prichard
 Herbert Close
 Mrs. Bey
 D. Hamish Jenkins
 Laylah Waddell
 L. E. Kennedy

 need to add photos/paintings

 0 PROBATIONER
 LIBER CCXX. LIBER L VEL LEGIS SUB FIGURA CCXX.
 LIBER CXL (ALEPH) THE BOOK OF WISDOM OR FOLLY.
 LIBER XXV.
 LIBER CCC. A SPECIAL INSTRUCTION for the Promulgation of the Law.
 LIBER ABA (Book 4).
 LIBER CCVII. SYLLABUS. An enumeration of the Official Publications of the AA, with a brief description of the contents of each book.

 1 Neophyte
 LIBER CCXX. LIBER L VEL LEGIS Sub Figura CCXX.
 LIBER VII. LIBER LIBERI VEL LAPIDIS LAZULI
 LIBER LXXVIII.
 LIBER CDLXXIV. LIBER Os ABySMI VEL DAATH.
 LIBER DCCCXI. ENERGIZED ENTHUSIASM.

 2 COURSE IV - Zelator
 LIBER CCXX. LIBER L VEL LEGIS Sub Figura CCXX.
 LIBER CMXIII. LIBER VIA:
 LIBER XVII. LIBER I.A.O.
 LIBER XXXVI. THE STAR SAPPHIRE.
 LIBER CLXXXV. LIBER COLLEGII SANCTI.
 LIBER CCVI. LIBER R V VEL SPIRITUS.
 LIBER CCCXXXIII. THE BOOK OF LIEs
 LIBER DCCCXI. ENERGIZED ENTHUSIASM.

 3 COURSE V - Practicus
 LIBER CCXX. LIBER L VEL LEGIS Sub Figura CCXX.
 LIBER XXVII. LIBER TRIGRAMMATON
 LIBER CCXXXI. LIBER ARCANORUM
 LIBER CD. LIBER TAV VEL KABBAL/E TRIUM LITERARUM Sub Figura CD.
 LIBER LXIV. LIBER ISRAFEL, formerly called ANUBIS.
 LIBER LXXXIV. VEL CHANOKH.
 LIBER DXXXVI. BATRACHOPHRENOBOOCOSMOMACHIA.
 LIBER D. SEPHER SEPHIROTH.
 LIBER LXVII. THE SWORD OF SONG.

 4 COURSE VI - Philosophus
 LIBER CCXX. LIBER L VEL LEGIS Sub Figura CCXX.
 LIBER DCCCXIII. VEL ARARITA Sub Figura DLXX.
 LIBER LIX. ACROSS THE GULE.
 LIBER CCCXXXV. ADONIS.
 LIBER CLXXV. ASTARTE VEL LIBER BERvLLI.
 LIBER XLVI. THE KEY OF THE MYSTERIES.

 5 COURSE VII Dominus Liminis
 LIBER CCXX. LIBER L VEL LEGIS Sub Figura CCXX.
 LIBER XCV. THE WAKE WORLD (in Konx Om Pax).
 LIBER XI. LIBER NV. An instruction for attaining Nuit.
 LIBER DLV. LIBER HAD. An instruction for attaining Hadit.
 LIBER DCCCXXXI. LIBER IOD, formerly called VESTA.

 6 COURSE VIII - Major Adept
 LIBER CCXX. LIBER L VEL LEGIS Sub Figura CCXX.
 LIBER I. LIBER B VEL MAGI. This is an account of the
 LIBER LXVI. LIBER STELLE RUBEE.
 LIBER XLIV. THE MASS OF THE PHCENIX. A Ritual of the Law.
 LIBER XLI. THIEN TAO. An Essay on Attainment by the Way of Equilibrium.
 LIBER DCCCLXVIII. LIBER VIARUM VIE.

 The Exempt Adept will possess a thorough knowledge of all these courses, and present a thesis of his own, as a general
 Epitome of his own Attainment as reflected in the
 sphere of the Mind.

 */

const data = {
    books: [
        require('./books/777').data,
        require('./books/eq1.01').data,
        require('./books/eq1.02').data,
        require('./books/eq1.03').data,
        require('./books/eq1.04').data,
        require('./books/eq1.05').data,
        require('./books/eq1.06').data,
        require('./books/eq1.07').data,
        require('./books/eq1.08').data,
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
    {last:'Jenkins', other:'D. Hamish'},
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