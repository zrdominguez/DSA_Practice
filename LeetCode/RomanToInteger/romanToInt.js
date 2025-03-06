var romanToInt = function(s) {
  const ROMANKEY = {
      'I':1,
      'V':5,
      'X':10,
      'L':50,
      'C':100,
      'D':500,
      'M':1000
  }
  const romanStr = s.split("");
  let sum = 0;
  for(let [i, letter] of romanStr.entries()){
      let val1 = ROMANKEY[letter];
      if(i !== 0){
          if(val1 > ROMANKEY[romanStr[i - 1]]) continue
      }
      if((letter === 'I' || letter === 'X' || letter === 'C')){
          let val2 = ROMANKEY[romanStr[i+1]]
          if(val1 < val2){
              val1 = val2 - val1;
          }
      }
      sum += val1
  }
  return sum
};
