/*
document.addEventListener("DOMContentLoaded", type);
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-list").classList.toggle("show");
});

// Modal for certificate
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const certs = document.querySelectorAll(".cert-img");
const close = document.querySelector(".close");

certs.forEach(cert => {
  cert.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = cert.src;
  });
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});*/

// Back to top
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

document.querySelectorAll('#nav-list a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav-list').classList.remove('show'); // close menu on click
  });
});

document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('nav-list').classList.toggle('show'); // toggle menu
});
