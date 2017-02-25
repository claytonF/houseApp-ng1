(function(){
	'use strict'
	angular
		.module('app.inputPanel')

		.directive('entry', entry)

		entry.$inject = ['$rootScope','$cookieStore','writeCookie']

		function entry($rootScope, $cookieStore,writeCookie) {
			return {
				templateUrl: 'layout/inputPanel/entryTemplate.html',
				replace:true,
				link: function(scope,element,attr) {
					
					var thisID = attr.ngController;
					var initData = $rootScope.directiveData;

					for(var param in initData) {

						if(param === thisID) {
							var thisData = initData[param];
							scope.fieldType = thisData.fieldType;
							scope.inputId = param;
							scope.min = thisData.min; 
							scope.max = thisData.max;
							scope.step = thisData.step;
							scope.myVal = $rootScope.cookieData[param]
						}
					};
					
					scope.entryValue = function() {
						$rootScope[thisID] = scope.entryInput;
						$rootScope.inputData[thisID] = scope.entryInput;
						$rootScope.cookieData[thisID] = scope.entryInput;

						writeCookie.write();
						
						//writeCookie();
						
					};

					scope.clearInput = function(event) {	
						var target = event.currentTarget;
						$(target).parent().find("input")[0].value = "";
						
						delete $rootScope.cookieData[thisID];

						//writeCookie();
						writeCookie.write();

						$(target).parent().find("input").focus();
					};

					// function writeCookie() {
					// 	var date = new Date();
				 //        date.setTime(date.getTime()+(1000*24*60*60*1000));
				 //        var expires = "; expires="+date.toGMTString();
				        
					// 	document.cookie = "houseApp="+JSON.stringify($rootScope.cookieData)+expires+"; path=/";
					// }
				}
			}
		};
}())