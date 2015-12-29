/**
 * Created by Mithun.Das on 12/4/2015.
 */
appModule.controller("HomeController",["$scope","$rootScope","$log","$modal","$state", "$interval","$timeout",
    function($scope,$rootScope,$log,$modal,$state,$interval,$timeout){


    $log.debug('home controller');


    $interval(function(){
        $(".left-ads").addClass("flip animated ");

        $timeout(function(){
            $(".left-ads").removeClass("flip animated ");
        },1000);

    },5000);


    $scope.animateProcess = function(){

        angular.element("#process-list li").addClass('bounce-in-up');
    }
    $scope.animateDiscount = function(){

            angular.element("#discount-list li").addClass('bounce-in-up');
    }

}]);