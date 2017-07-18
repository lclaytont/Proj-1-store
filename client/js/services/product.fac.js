app.factory("CovalenceStore.factory",["ngResource"])

.factory("ProductFactory", ["$resource", function($resource) {
        return $resource("http://localhost:3000/api/products/:id",
        {
             id:'@id'
        })
    }]);