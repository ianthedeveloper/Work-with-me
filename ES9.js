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