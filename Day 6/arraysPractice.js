const arr = [ 1 , 2 , 3 , 4 , 5 ]
console.log( arr.map(ans => Math.sqrt(ans)));//arr.map(ans => Math.sqrt(ans)): Uses an arrow function to apply Math.sqrt to each element.
console.log( arr.map(Math.sqrt));//arr.map(Math.sqrt): Passes the Math.sqrt function directly to map to apply it to each element.
// console.log( arr.map(Math.sqrt()));//arr.map(Math.sqrt()): Calls Math.sqrt() immediately, which is incorrect and results in an error.
// Using map to transform elements
let newArr = arr.map(function (val, index) {
    // Create an object with key as index and value as the square of the current element
    return { key: index, value: val * val };
});

// Display output
console.log(newArr); // Output: [ { key: 0, value: 4 }, { key: 1, value: 25 }, { key: 2, value: 36 }, { key: 3, value: 9 }, { key: 4, value: 64 }, { key: 5, value: 81 } ]

// Filter method
function canVote(age){
    let zx = ((age >= 18 ) ? "He can Vote":"He can't Vote!");
    if ( zx == "He can Vote") return 111;
    // return age >= 18 ;
}
const z = () => {let res = [18 , 11 , 19 , 10 ,23 , 8].filter(canVote)
    console.log(res);
 }
z();