const nav = document.getElementById('myNav');
window.onscroll = function () {

    if (window.scrollY >= 600) {
        myNav.classList.add("navbarScroll");
        myNav.classList.remove("navbarTop");
    }
    else if (window.scrollY < 500) {
        myNav.classList.add("navbarTop");
        myNav.classList.remove("navbarScroll");
    }
};
// var button = document.querySelectorAll('button');
// console.log(button);
// button.addEventListener('click', function () {
//     console.log("clll");
// });

function Active(e) {

    e.target.classList.toggle("button-active");

}