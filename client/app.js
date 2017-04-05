 angular.module('myApp',[])
.controller("Expedia",function($scope,$http){
 
  $http.get('api/getAll').then(function(x){
    $scope.key = x.data.offers.Hotel; 
  })
})