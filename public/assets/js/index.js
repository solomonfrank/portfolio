window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("header");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("header--scrolling");
  } else {
    header.classList.remove("header--scrolling");
  }
}
