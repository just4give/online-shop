/**
 * Created by Mithun.Das on 12/4/2015.
 */
appModule.controller("HomeController",["$scope","$rootScope","$log","$modal","$state", "$interval","$timeout","$state","localStorageService",
    function($scope,$rootScope,$log,$modal,$state,$interval,$timeout,$state,localStorageService){


    $log.debug('home controller');
        $rootScope.hideHeader = false;


    $rootScope.meta ={
        desc:"AppStack Solutions. Software development startup company. AppStack Solutions is strong in LAMP MEAN AngularJS NodeJS"
    }

}]);