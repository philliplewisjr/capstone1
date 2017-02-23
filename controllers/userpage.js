

app.controller('UserCtrl', function($scope, $location, $http, journalFactory, statFactory, favoriteFactory) {
  console.log('user controller')
  journalFactory.getJournal()
  .then((data)=>{
    console.log(data.data)
    let journalEntries = data.data;
    console.log(journalEntries)
    $scope.entries = journalEntries;

  })
  $scope.editing = true;
  $scope.editMode = true;

  //graph stat tracker
  $scope.labels = ['Meditation', 'LifeStyle', 'Coaching', 'Community'];
  $scope.color = ['#768447', '#8a2be2', '#7fff00', '#b22222'];

  statFactory.getStats()
  .then((status)=>{

    //console.log("object list", status.data)
    let statNumbers = [0, 0, 0, 0]
    for(let i in status.data) {
      console.log(status.data[i].meditation)
      statNumbers[0] = statNumbers[0] + status.data[i].meditation
      statNumbers[1] = statNumbers[1] + status.data[i].lifeStyle
      statNumbers[2] = statNumbers[2] + status.data[i].coaching
      statNumbers[3] = statNumbers[3] + status.data[i].community
    }

       $scope.data = statNumbers;
  })


  //modal for submitting journal entry
  $scope.openJournal =  function () {
    //$('#modal1').modal('open');
    $('#modal1').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        console.log(modal, trigger);
      }

    }
  );

  }

  //capture journal entry and send to firebase
  $scope.loggedThoughts = function () {
    console.log('button clicked')
    let entry = {
      title: $scope.journalTitle,
      entry: $scope.journalEntry,
      date: today
    }

    $http.post(`https://still-waters-cfd33.firebaseio.com/-KcU7nxNmA0uHzvW0aXu/journal.json`, JSON.stringify(entry))
  }

    //save edited journal entry
    $scope.save = function (key, value) {
      $scope.key = key
      console.log(value)

      console.log("key", key)
      $http.patch(`https://still-waters-cfd33.firebaseio.com/-KcU7nxNmA0uHzvW0aXu/journal/${key}.json`, JSON.stringify(value))
      .then((data)=>{
        console.log(data)
        $http.get(`https://still-waters-cfd33.firebaseio.com/-KcU7nxNmA0uHzvW0aXu/journal.json`)
        .then((data)=>{
          console.log(data.data)
          let journalEntries = data.data;
          console.log(journalEntries)
          $scope.entries = journalEntries;
        })
      })

    }





    let today = new Date()
    let date = today.toDateString()
    console.log(date)

  //posting stat data to firebase
   $scope.checkboxModel = {
      date: date,
      community:  0,
      meditation:  0,
      lifeStyle:  0,
      coaching:  0
   }
   $scope.checkboxValue = function () {
    let stats = $scope.checkboxModel;

    $http.post(`https://still-waters-cfd33.firebaseio.com/-KcU7nxNmA0uHzvW0aXu/stats/.json`, JSON.stringify(stats))
    .then((data)=>{
      console.log("post", data)
    $http.get(`https://still-waters-cfd33.firebaseio.com/-KcU7nxNmA0uHzvW0aXu/stats/.json`)
    .then((data)=>{
      console.log("get", data)
    })
    })
    statFactory.getStats()
    .then((status)=>{

      //console.log("object list", status.data)
      let statNumbers = [0, 0, 0, 0]
      for(let i in status.data) {
        console.log(status.data[i].meditation)
        statNumbers[0] = statNumbers[0] + status.data[i].meditation
        statNumbers[1] = statNumbers[1] + status.data[i].lifeStyle
        statNumbers[2] = statNumbers[2] + status.data[i].coaching
        statNumbers[3] = statNumbers[3] + status.data[i].community
      }

         $scope.data = statNumbers;
    })
   }

   //getting favorites from firebase and posting

  favoriteFactory.getFavorites()
  .then((data)=>{
    console.log(data.data.favorites)
    let userFav = data.data
    console.log(userFav)
    $scope.userFavorites = userFav

  })
  $scope.deleteSource = function (key) {
    $scope.key = key
    console.log("delete button clicked", $scope.key)
    $http.delete(`https://still-waters-cfd33.firebaseio.com/-KcU7nxNmA0uHzvW0aXu/users/Aten/favorites/${key}.json`)
    .then((data)=>{
      console.log(data)
    })
    $('#key').remove()
  }
});
