
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