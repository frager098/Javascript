//DAY 11 Promises and Async/Await
//Activity 1 : Understanding Promises

//Task 1 : Create a promise that resolves with a message after a 2-second timeout and log the message to the console
const promiseWithMsg = new Promise((resolve) => {
    //wait for 2 second
    setTimeout(() => {
        resolve("Promise with msg");
    }, 2000)
})
promiseWithMsg
    .then((msg) => {
        console.log(msg)
    })

//Task 2 : Create a promsie that rejects with an error message after a 2-second timeout and handle the error using .catch()
const promiseWithErrorMsg = new Promise((resolve, reject) => {
    //wait for 2 second
    setTimeout(() => {
        reject("Promise with Error msg");
    }, 2000)
})
promiseWithErrorMsg
    .then((msg) => {
        console.log(msg)
    })
    .catch((msg) => {
        console.log(msg);
    })

// Activity 2 : Chaining Promises
// Create a sequence of Promises that simulate fetching data from server.Chain the promises to log messages in a specific order.
// const chainingPromise = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()
//     const request = "https://api.github.com/users/frager098";
//     xhr.open("Get", request);
//     xhr.send() //No need for Timeout xhr object is bydefault asynchronous and handles the delayed reponse internally.
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 resolve(this.response);
//             }
//             else {
//                 reject(`Error: ${this.status} - ${this.statusText}`);
//             }
//         }
//     }
// })
// chainingPromise
//     .then((response) => {
//         console.log("fetched data successfully");
//         const result = JSON.parse(response)
//         return result;
//     })
//     .then((response) => {
//         console.log("Accessing properties from parsed data ", response.followers)
//     })
//     .catch((error) => {
//         console.log("An error occured", error)
//     })

// Activity 3 : Using Async Await
//Task 4 : Write an async function that waits for a promise to resolve and then logs the resolved value
async function asyncFunctionOne() {
    const asyncPromise = await new Promise((resolve) => {
        try {
            const xhr = new XMLHttpRequest();
            xhr.open("Get", "https://api.github.com/users/frager098");
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    resolve(xhr.response);
                }
            }
        }
        catch (error) {
            console.log("E :", error);
        }
    })

    return asyncPromise;
}
// asyncFunctionOne()
//     .then((res) => {
//         console.log("response", res)
//     })
//     .catch((err) => {
//         console.log("Something went wrong!", err)
//     })

//Task 5 : Write an async function that handles a rejected promise using try-catch and logs the error message
async function asyncFunctionTwo() {
    return await  new Promise((resolve, reject) => {
        try {
            const xhr = new XMLHttpRequest();
            xhr.open("Get", "https://api.github.com/users/frag===er098")
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        // resolve(xhr.response);
                        console.log("response asyncFunctionTwo",xhr.response);

                    }
                    else {
                        reject(`Error:${xhr.status}`);
                    }
                }
            }


        }
        catch (err) {
            console.log("catch", err);
        }

    })
}
// asyncFunctionTwo()
// .then((response)=>{
//     console.log("response asyncFunctionTwo",response);
// })
// .catch((error)=>{
//     console.log("Something went wrong!",error);
// })


//Activity 4 : Fetching Data from an API
//Task 6 : Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch("https://api.github.com/users/frager098")
.then((response)=>{
    console.log("fetch",response);
})
.catch((error)=>{
    console.log(error);
})

//Task 7 : Use the fetch API to get data from a public APi and log the response data to the console using async await.
async function asyncFunctionThree(){
    const res = await fetch("https://api.github.com/users/frager098");
    return res ;
}
asyncFunctionThree()
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error)
})