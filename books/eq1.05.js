exports.data = {
    title: 'Volume I Number V',
    pubName: 'Self-Published',
    pubLocation: 'London',
    pubYear: '1911',
    folder: '1.5',
    contents: [
        {
            title: 'COVER, TITLE, AND TABLE OF CONTENTS',
            pageStart: 5,
            pageEnd: 10,
            addPage: [{filename: '_cover.jpg'}],
            skip:[9],
            prefix: '_',
            filename: 'cover-title-and-contents'
        },
        {
            title: 'EDITORIAL',
            author: 'crowley',
            pageStart: 1,
            pageEnd: 3
        },
        {
            title: 'LIBER HHH',
            subtitle: 'SVB FIGURVÂ CCCXLI',
            author: 'crowley',
            pageStart: 5,
            pageEnd: 14,
            pub: 'aa',
            pubClass: 'd',
            number: 341,
            grade: [2]
        },
        {
            title: 'THE BLIND PROPHET',
            author: 'crowley',
            pageStart: 15,
            pageEnd: 27,
            skip:[16]
        },
        {
            title: 'THE TRAINING OF THE MIND',
            author: 'bennett',
            pageStart: 28,
            pageEnd: 59
        },
        {
            title: 'THE SABBATH',
            author: 'crowley',
            pageStart: 60,
            pageEnd: 64
        },
        {
            title: 'THE TEMPLE OF SOLOMON THE KING',
            subtitle: 'BOOK V',
            author: 'crowley',
            pageStart: 65,
            pageEnd: 120,
            pub: 'aa',
            pubClass: 'b',
            number: 58,
            grade: [3],
            filename: 'the-temple-of-solomon-the-king-part-5'
        },
        {
            title: 'A NOCTURNE',
            author: 'neuburg',
            pageStart: 121,
            pageEnd: 124
        },
        {
            title: 'THE VIXEN',
            author: 'crowley',
            pageStart: 125,
            pageEnd: 129
        },
        {
            title: 'THE PILGRIM',
            author: 'crowley',
            pageStart: 130,
            pageEnd: 132
        },
        {
            title: 'MY CRAPULOUS CONTEMPORARIES, NO. IV',
            subtitle: 'WISDOM WHILE YOU WAITE',
            author: 'crowley',
            pageStart: 133,
            pageEnd: 142,
            skip:[134]
        },
        {
            title: 'X-RAYS ON EX-PROBATIONERS',
            author: 'crowley',
            pageStart: 142,
            pageEnd: 142
        },
        {
            title: 'THE VAMPIRE',
            author: 'archer',
            pageStart: 143,
            pageEnd: 143
        },
        {
            title: 'THE BIG STICK',
            //author: 'crowley',
            pageStart: 144,
            pageEnd: 157
        },
        {
            title: 'CORRESPONDENCE',
            //author: 'crowley',
            pageStart: 158,
            pageEnd: 158
        },
        {
            title: 'LIBER XXX AERUM',
            subtitle: 'VEL SAECVLI SVB FIGURÂ CCCCXVIII - BEING OF THE ANGELS OF THE 30 AETHYRS - THE VISION AND THE VOICE',
            author: 'crowley',
            prefix: 's',
            pageStart: 1,
            pageEnd: 176,
            addPage: [{filename: 's047image.png', after:'s046.png'}],
            pub: 'aa',
            pubClass: 'a-b',
            number: 418,
            grade: [0] // ALSO 5 as LIBER VIII. See CCCCXVIII (418).
        },
        {
            title: 'LIBER VIII',
            subtitle: 'THE CRY OF THE 8TH AETHYR, WHICH IS CALLED ZID',
            author: 'crowley',
            prefix: 's',
            pageStart: 109,
            pageEnd: 116,
            pub: 'aa',
            pubClass: 'd',
            number: 8,
            grade: [5] // ALSO 5 as LIBER VIII. See CCCCXVIII (418).
        },
        //the same remarks apply to the account of the proper method of invoking AEthyrs given in the 18th AEthyr
        {
            title: 'THE PROPER METHOD OF INVOKING AETHYRS',
            subtitle: 'THE CRY OF THE 18TH AETHYR, WHICH IS CALLED ZEN',
            author: 'crowley',
            prefix: 's',
            pageStart: 51,
            pageEnd: 56,
            pub: 'aa',
            pubClass: 'd',
            //number: 18,
            //grade: [5]
        },
        {
            title: 'STOP PRESS REVIEWS',
            //author: 'crowley',
            pageStart: 178,
            pageEnd: 179,
            prefix: 's'
        },
        {
            title: 'ADVERTISEMENTS',
            filename: 'advertisements',
            pageStart: 1,
            pageEnd: 10,
            addPage: [
                {filename: '_001.png'},
                {filename: '_002.png'},
                {filename: '_003.png'},
                {filename: '_004.png'},
                {
                    filename: 'xad011.jpg',
                    after: 'xad010.png'
                }
            ],
            prefix: 'xad',
            pageInfo: 'ads'
        }
    ]
};