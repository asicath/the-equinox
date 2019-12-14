const { decode } = require("decode-tiff");
const { PNG } = require("pngjs");
const fs = require("fs");

let inPath = 'G:/goetia/02/__00.tif';
let outPath = 'G:/goetia/03/__00.png';

const { width, height, data } = decode(fs.readFileSync(inPath));

const png =  new PNG({ width, height, colorType:0 });
png.data = data;

fs.writeFileSync(outPath, PNG.sync.write(png));
