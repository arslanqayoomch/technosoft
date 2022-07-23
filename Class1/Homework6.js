/**
 * Q1:
 * Create a function to convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */
function toTitleCase(sent1){
    let senArr = sent1.toLowerCase().split(' ');
    let sen1TitleCase = ' ';
    
    for (let index = 0; index <= senArr.length - 1; index++) {
     let titleCase = senArr[index].charAt(0).toUpperCase() + senArr[index].slice(1);
      sen1TitleCase = sen1TitleCase.concat(titleCase + " ");
       
    }
    return sen1TitleCase
}

let exSen = 'i will now title CaSe ThiS sentence using Function';
console.log(toTitleCase(exSen));


//q2 creat a function to reverse a string word for word

function reverseString(str){
strArr = str.split(' ');
let strReverse = ' ';
for(let i = strArr.length-1; i >= 0; i--){
strReverse = strReverse + ' ' + strArr[i]
}
return strReverse;
}

let exStr = 'I will reverse this string word for word';
console.log(reverseString(exStr));





/**
 * Q3:
 * Create a function to find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */

function findTotal(numArr){
    let numtotal = 0;
    
    for (let index = 0; index < numArr.length; index++) {
      numTotal = numtotal += numArr[index]; 
       
    }
     return numTotal;
    }

    let exArr = [1, 4, 5, 10]
    console.log(findTotal(exArr));

/**
 * Q4:
 * Create a function to find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */

function numberAverage(numbersarr2){
    let sumOfVar2 = 0;
    for (let i=0 ; i <= numbersarr2.length-1 ; i++){
        sumOfVar2 = numbersarr2[i]  + sumOfVar2;
       
    }
    return (sumOfVar2/numbersarr2.length);
}

let exNumArr = [1,2,3,4,5,6,7,9];
console.log(numberAverage(exNumArr));