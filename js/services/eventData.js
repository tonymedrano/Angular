'use strict';
/*eventsApp.factory('eventData', function ($http, $log)*/ // $http way
eventsApp.factory('eventData', function ($resource) {
    return{
        getEvent: function(){
            return $resource('/data/event/:id', {id:'@id'}).get({id:1}); // Resource way
        }
    };
    
    /*return { // $http way
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