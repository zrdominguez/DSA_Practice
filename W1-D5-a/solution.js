const arr1 = [10, 7 , 1]
const arr2 = [1, 2, 5]

function makeChange(amount, coins){

  if(amount === 0) return 0
  if(amount < 0) return Infinity

  let minCoins = Infinity;

  for (let coin of coins) {
    let result = makeChange(amount - coin, coins);

    if (result !== Infinity) {
      minCoins = Math.min(minCoins, 1 + result);
    }
  }

  return minCoins === Infinity || minCoins === 0 ? -1 : minCoins

}

console.log(makeChange(14, arr1))
console.log(makeChange(11, arr2))
console.log(makeChange(3, [2]))
console.log(makeChange(0, [1]))
