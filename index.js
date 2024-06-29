document.addEventListener("DOMContentLoaded", function() {
    const lid = document.querySelector(".lid");
    const text = document.querySelector(".text");

    lid.addEventListener("mouseover", function() {
        text.classList.add("hover");
    });

    lid.addEventListener("mouseout", function() {
        text.classList.remove("hover");
    });
});
