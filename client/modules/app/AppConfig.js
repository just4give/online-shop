appModule.config(["$stateProvider","$urlRouterProvider","$locationProvider",function($stateProvider, $urlRouterProvider,$locationProvider) {
    
	$urlRouterProvider.otherwise('home');

    
    $stateProvider
      .state('home', {
         url: '/',
         templateUrl: 'modules/app/tmpl/home.html',
         controller: "HomeController"
     }).state('bagsandshoes', {
        url: '/bags-and-shoes',
        templateUrl: 'modules/app/tmpl/bagsandshoes.html',
        controller: "BagsController"
    })
    ;

    $locationProvider.html5Mode(true);


    $locationProvider.hashPrefix('!');




    console.log('route config...');
        
}]);
