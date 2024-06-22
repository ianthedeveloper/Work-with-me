const dataType = (xchtr) => {
    let type;
    switch(xchtr){
        case 7:
        type = "Integer";
        break;
        case "M":
        type = "Character";
        break;
        case "Growth":
        type = "String";
        break;
        default:
        type = "INVALID XCHTR";
        break;
    }
return type;
}