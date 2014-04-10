describe('rendering tabs with default settings', function (){
    beforeEach( function () {
        setFixtures(sampleHtml.basic);
        tablicious().initializeTabs();
    });

    afterEach( function (){
        jasmine.getFixtures().cleanUp();
    });

   it('should select only the first tab', function (){
       expect($('#tabHeader_1')).toHaveClass('tabActiveHeader');
       expect($('#tabHeader_2')).toHaveClass('tabInactiveHeader');
   });

   it('should show the first tabs contents', function(){
       expect($('#tabpage_1')).toHaveClass('tabActivePage');
   });

   it('should hide all other tabs contents', function(){
       expect($('#tabpage_2')).toHaveClass('tabInactivePage');
   });

});