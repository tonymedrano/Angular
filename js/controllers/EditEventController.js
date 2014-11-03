'use strict'
eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData){
    
             $scope.event = {};
    
             $scope.saveEvent = function(event, form){
                 if(form.$invalid){
                     eventData.save(event).then(
                         function(response){ console.log('success', response);},
                         function(response){ console.log('failure', response);}
                     );
                }
         };
         $scope.cancelEdit = function(){
             window.location = "/EventDetails.html";
         };
   }
                     
    /*function EditEventController($scope){
         $scope.saveEvent = function(event, newEventForm){
             if(newEventForm.$valid){
                 window.alert('event ' + event.name + ' saved!');
                 console.log(newEventForm);
             }
         }
         $scope.cancelEdit = function(){
             window.location = "/EventDetails.html";
         }
   }*/
);