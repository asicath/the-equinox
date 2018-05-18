/*
 Aleister Crowley
 Frank Harris
 J.F.C. Fuller
 E. Whineray, M.P.S.
 Victor B. Neuburg
 G.H.S. Pinsent
 Allen Bennett
 Lord Dunsany
 Norman Roe
 George Raffalovich
 Chas. Baudelaire
 Arthur F. Grimble
 Ethel Archer
 H.G. Ludlow
 Edward Storer
 Mary d'Este Sturges
 S.H. Perry
 Katharine Susannah Prichard
 Herbert Close
 Mrs. Bey
 D. Hamish Jenkins
 Laylah Waddell
 L. E. Kennedy

 need to add photos/paintings

 0 PROBATIONER
 LIBER CCXX. LIBER L VEL LEGIS SUB FIGURA CCXX.
 LIBER CXL (ALEPH) THE BOOK OF WISDOM OR FOLLY.
 LIBER XXV.
 LIBER CCC. A SPECIAL INSTRUCTION for the Promulgation of the Law.
 LIBER ABA (Book 4).
 LIBER CCVII. SYLLABUS. An enumeration of the Official Publications of the AA, with a brief description of the contents of each book.

 1 Neophyte
 LIBER CCXX. LIBER L VEL LEGIS Sub Figura CCXX.
 LIBER VII. LIBER LIBERI VEL LAPIDIS LAZULI
 LIBER LXXVIII.
 LIBER CDLXXIV. LIBER Os ABySMI VEL DAATH.
 LIBER DCCCXI. ENERGIZED ENTHUSIASM.

 2 COURSE IV - Zelator
 LIBER CCXX. LIBER L VEL LEGIS Sub Figura CCXX.
 LIBER CMXIII. LIBER VIA:
 LIBER XVII. LIBER I.A.O.
 LIBER XXXVI. THE STAR SAPPHIRE.
 LIBER CLXXXV. LIBER COLLEGII SANCTI.
 LIBER CCVI. LIBER R V VEL SPIRITUS.
 LIBER CCCXXXIII. THE BOOK OF LIEs
 LIBER DCCCXI. ENERGIZED ENTHUSIASM.

 3 COURSE V - Practicus
 LIBER CCXX. LIBER L VEL LEGIS Sub Figura CCXX.
 LIBER XXVII. LIBER TRIGRAMMATON
 LIBER CCXXXI. LIBER ARCANORUM
 LIBER CD. LIBER TAV VEL KABBAL/E TRIUM LITERARUM Sub Figura CD.
 LIBER LXIV. LIBER ISRAFEL, formerly called ANUBIS.
 LIBER LXXXIV. VEL CHANOKH.
 LIBER DXXXVI. BATRACHOPHRENOBOOCOSMOMACHIA.
 LIBER D. SEPHER SEPHIROTH.
 LIBER LXVII. THE SWORD OF SONG.

 4 COURSE VI - Philosophus
 LIBER CCXX. LIBER L VEL LEGIS Sub Figura CCXX.
 LIBER DCCCXIII. VEL ARARITA Sub Figura DLXX.
 LIBER LIX. ACROSS THE GULE.
 LIBER CCCXXXV. ADONIS.
 LIBER CLXXV. ASTARTE VEL LIBER BERvLLI.
 LIBER XLVI. THE KEY OF THE MYSTERIES.

 5 COURSE VII Dominus Liminis
 LIBER CCXX. LIBER L VEL LEGIS Sub Figura CCXX.
 LIBER XCV. THE WAKE WORLD (in Konx Om Pax).
 LIBER XI. LIBER NV. An instruction for attaining Nuit.
 LIBER DLV. LIBER HAD. An instruction for attaining Hadit.
 LIBER DCCCXXXI. LIBER IOD, formerly called VESTA.

 6 COURSE VIII - Major Adept
 LIBER CCXX. LIBER L VEL LEGIS Sub Figura CCXX.
 LIBER I. LIBER B VEL MAGI. This is an account of the
 LIBER LXVI. LIBER STELLE RUBEE.
 LIBER XLIV. THE MASS OF THE PHCENIX. A Ritual of the Law.
 LIBER XLI. THIEN TAO. An Essay on Attainment by the Way of Equilibrium.
 LIBER DCCCLXVIII. LIBER VIARUM VIE.

 The Exempt Adept will possess a thorough knowledge of all these courses, and present a thesis of his own, as a general
 Epitome of his own Attainment as reflected in the
 sphere of the Mind.

 */

