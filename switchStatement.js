const dataType = (xchtr) => {
    let type;
    switch(xchtr){
        case 6:
        type = "Integer";
        break;
        case "W":
        type = "Character";
        break;
        case "Winning":
        type = "String";
        break;
        default:
        type = "NOT VALID!";
        break;
    }
return type;
}