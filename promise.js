const promise = new Promise ((resolve, reject) => {
    if(false){
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
    Promise.then((result) => result + "!")
    .then((result2) => result2 + "?")
    .then((result3) =>{
        throw Error;
        console.log(result3)
    })
    .catch((error) => console.log("Error!"))





    // Promise.all()
    // Ex.1
    const promise = new Promise ((resolve, reject) => {
        if(true){
            return resolve("It Worked!");
        }else{
            return reject("Error! Error! Error!");
        }
    })

    
    const promise2 = new Promise ((resolve, reject) => setTimeout(resolve, 100, "Tom"))

    
    const promise3 = new Promise ((resolve, reject) => setTimeout(resolve, 1000, "Dick"))


    const promise4 = new Promise ((resolve, reject) => setTimeout(resolve, 2000, "Harry"))

    Promise.all([promise, promise2, promise3, promise4])
            .then((results) => console.log(results))



// Ex.2
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
    "https://jsonplaceholder.typicode.com/todos"
]

Promise.all(urls.map((urls) => {return fetch(urls).then((response) => response.json())})).then((result) => {
    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);
    console.log(result[3]);
})
