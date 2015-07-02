(function () {

	'use strict';
	
	angular.module('app').
	controller('DemoCtrl', ['$scope', function($scope){
	
		/*
		
		//Example using the native websocket API
			
		var ws = new WebSocket("ws://127.0.0.1:8888/demo");
		ws.onopen = function (event) {
			console.info('open');
			ws.send(JSON.stringify({event: "test", data: {"name": "BigInt"}})); 
		};
		
		ws.onclose = function (event) {
			console.info('close');
		};
		
		ws.onerror = function (event) {
			console.info('error');
		};
		
		ws.onmessage = function (event) {
			  console.log(event.data);
		}
		
		*/
	}])

})();


