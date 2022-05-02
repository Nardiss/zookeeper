$(document).ready(function(){
    // listen for button clicks
    $("button").on("click", function(){
        // get the values from the textarea and the id from the parent row
        var task = $(this).siblings("textarea").val()
        var time = $(this).parent().attr("id")
        console.log(task, time);


        // save this to local storage
        localStorage.setItem(time, task)

    })
    // get tasks from local storage
    $("#hour-9 textarea").val(localStorage.getItem("hour-9"))
    $("#hour-10 textarea").val(localStorage.getItem("hour-10"))
    $("#hour-11 textarea").val(localStorage.getItem("hour-11"))
    $("#hour-12 textarea").val(localStorage.getItem("hour-12"))
    $("#hour-13 textarea").val(localStorage.getItem("hour-13"))
    $("#hour-14 textarea").val(localStorage.getItem("hour-14"))
    $("#hour-15 textarea").val(localStorage.getItem("hour-15"))
    $("#hour-16 textarea").val(localStorage.getItem("hour-16"))
    $("#hour-17 textarea").val(localStorage.getItem("hour-17"))
    
    // create function to check current hour using moment.js and comparing it to the id of each parent inside use if 
    function colorHours(){
        var currentHour = moment().hours()
        console.log(currentHour);
        // loop 
        $(".time-block").each(function(){
            console.log($(this).attr("id"))
            // use the split method to get the number and remove the hour
            var valueHour = parseInt($(this).attr("id").split("hour")[1]);

            // check the time difference
            if (valueHour < currentHour){
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (valueHour === currentHour){
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("past");
                $(this).addClass("future");
                $(this).removeClass("present");
            }
        })

    }
    colorHours();
});
