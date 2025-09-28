class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        if(nums.length < 2) return nums[0]
        let curSum = 0;
        let max = -Infinity
        const memo = new Array(nums.length);
        for(let i=0; i < nums.length; i++){

            curSum += nums[i]
            memo[i] = Math.max(nums[i], curSum)
            curSum = memo[i]
            max = Math.max(memo[i], max)
        }
        return max
    }
}
