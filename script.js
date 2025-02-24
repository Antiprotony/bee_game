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
        image: "images/bee.png"
    },
    {
        question: "Quale tra questi animali non è un impollinatore?",
        options: [
            { text: "Farfalla Macaone", correct: false },
            { text: "Pipistrello della Tequila", correct: false },
            { text: "Tucano Tuco", correct: true }
        ],
        image: "images/butterfly.png"
    },
    {
        question: "Gli impollinatori si trovano davvero quasi ovunque! Dove non sono mai stati visti?",
        options: [
            { text: "Nel deserto", correct: false },
            { text: "Nello spazio", correct: false },
            { text: "Sulla cima dell'Everest", correct: true }
        ],
        image: "images/space.png"
    },
    {
        question: "Alcuni impollinatori possono compiere viaggi incredibili! Quanti chilometri può percorrere la farfalla monarca durante le sue migrazioni?",
        options: [
            { text: "50 km", correct: false },
            { text: "1000 km", correct: false },
            { text: "4500 km", correct: true }
        ],
        image: "images/monarca.png"
    },
    {
        question: "Quale di questi alimenti non sarebbe più disponibile se gli impollinatori sparissero?",
        options: [
            { text: "Caffè", correct: false },
            { text: "Grano", correct: true },
            { text: "Carote", correct: false }
        ],
        image: "images/cafe.png"
    },
    {
        question: "Bene! Adesso è ora di agire! Gli impollinatori stanno morendo di caldo in città, devi trovare una soluzione..",
        options: [
            { text: "Creare più zone alberate", correct: true },
            { text: "Irrigare frequentemente i giardini e aree verdi", correct: false },
            { text: "Spruzzare acqua nebulizzata nelle strade per rinfrescare l’ambiente", correct: false }
        ],
        image: "images/sole.png"
    },
    {
        question: "Ora che le temperature sono migliorate, gli impollinatori faticano comunque aprosperare in città. Come puoi rendere l’ambiente più accogliente?",
        options: [
            { text: "Tagliando il prato ogni settimana", correct: false },
            { text: "Coltivando piante aromatiche sul balcone", correct: true },
            { text: "Aumentando l'illuminazione notturna per attirare più insetti", correct: false }
        ],
        image: "images/balcone.png"
    },
    {
        question: "Alcuni impollinatori hanno iniziato ad apprezzare i cambiamenti, come potresti renderla la tua città ancora più accogliente?",
        options: [
            { text: "• Rimuovendo i cumuli di foglie secche da terra", correct: false },
            { text: "• Rimuovendo tronchi e ceppi di alberi da terra", correct: false },
            { text: "Sostituendo recinzioni metalliche con siepi", correct: true }
        ],
        image: "images/cappo.png"
    },
    {
        question: "Ora servono luoghi adatti alla nidificazione degli impollinatori, cosa pensi possa essere utile?",
        options: [
            { text: "Muretti a secco", correct: false },
            { text: "Suolo nudo", correct: false },
            { text: "Entrambe le risposte precedenti", correct: true }
        ],
        image: "images/casetta.png"
    },
    {
        question: "Per pianificare al meglio la tua città a misura di impollinatore è meglio:",
        options: [
            { text: "Creare tante aree verdi anche se piccole di dimensioni", correct: true },
            { text: "• Piantare alberi sempreverdi per mantenere il verde tutto l'anno", correct: false },
           { text: "Importare fiori particolarmente ricchi di nettare da altri paesi", correct: false }
        ],
        image: "images/mappa.png"
    }
    
    // Puoi aggiungere altre domande qui se lo desideri
];

// 2. Variables to Keep Track of Game State
let score = 0; // Variable to track the score
let currentQuestionIndex = 0; // Index of the current question

// 3. Get References to HTML Elements
const backgroundMusic = document.getElementById('background-music');
const startButton = document.getElementById('start-button');
const gameDiv = document.getElementById('game');

// 4. Function to Start the Game
function startGame() {
    // Play background music
    backgroundMusic.play();

    // Hide the Start Game button
    startButton.style.display = 'none';

    // Hide the "Insert Coin" image
    const insertCoin = document.getElementById('insert-coin');
    if (insertCoin) {
        insertCoin.style.display = 'none';
    }

    // Show the progress bar
    const progressContainer = document.getElementById('progress-container');
    if (progressContainer) {
        progressContainer.style.display = 'block';
    }

    // Reset score and current question
    score = 0;
    currentQuestionIndex = 0;

    // Show the first question
    showQuestion();
}

// 5. Function to Show the Current Question
function showQuestion() {
    const questionObj = questions[currentQuestionIndex];

    // Build the question content
    let html = `
        <img src="${questionObj.image}" alt="Image">
        <p>${questionObj.question}</p>
    `;

    // Add answer options
    questionObj.options.forEach((option, index) => {
        // Add data attribute to identify the Easter egg trigger
        let dataAttribute = '';
        if (option.text === "The creator of this wonderful game!") {
            dataAttribute = 'data-easter-egg="true"';
        }
        html += `
            <button class="button" onclick="selectOption(${index})" ${dataAttribute}>
                ${option.text}
            </button>
        `;
    });

    gameDiv.innerHTML = html;

    // Update the progress bar
    updateProgressBar();
}

