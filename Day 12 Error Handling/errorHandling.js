// // Activity 1 : Basic Error Handling with Try-Catch

// // Task 1 : Write a function that intentionally throws an error and use a try-catch block to handle the error and log an  appropriate message to the console.

// function myFunction ( arg ){
//     if ( arg > 0 ){
//         console.log("resolved")
//     }
//     else{
//         throw "error";
//     }    
// }
// try{
//     const result = myFunction(-3);
// }
// catch(error){
//     console.log(error)
// }

// // Task 2 : Create a function that divides two numbers and throws an error if the dinomenator is zero.Use a try-catch block to handle this error.
// const divide = ( numerator , dinomenator ) => {
//     if ( dinomenator === 0 ){
//         throw "E:Dinomenator is 0!";
//     }
//     else{
//         return numerator / dinomenator ;
//     }
// }
// try {
//     const quotient = divide( 10 , 0 );
//     console.log(quotient);
// } catch (error) {
//     console.log(error)   
// }

// // Activity 2 Finally block

// // Task 3 : Write a script that includes a try-catch block and a finally block.Log messages in the try,catch and finally blocks to observe the flow

// try{ //Try block is executed until error is encountered and then exception id thrown and control is transferred to catch block
//     const array = [1,2,3,4]
//     for ( let i = 0 ; i < array.length + 1 ; i++ ){
//         if(array.length === i ){
//             throw "err";
//         }
//         console.log(array[i]);
//     }
// }
// catch(error){
//     console.log(error);
// }
// finally{  //Finally block executes in either case
//     console.log("finally block")
// }

// Activity 3 : Custom Error Objects 

// Task 4 : Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try catch block
class CustomError extends Error {
    msg = "Error in custom error class" ;
    settingError = function ( string ) {
     this.msg = string ;
    return this.msg 
    }
}

const customErrorFunction = () => {
    throw new CustomError("Setting error");
}
try {
    customErrorFunction();
    // conso.g(result);
} catch (error) {
    console.log(error.msg);
}

// Task 5 : Write a function that validates user input (e.g checking if a string is non-empty) and throws a custom error if the validation fails.Handle the custom error using try-catch block.
const validator = ( ) => {
    const input = prompt("Enter string") ;
    // console.log(input.valueOf())
    if (input.valueOf() === ""){
        throw new CustomError( "Validation fails")
    }
}
try {
    validator()
} catch (error) {
    console.log(error.msg);
}