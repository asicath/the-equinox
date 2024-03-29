exports.data = {
    title: 'The Book of the Goetia of Solomon the King',
    pubTitle: 'The Book of the Goetia of Solomon the King',
    pubName: 'Society for the Propagation of Religious Truth',
    pubLocation: 'Boleskine, Foyers, Inverness',
    pubYear: '1904',
    folder: 'goetia',
    creditFilename: 'credits-goetia.pdf',
    images: [
        'cover-goetia.jpg'
    ],
    links: [
        {text: 'info', url: 'https://www.100thmonkeypress.com/biblio/acrowley/books/goetia_1904/goetia_1904.htm'}
    ],
    contents: [

        {
            title: 'COVER, TITLE, AND MAGIC SQUARE',
            pageStart: 0,
            pageEnd: 4,
            prefix: '_',
            addPage: [
                {filename: 'front.jpg'},
                {filename: '__00.png'},
                {filename: '067.png', after: '_004.png'},
            ],
            skip:[1, 2]
        },
        {
            title: 'PREFACTORY NOTE',
            pageStart: 5,
            pageEnd: 6,
            prefix: '_',
            author: 'crowley'
        },
        {
            title: 'PRELIMINARY INVOCATION',
            pageStart: 7,
            pageEnd: 9,
            prefix: '_'
        },
        {
            title: 'THE INITIATED INTERPRETATION OF CEREMONIAL MAGIC',
            pageStart: 1,
            pageEnd: 5,
            author: 'crowley'
        },
        {
            title: 'LEMEGETON VEL CLAVICULA SALOMONIS REGIS',
            pageStart: 6,
            pageEnd: 50,
            skip:[12],
            addPage: [
                {filename: '_002image.png'},
                {filename: '013image.png'},
                {filename: '038image.png'},
            ],
            author: [
                {name:'mathers', role:'translator'},
                {name:'crowley', role:'editor'}
                ],
        },
        {
            title: 'Yse Conjurations of ye Booke Goetia Rendered into ye Magicall or Angelike Language',
            pageStart: 51,
            pageEnd: 65,
            skip:[52],
            author: 'crowley'
        },
    ],
    publish: {
        instructions:[]
    }
};