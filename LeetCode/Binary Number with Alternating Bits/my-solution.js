/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  const binary = n.toString(2)
  let check;
  for(let num of binary){
      if(!check){
          check = num
          continue
      }else{
          if(check == num)return false
          check = num
      }
  }
  return true
};
