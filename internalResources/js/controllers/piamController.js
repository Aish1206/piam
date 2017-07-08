mainApp.controller("piamController", function($scope, $location, $http, loginService, $window) {
   var vm = this;
    $scope.changeView = function(view) {
        $location.path(view);
    };
    $scope.captcha= function(){
        vm.mycaptcha=" ";
        var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0');
                     
                       var a = alpha[Math.floor(Math.random() * alpha.length)];
                       var b = alpha[Math.floor(Math.random() * alpha.length)];
                       var c = alpha[Math.floor(Math.random() * alpha.length)];
                       var d = alpha[Math.floor(Math.random() * alpha.length)];
                       var e = alpha[Math.floor(Math.random() * alpha.length)];
                       var f = alpha[Math.floor(Math.random() * alpha.length)];
                       var g = alpha[Math.floor(Math.random() * alpha.length)];
                    
        
                    var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
                    document.getElementById("mainCaptcha").value = code;
      
    };

    $scope.validateValue=function(){
           $scope.mainCaptcha=document.getElementById("mainCaptcha").value;
           $scope.mainCaptcha=$scope.mainCaptcha.replace(/ +/g, "");
           var flag;
           if(vm.mycaptcha== $scope.mainCaptcha)
           {
                $http.get("data/credentials.list.json").then(function(response){
                    $scope.profile=response.data;
                    if($scope.profile){
                        for (var i=0;i<$scope.profile.length;i++){
                    if(vm.uname==$scope.profile[i].username && vm.password==$scope.profile[i].password){
                        var flag=true;
                        $window.sessionStorage.setItem("id",$scope.profile[i].id);
                        break;
                    }
                    else{
                        var flag=false;
                    } 
                    }
                    }
                     if(flag==true){
                        $scope.getId = $window.sessionStorage.getItem("id");
                        alert("welcome dude "+$scope.getId);
                        $http.get("data/profile.json").then(function(response){
                            $scope.profileLoginUser=response.data;
                            $window.sessionStorage.setItem("name",$scope.profileLoginUser[$scope.getId].name);
                            $scope.name=$window.sessionStorage.getItem("name");
                        });
                        $location.path('/myProfile');
                     }
                     else{
                         alert("wrong username or password");
                     }
             });
           }
           else{
               alert("please enter correct captcha");
           }
    };
});
