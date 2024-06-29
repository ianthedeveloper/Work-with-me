const dataType = (xchtr) => {
    let type;
    switch(xchtr){
        case 3:
        type = "Integer";
        break;
        case "W":
        type = "Character";
        break;
        case "BeYoU":
        type = "String";
        break;
        default:
        type = "NOT VALID!";
        break;
    }
return type;
}