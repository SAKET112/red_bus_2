var toggle = document.getElementById("toggle");

toggle.onclick = function() {
    document.body.classList.toggle("darkTheme")
    if(document.body.classList.contains("darkTheme")){
        toggle.src = "images/sun.png"
    } else {
        toggle.src = "images/moon.png"
    }
}


function onloadPage() {
    document.getElementById("popup").style.visibility = 'visible';
    document.getElementById("body").style.opacity = '0.5'
}

function closeCoupon(){
    document.getElementById("popup").style.visibility = 'hidden';
    document.getElementById("body").style.opacity = '1'
}

window.onload = onloadPage();