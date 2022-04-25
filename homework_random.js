//Create a function that takes a base number and an exponent number and returns the calculation.

let num = +prompt('number')
let numConst = num
let exponent = +prompt('exponent')  

while (exponent > 1) {
    num = num * numConst
    exponent = exponent - 1
}
if (exponent === 0) { //tvi 0 astijany = e 1-i
    num = 1
}
console.log(num)
//-------------------------------------------------------------------------------------------------
// mutqagrac 2 tvanshanneri mijev exac zuyg tveri dursberum
let a = +prompt('FOR: a')
let b = +prompt('FOR: b')
if (a < b) {
    for (a; a <= b; a++){
        if ((a % 2) == 0)
        console.log(a)
    }
} else if (b < a) {
    for (b; b <= a; b++) {
        if ((b % 2) == 0){
            console.log(b)
        }
    }
} else {
    console.log('you are in  wrong way my friend')
}
//____________________________________________________________

// tivy skzbic-verj tpel
let num = +prompt('')     
let sum = String('')
while (num != 0) {
    sum = sum + String(num % 10)
    num = Math.floor(num / 10)                          
}                                          // orinak 54321 = 12345

sum = Number(sum)
let count = 0
while (sum > 10) {
    count = sum % 10
    console.log(count)
    sum = Math.floor(sum / 10)
}

//_______________________________________________________________
// ropen varkyan srqel
let second = +prompt('') *60
console.log (second)

//_______________________________________________________________
//nermucel erankyan  height ev basy; stanal`area
let height = +prompt('height')
let base = +prompt('base')
let area = (height * base) / 2
console.log(area)
//_______________________________________________________________
// tarin grel vor ory veradardzni
let age = +prompt('age')
let days = (age * 365)
alert(days)

//_______________________________________________________________
//Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
let sideA = +prompt('A')
let sideB = +prompt('B')
let sideC = (sideA + sideB) - 1
console.log(sideC)

//_______________________________________________________________
/*You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers
 scored, find the final points for the team and return that value.*/
let two = +prompt('two') * 2
let three = +prompt('three') * 3
console.log(two + three)

//_______________________________________________________________
/*Write a function that takes a number and returns the perimeter of either a circle or a square.
 The input will be in the form (letter l, number num) where the letter will be either "s" for square,
  or "c" for circle, and the number will be the side of the square or the radius of the circle.*/

let letter = prompt('C or S')
let num = +prompt('number')
let perimeter = 0
if (letter == 'c') {
    perimeter = ('c      ' + (6.28 * num))
} else if (letter == 's') {
    perimeter = ('s     ' + (4 * num))
}
console.log(perimeter)
//______________________________________________________

// tvi tvanshanneri gumar minjev miavor kargi, or 99 = 9+9 = 18 = 1+8 = 9
let num = Math.abs(+prompt('number'))
let sum = 0
while(num != 0) {
    sum = sum + (num % 10)
    num = Math.floor( num / 10)
}
if (sum >= 10) {   //arajin kargi if
    let sumSon = 0
   
    while (sum != 0) {
        sumSon = sumSon + (sum % 10)
        sum = Math.floor(sum / 10)
    }
    if (sumSon >= 10) {   // erkrord kargi if
            let sumSon1 = 0
            while (sumSon != 0) {
                sumSon1 = sumSon1 + (sumSon % 10)
                sumSon = Math.floor(sumSon / 10)
            }
        console.log ('sumSon1:    ' + sumSon1)
        } else {
        console.log('sumSon  ' + sumSon)
        }                // erkrord kargi if i avart
    
} else {    //arajin kargi if i avart
    console.log('sum  ' + sum)   
}
// patasxany kga : 'sum' or 'sumSon' or 'sumSon1' -ic


//_______________________________________________________________
/*Create a function that takes two parameters (start, stop),
 and returns the sum of all even numbers in the range.*/
let numStart = +prompt('start')
let numStop = +prompt('stop')         // math.min ev math.max i mijocov bacasakan tverov el kashxati
let min = Math.min(numStart, numStop)
let max = Math.max(numStart, numStop)
let even = 0

for(; min <= max; min++) {
    if((min % 2) === 0) {
        even = even + min
    } 
}
console.log(even)
//-----------------------------------------------------------------

//stexcel input tverov tox ev syun '*' -ov
let row = +prompt('row ')
let rowCount = ''
let column = +prompt('column ')

for (let j = 0; j < column; j++) {
        for (let i = 0; i < row; i++) {
            rowCount = rowCount + '*'
        }
    rowCount = rowCount + '\n'
}
console.log(rowCount)
//------------------------

// Formula--- 3n + 1
let i = +prompt('')
while (i !== 1) {
    if (i % 2 === 0) {
        i = i / 2
    } else if (i % 2 !== 0) {
        i = (i * 3) + 1
    }
    console.log(i)
}
//--------------------------------
//karucel ays patkery
 /*     *******
        *     *
        *     *
        *     *
        *******      */
let row = +prompt('row')
let column = +prompt('column')
let matrix = ''
for (let i = 0; i < column; i++) {
    for (let j = 0; j < row; j++) {
        if (j === 0 || j === (row - 1) || i === 0 || i === (column - 1)) {
            matrix = matrix + '*'
        }  else if (j !== 0 || j !== (row - 1)) {
            matrix = matrix + ' '
        }
    }
    matrix = matrix + '\n'
}
console.log(matrix)
//------------------------------------------

// stanal ays patkery
/*   x       x
       x   x
         x
       x   x 
     x       x      
*/
let matrix = ''
let sum = 0
let row = +prompt('row')
let column = +prompt('column')
for (let j = 0; j < column; j++) {
        for (let i = 0; i <= row; i++ ) {
            if (i === sum || i === row - sum) {
                matrix = matrix + '*'
            } else if (i !== sum || i !== row - sum) {
                matrix = matrix + ' '
            }         
        }
    sum++
    matrix = matrix + '\n'
}   
console.log(matrix)

//----------------------------------------
//uxxel: adamandi tesq
let matrix = ''
let row = +prompt('row')
let sum = 0
let count = 0
let column = +prompt('column')
for (let j = 0; j < column; j++) {
        for (let i = 0; i <= row; i++ ) {
           if ((i === (column/2) - sum || i === (column/2) + sum)  &&  (i === (row/2) + count || i === (row/2) - count)) {
               matrix += '*'
           } else if ((i !== (column/2) - sum || i !== (column/2) + sum)  &&  (i !== (row/2) + count || i !== (row/2) - count)) {
               matrix += '-'
                   } 
        }
   sum++
   count++
    matrix = matrix + '\n'
}

    
console.log(matrix)
////////////////////////////////////
//tnayin
function isPowerOfTwo () {}
function arrayOfPowerOfTwo(a, b) {
    let result = []
    for (let i = a; i < b; i++) {
        for ()/*let num = +prompt('');
let count = 0
while (num >= 1) {
    if (num === 1) {
        count = true
        break
    } 
    num = num / 2
}
if (num < 1) {
    count = false
}
console.log(count)*/
            if (i /2 === 1) {
            result.push(i)  // ete zuyg e push enq anum ayd tivy
        }
    }

    return result
}
arrayOfPowerOfTwo(/*grel a ev b */)// avartel


/////////////////////////
//Create a function that takes an array and returns the types of values (data types) in a new array.
/*for instance: arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]*/

function arr (typeArray) {
    let arrayValuesTypes = []
    for (let i = 0; i < typeArray.length; i++) {
       arrayValuesTypes.push( typeof typeArray[i])
    }
   return arrayValuesTypes
}
//declare ➞
arr()
////////////////////////////////////////////////////////////////////
//Create a function that takes an array and a string as arguments and returns the index of the string.
function arrayCalling (stringName) {
    arr = ["Red", "blue", "Blue", "Green", "hi", "edabit", "fgh", "abc", 'hi']
    for (let i = 0; i < arr.length ; i++) {
        if (arr [i] === stringName) {
            console.log(i)
        } 
    }
}
// declare ➞
arrayCalling(/*for ex.*/ 'hi' ) //stringName arandzin haytararvac various e vorin talis enq string arjeq, ev ete arr[] arrayin hamapatasxanum e apa dra index-n e tpum
///////////////////////////////////////////////////////////////////////|

//Create a function that finds the index of a given item.
//Examples: search([9, 8, 3], 3) ➞ 2
function findIndex (arr) {
    let search = [1, 2, 4, 5]
    for (let i = 0; i < search.length; i++) {
        if (search [i] === arr) {
            return i
        } 
    }
    return Number(-1)
}
// declare ➞
findIndex (4) //=== index of [2]
//////////////////////////////////////////////////////////////
/* Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

Examples`:  
 arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]*/

