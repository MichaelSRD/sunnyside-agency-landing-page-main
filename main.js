const menuh = document.querySelector('.menuH');
const navegacion = document.getElementById('nav');
const oscurecer = document.querySelector('.main');


menuh.addEventListener('click', (e)=>{
    e.preventDefault()
     menuh.classList.toggle("close");
     navegacion.classList.toggle("active");
});

oscurecer.addEventListener('click', ()=>{
    navegacion.classList.remove("active");
})





