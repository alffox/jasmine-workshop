/*
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('Cats', function() {
        it('are defined', function() {
            //your code goes here
        });

        it('names are defined and not empty', function() {
            //your code goes here - this is a nice place to make a loop
        });

        it('number in the DB model is matching with the rendered names in the list', function() {
            //your code goes here
        });

    });

    describe('Admin Area', function() {

        it('has Admin form hidden by default', function() {
            //your code goes here
        });

        beforeEach(function() {
            $('ul > *').trigger('click');//Do not change - since the app has some interaction based on clicks, let's trigger this event before testing all next functionalities
        });

        it('has Admin button enabled after clicking on the first cat', function() {
            //your code goes here
        });

        it('has Admin form showing after clicking on the Admin button', function() {
            //your code goes here
        });

    });

    describe('Dashboard Area after first click on the cat list', function() {

        it('shows a cat photo', function() {
            //your code goes here
        });

        it('has a click counter that increments by 1 on each click', function() {
            //your code goes here
        });

    });

}());