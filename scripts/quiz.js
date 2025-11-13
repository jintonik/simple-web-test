const container = document.getElementById("quiz-container");
let QUESTIONS = [];

async function loadQuestions() {
    const response = await fetch("/questions.json");
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return await response.json();
}

function initQuiz() {
    loadQuestions()
        .then(questions => {
            QUESTIONS = questions;
            container.innerHTML = `
                <form id="quiz-form">
                    ${QUESTIONS.map(renderQuestion).join("")}
                </form>
            `;
        });
}

function renderQuestion(question) {
    const optionsHtml = question.options.map(opt => `
        <label class="quiz-option">
            <input
               type="${question.type === 'multiple' ? 'checkbox' : 'radio'}"
               name="q${question.id}"
               value="${opt.id}"
               ${question.type === "single" ? "required" : ""}
            >
            ${opt.text}
        </label>
    `).join("")

    return `
        <fieldset class="question" data-id="${question.id}">
            <legend><strong>${question.id}. ${question.text}</strong></legend>
            ${optionsHtml}
        </fieldset>
    `
}

document.addEventListener('DOMContentLoaded', initQuiz);

const form = document.getElementById("quiz-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const answers = Object.fromEntries(formData.entries());

    let score = 0;
    QUESTIONS.forEach(q => {
        const userAnswerId = answers[`q${q.id}`];
        const correctOption = q.options.find(opt => opt.correct);
        if (userAnswerId === correctOption?.id) {
            score++;
        }
    });

    document.getElementById("result").innerHTML = `
        <h2>Ваш результат ${score} из ${QUESTIONS.length}</>
    `;
});