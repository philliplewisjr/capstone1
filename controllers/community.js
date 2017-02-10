

app.controller('CommunityCtrl', function($scope, $location, $http, communityFactory){
  console.log('community controller')
  communityFactory.getCommunity()
  .then((data)=> {
    console.log(data.data)
     let volunteer = data.data
      console.log(volunteer)
      $scope.communities = volunteer
  })



  $scope.communitySource = function () {
    console.log('community button checked')
    let communityVol = {
      title: $scope.titleTextBox,
      url: $scope.urlTextBox,
      img: $scope.imgUrlTextBox
    }
    console.log(communityVol)
    $http.post(`https://still-waters-cfd33.firebaseio.com/-KcU7nxNmA0uHzvW0aXu/community.json`, JSON.stringify(communityVol))
    .then((data)=>{
      console.log(data)
    })
  }
})
