//Question 1

const { start } = require("repl");

function findMissingNumber(arrayOfIntegers, upperBound, lowerBound){
  for(let i=lowerBound; i <= upperBound; i++){
    if(!arrayOfIntegers.find(num => num==i)) return i;
  }
};

//Question 2

const array1 = [-4, -2, 2, 6, 6, 6, 6, 10]
const array2 = [-4, -2, 1, 6, 6, 6, 6, 10]
const array3 = [-4, -2, 1, 6, 6, 6, 7, 10]

//Group Solution
function findMagicIndex(array, start = 0, end = 7) {

  if (start <= end) {
      let mid = Math.floor((start + end) / 2);

      console.log(mid);

      if (array[mid] === mid) {
          return mid;
      }

      //right now mid is 3
      let leftSide = findMagicIndex(array, start, mid - 1)
      if (leftSide !== -1) {
          return leftSide;
      }
      let rightSide = findMagicIndex(array, mid + 1, end)
      if (rightSide !== -1) {
          return rightSide;
      }
  }
  return -1
}

//My Solution
function magicIndex(array, start = 0, end = 7){
  if(end < start || end >= array.length) return -1

  const mid = Math.floor((start + end) / 2);

  if(mid == array[mid]) return mid

  let leftResult = magicIndex(array, start, mid - 1)
  if(leftResult !== -1) return leftResult
  return magicIndex(array, mid + 1, end)
}
