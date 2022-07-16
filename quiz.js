//Question bank
var questionBank= [
    {
        question : 'What tag is used to display a picture in a HTML page?',
        option : [' picture',' image',' img','src'],
        answer : 'img'
    },
    {
        question : 'Who is Known as the father of World Wide Web (WWW)?',
        option : ['Robert Cailliau','Tim Thompson','Charles Darwin','Tim Berners-Lee'],
        answer : 'Tim Berners-Lee'
    },
    {
        question : 'In HTML document the tags..',
        option : [' Should be written in upper case','should be written in lower case',' should be written in propercase','can be written in both uppercase or lowercase'],
        answer : 'can be written in both uppercase or lowercase'
    },
    {
        question : '  HTML web pages can be read and rendered by _____?',
        option : ['Compiler','Server','Web Browser','Interpreter'],
        answer : 'Web Browser'
    },
    {
        question : 'HTML tags are surrounded by which type of brackets.',
        option : ['Curly','Round','Squart','Angle'],
        answer : 'Angle'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();