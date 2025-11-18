const container = document.getElementById("quiz-container");
let QUESTIONS = [];
let CURRENT_QUESTION_INDEX = 0;
let USER_ANSWERS = {};

async function loadQuestions() {
	try {
		const url = `${import.meta.env.BASE_URL}questions.json`;
		const response = await fetch(url);
		if (!response.ok) throw new Error(`HTTP ${response.status}`);
		QUESTIONS = await response.json();
		renderCurrentQuestion();
	} catch (err) {
		container.innerHTML = `<p style="color:red">Ошибка загрузки: ${err.message}</p>`;
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
          <input type="radio" name="current-answer" value="${opt.id}"
            ${USER_ANSWERS[question.id] === opt.id ? "checked" : ""}>
          ${opt.text}
        </label>
      `).join("")}
      <div class="controls">
				<button id="btn-next" type="button" >Далее →</button>
      </div>
    </div>
  `;

	setTimeout(() => {
		container.querySelector("input")?.focus();
	}, 0);

	document.getElementById("btn-next")?.addEventListener("click", () => {
		CURRENT_QUESTION_INDEX < QUESTIONS.length - 1
			? nextQuestion()
			: finishQuiz();
	});
}

function saveCurrentAnswer() {
	const selected = document.querySelector("input[name='current-answer']:checked");
	if (selected) {
		const question = QUESTIONS[CURRENT_QUESTION_INDEX];
		USER_ANSWERS[question.id] = selected.value;
	}
}

function nextQuestion() {
	if (!isAnswerSelected()) {
		triggerShake()
		return;
	}
	saveCurrentAnswer();
	if (CURRENT_QUESTION_INDEX < QUESTIONS.length - 1) {
		CURRENT_QUESTION_INDEX++;
		renderCurrentQuestion();
	}
}

function triggerShake() {
	const card = document.querySelector(".question-card");
	card.classList.remove("shake");
	void card.offsetWidth;
	card.classList.add("shake");
}

function finishQuiz() {
	if (!isAnswerSelected()) {
		triggerShake()
		return;
	}

	saveCurrentAnswer();

	let score = 0;
	QUESTIONS.forEach(question => {
		const userAns = USER_ANSWERS[question.id];
		const correct = question.options.find(opt => opt.correct);
		if (userAns === correct?.id) score++;
	});

	container.innerHTML = `
    <div class="result">
      <h1>🎉 Тест завершён!</h1>
      <p>Ваш результат: <strong>${score} из ${QUESTIONS.length}</strong></p>
      <button id="btn-restart" type="button">Пройти снова</button>
    </div>
  `;

	document.getElementById("btn-restart")?.addEventListener("click", restartQuiz);
}

function restartQuiz() {
	CURRENT_QUESTION_INDEX = 0;
	USER_ANSWERS = {};
	renderCurrentQuestion();
}

function isAnswerSelected() {
	return document.querySelector("input[name='current-answer']:checked") != null;
}

document.addEventListener("DOMContentLoaded", loadQuestions);