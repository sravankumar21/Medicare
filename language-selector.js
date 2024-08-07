"use strict";

(function () {
  var $languageSelector = document.querySelector('.navigation__language');
  if ($languageSelector === null) {
    return;
  }
  var $languageSelectorItems = $languageSelector.querySelectorAll('[data-language]');
  if ($languageSelectorItems.length === 0) {
    return;
  }
  $languageSelectorItems.forEach(function (item) {
    item.href = document.querySelector('[data-sf-role="' + item.attributes['data-language'].value + '"]').value;
  });
})();
//# sourceMappingURL=language-selector.js.map
