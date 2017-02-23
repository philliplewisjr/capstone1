console.log('config app')

app.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('');


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAF_Sey9g-j8bvr1I0GY5eDV-dt0Phwvgw",
    authDomain: "still-waters-cfd33.firebaseapp.com",
    databaseURL: "https://still-waters-cfd33.firebaseio.com",
    storageBucket: "still-waters-cfd33.appspot.com",
    messagingSenderId: "1021430235359"
  };
  firebase.initializeApp(config);

    $routeProvider
    .when('/', {
      controller: 'GeneralCtrl',
      templateUrl: 'partials/general.html'
    })
    .when('/login', {
      controller: 'LoginCtrl',
      templateUrl: 'partials/login.html'
    })
    .when('/register', {
      controller: 'RegistrationCtrl',
      templateUrl: 'partials/registration.html'
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
    redirectTo: '/login'
    })


})
