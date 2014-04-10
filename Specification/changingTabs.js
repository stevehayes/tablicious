describe('clicking on an unselected tab', function (){
    beforeEach( function () {
        setFixtures(sampleHtml.basic);
        tablicious().initializeTabs();
        $('#tabHeader_2').click();
    });

    afterEach( function (){
        jasmine.getFixtures().cleanUp();
    });

   it('should select the clicked tab', function (){
       expect($('#tabHeader_2')).toHaveClass('tabActiveHeader');
       expect($('#tabHeader_1')).toHaveClass('tabInactiveHeader');
   });

   it('should show the clicked tabs contents', function(){
       expect($('#tabpage_2')).toHaveClass('tabActivePage');
   });

   it('should hide all other tabs contents', function(){
       expect($('#tabpage_1')).toHaveClass('tabInactivePage');
   });

});