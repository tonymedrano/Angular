'use strict';
/*eventsApp.factory('eventData', function ($http, $log)*/ // $http way
eventsApp.factory('eventData', function ($resource) {
    var resource = $resource('/data/event/:id', {id:'@id'});
    return {
        getEvent: function(){
            return resource.get({id:1});
        },
        save: function(event){
           // event.id = 999;
            return resource.save(event);
        }
    };
    
    
   /* return{
        getEvent: function(){
            return $resource('/data/event/:id', {id:'@id'}).get({id:1}); // Resource way
        }
    };*/
    
    /*return { // $http first way
        getEvent: function(successcb) {
            $http({method: 'GET', url: '/data/event/1'}).
            success(function(data, status, headers, config){
                $log.info(data, status, headers, config);
                successcb(data);
         }).
            error(function(data, status, headers, config){
                $log.warn(data, status, headers, config);
            });
         }
    };**/
});