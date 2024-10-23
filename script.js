/*
   Name: Jillian Berry
   Class Name: CPSC 322 - Web Development
   Assignment Name: Homeowrk 6
   Last Modified: 10/22/2024
  
*/
buttonStart = false;
buttonStop = false;
buttonReset = false;
// Using .on() method
let opacity = 1;
var seconds = "00";
var tens = "00";
let $appendTens = $("#tens")
let $appendSeconds = $("#seconds")
let $buttonStart = $("#button-start");
let $buttonStop = $("#button-stop");
let $buttonReset = $("#button-reset");
let interval; 

let paragraph = $("p");
paragraph.attr("id", "timer");
paragraph.addClass("timer-background");
let $image = $("<img />"); 
$image.attr("src","pumpkin.png");

$(".wrapper").append($image);
let $timer = $("#timer");
let $wrapper = $(".wrapper");

$wrapper.css("position", "fixed");
$wrapper.css("width", "800px")
$wrapper.css("text-align", "center"); 
$wrapper.css("color", "black");

$timer.css("position", "absolute");
$timer.css("border", "white");
$timer.css("font-family", "Georgia, serif");

$("h2").addClass("stopwatch-type");
$(".stopwatch-type").text("JQuery Stopwatch");
$(".stopwatch-type").css("position", "absolute");
$(".stopwatch-type").css("color", "white");
$(".stopwatch-type").css("left", "35%");
$(".stopwatch-type").css("top", "45%");
$(".stopwatch-type").css("font-family", "Georgia, serif");
$(".stopwatch-type").css("text-shadow", "0 0 3px orange, 0 0 5px orange");



$("h1").addClass("title");
$(".title").text("");
$(".timer-background").css("background-color", "grey");

//does css styling for timer
$timer.css("top", "50%");
$timer.css("left", "35.5%");
$timer.css("width", "200px");
$timer.css("height", "45px");
$timer.css("font-size", "34px");
$timer.css("align-items", "center");
$timer.css("text-align", "center");
$timer.css("border-style", "solid");
$timer.css("border-radius", "25px");

//adds the class 
$buttonStart.addClass("status-buttons");
$buttonStop.addClass("status-buttons");
$buttonReset.addClass("status-buttons");

//object literal
const statusButtonStyles = {
    borderStyle: "solid",
    borderRadius: "25px",
    fontSize: "25px",
    textShadow: "0 0 3px purple, 0 0 5px purple",
    fontFamily: "Georgia",
    borderColor: "#FF8C00",
    borderLeftColor: "orange",
    borderTopColor: "orange",
    borderWidth: "5px",
    color: "white",
    height: "40px", 
    width: "90px",
    position: "absolute",
    backgroundColor: "#FF8C00"
};

// Apply the styles to the elements with the class "status-buttons"
$(".status-buttons").css(statusButtonStyles);
//status-buttons is added the css 

//css for buttonStart styling
$buttonStart.css("top", "70%");
$buttonStart.css("left", "30%");

//css for buttonStop styling
$buttonStop.css("top", "70%");
$buttonStop.css("left", "43%");


//css for buttonReset styling
$buttonReset.css("top", "70%");
$buttonReset.css("left", "56%");




$(document).ready(function() {

// action listener for buttonStart
$buttonStart.on('click', function() {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
    $(".timer-background").css("background-color", " rgb(51, 165, 50)");
    interva1Id = setInterval(adjustOpacity, 200);
    buttonStart = true;
    buttonStop = false;
    buttonReset = false;
});

//action listener for buttonStop
$buttonStop.on('click', function () {
    if (buttonStart){
        clearInterval(interval);
        clearInterval(interva1Id);
        $(".timer-background").css("background-color", " rgb(251, 18, 47)");
    }
    buttonStart = false;
});

//action listener for buttonReset
$buttonReset.on('click', function () {
    clearInterval(interval);
    clearInterval(interva1Id);
    tens = "00";
    seconds = "00";
    $appendTens.text(tens);
    $appendSeconds.text(seconds);
    $(".timer-background").css("background-color", " grey");
    buttonStart = false;
});


//adjustOpacity
function adjustOpacity() {
        opacity -= 0.2
        if (opacity < 0.8){
            opacity = 1
        }

        $timer.css("opacity", opacity);
}
//start the timer
function startTimer() {
    tens++;

    if (tens < 9) {
        $appendTens.text("0" + tens);
    }

    if (tens > 9) {
        $appendTens.text(tens);

    }

    if (tens > 99) {
        console.log("seconds");
        seconds++;
        $appendSeconds.text("0" + seconds);
        tens = 0;
        $appendTens.text("0" + 0);
    }

    if (seconds > 9) {
        $appendSeconds.text(seconds);
    }

    

    
}
});