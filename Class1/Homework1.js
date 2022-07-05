/**
 * Convert temperature values into different units
 * 
 * F -> C
 * F -> K
 * 
 * C -> F
 * C -> K
 * 
 * K -> F
 * K -> C
 */

// Coverting Fahrenheit to Celsius down here
 
 let fTemp1 = 90;
 let cTemp1 = (fTemp1 - 32) * 5/9;
 console.log(`\n${fTemp1}°F is equals to ${cTemp1}°C`);

// Converting Fahrenheit to Kelvin down here
  
 let kTemp = (fTemp1 + 459.67) * 5/9;
 console.log(`${fTemp1}°F is equal to ${kTemp}°K`)
 
 // Converting Celsius to Fahrenheit down here

 let cTemp2 = 25;
 let Ftemp2 = (cTemp2 * 1.8) + 32;
 console.log(`${cTemp2}°C is equal to ${Ftemp2}°F`);

 // Converting Celsius to Kelvin down here

 let Ktemp2 = cTemp2 + 273.15;
 console.log(`${cTemp2}°C is equal to ${Ktemp2}`);

 // Converting Kelvin to Fahrenheit down here

 let kTemp3 = 80;
 let Ftemp3 = (kTemp3 * 9/5) - 459.67
 console.log(`${kTemp3}°k is equal to ${Ftemp3}°F`);

 // Converting Kelvin to celsius down here
 let cTemp3 = kTemp3 - 273.15;
 console.log(`${kTemp3}°K is equal to ${cTemp3}`);
 



