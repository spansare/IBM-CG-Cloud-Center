var adminApp = angular.module('adminApp', ['ngRoute']);

adminApp.config(['$routeProvider', function($routeProvider) {
	   $routeProvider.
	   
	   when('/getAdminAssets', {
	      templateUrl: 'admin_assetView.html', controller: 'assetAdminController'
	   }).
	   
	   when('/adminCatalog', {
	      templateUrl: 'admin_categoryView.html', controller: 'categoryAdminController'
	   }).
	   
	   when('/createCategory', {
	      templateUrl: 'createCategoryView.html', controller: 'categoryManagementController'
	   }).
	   
	   when('/createAsset', {
	      templateUrl: 'createAssetView.html', controller: 'assetManagementController'
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


adminApp.controller('categoryManagementController', ['$rootScope', '$scope', '$http', '$q', '$window', function ($rootScope, $scope, $http, $q, $window) {

	var deferred = $q.defer();
	
	$scope.category = {
			category_name : "",
			short_description : "",
			long_description : "",
			image_url : "",
			result : false,
			
			createCategory : function() {
				$http({
	    			method : 'POST',
	    			url : 'api/CategoryService/createCategory',
	    			data : {
	    				'name' : $scope.category.category_name,
	    				'short_description' : $scope.category.short_description,
	    				'long_description' : $scope.category.long_description,
	    				'image_url' : $scope.category.image_url
	    			}
	    		}).success(function(data, status, headers, config) {
	    			$scope.result = data.result;
	    			deferred.resolve(data.result);
	    			alert("Category created successfully!!!");
	    			var url = "#adminCatalog";
	    	    	$window.location.href = url;
	    			
	    		}).error(function(data, status, headers, config) {
	    			// called asynchronously if an error occurs
	    			// or server returns response with an error status.
	    		});
				
				return deferred.promise;
			}
	}
    
}]);


adminApp.controller('assetManagementController', ['$rootScope', '$scope', '$http', '$q', '$window' , function ($rootScope, $scope, $http, $q, $window) {

	var deferred = $q.defer();
	
	$scope.asset = {
			name : "",
			category : "",
			short_description : "",
			long_description : "",
			image_url : "",
			document_url : "",
			demo_url : "",
			result : false,
			
			createCategory : function() {
				$http({
	    			method : 'POST',
	    			url : 'api/AssetService/createAsset',
	    			data : {
	    				'name' : $scope.asset.category_name,
	    				'category' : $scope.asset.category,
	    				'short_description' : $scope.asset.short_description,
	    				'long_description' : $scope.asset.long_description,
	    				'image_url' : $scope.asset.image_url,
	    				'document_url' : $scope.asset.document_url,
	    				'demo_url' : $scope.asset.demo_url
	    			}
	    		}).success(function(data, status, headers, config) {
	    			deferred.resolve(data.result);
	    			alert("Asset created successfully!!!");
	    			var url = "#getAdminAssets";
	    	    	$window.location.href = url;
	    			
	    		}).error(function(data, status, headers, config) {
	    			// called asynchronously if an error occurs
	    			// or server returns response with an error status.
	    		});
				
				return deferred.promise;
			}
	}
    
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

function showCategoryForm(){
		$('#categoryName').val('');
		$('#shortDesc').val('');
		$('#longDesc').val('');
		$('#imageUrl').val('');
        $('#categorycontainer').show();
}

function hideCategoryForm(){
		$('#categoryName').val('');
		$('#shortDesc').val('');
		$('#longDesc').val('');
		$('#imageUrl').val('');
        $('#categorycontainer').hide();
}
