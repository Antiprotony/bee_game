// script.js

// 1. Game Questions
const questions = [
    {
        question: "Tutti conosciamo la famosa ape da miele (Apis mellifera). Ma quante specie di api ci sono in Italia secondo te?",
        options: [
            { text: "Circa 50", correct: false },
            { text: "Circa 250", correct: false },
            { text: "Più di 1000", correct: true }
        ],
        explanation: "In Italia...",
        image: "images/bee.png"
    },
    {
        question: "Quale tra questi animali non è un impollinatore?",
        options: [
            { text: "Farfalla Macaone", correct: false },
            { text: "Pipistrello della Tequila", correct: false },
            { text: "Tucano Tuco", correct: true }
        ],
        explanation: "In Italia...",
        image: "images/butterfly.png"
    },
    {
        question: "Gli impollinatori si trovano davvero quasi ovunque! Dove non sono mai stati visti?",
        options: [
            { text: "Nel deserto", correct: false },
            { text: "Nello spazio", correct: false },
            { text: "Sulla cima dell'Everest", correct: true }
        ],
        explanation: "In Italia...",
        image: "images/space.png"
    },
    {
        question: "Alcuni impollinatori possono compiere viaggi incredibili! Quanti chilometri può percorrere la farfalla monarca durante le sue migrazioni?",
        options: [
            { text: "50 km", correct: false },
            { text: "1000 km", correct: false },
            { text: "4500 km", correct: true }
        ],
        explanation: "In Italia...",
        image: "images/monarca.png"
    },
    {
        question: "Quale di questi alimenti non sarebbe più disponibile se gli impollinatori sparissero?",
        options: [
            { text: "Caffè", correct: false },
            { text: "Grano", correct: true },
            { text: "Carote", correct: false }
        ],
        explanation: "In Italia...",
        image: "images/cafe.png"
    },
    {
        question: "Bene! Adesso è ora di agire! Gli impollinatori stanno morendo di caldo in città, devi trovare una soluzione..",
        options: [
            { text: "Creare più zone alberate", correct: true },
            { text: "Irrigare frequentemente i giardini e aree verdi", correct: false },
            { text: "Spruzzare acqua nebulizzata nelle strade per rinfrescare l’ambiente", correct: false }
        ],
        explanation: "In Italia...",
        image: "images/sole.png"
    },
    {
        question: "Ora che le temperature sono migliorate, gli impollinatori faticano comunque aprosperare in città. Come puoi rendere l’ambiente più accogliente?",
        options: [
            { text: "Tagliando il prato ogni settimana", correct: false },
            { text: "Coltivando piante aromatiche sul balcone", correct: true },
            { text: "Aumentando l'illuminazione notturna per attirare più insetti", correct: false }
        ],
        explanation: "In Italia...",
        image: "images/balcone.png"
    },
    {
        question: "Alcuni impollinatori hanno iniziato ad apprezzare i cambiamenti, come potresti renderla la tua città ancora più accogliente?",
        options: [
            { text: "• Rimuovendo i cumuli di foglie secche da terra", correct: false },
            { text: "• Rimuovendo tronchi e ceppi di alberi da terra", correct: false },
            { text: "Sostituendo recinzioni metalliche con siepi", correct: true }
        ],
        explanation: "In Italia...",
        image: "images/cappo.png"
    },
    {
        question: "Ora servono luoghi adatti alla nidificazione degli impollinatori, cosa pensi possa essere utile?",
        options: [
            { text: "Muretti a secco", correct: false },
            { text: "Suolo nudo", correct: false },
            { text: "Entrambe le risposte precedenti", correct: true }
        ],
        explanation: "In Italia...",
        image: "images/casetta.png"
    },
    {
        question: "Per pianificare al meglio la tua città a misura di impollinatore è meglio:",
        options: [
            { text: "Creare tante aree verdi anche se piccole di dimensioni", correct: true },
            { text: "• Piantare alberi sempreverdi per mantenere il verde tutto l'anno", correct: false },
           { text: "Importare fiori particolarmente ricchi di nettare da altri paesi", correct: false }
        ],
        explanation: "In Italia...",
        image: "images/mappa.png"
    }
    
    // Puoi aggiungere altre domande qui se lo desideri
];

