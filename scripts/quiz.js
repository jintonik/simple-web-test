const container = document.getElementById("quiz-container");
let QUESTIONS = [];
let CURRENT_QUESTION_INDEX = 0;
let USER_ANSWERS = {};

async function loadQuestions() {
    const response = await fetch("/questions.json");
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    QUESTIONS = await response.json();
    renderCurrentQuestion();
}

function nextQuestion() {
    saveCurrentAnswer()
    if (CURRENT_QUESTION_INDEX < QUESTIONS.length - 1) {
        CURRENT_QUESTION_INDEX++;
        renderCurrentQuestion();
    }
}

function renderCurrentQuestion() {
    const question = QUESTIONS[CURRENT_QUESTION_INDEX];

    container.innerHTML = `
        <div class="question-card">
            <h2>Вопрос ${CURRENT_QUESTION_INDEX + 1} из ${QUESTIONS.length}</h2>
            <p><strong>${question.text}</strong></p>

            ${question.options.map(opt => `
                <label class="option">
                    <input
                        type="radio"
                        name="current-answer"
                        value="${opt.id}"
                        ${USER_ANSWERS[question.id] === opt.id ? "checked" : ""}
                    >
                    ${opt.text}
                </label>
            `).join("")}

            <div class="controls">
                ${CURRENT_QUESTION_INDEX > 0
                    ? `<button type="button" onClick="prevQuestion()">← Назад</button>`
                    : `<button disabled></button>`}
                ${CURRENT_QUESTION_INDEX < QUESTIONS.length - 1
                    ? `<button type="button" onClick="nextQuestion()">Далее →</button>`
                    : `<button type="button" onClick="finishQuiz()">Завершить тест</button>`}
            </div>
        </div>
    `;
    container.querySelector("input").focus();
}

function saveCurrentAnswer() {
    const selected = document.querySelector("input[name='current-answer']:checked");
    if (selected) {
        const question = QUESTIONS[CURRENT_QUESTION_INDEX];
        USER_ANSWERS[question.id] = selected.value;
    }
}

function prevQuestion() {
    CURRENT_QUESTION_INDEX--;
    renderCurrentQuestion()
}

function finishQuiz() {
    saveCurrentAnswer();

    let score = 0;
    QUESTIONS.forEach(question => {
        const userAns = USER_ANSWERS[question.id];
        const correct = question.options.find(opt => opt.correctOption);
        if (userAns === correct?.id) {
            score++;
        }
    });

    document.getElementById("quiz-container").innerHTML = `
        <div class="result">
            <h1>Тест завершен!</h1>
            <p>Ваш результат: <strong>${score} из ${QUESTIONS.length}</strong></p>
            <button onClick="restartQuiz()">Пройти снова</button>
        </div>
    `;
}

function restartQuiz() {
    CURRENT_QUESTION_INDEX = 0;
    USER_ANSWERS = {};
    renderCurrentQuestion();
}

document.addEventListener('DOMContentLoaded', loadQuestions);