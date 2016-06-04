(function() {
	var app = angular.module('cursoAngular', []);
	app.controller('OlaMundoController', ['$scope', function($scope) {
		$scope.mensagem = 'Olá mundo';
	}]);

});
