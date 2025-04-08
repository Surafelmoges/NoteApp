const notesCont = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');

let notes = document.querySelectorAll('.input-box');

createBtn.addEventListener('click', () => {
    let newNote = document.createElement('p');
    let  img = document.createElement('img');
    newNote.className = 'input-box';
    newNote.setAttribute("contenteditable", "true");  // Fixed the typo here
    //newNote.innerHTML = 'Click here to edit...';  // Placeholder text
    img.src = 'images/delete.jpg';

    notesCont.appendChild(newNote).appendChild(img);
   // newNote.innerHTML = 'Click edit to here...';



})