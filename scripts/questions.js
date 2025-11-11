const QUESTIONS = [
    {
        id: 1,
        text: "Какая команда заставит компьютер напечатать текст на экране?",
        type: "single",
        options: [
            { id: "a", text: "printline(\"Привет!\")", correct: false},
            { id: "b", text: "println(\"Привет!\")", correct: true},
            { id: "c", text: "print(\"Привет!\")", correct: false},
            { id: "d", text: "say(\"Привет!\")", correct: false}
        ]
    },
    {
        id: 2,
        text: "Что выведет код: println(2 + \"2\")?",
        type: "single",
        options: [
            { id: "a", text: "4", correct: false},
            { id: "b", text: "22", correct: false},
            { id: "c", text: "Ошибка", correct: true}
        ]
    },
    {
        id: 3,
        text: "Как объявить переменную в Kotlin?",
        type: "single",
        options: [
            { id: "a", text: "var x = 5", correct: false},
            { id: "b", text: "val x = 5", correct: false},
            { id: "c", text: "Оба варианта", correct: true}
        ]
    }
]