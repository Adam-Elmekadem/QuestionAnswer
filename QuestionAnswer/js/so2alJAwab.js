const questions = [
    {
        text : 'Quel est le plus grand océan du monde?',
        options: ["Océan Arctique", "Océan Pacifique"],
        correct : 1
    },
    {
        text : "Qui a écrit 'Les Misérables' ?",
        options : ["Gustave Flaubert", "Victor Hugo"],
        correct : 1
    },
    {
        text : "Quelle est la langue officielle du Brésil ?",
        options : ["Portugais", "Espagnol"],
        correct : 0
    },
    {
        text : "En quelle année a eu lieu la chute du Mur de Berlin ?",
        options : ["1989", "1990"],
        correct: 0
    },
    {
        text : "Quelle est la plus grande île du monde ?",
        options : ["Groenland", "Madagascar"],
        correct: 0
    },
    {
        text : "Quelle est la langue la plus parlée au monde ?",
        options : ["Anglais", "Mandarin"],
        correct: 1
    },
    {
        text : "En quelle année l'homme a-t-il marché sur la Lune pour la première fois ?",
        options : ["1969", "1975"],
        correct: 0
    },
    {
        text : "Quel est l'élément chimique dont le symbole est Au ?",
        options : ["Aluminium", "Or"],
        correct: 1
    },
    {
        text : "Quel est le plus haut sommet du monde ?",
        options : ["Mont Everest", "K2"],
        correct: 0
    },
    {
        text : "Combien de jours y a-t-il en une année bissextile ?",
        options : ["365", "366"],
        correct: 0
    },

    
];

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById("menu").style.display = 'none';
    showQuestions()
    alert('Game Started');
}

function showQuestions() {
    const question = questions[currentQuestionIndex] /* This expression accesses the question
     at the index currentQuestionIndex within the questions array. For example, if 
     currentQuestionIndex is 0, it accesses the first question; if it's 1, it accesses the 
     second question, and so on. */
    document.getElementById('question-title').textContent = `${currentQuestionIndex + 1}.`;
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
        document.getElementById('menu').style.display = 'block'
    }
}
