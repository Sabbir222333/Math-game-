let score = 0;
let currentQuestion = {};
let totalQuestions = 5;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 20) + 1; // Random number between 1 and 20
    const num2 = Math.floor(Math.random() * 20) + 1;
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let questionText = `${num1} ${operator} ${num2}`;
    let correctAnswer = 0;

    switch (operator) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
        case '/':
            correctAnswer = (num1 / num2).toFixed(2); // Limit to 2 decimal places for division
            break;
    }

    currentQuestion = {
        questionText,
        correctAnswer: parseFloat(correctAnswer),
    };

    document.getElementById('question').innerText = questionText;
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById('answer').value);
    const feedback = document.getElementById('feedback');
    
    if (userAnswer === currentQuestion.correctAnswer) {
        score++;
        feedback.innerText = 'Correct!';
        feedback.style.color = 'green';
    } else {
        feedback.innerText = 'Wrong! Try again.';
        feedback.style.color = 'red';
    }

    document.getElementById('score').innerText = `Score: ${score}`;
    generateQuestion();
}

function startGame() {
    score = 0;
    document.getElementById('score').innerText = `Score: ${score}`;
    generateQuestion();
    document.getElementById('answer').value = '';
    document.getElementById('feedback').innerText = '';
}

startGame();

