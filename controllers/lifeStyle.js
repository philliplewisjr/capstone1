

app.controller('LifeCtrl', function($scope, $location, lifeStyleFactory) {
  lifeStyleFactory.getLife()
  .then((data)=>{
    console.log(data.data)
    let lifeCateg = data.data
    console.log(lifeCateg)
    $scope.lifeCategory = lifeCateg
  })
})
