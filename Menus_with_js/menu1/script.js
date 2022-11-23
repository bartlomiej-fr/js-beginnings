const burger = document.querySelector('.burger');

burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    //toggle - sprawdza czy w classList istnieje podana klasa
    //nastepnie ja doda lub odejmie (jak przelacznik)
})