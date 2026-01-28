//January 28,2026 #28. Find the Index of the First Occurance in a String

/*Instructions
Given two strings needle and haystack
Return the index of the first occurrence of needle in the haystack 
OR return -1 if the needle is not part of the haystack
*/

let needle = "lo";
let haystack = "hello";

var strStr = function (haystack, needle) {
    let haystackArray = haystack.split("");
    let needleArray = needle.split("");

    for (let i=0; i < haystackArray.length; i++){
        let comparisonValue = ""
        for (let j=i; j < i + needleArray.length; j++){
            comparisonValue+= haystackArray[j]
        }
        if (comparisonValue === needle){
            return i
        }
    }
    return -1
};

console.log(strStr(haystack, needle))
