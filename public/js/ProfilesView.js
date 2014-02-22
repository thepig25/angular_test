var app = angular.module('celebrityApp', ['ui.bootstrap']);

function CelebrityView($scope) {
	$scope.info = [];
	$scope.info = data;
	$scope.selectedIndex = 0;
	//Update the Selected Tab
	$scope.select= function(i) {
		$scope.selectedIndex=i;
	};
	$scope.mobile= function(i) {
		$scope.selectedIndex=i;
	};
}
