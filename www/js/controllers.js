angular.module('starter.controllers', [])

.controller('SignInCtrl', function($scope, $state, $http) {
            $scope.signIn = function(user) {
            //alert($scope.user.username);
            console.log('Sign-In', user);
            $http.get('http://hostmyweb.in/demo/nvwebservices/login.php?privateKey=90ab26id&uname='+this.user.username+'&pass='+this.user.password+'').then(function(resp) {
                      //alert(resp.data.valid);
                    if(resp.data.valid == "true")
                    {
                        $state.go('home');
                    }
                   else{alert("Wrong user name or password");}
                }, function(err) {
                        console.error('ERR', err);
                })
            };
    })

.controller('albumCtrl', function($scope, $state, $http) {
            $http.get('http://hostmyweb.in/demo/nvwebservices/album.php?privateKey=90ab26id&id=1').then(function(resps) {
               $scope.chats = resps.data;
              })
    })
.controller('albumItemsCtrl', function($scope, $state, $http){
            //alert("get images");
            /*$scope.getAlbumItems = function(){
                alert("get album lists");
            }*/
            $http.get('http://www.heenatours.in/webservice_heena/tourgallery.php?email=').then(function(resps){
                   // alert(resps.data.img_name);
                   $scope.albumlits = resps.data;
                })
          /*  userService.getUsers().then(function(users){
                    alert(users.img_name);
                    console.log("album list"+users);
                    $scope.albumlits = users;
                    });*/
    })


/*.factory('userService', function($http) {
         return {
            getUsers: function(){
                return $http.get('http://www.heenatours.in/webservice_heena/tourgallery.php?email=');
            }
         }
    })*/