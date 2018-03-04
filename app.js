/**
 * app.js
 * This files contains both the main module and controller for the Property-listings application
 * All the functions are included in this file since it is a small application
 * @version 0.5
 * @author Marian John Bosco
*/
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

				// Return true if id is visible in the array
				$scope.isVisible = function(id) {
					return true;
				};

				//When hovered over listing displays the Add/Remove PropertyButton.
				$scope.hoverIn = function(){
					this.hoverEdit = true;
				};

				//When hovered out of listing hides the Add/Remove PropertyButton.
				$scope.hoverOut = function(){
					this.hoverEdit= false;
				};

				//Adds Property from result's list to saved list
				$scope.addProperty = function(item){
					$scope.saved.push(item);
						$scope.results.splice($scope.results.indexOf(item), 1);
				};

				//Removes Property from saved list and moves back to Result's list (New functionality included to add property back to results list)
				$scope.removeProperty = function(item){
					$scope.results.push(item);
						$scope.saved.splice($scope.saved.indexOf(item), 1);
				};
			});
		});

})();