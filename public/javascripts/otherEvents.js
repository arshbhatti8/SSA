
  // Created by arsh on 7/6/2017.
  //

 var myApp = angular.module('myApp', []);

 myApp.controller('events', function($scope) {
 $scope.otherEventsButton=function(){

     console.log("Entered here")
     window.location.assign("/otherEvents");
 }
 })
