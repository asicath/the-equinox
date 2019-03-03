const fs = require('fs');

let path = `G:\\scan\\collected works\\out`;

let filenames = fs.readdirSync(path);

let files = [];
//CW_DO_054_2R
let re = /CW_DO_(\d\d\d)_(\d)[RL]/;
filenames.forEach(filename => {
    //console.log(filename);

    if (!filename.match(re)) return;

    let m = re.exec(filename);

    let o = {
        filename: filename,
        scan: +m[1],
        side: +m[2]
    };

    files.push(o);
});

files.sort((a, b) => {

    if (a.scan < b.scan) return -1;
    if (a.scan > b.scan) return 1;
    if (a.side < b.side) return -1;
    if (a.side > b.side) return 1;

    return 0;
});




let pageNumber = 75;

files.forEach(file => {

    let page = pageNumber.toString();
    if (page.length < 3) page = "0" + page;
    if (page.length < 3) page = "0" + page;

    file.renameTo = page + ".tif";

    console.log(file.filename + " -> " + file.renameTo);

    fs.renameSync(path + "\\" + file.filename, path + "\\" + file.renameTo);

    pageNumber++;
});


