assetApp.controller('assetController', function($scope, $http, $location) {
   
	$scope.categoryName = "Live Demo with Bluemix";
	
		console.log($scope.categoryName);
		$http({
			method : 'POST',
			url : 'api/AssetService/getAssets',
			data : {
				'category' : $scope.categoryName
			}
		}).success(function(data, status, headers, config) {
			$scope.assetList = data.result;
		}).error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});

	
});