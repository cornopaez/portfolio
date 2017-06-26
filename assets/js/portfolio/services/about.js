app.factory("aboutData", ["$http", function($http){
	return $http.get("js/portfolio/data/about.js")
	.success(function(data){
		return data;
	})
	.error(function(err){
		return err;
	});
}]);