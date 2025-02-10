//Question 1

const arr1=[10, 3, 5, 6, 20];
const arr2=[-10, -3, -5, -6, -20];
const arr3=[1, -4, 3, -6, 7, 0];

function maxOfThree(arr){
  const sortedNums = arr.sort((a, b) => b-a)
  console.log(sortedNums)
  let len = sortedNums.length
  let product1 = sortedNums[0]*sortedNums[len-1]*sortedNums[len-2];
  let product2 = sortedNums[0]*sortedNums[1]*sortedNums[2];
  return product1 > product2 ? product1 : product2
}

console.log(maxOfThree(arr1))
