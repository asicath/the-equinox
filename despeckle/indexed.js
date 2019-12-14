// {compressionLevel: 6, filters: canvas.PNG_ALL_FILTERS, palette: undefined, backgroundIndex: 0, resolution: undefined}

/*
const palette = new Uint8ClampedArray([
    //r    g    b    a
    0,  50,  50, 255, // index 1
    10,  90,  90, 255, // index 2
    127, 127, 255, 255
    // ...
])
canvas.createPNGStream({
    palette: palette,
    backgroundIndex: 0 // optional, defaults to 0
})

*/


let Canvas = require('canvas');
let fs = require('fs');

// create the palette
let palette = new Uint8ClampedArray(256 * 4);
for (let i = 0; i < 256; i++) {
    palette[i * 4 + 0] = i;
    palette[i * 4 + 1] = i;
    palette[i * 4 + 2] = i;
    palette[i * 4 + 3] = 255
}

let canvas = Canvas.createCanvas(200, 200);
let ctx = canvas.getContext('2d', { pixelFormat: 'A8' });

let width = 200;
let height = 200;
let idata = ctx.getImageData(0, 0, width, height);

let index = 0;
for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        idata.data[x + y * width] = index;
        index = (index + 1) % 256;
    }
}

ctx.putImageData(idata, 0, 0);

canvas.createPNGStream({ palette: palette })
    .pipe(fs.createWriteStream('G:/goetia/03/test-grey.png'));