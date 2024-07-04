const dataType = (xchtr) => {
    let type;
    switch(xchtr){
        case 8:
        type = "Integer";
        break;
        case "D":
        type = "Character";
        break;
        case "GREATNESS":
        type = "String";
        break;
        default:
        type = "NOT VALID!";
        break;
    }
return type;
}