mainApp.controller("piamController", function($scope, $location, $http, loginService, $sessionStorage, $localStorage) {
   var vm = this;
   if($sessionStorage.loginStat==0){
        $scope.headerTemplate = 'header_login.html'
   }
   else{
        $scope.headerTemplate = 'header.html'
   }
    
    $scope.changeView = function(view) {  
        $location.path(view);
        if($sessionStorage.loginStat!=0)
        {
            $scope.headerTemplate = 'header.html'
        }
    };
    
    vm.tab = 1;

        vm.setTab = function (tabId) {
            this.tab = tabId;
        };

        vm.isSet = function (tabId) {
            return this.tab === tabId;
        };


    $scope.captcha= function(){
        vm.mycaptcha=" ";
        var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'
        ,'P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j',
        'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2',
        '3','4','5','6','7','8','9','0');
         
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
           if(vm.mycaptcha!= $scope.mainCaptcha)
           {
                $http.get("data/credentials.list.json").then(function(response){
                    $scope.profile=response.data;
                    if($scope.profile){
                        for (var i=0;i<$scope.profile.length;i++){
                    if(vm.uname==$scope.profile[i].username && vm.password==$scope.profile[i].password){
                        var flag=true;
                           $sessionStorage.id=$scope.profile[i].id;
                        break;
                    }
                    else{
                        var flag=false;
                    } 
                    }
                    }
                     if(flag==true){
                        $sessionStorage.loginStat=0;
                        $scope.getId =  $sessionStorage.id;
                        $scope.auth=loginService.loginStatus($scope.getId);
                        $http.get("data/profile.json").then(function(response){
                            $scope.profileLoginUser = response.data;
                            $sessionStorage.getName = $scope.profileLoginUser[$scope.getId-1].name;
                            alert("Welcome "+$sessionStorage.getName);
                            $scope.name=$sessionStorage.getName;
                        });
                        $scope.headerTemplate = $scope.auth ? 'header.html' : 'header_login.html';   
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
