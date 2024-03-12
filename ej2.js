/*Exercise #2 (sugerencia map() )
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]*/

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = [];


function doubled(arr){
 let doubledNumbers = [];
 for (let i = 0; i < arr.length; i ++){
  let dub = arr[i];
   let dubb = dub*2;
   doubledNumbers.push(dubb);
 }
 return doubledNumbers;

}

let collectionNumbers = {
  orginialNumbers: numbers,
  doubledNumbers: doubled(numbers)
};

console.log(collectionNumbers);
