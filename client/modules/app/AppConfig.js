appModule.config(["$stateProvider","$urlRouterProvider","$locationProvider",function($stateProvider, $urlRouterProvider,$locationProvider) {
    
	$urlRouterProvider.otherwise('/');

    
    $stateProvider
      .state('/', {
         url: '/',
         templateUrl: 'modules/app/tmpl/home.html',
         controller: "HomeController"
     }).state('bagsandshoes', {
        url: '/bagsandshoes',
        templateUrl: 'modules/app/tmpl/bagsandshoes.html',
        controller: "BagsController"
    })
    ;

    $locationProvider.html5Mode(true);


    $locationProvider.hashPrefix('!');




    console.log('route config...');
        
}]);
