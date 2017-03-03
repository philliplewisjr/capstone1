console.log('like factory')


app.factory('favoriteFactory', function ($http, authFactory) {
  console.log("favorite factory")
  let user1 = authFactory.getUID()
  return {
    getFavorites: function() {
      return $http.get(`https://still-waters-cfd33.firebaseio.com/-KcU7nxNmA0uHzvW0aXu/users/${user1.uid}/.json`)
      .then((data)=>{
        console.log(data.data)
        return data
      })
    }
  }
})
