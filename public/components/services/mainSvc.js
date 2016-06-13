angular.module('ecommerce').service('mainSvc', function($http) {

//----------------------------------------------------------------------------------
// Product Functions
//----------------------------------------------------------------------------------

    this.getProducts = function() {
        return $http({
            method: 'GET',
            url: '/api/products'
        }).then(function(response) {
            return response.data;
        })
    }

    this.addProduct = function(product) {
        return $http({
            method: 'POST',
            url: '/api/products',
            data: {
                name: product.name,
                price: product.price,
                type: product.type
            }
        })
    }

    this.deleteProduct = function(id) {
        return $http({
            method: 'DELETE',
            url: '/api/products/' + id
        })
    }

})