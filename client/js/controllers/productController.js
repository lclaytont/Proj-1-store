
// app.controller('productController',"$scope","$routeParams","$location", 
// function($scope) {
//     console.log("Products Page Loaded");
//     $scope.products = products.query();
// })

    app.controller("productController", ["$scope" ,"$routeParams" 
    ,"$location", "ProductFactory",
    function($scope, $routeParams, $location, ProductFactory){
        console.log("Products page and controller loaded!")
        $scope.products = ProductFactory.query();
        console.log($scope.products);
    }]);