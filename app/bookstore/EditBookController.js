(function(){
    'use strict';

    // with the resolve property you don't need to inject the dataService as its handled on the book reolve property
    angular.module('app')
        .controller('EditBookController', ['$routeParams', 'dataService',  'books', '$cookies', '$cookieStore',  EditBookController]);

    function EditBookController($routeParams, dataService, books, $cookies, $cookieStore) {
        var vm = this;

        /*dataService.getAllBooks()
        .then(function (books) { */

            vm.currentBook = books.filter(function (item){
                return item.book_id == $routeParams.bookID;
            })[0];

            // store the current book title using a cookies
            vm.setAsFavorite = function(){
                $cookies.favoriteBook = vm.currentBook.title;
            }

            // saving of an entire object to navigate book too using cookies
            $cookieStore.put('lastEdited', vm.currentBook);
    }


}());