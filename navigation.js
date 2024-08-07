class Navigation {
  attachNavigationExpandedUrlParamElements = [];

  showNavigationValue = 'o';
  hideNavigationValue = 'c';
  navigationExpanded = this.showNavigationValue;
  navigationExpandedParam = 'n';

  init() {
    this.addHandlerToNavigationSwitch();
    this.addHandlerToHamburgerButton();
    this.addHandlerToLanguageToggle();
    this.addHandlerToItemGroup();
    this.addHandlerForLanguageSelection();

    window.addEventListener('resize', () => {
      const navigation = document.querySelector(".navigation");
      const collapsible = document.querySelector(".navigation__ul--collapsible");
      const body = document.querySelector("body");
      navigation.classList.remove("navigation--expanded");
      collapsible.classList.remove("navigation--expanded");
      body.classList.remove("navigation--expanded");
    });

    const self = this;
    document.addEventListener('keyup', function (e) {
      if (e.key === 'Escape') {
        self.toggleLanguageSelectorVisibility(true);
      }
    });
  }

  addHandlerToNavigationSwitch() {
    const navigation = document.querySelector(".navigation");
    if (navigation === null) {
      return;
    }

    const navigationSwitch = navigation.querySelector(".navigation__switch");
    if (navigationSwitch === null) {
      return;
    }

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams !== null) {
      const entries = urlParams.entries();
      for (const entry of entries) {
        const entryValue = entry[1];
        if (entry[0] === this.navigationExpandedParam && entryValue === this.hideNavigationValue) {
          navigation.classList.add('navigation--compressed');
          this.navigationExpanded = this.hideNavigationValue;
        }
      }
    }

    navigationSwitch.addEventListener('click', () => {
      const changeUrl = navigationSwitch.getAttribute('data-change-url');
      if (changeUrl !== null && changeUrl === 'true') {
        const url = new URL(window.location.href);
        this.navigationExpanded = navigation.classList.contains('navigation--compressed') ? this.showNavigationValue : this.hideNavigationValue;

        url.searchParams.set(this.navigationExpandedParam, this.navigationExpanded);
        window.history.replaceState(null, null, url);

        this.attachNavigationExpandedUrlParamElements.forEach(element => {
          element.forEach(e => {
            this.setElementUrlNavigationExpandedParam(e);
          });
        });
      }
      navigation.classList.toggle('navigation--compressed');
    });
  }

  addHandlerToHamburgerButton() {
    const hamburgerButtons = document.querySelectorAll(".navigation__toggle");

    hamburgerButtons.forEach((button) => {
      button.addEventListener("click", this.toggleMainMenu);
    });
  }

  addHandlerToItemGroup() {
    const navigationItemsExpandedToggle = document.querySelectorAll(".navigation__ul--collapsible :first-child");

    function handleNavigationItemExpandedToggleClick() {
      const navigationItemGroup = this.parentElement;
      navigationItemGroup.classList.toggle("navigation--expanded");
    }

    navigationItemsExpandedToggle.forEach(item => {
      item.addEventListener("click", handleNavigationItemExpandedToggleClick);
    });
  }

  addHandlerForLanguageSelection() {
    const languages = document.querySelectorAll(".navigation__language:not(.navigation__ul--collapsible) li, .navigation__ul--collapsible li:not(:first-child)");

    languages.forEach(language => {
      language.addEventListener("click", this.selectLanguage);
    });
  }

  addHandlerToLanguageToggle() {
    const self = this;
    const languageToggle = document.querySelector(".navigation__language-toggle");
    languageToggle.addEventListener("click", this.toggleLanguageSelectorVisibility);
    const overlay = document.querySelector(".click-handler-overlay");
    overlay.addEventListener("click", () => {
      self.toggleLanguageSelectorVisibility(true);
    });
  }

  toggleMainMenu(e) {
    const navigation = e.target.parentElement.closest(".navigation");
    const body = document.querySelector("body");
    navigation.classList.toggle("navigation--expanded");
    body.classList.toggle("navigation--expanded");
  };

  selectLanguage(e) {
    const selectedLanguage = e.target.textContent;
    const languageElements = Array.from(document.querySelectorAll(".navigation__language"));

    languageElements.forEach(element => {
      Array.from(element.children).forEach(grandchild => {
        grandchild.setAttribute("aria-selected", grandchild.textContent === selectedLanguage);
      });
    });
  }

  initUrlNavigationExpandedParam() {
    this.attachNavigationExpandedUrlParamElements.forEach(element => {
      element.forEach(e => {
        this.setElementUrlNavigationExpandedParam(e);
      });
    });
  }

  setElementUrlNavigationExpandedParam(element) {
    if (element?.hasAttribute('data-initial-href') && element?.hasAttribute('href')) {
      const elementUrl = new URLSearchParams(window.location.search);
      elementUrl.set(this.navigationExpandedParam, this.navigationExpanded);
      const initialHref = element.getAttribute('data-initial-href');
      let separator = '?';
      if (initialHref.includes('?')) {
        separator = '&';
      }
      element.setAttribute('href', `${initialHref + separator + elementUrl.toString()}`);
    }
  }

  toggleLanguageSelectorVisibility(forceHide = false) {
    const language = document.querySelector('.navigation__language');
    if (forceHide === true) {
      language.classList.remove('navigation--expanded');
    } else {
      language.classList.toggle('navigation--expanded');
    }
    const overlay = document.querySelector('.click-handler-overlay');
    if (forceHide === true) {
      overlay.style.display = 'none';
      return;
    }
    overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
  }
}