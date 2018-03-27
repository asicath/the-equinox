let fs = require('fs');


let text = fs.readFileSync('authors.txt').toString().replace(/\r/g, '');
let lines = text.split('\n');

let re = /(.+)\((.+)\), ([IVX]+), (.+)/i;
let output = lines.map((line, index) => {
    // Apollo, The Coming of ("Victor B. Neuburg"), III, 281
    let values = line.match(re);
    if (values === null) return null;
    let o = {
        title: values[1].trim(),
        author: values[2].trim(),
        number: values[3].trim(),
        page: values[4].trim()
    };

    return `${index}|${o.title}|${o.author}|${o.number}|${o.page}`;

});


fs.writeFileSync('author-parsed.txt', output.join('\n'));