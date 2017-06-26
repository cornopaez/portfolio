app.controller("AboutController", ["$scope", "aboutData","$anchorScroll", function($scope, aboutData, $anchorScroll){
	aboutData.success(function(data){
		$scope.aboutText = data;
		$anchorScroll();
	});
}])