// 6. Function to Handle Option Selection
function selectOption(index) {
    const questionObj = questions[currentQuestionIndex];
    const option = questionObj.options[index];
    const selectedButton = gameDiv.querySelectorAll('.button')[index];
    const isEasterEgg = selectedButton.getAttribute('data-easter-egg') === 'true';

    if (isEasterEgg) {
        // Show the Easter Egg modal
        showEasterEgg();
    }

    // Check if the answer is correct
    if (option.correct) {
        score += 10;
        appendFeedback("Correct! Score: " + score, true);
    } else {
        appendFeedback("Incorrect. Score: " + score, false);
    }

    // Disable all buttons to prevent multiple answers
    const buttons = gameDiv.querySelectorAll('.button');
    buttons.forEach(button => button.disabled = true);

    // Move to the next question after a short delay
    currentQuestionIndex++;
    setTimeout(() => {
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 2000); // 2-second delay
}

// 7. Function to Append Feedback
function appendFeedback(message, isCorrect) {
    const feedbackClass = isCorrect ? 'correct' : 'incorrect';
    gameDiv.innerHTML += `
        <p class="feedback ${feedbackClass}">${message}</p>
    `;
}

// 8. Function to Update the Progress Bar
function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = progressPercentage + '%';
}

// 9. Function to Show the Final Result
function showResults() {
    let message = '';
    let percentage = (score / (questions.length * 10)) * 100;

    if (percentage === 100) {
        message = `<h2>${percentage}% - You have achieved stable life, and your planet will flourish!</h2>`;
    } else if (percentage >= 95) {
        message = `<h2>${percentage}% - You have obtained life, but be careful, it could go extinct.</h2>`;
    } else if (percentage >= 90) {
        message = `<h2>${percentage}% - Life is on the verge of forming, but one false step and you could lose it.</h2>`;
    } else if (percentage >= 85) {
        message = `<h2>${percentage}% - Life is nearly formed, but the planet is not yet stable.</h2>`;
    } else if (percentage >= 80) {
        message = `<h2>${percentage}% - You have essential ingredients, something like a cell, but more is needed for life.</h2>`;
    } else if (percentage >= 75) {
        message = `<h2>${percentage}% - The planet is shaping up, water is warm, rocks are ready, but key components are missing.</h2>`;
    } else if (percentage >= 70) {
        message = `<h2>${percentage}% - You have water, but the atmosphere is unstable. Maybe it was the magnetic field?</h2>`;
    } else if (percentage >= 65) {
        message = `<h2>${percentage}% - Basic elements are present, same for an atmosphere and oceans, but conditions are harsh.</h2>`;
    } else if (percentage >= 60) {
        message = `<h2>${percentage}% - Volcanic activity dominates; life is unlikely.</h2>`;
    } else if (percentage >= 55) {
        message = `<h2>${percentage}% - The planet is too cold; life cannot thrive.</h2>`;
    } else if (percentage >= 50) {
        message = `<h2>${percentage}% - You were halfway there, but something went wrong.</h2>`;
    } else if (percentage >= 45) {
        message = `<h2>${percentage}% - The atmosphere is toxic, unsuitable for life.</h2>`;
    } else if (percentage >= 40) {
        message = `<h2>${percentage}% - Severe storms prevent the development of life.</h2>`;
    } else if (percentage >= 35) {
        message = `<h2>${percentage}% - Radiation levels are too high; life cannot form.</h2>`;
    } else if (percentage >= 30) {
        message = `<h2>${percentage}% - The planet lacks essential chemicals for life.</h2>`;
    } else if (percentage >= 25) {
        message = `<h2>${percentage}% - The planet is barren and lifeless.</h2>`;
    } else if (percentage >= 20) {
        message = `<h2>${percentage}% - You have a planet, but it's missing almost everything.</h2>`;
    } else if (percentage >= 15) {
        message = `<h2>${percentage}% - Just a rocky mass floating in space.</h2>`;
    } else if (percentage >= 10) {
        message = `<h2>${percentage}% - A lifeless rock with no atmosphere or water.</h2>`;
    } else if (percentage >= 5) {
        message = `<h2>${percentage}% - A failed attempt at planet formation.</h2>`;
    } else {
        message = `<h2>${percentage}% - I'm sorry, but maybe you need to start over.</h2>`;
    }

    gameDiv.innerHTML = `
        ${message}
        <p>Final Score: ${score} out of ${questions.length * 10}</p>
        <button class="button" onclick="restartGame()">Play Again</button>
    `;

    // Hide the progress bar
    const progressContainer = document.getElementById('progress-container');
    if (progressContainer) {
        progressContainer.style.display = 'none';
    }

    // Stop the background music
    backgroundMusic.pause();
}

// 10. Function to Restart the Game
function restartGame() {
    score = 0;
    currentQuestionIndex = 0;

    // Show the Start Game button
    startButton.style.display = 'inline-block';

    // Reset the progress bar
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        progressBar.style.width = '0%';
    }

    // Hide the progress bar container
    const progressContainer = document.getElementById('progress-container');
    if (progressContainer) {
        progressContainer.style.display = 'none';
    }

    // Show the "Insert Coin" image
    const insertCoin = document.getElementById('insert-coin');
    if (insertCoin) {
        insertCoin.style.display = 'block';
    }

    // Clear the game content
    if (gameDiv) {
        gameDiv.innerHTML = '';
    }

    // Stop and reset the background music
    if (backgroundMusic) {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
    }
}

// 11. Function to Show the Easter Egg Modal
function showEasterEgg() {
    const modal = document.getElementById('easterEggModal');
    modal.style.display = 'flex'; // Usa flex per centrare il contenuto
    document.body.classList.add('modal-open'); // Previene lo scroll del background
}

// 12. Function to Close the Modal
function closeModal() {
    const modal = document.getElementById('easterEggModal');
    modal.style.display = 'none';
    document.body.classList.remove('modal-open'); // Ripristina lo scroll del background
}

// 13. Event Listeners for Closing the Modal
document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', closeModal);

    // Close the modal when clicking outside of the modal content
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('easterEggModal');
        if (event.target === modal) {
            closeModal();
        }
    });
});
