/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 753:
/***/ (function() {

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.header__nav-item-heading');
  items.forEach(item => {
    item.addEventListener('click', event => {
      item.classList.toggle('--active');
    });
  });
});

/***/ }),

/***/ 283:
/***/ (function() {

"use strict";


function DynamicAdapt(type) {
  this.type = type;
}
DynamicAdapt.prototype.init = function () {
  const _this = this;
  this.оbjects = [];
  this.daClassname = '_dynamic_adapt_';
  this.nodes = document.querySelectorAll('[data-da]');
  for (let i = 0; i < this.nodes.length; i++) {
    const node = this.nodes[i];
    const data = node.dataset.da.trim();
    const dataArray = data.split(',');
    const оbject = {};
    оbject.element = node;
    оbject.parent = node.parentNode;
    оbject.destination = document.querySelector(dataArray[0].trim());
    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : '767';
    оbject.place = dataArray[2] ? dataArray[2].trim() : 'last';
    оbject.index = this.indexInParent(оbject.parent, оbject.element);
    this.оbjects.push(оbject);
  }
  this.arraySort(this.оbjects);
  this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
    return '(' + this.type + '-width: ' + item.breakpoint + 'px),' + item.breakpoint;
  }, this);
  this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
    return Array.prototype.indexOf.call(self, item) === index;
  });
  for (let i = 0; i < this.mediaQueries.length; i++) {
    const media = this.mediaQueries[i];
    const mediaSplit = String.prototype.split.call(media, ',');
    const matchMedia = window.matchMedia(mediaSplit[0]);
    const mediaBreakpoint = mediaSplit[1];
    const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
      return item.breakpoint === mediaBreakpoint;
    });
    matchMedia.addListener(function () {
      _this.mediaHandler(matchMedia, оbjectsFilter);
    });
    this.mediaHandler(matchMedia, оbjectsFilter);
  }
};
DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
  if (matchMedia.matches) {
    for (let i = 0; i < оbjects.length; i++) {
      const оbject = оbjects[i];
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.moveTo(оbject.place, оbject.element, оbject.destination);
    }
  } else {
    //for (let i = 0; i < оbjects.length; i++) {
    for (let i = оbjects.length - 1; i >= 0; i--) {
      const оbject = оbjects[i];
      if (оbject.element.classList.contains(this.daClassname)) {
        this.moveBack(оbject.parent, оbject.element, оbject.index);
      }
    }
  }
};
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
  element.classList.add(this.daClassname);
  if (place === 'last' || place >= destination.children.length) {
    destination.insertAdjacentElement('beforeend', element);
    return;
  }
  if (place === 'first') {
    destination.insertAdjacentElement('afterbegin', element);
    return;
  }
  destination.children[place].insertAdjacentElement('beforebegin', element);
};
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
  element.classList.remove(this.daClassname);
  if (parent.children[index] !== undefined) {
    parent.children[index].insertAdjacentElement('beforebegin', element);
  } else {
    parent.insertAdjacentElement('beforeend', element);
  }
};
DynamicAdapt.prototype.indexInParent = function (parent, element) {
  const array = Array.prototype.slice.call(parent.children);
  return Array.prototype.indexOf.call(array, element);
};
DynamicAdapt.prototype.arraySort = function (arr) {
  if (this.type === 'min') {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }
        if (a.place === 'first' || b.place === 'last') {
          return -1;
        }
        if (a.place === 'last' || b.place === 'first') {
          return 1;
        }
        return a.place - b.place;
      }
      return a.breakpoint - b.breakpoint;
    });
  } else {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }
        if (a.place === 'first' || b.place === 'last') {
          return 1;
        }
        if (a.place === 'last' || b.place === 'first') {
          return -1;
        }
        return b.place - a.place;
      }
      return b.breakpoint - a.breakpoint;
    });
    return;
  }
};
const da = new DynamicAdapt('max');
da.init();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

;// CONCATENATED MODULE: ./src/js/utils/utils.js
/**
 * set hash to url
 * @param {string} hash
 */
const setHash = hash => {
  hash = hash ? `#${hash}` : window.location.href.split('#')[0];
  history.pushState('', '', hash);
};

/**
 * get hash from url
 * @returns string
 */
const getHash = () => {
  if (location.hash) {
    return location.hash.replace('#', '');
  }
};

// body lock
let bodyLockStatus = true;
/**
 * toggles body lock
 * @param {number} delay
 */
const bodyLockToggle = function () {
  let delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  if (document.documentElement.classList.contains('lock')) {
    bodyUnlock(delay);
  } else {
    bodyLock(delay);
  }
};
/**
 * unlocks body
 * @param {number} delay
 */
const bodyUnlock = function () {
  let delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  if (bodyLockStatus) {
    setTimeout(() => {
      document.documentElement.classList.remove('lock');
    }, delay);
    bodyLockStatus = false;
    setTimeout(function () {
      bodyLockStatus = true;
    }, delay);
  }
};
/**
 * locks body
 * @param {number} delay
 */
const bodyLock = function () {
  let delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  if (bodyLockStatus) {
    document.documentElement.classList.add('lock');
    bodyLockStatus = false;
    setTimeout(function () {
      bodyLockStatus = true;
    }, delay);
  }
};

/**
 *
 * @param {array} array
 * @param {number} dataSetValue
 * process media requests from attributes
 */
const dataMediaQueries = (array, dataSetValue) => {
  // get objects with media queries
  const media = Array.from(array).filter(function (item, index, self) {
    if (item.dataset[dataSetValue]) {
      return item.dataset[dataSetValue].split(',')[0];
    }
  });
  // objects with media queries initialization
  if (media.length) {
    const breakpointsArray = [];
    media.forEach(item => {
      const params = item.dataset[dataSetValue];
      const breakpoint = {};
      const paramsArray = params.split(',');
      breakpoint.value = paramsArray[0];
      breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : 'max';
      breakpoint.item = item;
      breakpointsArray.push(breakpoint);
    });
    // get unique breakpoints
    let mdQueries = breakpointsArray.map(function (item) {
      return '(' + item.type + '-width: ' + item.value + 'px),' + item.value + ',' + item.type;
    });
    mdQueries = uniqueArray(mdQueries);
    const mdQueriesArray = [];
    if (mdQueries.length) {
      // work with every breakpoint
      mdQueries.forEach(breakpoint => {
        const paramsArray = breakpoint.split(',');
        const mediaBreakpoint = paramsArray[1];
        const mediaType = paramsArray[2];
        const matchMedia = window.matchMedia(paramsArray[0]);
        // objects with conditions
        const itemsArray = breakpointsArray.filter(function (item) {
          if (item.value === mediaBreakpoint && item.type === mediaType) {
            return true;
          }
        });
        mdQueriesArray.push({
          itemsArray,
          matchMedia
        });
      });
      return mdQueriesArray;
    }
  }
};

/**
 * smoothly slides up
 * @param {HTMLElement} target
 * @param {number} duration
 * @param {boolean} showmore
 */
const _slideUp = function (target) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  let showmore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = `${target.offsetHeight}px`;
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = showmore ? `${showmore}rem` : `0`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.hidden = !showmore ? true : false;
      !showmore ? target.style.removeProperty('height') : null;
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      !showmore ? target.style.removeProperty('overflow') : null;
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
      // create event
      document.dispatchEvent(new CustomEvent('slideUpDone', {
        detail: {
          target: target
        }
      }));
    }, duration);
  }
};

/**
 * smoothly slides down
 * @param {HTMLElement} target
 * @param {number} duration
 * @param {boolean} showmore
 */
const _slideDown = function (target) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  let showmore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    target.hidden = target.hidden ? false : null;
    showmore ? target.style.removeProperty('height') : null;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = showmore ? `${showmore}rem` : `0`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
      // create event
      document.dispatchEvent(new CustomEvent('slideDownDone', {
        detail: {
          target: target
        }
      }));
    }, duration);
  }
};

/**
 * toggles smooth slide
 * @param {HTMLElement} target
 * @param {number} duration
 * @returns function
 */
const _slideToggle = function (target) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
};

/**
 * converts rem to pixels
 * @param {number} remValue
 * @returns string
 */
function remToPx(remValue) {
  // Получаем текущий базовый размер шрифта (font-size) из элемента <html>
  var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

  // Переводим значение из rem в px
  var pxValue = remValue * htmlFontSize;

  // Округляем значение до целых пикселей (по желанию)
  return Math.round(pxValue) + 'px';
}

// remove class from all array elements
const removeClasses = (array, className) => {
  for (var i = 0; i < array.length; i++) {
    array[i].classList.remove(className);
  }
};
;// CONCATENATED MODULE: ./src/js/utils/hamburger.js

const menuInit = () => {
  if (document.querySelector('.hamburger')) {
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', function (e) {
      if (bodyLockStatus) {
        document.documentElement.classList.toggle('_menu-opened');
        bodyLockToggle();
      }
    });
  }
};
menuInit();
;// CONCATENATED MODULE: ./src/js/utils/select.js


// --------------------------------------------------------------------------

class Select {
  // setup ------------------------------------------------------------------

  constructor() {
    this._this = this;

    // custom select classes
    this.classes = {
      // html build classes
      sel: 'select',
      body: 'select__body',
      label: 'select__label',
      title: 'select__title',
      val: 'select__value',
      content: 'select__content',
      options: 'select__options',
      option: 'select__option',
      scroll: 'select__scroll',
      group: 'select__group',
      inp: 'select__input',
      asset: 'select__asset',
      txt: 'select__text',
      hint: 'select__hint',
      // state classes
      active: '_select-active',
      focused: '_select-focused',
      opened: '_select-opened',
      filled: '_select-filled',
      selected: '_select-selected',
      disabled: '_select-disabled',
      // additional classes
      list: '_select-list',
      error: '_select-error',
      multiple: '_select-multiple',
      checkbox: '_select-checkbox',
      label: '_select-label'
    };

    // all select items
    const selectList = document.querySelectorAll('select');
    if (selectList.length) {
      this.init(selectList);
    }
  }

  // select initialization & build ------------------------------------------

