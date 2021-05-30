let Canvas = require('canvas');
let fs = require('fs');

class Pixel {
    constructor(x, y, value = 0) {
        this.value = value
    }
}

class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.pixelList = [];
        this.pixelGrid = [];
        for (let x = 0; x < width; x++) {
            this.pixelGrid[x] = [];
            for (let y = 0; y < height; y++) {
                const pixel = new Pixel(x, y, 0);
                this.pixelGrid[x][y] = pixel;
                this.pixelList.push(pixel);
            }
        }
    }

    getPixel(x, y) {
        return this.pixelGrid[x, y];
    }
}





function executeRound(board) {
    const a = [];
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let v = executePixel(x, y);
            if (v)
                a.push(...v);
        }
    }

    // no moves left
    if (a.length === 0) return false;

    a.forEach(v => {
        v.to.value += v.amount;
    });

    return true;
}

function executePixel(x, y) {

    let p = pixel[x][y];
    if (p.value === 0) return null;

    let a = [];

    // up
    if (y > 0) {
        evalPixelToNext(p, pixel[x][y-1], a);
    }
    // down
    if (y < height) {
        evalPixelToNext(p, pixel[x][y+1], a);
    }

    // up
    if (x > 0) {
        evalPixelToNext(p, pixel[x-1][y], a);
    }
    // down
    if (x < width) {
        evalPixelToNext(p, pixel[x+1][y], a);
    }

    return a;
}

function evalPixelToNext(p0, p1, a) {
    //if (p1.value === 0) {
        // needs at least one to transfer
        if (p0.value > p1.value+1 && p0.value > 1) {
            p0.value -= 1;
            a.push({
                to: p1,
                amount: 1
            });
        }
    //}
}

(() => {
    // create board
    const board = new Board(512, 512);

    // initial pour
    board.getPixel(board.width / 2, board.height / 2).value = 100000;

    let i = 0;
    while (executeRound() && i < 100000) {
        if (i % 100 === 0) console.log(i);
        i++;
    }
})();

draw(pixel);

function draw(board) {
    let canvas = Canvas.createCanvas(width, height);
    let ctx = canvas.getContext('2d');
    let idata = ctx.getImageData(0, 0, width, height);
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let c = pixel[x][y].value > 0 ? 255 : 0;
            idata.data[(x + y * width) * 4 + 0] = c;
            idata.data[(x + y * width) * 4 + 1] = c;
            idata.data[(x + y * width) * 4 + 2] = c;
            idata.data[(x + y * width) * 4 + 3] = 255;
        }
    }
    ctx.putImageData(idata, 0, 0);
    canvas.createPNGStream()
        .pipe(fs.createWriteStream('C:/temp/pool/white.png'));
}

