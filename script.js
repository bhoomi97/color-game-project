// List Of Colors 

var colors = [ "rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(255, 0, 255)", "rgb(0, 255, 255)", "rgb(255, 255, 0)"]

var correctColor = colors[4];

// Display correct color RGB on HTML
var colorSpan = document.getElementById("colorSpan");
colorSpan.textContent = correctColor;

var squares = document.getElementsByClassName("square");

for (var i = 0; i< squares.length; i++) {
	// Assign random colors initially to every element
	squares[i].style.background = colors[i];	

	// Add Click Event Listener for every element
	squares[i].addEventListener("click", function() {

		// Grab color of Clicked element
		var clickedColor = this.style.background ;

		// Check with correct color
		if( clickedColor === correctColor) {
			alert('You got it right!');
		} else {
			alert('oops! Not that one.');
		}

	});

}


