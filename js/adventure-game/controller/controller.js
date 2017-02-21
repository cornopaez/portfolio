// Global Game variables
var step_count = 0;
var running_game = false;
var current_location = "";
var current_task = "";

// Function to append text
// 		html_to_append: a pre-formatted HTML string.
var append_text = function(html_to_append) {
	$(".game-content").append("<p class=\"valid-command\"><em>" + $(".user-input").val() + "</em></p>" + html_to_append);
	// On click, it should scroll to have the new text at the top of the page
	// $('html, body').animate({
 //        scrollTop: $("#elementtoScrollToID").offset().top
 //    }, 2000);
	$(".user-input").val("");
};

// Game starting function
var start = function(){
	if (!running_game) {
		running_game = true;
		$(".welcome-text").hide();
		append_text(introduction);
	} else {
		alert(start_warning);
	}
};

// Function to parse input from user
var parse_input = function(){
	// Function Variables
	var input_string = "";
	var action = "";
	var world_item = "";

	/*RegEx variables
	-------------------------------------------*/
	// Items
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

	// Actions
	var go_to = /^go .+$/g;
	var look_around = /^look around .+$/g;
	var look_at = /^look at .+$/g;
	var inspect = /^inspect .+$/g;
	var examine = /^examine .+$/g;
	var talk_to = /^talk to .+$/g;
	var look_for = /^look for .+$/g;
	var interview = /^interview .+$/g;

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
						// obj.world_item = "unknown"
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
							append_text(location_error);
						}
						break;
					case (old_woman.test(world_item) ? world_item : ""):
						if (current_location === "apartment") {
							append_text(scene_html.old_woman);
						} else {
							append_text(location_error);
						}
						break;
					case (daughter.test(world_item) ? world_item : ""):
						if (current_location === "apartment") {
							append_text(scene_html.daughter);
						} else {
							append_text(location_error);
						}
						break;
					case (papers.test(world_item) ? world_item : ""):
					case (box.test(world_item) ? world_item : ""):
						if (current_location === "apartment") {
							append_text(valuables_html.papers);
						} else {
							append_text(location_error);
						}
						break;
					case (knife.test(world_item) ? world_item : ""):
						if (current_location === "apartment") {
							append_text(valuables_html.knife);
						} else {
							append_text(location_error);
						}
						break;
					case (gray_hairs.test(world_item) ? world_item : ""):
						if (current_location === "apartment") {
							append_text(valuables_html.hairs);
						} else {
							append_text(location_error);
						}
						break;
					case (gold.test(world_item) ? world_item : ""):
					case (earring.test(world_item) ? world_item : ""):
					case (silver.test(world_item) ? world_item : ""):
						if (current_location === "apartment") {
							append_text(valuables_html.expensive);
						} else {
							append_text(location_error);
						}
						break;
					case (clothes.test(world_item) ? world_item : ""):
						if (current_location === "apartment") {
							append_text(valuables_html.clothes);
						} else {
							append_text(location_error);
						}
						break;
					case (lightning_rod.test(world_item) ? world_item : ""):
						if (current_location === "street") {
							append_text(street_html.rod);
						} else {	
							append_text(location_error);
						}
						break;
					case (windows.test(world_item) ? world_item : ""):
						if (current_location === "apartment") {
							if (current_task === "escape") {
								if (hidden.test(world_item) ? world_item : "") {
									append_text(escape_html.hidden_window);
								} else {
									append_text(escape_html.visible_window);
								}
							} else {
								// Warning about not being in the correct task
							}
						} else {
							append_text(location_error);
						}
						break;
					case (door.test(world_item) ? world_item : ""):
						if (current_location === "apartment") {
							if (current_task === "escape") {
								append_text(escape_html.door);
							} else {
								// Warning about not being in the correct task
							}
						} else {	
							append_text(location_error);
						}
						break;
					case (chimney.test(world_item) ? world_item : ""):
						if (current_location === "apartment") {
							if (current_task === "escape") {
								append_text(escape_html.chimney);
							} else {
								// Warning about not being in the correct task
							}
						} else {	
							append_text(location_error);
						}
						break;
					default:

						break;
				}
				break;

			// Talk to Action
			case (talk_to.test(input_string) ? input_string : ""):
			case (interview.test(world_item) ? world_item : ""):
				world_item = input_string.substring(8);
				switch (world_item) {
					case (witness.test(world_item) ? world_item : ""):
					case (people.test(world_item) ? world_item : ""):
						if (current_location === "street") {
							append_text(interviews_html.start_text);
							current_location = "witness"
							// The above var needs to be refactored to current task
							// for better game management
						} else {
							append_text(location_error);
						}
						break;
					case (police.test(world_item) ? world_item : ""):
						if (current_location === "witness") {
							append_text(interviews_html.police);
						} else {
							append_text(location_error);
						}
						break;
					case (acquaintance.test(world_item) ? world_item : ""):
						if (current_location === "witness") {
							append_text(interviews_html.acquaintance);
						} else {
							append_text(location_error);
						}
						break;
					case (neighbor.test(world_item) ? world_item : ""):
						if (current_location === "witness") {
							append_text(interviews_html.neighbor);
						} else {
							append_text(location_error);
						}
						break;
					case (passerby.test(world_item) ? world_item : ""):
						if (current_location === "witness") {
							append_text(interviews_html.passerby);
						} else {
							append_text(location_error);
						}
						break;
					default:

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
							append_text(location_error);
						}
						break;
					default:

						break;
				}

				break;
			//Look Around action
			case (look_around.test(input_string) ? input_string : ""):
				world_item = input_string.substring(12);
				switch (world_item) {
					case (neigborhood.test(world_item) ? world_item : ""):
						if (current_location === "street") {
							append_text(street_html.start_text);
						} else {
							append_text(location_error);
						}
						break;
					default:

						break;
				}
				break;

			case "start":
				step_count++;
				start();
				break;

			// Annoying, trying-to-brake-game action
			default:
				alert("Something's gone wrong");
				break;
		}
	} else {
		switch (input_string) {
			case "start":
				step_count++;
				start();
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

$(document).ready(main_controller);