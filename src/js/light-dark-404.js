window.onload = detectTheme()
function detectTheme() {
    
    var theme = document.getElementById("theme");
    var themeNav = document.getElementById("nav");
    var imgLightDark = document.getElementById("light-dark");
    var imgGlobe = document.getElementById("lang");

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme.href = '/src/stylesheet/404/dark/404.min.css'
        themeNav.href = '/src/stylesheet/navigation/dark/navigation.min.css'; 
        imgLightDark.src = '/src/img/dark-sun-32-icons8.png';
        imgGlobe.src = '/src/img/dark-globe-32-icons8.png'; 
    
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        theme.href = '/src/stylesheet/404/light/404.min.css'
        themeNav.href = '/src/stylesheet/navigation/light/navigation.min.css';
        imgLightDark.src = '/src/img/moon-symbol-32-icons8.png';
        imgGlobe.src = '/src/img/globe-icons8.png'; 
            
    }
}


var switchLD = document.getElementById("switch");

switchLD.onclick = function toggleTheme() { 

    var theme = document.getElementById("theme");
    var themeNav = document.getElementById("nav");
    var imgLightDark = document.getElementById("light-dark");
    var imgGlobe = document.getElementById("lang");

    if (theme.getAttribute('href') == '/src/stylesheet/404/light/404.min.css') { 
        theme.href = '/src/stylesheet/404/dark/404.min.css'
        themeNav.href = '/src/stylesheet/navigation/dark/navigation.min.css'; 
        imgLightDark.src = '/src/img/dark-sun-32-icons8.png';
        imgGlobe.src = '/src/img/dark-globe-32-icons8.png'; 
    }
    else if (theme.getAttribute('href') == '/src/stylesheet/404/dark/404.min.css') { 
        theme.href = '/src/stylesheet/404/light/404.min.css'
        themeNav.href = '/src/stylesheet/navigation/light/navigation.min.css';
        imgLightDark.src = '/src/img/moon-symbol-32-icons8.png';
        imgGlobe.src = '/src/img/globe-icons8.png'; 
    }
} 