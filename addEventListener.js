let button = document.getElementsByTagName("button")[0];
let input = document.getElementsByClassName("textInput")[0];
let ol = document.querySelector("ol");

const inputLength = () => {
    return input.value.length;
}

let newListItem = () => {
    let newLi = document.createElement("li");
    newLi.appendChild(document.createTextNode(input.value));
    ol.appendChild(newLi);
    input.value = "";
}

const addListAfterClick = () => {
    if(inputLength() > 0){
        newListItem();
    }
}

const addListAfterKeypress = (event) => {
    if(inputLength() > 0 && event.which === 13){
        newListItem();
    }
}



button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeypress)



