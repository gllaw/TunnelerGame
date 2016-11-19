var app = angular.module("myApp", []);


app.controller('tileController', function($scope){
		$scope.test = "Am I working?";
		console.log("am I working?");



$scope.addValue = function($index){
	console.log('Gloria is a butthead');

}


$scope.tiles = [
	{position: 'A1', value:null, player:null},
	{position: 'A2', value:null, player:null},
	{position: 'A3', value:null, player:null},
	{position: 'A4', value:null, player:null},
	{position: 'A5', value:null, player:null},

	{position: 'B1', value:null, player:null},
	{position: 'B2', value:null, player:null},
	{position: 'B3', value:null, player:null},
	{position: 'B4', value:null, player:null},
	{position: 'B5', value:null, player:null},

	{position: 'C1', value:null, player:null},
	{position: 'C2', value:null, player:null},
	{position: 'C3', value:null, player:null},
	{position: 'C4', value:null, player:null},
	{position: 'C5', value:null, player:null},

	{position: 'D1', value:null, player:null},
	{position: 'D2', value:null, player:null},
	{position: 'D3', value:null, player:null},
	{position: 'D4', value:null, player:null},
	{position: 'D5', value:null, player:null},

	{position: 'E1', value:null, player:null},
	{position: 'E2', value:null, player:null},
	{position: 'E3', value:null, player:null},
	{position: 'E4', value:null, player:null},
	{position: 'E5', value:null, player:null},

	{position: 'F1', value:null, player:null},
	{position: 'F2', value:null, player:null},
	{position: 'F3', value:null, player:null},
	{position: 'F4', value:null, player:null},
	{position: 'F5', value:null, player:null}

	]

})



