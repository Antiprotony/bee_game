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
        explanation: "In Italia vivono oltre 1.000 specie di api selvatiche, molte delle quali sono fondamentali per l'impollinazione delle piante. Sebbene l’ape da miele (Apis mellifera) sia la più conosciuta, esiste una straordinaria varietà di api solitarie, come le api muratrici (Osmia), le api tagliafoglie (Megachile) e le api delle miniere (Andrena), tutte con ruoli unici negli ecosistemi.",
        image: "images/bee.png"
    },
    {
        question: "Quale tra questi animali non è un impollinatore?",
        options: [
            { text: "Farfalla Macaone", correct: false },
            { text: "Pipistrello della Tequila", correct: false },
            { text: "Tucano Tuco", correct: true }
        ],
        explanation: "Molti animali contribuiscono all'impollinazione, non solo insetti come api e farfalle. Ad esempio, la farfalla Macaone (Papilio machaon) svolge un ruolo importante trasportando il polline mentre si nutre del nettare dei fiori. Allo stesso modo, il pipistrello della Tequila (Leptonycteris yerbabuenae) è un impollinatore essenziale per piante come l’agave, da cui si ricava la tequila. Al contrario, il tucano Tuco (Ramphastos toco) non è un impollinatore. Questo uccello dai colori vivaci si nutre principalmente di frutta, semi e piccoli animali, contribuendo alla dispersione dei semi, ma non al trasferimento del polline.",
        image: "images/butterfly.png"
    },
    {
        question: "Gli impollinatori si trovano davvero quasi ovunque! Dove non sono mai stati visti?",
        options: [
            { text: "Nel deserto", correct: false },
            { text: "Nello spazio", correct: false },
            { text: "Sulla cima dell'Everest", correct: true }
        ],
        explanation: "Gli impollinatori sono presenti in quasi tutti gli ecosistemi del pianeta, adattandosi a condizioni estreme come il caldo torrido dei deserti o le temperature rigide delle regioni polari. Tuttavia, non sono mai stati osservati sulla cima dell’Everest, a circa 8.849 metri di altitudine. Nello spazio invece sono stati trasportati direttamente sulla Stazione Spaziale Internazionale per alcuni esperimenti.",
        image: "images/space.png"
    },
    {
        question: "Alcuni impollinatori possono compiere viaggi incredibili! Quanti chilometri può percorrere la farfalla monarca durante le sue migrazioni?",
        options: [
            { text: "50 km", correct: false },
            { text: "1000 km", correct: false },
            { text: "4500 km", correct: true }
        ],
        explanation: "La farfalla monarca (Danaus plexippus) è famosa per le sue straordinarie migrazioni, che possono coprire fino a 4.500 chilometri. Ogni anno, milioni di esemplari viaggiano dal Canada e dagli Stati Uniti fino alle foreste montuose del Messico, dove trascorrono l’inverno. Questo fenomeno unico non solo dimostra l’impressionante resistenza e capacità di orientamento di questi insetti, ma sottolinea anche l’importanza della conservazione degli habitat lungo le rotte migratorie.",
        image: "images/monarca.png"
    },
    {
        question: "Quale di questi alimenti non sarebbe più disponibile se gli impollinatori sparissero?",
        options: [
            { text: "Caffè", correct: true },
            { text: "Grano", correct: false },
            { text: "Segale", correct: false }
        ],
        explanation: "Se gli impollinatori sparissero, il grano continuerebbe a essere disponibile, perché si tratta di una pianta che si riproduce tramite impollinazione anemofila (cioè attraverso il vento) e non dipende dagli insetti. Tuttavia, altre colture essenziali come il caffè subirebbero un drammatico declino. L'assenza di impollinatori, porterebbe ad un crollo della produzione agricola, causando non solo una carenza di cibo, ma anche gravi squilibri negli ecosistemi e nell'economia globale.",
        image: "images/frutta.png"
    },
    {
        question: "Bene! Adesso è ora di agire! Gli impollinatori stanno morendo di caldo in città, devi trovare una soluzione..",
        options: [
            { text: "Creare più zone alberate", correct: true },
            { text: "Irrigare frequentemente i giardini e aree verdi", correct: false },
            { text: "Spruzzare acqua nebulizzata nelle strade per rinfrescare l’ambiente", correct: false }
        ],
        explanation: "La soluzione migliore per aiutare gli impollinatori a sopravvivere al caldo in città è creare più zone alberate. Le aree verdi forniscono ombra, abbassano la temperatura dell’ambiente circostante e creano microclimi più freschi e umidi, essenziali per insetti come api, farfalle e bombi. Inoltre, gli alberi e le piante non solo offrono rifugio e protezione dal sole, ma sono anche fonti di nettare e polline, fondamentali per l’alimentazione degli impollinatori.",
        image: "images/sole.png"
    },
    {
        question: "Ora che le temperature sono migliorate, gli impollinatori faticano comunque a prosperare in città. Come puoi rendere l’ambiente più accogliente?",
        options: [
            { text: "Tagliando il prato ogni settimana", correct: false },
            { text: "Coltivando piante aromatiche sul balcone", correct: true },
            { text: "Aumentando l'illuminazione notturna per attirare più insetti", correct: false }
        ],
        explanation: "La soluzione più efficace per aiutare gli impollinatori in città è coltivare piante aromatiche sul balcone. Piante come lavanda, rosmarino, timo, salvia e basilico non solo arricchiscono l’ambiente urbano con i loro profumi, ma forniscono anche nettare e polline, fondamentali per la sopravvivenza di api, farfalle e altri insetti impollinatori. Queste piante sono facili da coltivare, richiedono poca manutenzione e possono prosperare anche in spazi ridotti, rendendo ogni balcone o terrazzo un piccolo rifugio verde.",
        image: "images/balcone.png"
    },
    {
        question: "Alcuni impollinatori hanno iniziato ad apprezzare i cambiamenti, come potresti renderla la tua città ancora più accogliente?",
        options: [
            { text: "Rimuovendo i cumuli di foglie secche da terra", correct: false },
            { text: "Rimuovendo tronchi e ceppi di alberi da terra", correct: false },
            { text: "Sostituendo recinzioni metalliche con siepi", correct: true }
        ],
        explanation: "La scelta migliore per rendere la città più accogliente per gli impollinatori è sostituire le recinzioni metalliche con siepi. Le siepi offrono numerosi vantaggi ecologici: forniscono rifugi sicuri, protezione dai predatori, luoghi per la nidificazione e fonti di cibo grazie ai fiori e alle bacche che producono. Specie vegetali come il biancospino, il ligustro, la rosa canina e il prugnolo sono particolarmente apprezzate dagli insetti impollinatori, oltre a supportare uccelli e piccoli mammiferi.",
        image: "images/cappo.png"
    },
    {
        question: "Ora servono luoghi adatti alla nidificazione degli impollinatori, cosa pensi possa essere utile?",
        options: [
            { text: "Muretti a secco", correct: false },
            { text: "Suolo nudo", correct: false },
            { text: "Entrambe le risposte precedenti", correct: true }
        ],
        explanation: "Sia i muretti a secco che il suolo nudo sono elementi fondamentali per la nidificazione degli impollinatori, in particolare delle api solitarie. I muretti a secco, realizzati senza malta, hanno fessure e interstizi ideali per ospitare insetti come api muratrici, vespe solitarie e altri impollinatori. Il suolo nudo, invece, è essenziale perché molte api solitarie nidificano scavando tunnel nel terreno. La presenza di suolo non coperto da erba o cemento permette loro di deporre le uova, mentre i terreni sabbiosi e ben drenati risultano particolarmente adatti.",
        image: "images/casetta.png"
    },
    {
        question: "Per pianificare al meglio la tua città a misura di impollinatore è meglio:",
        options: [
            { text: "Creare tante aree verdi anche se piccole di dimensioni", correct: true },
            { text: "Piantare alberi sempreverdi per mantenere il verde tutto l'anno", correct: false },
           { text: "Importare fiori particolarmente ricchi di nettare da altri paesi", correct: false }
        ],
        explanation: "Gli impollinatori, come api, farfalle e coleotteri, hanno bisogno di spazi naturali distribuiti su tutto il territorio per nutrirsi, riprodursi e spostarsi. Anche piccoli giardini, balconi fioriti, aiuole o tetti verdi possono diventare rifugi vitali, creando una rete ecologica che collega gli habitat urbani. Questo approccio è noto come corridoi ecologici e consente agli insetti di superare le barriere artificiali delle città, come strade e edifici.",
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
    gameDiv.innerHTML += `<p class="feedback ${isCorrect ? 'corretto' : 'incorretto'}">${message}</p>`;
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
