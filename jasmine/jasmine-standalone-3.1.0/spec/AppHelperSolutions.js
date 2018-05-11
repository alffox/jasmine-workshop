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
            expect(model.cats).toBeDefined();
            expect(model.cats.length).not.toBe(0);
        });

        it('names are defined and not empty', function() {
            for (var i = 0; i < model.cats.length; i++) {
                var names = model.cats[i].name;

                expect(names).toBeDefined();
                expect(names.length).not.toBe(0);
                expect(names).not.toBe(0);
            }
        });

        it('number in the DB model is matching with the rendered names in the list', function() {
            var modelLength = (model.cats.length);
            var renderedLength = $('.cat-list').children().length;

            expect(modelLength).toEqual(renderedLength);
        });

    });

    describe('Admin Area', function() {

        it('has Admin form hidden by default', function() {
            expect($('form')).toHaveClass('hidden');
        });

        beforeEach(function() {
            $('ul > *').trigger('click');
        });

        it('has Admin button enabled after clicking on the first cat', function() {
            expect($('.admin-button')).not.toBeDisabled();
        });

        it('has Admin form showing after clicking on the Admin button', function() {
            $('.admin-button').trigger('click');
            expect($('form')).not.toHaveClass('hidden');
        });

    });

    describe('Dashboard Area after first click on the cat list', function() {

        it('shows a cat photo', function() {
            var elemCatImage = $('img');
            var imageWidth = elemCatImage.width();

            expect(elemCatImage).toExist();
            expect(elemCatImage).toBeInDOM();
            expect(elemCatImage).toBeVisible();
            expect(imageWidth).toBeGreaterThan('0');
        });

        it('has a click counter that increments by 1 on each click', function() {
            var initialClickCounter = clickedCat.clickCounter;
            $('img').trigger('click');
            expect(initialClickCounter + 1).toEqual(clickedCat.clickCounter);
        });

    });

}());