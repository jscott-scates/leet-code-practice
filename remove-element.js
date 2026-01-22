//January 22, 2026 #27 Remove Element

/* INSTRUCTIONS
Given an integer array and a value remove all occurrences of the value in the array IN-PLACE (do not create a new array, you must use the existing nums)
The order of elements may be changed.
Return the number of elements in the array which are not equal to val 
*/

let nums = [3,2,2,3]; //we should expect to see a return of 4 elements once both 3's are removed.
let val = 3;

function removeElements(nums,val){
    let k = 0

    for(let i=0; i <nums.length; i++){
        if(nums[i] !== val){
            nums[k] = nums[i];
            k++;
        }
    }

    return k
}

console.log(removeElements(nums,val))