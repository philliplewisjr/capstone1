console.log("lifeStyle")

app.factory('lifeStyleFactory', function($http){
  return {
    getLife: function () {
      return $http.get(`https://still-waters-cfd33.firebaseio.com/-KcU7nxNmA0uHzvW0aXu/LifeStyle/-KcUTFUfQM9b-yuOg6ah
.json`)
      .then((data)=>{
        console.log(data.data)
        return data
      })
    }
  }
})
