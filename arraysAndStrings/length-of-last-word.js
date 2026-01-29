//January 27, 2026 #58. Length of last word

/* Instructions
Given a string consisting of words and spaces, return the length of the last word in the string
*/

let string = "Rage  Against the Machine "

var lengthOfLastWord = function(s) {
   const arrayOfWords = s.trim().split(/\s+/); //use a regular expression for whitespace. This will capture with more accuracy than using " " which may give you some array elements that are empty spaces. 
   let arrayOfLetters = arrayOfWords[arrayOfWords.length-1].split('')
   let count = arrayOfLetters.length

   return count
}

console.log(lengthOfLastWord(string))
