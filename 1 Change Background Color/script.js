var changeColorBtn=document.getElementById('change-color-btn');


changeColorBtn.addEventListener('click',chnageBackgroundColor);

function getRandomValue(){
return Math.floor(Math.random()*256);
}

function chnageBackgroundColor(){


    var red= getRandomValue();
    var green= getRandomValue();
    var blue= getRandomValue();
 var color ='rgb('+red+','+green+','+blue+')';

 document.body.style.backgroundColor=color;

}