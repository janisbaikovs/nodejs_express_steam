const fs = require('fs');

let finalResult = "";

const readable = fs.createReadStream(__dirname + '/file.txt', { encoding: 'utf8', highWaterMark : 1024 });
const writable = fs.createWriteStream(__dirname + '/tofile.txt');

readable.on('data', chunk => {
    console.log('-------------Chunk recived!');
    finalResult = finalResult.concat('', chunk);
    writable.write('-------------Chunk');
    writable.write('\n' + chunk + '\n');
});

readable.on('end', () => {
    console.log('-------------Final print!');
    console.log(finalResult);
    writable.write('\n-------------End of file');
    writable.end();
});

