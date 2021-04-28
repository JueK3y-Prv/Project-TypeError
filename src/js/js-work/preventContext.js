/* document.oncontextmenu = function() {
    return false;
} */

document.onkeydown = function(e) {
    /*if(event.keyCode == 123) {
        return false;
    }*/
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'P'.charCodeAt(0)){
        return false;
    }
}

setTimeout(function() {
    console.log('-------------------------------------------\n👋 Hey there! You found a secret cookie 🍪\n-------------------------------------------');
}, 3000);


var thisYear  = new Date().getFullYear()
startYear = '2021'

if (thisYear > startYear) { 
    try {
        document.getElementById("currentYearText").innerHTML = startYear + ' - ' + thisYear
    } catch (error) {
        pass
    }
    try {
        document.getElementById("currentYear").innerHTML = startYear + ' - ' + thisYear
        document.getElementById("currentYearMobile").innerHTML = startYear + ' - ' + thisYear
    } catch (error) {
        pass   
    }
}

