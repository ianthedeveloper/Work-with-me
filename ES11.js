// NEW FEATURE

const haha = new Promise((resolve, reject) => setTimeout(reject, 1000, "Rejected"));

const ahhh = new Promise((reject, resolve) => setTimeout(resolve, 3000, "Resolved"));

Promise.all([haha, ahhh])
        .then((date) => console.log(data))
        .catch((error) => console.log("Error!"))
        

Promise.allSettled([haha, ahhh])
        .then((data) => console.log(data))
        .catch((error) => console.log("Ooops! There was an error"))


// REVISION
const promise1 = new Promise ((resolve, reject) => 
        resolve("Have a dream, make a plan & follow it & trust the process. Period")
); 

const promise2 = new Promise ((resolve, reject) =>{
        return setTimeout(() => resolve("Thank You God For The Gift Of Good Health!"), 1000)
});

const promise3 = new Promise((resolve, reject) => 
        resolve("You gotta make this happen. You got no options left. Big Up G!")
);

Promise.all([promise1, promise2, promise3])
        .then((results) => console.log(results) )
        .catch((error) => console.log("Error", error))






// Promise.any()
//NB: Promise.any() resolves the whichever Promise that gets reolved first and throws an Error if none of the Promises are resolved

const promise1 = new Promise ((resolve, reject) =>
        resolve("Tom")
); 

const promise2 = new Promise ((resolve, reject) =>
        resolve("Dicky")
);

const promise3 = new Promise((resolve, reject) =>
        resolve("Harry")
);

Promise.any([promise1, promise2, promise3])
        .then((results) => console.log(results) )
        .catch((error) => console.log("Error", error))
