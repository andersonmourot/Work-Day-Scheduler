
//Tracks and writes the current date
var time = moment().format("dddd, MMMM Do");
$("#currentDay").text(time);


var input = document.createElement("input");
    input.setAttribute("type", "text");
    document.body.appendChild(input);



function addClass () {
	var hour = moment().format("H");
    var timeArray = document.querySelectorAll("textarea");
    timeArray.forEach(timeBlock => {
    if (timeBlock.id === hour) {
    timeBlock.classList.add("present")
    }
    if (timeBlock.id < hour) {
    timeBlock.classList.add("past")
    }
    if (timeBlock.id > hour) {
        timeBlock.classList.add("future")
    }
})
 }

function saveEvent () {
   var siblings = $(this).siblings();
   var text = siblings[1].value;
   var timeBlockID = siblings[1].getAttribute("id");
   localStorage.setItem(timeBlockID, text);

   for (var i=0; i < localStorage.timeBlockID.length; i++) {
    var key = localStorage.timeBlockID(i);
    var value = localStorage.getItem(key);
   }
}

$(".saveBtn").on("click", saveEvent)

addClass ();

//console.log($(this).siblings("textarea")[0].value)