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

        var setActiveTab = function(activeTabHeading){
            var activeTab = activeTabHeading;
            tabHeadings.each( function() {
                setTabState(this, this.id == activeTab.id);
            });
        };

        var setTabState = function(tabHeading, isActive){
            var heading = $(tabHeading);
            var tabBody = $( "#" + heading.data('tabContentId') );

            if(isActive){
                heading.removeClass(opts.tabCssClasses.inactiveHeader);
                heading.addClass(opts.tabCssClasses.activeHeader);
                tabBody.removeClass(opts.tabCssClasses.inactivePage);
                tabBody.addClass(opts.tabCssClasses.activePage);
            }else{
                heading.removeClass(opts.tabCssClasses.activeHeader);
                heading.addClass(opts.tabCssClasses.inactiveHeader);
                tabBody.removeClass(opts.tabCssClasses.activePage);
                tabBody.addClass(opts.tabCssClasses.inactivePage);
            }
        };

        var changeTabs = function(){
            setActiveTab(this);
        };

        var tabHeadings = tabsHeadingContainer.children();

        var initialTab;
        if (opts.initialTabId){
            initialTab = $('#' + opts.initialTabId )[0];
        }
        else{
            initialTab = tabHeadings[0];
        }
        setActiveTab(initialTab);
        tabHeadings.click(changeTabs);
    };
})( jQuery);
