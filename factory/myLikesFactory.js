console.log('like factory')


app.factory('favoriteFactory', function ($http) {
  console.log("favorite factory")
  return {
    getFavorites: function() {
      return $http.get(`https://still-waters-cfd33.firebaseio.com/-KcU7nxNmA0uHzvW0aXu/users/Aten/.json`)
      .then((data)=>{
        console.log(data.data)
        return data
      })
    }
  }
})
