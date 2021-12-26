var saveBtn = $(".saveBtn");

// current day is displayed at the top of the calendar
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// each time block is color-coded to indicate whether it is in the past, present, or future
function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));

        // console.log(this); //each time-block

        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// WHEN I click the save button for that time block
saveBtn.on("click", function() {

    // console.log(this); //save button
    var time = $(this).siblings(".hour").text();
    var description = $(this).siblings(".description").val();

    // THEN the text for that event is saved in local storage
    localStorage.setItem(time, description);
});

function usePlanner() {

    $(".hour").each(function() {
        var currHour = $(this).text();
        var currDescription = localStorage.getItem(currHour);

        // console.log(this);
        // console.log(currHour);

        if(currDescription !== null) {
            $(this).siblings(".description").val(currDescription);
        }
    });
}

/**
 * CALL FUNCTIONS
 */

timeBlockColor();
usePlanner();
