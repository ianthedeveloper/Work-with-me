// NEW PROPERIES
//  1.Spreads in objects
//  2. 
//  


// 1. Spreads in Objects
const xchtrs = {
    xchtr1: "Geogina Gathoi Mwaniki",
    xchtr2: "Ian Mungaii Mwaniki",
    xchtr3: "Morris Karumba Mwaniki"
}

const {xchtr2,xchtr3, ...rest} = xchtrs;

function showEm (p1, p2, p3) {
    console.log(p3);
    console.log(p2);
    console.log(p1);
}

showEm(xchtr2, xchtr3, rest);














