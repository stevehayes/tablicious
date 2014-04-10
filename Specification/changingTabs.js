describe('clicking on an unselected tab', function (){
    beforeEach( function () {
        setFixtures(sampleHtml.basic);
        $('#tabsHeadingContainer').tablicious();
        $('#secondTabHeading').click();
    });

    afterEach( function (){
        jasmine.getFixtures().cleanUp();
    });

   it('should select the clicked tab', function (){
       expect($('#secondTabHeading')).toHaveClass('tabActiveHeader');
       expect($('#firstTabHeading')).toHaveClass('tabInactiveHeader');
   });

   it('should show the clicked tabs contents', function(){
       expect($('#secondPageContent')).toHaveClass('tabActivePage');
   });

   it('should hide all other tabs contents', function(){
       expect($('#firstPageContent')).toHaveClass('tabInactivePage');
   });
});