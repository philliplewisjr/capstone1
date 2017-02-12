

app.controller('UserCtrl', function($scope, $location) {
  console.log('user controller')
  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];
});
