app.controller("HomeController", ["$scope", "mainText", function($scope, mainText){
	mainText.success(function(data){
		$scope.homeText = data;
	});
}]);