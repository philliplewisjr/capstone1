

app.controller('LoginCtrl', function($scope, $location, authFactory, $interval) {
  //console.log('Login in controller')

  // //back ground music
  // var sound = new Howl({
  //   src: ["/music/Lew%20Capstone%20Project.mp3"],
  //   format: ["mp3"],
  //   rate: .95
  // })
  // let tune = sound.play()
  // $scope.tuneFade = sound.fade(0, 1, 20000, tune)
  // $scope.pause = function () {
  //   sound.pause(tune)
  // }

  // $scope.play = function () {
  //   let tune = sound.play()
  //   $scope.tuneFade = sound.fade(0, 1, 20000, tune)
  // }


  var items = ['Right Thought', 'Right Effort', 'Right Livelihood', 'Right Mindfulness', 'Right Speech', 'Right Effort', 'Right Concentration'];
  $scope.itemIndex = null;
  $scope.currentItem = '';

  $scope.getItem = function () {
    $scope.currentItem = items[$scope.itemIndex];
  }
  $interval(function () {
    $scope.itemIndex = Math.round(Math.random() * (items.length - 1));
    $scope.getItem();
  }, 3000)

  //background image
  $scope.bgimg = "/img/capstonebackground.jpg";


    //post background image
    $(document).ready(function(){
      $('.parallax').parallax();
    });

    //open login modal
  $scope.open = function () {
      $('#modal2').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '4%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
          //alert("Ready");
          console.log(modal, trigger);
        },
        //complete: function() { alert('Closed'); } // Callback for Modal close
      }
    );
  }
  $scope.generalInfo = function () {
    $location.path('/')
  }
  //register 
  $scope.register = function () {
    console.log("button clicked")
    let user = {
      email: $scope.eMail,
      password: $scope.passWord
    }
    console.log(user)
    authFactory.getAuth($scope.eMail, $scope.passWord)
    .then((data)=>{
      console.log(data)
    })
    $("#homeView").addClass("ng-hide")
  }

  //sign in to app
  $scope.login = function () {

    if(($scope.eMail === undefined) && ($scope.passWord === undefined)) {
      Materialize.toast("Please enter email and password", 2000)
    }
    console.log("button clicked")
    authFactory.setter($scope.eMail, $scope.passWord)
    .then((data)=>{
      if(!data.message) {
        Materialize.toast("Logged In", 2000)
        $('#modal2').modal('close');
        $("#homeView").addClass("ng-hide")
        $(".logOut").removeClass("ng-hide")
        $(".logIn").addClass("ng-hide")
        $(".general2").removeClass("ng-hide")
        $location.url("/general")
        $scope.$apply()
        $scope.pause()
      }
      else {
        Materialize.toast("Login email and password not found", 1000)
        $location.url("/login")
      }
    })
  }

  //sign out of app
  $scope.signOut = function () {
    authFactory.logOut()
    Materialize.toast("Logged Out", 2000)
    console.log(authFactory.logOut())
    console.log("button click")
    $location.url("/login")
    $("#homeView").removeClass("ng-hide")
    $(".logOut").addClass("ng-hide")
    $(".logIn").removeClass("ng-hide")
    $(".general2").addClass("ng-hide")
    $scope.play()
  }

})
