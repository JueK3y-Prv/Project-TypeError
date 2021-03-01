// DOM Elements

const lightButton = document.getElementById('light');
const darkButton = document.getElementById('dark');
const cookie = document.getElementsByClassName('cookie')
const body = document.body;


// Apply the cached theme on reload

const theme = localStorage.getItem('theme');

if (theme) {
    body.classList.add(theme);
}
else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    cookie.src = '/src/js/cookieBanner-dark.min.js'; 
    body.classList.replace('light', 'dark');
}

// Button Event Handlers
lightButton.onclick = () => {
    cookie.src = '/src/js/cookieBanner-light.min.js'; 
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
};

darkButton.onclick = () => {
    cookie.src = '/src/js/cookieBanner-dark.min.js';
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark'); 
};