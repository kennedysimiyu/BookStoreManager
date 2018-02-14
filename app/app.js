(function() {
  // Create a variable called app and assign the module to it
  var app = angular.module('app', ['ngRoute']);

  app.provider('books', ['constants', function (constants) {

     // code for appending version in front of title
     var includeVersionInTitle = false;
     this.setIncludeVersionInTitle = function (value) {
       includeVersionInTitle = value;
     };  
    this.$get = function () {
       
     //string variables value's in the service
       var appName = constants.APP_TITLE;
       var appDesc = constants.APP_DESCRIPTION;

       // application version
       var version = constants.APP_VERSION;

       // checking the includeVersionInTitle value if true it appends the version number
       if (includeVersionInTitle) {
         appName += '' + version;
       }

      // return an object literal representing the service
       return {
         appName: appName,
         appDesc: appDesc
       };    
    };       
 }]);

  // use the variable to call the config function
  app.config(['booksProvider', '$routeProvider', 'constants', 'dataServiceProvider', function(booksProvider, $routeProvider, constants, dataServiceProvider){

    booksProvider.setIncludeVersionInTitle(true);

    $routeProvider
    .when('/', {
      templateUrl: '/templates/books.html',
      controller: 'BooksController',
      controllerAs: 'books'
    })
    .when('/AddBook', {
      templateUrl: '/templates/addBook.html',
      controller: 'AddBookController',
      controllerAs: 'addbook'
    })
    .when('/EditBook/:bookID', {
      templateUrl: '/templates/editBook.html',
      controller: 'EditBookController',
      controllerAs: 'bookEditor'
    });

  }]);
})();
