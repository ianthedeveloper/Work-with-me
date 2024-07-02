const dataType = (xchtr) => {
    let type;
    switch(xchtr){
        case 9:
        type = "Integer";
        break;
        case "B":
        type = "Character";
        break;
        case "Billiionaire":
        type = "String";
        break;
        default:
        type = "NOT VALID!";
        break;
    }
return type;
}