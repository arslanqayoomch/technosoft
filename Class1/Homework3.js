// Q1. Print the length of the country name(without using Str-length property)
let countryName = 'Switzerland';
let countryName_arr = countryName.split('');
let coutryNamelength = countryName_arr.length;
console.log(`The Legnth of the word Switzerland = ${coutryNamelength}`);

/**
 * Q2:
 * Count the number of words in the sentence
 */
const sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
let sentenceArr = sentence.split(' ');
let numOfWords = sentenceArr.length;
console.log(`The number of words include in sentence is ${numOfWords}`);

/**
 * Q3:
 * Convert any 4-word sentence into Titlecase
 * 
 */


 let fourWordSent = 'YOu lIVe ONlY ONcE';
 let fourWordToLowerCase = fourWordSent.toLowerCase();
 let fourWordArr = fourWordToLowerCase.split(' ');
 let fourWordTitleCase = fourWordArr[0].charAt(0).toUpperCase() + fourWordArr[0].slice(1);
 fourWordTitleCase = fourWordTitleCase +" "+ fourWordArr[1].charAt(0).toUpperCase() + fourWordArr[1].slice(1);
 fourWordTitleCase = fourWordTitleCase +" "+ fourWordArr[2].charAt(0).toUpperCase() + fourWordArr[2].slice(1);
 fourWordTitleCase = fourWordTitleCase +" "+ fourWordArr[2].charAt(0).toUpperCase() + fourWordArr[3].slice(1);
 console.log(fourWordTitleCase);


/**
 * Q4:
 * Create abbreviation for any 4-word sentence
 */

let fourWordSen2 = 'wOrK HarD pLaY HaRd';
let fourWordSen2_UpperCase = fourWordSen2.toUpperCase();
let fourWord_arr2 = fourWordSen2_UpperCase.split(' ');
let fourWordAbr = fourWord_arr2[0].charAt(0);
fourWordAbr = fourWordAbr + fourWord_arr2[1].charAt(0);
fourWordAbr = fourWordAbr + fourWord_arr2[2].charAt(0);
fourWordAbr = fourWordAbr + fourWord_arr2[3].charAt(0);
console.log(fourWordAbr);



