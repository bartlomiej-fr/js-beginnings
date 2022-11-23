const arrow = document.querySelector(".arrow");
const activeElement = document.querySelectorAll(".active");

arrow.addEventListener("click", function() {
    for(let i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.toggle("on")
    }
})