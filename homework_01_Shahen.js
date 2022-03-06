
// 1) Declare 2 variables a and b, such that a &gt; b, and define values for them. Output their
a. sum
b. difference (between a and b)
c. product
d. quotient (between a and b)
e. remainder (between a and b)*/

//-------------------------------------------------
// a.
let a = 14;
let b = 5;
console.log(a + b);

let a = 99;
let b = 11;
console.log(a + b);

let a = 81;
let b = 16;
console.log(a + b);

//---------------------------------------------------
// b.
let a = 14;
let b =  5;
console.log(a - b);

let a = 99;
let b =  11;
console.log(a - b);

let a = 81;
let b =  16;
console.log(a - b);

//------------------------------------------------
// c.
let a = 14;
let b =  5;
console.log(a * b);

let a = 99;
let b =  11;
console.log(a * b);

let a = 81;
let b =  16;
console.log(a * b);

//------------------------------------------------
// d.
let a = 14;
let b =  5;
console.log(a / b);

let a = 99;
let b =  11;
console.log(a / b);

let a = 81;
let b =  16;
console.log(a / b);

//------------------------------------------------
// e.
let a = 14;
let b = 5;
console.log(a % b);

let a = 99;
let b =  11;
console.log(a % b);

let a = 81;
let b =  16;
console.log(a % b);




//-----------------------------------=-------------------------
//2. Print your name and age in the following format: “My name is ____, I am ____ .”
let userName = prompt('What is your name?')
let userAge = prompt('How old are you?')
alert(`My name is  ` + (userName) + `, I am ` + (userAge) + `.`)





//-----------------------------------=-------------------------
//3. Declare a variable with defined value. Print yes if last digit is ‘odd’, otherwise print ‘no’.

                    let number = prompt(' Please write a number!');            
                    switch(true){
                        case (number == 0) :
                            console.log('ZERO is not a "odd" or "even" number')
                            break
                        case ((number % 2) == 0 ) :
                            console.log('no')
                            break
                        case ((number % 2) != 0 ) :
                            console.log('yes')
                            break                   
                    } 
/* general */

                    let number = prompt(' Please write a number!');
                    if (number == 0){
                        console.log('ZERO is not a "odd" or "even" number')
                    } else if  ((number % 2) == 0 ) {
                        console.log('no')
                    } else if ((number % 2) != 0 ){
                        console.log('yes')
                    }


let number = 78756              
switch(true){
     case (78756 == 0) :
        console.log('ZERO is not a "odd" or "even" number')
        break
    case ((78756 % 2) == 0 ) :
        console.log('no')
        break
    case ((78756 % 2) != 0 ) :
        console.log('yes')
        break
   
}  

let number = -122              
switch(true){
     case (-122 == 0) :
        console.log('ZERO is not a "odd" or "even" number')
        break
    case ((-122 % 2) == 0 ) :
        console.log('no')
        break
    case ((-122 % 2) != 0 ) :
        console.log('yes')
        break
   
}  
let number = 89              
switch(true){
     case (89 == 0) :
        console.log('ZERO is not a "odd" or "even" number')
        break
    case ((89 % 2) == 0 ) :
        console.log('no')
        break
    case ((89 % 2) != 0 ) :
        console.log('yes')
        break
   
} 
 let number = 1             
switch(true){
     case (1 == 0) :
        console.log('ZERO is not a "odd" or "even" number')
        break
    case ((1 % 2) == 0 ) :
        console.log('no')
        break
    case ((1 % 2) != 0 ) :
        console.log('yes')
        break
   
}  

//----------------------------------------------------------------------------------------------
// 4. Check whether a given number is negative. Print “yes”, if it is negative, print “no” otherwise.

                            let number = prompt('enter some number')
                            if (number < 0){
                                console.log('yes')
                            } else{
                                console.log('no')
                            }

/*general*/               // or

                            let number =prompt('enter some number')
                            switch(number < 0){
                                case (true) :
                                    console.log('yes')
                                    break
                                case (false) :
                                    console.log('no')
                            }
let number = 0
if (number < 0){
 console.log('yes')
} else{
 console.log('no')
 }    

 let number = -71
if (number < 0){
 console.log('yes')
} else{
 console.log('no')
 }                    

 let number = 89
