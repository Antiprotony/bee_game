// script.js

// 1. Game Questions
const questions = [
    {
        question: "Tutti conosciamo la famosa ape da miele. Ma quante specie di api ci sono in Italia secondo te?",
        options: [
            { text: "Circa 50", correct: false },
            { text: "Circa 250", correct: false },
            { text: "Più di 1000", correct: true }
        ],
        explanation: "Incredibile, ma vero: in Italia esistono oltre 1.000 specie di api! Ognuna con le sue caratteristiche e tutte importanti per l’impollinazione di piante spontanee e coltivate.",
        image: "images/bee.png"
    },
    {
        question: "Quale tra questi animali non è un impollinatore?",
        options: [
            { text: "Farfalla Macaone", correct: false },
            { text: "Pipistrello della Tequila", correct: false },
            { text: "Tucano Tuco", correct: true }
        ],
        explanation: "Molti animali, anche insospettabili, impollinano: dalle farfalle ai pipistrelli. Ma il tucano tuco, pur diffondendo semi, non trasporta polline tra i fiori!",
        image: "images/butterfly.png"
    },
    {
        question: "Gli impollinatori si trovano davvero quasi ovunque! Dove non sono mai stati visti?",
        options: [
            { text: "Nel deserto", correct: false },
            { text: "Nello spazio", correct: false },
            { text: "Sulla cima dell'Everest", correct: true }
        ],
        explanation: "Gli impollinatori vivono ovunque, persino nei deserti, ma non in cima all’Everest. Sorprendentemente, alcune api sono state persino portate nello spazio per esperimenti della NASA!",
        image: "images/space.png"
    },
    {
        question: "Alcuni impollinatori possono compiere viaggi incredibili! Quanti chilometri può percorrere la farfalla monarca durante le sue migrazioni?",
        options: [
            { text: "50 km", correct: false },
            { text: "1000 km", correct: false },
            { text: "4500 km", correct: true }
        ],
        explanation: "La farfalla monarca è una campionessa di migrazione: può percorrere fino a 4.500 km! Ogni anno viaggia dal Nord America fino al Messico per svernare, attraversando interi continenti.",
        image: "images/monarca.png"
    },
    {
        question: "Quale di questi alimenti rischiamo di perdere se gli impollinatori dovessero sparire?",
        options: [
            { text: "Caffè", correct: true },
            { text: "Grano", correct: false },
            { text: "Patate", correct: false }
        ],
        explanation: "Senza impollinatori, perderemmo il caffè, che dipende completamente dall'impollinazione. Il grano si impollina grazie al vento, mentre le patate si riproducono principalmente tramite i tuberi.",
        image: "images/frutta.png"
    },
    {
        question: "Bene! Adesso è ora di agire! Gli impollinatori stanno morendo di caldo in città, devi trovare una soluzione:",
        options: [
            { text: "Creare più zone alberate", correct: true },
            { text: "Irrigare frequentemente i giardini e aree verdi", correct: false },
            { text: "Spruzzare acqua nebulizzata nelle strade per rinfrescare l’ambiente", correct: false }
        ],
        explanation: "La soluzione migliore è creare più zone alberate, che offrono ombra e habitat. Irrigare frequentemente i giardini e spruzzare acqua nebulizzata nelle strade non sono soluzioni efficaci e sostenibili per combattere il calore estremo.",
        image: "images/sole.png"
    },
    {
        question: "Ora che le temperature sono migliorate, gli impollinatori faticano comunque a prosperare in città. Come puoi rendere l’ambiente più accogliente?",
        options: [
            { text: "Tagliando il prato ogni settimana", correct: false },
            { text: "Coltivando piante aromatiche sul balcone", correct: true },
            { text: "Aumentando l'illuminazione notturna per attirare più insetti", correct: false }
        ],
        explanation: "Una buona soluzione è coltivare piante aromatiche sul balcone, che offrono risorse alle impollinatori. Tagliare il prato ogni settimana non aiuta, mentre aumentare l'illuminazione notturna può disturbare gli insetti, attirando specie invasive e compromettendo la loro attività.",
        image: "images/balcone.png"
    },
    {
        question: "La situazione sembra migliorare ma come potremmo rendere le nostre città ancora più accoglienti?",
        options: [
            { text: "Rimuovendo i cumuli di foglie secche da terra", correct: false },
            { text: "Rimuovendo tronchi e ceppi di alberi da terra", correct: false },
            { text: "Sostituendo recinzioni metalliche con siepi", correct: true }
        ],
        explanation: "Per rendere le città più accoglienti, è utile sostituire recinzioni metalliche con siepi, che offrono rifugio e cibo agli impollinatori. Rimuovere cumuli di foglie e tronchi non è invece consigliato poiché forniscono habitat naturali per insetti e altri organismi.",
        image: "images/cappo.png"
    },
    {
        question: "Ora servono luoghi adatti alla nidificazione degli impollinatori, cosa pensi possa essere utile?",
        options: [
            { text: "Muretti a secco", correct: false },
            { text: "Suolo nudo", correct: false },
            { text: "Entrambe le risposte precedenti", correct: true }
        ],
        explanation: "Per favorire la nidificazione degli impollinatori, sono utili sia i muretti a secco che il suolo nudo, poiché entrambi offrono un elemento perfetto per la nidificazione di molte specie.",
        image: "images/casetta.png"
    },
    {
        question: "Ci siamo quasi! Quale strategia pensi sia meglio adottare per pianificare città a misura di impollinatore per il futuro?",
        options: [
            { text: "Creare tante aree verdi anche se piccole di dimensioni", correct: true },
            { text: "Piantare alberi sempreverdi per mantenere il verde tutto l'anno", correct: false },
           { text: "Importare fiori particolarmente ricchi di nettare da altri paesi", correct: false }
        ],
        explanation: "Per una città a misura di impollinatori, è meglio creare tante aree verdi anche se piccole, che offrono risorse diverse durante tutto l'anno. I sempreverdi, pur mantenendo il verde, non forniscono molte risorse per gli impollinatori, mentre importare fiori da altri paesi potrebbe alterare l'ecosistema locale.",
       image: "images/mappa.png"
    }
    
    // Puoi aggiungere altre domande qui se lo desideri
];

