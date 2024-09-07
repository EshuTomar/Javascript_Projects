const addBtn = document.getElementById('addNote');
const main = document.querySelector(".main");

addBtn.addEventListener('click', ()=>{
    // alert("btn clicked")
    addnote('')
})

const savenote =() =>{
    const notes = document.querySelectorAll('.note textarea');
    const data =[];
    notes.forEach((note)=> data.push(note.value))
    // console.log(data);
    localStorage.setItem("notes", JSON.stringify(data))
}

const addnote = (text = '') => {
    
    const note= document.createElement('div');
    //  <div class="note">
    //      <div class="top">
    //          <i class="fas fa-save"></i>
    //          <i class="fas fa-trash"></i>
    //      </div>
    //      <textarea placeholder="write notes here"></textarea>
    //  </div>
    note.classList.add('note');
    note.innerHTML = `
    <div class="top">
        <i class="fas fa-save save"></i>
        <i class="fas fa-trash delete"></i>
     </div>
     <textarea placeholder="write notes here">${text}</textarea> ;
     `

    //lets make delete btn work
    note.querySelector('.delete').addEventListener('click',()=>{
        note.remove();
        savenote();
    })
    //save btn working
    note.querySelector(".save").addEventListener('click',()=>{
        savenote();
    })


    note.querySelector('textarea').addEventListener('focusout', ()=> addnote())
    
    
    main.appendChild(note);
    savenote();

    
    
}

//self calling function-->
    // which will run automatically on page load

(
    function(){
        const allNotes = JSON.parse(localStorage.getItem('notes')) || []; ;
        console.log(allNotes);
        allNotes.forEach((note)=>{
            addnote(note);
        })
        if(allNotes.length == 0){
            localStorage.removeItem('notes');
            addnote();
        }
        // else{
           
        // }
    }
)
();
 
