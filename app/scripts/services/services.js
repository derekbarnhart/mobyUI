/**
 * @author Derek Barnhart
 */
angular.module('builderServices', ['ngResource']).
    factory('DataType', function($resource){
  return $resource('data/dataTypes.json', {}, {
            
    get: {method:'GET', isArray:true},
    post: {method:'POST'},
    put: {method:'POST'},
    "delete": {method:'GET'}
  });
}).
    factory('Widget', function($resource){
  return $resource('data/widgets.json', {}, {
            
    get: {method:'GET'},
    post: {method:'POST'},
    put: {method:'POST'},
    "delete": {method:'GET'}
  });
}).
    factory('Framework', function($resource){
  return $resource('data/frameworks.json', {}, {
            
    get: {method:'GET', isArray:true},
    post: {method:'POST'},
    put: {method:'POST'},
    "delete": {method:'GET'}
  });
}).
    factory('Theme', function($resource){
  return $resource('data/themes.json', {}, {
            
    get: {method:'GET', isArray:true},
    post: {method:'POST'},
    put: {method:'POST'},
    "delete": {method:'GET'}
  });
});

/*
angular.module('widgetServices', ['ngResource']).
    factory('Widget', function($resource){
  return $resource('data/widgets.json', {}, {
            
    get: {method:'GET'},
    post: {method:'POST'},
    put: {method:'POST'},
    "delete": {method:'GET'}
  });
}); */

