"use strict";

/**
 * @file Progressive tab interface
 * @see https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-automatic
 * @see https://inclusive-components.design/tabbed-interfaces/
 */

var CONTAINER_SELECTOR = '.progressive-tabs';
var TABLIST_SELECTOR = '.progressive-tabs-tablist';
var TABPANEL_SELECTOR = '.progressive-tabs-tabpanel';
var LIST_ITEM_SELECTOR = 'li';
var TAB_SELECTOR = 'a';

/**
 * @param {Element} element
 * @returns {element is HTMLElement}
 */
var isHTMLElement = function isHTMLElement(element) {
  return element instanceof HTMLElement;
};

/**
 * @param {HTMLElement} container
 * @returns
 */
var setupTabs = function setupTabs(container) {
  if (!(
  // @ts-ignore
  container.querySelector && container.querySelectorAll)) {
    return;
  }
  var isInitialized = container.getAttribute('data-is-initialized');
  if (isInitialized !== null && isInitialized === 'false') {
    var _tabs = container.querySelectorAll('.progressive-tabs__tab');
    var tabList = container.querySelector(TABLIST_SELECTOR);
    var i = 0;
    _tabs.forEach(function (tab) {
      var titleElement = tab.querySelector('.progressive-tabs__tab__title .sfContentBlock.sf-Long-text');
      var id = 'id';
      if (typeof crypto.randomUUID === 'function') {
        id += crypto.randomUUID().slice(0, 5);
      } else {
        id += '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, function (c) {
          return (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16);
        }).slice(0, 5);
      }
      if (titleElement !== null) {
        tabList.insertAdjacentHTML('beforeend', '<li role="presentation"><a href="#tabpanel-' + id + '" id="tab-' + id + '" role="tab" tabindex="' + i + '" aria-selected="' + (i === 0 ? "true" : "false") + '">' + titleElement.innerHTML + '</a></li>');
      }
      var contentElement = tab.querySelector('.progressive-tabs__tab__content');
      if (contentElement !== null) {
        container.insertAdjacentHTML('beforeend', '<section class="progressive-tabs-tabpanel" id="' + id + '" tabindex="0">' + contentElement.cloneNode(true).innerHTML + '</section>');
      }
      i++;
    });
    container.querySelectorAll('.progressive-tabs__tabs').forEach(function (tab) {
      container.removeChild(tab);
    });
  }
  var tablist = container.querySelector(TABLIST_SELECTOR);
  var tabpanels = Array.from(container.querySelectorAll(TABPANEL_SELECTOR)).filter(isHTMLElement);
  if (!(tablist instanceof HTMLElement && tabpanels.length)) {
    return;
  }
  var listItems = Array.from(tablist.querySelectorAll(LIST_ITEM_SELECTOR)).filter(isHTMLElement);
  var tabs = Array.from(tablist.querySelectorAll(TAB_SELECTOR)).filter(isHTMLElement);
  if (tabs.length === 0) {
    return;
  }

  /** @type {number} */
  var selectedTabIndex = 0;

  /**
   * @template T
   * @param {T[]} array
   * @param {number} index
   * @returns T
   */
  var getItem = function getItem(array, index) {
    var item = array[index];
    if (!item) {
      throw new Error('Item not found');
    }
    return item;
  };

  /**
   *
   * @param {number} newIndex
   */
  var switchTab = function switchTab(newIndex) {
    if (newIndex === selectedTabIndex) {
      return;
    }
    var oldTab = getItem(tabs, selectedTabIndex);
    var newTab = getItem(tabs, newIndex);
    oldTab.removeAttribute('aria-selected');
    oldTab.tabIndex = -1;
    newTab.removeAttribute('tabindex');
    newTab.setAttribute('aria-selected', 'true');
    newTab.focus();
    getItem(tabpanels, selectedTabIndex).hidden = true;
    getItem(tabpanels, newIndex).hidden = false;
    selectedTabIndex = newIndex;
  };

  /**
   * @param {MouseEvent} event
   */
  var handleTabClick = function handleTabClick(event) {
    event.preventDefault();
    if (!(event.currentTarget instanceof HTMLAnchorElement)) {
      return;
    }
    var newIndex = tabs.indexOf(event.currentTarget);
    switchTab(newIndex);
  };

  /**
   * @param {KeyboardEvent} event
   */
  var handleTabKeydown = function handleTabKeydown(event) {
    if (!(event.currentTarget instanceof HTMLAnchorElement)) {
      return;
    }
    var lastIndex = tabs.length - 1;
    var key = event.key;
    var newIndex = selectedTabIndex;
    if (key === 'ArrowLeft') {
      newIndex = selectedTabIndex === 0 ? lastIndex : selectedTabIndex - 1;
    } else if (key === 'ArrowRight') {
      newIndex = selectedTabIndex === lastIndex ? 0 : selectedTabIndex + 1;
    } else if (key === 'Home') {
      newIndex = 0;
    } else if (key === 'End') {
      newIndex = lastIndex;
    }
    if (newIndex !== selectedTabIndex) {
      event.preventDefault();
      switchTab(newIndex);
    }
  };
  tablist.setAttribute('role', 'tablist');
  listItems.forEach(function (listItem) {
    listItem.setAttribute('role', 'presentation');
  });
  tabs.forEach(function (tab, index) {
    tab.setAttribute('role', 'tab');
    if (index === 0) {
      tab.setAttribute('aria-selected', 'true');
    } else {
      tab.setAttribute('tabindex', '-1');
    }
    tab.addEventListener('click', handleTabClick);
    tab.addEventListener('keydown', handleTabKeydown);
  });
  tabpanels.forEach(function (tabpanel, index) {
    tabpanel.setAttribute('role', 'tabpanel');
    // eslint-disable-next-line no-param-reassign
    tabpanel.tabIndex = 0;
    // eslint-disable-next-line no-param-reassign
    tabpanel.hidden = index !== 0;
    var correspondingTab = getItem(tabs, index);
    if (correspondingTab.id) {
      tabpanel.setAttribute('aria-labelledby', correspondingTab.id);
    }
  });
};
var setup = function setup() {
  if (!(
  // @ts-ignore
  document.querySelector && document.querySelectorAll && Array.from && document.querySelector('.sfPageEditorWrp') === null)) {
    return;
  }
  Array.from(document.querySelectorAll(CONTAINER_SELECTOR)).filter(isHTMLElement).forEach(setupTabs);
};
setup();
//# sourceMappingURL=progressive-tabs.js.map
