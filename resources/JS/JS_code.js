function myFunction(x) {
    x.classList.toggle("change");
    var y = document.getElementById("nav-animation");

    if (y.style.display === "flex") {
            y.style.display = "";
        } else {
            y.style.display = "flex";
        }
}
