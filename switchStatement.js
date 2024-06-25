const dataType = (xchtr) => {
    let type;
    switch(xchtr){
        case 6:
        type = "Integer";
        break;
        case "K":
        type = "Character";
        break;
        case "Mindset":
        type = "String";
        break;
        default:
        type = "INVALID XCHTR";
        break;
    }
return type;
}