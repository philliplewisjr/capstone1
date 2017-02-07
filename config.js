console.log('config app')

app.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('');

    $routeProvider
    .when('/', {
      controller: 'GeneralCtrl',
      templateUrl: 'partials/general.html'
    })
    .when('/login', {
      controller: 'LoginCtrl',
      templateUrl: 'partials/login.html'
    })
    .when('/meditation', {
      controller: 'MeditationCtrl',
      templateUrl: 'partials/meditation.html'
    })
    .when('/life', {
      controller: 'LifeCtrl',
      templateUrl: 'partials/lifeStyle.html'
    })
    .when('/coach', {
      controller: 'CoachCtrl',
      templateUrl: 'partials/coach.html'
    })
    .when('/community', {
      controller: 'CommunityCtrl',
      templateUrl: 'partials/community.html'
    })
    .when('/user', {
      controller: 'UserCtrl',
      templateUrl: 'partials/user.html'
    })
    .otherwise({
    redirectTo: '/'
    })


})
