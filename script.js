const globe = document.querySelector('#globe');
const button = document.querySelector('#shake');
const message = document.querySelector('#message');

const messages = [
    "you are allowed to not be perfect",
    "you are allowed to not be productive",
    "don't forget what made you start in the first place",
    "you are allowed to not be okay",
    "people care",
    "you are allowed to take a break",
    "you are allowed to not have it all figured out",
];

button.addEventListener('click', () => {
    globe.classList.add("shaking");
    setTimeout(() => globe.classList.remove("shaking"), 600);

    const pick = Math.floor(Math.random() * messages.length);
    message.textContent = messages[pick];
});