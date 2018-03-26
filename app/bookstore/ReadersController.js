(function() {
    'use strict';
  
    // use dependency annotation incase of minification of code
    angular.module('app')
        .controller('ReadersController', ['$q', 'books', 'dataService', 'logger', 'badgeService', '$cookies', '$cookieStore',  ReadersController]);
  
    // injecting the service in our controller, using angular As no injecting $scope capture the this value and assign it to vm
    function ReadersController($q, books, dataService, logger, badgeService, $cookies, $cookieStore) {
      var vm = this;

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
  
      logger.output('ReaderssController has been created.');   
    }
  })();