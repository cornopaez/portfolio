app.factory("mainText", ["$http", function($http){
	return $http.get("data/main")
	.success(function(data){
		return data;
	})
	.error(function(err){
		return err;
	});
}]);