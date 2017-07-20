
app.controller('miscController', 
    function($scope, miscService) {
    
    $scope.misc = miscService.query();

    console.log($scope.misc);

})