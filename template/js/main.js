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

// let arr = [7, 5, 98]

// console.log(arr.slice(2, 4, 7,9))
// console.log(arr.slice(-4, -1))
// arr.map((a) => a %7 === 0)

// console.log(arr)

// function rockPaperS(){
//     let random = Math.random()
//     if( random < .33){
//         return('scissors')
//     } else if ( random < .66){
//         return('rock')
//     } else{
//         return('paper')
//     }
   

// }

// function checkWinner(choice){
//     let botChoice = rockPaperS()
//      if ( (choice === 'scissors' && botChoice === 'paper') || (choice === 'rock' && botChoice === 'scissors') || (choice === 'paper' && botChoice === 'rock')){
//          console.log('vous gangez')
//      } else if(choice === botChoice){
//          console.log('personne ne gangne')
//      } else {
//          console.log('tu as perdu')
//      }
// }
// checkWinner('rock')
busStops = [ [7,3], [10,8], [9,0]]


// var number = function(busStops){
//     // Good Luck!
//       let x = 0;
//        busStops.forEach(a => x = x + a[0] - a[1]);
     
    
//       return x;
     
      
//   }
// console.log(number(busStops))
//   var number = function(busStops){
//     var totalPeople = 0;
//     for (var i=0; i<busStops.length; i++) {
//       totalPeople += busStops[i][0];
//       totalPeople -= busStops[i][1];
//     }
//     return totalPeople;
//   }

//   console.log(number(busStops))
// //   const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

// function sumDigits(number) {
//   const absoluteNum = Math.abs(number);
//   const digitsArr = absoluteNum.toString().split(‘’);
//   let sum = 0;

//   digitsArr.map(num => {
//     sum += parseInt(num)
//   })
	
//   return sum;
// }

// function sumDigits(number) {
//   var i = 0;
//   var sum = 0;
//   number = Math.abs(number)
//   while(number != 0)
//   {
//       sum += number % 10
//       number = Math.floor(number/10)
//   }
//   return sum
// }


// function sumDigits(number) {
//   // Turn number into absolute value -> Stringify number -> Split at each character
//   var values = String(Math.abs(number)).split("");
//   // Instantiate variable to hold math result
//   var product = null;
//   // For each value, add the value to the product
//   for (var i = 0; i < values.length; i++) {
//     product = product + Number(values[i]);
//   }
//   // Return the product variable
//   return product;
// }

// const MATCH = {
//   scissors: ['paper', 'lizard'],
//   paper: ['rock', 'spock'],
//   rock: ['lizard', 'scissors'],
//   lizard: ['spock', 'paper'],
//   spock: ['scissors', 'rock'],
// };


// function rpsls(pl1, pl2) {
//   return MATCH[pl1].indexOf(pl2) >= 0 ? 'Player 1 Won!' :
//          MATCH[pl2].indexOf(pl1) >= 0 ? 'Player 2 Won!' : 'Draw!';
// }

// function rpsls(p1,p2){
//   let wins = {
//     scissors:['paper','lizard'],
//     paper:['rock','spock'],
//     rock:['lizard','scissors'],
//     lizard:['spock','paper'],
//     spock:['scissors','rock']
//   }
  
//   let player1 = wins[p1].includes(p2)
//   let player2 = wins[p2].includes(p1)
  
//   if (!player1 && !player2) { return 'Draw!' } 
//   return `Player ${ player1?'1':'2'} Won!`
// }


// function rpsls(pl1,pl2){
//   const list = 'rock paper scissors spock lizard'.split(' ');
//   const offset = (list.indexOf(pl2) - list.indexOf(pl1) + 5) % 5;
//   return offset === 0 ? 'Draw!' : (offset % 2 === 0 ? 'Player 1 Won!' : 'Player 2 Won!')
// }

// function findNextSquare(sq){
//   return Math.sqrt(sq)%1===0 ? Math.pow(Math.sqrt(sq)+1,2) : -1
// }

function highLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  
}

function highLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}


// Description:
// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1
  let l1 = a1.map(str => str.length)
  let l2 = a2.map(str => str.length)
  return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
}

/*
function mxdiflg(a1, a2) {
  a1 = a1.sort(function(a,b){return a.length-b.length});
  a2 = a2.sort(function(a,b){return a.length-b.length});
  return a1.length * a2.length ? Math.max(
    Math.abs(a1[0].length - a2[a2.length-1].length),
    Math.abs(a2[0].length - a1[a1.length-1].length)
  ) : -1;
}
*/

function mxdiflg(a1, a2) {
  var max = -1;
  for(var A1 of a1)
    for(var A2 of a2)
      max = Math.max(max, Math.abs(A1.length - A2.length));
  return max;
}

function isSortedAndHow(array) {
  return array.every((x,i)=>i==0||array[i]>=array[i-1])?'yes, ascending':
         array.every((x,i)=>i==0||array[i]<=array[i-1])?'yes, descending':'no'
}