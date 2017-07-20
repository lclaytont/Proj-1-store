
app.controller('apparelController', function($scope, apparelFactory) {
    $scope.thang = 'Apparel'

    $scope.clothes = apparelFactory.query(); 
    console.log($scope.clothes);
})