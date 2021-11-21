const API_URL = 'https://icanhazdadjoke.com/';

const HTMLAcudit = document.querySelector("#app");

const scoreButtons = document.querySelector(".buttonScore");

let actualJoke;

let reportJokes = [];

function getAcudit() {
    fetchAcudit().then(data => {
        actualJoke = data;
        console.log("actualJoke", actualJoke);
        HTMLAcudit.innerHTML = actualJoke.joke
    });
    scoreButtons.style.display = 'block';
}

async function fetchAcudit() {
    const response = await fetch(API_URL, {method: 'GET', headers: {'Accept': 'application/json'}});
    const data = await response.json();
    return data;
}

function valorarAcudit(score) {
    const d = new Date();
    let text = d.toISOString();

    let reportJoke = {
        joke: actualJoke,
        score: score,
        date: text
    };
    reportJokes.push(reportJoke);
    console.log(reportJoke);
    console.log(reportJokes);
}