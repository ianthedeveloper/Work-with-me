// NEW FEATURE

const haha = new Promise((resolve, reject) => setTimeout(reject, 3000, "Reject"));

const ahhh = new Promise((reject, resolve) => setTimeout(resolve, 9000, "Resolve"));

Promise.all([haha, ahhh])
        .then((date) => console.log(data))
        .catch((error) => console.log("Error! Error! Error!"))
        

Promise.allSettled([haha, ahhh])
        .then((data) => console.log(data))
        .catch((error) => console.log("Error! Error! Error!"))


// REVISION
const promise1 = new Promise ((resolve, reject) => 
        resolve("For now my full focus is on building a life for the next 10 yrs. A life that will serve me more than adequately for the rest of my life")
); 

const promise2 = new Promise ((resolve, reject) =>{
        return setTimeout(() => resolve("Thank you Creator for gift of something to do. On God!"), 3000)
});

const promise3 = new Promise((resolve, reject) => 
        resolve("Daily reminder: Keep your head up in failure. Keep your head down in success. (Elon Musk's Mam)")
);

Promise.all([promise1, promise2, promise3])
        .then((results) => console.log(results) )
        .catch((error) => console.log("Error! Error! Error!", error))






// Promise.any()
//NB: Promise.any() resolves the whichever Promise that gets reolved first and throws an Error if none of the Promises are resolved

const promise1 = new Promise ((resolve, reject) =>
        resolve("Koenigsegg Agera R")
); 

const promise2 = new Promise ((resolve, reject) =>
        resolve("Rimac Nevera")
);

const promise3 = new Promise((resolve, reject) =>
        resolve("McLaren P1")
);

Promise.any([promise1, promise2, promise3])
        .then((results) => console.log(results) )
        .catch((error) => console.log("Ooops! There was an error!", error))