// Variables
let score = 0;
let currentQuestionIndex = 0;

const backgroundMusic = document.getElementById('background-music');
const startButton = document.getElementById('start-button');
const gameDiv = document.getElementById('game');
const explanationBanner = document.getElementById('explanation-banner');
const explanationText = document.getElementById('explanation-text');
const overlay = document.getElementById('overlay');

// Start Game
function startGame() {
    backgroundMusic.play();
    startButton.style.display = 'none';
    const insertCoin = document.getElementById('insert-coin');
    if (insertCoin) insertCoin.style.display = 'none';
    const progressContainer = document.getElementById('progress-container');
    if (progressContainer) progressContainer.style.display = 'block';
    score = 0;
    currentQuestionIndex = 0;
    showQuestion();
}

// Show Question
function showQuestion() {
    const questionObj = questions[currentQuestionIndex];
    let html = `<img src="${questionObj.image}" alt="Image"><p>${questionObj.question}</p>`;
    questionObj.options.forEach((option, index) => {
        html += `<button class="button" onclick="selectOption(${index})">${option.text}</button>`;
    });
    gameDiv.innerHTML = html;
    updateProgressBar();
}

// Select Option
function selectOption(index) {
    const questionObj = questions[currentQuestionIndex];
    const option = questionObj.options[index];
    if (option.correct) {
        score += 10;
        appendFeedback("Correct! Score: " + score, true);
    } else {
        appendFeedback("Incorrect. Score: " + score, false);
    }
    document.querySelectorAll('.button').forEach(button => button.disabled = true);
    showExplanation(questionObj.explanation);
}

// Show Explanation
function showExplanation(explanation) {
    explanationText.innerText = explanation;
    explanationBanner.style.display = 'block';
    overlay.style.display = 'block';
    
    // ✅ Abilita il pulsante "Continua" quando compare la spiegazione
    const continueButton = document.getElementById('continue-button');
    if (continueButton) {
        continueButton.disabled = false; // Rimuove l'attributo "disabled"
    }
}

// Continue to Next Question
function continueToNextQuestion() {
    explanationBanner.style.display = 'none';
    overlay.style.display = 'none';
    currentQuestionIndex++;
    currentQuestionIndex < questions.length ? showQuestion() : showResults();

    // ✅ Disabilita di nuovo il pulsante dopo averlo premuto
    const continueButton = document.getElementById('continue-button');
    if (continueButton) {
        continueButton.disabled = true; // Previene clic multipli
    }
}


// Append Feedback
function appendFeedback(message, isCorrect) {
    gameDiv.innerHTML += `<p class="feedback ${isCorrect ? 'correct' : 'incorrect'}">${message}</p>`;
}

// Update Progress Bar
function updateProgressBar() {
    document.getElementById('progress-bar').style.width = `${(currentQuestionIndex / questions.length) * 100}%`;
}

// Show Results
function showResults() {
    const percentage = (score / (questions.length * 10)) * 100;
    gameDiv.innerHTML = `<h2>${percentage}% - Congratulations! You have completed the game.</h2><p>Final Score: ${score}</p><button class="button" onclick="restartGame()">Play Again</button>`;
    document.getElementById('progress-container').style.display = 'none';
    backgroundMusic.pause();
}

// Restart Game
function restartGame() {
    score = 0;
    currentQuestionIndex = 0;
    startButton.style.display = 'inline-block';
    document.getElementById('progress-bar').style.width = '0%';
    document.getElementById('progress-container').style.display = 'none';
    document.getElementById('insert-coin').style.display = 'block';
    gameDiv.innerHTML = '';
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
}

// Event Listener per il pulsante "Continua"
const continueButton = document.getElementById('continue-button');
if (continueButton) {
    continueButton.onclick = continueToNextQuestion; // Metodo più semplice e compatibile
} else {
    console.error("❌ Pulsante Continua non trovato");
}
