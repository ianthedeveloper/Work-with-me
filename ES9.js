// NEW PROPERIES
//  1.Spreads in objects
//  2. 
//  


// 1. Spreads in Objects
const xchtrs = {
    xchtr1: "Having The Power of a God",
    xchtr2: "Do",
    xchtr3: "Work G!"
}

const {xchtr2,xchtr3, ...rest} = xchtrs;

function showEm (p1, p2, p3) {
    console.log(p3);
    console.log(p2);
    console.log(p1);
}

showEm(xchtr2, xchtr3, rest);














