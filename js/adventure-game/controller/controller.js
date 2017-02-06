var user_click = function(){
	$(".welcome-text").hide();
	$(".adventure-text").append("<p>" + $(".user-input").val() + "</p>");
};

$(document).ready(function(){

	var main_form = document.querySelector('.main-form');

	main_form.onkeypress = function (e) {
	  if ( !e.metaKey ) {
	    e.preventDefault();
	  }
	  console.log(e);
	};


	$(".user-button").click(user_click);
});