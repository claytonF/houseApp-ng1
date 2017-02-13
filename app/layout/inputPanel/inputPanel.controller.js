(function(){
	'use strict';
	angular
		.module('app.inputPanel')
		.controller('InputController', InputController)

	InputController.$inject = ['$scope','$rootScope', '$cookies'];

	function InputController($scope, $rootScope, $cookies) {
		'use strict';

		// var vm = this;
		// vm.clearInput = clearInput;

		// function clearInput($event) {			
		// 	var target = event.currentTarget;
		// 	console.log($(target).parent().find("input")[0].value);
		// 	$(target).parent().find("input")[0].value = "";
		// 	$(target).parent().find("input").focus();
		// };

		function storeValues() {
			$cookies.put('anotherTestCookie',[1,2,3]);
		};
		

		function retrieveValues() {

		};

		function updateValues() {

		};
	}

})();