  // initialization
  init(selectList) {
    // init
    selectList.forEach((select, index) => {
      if (!select.classList.contains('star-rating')) {
        this.initSelItem(select, index + 1);
      }
    });

    // events
    document.addEventListener('click', function (e) {
      this.setActions(e);
    }.bind(this));
    document.addEventListener('keydown', function (e) {
      this.setActions(e);
    }.bind(this));
    document.addEventListener('focusin', function (e) {
      this.setActions(e);
    }.bind(this));
    document.addEventListener('focusout', function (e) {
      this.setActions(e);
    }.bind(this));
  }
  // single select item initialization
  initSelItem(relativeSel, index) {
    const _this = this;
    const select = document.createElement('div');
    select.classList.add(this.classes.sel);
    relativeSel.parentNode.insertBefore(select, relativeSel);
    select.appendChild(relativeSel);
    relativeSel.hidden = true;
    index ? relativeSel.dataset.selId = index : null;
    if (this.getPlaceholder(relativeSel)) {
      relativeSel.dataset.optPlaceholder = this.getPlaceholder(relativeSel).value;
      if (this.getPlaceholder(relativeSel).label.show) {
        const selTitle = this.getSelect(select, this.classes.title).twinSel;
        selTitle.insertAdjacentHTML('afterbegin', `<span class="${this.classes.label}">${this.getPlaceholder(relativeSel).label.text ? this.getPlaceholder(relativeSel).label.text : this.getPlaceholder(relativeSel).value}</span>`);
      }
    }
    if (relativeSel.dataset.speed !== '0') {
      select.insertAdjacentHTML('beforeend', `<div class="${this.classes.body}"><div hidden class="${this.classes.options}"></div></div>`);
    } else {
      select.insertAdjacentHTML('beforeend', `<div class="${this.classes.body}"><div class="${this.classes.options}"></div></div>`);
    }
    this.build(relativeSel);
    relativeSel.dataset.speed = relativeSel.dataset.speed ? relativeSel.dataset.speed : '150';
    relativeSel.addEventListener('change', function (e) {
      _this.initSelections(e);
    });
  }
  // select build
  build(relativeSel) {
    const select = relativeSel.parentElement;
    const selObj = this;

    // set id
    select.dataset.selId = relativeSel.dataset.selId;
    // set value
    this.setValue(select, relativeSel);
    // set options
    this.setOptions(select, relativeSel);
    // set css modificator
    relativeSel.dataset.selAddonClass ? select.classList.add(`select_${relativeSel.dataset.selAddonClass}`) : null;
    // set class if select is multiple
    relativeSel.multiple ? select.classList.add(this.classes.multiple) : select.classList.remove(this.classes.multiple);
    // set class if select checkboxes are set
    relativeSel.hasAttribute('data-sel-checkboxes') && relativeSel.multiple ? select.classList.add(this.classes.checkbox) : select.classList.remove(this.classes.checkbox);
    // disable select
    this.disableSelect(select, relativeSel);
    // set search actions if data-sel-search is set
    relativeSel.hasAttribute('data-sel-search') ? this.setSearchActions(select) : null;
    // set select actions if it's initially opened
    relativeSel.hasAttribute('data-sel-opened') ? this.setAction(select) : null;

    // set select hint
    if (relativeSel.dataset.selHint) {
      relativeSel.parentElement.insertAdjacentHTML('beforeend', `<div class="select__hint">${relativeSel.dataset.selHint}</div>`);
    }

    // validate select
    if (relativeSel.closest('form')) {
      relativeSel.closest('form').addEventListener('submit', function () {
        if (!select.classList.contains(selObj.classes.filled)) {
          selObj.addErr(relativeSel, select);
        } else {
          selObj.removeErr(relativeSel, select);
        }
      });
    }

    // show / hide selection from select title
    if (relativeSel.hasAttribute('data-show-val')) {
      select.classList.add('_select-show-val');
    } else {
      select.classList.remove('_select-show-val');
    }
  }
  // set twin select title value
  setValue(select, relativeSel) {
    const selBody = this.getSelect(select, this.classes.body).twinSel;
    const selTitle = this.getSelect(select, this.classes.title).twinSel;
    if (selTitle) selTitle.remove();
    selBody.insertAdjacentHTML('afterbegin', this.getValue(select, relativeSel));
  }
  // set twin select options
  setOptions(select, relativeSel) {
    const options = this.getSelect(select, this.classes.options).twinSel;
    const relativeSelOptions = this.getSelect(select, this.classes.options).relativeSel;
    options.innerHTML = this.getOptions(relativeSel);
    if (relativeSelOptions.querySelector('[selected]')) {
      options.querySelector(`.${this.classes.option}`).classList.add(this.classes.selected);
    }
  }
  // disable select
  disableSelect(select, relativeSel) {
    if (relativeSel.disabled) {
      select.classList.add(this.classes.disabled);
      this.getSelect(select, this.classes.title).twinSel.disabled = true;
    } else {
      select.classList.remove(this.classes.disabled);
      this.getSelect(select, this.classes.title).twinSel.disabled = false;
    }
  }

  // main actions -----------------------------------------------------------

  // set main actions
  setActions(e) {
    const target = e.target;
    const type = e.type;
    if (target.closest(this.getClass(this.classes.sel)) || target.closest(this.getClass(this.classes.list))) {
      const select = target.closest('.select') ? target.closest('.select') : document.querySelector(`.${this.classes.sel}[data-sel-id="${target.closest(this.getClass(this.classes.list)).dataset.selectId}"]`);
      const relativeSel = this.getSelect(select).relativeSel;
      if (type === 'click') {
        if (!relativeSel.disabled) {
          if (target.closest(this.getClass(this.classes.list))) {
            const selList = target.closest(this.getClass(this.classes.list));
            const selOption = document.querySelector(`.${this.classes.sel}[data-sel-id="${selList.dataset.selId}"] .select__option[data-opt-val="${selList.dataset.optVal}"]`);
            this.setOptionAction(select, relativeSel, selOption);
          } else if (target.closest(this.getClass(this.classes.title))) {
            this.setAction(select);
          } else if (target.closest(this.getClass(this.classes.option))) {
            const selOption = target.closest(this.getClass(this.classes.option));
            this.setOptionAction(select, relativeSel, selOption);
          }
        }
      } else if (type === 'focusin' || type === 'focusout') {
        if (target.closest(this.getClass(this.classes.sel))) {
          if (type === 'focusin') {
            select.classList.add(this.classes.focused);
          } else {
            select.classList.remove(this.classes.focused);
            if (relativeSel.hasAttribute('data-validate')) {
              if (!select.classList.contains(this.classes.filled)) {
                this.addErr(relativeSel, select);
              } else {
                this.removeErr(relativeSel, select);
              }
            }
          }
        }
      } else if (type === 'keydown' && e.code === 'Escape') {
        this.closeGroup();
      }
    } else {
      this.closeGroup();
    }
  }
  // set single select action
  setAction(select) {
    const relativeSel = this.getSelect(select).relativeSel;
    const selOptions = this.getSelect(select, this.classes.options).twinSel;
    if (relativeSel.closest('[data-one-select]')) {
      const selectOneGroup = relativeSel.closest('[data-one-select]');
      this.closeGroup(selectOneGroup);
    }
    if (!selOptions.classList.contains('_slide')) {
      select.classList.toggle(this.classes.opened);
      if (relativeSel.dataset.speed !== '0') {
        _slideToggle(selOptions, relativeSel.dataset.speed);
      }
      if (select.classList.contains(this.classes.opened) && relativeSel.hasAttribute('data-validate') && select.classList.contains(this.classes.error)) {
        this.removeErr(relativeSel, select);
      }
    }
  }
  // close single select group
  closeGroup(group) {
    const selGroup = group ? group : document;
    const selections = selGroup.querySelectorAll(`${this.getClass(this.classes.sel)}${this.getClass(this.classes.opened)}`);
    if (selections.length) {
      selections.forEach(selection => {
        this.closeItem(selection);
      });
    }
  }
  // close single select item
  closeItem(select) {
    const relativeSel = this.getSelect(select).relativeSel;
    const selOptions = this.getSelect(select, this.classes.options).twinSel;
    if (!selOptions.classList.contains('_slide')) {
      select.classList.remove(this.classes.opened);
      if (relativeSel.dataset.speed !== '0') {
        _slideUp(selOptions, relativeSel.dataset.speed);
      }
    }
  }
  // set single option actions
  setOptionAction(select, relativeSel, option) {
    if (relativeSel.multiple) {
      option.classList.toggle(this.classes.selected);
      const relativeSelections = this.getData(relativeSel).elements;
      relativeSelections.forEach(relativeSelection => {
        relativeSelection.removeAttribute('selected');
      });
      const twinSelections = select.querySelectorAll(this.getClass(this.classes.selected));
      twinSelections.forEach(twinSelection => {
        relativeSel.querySelector(`option[value="${twinSelection.dataset.optVal}"]`).setAttribute('selected', 'selected');
      });
      if (!option.classList.contains(this.classes.selected)) {
        console.log(relativeSel.querySelector(`option[value="${option.dataset.optVal}"]`));
        relativeSel.querySelector(`option[value="${option.dataset.optVal}"]`).removeAttribute('selected');
      }
    } else {
      select.querySelectorAll('.select__option').forEach(opt => opt.classList.remove(this.classes.selected));
      option.classList.add(this.classes.selected);
      if (!relativeSel.hasAttribute('data-show-selection')) {
        if (select.querySelector(`${this.getClass(this.classes.option)}[hidden]`)) {
          select.querySelector(`${this.getClass(this.classes.option)}[hidden]`).hidden = false;
        }
        option.hidden = true;
      }
      relativeSel.value = option.hasAttribute('data-opt-val') ? option.dataset.optVal : option.textContent;
      this.setAction(select);
    }
    this.setValue(select, relativeSel);
    this.setSelections(relativeSel);
  }
  // set search actions
  setSearchActions(select) {
    const _this = this;
    const selInput = this.getSelect(select, this.classes.inp).twinSel;
    const selOptions = this.getSelect(select, this.classes.options).twinSel.querySelectorAll(`.${this.classes.option}`);
    selInput.addEventListener('input', function () {
      selOptions.forEach(selOption => {
        if (selOption.textContent.toUpperCase().indexOf(selInput.value.toUpperCase()) >= 0) {
          selOption.hidden = false;
        } else {
          selOption.hidden = true;
        }
      });
      selOptions.hidden === true ? _this.setAction(select) : null;
    });
  }
  // set select subtitle
  setSubtitle(relativeSel) {}

  // validation -------------------------------------------------------------

  // add an error to a select
  addErr(relativeSel, select) {
    select.classList.add(this.classes.error);
    if (relativeSel.dataset.selError && !relativeSel.dataset.selHint) {
      relativeSel.parentElement.insertAdjacentHTML('beforeend', `<div class="select__hint">${relativeSel.dataset.selError}</div>`);
    }
  }
  // remove an error from a select
  removeErr(relativeSel, select) {
    if (select.classList.contains(this.classes.error)) {
      select.classList.remove(this.classes.error);
    }
    if (relativeSel.parentElement.querySelector('.select__hint') && !relativeSel.dataset.selHint) {
      relativeSel.parentElement.removeChild(relativeSel.parentElement.querySelector('.select__hint'));
    }
  }

  // utils ------------------------------------------------------------------

