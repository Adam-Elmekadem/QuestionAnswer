const questions = [
    {
        text : 'Qui est le meilleur jour du monde?',
        options: ["Messi", "Cr7"],
        correct : 1
    },
    {
        text : "Quelle est la Capita du Maroc",
        options : ["Rabat", "Paris"],
        correct : 0
    },
    {
        text : 'Quelle est la balise pour creer un paragraphe en html',
        options : ["<paragraph>", '<p>'],
        correct : 1
    },
    {
        text : "La somme de 123 + 3456 est:",
        options : ["3579", "3279"],
        correct: 0
    },
    {
        text : "calculer cette division 1709 / 12: ",
        options : ["142.41", "134.41"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    document.getElementById('play').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    showQuestions()
    alert('Game Started');
}

function showQuestions() {
    const question = questions[currentQuestionIndex] /* This expression accesses the question
     at the index currentQuestionIndex within the questions array. For example, if 
     currentQuestionIndex is 0, it accesses the first question; if it's 1, it accesses the 
     second question, and so on. */
    document.getElementById('question-title').textContent = `Question : ${currentQuestionIndex + 1}`;
    document.getElementById('question-text').textContent = question.text;
    document.getElementById('btn1').textContent = question.options[0];
    document.getElementById('btn2').textContent = question.options[1];
}

function playerChoice(choice) {
    const question = questions[currentQuestionIndex]
    if (choice === question.correct) {
        score++;
        alert('boaaaah')
    } else {
        alert("Ops, c'est faut!!!")
    }
    document.getElementById('score').textContent = score

    currentQuestionIndex++;
    if (currentQuestionIndex < (questions.length)) {
        showQuestions()
    } else {
        alert('Game Over, Your score is: ' + score)
        document.getElementById('content').style.display = 'none'
        document.getElementById('play').style.display = 'block'
    }
}
