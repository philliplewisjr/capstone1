
app.controller('CoachCtrl', function($scope, $location, coachingFactory){
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
  }
})
