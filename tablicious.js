var tablicious = function (options){
    var opts = options || {};
    var tabHeaderContainerId = opts.tabHeaderContainerId || 'tabs';
    var tabContentContainerId = opts.tabContentContainerId || 'tabsContent';
    var tabHeaderPrefix = opts.tabHeaderPrefix || 'tabHeader';
    var tabPagePrefix = opts.tabPagePrefix || 'tabpage';
    var initalStartingTabNumber = opts.initalStartingTabNumber || 1;

    window.onload = function init() {
        var tabContainer = document.getElementById(tabHeaderContainerId);
        var tabContent = document.getElementById(tabContentContainerId);

        setActiveTab(initalStartingTabNumber);

        var pages = tabContent.getElementsByTagName('div');

        for (var i = 1; i < pages.length; i++) {
            hideInactiveTab(getTabNumber(pages.item(i)));
        }

        var tabs = tabContainer.getElementsByTagName('li');
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].onclick = displayPage;
        }
    }

    var hideInactiveTab = function (tabNumber) {
        document.getElementById(getTabElementId(tabHeaderPrefix,tabNumber)).setAttribute('class', 'tabInactiveHeader');
        document.getElementById(getTabElementId(tabPagePrefix,tabNumber)).setAttribute('class', 'tabInactivePage');
    };

    var setActiveTab = function (tabNumber) {
        var tab = document.getElementById(getTabElementId(tabHeaderPrefix,tabNumber));
        tab.setAttribute('class', 'tabActiveHeader');

        document.getElementById(getTabElementId(tabPagePrefix,tabNumber)).setAttribute('class', 'tabActivePage');
        tab.parentNode.setAttribute('data-active-tab', tabNumber);
    };

    var getTabNumber = function (tabElement){
        return tabElement.id.split('_')[1];
    };

    var getTabElementId = function(tabPrefix, tabId){
        return tabPrefix + '_' + tabId;
    };

    var displayPage = function () {
        var activeTabNumber = this.parentNode.getAttribute('data-active-tab');
        hideInactiveTab(activeTabNumber);

        var tabNumber = getTabNumber(this);
        setActiveTab(tabNumber);
    };
};

tablicious({});