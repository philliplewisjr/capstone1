console.log('Coaching factory')

app.factory('coachingFactory', function($http) {
  return {
    getCoach: function () {
      return $http.get(`https://still-waters-cfd33.firebaseio.com/-KcU7nxNmA0uHzvW0aXu/Coaching/.json`)
      .then((data)=>{
        console.log(data.data)
        return data
      })
    }
  }
})
