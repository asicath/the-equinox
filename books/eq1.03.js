exports.data = {
    title: 'Volume I Number III',
    pubName: 'Simpkin, Marshall, Hamilton, Kent & CO. LTD.',
    pubLocation: 'London',
    pubYear: '1910',
    folder: '1.3',
    contents: [
        {
            title: 'COVER, TITLE, AND TABLE OF CONTENTS',
            pageStart: 1,
            pageEnd: 14,
            skip: [2, 3, 4, 6, 11, 13],
            addPage: [{filename: '_cover.jpg'}],
            prefix: '_',
            filename: 'cover-title-and-contents'
        },
        {
            title: 'EDITORIAL',
            author: 'crowley',
            pageStart: 1,
            pageEnd: 2,
            filename: 'editorial'
        },
        {
            title: 'LIBER XIII',
            subtitle: 'VEL GRADUUM MONTIS ABIEGNI, A SYLLABUS OF THE STEPS UPON THE PATH',
            author: 'crowley',
            pageStart: 3,
            pageEnd: 8,
            addPage: [{filename: '004image.png', after: '004.png'}],
            pub: 'aa',
            pubClass: 'd',
            number: 13,
            grade: [2],
            filename: 'liber-graduum-montis-abiegni'
        },
        {
            title: 'AHA!',
            subtitle: 'The Sevenfold Mystery of the Ineffable Love',
            author: 'crowley',
            pageStart: 9,
            pageEnd: 54,
            skip: [10, 14],
            addPage: [{filename: '010image.jpg', after: '009.png'}],
            pub: 'aa',
            pubClass: 'c',
            number: 242,
            grade: [4],
            filename: 'aha'
        },
        {
            title: 'THE HERB DANGEROUS',
            subtitle: '(PART III) THE POEM OF HASHISH',
            author: ['baudelaire', {name: 'crowley', role:'translator'}],
            pageStart: 55,
            pageEnd: 112,
            skip: [56],
            filename: 'the-herb-dangerous-part-3'
        },
        {
            title: 'AN ORIGIN',
            author: 'neuburg',
            pageStart: 115,
            pageEnd: 118,
            filename: 'an-origin'
        },
        {
            title: 'THE SOUL-HUNTER',
            author: 'crowley',
            pageStart: 119,
            pageEnd: 128,
            skip: [120],
            filename: 'the-soul-hunter'
        },
        {
            title: 'MADELEINE',
            author: 'grimble',
            pageStart: 129,
            pageEnd: 131,
            filename: 'madeleine'
        },
        {
            title: "THE TEMPLE OF SOLOMON THE KING",
            subtitle: 'BOOK III, The Portal of the Temple',
            author: ['fuller', {name:'crowley', role:'documents'}],
            pageStart: 133,
            pageEnd: 280,
            addPage: [
                {filename: '210image.png', after: '210.png'},
                {filename: '212image.png', after: '212.png'},
                {filename: '218image.png', after: '218.png'},
                {filename: '222image.png', after: '222.png'}
            ],
            pub: 'aa',
            pubClass: 'b',
            filename: 'the-temple-of-solomon-the-king-part-3'
        },
        {
            title: 'THE COMING OF APOLLO',
            author: 'neuburg',
            pageStart: 281,
            pageEnd: 284,
            filename: 'the-coming-of-apollo'
        },
        {
            title: 'THE BRIGHTON MYSTERY',
            author: 'raffalovich',
            pageStart: 287,
            pageEnd: 303,
            filename: 'the-brighton-mystery'
        },

        {
            title: 'REVIEWS',
            pageStart: 304,
            pageEnd: 326,
            addPage: [
                {filename: '113.png'},
                {filename: '114.png'},
                {filename: '285.png'},
                {filename: '286.png'},
                {filename: 's075.png', after: '326.png'},
                {filename: 's076.png', after: '326.png'}
            ],
            filename: 'reviews'
        },
        {
            title: 'THE SHADOWY DILL-WATERS',
            subtitle: 'OR MR. SMUDGE THE MEDIUM',
            pageStart: 327,
            pageEnd: 331,
            filename: 'the-shadowy-dill-waters'
        },

        {
            title: 'LIBER DCCCCLXIII-THE TREASURE-HOUSE OF IMAGES',
            subtitle: 'LIBER ΘΕΣΑΥΡΟΥ ̓ΕΙΔΩΛΩΝ',
            author: ['fuller', {name:'crowley', role:'editor'}, {name:'crowley', role:'illustrator'}],
            pub: 'aa',
            pubClass: 'a&b',
            number: 963,
            grade: 2,
            filename: 'liber-dcccclxiii-the-treasure-house-of-images',
            pageStart: 1,
            pageEnd: 74,
            skip: [2],
            addPage: [
                {filename: 's004image.png', after: "s004.png"},
                {filename: 's070image.png', after: "s070.png"}
            ],
            prefix: 's',
            pageInfo: 'supplement 1-74'
        },

        {
            title: 'ADVERTISEMENTS',
            filename: 'advertisements',
            pageStart: 1,
            pageEnd: 8,
            addPage: [{filename: '_002.png'}, {filename: '_003.png'}, {filename: '_004.png'}, {filename: '_006.png'}],
            prefix: 'ad',
            pageInfo: 'ads 1-8'
        }
    ],
    publish: {
        instructions: [

            {}, // not real, just used as placeholder so that 000 faces right because we can't print on the other side of the cover
            {file:'_001.png'}, // actually the inside cover
            {file:'_002.png'},
            {file:'_003.png'},
            {file:'_004.png'},
            {file:'_005.png'},
            {file:'_006.png'},
            {file:'_007.png'},
            {file:'_008.png'},
            {file:'_009.png'},
            {file:'_010.png'},
            {file:'copyright.png'},
            {file:'_012.png'},
            {},
            {file:'_014.png'},
            {},
            {
                start:1,
                end:331,
                insert: [
                    {file:'004image.png', after:4, blank:'after'},
                    {file:'010image.jpg', after:10, blank:'after'},
                    {file:'210image.png', after:210, blank:'after'},
                    {file:'212image.png', after:212, blank:'after'},
                    {file:'218image.png', after:218, blank:'after'},
                    {file:'222image.png', after:222, blank:'after'}
                ]
            },
            {},
            {
                start:1,
                end:76,
                prefix:'s',
                insert: [
                    {file:'s004image.png', after:4, blank:'after'},
                    {file:'s074image.png', after:74, blank:'after'}
                ]
            },
            {
                start:1,
                end:7,
                prefix:'ad'
            },

            {} // not real, just used as placeholderto fill the last left page

        ]
    }
};