angular
.module('GalleryPage', [])
.controller('GalleryController', function GalleryController($scope){
  $scope.data = [{name: "test", lastname: "test2"}];
})

window.onload = function(){
  try{
    new MaterialPhotoGallery(document.querySelector('.m-p-g'));
  } catch (e){
    alert(e);
  }
}