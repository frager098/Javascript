function evenOrOdd(number)
{
    if ( number % 2 == 0 )
    {
        return(`${number} is even`);
    }
    else{
        return(`${number} is odd`);
    }
}
function squaringNumbers(number)
{
    return `Square of ${number} is ${number*number}`;
}
let number = + prompt ("Enter Number");
// let result = evenOrOdd(number);
// console.log(result);
let squareOfANumber = squaringNumbers(number);
console.log(squareOfANumber);