//Event listeners za Portfolio menu

let web = document.querySelector('.web');
let graf = document.querySelector('.graficki');
let online = document.querySelector('.online');
let webBtn = document.querySelector('.web-btn'); 
let grafBtn = document.querySelector('.graf-btn');  
let onlineBtn = document.querySelector('.online-btn'); 

webBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(web.style.display === 'none') {
        web.style.display = 'grid';
        if(window.innerWidth < 768){
            web.style.display = 'flex';
        }
        graf.style.display = 'none';
        online.style.display = 'none';
    } else {
        web.style.display = 'none';
    }
});

grafBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(graf.style.display === 'none') {
        graf.style.display = 'grid';
        if(window.innerWidth < 768){
            graf.style.display = 'flex';
        }
        web.style.display = 'none';
        online.style.display = 'none';
    } else {
        graf.style.display = 'none';
    }
});

onlineBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(online.style.display === 'none') {
        online.style.display = 'grid';
        if(window.innerWidth < 768){
            online.style.display = 'flex';
        }
        web.style.display = 'none';
        graf.style.display = 'none';
    } else {
        online.style.display = 'none';
    }
});