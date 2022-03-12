// 1. For a given number calculate the sum of its digits.
let number = +prompt('enter a number')
let sum = 0
if (number < 0) { // bacasakan tveri hamar
    while (number != 0) {
        sum = sum + (number % 10)
        number = Math.ceil(number / 10) //tivy kloracnum enq depi verevi tiv
    }
    console.log(sum)
} else if (number >= 0) { //0 ev drakan tveri hamar

    while (number != 0) {
        sum = sum + (number % 10)
        number = Math.floor(number / 10) // tivy kloracnum enq depi nerqevi tivn
    }
    console.log(sum)
}

//for 
let number = +prompt('enter a number')
let sum = 0
if (number < 0) { // bacasakan tveri hamar
    for (number; number != 0;  number / 10){
        sum = sum + (number % 10)
        number = Math.ceil(number / 10) 
    }
    console.log(sum)
} else if (number >= 0) { //0 ev drakan tveri hamar

    for (number; number != 0; number / 10) {
        sum = sum + (number % 10)
        number = Math.floor(number / 10) 
    console.log(sum)
}

//          2 prompt -ov
let number1 = +prompt('')
let number2 = +prompt('')
let sum = 0

if (number1 > number2) {
        while (number1 != 0) {
        sum = sum + (number1 % 10) + (number2 % 10)
        number1 = Math.floor(number1 / 10)
        number2 = Math.floor(number2 / 10)
        }
        console.log(sum)
} else if (number2 >= number1) {
        while (number2 != 0) {
        sum = sum + (number2 % 10) + (number1 % 10)
        number2 = Math.floor(number2 / 10)
        number1 = Math.floor(number1 / 10)
        }
        console.log(sum)
}

//-------------------------------------------------------------------------------

/* 2. Given three sides of a triangle. Check whether the triangle is valid or not. Print “yes” if it is valid
and “no"; otherwise. (Triangle is valid if the sum of its two sides are greater than the third side).*/

let a = +prompt('for: a') 
let b = +prompt('for: b') 
let c = +prompt('for: c') 

if ((a + b) > c && (a + c) > b && (c + b) > a) {
    console.log('yes')
} else {
    console.log('no')
}


let a = +prompt('for: a') 
let b = +prompt('for: b') 
let c = +prompt('for: c') 
 
switch (true) {
    case ((a + b) > c && (a + c) > b && (c + b) > a) :
        console.log('yes')
        break
    default :
        console.log('no')
}
//--------------------------------------------------------------------------

// 3. Count numbers of digit 9 in a number.

let num = +prompt('')
if (num < 0) { 
     num = -(num) // ete tivy bacasakan e, drakan e sarqum
}
let nine = 0
let count =0
while (num != 0) {
    nine = num % 10 //tvi verjin tvanshann e vercnum
    if (nine === 9) {
        count = count + nine
        }
     num = Math.floor(num / 10)//  hertakan tivy poqracnum e 10 miavorov ev kloracnum
    }
console.log(count / 9)

//or

let num = +prompt('')
let nine = 0
let count =0
while (num != 0) {
    nine = num % 10 //tvi verjin tvanshann e vercnum
    if (nine === 9 || nine === -9) {
        count = count + nine
        }
     num = Math.ceil(num / 10)//  hertakan tivy poqracnum e 10 miavorov ev kloracnum
    }
console.log(Math.abs(count / 9)) // bacasakan tivy moduli(||) mijov enq anckacnum

//--------------------------------------------------------------------------------------
// 4 Given a positive number. Print it in reverse order.
let num = +prompt('')
let count = 0 
while (num != 0) {
    count = count + String((num % 10))
    num = Math.floor(num / 10)
}
console.log(Number(count))

// or
let num = +prompt('')
let count = 0 
for (num; num != 0; num / 10) {
    count = count + String((num % 10))
    num = Math.floor(num / 10)
}
console.log(Number(count))

//-----------------------------------------------------------------------------------------
// 5. Given a number as input, check, is it power of 2.

let num = +prompt('');
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
console.log(count)

                               // or

let num = +prompt('');
debugger
let count = 0                           // ashxatox e: (optimal kod e? )
for (num; num >= 1; num /=  2) {
   (num == 1) ? count = true :  count =false;   
}
console.log(count)

//----------------------------
let num = +prompt('');
let count = 0
for (num; num >= 1; num /=  2) {
   if (num === 1) {                        // ashxatox e: (optimal kod e?)
       count = true
   } else if (num < 1) {
       count = false
   }
}
console.log(Boolean(count))


