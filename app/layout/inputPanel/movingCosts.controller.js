(function(){
	'use strict'
	angular
		.module('app.inputPanel')
		.controller('movingCosts',movingCosts)

		movingCosts.$inject = ['$scope','$log','$rootScope']

		function movingCosts($scope,$log,$rootScope) {
			var rs = $rootScope;
			var vm = $scope;
			vm.fieldType = '£';
			vm.inputId = this.__proto__.constructor.name;
			vm.min = 1000;
			vm.max = 10000;
			vm.step = 1000;
			vm.entryValue = function() {
				rs.movingCosts = vm.entryInput;
				$log.log(rs);
			}

		}

}())