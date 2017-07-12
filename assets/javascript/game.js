console.log("js is working")


var wins = 0;
var losses = 0;

var matchScore = 0;
var total = 0;
var gemTotals = [0,0,0,0];

var gemScoreReveal = [false, false, false, false];


matchScore = getRandomInt(19, 120);

console.log(matchScore);

for (var i = 0; i < gemTotals.length; i++) {
	gemTotals[i] = getRandomInt(1, 12);
}

console.log(gemTotals)

$(document).ready(function(){

	$("#match-score").html(matchScore);

	$("#gem00").click(function() {
		total += gemTotals[0];
		$("#gem-value-1").html(gemTotals[0])
		$("#gem-value-1").css("opacity", "1")
		checkState();
		console.log("gem00 " + total);
	})

	$("#gem01").click(function() {
		total += gemTotals[1];
		$("#gem-value-2").html(gemTotals[1])
		$("#gem-value-2").css("opacity", "1")
		checkState();
		console.log("gem01 " + total);
	})

	$("#gem02").click(function() {
		total += gemTotals[2];
		$("#gem-value-3").html(gemTotals[2])
		$("#gem-value-3").css("opacity", "1")
		checkState();
		console.log("gem02 " + total);
	})

	$("#gem03").click(function() {
		total += gemTotals[3];
		$("#gem-value-4").html(gemTotals[3])
		$("#gem-value-4").css("opacity", "1")
		checkState();
		console.log("gem03 " + total);
	})

});

function checkState() {
	
	$("#player-score").html(total)

	if(total === matchScore) {
		win();
	}

	else if(total > matchScore) {
		lose();	
	}	
}

function win() {
	wins++;
	$("#player-wins").html(wins)
	$("#player-score").html(0)
	reset();
}

function lose() {
	losses++;
	$("#player-losses").html(losses)	
	$("#player-score").html(0)
	reset();
}

function reset() {
	matchScore = getRandomInt(19, 120);
	console.log(matchScore);
	$("#match-score").html(matchScore);

	for (var i = 0; i < gemTotals.length; i++) {
		gemTotals[i] = getRandomInt(1, 12);
	}
	console.log(gemTotals)

	total = 0;

	gemScoreReveal = [false, false, false, false];

	$("h3").css("opacity", "0");
}


function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}