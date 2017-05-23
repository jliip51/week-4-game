var target = 0;
var score = 0;
var wins = 0;
var losses = 0;
var gems = [0, 0, 0, 0];

$(document).ready(function() {

	$(".stat-box").hide();
	$(".img-div").hide();

		function randomTarget() {
			target = Math.floor((Math.random() * 102) + 19);

			$("#target").text(target);
		};

		function randomCrystal() {
			for (var i = 0; i < gems.length; i++) {

			gems[i] = Math.floor((Math.random() * 12) + 1);

			var blue = $("#blue-gem");
			var green = $("#green-gem");
			var pink = $("#pink-gem");
			var yellow = $("#yellow-gem");

			blue.attr("data-crystalvalue", gems[0]);
			green.attr("data-crystalvalue", gems[1]);
			pink.attr("data-crystalvalue", gems[2]);
			yellow.attr("data-crystalvalue", gems[3]);
			
			}
		};

		function win() {
			wins = wins + 1;
	        $("#wins").text(wins);
	        alert("You Won!");
	        score = 0;
	        $("#score").text(score);
	        randomTarget();
	        randomCrystal();
		};

		function loss() {
	    	losses = losses + 1;
	        $("#losses").text(losses);
	        alert("You Lost!");
	        score = 0;
	        $("#score").text(score);
	        randomTarget();
	        randomCrystal();
		};

	$(".start-btn").on("click", function() {
		randomTarget();
		randomCrystal();
		$(".start-div").hide();
		$(".stat-box").show("slow");
		$(".img-div").show("slow");
	});

	$(".gems").on("click", function() {
     	var crystalValue = ($(this).attr("data-crystalvalue"));
    	crystalValue = parseInt(crystalValue);
    	score += crystalValue;
    	$("#score").text(score);

	 if (score === target) {
	 	win();
	 } 

	 else if (score > target) {
	    loss();
	 }

    });

});

