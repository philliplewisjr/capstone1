

app.controller('CommunityCtrl', function($scope, $location){
  console.log('community controller')
  $scope.communitySource = function () {
    console.log('community button checked')
    let communityVol = {
      title: $scope.titleTextBox,
      url: $scope.urlTextBox,
      img: $scope.imgUrlTextBox
    }
    console.log(communityVol)
  }
})
