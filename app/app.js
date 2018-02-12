(function() {
  // Create a variable called app and assign the module to it
  var app = angular.module('app', []);

  app.provider('books', function () {
    this.$get = function () {
       
     //string variables value's in the service
       var appName = 'Data Science Online BookStore';
       var appDesc = 'Track which books you have read.';

       // application version
       var version = '1.0';

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
    // code for appending version in front of title
    var includeVersionInTitle = false;
    this.setIncludeVersionInTitle = function (value) {
      includeVersionInTitle = value;
    };       
 });
  
  
  // use the variable to call the config function
  app.config(function(booksProvider){

    booksProvider.setIncludeVersionInTitle(true);

  });
})();
