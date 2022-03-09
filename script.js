$(document).ready(function(){
    // current time & date
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss: a"));
    // save button
    $(".saveBtn").on("click", function(){
        console.log(this);
        var text = $(this).siblings(".description").value();
        var time = $(this).parent().attribute("id");
        localStorage.setItem(time, text);
    })
    $("#9am .description").value(localStorage.getItem("9am"));
    $("#10am .description").value(localStorage.getItem("10am"));
    $("#11am .description").value(localStorage.getItem("11am"));
    $("#12pm .description").value(localStorage.getItem("12pm"));
    $("#1pm .description").value(localStorage.getItem("1pm"));
    $("#2pm .description").value(localStorage.getItem("2pm"));
    $("#3pm .description").value(localStorage.getItem("3pm"));
    $("#4pm .description").value(localStorage.getItem("4pm"));
    $("#5pm .description").value(localStorage.getItem("5pm"));

    function tracker (){
        var currentHour = moment().hour();

        $(".time-block").each(function(){
            var 
        })
    }
})