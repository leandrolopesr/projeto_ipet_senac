let carrosel = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
nextImage();

}, 5000) //velocidade do Banner    

 function nextImage(){
carrosel++;

if(carrosel>4){
    carrosel =1;
}


document.getElementById("radio"+carrosel).checked = true;
}