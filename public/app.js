angular.module('ecommerce', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');

$stateProvider
.state('home', {
    url: '/',
    templateUrl: './components/views/homeTmpl.html',
    controller: 'mainCtrl'
})
.state('admin', {
    url: '/admin',
    templateUrl: './components/views/adminTmpl.html',
    controller: 'mainCtrl'
})

})