if (number < 0){
 console.log('yes')
} else{
 console.log('no')
 }   

 //----------------------------------------------------------------
 // 5. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

                            let a = prompt('enter some number') 
                            let b = prompt('enter some number')
                            if (((a / b) % 1 == 0) || ((b / a) % 1 == 0)) {
                                console.log('1')
                            } else if (((a / b) % 1 != 0) || ((b / a) % 1 != 0)) {
                                console.log('0')
                            }

    //general                or

                            let a = prompt('enter some number')
                            let b = prompt ('enter some number')
                            switch (((a / b) % 1 == 0 ) ||  ((b / a) % 1 == 0 )) {
                                case (true) :
                                    alert(1)
                                    break
                                case (false) :
                                    alert(0)
                                    break
                            }


                                let a = 3 
                                let b = 14
                                if (((3 / 14) % 1 == 0) || ((14 / 3) % 1 == 0)) {
                                    console.log('1')
                                } else if (((3 / 14) % 1 != 0) || ((14 / 3) % 1 != 0)) {
                                    console.log('0')
                                }
 

                                let a = 18
                                let b = 2
                                if (((18 / 2) % 1 == 0) || ((2 / 18) % 1 == 0)) {
                                    console.log('1')
                                } else if (((18 / 2) % 1 != 0) || ((2 / 18) % 1 != 0)) {
                                    console.log('0')
                                }

                                
                                let a = 7
                                let b = 21
                                if (((7 / 21) % 1 == 0) || ((21 / 7) % 1 == 0)) {
                                    console.log('1')
                                } else if (((7 / 21) % 1 != 0) || ((21 / 7) % 1 != 0)) {
                                    console.log('0')
                                }

//--------------------------------------------------------------------------------------------
// 6. Given any number between 1 and 12. Print the name of the respective month.
 
switch (+prompt('Please enter any number between 1 and 12')) {
    case (1) :
        console.log('January')
        break
    case (2) :
        console.log('February')
        break
    case (3) :
        console.log('March')
        break
    case (4) :
        console.log('April')
        break
    case (5) :
        console.log('May')
        break
    case (6) :
        console.log('June')
        break
    case (7) :
        console.log('July')
        break
    case (8) :
        console.log('August')
        break
    case (9) :
        console.log('September')
        break
    case (10) :
        console.log('October')
        break
    case (11) :
        console.log('November')
        break
    case (12) :
        console.log('December')
    default :
            console.log('You wrote a word or wrong number')
                     
}

// Or

let someMonth = prompt('Please enter any number between 1 and 12')
if (someMonth == 1) {
    console.log('January')
} else if (someMonth == 2) {
     console.log('February')
} else if (someMonth == 3) {
     console.log('March')
} else if (someMonth == 4) {
     console.log('April')
} else if (someMonth == 5 ) {
    console.log('May')
} else if (someMonth == 6) {
    console.log('June')
} else if (someMonth == 7) {
    console.log('July')
} else if (someMonth == 8) {
    console.log('August')
} else if (someMonth == 9) {
    console.log('September')
} else if (someMonth == 10) {
    console.log('October')
} else if (someMonth == 11) {
    console.log('November')
} else if (someMonth == 12) {
    console.log('December')
} else {
    alert('You wrote a word or wrong number')
}
//------------------------------------------------------------------------------
// 7. Given three numbers. Find the maximum one.

let a = prompt('number for: a')
let b = prompt('number for: b')
let c = prompt('number for: c')
switch (true) {
    case (a >= b && a >= c) :
        console.log(a + 'is maximum')
        break
    case (b >= a && b >= c) :
        console.log(b + 'is maximum')
        break
    case (c >= a && c >= b) :
        console.log(c + 'is maximum')
        break
    default : 
        console.log('there is something wrong')
}

// Or

let a = +prompt('number for: a')
let b = +prompt('number for: b')
let c = +prompt('number for: c')
if (a >= b && a >= c) {
    console.log(a + 'is maximum')
} else if (b >= a && b >= c) {
     console.log(b + 'is maximum')
} else if (c >= a && c >= b) {
     console.log(c + 'is maximum')
} else {
    console.log('there is something wrong')
}


//for example
let a = 14
let b = 8
let c = 14
if (a >= b && a >= c) {
    console.log(a + 'is maximum')
} else if (b >= a && b >= c) {
     console.log(b + 'is maximum')
} else if (c >= a && c >= b) {
     console.log(c + 'is maximum')
} else {
    console.log('there is something wrong')
}

let a = 1020
let b = 500
let c = -450
if (a >= b && a >= c) {
    console.log(a + 'is maximum')
} else if (b >= a && b >= c) {
     console.log(b + 'is maximum')
} else if (c >= a && c >= b) {
     console.log(c + 'is maximum')
} else {
    console.log('there is something wrong')
}

let a = -4
let b = 6
let c = 0
if (a >= b && a >= c) {
    console.log(a + 'is maximum')
} else if (b >= a && b >= c) {
     console.log(b + 'is maximum')
} else if (c >= a && c >= b) {
     console.log(c + 'is maximum')
} else {
    console.log('there is something wrong')
}
