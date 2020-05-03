exports.data = {
    title: 'The Collected Works of Aleister Crowley, Volume III',
    pubName: 'Society for the Propagation of Religious Truth',
    pubLocation: 'Foyers',
    pubYear: '1907',
    pubTitle: 'Collected Works 3',
    folder: 'collectedworks/3',
    creditFilename: 'credits-works.pdf',
    links: [
        {text: 'info', url: 'https://www.100thmonkeypress.com/biblio/acrowley/books/collected_works_traveler_1907/collected_works_traveler_1907.htm'}
    ],
    images: [
        'portrait3.jpg'
    ],
    contents: [
        {
            title: 'COVER, TITLE, PORTRAIT, AND TABLE OF CONTENTS',
            pageStart: 1,
            pageEnd: 7,
            prefix: '_',
            skip: [2,3,4],
            addPage: [
                {filename: '_001image.png'}
            ]
        },

        {
            title: 'THE STAR AND THE GARTER',
            pageStart: 1,
            pageEnd: 19
        },
        {
            title: 'WHY JESUS WEPT',
            subtitle: 'A STUDY OF THE SOCIETY AND OF THE GRACE OF GOD',
            pageStart: 20,
            pageEnd: 50
        },
        {
            title: 'ROSA MUNDI',
            subtitle: 'AND OTHER LOVE-SONGS',
            pageStart: 51,
            pageEnd: 67
        },
        {
            title: "A DRAMATIC VERSION OF THE SIRE DE MALETROIT'S DOOR",
            author: ['crowley', 'kelly'],
            pageStart: 68,
            pageEnd: 83
        },
        {
            title: 'GARGOYLES',
            subtitle: 'BEING STRANGELY WROUGHT IMAGES OF LIFE AND DEATH',
            pageStart: 84,
            pageEnd: 108
        },
        {
            title: 'RODIN IN RIME',
            pageStart: 109,
            pageEnd: 123
        },
        {
            title: 'ORPHEUS',
            subtitle: 'A LYRICAL LEGEND',
            pageStart: 124,
            pageEnd: 218
        },
        {
            title: 'EPILOGUE AND DEDICATION',
            pageStart: 219,
            pageEnd: 230
        },
        {
            title: 'APPENDIX A, NOTES TOWARDS AN OUTLINE OF A BIBLIOGRAPHY OF THE WRITINGS IN PROSE AND VERSE OF ALEISTER CROWLEY',
            //subtitle: '',
            pageStart: 233,
            pageEnd: 239
        },
        {
            title: 'APPENDIX B, INDEX OF FIRST LINES TO VOLUMES I., II., III.',
            //subtitle: '',
            pageStart: 240,
            pageEnd: 248
        }
    ],
    publish: {
        instructions:[]
    }
};