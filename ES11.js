// NEW FEATURE

const haha = new Promise((resolve, reject) => setTimeout(reject, 3000, "Rejected"));

const ahhh = new Promise((reject, resolve) => setTimeout(resolve, 4000, "Resolved"));

Promise.all([haha, ahhh])
        .then((date) => console.log(data))
        .catch((error) => console.log("Ooop! There was an error"))
        

Promise.allSettled([haha, ahhh])
        .then((data) => console.log(data))
        .catch((error) => console.log("Error! Error! Error!"))


// REVISION
const promise1 = new Promise ((resolve, reject) => 
        resolve("For now my full focus is on building a life for the next 10 yrs. A life that will serve me more than adequately for the rest of my life")
); 

const promise2 = new Promise ((resolve, reject) =>{
        return setTimeout(() => resolve("Thank you Creator for the lessons that I'm learning on my day to day life! On God!"), 3000)
});

const promise3 = new Promise((resolve, reject) => 
        resolve("Daily reminder: Forward is the only way, the only option in fact!")
);

Promise.all([promise1, promise2, promise3])
        .then((results) => console.log(results) )
        .catch((error) => console.log("Ooops! There was an error ", error))






// Promise.any()
//NB: Promise.any() resolves the whichever Promise that gets reolved first and throws an Error if none of the Promises are resolved

const promise1 = new Promise ((resolve, reject) =>
        resolve("Jeep Wrangler")
); 

const promise2 = new Promise ((resolve, reject) =>
        resolve("Rolls Royce Dawn")
);

const promise3 = new Promise((resolve, reject) =>
        resolve("McLaren Sena")
);

Promise.any([promise1, promise2, promise3])
        .then((results) => console.log(results) )
        .catch((error) => console.log("Ooops! There was an error!", error))
