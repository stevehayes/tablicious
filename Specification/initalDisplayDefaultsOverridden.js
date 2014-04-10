describe('rendering tabs with default settings overridden', function (){
    beforeEach( function () {
        setFixtures(sampleHtml.basic);
        tablicious({initialStartingTabNumber:2}).initializeTabs();
    });

    afterEach( function (){
        jasmine.getFixtures().cleanUp();
    });

   it('should select only the tab specified in options', function (){
       expect($('#tabHeader_2')).toHaveClass('tabActiveHeader');
       expect($('#tabHeader_1')).toHaveClass('tabInactiveHeader');
   });

   it('should show the tab specified in options contents', function(){
       expect($('#tabpage_2')).toHaveClass('tabActivePage');
   });

   it('should hide all other tabs contents', function(){
       expect($('#tabpage_1')).toHaveClass('tabInactivePage');
   });

});