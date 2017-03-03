console.log('quote Factory')

app.factory('communityFactory', function($http){
  return {
    getCommunity: function () {
      return $http.get(`https://still-waters-cfd33.firebaseio.com/-KcU7nxNmA0uHzvW0aXu/community/.json`)
      .then((data)=>{
        console.log(data)
        return data
      })
    }
  }
})
