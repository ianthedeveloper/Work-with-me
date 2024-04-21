// NEW PROPERIES
//  1.Spreads in objects
//  2. 
//  


// 1. Spreads in Objects
const xchtrs = {
    xchtr1: "Tom",
    xchtr2: "Dicky",
    xchtr3: "Harry"
}

const {xchtr2,xchtr3, ...rest} = xchtrs;

function showEm (p1, p2, p3) {
    console.log(p1);
    console.log(p2);
    console.log(p3);
}

showEm(xchtr2, xchtr3, rest);









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





