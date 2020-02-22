const fs = require('fs');

const folderPath = 'D:/googledrive/The Equinox/scans/knox-om-pax/600dpi/';
fs.readdirSync(folderPath).filter(o => o.indexOf('.png') !== -1).forEach(filename => {
    const renameTo = filename.replace(/\scopy/, '');
    console.log(`${filename} -> ${renameTo}`);
    fs.renameSync(folderPath + filename, folderPath + renameTo);
});