(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
            .state('landing', {
                url: '/',
                controller: 'LandingCtrl as $ctrl',
                templateUrl: '/templates/landing.html'
        });
    }
    
    angular
        .module('bloc-chat', ['ui.router', 'ui.bootstrap', 'firebase'])
        .config(config);
    
})();