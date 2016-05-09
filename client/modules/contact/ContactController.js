/**
 * Created by Mithun.Das on 12/4/2015.
 */
appModule.controller("ContactController",["$scope","$rootScope","$log","$modal","$state", "$interval","ContactService",
    function($scope,$rootScope,$log,$modal,$state,$interval,ContactService){

    $scope.formData ={};
    $scope.apiMessage ='';

    $scope.response = null;
    $scope.widgetId = null;
    $scope.model = {
        key: '6LcEYB8TAAAAAIsQZO37IP_lGkURfwmZHVKqP9qb'
    };
    $scope.setResponse = function (response) {

        $scope.response = response;
    };
    $scope.setWidgetId = function (widgetId) {

        $scope.widgetId = widgetId;
    };
    $scope.cbExpiration = function() {

        vcRecaptchaService.reload($scope.widgetId);
        $scope.response = null;
    };

    $scope.submit = function(form){


        $scope.formData.captcha= $scope.response;

        ContactService.contactByEmail($scope.formData)
            .then(function(data){
                $scope.apiMessage = data.message;
                $scope.success = data.success;
            },function(err){
                $scope.apiMessage = err.message;
                $scope.success = false;
            });
    }
}]);