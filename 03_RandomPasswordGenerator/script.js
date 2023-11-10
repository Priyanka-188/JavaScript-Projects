const btn = document.querySelector("button");
const input = document.querySelector("#password");
const copyPassword = document.querySelector(".display img");

function passwordGenerator(){
    pass = "";
    length= 10;

    str = "abcdefijklmnopqrstuvwxyz";
    str+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    str+='0123456789';
    str+="~!@#$%^&*()_+-=/,.<>?|{}[]";
    

    for(let i=0; i<length;i++){
        index = Math.round(Math.random()*str.length);
        pass+=str[index];
    }
    input.value = pass;
    console.log(pass);
}

btn.addEventListener("click",(e)=>{
    passwordGenerator();
})


copyPassword.addEventListener("click",function(e){
    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input.value);

})