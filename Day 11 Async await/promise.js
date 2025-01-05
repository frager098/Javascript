const promiseOne = new Promise( function (resolve , failure){
    //Async Task
    console.log("Async task is comepleted");
    resolve();
    failure();
}

)
promiseOne.then( function(){
    console.log("Promise is Consumed");
},function(){
    console.log("Promise is not consumed");
})