//Activity 1 Array Creation and Access
//Task 1 : Create and array of numbers from 1 to 5 and log the result to the console
const arr = [1,2,3,4,5] ;
// console.log(arr);
//Task 2 :Access the first and last element of the array and log the result to the console
// console.log(arr[0],arr[arr.length - 1]);
//Activity 2 Array Methods(Basic)
//Task 3 : Use push method to add a new number to the end of the array and log the updated array 
// console.log(arr.push(6)); It returning the added element
// console.log(arr);
//Task 4 : Use pop method to remove the last element from the array and log the updated array 
// console.log(arr.pop()); // returning the deleted element
// console.log(arr)
// Task 5 : Use the shift method to remove the first element from the array and log the updated array .
// console.log(arr.shift()); //Returns the first element it removed
// console.log(arr);
// Task 6 : Use the unshift method to add a new number to the beginning of the array and log the updated array.
// console.log(arr.unshift(10,11,12,13)); // Returns the length of updated array
// console.log(arr);
// Array Methods ( Intermediate )
// Task 7 : Use the map method to create a new array where each number is doubled and log the new array
// console.log( arr.map( value => value*2 ));
// console.log( arr.map( function ( value){
//     return value*2 ;
// } ));
// Task 8 : Use the filter method to create the new array with only even numbers and log the new array
// function evenOrOdd(num){
//     let res =  (num % 2 == 0) ; 
//     console.log(res);
//     return res;
// }
// console.log(arr.filter(evenOrOdd));
//Task 9 : Use the reduce method to calculate the sum of all the numbers in the array and log the result to the console
let newFunction = ( total , num ) => total + num ;
console.log(arr.reduce(newFunction));
//Activity 4 Array Iteration 
// Task 10 : Use for loop to iterate over an array and log each element to the console
// for ( let i = 0 ; i < arr.length ; i++ ){
//     console.log(arr[i]);
// }
//Task 11 : Use for each method to iterate over the array and log the result to the console
let iter = arr.forEach(function (num)
{
    console.log(num);
})
// console.log(iter); //Return undefined