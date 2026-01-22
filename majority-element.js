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

    //For each element in the unduplicated list, run through each element in the nums list and if the values are equal increase a counter by 1
    for (let j = 0; j < unduplicatedNums.length; j++){
        let localCount = 0
        for (let i = 0; i < nums.length; i++){
            if (unduplicatedNums[j] === nums[i]){
                localCount ++
            }
        }
        if (localCount > n){
            majorityNum = unduplicatedNums[j] //if localcount > n than you know that you have the majority number
        }
    }

    return majorityNum
    
}

majorityElement(nums)

//Solve the problem in linear time O(n) and O(1) space
var majorityElementTimeSpaceConsiderations = function(nums){
    let count = 0 
    let majorityCandiate = null;

    for (num of nums){
        if (count === 0){
            majorityCandiate = num;
        }

        count += (num === majorityCandiate) ? 1: -1;
    }

    return majorityCandiate;
}

console.log(majorityElementTimeSpaceConsiderations(nums))

//O(n) time because we only have one loop occuring rather than the previous solution which had nested loops that increased the time spent processing
//O(1) space because we created two variables that stored values that were temporary and went away once the function finished executing. 