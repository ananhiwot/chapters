/*********************************************************************
 Ethiopian Curriculum Organizer
 app.js
 PART 1
*********************************************************************/


//==================================================
// GLOBAL VARIABLES
//==================================================

let currentSubject = "mathematics";

let score = 0;
let correct = 0;
let wrong = 0;

let totalCards = 0;

let seconds = 0;

let timerInterval = null;

let draggedCard = null;

let hintCount = 0;

let placedCards = [];


//==================================================
// DOM REFERENCES
//==================================================

const chapterPool =
document.getElementById("chapterPool");

const gradeBoxes =
document.querySelectorAll(".gradeBox");

const subjectButtons =
document.querySelectorAll(".subject");

const scoreLabel =
document.getElementById("score");

const correctLabel =
document.getElementById("correct");

const wrongLabel =
document.getElementById("wrong");

const accuracyLabel =
document.getElementById("accuracy");

const timerLabel =
document.getElementById("timer");

const progressInner =
document.getElementById("progressInner");

const progressText =
document.getElementById("progressText");

const notification =
document.getElementById("notification");

const shuffleButton =
document.getElementById("shuffleBtn");

const hintButton =
document.getElementById("hintBtn");

const resetButton =
document.getElementById("resetBtn");

const checkButton =
document.getElementById("checkBtn");

const celebration =
document.getElementById("celebration");

const nextSubject =
document.getElementById("nextSubject");



//==================================================
// INITIALIZATION
//==================================================

window.onload = function(){

    initialize();

};



//==================================================
// INITIALIZE
//==================================================

function initialize(){

    attachSubjectEvents();

    attachButtonEvents();

    startTimer();

    loadSubject(currentSubject);

}



//==================================================
// TIMER
//==================================================

function startTimer(){

    clearInterval(timerInterval);

    seconds = 0;

    timerInterval = setInterval(function(){

        seconds++;

        updateTimer();

    },1000);

}



function updateTimer(){

    const minutes =
    Math.floor(seconds/60);

    const sec =
    seconds%60;

    timerLabel.innerHTML =
        pad(minutes)+":"+pad(sec);

}



function pad(value){

    if(value<10){

        return "0"+value;

    }

    return value;

}



//==================================================
// SUBJECT BUTTONS
//==================================================

function attachSubjectEvents(){

    subjectButtons.forEach(function(button){

        button.addEventListener("click",function(){

            subjectButtons.forEach(function(btn){

                btn.classList.remove("active");

            });

            button.classList.add("active");

            currentSubject =
            button.dataset.subject;

            resetStatistics();

            startTimer();

            loadSubject(currentSubject);

        });

    });

}



//==================================================
// CONTROL BUTTONS
//==================================================

function attachButtonEvents(){

    shuffleButton.onclick =
    shuffleCurrentSubject;

    hintButton.onclick =
    giveHint;

    resetButton.onclick =
    resetGame;

    checkButton.onclick =
    checkAllAnswers;

}



//==================================================
// DASHBOARD
//==================================================

function updateDashboard(){

    scoreLabel.innerHTML = score;

    correctLabel.innerHTML = correct;

    wrongLabel.innerHTML = wrong;

    let accuracy = 100;

    if(correct+wrong>0){

        accuracy =
        Math.round(
            (correct/(correct+wrong))*100
        );

    }

    accuracyLabel.innerHTML =
    accuracy+"%";

    let progress = 0;

    if(totalCards>0){

        progress =
        Math.round(
            (correct/totalCards)*100
        );

    }

    progressInner.style.width =
    progress+"%";

    progressText.innerHTML =
    progress+"%";

}



//==================================================
// RESET STATS
//==================================================

function resetStatistics(){

    score = 0;

    correct = 0;

    wrong = 0;

    hintCount = 0;

    placedCards = [];

    updateDashboard();

}



//==================================================
// NOTIFICATION
//==================================================

function showNotification(message,type="info"){

    notification.innerHTML = message;

    notification.className="";

    notification.classList.add(type);

    notification.style.opacity="1";

    setTimeout(function(){

        notification.style.opacity="0";

    },2200);

}



//==================================================
// RANDOMIZE
//==================================================

function shuffleArray(array){

    for(let i=array.length-1;i>0;i--){

        const j=Math.floor(Math.random()*(i+1));

        [array[i],array[j]]=
        [array[j],array[i]];

    }

    return array;

}



