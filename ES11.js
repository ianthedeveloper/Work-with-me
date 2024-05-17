// NEW FEATURE

const haha = new Promise((resolve, reject) => setTimeout(reject, 3000, "Rejected"));

const ahhh = new Promise((reject, resolve) => setTimeout(resolve, 6000, "Resolved"));

Promise.all([haha, ahhh])
        .then((date) => console.log(data))
        .catch((error) => console.log("Oops! There was an error"))
        

Promise.allSettled([haha, ahhh])
        .then((data) => console.log(data))
        .catch((error) => console.log("Error! Error! Error!"))


// REVISION
const promise1 = new Promise ((resolve, reject) => 
        resolve("I made a plan & I'm followng it through. Take a sit, relax & watch me do it!")
); 

const promise2 = new Promise ((resolve, reject) =>{
        return setTimeout(() => resolve("Thank you Creator for the gift of life"), 3000)
});

const promise3 = new Promise((resolve, reject) => 
        resolve("I'm making it happen. Watch me do it. On God!")
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
