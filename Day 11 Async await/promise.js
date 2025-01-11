// const promiseOne = new Promise( function (resolve , failure){
//     //Async Task
//     console.log("Async task is comepleted");
//     resolve();
//     failure(); //It will not execute as resolve callback will be executed
// }

// )
// promiseOne.then( function(){
//     console.log("Promise is Consumed"); //resolve
// },function(){
//     console.log("Promise is not consumed"); //failure
// })

// const promiseTwo = new Promise(function (resolve , reject ) {
//     error = true;
//     setTimeout(function(){
//         if (!error){
//             console.log("Another Async Task Completed")
//             resolve({
//                 name : "Arham" , id : "123"
//             })
//         }else{
//             reject("error")
//         }

//     } ,1000 )
// }
// )
// const naming = promiseTwo
// .then((user)=>{
//     console.log(user)
//     console.log("resolved")
//     return user.name ;
    
// }

// // ,function(error){
// //     console.log(error);

// // }
// ).catch(
//     (error)=>{
//         console.log(error);
//     }
// )
// .then(
//     function(name){
//         console.log("name" , name)
//     }
// )
// const naming = promiseTwo.then((user)=>{
//     console.log(user)
//     console.log("resolved")
//     return user.name ;
    
// },function(error){
//     console.log(error);

// })
// const dataa = Object(naming) //Can't get like that 
// setInterval( () => {

//     console.log(dataa.PromiseResult)
// }  ,1100

// )

const promiseThree = new Promise(( resolve , reject )=>{
    //Producing Code 
    console.log("promise-three");
    setTimeout (()=>{
        let error = true ; 
        if (!error){
            console.log("promiseThree:if") ;
            resolve({name:"Moyo",password:"123"}) ;
        }  
        else{
            console.log("promiseThree:else") ;
            reject("Error: Something went wrong") ;
        }
    },2000) ;
})
async function  consumingPromiseThree(){ //Async makes a function  return a promise . It works like .then() method!
    //Consuming code (Here we wait for a promise and execute our code after sometime)
    console.log("async function");
    try {
        console.log("consuming promise") ; 
        //Await can only be used in async functions 
        const response = await promiseThree ; //Await waits for a promise to complete.It pause the execution and waits for the promise
        console.log(response ,"exe")
        return response
        
    } catch (error) {
        console.log("in catch ", error)
    }
}
const namee = consumingPromiseThree()
setTimeout(
    ()=>{
        console.log(namee)
        //Will console promise object
    },3000
)

async function myFunction (){
    console.log("myFunction")
    return "Hello";
}
//It is same as 
function asyync(){
    return Promise.resolve("Hell")
}
myFunction()
.then(
    (msg)=>{
        console.log(msg)
    }
)
asyync().then(
    (msg)=>{
        console.log(msg)
    }
)
//Fetch 
async function promiseFour (){
    try{
        console.log("promiseFour");
        //It's like a promise
        const result = await fetch("https://dummyjson.com/test");
        //It's like a promise
        console.log(await result.json() , "promise-four"); //These conversions take time though , have to use await for pausing execution
    }catch(error){
        console.log(error);
    }
}
promiseFour();
//Another way to fetch data
fetch("https://dummyjson.com/test")
.then( (response) => {  //Each .then waits for the promise to complete in the chain
    console.log("fetch-0")
    return response.text();
})
.then( (response)=>{
    console.log("fetch-1");
    console.log(response);
})   
.catch( (error) => {
    console.log("fetch-2");
    console.log("E: ",error);
}) 