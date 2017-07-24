mainApp.controller("signOutController", function($scope, $sessionStorage) { 
    $sessionStorage.$reset();
});