function arrayOfMultiples(num, length) {
    array = []
    let lengthCopy = 1
    for (let i = 0; i < length; i++) {  
        array[i] = num * lengthCopy
        lengthCopy += 1
    }
    return array
}
////////////////////////////////////////////////////
//function in trvac zangvacic arandznacnel parz tvery, ev texadrel ayl zangvaci mej
function callArray (arr) {
    let result = []
    for(let i = 0; i < arr.length; i++) {
        let isPrime = true
        for (let j =2; j < arr[i]; j++) {
            if( arr[i] % j === 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            result.push(arr[i])
        }
    }
    return result
}
/////////////////////////////////////////////////////

//Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
function callNum (input) {
    let result = 0
    for (let i = 0 ; i <= input; i++) {
        result = result + i
    }
    return result
}
////////////////////////////////
/* Matchstick Houses
This challenge will help you interpret mathematical relationships both algebraically and geometrically.
Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
Examples
matchHouses(1) ➞ 6

matchHouses(4) ➞ 21

matchHouses(87) ➞ 436  */

function sticks (step) {
    let result = 0
   return result = result + step * 6 - (step -= 1 )
    
}
////////////////////////////////////    
/* Create a function which returns the number of true values there are in an array.
bool ([true, false, false, true, false]) ➞ 2*/
function bool (arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            result += 1
        }
    }
    return result
}
/////////////////////////////////////////////////
/*Mubashir has started his journey from home. Given a string of directions (N=North, W=West, S=South, E=East), he will walk for one minute in each direction. Determine whether a set of directions will lead him back to the starting position or not.

Examples
backToHome("EEWE") ➞ false

backToHome("NENESSWW") ➞ true

backToHome("NEESSW") ➞ false */

function backToHome (direction) {
    let count = 0
    for (let i = 0; i < direction.length; i++) {
        if (direction.charAt(i) === 'N') {
            count += 1
        } else if (direction.charAt(i) === 'S') {
            count -= 1
        } else if (direction.charAt(i) === 'E') {
            count += 2
        } else if (direction.charAt(i) === 'W') {
            count -= 2 
        }
    }
    if (count === 0) {
        return true
    } else if (count !== 0) {
        return false
    }
}
//////////////////////////////////////////////////////
/* The right shift operation is similar to floor division by powers of two.
Sample calculation using the right shift operator ( >> ):
80 >> 3 = floor(80/2^3) = floor(80/8) = 10
-24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
-5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3
Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.

Examples
shiftToRight(80, 3) ➞ 10
shiftToRight(-24, 2) ➞ -6
shiftToRight(-5, 1) ➞ -3*/
function shiftToRight (num, divider) {
    divider = Math.abs(divider)
    let powerOf2 = 2
    if (divider === 0) {
            powerOf2 = 1
        } else if (divider > 1){
            for (let i = 2; i <= divider; i++) {
            powerOf2 = powerOf2 * 2
            }
        } else {
         powerOf2 = 2
        }
    let result = Math.floor (num / powerOf2)
    return result
}
//////////////////////////////////////////////////////
/* Find Number of Digits in Number
Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

Examples
num_of_digits(1000) ➞ 4

num_of_digits(12) ➞ 2 */
function callNum (num) {
    let counter = 0
    for (num; num !== 0; num / 10) {
        num = Math.floor(num /10)
        counter += 1
    }
    return counter
}
////////////////////////////////////////////
/* Try finding your ancestors and offspring with code.

Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

If the number is negative, return the related ancestor.
If positive, return the related descendant.
You are generation 0. In the case of 0 (male or female), return "me!".
Examples
generation(2, "f") ➞ "granddaughter"

generation(-3, "m") ➞ "great grandfather"

generation(1, "f") ➞ "daughter"*/

function generation (num, gender) {
    let result
    if (num === 0) {
        result = '!me'
    } else if (num ===1 && gender === 'm') {
        result = 'son'
    } else if (num ===1 && gender === 'f') {
        result = 'daughter'
    } else if (num ===2 && gender === 'm') {
        result = 'grandson'
    } else if (num ===2 && gender === 'f') {
        result = 'granddaughter'
    } else if (num ===3 && gender === 'm') {
        result = 'great grandson'
    } else if (num ===3 && gender === 'f') {
        result = 'great granddaugther'
    } else if (num === -1 && gender === 'm') {
        result = 'father'
    } else if (num === -1 && gender === 'f') {
        result = 'mother'
    } else if (num === -2 && gender === 'm') {
        result = 'grandfather'
    } else if (num === -2 && gender === 'f') {
        result = 'grandmother'
    } else if (num === -3 && gender === 'm') {
        result = 'great grandfather'
    } else if (num === -3 && gender === 'f') {
        result = 'great grandfather'
    }
    return result
}
///////////////////////////////////////////////
/*Concatenate Variable Number of Input Arrays
Create a function that concatenates n input arrays, where n is variable.
Examples
concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
*/

function getArray (arr) {  //arr= [[1, 2, 3], [4, 7, 3, 2, 5], [6, 7, 7, 9]]
 
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
       
        for (let j = 0; j < arr[i].length; j++ ) {
            newArray.push(arr[i][j])
        }
    }
return newArray
}
////////////////////////////////////////////////
/* Triangular Number Sequence
This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:

1, 3, 6, 10, 15, ... */
//variant 1
function triangel (n) {
    let resultT = 0
    resultT = n * (n + 1)/2 // banadzevi mijocov
    return resultT
}
//------------------------------
//variant 2
function triangel (n) {
    let resultT = 0
    for (let i = 1; i <= n; i + i++) {
        resultT += i
    }
    return resultT
}
///////////////////////////////////////

/*A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

Some boomerang examples:

[3, 7, 3], [1, -1, 1], [5, 6, 5] 
[1, 7, 1, 7, 1, 7, 1]
// 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]*/
function countBoomerangs (array) {
    let count = 0
    for (i = 0; i < array.length - 2; i++) {
        if (array[i] === array[i + 2] && array[i] !== array[i + 1]) {
            count += 1
        }
    }
    return count
}
///////////////////////////////////////////////////
/*When coloring a striped pattern, you may start by coloring each square sequentially, meaning you spend time needing to switch coloring pencils.

Create a function where given an array of colors cols, return how long it takes to color the whole pattern. Note the following times:

It takes 1 second to switch between pencils.
It takes 2 seconds to color a square.
See the example below for clarification.
example
colorPatternTimes(["Blue"]) ➞ 2
colorPatternTimes(["Red", "Yellow", "Green", "Blue"]) ➞ 11
colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]) ➞ 13 */
function colorPatternTimes (arr) {
    let count = 2
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            count += 3
        } else {
            count += 2
        }
    }
    return count
}
/////////////////////////////////////////////////
/*A number is said to be Disarium if the sum of its digits raised to their respective positions is the number itself.
Create a function that determines whether a number is a Disarium or not.
Examples
isDisarium(75) ➞ false
// 7^1 + 5^2 = 7 + 25 = 32

isDisarium(135) ➞ true
// 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135*/
function isDisarium (num) {
    let numCopy = num
    let result = 0
    let numBox = 0
    let numArray = []
    let count = 1
    
    for (numCopy ; numCopy !== 0; numCopy = Math.floor(numCopy / 10)) {
        numBox = numCopy % 10
        numArray.unshift(numBox)
    }
    for (let i = 0; i < numArray.length; i++) {
        result += numArray[i]**count
        count += 1
    }
    if (result === num) {
        return true
    } else {
        return false
    }
}
/////////////////////////////////
/*An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.

Examples
isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
// There is only 1 unique positive value (1).
// There are 2 unique negative values (-3, -4).

isPositiveDominant([5, 99, 832, -3, -4]) ➞ true

isPositiveDominant([5, 0]) ➞ true

isPositiveDominant([0, -4, -1]) ➞ false*/
function isPositiveDominant (arr) {
    let count = 0
    let newArr = []
    for (let i = 0 ; i < arr.length; i++) {
       if (newArr.includes(arr[i]) === true) {
           continue
       } else if (newArr.includes(arr[i]) === false) {
           newArr.push(arr[i])
       }           
    }
    for (let j = 0; j < newArr.length; j++) {
        if (newArr[j] < 0) {
            count -= 1
        } else if (newArr[j] >= 0) {
            count += 1
        }
    }
     if (count < 0){
        return false
    } else if (count >= 0) {
        return true
    }   
}
///////////////////////////////////////////
//13 rd harc

function twice (arr1, arr2) {
    let result = []
    if (arr1.length < arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr2.includes(arr1[i])) {
                result.push(arr1[i])
            }
            
        }
        return result
    } else if (arr1.length > arr2.length) {
        for (let i = 0; i < arr2.length; i++) {
            if (arr1.includes(arr2[i])) {
                result.push(arr2[i])
            }
            
    }
        return result
}
}
////////////////////////////////////////
//12 rd varjutyun
function kachka (arr, el) {
    
    let newArray = []
    if (arr.includes(el)) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== el) {
                newArray.push(arr[i])
            }
        }
       return newArray
    } else if (!arr.includes(el)) {
        for (let i = 0; i < arr.length; i++) {
            newArray.push(arr[i])
        }
        newArray.push(el)
        return newArray
    }
}
//////////////////////////////////////////////////
/*This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, the robot rotates 90 degrees clockwise. Given the amount the robot has moved each time, you have to calculate the robot's final position.

To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

20 steps North, now at (0, 20)
30 steps East, now at (30, 20)
10 steps South. now at (30, 10)
40 steps West, now at (-10, 10)
...and will end up at coordinates (-10, 10).

Examples
trackRobot(20, 30, 10, 40) ➞ [-10, 10]

trackRobot() ➞ [0, 0]
// No movement means the robot stays at (0, 0).

trackRobot(-10, 20, 10) ➞ [20, -20]
// The amount to move can be negative.*/


//variant 1
function robotStep (arr) {
    let coordinateXY = [0,0]
    let countX = 1
    let countY = 1
   
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            if (countX % 2 !== 0) {
                coordinateXY[0] += arr[i]
            } else if (countX % 2 === 0) {
                coordinateXY[0] -= arr[i]
            }
            countX += 1
        } else if (i % 2 !== 0) {
             if (countY % 2 !== 0) {
                coordinateXY[1] += arr[i]
            } else if (countY % 2 === 0) {
                coordinateXY[1] -= arr[i]
            }
            countY += 1
        }
    } 
    return coordinateXY
}

