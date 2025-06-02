
// currentSlide variable mein wo slide number rakha gaya hai jo filhaal active hai
let currentSlide = 0;

// Ye line sabhi slides ko pakadti hai jo .slide class ke under hain
const slides = document.querySelectorAll(".slide");

// Ye function kisi ek specific slide ko show karta hai aur baaki sab ko hide karta hai
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active"); // sabhi slides se 'active' class remove kr do
    if (i === index) {
      slide.classList.add("active"); // sirf jis slide ka index diya hai usme 'active' class add karo
    }
  });
}

// Jab page load ho jaye to headings animate karne ke liye
window.addEventListener("DOMContentLoaded", () => {
  const headings = document.querySelectorAll(".animate-heading"); // sabhi headings ko pakdo jinko animate karna hai
  headings.forEach((heading, index) => {
    // thodi thodi delay ke sath har heading mein animate class lagao
    setTimeout(() => {
      heading.classList.add("animate");
    }, index * 300); // har heading ke darmiyan 300ms ka fark
  });
});

// Next button ya auto slide ke liye: next slide dikhane ke liye
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // agar last slide pe ho to phir se pehle pe aao
  showSlide(currentSlide); // naye slide ko show karo
}

// Previous button ke liye: peechla slide dikhane ke liye
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // agar pehle slide pe ho to last pe jao
  showSlide(currentSlide); // new slide ko show karo
}

// Automatically har 5 second baad next slide dikhane ke liye
setInterval(nextSlide, 5000);

// Page load hote hi pehla slide dikhane ke liye
showSlide(currentSlide);
