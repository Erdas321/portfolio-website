function login() {
    document.getElementById("laptop_display").style.display = "grid"; // Show projects
    document.getElementById("laptop_display").style.animation = "fadeIn 2s forwards";
    /*document.getElementById("taskbar").style.display = "block"; // Hide image section*/
    document.getElementById("login_screen").style.display = "none";
}

function logoff() {
    document.getElementById("laptop_display").style.display = "none"; // Show projects
    /*document.getElementById("taskbar").style.display = "none"; // Hide image section*/
    document.getElementById("login_screen").style.animation = "fadeOut 2s forwards";
    document.getElementById("login_screen").style.display = "block";
}
