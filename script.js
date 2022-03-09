var currentDayEl = $("#currentDay")
var descriptionEl = $("#description")
var saveBtn = $("#savebtn")

function displayDate(){
var now = moment().format("dddd, MMMM Do, YYYY, h:mm:ss a");
currentDayEl.text(now);
}

setInterval(() => {
displayDate()
}, 1000);


// // save button
// $(".saveBtn").on("click", function(){
// console.log(this);
// var text = $(this).siblings(".description").val();
// var time = $(this).parent().attr("id");
// localStorage.setItem(time, text);
// })
// $("#9am .description").val(localStorage.getItem("9am"));
// $("#10am .description").val(localStorage.getItem("10am"));
// $("#11am .description").val(localStorage.getItem("11am"));
// $("#12pm .description").val(localStorage.getItem("12pm"));
// $("#1pm .description").val(localStorage.getItem("1pm"));
// $("#2pm .description").val(localStorage.getItem("2pm"));
// $("#3pm .description").val(localStorage.getItem("3pm"));
// $("#4pm .description").val(localStorage.getItem("4pm"));
// $("#5pm .description").val(localStorage.getItem("5pm"));

// function tracker (){
// var currentHour = moment().hour();

// $(".time-block").each(function(){
//     var block = parseInt($(this).attr("id").split("hour")[1]);
//     console.log(block, currentHour);

//     if(block<currentHour){
//         $(this).add("past");
//         $(this).remove("present");
//         $(this).remove("future");
//     }
//     else if(block===currentHour){
//         $(this).remove("past");
//         $(this).add("present");
//         $(this).remove("future");
//     }
//     else{
//         $(this).remove("past");
//         $(this).remove("present");
//         $(this).add("future");
//     }
// })
// }
// tracker();
// })

// function addText(event){
//     event.preventDefault();
//     localStorage
// }

// saveBtn.addEventListener("click"), function(){
//     preventDefault();
// }