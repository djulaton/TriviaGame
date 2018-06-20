//when page loads, display page with start game button

//when the user clicks start, display form and start timer

//After user fills out form, they can click the submit button to enter their results

// When the game is submitted, display messagage on screen and show stats (correct/incorrect answers ) and display a try again button to restart the game


$(document).ready(function(){
// create global variables 

var correctAnswers;
var incorrectAnswers;

//event for hiding form and stats on page load

$("#game").hide();
$("#stats").hide();
$("#replayButton").hide();
$("#submitButton").hide();

//create 30 second timer

var counter = 5;

function timer() {
    setTimeout(timer, 1000);
    $('#counter').text(counter);
    counter--;

    if (counter < 0) {
        counter = 0;
        $("#game").hide();
        $("#stats").show();
        $("#submitButton").hide();
        $("#replayButton").show();
        counter = 5;
    }

}

// timer();

//create a function for the start page

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
});

$("#replayButton").on("click", function(){
    $(this).hide();
    $("#game").show();
    $("#submitButton").show();
    $("#stats").hide();
});

// $("#submitButton").prepend("<button>Submit</button>");

$("#startButton").prepend("<button>Start Game</button>");

$("#replayButton").prepend("<button>Try Again</button>");
});

