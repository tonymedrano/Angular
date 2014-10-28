'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {
    $scope.snippet = '<span style="color:red;">Hi there!</span>';
    $scope.sortorder = 'name';
    
    eventData.getEvent(function(evetnt){
    $scope.event = event;
    });

    $scope.upVoteSession = function(session){
        session.upVoteCount++;
     };
    $scope.downVoteSession = function(session){
        session.upVoteCount--;
   };
  }
);