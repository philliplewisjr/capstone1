

app.controller('LoginCtrl', function($scope, $location, authFactory, $interval) {
  //console.log('Login in controller')

  // var sound = new Howl({
  //   src: ["/music/Lew%20Capstone%20Project.mp3"],
  //   format: ["mp3"],
  //   rate: .998
  // })
  // $scope.tune = sound.play()

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
    $("#homeView").addClass("ng-hide")
  }
  $scope.register = function () {
    console.log("button clicked")
    let user = {
      firstName: $scope.firstName,
      lastName: $scope.lastName,
      email: $scope.eMail,
      password: $scope.passWord
    }
    console.log(user)
    authFactory.getAuth(user.email, user.password)
    .then((data)=>{
      console.log(data)
    })
    $("#homeView").addClass("ng-hide")
  }
  $scope.signOut = function () {
    authFactory.logOut()
    $("#homeView").removeClass("ng-hide")
  }

})
