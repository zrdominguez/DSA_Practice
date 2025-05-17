/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if(nums.length < 2) return nums[0];
  let arr = new Array(nums.length);
  arr[0] = nums[0];
  arr[1] = Math.max(nums[0], nums[1]);

  for(let i = 2; i < nums.length; i++){
      arr[i] = Math.max(arr[i-2] + nums[i], arr[i-1]);
  }
  return arr[arr.length-1]
};
