//January 26, 2026 88. Merge Sorted Array

/* Instructions
Given two integer arrays nums1 and nums2 sorted in non-decreasing order
And given two integers m and n, representing the number of elements in nums1 and nums2 respectively
Merge nums1 and nums2 into a single array sorted in non-decreasing order
The final array should not be returned by the function but instead stored inside the array nums1, nums1 array has the length of m+n to accommodate this, the n elements are represented by 0 and should be ignored
nums2 has length of n
*/

let nums1 = [1,2,3,0,0,0]
let nums2 = [2,5,6]
let n = nums2.length
let m = nums1.length - n


var merge = function(nums1, m, nums2, n) {
    let mIndex = m - 1 //access the last filled element in the nums1 array that is not a 0
    let nIndex = n-1 //access the last filled element in the nums2 array
    let rightPositionPointer = m+n-1 //accesses the last element placeholder in the nums1 array

    while(nIndex >= 0){
        if(mIndex>=0 && nums1[mIndex] > nums2[nIndex]){
            nums1[rightPositionPointer] = nums1[mIndex];
            mIndex--;
        }else{
            nums1[rightPositionPointer]=nums2[nIndex];
            nIndex--;
        }
        rightPositionPointer--;
    }
};

console.log(merge(nums1,m,nums2,n))
console.log(nums1)
