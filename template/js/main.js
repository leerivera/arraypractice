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

// let values = [3, 11, 7,2, 9, 10]

// let sum = 0;

// for(let i =0; i < values.length; i++){
//     sum = sum + values[i]
// }

// console.log(sum)

// let values = [3, 11, 7,2, 9, 10]

// let max = Math.max(...values);

// console.log(max)

// document.querySelector('#submit').addEventListener('click', run)

// function run(word) {
//     word = document.querySelector("#word").value;
    
//     let nArray = []
//     nArray.push(word)
    
//     if(word !== "stop"){
//         word.value = "";
//         console.log(nArray)
//     }else{
//         console.log("we done son")
//     }
   
//     console.log(nArray)
// }

// let input = prompt("Tell me something");
// let word = input.split(" ")

// let wordArr = []

// wordArr.push(word);



// let names = ''
// let nArray = []
// while(names !== 'stop'){
//     names = prompt("tell me somthing");
//     nArray.push(names)
// }
// nArray.pop()
// console.log(nArray)

// slice 

let arr = [7, 5, 98, 33, 90, 50, 75, 100, 86]

console.log(arr.slice(2, 4, 7,9))
console.log(arr.slice(-4, -1))
