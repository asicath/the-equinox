const fs = require('fs');

let intructions = [
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

function filenameFromPageNumber(n) {
    let filename = n.toString();
    while (filename.length < 3) {
        filename = "0" + filename;
    }
    filename += '.png';
    return filename;
}

let root = 'C:/Users/Scott Wilde/Desktop/300dpi/';
let folder = '710/';
let blank = 'blank.png';

let images = [];
intructions.forEach(instruction => {

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
            if (!fs.existsSync(root + folder + file)) file = blank;
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
let pdfName = '710-equinox-1.1.pdf';

const cmd = `naps2.console -i ${imagesCmd} -n 0 -o ${pdfName} --disableocr --force`;

fs.writeFileSync('pdfs/make-710.cmd', cmd);
