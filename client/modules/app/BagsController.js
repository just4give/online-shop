/**
 * Created by Mithun.Das on 12/4/2015.
 */
appModule.controller("BagsController",["$scope","$rootScope","$log","$modal","$state", "$interval","$timeout","$state","localStorageService",
    function($scope,$rootScope,$log,$modal,$state,$interval,$timeout,$state,localStorageService){

    $rootScope.hideHeader = true;

        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        var slides = $scope.slides = [ {image:'images/p1.png', text:"Stealing Deals on HD TVs. ",
            text2:"Everyday is christmas. Find your perfect TV today.",
            link:{text:"Buy", href:"/#/xyz"}},
            {image:'images/p2.png', text:"Stealing Deals on HD TVs. ",
                text2:"Everyday is christmas. Find your perfect TV today.",
                link:{text:"Buy", href:"/#/xyz"}}
        ];

}]);