const btn = document.getElementById('btn');
const body = document.getElementById('body');

/* var getColor = body.style.backgroundColor;

console.log(getColor); */

btn.addEventListener('click', ()=>{
    body.style.backgroundColor = "green";
});