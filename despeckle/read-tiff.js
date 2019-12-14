const { decode } = require("decode-tiff");

const fs = require("fs");

let inPath = 'G:/goetia/02/black.tif';

const { width, height, data, ifdEntries } = decode(fs.readFileSync(inPath));

for (let i = 0; i < 10; i++) {
    let o = {
        r: data[i*4],
        g: data[i*4+1],
        b: data[i*4+2],
        a: data[i*4+3]
    };
    console.log(JSON.stringify(o));
}

console.log('test');