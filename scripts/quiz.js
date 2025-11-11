function renderQuestion(question) {
    const optionsHtml = question.options.map(opt => `
        <label>
            <input
               type="${question.type === 'multiple' ? 'checkbox' : 'radio'}"
               name="q${question.id}"
               value="${opt.id}"
               ${question.type === "single" ? "required" : ""}
            >
            ${opt.text}
        </label>
    `).join("")
}