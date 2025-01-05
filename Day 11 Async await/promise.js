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

const promiseTwo = new Promise(function (resolve , reject ) {
    error = false;
    setTimeout(function(){
        if (!error){
            console.log("Another Async Task Completed")
            resolve({
                name : "Arham" , id : "123"
            })
        }else{
            reject("error")
        }

    } ,1000 )
}
)
const naming = promiseTwo.then((user)=>{
    console.log(user)
    console.log("resolved")
    return user.name ;
    
},function(error){
    console.log(error);

})
.then(
    function(name){
        console.log(name)
    }
)


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
