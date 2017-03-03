

app.controller('GeneralCtrl', function($scope, $location, $interval, user0) {
  console.log('general controller')
  console.log(user0)



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

  //interval through Nobel Eightfold Path with $interval
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

})
