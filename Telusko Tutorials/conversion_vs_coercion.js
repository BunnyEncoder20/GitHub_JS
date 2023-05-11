/* 
    Type Conversion VS Type Coersion
*/

// Type Coversion (Explicite)
console.log("\n Type Conversion : ")
let num = 6 
console.log(num, typeof num)    //saves the number 6 as a number datatype

let number = String(6)
console.log(number, typeof number)    // saves the numer as a string instead of a number datatype

console.log(Boolean(7))
console.log(Boolean(0))
console.log(Boolean(null))

// Type Coercion (Automatically Conversion)
console.log("\n Type Coercion : ")
let x
console.log(x, typeof x)
x = 8 
console.log(x, typeof x)
x = x + ""                          // when number is added (concatinated) with a string, it converts the string into a number
console.log(x, typeof x)
console.log(x+2, typeof x)

x = x - 2
console.log(x, typeof x)


// parseInt is a function which which converts Strings into number as long as it starts with numbers 
console.log("\n\nparseInt() : ")
let numString = "123 Bunny"
console.log(parseInt(numString))
numString = "Bunny 123"
console.log(parseInt(numString))