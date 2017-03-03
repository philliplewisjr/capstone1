


app.controller('MeditationCtrl', function($scope, $location, meditationFactory, $http, authFactory) {
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
    .then((data)=>{
      console.log(data)
      $http.get(`https://still-waters-cfd33.firebaseio.com/-KcU7nxNmA0uHzvW0aXu/Meditation.json`)
      .then((data)=>{
        console.log(data)
      })
    })
    meditationFactory.getData()
    .then((data)=> {
      //console.log('data', data.data)

      let books = data.data
      console.log("BOOKS", books)
      $scope.books = books

    })
    // .then(()=>{
    //     $('input#title, input#image, input#url').empty()
    // })

  };
  let user1 = authFactory.getUID()
  console.log(user1.uid)
  $scope.addToUserPage = function (book) {
    console.log("delete button pressed")
    console.log(book)
    $http.post(`https://still-waters-cfd33.firebaseio.com/-KcU7nxNmA0uHzvW0aXu/users/${user1.uid}/favorites.json`, JSON.stringify(book))
  }
})
