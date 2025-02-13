const word1 = "abcdf";
const word2 = "pqr"

const mergeAlternately = function(word1, word2) {

    //Start with a expensive approach
    //use shift (need to convert to an array) function to remove the first letter from each word and push into a new array, might be more time/space expensive

    // let arr1 = word1.split("");
    // let arr2 = word2.split("");
    // let res = [];

    // while (arr1.length && arr2.length) {
    //     let el = arr1.shift();
    //     res.push(el);
    //     let el2 = arr2.shift();
    //     res.push(el2);
    // }

    // if (arr1.length === 0 && arr2.length > 0) {
    //     res.push(...arr2)
    // }

    // if (arr2.length === 0 && arr1.length > 0) {
    //     res.push(...arr1)
    // }

    // return res.join("")
    let res = '';
    let remainder = "";
    let lengthLimit = word1.length;

    if (word1.length < word2.length) {
        remainder = word2.slice(word1.length);
        lengthLimit = word1.length;
    } else if (word1.length > word2.length) {
        remainder = word1.slice(word2.length);
        lengthLimit = word2.length;
    }

    for (let i = 0; i < lengthLimit; i++) {
        res += word1[i] + word2[i]
    }

    res += remainder;
    return res;

};

mergeAlternately(word1, word2)
