// Write a program that:

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// Shows each array element using a for loop.
// Adds the "D'Artagnan" value to the array.
// Shows each array element using the forEach() method.
// Remove poor Aramis.
// Shows each array element using a for-of loop.

// let musketeers = ["Athos", "Porthos", "Aramis"]
// musketeers.push("D'Artagnan");

// for(let i = 0; i < musketeers.length; i++){
 
    
//     console.log(musketeers[i])

  
// }

// musketeers.forEach(element => {
//     console.log(element)
    
// });

// musketeers.pop("Aramis")
// console.log(musketeers)

// for(const element of musketeers){
//     console.log(element)
// }

let values = [3, 11, 7,2, 9, 10]

let sum = 0;

for(let i =0; i < values.length; i++){
    sum = sum + values[i]
}

console.log(sum)