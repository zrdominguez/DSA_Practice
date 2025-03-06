var isAnagram = function(s, t) {
  if(s.length != t.length) return false
  function countLetter(letter){
      let countA=0;
      let countB=0;
      for(const el of s){
          if(letter == el) countA ++
      }
      for(const el of t) {
      if(letter == el) countB ++
      }

      console.log(countA, countB)
      return countA == countB
  }

  const check = Array.from(new Set(s)).map(countLetter)
  return check.includes(false) ? false : true
};
