const container = document.getElementById("quiz-container");
container.innerHTML = `
    <form id="quiz-form">
        ${QUESTIONS.map(renderQuestion).join("")}
    </form>
`;

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