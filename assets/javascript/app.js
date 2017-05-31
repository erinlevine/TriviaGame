// Pseudocode: 

// Submit button to clear div and put in:
// 	- All done!
// 	- Correct Answers: 
// 	- Incorrect Answers:
// 	- Unanswered: 

// Check value for each question to see if it is true (correct) or false (incorrect)

//---------------


var number = 90;

var countDown;

$("#start").on("click", start);


function start(){
	countDown = setInterval(decrement, 1000);
	console.log(countDown);
}

function decrement(){
	number--;

	$("#time").html("<h2>" + countDown + "</h2>");

	if(countDown === 0){
		stop();
		alert("Sorry! Your time is up!");
	}
}

function stop(){
	clearInterval(countDown);
}

start();


