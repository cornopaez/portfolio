app.controller("HomeController", ["$scope", function($scope){
	$scope.homeText = {
		jumbotron: "Hi. I like to code.",
		support: {
			paragraph: "I'm a Pittsburgh-based developer with enough knowledge of every aspect of the stack to be dangerous (and break things). \n \n What make me stand out from others?",
			points: [
				{
					title: "Dedication",
					text: "Passion drives every project I own"
				},
				{
					title: "Character",
					text: "Flexibility and thoroughness- the two things that define me."
				},
				{
					title: "Creativity",
					text: "My main background has always been the creative side: a strength that cannot be improvised."
				}
			]
		}
	};
}]);