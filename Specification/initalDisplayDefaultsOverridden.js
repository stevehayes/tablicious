describe('rendering tabs with default settings overridden', function (){
    beforeEach( function () {
        setFixtures(sampleHtml.basic);
        $('#tabsHeadingContainer').tablicious({initialTabId:'secondTabHeading'});
    });

    afterEach( function (){
        jasmine.getFixtures().cleanUp();
    });

   it('should select only the tab specified in options', function (){
       expect($('#secondTabHeading')).toHaveClass('tabActiveHeader');
       expect($('#firstTabHeading')).toHaveClass('tabInactiveHeader');
   });

   it('should show the tab specified in options contents', function(){
       expect($('#secondPageContent')).toHaveClass('tabActivePage');
   });

   it('should hide all other tabs contents', function(){
       expect($('#firstPageContent')).toHaveClass('tabInactivePage');
   });
});