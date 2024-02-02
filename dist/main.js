"use strict";
//Get the HTML elements
let formData = document.querySelector('#newNote');
let title = document.querySelector('#title');
let desc = document.querySelector('#textArea');
let allNotes = document.querySelector('.allNotes');
let noteArr = [];
formData.addEventListener('submit', (e) => {
    e.preventDefault();
    class newNotes {
        constructor() {
            this.title = title.value;
            this.description = desc.value;
        }
        displayNote() {
            let note = {
                title: title.value,
                description: desc.value
            };
            noteArr.push(note);
            localStorage.setItem('notes', JSON.stringify(noteArr));
            let getNote = JSON.parse(localStorage.getItem('notes') || '{}');
            getNote.forEach((note) => {
                let noteTitle = document.createElement('h3');
                noteTitle.className = "noteTitle";
                noteTitle.textContent = note.title;
                let noteDesc = document.createElement('div');
                noteDesc.className = "noteDesc";
                noteDesc.textContent = note.description;
                let updateBtn = document.createElement('button');
                let deleteBtn = document.createElement('button');
                let parentDiv = document.createElement('div');
                parentDiv.className = "parentDiv";
                parentDiv.appendChild(noteTitle);
                parentDiv.appendChild(noteDesc);
                parentDiv.appendChild(updateBtn);
                parentDiv.appendChild(deleteBtn);
                allNotes.appendChild(parentDiv);
            });
        }
    }
    let newNote = new newNotes;
    newNote.displayNote();
});
