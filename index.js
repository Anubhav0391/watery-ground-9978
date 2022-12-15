function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function signfunc() {
    document.getElementById("signin").classList.toggle("show");
}
function notifunc() {
    document.getElementById("noti").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.click')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

let signin = document.querySelector("#signin p+button");
signin.addEventListener("click", () => {
    window.location = "sign in.html"
})
let signup = document.querySelector("#signin button+button");
signup.addEventListener("click", () => {
    window.location = "sign up.html"
})
