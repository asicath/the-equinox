exports.data = {
    title: 'Volume I Number VIII',
    pubName: 'Wieland & Co.',
    pubLocation: 'London',
    pubYear: '1912',
    folder: '1.8',
    contents: [
        {
            title: 'COVER, TITLE, AND TABLE OF CONTENTS',
            pageStart: 17,
            pageEnd: 21,
            skip: [18],
            addPage: [
                {filename: '_cover.jpg'},
                // Table of contents is within numbered pages this time
                {filename: '001.png', after: '_008.png'},
                {filename: '002.png', after: '_008.png'}
            ],
            prefix: '_',
            filename: 'cover-title-and-contents'
        },
        {
            title: 'PRONOUNCEMENT BY THE CHANCELLOR OF THE A∴A∴',
            pageStart: 2,
            pageEnd: 4,
            prefix: '_'
        },
        {
            // I.N.R.I. (Manifesto of O.T.O.: revised)
            // I.N.R.I. - BRITISH SECTION OF THE ORDER OF ORIENTAL TEMPLARS O.T.O. M∴M∴M∴
            title: 'ORDER OF ORIENTAL TEMPLARS',
            subtitle: 'MYSTERIA MYSTICA MAXIMA',
            author: 'crowley',
            pageStart: 5,
            pageEnd: 15,
            skip: [6],
            prefix: '_'
        },
        {
            title: 'EDITORIAL, NO VIII',
            author: 'crowley',
            pageStart: 23,
            pageEnd: 26,
            prefix: '_'
        },
        {
            title: 'ΘΕΛΗΜΑ. A TONE-TESTAMENT',
            author: [{name: 'waddell', role:'Music By'}, {name: 'crowley', role:'Homage Preliminary'}],
            pageStart: 27,
            pageEnd: 36,
            skip: [28, 32],
            addPage: [
                {filename: '_032-web.jpg', after: '_031.png'}
            ],
            prefix: '_',
            filename: 'thelema-a-tone-testament'
        },
        {
            title: 'THREE POEMS',
            author: 'neuburg',
            pageStart: 1,
            pageEnd: 4,
            addPage: [
                {filename: '_037.png'},
                {filename: '_039.png'},
                {filename: '_040.png'}
                ]
        },
        {
            title: 'THE TEMPLE OF SOLOMON THE KING',
            subtitle: 'PART VII',
            author: 'crowley',
            pageStart: 5,
            pageEnd: 48,
            skip: [6],
            addPage: [
                {filename: '032.jpg', after: '032.png'}
            ],
            pub: 'aa',
            pubClass: 'b',
            filename: 'the-temple-of-solomon-the-king-part-7'
        },

        {
            title: 'HIS SECRET SIN',
            author: 'crowley',
            pageStart: 49,
            pageEnd: 60,
            skip: [50]
        },
        {
            title: 'LONG ODDS',
            author: 'crowley',
            pageStart: 61,
            pageEnd: 62
        },
        {
            title: 'DOCTOR BOB',
            subtitle: 'A SKETCH',
            author: ['sturges', 'crowley'],
            pageStart: 63,
            pageEnd: 77
        },
        {
            title: 'IN LIMINE',
            subtitle: 'IGNOTLUM PER IGNOTIUS',
            author: 'archer',
            pageStart: 78,
            pageEnd: 78
        },
        {
            title: 'THE WOODCUTTER',
            author: 'crowley',
            pageStart: 79,
            pageEnd: 87,
            skip: [80]
        },
        {
            title: 'LA FOIRE',
            author: 'crowley',
            pageStart: 89,
            pageEnd: 90
        },
        {
            title: 'PROFESSOR ZIRCON',
            author: 'crowley',
            pageStart: 91,
            pageEnd: 98
        },
        {
            title: 'A BRIEF ABSTRACT OF THE SYMBOLIC REPRESENTATION OF THE UNIVERSE',
            subtitle: 'DERIVED BY DOCTOR JOHN DEE THROUGH THE SKRYING OF SIR EDWARD KELLY. (LIBER LXXXIV VEL CHANOKH). PART II. THE FORTY-EIGHT CALLS.',
            author: {name: 'crowley', role:'editor'},
            pageStart: 99,
            pageEnd: 128,
            filename: 'a-brief-abstract-of-the-symbolic-representation-of-the-universe-part-2',

            pub: 'aa',
            pubClass: 'b',
            number: 84,
            grade: [3]
        },
        {
            title: 'STEPNEY',
            author: 'crowley',
            pageStart: 129,
            pageEnd: 130
        },
        {
            title: 'THE TELL-TALE HEART',
            subtitle: 'ADAPTED FROM THE STORY OF E. A. POE',
            author: {name: 'crowley', role:'adaptor'},
            pageStart: 131,
            pageEnd: 141
        },
        {
            title: 'SORITES',
            author: 'crowley',
            pageStart: 142,
            pageEnd: 142
        },
        {
            title: 'A DESCRIPTION OF THE CARDS OF THE TAROT',
            subtitle: 'WITH THEIR ATTRIBUTIONS; INCLUDING A METHOD OF DIVINATION BY THEIR USE (LIBER LXXVIII)',
            author: {name: 'crowley', role:'editor'},
            pageStart: 143,
            pageEnd: 210,
            addPage: [
                {filename: '145image.png', after: '143.png'}
            ],
            skip: [144],

            pub: 'aa',
            pubClass: 'b',
            number: 78,
            grade: [1],
        },
        {
            title: 'ON—ON—"POET"',
            author: 'sturges',
            pageStart: 211,
            pageEnd: 214,
            filename: 'on-on-poet'
        },
        {
            title: 'ELDER EEL',
            subtitle: 'A SKETCH',
            author: 'crowley',
            pageStart: 215,
            pageEnd: 229,
            skip: [216]
        },
        {
            title: 'THE SPADGER',
            author: 'crowley',
            pageStart: 230,
            pageEnd: 230
        },
        {
            title: 'TO PERSIS',
            author: 'jenkins',
            pageStart: 231,
            pageEnd: 232
        },
        {
            title: "WAITE'S WET OR THE BACKSLIDER'S RETURN",
            author: 'crowley',
            pageStart: 233,
            pageEnd: 242
        },
        {
            title: 'MY CRAPULOUS CONTEMPORARIES NO. VI',
            subtitle: 'AN OBITUARY',
            author: 'crowley',
            pageStart: 243,
            pageEnd: 249,
            skip: [244]
        },
        {
            title: 'THE NEW EVELYN HOPE',
            author: 'neuburg',
            pageStart: 250,
            pageEnd: 252
        },
        {
            title: 'REVIEWS',
            author: 'crowley',
            pageStart: 253,
            pageEnd: 257
        },
        {
            title: 'SEPHER SEPHIROTH',
            subtitle: 'SVB FIGVRÂ D (ὁ ἀριθμός)',
            author: ['bennett', 'crowley', 'others'], // OTHERS as stated in the editorial note
            pageStart: 1,
            pageEnd: 101,
            addPage: [
                {filename: 's_001.png'},
                {filename: 's_002.png'},
                {filename: 's_003.png'},
                {filename: 's_004.png'},
                {filename: 's_005.png'},
                {filename: 's_007.png'},
                {filename: 's_008.png'},
                {filename: 's_009.png'},
                {filename: 's_010.png'},
                {filename: 's_011.png'},
                {filename: 's_012.png'},
                {filename: 's_013.png'},
                {filename: 's_014.png'},
                {filename: 's_015.png'},
                {filename: 's_016.png'}
            ],
            pub: 'aa',
            pubClass: 'b',
            number: 500,
            grade: [3],
            prefix: 's'
        },
        {
            title: 'ADVERTISEMENTS',
            filename: 'advertisements',
            pageStart: 1,
            pageEnd: 22,
            addPage: [
                {
                    filename: '_back.jpg',
                    after: 'z022.png'
                }
            ],
            prefix: 'z',
            pageInfo: 'ads'
        }
    ]
};