  // get custom class
  getClass(cssClass) {
    return `.${cssClass}`;
  }
  // get single select item
  getSelect(select, cssClass) {
    return {
      relativeSel: select.querySelector('select'),
      twinSel: select.querySelector(this.getClass(cssClass))
    };
  }
  // get selected item value
  getValue(select, relativeSel) {
    let attr,
      attrClass,
      titleVal = this.getData(relativeSel, 2).html;

    // set title value
    titleVal = titleVal.length ? titleVal : relativeSel.dataset.selLabel ? relativeSel.dataset.selLabel : '';

    // set active class to select if it contains any values
    if (this.getData(relativeSel).values.length) {
      select.classList.add(this.classes.active);
    } else {
      select.classList.remove(this.classes.active);
    }

    // set select label
    if (relativeSel.hasAttribute('data-sel-label')) {
      attr = relativeSel.dataset.selLabel ? ` data-sel-label="${relativeSel.dataset.selLabel}"` : ` data-sel-label="Выбор"`;
      attrClass = ` ${this.classes.label}`;
    }

    // push selections to the list inside of select title
    if (relativeSel.multiple && relativeSel.hasAttribute('data-sel-list')) {
      titleVal = this.getData(relativeSel).elements.map(option => `<span data-opt-id="${select.dataset.selId}" data-opt-val="${option.value}" class="_list-item">${this.getContent(option)}</span>`).join('');
      if (relativeSel.dataset.list && document.querySelector(relativeSel.dataset.list)) {
        document.querySelector(relativeSel.dataset.list).innerHTML = titleVal;
        if (relativeSel.hasAttribute('data-sel-search')) titleVal = false;
      }
    }

    // init select search
    if (relativeSel.hasAttribute('data-sel-search')) {
      return `<div class="${this.classes.title}"><span ${attr} class="${this.classes.val}"><input autocomplete="off" type="search" placeholder="${titleVal}" data-placeholder="${titleVal}" class="${this.classes.inp}"></span></div>`;
    } else {
      const customClass = this.getData(relativeSel).elements.length && this.getData(relativeSel).elements[0].dataset.optClass ? ` ${this.getData(relativeSel).elements[0].dataset.optClass}` : '';
      return `<button type="button" class="${this.classes.title}"><span ${attr ? attr : ''} class="${this.classes.val} ${attrClass ? attrClass : ''}"><span class="${this.classes.content}${customClass}">${titleVal}</span></span></button>`;
    }
  }
  // get options
  getOptions(relativeSel) {
    const selScroll = relativeSel.hasAttribute('data-sel-scroll') ? `data-simplebar` : '';
    let selScrollHeight = relativeSel.dataset.selScroll ? `style="max-height:${window.innerWidth > 768 ? relativeSel.dataset.selScroll : 22}rem"` : '';
    let selOptions = Array.from(relativeSel.options);
    if (selOptions.length) {
      let selOptionsHTML = ``;
      if (this.getPlaceholder(relativeSel) && !this.getPlaceholder(relativeSel).show || relativeSel.multiple) {
        selOptions = selOptions.filter(option => option.value);
      }
      selOptionsHTML += selScroll ? `<div ${selScroll} ${selScrollHeight} class="${this.classes.scroll}">` : '';
      selOptions.forEach(option => {
        selOptionsHTML += this.getOption(option, relativeSel);
      });
      selOptionsHTML += selScroll ? `</div>` : '';
      return selOptionsHTML;
    }
  }
  // get option
  getOption(option, relativeSel) {
    const selections = option.selected && relativeSel.multiple ? ` ${this.classes.selected}` : '';
    const showSelection = option.selected && !relativeSel.hasAttribute('data-show-selection') && !relativeSel.multiple ? `hidden` : ``;
    const optionClass = option.dataset.optClass ? ` ${option.dataset.optClass}` : '';
    const optionLink = option.dataset.optionLink ? option.dataset.optionLink : false;
    const optionLinkTarget = option.hasAttribute('data-option-link-target') ? `target="_blank"` : '';
    let optionHTML = ``;
    optionHTML += optionLink ? `<a ${optionLinkTarget} ${showSelection} href="${optionLink}" data-opt-val="${option.value}" class="${this.classes.option}${optionClass}${selections}">` : `<button ${showSelection} class="${this.classes.option}${optionClass}${selections}" data-opt-val="${option.value}" type="button">`;
    optionHTML += this.getContent(option);
    optionHTML += optionLink ? `</a>` : `</button>`;
    return optionHTML;
  }
  // get select content
  getContent(option) {
    const optionData = option.dataset.optAsset ? `${option.dataset.optAsset}` : '';
    const optionDataHTML = optionData.indexOf('img') >= 0 ? `<img src="${optionData}" alt="">` : optionData;
    let optionContentHTML = ``;
    optionContentHTML += optionData ? `<span class="${this.classes.group}">` : '';
    optionContentHTML += optionData ? `<span class="${this.classes.asset}">` : '';
    optionContentHTML += optionData ? optionDataHTML : '';
    optionContentHTML += optionData ? `</span>` : '';
    optionContentHTML += optionData ? `<span class="${this.classes.txt}">` : '';
    optionContentHTML += option.textContent;
    optionContentHTML += optionData ? `</span>` : '';
    optionContentHTML += optionData ? `</span>` : '';
    return optionContentHTML;
  }
  // get select placeholder
  getPlaceholder(relativeSel) {
    const placeholder = Array.from(relativeSel.options).find(option => !option.value);
    if (placeholder) {
      placeholder.classList.add(this.classes.subtitle);
      return {
        value: placeholder.textContent,
        show: placeholder.hasAttribute('data-sel-ph-show'),
        label: {
          show: placeholder.hasAttribute('data-sel-ph'),
          text: placeholder.dataset.optPlaceholder
        }
      };
    }
  }
  // get selected options data
  getData(relativeSel) {
    let selections = [];
    if (relativeSel.multiple) {
      selections = Array.from(relativeSel.options).filter(option => option.value).filter(option => option.selected);
    } else {
      selections.push(relativeSel.options[relativeSel.selectedIndex]);
    }
    return {
      elements: selections.map(option => option),
      values: selections.filter(option => option.value).map(option => option.value),
      html: selections.map(option => this.getContent(option))
    };
  }

  // selections -------------------------------------------------------------

  // init selections
  initSelections(e) {
    const relativeSel = e.target;
    this.build(relativeSel);
    this.setSelections(relativeSel);
  }
  // set selections
  setSelections(relativeSel) {
    const select = relativeSel.parentElement;
    if (relativeSel.hasAttribute('data-submit') && relativeSel.value) {
      let tempButton = document.createElement('button');
      tempButton.type = 'submit';
      relativeSel.closest('form').append(tempButton);
      tempButton.click();
      tempButton.remove();
    }
    relativeSel.parentElement.classList.add(this.classes.filled);
    this.selection(select, relativeSel);
  }
  // custom select event (listen to any selections / mutations)
  selection(select, relativeSel) {
    document.dispatchEvent(new CustomEvent('selection', {
      detail: {
        select: relativeSel
      }
    }));
  }
}
new Select({});
// EXTERNAL MODULE: ./src/js/libs/dd.js
var dd = __webpack_require__(283);
// EXTERNAL MODULE: ./src/js/dev/ukik0.js
var ukik0 = __webpack_require__(753);
;// CONCATENATED MODULE: ./src/js/app.js


// ---------------------------------- forms ---------------------------------

// import * as forms from './utils/forms.js';

// form fields
// forms.formFieldsInit({ viewPass: false });

// form submit
// forms.formSubmit();

// ---------------------------------- utils ---------------------------------

//hamburger


// tabs
// import './utils/tabs.js';

// accordion
// import './utils/accordion.js';

// select


// modals
// import './utils/modals.js';

// ---------------------------------- libs ----------------------------------

// dynamic dom


