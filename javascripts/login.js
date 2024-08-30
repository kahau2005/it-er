
const loginForm = document.querySelector('.login-area');

var registerView = `<div class="container register-animation">
                    <div class="lg-header">
                        <img class="app-icon" src="../assets/icon/app_icon.png" alt="">
                        <p>Đăng kí tài khoản</p>
                    </div>
                    <div class="lg-content">
                        <div class="name">
                            <div class="username name-modify">
                                <img class="inp-icon" src="../assets/icon/icon-name.png" alt="">
                                <input oninput="placeHolderAnimation(this)" class="inp" id="first-name" type="text">
                                <span class="place-holder">Họ</span>
                            </div>
                            <div class="username name-modify">
                                <img class="inp-icon" src="../assets/icon/icon-name.png" alt="">
                                <input oninput="placeHolderAnimation(this)" class="inp" id="last-name" type="text">
                                <span class="place-holder">Tên</span>
                            </div>
                        </div>
                        <div class="username register-modify">
                            <img class="inp-icon" src="../assets/icon/icon-username.png" alt="">
                            <input oninput="placeHolderAnimation(this)" class="inp" id="reg-username" type="text">
                            <span class="place-holder">Username</span>
                        </div>
                        <div class="username register-modify">
                            <img class="inp-icon" src="../assets/icon/icon-email.png" alt="">
                            <input oninput="placeHolderAnimation(this)" class="inp" id="email" type="text">
                            <span class="place-holder">Email</span>
                        </div>
                        <div class="username register-modify">
                            <img class="inp-icon" src="../assets/icon/icon-password.png" alt="">
                            <input oninput="placeHolderAnimation(this)" class="inp" id="reg-password" type="password">
                            <span class="place-holder">Mật khẩu</span>
                            <img onclick="showHidePasswordButton(this)" class="icon-show" src="../assets/icon/icon-hide.png" alt="ic show">
                        </div>
                        <div class="username register-modify">
                            <img class="inp-icon" src="../assets/icon/icon-password.png" alt="">
                            <input oninput="placeHolderAnimation(this)" class="inp" id="reg-password-retype" type="password">
                            <span class="place-holder">Nhập lại mật khẩu</span>
                            <img onclick="showHidePasswordButton(this)" class="icon-show" src="../assets/icon/icon-hide.png" alt="ic show">
                        </div>
                        <button class="btn-login btn-register-modify">Đăng Kí</button>
                        <p>Việc đăng kí tài khoản đồng nghĩa với việc bạn đã đồng ý với các <span>điều khoản dịch vụ</span> của chúng tôi</p>
                        <p class="lg-tip">Bạn đã có tài khoản? <span onclick="gotoLogin()" >Đăng nhập</span></p>
                    </div>
                </div>`;
var loginView = `<div class="container login-animatetion">
                    <div class="lg-header">
                        <img class="app-icon" src="../assets/icon/app_icon.png" alt="">
                        <p>Đăng nhập</p>
                    </div>
                    <div class="lg-content">
                        <div class="username">
                            <img class="inp-icon" src="../assets/icon/icon-username.png" alt="">
                            <input class="inp" id="username" type="text" oninput="placeHolderAnimation(this)">
                            <span class="place-holder">Username hoặc Email</span>
                        </div>
                        <div class="username">
                            <img class="inp-icon" src="../assets/icon/icon-password.png" alt="">
                            <input oninput="placeHolderAnimation(this)" class="inp" id="password" type="password">
                            <span class="place-holder">Mật khẩu</span>
                            <img onclick="showHidePasswordButton(this)" class="icon-show" src="../assets/icon/icon-hide.png" alt="ic show">
                        </div>
                        <div class="forget-password">
                            <span>Quên mật khẩu?</span>
                        </div>
                        <button onclick="loginProcess()" class="btn-login">Đăng Nhập</button>
                        <div class="subdivider">
                            <div class="line"></div>
                            <span>Đăng nhập bằng cách khác</span>
                            <div class="line"></div>
                        </div>
                        <div class="another-login-method">
                            <div class="social-frame">
                                <img src="../assets/icon/log-fb.png" alt="">
                                <span>Facebook</span>
                            </div>
                            <div class="social-frame">
                                <img src="../assets/icon/log-google.png" alt="">
                                <span>Google</span>
                            </div>
                            <div class="social-frame">
                                <img src="../assets/icon/log-github.png" alt="">
                                <span>Github</span>
                            </div>
                        </div>
                        <p>Bạn vẫn chưa có tài khoản? <span onclick="gotoRegister()">Đăng kí ngay</span></p>
                    </div>
                </div>`;
loginForm.innerHTML = loginView;
function gotoRegister(){
    loginForm.innerHTML = registerView;
}
function loginProcess(){
    const inputPassword = document.getElementById('password');
    const inputUsername = document.getElementById('username');
    var username = inputUsername.value;
    var password = inputPassword.value;
    if((username === "pmhau2005") && (password==="123456789")){
        window.location = "home.html";
    }else{
        alert("Tên đăng nhập hoặc mật khẩu không chính xác!");
    }
}
function gotoLogin(){
    loginForm.innerHTML = loginView;
}
function placeHolderAnimation(element){
    var placeHolderView = document.querySelector(`#${element.id} + .place-holder`);
    if(element.value != ""){
        placeHolderView.style.transform = "translate(-25px,-35px)";
    }else{
        placeHolderView.style.transform = "translate(0,0)";
    }
}
function showHidePasswordButton(element){
    const inputElement = element.closest('.username').querySelector('.inp');
    if (inputElement.type === "password") {
        inputElement.type = "text";
        element.src = "../assets/icon/icon-show.png";
    } else {
        inputElement.type = "password";
        element.src = "../assets/icon/icon-hide.png";
    }
}
