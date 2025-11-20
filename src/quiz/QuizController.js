import { QuizState } from "./QuizState";
import { renderQuestion, renderResult } from "./QuizRenderer";

export function setupQuiz(container) {
	function render() {
		if (QuizState.isFinished) {
			renderResult(container, QuizState.getScore(), QuizState.questions.length);
		} else {
			const question = QuizState.getCurrentQuestion();
			renderQuestion(
				container,
				question,
				QuizState.userAnswers[question.id],
				QuizState.questions.length,
				QuizState.currentQuestionIndex
			);
		}
	}

	container.addEventListener("click", event => {
		if (event.target.closest("#btn-next")) {
			if (!isAnswerSelected()) {
				triggerShake(container);
				return;
			}
			QuizState.saveAnswer(getSelectedAnswer());
			QuizState.currentQuestionIndex++;
			render();
		}
		if (event.target.closest("#btn-finish")) {
			if (!isAnswerSelected()) {
				triggerShake(container);
				return;
			}
			QuizState.saveAnswer(getSelectedAnswer());
			QuizState.isFinished = true;
			render();
		}
		if (event.target.closest("#btn-restart")) {
			QuizState.init(QuizState.questions);
			render();
		}
	});

	render();
}