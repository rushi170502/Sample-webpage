// Created by Dev Nasfam

window.onload=()=>{
    let i = 0;
let images = ["https://i.pinimg.com/originals/72/52/fe/7252fe803440fdfbe9012e2175639135.gif","https://i.pinimg.com/originals/36/82/fb/3682fb7b1417730c99dc75da73995eb0.gif","https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/aa8625109287767.5fd08439c7676.jpg"];
let speed = 8000;
let banner = document.querySelector(".banner");
function changePicture() {
banner.style.backgroundImage = "url(" + images[i] + ")";

if (i < images.length - 1) {
    i++;
} else {
    i = 0;
}
setTimeout(changePicture, speed);
}
document.querySelector(".container").style.display="block";
AOS.init({
duration: 800,
delay: 0,
});
changePicture();
}