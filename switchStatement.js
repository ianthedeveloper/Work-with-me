const dataType = (xchtr) => {
    let type;
    switch(xchtr){
        case 8:
        type = "Integer";
        break;
        case "O":
        type = "Character";
        break;
        case "WINNER!":
        type = "String";
        break;
        default:
        type = "NOT VALID!";
        break;
    }
return type;
}