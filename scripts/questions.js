const QUESTIONS = [
                      {
                          "id": 1,
                          "text": "Какая команда заставит компьютер напечатать текст на экране?",
                          "type": "single",
                          "options": [
                              { "id": "a", "text": "printline(\"Привет!\")", "correct": false },
                              { "id": "b", "text": "println(\"Привет!\")", "correct": true },
                              { "id": "c", "text": "print(\"Привет!\")", "correct": false },
                              { "id": "d", "text": "say(\"Привет!\")", "correct": false }
                          ]
                      },
                      {
                          "id": 2,
                          "text": "Что выведет эта программа?\n```kotlin\nprintln(3 + 5)\n```",
                          "type": "single",
                          "options": [
                              { "id": "a", "text": "3 + 5", "correct": false },
                              { "id": "b", "text": "35", "correct": false },
                              { "id": "c", "text": "8", "correct": true },
                              { "id": "d", "text": "Ошибка", "correct": false }
                          ]
                      },
                      {
                          "id": 3,
                          "text": "Как правильно создать «коробочку» с именем и положить туда число 10?",
                          "type": "single",
                          "options": [
                              { "id": "a", "text": "val возраст = \"10\"", "correct": false },
                              { "id": "b", "text": "var возраст: 10", "correct": false },
                              { "id": "c", "text": "val возраст = 10", "correct": true },
                              { "id": "d", "text": "age = 10", "correct": false }
                          ]
                      },
                      {
                          "id": 4,
                          "text": "Что напечатает эта программа?\n```kotlin\nval имя = \"Луна\"\nprintln(\"Привет, $имя!\")\n```",
                          "type": "single",
                          "options": [
                              { "id": "a", "text": "Привет, имя!", "correct": false },
                              { "id": "b", "text": "Привет, \"Луна\"!", "correct": false },
                              { "id": "c", "text": "Привет, Луна!", "correct": true },
                              { "id": "d", "text": "Ошибка", "correct": false }
                          ]
                      },
                      {
                          "id": 5,
                          "text": "Какой тип данных используется для «да» или «нет»?",
                          "type": "single",
                          "options": [
                              { "id": "a", "text": "String", "correct": false },
                              { "id": "b", "text": "Number", "correct": false },
                              { "id": "c", "text": "YesNo", "correct": false },
                              { "id": "d", "text": "Boolean", "correct": true }
                          ]
                      },
                      {
                          "id": 6,
                          "text": "Что будет, если попытаться изменить `val`?\n```kotlin\nval имя = \"Марк\"\nимя = \"Алиса\"\n```",
                          "type": "single",
                          "options": [
                              { "id": "a", "text": "Имя изменится на «Алиса»", "correct": false },
                              { "id": "b", "text": "Компьютер напечатает «Алиса»", "correct": false },
                              { "id": "c", "text": "Ошибка: «Val cannot be reassigned»", "correct": true },
                              { "id": "d", "text": "Программа зависнет", "correct": false }
                          ]
                      },
                      {
                          "id": 7,
                          "text": "Как сложить текст и число в одном `println`?",
                          "type": "single",
                          "options": [
                              { "id": "a", "text": "println(Мне + 10 + лет)", "correct": false },
                              { "id": "b", "text": "println(\"Мне \" + 10 + \" лет!\")", "correct": true },
                              { "id": "c", "text": "println(\"Мне\", 10, \"лет!\")", "correct": false },
                              { "id": "d", "text": "println(Мне 10 лет!)", "correct": false }
                          ]
                      },
                      {
                          "id": 8,
                          "text": "Какой эмодзи точно можно использовать в Kotlin?",
                          "type": "single",
                          "options": [
                              { "id": "a", "text": "Только 😊", "correct": false },
                              { "id": "b", "text": "Только цифры и буквы", "correct": false },
                              { "id": "c", "text": "Любые эмодзи — они как буквы!", "correct": true },
                              { "id": "d", "text": "Только 🐱 и 🍕", "correct": false }
                          ]
                      },
                      {
                          "id": 9,
                          "text": "Что такое `var`?",
                          "type": "single",
                          "options": [
                              { "id": "a", "text": "Команда для вывода", "correct": false },
                              { "id": "b", "text": "Коробочка, в которую можно менять содержимое", "correct": true },
                              { "id": "c", "text": "Ошибка", "correct": false },
                              { "id": "d", "text": "Тип данных для картинок", "correct": false }
                          ]
                      },
                      {
                          "id": 10,
                          "text": "Какая программа напечатает «Мне 10 лет»?",
                          "type": "single",
                          "options": [
                              { "id": "a", "text": "println(\"Мне \" + \"10\" + \" лет\")", "correct": true },
                              { "id": "b", "text": "println(\"Мне \" + 10 + \" лет\")", "correct": true },
                              { "id": "c", "text": "println(Мне 10 лет)", "correct": false },
                              { "id": "d", "text": "printline(\"Мне 10 лет\")", "correct": false }
                          ]
                      }
                  ]