app.factory("journalFactory", function ($http, authFactory) {
  let user1 = authFactory.getUID()
  return {
    getJournal: function () {
      return $http.get(`https://still-waters-cfd33.firebaseio.com/-KcU7nxNmA0uHzvW0aXu/users/${user1.uid}/journal.json`)
      .then((data) => {
        console.log(data)
        return data
      })
    }
  }
});
