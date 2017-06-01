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

var unanswered;

//"Hacky" way to check how many true radio buttons are checked off in order to tally the score
// var trueRadios = $("input:radio[value=true]:checked");
// 	console.log(trueRadios.length);

$("#start").on("click", start);
$("#time").text(number);
$("#submit").on("click", submit);

function start(){
	//Turning off the start button so you can only click it once
	$("#start").attr("disabled", true);
	$("#allQuestions").css("display", "block");
	countDown = setInterval(decrement, 1000);

}

function decrement(){
	number--;

	$("#time").text(number);

	if(number <= 0){
		stop();
		alert("Sorry! Your time is up!");
		//Setting the start button to be clickable again. 
		$("#start").attr("disabled", false);

	}
}

function stop(){
	clearInterval(countDown);
	//Resetting the number back to 90 so that the user can play the game again. Who wouldn't want to do that?
	number = 90;
}

function submit(){
	//When user clicked submit, the correct answers, incorrect answers, and unansweres questions pop up.
	$("#answers").css("display", "block");
	//HTML needs to change to those variables. 
	var trueRadios = $("input:radio[value=true]:checked");
		console.log(trueRadios);
		trueRadios = trueRadios.length;
		$("#correctAnswers").html(trueRadios);
	var falseRadios = $("input:radio[value=false]:checked");
		console.log(falseRadios);
		falseRadios = falseRadios.length;
		$("#incorrectAnswers").html(falseRadios);
}





