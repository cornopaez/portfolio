var app = angular.module("Portfolio", ["ngRoute", "ngSanitize"]);

app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		controller: "HomeController",
		templateUrl: "views/home.html"
	})
	.when("/Projects", {
		controller: "ProjectsController",
		templateUrl: "views/projects.html"
	})
	.when("/About", {
		controller: "AboutController",
		templateUrl: "views/about.html"
	})
	.when("/AdventureGame", {
		controller: "AboutController",
		templateUrl: "views/adventure-game.html"
	})
	.otherwise({
		redirectTo: "/"
	});
});