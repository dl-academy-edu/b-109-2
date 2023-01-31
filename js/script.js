const popup = document.querySelector(".popup");
const openBtn = document.querySelector(".banner__btn-js");
const closeBtn = popup.querySelector(".close");
const firstInput = popup.querySelector(".form__input");
const overlay = popup.querySelector(".overlay");

openBtn.addEventListener('click', function() {
    popup.classList.add('open');
    firstInput.focus();
});

closeBtn.addEventListener('click', function() {
    popup.classList.remove('open');
});

overlay.addEventListener('click', function() {
    popup.classList.remove('open')
})

window.addEventListener("keydown", function(e) {
    if(e.code === "Escape" && popup.classList.contains('open')) {
        popup.classList.remove('open');
    };
});
