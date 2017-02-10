


app.controller('MeditationCtrl', function($scope, $location, meditationFactory, $http) {
  console.log('Meditation controller')
  meditationFactory.getData()
  .then((data)=> {
    //console.log('data', data.data)

    let books = data.data
    console.log("BOOKS", books)
    $scope.books = books

  })
  //create new source 
  $scope.meditationSource = function () {
    console.log('button clicked')
    let sources = {
      title: $scope.titleTextBox,
      url: $scope.urlTextBox,
      img: $scope.imgUrlTextBox
    }
    console.log(sources)

    //updates meditation sources
    $http.post(`https://still-waters-cfd33.firebaseio.com/-KcU7nxNmA0uHzvW0aXu/Meditation.json`, JSON.stringify(sources))
  };
})
