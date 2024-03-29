exports.data = {
    title: 'BOOK FOUR, PART I, MEDITATION',
    subtitle: 'The Way of Attainment of Genius or Godhead considered as a Development of the Human Brain',
    pubName: 'Wieland and Co.',
    pubLocation: 'South Kensington',
    pubYear: '1912',
    folder: 'book4/1',
    creditFilename: 'credits-bookiv.pdf',
    images: [
        'cover-book4-1.jpg',
        'crowley-pond.jpg'
    ],
    links: [
        {text: 'info', url: 'https://www.100thmonkeypress.com/biblio/acrowley/books/book_4_part_1_1911/book_4_part_1_1911.htm'}
    ],
    contents: [

        {
            title: 'COVER AND TITLE',
            pageStart: 1,
            pageEnd: 4,
            prefix: '_',
            addPage: [
                {filename: 'front.jpg'},
                {filename: '001image.png', after: '_004.png'},
                {filename: '001.png', after: '_004.png'},
            ],
            pub: 'aa',
            number: 4,
            grade: [0],
        },
        {
            title: 'A NOTE',
            pageStart: 5,
            pageEnd: 7,
            prefix: '_',
            pub: 'aa',
            number: 4,
            grade: [0],
        },
        {
            title: 'AHA!',
            pageStart: 9,
            pageEnd: 10,
            prefix: '_',
            pub: 'aa',
            number: 4,
            grade: [0],
        },
        {
            title: 'PRELIMINARY REMARKS',
            pageStart: 3,
            pageEnd: 20,
            pub: 'aa',
            number: 4,
            grade: [0],
        },
        {
            title: 'ASANA',
            pageStart: 21,
            pageEnd: 27,
            skip:[22],
            addPage: [{filename: '025image.png', after: '024.png'}],
            pub: 'aa',
            number: 4,
            grade: [0],
        },
        {
            title: 'PRANAYAMA; AND ITS PARALLEL IN SPEECH, MANTRAYOGA',
            pageStart: 29,
            pageEnd: 38,
            skip:[30],
            pub: 'aa',
            number: 4,
            grade: [0],
        },
        {
            title: 'YAMA AND NIYAMA',
            pageStart: 39,
            pageEnd: 43,
            skip:[40],
            pub: 'aa',
            number: 4,
            grade: [0],
        },
        {
            title: 'PRATYAHARA',
            pageStart: 45,
            pageEnd: 51,
            skip:[46],
            pub: 'aa',
            number: 4,
            grade: [0],
        },
        {
            title: 'DHARANA',
            pageStart: 53,
            pageEnd: 60,
            skip:[54],
            pub: 'aa',
            number: 4,
            grade: [0],
        },
        {
            title: 'DHYANA',
            pageStart: 61,
            pageEnd: 76,
            skip:[62],
            pub: 'aa',
            number: 4,
            grade: [0],
        },
        {
            title: 'SAMADHI',
            pageStart: 77,
            pageEnd: 89,
            skip:[78],
            pub: 'aa',
            number: 4,
            grade: [0],
        },
        {
            title: 'SUMMARY AND ORDER FORM',
            pageStart: 90,
            pageEnd: 96,
            pub: 'aa',
            number: 4,
            grade: [0],
        },
    ],
    publish: {
        instructions:[
            {
                start:1,
                end:10,
                expectedBlank: [8],
                prefix:'_',
                insert: [
                    {file:'copyright.png', before:1, blank:'before'}
                ],
            },
            {
                start:1,
                end:96,
                expectedBlank: [2,22,28,30,40,44,46,52,54,62,78],
                prefix:'',
                insert: [
                    {file:'001image.png', before:1, blank:'before'},
                    {file:'025image.png', before:25, blank:'before'}
                ],
            }

        ]
    }
};