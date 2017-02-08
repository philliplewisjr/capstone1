


app.controller('MeditationCtrl', function($scope, $location, meditationFactory) {
  console.log('Meditation controller')
  meditationFactory.getData()
  .then((data)=> {
    //console.log('data', data.data)

    let books = data.data
    console.log("BOOKS", books)
    $scope.books = books

    // for (let prop in books) {
    //   //console.log(prop) Meditation or users
    //   console.log(books[prop])
    //   for (let book in prop) {
    //     //console.log(prop)
    //     console.log(prop[book])
    //   }
    // }
  })
})
