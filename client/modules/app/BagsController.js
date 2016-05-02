/**
 * Created by Mithun.Das on 12/4/2015.
 */
appModule.controller("BagsController",["$scope","$rootScope","$log","$modal","$state", "$interval","$timeout","$state","localStorageService",
    function($scope,$rootScope,$log,$modal,$state,$interval,$timeout,$state,localStorageService){

    //$rootScope.hideHeader = true;

        $scope.myInterval = 7000;
        $scope.noWrapSlides = false;
        var slides = $scope.slides = [ {image:'images/p1.png', text:"Simple and elegent admin panel" },
            {image:'images/p2.png', text:"Clean yet rich product search with filter, pagination and sort" },
            {image:'images/p6.png', text:"Quick checkout using paypal or credit cards" }
        ];

}]);