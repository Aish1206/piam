mainApp.controller("profileController", function($scope, $location, $sessionStorage) {
    if($sessionStorage.id){
        $scope.getId =  $sessionStorage.id;
        $scope.name = $sessionStorage.getName;
    }
    else{
        alert("Please login again");
         $location.path('/login'); 
    }
    
});