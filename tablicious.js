window.onload = function init() {
    var tabContainer = document.getElementById('tabContainer');
    var tabContent = document.getElementById('tabsContent');
    var currentTab = document.getElementById('tabHeader_1');

    var tabId = currentTab.id.split('_')[1];
    currentTab.parentNode.setAttribute('data-active-tab', tabId);
    currentTab.setAttribute('class', 'tabActiveHeader');

    var pages = tabContent.getElementsByTagName('div');

    for (var i = 1; i < pages.length; i++) {
      pages.item(i).style.display = 'none';
    };

    var tabs = tabContainer.getElementsByTagName('li');
        for (var i = 0; i < tabs.length; i++) {
          tabs[i].onclick = displayPage;
        }
    }

function hideActiveTab(tabId) {
    document.getElementById('tabHeader_' + tabId).removeAttribute('class');
    document.getElementById('tabpage_' + tabId).style.display = 'none';
}

function setActiveTab(tabId) {
    var tab = getTabElementById(tabId);
    tab.setAttribute('class', 'tabActiveHeader');

    document.getElementById('tabpage_' + tabId).style.display = 'block';
    tab.parentNode.setAttribute('data-active-tab', tabId);
}

function displayPage() {
    var activeTabId = this.parentNode.getAttribute('data-active-tab');
    hideActiveTab(activeTabId);

    var tabId = this.id.split('_')[1];
    setActiveTab(tabId);
}

function getTabElementById(tabId){
    return document.getElementById('tabHeader_' + tabId);
}
