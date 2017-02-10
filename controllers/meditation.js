


app.controller('MeditationCtrl', function($scope, $location, meditationFactory) {
  console.log('Meditation controller')
  meditationFactory.getData()
  .then((data)=> {
    //console.log('data', data.data)

    let books = data.data
    console.log("BOOKS", books)
    $scope.books = books

  })
  $scope.meditationSource = function () {
    console.log('button clicked')
    let sources = {
      title: $scope.titleTextBox,
      url: $scope.urlTextBox,
      img: $scope.imgUrlTextBox
    }
    console.log(sources)
  };
})