//==================================================
// LOAD SUBJECT
//==================================================

function loadSubject(subject){

    clearBoard();

    if(typeof SUBJECTS==="undefined"){

        showNotification(
            "Waiting for data.js",
            "error"
        );

        return;

    }

    if(!SUBJECTS[subject]){

        showNotification(
            "Subject not found.",
            "error"
        );

        return;

    }

    buildChapterCards(subject);

    updateDashboard();

    showNotification(
        subject.toUpperCase()+" loaded.",
        "success"
    );

}



//==================================================
// CLEAR BOARD
//==================================================

function clearBoard(){

    chapterPool.innerHTML="";

    gradeBoxes.forEach(function(box){

        const zone =
        box.querySelector(".dropZone");

        zone.innerHTML="";

    });

}



//==================================================
// GET ALL CHAPTERS
//==================================================

function collectSubjectChapters(subject){

    let chapters=[];

    const grades=
    SUBJECTS[subject];

    Object.keys(grades).forEach(function(grade){

        grades[grade].forEach(function(chapter){

            chapters.push({

                grade:grade,

                title:chapter

            });

        });

    });

    return shuffleArray(chapters);

}



//==================================================
// BUILD CARDS
//==================================================

function buildChapterCards(subject){

    const chapters =
    collectSubjectChapters(subject);

    totalCards =
    chapters.length;

    chapters.forEach(function(item){

        const card =
        document.createElement("div");

        card.className="chapterCard";

        card.draggable=true;

        card.innerHTML=item.title;

        card.dataset.grade=item.grade;

        card.dataset.title=item.title;

        addDragEvents(card);

        chapterPool.appendChild(card);

    });

}



//==================================================
// PLACEHOLDER FUNCTIONS
// (Completed in Part 2)
//==================================================

function addDragEvents(card){}

function shuffleCurrentSubject(){}

function giveHint(){}

function resetGame(){}

function checkAllAnswers(){}

function saveProgress(){}

function loadProgress(){}

function celebrate(){}

function askAI(){}



/*********************************************************************
 END OF PART 1
*********************************************************************/



/*********************************************************************
 APP.JS
 PART 2
 DRAG & DROP GAME ENGINE
*********************************************************************/


//==================================================
// ENABLE DROP ZONES
//==================================================

gradeBoxes.forEach(function(box){

    const zone =
    box.querySelector(".dropZone");

    zone.addEventListener("dragover",function(e){

        e.preventDefault();

        zone.classList.add("dragHover");

    });

    zone.addEventListener("dragleave",function(){

        zone.classList.remove("dragHover");

    });

    zone.addEventListener("drop",function(e){

        e.preventDefault();

        zone.classList.remove("dragHover");

        handleDrop(zone);

    });

});



//==================================================
// DRAG EVENTS
//==================================================

function addDragEvents(card){

    card.addEventListener("dragstart",function(){

        draggedCard = card;

        setTimeout(function(){

            card.classList.add("dragging");

        },0);

    });

    card.addEventListener("dragend",function(){

        card.classList.remove("dragging");

    });

}



//==================================================
// HANDLE DROP
//==================================================

function handleDrop(zone){

    if(!draggedCard) return;

    const parentGrade =
    zone.parentElement.dataset.grade;

    const cardGrade =
    draggedCard.dataset.grade;

    if(parentGrade === cardGrade){

        handleCorrectDrop(
            draggedCard,
            zone
        );

    }else{

        handleWrongDrop(
            draggedCard
        );

    }

}



//==================================================
// CORRECT ANSWER
//==================================================

function handleCorrectDrop(card,zone){

    card.classList.remove("dragging");

    card.classList.add("correct");

    card.draggable = false;

    zone.appendChild(card);

    score += 10;

    correct++;

    placedCards.push(
        card.dataset.title
    );

    updateDashboard();

    showNotification(
        "✔ Correct!",
        "success"
    );

    saveProgress();

    checkCompletion();

}



//==================================================
// WRONG ANSWER
//==================================================

function handleWrongDrop(card){

    wrong++;

    score = Math.max(
        score - 2,
        0
    );

    updateDashboard();

    card.classList.add(
        "wrong"
    );

    showNotification(
        "❌ Wrong Grade",
        "error"
    );

    setTimeout(function(){

        card.classList.remove(
            "wrong"
        );

    },600);

}



//==================================================
// CHECK COMPLETION
//==================================================

