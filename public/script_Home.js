function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}

const names = ["Hassan Bin Khalid", "Adil Naeem", "Ayesha Altaf", "Haseeb Mushtaq", "Laiba Khalid", "Hina Yousaf", "Nimra Arif", "Syed Rasib Shah", "Ahmed Farrukh", "Laiba Maqsood"]; // Your team
let currentName = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 60;
const pause = 1500;

const typedNameElement = document.getElementById('typedName');

function typeNames() {
    const current = names[currentName];

    if (isDeleting) {
        charIndex--;
        typedNameElement.textContent = current.substring(0, charIndex);
    } else {
        typedNameElement.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    let delay = speed;

    if (!isDeleting && charIndex === current.length) {
        delay = pause;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentName = (currentName + 1) % names.length;
        delay = 500;
    }

    setTimeout(typeNames, delay);
}

typeNames();

