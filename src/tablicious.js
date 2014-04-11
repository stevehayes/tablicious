(function($){
    $.fn.tablicious = function(options){

        var tabsHeadingContainer = this;

        var opts = options || {};
        _.defaults(opts, {
            tabCssClasses: {},
            initialTabId: null
        });
        _.defaults(opts.tabCssClasses, {
            inactiveHeader:'tabInactiveHeader',
            inactivePage : 'tabInactivePage',
            activeHeader : 'tabActiveHeader',
            activePage : 'tabActivePage'
        });

        var setActiveTab = function($activeTabHeading){
            var $activeTab = $activeTabHeading;
            $tabHeadings.each( function() {
                setTabState(this, this.id == $activeTab.id);
            });
        };

        var setTabState = function(tabHeading, isActive){
            var $heading = $(tabHeading);
            var $tabBody = $( "#" + $heading.data('tabContentId') );

            $heading.toggleClass(opts.tabCssClasses.activeHeader, isActive);
            $tabBody.toggleClass(opts.tabCssClasses.activePage, isActive);

            $heading.toggleClass(opts.tabCssClasses.inactiveHeader, !isActive);
            $tabBody.toggleClass(opts.tabCssClasses.inactivePage, !isActive);
        };

        var changeTabs = function(){
            setActiveTab(this);
        };

        var $tabHeadings = tabsHeadingContainer.children();

        var $initialTab;
        if (opts.initialTabId){
            $initialTab = $('#' + opts.initialTabId )[0];
        }
        else{
            $initialTab = $tabHeadings[0];
        }
        setActiveTab($initialTab);
        $tabHeadings.click(changeTabs);
    };
})( jQuery);
