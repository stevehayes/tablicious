window.onload = function init() {
    var tabContainer = document.getElementById('tabs');
    var tabContent = document.getElementById('tabsContent');
    var currentTab = document.getElementById('tabHeader_1');

    var activePageTabId = getTabId( currentTab );
    setActiveTab(activePageTabId);

    var pages = tabContent.getElementsByTagName('div');

    for (var i = 1; i < pages.length; i++) {
        hideInactiveTab(getTabId(pages.item(i)));
    }

    var tabs = tabContainer.getElementsByTagName('li');
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].onclick = displayPage;
    }
}

function hideInactiveTab(tabId) {
    document.getElementById('tabHeader_' + tabId).setAttribute('class', 'tabInactiveHeader');
    document.getElementById('tabpage_' + tabId).setAttribute('class', 'tabInactivePage');
}

function setActiveTab(tabId) {
    var tab = getTabElementById(tabId);
    tab.setAttribute('class', 'tabActiveHeader');

    document.getElementById('tabpage_' + tabId).setAttribute('class', 'tabActivePage');
    tab.parentNode.setAttribute('data-active-tab', tabId);
}

function displayPage() {
    var activeTabId = this.parentNode.getAttribute('data-active-tab');
    hideInactiveTab(activeTabId);

    var tabId = getTabId(this);
    setActiveTab(tabId);
}

function getTabId(tabElement){
    return tabElement.id.split('_')[1];
}

function getTabElementById(tabId){
    return document.getElementById('tabHeader_' + tabId);
}
