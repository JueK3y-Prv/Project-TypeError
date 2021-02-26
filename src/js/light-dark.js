function detectTheme() {
    
    var theme = document.getElementsByTagName('link')[9]; 
    var themeNav = document.getElementsByTagName('link')[10]; 
    var imgLightDark = document.getElementById("light-dark");
    var imgGlobe = document.getElementsByTagName('img')[1]; 

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme.href = '/src/stylesheet/index/dark/index.min.css'
        theme.id = 'dark'
        themeNav.href = '/src/stylesheet/navigation/dark/navigation.min.css'; 
        imgLightDark.src = '/src/img/dark-sun-32-icons8.png';
        imgGlobe.src = '/src/img/dark-globe-32-icons8.png'; 
    
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        theme.href = '/src/stylesheet/index/light/index.min.css'
        theme.id = 'light'
        themeNav.href = '/src/stylesheet/navigation/light/navigation.min.css';
        imgLightDark.src = '/src/img/moon-symbol-32-icons8.png';
        imgGlobe.src = '/src/img/globe-icons8.png'; 
            
    }
}

function toggleTheme() { 

    var theme = document.getElementsByTagName('link')[9]; 
    var themeNav = document.getElementsByTagName('link')[10]; 
    var imgLightDark = document.getElementById("light-dark");
    var imgGlobe = document.getElementsByTagName('img')[1]; 

    if (theme.getAttribute('href') == '/src/stylesheet/index/light/index.min.css') { 
        theme.href = '/src/stylesheet/index/dark/index.min.css'
        theme.id = 'dark'
        themeNav.href = '/src/stylesheet/navigation/dark/navigation.min.css'; 
        imgLightDark.src = '/src/img/dark-sun-32-icons8.png';
        imgGlobe.src = '/src/img/dark-globe-32-icons8.png'; 
    }
    else if (theme.getAttribute('href') == '/src/stylesheet/index/dark/index.min.css') { 
        theme.href = '/src/stylesheet/index/light/index.min.css'
        theme.id = 'light'
        themeNav.href = '/src/stylesheet/navigation/light/navigation.min.css';
        imgLightDark.src = '/src/img/moon-symbol-32-icons8.png';
        imgGlobe.src = '/src/img/globe-icons8.png'; 
    }
} 