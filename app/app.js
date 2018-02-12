(function() {
  // Create a variable called app and assign the module to it
  var app = angular.module('app', []);

  // use the variable to call the config function
  app.config(function($provide){

    $provide.provider('books', function () {
       this.$get = function () {
          
        //string variables value's in the service
          var appName = 'Data Science Online BookStore';
          var appDesc = 'Track which books you have read.';

         // return an object literal representing the service
          return {
            appName: appName,
            appDesc: appDesc
          };
         
       };      
    });
  });
})();
