app.factory("projectsData", ["$http", function($http){
	return $http.get("js/portfolio/data/projects.js")
	.success(function(data){
		return data;
	})
	.error(function(err){
		return err;
	});
}]);