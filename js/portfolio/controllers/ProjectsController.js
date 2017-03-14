app.controller("ProjectsController", ["$scope", "projectsData", function($scope, projectsData){
	projectsData.success(function(data){
		$scope.projects = data;
	});
}]);