var i = [0]; 
var images = [];
var time = 3000;

 images[0] = './img/hotel-1.jpg';
 images[1] = './img/hotel-2.jpg';
 images[2] = './img/hotel-3.jpg';
 images[3] = './img/hotel-4.jpg';
 images[4] = './img/hotel-5.jpg';

function changeImg(){
    document.getElementById('slide').src = images[i]

    if( i < images.length - 1 ){
        i++
    } else {
        i = 0
    }

    setTimeout("changeImg()", time);
}
window.onload = changeImg;