//variant2
function robotStep (arr) {
    let coordinateXY = [0,0]
    for (let n =0; n < arr.length;n += 4) {
        coordinateXY[1] += arr[n]
    }
    for (let e =1; e < arr.length; e += 4) {
        coordinateXY[0] += arr[e]
    }
    for (let s =2; s < arr.length; s += 4) {
                coordinateXY[1] -= arr[s]
    }
    for (let w =3; w < arr.length; w += 4) {
                coordinateXY[0] -= arr[w]
    }
 
    return coordinateXY
}
//////////////////////////////////////////////////
/*Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.

Examples
doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true

doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true

doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false

doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false*/
function isTriangelFits (tri1,tri2) {
    let longSideOfTri1 = tri1[0]
    let shortSideOfTri2 = tri2[0]
    for (let i = 1; i < tri1.length; i++) {
        if (tri1[i-1] < tri1[i]) {
            longSideOfTri1 = tri1[i]
        }
    }
    for (let j = 1; j < tri2.length; j++) {
        if (tri2[j-1] > tri2[j]) {
            shortSideOfTri2 = tri2[j]
        }    
    }
    if (longSideOfTri1 <= shortSideOfTri2) {
        return true
    } else if (longSideOfTri1 > shortSideOfTri2) {
        return false
    }
}
/////////////////////////////////////////////////////////
//reference//==>  https://edabit.com/challenge/qfuLGaQJw36X9BXuW
////// LUCVAC CHE ! ! ! !
/*watermelon([
    [1, 0, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 1, 0, 0],
    [1, 1, 1, 0, 0, 0, 1, 1],
    [1, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
]) ==> 25
watermelon([
    [1, 1, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 1, 0, 0],
    [1, 1, 1, 0, 0, 0, 1, 1],
    [1, 0, 1, 1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 0],
]) ==> 34*/
function watermelon (arr) { 
    let seeds = 0
    let totalSeeds = 0
    //////////1 kisagund skizb////////////////////////
    for (let i = 0; i < (arr.length/2); i++) {
        for (let j = 0; j < (arr[i].length/2); j++) {
            if (arr[i][j] === 1) {
                seeds += arr[i][j]
            }
        }   
    }
    if (seeds > 5) {
            totalSeeds += seeds
            seeds = 0
        } else {
          seeds = 0
        }
     for (let i = 0; i < (arr.length/2); i++) {
            for (let j = (arr[i].length / 2); j < (arr[i].length); j++) {
                if (arr[i][j] === 1) {
                    seeds += arr[i][j]
                }
            }   
        }
    if (seeds > 5) {
            totalSeeds += seeds
            seeds = 0
        } else {
          seeds = 0
        }
/////////////1 kisagund avart//////////    
    
////////////2 kisagund skizb////////////////
  for (let i = (arr.length / 2); i < (arr.length); i++) {
        for (let j = 0; j < (arr[i].length/2); j++) {
            if (arr[i][j] === 1) {
                seeds += arr[i][j]
            }
        }    
    }
    if (seeds > 5) {
            totalSeeds += seeds
            seeds = 0
        } else {
          seeds = 0
        }
    
    for (let i = (arr.length / 2); i < (arr.length); i++) {
        for (let j = (arr[i].length/2); j < (arr[i].length); j++) {
            if (arr[i][j] === 1) {
                seeds += arr[i][j]
            }
        }    
    }
    if (seeds > 5) {
            totalSeeds += seeds
             
        } 
//////////2 kisagund avart///////////
return totalSeeds
}
/////////////////////////////////////////////////////////

//https://edabit.com/challenge/PgkSgWqNZBwXTFgby

//////////////////////////////////////////////////////
/*The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.

The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.

Create two functions that take an integer as an argument and:

Return its additive persistence.
Return its multiplicative persistence.
Examples: Additive Persistence
additivePersistence(1679583) ➞ 3
// 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
// 3 + 9 = 12
// 1 + 2 = 3
// It takes 3 iterations to reach a single-digit number.

additivePersistence(123456) ➞ 2
// 1 + 2 + 3 + 4 + 5 + 6 = 21
// 2 + 1 = 3

additivePersistence(6) ➞ 0
// Because 6 is already a single-digit integer.
Examples: Multiplicative Persistence
multiplicativePersistence(77) ➞ 4
// 7 x 7 = 49
// 4 x 9 = 36
// 3 x 6 = 18
// 1 x 8 = 8
// It takes 4 iterations to reach a single-digit number.

multiplicativePersistence(123456) ➞ 2
// 1 x 2 x 3 x 4 x 5 x 6 = 720
// 7 x 2 x 0 = 0

multiplicativePersistence(4) ➞ 0
// Because 4 is already a single-digit integer.*/
function additivePersistence (num) {
    let result = num
     if (Math.floor(num/10) === 0) {
         return 0
     }
 for (result; result >= 10;) {
     result = 0
     for (num; num !== 0;) {
         result += num % 10
        num = Math.floor(num /10)
      } 
         num = result
     }
     return result
 }
 //multiplicative

 function multiplicativePersistence (num) {
    let result = num
    for (;result > 9;) {
        result = 1
        for (;num !== 0;) {
            result *= num % 10 
            num = Math.floor(num / 10)
        }
        num = result
   }
    return result
}
/////////////////////////////////////////////////////////
/*Steve has a string of lowercase characters in range ascii[["a".."z"]]. He wants to reduce the string to its shortest length by doing a series of operations. In each operation, he selects a pair of adjacent lowercase letters that match, and he deletes them. For instance, the string aab could be shortened to b in one operation.

Steve’s task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, return "Empty String".

Case
superReducedString("aaabccddd") ➞ "abd"
Explanation:

"aaabccddd" -> "abccddd" -> "abddd" -> "abd"
Examples
superReducedString("cccxllyyy") ➞ "cxy"

superReducedString("aa") ➞ "Empty String"

superReducedString("baab") ➞ "Empty String"

superReducedString("fghiiijkllmnnno") ➞ "fghijkmno"

superReducedString("chklssstt") ➞ "chkls"*/

function superReducedString (string) {
    let result = ''
    let counterForCheck = string.length
    for (let j = 0; j <counterForCheck; j++) {
        result = ''
        for (let i = 0; i < string.length; i++) {
            if (string[i] !== string[i+1]) {
                result += string[i]
            } else if (string[i] === string[i+1]) {
                result += ''
                i++
            }
        }
        string = result    
    }
    return string
} 
/////////////////////////////////////////////////////////
/*Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.

Examples
zeroesToEnd([1, 2, 0, 0, 4, 0, 5]) ➞ [1, 2, 4, 5, 0, 0, 0]

zeroesToEnd([0, 0, 2, 0, 5]) ➞ [2, 5, 0, 0, 0]

zeroesToEnd([4, 4, 5]) ➞ [4, 4, 5]

zeroesToEnd([0, 0]) ➞ [0, 0]
Notes
You must mutate the original array.
Keep the relative order of the non-zero elements the same.*/
function zeroesToEnd (arr) {
    for (let z = 0; z < arr.length -1; z++) {
        if (arr[z] === 0 && arr[z+1] !== 0) {         
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] === 0) {
                   arr[i] = arr[i+1]
                   arr[i+1] = 0
                }
            }
            z = -1
        }
    }
    return arr
}
///////////////////////////////////////////////////////

/*Create a function that takes a 2D array of pyramid numbers and returns the maximum sum of consecutive numbers from the top to the bottom of the pyramid.
                        /3/
                        \7\ 4 
                       2 \4\ 6 
                      8 5 \9\ 3

// Longest slide down sum is 3 + 7 + 4 + 9 = 23
Examples
longestSlide([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]) ➞ 23
longestSlide([[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]]) ➞ 20
longestSlide([[2], [9, 4], [1, 8, 7], [6, 4, 7, 2]]) ➞ 26*/
function longestSlide (arr) {
    for (let i = arr.length - 2; i >=0 ;i--) {
        for (let j = arr[i].length-1; j >= 0; j--) {
            arr[i][j] += Math.max(arr[i+1][j+1], arr[i+1][j])
        }
    }
    return arr[0][0]
}
/*longestSlide(
[[75],
[95, 64],
[17, 47, 82],
[18, 35, 87, 10],
[20,4, 82, 47, 65],
[19,1, 23, 75,3, 34],
[88,2, 77, 73,7, 63, 67],
[99, 65,4, 28,6, 16, 70, 92],
[41, 41, 26, 56, 83, 40, 80, 70, 33],
[41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
[91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
[63, 66,4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
[ 4, 62, 98, 27, 23,9, 70, 98, 73, 93, 38, 53, 60,4, 23]])  */ //1074

///////////////////////////////////////////////////////////////////////////////////



