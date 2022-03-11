$(document).ready(function () {
//time on header
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a"));

//save buttonm
$(".saveBtn").on("click", function () {
console.log(this);
var text = $(this).siblings(".description").val();
var time = $(this).parent().attr("id");

//local storage set item
localStorage.setItem(time, text);
})
//localstorage ea hr
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));


function hourTracker() {
var currentHour = moment().hour();

$(".time-block").each(function () {
var blockHour = parseInt($(this).attr("id").split("hour")[1]);
console.log(blockHour, currentHour)

//past present future - colors
if (blockHour < currentHour) {
    $(this).addClass("past");
    $(this).removeClass("future");
    $(this).removeClass("present");
}
else if (blockHour === currentHour) {
    $(this).removeClass("past");
    $(this).addClass("present");
    $(this).removeClass("future");
}
else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
}
})
}
hourTracker();
})
