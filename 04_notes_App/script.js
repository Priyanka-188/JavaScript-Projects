const btn = document.querySelector(".container button");
const noteContainer = document.querySelector('.noteContainer');

function updateStorage(){
    localStorage.setItem('notes',noteContainer.innerHTML);
}
function showNotes(){
    noteContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

btn.addEventListener("click",(e)=>{
    const para = document.createElement('p');
    para.setAttribute('contenteditable','true');
    para.setAttribute('class','input-box');
    para.innerHTML= '<img src="images/delete.png" >';
    noteContainer.appendChild(para);
})

noteContainer.addEventListener("click",(e)=>{
    if(e.target.tagName ==='IMG'){
        e.target.parentElement.remove();
        updateStorage()
    }
    else if(e.target.tagName==='P'){
        notes =  document.querySelectorAll('.input-box');
        notes.forEach(note => {
            note.onkeyup = function(){
                updateStorage();
            }
        });
    }
})