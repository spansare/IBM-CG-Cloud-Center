dashboardApp.controller('categoryController', function($scope, $http) {
   
	var urls = "/api/CategoryService/getCategories";
	
	$scope.getDataFromServer = function() {
		$http({
			method : 'GET',
			url : 'javaAngularJS'
		}).success(function(data, status, headers, config) {
			$scope.person = data;
		}).error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});

	};

});