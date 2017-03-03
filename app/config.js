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
    .when('/general', {
      controller: 'GeneralCtrl',
      templateUrl: 'partials/general.html',
      resolve: {user0: (authFactory)=>{
        return authFactory.getUser().then((e)=>console.log(e)).catch(console.log)
      }}
    })
    .when('/login', {
      controller: 'LoginCtrl',
      templateUrl: 'partials/login.html',
      resolve: {user0: (authFactory)=>{
        return authFactory.getUser().catch(console.log)
      }}
    })
    .when('/register', {
      controller: 'RegistrationCtrl',
      templateUrl: 'partials/registration.html',
      resolve: {user0: (authFactory)=>{
        return authFactory.getUser().catch(console.log)
      }}
    })
    .when('/meditation', {
      controller: 'MeditationCtrl',
      templateUrl: 'partials/meditation.html',
      resolve: {user0: (authFactory)=>{
        return authFactory.getUser().catch(console.log)
      }}
    })
    .when('/life', {
      controller: 'LifeCtrl',
      templateUrl: 'partials/lifeStyle.html',
      resolve: {user0: (authFactory)=>{
        return authFactory.getUser().catch(console.log)
      }}
    })
    .when('/coach', {
      controller: 'CoachCtrl',
      templateUrl: 'partials/coach.html',
      resolve: {user0: (authFactory)=>{
        return authFactory.getUser().catch(console.log)
      }}
    })
    .when('/community', {
      controller: 'CommunityCtrl',
      templateUrl: 'partials/community.html',
      resolve: {user0: (authFactory)=>{
        return authFactory.getUser().catch(console.log)
      }}
    })
    .when('/user', {
      controller: 'UserCtrl',
      templateUrl: 'partials/user.html',
      resolve: {user0: (authFactory)=>{
        return authFactory.getUser().catch(console.log)
      }}
    })
    .otherwise({
    redirectTo: '/login'
    })


})
