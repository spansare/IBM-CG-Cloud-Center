dashboardApp.controller('categoryController', function($scope, $http) {
   
	
	$http({
		method : 'GET',
		url : 'api/CategoryService/getCategories'
	}).success(function(data, status, headers, config) {
		$scope.categoryList = data.result;
	}).error(function(data, status, headers, config) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
	});
	
	
	$scope.user = {
			username: "",
			password: "",
			
			validateLogin: function() {
				var jsonData = "{\"username\":\"" + $scope.user.username + "\",\"password\":\"" + $scope.user.password + "\"}";
				$http({
					method : 'POST',
					url : 'api/UserService/validateLogin',
					data : jsonData
				}).success(function(data, status, headers, config) {
					$scope.loginResult = data;
				}).error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});
			}
	}

});