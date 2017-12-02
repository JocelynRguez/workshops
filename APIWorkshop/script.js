/*

Script for API, will include pre-given code and students will add their own code as well.

*/

//Colors
var red = 'rgb(255, 86, 97)';
var purple = 'rgb(176, 118, 224)';
var green = 'rgb(86, 196, 132)';
var orange = 'rgb(247, 210, 118)';
var colors = [red, purple, green, orange];

/*
	TODO: Get name of user when page first loads.
*/
function getName(){
	var person = prompt('Please enter your name:');
	var node;
	if(person == null || person == ''){
		node = 'Stranger';
	} else {
		node = person;
	}
	$('#title').append(node);
	changeColor();
}

/*
	Changes the color of the circle that will change the page's background color once clicked.
*/
function changeColor(){
	var randomIndex = Math.floor(Math.random() * colors.length);
	var color =  colors[randomIndex];
	$('#circle').css('background-color', color );
}

/*
	TODO: Write the code for changing the background of the webpage.
*/
function changeBackground(){
	var width = $('#circle').css('width');
	if(width == '50px'){
		$('#circle').animate({width: '100%', height: '100px', borderRadius: '0px'});
	}else{
		$('#circle').animate({width: '50px', height: '50px', borderRadius: '25px'});
	}

	changeColor();
}

/*
	TODO: Write AJAX request and display GIF on webpage.
*/
function searchGiphy(){
	var search = $('#tag').val();
	$.get('https://api.giphy.com/v1/gifs/random?api_key=dc4868f0b5f54decab30be68d6e80edb&tag=' + search, function(data, status){
		var url = 'https://giphy.com/embed/' + data['data']['id'];
		var giphy = $('<iframe>', {
			src: url,
					frameborder: 0,
					id: 'gif'
		});
		//append to div
		$('#task3').append(giphy);

	})
}

/*
	Functions to animate circle and get user's name.
*/

$('#circle').on('click', function(){
	changeBackground();
});

$(document).ready(getName());
