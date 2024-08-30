const btnMenu = document.querySelector('.more img');
const navFrame = document.querySelector('.welcome .nav');
const navItems = document.querySelectorAll('.nav-frame');
var isNavHidden = true;
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
        
    });
});
const ltrElements = document.querySelectorAll('.hidden');
ltrElements.forEach((el) => observer.observe(el));
btnMenu.addEventListener('click', () => {
    if(isNavHidden){
        navFrame.style.height = '100%';
        navFrame.style.overflow = 'visible';
        navFrame.classList.add('nav-background');
        
    }else{
        hideNav();
        
    }

    isNavHidden = !isNavHidden;
   
});
navItems.forEach((item) => {
    item.addEventListener('click', () => {
        var width = window.innerWidth
        if(width <= 900){
            hideNav();
            
        }
        isNavHidden = !isNavHidden;
    })
});
function hideNav(){
        navFrame.style.height = '80px';
        navFrame.style.overflow = 'hidden';
        navFrame.classList.remove('nav-background');
}
function gotoLoginPage(){
    window.location = 'views/login.html';
}

