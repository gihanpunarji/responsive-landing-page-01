const hambergur = document.getElementById('hambergur');
const section = document.getElementById('section');
const closeBtn = document.getElementById('close-btn');
const nav = document.getElementById('nav');

hambergur.addEventListener('click', (e) =>{
    nav.style.height = "300px";
    section.style.paddingTop = "100px";
})

closeBtn.addEventListener('click', (e) =>{
    nav.style.height = "0";
    section.style.paddingTop = "0px";
})