//Activity 1 Function Declaration
//Task 1 : Write function to check if a number is even or odd 
// let number = + prompt ("Enter Number");
// let result = evenOrOdd(number);
// console.log(result);
//Function Declarations are hoisted at the top og their scope so they can be caleed before they are initialized
// console.log(concatenatedString("hn","g"))
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
// //Task 2 : Write a function to find the square of a number
function squaringNumbers(number)
{
    return `Square of ${number} is ${number*number}`;
}
//Activity 2 Function Expression
// Task 3 : Write a function expression and find the maximum of two numbers andd log the result to the console
// Function Expressions are not hoisted So they cant be called before their initialization
const toFindMax = function(number1,number2) //It is Anonymous function expression as it does not have a name and assigned to a variable
{
    return number1 > number2 ? `${number1} is max`: `${number2} is maximum`;
};
//Rask 4 : write a function expression to concatenate two strings and return the result
let concatenatedString = function concatenatingStrings(string1, string2)//Named Function Expression
{
    return string1+" "+string2;
};

//Activity 3 Arrow Functions
//Task 5 : Write an arrow function to calculate sum of two numbers and return the result
const sumOfTwoNumbers = (n1,n2) => {
    return n1 + n2 ;
}
//Task 6 :Write an arrow function to check if the string contains the specific character and return the boolean Value
let flag = false ;
const charCheck = (str , toSearch) =>{
    for (let i = 0 ; i < str.length ; i++ )
    {
        // console.log(str.length);
        // console.log(str[i]);
        if (str[i] == toSearch) {
            flag = true ;
            return flag;
        }
    }
    if(flag == false ){
        return flag ;
    }
}
//Activity 4 Function Parameters and Default Values
//Task 7 : Write a function that takes 2 parameters and return their product .Provide a default value to second parameter.
function def(a,b=10)
{
    return a*b;
}
//Task 8 : Write a function that takes a person's name and age that returns a greeting message.Provide a default value for the age.
const greet = (function(name , age = 10){
    console.log (`Hello my name is ${name} and I am ${age} years old`);
})( "Arham");
// let squareOfANumber = squaringNumbers(number);
// console.log(squareOfANumber);
// let n1 , n2 ;
// n1 = + prompt("Enter 1st Number");
// n2 = + prompt("Enter 2nd Number");
// const maximum = toFindMax(n1,n2);
// console.log(maximum);
// let str1,str2;str1 = prompt ("Enter 1st String");str2=prompt("Enter 2nd String");
// let concatenation = concatenatedString(str1,str2);
// console.log(concatenation);
// console.log(sumOfTwoNumbers(3,2));
// let inputString = prompt("Enter a string");
// let toCheck = prompt("Enter a character you want to search");
// console.log(charCheck(inputString,toCheck));
// console.log(def(10))

