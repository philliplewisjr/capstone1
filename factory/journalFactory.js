app.factory("journalFactory", function ($http) {
  return {
    getJournal: function () {
      return $http.get(`https://still-waters-cfd33.firebaseio.com/-KcU7nxNmA0uHzvW0aXu/journal.json`)
      .then((data) => {
        console.log(data)
        return data
      })
    }
  }
});
