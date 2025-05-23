// Typing animation
const text = ["Sravya", "a Web Developer", "a Designer"];
let index = 0, charIndex = 0;
const span = document.querySelector(".typed-text");

function type() {
  if (charIndex < text[index].length) {
    span.textContent += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    span.textContent = text[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % text.length;
    setTimeout(type, 200);
  }
}

document.addEventListener("DOMContentLoaded", type);

// Menu toggle
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
});

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

