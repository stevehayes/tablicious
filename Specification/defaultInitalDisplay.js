describe('rendering tabs with default settings', function (){
    beforeEach( function () {
        setFixtures(sampleHtml.basic);
        $('#structureToBeTurnedIntoTabs').tablicious();
    });

    afterEach( function (){
        jasmine.getFixtures().cleanUp();
    });

   it('should select only the first tab', function (){
       expect($('#firstTabHeading')).toHaveClass('tabActiveHeader');
       expect($('#secondTabHeading')).toHaveClass('tabInactiveHeader');
   });

   it('should show the first tabs contents', function(){
       expect($('#firstPageContent')).toHaveClass('tabActivePage');
   });

   it('should hide all other tabs contents', function(){
       expect($('#secondPageContent')).toHaveClass('tabInactivePage');
   });

});