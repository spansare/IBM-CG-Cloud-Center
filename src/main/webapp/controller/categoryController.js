dashboardApp.controller('categoryController', function($scope, $http, $location) {
   
	
	$http({
		method : 'GET',
		url : 'api/CategoryService/getCategories'
	}).success(function(data, status, headers, config) {
		$scope.categoryList = data.result;
	}).error(function(data, status, headers, config) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
	});
	
	function getAssets(categoryName) {
		console.log(categoryName);
		$http({
			method : 'GET',
			url : 'api/AssetService/getAssets',
			data : {
				'category' : categoryName
			}
		}).success(function(data, status, headers, config) {
			$scope.assetList = data.result;
		}).error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
	}
	
	function getAssetsbyCategory() {
		console.log(categoryName);
		$http({
			method : 'GET',
			url : 'api/AssetService/getAssets',
			data : {
				'category' : "Live Demo with Bluemix"
			}
		}).success(function(data, status, headers, config) {
			$scope.assetList = data.result;
		}).error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
	}
});