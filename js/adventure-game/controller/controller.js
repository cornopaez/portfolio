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
	// Function Variables
	var input_string = "";
	var action = "";
	var world_item = "";
	var obj = {
		action: "",
		world_item: ""
	};

	/*RegEx variables
	-------------------------------------------*/
	// Items
	var house = /house/g;
	var street = /(?=.*\bstreet\b).+/g;
	var neigborhood = /(?=.*\bneighborhood\b)/g;
	var scene = /(?=.*\bscene\b)/g;
	var victims = /(?=.*\bvictims\b)/g;
	var papers = /(?=.*\bpapers\b)/g;
	var box = /(?=.*\bbox\b)/g;
	var knife = /(?=.*\bknife\b)/g;
	var gray_hairs = /(?=.*\bgray hairs\b)/g;
	var gold = /(?=.*\bgold\b)/g;
	var earring = /(?=.*\bearring.\b)/g;
	var silver = /(?=.*\bsilver\b)/g;
	var clothes = /(?=.*\bsilver\b)/g;
	var lightning_rod = /(?=.*\brod\b)/g;

	// Actions
	var go_to = /^go to .+$/g;
	var look_at = /^look at .+$/g;
	var inspect = /^inspect .+$/g;
	var talk_to = /^talk to .+$/g;
	var look_for = /^look for .+$/g;

	input_string = $(".user-input").val().toLowerCase();
	input_string.replace(/\s+/g, ' ').trim(); //Delete any extra spaces in between and possibly before/after

	switch (input_string) {
		case (go_to.test(input_string) ? input_string : ""):
			obj.action = "go to"
			world_item = input_string.substring(6);
			switch (world_item) {
				case (house.test(world_item) ? world_item : ""):
					obj.world_item = "house"
					break;
				case (street.test(world_item) ? world_item : ""):
				case (neigborhood.test(world_item) ? world_item : ""):
					obj.world_item = "street"
					break;
				default:
					obj.world_item = "unknown"
					break;
			}
			break;
		case (look_at.test(input_string) ? input_string : ""):
		case (inspect.test(input_string) ? input_string : ""):
			action = "look at";
			world_item = input_string.substring(8);
			switch (world_item) {
				case (scene.test(world_item) ? world_item : ""):
				case (victims.test(world_item) ? world_item : ""):
					// console.log("Inside Look At Scene case");
					obj.world_item = "scene"
				case (papers.test(world_item) ? world_item : ""):
				case (box.test(world_item) ? world_item : ""):
				case (old_letters.test(world_item) ? world_item : ""):
					// console.log("Inside Look At Scene case");
					obj.world_item = "papers"
				case (knife.test(world_item) ? world_item : ""):
					// console.log("Inside Look At Scene case");
					obj.world_item = "knife"
				case (gray_hairs.test(world_item) ? world_item : ""):
					// console.log("Inside Look At Scene case");
					obj.world_item = "gray hairs"
				case (gold.test(world_item) ? world_item : ""):
				case (earring.test(world_item) ? world_item : ""):
				case (silver.test(world_item) ? world_item : ""):
				case (clothes.test(world_item) ? world_item : ""):
					// console.log("Inside Look At Scene case");
					obj.world_item = "valuables"
				case (lightning_rod.test(world_item) ? world_item : ""):
					// console.log("Inside Look At Scene case");
					obj.world_item = "rod"
				default:
					obj.world_item = "unknown"
					break;
			}
			break;
		case talk_to.test(input_string):
			action = "talk to"
			world_item = input_string.substring(7);
			break;
		case look_for.test(input_string):
			action = "look for"
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