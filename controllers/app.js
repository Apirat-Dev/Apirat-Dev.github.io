angular
.module('GalleryPage', [])
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