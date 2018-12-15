exports.data = {
    title: 'Volume I Number VII',
    pubName: 'Wieland & Co.',
    pubLocation: 'London',
    pubYear: '1912',
    folder: '1.7',
    contents: [
        {
            title: 'COVER, TITLE, AND TABLE OF CONTENTS',
            pageStart: 5,
            pageEnd: 8,
            addPage: [
                {filename: '_cover.jpg'},
                // Table of contents is within numbered pages this time
                {filename: '001.png', after:'_008.png'},
                {filename: '002.png', after:'_008.png'}
            ],
            prefix: '_',
            filename: 'cover-title-and-contents'
        },
        {
            title: 'LIBER E. SUPPLEMENTARY INSTRUCTION IN ASANA IMAGES',
            subtitle: 'PRONOUNCEMENT BY THE CHANCELLOR OF THE AA',
            pageStart: 3,
            pageEnd: 4,
            addPage: [{filename: '_e1image.jpg'}, {filename: '_e2image.jpg'}],
            prefix: '_',
            filename: 'liber-e-supplement'
        },
        {
            title: 'ALEISTER CROWLEY',
            author: 'john',
            addPage: [
                {filename: 'frontispiece.jpg'}
            ]
        },
        {
            title: 'EDITORIAL, NO VII',
            author: 'sturges',
            pageStart: 3,
            pageEnd: 4
        },
        {
            title: 'LIBER B',
            subtitle: 'VEL MAGI SVB FIGVRÂ I',
            author: 'crowley',
            pageStart: 5,
            pageEnd: 9,
            pub: 'aa',
            pubClass: 'a',
            number: 1,
            grade: [6]
        },
        {
            title: 'LIBER NV',
            subtitle: 'SVB FIGVRÂ XI',
            author: 'crowley',
            pageStart: 11,
            pageEnd: 20,
            pub: 'aa',
            pubClass: 'd',
            number: 11,
            grade: [5]
        },
        {
            title: 'LIBER ISRAFEL',
            subtitle: 'SVB FIGVRÂ LXIV. FORMERLY CALLED "ANUBIS"',
            author: 'crowley',
            pageStart: 21,
            pageEnd: 27,
            pub: 'aa',
            pubClass: 'b',
            number: 64,
            grade: [3]
        },
        {
            title: 'LIBER STELLÆ RUBEÆ',
            subtitle: 'A secret ritual of Apep, the Heart of IAO-OAI, delivered unto V.V.V.V.V. for his use in a certain matter of Liber Legis, and written down under the figure LXVI',
            author: 'crowley',
            pageStart: 29,
            pageEnd: 36,
            pub: 'aa',
            pubClass: 'a',
            number: 66,
            grade: [6],
            filename: 'liber-stellae-rubeae'
        },
        {
            title: 'ASTARTÉ',
            subtitle: 'VEL LIBER BERYLLI SVB FIGVRÂ CLXXV',
            author: 'crowley',
            pageStart: 37,
            pageEnd: 58,
            pub: 'aa',
            pubClass: 'd',
            number: 175,
            grade: [4]
        },
        {
            title: 'LIBER RV',
            subtitle: 'VEL SPIRITV̂S SVB FIGVRÂ CCVI',
            author: 'crowley',
            pageStart: 59,
            pageEnd: 67,
            addPage: [{filename: '062image.jpg', after: '062.png'}],
            pub: 'aa',
            pubClass: 'd',
            number: 206,
            grade: [2]
        },

        // Liber CCXXXI, (XXII Domarum et XXII Carcerorum)
        // LIBER XXII DOMARUM MERCURII CUM SUIS GENIIS
        // LIBER XXII CARCERORUM QLIPHOTH CUM SUIS GENIIS
        {
            title: 'LIBER ARCANORUM τών ATV τού TAHVTI QUAS VIDIT ASAR IN AMENNTI SVB FIGVRÂ CCXXXI. LIBER CARCERORVM τών QLIPHOTH CVM SUIS GENIIS. ADDVNTVR SIGILLA ET NOMINA EORVM.',
            //subtitle: '',
            author: 'crowley',
            pageStart: 69,
            pageEnd: 74,
            addPage: [{filename: '070image-side.png', after: '070.png'}],
            pub: 'aa',
            pubClass: 'a',
            number: 231,
            grade: [3],
            filename: 'liber-ccxxxi'
        },
        {
            title: 'LIBER TAV',
            subtitle: 'VEL KABBALÆ TRIVM LITERARUM SVB FIGVRÂ CD',
            author: 'crowley',
            pageStart: 75,
            pageEnd: 76,
            addPage: [{filename: '076image.png', after: '076.png'}],
            pub: 'aa',
            pubClass: 'a',
            number: 400,
            grade: [3]
        },
        {
            title: 'LIBER OS ABYSMI',
            subtitle: 'VEL DAATH SVB FIGVRÂ CDLXXIV',
            author: 'crowley',
            pageStart: 77,
            pageEnd: 81,
            pub: 'aa',
            pubClass: 'c',
            number: 474,
            grade: [1]
        },
        {
            title: 'LIBER H A D',
            subtitle: 'SVB FIGVRÂ DLV',
            author: 'crowley',
            pageStart: 83,
            pageEnd: 91,
            pub: 'aa',
            pubClass: 'd',
            number: 555,
            grade: [5],
            filename: 'liber-had'
        },
        {
            title: 'LIBER YOD',
            subtitle: 'SVB FIGVRÂ DCCCXXXI. FORMERLY CALLED "VESTA"',
            author: 'crowley',
            pageStart: 93,
            pageEnd: 100,
            pub: 'aa',
            pubClass: 'd',
            number: 831,
            grade: [5]
        },
        {
            title: 'LIBER VIARVM VIÆ',
            subtitle: 'SVB FIGVRÂ DCCCLXVIII',
            author: 'crowley',
            pageStart: 101,
            pageEnd: 103,
            pub: 'aa',
            pubClass: 'b',
            number: 868,
            grade: [6],
            filename: 'liber-viarum-viae'
        },
        {
            title: 'LIBER תישארב',
            subtitle: 'VIÆ MEMORIÆ SVB FIGVRÂ CMXIII',
            author: 'crowley',
            pageStart: 105,
            pageEnd: 116,
            pub: 'aa',
            pubClass: 'b',
            number: 913,
            grade: [2],
            filename: 'liber-thisarb'
        },

        {
            title: 'ADONIS',
            subtitle: 'AN ALLEGORY',
            author: 'crowley',
            pageStart: 117,
            pageEnd: 157,
            pub: 'aa',
            number: 335,
            grade: 4
        },
        {
            title: 'THE GHOULS',
            subtitle: 'CROQUIS DE CROQUE-MITAINE',
            author: 'crowley',
            pageStart: 159,
            pageEnd: 178
        },
        {
            title: 'THE FOUR WINDS',
            //subtitle: '',
            author: 'crowley',
            pageStart: 179,
            pageEnd: 180
        },
        {
            title: 'INDEPENDENCE',
            //subtitle: '',
            author: 'crowley',
            pageStart: 181,
            pageEnd: 181
        },
        {
            title: 'SNOWSTORM',
            subtitle: 'A TRAGEDY',
            author: 'crowley',
            pageStart: 183,
            pageEnd: 228
        },

        {
            title: 'A BRIEF ABSTRACT OF THE SYMBOLIC REPRESENTATION OF THE UNIVERSE',
            subtitle: 'DERIVED BY DOCTOR JOHN DEE THROUGH THE SKRYING OF SIR EDWARD KELLY. (LIBER LXXXIV VEL CHANOKH). PART I.',
            author: {name: 'crowley', role:'editor'},
            pageStart: 229,
            pageEnd: 243,
            filename: 'a-brief-abstract-of-the-symbolic-representation-of-the-universe-part-1',
            addPage: [
                {filename: '230image.png', after: '230.png'},
                {filename: '232image.png', after: '232.png'},
                {filename: '234image-1.png', after: '234.png'},
                {filename: '234image-2.png', after: '234.png'},
                {filename: '234image-3.png', after: '234.png'},
                {filename: '234image-4.png', after: '234.png'},
                {filename: '234image-5.png', after: '234.png'},
                {filename: '234image-6.png', after: '234.png'},
                {filename: '238image.png', after: '238.png'},
                {filename: '242image.png', after: '242.png'}
            ],
            pub: 'aa',
            pubClass: 'b',
            number: 84,
            grade: [3]
        },

        {
            title: 'APOLLO BESTOWS THE VIOLIN',
            subtitle: 'A STORY FOR THE STAGE',
            author: 'crowley',
            pageStart: 244,
            pageEnd: 248
        },
        {
            title: 'DIANA OF THE INLET',
            //subtitle: '',
            author: 'prichard',
            pageStart: 249,
            pageEnd: 290,
            skip: [250]
        },
        {
            title: 'SILENCE',
            //subtitle: '',
            author: 'archer',
            pageStart: 290,
            pageEnd: 290
        },
        {
            title: 'MEMORY OF LOVE',
            //subtitle: '',
            author: 'close',
            pageStart: 291,
            pageEnd: 291
        },
        {
            title: 'ACROSS THE GULF',
            //subtitle: '',
            author: 'crowley',
            pageStart: 293,
            pageEnd: 354,
            skip:[294],

            pub: 'aa',
            pubClass: 'c',
            number: 59,
            grade: [4]
        },
        {
            title: 'THE TEMPLE OF SOLOMON THE KING',
            subtitle: 'PART VI',
            author: 'crowley',
            pageStart: 355,
            pageEnd: 400,
            //skip: [42],
            addPage: [
                {filename: '368image.jpg', after: '368.png'},
                {filename: '368image-back.png', after: '368.png'},
                {filename: '369image-back.png', after: '368.png'},
                {filename: '369image.jpg', after: '368.png'},
                {filename: '386image.png', after: '386.png'},
                {filename: '400a.png', after: '400.png'}
            ],
            pub: 'aa',
            pubClass: 'b',
            filename: 'the-temple-of-solomon-the-king-part-6'
        },


        {
            title: 'MY CRAPULOUS CONTEMPORARIES NO. V',
            subtitle: 'THE BISMARK OF BATTERSEA',
            author: 'crowley',
            pageStart: 401,
            pageEnd: 406,
            skip: [402]
        },
        {
            title: 'ARTHUR IN THE AREA AGAIN!',
            //subtitle: '',
            author: 'crowley',
            pageStart: 407,
            pageEnd: 409
        },
        {
            title: 'THE BIG STICK',
            subtitle: 'REVIEWS',
            author: 'crowley',
            pageStart: 411,
            pageEnd: 417,
            skip: [412]
        },
        {
            title: 'A BIRTHDAY',
            //subtitle: '',
            author: 'crowley',
            pageStart: 419,
            pageEnd: 424
        },

        {
            title: 'ADVERTISEMENTS',
            filename: 'advertisements',
            pageStart: 1,
            pageEnd: 15,
            skip:[14],
            addPage: [
                {filename: '_002.png'},
                {
                    filename: '_back.jpg',
                    after: 'xad015.png'
                }
            ],
            prefix: 'xad',
            pageInfo: 'ads'
        }

    ]
};