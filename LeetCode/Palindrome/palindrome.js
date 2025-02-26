/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const strInt = x.toString();
  if(x < 0) return false
  const copy = strInt.split("").reverse().join('');
  if(copy === strInt) return true
  else return false
};