// Variables
let score = 0;
let currentQuestionIndex = 0;

const backgroundMusic = document.getElementById('background-music1');
const startButton = document.getElementById('start-button');
const gameDiv = document.getElementById('game');
const explanationBanner = document.getElementById('explanation-banner');
const explanationText = document.getElementById('explanation-text');
const myFeedback = document.getElementById('my-feedback');
const overlay = document.getElementById('overlay');

// Start Game
// Start Game
function startGame() {
    if (backgroundMusic.paused) {
        backgroundMusic.play(); // Riproduce la musica se è ferma
    }
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
        score += 1;
		myFeedback.innerText = `Corretto!`;
	}
	else {
		myFeedback.innerText = `Incorretto!`;
	}
    document.querySelectorAll('.button').forEach(button => button.disabled = true);
    showExplanation(questionObj.explanation);
}

// Show Explanation
function showExplanation(explanation, index) {
    explanationText.innerText = explanation;
    explanationBanner.style.display = 'block';
    overlay.style.display = 'block';
    
    // ✅ Abilita il pulsante "Continua" e "Ricominicia" quando compare la spiegazione
    const continueButton = document.getElementById('continue-button');
	const restartButton = document.getElementById('restart-button');
    if (continueButton) {
        continueButton.disabled = false; // Rimuove l'attributo "disabled"
		restartButton.disabled = false;
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

// Update Progress Bar
function updateProgressBar() {
    document.getElementById('progress-bar').style.width = `${(currentQuestionIndex / questions.length) * 100}%`;
}

// Show Results
function showResults() {
    const scoreMessages = [
        "Forse gli impollinatori non sono il tuo forte… ma c’è sempre tempo per scoprire il loro mondo ronzante! 🐝",
        "Qualche fiore l’hai impollinato, ma c’è ancora molto da esplorare! Continua così! 🌼",
        "Hai piantato i primi fiori della conoscenza. Ora tocca agli insetti arrivare! 🌱",
        "Sei sulla strada giusta! Con un po’ di nettare in più, farai grandi cose! 🍯",
        "Metà alveare è pieno! La natura ringrazia il tuo impegno. 🌸",
        "Bravo! Gli impollinatori iniziano a considerarti un alleato prezioso. 🦋",
        "Ottimo lavoro! Il tuo giardino immaginario è già in fiore. 🌻",
        "Quasi perfetto! Api, farfalle e coleotteri ti applaudono con le ali. 🐞",
        "Complimenti! Sei praticamente il paladino degli impollinatori urbani! 🐝🌷",
        "Sei un vero esperto! Gli impollinatori ti eleggono re della biodiversità! 👑🐝"
    ];

    const percentage = (score / questions.length) * 100;
    const index = Math.min(Math.floor(score), 9); // Calcola l'indice da 0 a 9 in base al punteggio

    gameDiv.innerHTML = `
        <h2>${percentage.toFixed(0)}% - ${scoreMessages[index]}</h2>
        <p>Hai totalizzato <strong>${score}</strong> punti su ${questions.length}!</p>
        <button class="button" onclick="restartGame()">Gioca di nuovo</button>
    `;
    document.getElementById('progress-container').style.display = 'none';
    backgroundMusic.pause();
}


// ✅ Restart Game - Soluzione Definitiva
function restartGame() {
    score = 0;
    currentQuestionIndex = 0;

    if (backgroundMusic) {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
        backgroundMusic.play().catch(err => console.warn("Musica non può partire:", err));
    }

    // ✅ Ripristina la schermata iniziale
    const insertCoin = document.getElementById('insert-coin');
    if (insertCoin) insertCoin.style.display = 'block';

    const progressContainer = document.getElementById('progress-container');
    if (progressContainer) progressContainer.style.display = 'none';

    const progressBar = document.getElementById('progress-bar');
    if (progressBar) progressBar.style.width = '0%';

    if (startButton) {
        startButton.style.display = 'inline-block';
        startButton.onclick = startGame; // ✅ Riassegna la funzione startGame al click
		startButton.disabled = false
    }

    gameDiv.innerHTML = '';

    const continueButton = document.getElementById('continue-button');
    if (continueButton) {
        continueButton.disabled = false;
        continueButton.onclick = continueToNextQuestion;
    }

    explanationBanner.style.display = 'none';
    overlay.style.display = 'none';

    // ✅ Richiama la funzione per reinizializzare gli Event Listener
initializeEventListeners();

}

// Event Listener per il pulsante "Continua"
const continueButton = document.getElementById('continue-button');
if (continueButton) {
    continueButton.onclick = continueToNextQuestion; // Metodo più semplice e compatibile
} else {
    console.error("❌ Pulsante Continua non trovato");
}

// ✅ Reinizializza Event Listener al Caricamento della Pagina e Dopo Restart
function initializeEventListeners() {
    const startButton = document.getElementById('start-button');
    const continueButton = document.getElementById('continue-button');

    if (startButton) {
        startButton.onclick = startGame; // Reinizializza il pulsante Start
    }

    if (continueButton) {
        continueButton.onclick = continueToNextQuestion; // Reinizializza il pulsante Continua
    }
}

// ✅ Aggiungi Event Listener al Caricamento della Pagina
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
});
