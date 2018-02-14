(function(){
    'use strict';

    // with the resolve property you don't need to inject the dataService as its handled on the book reolve property
    angular.module('app')
        .controller('EditBookController', ['$routeParams', 'books', EditBookController]);

    function EditBookController($routeParams, books) {
        var vm = this;

        /*dataService.getAllBooks()
        .then(function (books) { */

            vm.currentBook = books.filter(function (item){
                return item.book_id == $routeParams.bookID;
            })[0];
    }


}());