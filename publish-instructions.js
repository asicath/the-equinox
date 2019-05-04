
exports.eq1_1 = [
    {},
    {},
    {file:'_001.png'},
    {file:'_002.png'},
    {file:'_003.png'},
    {file:'copyright.png'},
    {file:'_004.png'},
    {},
    {file:'_005.png'},
    {},
    {
        start:1,
        end:255,
        insert: [
            {file:'006image.png', after:6, blank:'after'},
            {file:'029image.png', after:28, blank:'before'},
            {file:'089image.png', after:88, blank:'before'}
        ]
    },
    {},
    {
        start:1,
        end:139,
        prefix:'s',
        insert: [
            {file:'s002image.png', after:2, blank:'after'}
        ]
    },
    {
        start:0,
        end:8,
        prefix:'ad'
    },
    {},
    {}
];

exports.eq1_2 = [

    {}, // not real, just used as placeholder so that 000 faces right
    {file:'_000.png'}, // actually the inside cover

    {},
    {},

    // for some reason I put these in backwards...
    {file:'_002.png'},
    {file:'_001.png'},

    {file:'_003.png'},
    {file:'copyright.png'},
    {file:'_004.png'},
    {},
    {file:'_005.png'},
    {},
    {
        start:1,
        end:397,
        insert: [
            {file:'012image.png', after:12, blank:'after'}
        ]
    },
    {
        start:1,
        end:7,
        prefix:'ad'
    },

    {},
    {},

    {file:'ad008.png'}, // actually the inside cover
    {} // not real, just used as placeholder so that 008 faces left

];

exports.eq1_3 = [

    {}, // not real, just used as placeholder so that 000 faces right because we can't print on the other side of the cover
    {file:'_001.png'}, // actually the inside cover
    {file:'_002.png'},
    {file:'_003.png'},
    {file:'_004.png'},
    {file:'_005.png'},
    {file:'_006.png'},
    {file:'_007.png'},
    {file:'_008.png'},
    {file:'_009.png'},
    {file:'_010.png'},
    {file:'copyright.png'},
    {file:'_012.png'},
    {},
    {file:'_014.png'},
    {},
    {
        start:1,
        end:331,
        insert: [
            {file:'004image.png', after:4, blank:'after'},
            {file:'010image.jpg', after:10, blank:'after'},
            {file:'210image.png', after:210, blank:'after'},
            {file:'212image.png', after:212, blank:'after'},
            {file:'218image.png', after:218, blank:'after'},
            {file:'222image.png', after:222, blank:'after'}
        ]
    },
    {},
    {
        start:1,
        end:76,
        prefix:'s',
        insert: [
            {file:'s004image.png', after:4, blank:'after'},
            {file:'s074image.png', after:74, blank:'after'}
        ]
    },
    {
        start:1,
        end:7,
        prefix:'ad'
    },

    {} // not real, just used as placeholderto fill the last left page

];

exports.eq1_4 = [

    {}, // not real, just used as placeholder so that 000 faces right because we can't print on the other side of the cover
    {file:'_002.png'}, // actually the inside cover
    {file:'_003.png'},
    {file:'_004.png'},
    {file:'_005.png'},
    {file:'_006.png'},
    {file:'_007.png'},
    {file:'_008.png'},
    {file:'_009.png'},
    {file:'_010.png'},
    {file:'_011.png'},
    {file:'copyright.png'},
    {file:'_013.png'},
    {file:'_014.png'},
    {file:'_015.png'},
    {file:'_016.png'},
    {
        start:1,
        end:352,
        insert: [
            {file:'011image.png', after:10, blank:'before'},
            {file:'090image.png', after:90, blank:'after'},
            {file:'108image.png', after:108, blank:'after'},
            {file:'114image.png', after:114, blank:'after'},
            {file:'199image.png', after:198, blank:'before'}
        ]
    },
    {
        start:1,
        end:8,
        prefix:'r',
        insert: []
    },
    {
        start:1,
        end:113,
        prefix:'s',
        insert: []
    },
    {},
    {
        start:1,
        end:7,
        prefix:'xad'
    },

    {} // not real, just used as placeholder to fill the last left page

];

exports.eq1_5 = [
    {}, // not real, just used as placeholder so that 000 faces right because we can't print on the other side of the cover
    {file:'_001.png'}, // actually the inside cover
    {file:'_002.png'},
    {file:'_003.png'},
    {file:'_004.png'},
    {file:'_005.png'},
    {file:'_006.png'},
    {file:'_007.png'},
    {file:'_008.png'},
    {file:'copyright.png'},
    {file:'_010.png'},
    {},
    {
        start:1,
        end:158,
        insert: []
    },
    {},
    {},
    {
        start:1,
        end:179,
        prefix:'s',
        insert: [
            {file:'s047image.png', after:46, blank:'before'}
        ]
    },
    {
        start:1,
        end:10,
        prefix:'xad'
    },
    {} // not real, just used as placeholder to fill the last left page
];

