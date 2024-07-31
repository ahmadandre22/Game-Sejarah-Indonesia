const playerNameInput = document.getElementById("playerName");
const startGameButton = document.getElementById("startGame");
const contentSection = document.querySelector(".content");
const playerNameDisplay = document.querySelector(".player-name");
const questionElement = document.querySelector(".question");
const optionsElement = document.querySelector(".options");
const nextButton = document.querySelector(".next-btn");
const resetButton = document.querySelector(".reset-btn");
const levelDisplay = document.querySelector(".level");
const resultDisplay = document.querySelector(".result");
const scoreDisplay = document.querySelector(".score");
const timerDisplay = document.querySelector(".timer");

let playerName = "";
let currentLevel = 0;
let totalLevels = levels.length;
let currentQuestionIndex = 0;
let correctAnswers = 0;
let score = 0;
let timer = 120; // Default time for each question (seconds)

let levelScores = []; // Array to store scores for each level

function startGame() {
    playerName = playerNameInput.value.trim();
    if (playerName) {
        playerNameDisplay.textContent = playerName;
        document.querySelector(".player-info").style.display = "none";
        contentSection.style.display = "block";
        loadLevel(currentLevel);
        levelScores = new Array(totalLevels).fill(0); // Initialize level scores
    } else {
        alert("Masukkan nama pemain!");
    }
}

function loadLevel(level) {
    levelDisplay.textContent = `Level ${level + 1}`;
    const levelQuestions = levels[level];
    if (levelQuestions) {
        currentQuestionIndex = 0;
        scoreDisplay.textContent = score;
        displayQuestion(levelQuestions[currentQuestionIndex]);
        startTimer(); // Start timer at the beginning of each level
        nextButton.style.display = "none"; // Hide "Next Level" button at the start of each level
    } else {
        showResult(); // Player wins if all levels are completed
    }
}

function displayQuestion(questionObj) {
    questionElement.textContent = questionObj.question;
    optionsElement.innerHTML = "";
    questionObj.options.forEach(option => {
        const button = document.createElement("button");
        const img = document.createElement("img");
        img.src = option.image;
        img.alt = option.text;
        button.appendChild(img);
        button.appendChild(document.createTextNode(option.text));
        button.addEventListener("click", () => checkAnswer(option.text, questionObj.answer));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        alert("Jawaban benar!");
        correctAnswers++;
        score += 10; // Add 10 points for correct answer
        scoreDisplay.textContent = score;
        levelScores[currentLevel] += 10; // Update level score
    } else {
        alert("Jawaban salah, coba lagi!");
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < levels[currentLevel].length) {
        displayQuestion(levels[currentLevel][currentQuestionIndex]);
        resetTimer(); // Reset timer for the next question
    } else {
        if (currentLevel < totalLevels - 1) {
            showNextButton();
        } else {
            showResult(); // Show final result if all questions are answered
        }
    }
}

function showNextButton() {
    nextButton.style.display = "block";
}

function nextLevel() {
    currentLevel++;
    nextButton.style.display = "none";
    loadLevel(currentLevel);
}

function showResult() {
    let levelSummary = "";
    let totalPoints = 0;
    
    for (let i = 0; i < totalLevels; i++) {
        levelSummary += `Level ${i + 1}: ${levelScores[i]} poin (${levels[i].length} soal)\n`;
        totalPoints += levelScores[i];
    }

    // Display result using alert
    alert(
        `Selamat ${playerName},\n` +
        `Anda menjawab ${correctAnswers} pertanyaan dengan benar\n` +
        `Skor akhir Anda adalah ${totalPoints}\n\n` +
        `Rekap Skor:\n` +
        `${levelSummary}\n` +
        `Terima kasih telah bermain!`
    );

    stopTimer(); // Stop timer when the game is over
    disableGameControls(); // Disable game controls when the game is over
}

function disableGameControls() {
    nextButton.style.display = "none"; // Hide "Next Level" button
    resetButton.style.display = "block"; // Show "Play Again" button
    resetButton.disabled = false; // Enable "Play Again" button
}

// Timer
let timerInterval;
function startTimer() {
    timer = 120; // Reset timer to 120 seconds
    timerDisplay.textContent = timer;
    timerInterval = setInterval(() => {
        timer--;
        timerDisplay.textContent = timer;
        if (timer <= 0) {
            clearInterval(timerInterval);
            handleTimeUp();
        }
    }, 1000);
}

function handleTimeUp() {
    alert("Waktu habis!");

    currentQuestionIndex++;
    if (currentQuestionIndex < levels[currentLevel].length) {
        displayQuestion(levels[currentLevel][currentQuestionIndex]);
        resetTimer(); // Reset timer for the next question
    } else {
        if (currentLevel < totalLevels - 1) {
            showNextButton();
        } else {
            showResult(); // Show final result if all questions are answered
        }
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    startTimer(); // Restart timer for the next question
}

function stopTimer() {
    clearInterval(timerInterval);
}

startGameButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextLevel);
resetButton.addEventListener("click", resetGame);

function resetGame() {
    // Reset all game-related variables and UI elements
    playerName = "";
    currentLevel = 0;
    currentQuestionIndex = 0;
    correctAnswers = 0;
    score = 0;
    levelScores = new Array(totalLevels).fill(0);
    
    playerNameDisplay.textContent = "";
    scoreDisplay.textContent = score;
    levelDisplay.textContent = "";
    timerDisplay.textContent = "";
    
    document.querySelector(".player-info").style.display = "block";
    contentSection.style.display = "none";
    nextButton.style.display = "none";
    resultDisplay.style.display = "none";
    playerNameInput.value = "";
    resetButton.style.display = "none"; // Hide "Play Again" button initially
    resetButton.disabled = true; // Disable "Play Again" button initially
}
