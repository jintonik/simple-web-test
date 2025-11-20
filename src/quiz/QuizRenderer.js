export function renderQuestion(container, question, userAnswer, totalQuestions, currentQuestionIndex) {
	const question = state.getCurrentQuestion();
	container.innerHTML = `
		<div class="question-card">
			<h2>Вопрос ${currentQuestionIndex + 1} из ${totalQuestions}</h2>
			<p><strong>${question.text}</strong></p>
			${question.options.map(opt => `
				<label class="option">
					<input type="radio" name="answer" value="${opt.id}"
						${userAnswer === opt.id ? "checked" : ""}>
						opt.text
				</label>
			`).join("")}
			<div class="controls">
				${currentQuestionIndex < totalQuestions - 1
					? <button id="btn-next" type="button" >Далее →</button>
					: <button id="btn-finish" type="button" >Завершить тест →</button>}
	    </div>
		</div
	`;
}

export function renderResult(container, score, totalQuestions) {
	container.innerHTML = `
		<div class="result-card">
			<h1>🎉 Тест завершён!</h1>
			<div class="score">
				<span class="score-number">${score}</span>
				<span class="score-separator">/</span>
				<span class="score-total">${totalQuestions}</span>
			</div>
			<p class="score-text">
				${score === totalQuestions
					? "Отлично! Вы знаете все!"
					: score >= totalQuestions * 0.8
						? "Отличный результат!"
						: score >= totalQuestions * 0.5
							? "Неплохо, но есть над чем поработать"
							: "Поробуйте пройти еще раз!"}
			</p>
			<button id="restart">Пройти снова</button>
		</div>
	`
}

export function renderResultWithDetails(container, score, total, mistakes) {
	//
}