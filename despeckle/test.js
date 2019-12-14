const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

(async () => {
    await execute('G:/goetia/');
})();

async function execute(path) {

    let image = await loadImage(path + '02/__00.tif');

    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');

    ctx.drawImage(image, 0, 0, image.width, image.height);

    await exportCanvasToImage(canvas, path + '03/__00.png');
}


function exportCanvasToImage(canvas, filename) {
    return new Promise((resolve, reject) => {
        const out = fs.createWriteStream(filename);
        const stream = canvas.createPNGStream();
        stream.pipe(out);
        out.on('finish', () => {
            console.log(`${filename} was created.`);
            resolve();
        });
    });
}

function drawBackground(canvas, color) {
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = "#" + color.back;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
