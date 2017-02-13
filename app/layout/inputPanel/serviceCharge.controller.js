(function(){
	'use strict'
	angular
		.module('app.inputPanel')
		.controller('serviceCharge',serviceCharge)

		serviceCharge.$inject = ['$scope','$log','$rootScope']

		function serviceCharge($scope,$log,$rootScope) {
			var rs = $rootScope;
			var vm = $scope;
			vm.fieldType = '£';
			vm.inputId = this.__proto__.constructor.name;
			vm.min = 10;
			vm.max = 1000;
			vm.step = 1;
			vm.entryValue = function() {
				rs.serviceCharge = vm.entryInput;
				$log.log(rs);
			}

		}

}())