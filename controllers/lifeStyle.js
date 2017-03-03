

app.controller('LifeCtrl', function($scope, $location, lifeStyleFactory, $http, authFactory) {
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
    $http.post(`https://still-waters-cfd33.firebaseio.com/-KcU7nxNmA0uHzvW0aXu/LifeStyle/-KcUTFUfQM9b-yuOg6ah/LifeStyle.json`, JSON.stringify(lifeOptions))
  }
  let user1 = authFactory.getUID()
  console.log(user1.uid)
  $scope.addLife = function (life) {
    console.log('life sources', life)
    $http.post(`https://still-waters-cfd33.firebaseio.com/-KcU7nxNmA0uHzvW0aXu/users/${user1.uid}/favorites.json`, JSON.stringify(life))
  }
})
