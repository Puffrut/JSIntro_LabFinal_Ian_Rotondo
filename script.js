//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."

let jobTitle = `Astronaut`
let geoLocation = `Hercolubus`
let annualSalary = `1,000,000`
let companyName = `Rosen Ritter`

console.log(`You will be a ${jobTitle} in ${geoLocation}, making $${annualSalary} for ${companyName}.`)

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.

let currentYear = `3050`
let birthYear = `12`
let currentAge = currentYear - birthYear
console.log(`The current year is 3050. You were born in year 12. You are ${currentAge} years old.`)

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

let myAge = `96`
let maximumAge =`3080`
let dailyAmount = `52`
let totalEaten = (maximumAge - myAge) * dailyAmount

console.log(`You are 96 years old and you will need ${totalEaten} pickles to last you until the ripe old age of ${maximumAge}`)

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

let radius =`360`
let pie = `3.14`
let circumference = 2*(pie * radius)
let area = pie * radius * radius

console.log(`If the radius of a circle is 360 then the circumference is ${circumference} and the area would be ${area.toFixed(2)}.`)

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let celsius = `30`
let fahrenheit = (celsius * 9/5) + 32
let fTemp = `86`
let conversion = (fahrenheit - 32) * 5 / 9

console.log(`"${celsius}°C is ${fahrenheit}°F".`)
console.log(`"${fTemp} is ${conversion}°C."`)

// EXERCISE 6
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(num){
    return num **2
}

let theResult = squareNumber(34)
console.log (`The square of the number is: ${theResult}`)


// EXERCISE 7
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber(num){
    
    return num / 2

}

let finalSum = halfNumber(62)
let firstNum = finalSum * 2
console.log (`Half of ${firstNum} is ${finalSum}`)


// EXERCISE 8
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(firstNumber,secNumber){
    return firstNumber / secNumber *100
}
let firstNumber = 700
let secNumber = 900
let pOf = percentOf(firstNumber,secNumber)
console.log (`${firstNumber} is ${pOf.toFixed(2)}% of ${secNumber}`)

// EXERCISE 9
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle(radius){
    return Math.PI * radius ** 2
}


let circleRadius = 100
let circleArea = areaOfCircle(circleRadius)
let roundNum = circleArea.toFixed(2)
console.log (`The area for a circle with a radius of ${circleRadius} is ${roundNum}`)


// EXERCISE 10
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area is of the squared result (#3).

function multiFunc(num){
    

    
    let half = halfNumber(num)
    let squared = squareNumber(half)
    let area = areaOfCircle(squared)
    let perc = percentOf(squared, area)
    let finalResult = [half, squared, area, perc]
    return finalResult
}

let num = 100
let gotEm = multiFunc(num)
console.log (`half of ${num} is ${gotEm[0]}, ${gotEm[0]} squared equals ${gotEm[1]}. If ${gotEm[1]} were the radius of a circle then ${gotEm[2].toFixed(2)} is the area. The percentage of the area is ${gotEm[3].toFixed(2)}. `)

/* output to HTML */

/* Exercise 1 */
let future = document.querySelector(`#ex1`)
future.textContent = `You will be a ${jobTitle} in ${geoLocation}, making $${annualSalary} for ${companyName}.`

/*Exercise 2*/
let age = document.querySelector(`#ex2`)
age.textContent = `The current year is 3050. You were born in year 12. You are ${currentAge} years old.`

/*Exercise 3*/
let supply = document.querySelector(`#ex3`)
supply.textContent = `You are 96 years old and you will need ${totalEaten} pickles to last you until the ripe old age of ${maximumAge}`

/*Exercise 4*/
let circArea = document.querySelector(`#ex4`)
circArea.textContent = `If the radius of a circle is 360 then the circumference is ${circumference} and the area would be ${area.toFixed(2)}.`

/*Exercise 5 */
let tempConv = document.querySelector(`#ex5`)
tempConv.textContent = ` Converting celcius to fahrenheit:${celsius}°C is ${fahrenheit}°F. Converting fahrenheit to celcius:${fTemp} is ${conversion}°C."`

/*Exercise 6*/
let numSq = document.querySelector(`#ex6`)
numSq.textContent = `The square of the number 34 is: ${theResult}`

/*Exercise 7*/
let halfN = document.querySelector(`#ex7`)
halfN.textContent = `Half of ${firstNum} is ${finalSum}`

/*Exercise 8 */

let percentN = document.querySelector(`#ex8`)
percentN.textContent = `${firstNumber} is ${pOf.toFixed(2)}% of ${secNumber}`

/*Exercise 9 */

let circRad = document.querySelector(`#ex9`)
circRad.textContent = `The area for a circle with a radius of ${circleRadius} is ${roundNum}`

/*Exercise 10 */

let finalEx = document.querySelector(`#ex10`)
finalEx.textContent = `half of ${num} is ${gotEm[0]}, ${gotEm[0]} squared equals ${gotEm[1]}. If ${gotEm[1]} were the radius of a circle then ${gotEm[2].toFixed(2)} is the area. The percentage of the area is ${gotEm[3].toFixed(2)}. `