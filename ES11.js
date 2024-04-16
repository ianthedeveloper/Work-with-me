// NEW FEATURE

const haha = new Promise((resolve, reject) => setTimeout(reject, 1000, "Rejected"));

const ahhh = new Promise((reject, resolve) => setTimeout(resolve, 3000, "Resolved"));

Promise.all([haha, ahhh])
        .then((date) => console.log(data))
        .catch((error) => console.log("Error!"))
        

Promise.allSettled([haha, ahhh])
        .then((data) => console.log(data))
        .catch((error) => console.log("Error!"))


// REVISION
const promise1 = new Promise ((resolve, reject) => 
        resolve("The Future is bright. Never doubt that! ")
); 

const promise2 = new Promise ((resolve, reject) =>{
        return setTimeout(() => resolve("Thank You God For The Day!"), 1000)
});

const promise3 = new Promise((resolve, reject) => 
        resolve("You gotta make this happen. You got no options left. Big Up G!")
);

Promise.all([promise1, promise2, promise3])
        .then((results) => console.log(results) )
        .catch((error) => console.log("Error", error))






// Promise.any()
const promise1 = new Promise ((resolve, reject) => 
        resolve("The Future is bright. Never doubt that! ")
); 

const promise2 = new Promise ((resolve, reject) =>{
        return setTimeout(() => resolve("Thank You God For The Day!"), 1000)
});

const promise3 = new Promise((resolve, reject) => 
        resolve("You gotta make this happen. You got no options left. Big Up G!")
);

Promise.any([promise1, promise2, promise3])
        .then((results) => console.log(results) )
        .catch((error) => console.log("Error", error)
