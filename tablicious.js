var tablicious = function (options){
    var opts = options || {};
    var tabCssClasses = opts.tabCssClasses || {};
    var tabHeaderContainerId = opts.tabHeaderContainerId || 'tabs';
    var tabContentContainerId = opts.tabContentContainerId || 'tabsContent';
    var tabHeaderPrefix = opts.tabHeaderPrefix || 'tabHeader';
    var tabPagePrefix = opts.tabPagePrefix || 'tabpage';
    var initialStartingTabNumber = opts.initialStartingTabNumber || 1;

    tabCssClasses.inactiveHeader = tabCssClasses.inactiveHeader || 'tabInactiveHeader';
    tabCssClasses.inactivePage = tabCssClasses.inactivePage || 'tabInactivePage';
    tabCssClasses.activeHeader = tabCssClasses.activeHeader || 'tabActiveHeader';
    tabCssClasses.activePage = tabCssClasses.activePage || 'tabActivePage';

    window.onload = function init() {

        var tabContent = document.getElementById(tabContentContainerId);
        var pages = tabContent.getElementsByTagName('div');

        for (var i = 0; i < pages.length; i++) {
            hideInactiveTab(getTabNumber(pages.item(i)));
        }
        setActiveTab(initialStartingTabNumber);

        actOnAllTabs(function(tabs, currentIndex) {
            tabs[currentIndex].onclick = displayPage;
        });
    }

    var actOnAllTabs = function( action ){
        var tabContainer = document.getElementById(tabHeaderContainerId);
        var tabs = tabContainer.getElementsByTagName('li');
        for (var i = 0; i < tabs.length; i++) {
            action(tabs, i);
        }
    };

    var hideInactiveTab = function (tabNumber) {
        document.getElementById(getTabElementId(tabHeaderPrefix,tabNumber)).setAttribute('class', tabCssClasses.inactiveHeader);
        document.getElementById(getTabElementId(tabPagePrefix,tabNumber)).setAttribute('class', tabCssClasses.inactivePage);
    };

    var setActiveTab = function (tabNumber) {
        var tab = document.getElementById(getTabElementId(tabHeaderPrefix,tabNumber));
        tab.setAttribute('class', tabCssClasses.activeHeader);

        document.getElementById(getTabElementId(tabPagePrefix,tabNumber)).setAttribute('class', tabCssClasses.activePage);
    };

    var getTabNumber = function (tabElement){
        return tabElement.id.split('_')[1];
    };

    var getTabElementId = function(tabPrefix, tabNumber){
        return tabPrefix + '_' + tabNumber;
    };

    var getActiveTab = function() {
        var activeTab;
        actOnAllTabs( function(tabs, currentIndex){
            if (tabs[currentIndex].getAttribute('class') === tabCssClasses.activeHeader){
                activeTab = tabs[currentIndex];
            }
        });
        return activeTab;
    };

    var displayPage = function () {

        var activeTabNumber = getTabNumber(getActiveTab());
        hideInactiveTab(activeTabNumber);

        var tabNumber = getTabNumber(this);
        setActiveTab(tabNumber);
    };
};

tablicious();
