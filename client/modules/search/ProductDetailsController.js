/**
 * Created by Mithun.Das on 12/8/2015.
 */
appModule.controller("productDetailsController",["$scope","$rootScope","$log","$interval","$modal","toaster",
    function($scope,$rootScope,$log,$interval,$modal,toaster){

    $scope.quantities = [1,2,3,4,5,6,7,8,9,10];

    $scope.product =
     {
     id:101,
     name:"Microsoft Surface",
     url:"images/product/p1.png"
     };
    $scope.tabs =[{
            title: "Overview",
            content:"Overview of the product"
        },
            {
                title: "Specification",
                content:"Detail specification of the product"
    }];


    $scope.addToCart = function(){

        toaster.pop({
            type: 'success',
            body: 'added to cart successfully.',
            showCloseButton: true
        });
    }


}]);
