var next = document.getElementById("next");
var preview = document.getElementById("preview");
// next.onchange=function(){

// }

// var slides=document.getElementById('slides');

// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide,3000);

var timerId = setInterval(function() {
    move(-100);
}, 3000);

var translate = 0;
next.onclick = function() {
    move(-100);

}
preview.onclick = function() {
    move(100);

}

function move(x) {
    translate += x;
    if (translate < -600) {

        translate = 0;
    }
    if (translate > 0) {

        translate = 0;
    }

    slides.style.transform = "translateX(" + translate + "px)";
    console.log(translate);
}

var images = document.querySelectorAll('.slide>img');
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");

for (let i = 0; i < images.length; i++) {
    var img = images[i];
    img.onclick = function() {
        modalImg.setAttribute("src", this.src);
        modal.style.display = "block";

    }

}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}