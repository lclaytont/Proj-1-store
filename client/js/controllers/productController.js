
app.controller('productController',
    function($scope, $routeParams, productFactory) {
    console.log("Products Page Loaded");
    $scope.product = productFactory.get({id: $routeParams.id});
    console.log($scope.product);
})
