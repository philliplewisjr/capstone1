
app.controller('CoachCtrl', function($scope, $location, coachingFactory, $http, authFactory){
  coachingFactory.getCoach()
  .then((data)=>{
    console.log(data.data)
  let coachList = data.data
   console.log(coachList)
  $scope.coached = coachList
  })
  $scope.coachSource = function () {
    console.log('coach button clicked')
    let headCoach = {
      title: $scope.titleTextBox,
      url: $scope.urlTextBox,
      img: $scope.imgUrlTextBox
    }
    console.log(headCoach)
    $http.post(`https://still-waters-cfd33.firebaseio.com/-KcU7nxNmA0uHzvW0aXu/Coaching.json`, JSON.stringify(headCoach))
  }
  let user1  = authFactory.getUID()
  console.log(user1.uid)
  //add to user favorites
  $scope.addCoach = function (coach) {
    console.log('add coach button pressed', coach)
    $http.post(`https://still-waters-cfd33.firebaseio.com/-KcU7nxNmA0uHzvW0aXu/users/${user1.uid}/favorites.json`, JSON.stringify(coach))
  }
})
