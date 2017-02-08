// var user_click = function(){
// 	$(".welcome-text").hide();
// 	$(".adventure-text").append("<p>" + $(".user-input").val() + "</p>");
// };

var step_count = 0;

var start = function(){
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
	var police = /(?=.*\bpolice\b)/g;
	var witness = /(?=.*\bwitness..\b)/g;

	// Actions
	var go_to = /^go to .+$/g;
	var look_at = /^look at .+$/g;
	var inspect = /^inspect .+$/g;
	var talk_to = /^talk to .+$/g;
	var look_for = /^look for .+$/g;
	var interview = /^interview .+$/g;

	// Clean input a bit
	input_string = $(".user-input").val().toLowerCase();
	input_string.replace(/\s+/g, ' ').trim(); //Delete any extra spaces in between and possibly before/after

	// Parse through text to create object to be returned
	switch (input_string) {
		// Go to Action
		case (go_to.test(input_string) ? input_string : ""):
			obj.action = "go to"
			world_item = input_string.substring(6);
			switch (world_item) {
				case (house.test(world_item) ? world_item : ""):
					obj.world_item = "house"
					console.log(obj);
					break;
				case (street.test(world_item) ? world_item : ""):
				case (neigborhood.test(world_item) ? world_item : ""):
					obj.world_item = "street"
					console.log(obj);
					break;
				default:
					obj.world_item = "unknown"
					console.log(obj);
					break;
			}
			break;
		// Look At and Inspect Action
		case (look_at.test(input_string) ? input_string : ""):
		case (inspect.test(input_string) ? input_string : ""):
			obj.action = "look at";
			world_item = input_string.substring(8);
			switch (world_item) {
				case (scene.test(world_item) ? world_item : ""):
				case (victims.test(world_item) ? world_item : ""):
					// console.log("Inside Look At Scene case");
					obj.world_item = "scene"
					console.log(obj);
					break;
				case (papers.test(world_item) ? world_item : ""):
				case (box.test(world_item) ? world_item : ""):
				case (old_letters.test(world_item) ? world_item : ""):
					// console.log("Inside Look At Scene case");
					obj.world_item = "papers"
					console.log(obj);
					break;
				case (knife.test(world_item) ? world_item : ""):
					// console.log("Inside Look At Scene case");
					obj.world_item = "knife"
					console.log(obj);
					break;
				case (gray_hairs.test(world_item) ? world_item : ""):
					// console.log("Inside Look At Scene case");
					obj.world_item = "gray hairs"
					console.log(obj);
					break;
				case (gold.test(world_item) ? world_item : ""):
				case (earring.test(world_item) ? world_item : ""):
				case (silver.test(world_item) ? world_item : ""):
				case (clothes.test(world_item) ? world_item : ""):
					// console.log("Inside Look At Scene case");
					obj.world_item = "valuables"
					console.log(obj);
					break;
				case (lightning_rod.test(world_item) ? world_item : ""):
					// console.log("Inside Look At Scene case");
					obj.world_item = "rod"
					console.log(obj);
					break;
				default:
					obj.world_item = "unknown"
					console.log(obj);
					break;
			}
			break;
		// Talk to Action
		case (talk_to.test(input_string) ? input_string : ""):
		case (interview.test(world_item) ? world_item : ""):
			obj.action = "talk to"
			world_item = input_string.substring(8);
			switch (world_item) {
				case (police.test(world_item) ? world_item : ""):
					// console.log("Inside Look At Scene case");
					obj.world_item = "police"
					console.log(obj);
					break;
				case (witness.test(world_item) ? world_item : ""):
				case (people.test(world_item) ? world_item : ""):
					// console.log("Inside Look At Scene case");
					obj.world_item = "witness"
					console.log(obj);
					break;
			}
			break;
		// Look for Action
		case (look_for.test(input_string) ? input_string : ""):
			obj.action = "look for"
			world_item = input_string.substring(8);
			console.log(world_item);
			break;
		// Starting game action
		case "start":
			step_count++;
			start();
			break;
		// Annoying, trying-to-brake-game action
		default:
			action = "unknown"
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
			parse_input();
		}
	});

	$(".user-button").click(parse_input);
};

$(document).ready(main_controller);