exports.eq1_6 = [
    {}, // not real, just used as placeholder so that 000 faces right because we can't print on the other side of the cover
    {file:'_002.png'}, // actually the inside cover
    {file:'_003.png'},
    {file:'_004.png'},
    {file:'_005.png'},
    {file:'_006.png'},
    {file:'_007.png'},
    {file:'_008.png'},
    {file:'_009.png'},
    {file:'copyright.png'}, // need to incorporate the original publishing note #10
    {file:'_011.png'},
    {},
    {
        start:1,
        end:170,
        insert: []
    },
    {},
    {},
    {
        start:1,
        end:6,
        prefix:'s_',
        insert: []
    },
    {
        start:1,
        end:124,
        prefix:'s',
        insert: []
    },
    {
        start:1,
        end:11,
        prefix:'xad'
    },
    {} // not real, just used as placeholder to fill the last left page
];


exports.eq1_7 = [
    {}, // not real, just used as placeholder so that 000 faces right because we can't print on the other side of the cover
    {file:'_002.png'}, // actually the inside cover

    {},
    {file:'_e2image.png'},

    {},
    {file:'_e1image.png'},

    {file:'_003.png'},
    {file:'_004.png'},

    {file:'_005.png'},
    {file:'_006.png'},

    {file:'_007.png'},
    {file:'copyright.png'}, // need to incorporate the original publishing note #8

    {
        start:1,
        end:424,
        insert: [
            {file:'frontispiece.jpg', after:2, blank:'before'},
            {file:'frontispiece_desc.png', after:2, blank:'before'},
            // need to insert the caption w/ blank before
            {file:'062image.png', after:62, blank:'after'},

            {file:'070image.png', after:70, blank:'after'},
            {file:'076image.png', after:76, blank:'after'},


            {file:'230image.png', after:230, blank:'after'},
            {file:'232image.png', after:232, blank:'after'},
            {file:'234image-1.png', after:234, blank:'after'},
            {file:'234image-2.png', after:234, blank:'after'},
            {file:'234image-3.png', after:234, blank:'after'},
            {file:'234image-4.png', after:234, blank:'after'},
            {file:'234image-5.png', after:234, blank:'after'},
            {file:'234image-6.png', after:234, blank:'after'},

            {file:'238image.png', after:238, blank:'after'},
            {file:'242image.png', after:242, blank:'after'},

            {file:'368image.jpg', after:368},
            {file:'368image-back.png', after:368},
            {file:'369image-back.png', after:368},
            {file:'369image.jpg', after:368},

            {file:'386image-1.png', after:386, blank:'after'},
            {file:'386image-2.png', after:386, blank:'after'},
            {file:'386image-3.png', after:386, blank:'after'}
        ]
    },
    {
        start:1,
        end:15,
        prefix:'xad'
    },
    {} // not real, just used as placeholder to fill the last left page
];


exports.eq1_8 = [
    {}, // not real, just used as placeholder so that 000 faces right because we can't print on the other side of the cover
    {
        start:2,
        end:40,
        prefix:'_',
        replace: {
            20: 'copyright.png', // copyright replaces 20, need to incorporate the original publishing note
            32: '_032image.jpg'
        }
    },

    {
        start:1,
        end:252,
        insert: [
            {file:'032image.jpg', after:32, blank:'after'},
            {file:'145image.png', after:144, blank:'before'}
        ]
    },
    {
        start:1,
        end:16,
        prefix:'s_'
    },
    {
        start:1,
        end:100,
        prefix:'s',
        blankEveryOther: true, // all the backs are blank, for notes?
    },
    // last page does not have a blank after, just followed by 102
    {file:'s101.png'},
    {file:'s102.png'},

    {},
    {},
    {
        start:253,
        end:257
    },

    {
        start:1,
        end:22,
        prefix:'z'
    },
    {} // not real, just used as placeholder to fill the last left page
];


exports.eq1_9 = [
    {}, // not real, just used as placeholder so that 000 faces right because we can't print on the other side of the cover
    {
        start:2,
        end:25,
        prefix:'_',
        replace: {
            20: 'copyright.png' // copyright replaces 20, need to incorporate the original publishing note
        }
    },
    {},
    {
        start:1,
        end:314
    },
    {
        start:1,
        end:21,
        prefix:'x'
    },
    {} // not real, just used as placeholder to fill the last left page
];

exports.eq1_10 = [
    {}, // not real, just used as placeholder so that 000 faces right because we can't print on the other side of the cover
    {
        start:2,
        end:42,
        prefix:'_'
    },
    {
        start:1,
        end:224,
        insert: [
            {file:'001image.png', blank:'before'},
            {file:'095image.png', after:94, blank:'before'}
        ],
        replace: {
            2: 'copyright.png' // copyright replaces 2, need to incorporate the original publishing note
        }
    },
    {
        start:1,
        end:16,
        prefix:'s_'
    },
    {
        start:1,
        end:292,
        prefix:'s'
    },
    {
        start:225,
        end:244
    },
    {
        start:1,
        end:23,
        prefix:'x'
    },
    {} // not real, just used as placeholder to fill the last left page
];