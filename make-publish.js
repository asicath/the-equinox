const fs = require('fs');
const path = require('path');
const data = require('./data').data;

const book = data.books.find(book => {
    if (book.folder === 'thelema') return true;
});

const instructions = book.publish.instructions;

let dir = book.folder;

let extension = book.publish.extension || '.png';

function filenameFromPageNumber(n) {
    let filename = n.toString();
    while (filename.length < 3) {
        filename = "0" + filename;
    }
    filename += extension;
    return filename;
}



//let root = path.resolve(__dirname, `710/${dir}/`);
let root = 'G:/thelema-working/gutter/';

//let folder = 'img/';
let folder = '';
let blank = 'blank' + extension;

let images = [];
instructions.forEach(instruction => {

    if (instruction.hasOwnProperty('file')) {
        images.push(folder + instruction.file);
    }
    else if (instruction.hasOwnProperty('start')) {

        // load the inserts
        let insert = {};
        if (instruction.hasOwnProperty('insert')) {
            instruction.insert.forEach(o => {

                let index = o.after || 'BEFORE';
                if (!insert.hasOwnProperty(index)) {
                    insert[index] = [];
                }
                insert[index].push(o);
            });
        }

        // add all the befores
        if (insert.hasOwnProperty('BEFORE')) {
            insert['BEFORE'].forEach(o => {
                if (o.hasOwnProperty('blank') && o.blank === 'before') images.push(folder + blank);
                images.push(folder + o.file);
                if (o.hasOwnProperty('blank') && o.blank === 'after') images.push(folder + blank);
            })
        }

        // go through each page
        for (let i = instruction.start; i <= instruction.end; i++) {

            let file = filenameFromPageNumber(i);
            if (instruction.hasOwnProperty('prefix')) file = instruction.prefix + file;

            // replacing for the copyright page
            if (instruction.hasOwnProperty('replace') && instruction.replace.hasOwnProperty(i)) {
                file = instruction.replace[i];
            }

            // check to see if file exists
            let full = path.resolve(root + '/' + folder + file);
            if (!fs.existsSync(full)) {
                // assume blank if not found
                console.log('blank at: ' + file);
                images.push(folder + blank);
            }

            else {
                // add page to stack
                images.push(folder + file);
            }

            // 1.8 has a blank back to every page in the supplement
            if (instruction.blankEveryOther) {
                if (instruction.blankEveryOther_exceptLast && i === instruction.end) {

                }
                else {
                    images.push(folder + blank);
                }
            }

            // then check the image insert register
            if (insert.hasOwnProperty(i)) {
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

fs.writeFileSync(`710/${dir}/make-710.cmd`, cmd);
