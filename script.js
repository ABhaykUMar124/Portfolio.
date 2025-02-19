var copy = document.querySelector(".cp-btn");
var textToCopy = document.querySelector('.mail');

copy.addEventListener("click" , function() {
    copy.innerHTML = "Copied.!";
    navigator.clipboard.writeText(textToCopy.innerHTML);
})
