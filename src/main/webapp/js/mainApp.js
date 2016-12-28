var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.config(['$routeProvider', function($routeProvider) {
	   $routeProvider.
	   
	   when('/getAssets', {
	      templateUrl: 'asset.html', controller: 'assetController'
	   }).
	   
	   when('/catalog', {
	      templateUrl: 'category.html', controller: 'categoryController'
	   }).
	   
	   otherwise({
	      redirectTo: '/catalog'
	   });
		
	}]);


mainApp.controller('categoryController', ['$rootScope', '$scope', 'assetService', function ($rootScope, $scope, assetService) {

	$scope.assetService = assetService;   
   
	$http({
		method : 'GET',
	url : 'api/CategoryService/getCategories'
	}).success(function(data, status, headers, config) {
		$scope.categoryList = data.result;
	}).error(function(data, status, headers, config) {
		// called asynchronously if an error occurs
	// or server returns response with an error status.
	});
	
	$scope.getAssetsbyCategory = function(categoryName) {
		
		console.log(categoryName);
		var url = "http://" + $window.location.host + "/asset.html";
    	$window.location.href = url;
	}
       
}]);



mainApp.controller('assetController', ['$rootScope', '$scope', 'assetService', function ($rootScope, $scope, assetService) {

	$scope.assetService = assetService;
	
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

    
}]);


    
mainApp.service('assetService', function() {
	
      this.xxx = "yyy";
    
});