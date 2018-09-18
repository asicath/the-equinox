exports.data = {
    title: 'BOOK FOUR, PART I, MEDITATION',
    subtitle: 'The Way of Attainment of Genius or Godhead considered as a Development of the Human Brain',
    pubName: 'Wieland and Co.',
    pubLocation: 'South Kensington',
    pubYear: '1912',
    folder: 'book4',
    creditFilename: 'credits-bookiv.pdf',
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
            ]
        },
        {
            title: 'A NOTE',
            pageStart: 5,
            pageEnd: 7,
            prefix: '_'
        },
        {
            title: 'AHA!',
            pageStart: 9,
            pageEnd: 10,
            prefix: '_'
        },
        {
            title: 'PRELIMINARY REMARKS',
            pageStart: 3,
            pageEnd: 20
        },
        {
            title: 'ASANA',
            pageStart: 21,
            pageEnd: 27,
            skip:[22],
            addPage: [{filename: '025image.png', after: '024.png'}]
        },
        {
            title: 'PRANAYAMA; AND ITS PARALLEL IN SPEECH, MANTRAYOGA',
            pageStart: 29,
            pageEnd: 38,
            skip:[30]
        },
        {
            title: 'YAMA AND NIYAMA',
            pageStart: 39,
            pageEnd: 43,
            skip:[40]
        },
        {
            title: 'PRATYAHARA',
            pageStart: 45,
            pageEnd: 51,
            skip:[46]
        },
        {
            title: 'DHARANA',
            pageStart: 53,
            pageEnd: 60,
            skip:[54]
        },
        {
            title: 'DHYANA',
            pageStart: 61,
            pageEnd: 76,
            skip:[62]
        },
        {
            title: 'SAMADHI',
            pageStart: 77,
            pageEnd: 89,
            skip:[78]
        },
        {
            title: 'SUMMARY AND ORDER FORM',
            pageStart: 90,
            pageEnd: 96
        },
    ]
};