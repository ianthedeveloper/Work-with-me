// NEW PROPERIES
//  1.Spreads in objects
//  2. 
//  


// 1. Spreads in Objects
const xchtrs = {
    xchtr1: "Ford Raptor",
    xchtr2: "BMW M3",
    xchtr3: "Lamborgining Adventador"
}

const {xchtr2,xchtr3, ...rest} = xchtrs;

function showEm (p1, p2, p3) {
    console.log(p3);
    console.log(p2);
    console.log(p1);
}

showEm(xchtr2, xchtr3, rest);














