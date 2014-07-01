// to add a botton to the div tag
$(".wrapper").append("<button id='start'>START</button>");

// to hide the form, status message and progress bar
$("#userGuess").hide();
$("#progressBar").hide();
$("#status").hide();
//initialize random number
var random;
var prev_dist;

// to select the button created
$("#start").click( function() {
	random = Math.ceil(Math.random() * 100);
	prev_dist = 101;
	var thermometer ;

	
	// to show the input form and progress bar
	$("#userGuess").show();
	$("#progressBar").show();
	$("#status").show();
	// to hide the instruction paragraph and the start button
	$("#instruction").hide();
	$(this).hide();
});

//progressbar function 
function progressBar(percent, $element) {
	var progressBarWidth = percent * $element.width() / 100;
	$element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");
}

//function to test user's guess
var testGuess = function(guess){			
			
	var cur_guess = guess;

	cur_dist = Math.abs( random - cur_guess);
	
	thermometer = Math.ceil((( prev_dist / (cur_dist + prev_dist)) * 100 ));

	if( cur_guess != random){
		
		if ( cur_dist < prev_dist) {
				// alert("You are Hot");
				progressBar(thermometer, $('#progressBar'));
				$("#status").removeClass().addClass("hot").text("You are Hot");
				
		}

		if( cur_dist > prev_dist){
			progressBar(thermometer, $('#progressBar'));
			// alert("You are Cold");
			$("#status").removeClass().addClass("cold").text("You are Cold");
		}

		else if( cur_dist === prev_dist) {
			progressBar(cur_dist, $('#progressBar'));
			// alert("You are Cold");
			$("#status").removeClass().addClass("cold").text("You are Cold");
		}
		prev_dist = cur_dist;
	}
	else{
		$("#status").text("Congratulation's you won");
		progressBar(100, $('#progressBar'));
	}
	
}

$("#userGuess").submit(function(event){
	event.preventDefault();
		
	var guess = parseInt($("#int").val());

	testGuess(guess);

	$("#int").val('');
});
