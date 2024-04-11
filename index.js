const promise = new Promise ((resolved, rejected) => {
    if(true){
        return resolved("It Worked!");
    }else{
        return rejected("Error! Error! Error!");
    }
})

// promise.then((result) => result + "!")
//         .then((result2) => result2 + "?")
//         .then((result3) => console.log(result3))


        promise.then((result) => result + "!")
        .then((result2) => result2 + "?")
        .then((result3) =>{
            throw Error;
            console.log(result3)
        })
        .catch((error) => console.log("Error!"))