//https://edabit.com/challenge/Kzmyf4pLx66ZRsnWk
/*Create a function that takes one, two or more numbers as arguments and adds them together to get a new number. The function then repeatedly multiplies the digits of the new number by each other, yielding a new number, until the product is only 1 digit long. Return the final product.

Examples
sumDigProd(16, 28) ➞ 6
// 16 + 28 = 44
// 4 * 4 =  16
// 1 * 6 = 6
sumDigProd(0) ➞ 0
sumDigProd(1, 2, 3, 4, 5, 6) ➞ 2

Notes
The input of the function is at least one number.*/
function sumDigProd (num1, num2) {
    num1 += num2
    if (num1 < 10) {
        return num1
    }
    let result = num1             // KRKNEL!!!
    for (;result >= 10;) {
        result = 1
        for (;num1 !== 0;) {
            result *= num1 % 10
            num1 = Math.floor(num1 / 10)
        }
        num1 = result
    }
    return result
}
////////////////////////////////////////////////////
//https://edabit.com/challenge/WEhe9MCnyZG8WhN9Z
/*A perfect number is a number that is equal to the sum of all its proper (non-self) divisors. Take 6 for example:

6 = 1 + 2 + 3
A number that is equal to the sum of all its proper divisors -- provided that one of them is negative -- is not quite perfect, but admirable.

To illustrate. The proper divisors of 12 are 1, 2, 3, 4, 6, totalling 16. However, if 2 is negative, the total would be 12, the number itself. 12 is therefore an admirable number.

12 = 1 - 2 + 3 + 4 + 6
Create a function that takes a number n as input.

If n is perfect, return "Perfect".
If n is admirable, return the proper divisor that must be rendered negative to make the sum of the proper divisors equal to n.
If n is neither perfect nor admirable, return "Neither".
Examples
admirable(6) ➞ "Perfect"

admirable(12) ➞ 2

admirable(18) ➞ "Neither"*/
function admirable (num) {
    let count = 0
    for (let i = 0; i < num; i++) {
        if (num % i === 0) {
            count += i            
        }
        if (count === num) {
            return 'perfect'
        }
    }
    count = 0
    for (let i = 0; i < num; i++) {
        if (num % i ===0) {
            count -= (2*i)
            for (let j = 0; j < num; j++) {
               if (num % j === 0) {
                  count += j 
                   if (count === num) {
                       return i
                   }
               }               
            }
        }
        count = 0
    }
    return 'neither'
}

/////////////////////////////////////////
//https://edabit.com/challenge/8QTBwLzAdaM8wkrXu     
/*We can assign a value to each character in a word, based on their position in the alphabet (a = 1, b = 2, ... , z = 26). A balanced word is one where the sum of values on the left-hand side of the word equals the sum of values on the right-hand side. For odd length words, the middle character (balance point) is ignored.

Write a function that returns true if the word is balanced, and false if it's not.

Examples
balanced("zips") ➞ true
// "zips" = "zi|ps" = 26+9|16+19 = 35|35 = true

balanced("brake") ➞ false
// "brake" = "br|ke" = 2+18|11+5 = 20|16 = false
Notes
All words will be lowercase, and have a minimum of 2 characters.
Palindromic words will always be balanced.*/
function balanced (str) {
    let abc = '*abcdefghijklmnopqrstuvwxyz'
    let leftCount = 0
    let rightCount = 0
    for (let i = 1; i < abc.length; i++) {
        for (let j = 0; j < Math.floor(str.length / 2) ; j++) {
            if (abc[i] === str[j]) {
                leftCount += i
            }
        }
        for (let j = Math.round(str.length / 2); j < str.length; j++) {
            if (abc[i] === str[j]) {
                rightCount += i
            }
        }
    }
    if (rightCount == leftCount) {
        return true
    } else if (rightCount != leftCount) {
        return false
    }
}
/////////////////////////////////////////////////////////
//https://edabit.com/challenge/sZZ4gr9RNN8JpMaEv
/*Create a function that takes a string of words and returns the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.

Examples
wordRank("The quick brown fox.") ➞ "brown"

wordRank("Nancy is very pretty.") ➞ "pretty"

wordRank("Check back tomorrow, man!") ➞ "tomorrow"

wordRank("Wednesday is hump day.") ➞ "Wednesday"
Notes
If two words score the same, return the word that appears first in the original string.
The returned string should only contain alphabetic characters (a-z).
Preserve case in the returned string (see 4th example above).*/
function wordRank (str) {
    let arr = str.split(' ')
    let score = 0
    let arrResult = []
    let abc = '0abcdefghijklmnopqrstuvwxyz'
    let aBC = '0ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr[j].length; k++) {
                  for (let i = 1; i < abc.length; i++) {
                      if (abc[i] === arr[j][k]) {
                          score += i
                      }
                  for (let i = 1; i < aBC.length; i++) {
                      if (aBC[i] === arr[j][k]) {
                          score += i
                      }
                  }
            }
            arrResult.push(score)
            score = 0
        }
     }
        
    let index = 0
    let result = arrResult[0]
    for (let i = 1; i < arrResult.length;i++) {
        if (result < arrResult[i]) {
            result = arrResult[i]
            index = i
        }
    }
    let filterOfWord = ''
    for (let p = 0; p < arr[index].length; p++) {
        for (let i = 1; i <aBC.length; i++) {
            if (arr[index][p] === aBC[i]) {
                filterOfWord += arr[index][p]
            }
        }        
        
        for (let i = 1; i <abc.length; i++) {
            if (arr[index][p] === abc[i]) {
                filterOfWord += arr[index][p]
            }
        }
    }
    return filterOfWord
}
///////////////////////////////////////////////////////
//https://edabit.com/challenge/eCPim4XcssdZdvs32
/*Numbers in Strings
Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.
Examples
numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]
numInStr(["abc", "abc10"]) ➞ ["abc10"]
numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]
numInStr(["this is a test", "test1"]) ➞ ["test1"]*/
function numInStr (arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++ ) {
            if (!Number(arr[i][j]) === false  || arr[i][j] == '0' && arr[i][j] !== ' ' ) {
                result.push(arr[i])
                continue
            }
        }
    }
    return result  
}
////////////////////////////////////////////////
//https://edabit.com/challenge/NfBqxaDu4KoxAysWF
/*Write a function to replace all instances of character c1 with character c2 and vice versa.

Examples
doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"

doubleSwap("random w#rds writt&n h&r&", "#", "&")
➞ "random w&rds writt#n h#r#"*/
function doubleSwap (str, c1, c2) {
    str = str.replaceAll(c1, '+')
    str  = str.replaceAll(c2, c1)
    str  = str.replaceAll('+', c2)
    return str
}
////////////////////////////////////////////////////
//https://edabit.com/challenge/CmWQTvvkXSeaNGdDy
/*You have cultivated a plant, and after three long months, the time has come to reap the fruits (or the flowers, in this case) of your hard work. During the growth phase, you added water and fertilizer, and kept a constant temperature. It's time to check how much the plant has grown!
A plant is represented horizontally, from the base to the left, to the end to the right:
---@---@---@
The stem is made of hyphens, and the flowers are represented by symbols. A plant always starts with the stem, and always ends with flowers.
The four given parameters are:
seed (string) determines the type of flowers generated by the plant.
water (integer) each unit of water extends the portion of stem between the flowers, and gives the total number of segments (stem + flowers) of the plant.
fert (integer) each unit of fertilizer increases the amount of flowers, grouped in clusters.
temp (integer) if the temperature recorded is between 20°C and 30°C (bounds included) the plant grows normally, otherwise all the flowers die, except for a single survivor at the end of the stem.
Given the above parameters, implement a function that returns a string representing the plant (see the examples below for a better visualization).
Examples
plant("@", 3, 3, 25) ➞ "---@@@---@@@---@@@"
// Water gives the length of the stem portions between flowers.
// Water gives the total number of segments.
// Fertilizer gives the length of flowers clusters.
// In this case the temperature is in the acceptable range 20°C | 30°C
plant("#", 1, 5, 30) ➞ "-#####"
plant("&", 5, 1, 20) ➞ "-----&-----&-----&-----&-----&"
plant("§", 3, 3, 15) ➞ "---------§"
// The temperature out of range make all flowers die, except the last one.
// The stem is not affected by temperature.*/
function plant (seeds, water,fert, temp) {
    let stem =''
    if (temp < 20 || temp > 30) {
        water *= water
        for (let i = water; i > 0; i--) {
            stem += '-'
        }
        stem += seeds
        return stem
    }
    for (let i = water; i > 0; i--) {
        for (let i = water; i > 0; i--) {
            stem += '-'
        }
        for ( let j = fert; j > 0; j--) {
            stem += seeds
        }
    }
    return stem
}
////////////////////////////////////////////////
/*Given any number, we can create a new number by adding the sums of squares of digits of that number. For example, given 203, our new number is 4 + 0 + 9 = 13. If we repeat this process, we get a sequence of numbers:

203 -> 13 -> 10 -> 1 -> 1
Sometimes, like with 203, the sequence reaches (and stays at) 1. Numbers like this are called happy.

Not all numbers are happy. If we started with 11, the sequence would be:

11 -> 2 -> 4 -> 16 -> ...
This sequence will never reach 1, and so the number 11 is called unhappy.

Given a positive whole number, you have to determine whether that number is happy or unhappy.

Examples
happy(203) ➞ true

happy(11) ➞ false

happy(107) ➞ false*/
function happy (num) {
    let count = 0
    for (; count !== 1;) {
        count = 0
        while (num !== 0) {
             count += (num % 10) ** 2
            num = Math.floor(num / 10)
        }
        if (count === 4) {
            return false
        }
        num = count
    }
    return true
}

