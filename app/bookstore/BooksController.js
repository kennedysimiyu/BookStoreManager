(function() {
  'use strict';

  // use dependency annotation incase of minification of code
  angular.module('app')
      .controller('BooksController', ['books', 'dataService', 'logger', 'badgeService', BooksController]);

  // injecting the service in our controller, using angular As no injecting $scope capture the this value and assign it to vm
  function BooksController(books, dataService, logger, badgeService) {
    var vm = this;

    // define the properties
    vm.appName = books.appName;

    //vm.allBooks = dataService.getAllBooks();

    // returning all books call using promises
    dataService.getAllBooks()
      .then(getBooksSuccess, getBooksError);

      function getBooksSuccess(books) {
        vm.allBooks = books;
      }

      function getBooksError(reason) {
        console.log(reason);
      }


    vm.allReaders = dataService.getAllReaders();

    vm.getBadge = badgeService.retrieveBadge;

    logger.output('BooksController has been created.');
  }
})();