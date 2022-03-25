/*Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements
starting from a to b spaced by step. */
function stepSpace (a, b, step) {
    let result = [a]
     for (a; a <= b; a += step) {
        if((a + step) <= b) {
            result.push(a + step)
        }
     }
     return result
 }
 /////////////////////////////////////////////////////////

 //2. Given a string and a symbol. Find the number of occurrences of the symbol in the string.
 function countOfSymbols (string, symbol) {
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === symbol) {
            count += 1
        }
    }
    return count
}
/////////////////////////////////////////////////////////////////
//3.Given a string. Check whether the string is palindrome or not.
function palindrome (str) {
    for (let i = 0; i < str.length; i++) {
        if( str.charAt(i) !== str.charAt((str.length-1) - i) ) {
            return 'no'    
        } 
    }
    if (str === '') {
            return 'no'
        }
    return 'yes'
}
////////////////////////////////////////////////////////////
// 4. Given an array of numbers. Find the maximum element in array.
function maxArray (num) {
    let biggerArray = 0
    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num.length; j++) {
            if (num[j] > num[i] && num[j] > biggerArray) {
                biggerArray = num[j]
                break
            } else if (num[i] >= num[j] && num[i] > biggerArray) {
                biggerArray = num[i]
            }
         }
       }
    return biggerArray
    }
///////////////////////////////////////////////////////////////

//5. Given an array. Create the array which elements are products between two neighbours.
function productOfArray (arr) {
    let resultArray = []
    for (let i = 1 ;  i < arr.length; i++) {
        resultArray.push(arr[i - 1] * arr[i])
    }
    return resultArray
}
///////////////////////////////////////////////////////////////////

//6. Given a string and symbols. Change first symbol by the second one in the string.
function replaceChars (str, before, after) {
    return str.replaceAll(before, after)
}
///////////////////////////////////////////////////////////

//7. Print the following number pattern:
function piramideOfNUmber (num) {
        num = String(num)
        let result = ''
        for (let i = 0 ; i < num.length; i++) {
            result += num.slice(0, i) + '\n'
        }
        for (num; num !== 0; num = Math.floor(num / 10)) {
           result += num + '\n'   
        }
       return console.log (result)
    }
/////////////////////////////////////////////

