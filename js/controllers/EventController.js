'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {
    $scope.snippet = '<span style="color:red;">Hi there!</span>';
    $scope.sortorder = 'name';
    
   /* eventData.getEvent(function(event){ // $http way
    $scope.event = event;
    });*/
    
   // $scope.event = eventData.getEvent();  // Resource way or
    
    

    $scope.upVoteSession = function(session){
        session.upVoteCount++;
     };
    $scope.downVoteSession = function(session){
        session.upVoteCount--;
   };
  }
);