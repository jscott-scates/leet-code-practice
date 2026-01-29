//January 26, 2026 88. Merge Sorted Array

/* Instructions
Given two integer arrays nums1 and nums2 sorted in non-decreasing order
And given two integers m and n, representing the number of elements in nums1 and nums2 respectively
Merge nums1 and nums2 into a single array sorted in non-decreasing order
The final array should not be returned by the function but instead stored inside the array nums1, nums1 array has the length of m+n to accommodate this, the n elements are represented by 0 and should be ignored
nums2 has length of n
*/

let nums1 = [1,2,23,0,0,0];
let nums2 = [2,5,6];
let n = nums2.length;
let m = nums1.length-n

var merge = function(nums1, m, nums2, n) {
    let mIndex = m - 1 //access the last filled element in the nums1 array that is not a 0
    let nIndex = n-1 //access the last filled element in the nums2 array
    let rightPositionPointer = m+n-1 //accesses the last element placeholder in the nums1 array

    while(nIndex >= 0){ //since the nIndex does not have placeholder values, while there is an element that is greater than or equal to zero...
        if(mIndex>=0 && nums1[mIndex] > nums2[nIndex]){ //if the mIndex is also >= 0 (has elements available to compare) && the nums1[mIndex] is GREATER than nums[nIndex]
            nums1[rightPositionPointer] = nums1[mIndex];// set element at the right positionPointer location to the nums1[mIndex] 
            mIndex--; //decrease mIndex by one to move to the next element to the right
        }else{ //does not meet above if
            nums1[rightPositionPointer]=nums2[nIndex]; //set the nums1 at the positionPointer index  equal to the nums2 at it's current index
            nIndex--; //decrease nIndex by 1
        }
        rightPositionPointer--; //decrease position by 1
    }
};

merge(nums1,m,nums2,n) //no need to console log, nothing is returned so undefined is sent back by default
console.log(nums1)