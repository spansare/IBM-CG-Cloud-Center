dashboardApp.controller('categoryController', function($scope, $http) {
   
	var urls = "/api/CategoryService/getCategories";
	
	
	$http({
		method : 'GET',
		url : 'api/CategoryService/getCategories'
	}).success(function(data, status, headers, config) {
		$scope.categoryList = data.result;
	}).error(function(data, status, headers, config) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
	});

	

});