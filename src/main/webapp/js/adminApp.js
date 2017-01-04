var adminApp = angular.module('adminApp', ['ngRoute']);

adminApp.config(['$routeProvider', function($routeProvider) {
	   $routeProvider.
	   
	   when('/getAdminAssets', {
	      templateUrl: 'admin_assetView.html', controller: 'assetAdminController'
	   }).
	   
	   when('/adminCatalog', {
	      templateUrl: 'admin_categoryView.html', controller: 'categoryAdminController'
	   }).
	   
	   otherwise({
	      redirectTo: '/adminCatalog'
	   });
		
	}]);


adminApp.controller('categoryAdminController', ['$rootScope', '$scope', '$http', '$window', '$q', 'assetAdminService', function ($rootScope, $scope, $http, $window, $q, assetAdminService) {

	$scope.assetAdminService = assetAdminService;  
	$scope.categoryTypes = ["Generic" , "Industry" , "Technology"];
	var deferred = $q.defer();
	$scope.showCreateCategory = false;
	$scope.showUpdateCategory = false;
	$scope.showDeleteCategory = false;
   
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
	
	$scope.showAddCategoryForm = function() {
		$scope.showCreateCategory = true;
	}
	
	$scope.hideAddCategoryForm = function() {
		$scope.showCreateCategory = false;
	}
	
	$scope.showUpdateCategoryForm = function() {
		$scope.showUpdateCategory = true;
	}
	
	$scope.hideUpdateCategoryForm = function() {
		$scope.showUpdateCategory = false;
	}
	
	$scope.showDeleteCategoryForm = function() {
		$scope.showDeleteCategory = true;
	}
	
	$scope.hideDeleteCategoryForm = function() {
		$scope.showDeleteCategory = false;
	}
	
	$scope.category = {
			category_name : "",
			short_description : "",
			long_description : "",
			image_url : "",
			category_type : "",
			result : false,
			
			createCategory : function() {
				$http({
	    			method : 'POST',
	    			url : 'api/CategoryService/createCategory',
	    			data : {
	    				'name' : $scope.category.category_name,
	    				'short_description' : $scope.category.short_description,
	    				'long_description' : $scope.category.long_description,
	    				'image_url' : $scope.category.image_url,
	    				'category_type' : $scope.category.category_type
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
	    			alert("Failed to create Category.");
	    		});
				
				return deferred.promise;
			},
			
			updateCategory : function() {
				$http({
	    			method : 'POST',
	    			url : 'api/CategoryService/updateCategory',
	    			data : {
	    				'name' : $scope.category.category_name,
	    				'short_description' : $scope.category.short_description,
	    				'long_description' : $scope.category.long_description,
	    				'image_url' : $scope.category.image_url,
	    				'category_type' : $scope.category.category_type
	    			}
	    		}).success(function(data, status, headers, config) {
	    			$scope.result = data.result;
	    			deferred.resolve(data.result);
	    			alert("Category updated successfully!!!");
	    			var url = "#adminCatalog";
	    	    	$window.location.href = url;
	    			
	    		}).error(function(data, status, headers, config) {
	    			// called asynchronously if an error occurs
	    			// or server returns response with an error status.
	    			alert("Failed to update Category.");
	    		});
				
				return deferred.promise;
			},
			
			updateView : function() {
				 angular.forEach($scope.categoryList, function(item){
	                   console.log(item.category_name);  
	                   if(angular.equals($scope.category.category_name, item.category_name)) {
	                	   $scope.category.short_description = item.short_description;
	                	   $scope.category.long_description = item.long_description;
	                	   $scope.category.image_url = item.image_url;
	                	   $scope.category.category_type = item.category_type;
	                	   return;
	                   }
	               })
			},
			
			deleteCategory : function() {
				$http({
	    			method : 'POST',
	    			url : 'api/CategoryService/deleteCategory',
	    			data : {
	    				'name' : $scope.category.category_name
	    			}
	    		}).success(function(data, status, headers, config) {
	    			$scope.result = data.result;
	    			deferred.resolve(data.result);
	    			alert("Category deleted successfully!!!");
	    			var url = "#adminCatalog";
	    	    	$window.location.href = url;
	    			
	    		}).error(function(data, status, headers, config) {
	    			// called asynchronously if an error occurs
	    			// or server returns response with an error status.
	    			alert("Failed to delete Category.");
	    		});
				
				return deferred.promise;
			}
			
	}
	
}]);



adminApp.controller('assetAdminController', ['$rootScope', '$scope', '$http', '$q', '$window', 'assetAdminService', function ($rootScope, $scope, $http, $q, $window, assetAdminService) {

	$scope.assetAdminService = assetAdminService;
	
	$scope.categoryName = $scope.assetAdminService.getSelectedCategory();
	
	$scope.assetList = $scope.assetAdminService.getAssets();
	
	var deferred = $q.defer();
	$scope.showCreateAsset = false;
	$scope.showUpdateAsset = false;
	$scope.showDeleteAsset = false;
	
	$scope.showCreateAssetForm = function() {
		$scope.showCreateAsset = true;
	}
	
	$scope.hideCreateAssetForm = function() {
		$scope.showCreateAsset = false;
	}
	
	$scope.showUpdateAssetForm = function() {
		$scope.showUpdateAsset = true;
	}
	
	$scope.hideUpdateAssetForm = function() {
		$scope.showUpdateAsset = false;
	}
	
	$scope.showDeleteAssetForm = function() {
		$scope.showDeleteAsset = true;
	}
	
	$scope.hideDeleteAssetForm = function() {
		$scope.showDeleteAsset = false;
	}
	
	$scope.asset = {
			name : "",
			category : "",
			short_description : "",
			long_description : "",
			owner : "",
			business_unit : "",
			image_url : "",
			document_url : "",
			demo_url : "",
			
			result : false,
			
			createAsset : function() {
				$http({
	    			method : 'POST',
	    			url : 'api/AssetService/createAsset',
	    			data : {
	    				'name' : $scope.asset.name,
	    				'category' : $scope.categoryName,
	    				'short_description' : $scope.asset.short_description,
	    				'long_description' : $scope.asset.long_description,
	    				'owner' : $scope.asset.owner,
	    				'business_unit' : $scope.asset.business_unit,
	    				'image_url' : $scope.asset.image_url,
	    				'document_url' : $scope.asset.document_url,
	    				'demo_url' : $scope.asset.demo_url,
	    			}
	    		}).success(function(data, status, headers, config) {
	    			deferred.resolve(data.result);
	    			alert("Asset created successfully!!!");
	    			var url = "#getAdminAssets";
	    	    	$window.location.href = url;
	    			
	    		}).error(function(data, status, headers, config) {
	    			// called asynchronously if an error occurs
	    			// or server returns response with an error status.
	    			alert("Failed to create Asset.");
	    		});
				
				return deferred.promise;
			},
			
			updateAsset : function() {
				$http({
	    			method : 'POST',
	    			url : 'api/AssetService/updateAsset',
	    			data : {
	    				'name' : $scope.asset.name,
	    				'category' : $scope.categoryName,
	    				'short_description' : $scope.asset.short_description,
	    				'long_description' : $scope.asset.long_description,
	    				'owner' : $scope.asset.owner,
	    				'business_unit' : $scope.asset.business_unit,
	    				'image_url' : $scope.asset.image_url,
	    				'document_url' : $scope.asset.document_url,
	    				'demo_url' : $scope.asset.demo_url,
	    			}
	    		}).success(function(data, status, headers, config) {
	    			deferred.resolve(data.result);
	    			alert("Asset updated successfully!!!");
	    			var url = "#getAdminAssets";
	    	    	$window.location.href = url;
	    			
	    		}).error(function(data, status, headers, config) {
	    			// called asynchronously if an error occurs
	    			// or server returns response with an error status.
	    			alert("Failed to create Asset.");
	    		});
				
				return deferred.promise;
			},
			
			updateView : function() {
				 angular.forEach($scope.assetList, function(item){
	                   console.log(item.asset_title);  
	                   if(angular.equals($scope.asset.asset_title, item.asset_title)) {
	                	   $scope.asset.short_description = item.short_description;
	                	   $scope.asset.long_description = item.long_description;
	                	   $scope.asset.image_url = item.image_url;
	                	   $scope.asset.category = item.category;
	                	   $scope.asset.owner = item.owner;
	                	   $scope.asset.business_unit = item.business_unit;
	                	   $scope.asset.document_url = item.document_url;
	                	   $scope.asset.demo_url = item.demo_url;
	                	   return;
	                   }
	               })
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

