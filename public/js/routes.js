angular.module('ballistic', ['ngRoute']).config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/login.html'
  }).when('/404', {
    templateUrl: 'views/login.html'
  }).otherwise({
    redirectTo: '/404'
  });

  if(window.history && window.history.pushState){
    $locationProvider.html5Mode(true);
  }
});