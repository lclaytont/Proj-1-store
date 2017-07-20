
app.controller('miscController',
    function ($scope, miscService) {
        
        $scope.misc = miscService.query();

        // console.log($scope.misc);

        $scope.addToCart = function (m) {

            // console.log(m);
            
            var cart = JSON.parse(localStorage.cart);
            var index = indexOf(cart, m);
            console.log(index);

            if (cart.length === 0){
                m.quantity = 1;
                cart.push(m); 
                localStorage.setItem('cart', JSON.stringify(cart));
            } else {
                if (index === -1) {
                    // cart[index].quantity = cart[index].quantity + 1;
                    m.quantity = 1;
                    localStorage.removeItem('cart');
                    cart.push(m);
                    localStorage.setItem('cart', JSON.stringify(cart));
                } else {
                    cart[index].quantity += 1;
                    cart.push(m);
                    localStorage.setItem("cart", cart);
                }
                // cart.push(m);
                // localStorage.removeItem('cart');
                // localStorage.setItem('cart', JSON.stringify(cart));
            }
            
            function indexOf(array, object) {
                for (var i = 0; i < array.length; i++) {
                if (array[i].product_id === object.product_id) {
                    console.log(array[1].product_id)
                    return i;
                    
                }
                return -1;
            }
        }

        console.log(localStorage);
    }

})