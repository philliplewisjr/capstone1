console.log('meditation factory')

app.factory('meditationFactory', function($http) {
  return {
    getData: function() {
      return $http.get(`https://still-waters-cfd33.firebaseio.com/-KcU7nxNmA0uHzvW0aXu/.json`)
      .then(function(data){
        console.log('data', data.data)
        return data
      })
    }
  }
})
