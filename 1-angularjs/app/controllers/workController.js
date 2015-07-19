app.controller('workController', [
  '$scope',
  function($scope) {

    $scope.works = [{
      name: 'Bold',
      money: 25,
      type: 'mobile'
    }, {
      name: 'RRC',
      money: 30,
      type: 'hybrid'
    }, {
      name: 'CanTire',
      money: 28,
      type: 'web'
    }, {
      name: 'iQmetrix',
      money: 15,
      type: 'web'
    }];

  }
]);