function checkCompletion(){

    if(correct >= totalCards){

        celebrate();

    }

}



//==================================================
// CELEBRATION
//==================================================

function celebrate(){

    clearInterval(
        timerInterval
    );

    celebration.style.display =
    "flex";

    showNotification(
        "🎉 Subject Completed!",
        "success"
    );

}



//==================================================
// NEXT SUBJECT BUTTON
//==================================================

if(nextSubject){

nextSubject.addEventListener(
"click",
function(){

    celebration.style.display =
    "none";

    const subjects = [

        "mathematics",
        "physics",
        "chemistry",
        "biology"

    ];

    let currentIndex =
    subjects.indexOf(
        currentSubject
    );

    currentIndex++;

    if(
        currentIndex >=
        subjects.length
    ){

        currentIndex = 0;

    }

    currentSubject =
    subjects[currentIndex];

    subjectButtons.forEach(
    function(btn){

        btn.classList.remove(
            "active"
        );

        if(
            btn.dataset.subject ===
            currentSubject
        ){

            btn.classList.add(
                "active"
            );

        }

    });

    resetStatistics();

    loadSubject(
        currentSubject
    );

    startTimer();

});
}



//==================================================
// SHUFFLE
//==================================================

function shuffleCurrentSubject(){

    loadSubject(
        currentSubject
    );

    showNotification(
        "🔀 Chapters Shuffled",
        "info"
    );

}



//==================================================
// RESET GAME
//==================================================

function resetGame(){

    resetStatistics();

    clearBoard();

    loadSubject(
        currentSubject
    );

    startTimer();

    showNotification(
        "♻ Game Reset",
        "info"
    );

}



//==================================================
// HINT SYSTEM
//==================================================

function giveHint(){

    const cards =
    document.querySelectorAll(
        ".chapterCard"
    );

    let available = [];

    cards.forEach(function(card){

        if(card.draggable){

            available.push(card);

        }

    });

    if(
        available.length === 0
    ){

        return;

    }

    const card =
    available[
        Math.floor(
            Math.random() *
            available.length
        )
    ];

    hintCount++;

    card.classList.add(
        "hintCard"
    );

    showNotification(

        "💡 Hint: " +
        card.dataset.title +
        " belongs to Grade " +
        card.dataset.grade,

        "info"

    );

    setTimeout(function(){

        card.classList.remove(
            "hintCard"
        );

    },4000);

}



//==================================================
// CHECK ALL ANSWERS
//==================================================

function checkAllAnswers(){

    const placed =
    document.querySelectorAll(
        ".dropZone .chapterCard"
    );

    if(
        placed.length ===
        totalCards
    ){

        celebrate();

    }
    else{

        showNotification(

            "Not all chapters have been organized yet.",

            "info"

        );

    }

}



//==================================================
// SAVE PROGRESS
//==================================================

function saveProgress(){

    const saveData = {

        subject:
        currentSubject,

        score:
        score,

        correct:
        correct,

        wrong:
        wrong,

        timer:
        seconds

    };

    localStorage.setItem(

        "curriculumGame",

        JSON.stringify(
            saveData
        )

    );

}



//==================================================
// LOAD PROGRESS
//==================================================

function loadProgress(){

    const saved =
    localStorage.getItem(
        "curriculumGame"
    );

    if(!saved){

        return;

    }

    try{

        const data =
        JSON.parse(saved);

        score =
        data.score || 0;

        correct =
        data.correct || 0;

        wrong =
        data.wrong || 0;

        seconds =
        data.timer || 0;

        updateDashboard();

    }
    catch(error){

        console.log(
            error
        );

    }

}



/*********************************************************************
 END OF PART 2
*********************************************************************/



/*********************************************************************
 APP.JS
 PART 3
 AI COPILOT
 SEARCH
 CONFETTI
*********************************************************************/


//==================================================
// AI REFERENCES
//==================================================

const askButton =
document.getElementById("askAI");

const userQuestion =
document.getElementById("userQuestion");

const chatWindow =
document.getElementById("chatWindow");



if(askButton){

    askButton.addEventListener(
        "click",
        askAI
    );

}

if(userQuestion){

    userQuestion.addEventListener(
        "keydown",
        function(e){

            if(e.key==="Enter" && !e.shiftKey){

                e.preventDefault();

                askAI();

            }

        }
    );

}



//==================================================
// SIMPLE KNOWLEDGE BASE
//==================================================

