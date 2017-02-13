(function(){
	'use strict'
	angular
		.module('app.inputPanel')
		.controller('currentSavings',currentSavings)

		currentSavings.$inject = ['$scope','$log','$rootScope']

		function currentSavings($scope,$log,$rootScope) {
			var rs = $rootScope;
			var vm = $scope;
			vm.fieldType = '£';
			vm.inputId = this.__proto__.constructor.name;
			vm.min = 1000;
			vm.max = 1000000;
			vm.step = 1;
			vm.entryValue = function() {
				rs.currentSavings = vm.entryInput;
				$log.log(rs)

			}
		}

}())