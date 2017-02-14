console.log('statFactory')

app.factory('statFactory', function($http) {
  return {
    getStats: function() {
      return $http.get(`https://still-waters-cfd33.firebaseio.com/-KcU7nxNmA0uHzvW0aXu/stats/.json`)
      .then((data)=>{
        console.log(data.data)
        return data
      })
    }
  }
})
