

window.addEventListener('scroll', function(){
    var nav = document.querySelector('nav');
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
    var a = document.querySelector('.nav_conocimiento');
    a.classList.toggle("abajo", window.scrollY>0);
})


window.addEventListener('scroll', function(){
    var a = document.querySelector('.nav_contacto');
    a.classList.toggle("abajo", window.scrollY>0);  
})




