function updateTime() {
let today = moment();

// time on header
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));

// past present future time blocks
let now = moment().format("kk");
for (let i = 0; i < scheduleElArray.length; i++) {
    scheduleElArray[i].removeClass("future past present");

    if (now > scheduleElArray[i].data("time")) {
        scheduleElArray[i].addClass("past");

    } else if (now === scheduleElArray[i].attr("hour")) {
        scheduleElArray[i].addClass("present");

    } else {

        scheduleElArray[i].addClass("future");
    }
}
}

// textarea
let saveBtn = $(".save-icon");
let containerEl = $(".container");
let schedule9am = $("#9am");
let schedule10am = $("#10am");
let schedule11am = $("#11am");
let schedule12pm = $("#12pm");
let schedule1pm = $("#1pm");
let schedule2pm = $("#2pm");
let schedule3pm = $("#3pm");
let schedule4pm = $("#4pm");
let schedule5pm = $("#5pm");

let scheduleElArray = [
schedule9am,
schedule10am,
schedule11am,
schedule12pm,
schedule1pm,
schedule2pm,
schedule3pm,
schedule4pm,
schedule5pm,
];

renderLastRegistered();
updateTime();
setInterval(updateTime, 1000); 

// render schedule in local storage
function renderLastRegistered() {
for (let el of scheduleElArray) {
    el.val(localStorage.getItem("time-block " + el.data("time")));

}
}


// handle clicks
function handleFormSubmit(event) {
event.preventDefault();

let btnClicked = $(event.currentTarget);

let targetText = btnClicked.siblings("textarea");

let targetTimeBlock = targetText.data("time");

localStorage.setItem("time-block " +  targetTimeBlock, targetText.val());
}

saveBtn.on("click", handleFormSubmit);