

window.addEventListener('scroll', function(){
    var nav = document.querySelector('.nav');
    nav.classList.toggle("abajo", window.scrollY>0);

})






window.addEventListener('scroll', function(){
    var a = document.querySelector('.nav_logo');
    a.classList.toggle("abajo", window.scrollY>0);  
})



window.addEventListener('scroll', function(){
    var a = document.querySelector('.nav_sobre-mi');
    a.classList.toggle("abajo", window.scrollY>0);
})


window.addEventListener('scroll', function(){
    var a = document.querySelector('.nav_proyectos');
    a.classList.toggle("abajo", window.scrollY>0);
})


window.addEventListener('scroll', function(){
    var a = document.querySelector('.nav_certificados');
    a.classList.toggle("abajo", window.scrollY>0);
})

window.addEventListener('scroll', function(){
    var a = document.querySelector('.nav_conocimiento');
    a.classList.toggle("abajo", window.scrollY>0);
})


window.addEventListener('scroll', function(){
    var a = document.querySelector('.nav_contacto');
    a.classList.toggle("abajo", window.scrollY>0);  
})


window.addEventListener('scroll', function(){
    var a = document.querySelector('.nav_hamburguer');
    a.classList.toggle("abajo", window.scrollY>0);  
})







function clickOpen() {
    const nav = document.querySelector('nav');
    nav.classList.add('open');
}

function clickClose() {
    const nav = document.querySelector('nav');
    nav.classList.remove('open');
}




//Carousel


const buttonPrev = document.getElementById('button-prev');
const buttonNext = document.getElementById('button-next');
const track = document.getElementById('track');
const slickList = document.getElementById('slick-list');
const slick = document.querySelectorAll('.slick');


const slickWidth = slick[0].offsetWidth;

buttonPrev.onclick = () => Move(1);
buttonNext.onclick = () => Move(2);

function Move(value) {
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    if(leftPosition < (trackWidth + listWidth) && value == 2) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    } else if (leftPosition > 0 && value == 1) {
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }   
}