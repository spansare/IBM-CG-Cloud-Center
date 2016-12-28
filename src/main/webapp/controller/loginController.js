loginApp.controller('loginController', function($scope, $http) {
		
	$scope.user = {
			username: "",
			password: "",
			
			validateLogin: function() {
				var jsonData = "{\"username\":\"" + $scope.user.username + "\",\"password\":\"" + $scope.user.password + "\"}";
				$http({
					method : 'POST',
					url : 'loginServlet',
					data : jsonData
				}).success(function(data, status, headers, config) {
					$scope.loginResult = data.result;
					
				}).error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});
			}
	}

});