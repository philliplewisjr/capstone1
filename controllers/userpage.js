

app.controller('UserCtrl', function($scope, $location, $http, journalFactory) {
  console.log('user controller')
  journalFactory.getJournal()
  .then((data)=>{
    console.log(data.data)
    let journalEntries = data.data;
    console.log(journalEntries)
    $scope.entries = journalEntries;

  })

  //graph stat tracker
  $scope.labels = ['Meditation', 'LifeStyle', 'Coaching', 'Community'];
  $scope.data = [300, 500, 100, 200];

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
        //alert("Ready");
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
      entry: $scope.journalEntry
    }
    console.log(entry)
    $http.post(`https://still-waters-cfd33.firebaseio.com/-KcU7nxNmA0uHzvW0aXu/journal.json`, JSON.stringify(entry))
  }
   $scope.checkboxModel = {
      community: 0,
      meditation: 0,
      lifeStyle: 0,
      coaching: 0
   }

   $scope.checkboxValue = function () {
    console.log($scope.checkboxModel)
   }

console.log($scope.checkboxModel.community)
});
