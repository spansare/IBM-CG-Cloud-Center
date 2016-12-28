assetApp.controller('assetController', function($scope, $http, $location) {
   
	var categoryName = "Live Demo with Bluemix";
	
	$scope.getAssetsbyCategory = function(categoryName) {
		$location.path('/asset.html');
		/*console.log(categoryName);
		$http({
			method : 'POST',
			url : 'api/AssetService/getAssets',
			data : {
				'category' : categoryName
			}
		}).success(function(data, status, headers, config) {
			$scope.assetList = data.result;
		}).error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});*/
	}
	
});