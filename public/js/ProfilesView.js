/*exported app, ProfilesViewCTRL*/
/*global data, angular */

//app
var app = angular.module('ProfilesViewApp', []);

//controllor
function ProfilesViewCTRL($scope) {
	'use strict';
	//Create Scope
	$scope.info = [];
	$scope.info = data;
	$scope.selectedIndex = 0;
	
	//Function to update and select tab
	$scope.select= function(i) {
		$scope.selectedIndex=i;
	};
}
