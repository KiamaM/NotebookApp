//Get the HTML elements

let formData = document.querySelector('#newNote') as HTMLFormElement

let title = document.querySelector('#title') as HTMLInputElement

let desc = document.querySelector('#textArea') as HTMLTextAreaElement

let allNotes = document.querySelector('.allNotes') as HTMLDivElement

interface notes{
    title:string
    description:string
}

let noteArr:notes[] = []


formData.addEventListener('submit', (e)=>{
    e.preventDefault()

    

    class newNotes implements notes{
        title = title.value
        description = desc.value

        displayNote(){
            let note = {
                title:title.value,
                description:desc.value
            }

            noteArr.push(note)

            localStorage.setItem('notes', JSON.stringify(noteArr))

            let getNote = JSON.parse(localStorage.getItem('notes') || '{}') 
            
            getNote.forEach((note:any) => {
                    
                let noteTitle = document.createElement('h3') as HTMLHeadingElement
                noteTitle.className = "noteTitle"
                noteTitle.textContent = note.title

                let noteDesc = document.createElement('div') as HTMLDivElement
                noteDesc.className = "noteDesc"
                noteDesc.textContent = note.description

                let updateBtn = document.createElement('button') as HTMLButtonElement
                let deleteBtn = document.createElement('button') as HTMLButtonElement
                let parentDiv = document.createElement('div') as HTMLDivElement
                parentDiv.className = "parentDiv"

                parentDiv.appendChild(noteTitle)
                parentDiv.appendChild(noteDesc)
                parentDiv.appendChild(updateBtn)
                parentDiv.appendChild(deleteBtn)
                allNotes.appendChild(parentDiv)
                
            });    

        }
    }
    let newNote = new newNotes
    newNote.displayNote()

})

