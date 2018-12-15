exports.data = {
    title: 'Volume I Number IX',
    pubName: 'Wieland & Co.',
    pubLocation: 'London',
    pubYear: '1913',
    folder: '1.9',
    contents: [
        {
            title: 'COVER, TITLE, AND TABLE OF CONTENTS',
            pageStart: 17,
            pageEnd: 21,
            skip: [20],
            addPage: [
                {filename: '_front.jpg'},
                {filename: '314.png', after: '_021.png'}
            ],
            prefix: '_',
            filename: 'cover-title-and-contents',
            creditFilename: 'credits-9.pdf'
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
            title: 'EDITORIAL, NO IX',
            author: 'crowley',
            pageStart: 23,
            pageEnd: 25,
            prefix: '_'
        },

        {
            title: 'THE TEMPLE OF SOLOMON THE KING',
            subtitle: 'PART VIII',
            author: 'crowley',
            pageStart: 1,
            pageEnd: 11,
            skip: [2],
            pub: 'aa',
            pubClass: 'b',
            filename: 'the-temple-of-solomon-the-king-part-8'
        },

        {
            title: 'LINES TO A YOUNG LADY VIOLINIST ON HER PLAYING IN A GREEN DRESS DESIGNED BY THE AUTHOR',
            author: 'crowley',
            pageStart: 13,
            pageEnd: 15,
            skip: []
        },
        {
            title: 'ENERGIZED ENTHUSIASM',
            author: 'crowley',
            pageStart: 17,
            pageEnd: 46,
            skip: [18],
            pub: 'aa',
            number: 811,
            grade: [1,2]
        },
        {
            title: 'THE "TITANIC"',
            author: 'crowley',
            pageStart: 47,
            pageEnd: 48,
            skip: [],
            filename: 'the-titanic'
        },
        {
            title: 'A LITERATOORALOORAL TREASURE-TROVE',
            author: 'crowley',
            pageStart: 49,
            pageEnd: 64,
            skip: [50]
        },
        {
            title: 'THRENODY',
            author: 'crowley',
            pageStart: 65,
            pageEnd: 65,
            skip: []
        },
        {
            title: 'DISCHMATAL BY NIGHT',
            author: 'grimble',
            pageStart: 66,
            pageEnd: 66,
            skip: []
        },
        {
            title: 'MY CRAPULOUS CONTEMPORARIES. NO. VIII. A QUACK PAINTER',
            author: 'crowley',
            pageStart: 67,
            pageEnd: 77,
            skip: [68]
        },
        {
            title: 'AT SEA',
            author: 'crowley',
            pageStart: 79,
            pageEnd: 80,
            skip: []
        },
        {
            title: 'CANCER?',
            subtitle: 'A STUDY IN NERVES',
            author: 'crowley',
            pageStart: 81,
            pageEnd: 100,
            skip: [82]
        },
        {
            title: 'DUMB!',
            author: 'crowley',
            pageStart: 101,
            pageEnd: 101,
            skip: []
        },
        {
            title: 'THE VITRIOL-THROWER',
            author: 'crowley',
            pageStart: 103,
            pageEnd: 114,
            skip: [104]
        },
        {
            title: 'THE FAIRY FIDDLER',
            author: 'archer',
            pageStart: 115,
            pageEnd: 115,
            skip: []
        },
        {
            title: 'THE EVOCATION OF BARTZABEL THE SPIRIT OF MARS',
            author: 'crowley',
            pageStart: 117,
            pageEnd: 136,
            skip: [118]
        },
        {
            title: 'THE TESTAMENT OF MAGDALEN BLAIR',
            author: 'crowley',
            pageStart: 137,
            pageEnd: 174,
            skip: [138]
        },
        {
            title: 'ERCILDOUNE',
            author: 'crowley',
            pageStart: 175,
            pageEnd: 258,
            skip: [176]
        },
        {
            title: 'ATHANASIUS CONTRA DECANUM',
            author: 'crowley',
            pageStart: 259,
            pageEnd: 268,
            skip: [260]
        },
        {
            title: 'MY CRAPULOUS CONTEMPORARIES. NO. VII. A GALAHAD IN GOMORRAH',
            author: 'crowley',
            pageStart: 269,
            pageEnd: 274,
            skip: [270]
        },
        {
            title: 'HOW I BECAME A FAMOUS MOUNTAINEER',
            author: 'crowley',
            pageStart: 275,
            pageEnd: 294,
            skip: [276]
        },
        {
            title: 'THE TANGO',
            subtitle: 'A SKETCH',
            author: ['sturges','crowley'],
            pageStart: 295,
            pageEnd: 305,
            skip: []
        },
        {
            title: 'THE BIG STICK',
            author: 'crowley',
            pageStart: 307,
            pageEnd: 307,
            skip: []
        },
        {
            title: 'REVIEWS',
            author: 'crowley',
            pageStart: 309,
            pageEnd: 313,
            skip: []
        },

        {
            title: 'ADVERTISEMENTS',
            filename: 'advertisements',
            pageStart: 1,
            pageEnd: 21,
            addPage: [
                {
                    filename: '_back.jpg',
                    after: 'x022.png'
                }
            ],
            prefix: 'x',
            pageInfo: 'ads'
        }
    ]
};