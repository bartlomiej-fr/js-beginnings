// PRZY WYKORZYSTANIU J-QUERY

// $(".burger").on("click", function() {
//     $(".fa-solid, aside, .wrapper").toggleClass("show");
// })

// PRZY WYKORZYSTANIU JAVA SCRIPT - krótszy zapis

const burger = document.querySelector(".burger"); //pobieramy ikone menu burger

const activeElement = document.querySelectorAll(".active"); //pobrano wszystkie elementy o danej klasie


burger.addEventListener("click", function () {
    for (let i = 0; i < activeElement.length; i++) { //kazdem z 4 elementow o klasie active przelaczy klase show
        activeElement[i].classList.toggle("show")
    }
})

// PRZY WYKORZYSTANIU JAVA SCRIPT - dłuższy zapis

// const burger = document.querySelector('.burger');

// const iconBurger = document.querySelector(".fa-bars");
// const iconX = document.querySelector(".fa-xmark");
// const column = document.querySelector("aside");
// const wrapper = document.querySelector(".wrapper");

// burger.addEventListener("click", function () {
//     iconBurger.classList.toggle("show");
//     iconX.classList.toggle("show");
//     column.classList.toggle("show");
//     wrapper.classList.toggle("show");
// })