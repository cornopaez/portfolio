var app = angular.module("Portfolio", ["ngRoute", "ngSanitize"]);

app.config(function($routeProvider, $locationProvider) {
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
	.when("/Error", {
		controller: "AboutController",
		templateUrl: "views/error.html"
	})
	.when("/Maintenance", {
		controller: "AboutController",
		templateUrl: "views/maintenance.html"
	})
	.otherwise({
		redirectTo: "/Error"
	});

	$locationProvider.html5Mode(true);

});