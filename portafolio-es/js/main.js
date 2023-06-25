

window.addEventListener('scroll', function(){
    var container = document.querySelector('.container');
    container.classList.toggle("abajo", window.scrollY>0);

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

