// January 29, 2026 #14. Longest Common Prefix

/*Instructions
Write a function
That finds the LONGEST COMMON PREFIX string amongst an array of strings
IF there is NO COMMON PREFIX, return ""
*/

let strings = ["flowers", "flow", "flight"] //["dog","racecar","car"]


var longestCommonPrefix = function (strs) {
    strs.sort();
    let commonPrefix = strs[0];
    let prefixLength = commonPrefix.length;
    
    for (let i=1; i < strs.length; i++){
        while(commonPrefix !== strs[i].substring(0,prefixLength)){
            prefixLength--;
            if(prefixLength === 0){
                return ""
            }
            commonPrefix = commonPrefix.substring(0,prefixLength)
        }
    }
    return commonPrefix
};

console.log(longestCommonPrefix(strings))