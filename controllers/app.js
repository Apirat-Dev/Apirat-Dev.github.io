angular
.module('GalleryPage', ['ngRoute'])
.config(['$routeProvider',
  function config($routeProvider){
    $routeProvider
    .when('/home',{
      templateUrl : 'index.html'
    })
    .when('/about',{
      templateUrl : 'about.html'
    })
  }
])

.controller('GalleryController', function GalleryController($scope){
  $scope.userDetail = [{name: "NAME", lastname: "LNAME"}];
})

window.onload = function(){
  try{
    new MaterialPhotoGallery(document.querySelector('.m-p-g'));
  } catch (e){
    alert(e);
  }
}