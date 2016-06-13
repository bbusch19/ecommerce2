angular.module('ecommerce').controller('mainCtrl', function($scope, mainSvc) {

    $scope.getProducts = function() {
        mainSvc.getProducts().then(function(response) {
            $scope.products = response;
        })
    }
    $scope.getProducts();

    $scope.addProduct = function(product) {
        mainSvc.addProduct(product).then(function(response) {
            $scope.getProducts();
        })
    }

    $scope.deleteProduct = function(id) {
        mainSvc.deleteProduct(id).then(function(response) {
            $scope.getProducts();
        })
    }

})