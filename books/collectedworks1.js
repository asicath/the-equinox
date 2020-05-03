exports.data = {
    title: 'The Collected Works of Aleister Crowley, Volume I',
    pubName: 'Society for the Propagation of Religious Truth',
    pubLocation: 'Foyers',
    pubYear: '1905',
    pubTitle: 'Collected Works 1',
    folder: 'collectedworks/1',
    creditFilename: 'credits-works.pdf',
    thumbCover: 'collectedworks1.jpg',
    images: [
        'cover-works.jpg',
        'portrait1.jpg'
    ],
    links: [
        {text: 'info', url: 'https://www.100thmonkeypress.com/biblio/acrowley/books/collected_works_traveler_1907/collected_works_traveler_1907.htm'}
    ],
    contents: [
        {
            title: 'COVER, TITLE, PORTRAIT, AND TABLE OF CONTENTS',
            pageStart: 1,
            pageEnd: 11,
            prefix: '_',
            skip: [3,7],
            addPage: [
                {filename: '_003.jpg', after: '_002.png'}
            ],
        },
        {
            title: 'ACELDAMA',
            subtitle: 'A PLACE TO BURY STRANGERS IN',
            pageStart: 1,
            pageEnd: 6
        },
        {
            title: 'THE TALE OF ARCHAIS',
            subtitle: 'A ROMANCE IN VERSE',
            pageStart: 7,
            pageEnd: 28
        },
        {
            title: 'SONGS OF THE SPIRIT',
            //subtitle: '',
            pageStart: 29,
            pageEnd: 56
        },
        {
            title: 'THE POEM',
            subtitle: 'A LITTLE DRAMA IN FOUR SCENES',
            pageStart: 57,
            pageEnd: 63
        },
        {
            title: 'JEPHTHAH',
            //subtitle: '',
            pageStart: 64,
            pageEnd: 89
        },
        {
            title: 'MYSTERIES',
            subtitle: 'LYRICAL AND DRAMATIC',
            pageStart: 90,
            pageEnd: 128
        },
        {
            title: 'JEZEBEL',
            subtitle: 'AND OTHER TRAGIC POEMS',
            pageStart: 129,
            pageEnd: 135
        },
        {
            title: 'AN APPEAL TO THE AMERICAN REPUBLIC',
            //subtitle: '',
            pageStart: 136,
            pageEnd: 140
        },
        {
            title: 'THE FATAL FORCE',
            //subtitle: '',
            pageStart: 141,
            pageEnd: 153
        },
        {
            title: 'THE MOTHER\'S TRAGEDY',
            //subtitle: '',
            pageStart: 154,
            pageEnd: 165
        },
        {
            title: 'THE TEMPLE OF THE HOLY GHOST',
            //subtitle: '',
            pageStart: 166,
            pageEnd: 213
        },
        {
            title: 'CARMEN SAECULARE',
            //subtitle: '',
            pageStart: 214,
            pageEnd: 221
        },
        {
            title: 'TANNHÄUSER',
            subtitle: 'A STORY OF ALL TIME',
            pageStart: 222,
            pageEnd: 262
        },
        {
            title: 'EPILOGUE',
            //subtitle: '',
            pageStart: 263,
            pageEnd: 264
        },
        {
            title: 'APPENDIX',
            subtitle: 'QABALISTIC DOGMA',
            pageStart: 265,
            pageEnd: 269
        }

    ],
    publish: {
        instructions:[]
    }
};