////////////////////////////////////////////
//
/*In number theory, a prime number is balanced if it is equidistant from the prime before it and the prime after it. It is therefore the arithmetic mean of those primes. For example, 5 is a balanced prime, two units away from 3, and two from 7. 211 is 12 units away from the previous prime, 199, and 12 away from the next, 223.

A prime that is greater than the arithmetic mean of the primes before and after it is called a strong prime. It is closer to the prime after it than the one before it. For example, the strong prime 17 is closer to 19 than it is to 13 (see note at bottom).

A prime that is lesser than the arithmetic mean of the primes before and after it is called weak prime. For example, 19.

Create a function that takes a prime number as input and returns "Strong" if it is a strong prime, "Weak" if it is a weak prime, or "Balanced".

Examples
primalStrength(211) ➞ "Balanced"

primalStrength(17) ➞ "Strong"

primalStrength(19) ➞ "Weak"*/
function primalStrength (prime) {
    let largerPrime = 0
    let smallerPrime = 0
    let divider = 1
    for (let i = prime + 1;;i++) {      
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                divider = j
                break
            }    
        }
        if (i % divider !== 0) {
            largerPrime = i
            break
        }
    }
    divider = 1
    for (let i = prime - 1;;i--) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                divider = j
                break
            }    
        }
        if (i % divider !== 0) {
            smallerPrime = i
            break
        }
    }
    if ((smallerPrime + largerPrime) / 2 === prime) {
        return  "Balanced"
    } else if ((smallerPrime + largerPrime) / 2 < prime) {
        return "Strong"
    } else if ((smallerPrime + largerPrime) / 2 > prime) {
        return "Weak"
    }    
}
//////////////////////////////////////////////
//https://edabit.com/challenge/62BAcgsNSdwYmE9ty
/*Given a letter, created a function which returns the nearest vowel to the letter. If two vowels are equidistant to the given letter, return the earlier vowel.
Examples
nearestVowel("b") ➞ "a"
nearestVowel("s") ➞ "u"
nearestVowel("c") ➞ "a"
nearestVowel("i") ➞ "i"
Notes
All letters will be given in lowercase.
There will be no alphabet wrapping involved, meaning the closest vowel to "z" should return "u", not "a".*/
function nearestVowel (letter) { 
    let lowVowel = -2
    let highVowel = -2
    let vowels = 'aeiou'
    let abc = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < abc.length; i++) {
        if (abc[i] !== letter) {
            continue
        }
        for (let j = i; j < abc.length; j++) {
            for (let v = 0; v < vowels.length; v++) {
                if (abc[j] === vowels[v]) {
                    highVowel = j
                    break
                }
            }
            if (highVowel !== -2) {
                break
            }
        }
        if (highVowel === -2) {
            highVowel = 1000
        }
        for (j = i; j > -1; j--) {
             for (let v = 0; v < vowels.length; v++) {
                 if (abc[j] === vowels[v]) {
                     lowVowel = j
                     break
                 }
            }
            if (lowVowel !== -2) {
                break
            }
        }
        if ((i - lowVowel) <= (highVowel - i)) {
            return abc[lowVowel]
        } else if ((i - lowVowel) > (highVowel - i)) {
             return abc[highVowel]
        }
    }  
}
/////////////////////////////////////
//https://edabit.com/challenge/CCAEMfHcmrvSwA4KR
/*A spoonerism is when the first letters / sounds of two words are transposed onto one another. Create a function that takes a two-word string and performs a spoonerism on the phrase.
Examples
spoonerise("history lecture") ➞ "listory hecture"
spoonerise("loud noises") ➞ "noud loises"
spoonerise("chow mein") ➞ "mow chein"
spoonerise("edabit rules!") ➞ "redabit ules!"
Notes
Only two words will be parsed into the function. Don't worry about handling more than two.
You won't always just have to swap the first letters, take care to notice which letters have been switched in the examples (notice the difference between vowel-starting and consonant-starting words).*/
function spoonerise (str) {
    let splitArr = str.split(' ')
    let vowel = 'aeiou'
    let res1 = ''
    let res2 = ''
    let loopDinamite = 0
    
    for (let j = 0; j < splitArr[0].length; j++) {
        for (let i = 0; i < vowel.length; i++) {
            if (splitArr[0][j] !== vowel[i]) {
                continue
            } else if (splitArr[0][j] === vowel[i]) {
                loopDinamite = 1
                break
            }
        }
        if (loopDinamite === 1) {
            break
        }
        res1 += splitArr[0][j]
        splitArr[0] = splitArr[0].slice(j+1, splitArr[0].length)
        j = -1
    }
    
    loopDinamite = 0
    
    for (let j = 0; j < splitArr[1].length; j++) {
        for (let i = 0; i < vowel.length; i++) {
            if (splitArr[1][j] !== vowel[i]) {
                continue
            } else if (splitArr[1][j] === vowel[i]) {
                loopDinamite = 1
                break
            }
        }
         if (loopDinamite === 1) {
            break
        }
        res2 += splitArr[1][j]
        splitArr[1] = splitArr[1].slice(j+1, splitArr[1].length)
        j = -1
    }
    splitArr[0] = res2 +splitArr[0]
    splitArr[1] = res1 +splitArr[1]
    let result =  splitArr[0] + ' ' +  splitArr[1]
    return result
}
////////////////////////////////////////////////
//https://edabit.com/challenge/Lcgmf6CvjXnzFTScc
/*Write a function that diagonally orders numbers in a n x n matrix, depending on which of the four corners you originate from: upper-left (ul), upper-right (ur), lower-left (ll), lower-right (lr).
Examples
diagonalize(3, "ul") ➞ [
  [0, 1, 2],
  [1, 2, 3],
  [2, 3, 4]
]
diagonalize(4, "ur") ➞ [
  [3, 2, 1, 0],
  [4, 3, 2, 1],
  [5, 4, 3, 2],
  [6, 5, 4, 3]
]
diagonalize(3, "ll") ➞ [
  [2, 3, 4],
  [1, 2, 3],
  [0, 1, 2]
]
diagonalize(5, "lr") ➞ [
  [8, 7, 6, 5, 4],
  [7, 6, 5, 4, 3],
  [6, 5, 4, 3, 2],
  [5, 4, 3, 2, 1],
  [4, 3, 2, 1, 0]
]*/
function diagonalize (index, dimention) {
    let arr = []
    if (dimention === 'ul') {
        let indexCopy = index
        let sum = 0 
        for (let i = 0 ; i < index ; i++) {
            arr.push([])
            let j = sum
            for (j ; j < indexCopy ; j++) {
                arr[i].push(j)
            }
            indexCopy++
            sum++
        }
       return arr 
    } else if (dimention === 'ur') {
        let indexCopy = index
        let sum = 0 
        for (let i = 0 ; i < index ; i++) {
            arr.push([])
            let j = sum
            for (j ; j < indexCopy ; j++) {
                arr[i].unshift(j)
            }
            indexCopy++
            sum++
        }
       return arr 
    } else if (dimention === 'll') {
        let indexCopy = index
        let sum = 0 
        for (let i = index - 1 ; i !== -1 ; i--) {
            arr[i] = []
            let j = sum
            for (j ; j < indexCopy ; j++) {
                arr[i].push(j)
            }
            indexCopy++
            sum++
        }
       return arr 
    } else if (dimention === 'lr') {
        let indexCopy = index
        let sum = 0 
        for (let i = index - 1 ; i !== -1 ; i--) {
            arr[i] = []
            let j = sum
            for (j ; j < indexCopy ; j++) {
                arr[i].unshift(j)
            }
            indexCopy++
            sum++
        }
       return arr 
    }
}

