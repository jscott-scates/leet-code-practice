// January 30, 2026 #151 Reverse Words In String

/* Instructions
Given an input string s, reverse the order of the words
Words must be separated by one space
Return the string of the words in reverse order with one space between each word, no leading or trailing white spaces
*/

let string = "no good deed goes unpunished"

var reverseWords = function(s){
    let reversedString = ''
    let arrayOfWords = s.trim().split(/\s+/)

    console.log(arrayOfWords)

    for (let i = arrayOfWords.length-1; i >= 0; i--){
        if(i !== 0){
            reversedString += arrayOfWords[i] + " "
        }
        if (i === 0){
            reversedString += arrayOfWords[i]
        }
    }
    return reversedString
}

reverseWords(string)