// --------------------------------------------------------------------------





}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzlELElBQUl3SyxVQUFVLEdBQUduUSxRQUFRLENBQUNxSyxhQUFhLENBQUMsUUFBUSxDQUFDO01BQ2pEOEYsVUFBVSxDQUFDelAsSUFBSSxHQUFHLFFBQVE7TUFDMUIwSixXQUFXLENBQUMwQixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUNzRSxNQUFNLENBQUNELFVBQVUsQ0FBQztNQUM5Q0EsVUFBVSxDQUFDRSxLQUFLLENBQUMsQ0FBQztNQUNsQkYsVUFBVSxDQUFDdE0sTUFBTSxDQUFDLENBQUM7SUFDdkI7SUFDQXVHLFdBQVcsQ0FBQ2dCLGFBQWEsQ0FBQzdLLFNBQVMsQ0FBQ21ELEdBQUcsQ0FBQyxJQUFJLENBQUM0RSxPQUFPLENBQUNrQixNQUFNLENBQUM7SUFDNUQsSUFBSSxDQUFDMEQsU0FBUyxDQUFDbEQsTUFBTSxFQUFFSSxXQUFXLENBQUM7RUFDdkM7RUFDQTtFQUNBOEMsU0FBU0EsQ0FBQ2xELE1BQU0sRUFBRUksV0FBVyxFQUFFO0lBQzNCcEssUUFBUSxDQUFDaUgsYUFBYSxDQUNsQixJQUFJQyxXQUFXLENBQUMsV0FBVyxFQUFFO01BQ3pCQyxNQUFNLEVBQUU7UUFDSjZDLE1BQU0sRUFBRUk7TUFDWjtJQUNKLENBQUMsQ0FDTCxDQUFDO0VBQ0w7QUFDSjtBQUNBLElBQUloQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7OztBQ3JtQmM7O0FBRTVCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUM4Qjs7QUFFOUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQzJCOztBQUUzQjtBQUNBOztBQUVBOztBQUVBO0FBQ3NCOztBQUV0Qjs7QUFFeUI7QUFDRTtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2Rldi91a2lrMC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvbGlicy9kZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy9oYW1idXJnZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL3V0aWxzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX25hdi1pdGVtLWhlYWRpbmcnKTtcclxuXHJcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJy0tYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuZnVuY3Rpb24gRHluYW1pY0FkYXB0KHR5cGUpIHtcclxuICB0aGlzLnR5cGUgPSB0eXBlO1xyXG59XHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgdGhpcy7QvmJqZWN0cyA9IFtdO1xyXG4gIHRoaXMuZGFDbGFzc25hbWUgPSAnX2R5bmFtaWNfYWRhcHRfJztcclxuICB0aGlzLm5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZGFdJyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBub2RlID0gdGhpcy5ub2Rlc1tpXTtcclxuICAgIGNvbnN0IGRhdGEgPSBub2RlLmRhdGFzZXQuZGEudHJpbSgpO1xyXG4gICAgY29uc3QgZGF0YUFycmF5ID0gZGF0YS5zcGxpdCgnLCcpO1xyXG4gICAgY29uc3Qg0L5iamVjdCA9IHt9O1xyXG4gICAg0L5iamVjdC5lbGVtZW50ID0gbm9kZTtcclxuICAgINC+YmplY3QucGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAg0L5iamVjdC5kZXN0aW5hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZGF0YUFycmF5WzBdLnRyaW0oKSk7XHJcbiAgICDQvmJqZWN0LmJyZWFrcG9pbnQgPSBkYXRhQXJyYXlbMV0gPyBkYXRhQXJyYXlbMV0udHJpbSgpIDogJzc2Nyc7XHJcbiAgICDQvmJqZWN0LnBsYWNlID0gZGF0YUFycmF5WzJdID8gZGF0YUFycmF5WzJdLnRyaW0oKSA6ICdsYXN0JztcclxuICAgINC+YmplY3QuaW5kZXggPSB0aGlzLmluZGV4SW5QYXJlbnQo0L5iamVjdC5wYXJlbnQsINC+YmplY3QuZWxlbWVudCk7XHJcbiAgICB0aGlzLtC+YmplY3RzLnB1c2go0L5iamVjdCk7XHJcbiAgfVxyXG4gIHRoaXMuYXJyYXlTb3J0KHRoaXMu0L5iamVjdHMpO1xyXG4gIHRoaXMubWVkaWFRdWVyaWVzID0gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKFxyXG4gICAgdGhpcy7QvmJqZWN0cyxcclxuICAgIGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgJygnICtcclxuICAgICAgICB0aGlzLnR5cGUgK1xyXG4gICAgICAgICctd2lkdGg6ICcgK1xyXG4gICAgICAgIGl0ZW0uYnJlYWtwb2ludCArXHJcbiAgICAgICAgJ3B4KSwnICtcclxuICAgICAgICBpdGVtLmJyZWFrcG9pbnRcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICB0aGlzXHJcbiAgKTtcclxuICB0aGlzLm1lZGlhUXVlcmllcyA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChcclxuICAgIHRoaXMubWVkaWFRdWVyaWVzLFxyXG4gICAgZnVuY3Rpb24gKGl0ZW0sIGluZGV4LCBzZWxmKSB7XHJcbiAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHNlbGYsIGl0ZW0pID09PSBpbmRleDtcclxuICAgIH1cclxuICApO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tZWRpYVF1ZXJpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IG1lZGlhID0gdGhpcy5tZWRpYVF1ZXJpZXNbaV07XHJcbiAgICBjb25zdCBtZWRpYVNwbGl0ID0gU3RyaW5nLnByb3RvdHlwZS5zcGxpdC5jYWxsKG1lZGlhLCAnLCcpO1xyXG4gICAgY29uc3QgbWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKG1lZGlhU3BsaXRbMF0pO1xyXG4gICAgY29uc3QgbWVkaWFCcmVha3BvaW50ID0gbWVkaWFTcGxpdFsxXTtcclxuICAgIGNvbnN0INC+YmplY3RzRmlsdGVyID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKFxyXG4gICAgICB0aGlzLtC+YmplY3RzLFxyXG4gICAgICBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmJyZWFrcG9pbnQgPT09IG1lZGlhQnJlYWtwb2ludDtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIG1hdGNoTWVkaWEuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICBfdGhpcy5tZWRpYUhhbmRsZXIobWF0Y2hNZWRpYSwg0L5iamVjdHNGaWx0ZXIpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1lZGlhSGFuZGxlcihtYXRjaE1lZGlhLCDQvmJqZWN0c0ZpbHRlcik7XHJcbiAgfVxyXG59O1xyXG5EeW5hbWljQWRhcHQucHJvdG90eXBlLm1lZGlhSGFuZGxlciA9IGZ1bmN0aW9uIChtYXRjaE1lZGlhLCDQvmJqZWN0cykge1xyXG4gIGlmIChtYXRjaE1lZGlhLm1hdGNoZXMpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwg0L5iamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qg0L5iamVjdCA9INC+YmplY3RzW2ldO1xyXG4gICAgICDQvmJqZWN0LmluZGV4ID0gdGhpcy5pbmRleEluUGFyZW50KNC+YmplY3QucGFyZW50LCDQvmJqZWN0LmVsZW1lbnQpO1xyXG4gICAgICB0aGlzLm1vdmVUbyjQvmJqZWN0LnBsYWNlLCDQvmJqZWN0LmVsZW1lbnQsINC+YmplY3QuZGVzdGluYXRpb24pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICAvL2ZvciAobGV0IGkgPSAwOyBpIDwg0L5iamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGZvciAobGV0IGkgPSDQvmJqZWN0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICBjb25zdCDQvmJqZWN0ID0g0L5iamVjdHNbaV07XHJcbiAgICAgIGlmICjQvmJqZWN0LmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuZGFDbGFzc25hbWUpKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlQmFjayjQvmJqZWN0LnBhcmVudCwg0L5iamVjdC5lbGVtZW50LCDQvmJqZWN0LmluZGV4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5tb3ZlVG8gPSBmdW5jdGlvbiAocGxhY2UsIGVsZW1lbnQsIGRlc3RpbmF0aW9uKSB7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZGFDbGFzc25hbWUpO1xyXG4gIGlmIChwbGFjZSA9PT0gJ2xhc3QnIHx8IHBsYWNlID49IGRlc3RpbmF0aW9uLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgZGVzdGluYXRpb24uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKHBsYWNlID09PSAnZmlyc3QnKSB7XHJcbiAgICBkZXN0aW5hdGlvbi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBlbGVtZW50KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgZGVzdGluYXRpb24uY2hpbGRyZW5bcGxhY2VdLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBlbGVtZW50KTtcclxufTtcclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5tb3ZlQmFjayA9IGZ1bmN0aW9uIChwYXJlbnQsIGVsZW1lbnQsIGluZGV4KSB7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZGFDbGFzc25hbWUpO1xyXG4gIGlmIChwYXJlbnQuY2hpbGRyZW5baW5kZXhdICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHBhcmVudC5jaGlsZHJlbltpbmRleF0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIGVsZW1lbnQpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwYXJlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcclxuICB9XHJcbn07XHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUuaW5kZXhJblBhcmVudCA9IGZ1bmN0aW9uIChwYXJlbnQsIGVsZW1lbnQpIHtcclxuICBjb25zdCBhcnJheSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHBhcmVudC5jaGlsZHJlbik7XHJcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYXJyYXksIGVsZW1lbnQpO1xyXG59O1xyXG5EeW5hbWljQWRhcHQucHJvdG90eXBlLmFycmF5U29ydCA9IGZ1bmN0aW9uIChhcnIpIHtcclxuICBpZiAodGhpcy50eXBlID09PSAnbWluJykge1xyXG4gICAgQXJyYXkucHJvdG90eXBlLnNvcnQuY2FsbChhcnIsIGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgIGlmIChhLmJyZWFrcG9pbnQgPT09IGIuYnJlYWtwb2ludCkge1xyXG4gICAgICAgIGlmIChhLnBsYWNlID09PSBiLnBsYWNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhLnBsYWNlID09PSAnZmlyc3QnIHx8IGIucGxhY2UgPT09ICdsYXN0Jykge1xyXG4gICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGEucGxhY2UgPT09ICdsYXN0JyB8fCBiLnBsYWNlID09PSAnZmlyc3QnKSB7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhLnBsYWNlIC0gYi5wbGFjZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGEuYnJlYWtwb2ludCAtIGIuYnJlYWtwb2ludDtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBBcnJheS5wcm90b3R5cGUuc29ydC5jYWxsKGFyciwgZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgaWYgKGEuYnJlYWtwb2ludCA9PT0gYi5icmVha3BvaW50KSB7XHJcbiAgICAgICAgaWYgKGEucGxhY2UgPT09IGIucGxhY2UpIHtcclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGEucGxhY2UgPT09ICdmaXJzdCcgfHwgYi5wbGFjZSA9PT0gJ2xhc3QnKSB7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhLnBsYWNlID09PSAnbGFzdCcgfHwgYi5wbGFjZSA9PT0gJ2ZpcnN0Jykge1xyXG4gICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGIucGxhY2UgLSBhLnBsYWNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYi5icmVha3BvaW50IC0gYS5icmVha3BvaW50O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59O1xyXG5jb25zdCBkYSA9IG5ldyBEeW5hbWljQWRhcHQoJ21heCcpO1xyXG5kYS5pbml0KCk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvKipcclxuICogc2V0IGhhc2ggdG8gdXJsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2V0SGFzaCA9IGhhc2ggPT4ge1xyXG4gIGhhc2ggPSBoYXNoID8gYCMke2hhc2h9YCA6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMF07XHJcbiAgaGlzdG9yeS5wdXNoU3RhdGUoJycsICcnLCBoYXNoKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBnZXQgaGFzaCBmcm9tIHVybFxyXG4gKiBAcmV0dXJucyBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRIYXNoID0gKCkgPT4ge1xyXG4gIGlmIChsb2NhdGlvbi5oYXNoKSB7XHJcbiAgICByZXR1cm4gbG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIGJvZHkgbG9ja1xyXG5leHBvcnQgbGV0IGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcclxuLyoqXHJcbiAqIHRvZ2dsZXMgYm9keSBsb2NrXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJvZHlMb2NrVG9nZ2xlID0gKGRlbGF5ID0gNTAwKSA9PiB7XHJcbiAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2xvY2snKSkge1xyXG4gICAgYm9keVVubG9jayhkZWxheSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGJvZHlMb2NrKGRlbGF5KTtcclxuICB9XHJcbn07XHJcbi8qKlxyXG4gKiB1bmxvY2tzIGJvZHlcclxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYm9keVVubG9jayA9IChkZWxheSA9IDUwMCkgPT4ge1xyXG4gIGlmIChib2R5TG9ja1N0YXR1cykge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJyk7XHJcbiAgICB9LCBkZWxheSk7XHJcbiAgICBib2R5TG9ja1N0YXR1cyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcclxuICAgIH0sIGRlbGF5KTtcclxuICB9XHJcbn07XHJcbi8qKlxyXG4gKiBsb2NrcyBib2R5XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJvZHlMb2NrID0gKGRlbGF5ID0gNTAwKSA9PiB7XHJcbiAgaWYgKGJvZHlMb2NrU3RhdHVzKSB7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbG9jaycpO1xyXG5cclxuICAgIGJvZHlMb2NrU3RhdHVzID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgYm9keUxvY2tTdGF0dXMgPSB0cnVlO1xyXG4gICAgfSwgZGVsYXkpO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJheVxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGF0YVNldFZhbHVlXHJcbiAqIHByb2Nlc3MgbWVkaWEgcmVxdWVzdHMgZnJvbSBhdHRyaWJ1dGVzXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZGF0YU1lZGlhUXVlcmllcyA9IChhcnJheSwgZGF0YVNldFZhbHVlKSA9PiB7XHJcbiAgLy8gZ2V0IG9iamVjdHMgd2l0aCBtZWRpYSBxdWVyaWVzXHJcbiAgY29uc3QgbWVkaWEgPSBBcnJheS5mcm9tKGFycmF5KS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0sIGluZGV4LCBzZWxmKSB7XHJcbiAgICBpZiAoaXRlbS5kYXRhc2V0W2RhdGFTZXRWYWx1ZV0pIHtcclxuICAgICAgcmV0dXJuIGl0ZW0uZGF0YXNldFtkYXRhU2V0VmFsdWVdLnNwbGl0KCcsJylbMF07XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy8gb2JqZWN0cyB3aXRoIG1lZGlhIHF1ZXJpZXMgaW5pdGlhbGl6YXRpb25cclxuICBpZiAobWVkaWEubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBicmVha3BvaW50c0FycmF5ID0gW107XHJcbiAgICBtZWRpYS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBwYXJhbXMgPSBpdGVtLmRhdGFzZXRbZGF0YVNldFZhbHVlXTtcclxuICAgICAgY29uc3QgYnJlYWtwb2ludCA9IHt9O1xyXG4gICAgICBjb25zdCBwYXJhbXNBcnJheSA9IHBhcmFtcy5zcGxpdCgnLCcpO1xyXG4gICAgICBicmVha3BvaW50LnZhbHVlID0gcGFyYW1zQXJyYXlbMF07XHJcbiAgICAgIGJyZWFrcG9pbnQudHlwZSA9IHBhcmFtc0FycmF5WzFdID8gcGFyYW1zQXJyYXlbMV0udHJpbSgpIDogJ21heCc7XHJcbiAgICAgIGJyZWFrcG9pbnQuaXRlbSA9IGl0ZW07XHJcbiAgICAgIGJyZWFrcG9pbnRzQXJyYXkucHVzaChicmVha3BvaW50KTtcclxuICAgIH0pO1xyXG4gICAgLy8gZ2V0IHVuaXF1ZSBicmVha3BvaW50c1xyXG4gICAgbGV0IG1kUXVlcmllcyA9IGJyZWFrcG9pbnRzQXJyYXkubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgJygnICtcclxuICAgICAgICBpdGVtLnR5cGUgK1xyXG4gICAgICAgICctd2lkdGg6ICcgK1xyXG4gICAgICAgIGl0ZW0udmFsdWUgK1xyXG4gICAgICAgICdweCksJyArXHJcbiAgICAgICAgaXRlbS52YWx1ZSArXHJcbiAgICAgICAgJywnICtcclxuICAgICAgICBpdGVtLnR5cGVcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgbWRRdWVyaWVzID0gdW5pcXVlQXJyYXkobWRRdWVyaWVzKTtcclxuICAgIGNvbnN0IG1kUXVlcmllc0FycmF5ID0gW107XHJcblxyXG4gICAgaWYgKG1kUXVlcmllcy5sZW5ndGgpIHtcclxuICAgICAgLy8gd29yayB3aXRoIGV2ZXJ5IGJyZWFrcG9pbnRcclxuICAgICAgbWRRdWVyaWVzLmZvckVhY2goYnJlYWtwb2ludCA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zQXJyYXkgPSBicmVha3BvaW50LnNwbGl0KCcsJyk7XHJcbiAgICAgICAgY29uc3QgbWVkaWFCcmVha3BvaW50ID0gcGFyYW1zQXJyYXlbMV07XHJcbiAgICAgICAgY29uc3QgbWVkaWFUeXBlID0gcGFyYW1zQXJyYXlbMl07XHJcbiAgICAgICAgY29uc3QgbWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKHBhcmFtc0FycmF5WzBdKTtcclxuICAgICAgICAvLyBvYmplY3RzIHdpdGggY29uZGl0aW9uc1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zQXJyYXkgPSBicmVha3BvaW50c0FycmF5LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPT09IG1lZGlhQnJlYWtwb2ludCAmJiBpdGVtLnR5cGUgPT09IG1lZGlhVHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBtZFF1ZXJpZXNBcnJheS5wdXNoKHtcclxuICAgICAgICAgIGl0ZW1zQXJyYXksXHJcbiAgICAgICAgICBtYXRjaE1lZGlhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIG1kUXVlcmllc0FycmF5O1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBzbW9vdGhseSBzbGlkZXMgdXBcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3dtb3JlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgX3NsaWRlVXAgPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCwgc2hvd21vcmUgPSAwKSA9PiB7XHJcbiAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xyXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ19zbGlkZScpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdoZWlnaHQsIG1hcmdpbiwgcGFkZGluZyc7XHJcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xyXG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGAke3RhcmdldC5vZmZzZXRIZWlnaHR9cHhgO1xyXG4gICAgdGFyZ2V0Lm9mZnNldEhlaWdodDtcclxuICAgIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHNob3dtb3JlID8gYCR7c2hvd21vcmV9cmVtYCA6IGAwYDtcclxuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcclxuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcclxuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRhcmdldC5oaWRkZW4gPSAhc2hvd21vcmUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICFzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JykgOiBudWxsO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpO1xyXG4gICAgICAhc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93JykgOiBudWxsO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XHJcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdfc2xpZGUnKTtcclxuICAgICAgLy8gY3JlYXRlIGV2ZW50XHJcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCdzbGlkZVVwRG9uZScsIHtcclxuICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0sIGR1cmF0aW9uKTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogc21vb3RobHkgc2xpZGVzIGRvd25cclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3dtb3JlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgX3NsaWRlRG93biA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwLCBzaG93bW9yZSA9IDApID0+IHtcclxuICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XHJcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnX3NsaWRlJyk7XHJcbiAgICB0YXJnZXQuaGlkZGVuID0gdGFyZ2V0LmhpZGRlbiA/IGZhbHNlIDogbnVsbDtcclxuICAgIHNob3dtb3JlID8gdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKSA6IG51bGw7XHJcbiAgICBsZXQgaGVpZ2h0ID0gdGFyZ2V0Lm9mZnNldEhlaWdodDtcclxuICAgIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHNob3dtb3JlID8gYCR7c2hvd21vcmV9cmVtYCA6IGAwYDtcclxuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcclxuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcclxuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdoZWlnaHQsIG1hcmdpbiwgcGFkZGluZyc7XHJcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xyXG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJyk7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJyk7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKTtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpO1xyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKTtcclxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ19zbGlkZScpO1xyXG4gICAgICAvLyBjcmVhdGUgZXZlbnRcclxuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ3NsaWRlRG93bkRvbmUnLCB7XHJcbiAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9LCBkdXJhdGlvbik7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIHRvZ2dsZXMgc21vb3RoIHNsaWRlXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxyXG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cclxuICogQHJldHVybnMgZnVuY3Rpb25cclxuICovXHJcbmV4cG9ydCBjb25zdCBfc2xpZGVUb2dnbGUgPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCkgPT4ge1xyXG4gIGlmICh0YXJnZXQuaGlkZGVuKSB7XHJcbiAgICByZXR1cm4gX3NsaWRlRG93bih0YXJnZXQsIGR1cmF0aW9uKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIF9zbGlkZVVwKHRhcmdldCwgZHVyYXRpb24pO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBjb252ZXJ0cyByZW0gdG8gcGl4ZWxzXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSByZW1WYWx1ZVxyXG4gKiBAcmV0dXJucyBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1Ub1B4KHJlbVZhbHVlKSB7XHJcbiAgLy8g0J/QvtC70YPRh9Cw0LXQvCDRgtC10LrRg9GJ0LjQuSDQsdCw0LfQvtCy0YvQuSDRgNCw0LfQvNC10YAg0YjRgNC40YTRgtCwIChmb250LXNpemUpINC40Lcg0Y3Qu9C10LzQtdC90YLQsCA8aHRtbD5cclxuICB2YXIgaHRtbEZvbnRTaXplID0gcGFyc2VGbG9hdChcclxuICAgIGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5mb250U2l6ZVxyXG4gICk7XHJcblxyXG4gIC8vINCf0LXRgNC10LLQvtC00LjQvCDQt9C90LDRh9C10L3QuNC1INC40LcgcmVtINCyIHB4XHJcbiAgdmFyIHB4VmFsdWUgPSByZW1WYWx1ZSAqIGh0bWxGb250U2l6ZTtcclxuXHJcbiAgLy8g0J7QutGA0YPQs9C70Y/QtdC8INC30L3QsNGH0LXQvdC40LUg0LTQviDRhtC10LvRi9GFINC/0LjQutGB0LXQu9C10LkgKNC/0L4g0LbQtdC70LDQvdC40Y4pXHJcbiAgcmV0dXJuIE1hdGgucm91bmQocHhWYWx1ZSkgKyAncHgnO1xyXG59XHJcblxyXG4vLyByZW1vdmUgY2xhc3MgZnJvbSBhbGwgYXJyYXkgZWxlbWVudHNcclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNsYXNzZXMgPSAoYXJyYXksIGNsYXNzTmFtZSkgPT4ge1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgIGFycmF5W2ldLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IGJvZHlMb2NrU3RhdHVzLCBib2R5TG9ja1RvZ2dsZSB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuY29uc3QgbWVudUluaXQgPSAoKSA9PiB7XHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpKSB7XHJcbiAgICAgICAgY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpO1xyXG5cclxuICAgICAgICBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoYm9keUxvY2tTdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdfbWVudS1vcGVuZWQnKTtcclxuICAgICAgICAgICAgICAgIGJvZHlMb2NrVG9nZ2xlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbm1lbnVJbml0KCk7XHJcbiIsImltcG9ydCB7IF9zbGlkZVVwLCBfc2xpZGVEb3duLCBfc2xpZGVUb2dnbGUgfSBmcm9tICcuL3V0aWxzLmpzJztcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jbGFzcyBTZWxlY3Qge1xyXG4gICAgLy8gc2V0dXAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8vIGN1c3RvbSBzZWxlY3QgY2xhc3Nlc1xyXG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IHtcclxuICAgICAgICAgICAgLy8gaHRtbCBidWlsZCBjbGFzc2VzXHJcbiAgICAgICAgICAgIHNlbDogJ3NlbGVjdCcsXHJcbiAgICAgICAgICAgIGJvZHk6ICdzZWxlY3RfX2JvZHknLFxyXG4gICAgICAgICAgICBsYWJlbDogJ3NlbGVjdF9fbGFiZWwnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ3NlbGVjdF9fdGl0bGUnLFxyXG4gICAgICAgICAgICB2YWw6ICdzZWxlY3RfX3ZhbHVlJyxcclxuICAgICAgICAgICAgY29udGVudDogJ3NlbGVjdF9fY29udGVudCcsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6ICdzZWxlY3RfX29wdGlvbnMnLFxyXG4gICAgICAgICAgICBvcHRpb246ICdzZWxlY3RfX29wdGlvbicsXHJcbiAgICAgICAgICAgIHNjcm9sbDogJ3NlbGVjdF9fc2Nyb2xsJyxcclxuICAgICAgICAgICAgZ3JvdXA6ICdzZWxlY3RfX2dyb3VwJyxcclxuICAgICAgICAgICAgaW5wOiAnc2VsZWN0X19pbnB1dCcsXHJcbiAgICAgICAgICAgIGFzc2V0OiAnc2VsZWN0X19hc3NldCcsXHJcbiAgICAgICAgICAgIHR4dDogJ3NlbGVjdF9fdGV4dCcsXHJcbiAgICAgICAgICAgIGhpbnQ6ICdzZWxlY3RfX2hpbnQnLFxyXG5cclxuICAgICAgICAgICAgLy8gc3RhdGUgY2xhc3Nlc1xyXG4gICAgICAgICAgICBhY3RpdmU6ICdfc2VsZWN0LWFjdGl2ZScsXHJcbiAgICAgICAgICAgIGZvY3VzZWQ6ICdfc2VsZWN0LWZvY3VzZWQnLFxyXG4gICAgICAgICAgICBvcGVuZWQ6ICdfc2VsZWN0LW9wZW5lZCcsXHJcbiAgICAgICAgICAgIGZpbGxlZDogJ19zZWxlY3QtZmlsbGVkJyxcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ICdfc2VsZWN0LXNlbGVjdGVkJyxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6ICdfc2VsZWN0LWRpc2FibGVkJyxcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZGl0aW9uYWwgY2xhc3Nlc1xyXG4gICAgICAgICAgICBsaXN0OiAnX3NlbGVjdC1saXN0JyxcclxuICAgICAgICAgICAgZXJyb3I6ICdfc2VsZWN0LWVycm9yJyxcclxuICAgICAgICAgICAgbXVsdGlwbGU6ICdfc2VsZWN0LW11bHRpcGxlJyxcclxuICAgICAgICAgICAgY2hlY2tib3g6ICdfc2VsZWN0LWNoZWNrYm94JyxcclxuICAgICAgICAgICAgbGFiZWw6ICdfc2VsZWN0LWxhYmVsJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGFsbCBzZWxlY3QgaXRlbXNcclxuICAgICAgICBjb25zdCBzZWxlY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0Jyk7XHJcbiAgICAgICAgaWYgKHNlbGVjdExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdChzZWxlY3RMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2VsZWN0IGluaXRpYWxpemF0aW9uICYgYnVpbGQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLy8gaW5pdGlhbGl6YXRpb25cclxuICAgIGluaXQoc2VsZWN0TGlzdCkge1xyXG4gICAgICAgIC8vIGluaXRcclxuICAgICAgICBzZWxlY3RMaXN0LmZvckVhY2goKHNlbGVjdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGFyLXJhdGluZycpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRTZWxJdGVtKHNlbGVjdCwgaW5kZXggKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBldmVudHNcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAnY2xpY2snLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb25zKGUpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgICApO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICdrZXlkb3duJyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAnZm9jdXNpbicsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGlvbnMoZSk7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgJ2ZvY3Vzb3V0JyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIC8vIHNpbmdsZSBzZWxlY3QgaXRlbSBpbml0aWFsaXphdGlvblxyXG4gICAgaW5pdFNlbEl0ZW0ocmVsYXRpdmVTZWwsIGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc2VsKTtcclxuICAgICAgICByZWxhdGl2ZVNlbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxlY3QsIHJlbGF0aXZlU2VsKTtcclxuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQocmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIHJlbGF0aXZlU2VsLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgaW5kZXggPyAocmVsYXRpdmVTZWwuZGF0YXNldC5zZWxJZCA9IGluZGV4KSA6IG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKSkge1xyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5kYXRhc2V0Lm9wdFBsYWNlaG9sZGVyID0gdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS5sYWJlbC5zaG93KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxUaXRsZSA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLnRpdGxlKS50d2luU2VsO1xyXG4gICAgICAgICAgICAgICAgc2VsVGl0bGUuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgICAgICAgICAgICAgICdhZnRlcmJlZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5sYWJlbH1cIj4ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS5sYWJlbC50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLmxhYmVsLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9PC9zcGFuPmBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgIT09ICcwJykge1xyXG4gICAgICAgICAgICBzZWxlY3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgICAgICAgICAgJ2JlZm9yZWVuZCcsXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmJvZHl9XCI+PGRpdiBoaWRkZW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5vcHRpb25zfVwiPjwvZGl2PjwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgICAgICAgICAgJ2JlZm9yZWVuZCcsXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmJvZHl9XCI+PGRpdiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLm9wdGlvbnN9XCI+PC9kaXY+PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5idWlsZChyZWxhdGl2ZVNlbCk7XHJcblxyXG4gICAgICAgIHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgPSByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkID8gcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCA6ICcxNTAnO1xyXG4gICAgICAgIHJlbGF0aXZlU2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmluaXRTZWxlY3Rpb25zKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gc2VsZWN0IGJ1aWxkXHJcbiAgICBidWlsZChyZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3Qgc2VsT2JqID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gc2V0IGlkXHJcbiAgICAgICAgc2VsZWN0LmRhdGFzZXQuc2VsSWQgPSByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbElkO1xyXG4gICAgICAgIC8vIHNldCB2YWx1ZVxyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgLy8gc2V0IG9wdGlvbnNcclxuICAgICAgICB0aGlzLnNldE9wdGlvbnMoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgLy8gc2V0IGNzcyBtb2RpZmljYXRvclxyXG4gICAgICAgIHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsQWRkb25DbGFzc1xyXG4gICAgICAgICAgICA/IHNlbGVjdC5jbGFzc0xpc3QuYWRkKGBzZWxlY3RfJHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEFkZG9uQ2xhc3N9YClcclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgIC8vIHNldCBjbGFzcyBpZiBzZWxlY3QgaXMgbXVsdGlwbGVcclxuICAgICAgICByZWxhdGl2ZVNlbC5tdWx0aXBsZVxyXG4gICAgICAgICAgICA/IHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5tdWx0aXBsZSlcclxuICAgICAgICAgICAgOiBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMubXVsdGlwbGUpO1xyXG4gICAgICAgIC8vIHNldCBjbGFzcyBpZiBzZWxlY3QgY2hlY2tib3hlcyBhcmUgc2V0XHJcbiAgICAgICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1jaGVja2JveGVzJykgJiYgcmVsYXRpdmVTZWwubXVsdGlwbGVcclxuICAgICAgICAgICAgPyBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuY2hlY2tib3gpXHJcbiAgICAgICAgICAgIDogc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmNoZWNrYm94KTtcclxuICAgICAgICAvLyBkaXNhYmxlIHNlbGVjdFxyXG4gICAgICAgIHRoaXMuZGlzYWJsZVNlbGVjdChzZWxlY3QsIHJlbGF0aXZlU2VsKTtcclxuICAgICAgICAvLyBzZXQgc2VhcmNoIGFjdGlvbnMgaWYgZGF0YS1zZWwtc2VhcmNoIGlzIHNldFxyXG4gICAgICAgIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtc2VhcmNoJykgPyB0aGlzLnNldFNlYXJjaEFjdGlvbnMoc2VsZWN0KSA6IG51bGw7XHJcbiAgICAgICAgLy8gc2V0IHNlbGVjdCBhY3Rpb25zIGlmIGl0J3MgaW5pdGlhbGx5IG9wZW5lZFxyXG4gICAgICAgIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtb3BlbmVkJykgPyB0aGlzLnNldEFjdGlvbihzZWxlY3QpIDogbnVsbDtcclxuXHJcbiAgICAgICAgLy8gc2V0IHNlbGVjdCBoaW50XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSGludCkge1xyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAgICAgICAgICdiZWZvcmVlbmQnLFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJzZWxlY3RfX2hpbnRcIj4ke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSGludH08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB2YWxpZGF0ZSBzZWxlY3RcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuY2xvc2VzdCgnZm9ybScpKSB7XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLmNsb3Nlc3QoJ2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoc2VsT2JqLmNsYXNzZXMuZmlsbGVkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbE9iai5hZGRFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbE9iai5yZW1vdmVFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2hvdyAvIGhpZGUgc2VsZWN0aW9uIGZyb20gc2VsZWN0IHRpdGxlXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zaG93LXZhbCcpKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0LXNob3ctdmFsJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ19zZWxlY3Qtc2hvdy12YWwnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBzZXQgdHdpbiBzZWxlY3QgdGl0bGUgdmFsdWVcclxuICAgIHNldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBjb25zdCBzZWxCb2R5ID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMuYm9keSkudHdpblNlbDtcclxuICAgICAgICBjb25zdCBzZWxUaXRsZSA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLnRpdGxlKS50d2luU2VsO1xyXG5cclxuICAgICAgICBpZiAoc2VsVGl0bGUpIHNlbFRpdGxlLnJlbW92ZSgpO1xyXG4gICAgICAgIHNlbEJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy5nZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKSk7XHJcbiAgICB9XHJcbiAgICAvLyBzZXQgdHdpbiBzZWxlY3Qgb3B0aW9uc1xyXG4gICAgc2V0T3B0aW9ucyhzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnR3aW5TZWw7XHJcbiAgICAgICAgY29uc3QgcmVsYXRpdmVTZWxPcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykucmVsYXRpdmVTZWw7XHJcblxyXG4gICAgICAgIG9wdGlvbnMuaW5uZXJIVE1MID0gdGhpcy5nZXRPcHRpb25zKHJlbGF0aXZlU2VsKTtcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWxPcHRpb25zLnF1ZXJ5U2VsZWN0b3IoJ1tzZWxlY3RlZF0nKSkge1xyXG4gICAgICAgICAgICBvcHRpb25zLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuY2xhc3Nlcy5vcHRpb259YCkuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGRpc2FibGUgc2VsZWN0XHJcbiAgICBkaXNhYmxlU2VsZWN0KHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMudGl0bGUpLnR3aW5TZWwuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLnRpdGxlKS50d2luU2VsLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG1haW4gYWN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vIHNldCBtYWluIGFjdGlvbnNcclxuICAgIHNldEFjdGlvbnMoZSkge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBlLnR5cGU7XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMuc2VsKSkgfHxcclxuICAgICAgICAgICAgdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMubGlzdCkpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IHRhcmdldC5jbG9zZXN0KCcuc2VsZWN0JylcclxuICAgICAgICAgICAgICAgID8gdGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3QnKVxyXG4gICAgICAgICAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgYC4ke3RoaXMuY2xhc3Nlcy5zZWx9W2RhdGEtc2VsLWlkPVwiJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5saXN0KSkuZGF0YXNldC5zZWxlY3RJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVwiXWBcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgcmVsYXRpdmVTZWwgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QpLnJlbGF0aXZlU2VsO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdjbGljaycpIHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVsYXRpdmVTZWwuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMubGlzdCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbExpc3QgPSB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5saXN0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbE9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgLiR7dGhpcy5jbGFzc2VzLnNlbH1bZGF0YS1zZWwtaWQ9XCIke3NlbExpc3QuZGF0YXNldC5zZWxJZH1cIl0gLnNlbGVjdF9fb3B0aW9uW2RhdGEtb3B0LXZhbD1cIiR7c2VsTGlzdC5kYXRhc2V0Lm9wdFZhbH1cIl1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0T3B0aW9uQWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwsIHNlbE9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy50aXRsZSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9uKHNlbGVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcHRpb24pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxPcHRpb24gPSB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcHRpb24pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25BY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCwgc2VsT3B0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2ZvY3VzaW4nIHx8IHR5cGUgPT09ICdmb2N1c291dCcpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5zZWwpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnZm9jdXNpbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmZvY3VzZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5mb2N1c2VkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLmZpbGxlZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2tleWRvd24nICYmIGUuY29kZSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VHcm91cCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZUdyb3VwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gc2V0IHNpbmdsZSBzZWxlY3QgYWN0aW9uXHJcbiAgICBzZXRBY3Rpb24oc2VsZWN0KSB7XHJcbiAgICAgICAgY29uc3QgcmVsYXRpdmVTZWwgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QpLnJlbGF0aXZlU2VsO1xyXG4gICAgICAgIGNvbnN0IHNlbE9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS50d2luU2VsO1xyXG5cclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuY2xvc2VzdCgnW2RhdGEtb25lLXNlbGVjdF0nKSkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RPbmVHcm91cCA9IHJlbGF0aXZlU2VsLmNsb3Nlc3QoJ1tkYXRhLW9uZS1zZWxlY3RdJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VHcm91cChzZWxlY3RPbmVHcm91cCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNlbE9wdGlvbnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmNsYXNzZXMub3BlbmVkKTtcclxuICAgICAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgIT09ICcwJykge1xyXG4gICAgICAgICAgICAgICAgX3NsaWRlVG9nZ2xlKHNlbE9wdGlvbnMsIHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLm9wZW5lZCkgJiZcclxuICAgICAgICAgICAgICAgIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZScpICYmXHJcbiAgICAgICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5lcnJvcilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNsb3NlIHNpbmdsZSBzZWxlY3QgZ3JvdXBcclxuICAgIGNsb3NlR3JvdXAoZ3JvdXApIHtcclxuICAgICAgICBjb25zdCBzZWxHcm91cCA9IGdyb3VwID8gZ3JvdXAgOiBkb2N1bWVudDtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gc2VsR3JvdXAucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgYCR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMuc2VsKX0ke3RoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wZW5lZCl9YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKHNlbGVjdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbnMuZm9yRWFjaCgoc2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlSXRlbShzZWxlY3Rpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjbG9zZSBzaW5nbGUgc2VsZWN0IGl0ZW1cclxuICAgIGNsb3NlSXRlbShzZWxlY3QpIHtcclxuICAgICAgICBjb25zdCByZWxhdGl2ZVNlbCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCkucmVsYXRpdmVTZWw7XHJcbiAgICAgICAgY29uc3Qgc2VsT3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnR3aW5TZWw7XHJcblxyXG4gICAgICAgIGlmICghc2VsT3B0aW9ucy5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5vcGVuZWQpO1xyXG4gICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCAhPT0gJzAnKSB7XHJcbiAgICAgICAgICAgICAgICBfc2xpZGVVcChzZWxPcHRpb25zLCByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHNldCBzaW5nbGUgb3B0aW9uIGFjdGlvbnNcclxuICAgIHNldE9wdGlvbkFjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsLCBvcHRpb24pIHtcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC50b2dnbGUodGhpcy5jbGFzc2VzLnNlbGVjdGVkKTtcclxuICAgICAgICAgICAgY29uc3QgcmVsYXRpdmVTZWxlY3Rpb25zID0gdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS5lbGVtZW50cztcclxuXHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsZWN0aW9ucy5mb3JFYWNoKChyZWxhdGl2ZVNlbGVjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVTZWxlY3Rpb24ucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHR3aW5TZWxlY3Rpb25zID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpKTtcclxuICAgICAgICAgICAgdHdpblNlbGVjdGlvbnMuZm9yRWFjaCgodHdpblNlbGVjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVTZWxcclxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPVwiJHt0d2luU2VsZWN0aW9uLmRhdGFzZXQub3B0VmFsfVwiXWApXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghb3B0aW9uLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZWxhdGl2ZVNlbC5xdWVyeVNlbGVjdG9yKGBvcHRpb25bdmFsdWU9XCIke29wdGlvbi5kYXRhc2V0Lm9wdFZhbH1cIl1gKSk7XHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbFxyXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBvcHRpb25bdmFsdWU9XCIke29wdGlvbi5kYXRhc2V0Lm9wdFZhbH1cIl1gKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0X19vcHRpb24nKVxyXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKG9wdCkgPT4gb3B0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLnNlbGVjdGVkKSk7XHJcbiAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIGlmICghcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNob3ctc2VsZWN0aW9uJykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3QucXVlcnlTZWxlY3RvcihgJHt0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcHRpb24pfVtoaWRkZW5dYCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3QucXVlcnlTZWxlY3RvcihgJHt0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcHRpb24pfVtoaWRkZW5dYCkuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvcHRpb24uaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbC52YWx1ZSA9IG9wdGlvbi5oYXNBdHRyaWJ1dGUoJ2RhdGEtb3B0LXZhbCcpXHJcbiAgICAgICAgICAgICAgICA/IG9wdGlvbi5kYXRhc2V0Lm9wdFZhbFxyXG4gICAgICAgICAgICAgICAgOiBvcHRpb24udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9uKHNlbGVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25zKHJlbGF0aXZlU2VsKTtcclxuICAgIH1cclxuICAgIC8vIHNldCBzZWFyY2ggYWN0aW9uc1xyXG4gICAgc2V0U2VhcmNoQWN0aW9ucyhzZWxlY3QpIHtcclxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgY29uc3Qgc2VsSW5wdXQgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5pbnApLnR3aW5TZWw7XHJcbiAgICAgICAgY29uc3Qgc2VsT3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnR3aW5TZWwucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgYC4ke3RoaXMuY2xhc3Nlcy5vcHRpb259YFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHNlbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxPcHRpb25zLmZvckVhY2goKHNlbE9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbE9wdGlvbi50ZXh0Q29udGVudC50b1VwcGVyQ2FzZSgpLmluZGV4T2Yoc2VsSW5wdXQudmFsdWUudG9VcHBlckNhc2UoKSkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbE9wdGlvbi5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsT3B0aW9uLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZWxPcHRpb25zLmhpZGRlbiA9PT0gdHJ1ZSA/IF90aGlzLnNldEFjdGlvbihzZWxlY3QpIDogbnVsbDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIHNldCBzZWxlY3Qgc3VidGl0bGVcclxuICAgIHNldFN1YnRpdGxlKHJlbGF0aXZlU2VsKSB7fVxyXG5cclxuICAgIC8vIHZhbGlkYXRpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vIGFkZCBhbiBlcnJvciB0byBhIHNlbGVjdFxyXG4gICAgYWRkRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpIHtcclxuICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuZXJyb3IpO1xyXG5cclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zZWxFcnJvciAmJiAhcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50KSB7XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgICAgICAgICAgJ2JlZm9yZWVuZCcsXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInNlbGVjdF9faGludFwiPiR7cmVsYXRpdmVTZWwuZGF0YXNldC5zZWxFcnJvcn08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gcmVtb3ZlIGFuIGVycm9yIGZyb20gYSBzZWxlY3RcclxuICAgIHJlbW92ZUVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLmVycm9yKSkge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19oaW50JykgJiYgIXJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSGludCkge1xyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdF9faGludCcpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXRpbHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLy8gZ2V0IGN1c3RvbSBjbGFzc1xyXG4gICAgZ2V0Q2xhc3MoY3NzQ2xhc3MpIHtcclxuICAgICAgICByZXR1cm4gYC4ke2Nzc0NsYXNzfWA7XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgc2luZ2xlIHNlbGVjdCBpdGVtXHJcbiAgICBnZXRTZWxlY3Qoc2VsZWN0LCBjc3NDbGFzcykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsOiBzZWxlY3QucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksXHJcbiAgICAgICAgICAgIHR3aW5TZWw6IHNlbGVjdC5xdWVyeVNlbGVjdG9yKHRoaXMuZ2V0Q2xhc3MoY3NzQ2xhc3MpKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgc2VsZWN0ZWQgaXRlbSB2YWx1ZVxyXG4gICAgZ2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGxldCBhdHRyLFxyXG4gICAgICAgICAgICBhdHRyQ2xhc3MsXHJcbiAgICAgICAgICAgIHRpdGxlVmFsID0gdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsLCAyKS5odG1sO1xyXG5cclxuICAgICAgICAvLyBzZXQgdGl0bGUgdmFsdWVcclxuICAgICAgICB0aXRsZVZhbCA9IHRpdGxlVmFsLmxlbmd0aFxyXG4gICAgICAgICAgICA/IHRpdGxlVmFsXHJcbiAgICAgICAgICAgIDogcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxMYWJlbFxyXG4gICAgICAgICAgICA/IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsTGFiZWxcclxuICAgICAgICAgICAgOiAnJztcclxuXHJcbiAgICAgICAgLy8gc2V0IGFjdGl2ZSBjbGFzcyB0byBzZWxlY3QgaWYgaXQgY29udGFpbnMgYW55IHZhbHVlc1xyXG4gICAgICAgIGlmICh0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpLnZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmFjdGl2ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmFjdGl2ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZXQgc2VsZWN0IGxhYmVsXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtbGFiZWwnKSkge1xyXG4gICAgICAgICAgICBhdHRyID0gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxMYWJlbFxyXG4gICAgICAgICAgICAgICAgPyBgIGRhdGEtc2VsLWxhYmVsPVwiJHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbExhYmVsfVwiYFxyXG4gICAgICAgICAgICAgICAgOiBgIGRhdGEtc2VsLWxhYmVsPVwi0JLRi9Cx0L7RgFwiYDtcclxuICAgICAgICAgICAgYXR0ckNsYXNzID0gYCAke3RoaXMuY2xhc3Nlcy5sYWJlbH1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcHVzaCBzZWxlY3Rpb25zIHRvIHRoZSBsaXN0IGluc2lkZSBvZiBzZWxlY3QgdGl0bGVcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwubXVsdGlwbGUgJiYgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1saXN0JykpIHtcclxuICAgICAgICAgICAgdGl0bGVWYWwgPSB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpXHJcbiAgICAgICAgICAgICAgICAuZWxlbWVudHMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgIChvcHRpb24pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA8c3BhbiBkYXRhLW9wdC1pZD1cIiR7c2VsZWN0LmRhdGFzZXQuc2VsSWR9XCIgZGF0YS1vcHQtdmFsPVwiJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCIgY2xhc3M9XCJfbGlzdC1pdGVtXCI+JHt0aGlzLmdldENvbnRlbnQob3B0aW9uKX08L3NwYW4+YFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLmpvaW4oJycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQubGlzdCAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlbGF0aXZlU2VsLmRhdGFzZXQubGlzdCkpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVsYXRpdmVTZWwuZGF0YXNldC5saXN0KS5pbm5lckhUTUwgPSB0aXRsZVZhbDtcclxuICAgICAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNlYXJjaCcpKSB0aXRsZVZhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpbml0IHNlbGVjdCBzZWFyY2hcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1zZWFyY2gnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy50aXRsZX1cIj48c3BhbiAke2F0dHJ9IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMudmFsfVwiPjxpbnB1dCBhdXRvY29tcGxldGU9XCJvZmZcIiB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCIke3RpdGxlVmFsfVwiIGRhdGEtcGxhY2Vob2xkZXI9XCIke3RpdGxlVmFsfVwiIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuaW5wfVwiPjwvc3Bhbj48L2Rpdj5gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbUNsYXNzID1cclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHMubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpLmVsZW1lbnRzWzBdLmRhdGFzZXQub3B0Q2xhc3NcclxuICAgICAgICAgICAgICAgICAgICA/IGAgJHt0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpLmVsZW1lbnRzWzBdLmRhdGFzZXQub3B0Q2xhc3N9YFxyXG4gICAgICAgICAgICAgICAgICAgIDogJyc7XHJcbiAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy50aXRsZX1cIj48c3BhbiAke2F0dHIgPyBhdHRyIDogJyd9IGNsYXNzPVwiJHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3Nlcy52YWxcclxuICAgICAgICAgICAgfSAke2F0dHJDbGFzcyA/IGF0dHJDbGFzcyA6ICcnfVwiPjxzcGFuIGNsYXNzPVwiJHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3Nlcy5jb250ZW50XHJcbiAgICAgICAgICAgIH0ke2N1c3RvbUNsYXNzfVwiPiR7dGl0bGVWYWx9PC9zcGFuPjwvc3Bhbj48L2J1dHRvbj5gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGdldCBvcHRpb25zXHJcbiAgICBnZXRPcHRpb25zKHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsU2Nyb2xsID0gcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1zY3JvbGwnKSA/IGBkYXRhLXNpbXBsZWJhcmAgOiAnJztcclxuICAgICAgICBsZXQgc2VsU2Nyb2xsSGVpZ2h0ID0gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxTY3JvbGxcclxuICAgICAgICAgICAgPyBgc3R5bGU9XCJtYXgtaGVpZ2h0OiR7d2luZG93LmlubmVyV2lkdGggPiA3NjggPyByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbFNjcm9sbCA6IDIyfXJlbVwiYFxyXG4gICAgICAgICAgICA6ICcnO1xyXG4gICAgICAgIGxldCBzZWxPcHRpb25zID0gQXJyYXkuZnJvbShyZWxhdGl2ZVNlbC5vcHRpb25zKTtcclxuXHJcbiAgICAgICAgaWYgKHNlbE9wdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxPcHRpb25zSFRNTCA9IGBgO1xyXG5cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpICYmICF0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS5zaG93KSB8fFxyXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVTZWwubXVsdGlwbGVcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxPcHRpb25zID0gc2VsT3B0aW9ucy5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxPcHRpb25zSFRNTCArPSBzZWxTY3JvbGxcclxuICAgICAgICAgICAgICAgID8gYDxkaXYgJHtzZWxTY3JvbGx9ICR7c2VsU2Nyb2xsSGVpZ2h0fSBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnNjcm9sbH1cIj5gXHJcbiAgICAgICAgICAgICAgICA6ICcnO1xyXG4gICAgICAgICAgICBzZWxPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VsT3B0aW9uc0hUTUwgKz0gdGhpcy5nZXRPcHRpb24ob3B0aW9uLCByZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZWxPcHRpb25zSFRNTCArPSBzZWxTY3JvbGwgPyBgPC9kaXY+YCA6ICcnO1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsT3B0aW9uc0hUTUw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZ2V0IG9wdGlvblxyXG4gICAgZ2V0T3B0aW9uKG9wdGlvbiwgcmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gb3B0aW9uLnNlbGVjdGVkICYmIHJlbGF0aXZlU2VsLm11bHRpcGxlID8gYCAke3RoaXMuY2xhc3Nlcy5zZWxlY3RlZH1gIDogJyc7XHJcbiAgICAgICAgY29uc3Qgc2hvd1NlbGVjdGlvbiA9XHJcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCAmJiAhcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNob3ctc2VsZWN0aW9uJykgJiYgIXJlbGF0aXZlU2VsLm11bHRpcGxlXHJcbiAgICAgICAgICAgICAgICA/IGBoaWRkZW5gXHJcbiAgICAgICAgICAgICAgICA6IGBgO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbkNsYXNzID0gb3B0aW9uLmRhdGFzZXQub3B0Q2xhc3MgPyBgICR7b3B0aW9uLmRhdGFzZXQub3B0Q2xhc3N9YCA6ICcnO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbkxpbmsgPSBvcHRpb24uZGF0YXNldC5vcHRpb25MaW5rID8gb3B0aW9uLmRhdGFzZXQub3B0aW9uTGluayA6IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbkxpbmtUYXJnZXQgPSBvcHRpb24uaGFzQXR0cmlidXRlKCdkYXRhLW9wdGlvbi1saW5rLXRhcmdldCcpID8gYHRhcmdldD1cIl9ibGFua1wiYCA6ICcnO1xyXG4gICAgICAgIGxldCBvcHRpb25IVE1MID0gYGA7XHJcblxyXG4gICAgICAgIG9wdGlvbkhUTUwgKz0gb3B0aW9uTGlua1xyXG4gICAgICAgICAgICA/IGA8YSAke29wdGlvbkxpbmtUYXJnZXR9ICR7c2hvd1NlbGVjdGlvbn0gaHJlZj1cIiR7b3B0aW9uTGlua31cIiBkYXRhLW9wdC12YWw9XCIke29wdGlvbi52YWx1ZX1cIiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLm9wdGlvbn0ke29wdGlvbkNsYXNzfSR7c2VsZWN0aW9uc31cIj5gXHJcbiAgICAgICAgICAgIDogYDxidXR0b24gJHtzaG93U2VsZWN0aW9ufSBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLm9wdGlvbn0ke29wdGlvbkNsYXNzfSR7c2VsZWN0aW9uc31cIiBkYXRhLW9wdC12YWw9XCIke29wdGlvbi52YWx1ZX1cIiB0eXBlPVwiYnV0dG9uXCI+YDtcclxuICAgICAgICBvcHRpb25IVE1MICs9IHRoaXMuZ2V0Q29udGVudChvcHRpb24pO1xyXG4gICAgICAgIG9wdGlvbkhUTUwgKz0gb3B0aW9uTGluayA/IGA8L2E+YCA6IGA8L2J1dHRvbj5gO1xyXG4gICAgICAgIHJldHVybiBvcHRpb25IVE1MO1xyXG4gICAgfVxyXG4gICAgLy8gZ2V0IHNlbGVjdCBjb250ZW50XHJcbiAgICBnZXRDb250ZW50KG9wdGlvbikge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbkRhdGEgPSBvcHRpb24uZGF0YXNldC5vcHRBc3NldCA/IGAke29wdGlvbi5kYXRhc2V0Lm9wdEFzc2V0fWAgOiAnJztcclxuICAgICAgICBjb25zdCBvcHRpb25EYXRhSFRNTCA9XHJcbiAgICAgICAgICAgIG9wdGlvbkRhdGEuaW5kZXhPZignaW1nJykgPj0gMCA/IGA8aW1nIHNyYz1cIiR7b3B0aW9uRGF0YX1cIiBhbHQ9XCJcIj5gIDogb3B0aW9uRGF0YTtcclxuICAgICAgICBsZXQgb3B0aW9uQ29udGVudEhUTUwgPSBgYDtcclxuXHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8c3BhbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmdyb3VwfVwiPmAgOiAnJztcclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuYXNzZXR9XCI+YCA6ICcnO1xyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBvcHRpb25EYXRhSFRNTCA6ICcnO1xyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPC9zcGFuPmAgOiAnJztcclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMudHh0fVwiPmAgOiAnJztcclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb24udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8L3NwYW4+YCA6ICcnO1xyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPC9zcGFuPmAgOiAnJztcclxuICAgICAgICByZXR1cm4gb3B0aW9uQ29udGVudEhUTUw7XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgc2VsZWN0IHBsYWNlaG9sZGVyXHJcbiAgICBnZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gQXJyYXkuZnJvbShyZWxhdGl2ZVNlbC5vcHRpb25zKS5maW5kKChvcHRpb24pID0+ICFvcHRpb24udmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAocGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc3VidGl0bGUpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHBsYWNlaG9sZGVyLnRleHRDb250ZW50LFxyXG4gICAgICAgICAgICAgICAgc2hvdzogcGxhY2Vob2xkZXIuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1waC1zaG93JyksXHJcbiAgICAgICAgICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHBsYWNlaG9sZGVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtcGgnKSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBwbGFjZWhvbGRlci5kYXRhc2V0Lm9wdFBsYWNlaG9sZGVyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZ2V0IHNlbGVjdGVkIG9wdGlvbnMgZGF0YVxyXG4gICAgZ2V0RGF0YShyZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGxldCBzZWxlY3Rpb25zID0gW107XHJcblxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgICBzZWxlY3Rpb25zID0gQXJyYXkuZnJvbShyZWxhdGl2ZVNlbC5vcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi5zZWxlY3RlZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0aW9ucy5wdXNoKHJlbGF0aXZlU2VsLm9wdGlvbnNbcmVsYXRpdmVTZWwuc2VsZWN0ZWRJbmRleF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlbGVtZW50czogc2VsZWN0aW9ucy5tYXAoKG9wdGlvbikgPT4gb3B0aW9uKSxcclxuICAgICAgICAgICAgdmFsdWVzOiBzZWxlY3Rpb25zLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpLm1hcCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpLFxyXG4gICAgICAgICAgICBodG1sOiBzZWxlY3Rpb25zLm1hcCgob3B0aW9uKSA9PiB0aGlzLmdldENvbnRlbnQob3B0aW9uKSlcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNlbGVjdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vIGluaXQgc2VsZWN0aW9uc1xyXG4gICAgaW5pdFNlbGVjdGlvbnMoZSkge1xyXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgIHRoaXMuYnVpbGQocmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0aW9ucyhyZWxhdGl2ZVNlbCk7XHJcbiAgICB9XHJcbiAgICAvLyBzZXQgc2VsZWN0aW9uc1xyXG4gICAgc2V0U2VsZWN0aW9ucyhyZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc3VibWl0JykgJiYgcmVsYXRpdmVTZWwudmFsdWUpIHtcclxuICAgICAgICAgICAgbGV0IHRlbXBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgdGVtcEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLmNsb3Nlc3QoJ2Zvcm0nKS5hcHBlbmQodGVtcEJ1dHRvbik7XHJcbiAgICAgICAgICAgIHRlbXBCdXR0b24uY2xpY2soKTtcclxuICAgICAgICAgICAgdGVtcEJ1dHRvbi5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5maWxsZWQpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xyXG4gICAgfVxyXG4gICAgLy8gY3VzdG9tIHNlbGVjdCBldmVudCAobGlzdGVuIHRvIGFueSBzZWxlY3Rpb25zIC8gbXV0YXRpb25zKVxyXG4gICAgc2VsZWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGlvbicsIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdDogcmVsYXRpdmVTZWxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbm5ldyBTZWxlY3Qoe30pO1xyXG4iLCJpbXBvcnQgJy4uL3Njc3Mvc3R5bGUuc2Nzcyc7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZvcm1zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gaW1wb3J0ICogYXMgZm9ybXMgZnJvbSAnLi91dGlscy9mb3Jtcy5qcyc7XHJcblxyXG4vLyBmb3JtIGZpZWxkc1xyXG4vLyBmb3Jtcy5mb3JtRmllbGRzSW5pdCh7IHZpZXdQYXNzOiBmYWxzZSB9KTtcclxuXHJcbi8vIGZvcm0gc3VibWl0XHJcbi8vIGZvcm1zLmZvcm1TdWJtaXQoKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdXRpbHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vL2hhbWJ1cmdlclxyXG5pbXBvcnQgJy4vdXRpbHMvaGFtYnVyZ2VyLmpzJztcclxuXHJcbi8vIHRhYnNcclxuLy8gaW1wb3J0ICcuL3V0aWxzL3RhYnMuanMnO1xyXG5cclxuLy8gYWNjb3JkaW9uXHJcbi8vIGltcG9ydCAnLi91dGlscy9hY2NvcmRpb24uanMnO1xyXG5cclxuLy8gc2VsZWN0XHJcbmltcG9ydCAnLi91dGlscy9zZWxlY3QuanMnO1xyXG5cclxuLy8gbW9kYWxzXHJcbi8vIGltcG9ydCAnLi91dGlscy9tb2RhbHMuanMnO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBsaWJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIGR5bmFtaWMgZG9tXHJcbmltcG9ydCAnLi9saWJzL2RkLmpzJztcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgJy4vZGV2L3Z6bXNrMS5qcyc7XHJcbmltcG9ydCAnLi9kZXYvbWFya3VzRE0uanMnO1xyXG5pbXBvcnQgJy4vZGV2L3VraWswLmpzJztcclxuaW1wb3J0ICcuL2Rldi9raWU2ZXIuanMnO1xyXG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJldmVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIkR5bmFtaWNBZGFwdCIsInR5cGUiLCJwcm90b3R5cGUiLCJpbml0IiwiX3RoaXMiLCLQvmJqZWN0cyIsImRhQ2xhc3NuYW1lIiwibm9kZXMiLCJpIiwibGVuZ3RoIiwibm9kZSIsImRhdGEiLCJkYXRhc2V0IiwiZGEiLCJ0cmltIiwiZGF0YUFycmF5Iiwic3BsaXQiLCLQvmJqZWN0IiwiZWxlbWVudCIsInBhcmVudCIsInBhcmVudE5vZGUiLCJkZXN0aW5hdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJicmVha3BvaW50IiwicGxhY2UiLCJpbmRleCIsImluZGV4SW5QYXJlbnQiLCJwdXNoIiwiYXJyYXlTb3J0IiwibWVkaWFRdWVyaWVzIiwiQXJyYXkiLCJtYXAiLCJjYWxsIiwiZmlsdGVyIiwic2VsZiIsImluZGV4T2YiLCJtZWRpYSIsIm1lZGlhU3BsaXQiLCJTdHJpbmciLCJtYXRjaE1lZGlhIiwid2luZG93IiwibWVkaWFCcmVha3BvaW50Iiwi0L5iamVjdHNGaWx0ZXIiLCJhZGRMaXN0ZW5lciIsIm1lZGlhSGFuZGxlciIsIm1hdGNoZXMiLCJtb3ZlVG8iLCJjb250YWlucyIsIm1vdmVCYWNrIiwiYWRkIiwiY2hpbGRyZW4iLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJyZW1vdmUiLCJ1bmRlZmluZWQiLCJhcnJheSIsInNsaWNlIiwiYXJyIiwic29ydCIsImEiLCJiIiwic2V0SGFzaCIsImhhc2giLCJsb2NhdGlvbiIsImhyZWYiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiZ2V0SGFzaCIsInJlcGxhY2UiLCJib2R5TG9ja1N0YXR1cyIsImJvZHlMb2NrVG9nZ2xlIiwiZGVsYXkiLCJhcmd1bWVudHMiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5VW5sb2NrIiwiYm9keUxvY2siLCJzZXRUaW1lb3V0IiwiZGF0YU1lZGlhUXVlcmllcyIsImRhdGFTZXRWYWx1ZSIsImZyb20iLCJicmVha3BvaW50c0FycmF5IiwicGFyYW1zIiwicGFyYW1zQXJyYXkiLCJ2YWx1ZSIsIm1kUXVlcmllcyIsInVuaXF1ZUFycmF5IiwibWRRdWVyaWVzQXJyYXkiLCJtZWRpYVR5cGUiLCJpdGVtc0FycmF5IiwiX3NsaWRlVXAiLCJ0YXJnZXQiLCJkdXJhdGlvbiIsInNob3dtb3JlIiwic3R5bGUiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvdmVyZmxvdyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiaGlkZGVuIiwicmVtb3ZlUHJvcGVydHkiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJfc2xpZGVEb3duIiwiX3NsaWRlVG9nZ2xlIiwicmVtVG9QeCIsInJlbVZhbHVlIiwiaHRtbEZvbnRTaXplIiwicGFyc2VGbG9hdCIsImdldENvbXB1dGVkU3R5bGUiLCJmb250U2l6ZSIsInB4VmFsdWUiLCJNYXRoIiwicm91bmQiLCJyZW1vdmVDbGFzc2VzIiwiY2xhc3NOYW1lIiwibWVudUluaXQiLCJoYW1idXJnZXIiLCJlIiwiU2VsZWN0IiwiY29uc3RydWN0b3IiLCJjbGFzc2VzIiwic2VsIiwiYm9keSIsImxhYmVsIiwidGl0bGUiLCJ2YWwiLCJjb250ZW50Iiwib3B0aW9ucyIsIm9wdGlvbiIsInNjcm9sbCIsImdyb3VwIiwiaW5wIiwiYXNzZXQiLCJ0eHQiLCJoaW50IiwiYWN0aXZlIiwiZm9jdXNlZCIsIm9wZW5lZCIsImZpbGxlZCIsInNlbGVjdGVkIiwiZGlzYWJsZWQiLCJsaXN0IiwiZXJyb3IiLCJtdWx0aXBsZSIsImNoZWNrYm94Iiwic2VsZWN0TGlzdCIsInNlbGVjdCIsImluaXRTZWxJdGVtIiwic2V0QWN0aW9ucyIsImJpbmQiLCJyZWxhdGl2ZVNlbCIsImNyZWF0ZUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInNlbElkIiwiZ2V0UGxhY2Vob2xkZXIiLCJvcHRQbGFjZWhvbGRlciIsInNob3ciLCJzZWxUaXRsZSIsImdldFNlbGVjdCIsInR3aW5TZWwiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJ0ZXh0Iiwic3BlZWQiLCJidWlsZCIsImluaXRTZWxlY3Rpb25zIiwicGFyZW50RWxlbWVudCIsInNlbE9iaiIsInNldFZhbHVlIiwic2V0T3B0aW9ucyIsInNlbEFkZG9uQ2xhc3MiLCJoYXNBdHRyaWJ1dGUiLCJkaXNhYmxlU2VsZWN0Iiwic2V0U2VhcmNoQWN0aW9ucyIsInNldEFjdGlvbiIsInNlbEhpbnQiLCJjbG9zZXN0IiwiYWRkRXJyIiwicmVtb3ZlRXJyIiwic2VsQm9keSIsImdldFZhbHVlIiwicmVsYXRpdmVTZWxPcHRpb25zIiwiaW5uZXJIVE1MIiwiZ2V0T3B0aW9ucyIsImdldENsYXNzIiwic2VsZWN0SWQiLCJzZWxMaXN0Iiwic2VsT3B0aW9uIiwib3B0VmFsIiwic2V0T3B0aW9uQWN0aW9uIiwiY29kZSIsImNsb3NlR3JvdXAiLCJzZWxPcHRpb25zIiwic2VsZWN0T25lR3JvdXAiLCJzZWxHcm91cCIsInNlbGVjdGlvbnMiLCJzZWxlY3Rpb24iLCJjbG9zZUl0ZW0iLCJyZWxhdGl2ZVNlbGVjdGlvbnMiLCJnZXREYXRhIiwiZWxlbWVudHMiLCJyZWxhdGl2ZVNlbGVjdGlvbiIsInJlbW92ZUF0dHJpYnV0ZSIsInR3aW5TZWxlY3Rpb25zIiwidHdpblNlbGVjdGlvbiIsInNldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJvcHQiLCJ0ZXh0Q29udGVudCIsInNldFNlbGVjdGlvbnMiLCJzZWxJbnB1dCIsInRvVXBwZXJDYXNlIiwic2V0U3VidGl0bGUiLCJzZWxFcnJvciIsInJlbW92ZUNoaWxkIiwiY3NzQ2xhc3MiLCJhdHRyIiwiYXR0ckNsYXNzIiwidGl0bGVWYWwiLCJodG1sIiwic2VsTGFiZWwiLCJ2YWx1ZXMiLCJnZXRDb250ZW50Iiwiam9pbiIsImN1c3RvbUNsYXNzIiwib3B0Q2xhc3MiLCJzZWxTY3JvbGwiLCJzZWxTY3JvbGxIZWlnaHQiLCJpbm5lcldpZHRoIiwic2VsT3B0aW9uc0hUTUwiLCJnZXRPcHRpb24iLCJzaG93U2VsZWN0aW9uIiwib3B0aW9uQ2xhc3MiLCJvcHRpb25MaW5rIiwib3B0aW9uTGlua1RhcmdldCIsIm9wdGlvbkhUTUwiLCJvcHRpb25EYXRhIiwib3B0QXNzZXQiLCJvcHRpb25EYXRhSFRNTCIsIm9wdGlvbkNvbnRlbnRIVE1MIiwicGxhY2Vob2xkZXIiLCJmaW5kIiwic3VidGl0bGUiLCJzZWxlY3RlZEluZGV4IiwidGVtcEJ1dHRvbiIsImFwcGVuZCIsImNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==