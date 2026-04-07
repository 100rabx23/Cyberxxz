const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

//okay its working!!!

/* Toggle Forms */
//tasfyjgqscgs
showRegister.onclick = () => {
loginForm.classList.remove("active");
registerForm.classList.add("active");
}

showLogin.onclick = () => {
registerForm.classList.remove("active");
loginForm.classList.add("active");
}


/* Redirect after Login */

loginForm.addEventListener("submit", function(e){
e.preventDefault();

alert("Login Successful!");

window.location.href = "https://CyberAegXs.hdmixture.site";
});


/* Redirect after Register */

registerForm.addEventListener("submit", function(e){
e.preventDefault();

alert("Registration Successful!");

window.location.href = "https://CyberAegXs.hdmixture.site";
});
