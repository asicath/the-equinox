exports.data = {
    title: 'Volume I Number X',
    pubName: 'Wieland & Co.',
    pubLocation: 'London',
    pubYear: '1913',
    folder: '1.10',
    contents: [
        {
            title: 'COVER, TITLE, AND TABLE OF CONTENTS',
            pageStart: 1,
            pageEnd: 3,
            addPage: [{filename: '_cover.jpg'}],
            skip:[2],
            prefix: '_',
            filename: 'cover-title-and-contents'
        },
        {
            title: 'ALEISTER CROWLEY',
            author: 'murchison',
            addPage: [{filename: '001image.png'}],
            pageInfo: 'frontispiece'
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
            prefix: '_',
            pub: 'oto'
        },
        {
            title: 'IN MEMORIAM — JOHN YARKER',
            pageStart: 17,
            pageEnd: 39,
            skip: [18],
            prefix: '_',
            pub: 'oto'
        },
        {
            title: 'EDITORIAL',
            author: 'crowley',
            pageStart: 5,
            pageEnd: 8
        },
        {
            title: 'LIBER L.',
            subtitle: 'VEL LEGIS SVB FIGVRÂ CCXX AS DELIVERED BY LXXVIII VNTO DCLXVI',
            pageStart: 9,
            pageEnd: 33,
            pub: 'aa',
            pubClass: 'a',
            number: 220,
            grade: [0, 1, 2, 3, 4, 5, 6]
        },

        {
            title: 'LIBER BATRACHOPHRENOBOOCOSMOMACHIA',
            subtitle: 'SUB FIGURA DXXXVI',
            author: 'crowley',
            pageStart: 35,
            pageEnd: 40,
            pub: 'aa',
            pubClass: 'b',
            number: 536,
            grade: [3]
        },
        {
            title: 'A SYLLABUS OF THE OFFICIAL INSTRUCTIONS OF A∴A∴',
            author: 'crowley',
            pageStart: 41,
            pageEnd: 56,
            skip: [42],
            pub: 'aa',
            pubClass: 'd',
            number: 207,
            grade: [0]
        },
        {
            title: 'THE SHIP',
            subtitle: 'A MYSTERY PLAY',
            author: 'crowley',
            pageStart: 57,
            pageEnd: 79,
            pub: 'oto'
        },
        {
            title: 'AS IN A GLASS, DARKLY',
            author: 'grimble',
            pageStart: 80,
            pageEnd: 80
        },
        {
            title: 'TWO FRAGMENTS OF RITUAL',
            subtitle: 'THE SUPREME RITUAL & A RITUAL TO INVOKE HICE OR ANY OTHER DIVINE ONE',
            author: 'crowley',
            pageStart: 81,
            pageEnd: 90,
            skip: [82],
        },
        {
            title: 'THE DISCIPLES',
            author: 'crowley',
            pageStart: 91,
            pageEnd: 92
        },
        {
            title: 'THE TEMPLE OF SOLOMON THE KING',
            subtitle: 'PART IX',
            author: 'crowley',
            pageStart: 93,
            pageEnd: 125,
            skip: [94],
            addPage: [
                {filename: '095image.png', before:'095.png'}
                ],
            pub: 'aa',
            pubClass: 'b',
            filename: 'the-temple-of-solomon-the-king-part-9'
        },
        {
            title: 'ROSA IGNOTA',
            subtitle: 'A POEM FOR PILGRIMS',
            author: 'neuburg',
            pageStart: 127,
            pageEnd: 198,
            skip: [128, 130],
        },
        {
            title: 'THE GAME OF CROWLEY',
            author: 'crowley',
            pageStart: 199,
            pageEnd: 200
        },
        {
            title: 'BOO TO BUDDHA!',
            author: 'crowley',
            pageStart: 201,
            pageEnd: 203
        },
        {
            title: 'CROWLEY POOL',
            author: 'crowley',
            pageStart: 204,
            pageEnd: 205
        },
        {
            title: 'HYMN TO SATAN',
            author: 'crowley',
            pageStart: 206,
            pageEnd: 206
        },
        {
            title: 'A BALLAD OF BEDLAM',
            author: 'archer',
            pageStart: 207,
            pageEnd: 209
        },
        {
            title: 'DEAD WEIGHT',
            author: 'crowley',
            pageStart: 211,
            pageEnd: 223
        },
        {
            title: 'THE BIG STICK',
            //author: 'crowley',
            pageStart: 225,
            pageEnd: 233,
            skip: [226],
        },
        {
            title: 'TO LAYLAH EIGHT-AND-TWENTY',
            author: 'crowley',
            pageStart: 235,
            pageEnd: 236
        },
        {
            title: 'INDEX TO VOLUME I',
            pageStart: 237,
            pageEnd: 244,
            skip: [242],
        },

        {
            title: 'THE KEY OF THE MYSTERIES',
            subtitle: '(LA CLEF DES GRANDS MYSTÈRES)',
            author: ['lévi', {name:'crowley', role:'translator'}],
            prefix: 's',
            pageStart: 1,
            pageEnd: 290,
            addPage: [
                {filename: 's_001.png'},
                {filename: 's_003.png'},
                {filename: 's291.png'}, // TOC
                {filename: 's_005.png'},
                {filename: 's_006.png'},
                {filename: 's_007.png'},
                {filename: 's_008.png'},
                {filename: 's_009.png'},
                {filename: 's_011.png'},
                {filename: 's_012.png'},
                {filename: 's_013.png'},
                {filename: 's_014.png'},
                {filename: 's_015.png'}
                ],
            pub: 'aa',
            number: 46,
            grade: [4]
        },
        {
            title: 'ADVERTISEMENTS',
            filename: 'advertisements',
            pageStart: 1,
            pageEnd: 23,
            prefix: 'x',
            pageInfo: 'ads'
        }
    ]
};