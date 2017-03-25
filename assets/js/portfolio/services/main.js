app.factory("mainText", ["$http", function($http){
	return $http.get("assets/js/portfolio/data/main.js")
	.success(function(data){
		return data;
	})
	.error(function(err){
		return err;
	});
}]);