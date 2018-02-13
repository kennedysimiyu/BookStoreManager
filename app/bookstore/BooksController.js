(function() {
  'use strict';

  // use dependency annotation incase of minification of code
  angular.module('app')
      .controller('BooksController', ['books', 'dataService', 'logger', 'badgeService', '$q',  BooksController]);

  // injecting the service in our controller, using angular As no injecting $scope capture the this value and assign it to vm
  function BooksController(books, dataService, logger, badgeService, $q) {
    var vm = this;

    // define the properties
    vm.appName = books.appName;

    // implementation for waiting on all data array before returing the promise

   /* 
      var booksPromise = dataService.getAllBooks();
      var readersPromise = dataService.getAllReaders();

      $q.all([booksPromise, readersPromise])
        .then(getAllDataSuccess)
        .then(getAllDataError);

      function getAllDataSuccess(dataArray) {
        vm.allBooks = dataArray[0];
        vm.allReaders = dataArray[1];
      }

      function getAllDataError(reason) {
        console.log(reason);
      } 
    */

    //vm.allBooks = dataService.getAllBooks();

    // returning all books call using promises
    dataService.getAllBooks()
      .then(getBooksSuccess, null, getBooksNotification)
      .catch(errorCallback)
      .finally(getAllBooksComplete);

      function getBooksSuccess(books) {
        vm.allBooks = books;
      }

      // function getBooksError(reason) {
      //   console.log(reason);
      // }

      function errorCallback(errorMsg) {
        console.log('Error Message: ' + errorMsg);
      }

      function getBooksNotification(notification) {
        console.log('Promise Notification: ' + notification);
      }

      function getAllBooksComplete() {
        console.log('getAllBooks has completed');
      }


    //vm.allReaders = dataService.getAllReaders();
    dataService.getAllReaders()
    .then(getReadersSuccess, null, getReadersNotification)
    .catch(errorCallback)
    .finally(getAllReadersComplete);

    function getReadersSuccess(readers) {
      vm.allReaders = readers;
    }

    function errorCallback(errorMsg) {
      console.log('Error Message: ' + errorMsg);
    }

    function getReadersNotification(notification) {
      console.log('Promise Notification: ' + notification);
    }

    function getAllReadersComplete() {
      console.log('getAllReaders has completed');
    }


    vm.getBadge = badgeService.retrieveBadge;

    logger.output('BooksController has been created.');
  }
})();