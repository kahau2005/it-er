const icShowHidePassword = document.querySelector('.icon-show');

const inputPassword = document.getElementById('password');
const inputUsername = document.getElementById('username');

const usernamePlaceHolder = document.querySelector('#username + .place-holder');
const passwordPlaceHolder = document.querySelector('#password + .place-holder');

inputUsername.addEventListener('input', () =>{
    if(inputUsername.value != ""){
        usernamePlaceHolder.style.transform = "translate(-25px,-35px)";
    }else{
        usernamePlaceHolder.style.transform = "translate(0,0)";
    }
});
inputPassword.addEventListener('input', () =>{
    if(inputPassword.value != ""){
        passwordPlaceHolder.style.transform = "translate(-25px,-35px)";
    }else{
        passwordPlaceHolder.style.transform = "translate(0,0)";
    }
});

icShowHidePassword.addEventListener('click', () =>{
    if(inputPassword.type === "password"){
        inputPassword.type = "text";
        icShowHidePassword.src = '../assets/icon/icon-show.png';
    }else{
        inputPassword.type = "password";
        icShowHidePassword.src = '../assets/icon/icon-hide.png';
    }
});