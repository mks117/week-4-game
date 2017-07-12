console.log("js is working")

var matchScore = 0;
var wins = 0;
var losses = 0;
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
	$("#gem00").click(function() {
		total += gemTotals[0];
		console.log("gem00 " + total);
	})

	$("#gem01").click(function() {
		total += gemTotals[1];
		console.log("gem01 " + total);
	})

	$("#gem02").click(function() {
		total += gemTotals[2];
		console.log("gem02 " + total);
	})

	$("#gem03").click(function() {
		total += gemTotals[3];
		console.log("gem03 " + total);
	})

});

function checkState() {
	if(total === matchScore) {
		wins++;
		$("#player-wins").html(wins)
	}

	else if(total > matchScore) {
		losses++;
		$("#player-losses").html(losses)		
	}	
}


function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}