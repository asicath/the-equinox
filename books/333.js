exports.data = {
    title: 'The Book of Lies',
    pubTitle: 'The Book of Lies',
    pubName: 'Wieland & Co.',
    pubLocation: 'London',
    pubYear: '1913',
    folder: '333',
    creditFilename: 'credits-333.pdf',
    images: [
        'cover-333.jpg',
        'perdurabo.jpg',
        'laylah.jpg'
    ],
    links: [
        {text: 'info', url: 'https://www.100thmonkeypress.com/biblio/acrowley/books/book_of_lies_1913/book_of_lies_1913.htm'}
    ],
    contents: [
        {
            title: 'COVER AND TITLE',
            pageStart: 1,
            pageEnd: 3,
            addPage: [
                {filename: '_cover.jpg'}
            ],
            pub: 'aa',
            pubClass: 'c',
            number: 333,
            grade: 2
        },
        {
            title: 'CHAPTERS 0-91',
            pageStart: 5,
            pageEnd: 109,
            addPage: [
                {filename: '015image.png', after:'014.png'},
                {filename: '094image.png', after:'094.png'}
            ],
            pub: 'aa',
            pubClass: 'c',
            number: 333,
            grade: 2
        },
        {
            title: 'NOTES',
            pageStart: 111,
            pageEnd: 113,
            pub: 'aa',
            pubClass: 'c',
            number: 333,
            grade: 2
        },
        {
            title: 'PRO AND CON TENTS',
            pageStart: 115,
            pageEnd: 116,
            pub: 'aa',
            pubClass: 'c',
            number: 333,
            grade: 2
        },
        {
            title: 'ERRATA',
            addPage: [
                {filename: '063errata.png'}
            ],
            pub: 'aa',
            pubClass: 'c',
            number: 333,
            grade: 2
        },
        {
            title: 'ADVERTISEMENTS',
            pageStart: 117,
            pageEnd: 131
        },


        {
            title: 'THE STAR RUBY',
            pageStart: 34,
            pageEnd: 35,
            pub: 'aa',
            pubClass: 'd',
            number: 25,
            grade: 0
        },
        {
            title: 'THE STAR SAPPHIRE',
            pageStart: 46,
            pageEnd: 47,
            pub: 'aa',
            pubClass: 'd',
            number: 36,
            grade: 2
        },
        {
            title: 'THE MASS OF THE PHOENIX',
            pageStart: 55,
            pageEnd: 57,
            pub: 'aa',
            pubClass: 'd',
            number: 44,
            grade: 6
        }
    ],
    publish: {
        extension: '.png',
        instructions: [

            // one blank page both sides at beginning
            //{},{},

            // copyright page gets added on the left, so no extra page needed

            {
                start:1,
                end:131,
                expectedBlank: [4, 114],
                prefix:'',
                insert: [
                    {file:'copyright.png', before:1, blank:'before'},
                    {file:'015image.png', before:15, blank:'before'},
                    {file:'094image.png', after:94, blank:'after'}
                ],
            },

            {}, // blank side of last page

            // one blank page at the end
            //{},{}

        ]
    }
};