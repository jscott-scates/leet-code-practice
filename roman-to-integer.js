//January 28,2026 13. Roman to Integer

/* Instructions
Given that roman numerals are represented by seven different symbols: I, V, X, L, C, D, M
And given the following rules for using roman numerals:
    I can be places before V(5) and X(10) to make 4 and 9
    X can be placed before L(50) and C(100) to make 40 and 90
    C can be placed before D(500) and M(1000) to make 400 and 900
Given a roman numeral, convert it to an integer
*/

let romanString = "XIV"; //test with IV once you have this done.

let mappedRomanNums = new Map();
mappedRomanNums.set("I", 1);
mappedRomanNums.set("V", 5);
mappedRomanNums.set("X", 10);
mappedRomanNums.set("L", 50);
mappedRomanNums.set("C", 100);
mappedRomanNums.set("D", 500);
mappedRomanNums.set("M", 1000)

var romanToInt = function (s) {
    let romanArray = s.split("");
    let integer = 0

    for (let i=romanArray.length-1; i>=0; i--){
        if (mappedRomanNums.get(romanArray[i+1])>mappedRomanNums.get(romanArray[i])){
            integer -= mappedRomanNums.get(romanArray[i])
        } else {
            integer += mappedRomanNums.get(romanArray[i])
        }
    }
    return integer
};

console.log(romanToInt(romanString))