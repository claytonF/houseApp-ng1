(function(){
	'use strict'
	angular
		.module('app.inputPanel')
		.service('clearInput', clearInput)


		function clearInput() {

			// var vm = this;
			// vm.clearInput = clearInput;			
			// var target = event.currentTarget;
			// console.log($(target).parent().find("input")[0].value);
			// $(target).parent().find("input")[0].value = "";
			// $(target).parent().find("input").focus();
		};
}())