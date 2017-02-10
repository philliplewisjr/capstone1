console.log('quote Factory')

app.factory('quoteFactory', function($http){
  return {
    getQuotes: function () {
      return $http.get('')
    }
  }
})
