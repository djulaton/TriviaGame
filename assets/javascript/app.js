//when page loads, display page with start game button

//when the user clicks start, display form and start timer

//After user fills out form, they can click the submit button to enter their results

// When the game is submitted, display messagage on screen and show stats (correct/incorrect answers ) and display a try again button to restart the game


$(document).ready(function(){
    // create global variables 
    
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var missedQuestions;
    
    //event for hiding form and stats on page load
    
    $("#game").hide();
    $("#stats").hide();
    $("#replayButton").hide();
    $("#submitButton").hide();
    
//create objects for each question with possible answers
//correct answer will be indicated by index
//create an array 

var question1 = {
    question: "What was Angelica's doll's name",
    answers: ["Reptar", "Cynthia", "Lillian", "Didi"],
    correctAnswer: 1,
};

var question2 = {
    question: "Who was Doug Funnie's crush?",
    answers: ["Mrs. Wingo", "Patty Mayonnaise", "BeeBe Bluff", "Loretta LaQuigley"],
    correctAnswer: 1,
};

var question3 = {
    question: "Who was Arnold's sidekick?",
    answers: ["Helga Pataki", "Harold Berman", "Eugene Horowitz", "Gerald Johanssen"],
    correctAnswer: 3,
};

var question4 = {
    question: "What was Stimpy's favorite song?",
    answers: ["Lady in red", "Happy, happy, joy, joy", "Mr. Roboto", "Thriller"],
    correctAnswer: 1,
};

var question5 = {
    question: "What was Rocko's pet's name?",
    answers: ["Dilbert", "Spunky", "Heffer", "Mr. Bighead"],
    correctAnswer: 1,
};

var questionsArray = [question1, question2, question3, question4, question5];


// tally correct answers

// $("select").each(function(){
//     if($(this).val()=='right'){ 
//         correctAnswers++;
//         alert('right answers: ' + correctAnswers);    
//     }
// });


// $('#submitButton').click(function() {
//     var selValue = $('input[optradio=correct]:checked').val(); 
//     $("#correct").html(selValue);
// });



//create a 15 second timer

var counter;
    
function timer() {
    var sec = 15
    clearInterval(counter);
    counter = setInterval(function() {
    $('#counter').text(sec--);
    if (sec == -1) {
        clearInterval(counter);
        $("#submitButton").hide();
        $("#game").hide();
        $("#stats").show();
        $("#replayButton").show();
    }
} , 1000);

}

//create a function to reset form

function resetForm() {
    $("#myForm1")[0].reset()
    $("#myForm2")[0].reset()
    $("#myForm3")[0].reset()
    $("#myForm4")[0].reset()
    $("#myForm5")[0].reset()
}

//click events

$("#startButton").on("click", function(){
    $(this).hide();
    $("#replayButton").hide();
    $("#submitButton").show();
    $("#startPage").hide();
    $("#game").show();
    $("#submitButton").prepend("<button>Submit</button>");
    timer();
});

$("#submitButton").on("click", function(){
    $(this).hide();
    $("#game").hide();
    $("#stats").show();
    $("#replayButton").show();
    timer();
});

$("#replayButton").on("click", function(){
    $(this).hide();
    $("#game").show();
    $("#submitButton").show();
    $("#stats").hide();
    timer();
    resetForm();
    // $("#myForm1")[0].reset()
    // $("#myForm2")[0].reset()
    // $("#myForm3")[0].reset()
    // $("#myForm4")[0].reset()
    // $("#myForm5")[0].reset()
});



// when user answers a question right, increment correct answer score
// when incorrect or missed question, increment score for incorrect/missed
// function correct() {
//     if()
//     correctAnswers++;
// }


// Put it all on the screen!!! :)

// $("#submitButton").prepend("<button>Submit</button>");

$("#startButton").prepend("<button>Start Game</button>");

$("#replayButton").prepend("<button>Try Again</button>");
});