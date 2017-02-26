/* Global Game variables
----------------------------------------------------------*/
var step_count = 0;
var error_count = 0;
var solve_attempts = 0;
var running_game = false;
var current_location = "";
var current_task = "";
var completed_tasks = [];
var game_start = 0;
var game_end = 0;

// RegEx - Items
var house = /house/g;
var street = /(?=.*\bstreet\b).+/g;
var neigborhood = /(?=.*\bneighborhood\b)/g;
var outside = /(?=\boutside\b)/g;
var inside = /(?=.*\bin\b)|(?=.*\binside\b)/g;
var victims = /(?=.*\bvictims\b)/g;
var bodies = /(?=.*\bbodies\b)/g;
var old_woman = /(?=.*\bold woman\b)|(?=.*\bl.espanaye\b)/g;
var daughter = /(?=.*\bdaughter\b)/g;
var papers = /(?=.*\bpapers\b)/g;
var box = /(?=.*\bbox\b)/g;
var knife = /(?=.*\bknife\b)/g;
var gray_hairs = /(?=.*\bhairs\b)/g;
var gold = /(?=.*\bgold\b)/g;
var earring = /(?=.*\bearring.\b)/g;
var silver = /(?=.*\bsilver\b)/g;
var clothes = /(?=.*\bclothes\b)/g;
var lightning_rod = /(?=.*\brod\b)/g;
var police = /(?=.*\bpolice\b)|(?=.*\bpoliceman\b)/g;
var witness = /(?=.*\bwitnes.+\b)/g;
var acquaintance = /(?=.*\bacquaintance\b)|(?=.*\bacquaintances\b)/g;
var neighbor = /(?=.*\bneighbor+\b)/g;
var people = /(?=.*\bpeople\b)/g;
var passerby = /(?=.*\bpassersby\b)|(?=.*\bpasserby\b)/g;
var escape = /(?=.*\bescape\b)|(?=.*\broute\b)/g;
var door = /(?=.*\bdoor\b)/g;
var chimney = /(?=.*\bchimney\b)|(?=.*\bfireplace\b)/g;
var windows = /(?=\bwindow\b)|(?=\bwindows\b)/g;
var hidden = /(?=.*\bhidden\b)/g;

// RegEx - Actions
var go_to = /^go .+$/g;
var look_around = /^look around$/g;
var look_at = /^look at .+$/g;
var inspect = /^inspect .+$/g;
var examine = /^examine .+$/g;
var talk_to = /^talk to .+$/g;
var look_for = /^look for .+$/g;
var interview = /^interview .+$/g;
var solve = /^solve mystery$/g;

/*Function for game
---------------------------------------------------------*/

// Function to append text
// 		html_to_append: a pre-formatted HTML string.
var append_text = function(html_to_append) {
	$(".game-content").append("<p class=\"valid-command\"><em>" + $(".user-input").val() + "</em></p>" + html_to_append);
	// On click, it should scroll to have the new text at the top of the page
	// $('html, body').animate({
 //        scrollTop: $("#elementtoScrollToID").offset().top
 //    }, 2000);
	$(".user-input").val("");
	step_count++;
	error_count = 0;
};

// Game starting function
var start = function(){
	if (!running_game) {
		running_game = true;
		$(".welcome-text").hide();
		$(".game-content").empty();
		append_text(introduction);
	} else {
		alert(start_warning);
	}
};

var game_lost = function(){
	$(".game-content").empty();
	append_text(game_lost_text(step_count, millis_to_readable(game_end - game_start)));
};

// This deals with multiple consecutive errors, remind user what options are
var error_handle = function(html_to_append){
	error_count++;
	$(".game-content").append(html_to_append);
	if (error_count >= 3) {
		if (!running_game) {
			append_text(guide_text_start);
		} else {
			append_text(guide_text_game);
		}
		error_count = 0;
	}
};

// This function pushes items to the completed task list
var check_completed_tasks = function(task_to_check){
	if (completed_tasks.indexOf(task_to_check) === -1) {
		completed_tasks.push(task_to_check);
	}
};

// This checks if all clues have been gathered
var test_solve = function(){
	if (completed_tasks.length === 15) {
		running_game = false;
		game_end = new Date().getTime();
		append_text(reveal_text);
		append_text(game_won_text(step_count, millis_to_readable(game_end - game_start)));
	} else {
		append_text(not_enough_clues(3 - solve_attempts));
	}
};

