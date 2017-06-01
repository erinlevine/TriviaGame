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
$("#time").text(number);

//"Hacky" way to check how many true radio buttons are checked off in order to tally the score
var trueRadios = $("input:radio[value=true]:checked");
	console.log(trueRadios.length);


function start(){
	$("#start").attr("disabled", true);
	countDown = setInterval(decrement, 1000);
	console.log(countDown);
}

function decrement(){
	console.log(number);
	number--;

	$("#time").text(number);

	if(number <= 0){
		stop();
		alert("Sorry! Your time is up!");
		$("#start").attr("disabled", false);
	}
}

function stop(){
	clearInterval(countDown);
}




