// NEW FEATURE

const haha = new Promise((resolve, reject) => setTimeout(reject, 3000, "Rejected"));

const ahhh = new Promise((reject, resolve) => setTimeout(resolve, 6000, "Resolved"));

Promise.all([haha, ahhh])
        .then((date) => console.log(data))
        .catch((error) => console.log("Error! Error! Error! "))
        

Promise.allSettled([haha, ahhh])
        .then((data) => console.log(data))
        .catch((error) => console.log("Error! Error! Error!"))


// REVISION
const promise1 = new Promise ((resolve, reject) => 
        resolve("After thinking and being at it for quite some while, I just came to realize that I'll really start living my life at 31. The question now becomes, will I commit, or will I give up like a coward ? Food for thought")
); 

const promise2 = new Promise ((resolve, reject) =>{
        return setTimeout(() => resolve("Thank you creator for giving me something to do"), 3000)
});

const promise3 = new Promise((resolve, reject) => 
        resolve("Daily reminder: Respect is earned, not demanded")
);

Promise.all([promise1, promise2, promise3])
        .then((results) => console.log(results) )
        .catch((error) => console.log("Error!", error))






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