////////////////////////////////////////////////////////////
//https://edabit.com/challenge/w5LTwJwDLK4uQ3Dmv
/*Group in Order
Create a function that groups an array of numbers based on a size parameter. The size represents the maximum length of each sub-array.

[1, 2, 3, 4, 5, 6], 3
[[1, 3, 5], [2, 4, 6]]
// Divide array into groups of size 3.

[1, 2, 3, 4, 5, 6], 2
[[1, 4], [2, 5], [3, 6]]
// Divide array into groups of size 2.

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4
[[1, 4, 7, 10], [2, 5, 8, 11], [3, 6, 9]]
// "Leftover" arrays are okay.
Examples
group([1, 2, 3, 4], 2) ➞ [[1, 3], [2, 4]]

group([1, 2, 3, 4, 5, 6, 7], 4) ➞ [[1, 3, 5, 7], [2, 4, 6]]

group([1, 2, 3, 4, 5], 1) ➞ [[1], [2], [3], [4], [5]]

group([1, 2, 3, 4, 5, 6], 4) ➞ [[1, 3, 5], [2, 4, 6]]
Notes
The size parameter represents the maximum size for each sub-array (see ex.4). You should try to fill each sub-array evenly. In other words, ex.4 should be [[1, 3, 5], [2, 4, 6]], not [[1, 3, 5, 6], [2, 4]].
Keep the relative order of the numbers in each sub-array the same as the order in the original array.
When distributing the numbers into the sub-arrays, each sub-array should have a number in it prior to receiving a new number (e.g. for example 1, your sub-arrays will be of size 2, and because there are 4 numbers, you will need 2 sub-arrays. When interating through the original array to fill the sub-arrays it should go [[],[]] -> [[1],[]] -> [[1],[2]] -> [[1, 3], [2]] -> [[1, 3], [2, 4]]).*/
function group (arr, num) {
    let result = []
    if (arr.length % num === 0) {
        let jCopy = 0 
        let j
        for (let i = 0; i < arr.length/num; i++) {
             j = jCopy
            result.push([])
            for (j; j < arr.length; j += arr.length/num) {
                result[i].push(arr[j])
            }
             jCopy++
        }
        return result
    } else if (arr.length % num !== 0) {
        let numTester = num
        for (numTester; numTester !== 0; numTester--) {
            if (numTester - ((arr.length / numTester) % 1) * numTester <= 1 || (arr.length / numTester) % 1 === 0) {
                let jCopy = 0 
                let j
                for (let i = 0; i < arr.length/numTester; i++) {
                     j = jCopy
                    result.push([])
                    for (j; j < arr.length; j += Math.round(arr.length/numTester)) {
                        result[i].push(arr[j])
                    }
                     jCopy++
                }
                return result
            }
        }
    }    
}
//////////////////////////////////////////////////////////
//
/*Most Common Last Vowel
Create a function that takes in a sentence as input and returns the most common last vowel in the sentence as a single character string.

Examples
commonLastVowel("Hello World!") ➞ "o"

commonLastVowel("Watch the characters dance!") ➞ "e"

commonLastVowel("OOI UUI EEI AAI") ➞ "i"
Notes
There will only be one common last vowel in each sentence.
If the word has one vowel, treat the vowel as the last one even if it is at the start of the word.
The question asks you to compile all of the last vowels of each word and returns the vowel in the list which appears most often.
y won't count as a vowel.
Return outputs in lowercase.*/
function commonLastVowel (str) {
    let string = str.toLowerCase()
    let arrStr = string.split(' ')
    let vowel = 'aeiou'
    let A = 0
    let E = 0
    let I = 0
    let O = 0
    let U = 0
     let loopDinamite = 0
    for (let i = arrStr.length - 1; i > -1; i--) {
       loopDinamite = 0
        for (let j = arrStr[i].length - 1; j > -1; j--) {
            for (let k = 0; k < vowel.length; k++) {
                if (arrStr[i][j] === vowel[k] ) {
                    if (vowel[k] === 'a') {
                        A +=1
                        loopDinamite = 1
                        break
                    } else if (vowel[k] ==='e') {
                        E += 1
                        loopDinamite = 1
                        break
                    } else if (vowel[k] ==='i') {
                        I += 1
                        loopDinamite = 1
                        break
                    } else if (vowel[k] ==='o') {
                        O += 1
                        loopDinamite = 1
                        break
                    } else if (vowel[k] ==='u') {
                        U += 1
                        loopDinamite = 1
                        break
                    }
                }
            }
            if (loopDinamite === 1) {
                break
            }
        }       
    }
     if (Math.max(A, E, I, O, U) === A) {
         return 'a'
     } else if (Math.max(A, E, I, O, U) === E) {
         return 'e'
     } else if (Math.max(A, E, I, O, U) === I) {
         return 'i'
     } else if (Math.max(A, E, I, O, U) === O) {
         return 'o'
     } else if (Math.max(A, E, I, O, U) === U) {
         return 'u'
     }
}
//////////////////////////////////////////////////////////
//  https://edabit.com/challenge/gjKemfXwedir9y7D4
/*A Capital Challenge
Given two strings, s1 and s2, select only the characters in each string where the character in the same position in the other string is in uppercase. Return these as a single string.

To illustrate, given the strings s1 = "heLLo" and s2 = "GUlp", we select the letters "he" from s1, because "G" and "U" are uppercase. We then select "lp" from s2, because "LL" is in uppercase. Finally, we join these together and return "help".

Examples
selectLetters("heLLO", "GUlp") ➞ "help"

selectLetters("1234567", "XxXxX")  ➞ "135"

selectLetters("EVERYTHING", "SomeThings") ➞  "EYSomeThings"
Notes
The strings don't have to be the same length.
Strings can contain non-alphabetic characters.*/

function selectLetters (str1, str2) {
    let result = ''
    for (let i = 0 ; i < str2.length; i++) {
        if (str1[i] !== undefined && str2[i].toUpperCase() != str2[i].toLowerCase()) {
            if (str2[i].toUpperCase() === str2[i]) {
                result += str1[i]
            }
        }
    }
    for (let j = 0 ; j < str1.length; j++) {
        if (str2[j] !== undefined && str1[j].toUpperCase() != str1[j].toLowerCase()) {
            if (str1[j].toUpperCase() === str1[j]) {
                result += str2[j]
            }
        }
    }
    return result
}
///////////////////////////////////////////////////////////////////
//
/*Underscore-Hash Staircase
Create a function that will build a staircase using the underscore _ and hash # symbols. A positive value denotes the staircase's upward direction and downwards for a negative value.
Examples
staircase(3) ➞ "__#\n_##\n###"
__#
_##
###

staircase(7) ➞ "______#\n_____##\n____###\n___####\n__#####\n_######\n#######"
______#
_____##
____###
___####
__#####
_######
#######

staircase(2) ➞ "_#\n##"
_#
##

staircase(-8) ➞ "########\n_#######\n__######\n___#####\n____####\n_____###\n______##\n_______#"
########
_#######
__######
___#####
____####
_____###
______##
_______#
Notes
All inputs are either positive or negative values.
The string to be returned is adjoined with the newline character (\n).
A recursive version of this challenge can be found here.  */
function staircase (num) {
    let result = ''
    if (num >= 0) {
        let underScore = num -1
        for (let n = 0; n < num; n++) {
            for (let i = 0; i < underScore; i++) {
                result += '_'
            }
            for (let j = 0; j < num - underScore; j++) {
                result += '#'
            }
            result += '\n'
            underScore--
        }
    } else if (num < 0) {
        let underScore = 0
        for (let n = 0; n > num; n--) {
            for (let i = 0; i < underScore; i++) {
                result += '_'
            }
            for (let j = num; 0 > j + underScore; j++) {
                result += '#'
            }
            result += '\n'
            underScore++
        }
    }
    return console.log(result)
}
//////////////////////////////////////////////////
//https://edabit.com/challenge/X47SKhYan6mATPfhA
/*Column With Maximum Sum
Given an array of numbers and a value for n, split the numbers into n-sized groups. If we imagine that these groups are stacked on top of each other (see below), return the column number that has the greatest sum. If two or more columns have the same sum, return the one with the smallest column number.

Example
nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]
n = 4
Gives the array:

[[4, 14, 12,  7],
[14, 16, 5, 13],
[7, 16, 11, 19]]

// 1, 2, 3, 4 (column)
// 25, 46, 28, 39 (sum)
You would return 2, as the 2nd column has the greatest sum.

Notes
Nums will always divide into equal-length groups.*/ 
function colWithMaxSum (array, n) {
    
    let yntacik = 0
    let pahestayin = 0
    let result = 0
    let arr = []

    let nCopy = n
    let k = 0
if (n !== array.length) {
   for (let i = 0; i < array.length/n; i++) {
       arr.push([])
       for (k; k < nCopy; k++) {
           arr[i].push(array[k])
       }
       k = nCopy
       nCopy = nCopy + n
   }
    for (let i = 0; i < n ;i++) {
        for (let j = 0; j < arr.length; j++ ) {
            yntacik += arr[j][i]
        }
        if (yntacik > pahestayin) {
            result = i+1
            pahestayin = yntacik
            yntacik = 0
        } else if (yntacik < pahestayin) {
            yntacik = 0
        }
    }
   return result
} else if (n === array.length) { 
  let result = -Infinity
  let resultEnd
  for (let i = 0; i < array.length; i++) {
      if (array[i] > result) {
          result = array[i]
          resultEnd = i+1
      }
  }
    return resultEnd
 }    
}

///////////////////////////////////////////
//https://edabit.com/challenge/aewSLr2r2LMSDhPxf?fbclid=IwAR38IO_Ibed04ZNv_y4vWmLYngSMJVaeLtUpK2zynuAiMn1xxXzwyT_i_bw
/*Majority Vote
Create a function that returns the majority vote in an array. A majority vote is an element that occurs > N/2 times in an array (where N is the length of the array).

Examples
majorityVote(["A", "A", "B"]) ➞ "A"

majorityVote(["A", "A", "A", "B", "C", "A"]) ➞ "A"

majorityVote(["A", "B", "B", "A", "C", "C"]) ➞ null
Notes
The frequency of the majority element must be strictly greater than 1/2.
If there is no majority element, return null.
If the array is empty, return null.*/ 
function majorityVote (arr) {
    let result = null
    let loopBreaker = 'off'
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        for (let copy = 0; copy < i; copy++) {
            if (arr[copy] === arr[i]) {
                loopBreaker = 'on'
                break
            }
        }
        if (loopBreaker === 'on') {
            loopBreaker = 'off'
            continue
        }
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                count++
            }
        }
        if (count > arr.length/2) {
            return arr[i]
        }
        count = 0
    }
    return result
}
/////////////////////////////////////////////
//https://edabit.com/challenge/MRJBdWsEubRSufbs7
/*Untouchable Numbers
A positive number greater than 1 can be defined untouchable when it's not equal to the sum of the proper divisors (called also aliquot sum) of any other positive number, in a range starting from 2 and ending with the square of the given number (bounds included).

Given an integer number, implement a function that returns:

true if the given number is untouchable.
An array containing the numbers whose proper divisors sum is equal to the number, if the given number is not untouchable.
A string "Invalid Input" if the given number is lower than 2.
Examples
isUntouchable(2) ➞ true
// Range: 2 to 4
// 2 = 1  |  3 = 1  |  4 = 1+2 = 3
// No sum is equal to the given number

isUntouchable(3) ➞ [4]
// Range: 2 to 9
// As in the example above, 4 = 1+2 = 3

isUntouchable(6) ➞ [6, 25]
// Range: 2 to 36
// 6 = 1+2+3 = 6  |  25 = 1+5 = 6

isUntouchable(1) ➞ "Invalid Input"
// The given number is lower than 2
Notes
The proper divisors of a number are, merely, all its divisors less the number itself.
More than a number can have a proper divisors sum equal to the given number, with given number included (see example #3).
Trivia: As far as we know, numbers 2 and 5 are the only two primes present in the sequence, with 5 being the only odd number present; by the way, these two assertions are still unproofed.*/
function isUntouchable (n) {
  
    if (n < 2) {
        return "Invalid Input"
    } else if (n >= 2) {
        let k = n ** 2
        let result = []
        let count = 0
        for (let i = 2; i <= k; i++) {
            for (let j = 1; j < i; j++) {
                if (i % j === 0) {
                    count +=j
                }
            }
            if (count === n) {
                result.push(i)
            }
            count = 0
        }
        if (result.length !== 0) {
            return result
        } else if (result.length === 0) {
            return true
        }
    }
}
////////////////////////////////////////////////////////

