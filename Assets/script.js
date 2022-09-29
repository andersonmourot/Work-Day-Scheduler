
//Tracks and writes the current date
var time = moment().format("dddd, MMMM Do");
$("#currentDay").text(time);


var input = document.createElement("input");
    input.setAttribute("type", "text");
    document.body.appendChild(input);


$(document).ready(function () {
    for (var i = 9; i <= 17; i++) {
        $("#" + i).text(localStorage.getItem(i))
    }
})


function addClass () {
	var hour = parseInt(moment().format("H"));
    console.log(hour)
    var timeArray = document.querySelectorAll("textarea");
    timeArray.forEach(timeBlock => {
        var timeBlockId = parseInt(timeBlock.id)
    if (timeBlockId === hour) {
    timeBlock.classList.add("present")
    }
    if (timeBlockId < hour) {
    timeBlock.classList.add("past")
    }
    if (timeBlockId > hour) {
       console.log(typeof timeBlock.id,typeof hour)
        timeBlock.classList.add("future")
    }
})
 }

function saveEvent () {
   var siblings = $(this).siblings();
   var text = siblings[1].value;
   var timeBlockID = siblings[1].getAttribute("id");
   localStorage.setItem(timeBlockID, text);

   console.log(timeBlockID)   
}

$(".saveBtn").on("click", saveEvent)

addClass ();

//console.log($(this).siblings("textarea")[0].value)