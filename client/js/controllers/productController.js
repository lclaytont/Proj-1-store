
// app.controller('productController',"$scope","$routeParams","$location", 
// function($scope) {
//     console.log("Products Page Loaded");
//     $scope.products = products.query();
// })

    app.controller("productController", ["$scope", "products" ,"$routeParams" 
    ,"$location",
    function($scope, products, $routeParams, $location){
        console.log("Products page and controller loaded!")
        $scope.products = products.query();
        console.log(products.query());
    }])