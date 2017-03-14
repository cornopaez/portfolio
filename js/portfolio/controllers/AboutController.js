app.controller("AboutController", ["$scope", "aboutData", function($scope, aboutData){
	aboutData.success(function(data){
		$scope.aboutText = data;
	});
}])