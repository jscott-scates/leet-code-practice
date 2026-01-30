// January 29, 2026 #80. Remove Duplicates from Sorted Array II

/* Instructions
Given an integer array nums sorted in NON-DECREASING ORDER
Remove some duplicates in-place such that each UNIQUE duplicate appears at MOST TWICE
Relative order of the elements should be kept the same
You must return the K variable which captures the number of elements to reference in the sorted array
*/

let nums = [0,0,1,1,1,1,2,3,3];

var removeDuplicates = function(nums) {
    let k = 2;

    for (let i=2; i<nums.length; i++){
        if(nums[i] !== nums[k-2]){
            nums[k] = nums[i];
            k++;
        }
    }

    return k
};

console.log(removeDuplicates(nums))