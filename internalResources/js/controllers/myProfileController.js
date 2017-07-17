mainApp.controller("profileController", function($scope, $sessionStorage) {
 $scope.getId =  $sessionStorage.id;
 $scope.name = $sessionStorage.getName;   
});