const { Console } = require('console');
var fs = require('fs');
var words = fs.readFileSync('word.txt', 'UTF-8').split('\n');

function Validate(WordList){
    if (WordList == null || !WordList) {
        return 'Null Exception';
    }
    if (WordList == " " || !isNaN(WordList)) {
        return " "; 
    }

    const StringSort = (Word) =>{
        return Word.split("").sort().join("");
    }

    var WordForAnagrams = {};
    var StringSorted;
    WordList.forEach(function(Word){
        StringSorted = StringSort(Word);
        if (WordForAnagrams.hasOwnProperty(StringSorted)) {
            WordForAnagrams[StringSorted].unshift(Word);
        }else{
            WordForAnagrams[StringSorted] = [Word];
        }
        return(WordForAnagrams);
    });

}

module.exports = Validate;