let carrosel = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
nextImage();

}, 50000) //velocidade do Banner    

 function nextImage(){
carrosel++;

if(carrosel>3){
    carrosel =1;
}


document.getElementById("radio"+carrosel).checked = true;
}