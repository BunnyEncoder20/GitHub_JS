// Logical Ops in JS
console.log("Logical Operators in JS")

let x = 7, y = 8, z = 9
let result = x < y
console.log("result = "+result)

// AND in JS : &&
// OR in JS : ||
// NOT in JS : !

result = x<y && y<z
console.log(result)
result = x<y && y>z
console.log(result)
result = x<y || y>z
console.log(result)
result = !(x<y && y>z)
console.log(result)

// Conditional Operations 
let num = 5 ;

if ( num%2 == 0)
    result = "Even"
else
    result = "Odd"

console.log(result)

// also can be done with ternary operator  :
result = num%2==0 ? "Even" : "Odd"
console.log(result)

let day = "Monday" ;

// Why break is important in switch statements : 
switch(day) {
    case "Monday"  : 
        console.log("It is a Monday") ;
    case "Tuesday"  : 
        console.log("It is a Tuesday") ;
    case "Wednesday"  : 
        console.log("It is a Wednesday") ;
    case "Thrusday"  : 
        console.log("It is a Thrusday") ;
    case "Friday"  : 
        console.log("It is a Friday") ;
    case "Saturday"  : 
        console.log("It is a Saturday") ;
    case "Sunday"  : 
        console.log("It is a Sunday") ;
}

console.log("\nCorrected switch result : ")
// Same thing with the breaks will work as intended :
switch(day) {
    case "Monday"  : 
        console.log("It is a Monday") ;
        break ;
    case "Tuesday"  : 
        console.log("It is a Tuesday") ;
        break ;
    case "Wednesday"  : 
        console.log("It is a Wednesday") ;
        break ;
    case "Thrusday"  : 
        console.log("It is a Thrusday") ;
        break ;
    case "Friday"  : 
        console.log("It is a Friday") ;
        break ;
    case "Saturday"  : 
        console.log("It is a Saturday") ;
        break ;
    case "Sunday"  : 
        console.log("It is a Sunday") ;
        break ;
    default : 
        console.log("That is not a day !")
}


console.log("\nExploting the switch statement")
// Remember in Swithc cases, if the break is not mentioned and if a case matches, then all the cases statements will be executed till a break is found 
// This makes it easier to combine cases which have a similar outcome : 
let who = "Mau Mau" ;

switch(who) {
    case "Bunny" : 
    case "Soma" : console.log("Has a bwest frwend")
        break;
    case "Tarun" : 
    case "Hoods" : 
    case "Bunnu" : 
    case "Devesh" : console.log("Delhi meh hain BC")
        break;
    case "Papa" : 
    case "Mau Mau" : console.log("Parents ji")
        break;
    default : console.log("Person not recognized !")
}