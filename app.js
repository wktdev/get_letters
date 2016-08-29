var fs = require("fs");


function getWordsOfLength(wordList, wordLength) {
    var newWordList = wordList.filter(function(val) {

        return val.length === (+wordLength);
    });

    return newWordList
}


function readWrite(file, lengthOfWords) {
    var data = fs.readFileSync(file, 'utf-8');
    var wordArray = data.split('\n');
    var answer = getWordsOfLength(wordArray, lengthOfWords)
    fs.writeFileSync(lengthOfWords + '_letter_words.json', JSON.stringify(answer, null, 2));
}

readWrite(process.argv[2], process.argv[3]);