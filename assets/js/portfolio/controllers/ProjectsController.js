app.controller("ProjectsController", ["$scope", "projectsData", "$anchorScroll", function($scope, projectsData, $anchorScroll){
	projectsData.success(function(data){
		$scope.projects = data;
		$anchorScroll();
	});
}]);