const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

var copy = document.querySelector(".cp-btn");
var textToCopy = document.querySelector('.mail');
var lightBtn = document.querySelector("#light-btn");
var darkBtn = document.querySelector("#dark-btn");
var darkLightBtn = document.querySelector(".dark-light")
var changeBtn = 0;

copy.addEventListener("click" , function() {
    copy.innerHTML = "Copied.!";
    navigator.clipboard.writeText(textToCopy.innerHTML);
})

darkLightBtn.addEventListener('click',function(){    
    if (changeBtn == 0) {
        changeBtn = 1;
        lightBtn.style.display = "block";
        darkBtn.style.display = 'none';
        lightBtn.style.color = "white";
        document.querySelector(".page-1").style.backgroundColor = "rgb(29, 28, 28)";    
    }
    else{
        changeBtn = 0;
        darkBtn.style.color = "black";
        lightBtn.style.display = "none";
        darkBtn.style.display = 'block';
        document.querySelector(".page-1").style.backgroundColor = "rgb(200, 200, 200)";   
    }
    document.querySelector('.main-page').classList.toggle('main-page-dark');
    document.querySelector('.cp-btn').classList.toggle('cp-btn-dark');
    document.querySelector('.CV-btn').classList.toggle('CV-btn-dark');
    document.querySelector('.email-section').classList.toggle('email-section-dark');
    var contact = document.querySelectorAll('.links');
        contact.forEach(function (dark) {
            dark.classList.toggle('links-dark');
        })
    var backSlash = document.querySelectorAll('.back-slash');
    backSlash.forEach(function (back) {
        back.classList.toggle('back-slash-dark');
    })
    document.querySelector('.name').classList.toggle('name-dark');
    document.querySelector('.intro').classList.toggle('intro-dark');
    document.querySelector('.main-text').classList.toggle('main-text-dark');
    document.querySelector('.Project-btn').classList.toggle('Project-btn-dark');
    document.querySelector('.scroll-page').classList.toggle('scroll-page-dark');
    var scrollImg = document.querySelectorAll('.scroll-img');
    scrollImg.forEach( function (scroll) {
        scroll.classList.toggle('scroll-img-dark')
    })
    document.querySelector('.page-3').classList.toggle('page-3-dark');
    document.querySelector('.P2-heading').classList.toggle('P2-heading-dark');
    document.querySelector('.Services').classList.toggle('Services-dark');
    var lightImg = document.querySelectorAll('.dark-images');

    lightImg.forEach(function (light) {
        light.classList.toggle('light-images');
    })
    var cardHeading = document.querySelectorAll('.card-heading');
    cardHeading.forEach(function (CH) {
        CH.classList.toggle('card-heading-dark');
    })
    var cardParagraph = document.querySelectorAll('.card-paragraph');
    cardParagraph.forEach(function (CP) {
        CP.classList.toggle('card-paragraph-dark')
    })
    document.querySelector('.page-4').classList.toggle('page-4-dark')
    document.querySelector('.Handshake-img').classList.toggle('Handshake-img-dark');
    document.querySelector('.P4-heading').classList.toggle('P4-heading-dark');
    document.querySelector('.Email-btn').classList.toggle('Email-btn-dark');
    document.querySelector('.WhatsApp-btn').classList.toggle('Whatsap-btn-dark');
    document.querySelector('.footer-text').classList.toggle('footer-text-dark');
    document.querySelector('.CV-btn2').classList.toggle('CV-btn2-dark')
});
