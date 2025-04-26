const height = [1,8,6,2,5,4,8,3,7]//Output 49

var maxArea = function(height) {
  let maxArea = -Infinity;
  let pointerL = 0
  let pointerR = height.length - 1
  while(pointerL < pointerR){
      let heightL = height[pointerL]
      let heightR = height[pointerR]
      const min = heightL <= heightR ? heightL : heightR
      const length = pointerR - pointerL
      let area = min * length
      if(area > maxArea) maxArea = area;
      if(heightL < heightR) pointerL ++
      else pointerR --
  }
  return maxArea
};

console.log(maxArea(height))
