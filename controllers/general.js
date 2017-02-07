

app.controller('GeneralCtrl', function($scope, $location) {
  console.log('general controller')

  $scope.toMeditationPage = ()=> {
    console.log('button clicked')
    $location.path('/meditation')
  }

  $scope.toCoachingPage = ()=> {
    console.log('button clicked')
    $location.path('/coach')
  }

  $scope.toLifeStylePage = ()=> {
    console.log('button clicked')
    $location.path('/life')
  }

  $scope.toCommunityPage = ()=> {
    console.log('button clicked')
    $location.path('/community')
  }

})
