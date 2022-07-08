const sentence1 = 'Hello dear, how are you doing?';
let result1 = 0;
/**
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in result1
 * otherwise
 *      assign 25 in result1
 */
result1 = sentence1.length <= 10 ? 15 : 25;
console.log(`result1 -> ${result1}`);


const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/**
 * replace all instances of a/A with 'Alpha', print the result in console
 */

 let sen2_replace = sentence2.replace(/a/gi, 'Alpha');
 console.log(sen2_replace);

const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/**
 * print the result in console:
 * 1. the length of sentence-3
 * 2. does sentence-3 starts with 'health' (ignore cases)
 * 3. does sentence-3 contains with 'Body' (ignore cases)
 * 4. index of 'Body' in sentence3  (ignore cases)
 * 5. the last-character in sentence-3
 * 6. word 'Body' is present only once. (true or false)
 */
 
// Printing length of sentence3 below.
let sentence3_length = sentence3.length
console.log(`The length of sentence3 is ${sentence3_length}`);

// figuring out if sentence3 starts with 'health' below ignoring cases below.
let sen3tolowercase = sentence3.toLowerCase();
let sentence3_startsWith = sen3tolowercase.startsWith('health');
console.log(`does sentence 3 start with "health" ? --> ${sentence3_startsWith}`);

// figuring out if sentence 3 contains body ignoring cases below
let sen3_contain = sen3tolowercase;
let sentence3_contains = sen3tolowercase.includes('body');
console.log(`Does sentence3 contain the word body --> ${sentence3_contains}`);

//figuring out the index of 'Body' in sentence 3 ignoring cases below
let sentece3_bodyIndex = sen3tolowercase.indexOf('body');
console.log(`what is index of "Body in sentence3" --> ${sentece3_bodyIndex}`);

//the last character of sentence3 below
let sentence3_lastIndex = sentence3.length - 1;
let sentence3_lastchar = sentence3.charAt(sentence3_lastIndex);
console.log(`the last character of sentence 3 is ${sentence3_lastchar}`);

// verifying word Body is only present once
let sen3BodyOccurence = sen3tolowercase.includes('body') <= 1
console.log(`\nThe word Body occurs only once ? --> ${sen3BodyOccurence}`);