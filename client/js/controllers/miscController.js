
app.controller('miscController',
    function ($scope, miscService) {
        
        $scope.misc = miscService.query();

        console.log($scope.misc);

        $scope.addToCart = function (m) {

            console.log(m);
            
            var cart = JSON.parse(localStorage.cart);

            if (cart.length === 0){
                cart.push(m); 
                localStorage.setItem('cart', JSON.stringify(cart));
            } else {
                cart.push(m);
                localStorage.removeItem('cart');
                localStorage.setItem('cart', JSON.stringify(cart));
            }
            
            // var index = indexOf(localStorage.cart, m);

            // if (index != -1) {
            //     $scope.cart[index].quantity = $scope.cart[index].quantity + 1;
            // } else {
            //     m.quantity = 1;
            //     $scope.cart.push(m);
            //     localStorage.setItem("cart", $scope.cart);
            // }

        //     function indexOf(array, object) {
        //         for (var i = 0; i < array.length; i++) {
        //         if (array[i].id === object.id) {
        //             return i;
        //         }
        //         return -1;
        //     }
        // }

        console.log(localStorage);
    }

})