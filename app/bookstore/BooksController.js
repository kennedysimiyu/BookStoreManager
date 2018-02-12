(function() {
  'use strict';

  angular.module('app')
  .controller('BooksController', BooksController);

  // injecting the service in our controller, using angular As no injecting $scope capture the this value and assign it to vm
  function BooksController(books) {
    var vm = this

    // define the properties
    vm.appName = books.appName;
    
  }
}());