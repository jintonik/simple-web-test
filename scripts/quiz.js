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