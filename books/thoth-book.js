exports.data = {
    title: 'THE BOOK OF THOTH',
    subtitle: 'A short essay on the Tarot of the Egyptians, being The Equinox Volume III No. V',
    pubName: 'O.T.O.',
    pubLocation: '93 Jermyn Street, S.W.',
    pubYear: '1944',
    folder: 'thoth-book',
    creditFilename: 'credits-thoth.pdf',
    images: [
        'front.jpg',
        '_004.jpg',
        '050.jpg',
        '146.jpg',
        '174.jpg',
        '222.jpg',
        '246.jpg',
        '262.jpg',
        '272.jpg'
    ],
    links: [
        {text: 'info', url: 'https://www.100thmonkeypress.com/biblio/acrowley/books/book_of_thoth_1944/book_of_thoth_1944.htm'}
    ],
    contents: [

        {
            title: 'Cover and Title Page',
            pageStart: 1,
            pageEnd: 5,
            prefix: '_',
            addPage: [
                {filename: 'front.jpg'},
                {filename: '_004.jpg', after: '_002.png'},
                {filename: '289.png', after: '_005.png'}
            ],
            skip: [3, 4]
        },
        {
            title: 'WHEEL AND-WHOA!',
            subtitle: '',
            pageStart: 6,
            pageEnd: 6,
            prefix: '_'
        },
        {
            title: 'CONTENTS',
            pageStart: 7,
            pageEnd: 10,
            prefix: '_'
        },
        {
            title: 'BIBLIOGRAPHICAL NOTE',
            pageStart: 11,
            pageEnd: 12,
            prefix: '_'
        },
        {
            title: 'PART ONE: THE THEORY OF THE TAROT',
            pageStart: 1,
            pageEnd: 48,
            skip: [2]
        },
        {
            title: 'Lust',
            pageStart: 50,
            pageEnd: 50,
            ext: '.jpg'
        },
        {
            title: 'PART TWO: THE ATU (KEYS or TRUMPS)',
            pageStart: 51,
            pageEnd: 119,
            skip: [52]
        },
        {
            title: 'PART TWO: THE ATU (KEYS or TRUMPS) - APPENDIX',
            pageStart: 120,
            pageEnd: 144
        },
        {
            title: 'Ace of Swords',
            pageStart: 146,
            pageEnd: 146,
            ext: '.jpg'
        },
        {
            title: 'PART THREE: THE COURT CARDS',
            pageStart: 147,
            pageEnd: 171,
            skip: [148]
        },
        {
            title: 'Ace of Disks',
            pageStart: 174,
            pageEnd: 174,
            ext: '.jpg'
        },
        {
            title: 'PART IV. THE SMALL CARDS',
            pageStart: 175,
            pageEnd: 218,
            skip: [176]
        },
        {
            title: 'INVOCATION',
            pageStart: 218,
            pageEnd: 218
        },
        {
            title: 'THE ATU: MNEMONICS',
            pageStart: 219,
            pageEnd: 220
        },
        {
            title: 'The Lovers',
            pageStart: 222,
            pageEnd: 222,
            ext: '.jpg'
        },
        {
            title: 'PLATES: TRUMPS, COURT CARDS, & SMALL CARDS',
            pageStart: 223,
            pageEnd: 244,
            addPage: [
                {filename: '223.png'}
            ],
            skip: [223,224],
            ext: '.jpg'
        },
        {
            title: 'The Sun',
            pageStart: 246,
            pageEnd: 246,
            ext: '.jpg'
        },
        {
            title: 'APPENDIX A. THE BEHAVIOR OF THE TAROT: ITS USE IN THE ART OF DIVINATION',
            pageStart: 247,
            pageEnd: 260,
            skip: [248]
        },
        {
            title: 'The Universe',
            pageStart: 262,
            pageEnd: 262,
            ext: '.jpg'
        },
        {
            title: 'APPENDIX B. CORRESPONDENCES',
            pageStart: 263,
            pageEnd: 287,
            addPage: [{filename: '272.jpg', after: '270.png'}],
            skip: [264, 271, 272]
        }
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