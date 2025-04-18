var threeSum = function(nums) {
  const res = []
  const dupes = {}
  const sorted = nums.sort((a,b) => a-b);

  for(let i = 0; i < nums.length; i++){
      const x = -sorted[i]
      let pointerY = i + 1;
      let pointerZ = nums.length - 1;
      while(pointerY < pointerZ){
          const y = sorted[pointerY]
          const z = sorted[pointerZ]
          const sum = y + z
          if(sum == x && !dupes[[-x, y, z]]){
              dupes[[-x, y, z]] = true
              res.push([-x, y, z])
              pointerY++
              pointerZ--
          }
          else if(sum < x){
              pointerY++
          }else pointerZ--

      }
  }
  return res
};
