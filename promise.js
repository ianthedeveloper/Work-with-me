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

Promise.all(urls.map((url) => fetch(url).then((response) => response.json()))).then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
    console.log(results[3]);
})
.catch((error) => console.log("Error fetching data"))






// 2. finally() function in promises
const smartWork = new Promise((resolve, reject) => setTimeout(resolve, 1000, "Will get you results"));

smartWork.then((result) => console.log(result))
         .catch((error) => console.log("Opps! There was an error"))
         .finally(() => console.log("That's tested"))






// fetch() Promise

const fetching = fetch("https://jsonplaceholder.typicode.com/users")

.then(response => response.json())
.then(results => console.log(results))
.catch(error => console.log('Error', error))