const data = {
    books: [
        {
            title: '777',
            subtitle: 'PROLEGOMENA SYMBOLICA AD SYSTEMAM SCEPTICO-MYSTICAE VIAE EXPLICANDAE FUNDAMENTUM HIEROGLYPHICUM SANCTISSIMORUM SCIENTIAE SUMMAE',
            pubName: 'Walter Scott Publishing Co., Ltd.',
            pubLocation: 'London and Felling-on-Tyne',
            pubYear: '1909',
            folder: '777',
            creditFilename: 'credits-777.pdf',
            contents: [

                {
                    title: 'COVER AND TITLE',
                    pageStart: 1,
                    pageEnd: 5,
                    prefix: '_',
                    addPage: [
                        {filename: '_000.jpg'},
                        {filename: '055.png', after: '_005.png'},
                        {filename: 'back.jpg', after: '_005.png'},
                    ],
                    filename: 'cover and title'
                },
                {
                    title: 'INTRODUCTION',
                    pageStart: 6,
                    pageEnd: 10,
                    prefix: '_',
                    filename: 'introduction'
                },
                {
                    title: 'ERRATA',
                    pageStart: 11,
                    pageEnd: 11,
                    prefix: '_',
                    pub: 'aa',
                    pubClass: 'b',
                    number: 777,
                    grade: 3,
                    filename: 'errata'
                },
                {
                    title: 'TABLE OF CORRESPONDENCES',
                    pageStart: 1,
                    pageEnd: 36,
                    pub: 'aa',
                    pubClass: 'b',
                    number: 777,
                    grade: 3,
                    filename: 'table of correspondences'
                },
                {
                    title: 'NOTES TO TABLE OF CORRESPONDENCES',
                    pageStart: 37,
                    pageEnd: 45,
                    pub: 'aa',
                    pubClass: 'b',
                    number: 777,
                    grade: 3,
                    filename: 'notes to table of correspondences'
                },
                {
                    title: 'APPENDIX I: THE TRIGRAMS',
                    pageStart: 46,
                    pageEnd: 54,
                    pub: 'aa',
                    pubClass: 'b',
                    number: 777,
                    grade: 3,
                    filename: 'appendix 1 the trigrams'
                },
                {
                    title: 'THE EQUINOX: ADVERTISEMENT AND SUBSCRIPTION FORM',
                    pageStart: 56,
                    pageEnd: 57,
                    filename: 'equinox advertisement'
                }
            ]
        },
        {
            title: 'Volume I Number I',
            pubName: 'Simpkin, Marshall, Hamilton, Kent & CO. LTD.',
            pubLocation: 'London',
            pubYear: '1909',
            folder: '1.1',
            contents: [
                {
                    title: 'COVER, TITLE, AND TABLE OF CONTENTS',
                    pageStart: 1,
                    pageEnd: 5,
                    addPage: [{filename: '_cover.jpg'}],
                    prefix: '_',
                    filename: 'cover-title-and-contents'
                },
                {
                    title: 'EDITORIAL',
                    author: 'crowley',
                    pageStart: 1,
                    pageEnd: 3,
                    filename: 'editorial'
                },
                {
                    title: 'AN ACCOUNT OF A∴A∴',
                    subtitle: 'FIRST WRITTEN IN THE LANGUAGE OF HIS PERIOD BY THE COUNCILLOR VON ECKARTSHAUSEN',
                    author: {name: 'crowley', role:'reviser'},
                    pageStart: 5,
                    pageEnd: 13,
                    addPage: [{filename: '006image.png', after: "006.png"}],
                    pub: 'aa',
                    pubClass: 'c',
                    number: 33,
                    grade: 0,
                    filename: 'an-account-of-aa'
                },
                {
                    title: 'LIBER LIBRÆ',
                    author: {name: 'crowley', role:'reviser'},
                    pageStart: 14,
                    pageEnd: 21,
                    skip: [16],
                    pub: 'aa',
                    pubClass: 'b',
                    number: 30,
                    grade: 0,
                    filename: 'liber-librae'
                },
                {
                    title: 'LIBER EXERCITIORUM',
                    subtitle: 'LIBER E. VEL EXERCITIORUM SVB FIGVRA IX',
                    author: 'crowley',
                    pageStart: 23,
                    pageEnd: 34,
                    addPage: [{filename: '029image.jpg', after: "028.png"}],
                    pub: 'aa',
                    pubClass: 'b',
                    number: 9,
                    grade: [0, 1],
                    filename: 'liber-exercitiorum'
                },
                {
                    title: 'THE WIZARD WAY',
                    author: 'crowley',
                    pageStart: 35,
                    pageEnd: 46,
                    filename: 'the-wizard-way',
                    skip: [36]
                },
                {
                    title: 'THE MAGIC GLASSES',
                    author: 'harris',
                    pageStart: 47,
                    pageEnd: 86,
                    filename: 'the-magic-glasses',
                    skip: [48]
                },
                {
                    title: 'THE CHYMICAL JOUSTING OF BROTHER PERARDUA',
                    subtitle: 'WITH THE SEVEN LANCES THAT HE BRAKE',
                    author: ['crowley', {name:'fuller', role:'illustrator'}],
                    pub: 'aa',
                    pubClass: 'c',
                    number: 55,
                    grade: 4,
                    pageStart: 87,
                    pageEnd: 93,
                    addPage: [{filename: '089image.jpg', after: "087.png"}],
                    filename: 'the-chymical-jousting-of-brother-perardua',
                    skip: [88]
                },
                {
                    title: 'THE LONELY BRIDE',
                    author: 'neuburg',
                    pageStart: 95,
                    pageEnd: 97,
                    filename: 'the-lonely-bride'
                },
                {
                    title: 'AT THE FORK OF THE ROADS',
                    author: 'crowley',
                    pageStart: 99,
                    pageEnd: 108,
                    filename: 'at-the-fork-of-the-roads',
                    skip: [100]
                },
                {
                    title: 'THE MAGICIAN',
                    author: ['lévi', 'honorius', {name:'crowley', role:'translator'}],
                    translated: 'crowley',
                    pageStart: 109,
                    pageEnd: 109,
                    filename: 'the-magician'
                },
                {
                    title: 'THE SOLDIER AND THE HUNCHBACK: ! AND ?',
                    author: 'crowley',
                    pub: 'aa',
                    pubClass: 'c',
                    number: 148,
                    pageStart: 111,
                    pageEnd: 135,
                    filename: 'the-soldier-and-the-hunchback',
                    skip: [112]
                },
                {
                    title: 'THE HERMIT',
                    subtitle: 'AN ATTACK ON BARBERCRAFT',
                    author: 'crowley',
                    pageStart: 137,
                    pageEnd: 138,
                    filename: 'the-hermit'
                },
                {
                    title: 'THE TEMPLE OF SOLOMON THE KING',
                    subtitle: 'BOOK I, The Foundations of the Temple',
                    author: ['fuller', {name:'crowley', role:'documents'}],
                    pageStart: 139,
                    pageEnd: 230,
                    skip: [140, 166],
                    filename: 'the-temple-of-solomon-the-king-part-1'
                },
                {
                    title: 'THE HERB DANGEROUS',
                    subtitle: '(PART I) A PHARMACEUTICAL STUDY OF CANNABIS SATIVA',
                    author: 'whineray',
                    pageStart: 231,
                    pageEnd: 255,
                    skip: [232],
                    filename: 'the-herb-dangerous-part-1'
                },
                {
                    title: 'JOHN ST. JOHN',
                    subtitle: 'THE RECORD OF THE MAGICAL RETIREMENT OF G.H. FRATER, O∴M∴',
                    author: 'crowley',
                    pub: 'aa',
                    pubClass: 'c',
                    number: 860,
                    grade: 5,
                    filename: 'john-st-john',
                    pageStart: 1,
                    pageEnd: 139,
                    skip: [2],
                    addPage: [{filename: 's002image.jpg', after: "s001.png"}],
                    prefix: 's',
                    pageInfo: 'supplement 1-139'
                },
                {
                    title: 'ADVERTISEMENTS',
                    filename: 'advertisements',
                    pageStart: 0,
                    pageEnd: 8,
                    prefix: 'ad',
                    pageInfo: 'ads 1-9'
                }
            ],
            illustrations: [
                {
                    title:'THE SILENT WATCHER',
                    facingPage: 6,
                    filename:''
                }
                /*
                 THE SILENT WATCHER Facing page 6
                 THE FOUR POSITIONS: THE IBIS, THE GOD, THE THUNDERBOLT, THE DRAGON 29
                 THE REGIMEN OF THE SEVEN 89
                 BLIND FORCE (SUPPLEMENT) 2
                 */
            ]
        },

        {
            title: 'Volume I Number II',
            pubName: 'Simpkin, Marshall, Hamilton, Kent & CO. LTD.',
            pubLocation: 'London',
            pubYear: '1909',
            folder: '1.2',
            contents: [
                {
                    title: 'COVER, TITLE, AND TABLE OF CONTENTS',
                    pageStart: 1,
                    pageEnd: 5,
                    addPage: [{filename: '_cover.jpg'}],
                    prefix: '_',
                    filename: 'cover-title-and-contents'
                },
                {
                    title: 'EDITORIAL',
                    author: ['crowley', 'fuller'],
                    pageStart: 1,
                    pageEnd: 10,
                    filename: 'editorial'
                },
                {
                    title: 'LIBER O',
                    subtitle: 'VEL MANVS ET SAGITTAE SVB FIGVRA VI',
                    author: 'crowley',
                    pageStart: 11,
                    pageEnd: 30,
                    addPage: [{filename: '012image.png', after: '012.png'}],
                    pub: 'aa',
                    pubClass: 'b',
                    number: 6,
                    grade: [0, 1],
                    filename: 'liber-o'
                },
                {
                    title: 'THE HERB DANGEROUS',
                    subtitle: '(PART II) THE PSYCHOLOGY OF HASHISH',
                    author: 'crowley',
                    pageStart: 31,
                    pageEnd: 89,
                    skip: [32],
                    filename: 'the-herb-dangerous-part-2'
                },
                {
                    title: 'THE GARDEN OF JANUS',
                    author: 'crowley',
                    pageStart: 91,
                    pageEnd: 103,
                    skip: [92],
                    filename: 'the-garden-of-janus'
                },
                {
                    title: 'THE DREAM CIRCEAN',
                    author: 'crowley',
                    pageStart: 105,
                    pageEnd: 130,
                    skip: [106],
                    filename: 'the-dream-circean'
                },
                {
                    title: 'THE LOST SHEPHERD',
                    author: 'neuburg',
                    pageStart: 131,
                    pageEnd: 136,
                    skip: [106],
                    filename: 'the-lost-shepherd'
                },
                {
                    title: 'A HANDBOOK OF GEOMANCY',
                    subtitle: 'LIBER GAIAS',
                    author: {name: 'crowley', role:'reviser'},
                    pageStart: 137,
                    pageEnd: 161,
                    pub: 'aa',
                    pubClass: 'b',
                    number: 96,
                    grade: 1,
                    filename: 'a-handbook-of-geomancy'
                },
                {
                    title: "THE ORGAN IN KING'S CHAPEL, CAMBRIDGE",
                    author: 'pinsent',
                    pageStart: 162,
                    pageEnd: 162,
                    filename: 'the-organ-in-kings-chapel-cambridge'
                },
                {
                    title: 'A NOTE ON GENESIS',
                    author: ['bennett', {name: 'crowley', role:'preface'}],
                    pageStart: 163,
                    pageEnd: 185,
                    pub: 'aa',
                    pubClass: 'c',
                    number: 2911,
                    grade: 3,
                    filename: 'a-note-on-genesis'
                },
                {
                    title: 'THE FIVE ADORATIONS',
                    author: 'crowley',
                    pageStart: 186,
                    pageEnd: 186,
                    filename: 'the-five-adorations'
                },
                {
                    title: "ILLUSION D'AMOUREUX",
                    author: 'crowley',
                    pageStart: 187,
                    pageEnd: 190,
                    filename: 'illusion-damoureux'
                },
                {
                    title: "THE OPIUM-SMOKER",
                    subtitle: '(IN EIGHT FUGUES)',
                    author: 'crowley',
                    pageStart: 191,
                    pageEnd: 195,
                    filename: 'the-opium-smoker'
                },
                {
                    title: "POSTCARDS TO PROBATIONERS",
                    author: 'crowley',
                    pageStart: 196,
                    pageEnd: 200,
                    filename: 'postcards-to-probationers'
                },
                {
                    title: "THE WILD ASS",
                    author: 'crowley',
                    pageStart: 201,
                    pageEnd: 204,
                    filename: 'the-wild-ass'
                },
                {
                    title: "THE SPHINX AT GIZAH",
                    author: 'dunsany',
                    pageStart: 205,
                    pageEnd: 208,
                    skip: [206],
                    filename: 'the-sphinx-at-gizah'
                },
                {
                    title: "THE PRIESTESS OF PANORMITA",
                    author: 'crowley',
                    pageStart: 209,
                    pageEnd: 216,
                    filename: 'the-priestess-of-panormita'
                },

                {
                    title: "THE TEMPLE OF SOLOMON THE KING",
                    subtitle: 'BOOK II, The Scaffolding of the Temple',
                    author: ['fuller', {name:'crowley', role:'documents'}],
                    pageStart: 217,
                    pageEnd: 334,
                    skip: [218, 222],
                    filename: 'the-temple-of-solomon-the-king-part-2'
                },

                {
                    title: "AMONGST THE MERMAIDS",
                    author: 'roe',
                    pageStart: 335,
                    pageEnd: 349,
                    skip: [336],
                    filename: 'amongst-the-mermaids'
                },
                {
                    title: "AVE ADONAI",
                    author: 'crowley',
                    pageStart: 351,
                    pageEnd: 352,
                    filename: 'ave-adonai'
                },
                {
                    title: "THE MAN-COVER",
                    author: 'raffalovich',
                    pageStart: 353,
                    pageEnd: 384,
                    skip: [354],
                    filename: 'the-man-cover'
                },
                {
                    title: 'REVIEWS',
                    pageStart: 385,
                    pageEnd: 392,
                    addPage: [{filename: '090.png'}, {filename: '104.png'}],
                    filename: 'reviews'
                },
                {
                    title: "STEWED PRUNES AND PRISM",
                    subtitle: 'THE TENNYSON CENTENARY',
                    author: 'crowley',
                    pageStart: 393,
                    pageEnd: 397,
                    filename: 'stewed-prunes-and-prism'
                },
                {
                    title: 'ADVERTISEMENTS',
                    filename: 'advertisements',
                    pageStart: 1,
                    pageEnd: 8,
                    addPage: [{filename: '_000.png'}, {filename: 'ad009.jpg', after: 'ad008.png'}],
                    prefix: 'ad',
                    pageInfo: 'ads 0-9'
                }
            ]
        },

        {
            title: 'Volume I Number III',
            pubName: 'Simpkin, Marshall, Hamilton, Kent & CO. LTD.',
            pubLocation: 'London',
            pubYear: '1910',
            folder: '1.3',
            contents: [
                {
                    title: 'COVER, TITLE, AND TABLE OF CONTENTS',
                    pageStart: 1,
                    pageEnd: 14,
                    skip: [2, 3, 4, 6, 11, 13],
                    addPage: [{filename: '_cover.jpg'}],
                    prefix: '_',
                    filename: 'cover-title-and-contents'
                },
                {
                    title: 'EDITORIAL',
                    author: 'crowley',
                    pageStart: 1,
                    pageEnd: 2,
                    filename: 'editorial'
                },
                {
                    title: 'LIBER XIII',
                    subtitle: 'VEL GRADUUM MONTIS ABIEGNI, A SYLLABUS OF THE STEPS UPON THE PATH',
                    author: 'crowley',
                    pageStart: 3,
                    pageEnd: 8,
                    addPage: [{filename: '004image.png', after: '004.png'}],
                    pub: 'aa',
                    pubClass: 'd',
                    number: 13,
                    grade: [2],
                    filename: 'liber-graduum-montis-abiegni'
                },
                {
                    title: 'AHA!',
                    subtitle: 'The Sevenfold Mystery of the Ineffable Love',
                    author: 'crowley',
                    pageStart: 9,
                    pageEnd: 54,
                    skip: [10, 14],
                    addPage: [{filename: '010image.jpg', after: '009.png'}],
                    pub: 'aa',
                    pubClass: 'c',
                    number: 242,
                    grade: [4],
                    filename: 'aha'
                },
                {
                    title: 'THE HERB DANGEROUS',
                    subtitle: '(PART III) THE POEM OF HASHISH',
                    author: ['baudelaire', {name: 'crowley', role:'translator'}],
                    pageStart: 55,
                    pageEnd: 112,
                    skip: [56],
                    filename: 'the-herb-dangerous-part-3'
                },
                {
                    title: 'AN ORIGIN',
                    author: 'neuburg',
                    pageStart: 115,
                    pageEnd: 118,
                    filename: 'an-origin'
                },
                {
                    title: 'THE SOUL-HUNTER',
                    author: 'crowley',
                    pageStart: 119,
                    pageEnd: 128,
                    skip: [120],
                    filename: 'the-soul-hunter'
                },
                {
                    title: 'MADELEINE',
                    author: 'grimble',
                    pageStart: 129,
                    pageEnd: 131,
                    filename: 'madeleine'
                },
                {
                    title: "THE TEMPLE OF SOLOMON THE KING",
                    subtitle: 'BOOK III, The Portal of the Temple',
                    author: ['fuller', {name:'crowley', role:'documents'}],
                    pageStart: 133,
                    pageEnd: 280,
                    addPage: [
                        {filename: '210image.png', after: '210.png'},
                        {filename: '212image.png', after: '212.png'},
                        {filename: '218image.png', after: '218.png'},
                        {filename: '222image.png', after: '222.png'}
                        ],
                    pub: 'aa',
                    pubClass: 'b',
                    filename: 'the-temple-of-solomon-the-king-part-3'
                },
                {
                    title: 'THE COMING OF APOLLO',
                    author: 'neuburg',
                    pageStart: 281,
                    pageEnd: 284,
                    filename: 'the-coming-of-apollo'
                },
                {
                    title: 'THE BRIGHTON MYSTERY',
                    author: 'raffalovich',
                    pageStart: 287,
                    pageEnd: 303,
                    filename: 'the-brighton-mystery'
                },

                {
                    title: 'REVIEWS',
                    pageStart: 304,
                    pageEnd: 326,
                    addPage: [
                        {filename: '113.png'},
                        {filename: '114.png'},
                        {filename: '285.png'},
                        {filename: '286.png'},
                        {filename: 's075.png', after: '326.png'},
                        {filename: 's076.png', after: '326.png'}
                        ],
                    filename: 'reviews'
                },
                {
                    title: 'THE SHADOWY DILL-WATERS',
                    subtitle: 'OR MR. SMUDGE THE MEDIUM',
                    pageStart: 327,
                    pageEnd: 331,
                    filename: 'the-shadowy-dill-waters'
                },

                {
                    title: 'LIBER DCCCCLXIII-THE TREASURE-HOUSE OF IMAGES',
                    subtitle: 'LIBER ΘΕΣΑΥΡΟΥ ̓ΕΙΔΩΛΩΝ',
                    author: ['fuller', {name:'crowley', role:'editor'}, {name:'crowley', role:'illustrator'}],
                    pub: 'aa',
                    pubClass: 'a&b',
                    number: 963,
                    grade: 2,
                    filename: 'liber-dcccclxiii-the-treasure-house-of-images',
                    pageStart: 1,
                    pageEnd: 74,
                    skip: [2],
                    addPage: [
                        {filename: 's004image.png', after: "s004.png"},
                        {filename: 's070image.png', after: "s070.png"}
                        ],
                    prefix: 's',
                    pageInfo: 'supplement 1-74'
                },

                {
                    title: 'ADVERTISEMENTS',
                    filename: 'advertisements',
                    pageStart: 1,
                    pageEnd: 8,
                    addPage: [{filename: '_002.png'}, {filename: '_003.png'}, {filename: '_004.png'}, {filename: '_006.png'}],
                    prefix: 'ad',
                    pageInfo: 'ads 1-8'
                }
            ]
        },

        {
            title: 'Volume I Number IV',
            pubName: 'Self-Published',
            pubLocation: 'London',
            pubYear: '1910',
            folder: '1.4',
            contents: [
                {
                    title: 'COVER, TITLE, AND TABLE OF CONTENTS',
                    pageStart: 9,
                    pageEnd: 16,
                    skip: [12],
                    addPage: [{filename: '_cover.jpg'}],
                    prefix: '_',
                    filename: 'cover-title-and-contents'
                },
                {
                    title: 'EDITORIAL',
                    author: 'crowley',
                    pageStart: 1,
                    pageEnd: 7,
                    filename: 'editorial'
                },
                {
                    title: 'LIBER III',
                    subtitle: 'VEL JVGORVM',
                    author: 'crowley',
                    pageStart: 9,
                    pageEnd: 14,
                    addPage: [{filename: '011image.png', after: '010.png'}],
                    pub: 'aa',
                    pubClass: 'd',
                    number: 3,
                    grade: [2],
                    filename: 'liber-jugorum'
                },
                {
                    title: 'LIBER A',
                    subtitle: 'VEL ARMORVM SVB FIGVRÂ CCCCXII',
                    author: 'crowley',
                    pageStart: 15,
                    pageEnd: 19,
                    pub: 'aa',
                    pubClass: 'd',
                    number: 412,
                    grade: [1],
                    filename: 'liber-armorum'
                },
                {
                    title: 'I.NSIT N.ATURAE R.EGINA I.SIS',
                    author: 'neuburg',
                    pageStart: 21,
                    pageEnd: 23,
                    filename: 'insit-naturae-regina-isis'
                },
                {
                    title: 'REVIEWS',
                    pageStart: 24,
                    pageEnd: 24,
                    addPage: [
                        {filename: '036.png'},
                        {filename: '239.png'},
                        {filename: '240.png'},
                        {filename: '292.png'}
                        ],
                    filename: 'reviews'
                },
                {
                    title: 'MY LADY OF THE BREECHES',
                    subtitle: 'A HISTORY—WITH A VENGEANCE',
                    author: 'raffalovich',
                    pageStart: 25,
                    pageEnd: 35,
                    skip: [26],
                    filename: 'my-lady-of-the-breeches'
                },
                {
                    title: 'AT BORDJ-AN-NUS',
                    author: 'crowley',
                    pageStart: 37,
                    pageEnd: 38,
                    filename: 'at-bordj-an-nus'
                },
                {
                    titleWeb: 'ΛΙΝΟΣ ΙΣΙΔΟΣ',
                    title: 'LINOS ISIDOS',
                    author: 'crowley',
                    pageStart: 39,
                    pageEnd: 40,
                    filename: 'linos-isidos'
                },
                {
                    title: 'THE TEMPLE OF SOLOMON THE KING',
                    subtitle: 'BOOK IV',
                    author: ['fuller', {name:'crowley', role:'documents'}],
                    pageStart: 41,
                    pageEnd: 196,
                    skip: [42],
                    addPage: [
                        {filename: '090image.png', after: '090.png'},
                        {filename: '108image.png', after: '108.png'},
                        {filename: '114image.png', after: '114.png'}
                        ],
                    pub: 'aa',
                    pubClass: 'b',
                    filename: 'the-temple-of-solomon-the-king-part-4'
                },
                {
                    title: 'PAN TO ARTEMIS',
                    author: 'crowley',
                    pageStart: 197,
                    pageEnd: 198,
                    filename: 'pan-to-artemis'
                },
                {
                    title: 'THE INTERPRETER',
                    author: 'crowley',
                    pageStart: 199,
                    pageEnd: 200,
                    addPage: [{filename: '199image.jpg'}],
                    filename: 'the-interpreter'
                },
                {
                    title: 'THE DAUGHTER OF THE HORSELEECH',
                    subtitle: 'A FABLE',
                    author: 'crowley',
                    pageStart: 201,
                    pageEnd: 207,
                    filename: 'the daughter of the horseleech'
                },
                {
                    title: 'THE DREAMER',
                    author: 'archer',
                    pageStart: 208,
                    pageEnd: 208,
                    filename: 'the dreamer'
                },
                {
                    title: 'MR. TODD',
                    subtitle: 'A MORALITY',
                    author: 'crowley',
                    pageStart: 209,
                    pageEnd: 235,
                    filename: 'mr todd'
                },
                {
                    title: 'THE GNOME',
                    author: 'neuburg',
                    pageStart: 236,
                    pageEnd: 238,
                    filename: 'the gnome'
                },
                {
                    title: 'THE HERB DANGEROUS',
                    subtitle: 'PART IV: THE HASHEESH EATER',
                    author: 'ludlow',
                    pageStart: 241,
                    pageEnd: 271,
                    skip: [242],
                    filename: 'the-herb-dangerous-part-4'
                },
                {
                    title: 'THE BUDDHIST',
                    author: 'crowley',
                    pageStart: 272,
                    pageEnd: 273,
                    filename: 'the buddhist'
                },
                {
                    title: 'THE AGNOSTIC',
                    author: 'neuburg',
                    pageStart: 274,
                    pageEnd: 274,
                    filename: 'the agnostic'
                },
                {
                    title: 'THE MANTRA-YOGI',
                    author: 'crowley',
                    pageStart: 275,
                    pageEnd: 276,
                    filename: 'the mantra-yogi'
                },
                {
                    title: 'THE VIOLINIST',
                    author: 'crowley',
                    pageStart: 277,
                    pageEnd: 280,
                    filename: 'the violinist'
                },
                {
                    title: 'EHE!',
                    subtitle: 'A DROP FROM THE SPONGE OF KNOWLEDGE',
                    author: 'raffalovich',
                    pageStart: 281,
                    pageEnd: 283,
                    filename: 'ehe'
                },
                {
                    title: 'HALF-HOURS WITH FAMOUS MAHATMAS',
                    subtitle: 'No. I',
                    author: 'fuller',
                    pageStart: 284,
                    pageEnd: 290,
                    filename: 'half-hours with famous mahatmas no 1'
                },
                {
                    title: 'THE THIEF-TAKER',
                    author: 'crowley',
                    pageStart: 291,
                    pageEnd: 291,
                    filename: 'the thief-taker'
                },
                {
                    title: 'THE EYES OF ST. LJUBOV',
                    subtitle: "DE LA RATIBOISIÈRE'S ACCOUNT OF THE TYPHLOSOPHISTS OF SOUTH RUSSIA",
                    author: ['raffalovich', 'fuller'],
                    pageStart: 293,
                    pageEnd: 309,
                    skip: [294],
                    filename: 'the eyes of st ljubov'
                },
                {
                    title: 'MIDSUMMER EVE',
                    author: 'archer',
                    pageStart: 310,
                    pageEnd: 310,
                    filename: 'midsummer eve'
                },
                {
                    title: 'THE POETICAL MEMORY',
                    subtitle: 'AN ESSAY',
                    author: 'crowley',
                    pageStart: 311,
                    pageEnd: 313,
                    filename: 'the poetical memory'
                },
                {
                    title: 'ADELA',
                    author: 'crowley',
                    pageStart: 314,
                    pageEnd: 316,
                    filename: 'adela'
                },
                {
                    title: 'THE THREE WORMS',
                    author: 'storer',
                    pageStart: 317,
                    pageEnd: 324,
                    filename: 'the three worms'
                },
                {
                    title: 'THE FELON FLOWER',
                    author: 'archer',
                    pageStart: 325,
                    pageEnd: 326,
                    filename: 'the felon flower'
                },
                {
                    title: 'THE BIG STICK',
                    pageStart: 327,
                    pageEnd: 345,
                    filename: 'the big stick'
                },
                {
                    title: "THE GLAZIERS' HOUSES",
                    subtitle: 'THE SHAVING OF SHAGPAT',
                    pageStart: 346,
                    pageEnd: 351,
                    filename: 'glaziers houses'
                },
                {
                    title: 'IN THE TEMPLE',
                    author: 'neuburg',
                    pageStart: 352,
                    pageEnd: 352,
                    filename: 'in the temple'
                },
                {
                    title: 'THE HIGH HISTORY OF GOOD SIR PALAMEDES THE SARACEN KNIGHT',
                    subtitle: 'AND OF HIS FOLLOWING OF THE QUESTING BEAST',
                    author: 'crowley',
                    grade: [4],
                    pub: 'aa',
                    pubClass: 'c',
                    number: 197,
                    pageStart: 1,
                    pageEnd: 113,
                    skip: [2],
                    prefix: 's',
                    addPage: [{filename: 'r001.png'}, {filename: 'r003.png'}, {filename: 'r005.png'}, {filename: 'r006.png'}, {filename: 'r007.png'}, {filename: 'r008.png'}],
                    filename: 'the high history of good sir palamedes the saracen knight'
                },

                {
                    title: 'ADVERTISEMENTS',
                    filename: 'advertisements',
                    pageStart: 1,
                    pageEnd: 7,
                    addPage: [{filename: '_002.png'}, {filename: '_003.png'}, {filename: '_004.png'}, {filename: '_005.png'}, {filename: '_006.png'}, {filename: '_007.png'}, {filename: '_008.png'}, {
                        filename: '_back.jpg',
                        after: 'xad007.png'
                    }],
                    prefix: 'xad',
                    pageInfo: 'ads 1-7'
                }

            ]
        },

        {
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
                    pageStart: 177,
                    pageEnd: 178,
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
        },


        {
            title: 'Volume I Number VI',
            pubName: 'Self-Published',
            pubLocation: 'London',
            pubYear: '1911',
            folder: '1.6',
            contents: [
                {
                    title: 'COVER, TITLE, AND TABLE OF CONTENTS',
                    pageStart: 6,
                    pageEnd: 11,
                    addPage: [{filename: '_cover.jpg'}],
                    skip:[9],
                    prefix: '_',
                    filename: 'cover-title-and-contents'
                },
                {
                    title: 'EDITORIAL',
                    author: 'crowley',
                    pageStart: 1,
                    pageEnd: 2
                },
                {
                    title: 'LIBER PORTA LVCIS',
                    subtitle: 'SVB FIGVRÂ X',
                    author: 'crowley',
                    pageStart: 3,
                    pageEnd: 7,
                    pub: 'aa',
                    pubClass: 'a',
                    number: 10,
                    grade: [0]
                },
                {
                    title: 'LIBER TVRRIS',
                    subtitle: 'VEL DOMVS DEI SVB FIGVRÂ XVI',
                    author: 'crowley',
                    pageStart: 9,
                    pageEnd: 15,
                    pub: 'aa',
                    pubClass: 'b',
                    number: 16,
                    grade: [4]
                },
                {
                    title: 'LIBER TZADDI',
                    subtitle: 'VEL HAMVS HERMETICVS SVB FIGVRÂ XC',
                    author: 'crowley',
                    pageStart: 17,
                    pageEnd: 22,
                    pub: 'aa',
                    pubClass: 'a',
                    number: 90,
                    grade: [0]
                },
                {
                    title: 'LIBER CHETH',
                    subtitle: 'VEL VALLVM ABIEGNI SVB FIGVRÂ CLVI',
                    author: 'crowley',
                    pageStart: 23,
                    pageEnd: 27,
                    pub: 'aa',
                    pubClass: 'a',
                    number: 90,
                    grade: [6]
                },
                {
                    title: 'LIBER RESH',
                    subtitle: 'VEL HELIOS SVB FIGVRÂ CC',
                    author: 'crowley',
                    pageStart: 29,
                    pageEnd: 32,
                    pub: 'aa',
                    pubClass: 'd',
                    number: 200,
                    grade: [0]
                },
                {
                    title: "LIBER A'ASH",
                    subtitle: 'VEL CAPRICORNI PNEVMATICI SVB FIGVRÂ CCCLXX',
                    author: 'crowley',
                    pageStart: 33,
                    pageEnd: 39,
                    pub: 'aa',
                    pubClass: 'a',
                    number: 370,
                    grade: []
                },

                {
                    title: 'THREE POEMS FOR JANE CHÉRON',
                    author: 'crowley',
                    pageStart: 41,
                    pageEnd: 51,
                    skip:[42]
                },
                {
                    title: 'CIRCE',
                    author: 'archer',
                    pageStart: 52,
                    pageEnd: 52
                },
                {
                    title: 'THE ELECTRIC SILENCE',
                    subtitle: 'A synopsis of The Temple of Solomon the King',
                    //author: 'crowley',
                    pageStart: 53,
                    pageEnd: 65,
                    skip:[54]
                },
                {
                    title: 'SONG',
                    author: 'archer',
                    pageStart: 66,
                    pageEnd: 66
                },
                {
                    title: 'THE SCORPION',
                    author: 'crowley',
                    pageStart: 67,
                    pageEnd: 00
                },
                {
                    title: '',
                    //author: 'crowley',
                    pageStart: 00,
                    pageEnd: 00
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
        },


        {
            title: 'Volume III Number I',
            pubName: 'Universal Publishing Company',
            pubLocation: 'Detroit',
            pubYear: '1919',
            folder: '3.1',
            contents: [
                {
                    title: 'COVER, TITLE, AND TABLE OF CONTENTS',
                    pageStart: 0,
                    pageEnd: 2,
                    addPage: [{filename: '_cover-3.1.jpg'}, {filename: '_title-color.png'}],
                    filename: 'cover-title-and-contents'
                },
                {
                    title: 'THE MASTER THERION',
                    author: 'kennedy',
                    addPage: [{filename: '000imagecover.png'}, {filename: '000image.png'}],
                    filename: 'the-master-therion',
                    pageInfo: 'frontispiece'
                },
                {
                    title: 'MAY MORN',
                    author: 'crowley',
                    addPage: [{filename: '005imagecover.png'}, {filename: '005image.png'}],
                    filename: 'may-morn',
                    pageInfo: 'facing page 5'
                },
                {title: 'HYMN TO PAN', pageStart: 5, pageEnd: 7, filename: 'hymn-to-pan'},
                {title: 'COMMUNICATING WITH THE A∴A∴', pageStart: 8, pageEnd: 8, pub: 'aa', filename: 'communicating'},
                {title: 'EDITORIAL', pageStart: 9, pageEnd: 10, filename: 'editorial'},
                {
                    title: 'PRÆMONSTRANCE OF A∴A∴',
                    pageStart: 11,
                    pageEnd: 17,
                    pub: 'aa',
                    filename: 'praemonstrance-of-aa'
                },
                {title: 'CURRICULUM OF A∴A∴', pageStart: 18, pageEnd: 38, pub: 'aa', filename: 'curriculum-of-aa'},
                {
                    title: 'LIBER II',
                    subtitle: 'The Message of The Master Therion',
                    pub: 'aa',
                    pubClass: 'e',
                    number: 2,
                    grade: 0,
                    pageStart: 39,
                    pageEnd: 43,
                    filename: 'liber-ii'
                },
                {title: 'THE TENT', filename: 'the-tent', pageStart: 44, pageEnd: 44},
                {
                    title: 'LIBER DCCCXXXVII',
                    filename: 'liber-dcccxxxvii',
                    pageStart: 45,
                    pageEnd: 52,
                    subtitle: 'The Law of Liberty, a Tract of [To Mega Therion] 666, that is a Magus 9°=2▫ A∴A∴',
                    pub: 'aa',
                    pubClass: 'e',
                    number: 837,
                    grade: 0
                },
                {
                    title: 'LIBER LXI',
                    filename: 'liber-lxi',
                    pageStart: 53,
                    pageEnd: 61,
                    subtitle: 'VEL CAUSÆ A∴A∴ The Preliminary Lection Including the History Lection',
                    pub: 'aa',
                    pubClass: 'd',
                    number: 61
                },
                {title: 'A PSALM', filename: 'psalm1', pageStart: 62, pageEnd: 62},
                {
                    title: 'LIBER LXV',
                    filename: 'liber-lxv',
                    pageStart: 63,
                    pageEnd: 98,
                    subtitle: 'LIBER CORDIS CINCTI SERPENTE SVB FIGVRA אדני',
                    pub: 'aa',
                    pubClass: 'a',
                    number: 65,
                    grade: 0
                },

                {
                    title: 'LIBER CL',
                    filename: 'liber-cl',
                    pageStart: 99,
                    pageEnd: 125,
                    subtitle: 'VEL נעל A Sandal DE LEGE LIBELLVM L-L-L-L-L',
                    pub: 'aa',
                    pubClass: 'e',
                    number: 150,
                    grade: 0
                },
                {title: 'A PSALM', filename: 'psalm2', pageStart: 126, pageEnd: 126},
                {
                    title: 'LIBER CLXV',
                    filename: 'liber-clxv',
                    pageStart: 127,
                    pageEnd: 170,
                    addPage: [
                        {filename: '129imagecover.png', after: "128.png"}, {filename: '129image.jpg', after: "128.png"},
                        {filename: '169imagecover.png', after: "169.png"}, {filename: '169image.png', after: "169.png"},
                        {filename: '170imagecover.png', after: "169.png"}, {filename: '170image.png', after: "169.png"}
                    ],
                    pub: 'aa',
                    pubClass: 'b',
                    number: 165,
                    subtitle: 'A Master of the Temple, Being an Account of the The Attainment of FRATER VNVS IN OMNIBVS'
                },

                {
                    title: 'LIBER CCC',
                    filename: 'liber-ccc',
                    pageStart: 171,
                    pageEnd: 182,
                    pub: 'aa',
                    pubClass: 'e',
                    number: 300,
                    grade: 0,
                    subtitle: 'KHABS AM PEKHT'
                },
                {
                    title: 'STEPPING OUT OF THE OLD ÆON INTO THE NEW',
                    author: 'jones',
                    filename: 'stepping-out-of-the-old-aeon',
                    pageStart: 183,
                    pageEnd: 186
                },
                {title: 'THE SEVEN FOLD SACRAMENT', filename: 'seven-fold-sacrament', pageStart: 187, pageEnd: 194},
                {
                    title: 'LIBER LII',
                    filename: 'liber-lii',
                    pageStart: 195,
                    pageEnd: 206,
                    addPage: [{filename: '197imagecover.png', after: "196.png"}, {
                        filename: '197image.png',
                        after: "196.png"
                    }],
                    pub: 'oto',
                    number: 52,
                    subtitle: 'Manifesto of the O.T.O.'
                },
                {
                    title: 'LIBER CI',
                    filename: 'liber-ci',
                    pageStart: 207,
                    pageEnd: 224,
                    pub: 'oto',
                    number: 110,
                    subtitle: 'An open Letter to those who may wish to join the Order'
                },
                {
                    title: 'LIBER CLXI',
                    filename: 'liber-clxi',
                    pageStart: 225,
                    pageEnd: 238,
                    pub: 'oto',
                    number: 161,
                    subtitle: 'Concerning The Law of Thelema'
                },
                {
                    title: 'LIBER CXCIV',
                    filename: 'liber-cxciv',
                    pageStart: 239,
                    pageEnd: 246,
                    pub: 'oto',
                    number: 194,
                    subtitle: 'An intimation with reference to the constitution of the Order'
                },
                {
                    title: 'LIBER XV',
                    filename: 'liber-xv',
                    pageStart: 247,
                    pageEnd: 270,
                    pub: 'oto',
                    number: 15,
                    subtitle: 'ECCLESIAE GNOSTICAE CATHOLICAE CANON MISSAE'
                },
                {title: 'NEKAM ADONAI!', filename: 'nekam-adonai', pageStart: 271, pageEnd: 273},
                {title: 'A LA LOGE', filename: 'a-la-loge', pageStart: 274, pageEnd: 274},
                {
                    title: 'THE TANK',
                    filename: 'the-tank',
                    pageStart: 275,
                    pageEnd: 307,
                    skip: [276],
                    subtitle: "Treat 'em rough"
                },
                {
                    title: 'LIBER LXXI',
                    author:['blavatsky', {name:'crowley', role:'commentator'}],
                    filename: 'liber-lxxi',
                    pageStart: 1,
                    pageEnd: 132,
                    skip: [3],
                    addPage: [{filename: 's003imagecover.png', after: "s002.png"}, {
                        filename: 's003image.png',
                        after: "s002.png"
                    }],
                    prefix: 's',
                    pageInfo: 'supplement 1-132',
                    pub: 'aa',
                    pubClass: 'b',
                    number: 71,
                    subtitle: 'The Voice of the Silence, The Two Paths, The Seven Portals'
                },
                {
                    title: 'ADVERTISEMENTS',
                    filename: 'advertisements',
                    pageStart: 1,
                    pageEnd: 11,
                    prefix: 'ad',
                    pageInfo: 'ads 1-11'
                }
            ]

        }

    ]
};

data.authors = [
    {last:'Archer', other:'Ethel'},
    {last:'Baudelaire', other:'Charles Pierre'},
    {last:'Bennett', other:'Allen'},
    {last:'Blavatsky', other: 'Helena Petrovna'},
    {last:'Close', other:'Herbert'},
    {last:'Crowley', other:'Aleister'},
    {last:'Dunsany', other:'Lord'},
    {last:'Fuller', other:'J.F.C.'},
    {last:'Grimble', other:'Arthur F.'},
    {last:'Harris', other:'Frank'},
    {last:'Honorius', other:'Pope'},
    {last:'Jenkins', other:'D. Hamish'},
    {last:'Jones', other:'Charles Stansfeld'},
    {last:'Kennedy', other:'Leon Engers'},
    {last:'Lévi', other:'Éliphas'},
    {last:'Ludlow', other:'Fitz Hugh'},
    {last:'Neuburg', other:'Victor B.'},
    {last:'Perry', other:'S.H.'},
    {last:'Pinsent', other:'G.H.S.'},
    {last:'Prichard', other:'Katharine Susannah'},
    {last:'Raffalovich', other:'George'},
    {last:'Roe', other:'Norman'},
    {last:'Storer', other:'Edward'},
    {last:'Sturges', other:"Mary d'Este"},
    {last:'Waddell', other:'Laylah'},
    {last:'Whineray', other:'Edward P.'}
];

if (typeof exports !== 'undefined') exports.data = data;

//exports.data = data;
//export default data;

/*

ILLUSTRATIONS

1.1


1.2

 */