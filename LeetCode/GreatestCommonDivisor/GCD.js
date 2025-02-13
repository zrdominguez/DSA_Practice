//reversed engineered solution
var gcdOfStrings = function(str1, str2) {
  let sliced;
  if(str1 + str2 != str2 + str1) return ""
  if (str1 == str2) return str1
  if( str1.length > str2.length){
      sliced = str1.slice(str2.length)
      return gcdOfStrings(sliced, str2)
  }
  if( str1.length < str2.length){
      sliced = str2.slice(str1.length)
      return gcdOfStrings(str1, sliced)
  }
}

//my solution

//we need to add letter from 1 str until it matches another str
    // const longest = str1.length < str2.length ? str2 : str1;
    // if(str1.includes(str2)||str2.includes(str1)){
    //         let remainder = str1.length % str2.length || str2.length % str1.length;
    //         let test = '';
    //         while(str1.length > test.length || str2.length > test.length){
    //             test += longest.slice(0, remainder);
    //             if(test === longest) return longest.slice(0, remainder)
    //         }
    //         return ""
    // }
    // else return ""
