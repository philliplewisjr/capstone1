console.log('statFactory')

app.factory('statFactory', function($http, authFactory) {
  let user1 = authFactory.getUID()
  return {
    getStats: function() {
      return $http.get(`https://still-waters-cfd33.firebaseio.com/-KcU7nxNmA0uHzvW0aXu/users/${user1.uid}/stats/.json`)
      .then((data)=>{
        console.log(data.data)
        return data
      })
    }
  }
})
