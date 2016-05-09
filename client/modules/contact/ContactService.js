/**
 * Created by mithundas on 5/8/16.
 */
angular.module("profile").factory("ContactService",["$http","$q", function($http, $q){

    return{
        contactByEmail : function(form){

            var deferred = $q.defer();
            $http.post("/api/contact/byemail",form)
                .success(function (data){

                    deferred.resolve(data);
                })
                .error(function(err){
                    deferred.reject(err);
                });
            return deferred.promise;
        }
    }
}])