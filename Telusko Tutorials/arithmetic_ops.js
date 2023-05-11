let num1 = 4
let num2 = 2

console.log("\nBasic arthmetics")
console.log(num1+num2)
console.log(num1-num2)
console.log(num1/num2)
console.log(num1*num2)
console.log(num1%num2)

console.log("\nTrying to add 2 boolean trues")
num1 = num2 = true
console.log(num1+num2)      // not correct way to add booleans

console.log("\nQuick add and num from same number : ")
let num = 4
num += 2
console.log(num)
num-=2
console.log(num)

console.log("\nIncrement and Decrement")
console.log(++num)
console.log(--num)

console.log("Power ops")
num = 2
console.log(Math.pow(num,3)) // = num^3 
console.log(num**3) // same = num^3