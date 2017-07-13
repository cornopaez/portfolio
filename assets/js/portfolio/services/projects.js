app.factory("projectsData", ["$http", function($http){
	return $http.get("data/projects")
	.success(function(data){
		return data;
	})
	.error(function(err){
		return err;
	});
}]);