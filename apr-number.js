const fs = require('fs');

let path = `D:\\googledrive\\Orders\\APR\\4x7\\2`;

let filenames = fs.readdirSync(path);

let files = [];
let re = /APR\s(\d+).+-(\d+)_(\d)/;
filenames.forEach(filename => {
    //console.log(filename);
    let o = {
        filename: filename
    };

    files.push(o);

});




let pageNumber = 1;

files.forEach(file => {

    let page = pageNumber.toString();
    if (page.length < 3) page = "0" + page;
    if (page.length < 3) page = "0" + page;

    file.renameTo = page + ".png";

    console.log(file.filename + " -> " + file.renameTo);

    fs.renameSync(path + "\\" + file.filename, path + "\\2-" + file.renameTo);

    pageNumber++;
});


