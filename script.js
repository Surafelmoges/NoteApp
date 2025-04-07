const notesContainer = document.querySelector('.notes-container');
const createButton = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');


createButton.addEventListener("click", ()=> {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.setAttribute("placleholder", "Write your note here...");
    img.src = "images/delete.jpg";
    notesContainer.appendChild(inputBox).appendChild(img);
})