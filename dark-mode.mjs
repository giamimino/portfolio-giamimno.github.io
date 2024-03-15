export default function isprime() {
    console.log('file sucesfully imported :)');
}

var themeToggleBtn = document.querySelector('.frame');
var theme = localStorage.getItem('theme')
var theme1 = localStorage.getItem('theme1')
var sunny = document.querySelector('.sunny')
var moon = document.querySelector('.moon')


theme && document.body.classList.add('dark-mode')
if (theme) {
    moon.style.display = "none";
    sunny.style.display = "flex";
}

if (theme1) {
    sunny.style.display = "none";
    moon.style.display = "flex";
}

themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');     
        localStorage.removeItem('theme1')  
        sunny.style.display = "flex";
        moon.style.display = "none";
        
    }else {
        localStorage.removeItem('theme');
        localStorage.setItem('theme1', 'light-mode')
        moon.style.display = "flex";
        sunny.style.display = "none";
    }
    
});

var slideThemeToggleBtn = document.querySelector('.slide-frame');
var slideTheme = localStorage.getItem('theme')
var slideTheme1 = localStorage.getItem('theme1')
var slideSunny = document.querySelector('.slide-sunny')
var slideMoon = document.querySelector('.slide-moon')


slideTheme && document.body.classList.add('dark-mode')
if (slideTheme) {
    slideMoon.style.display = "none";
    slideSunny.style.display = "flex";
}

if (slideTheme1) {
    slideSunny.style.display = "none";
    slideMoon.style.display = "flex";
}

slideThemeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');     
        localStorage.removeItem('theme1')  
        slideSunny.style.display = "flex";
        slideMoon.style.display = "none";
        
    }else {
        localStorage.removeItem('theme');
        localStorage.setItem('theme1', 'light-mode')
        slideMoon.style.display = "flex";
        slideSunny.style.display = "none";
    }
    
});