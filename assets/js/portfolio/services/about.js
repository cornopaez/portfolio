app.factory("aboutData", ["$http", function($http){
	return $http.get("data/about")
	.success(function(data){
		return data.body;
	})
	.error(function(err){
		return err;
	});
}]);