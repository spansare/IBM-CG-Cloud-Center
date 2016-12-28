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


mainApp.controller('categoryController', ['$rootScope', '$scope', '$http', '$window', 'assetService', function ($rootScope, $scope, $http, $window, assetService) {

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
		var myData = $scope.assetService.getAssetsbyCategory(categoryName);
		myData.then(function(result) {
			var url = "#getAssets";
	    	$window.location.href = url;
		});
		
	}
       
}]);



mainApp.controller('assetController', ['$rootScope', '$scope', '$http', 'assetService', function ($rootScope, $scope, $http, assetService) {

	$scope.assetService = assetService;
	
	$scope.categoryName = $scope.assetService.getSelectedCategory();
	
	$scope.assetList = $scope.assetService.getAssets();
    
}]);


    
mainApp.service('assetService', ['$http', function($http) {
	
      this.categoryName = "Live Demo with Bluemix";
      this.assetList = "";
      
      this.getAssetsbyCategory = function(category_input) {
    	  this.categoryName = category_input;
    	  $http({
    			method : 'POST',
    			url : 'api/AssetService/getAssets',
    			data : {
    				'category' : this.categoryName
    			}
    		}).success(function(data, status, headers, config) {
    			this.assetList = data.result;
    			return this.assetList;
    		}).error(function(data, status, headers, config) {
    			// called asynchronously if an error occurs
    			// or server returns response with an error status.
    		});
      },
      
      this.getSelectedCategory = function() {
    	  
    	  return this.categoryName;
      }
    
      this.getAssets = function() {
    	  
    	  return this.assetList;
      }
}]);