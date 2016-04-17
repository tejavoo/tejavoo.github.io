var app = angular.module('putApp', ['ngMaterial']);
    app.controller('putCtrl',['$scope','$http',function($scope,$http){
      $http.get("http://iitm5.cloudapp.net/api/get_items_today/").then(function(response) {
        $scope.putData = response.data;
      });
      
    }]);

    app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('deep-orange', {
     'default':'800' 
   })
   .accentPalette('teal', {
     'default':'500'
   });
});