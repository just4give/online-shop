/**
 * Created by mithundas on 12/3/15.
 */
appModule.controller("adController",["$scope","$log","$interval",function($scope,$log,$interval){
    $scope.slides = [
        {text1: 'FREE Shipping', text2: 'Get FREE shipping when you purchase more than $100'},
        {text1: '15% OFF', text2: '15% Off on all Samsung products'},
        {text1: 'Save on Apple', text2: '$100 off on any Apple Macbook'}
    ];


    $scope.currentIndex = $scope.slides.length-1;





    $scope.nextSlide = function () {

        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };

    $interval(function(){
        $scope.nextSlide();
    },5000);
}]);
