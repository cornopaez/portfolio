app.factory("aboutData", ["$http", function($http){
	return $http.get("assets/js/portfolio/data/about.js")
	.success(function(data){
		return data;
	})
	.error(function(err){
		return err;
	});
}]);