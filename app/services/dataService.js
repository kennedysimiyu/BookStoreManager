// IIFE to keep our code out of global scope
(function() {
  "use strict";

  angular.module("app").factory("dataService", dataService);

  // named data service function
  function dataService() {

    // returned object literal, which represents the API of the service
    return {
    // our properties which are referenced functions
      getAllBooks: getAllBooks,
      getAllReaders: getAllReaders
    };

    // function retrieving books
    function getAllBooks() {
        return [
            {
                book_id: 1,
                title: 'Doing Data Science: Straight Talk from the Frontline',
                author: 'Cathy O\'Neil and Rachel Schutt',
                year_published: 2013
            },
            {
                book_id: 2,
                title: 'Data Science for Business: What You Need to Know about Data Mining and ...',
                author: 'Tom Fawcett',
                year_published: 2013 
            },
            {
                book_id: 3,
                title: 'Python for Data Analysis: Data Wrangling with Pandas, NumPy, and IPython',
                author: 'Wes McKinney',
                year_published: 2011 
            },
            {
                book_id: 4,
                title: 'R for Data Science',
                author: 'Garrett Grolemund and Hadley Wickham',
                year_published: 2016 
            },
            {
                book_id: 5,
                title: 'Data Science from Scratch: First Principles with Python',
                author: 'Joel Grus',
                year_published: 2015 
            }
        ];
    }

    // function retrieving readers
    function getAllReaders() {
        return [
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
        ]
    }
  }
})();
