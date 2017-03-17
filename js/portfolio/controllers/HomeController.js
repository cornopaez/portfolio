app.controller("HomeController", ["$scope", "mainText", "$anchorScroll", function($scope, mainText, $anchorScroll){
	mainText.success(function(data){
		$scope.homeText = data;
		$anchorScroll();
	});
}]);