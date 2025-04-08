function login() {
    document.getElementById("laptop_display").style.display = "grid";
    document.getElementById("login_screen").style.display = "none";
    document.getElementById("laptop_display").style.animation = "fadeIn 2s forwards";
}

function logoff() {
    document.getElementById("laptop_display").style.display = "none";
    document.getElementById("login_screen").style.display = "block";
    document.getElementById("login_screen").style.animation = "fadeIn 2s forwards";
    document.getElementById("img_text").style.animation = "fadeOut 15s forwards";
}
