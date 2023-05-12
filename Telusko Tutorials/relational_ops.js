// Relation Operators 
console.log("Relational Operations")
console.log(5>6)
console.log(5<6)

let x = 10
let y = 20
let ans1 = x >= y
let ans2 = x <= y

console.log(ans1)
console.log(ans2)

console.log("\n\nComparing Strings")
let str1 = "Pen"
let str2 = "Book"
console.log("Pen > Book : " + (str1 > str2))


//  JS is a losely typed language as it allows the comparision of 2 values of different dattypes : 
x = 10
y = "10"
console.log( "x = = y : "+( x == y ) )     // this gives back true as the string get's converted into the number 
console.log( "x = = = y : "+( x === y ) )    // this gives false as the === checks for same datatype as well

// most of the other coding languages are 'tightly' typed and hence comparision of different datatypes are not allowed from the get go
// === can avoid confusing situations in JS , such as : 
x = ""
y = false
console
.log("With = = : " + (x==y))
console.log("With = = = : " + (x===y))