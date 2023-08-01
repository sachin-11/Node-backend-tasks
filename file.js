const fs = require('fs');

function countWordsInFile(filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    const words = data.split(/\s+/);

    const filteredWords = words.filter(word => word !== '');

    const wordCount = filteredWords.length;
    console.log('Total word count:', wordCount);
  });
}

const filename = 'data.txt';
countWordsInFile(filename);