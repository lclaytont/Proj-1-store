
app.controller('purchaseController', function($scope) {
    console.log("Purchase Page Loaded");

    $scope.items = JSON.parse(localStorage.cart)
    console.log($scope.items)
})