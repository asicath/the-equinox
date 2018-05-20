
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