//https://edabit.com/challenge/hxHBsYebaBM3ff5s6?fbclid=IwAR16MTUitNoWZmoXkGssxe2M8zskUfKG3W-nOn5XzxLqfUDCwibGzIPswro
/*Find the Most Frequent Element in an Array
Create a function that takes an array and returns the most frequently occurring element contained within it.

Examples
findFrequent([3, 7, 3]) ➞ 3

findFrequent([null, "hello", true, null]) ➞ null

findFrequent([false, "up", "down", "left", "right", true, false]) ➞ false*/
function findFrequent (arr) {
    let count = 0
    let index = 0
    let loopBreaker = 'off'
    let reservCount = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] === arr[i]) {
                loopBreaker = 'on'
                break
            }
        }
        if (loopBreaker === 'on') {
            loopBreaker = 'off'
            continue
        }
        for (let k = 0; k < arr.length; k++) {
            if (arr[i] === arr[k]) {
                count++
            }
        }
        if (count > reservCount) {
            reservCount = count
            count = 0
            index = i
        }
        count = 0
    }
    return arr[index]
} 
////////////////////////////////////////////////////////////////////

//https://edabit.com/challenge/BjpT9DZhCteCveeP2
/*Sum of Factors of Factors
Create a function that takes a number and returns the sum of factors of factors of the given number.

Examples
sumFF(69) ➞ 3, 23 ➞ 0
// Both 3 and 23 are prime numbers and have no factors
// other than 1 and themselves so the result is 0.

sumFF(12) ➞ 2, 3, 4, 6 ➞ (0) + (0) + (2) + (2+3) ➞ 7

sumFF(420) ➞ 2,4, 6, 10, 12 ... ➞ (2) + (2+3) + (2+5) + (2+3+4+6) ... ➞ 1175

sumFF(619) ➞ ___ ➞ 0
// 619 doesn't have any factors (other than 1 and 619).
Notes
The number will always be greater than 0.
Factors that are equal to the number or 1, don't count (see example #1).*/
function sumFF (num) {
    let result = 0
    for (let prime = 2; prime < num; prime++) {
        if (num % prime === 0) {
            for (let fF = 2; fF < prime; fF++) {
                if (prime % fF === 0) {
                    result += fF
                }
            }
        }
    }
    return result
}
//////////////////////////////////////////////////////

//https://edabit.com/challenge/7vowiHDR5oYksAjqQ?fbclid=IwAR19FrskR11Gt9tdyDTIPnAXu7JBrD6ekhTr1ExP9D9wK0nUUWunLV4EFCA
/*Maximize the First Number
Write a function that makes the first number as large as possible by swapping out its digits for digits in the second number.

To illustrate:

maxPossible(9328, 456) ➞ 9658
// 9658 is the largest possible number built from swaps from 456.
// 3 replaced with 6 and 2 replaced with 5.
Examples
maxPossible(523, 76) ➞ 763

maxPossible(9132, 5564) ➞ 9655

maxPossible(8732, 91255) ➞ 9755
Notes
Each digit in the second number can only be used once.
Zero to all digits in the second number may be used.*/
function maxPossible (num1, num2) {
    num1 = String(num1)
    num2 = String(num2)
    let result = ''
    for (let i = 0; i < num1.length; i++) {
        for (let j = 0; j < num2.length; j++) {
            if (Number(num1[i]) < Number(num2[j]) && Number(num2[j]) > Number(result)) {
                result = num2[j]
            }
        }
        if (result !== '') {
            num1 =num1.replace(num1[i], result)
            num2 = num2.replace(result, '0')
        }
       
        result = ''
    }
    return Number(num1)
}
///////////////////////////////////////

//https://edabit.com/challenge/biyHa34iTd58LfFFb
/*Basic Statistics: Mode
The mode of a group of numbers is the value (or values) that occur most often (values have to occur more than once). Given a sorted array of numbers, return an array of all modes in ascending order.

Examples
mode([4, 5, 6, 6, 6, 7, 7, 9, 10]) ➞ [6]

mode([4, 5, 5, 6, 7, 8, 8, 9, 9]) ➞ [5, 8, 9]

mode([1, 2, 2, 3, 6, 6, 7, 9]) ➞ [2, 6]
Notes
In this challenge, all group of numbers will have at least one mode.*/
function mode (arr) {
    debugger
    let result = []
    let reserveCount = -1
    let count = 0
    let loopBreaker = 'off'
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < i ; k++) {
            if (arr[k] === arr[i]) {
                loopBreaker = 'on'
                break
            }
        }
        if (loopBreaker === 'on') {
            loopBreaker = 'off'
            continue
        }
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++
            }
        }
        if (count > reserveCount) {
            result = []
            result.push(arr[i])
            reserveCount = count
            count = 0
        } else if (count === reserveCount) {
            result.push(arr[i])
            count = 0
        }
        count = 0
    }
    return result
} 
/////////////////////////////////////////////////////////////

// parking game 
// CHI STACVEL !!!

//////////////////////////////////////////////////////////

//
/*isPalindromePossible 
stacvel e*/
function isPalidromePossible (str) {
    let count = 0
    let warning = 0
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++
            }
        }
        if (count % 2 === 0) {
            count = 0
            continue
        } else if (count % 2 !== 0) {
            warning++
            count = 0
        }
        if (warning > 1) {
            return false
        }
    }
    return true
}
/////////////////////////////////////////////////
//https://edabit.com/challenge/pDEXzeuQAowyoa623
/*Sexagenary Cycle (Chinese Zodiac)
In early recorded Chinese history, time was reckoned using the sexagenary (60-year) cycle, generated from two subcycles:

Five heavenly stems (elements) in this order: wood, fire, earth, metal, water. The stems change every two years.
Twelve earthly branches (animals) in this order: rat, ox, tiger, rabbit, dragon, snake, horse, sheep, monkey, rooster, dog, pig. The branches change yearly.
The combinations between these two sub-cycles result in a 60-year cycle where no two years are the same — for example, the 5 years of the Rat have 5 different elements: 1924 Wood Rat, 1936 Fire Rat, 1948 Earth Rat, 1960 Metal Rat, 1972 Water Rat.

The first 14 years of the current cycle are shown in the table below:

Gregorian Year	Stem	Branch
1984	Wood	Rat
1985	Wood	Ox
1986	Fire	Tiger
1987	Fire	Rabbit
1988	Earth	Dragon
1989	Earth	Snake
1990	Metal	Horse
1991	Metal	Sheep
1992	Water	Monkey
1993	Water	Rooster
1994	Wood	Dog
1995	Wood	Pig
1996	Fire	Rat
1997	Fire	Ox
These days, the sexagenary cycle is used mainly for historical celebrations and events, and in Chinese astrology. The Gregorian calendar is now the standard means of reckoning time.

Create a function that takes a number representing a year in the Gregorian calendar, and returns a string consisting of the corresponding stem-and-branch combination in the sexagenary cycle.

Examples
sexagenary(1971) ➞ "Metal Pig"

sexagenary(1927) ➞ "Fire Rabbit"

sexagenary(1974) ➞ "Wood Tiger"*/
function zodiak (num) {
    let yearArr = ['rat', 'ox','tiger', 'rabbit', 'dragon','snake','horse','sheep', 'monkey', 'rooster', 'dog','pig']
     let tarerq = ['Wood','Wood','Fire','Fire','Earth','Earth','Metal','Metal','water','water']
     let result = ''
     let count = 1923
     while (count < num) {
         for (let i = 0; i < yearArr.length; i++) {
             count++
             if (count === num) {
                 result += yearArr[i]
                 break
             }
         }
     }
     count = 1923
     while (count < num) {
         for (let j = 0; j < tarerq.length; j++) {
             count++
             if (count === num) {
                 result =tarerq[j] + ' ' + result
                 break
             }
         }
     }
     return result
 }
 /////////////////////////////////////////////////////

 //https://edabit.com/challenge/oxbB9va7ejSMoCf9B
 /*A Periodic Series
This challenge involves a series that can start with any string of digits. The next term in the series is found by adding the digits of the previous term, appending that sum to the previous term, and then truncating the leftmost digits so that the number of digits in the terms is always the same.

Let's start with "1234". The sum of the digits is 10. Appending gives us "123410", then truncating the left two digits results in "3410". The next three terms are "4108", "0813", "1312". The series becomes periodic when a term that previously appeared occurs again.

Example:

"124", "247", "713", "311", "115", "157", "713", "311" ...
This series becomes periodic at a length of 6 before "713" reappears.

Create a function whose argument is a digit string (the first term) and returns the length of the series when it first becomes periodic.

Examples
periodic("1") ➞ 1

periodic("3061") ➞ 7

periodic("02468") ➞ 178

periodic("314159265") ➞ 12210*/
 function periodic (str) {
    let arr = [str]
    let count = 0
    let newStr = ''
    let sum = 0
    let loopCounter = 0
   while (true) {
       loopCounter++
        for (let i = 0; i < str.length; i++) {
            sum += Number(str[i]) 
        }
        str += sum
        while (sum !== 0) {
            sum = Math.floor(sum/10)
            count++
        }
        for (let j = count; j < str.length; j++) {
            newStr += str[j]
        }
        for (let k = 0; k < arr.length; k++) {
            if (newStr === arr[k]) {
               return loopCounter
            }
        }
        arr.push(newStr)
        str = newStr
        newStr = ''
       count = 0
   }
} 
////////////////////////////////////////////////////

