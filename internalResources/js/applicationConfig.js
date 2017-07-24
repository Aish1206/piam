mainApp.config(function($routeProvider){
    $routeProvider
    .when("/login",{
        templateUrl: "partialPages/login.html"
    })
    .when("/services",{
        templateUrl: "partialPages/services.html"
    })
    .when("/ourTeam",{
        templateUrl: "partialPages/ourTeam.html"
    })
    .when("/signUp",{
        templateUrl: "partialPages/signUp.html"
    })
    .when("/myProfile",{
        templateUrl: "partialPages/myProfile.html"
    })
     .when("/signOut",{
        templateUrl: "partialPages/signOut.html",
       // controller: "signOutController"
    })
    .otherwise({
        templateUrl: "partialPages/home.html"
    })
});