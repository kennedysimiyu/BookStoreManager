(function() {
  // Create a variable called app and assign the module to it
  var app = angular.module('app', []);

  app.provider('books', function (constants) {

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
        
 });
  
  
  // use the variable to call the config function
  app.config(function(booksProvider){

    booksProvider.setIncludeVersionInTitle(true);

  });
})();
