exports.data = {
    title: 'Volume I Number II',
    pubName: 'Simpkin, Marshall, Hamilton, Kent & CO. LTD.',
    pubLocation: 'London',
    pubYear: '1909',
    folder: '1.2',
    contents: [
        {
            title: 'COVER, TITLE, AND TABLE OF CONTENTS',
            pageStart: 1,
            pageEnd: 5,
            addPage: [{filename: '_cover.jpg'}],
            prefix: '_',
            filename: 'cover-title-and-contents'
        },
        {
            title: 'EDITORIAL',
            author: ['crowley', 'fuller'],
            pageStart: 1,
            pageEnd: 10,
            filename: 'editorial'
        },
        {
            title: 'LIBER O',
            subtitle: 'VEL MANVS ET SAGITTAE SVB FIGVRA VI',
            author: 'crowley',
            pageStart: 11,
            pageEnd: 30,
            addPage: [{filename: '012image.png', after: '012.png'}],
            pub: 'aa',
            pubClass: 'b',
            number: 6,
            grade: [0, 1],
            filename: 'liber-o'
        },
        {
            title: 'THE HERB DANGEROUS',
            subtitle: '(PART II) THE PSYCHOLOGY OF HASHISH',
            author: 'crowley',
            pageStart: 31,
            pageEnd: 89,
            skip: [32],
            filename: 'the-herb-dangerous-part-2'
        },
        {
            title: 'THE GARDEN OF JANUS',
            author: 'crowley',
            pageStart: 91,
            pageEnd: 103,
            skip: [92],
            filename: 'the-garden-of-janus'
        },
        {
            title: 'THE DREAM CIRCEAN',
            author: 'crowley',
            pageStart: 105,
            pageEnd: 130,
            skip: [106],
            filename: 'the-dream-circean'
        },
        {
            title: 'THE LOST SHEPHERD',
            author: 'neuburg',
            pageStart: 131,
            pageEnd: 136,
            skip: [106],
            filename: 'the-lost-shepherd'
        },
        {
            title: 'A HANDBOOK OF GEOMANCY',
            subtitle: 'LIBER GAIAS',
            author: {name: 'crowley', role:'reviser'},
            pageStart: 137,
            pageEnd: 161,
            pub: 'aa',
            pubClass: 'b',
            number: 96,
            grade: 1,
            filename: 'a-handbook-of-geomancy'
        },
        {
            title: "THE ORGAN IN KING'S CHAPEL, CAMBRIDGE",
            author: 'pinsent',
            pageStart: 162,
            pageEnd: 162,
            filename: 'the-organ-in-kings-chapel-cambridge'
        },
        {
            title: 'A NOTE ON GENESIS',
            author: ['bennett', {name: 'crowley', role:'preface'}],
            pageStart: 163,
            pageEnd: 185,
            pub: 'aa',
            pubClass: 'c',
            number: 2911,
            grade: 3,
            filename: 'a-note-on-genesis'
        },
        {
            title: 'THE FIVE ADORATIONS',
            author: 'crowley',
            pageStart: 186,
            pageEnd: 186,
            filename: 'the-five-adorations'
        },
        {
            title: "ILLUSION D'AMOUREUX",
            author: 'crowley',
            pageStart: 187,
            pageEnd: 190,
            filename: 'illusion-damoureux'
        },
        {
            title: "THE OPIUM-SMOKER",
            subtitle: '(IN EIGHT FUGUES)',
            author: 'crowley',
            pageStart: 191,
            pageEnd: 195,
            filename: 'the-opium-smoker'
        },
        {
            title: "POSTCARDS TO PROBATIONERS",
            author: 'crowley',
            pageStart: 196,
            pageEnd: 200,
            filename: 'postcards-to-probationers'
        },
        {
            title: "THE WILD ASS",
            author: 'crowley',
            pageStart: 201,
            pageEnd: 204,
            filename: 'the-wild-ass'
        },
        {
            title: "THE SPHINX AT GIZAH",
            author: 'dunsany',
            pageStart: 205,
            pageEnd: 208,
            skip: [206],
            filename: 'the-sphinx-at-gizah'
        },
        {
            title: "THE PRIESTESS OF PANORMITA",
            author: 'crowley',
            pageStart: 209,
            pageEnd: 216,
            filename: 'the-priestess-of-panormita'
        },

        {
            title: "THE TEMPLE OF SOLOMON THE KING",
            subtitle: 'BOOK II, The Scaffolding of the Temple',
            author: ['fuller', {name:'crowley', role:'documents'}],
            pageStart: 217,
            pageEnd: 334,
            skip: [218, 222],
            filename: 'the-temple-of-solomon-the-king-part-2'
        },

        {
            title: "AMONGST THE MERMAIDS",
            author: 'roe',
            pageStart: 335,
            pageEnd: 349,
            skip: [336],
            filename: 'amongst-the-mermaids'
        },
        {
            title: "AVE ADONAI",
            author: 'crowley',
            pageStart: 351,
            pageEnd: 352,
            filename: 'ave-adonai'
        },
        {
            title: "THE MAN-COVER",
            author: 'raffalovich',
            pageStart: 353,
            pageEnd: 384,
            skip: [354],
            filename: 'the-man-cover'
        },
        {
            title: 'REVIEWS',
            pageStart: 385,
            pageEnd: 392,
            addPage: [{filename: '090.png'}, {filename: '104.png'}],
            filename: 'reviews'
        },
        {
            title: "STEWED PRUNES AND PRISM",
            subtitle: 'THE TENNYSON CENTENARY',
            author: 'crowley',
            pageStart: 393,
            pageEnd: 397,
            filename: 'stewed-prunes-and-prism'
        },
        {
            title: 'ADVERTISEMENTS',
            filename: 'advertisements',
            pageStart: 1,
            pageEnd: 8,
            addPage: [{filename: '_000.png'}, {filename: 'ad009.jpg', after: 'ad008.png'}],
            prefix: 'ad',
            pageInfo: 'ads 0-9'
        }
    ]
};