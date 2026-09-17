const globe = document.querySelector('#globe');
const question = document.querySelector('#question');
const askbutton = document.querySelector('#ask');
const message = document.querySelector('#message');

const predictions = [
    "YES ✧",
    "NO ✧",
    "MAYBE ✧",
    "IT'S POSSIBLE ✧",
    "NOT YET ✧",
    "DEFINITELY ✧",
    "THE STARS SAY YES ✧",
    "THE FUTURE IS UNCLEAR ✧",
    "WAIT AND SEE ✧",
    "SOMETHING IS COMING ✧"
];

askbutton.addEventListener('click', () => {
    const userQuestion = question.value.trim();
    if (userQuestion === "") {
        message.textContent = "ask me something first... ♡";
        return;
    }
    const prediction = predictions[Math.floor(Math.random() * predictions.length)];
    globe.classList.remove("shaking");
    void globe.offsetWidth;
    globe.classList.add("shaking");
    message.textContent = "the snow is settling..."
    setTimeout(() => {
        message.textContent = prediction;
    }, 700);
});