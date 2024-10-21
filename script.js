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
let paragraph = $("p")
paragraph.attr("id", "timer");
paragraph.addClass("timer-background");
let $image = $("<img />"); 
$image.attr("src","pumpkin.png");
$(".wrapper").append($image);
let $timer = $("#timer");
let $wrapper = $(".wrapper");
$wrapper.css("position", "relative");
$wrapper.css("text-align", "center"); 
$wrapper.css("color", "black");
$timer.css("position", "absolute");
$timer.css("border", "white");
$("h2").addClass("stopwatch-type");
$(".stopwatch-type").text("JQuery Stopwatch");
$(".stopwatch-type").css("position", "absolute");
$(".stopwatch-type").css("color", "white");
$(".stopwatch-type").css("left", "35%");
$(".stopwatch-type").css("top", "45%");
$(".stopwatch-type").css("font-family", "Georgia, serif");
$(".stopwatch-type").css("text-shadow", "0 0 3px orange, 0 0 5px orange");
$timer.css("font-family", "Georgia, serif");
$("h1").addClass("title");
$(".title").text("");
$(".timer-background").css("background-color", "grey");
$timer.css("top", "50%");
$timer.css("left", "35.5%");
$timer.css("width", "200px");
$timer.css("height", "45px");
$timer.css("font-size", "34px");
$timer.css("align-items", "center");
$timer.css("text-align", "center");
$timer.css("border-style", "solid");
$timer.css("border-radius", "25px");
$buttonStart.addClass("status-buttons");
$buttonStop.addClass("status-buttons");
$buttonReset.addClass("status-buttons");
$(".status-buttons").css("border-style", "solid");
$(".status-buttons").css("border-radius", "25px");
$(".status-buttons").css("font-size", "25px");
$(".status-buttons").css("text-shadow", "0 0 3px purple, 0 0 5px purple");
$(".status-buttons").css("font-family", "Georgia");
$(".status-buttons").css("border-color", "#FF8C00");
$(".status-buttons").css("border-left-color", "orange");
$(".status-buttons").css("border-top-color", "orange");
$(".status-buttons").css("border-width", "5px");
$buttonStart.css("position", "absolute");
$buttonStart.css("font-family", "Georgia");
$buttonStart.css("top", "70%");
$buttonStart.css("left", "30%");
$buttonStart.css("color", "white");
$buttonStart.css("background-color", "#FF8C00");
$buttonStart.css("height", "40px");
$buttonStart.css("width", "90px");
$buttonStop.css("position", "absolute");
$buttonStop.css("top", "70%");
$buttonStop.css("left", "43%");
$buttonStop.css("color", "white");
$buttonStop.css("background-color", "#FF8C00");
$buttonStop.css("height", "40px");
$buttonStop.css("width", "90px");
$buttonStop.css("font-family", "Georgia");
$buttonReset.css("position", "absolute");
$buttonReset.css("font-family", "Georgia");
$buttonReset.css("top", "70%");
$buttonReset.css("left", "56%");
$buttonReset.css("color", "white");
$buttonReset.css("background-color", "#FF8C00");
$buttonReset.css("height", "40px");
$buttonReset.css("width", "90px");

$(document).ready(function() {
$buttonStart.on('click', function() {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
    $(".timer-background").css("background-color", " rgb(51, 165, 50)");
    interva1Id = setInterval(adjustOpacity, 200);
    
});
$buttonStop.on('click', function () {
    clearInterval(interval);
    clearInterval(interva1Id);
    $(".timer-background").css("background-color", " rgb(251, 18, 47)");
});

$buttonReset.on('click', function () {
    clearInterval(interval);
    clearInterval(interva1Id);
    tens = "00";
    seconds = "00";
    $appendTens.text(tens);
    $appendSeconds.text(seconds);
    $(".timer-background").css("background-color", " grey");
});

function adjustOpacity() {
        opacity -= 0.2
        if (opacity < 0.8){
            opacity = 1
        }

        $timer.css("opacity", opacity);
}
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