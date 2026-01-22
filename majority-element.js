//January 22, 2026 #169 Majority Element

/* INSTRUCTIONS
Given an array nums of size n, return the majority element (the element that occurs the most)
Majority elements appears more than n/2 times.
You can assume that a majority element will always exist in the array
*/

let nums = [3,2,3]


var majorityElement = function(nums){
    let n = nums.length / 2 //allows us to later compare the count of specific instances of an element to see if it is the majority
    let unduplicatedNums = []
    let majorityNum = 0

    //Creates an unduplicated numbers list
    for (let i = 0; i < nums.length; i++){
        if (! unduplicatedNums.includes(nums[i])){
            unduplicatedNums.push(nums[i])
        }
    }

    for (let j = 0; j < unduplicatedNums.length; j++){
        let localCount = 0
        for (let i = 0; i < nums.length; i++){
            if (unduplicatedNums[j] === nums[i]){
                localCount ++
            }
        }
        if (localCount > n){
            majorityNum = unduplicatedNums[j]
        }
    }

    return majorityNum
    
}

console.log(majorityElement(nums))