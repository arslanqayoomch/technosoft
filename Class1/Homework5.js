/**
 * Q1:
 * Convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */

let sent1 = 'yOU lIve onLy Once';
let senArr = sent1.toLowerCase().split(' ');
let sen1TitleCase = '';

for (let index = 0; index <= senArr.length - 1; index++) {
 let titleCase = senArr[index].charAt(0).toUpperCase() + senArr[index].slice(1);
  sen1TitleCase = sen1TitleCase.concat(titleCase + " ");
   
}

console.log(sen1TitleCase);


/**
 * Q2:
 * Reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */

let sen1 = 'coding is really fun';
let sen1Arr = sen1.split(' ');
let sen2 = '';


for(let index = sen1Arr.length - 1; index >= 0; index--) {
 sen2 = sen2 + ' ' + sen1Arr[index];

}

console.log(sen2);


/**
 * Q3:
 * Find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */

let numArr = [1,2,3,10];
let numtotal = 0;

for (let index = 0; index < numArr.length; index++) {
  numtotal = numtotal += numArr[index]; 
   
}

console.log(numtotal);

/**
 * Q4:
 * Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */

 let numbersarr2 = [1,2,3,4,5,6,7,9];
 let sumOfVar2 = 0;
 for (let i=0 ; i <= numbersarr2.length-1 ; i++){
     sumOfVar2 = numbersarr2[i]  + sumOfVar2;
     // console.log(sumOfVar )
 }
 console.log(sumOfVar2/numbersarr2.length);
