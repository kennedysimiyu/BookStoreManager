// IIFE to keep our code out of global scope
(function() {
  'use strict';

  angular.module('app')
       .factory('dataService', ['$q', '$timeout', dataService]);

  // named data service function
  function dataService($q, $timeout) {

    // returned object literal, which represents the API of the service
    return {
    // our properties which are referenced functions
      getAllBooks: getAllBooks,
      getAllReaders: getAllReaders
    };

    // function retrieving books
    function getAllBooks() {

        //logger.output('getting all books');

        var booksArray = [
            {
                book_id: 1,
                title: 'Doing Data Science: Straight Talk from the Frontline',
                author: 'Cathy O\'Neil and Rachel Schutt',
                year_published: 2013,
                imageUrl: "images/Data-Science-for-Business.jpg"
            },
            {
                book_id: 2,
                title: 'Data Science for Business: What You Need to Know about Data Mining and ...',
                author: 'Tom Fawcett',
                year_published: 2013,
                imageUrl: "images/The-Data-Science-Handbook.png",
            },
            {
                book_id: 3,
                title: 'Python for Data Analysis: Data Wrangling with Pandas, NumPy, and IPython',
                author: 'Wes McKinney',
                year_published: 2011,
                imageUrl: "images/Practical-Statistics-for-Data-Scientists.jpg" 
            },
            {
                book_id: 4,
                title: 'R for Data Science',
                author: 'Garrett Grolemund and Hadley Wickham',
                year_published: 2016,
                imageUrl: "images/Analyzing-and-visualizing-Data-with-F-Sharp.png" 
            },
            {
                book_id: 5,
                title: 'Data Science from Scratch: First Principles with Python',
                author: 'Joel Grus',
                year_published: 2015,
                imageUrl:  "images/Machine Learning with Python.jpg" 
            }
        ];

        var deferred = $q.defer();

        $timeout(function(){

            var successful = true;
            if (successful) {

                deferred.notify('Just getting started gathering books.....');
                deferred.notify('Almost done gathering books......');

                deferred.resolve(booksArray);

            } else {
                deferred.reject('Error retrieving books');
            }

        }, 1000);

        return deferred.promise;
    }

    // function retrieving readers
    function getAllReaders() {

       // logger.output('getting all readers');
       var readersArray = [
            {
                reader_id: 1,
                name: 'Kennedy',
                weeklyReadingGoal: 315,
                totalMinutesRead: 5600
            },
            {
                reader_id: 2,
                name: 'Simiyu',
                weeklyReadingGoal: 315,
                totalMinutesRead: 5600
            },
            {
                reader_id: 3,
                name: 'Manyonge',
                weeklyReadingGoal: 315,
                totalMinutesRead: 5600
            },
            {
                reader_id: 4,
                name: 'Angular JS',
                weeklyReadingGoal: 315,
                totalMinutesRead: 5600
            },
            {
                reader_id: 5,
                name: 'React Redux',
                weeklyReadingGoal: 315,
                totalMinutesRead: 5600
            }
        ];

        var deferred = $q.defer();

        $timeout(function(){

            var successful = true;
            if (successful) {

                deferred.notify('Just getting started gathering readers.....');
                deferred.notify('Almost done gathering readers......');

                deferred.resolve(readersArray);

            } else {
                deferred.reject('Error retrieving readers');
            }

        }, 1500);

        return deferred.promise;
    }
  }
  // inject the logger service
  dataService.$inject = ['logger'];
})();
