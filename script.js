// When user clicks the start button, then a timer starts and user is presented with a question

    // Declare global variables 
    var startBtn = document.getElementById("startBtn");
    var time = 75;
    var time_remaining = true;
    var time_start= false;
    var countdownTimer = document.getElementById("countdownTimer");
    var homeContainer =  document.getElementById("homeContainer");
    var quizContainer = document.getElementById("quizContainer");
    var questionHeading = document.getElementById("questionHeading");
    var answerChoiceA = document.getElementById("answerChoiceA");
    var answerChoiceB = document.getElementById("answerChoiceB");
    var answerChoiceC = document.getElementById("answerChoiceC");
    var answerChoiceD = document.getElementById("answerChoiceD");
    var correctAnswer = document.getElementById("correctAnswer");    
    var high_scores= [];
    var output="";
    // Set score = 0 at the start of the game 
    var score = 0;
    // question index
    let i = 0;

// JS questions
var questionsArray = [
    {
        question: "Question: What is the HTML tag under which you can link your JavaScript page?",
        imageSrc: "",
        answerChoice: ["A) <console.log>", "B) <function>", "C) <js>", "D) <script>"],
        correctAnswer: 3
    },
    {
        question: "Question: What is JavaScript?",
        imageSrc: "",
        answerChoice: ["A) A play", "B) a popular web scripting language thats used for client side and server side development", "C) A basic html page", "D) A styling sheet"],
        correctAnswer: 0
    },
    {
        question: "Question: What are some key features of JavaScript?",
        imageSrc: "",
        answerChoice: ["A) Dynamically-typed", "B) plain text language ", "C) html tags ", "D) css properties"],
        correctAnswer: 0
    },
    {
        question: "Question: How do you add comments to JavaScript code?",
        imageSrc: "",
        answerChoice: ["A) one forward slash symbol", "B) three forward slash symbols", "C) two forward slash symbols", "D) No slashes"],
        correctAnswer: 2
    },
    {
        question: "Question: What is a string in JavaScript?",
        answerChoice: ["A) true or false values", "B) strictly integers", "C) stricly letters", "D) represents text, denoted by single, double quotes or backticks"],
        correctAnswer: 4
    }];
    
//Countdown timer function
var countdownTimerInterval = setInterval(setCountdownTimer, 1000);

//if then statements for timer being less than or equal to 0 or if timer is equal to 0
function setCountdownTimer() {
        if (time_start)
        time--;
        if(time<= 0) {
        end_quiz();
        time = 0;    
        // clear time interval, alert user and end quiz
        }
        document.getElementById("timer").innerHTML = time;
    }

// Event Listener: When user clicks Start button, start the countdown timer and quiz questions. Event listener added to each button.
startBtn.addEventListener("click", function() {
    quizContainer.style.display = "block";
    homeContainer.style.display ="none";
    countdownTimer.style.display= "block";
    document.getElementById("score_keeper").style.display= "block";
    document.getElementById("score").innerHTML = score;
    setCountdownTimer();
    setQuizQuestions();
    time_start= true;
});

// Function to questions and multiple-choice answers
function setQuizQuestions() {
    questionHeading.textContent = questionsArray[i].question;
    answerChoiceA.textContent = questionsArray[i].answerChoice[0];
    answerChoiceB.textContent = questionsArray[i].answerChoice[1];
    answerChoiceC.textContent = questionsArray[i].answerChoice[2];
    answerChoiceD.textContent = questionsArray[i].answerChoice[3];
    };
