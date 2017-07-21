app.service('purchaseService', [function () {

        this.addNewItem = function (item) {
            var cart = JSON.parse(localStorage.cart);

            if (cart.length === 0) {
                item.quantity = 1;
                cart.push(item);
                localStorage.setItem('cart', JSON.stringify(cart));
            } else {
                var index = indexOf(cart, item);
                console.log(index);
                if (index === -1) {
                    // console.log("1");
                    item.quantity = 1;
                    // localStorage.removeItem('cart');
                    cart.push(item);
                    localStorage.setItem('cart', JSON.stringify(cart));
                } else {
                    cart[index].quantity += 1;
                    localStorage.setItem("cart", JSON.stringify(cart));
                }
            }
        }
        


        function indexOf (array, object) {
            for (var i = 0; i < array.length; i++) {
                if (array[i].product_id === object.product_id) {
                    // console.log(array[i].product_id)
                    return i;
                }
            }
            return -1;
        }

        this.upQuantity = function(item) {
            var cart = JSON.parse(localStorage.cart);
            for (var i = 0; i < cart.length; i++) {
                if(item.product_id === cart[i].product_id){
                    cart[i].quantity += 1;
                    item.quantity += 1; 
                    localStorage.setItem('cart', JSON.stringify(cart));
                }
            }
        }

        this.downQuantity = function(item) {
            var cart = JSON.parse(localStorage.cart);
            for (var i = 0; i < cart.length; i++) {
                if(item.product_id === cart[i].product_id){
                    cart[i].quantity -= 1;
                    item.quantity -= 1; 
                    localStorage.setItem('cart', JSON.stringify(cart));
                }
            }
        }
        

    }])
