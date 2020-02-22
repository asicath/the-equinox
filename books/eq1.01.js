exports.data = {
    title: 'Volume I Number I',
    pubName: 'Simpkin, Marshall, Hamilton, Kent & CO. LTD.',
    pubLocation: 'London',
    pubYear: '1909',
    folder: '1.1',
    links: [
        {text: 'info', url: 'https://www.100thmonkeypress.com/biblio/acrowley/books/equinox_1_1_1909/equinox_1_1_1909.htm'}
    ],
    contents: [
        {
            title: 'COVER, TITLE, AND TABLE OF CONTENTS',
            pageStart: 1,
            pageEnd: 5,
            addPage: [{filename: '_cover.jpg'}],
            prefix: '_',
            filename: 'cover-title-and-contents',
            images: [
                'cover-eq1.jpg'
            ]
        },
        {
            title: 'EDITORIAL',
            author: 'crowley',
            pageStart: 1,
            pageEnd: 3,
            filename: 'editorial'
        },
        {
            title: 'AN ACCOUNT OF A∴A∴',
            subtitle: 'FIRST WRITTEN IN THE LANGUAGE OF HIS PERIOD BY THE COUNCILLOR VON ECKARTSHAUSEN',
            author: {name: 'crowley', role:'reviser'},
            pageStart: 5,
            pageEnd: 13,
            addPage: [{filename: '006image.png', after: "006.png"}],
            pub: 'aa',
            pubClass: 'c',
            number: 33,
            grade: 0,
            filename: 'an-account-of-aa',
            images: [
                'the-silent-watcher.jpg'
            ]
        },
        {
            title: 'LIBER LIBRÆ',
            author: {name: 'crowley', role:'reviser'},
            pageStart: 14,
            pageEnd: 21,
            skip: [16],
            pub: 'aa',
            pubClass: 'b',
            number: 30,
            grade: 0,
            filename: 'liber-librae'
        },
        {
            title: 'LIBER EXERCITIORUM',
            subtitle: 'LIBER E. VEL EXERCITIORUM SVB FIGVRA IX',
            author: 'crowley',
            pageStart: 23,
            pageEnd: 34,
            addPage: [{filename: '029image.jpg', after: "028.png"}],
            pub: 'aa',
            pubClass: 'b',
            number: 9,
            grade: [0, 1],
            filename: 'liber-exercitiorum',
            images: [
                'the-four-positions.jpg'
            ]
        },
        {
            title: 'THE WIZARD WAY',
            author: 'crowley',
            pageStart: 35,
            pageEnd: 46,
            filename: 'the-wizard-way',
            skip: [36]
        },
        {
            title: 'THE MAGIC GLASSES',
            author: 'harris',
            pageStart: 47,
            pageEnd: 86,
            filename: 'the-magic-glasses',
            skip: [48]
        },
        {
            title: 'THE CHYMICAL JOUSTING OF BROTHER PERARDUA',
            subtitle: 'WITH THE SEVEN LANCES THAT HE BRAKE',
            author: ['crowley', {name:'fuller', role:'illustrator'}],
            pub: 'aa',
            pubClass: 'c',
            number: 55,
            grade: 4,
            pageStart: 87,
            pageEnd: 93,
            addPage: [{filename: '089image.jpg', after: "087.png"}],
            filename: 'the-chymical-jousting-of-brother-perardua',
            skip: [88],
            images: ['the-regimen-of-the-seven.jpg']
        },
        {
            title: 'THE LONELY BRIDE',
            author: 'neuburg',
            pageStart: 95,
            pageEnd: 97,
            filename: 'the-lonely-bride'
        },
        {
            title: 'AT THE FORK OF THE ROADS',
            author: 'crowley',
            pageStart: 99,
            pageEnd: 108,
            filename: 'at-the-fork-of-the-roads',
            skip: [100]
        },
        {
            title: 'THE MAGICIAN',
            author: ['lévi', 'honorius', {name:'crowley', role:'translator'}],
            translated: 'crowley',
            pageStart: 109,
            pageEnd: 109,
            filename: 'the-magician'
        },
        {
            title: 'THE SOLDIER AND THE HUNCHBACK: ! AND ?',
            author: 'crowley',
            pub: 'aa',
            pubClass: 'c',
            number: 148,
            pageStart: 111,
            pageEnd: 135,
            filename: 'the-soldier-and-the-hunchback',
            skip: [112]
        },
        {
            title: 'THE HERMIT',
            subtitle: 'AN ATTACK ON BARBERCRAFT',
            author: 'crowley',
            pageStart: 137,
            pageEnd: 138,
            filename: 'the-hermit'
        },
        {
            title: 'THE TEMPLE OF SOLOMON THE KING',
            subtitle: 'BOOK I, The Foundations of the Temple',
            author: ['fuller', {name:'crowley', role:'documents'}],
            pageStart: 139,
            pageEnd: 230,
            skip: [140, 166],
            filename: 'the-temple-of-solomon-the-king-part-1',
            images: [
                'tostk-1-hexagram.jpg'
            ]
        },
        {
            title: 'THE HERB DANGEROUS',
            subtitle: '(PART I) A PHARMACEUTICAL STUDY OF CANNABIS SATIVA',
            author: 'whineray',
            pageStart: 231,
            pageEnd: 255,
            skip: [232],
            filename: 'the-herb-dangerous-part-1'
        },
        {
            title: 'JOHN ST. JOHN',
            subtitle: 'THE RECORD OF THE MAGICAL RETIREMENT OF G.H. FRATER, O∴M∴',
            author: 'crowley',
            pub: 'aa',
            pubClass: 'c',
            number: 860,
            grade: 5,
            filename: 'john-st-john',
            pageStart: 1,
            pageEnd: 139,
            skip: [2],
            addPage: [{filename: 's002image.jpg', after: "s001.png"}],
            prefix: 's',
            pageInfo: 'supplement 1-139',
            images: ['blind-force.jpg']
        },
        {
            title: 'ADVERTISEMENTS',
            filename: 'advertisements',
            pageStart: 0,
            pageEnd: 8,
            prefix: 'ad',
            pageInfo: 'ads 1-9'
        }
    ],
    illustrations: [
        {
            title:'THE SILENT WATCHER',
            facingPage: 6,
            filename:''
        }
        /*
         THE SILENT WATCHER Facing page 6
         THE FOUR POSITIONS: THE IBIS, THE GOD, THE THUNDERBOLT, THE DRAGON 29
         THE REGIMEN OF THE SEVEN 89
         BLIND FORCE (SUPPLEMENT) 2
         */
    ],
    publish: {
        instructions: [
            {},
            {},
            {file:'_001.png'},
            {file:'_002.png'},
            {file:'_003.png'},
            {file:'copyright.png'},
            {file:'_004.png'},
            {},
            {file:'_005.png'},
            {},
            {
                start:1,
                end:255,
                insert: [
                    {file:'006image.png', after:6, blank:'after'},
                    {file:'029image.png', after:28, blank:'before'},
                    {file:'089image.png', after:88, blank:'before'}
                ]
            },
            {},
            {
                start:1,
                end:139,
                prefix:'s',
                insert: [
                    {file:'s002image.png', after:2, blank:'after'}
                ]
            },
            {
                start:0,
                end:8,
                prefix:'ad'
            },
            {},
            {}
        ]
    }
};