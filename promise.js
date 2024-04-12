const promise = new Promise ((resolve, reject) => {
    if(true){
        return resolve("It Worked!");
    }else{
        return reject("Error! Error! Error!");
    }
})

// 1
// promise.then((result) => result + "!")
//         .then((result2) => result2 + "?")
//         .then((result3) => console.log(result3))



// 2
    promise.then((result) => result + "!")
    .then((result2) => result2 + "?")
    .then((result3) =>{
        throw Error;
        console.log(result3)
    })
    .catch((error) => console.log("Error!"))
