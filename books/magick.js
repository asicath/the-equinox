exports.data = {
    title: 'MAGICK',
    subtitle: 'IN THEORY AND PRACTICE',
    pubName: 'Lecram Press',
    pubLocation: 'Paris',
    pubYear: '1929',
    folder: 'book4/3',
    creditFilename: 'credits-magick.pdf',
    images: [
        'magick4_cover.jpg'
    ],
    links: [
        {text: 'info', url: 'https://www.100thmonkeypress.com/biblio/acrowley/books/magick_in_theory_1_1929/magick_in_theory_1_1929.htm'}
    ],
    contents: [

        {
            title: 'HYMN TO PAN',
            prefix:'_',
            pageStart: 5,
            pageEnd: 9,
            skip: [6]
        },
        {
            title: 'INTRODUCTION',
            prefix:'_',
            pageStart: 11,
            pageEnd: 29,
            skip: [12]
        },
        {
            title: 'CONTENTS',
            prefix:'_',
            pageStart: 31,
            pageEnd: 31
        },
        // TODO INSERT LAMEN HERE

        // section 1
        { pageStart:   1, pageEnd:  10, title: 'O The Magical Theory of the Universe.' },
        { pageStart:  11, pageEnd:  15, title: 'I The Principles of Ritual.' },
        { pageStart:  16, pageEnd:  21, title: 'II The Formulæ of the Elemental Weapons.' },
        { pageStart:  22, pageEnd:  23, title: 'III The Formula of Tetragrammaton.' },
        { pageStart:  24, pageEnd:  27, title: 'IV The Formula of Alhim: also that of Alim.' },
        { pageStart:  28, pageEnd:  38, title: 'V The Formula of I. A. O.' },
        { pageStart:  39, pageEnd:  40, title: 'VI The Formula of the Neophyte.' },
        { pageStart:  41, pageEnd:  59, title: 'VII The Formula of the Holy Graal: of Abrahadabra: and of certain other Words. Also: The Magical Memory.' },
        { pageStart:  60, pageEnd:  67, title: 'VIII Of Equilibrium, and of the General and Particular Method of Preparation of the Furniture of the Temple and of the Instruments of Art.' },
        { pageStart:  68, pageEnd:  78, title: 'IX Of Silence and Secrecy : and of the Barbarous names of Evocation' },
        { pageStart:  79, pageEnd:  87, title: 'X Of the Gestures.' },
        { pageStart:  88, pageEnd:  91, title: 'XI Of Our Lady Babalon and of The Beast Whereon she Rideth. Also concerning Transformations.' },
        { pageStart:  92, pageEnd: 100, title: 'XII Of the Bloody Sacrifice: and Matters Cognate.' },
        { pageStart: 101, pageEnd: 105, title: 'XIII Of the Banishings: And of the Purifications.' },
        { pageStart: 106, pageEnd: 122, title: 'XIV Of the Consecrations: With an account of the Nature and Nurture of the Magical Link.' },

        // section 2
        { pageStart: 123, pageEnd: 128, title: 'XVI (Part I) Of the Oath.' },
        { pageStart: 129, pageEnd: 132, title: 'XV Of the Invocation.' },
        { pageStart: 133, pageEnd: 138, title: 'XVI (Part II) Of the Charge to the Spirit: with some Account of the Constraints and Curses occasionally necessary.' },
        { pageStart: 139, pageEnd: 142, title: 'XVII Of the License to Depart.' },
        { pageStart: 143, pageEnd: 176, title: 'XVIII Of Clairvoyance and of the Body of Light, its Powers and its Development. Also concerning Divination.' },
        { pageStart: 177, pageEnd: 178, title: 'XIX Of Dramatic Rituals.' },
        { pageStart: 179, pageEnd: 189, title: 'XX Of the Eucharist and of the Art of Alchemy.' },
        { pageStart: 190, pageEnd: 205, title: 'XXI Of Black Magick: of the Main Types of the Operations of Magick Art: and of the Powers of the Sphinx.' },


        // section 4
        {
            title: 'COVER - SECTION VI, PRINTER MARK',
            pageStart: 438,
            pageEnd: 438,
            addPage: [
                {filename: '_cover.jpg'}
            ],
        },
        {
            title: 'A FEW OF THE PRINCIPAL CORRESPONDENCES OF THE QABALAH',
            subtitle: 'REPRINTED WITH ADDITIONS FROM 777',
            pageStart: 303,
            pageEnd: 324
        },
        {
            title: 'Grimorium Sanctissimum',
            pub: 'oto',
            pageStart: 325,
            pageEnd: 326
        },
        {
            title: 'LIBER XXV, THE STAR RUBY',
            pageStart: 327,
            pageEnd: 327,
            pub: 'aa',
            pubClass: 'd',
            number: 25,
            grade: 0
        },
        {
            title: 'LIBER XXXVI, THE STAR SAPPHIRE',
            pageStart: 328,
            pageEnd: 328,
            pub: 'aa',
            pubClass: 'd',
            number: 36,
            grade: 2
        },
        {
            title: 'LIBER XLIV, THE MASS OF THE PHOENIX',
            pageStart: 329,
            pageEnd: 330,
            pub: 'aa',
            pubClass: 'd',
            number: 44,
            grade: 6
        },
        {
            title: 'LIBER V vel REGULAI',
            pageStart: 331,
            pageEnd: 344,
            pub: 'aa',
            pubClass: 'd',
            number: 5,
            grade: [0,1,2,3,4,5,6]
        },
        {
            title: 'LIBER XV, O. T. O., ECCLESIÆ GNOSTICÆ CATHOLICÆ, CANON MISSÆ',
            pageStart: 345,
            pageEnd: 361,
            pub: 'oto',
            number: 15
        },
        {
            title: 'LIBER HHH',
            subtitle: 'SUB FIGURA CCCXLI',
            pageStart: 362,
            pageEnd: 367,
            pub: 'aa',
            pubClass: 'd',
            number: 341,
            grade: [2]
        },
        {
            title: 'LIBER E, vel EXERCITIORUM',
            subtitle: 'SUB FIGURA IX',
            pageStart: 368,
            pageEnd: 374,
            pub: 'aa',
            pubClass: 'b',
            number: 9,
            grade: [0, 1],
        },
        {
            title: 'LIBER O vel MANUS ET SAGITTÆ',
            subtitle: 'SUB FIGURA VI',
            pageStart: 375,
            pageEnd: 389,
            addPage: [
                {filename: '374image.png', before: '375.png'}
            ],
            pub: 'aa',
            pubClass: 'b',
            number: 6,
            grade: [0, 1]
        },
        {
            title: 'LIBER ASTARTE vel BERYLLI',
            pageStart: 390,
            pageEnd: 404,
            pub: 'aa',
            pubClass: 'd',
            number: 175,
            grade: [4]
        },
        {
            title: 'LIBER RV vel SPIRITUS',
            subtitle: 'SUB FIGURA CCVI',
            pageStart: 405,
            pageEnd: 409,
            pub: 'aa',
            pubClass: 'd',
            number: 206,
            grade: [2]
        },
        {
            title: 'LIBER YOD',
            subtitle: 'SUB FIGURA DCCCXXI',
            pageStart: 410,
            pageEnd: 414,
            pub: 'aa',
            pubClass: 'd',
            number: 831,
            grade: [5]
        },
        {
            title: 'LIBER תישארב vel THISHARB',
            subtitle: 'SUB FIGURA CMXIII',
            pageStart: 415,
            pageEnd: 422,
            pub: 'aa',
            pubClass: 'b',
            number: 913,
            grade: [2],
            filename: 'liber-thisharb'
        },


        {
            title: 'LIBER B vel MAGI',
            subtitle: 'SUB FIGURA I',
            pageStart: 423,
            pageEnd: 424,
            pub: 'aa',
            pubClass: 'a',
            number: 1,
            grade: [6]
        },
        {
            title: 'LIBER RESH vel HELIOS',
            subtitle: 'SUB FIGURA CC',
            pageStart: 425,
            pageEnd: 426,
            pub: 'aa',
            pubClass: 'd',
            number: 200,
            grade: [0]
        },
        {
            title: 'LIBER III vel JUGORUM',
            pageStart: 427,
            pageEnd: 429,
            pub: 'aa',
            pubClass: 'd',
            number: 3,
            grade: [2]
        },
        {
            title: 'LIBER CHETH vel VALLUM ABIEGNI',
            subtitle: 'SUB FIGURA CLVI',
            pageStart: 430,
            pageEnd: 431,
            pub: 'aa',
            pubClass: 'a',
            number: 156,
            grade: [6]
        },
        {
            title: 'LIBER AʼASH CAPRICORNI PNEUMATICI',
            subtitle: 'SUB FIGURA CCCLXX',
            pageStart: 432,
            pageEnd: 434,
            pub: 'aa',
            pubClass: 'a',
            number: 370,
            grade: [5],
            filename: 'liber-aash-capricorni-pneumatici'
        },
        {
            title: 'LIBER A vel ARMORUM',
            subtitle: 'SUB FIGURA CCCXII',
            pageStart: 435,
            pageEnd: 436,
            pub: 'aa',
            pubClass: 'd',
            number: 412,
            grade: [1]
        }
    ],
    publish: {
        instructions:[

        ]
    }
};