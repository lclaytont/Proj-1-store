
app.controller('miscController',
    function ($scope, miscService) {
        
        $scope.misc = miscService.query();

        // console.log($scope.misc);

        $scope.addToCart = function (m) {
            
            var cart = JSON.parse(localStorage.cart);

            if (cart.length === 0){
                m.quantity = 1;
                cart.push(m); 
                localStorage.setItem('cart', JSON.stringify(cart));
            } else {
                var index = indexOf(cart, m);
                if (index === -1) {
                    console.log("1");
                    m.quantity = 1;
                    localStorage.removeItem('cart');
                    cart.push(m);
                    localStorage.setItem('cart', JSON.stringify(cart));
                } else {
                    cart[index].quantity += 1;
                    localStorage.setItem("cart", JSON.stringify(cart));
                }
            }
            
            function indexOf(array, object) {
                console.log(array[0]);
                console.log(object);
                for (var i = 0; i <= array.length; i++) {
                if (array[i].product_id === object.product_id) {
                    console.log(array[i].product_id)
                    return i;
                    
                }
                return -1;
            }
        }
    }

})