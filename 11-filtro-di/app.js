(function() {
	angular.module('cursoAngular', []);

	angular.module('cursoAngular')
		.controller('DiController', diController);

	diController.$inject = ['$scope', '$filter'];
	function diController ($scope, $filter) {
		var filtroMonetario = $filter('currency');
		$scope.mensagem = filtroMonetario(123456, 'R$');
		$scope.hoje = new Date();
	}
})();
