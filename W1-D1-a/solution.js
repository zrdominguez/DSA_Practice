//Easy Prob
function RobotCircle(directions){
  let x = 0, y = 0
  const dirArr = [...directions]
  dirArr.forEach(letter => {
    switch(letter){
      case "U":
        y += 1;
        break;
      case "D":
        y-=1;
        break;
      case "R":
        x+=1;
        break;
      case "L":
        x-=1;
        break;
      default:
        break;
    }
  })

  return x == 0 && y == 0 ? true : false
}

console.log(RobotCircle("UD"))

console.log(RobotCircle("LL"))


//Medium Prob
function selfDividingNum(left, right){
  const res = [];
  while(left <= right){
    const numStr = left.toString()
    const numArr = [...numStr]
    let check = true;
    if(numStr.includes("0")) check = false
    if(check){
      numArr.forEach(num => {
        if(left % parseInt(num)) check = false
      })
    }
    if(check) res.push(left)
    left += 1
  }
  return res
}

console.log(selfDividingNum(1, 22))
