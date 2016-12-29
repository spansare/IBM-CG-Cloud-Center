var adminApp = angular.module('adminApp', ['ngRoute']);

adminApp.config(['$routeProvider', function($routeProvider) {
	   $routeProvider.
	   
	   when('/getAdminAssets', {
	      templateUrl: 'admin_asset.html', controller: 'assetAdminController'
	   }).
	   
	   when('/adminCatalog', {
	      templateUrl: 'admin_category.html', controller: 'categoryAdminController'
	   }).
	   
	   otherwise({
	      redirectTo: '/adminCatalog'
	   });
		
	}]);


adminApp.controller('categoryAdminController', ['$rootScope', '$scope', '$http', '$window', 'assetAdminService', function ($rootScope, $scope, $http, $window, assetAdminService) {

	$scope.assetAdminService = assetAdminService;   
   
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
		$scope.assetAdminService.getAssetsbyCategory(categoryName)
			.then(function(result) {
			$scope.assetAdminService.assetList = result;
			var url = "#getAdminAssets";
	    	$window.location.href = url;
		});
		
	}
       
}]);



adminApp.controller('assetAdminController', ['$rootScope', '$scope', '$http', 'assetAdminService', function ($rootScope, $scope, $http, assetAdminService) {

	$scope.assetAdminService = assetAdminService;
	
	$scope.categoryName = $scope.assetAdminService.getSelectedCategory();
	
	$scope.assetList = $scope.assetAdminService.getAssets();
    
}]);


    
adminApp.service('assetAdminService', ['$http', '$q', function($http, $q) {
	
      this.categoryName = "Live Demo with Bluemix";
      this.assetList = "";
      var deferred = $q.defer();
      this.getAssetsbyCategory = function(category_input) {
    	  this.categoryName = category_input;
    	  $http({
    			method : 'POST',
    			url : 'api/AssetService/getAssets',
    			data : {
    				'category' : this.categoryName
    			}
    		}).success(function(data, status, headers, config) {
    			deferred.resolve(data.result);
    			this.assetList = data.result;
    			
    		}).error(function(data, status, headers, config) {
    			// called asynchronously if an error occurs
    			// or server returns response with an error status.
    		});
    	  
    	  return deferred.promise;
      },
      
      this.getSelectedCategory = function() {
    	  
    	  return this.categoryName;
      }
    
      this.getAssets = function() {
    	  
    	  return this.assetList;
      }
}]);