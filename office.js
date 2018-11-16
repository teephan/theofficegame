// 1. visibility toggle between screen 1 and screen 2

function toggle_visibility() {
  cycle_questions();
    const screenOne = document.getElementById('start_screen');
    const screenTwo = document.getElementById('game_screen');
    
    if (screenOne.style.display == 'block') {
        screenOne.style.display = 'block';
        screenTwo.style.display = 'none';
    }
    else {
        screenOne.style.display = 'none';
        screenTwo.style.display = 'block';
    }
};

// 2. highlight correct answer upon click

// PREVENT DEFAULT REFRESH ON SUBMIT BUTTON

const noRefresh = function(event) {
    event.preventDefault();
};

// form
const form = document.getElementById("game");
// attach event listener
form.addEventListener("submit", noRefresh, true);


// 3.  when user clicks on submit button
// highlight correct answer (label#right)

// ADDED IN JQUERY ^^^

//4. if label with id right is clicked, update span score by 1
// if label with id wrong is clicked, answer is highlighted

function check() {
    const correctInput = document.getElementsByClassName("correct");
    const wrongInput = document.getElementById("wrong");
    const submit = document.getElementById("submitButton");
    const userScore = document.getElementById("scoreUpdate");
    const options = document.getElementsByClassName('options');


submit.onclick = function() {
  if (correctInput.checked === true) {   
        let score = userScore.innerHTML;
        score++;
        userScore.innerHTML = score; // Why is this necessary?
        // QUESTION: I don't understand this. 
        // QUESTION: How to get it so if they click the button again, the score doesn't add again
    } else {
        // QUESTION: Why aren't these buttons logging as incorrect?
    }
};
};


//5. if user clicks submit or next question button and no button was clicked
// send alert that user must pick answer 

// ^^ DONE IN JQUERY


// QUIZ QUESTIONS

 const quizQuestions = [{
          question: "What office employee did Michael hit with his car?",
          choices: ["Stanley", "Angela", "Kevin" , "Meredith"],
          correct: 3
        }, {
          question: "During the Fire Drill episode, what DID NOT happen?",
          choices: ["Someone breaks into the vending machine", "Someone throwing a cat into the ceiling", "Someone hides in the utility closet" , "Someone lights firecrackers"],
          correct: 2
        }, {
          question: "Which actress do staff passionately debate over whether they can be considered 'hot'?",
          choices: ["Hilary Swank", "Anne Hathaway", "Channing Tatum", "Jennifer Garner"],
          correct: 0
        }, {
          question: "Who does Michael initially decide to fire in the 'Halloween' episode?",
          choices: ["Toby", "Kelly", "Kevin", "Creed"],
          correct: 3
        }, {
          question: "What is Michael's counterpart, who served time in jail?",
          choices: ["Michael Klump", "Prison Mike", "Date Mike", "Michael Scarn"],
          correct: 1
        },{
          question: "Who is Pam engaged to in the first two season's of the show?",
          choices: ["Ron", "Roy", "Kevin", "Jim"],
          correct: 1
        }, {
          question: "Which one of these Dundies was not given away?",
          choices: ["Hottest in the Office Award", "Redefining Beauty Award", "Longest Engagement Award", "Extreme Repulsiveness Award"],
          correct: 2
        }, {
          question: "What is the name of Jan's candle company?",
          choices: ["Passions by Jan", "Serenity by Jan", "Rejuvenate by Jan", "Immerse Yourself by Jan"],
          correct: 1
        }, {
          question: "What is Scranton's nickname (as indicated in Michael & Dwight's rap video)?",
          choices: ["The Windy City", "Lazy Scranton", "The Electric City", "The Power City"],
          correct: 2
        }, {
          question: "Who is the first person that Jim starts dating on the show?",
          choices: ["Pam", "Erin", "Katy", "Karen"],
          correct: 2
        }, {
          question: "Which branch does Jim get transferred to?",
          choices: ["Utica", "Rochester", "Stamford", "Nashua"],
          correct: 2
        }, {
          question: "What is the name of Andy Bernard's band?",
          choices: ["Scrantonicity", "Jokers and Tokers", "Here Comes Treble", "The Nard Dog"],
          correct: 2
        }, {
          question: "What is the name of Dunder Mifflin's tech support employee?",
          choices: ["Amir", "Satwinder", "Kevin", "Sadiq"],
          correct: 3
        }, {
          question: "What is Creed's position at Dunder Mifflin?",
          choices: ["Quality Assurance", "Accounting", "Sales", "Supplier Relations"],
          correct: 0
        }, {
          question: "Why did Andy punch a hole in the wall?",
          choices: ["Jim calling him Andy instead of Drew", "Jim hides Andy's phone in the ceiling", "Michael doesn't show Andy enough appreciation", "Andy is jealous of Michael and Dwight's relationship"],
          correct: 1
        }
        ];


