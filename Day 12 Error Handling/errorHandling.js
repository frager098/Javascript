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

// Source : "https://javascript.info/custom-errors"
// The "pseudocode" for the built-in Error class defined by JavaScript itself

// class Error {
//     constructor(message) {
//       this.message = message;
//       this.name = "Error"; // (different names for different built-in error classes)
//       this.stack = <call stack>; //non-standard, but most environments support it
//     }
//   }


class CustomError extends Error {
    constructor(string) {
        super(string) // Calls constructor of parent class
        this.name = "Custom Error"; // Setting name property of the current object
    }

}

const customErrorFunction = () => {
    throw new CustomError("Setting error");
}
// try {
//     customErrorFunction();
// } catch (error) {
//     console.log(error.message);
// }

// Task 5 : Write a function that validates user input (e.g checking if a string is non-empty) and throws a custom error if the validation fails.Handle the custom error using try-catch block.
const validator = () => {
    const input = prompt("Enter string");
    // console.log(input.valueOf())
    if (input === "") {
        const myError = new CustomError("Validation fails")
        throw myError.name;
    }
}
// try {
//     validator()
// } catch (error) {
//     console.log(error);
// }

// Activity 4 : Error Handling in Promises 

// Task 6 : Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

const randomlyRejectingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("reject");
    }, 2000)
})
randomlyRejectingPromise
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.log(err)
    })

// Task 7 : Use a try-catch within an async function to handle errors from a promise that randomly resolves or rejects , and log the error message
const myPromise = () => {
    return new Promise( (resolve,reject) =>{
        const random = Math.random();
        console.log(random)
        if (random > 0.5) {
            resolve("resolved");
        }
        else {
            reject("Random Function rejected")
        }
    })
}
async function randomPromise() {
    try{
        const returnPromise = await myPromise(); // The await keyword acts as if it’s calling .then() internally on the promise to wait for its resolution.
        console.log(returnPromise);
    }
    catch(error){
        console.log(error);
    }
}
randomPromise();

// Activity 5 : Graceful Error Handling in Fetch

// Task 8 : Use the fetch API to request data from an invalid URL and handle the error using .catch().Log an appropriate error message to the console.

async function fetching ( ){
   const response =  await fetch("https://a.github.com/user/frager098")
   if(!response.ok){
    throw new CustomError("Error in fetching")
   }
   return response ;
}

// fetching()
// .then( (response) => {
//     console.log(response);
// })
// .catch((error)=>{
//     console.error(error.message)
// })

                    //*****Wrong implementation******

// async function fetching ( ){
//     return await fetch("https://a.github.com/user/frager098")
//  }
//  try{
//      const data = fetching(); // Execution will not wait here for asynchronous fetching 
//  }
//  catch(error){
//      console.log(error);
//  }
            //********************// 

// Task 9 : Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch.Log an appropriate error message to the console.

const handlingFetchResponse = async () => {
    try{
        const data = await fetching();
        console.log(data) ;
    }
    catch(error){
        console.log(error.message);
    }
}
handlingFetchResponse();