//https://edabit.com/challenge/KYeCAfYxsvomapQg2?fbclid=IwAR2SdzTgaRX5XwE365LLc6VMpCgMnoDkPu8ol5g_jeT_UNQhbhhdSpbK-Tg
function allPairs (arr, num) {
    
    let small = arr[0]
    let index = 0
    let result = []
    for (let globalLoop = 0; globalLoop < arr.length; globalLoop++) {
        for (let i  = 0; i < arr.length; i++) {
            if (arr[i] < small) {
                small = arr[i]
                index = i
            }
        }
        for (let j = 0; j < arr.length; j++) {
            if (index === j) {
                continue
            }
            if (arr[index] + arr[j] === num) {
                result.push([arr[index], arr[j]])
                delete(arr[j] )
                delete(arr[index] )
                break
            }
        }
    }
    return result
}
////////////////////////////////////////////////////////

//https://edabit.com/challenge/KYeCAfYxsvomapQg2?fbclid=IwAR2SdzTgaRX5XwE365LLc6VMpCgMnoDkPu8ol5g_jeT_UNQhbhhdSpbK-Tg
/*All Pairs that Sum to Target
Create a function that returns all pairs of numbers in an array that sum to a target. Sort the pairs in ascending order with respect to the smaller number, then order each pair in this order: [smaller, larger].

Examples
allPairs([2, 4, 5, 3], 7) ➞ [[2, 5], [3, 4]]
// 2 + 5 = 7, 3 + 4 = 7

allPairs([5, 3, 9, 2, 1], 3) ➞ [[1, 2]]

allPairs([4, 5, 1, 3, 6, 8], 9) ➞ [[1, 8], [3, 6], [4, 5]]
// Sorted: 1 < 3 < 4; each pair is ordered [smaller, larger]
Notes
If no pairs are found, return an empty array [].
You are only allowed to use each number once in a pair.
See Comments for a hint.*/
function allPairs (arr, num) { 
    let index 
    let result = []
    let small = Infinity
    for (let g = 0; g <= arr.length/2; g++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < small) {
                small = arr[i]
                index = i
            }
        }
        for (let j = 0; j < arr.length; j++) {
            if (j === index) {
                continue
            } else if (arr[j] + arr[index] === num) {
                result.push ([arr[index], arr[j]])
                arr[index] = Infinity
                arr[j] = Infinity
                break
            }
        }
        arr[index] = Infinity
        small = Infinity
        index = null
    }
    return result
}

///////////////////////////////////////////////////////////////

//https://edabit.com/challenge/Wk7ScSpAG4wLSqm8k
/*Amount of Possible Combinations
Write a function that returns the amount of possible combinations when drawing the given amount of cards from a deck of cards.

The function must take two inputs: k is the amount of cards to draw. n the total amount of cards in the deck.

For example, a poker hand can be described as a 5-combination (k = 5) of cards from a 52 card deck (n = 52). The 5 cards of the hand are all distinct, and the order of cards in the hand does not matter. There are 2,598,960 such combinations.

The amount of combinations should be returned as an integer.

Examples
combinations(52, 52) ➞ 1

combinations(5, 52) ➞ 2598960

combinations(10, 52) ➞ 15820024220
Notes
Try solving this natively without any imports.
Remember to return result as integer.*/

/* FORMULA ==>        n! / (n - k)! * k!  
*/
function combinations (k , n) {
    let resultN = 1
    for (let i = 1; i <= n; i++) {
        resultN *= i
    }
   let resultNK = 1
   for (let j = 1; j <= (n - k); j++) {
       resultNK *= j
   }
   let resultK = 1
   for (let l = 1; l <= k; l++) {
       resultK *= l
   }
   let result = resultN / (resultNK * resultK)
   return Math.round(result)
}
/////////////////////////////////////////////////////////

///https://edabit.com/challenge/X47SKhYan6mATPfhA

/*Column With Maximum Sum
Given an array of numbers and a value for n, split the numbers into n-sized groups. If we imagine that these groups are stacked on top of each other (see below), return the column number that has the greatest sum. If two or more columns have the same sum, return the one with the smallest column number.
Example
nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]
n = 4
Gives the array:
[[4, 14, 12,  7],
[14, 16, 5, 13],
[7, 16, 11, 19]]
// 1, 2, 3, 4 (column)
// 25, 46, 28, 39 (sum)
You would return 2, as the 2nd column has the greatest sum.
Notes
Nums will always divide into equal-length groups.*/
function colWithMaxSum (arr, num) {
    let result = []
    let resultPushCount = 0
    let numCopy = num
    for (let i = 0; i < arr.length; ) {
        result.push([])
       for (i; i < numCopy; i++) {
           result[resultPushCount].push(arr[i])
        }
        resultPushCount++
        numCopy += numCopy
    }
    let sum = 0
    let larger = -Infinity
    let column = 0
    for (let j = 0; j < num; j++) {
        for (let k = 0 ; k < result.length; k++) {
            sum += result[k][j]
        }
        if (sum > larger) {
            larger = sum
            column = j+1
        }
        sum = 0
    }
    return column
}
////////////////////////////////////
//https://edabit.com/challenge/vCn8qspYNo4PizCw9?fbclid=IwAR0wx2I2FCMP4qOHX4HX7pX25zsVSLzJ_EYLJIU9cZI19NNltY8qpE0kPvE
/*Return the Sum of Two Numbers (With a Twist)
Wait, a very hard challenge for returning the sum of two numbers? Well in this one, the numbers can have 1000 digits!

So, what's the twist? You have to do the summation as if you're doing it manually on a piece of paper, thus, the conversion of the numeric string to numeric literal is basically disallowed.

Create a function that:

Takes two numbers as strings.
Calculates the sum of these two numbers.
Returns the result as a string.
Examples
sum2("5125515215521515", "125261616261626") ➞ "5250776831783141"

sum2("6666666666666666666666666666", "99999999999999999999999") ➞ "6666766666666666666666666665"

sum2("123456789123456789123456789", "987654321987654321987654329876543") ➞ "987654445444443445444443453333332"
Notes
All numbers are positive integers with no leading zeros.
Remember how to sum two numbers ON PAPER; it could be useful.
Your function must run in less than 10 seconds because Edabit has a time limit.
The use of Number classes such as BigInt is disallowed -- it will defeat the purpose and the level of difficulty associated to this challenge.*/

function sum2 (num1, num2) {   
    let count = 0
    if (num1.length > num2.length) {
        count = num1.length - num2.length
        for (let i = 0; i < count; i++) {
            num2 = '0' + num2
        }
    } else if (num1.length < num2.length) {
         count = num2.length - num1.length
        for (let i = 0; i < count; i++) {
            num1 = '0' + num1
        }
    }
    let result = ''
    let sum = 0
    let mnacord = 0
    for (let j = num1.length - 1; j >= 0 ;j--) {
        sum = Number(num1[j]) + Number(num2[j]) + mnacord
        if (sum >= 10) {
            result = sum % 10 + result
            mnacord = Math.floor(sum/10)         
        } else if (sum < 10) {
            result = sum + result
            mnacord = 0
        }
        if (j === 0 & mnacord !== 0) {
            result = mnacord + result
        }
        sum = 0
    }
    return result
}
///////////////////////////////////////////////////////

///https://edabit.com/challenge/bzir2NMSGMYDXeNEG
/*pigLatin 3.0
Write a function that converts a sentence into pig latin.

Rules for converting to pig latin:

For words that begin with a vowel (a, e, i, o, u), add "way".
Otherwise, move all letters before the first vowel to the end and add "ay".
For simplicity, no punctuation will be present in the inputs.
Examples
pigLatinSentence("this is pig latin") ➞ "isthay isway igpay atinlay"

pigLatinSentence("wall street journal") ➞ "allway eetstray ournaljay"
Notes
All letters will be in lowercase.*/

function pigLatinSentence (str) {
    let arr = str.split(' ')
    let loopBreaker = 'off'
    let vowel = 'aeiou'
    let noVowelWord = ''
    for (let i = 0; i < arr.length; i++) {
        for (let v = 0; v < vowel.length; v++) {
            if (arr[i][0] === vowel[v]) {
                arr[i] =  arr[i] + 'way' 
                loopBreaker = 'on'
                break
            }
        }
        if (loopBreaker === 'on') {
            loopBreaker = 'off'
            continue
        }
        for (let j = 0; j < arr[i].length; j++) {
            for (let v = 0; v < vowel.length; v++) {
                if (arr[i][j] === vowel[v]) {
                    noVowelWord = arr[i].slice(j) + noVowelWord + 'ay'
                    loopBreaker = 'on'
                    break
                }
            }
            if (loopBreaker === 'on') {
                loopBreaker = 'off'
                break
            }
            noVowelWord += arr[i][j]
        }
        arr[i] = noVowelWord
        noVowelWord = ''
    }
    arr = arr.join(' ')
    return arr
}
