

app.controller('LifeCtrl', function($scope, $location, lifeStyleFactory) {
  lifeStyleFactory.getLife()
  .then((data)=>{
    console.log(data.data)
    let lifeCateg = data.data
    console.log(lifeCateg)
    $scope.lifeCategory = lifeCateg
  })
  $scope.lifeSource = function () {
    console.log('life button pressed')
    let lifeOptions = {
      title: $scope.titleTextBox,
      url: $scope.urlTextBox,
      img: $scope.imgUrlTextBox
    }
    console.log(lifeOptions)
  }
})
