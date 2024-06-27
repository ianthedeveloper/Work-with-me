const dataType = (xchtr) => {
    let type;
    switch(xchtr){
        case 9:
        type = "Integer";
        break;
        case "X":
        type = "Character";
        break;
        case "Greatness":
        type = "String";
        break;
        default:
        type = "INVALID XCHTR";
        break;
    }
return type;
}