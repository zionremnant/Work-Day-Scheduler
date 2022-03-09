var currentDayEl = $("#currentDay")




function displayDate(){
    var rightNow = moment().format("dddd. MMMM Do. YYYY, h:mm:ss a");
    currentDayEl.text(rightNow);

    setInterval(() => {
        displayDate()
    }, 1000);
}