exports.data = {
    title: 'Volume I Number VI',
    pubName: 'Wieland & Co.',
    pubLocation: 'London',
    pubYear: '1911',
    folder: '1.6',
    contents: [
        {
            title: 'COVER, TITLE, AND TABLE OF CONTENTS',
            pageStart: 6,
            pageEnd: 11,
            addPage: [{filename: '_001.jpg'}],
            skip:[9],
            prefix: '_',
            filename: 'cover-title-and-contents'
        },
        {
            title: 'EDITORIAL',
            author: 'crowley',
            pageStart: 1,
            pageEnd: 2
        },
        {
            title: 'LIBER PORTA LVCIS',
            subtitle: 'SVB FIGVRÂ X',
            author: 'crowley',
            pageStart: 3,
            pageEnd: 7,
            pub: 'aa',
            pubClass: 'a',
            number: 10,
            grade: [0]
        },
        {
            title: 'LIBER TVRRIS',
            subtitle: 'VEL DOMVS DEI SVB FIGVRÂ XVI',
            author: 'crowley',
            pageStart: 9,
            pageEnd: 15,
            pub: 'aa',
            pubClass: 'b',
            number: 16,
            grade: [4]
        },
        {
            title: 'LIBER TZADDI',
            subtitle: 'VEL HAMVS HERMETICVS SVB FIGVRÂ XC',
            author: 'crowley',
            pageStart: 17,
            pageEnd: 22,
            pub: 'aa',
            pubClass: 'a',
            number: 90,
            grade: [0]
        },
        {
            title: 'LIBER CHETH',
            subtitle: 'VEL VALLVM ABIEGNI SVB FIGVRÂ CLVI',
            author: 'crowley',
            pageStart: 23,
            pageEnd: 27,
            pub: 'aa',
            pubClass: 'a',
            number: 156,
            grade: [6]
        },
        {
            title: 'LIBER RESH',
            subtitle: 'VEL HELIOS SVB FIGVRÂ CC',
            author: 'crowley',
            pageStart: 29,
            pageEnd: 32,
            pub: 'aa',
            pubClass: 'd',
            number: 200,
            grade: [0]
        },
        {
            title: "LIBER A'ASH",
            subtitle: 'VEL CAPRICORNI PNEVMATICI SVB FIGVRÂ CCCLXX',
            author: 'crowley',
            pageStart: 33,
            pageEnd: 39,
            pub: 'aa',
            pubClass: 'a',
            number: 370,
            grade: [5]
        },

        {
            title: 'THREE POEMS FOR JANE CHÉRON',
            //filename: 'three-poems-for-jane-cheron',
            author: 'crowley',
            pageStart: 41,
            pageEnd: 51,
            skip:[42]
        },
        {
            title: 'CIRCE',
            author: 'archer',
            pageStart: 52,
            pageEnd: 52
        },
        {
            title: 'THE ELECTRIC SILENCE',
            subtitle: 'A synopsis of The Temple of Solomon the King',
            author: 'crowley',
            pageStart: 53,
            pageEnd: 65,
            skip:[54]
        },
        {
            title: 'SONG',
            subtitle: 'COME, LOVE, AWAKEN!',
            author: 'archer',
            pageStart: 66,
            pageEnd: 66
        },
        {
            title: 'THE SCORPION',
            author: 'crowley',
            pageStart: 67,
            pageEnd: 107
        },
        {
            title: 'THE EARTH',
            author: 'crowley',
            pageStart: 108,
            pageEnd: 111
        },
        {
            title: 'SLEEP',
            author: 'archer',
            pageStart: 112,
            pageEnd: 112
        },
        {
            title: 'THE ORDEAL OF IDA PENDRAGON',
            author: 'crowley',
            pageStart: 113,
            pageEnd: 148,
            skip:[114]
        },
        {
            title: 'THE AUTUMN WOODS',
            author: 'neuburg',
            pageStart: 149,
            pageEnd: 152
        },
        {
            title: 'THE DANGERS OF MYSTICISM',
            author: 'crowley',
            pageStart: 153,
            pageEnd: 158
        },
        {
            title: 'REVIEWS',
            pageStart: 159,
            pageEnd: 170
        },
        {
            title: 'THE RITES OF ELEUSIS',
            subtitle: 'AS PERFORMED AT CAXTON HALL WESTMINSTER IN OCTOBER AND NOVEMBER 1910 BY MISS LEILA WADDEL AND MR ALEISTER CROWLEY WITH DISTINGUISHED ASSISTANCE',
            author: ['crowley', 'raffalovich'],
            prefix: 's',
            pageStart: 1,
            pageEnd: 124,
            skip:[2,4,20,22,44,46,48,64,66,80,82,92,94,96,110,112],
            addPage: [
                {filename: 's_001.png'},
                {filename: 's_003.png'},
                {filename: 's_005.png'},
                {filename: 's_006.png'}
            ]
        },
        {
            title: 'ADVERTISEMENTS',
            filename: 'advertisements',
            pageStart: 1,
            pageEnd: 11,
            skip:[10],
            addPage: [
                {filename: '_002.png'},
                {filename: '_003.png'},
                {filename: '_004.png'},
                {filename: '_005.png'}
            ],
            prefix: 'xad',
            pageInfo: 'ads'
        }
    ]
};