const fs = require('fs');
const path = require('path');

let intructions = require('./publish-instructions');
let target = intructions.eq1_7;

function filenameFromPageNumber(n) {
    let filename = n.toString();
    while (filename.length < 3) {
        filename = "0" + filename;
    }
    filename += '.png';
    return filename;
}



let root = path.resolve(__dirname, '710/1.7/');
let folder = 'img/';
let blank = 'blank.png';

let images = [];
target.forEach(instruction => {

    if (instruction.hasOwnProperty('file')) {
        images.push(folder + instruction.file);
    }
    else if (instruction.hasOwnProperty('start')) {

        // load the inserts
        let insert = {};
        if (instruction.hasOwnProperty('insert')) {
            instruction.insert.forEach(o => {

                if (!insert.hasOwnProperty(o.after)) {
                    insert[o.after] = [];
                }

                insert[o.after].push(o);
            });
        }

        // go through each page
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

                //let o = insert[i];

                insert[i].forEach(o => {
                    if (o.hasOwnProperty('blank') && o.blank === 'before') images.push(folder + blank);
                    images.push(folder + o.file);
                    if (o.hasOwnProperty('blank') && o.blank === 'after') images.push(folder + blank);
                })



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

fs.writeFileSync('710/1.7/make-710.cmd', cmd);
