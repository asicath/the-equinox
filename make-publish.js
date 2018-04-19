const fs = require('fs');
const path = require('path');

let intructions = require('./publish-instructions');
let target = intructions.eq1_2;

function filenameFromPageNumber(n) {
    let filename = n.toString();
    while (filename.length < 3) {
        filename = "0" + filename;
    }
    filename += '.png';
    return filename;
}

let root = path.resolve(__dirname, '710/1.2/');
let folder = 'img/';
let blank = 'blank.png';

let images = [];
target.forEach(instruction => {

    if (instruction.hasOwnProperty('file')) {
        images.push(folder + instruction.file);
    }
    else if (instruction.hasOwnProperty('start')) {

        let insert = {};
        if (instruction.hasOwnProperty('insert')) {
            instruction.insert.forEach(o => {
                insert[o.after] = o;
            });
        }

        for (let i = instruction.start; i <= instruction.end; i++) {

            let file = filenameFromPageNumber(i);
            if (instruction.hasOwnProperty('prefix')) file = instruction.prefix + file;

            let full = path.resolve(root + '/' + folder + file);
            if (!fs.existsSync(full)) {
                console.log('blank at: ' + file);
                file = blank;
            }
            images.push(folder + file);

            // then check the image insert
            if (insert.hasOwnProperty(i)) {
                let o = insert[i];

                if (o.hasOwnProperty('blank') && o.blank === 'before') images.push(folder + blank);
                images.push(folder + o.file);
                if (o.hasOwnProperty('blank') && o.blank === 'after') images.push(folder + blank);
            }
        }

    }
    else {
        images.push(folder + blank);
    }

});

let imagesCmd = images.join(';');
let pdfName = 'publish.pdf';

const cmd = `naps2.console -i ${imagesCmd} -n 0 -o ${pdfName} --disableocr --force`;

fs.writeFileSync('710/1.2/make-710.cmd', cmd);
