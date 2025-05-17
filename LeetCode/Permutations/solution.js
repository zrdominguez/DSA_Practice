/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = [];

  function backtracking(nums, start = 0){
      if(start === nums.length) res.push([...nums]);

      for(let i = start; i < nums.length; i++){
          [nums[start], nums[i]] = [nums[i], nums[start]];
          backtracking(nums, start + 1);
          [nums[start], nums[i]] = [nums[i], nums[start]];
      }
  }

  backtracking(nums)

  return res
};
