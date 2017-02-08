// var user_click = function(){
// 	$(".welcome-text").hide();
// 	$(".adventure-text").append("<p>" + $(".user-input").val() + "</p>");
// };

var step_count = 0;

var start = function(){
	// console.log("I'm in start and I have had " + step_count + " steps.");
	if (step_count <= 1) {
		$(".welcome-text").hide();
		$(".breadcrums").text("Introduction");
		$(".game-content").append(introduction);
		$(".user-input").val("");
	} else {
		alert(start_warning);
	}
};

var parse_input = function(){
	var input_string = "";
	var action = "";
	var world_item = "";
	var obj = {
		action: "",
		world_item: ""
	};
	// RegEx variables
	var house = /house/g;
	var street = /(?=.*\bstreet\b).+/g;
	var neigborhood = /(?=.*\bneighborhood\b)/g;
	var go_to = /^go to .+$/g;
	var look_at = /^look at .+$/g;
	var inspect = /^inspect .+$/g;
	var talk_to = /^talk to .+$/g;

	input_string = $(".user-input").val().toLowerCase();
	input_string.replace(/\s+/g, ' ').trim(); //Delete any extra spaces in between and possibly before/after

	switch (input_string) {
		case (go_to.test(input_string) ? input_string : ""):
			obj.action = "go to"
			world_item = input_string.substring(6);
			console.log(world_item)
			switch (world_item) {
				case (house.test(world_item) ? world_item : ""):
					console.log("Inside Go To House case");
					obj.world_item = "house"
					break;
				case (street.test(world_item) ? world_item : ""):
				case (neigborhood.test(world_item) ? world_item : ""):
					console.log("Inside Go To Street case");
					obj.world_item = "street"
					break;
				default:
					obj.world_item = "unknown"
					break;
			}
			console.log(obj);
			// return obj;
			break;
		case (look_at.test(input_string) ? input_string : ""):
			action = "look at"
			console.log(obj);
			break;
		case inspect.test(input_string):
			action = "inspect"
			world_item = input_string.substring(7);
			break;
		case talk_to.test(input_string):
			action = "talk to"
			world_item = input_string.substring(7);
			break;
		case "start":
			step_count++;
			start();
			break;
		default:
			action = "unknown"
			world_item = input_string.substring(7);
			break;
	}
	//Finish this function.
	// It should take the input, parse it, and create an object
	// that contains an action and an item.
};

// var evaluate_input = function(){
// 	// var string = 
// 	switch (obj) {
// 		case "start":
// 			step_count++;
// 			start();
// 			break;
// 		default:

// 	}
// };

var main_controller = function(){
	$(".user-input").on("keypress", function(e){
		if(e.keyCode === 13){
			// format_string();
			parse_input();
		}
	});

	$(".user-button").click(parse_input);
};

$(document).ready(main_controller);