
let inputMax = document.querySelector('.inputMax');
let inputMin = document.querySelector('.inputMin');
const buttonIn = document.querySelector('.buttonIn');
let content = document.querySelector(".container");
let show = document.querySelector(".showContent");
let firstQuest = document.querySelector(".input-change");
let questionText = document.querySelector('#questionText');
let numberText = document.querySelector('.numberText');

function ToText(numberText) {

    let toNumber = [
        { value: 1000, str: "тысяча" },
        { value: 900, str: "девятьсот" },
        { value: 800, str: "восемьсот" },
        { value: 700, str: "семьсот" },
        { value: 600, str: "шестьсот" },
        { value: 500, str: "пятьсот" },
        { value: 400, str: "четыреста" },
        { value: 300, str: "триста" },
        { value: 200, str: "двести" },
        { value: 100, str: "сто" },
        { value: 90, str: "девяносто" },
        { value: 80, str: "восемьдесят" },
        { value: 70, str: "семьдесят" },
        { value: 60, str: "шестьдесят" },
        { value: 50, str: "пятьдесят" },
        { value: 40, str: "сорок" },
        { value: 30, str: "тридцать" },
        { value: 20, str: "двадцать" },
        { value: 19, str: "девятнадцать" },
        { value: 18, str: "восемнадцать" },
        { value: 17, str: "семнадцать" },
        { value: 16, str: "шестнадцать" },
        { value: 15, str: "пятнадцать" },
        { value: 14, str: "четырнадцать" },
        { value: 13, str: "тринадцать" },
        { value: 12, str: "двенадцать" },
        { value: 11, str: "одиннадцать" },
        { value: 10, str: "Десять" },
        { value: 9, str: "девять" },
        { value: 8, str: "восемь" },
        { value: 7, str: "семь" },
        { value: 6, str: "шесть" },
        { value: 5, str: "пять" },
        { value: 4, str: "четыре" },
        { value: 3, str: "три" },
        { value: 2, str: "два" },
        { value: 1, str: "один" }
    ];

    let result = '';
    for (let n of toNumber) {
        if (numberText >= n.value) {
            if (numberText <= 99) {
                result += n.str;
                numberText -= n.value;
                if (numberText > 0) result += ' ';
            } else {
                let t = Math.floor(numberText / n.value);

                let d = numberText % n.value;
                if (d > 0) {
                    return ' ' + n.str + ' ' + ToText(d);
                } else {
                    return ' ' + ' ' + n.str;
                }

            }
        }
    }
    return result;
}

buttonIn.onclick = function () {
    content.style.display = "block";
    firstQuest.style.display = "none";

    let maxValue = parseInt(inputMax.value);
    let minValue = parseInt(inputMin.value);
    maxValue = maxValue || 1000;
    minValue = minValue || 0;
    (maxValue > 1000) ? maxValue = 1000 : maxValue;
    (minValue < 0 ) ? minValue = 0 : minValue;
    
    document.querySelector('#btnEqual').addEventListener('click', function () {
        if (gameRun) {
            let message = [`Не угадать - ${answerNumber} было бы стыдно!`, `Ну кто загадывает ${answerNumber}?`, 'Слабо загадать сложное число?', `Загадай что-то посложнее, чем ${answerNumber}`];
            let messageWin = Math.round(Math.random() * 3);
            let answerText = message[messageWin];
            
            answerField.innerText = answerText;
            questionText.innerText = (`Это легко! Сыграем ещё?`);
            gameRun = false;

        }
    })
    
    questionText.innerText = (`Загадайте число от ${minValue} до ${maxValue}, а я его угадаю`);
    let answerNumber = Math.floor((minValue + maxValue) / 2);
    let orderNumber = 1;
    let gameRun = true;

    const orderNumberField = document.querySelector('#orderNumberField');
    const answerField = document.querySelector('#answerField');

    orderNumberField.innerText = orderNumber;
    let messageFirst = [`Ты загадал ${answerNumber}?`, `Может быть это ${answerNumber}?`, `Я понял! Ты загадал ${answerNumber}?`, `Скорее всего это ${answerNumber}`];
    let phraseFirst = Math.round(Math.random() * 3);
    let answerFirst = messageFirst[phraseFirst];

    answerField.innerText = answerFirst;
    numberText.innerText = ToText(answerNumber);

    document.querySelector('#btnRetry').addEventListener('click', function () {
        window.location.reload();
    })

    document.querySelector('#btnOver').addEventListener('click', function () {
        if (gameRun) {
            if (minValue == maxValue) {
                let messageLos = ['Ты загадал неправильное число!', 'Тут какая-то ошибка, давай заново!', 'Ну всё, я сдаюсь..', 'Не может быть такого числа', 'Кажется, ты не любишь играть честно!'];
                let phraseRandom = Math.round(Math.random() * 4);
                let answerPhrase = messageLos[phraseRandom];

                answerField.innerText = answerPhrase;
                questionText.innerText = ('Хочешь меня обмануть?');
                gameRun = false;
            } else {
                minValue = answerNumber + 1;
                answerNumber = Math.floor((minValue + maxValue) / 2);
                orderNumber++;
                orderNumberField.innerText = orderNumber;
            }
                let messageFirst = [`Ты загадал ${answerNumber}?`, `Может быть это ${answerNumber}?`, `Я понял! Ты загадал ${answerNumber}!`, `Скорее всего это ${answerNumber}!`];
                let phraseFirst = Math.round(Math.random() * 3);
                let answerFirst = messageFirst[phraseFirst];

                numberText.innerText = ToText(answerNumber);
                answerField.innerText = answerFirst;
        }
    })

    document.querySelector('#btnLess').addEventListener('click', function () {
        if (gameRun) {
            if (maxValue == minValue) {
                let messageLos = ['Ты загадал неправильное число!', 'Тут какая-то ошибка, давай заново!', 'Ну всё, я сдаюсь..', 'Не может быть такого числа', 'Кажется, ты не любишь играть честно!'];
                let phraseRandom = Math.round(Math.random() * 4);
                let answerPhrase = messageLos[phraseRandom];

                answerField.innerText = answerPhrase;
                questionText.innerText = ('У тебя всё в порядке? Хочешь меня обмануть?');
                gameRun = false;
            } else {
                maxValue = answerNumber;
                answerNumber = Math.floor((minValue + maxValue) / 2);
                orderNumber++;
                orderNumberField.innerText = orderNumber;
            }

            let messageFirst = [`Ты загадал ${answerNumber}?`, `Может быть это ${answerNumber}?`, `Я понял! Ты загадал ${answerNumber}!`, `Скорее всего это ${answerNumber}!`];
            let phraseFirst = Math.round(Math.random() * 3);
            let answerFirst = messageFirst[phraseFirst];

            numberText.innerText = ToText(answerNumber);
            answerField.innerText = answerFirst;
            
        }
    })
}
