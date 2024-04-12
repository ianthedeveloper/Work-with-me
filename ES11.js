// NEW FEATURE

const haha = new Promise((resolve, reject) => setTimeout(reject, 1000, "Rejected"));

const ahhh = new Promise((reject, resolve) => setTimeout(resolve, 3000, "Resolved"));

Promise.all([haha, ahhh])
        .then((date) => console.log(data))
        .catch((error) => console.log("Error!"))
        

Promise.allSettled([haha, ahhh])
        .then((data) => console.log(data))
        .catch((error) => console.log("Error!"))