// on click of button, update to new question
    let q = 0;
    let rb1 = 0;
    let rb2 = 0;
    let rb3 = 0;
    let rb4 = 0;

const cycle_questions = function() {
    const newQuestion = document.getElementById('nextQuestion');

    newQuestion.onclick = function() {
        if (!quizQuestions[q]) {
            toggle_lastScreen();
            return;
        }
        let currentQuestion = (quizQuestions[q].question);
        let currentRadio1 = (quizQuestions[rb1].choices[0]);
        let currentRadio2 = (quizQuestions[rb2].choices[1]);
        let currentRadio3 = (quizQuestions[rb3].choices[2]);
        let currentRadio4 = (quizQuestions[rb4].choices[3]);
        $('.question').html(currentQuestion);
        $('#r1').html(currentRadio1);
        $('#r2').html(currentRadio2);
        $('#r3').html(currentRadio3);
        $('#r4').html(currentRadio4);

        q++;
        rb1++;
        rb2++;
        rb3++;
        rb4++;

    };
};

// loop through the radio buttons and compare value with correct
// highlight correct answer on submit
// add 1 point on submit

const submit = document.getElementById("submitButton");
var i = 0; //keep track of which question we're displaying.
var numCorrect = 0; // keep track of the number of correct answers.

const update_score_green = function() {
submit.onclick = function() {
    const userScore = document.getElementById("scoreUpdate");
    const inputDataType = $('input:checked').data('id');
      console.log(inputDataType);
      console.log(quizQuestions[i].correct);
    if (inputDataType === (quizQuestions[i++].correct)) { 
        let score = userScore.innerHTML;
                  score++;
                  userScore.innerHTML = score;
          } else {
              alert("Wrong answer! Try again");
          };

     //  $("#radioid1") = (quizQuestions.correct[0]);
     //  $("#radioid2") = (quizQuestions.correct[1]);
     //  $("#radioid3") = (quizQuestions.correct[2]);
     // $("#radioid4") = (quizQuestions.correct[3]);

     // if($("input:checked").length){
     //     if($("input:checked").attr("data-id") === quizQuestions[i-3].correct){
     //         let score = userScore.innerHTML;
     //          score++;
     //          userScore.innerHTML = score;
     //     } else if ($('label').val() == '') { $('label').css('background-color', '#228B22'); 
     //    } else { $('label').css('background-color', ''); 
     //  }
     //     }
    };
  };



// when reaching the end of the array list, move to final screen
function toggle_lastScreen() {
const rowLen = quizQuestions.length;
const screenTwo = document.getElementById('game_screen');
const screenThree = document.getElementById('end_screen');


quizQuestions.map((rank, i) => {
  if (rowLen === i + 1) {
    screenThree.style.display = 'block';
    screenTwo.style.display = 'none';
    display_final_score();

  } else {
    // do nothing
  }
});
};


// GAME OVER GAME SCORE
function display_final_score() {
    document.getElementById("finalScore").innerHTML = document.getElementById("scoreUpdate").innerHTML;
};


//ERRORS:

// 1. Correct answer not highlighting when clicking submit

// after all questions cycled to 15, present end screen with score


// play again button that takes them to the homepage 