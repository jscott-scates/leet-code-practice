// January 22, 2026 #26 Remove Duplicates from Sorted Array

/* INSTRUCTIONS
Given an integer array sorted in non-decreasing order, remove the duplicates IN-PLACE (do not create a new array)
Each element remaining in the array should be UNIQUE
The relative order of the array should be kept the same

Return the NUMBER of unique elements as k
*/

let nums = [1,1,2]; //We should expect k to be two and the array to be [1,2,_]

var removeDuplicates = function(nums){
    let k = 0;
    let previousValue = 0

    for (let i=0; i < nums.length; i++){
        if (i === 0) {
            previousValue = nums[i];
            k++;
        }
        if (nums[i] !== previousValue){
            previousValue = nums[i];
            nums[k] = nums[i];
            k++;
        }
    }
        
    return k
}

removeDuplicates(nums)