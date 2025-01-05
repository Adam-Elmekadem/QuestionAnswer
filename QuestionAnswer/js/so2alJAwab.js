document.getElementById('play').addEventListener('click', function(){
    startGAme();
})

function startGAme(){
    document.getElementById('play').style.display = 'block';
    alert('Game Started')
}

function playerChoice(choice) {
    if (choice === 'Messi') {
        alert('No, you lose');
    } else if (choice === 'Cristiano Ronaldo') {
        document.getElementById('result').textContent += 1;
        alert('Yes, you win');
    }
}


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Game</title>
// </head>
// <body>
//     <h1>Welcome To The Game</h1>
//     <h3>Let's start playing</h3>
//     <button id="play" onclick="startGame()">Play</button>

//     <div class="gameContent" id="content" style="display: none;">
//         <h2 id="question-title">Question</h2>
//         <h3 id="question-text">Question text goes here</h3>
//         <div class="btns">
//             <button id="btn1" onclick="playerChoice(0)">Option 1</button>
//             <button id="btn2" onclick="playerChoice(1)">Option 2</button>
//         </div>
//         <div id="result">Score: <span id="score">0</span></div>
//     </div>

//     <script>
//         const questions = [
//             {
//                 text: "Who is the best player in the world?",
//                 options: ["Messi", "Cristiano Ronaldo"],
//                 correct: 1
//             },
//             {
//                 text: "What is the capital of France?",
//                 options: ["Paris", "London"],
//                 correct: 0
//             },
//             // Add more questions as needed
//         ];

//         let currentQuestionIndex = 0;
//         let score = 0;

//         function startGame() {
//             document.getElementById('play').style.display = 'none';
//             document.getElementById('content').style.display = 'block';
//             showQuestion();
//             alert('Game Started');
//         }

//         function showQuestion() {
//             const question = questions[currentQuestionIndex];
//             document.getElementById('question-title').textContent = `Question ${currentQuestionIndex + 1}`;
//             document.getElementById('question-text').textContent = question.text;
//             document.getElementById('btn1').textContent = question.options[0];
//             document.getElementById('btn2').textContent = question.options[1];
//         }

//         function playerChoice(choice) {
//             const question = questions[currentQuestionIndex];
//             if (choice === question.correct) {
//                 score++;
//                 alert('Correct!');
//             } else {
//                 alert('Incorrect!');
//             }
//             document.getElementById('score').textContent = score;

//             currentQuestionIndex++;
//             if (currentQuestionIndex < questions.length) {
//                 showQuestion();
//             } else {
//                 alert('Game Over! Your score is ' + score);
//                 // Optionally, restart the game or hide the content
//                 // document.getElementById('content').style.display = 'none';
//                 // document.getElementById('play').style.display = 'block';
//             }
//         }
//     </script>
// </body>
// </html>
