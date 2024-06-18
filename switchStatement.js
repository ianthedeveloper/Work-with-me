const dataType = (xchtr) => {
    let type;
    switch(xchtr){
        case 9:
        type = "Integer";
        break;
        case "G":
        type = "Character";
        break;
        case "Hahaha":
        type = "String";
        break;
        default:
        type = "INVALID XCHTR";
        break;
    }
return type;
}