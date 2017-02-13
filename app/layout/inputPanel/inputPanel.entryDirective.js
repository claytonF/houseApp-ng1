(function(){
	'use strict'
	angular
		.module('app.inputPanel')

		.directive('entry', entry)

		function entry() {
			return {
				templateUrl: 'layout/inputPanel/entryTemplate.html',
				replace:true
			}
		};
}())