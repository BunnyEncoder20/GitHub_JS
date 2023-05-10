// For printing things on the terminal 
console.log("Hello World")
console.log(2+1)

// Variables 
console.log("\n\nVariables")
let num = 2+2       // let is like a declaration of a varible and the proper way to define a variable
console.log(num)
console.log(num+2)

// Strings 
let  username = "Bunny" 
let password  = 'Soma'
let sentence = "Varun's Bestfriend is Soma !"   // notice how when we have a single quote within the string, we use the double qoute to define that string 
let $valid_variable_name //using $ and _ are valid for variable names
let validVariableName  // using camel case to make the varibales names more readable 

console.log("username : " + username)
console.log("password : " + password)
console.log("sentence : " + sentence)

let user1  = "Soma"
let user2 = "Bunny"
console.log(user1+"+"+user2)  //string concatination 
console.log(user1+"\t"+user2)
console.log("Soma likes to call Varun \"Bunny\" ") //using escape characters


// Reusing a variable name 
//let username = "Varun" // notice that using let again makes it a decalration hence the error 
username = "Varun"
console.log("username : "+username)


// declaring constants : 
console.log("\nDeclaring const")
const pi = 3.14
let radius = 5
let area 

radius = 10
//pi = 2.14   //will  through an error as this constant value should not be changed

area = pi * radius * radius
console.log(area)



// Data types in JS
/*
    Data Types : Primitive or Objects 
    
    Primitive Datatypes : 
    1. Number 
    2. String 
    3. Boolean
    4. Null
    5. Undefined 
    6. Symbol
*/
console.log("\n\nData types in JS")
// typeof is an operator 
console.log(typeof username)
console.log(typeof(area))
console.log("\nNumber types : ")
// can also work with _ to get the number of zeros in a number 
console.log(1_00_000)
// can also work with infinity in JS
console.log(5/0)
// can print the max range of the number data type (or the maximum number it can hold before going infinity)
console.log(Number.MAX_VALUE)
// BigInt is a datatype which can store larger numbers (the number is postfixed with a 'n') eg : 
bigIntNumber = 109209240409802058n
// note we cannot add BigInt and Int together, both should be in the BigInt type (ending with a 'n')
addingBigInt = bigIntNumber + 2n
console.log(addingBigInt)


// Boolean Types 
console.log("\n\nBoolean data types : ")
let bool = 5<6
console.log(bool)