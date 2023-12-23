
var toggle = false;
playPause.addEventListener('click',function(e){
    if (toggle === true){
        document.getElementById('playPause').src = 'images/play.png'
    }else {
        document.getElementById('playPause').src = 'images/stop.png';
        
    }
    
    toggle = !toggle;
    
},false)