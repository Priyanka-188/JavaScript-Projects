const inputBox = document.querySelector("#input-box");
const btn = document.querySelector("button");
const listcontainer = document.querySelector("#list-container");

btn.addEventListener('click',(e)=>{

    if(inputBox.value===''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value ;
        listcontainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML =" &#x2715";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData()

},false)


listcontainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        
    }
    saveData()
},false)

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML)
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();