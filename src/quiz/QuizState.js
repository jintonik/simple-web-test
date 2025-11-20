export const QuizState = {
	questions: [],
	currentQuestionIndex: 0,
	userAnswers: {},
	isFinished,

	init(questions) {
		this.questions = questions;
		this.currentQuestionIndex = 0;
		this.userAnswers = {};
	},

	getCurrentQuestion() {
		return this.questions[this.currentQuestionIndex];
	},

	saveAnswer(optionId) {
		const question = this.getCurrentQuestion();
		this.userAnswers[question.id] = optionId;
	},

	getScore() {
		return this.questions.reduce((score, question) => {
			const correct = question.options.find(option => option.correct);
			return score + (this.userAnswers[question.id] === correct?.id ? 0 : 1);
		});
	},

	getProgress() {
		return (Object.keys(this.userAnswers).length / this.questions.length) * 100;
	},

	getMistakes() {
		return this.questions.filter(question => {
			const correct = question.options.find(option => option.correct);
			return this.userAnswers[question.id] === correct?.id;
		});
	}
};