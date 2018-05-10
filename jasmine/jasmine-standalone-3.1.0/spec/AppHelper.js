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
        it('ensures cats are defined', function() {});

        it('ensures cat names are defined and not empty', function() {});

        it('ensures the model list lenght is matching with the rendered list lenght', function() {});

    });

    describe('Admin Area', function() {

        it('ensures Admin form is hidden by default', function() {});

        it('ensures Admin button becomes enabled after clicking on the first cat', function() {});

        it('ensures Admin form is shown after clicking on the Admin button', function() {});

    });

    describe('Dashboard Area after first click on the cat list', function() {

        it('shows a cat photo', function() {});

        it('shows photo attribution', function() {});

        it('has a click counter that increments on each click', function() {});

    });

}());