// Turning milliseconds to readable form
// Adapted from StackOverflow here (top answer):
// http://stackoverflow.com/questions/21294302/converting-milliseconds-to-minutes-and-seconds-with-javascript
var millis_to_readable = function(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return (seconds == 60 ? (minutes+1) + ":00" : minutes + "min " + (seconds < 10 ? "0" : "") + seconds + "s");
}

// Function to parse input from user
var parse_input = function(){
	// Function Variables
	var input_string = "";
	var action = "";
	var world_item = "";

	// Clean input a bit
	input_string = $(".user-input").val().toLowerCase();
	input_string.replace(/\s+/g, ' ').trim(); //Delete any extra spaces in between and possibly before/after

	if (running_game) {
		// Parse through text to create object to be returned
		switch (input_string) {

			// Go to Action
			case (go_to.test(input_string) ? input_string : ""):
				world_item = input_string.substring(3);
				switch (world_item) {
					case (house.test(world_item) ? world_item : ""):
					case (street.test(world_item) ? world_item : ""):
					case (neigborhood.test(world_item) ? world_item : ""):
						current_location = "street";
						append_text(house_html.start_text);
						break;
					case (outside.test(world_item) ? world_item : ""):
						if (current_location === "apartment") {
							current_location = "street";
							append_text(going_outside);
						} else {
							append_text(already_outside);
						}
						break;
					case (inside.test(world_item) ? world_item : ""):
						current_location = "apartment";
						append_text(apartment_html.start_text);
						break;
					default:
						error_handle(go_to_error);
						break;
				}
				break;

			// Look At and Inspect Action
			case (look_at.test(input_string) ? input_string : ""):
			case (inspect.test(input_string) ? input_string : ""):
			case (examine.test(input_string) ? input_string : ""):
				world_item = input_string.substring(8);
				switch (world_item) {
					case (victims.test(world_item) ? world_item : ""):
					case (bodies.test(world_item) ? world_item : ""):
						if (current_location === "apartment") {
							append_text(scene_html.start_text);
						} else {
							error_handle(location_error);
						}
						break;
					case (old_woman.test(world_item) ? world_item : ""):
						if (current_location === "apartment") {
							append_text(scene_html.old_woman);
							check_completed_tasks("old woman");
						} else {
							error_handle(location_error);
						}
						break;
					case (daughter.test(world_item) ? world_item : ""):
						if (current_location === "apartment") {
							append_text(scene_html.daughter);
							check_completed_tasks("daughter");
						} else {
							error_handle(location_error);
						}
						break;
					case (papers.test(world_item) ? world_item : ""):
					case (box.test(world_item) ? world_item : ""):
						if (current_location === "apartment") {
							append_text(valuables_html.papers);
							check_completed_tasks("papers");
						} else {
							error_handle(location_error);
						}
						break;
					case (knife.test(world_item) ? world_item : ""):
						if (current_location === "apartment") {
							append_text(valuables_html.knife);
							check_completed_tasks("knife");
						} else {
							error_handle(location_error);
						}
						break;
					case (gray_hairs.test(world_item) ? world_item : ""):
						if (current_location === "apartment") {
							append_text(valuables_html.hairs);
							check_completed_tasks("hairs");
						} else {
							error_handle(location_error);
						}
						break;
					case (gold.test(world_item) ? world_item : ""):
					case (earring.test(world_item) ? world_item : ""):
					case (silver.test(world_item) ? world_item : ""):
						if (current_location === "apartment") {
							append_text(valuables_html.expensive);
							check_completed_tasks("expensive");
						} else {
							error_handle(location_error);
						}
						break;
					case (clothes.test(world_item) ? world_item : ""):
						if (current_location === "apartment") {
							append_text(valuables_html.clothes);
							check_completed_tasks("clothes");
						} else {
							error_handle(location_error);
						}
						break;
					case (lightning_rod.test(world_item) ? world_item : ""):
						if (current_location === "street") {
							append_text(street_html.rod);
							check_completed_tasks("rod");
						} else {	
							error_handle(location_error);
						}
						break;
					case (windows.test(world_item) ? world_item : ""):
						if (current_location === "apartment") {
							if (current_task === "escape") {
								if (hidden.test(world_item) ? world_item : "") {
									append_text(escape_html.hidden_window);
									check_completed_tasks("window2");
								} else {
									append_text(escape_html.visible_window);
									check_completed_tasks("window1");
								}
							} else {
								error_handle(task_error);
							}
						} else {
							error_handle(location_error);
						}
						break;
					case (door.test(world_item) ? world_item : ""):
						if (current_location === "apartment") {
							if (current_task === "escape") {
								append_text(escape_html.door);
								check_completed_tasks("door");
							} else {
								error_handle(task_error);
							}
						} else {	
							error_handle(location_error);
						}
						break;
					case (chimney.test(world_item) ? world_item : ""):
						if (current_location === "apartment") {
							if (current_task === "escape") {
								append_text(escape_html.chimney);
								check_completed_tasks("chimney");
							} else {
								error_handle(task_error);
							}
						} else {	
							error_handle(location_error);
						}
						break;
					default:
							error_handle(look_at_error);
						break;
				}
				break;

			// Talk to Action
			case (talk_to.test(input_string) ? input_string : ""):
			case (interview.test(input_string) ? input_string : ""):
				world_item = input_string.substring(8);
				switch (world_item) {
					case (witness.test(world_item) ? world_item : ""):
					case (people.test(world_item) ? world_item : ""):
						if (current_location === "street") {
							append_text(interviews_html.start_text);
							current_task = "witness"
						} else {
							error_handle(location_error);
						}
						break;
					case (police.test(world_item) ? world_item : ""):
						if (current_task === "witness") {
							append_text(interviews_html.police);
							check_completed_tasks("police");
						} else {
							error_handle(location_error);
						}
						break;
					case (acquaintance.test(world_item) ? world_item : ""):
						if (current_task === "witness") {
							append_text(interviews_html.acquaintance);
							check_completed_tasks("acquaintance");
						} else {
							error_handle(location_error);
						}
						break;
					case (neighbor.test(world_item) ? world_item : ""):
						if (current_task === "witness") {
							append_text(interviews_html.neighbor);
							check_completed_tasks("neighbor");
						} else {
							error_handle(location_error);
						}
						break;
					case (passerby.test(world_item) ? world_item : ""):
						if (current_task === "witness") {
							append_text(interviews_html.passerby);
							check_completed_tasks("passerby");
						} else {
							error_handle(location_error);
						}
						break;
					default:
						error_handle(look_at_error);
						break;
				}
				break;

			// Look for Action
			case (look_for.test(input_string) ? input_string : ""):
				world_item = input_string.substring(9);
				switch (world_item) {
					case (escape.test(world_item) ? world_item : ""):
						if (current_location === "apartment") {							
							append_text(escape_html.start_text);
							current_task = "escape"
						} else {
							error_handle(location_error);
						}
						break;
					default:
						error_handle(look_at_error);
						break;
				}

				break;
			//Look Around action
			case (look_around.test(input_string) ? input_string : ""):
				switch (current_location) {
					case "street":
						append_text(street_html.start_text);
						break;
					case "apartment":
						append_text(apartment_html.start_text);
						break;
					default:
						error_handle(look_around_error);
						break;
				}
				break;

			case "start":
				step_count++;
				start();
				break;

			case "solve mystery":
				solve_attempts++;
				if (solve_attempts > 2){
					// Game ending logic
					running_game = false;
					game_end = new Date().getTime();
					game_lost();

				} else {
					test_solve();
				}
				break;
			// Debug game ending logic
			// case "populate array":
			// 	for (var i = 0; i < 15; i++) {
			// 		completed_tasks.push(i);
			// 	}
			// 	alert("Populated");
			// 	break;

			// default:
			// 	error_handle(general_error);
			// 	break;
		}
	} else {
		// Options for before starting game.
		switch (input_string) {
			case "start":
				solve_attempts = 0;
				completed_tasks = [];
				step_count = 0;
				step_count++;
				game_start = new Date().getTime();
				start();
				break;
			default: 
				// Annoying, trying-to-brake-game action
				error_handle(general_error);
				break;
		}
	}
};

var main_controller = function(){
	$(".user-input").on("keypress", function(e){
		if(e.keyCode === 13){
			parse_input();
		}
	});

	$(".user-button").click(parse_input);
};

/*Root
------------------------------------------------------------*/
$(document).ready(main_controller);