(function(){
	var app = angular.module('property', [ ]);
		//Controller defines a dependency to the $scope and the $http module
		app.controller('PropertyController', function($scope, $http){
			//An HTTP GET request to the results.json endpoint is made with the get method returning a promise object with th success method.
			$http.get("results.json").success(function(data){
				//the json data is assigned to $scope.results to make it available.
				$scope.results = [];
					angular.forEach(data.results, function(value, key){
						$scope.results.push(value);
					});
	 
				$scope.saved = [];
					angular.forEach(data.saved, function(value,key){
						$scope.saved.push(value);
					})
			});
		});

})();