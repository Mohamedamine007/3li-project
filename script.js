var navbar = document.getElementById("myNavbar");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  navbar.classList.add("active");
}

function closeNav() {
  navbar.classList.remove("active");
}
