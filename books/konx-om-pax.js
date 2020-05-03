exports.data = {
    title: 'Konx Om Pax',
    pubTitle: 'Konx Om Pax',
    pubName: 'Walter Scott Publishing Co.',
    pubLocation: 'London and Felling-on-tyne',
    pubYear: '1908',
    folder: 'konx-om-pax',
    creditFilename: 'credits-konxompax.pdf',
    images: [
        'cover-konxompax.jpg',
        'crowley.jpg'
    ],
    links: [
        {text: 'info', url: 'https://www.100thmonkeypress.com/biblio/acrowley/books/konx_om_pax2_1907/konx_om_pax2_1907.htm'}
    ],
    contents: [
        {
            title: 'COVER, TITLE, AND CONTENTS',
            prefix: '_',
            pageStart: 1,
            pageEnd: 5,
            skip:[2,4],
            addPage: [
                {filename: '_cover.jpg'},
                {filename: '_0000.png'},
                {filename: '_002.jpg', after: '_001.png'}
                ]
        },
        {
            title: 'Dedication and Counter-Dedication',
            prefix: '_',
            pageStart: 7,
            pageEnd: 12
        },
        {
            title: 'The Wake World',
            pageStart: 1,
            pageEnd: 24,
            addPage: [
                {filename: '_013.png'},
                {filename: '_014.png'}
            ],
            pub: 'aa',
            pubClass: 'c',
            number: 95,
            grade: 5,
        },
        {
            title: 'Ali Sloper',
            subtitle: 'The Forty Liars',
            pageStart: 25,
            pageEnd: 51,
            skip:[26]
        },
        {
            title: 'Thien Tao',
            subtitle: 'The Synagogue of Satan',
            pageStart: 53,
            pageEnd: 67,
            skip:[54],
            pub: 'aa',
            pubClass: 'c',
            number: 41,
            grade: 6,
        },
        {
            title: 'The Stone of Abiegnus',
            pageStart: 69,
            pageEnd: 108,
            skip:[70]
        },
        {
            title: 'ADVERTISEMENTS',
            prefix: 'ad',
            pageStart: 1,
            pageEnd: 12
        }
    ],
    publish: {
        extension: '.png',
        instructions: [

        ]
    }
};
