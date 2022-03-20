//1. Given an array․ Compute the length of the array. (without using .length)
function arrayLength(arr = []) {
     
    arr.push('avelcuk') 
    let arrLengthCount = 0                        
    for (let i = 0; arr[i] !== 'avelcuk' ; i++) {  
        arrLengthCount += 1
    }
    console.log('arr legth is : ' + arrLengthCount)

}
/////////////////////////////////////////////////////////////////////

//2. Given an array of numbers. Print the sum of the elements in array.
function sumOfNumbers(array = []) {
    let sumOfArrayElements = 0
    for (let i = 0; i < array.length; i++ ) {
        sumOfArrayElements += array[i]
    }
    console.log(sumOfArrayElements)
}


////////////////////////////////////////////////////////////////
//3. Given two numbers. Print powers of 3 between that numbers. (without using Math.pow)
// pahanjy veradzevakerpac e:  havaqvac e array i mej

function  counterPowerOf3 (firstNum, secondNum) {
   
    let arrayOfPowerOf3 = []
    let count = 0 //  index number of arrayOfPowerOf3
    for ( firstNum; firstNum <= secondNum; firstNum++) {
        for (let i = firstNum; i >= 3; (i /= 3)) { 
            if (i === 3) {              
                arrayOfPowerOf3 [count] = firstNum
                count = count + 1 
                break
            } 
        }       
    }
   return arrayOfPowerOf3
}

///////////////////////////////////////////////////////////////////////////
//4.Given a number as input, insert dashes (-) between each two even numbers.

function dashesBetweenEvenNumber (num) {  
   
    let latestDigit = 0  // 'num' -i verjin tiv 
    let nextDigit = 0  //  'num' -i naxaverjin tiv 
    let stringSum = ''
    let finishedString = ''
    for (let i = num; i > 0; i = Math.floor(i / 10)) {
        if (i > 9) { // ete tivy der tasnavor e kam avel apa`
                latestDigit = i % 10
                nextDigit = ((i % 100 ) -( i % 10)) / 10 //  erknish tvi tasnavory: orinak` 34 = 3 
                if (latestDigit % 2 === 0 && nextDigit % 2 === 0) {
                    stringSum =  '-' + latestDigit
                    finishedString = stringSum + finishedString  //hertakanutyuny karevor e
                } else {
                    finishedString = '' + latestDigit + finishedString
                }
        } else { // ete tivy poqracel hasel e miavor makardaki apa`
            finishedString = '' + nextDigit + finishedString
        }  
    }
   return console.log(finishedString)
}


/////////////////////////////////////////////////////////////
//5.Insert a n positive number. Print the n-st prime number.
function n_PrimeNumber (n) {
    
    let primeNumber = 3 // sksum enq 3 tvic
    let primeArray = [2] //prime tvery havaqvum e array-i mej // 2-y arajin primn e, qani vor nerqevum  2 tvanshanic sksenq kxangari hashvarkin 

    let j = 2// sksum em 2 -ic qani vor arajin (n1) prime tivy ` 2-y arden  arrayum nerarel enq
    while (j <= n) { ///////////////////////////////shyotchik (n) tveri///////////////////////////
        for (let i = 2; i < primeNumber; i++) {
            if (primeNumber % i === 0) {
                primeNumber++
                i = 1      
             }
        }
        primeArray.push(primeNumber)
        primeNumber++
        j++
    }
    
    return primeArray[(primeArray.length -1)] // veradardznum e arrayi meji verjin indexi prime arjeqy
}