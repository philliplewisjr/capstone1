console.log("lifeStyle")

app.factory('lifeStyleFactory', function($http){
  return {
    getLife: function () {
      return $http.get(`lifeStyle.json`)
      .then((data)=>{
        console.log(data.data)
        return data
      })
    }
  }
})
