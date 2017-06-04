var app = angular.module("Portfolio", ["ngRoute", "ngSanitize", "vcRecaptcha"]);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when("/", {
		controller: "HomeController",
		templateUrl: "views/home.html"
	})
	.when("/projects", {
		controller: "ProjectsController",
		templateUrl: "views/projects.html"
	})
	.when("/about", {
		controller: "AboutController",
		templateUrl: "views/about.html"
	})
	.when("/contact", {
		controller: "ContactController",
		templateUrl: "views/contact.html"
	})
	.when("/error", {
		controller: "AboutController",
		templateUrl: "views/error.html"
	})
	.when("/maintenance", {
		controller: "AboutController",
		templateUrl: "views/maintenance.html"
	})
	.when("/success", {
		controller: "ContactController",
		templateUrl: "views/contactSuccess.html"
	})
	.otherwise({
		redirectTo: "/error"
	});

	$locationProvider.html5Mode(true);

});