// //Function Constructor
let functionConstructor = new Function ( "a","return 0");
functionConstructor(9);
// //Example
const myFunction = new Function("a", "b", "return a * b");
let x = myFunction(4, 3);
function evenOrOdd(number)
{
    // console.log(arguments.length)
    if ( number % 2 == 0 )
    {
        return(`${number} is even`);
    }
    else{
        return(`${number} is odd`);
    }
}
// console.log(evenOrOdd.toString());
// evenOrOdd();
//Arrow Functions
let arrowFunction = (a,b) =>{ 
    console.log(a,"hello",b);
    return a*b;
}
console.log(arrowFunction(3,4))
//Self Invoking Named Function Expression
// let concatenatedString = (function concatenatingStrings(string1, string2)//Named Function Expression
// {
//     console.log("d");
//     return string1+" "+string2;
// })("g","bhai");
// console.log(concatenatedString);
// // //Self Invoking Anonymous Function Expression
// (function()
// {
//     console.log("hi how are you?");
// })();
// //Function Declaration and Self Invocation
// (function selfInvo(str){
//     console.log(str);
// })("h");
// console.log(typeof(functionConstructor));