const KNOWLEDGE = {

thermodynamics:
"Thermodynamics studies heat, work, temperature and energy transfer.",

magnetism:
"Magnetism is the force produced by magnets and moving electric charges.",

electrostatics:
"Electrostatics is the study of stationary electric charges.",

vectors:
"Vectors are quantities having both magnitude and direction.",

cell:
"The cell is the basic structural and functional unit of life.",

genetics:
"Genetics studies heredity and variation among living organisms.",

stoichiometry:
"Stoichiometry is the calculation of quantities in chemical reactions.",

trigonometry:
"Trigonometry studies relationships between the sides and angles of triangles.",

probability:
"Probability measures the likelihood of an event occurring.",

kinematics:
"Kinematics describes motion without considering its causes."

};



//==================================================
// APPEND CHAT MESSAGE
//==================================================

function addChatMessage(type,text){

    const div =
    document.createElement("div");

    div.className = type;

    div.innerHTML = text;

    chatWindow.appendChild(div);

    chatWindow.scrollTop =
    chatWindow.scrollHeight;

}



//==================================================
// AI RESPONSE
//==================================================

function askAI(){

    const question =
    userQuestion.value.trim();

    if(question==="") return;

    addChatMessage(
        "user",
        question
    );

    userQuestion.value="";

    let answer =
    searchKnowledge(question);

    addChatMessage(
        "bot",
        answer
    );

}



//==================================================
// SEARCH KNOWLEDGE
//==================================================

function searchKnowledge(question){

    const q =
    question.toLowerCase();

    for(const key in KNOWLEDGE){

        if(q.includes(key)){

            return KNOWLEDGE[key];

        }

    }

    if(q.includes("quiz")){

        return generateQuiz();

    }

    if(q.includes("define")){

        return "Please include the chapter name you would like defined.";

    }

    if(q.includes("explain")){

        return "Please specify the chapter name to receive a detailed explanation.";

    }

    return "I couldn't find that topic in the offline knowledge base. Connect an AI API later for unlimited explanations.";

}



//==================================================
// QUIZ GENERATOR
//==================================================

function generateQuiz(){

    const quizzes=[

"1. What is a vector?\n\n2. State Newton's Second Law.\n\n3. Define Magnetism.",

"1. What is Stoichiometry?\n\n2. Define Chemical Bonding.\n\n3. Explain Electrolysis.",

"1. What is Cell Biology?\n\n2. Define Genetics.\n\n3. What is Ecology?",

"1. Define Trigonometry.\n\n2. What is Probability?\n\n3. Explain Functions."

    ];

    return quizzes[
        Math.floor(
            Math.random()*quizzes.length
        )
    ];

}



//==================================================
// CONFETTI
//==================================================

function launchConfetti(){

    for(let i=0;i<120;i++){

        const piece =
        document.createElement("div");

        piece.className="confetti";

        piece.style.left =
        Math.random()*100+"vw";

        piece.style.animationDelay =
        Math.random()*2+"s";

        piece.style.transform =
        "rotate("+
        Math.random()*360+
        "deg)";

        document.body.appendChild(piece);

        setTimeout(function(){

            piece.remove();

        },5000);

    }

}



//==================================================
// IMPROVED CELEBRATION
//==================================================

function celebrate(){

    clearInterval(timerInterval);

    launchConfetti();

    celebration.style.display="flex";

    celebration.innerHTML=`

        <h1>🎉 Congratulations!</h1>

        <h2>${currentSubject.toUpperCase()}</h2>

        <p>You organized every chapter correctly.</p>

        <p>Score : ${score}</p>

        <p>Accuracy : ${accuracyLabel.innerHTML}</p>

        <p>Time : ${timerLabel.innerHTML}</p>

        <button id="nextSubject">

            Next Subject →

        </button>

    `;

    document
    .getElementById("nextSubject")
    .onclick=function(){

        celebration.style.display="none";

        const subjects=[

            "mathematics",
            "physics",
            "chemistry",
            "biology"

        ];

        let index=
        subjects.indexOf(currentSubject);

        index++;

        if(index>=subjects.length){

            index=0;

        }

        currentSubject=
        subjects[index];

        subjectButtons.forEach(function(btn){

            btn.classList.remove("active");

            if(btn.dataset.subject===currentSubject){

                btn.classList.add("active");

            }

        });

        resetGame();

    };

}



/*********************************************************************
 END OF PART 3
*********************************************************************/