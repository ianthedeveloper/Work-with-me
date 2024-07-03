const dataType = (xchtr) => {
    let type;
    switch(xchtr){
        case 7:
        type = "Integer";
        break;
        case "D":
        type = "Character";
        break;
        case "BEAST":
        type = "String";
        break;
        default:
        type = "NOT VALID!";
        break;
    }
return type;
}