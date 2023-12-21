let api_url ='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
const button = document.querySelector('button');

const container = document.querySelector('.container');
const img = document.querySelector('img');




button.addEventListener('click',function(e){
    const input = document.querySelector('#input');

    if (input.value ===''){
        alert("Enter some text or url");
    }
    else{
        fetch(api_url+input.value)
        .then(function(response){
            img.setAttribute('src',response.url);
            img.style.padding = '7px';
            img.style.backgroundColor = 'white';
        })
    }
},false)