exports.data = {
    title: 'Volume I Number VIII',
    pubName: 'Wieland & Co.',
    pubLocation: 'London',
    pubYear: '1912',
    folder: '1.8',
    contents: [
        {
            title: 'COVER, TITLE, AND TABLE OF CONTENTS',
            pageStart: 17,
            pageEnd: 21,
            skip: [18],
            addPage: [
                {filename: '_cover.jpg'},
                // Table of contents is within numbered pages this time
                {filename: '001.png', after: '_008.png'},
                {filename: '002.png', after: '_008.png'}
            ],
            prefix: '_',
            filename: 'cover-title-and-contents'
        },
        {
            title: 'PRONOUNCEMENT BY THE CHANCELLOR OF THE A∴A∴',
            pageStart: 2,
            pageEnd: 4,
            prefix: '_'
        },
        {
            title: 'ORDER OF ORIENTAL TEMPLARS',
            subtitle: 'MYSTERIA MYSTICA MAXIMA',
            pageStart: 5,
            pageEnd: 15,
            skip: [6],
            prefix: '_'
        },
        {
            title: 'EDITORIAL, NO VIII',
            pageStart: 23,
            pageEnd: 26
        }
    ]
};