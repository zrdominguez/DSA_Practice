//Problem 1
function isIsomorphic(string1, string2){
  if(string1.length != string2.length) return false
  const iso = new Map();
  let res = "";
  for(let i=0; i < string1.length; i++){
    const key = string1[i]
    const val = string2[i]
    if(!iso.get(key)){
      iso.set(key, val)
    }
  }

  for(let i=0; i < string1.length; i++){
    const key = string1[i]
    res += iso.get(key)
  }

  if(res == string2) return true
  else return false
}

console.log("Problem 1")
console.log(isIsomorphic("paper", "title"))
console.log(isIsomorphic("kick", "side"))
console.log(isIsomorphic("egg", "add"))


//Problem 2
function isBalanced(paranthesis){
  const queue = [];
  for(let i = 0; i < paranthesis.length; i++){
    if(paranthesis[i] == "(") queue.push(paranthesis[i])
    else{
      if(queue.length) queue.pop()
      else return false
    }
  }
  return queue.length ? false : true
}

console.log("Problem 2")
console.log(isBalanced("(())()()"))
console.log(isBalanced("()())"))
