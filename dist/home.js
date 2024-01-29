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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUl3SyxVQUFVLEdBQUduUSxRQUFRLENBQUNxSyxhQUFhLENBQUMsUUFBUSxDQUFDO01BQ2pEOEYsVUFBVSxDQUFDelAsSUFBSSxHQUFHLFFBQVE7TUFDMUIwSixXQUFXLENBQUMwQixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUNzRSxNQUFNLENBQUNELFVBQVUsQ0FBQztNQUM5Q0EsVUFBVSxDQUFDRSxLQUFLLENBQUMsQ0FBQztNQUNsQkYsVUFBVSxDQUFDdE0sTUFBTSxDQUFDLENBQUM7SUFDdkI7SUFDQXVHLFdBQVcsQ0FBQ2dCLGFBQWEsQ0FBQzdLLFNBQVMsQ0FBQ21ELEdBQUcsQ0FBQyxJQUFJLENBQUM0RSxPQUFPLENBQUNrQixNQUFNLENBQUM7SUFDNUQsSUFBSSxDQUFDMEQsU0FBUyxDQUFDbEQsTUFBTSxFQUFFSSxXQUFXLENBQUM7RUFDdkM7RUFDQTtFQUNBOEMsU0FBU0EsQ0FBQ2xELE1BQU0sRUFBRUksV0FBVyxFQUFFO0lBQzNCcEssUUFBUSxDQUFDaUgsYUFBYSxDQUNsQixJQUFJQyxXQUFXLENBQUMsV0FBVyxFQUFFO01BQ3pCQyxNQUFNLEVBQUU7UUFDSjZDLE1BQU0sRUFBRUk7TUFDWjtJQUNKLENBQUMsQ0FDTCxDQUFDO0VBQ0w7QUFDSjtBQUNBLElBQUloQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7OztBQ3JtQmM7O0FBRTVCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUM4Qjs7QUFFOUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQzJCOztBQUUzQjtBQUNBOztBQUVBOztBQUVBO0FBQ3NCOztBQUV0Qjs7QUFFeUI7QUFDRTtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2Rldi91a2lrMC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvbGlicy9kZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy9oYW1idXJnZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL3V0aWxzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19uYXYtaXRlbS1oZWFkaW5nJyk7XG5cbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnLS1hY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcclxuZnVuY3Rpb24gRHluYW1pY0FkYXB0KHR5cGUpIHtcclxuICB0aGlzLnR5cGUgPSB0eXBlO1xyXG59XHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgdGhpcy7QvmJqZWN0cyA9IFtdO1xyXG4gIHRoaXMuZGFDbGFzc25hbWUgPSAnX2R5bmFtaWNfYWRhcHRfJztcclxuICB0aGlzLm5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZGFdJyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBub2RlID0gdGhpcy5ub2Rlc1tpXTtcclxuICAgIGNvbnN0IGRhdGEgPSBub2RlLmRhdGFzZXQuZGEudHJpbSgpO1xyXG4gICAgY29uc3QgZGF0YUFycmF5ID0gZGF0YS5zcGxpdCgnLCcpO1xyXG4gICAgY29uc3Qg0L5iamVjdCA9IHt9O1xyXG4gICAg0L5iamVjdC5lbGVtZW50ID0gbm9kZTtcclxuICAgINC+YmplY3QucGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAg0L5iamVjdC5kZXN0aW5hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZGF0YUFycmF5WzBdLnRyaW0oKSk7XHJcbiAgICDQvmJqZWN0LmJyZWFrcG9pbnQgPSBkYXRhQXJyYXlbMV0gPyBkYXRhQXJyYXlbMV0udHJpbSgpIDogJzc2Nyc7XHJcbiAgICDQvmJqZWN0LnBsYWNlID0gZGF0YUFycmF5WzJdID8gZGF0YUFycmF5WzJdLnRyaW0oKSA6ICdsYXN0JztcclxuICAgINC+YmplY3QuaW5kZXggPSB0aGlzLmluZGV4SW5QYXJlbnQo0L5iamVjdC5wYXJlbnQsINC+YmplY3QuZWxlbWVudCk7XHJcbiAgICB0aGlzLtC+YmplY3RzLnB1c2go0L5iamVjdCk7XHJcbiAgfVxyXG4gIHRoaXMuYXJyYXlTb3J0KHRoaXMu0L5iamVjdHMpO1xyXG4gIHRoaXMubWVkaWFRdWVyaWVzID0gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKFxyXG4gICAgdGhpcy7QvmJqZWN0cyxcclxuICAgIGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgJygnICtcclxuICAgICAgICB0aGlzLnR5cGUgK1xyXG4gICAgICAgICctd2lkdGg6ICcgK1xyXG4gICAgICAgIGl0ZW0uYnJlYWtwb2ludCArXHJcbiAgICAgICAgJ3B4KSwnICtcclxuICAgICAgICBpdGVtLmJyZWFrcG9pbnRcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICB0aGlzXHJcbiAgKTtcclxuICB0aGlzLm1lZGlhUXVlcmllcyA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChcclxuICAgIHRoaXMubWVkaWFRdWVyaWVzLFxyXG4gICAgZnVuY3Rpb24gKGl0ZW0sIGluZGV4LCBzZWxmKSB7XHJcbiAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHNlbGYsIGl0ZW0pID09PSBpbmRleDtcclxuICAgIH1cclxuICApO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tZWRpYVF1ZXJpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IG1lZGlhID0gdGhpcy5tZWRpYVF1ZXJpZXNbaV07XHJcbiAgICBjb25zdCBtZWRpYVNwbGl0ID0gU3RyaW5nLnByb3RvdHlwZS5zcGxpdC5jYWxsKG1lZGlhLCAnLCcpO1xyXG4gICAgY29uc3QgbWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKG1lZGlhU3BsaXRbMF0pO1xyXG4gICAgY29uc3QgbWVkaWFCcmVha3BvaW50ID0gbWVkaWFTcGxpdFsxXTtcclxuICAgIGNvbnN0INC+YmplY3RzRmlsdGVyID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKFxyXG4gICAgICB0aGlzLtC+YmplY3RzLFxyXG4gICAgICBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmJyZWFrcG9pbnQgPT09IG1lZGlhQnJlYWtwb2ludDtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIG1hdGNoTWVkaWEuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICBfdGhpcy5tZWRpYUhhbmRsZXIobWF0Y2hNZWRpYSwg0L5iamVjdHNGaWx0ZXIpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1lZGlhSGFuZGxlcihtYXRjaE1lZGlhLCDQvmJqZWN0c0ZpbHRlcik7XHJcbiAgfVxyXG59O1xyXG5EeW5hbWljQWRhcHQucHJvdG90eXBlLm1lZGlhSGFuZGxlciA9IGZ1bmN0aW9uIChtYXRjaE1lZGlhLCDQvmJqZWN0cykge1xyXG4gIGlmIChtYXRjaE1lZGlhLm1hdGNoZXMpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwg0L5iamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qg0L5iamVjdCA9INC+YmplY3RzW2ldO1xyXG4gICAgICDQvmJqZWN0LmluZGV4ID0gdGhpcy5pbmRleEluUGFyZW50KNC+YmplY3QucGFyZW50LCDQvmJqZWN0LmVsZW1lbnQpO1xyXG4gICAgICB0aGlzLm1vdmVUbyjQvmJqZWN0LnBsYWNlLCDQvmJqZWN0LmVsZW1lbnQsINC+YmplY3QuZGVzdGluYXRpb24pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICAvL2ZvciAobGV0IGkgPSAwOyBpIDwg0L5iamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGZvciAobGV0IGkgPSDQvmJqZWN0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICBjb25zdCDQvmJqZWN0ID0g0L5iamVjdHNbaV07XHJcbiAgICAgIGlmICjQvmJqZWN0LmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuZGFDbGFzc25hbWUpKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlQmFjayjQvmJqZWN0LnBhcmVudCwg0L5iamVjdC5lbGVtZW50LCDQvmJqZWN0LmluZGV4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5tb3ZlVG8gPSBmdW5jdGlvbiAocGxhY2UsIGVsZW1lbnQsIGRlc3RpbmF0aW9uKSB7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZGFDbGFzc25hbWUpO1xyXG4gIGlmIChwbGFjZSA9PT0gJ2xhc3QnIHx8IHBsYWNlID49IGRlc3RpbmF0aW9uLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgZGVzdGluYXRpb24uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKHBsYWNlID09PSAnZmlyc3QnKSB7XHJcbiAgICBkZXN0aW5hdGlvbi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBlbGVtZW50KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgZGVzdGluYXRpb24uY2hpbGRyZW5bcGxhY2VdLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBlbGVtZW50KTtcclxufTtcclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5tb3ZlQmFjayA9IGZ1bmN0aW9uIChwYXJlbnQsIGVsZW1lbnQsIGluZGV4KSB7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZGFDbGFzc25hbWUpO1xyXG4gIGlmIChwYXJlbnQuY2hpbGRyZW5baW5kZXhdICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHBhcmVudC5jaGlsZHJlbltpbmRleF0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIGVsZW1lbnQpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwYXJlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcclxuICB9XHJcbn07XHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUuaW5kZXhJblBhcmVudCA9IGZ1bmN0aW9uIChwYXJlbnQsIGVsZW1lbnQpIHtcclxuICBjb25zdCBhcnJheSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHBhcmVudC5jaGlsZHJlbik7XHJcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYXJyYXksIGVsZW1lbnQpO1xyXG59O1xyXG5EeW5hbWljQWRhcHQucHJvdG90eXBlLmFycmF5U29ydCA9IGZ1bmN0aW9uIChhcnIpIHtcclxuICBpZiAodGhpcy50eXBlID09PSAnbWluJykge1xyXG4gICAgQXJyYXkucHJvdG90eXBlLnNvcnQuY2FsbChhcnIsIGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgIGlmIChhLmJyZWFrcG9pbnQgPT09IGIuYnJlYWtwb2ludCkge1xyXG4gICAgICAgIGlmIChhLnBsYWNlID09PSBiLnBsYWNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhLnBsYWNlID09PSAnZmlyc3QnIHx8IGIucGxhY2UgPT09ICdsYXN0Jykge1xyXG4gICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGEucGxhY2UgPT09ICdsYXN0JyB8fCBiLnBsYWNlID09PSAnZmlyc3QnKSB7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhLnBsYWNlIC0gYi5wbGFjZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGEuYnJlYWtwb2ludCAtIGIuYnJlYWtwb2ludDtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBBcnJheS5wcm90b3R5cGUuc29ydC5jYWxsKGFyciwgZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgaWYgKGEuYnJlYWtwb2ludCA9PT0gYi5icmVha3BvaW50KSB7XHJcbiAgICAgICAgaWYgKGEucGxhY2UgPT09IGIucGxhY2UpIHtcclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGEucGxhY2UgPT09ICdmaXJzdCcgfHwgYi5wbGFjZSA9PT0gJ2xhc3QnKSB7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhLnBsYWNlID09PSAnbGFzdCcgfHwgYi5wbGFjZSA9PT0gJ2ZpcnN0Jykge1xyXG4gICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGIucGxhY2UgLSBhLnBsYWNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYi5icmVha3BvaW50IC0gYS5icmVha3BvaW50O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59O1xyXG5jb25zdCBkYSA9IG5ldyBEeW5hbWljQWRhcHQoJ21heCcpO1xyXG5kYS5pbml0KCk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvKipcclxuICogc2V0IGhhc2ggdG8gdXJsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2V0SGFzaCA9IGhhc2ggPT4ge1xyXG4gIGhhc2ggPSBoYXNoID8gYCMke2hhc2h9YCA6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMF07XHJcbiAgaGlzdG9yeS5wdXNoU3RhdGUoJycsICcnLCBoYXNoKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBnZXQgaGFzaCBmcm9tIHVybFxyXG4gKiBAcmV0dXJucyBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRIYXNoID0gKCkgPT4ge1xyXG4gIGlmIChsb2NhdGlvbi5oYXNoKSB7XHJcbiAgICByZXR1cm4gbG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIGJvZHkgbG9ja1xyXG5leHBvcnQgbGV0IGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcclxuLyoqXHJcbiAqIHRvZ2dsZXMgYm9keSBsb2NrXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJvZHlMb2NrVG9nZ2xlID0gKGRlbGF5ID0gNTAwKSA9PiB7XHJcbiAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2xvY2snKSkge1xyXG4gICAgYm9keVVubG9jayhkZWxheSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGJvZHlMb2NrKGRlbGF5KTtcclxuICB9XHJcbn07XHJcbi8qKlxyXG4gKiB1bmxvY2tzIGJvZHlcclxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYm9keVVubG9jayA9IChkZWxheSA9IDUwMCkgPT4ge1xyXG4gIGlmIChib2R5TG9ja1N0YXR1cykge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJyk7XHJcbiAgICB9LCBkZWxheSk7XHJcbiAgICBib2R5TG9ja1N0YXR1cyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcclxuICAgIH0sIGRlbGF5KTtcclxuICB9XHJcbn07XHJcbi8qKlxyXG4gKiBsb2NrcyBib2R5XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJvZHlMb2NrID0gKGRlbGF5ID0gNTAwKSA9PiB7XHJcbiAgaWYgKGJvZHlMb2NrU3RhdHVzKSB7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbG9jaycpO1xyXG5cclxuICAgIGJvZHlMb2NrU3RhdHVzID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgYm9keUxvY2tTdGF0dXMgPSB0cnVlO1xyXG4gICAgfSwgZGVsYXkpO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJheVxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGF0YVNldFZhbHVlXHJcbiAqIHByb2Nlc3MgbWVkaWEgcmVxdWVzdHMgZnJvbSBhdHRyaWJ1dGVzXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZGF0YU1lZGlhUXVlcmllcyA9IChhcnJheSwgZGF0YVNldFZhbHVlKSA9PiB7XHJcbiAgLy8gZ2V0IG9iamVjdHMgd2l0aCBtZWRpYSBxdWVyaWVzXHJcbiAgY29uc3QgbWVkaWEgPSBBcnJheS5mcm9tKGFycmF5KS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0sIGluZGV4LCBzZWxmKSB7XHJcbiAgICBpZiAoaXRlbS5kYXRhc2V0W2RhdGFTZXRWYWx1ZV0pIHtcclxuICAgICAgcmV0dXJuIGl0ZW0uZGF0YXNldFtkYXRhU2V0VmFsdWVdLnNwbGl0KCcsJylbMF07XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy8gb2JqZWN0cyB3aXRoIG1lZGlhIHF1ZXJpZXMgaW5pdGlhbGl6YXRpb25cclxuICBpZiAobWVkaWEubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBicmVha3BvaW50c0FycmF5ID0gW107XHJcbiAgICBtZWRpYS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBwYXJhbXMgPSBpdGVtLmRhdGFzZXRbZGF0YVNldFZhbHVlXTtcclxuICAgICAgY29uc3QgYnJlYWtwb2ludCA9IHt9O1xyXG4gICAgICBjb25zdCBwYXJhbXNBcnJheSA9IHBhcmFtcy5zcGxpdCgnLCcpO1xyXG4gICAgICBicmVha3BvaW50LnZhbHVlID0gcGFyYW1zQXJyYXlbMF07XHJcbiAgICAgIGJyZWFrcG9pbnQudHlwZSA9IHBhcmFtc0FycmF5WzFdID8gcGFyYW1zQXJyYXlbMV0udHJpbSgpIDogJ21heCc7XHJcbiAgICAgIGJyZWFrcG9pbnQuaXRlbSA9IGl0ZW07XHJcbiAgICAgIGJyZWFrcG9pbnRzQXJyYXkucHVzaChicmVha3BvaW50KTtcclxuICAgIH0pO1xyXG4gICAgLy8gZ2V0IHVuaXF1ZSBicmVha3BvaW50c1xyXG4gICAgbGV0IG1kUXVlcmllcyA9IGJyZWFrcG9pbnRzQXJyYXkubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgJygnICtcclxuICAgICAgICBpdGVtLnR5cGUgK1xyXG4gICAgICAgICctd2lkdGg6ICcgK1xyXG4gICAgICAgIGl0ZW0udmFsdWUgK1xyXG4gICAgICAgICdweCksJyArXHJcbiAgICAgICAgaXRlbS52YWx1ZSArXHJcbiAgICAgICAgJywnICtcclxuICAgICAgICBpdGVtLnR5cGVcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgbWRRdWVyaWVzID0gdW5pcXVlQXJyYXkobWRRdWVyaWVzKTtcclxuICAgIGNvbnN0IG1kUXVlcmllc0FycmF5ID0gW107XHJcblxyXG4gICAgaWYgKG1kUXVlcmllcy5sZW5ndGgpIHtcclxuICAgICAgLy8gd29yayB3aXRoIGV2ZXJ5IGJyZWFrcG9pbnRcclxuICAgICAgbWRRdWVyaWVzLmZvckVhY2goYnJlYWtwb2ludCA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zQXJyYXkgPSBicmVha3BvaW50LnNwbGl0KCcsJyk7XHJcbiAgICAgICAgY29uc3QgbWVkaWFCcmVha3BvaW50ID0gcGFyYW1zQXJyYXlbMV07XHJcbiAgICAgICAgY29uc3QgbWVkaWFUeXBlID0gcGFyYW1zQXJyYXlbMl07XHJcbiAgICAgICAgY29uc3QgbWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKHBhcmFtc0FycmF5WzBdKTtcclxuICAgICAgICAvLyBvYmplY3RzIHdpdGggY29uZGl0aW9uc1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zQXJyYXkgPSBicmVha3BvaW50c0FycmF5LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPT09IG1lZGlhQnJlYWtwb2ludCAmJiBpdGVtLnR5cGUgPT09IG1lZGlhVHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBtZFF1ZXJpZXNBcnJheS5wdXNoKHtcclxuICAgICAgICAgIGl0ZW1zQXJyYXksXHJcbiAgICAgICAgICBtYXRjaE1lZGlhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIG1kUXVlcmllc0FycmF5O1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBzbW9vdGhseSBzbGlkZXMgdXBcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3dtb3JlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgX3NsaWRlVXAgPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCwgc2hvd21vcmUgPSAwKSA9PiB7XHJcbiAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xyXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ19zbGlkZScpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdoZWlnaHQsIG1hcmdpbiwgcGFkZGluZyc7XHJcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xyXG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGAke3RhcmdldC5vZmZzZXRIZWlnaHR9cHhgO1xyXG4gICAgdGFyZ2V0Lm9mZnNldEhlaWdodDtcclxuICAgIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHNob3dtb3JlID8gYCR7c2hvd21vcmV9cmVtYCA6IGAwYDtcclxuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcclxuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcclxuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRhcmdldC5oaWRkZW4gPSAhc2hvd21vcmUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICFzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JykgOiBudWxsO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpO1xyXG4gICAgICAhc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93JykgOiBudWxsO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XHJcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdfc2xpZGUnKTtcclxuICAgICAgLy8gY3JlYXRlIGV2ZW50XHJcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCdzbGlkZVVwRG9uZScsIHtcclxuICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0sIGR1cmF0aW9uKTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogc21vb3RobHkgc2xpZGVzIGRvd25cclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3dtb3JlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgX3NsaWRlRG93biA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwLCBzaG93bW9yZSA9IDApID0+IHtcclxuICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XHJcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnX3NsaWRlJyk7XHJcbiAgICB0YXJnZXQuaGlkZGVuID0gdGFyZ2V0LmhpZGRlbiA/IGZhbHNlIDogbnVsbDtcclxuICAgIHNob3dtb3JlID8gdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKSA6IG51bGw7XHJcbiAgICBsZXQgaGVpZ2h0ID0gdGFyZ2V0Lm9mZnNldEhlaWdodDtcclxuICAgIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHNob3dtb3JlID8gYCR7c2hvd21vcmV9cmVtYCA6IGAwYDtcclxuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcclxuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcclxuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdoZWlnaHQsIG1hcmdpbiwgcGFkZGluZyc7XHJcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xyXG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJyk7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJyk7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKTtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpO1xyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKTtcclxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ19zbGlkZScpO1xyXG4gICAgICAvLyBjcmVhdGUgZXZlbnRcclxuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ3NsaWRlRG93bkRvbmUnLCB7XHJcbiAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9LCBkdXJhdGlvbik7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIHRvZ2dsZXMgc21vb3RoIHNsaWRlXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxyXG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cclxuICogQHJldHVybnMgZnVuY3Rpb25cclxuICovXHJcbmV4cG9ydCBjb25zdCBfc2xpZGVUb2dnbGUgPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCkgPT4ge1xyXG4gIGlmICh0YXJnZXQuaGlkZGVuKSB7XHJcbiAgICByZXR1cm4gX3NsaWRlRG93bih0YXJnZXQsIGR1cmF0aW9uKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIF9zbGlkZVVwKHRhcmdldCwgZHVyYXRpb24pO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBjb252ZXJ0cyByZW0gdG8gcGl4ZWxzXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSByZW1WYWx1ZVxyXG4gKiBAcmV0dXJucyBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1Ub1B4KHJlbVZhbHVlKSB7XHJcbiAgLy8g0J/QvtC70YPRh9Cw0LXQvCDRgtC10LrRg9GJ0LjQuSDQsdCw0LfQvtCy0YvQuSDRgNCw0LfQvNC10YAg0YjRgNC40YTRgtCwIChmb250LXNpemUpINC40Lcg0Y3Qu9C10LzQtdC90YLQsCA8aHRtbD5cclxuICB2YXIgaHRtbEZvbnRTaXplID0gcGFyc2VGbG9hdChcclxuICAgIGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5mb250U2l6ZVxyXG4gICk7XHJcblxyXG4gIC8vINCf0LXRgNC10LLQvtC00LjQvCDQt9C90LDRh9C10L3QuNC1INC40LcgcmVtINCyIHB4XHJcbiAgdmFyIHB4VmFsdWUgPSByZW1WYWx1ZSAqIGh0bWxGb250U2l6ZTtcclxuXHJcbiAgLy8g0J7QutGA0YPQs9C70Y/QtdC8INC30L3QsNGH0LXQvdC40LUg0LTQviDRhtC10LvRi9GFINC/0LjQutGB0LXQu9C10LkgKNC/0L4g0LbQtdC70LDQvdC40Y4pXHJcbiAgcmV0dXJuIE1hdGgucm91bmQocHhWYWx1ZSkgKyAncHgnO1xyXG59XHJcblxyXG4vLyByZW1vdmUgY2xhc3MgZnJvbSBhbGwgYXJyYXkgZWxlbWVudHNcclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNsYXNzZXMgPSAoYXJyYXksIGNsYXNzTmFtZSkgPT4ge1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgIGFycmF5W2ldLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IGJvZHlMb2NrU3RhdHVzLCBib2R5TG9ja1RvZ2dsZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBtZW51SW5pdCA9ICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpKSB7XG4gICAgICAgIGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKTtcblxuICAgICAgICBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGJvZHlMb2NrU3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ19tZW51LW9wZW5lZCcpO1xuICAgICAgICAgICAgICAgIGJvZHlMb2NrVG9nZ2xlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbm1lbnVJbml0KCk7XG4iLCJpbXBvcnQgeyBfc2xpZGVVcCwgX3NsaWRlRG93biwgX3NsaWRlVG9nZ2xlIH0gZnJvbSAnLi91dGlscy5qcyc7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY2xhc3MgU2VsZWN0IHtcclxuICAgIC8vIHNldHVwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyBjdXN0b20gc2VsZWN0IGNsYXNzZXNcclxuICAgICAgICB0aGlzLmNsYXNzZXMgPSB7XHJcbiAgICAgICAgICAgIC8vIGh0bWwgYnVpbGQgY2xhc3Nlc1xyXG4gICAgICAgICAgICBzZWw6ICdzZWxlY3QnLFxyXG4gICAgICAgICAgICBib2R5OiAnc2VsZWN0X19ib2R5JyxcclxuICAgICAgICAgICAgbGFiZWw6ICdzZWxlY3RfX2xhYmVsJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdzZWxlY3RfX3RpdGxlJyxcclxuICAgICAgICAgICAgdmFsOiAnc2VsZWN0X192YWx1ZScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdzZWxlY3RfX2NvbnRlbnQnLFxyXG4gICAgICAgICAgICBvcHRpb25zOiAnc2VsZWN0X19vcHRpb25zJyxcclxuICAgICAgICAgICAgb3B0aW9uOiAnc2VsZWN0X19vcHRpb24nLFxyXG4gICAgICAgICAgICBzY3JvbGw6ICdzZWxlY3RfX3Njcm9sbCcsXHJcbiAgICAgICAgICAgIGdyb3VwOiAnc2VsZWN0X19ncm91cCcsXHJcbiAgICAgICAgICAgIGlucDogJ3NlbGVjdF9faW5wdXQnLFxyXG4gICAgICAgICAgICBhc3NldDogJ3NlbGVjdF9fYXNzZXQnLFxyXG4gICAgICAgICAgICB0eHQ6ICdzZWxlY3RfX3RleHQnLFxyXG4gICAgICAgICAgICBoaW50OiAnc2VsZWN0X19oaW50JyxcclxuXHJcbiAgICAgICAgICAgIC8vIHN0YXRlIGNsYXNzZXNcclxuICAgICAgICAgICAgYWN0aXZlOiAnX3NlbGVjdC1hY3RpdmUnLFxyXG4gICAgICAgICAgICBmb2N1c2VkOiAnX3NlbGVjdC1mb2N1c2VkJyxcclxuICAgICAgICAgICAgb3BlbmVkOiAnX3NlbGVjdC1vcGVuZWQnLFxyXG4gICAgICAgICAgICBmaWxsZWQ6ICdfc2VsZWN0LWZpbGxlZCcsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkOiAnX3NlbGVjdC1zZWxlY3RlZCcsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiAnX3NlbGVjdC1kaXNhYmxlZCcsXHJcblxyXG4gICAgICAgICAgICAvLyBhZGRpdGlvbmFsIGNsYXNzZXNcclxuICAgICAgICAgICAgbGlzdDogJ19zZWxlY3QtbGlzdCcsXHJcbiAgICAgICAgICAgIGVycm9yOiAnX3NlbGVjdC1lcnJvcicsXHJcbiAgICAgICAgICAgIG11bHRpcGxlOiAnX3NlbGVjdC1tdWx0aXBsZScsXHJcbiAgICAgICAgICAgIGNoZWNrYm94OiAnX3NlbGVjdC1jaGVja2JveCcsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnX3NlbGVjdC1sYWJlbCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBhbGwgc2VsZWN0IGl0ZW1zXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpO1xyXG4gICAgICAgIGlmIChzZWxlY3RMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXQoc2VsZWN0TGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNlbGVjdCBpbml0aWFsaXphdGlvbiAmIGJ1aWxkIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vIGluaXRpYWxpemF0aW9uXHJcbiAgICBpbml0KHNlbGVjdExpc3QpIHtcclxuICAgICAgICAvLyBpbml0XHJcbiAgICAgICAgc2VsZWN0TGlzdC5mb3JFYWNoKChzZWxlY3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygnc3Rhci1yYXRpbmcnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0U2VsSXRlbShzZWxlY3QsIGluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gZXZlbnRzXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgJ2NsaWNrJyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAna2V5ZG93bicsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGlvbnMoZSk7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgJ2ZvY3VzaW4nLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb25zKGUpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgICApO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICdmb2N1c291dCcsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGlvbnMoZSk7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvLyBzaW5nbGUgc2VsZWN0IGl0ZW0gaW5pdGlhbGl6YXRpb25cclxuICAgIGluaXRTZWxJdGVtKHJlbGF0aXZlU2VsLCBpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnNlbCk7XHJcbiAgICAgICAgcmVsYXRpdmVTZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKHJlbGF0aXZlU2VsKTtcclxuICAgICAgICByZWxhdGl2ZVNlbC5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIGluZGV4ID8gKHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSWQgPSBpbmRleCkgOiBudWxsO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkpIHtcclxuICAgICAgICAgICAgcmVsYXRpdmVTZWwuZGF0YXNldC5vcHRQbGFjZWhvbGRlciA9IHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkubGFiZWwuc2hvdykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsVGl0bGUgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbDtcclxuICAgICAgICAgICAgICAgIHNlbFRpdGxlLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAgICAgICAgICAgICAnYWZ0ZXJiZWdpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMubGFiZWx9XCI+JHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkubGFiZWwudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS5sYWJlbC50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTwvc3Bhbj5gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkICE9PSAnMCcpIHtcclxuICAgICAgICAgICAgc2VsZWN0Lmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAgICAgICAgICdiZWZvcmVlbmQnLFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5ib2R5fVwiPjxkaXYgaGlkZGVuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMub3B0aW9uc31cIj48L2Rpdj48L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0Lmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAgICAgICAgICdiZWZvcmVlbmQnLFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5ib2R5fVwiPjxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5vcHRpb25zfVwiPjwvZGl2PjwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYnVpbGQocmVsYXRpdmVTZWwpO1xyXG5cclxuICAgICAgICByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkID0gcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCA/IHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgOiAnMTUwJztcclxuICAgICAgICByZWxhdGl2ZVNlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBfdGhpcy5pbml0U2VsZWN0aW9ucyhlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIHNlbGVjdCBidWlsZFxyXG4gICAgYnVpbGQocmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3QgPSByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IHNlbE9iaiA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8vIHNldCBpZFxyXG4gICAgICAgIHNlbGVjdC5kYXRhc2V0LnNlbElkID0gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxJZDtcclxuICAgICAgICAvLyBzZXQgdmFsdWVcclxuICAgICAgICB0aGlzLnNldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIC8vIHNldCBvcHRpb25zXHJcbiAgICAgICAgdGhpcy5zZXRPcHRpb25zKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIC8vIHNldCBjc3MgbW9kaWZpY2F0b3JcclxuICAgICAgICByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEFkZG9uQ2xhc3NcclxuICAgICAgICAgICAgPyBzZWxlY3QuY2xhc3NMaXN0LmFkZChgc2VsZWN0XyR7cmVsYXRpdmVTZWwuZGF0YXNldC5zZWxBZGRvbkNsYXNzfWApXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAvLyBzZXQgY2xhc3MgaWYgc2VsZWN0IGlzIG11bHRpcGxlXHJcbiAgICAgICAgcmVsYXRpdmVTZWwubXVsdGlwbGVcclxuICAgICAgICAgICAgPyBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMubXVsdGlwbGUpXHJcbiAgICAgICAgICAgIDogc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLm11bHRpcGxlKTtcclxuICAgICAgICAvLyBzZXQgY2xhc3MgaWYgc2VsZWN0IGNoZWNrYm94ZXMgYXJlIHNldFxyXG4gICAgICAgIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtY2hlY2tib3hlcycpICYmIHJlbGF0aXZlU2VsLm11bHRpcGxlXHJcbiAgICAgICAgICAgID8gc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmNoZWNrYm94KVxyXG4gICAgICAgICAgICA6IHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5jaGVja2JveCk7XHJcbiAgICAgICAgLy8gZGlzYWJsZSBzZWxlY3RcclxuICAgICAgICB0aGlzLmRpc2FibGVTZWxlY3Qoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgLy8gc2V0IHNlYXJjaCBhY3Rpb25zIGlmIGRhdGEtc2VsLXNlYXJjaCBpcyBzZXRcclxuICAgICAgICByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNlYXJjaCcpID8gdGhpcy5zZXRTZWFyY2hBY3Rpb25zKHNlbGVjdCkgOiBudWxsO1xyXG4gICAgICAgIC8vIHNldCBzZWxlY3QgYWN0aW9ucyBpZiBpdCdzIGluaXRpYWxseSBvcGVuZWRcclxuICAgICAgICByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLW9wZW5lZCcpID8gdGhpcy5zZXRBY3Rpb24oc2VsZWN0KSA6IG51bGw7XHJcblxyXG4gICAgICAgIC8vIHNldCBzZWxlY3QgaGludFxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnQpIHtcclxuICAgICAgICAgICAgcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICAnYmVmb3JlZW5kJyxcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwic2VsZWN0X19oaW50XCI+JHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnR9PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdmFsaWRhdGUgc2VsZWN0XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmNsb3Nlc3QoJ2Zvcm0nKSkge1xyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5jbG9zZXN0KCdmb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbE9iai5jbGFzc2VzLmZpbGxlZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxPYmouYWRkRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxPYmoucmVtb3ZlRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNob3cgLyBoaWRlIHNlbGVjdGlvbiBmcm9tIHNlbGVjdCB0aXRsZVxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvdy12YWwnKSkge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCgnX3NlbGVjdC1zaG93LXZhbCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdfc2VsZWN0LXNob3ctdmFsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gc2V0IHR3aW4gc2VsZWN0IHRpdGxlIHZhbHVlXHJcbiAgICBzZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsQm9keSA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLmJvZHkpLnR3aW5TZWw7XHJcbiAgICAgICAgY29uc3Qgc2VsVGl0bGUgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbDtcclxuXHJcbiAgICAgICAgaWYgKHNlbFRpdGxlKSBzZWxUaXRsZS5yZW1vdmUoKTtcclxuICAgICAgICBzZWxCb2R5Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHRoaXMuZ2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCkpO1xyXG4gICAgfVxyXG4gICAgLy8gc2V0IHR3aW4gc2VsZWN0IG9wdGlvbnNcclxuICAgIHNldE9wdGlvbnMoc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS50d2luU2VsO1xyXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsT3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnJlbGF0aXZlU2VsO1xyXG5cclxuICAgICAgICBvcHRpb25zLmlubmVySFRNTCA9IHRoaXMuZ2V0T3B0aW9ucyhyZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsT3B0aW9ucy5xdWVyeVNlbGVjdG9yKCdbc2VsZWN0ZWRdJykpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmNsYXNzZXMub3B0aW9ufWApLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnNlbGVjdGVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBkaXNhYmxlIHNlbGVjdFxyXG4gICAgZGlzYWJsZVNlbGVjdChzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLnRpdGxlKS50d2luU2VsLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xyXG4gICAgICAgICAgICB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBtYWluIGFjdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLyBzZXQgbWFpbiBhY3Rpb25zXHJcbiAgICBzZXRBY3Rpb25zKGUpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICBjb25zdCB0eXBlID0gZS50eXBlO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnNlbCkpIHx8XHJcbiAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3QgPSB0YXJnZXQuY2xvc2VzdCgnLnNlbGVjdCcpXHJcbiAgICAgICAgICAgICAgICA/IHRhcmdldC5jbG9zZXN0KCcuc2VsZWN0JylcclxuICAgICAgICAgICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgICAgICAgICAgIGAuJHt0aGlzLmNsYXNzZXMuc2VsfVtkYXRhLXNlbC1pZD1cIiR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMubGlzdCkpLmRhdGFzZXQuc2VsZWN0SWRcclxuICAgICAgICAgICAgICAgICAgICAgIH1cIl1gXHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0KS5yZWxhdGl2ZVNlbDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnY2xpY2snKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlbGF0aXZlU2VsLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxMaXN0ID0gdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMubGlzdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYC4ke3RoaXMuY2xhc3Nlcy5zZWx9W2RhdGEtc2VsLWlkPVwiJHtzZWxMaXN0LmRhdGFzZXQuc2VsSWR9XCJdIC5zZWxlY3RfX29wdGlvbltkYXRhLW9wdC12YWw9XCIke3NlbExpc3QuZGF0YXNldC5vcHRWYWx9XCJdYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE9wdGlvbkFjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsLCBzZWxPcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMudGl0bGUpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGlvbihzZWxlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3B0aW9uKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsT3B0aW9uID0gdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3B0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0T3B0aW9uQWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwsIHNlbE9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdmb2N1c2luJyB8fCB0eXBlID09PSAnZm9jdXNvdXQnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMuc2VsKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2ZvY3VzaW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5mb2N1c2VkKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuZm9jdXNlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5maWxsZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdrZXlkb3duJyAmJiBlLmNvZGUgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlR3JvdXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VHcm91cCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHNldCBzaW5nbGUgc2VsZWN0IGFjdGlvblxyXG4gICAgc2V0QWN0aW9uKHNlbGVjdCkge1xyXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0KS5yZWxhdGl2ZVNlbDtcclxuICAgICAgICBjb25zdCBzZWxPcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykudHdpblNlbDtcclxuXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmNsb3Nlc3QoJ1tkYXRhLW9uZS1zZWxlY3RdJykpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0T25lR3JvdXAgPSByZWxhdGl2ZVNlbC5jbG9zZXN0KCdbZGF0YS1vbmUtc2VsZWN0XScpO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlR3JvdXAoc2VsZWN0T25lR3JvdXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzZWxPcHRpb25zLmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC50b2dnbGUodGhpcy5jbGFzc2VzLm9wZW5lZCk7XHJcbiAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkICE9PSAnMCcpIHtcclxuICAgICAgICAgICAgICAgIF9zbGlkZVRvZ2dsZShzZWxPcHRpb25zLCByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5vcGVuZWQpICYmXHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUnKSAmJlxyXG4gICAgICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuZXJyb3IpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjbG9zZSBzaW5nbGUgc2VsZWN0IGdyb3VwXHJcbiAgICBjbG9zZUdyb3VwKGdyb3VwKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsR3JvdXAgPSBncm91cCA/IGdyb3VwIDogZG9jdW1lbnQ7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IHNlbEdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgIGAke3RoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnNlbCl9JHt0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcGVuZWQpfWBcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChzZWxlY3Rpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZWxlY3Rpb25zLmZvckVhY2goKHNlbGVjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUl0ZW0oc2VsZWN0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY2xvc2Ugc2luZ2xlIHNlbGVjdCBpdGVtXHJcbiAgICBjbG9zZUl0ZW0oc2VsZWN0KSB7XHJcbiAgICAgICAgY29uc3QgcmVsYXRpdmVTZWwgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QpLnJlbGF0aXZlU2VsO1xyXG4gICAgICAgIGNvbnN0IHNlbE9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS50d2luU2VsO1xyXG5cclxuICAgICAgICBpZiAoIXNlbE9wdGlvbnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMub3BlbmVkKTtcclxuICAgICAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgIT09ICcwJykge1xyXG4gICAgICAgICAgICAgICAgX3NsaWRlVXAoc2VsT3B0aW9ucywgcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBzZXQgc2luZ2xlIG9wdGlvbiBhY3Rpb25zXHJcbiAgICBzZXRPcHRpb25BY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCwgb3B0aW9uKSB7XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsZWN0aW9ucyA9IHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHM7XHJcblxyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbGVjdGlvbnMuZm9yRWFjaCgocmVsYXRpdmVTZWxlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlbGF0aXZlU2VsZWN0aW9uLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0d2luU2VsZWN0aW9ucyA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnNlbGVjdGVkKSk7XHJcbiAgICAgICAgICAgIHR3aW5TZWxlY3Rpb25zLmZvckVhY2goKHR3aW5TZWxlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlbGF0aXZlU2VsXHJcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7dHdpblNlbGVjdGlvbi5kYXRhc2V0Lm9wdFZhbH1cIl1gKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIW9wdGlvbi5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLnNlbGVjdGVkKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVsYXRpdmVTZWwucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPVwiJHtvcHRpb24uZGF0YXNldC5vcHRWYWx9XCJdYCkpO1xyXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVTZWxcclxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPVwiJHtvcHRpb24uZGF0YXNldC5vcHRWYWx9XCJdYClcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdF9fb3B0aW9uJylcclxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChvcHQpID0+IG9wdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCkpO1xyXG4gICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBpZiAoIXJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zaG93LXNlbGVjdGlvbicpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoYCR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3B0aW9uKX1baGlkZGVuXWApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoYCR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3B0aW9uKX1baGlkZGVuXWApLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9uLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVsYXRpdmVTZWwudmFsdWUgPSBvcHRpb24uaGFzQXR0cmlidXRlKCdkYXRhLW9wdC12YWwnKVxyXG4gICAgICAgICAgICAgICAgPyBvcHRpb24uZGF0YXNldC5vcHRWYWxcclxuICAgICAgICAgICAgICAgIDogb3B0aW9uLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICB0aGlzLnNldEFjdGlvbihzZWxlY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0aW9ucyhyZWxhdGl2ZVNlbCk7XHJcbiAgICB9XHJcbiAgICAvLyBzZXQgc2VhcmNoIGFjdGlvbnNcclxuICAgIHNldFNlYXJjaEFjdGlvbnMoc2VsZWN0KSB7XHJcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IHNlbElucHV0ID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMuaW5wKS50d2luU2VsO1xyXG4gICAgICAgIGNvbnN0IHNlbE9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS50d2luU2VsLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgIGAuJHt0aGlzLmNsYXNzZXMub3B0aW9ufWBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBzZWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsT3B0aW9ucy5mb3JFYWNoKChzZWxPcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxPcHRpb24udGV4dENvbnRlbnQudG9VcHBlckNhc2UoKS5pbmRleE9mKHNlbElucHV0LnZhbHVlLnRvVXBwZXJDYXNlKCkpID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxPcHRpb24uaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbE9wdGlvbi5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2VsT3B0aW9ucy5oaWRkZW4gPT09IHRydWUgPyBfdGhpcy5zZXRBY3Rpb24oc2VsZWN0KSA6IG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBzZXQgc2VsZWN0IHN1YnRpdGxlXHJcbiAgICBzZXRTdWJ0aXRsZShyZWxhdGl2ZVNlbCkge31cclxuXHJcbiAgICAvLyB2YWxpZGF0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLyBhZGQgYW4gZXJyb3IgdG8gYSBzZWxlY3RcclxuICAgIGFkZEVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KSB7XHJcbiAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmVycm9yKTtcclxuXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsRXJyb3IgJiYgIXJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSGludCkge1xyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAgICAgICAgICdiZWZvcmVlbmQnLFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJzZWxlY3RfX2hpbnRcIj4ke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsRXJyb3J9PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHJlbW92ZSBhbiBlcnJvciBmcm9tIGEgc2VsZWN0XHJcbiAgICByZW1vdmVFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCkge1xyXG4gICAgICAgIGlmIChzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5lcnJvcikpIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdF9faGludCcpICYmICFyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnQpIHtcclxuICAgICAgICAgICAgcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChyZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2hpbnQnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHV0aWxzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vIGdldCBjdXN0b20gY2xhc3NcclxuICAgIGdldENsYXNzKGNzc0NsYXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIGAuJHtjc3NDbGFzc31gO1xyXG4gICAgfVxyXG4gICAgLy8gZ2V0IHNpbmdsZSBzZWxlY3QgaXRlbVxyXG4gICAgZ2V0U2VsZWN0KHNlbGVjdCwgY3NzQ2xhc3MpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbDogc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLFxyXG4gICAgICAgICAgICB0d2luU2VsOiBzZWxlY3QucXVlcnlTZWxlY3Rvcih0aGlzLmdldENsYXNzKGNzc0NsYXNzKSlcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gZ2V0IHNlbGVjdGVkIGl0ZW0gdmFsdWVcclxuICAgIGdldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBsZXQgYXR0cixcclxuICAgICAgICAgICAgYXR0ckNsYXNzLFxyXG4gICAgICAgICAgICB0aXRsZVZhbCA9IHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCwgMikuaHRtbDtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRpdGxlIHZhbHVlXHJcbiAgICAgICAgdGl0bGVWYWwgPSB0aXRsZVZhbC5sZW5ndGhcclxuICAgICAgICAgICAgPyB0aXRsZVZhbFxyXG4gICAgICAgICAgICA6IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsTGFiZWxcclxuICAgICAgICAgICAgPyByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbExhYmVsXHJcbiAgICAgICAgICAgIDogJyc7XHJcblxyXG4gICAgICAgIC8vIHNldCBhY3RpdmUgY2xhc3MgdG8gc2VsZWN0IGlmIGl0IGNvbnRhaW5zIGFueSB2YWx1ZXNcclxuICAgICAgICBpZiAodGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS52YWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5hY3RpdmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5hY3RpdmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2V0IHNlbGVjdCBsYWJlbFxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLWxhYmVsJykpIHtcclxuICAgICAgICAgICAgYXR0ciA9IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsTGFiZWxcclxuICAgICAgICAgICAgICAgID8gYCBkYXRhLXNlbC1sYWJlbD1cIiR7cmVsYXRpdmVTZWwuZGF0YXNldC5zZWxMYWJlbH1cImBcclxuICAgICAgICAgICAgICAgIDogYCBkYXRhLXNlbC1sYWJlbD1cItCS0YvQsdC+0YBcImA7XHJcbiAgICAgICAgICAgIGF0dHJDbGFzcyA9IGAgJHt0aGlzLmNsYXNzZXMubGFiZWx9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHB1c2ggc2VsZWN0aW9ucyB0byB0aGUgbGlzdCBpbnNpZGUgb2Ygc2VsZWN0IHRpdGxlXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLm11bHRpcGxlICYmIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtbGlzdCcpKSB7XHJcbiAgICAgICAgICAgIHRpdGxlVmFsID0gdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKVxyXG4gICAgICAgICAgICAgICAgLmVsZW1lbnRzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAob3B0aW9uKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgPHNwYW4gZGF0YS1vcHQtaWQ9XCIke3NlbGVjdC5kYXRhc2V0LnNlbElkfVwiIGRhdGEtb3B0LXZhbD1cIiR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiIGNsYXNzPVwiX2xpc3QtaXRlbVwiPiR7dGhpcy5nZXRDb250ZW50KG9wdGlvbil9PC9zcGFuPmBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5qb2luKCcnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0Lmxpc3QgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWxhdGl2ZVNlbC5kYXRhc2V0Lmxpc3QpKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlbGF0aXZlU2VsLmRhdGFzZXQubGlzdCkuaW5uZXJIVE1MID0gdGl0bGVWYWw7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1zZWFyY2gnKSkgdGl0bGVWYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaW5pdCBzZWxlY3Qgc2VhcmNoXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtc2VhcmNoJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMudGl0bGV9XCI+PHNwYW4gJHthdHRyfSBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnZhbH1cIj48aW5wdXQgYXV0b2NvbXBsZXRlPVwib2ZmXCIgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiJHt0aXRsZVZhbH1cIiBkYXRhLXBsYWNlaG9sZGVyPVwiJHt0aXRsZVZhbH1cIiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmlucH1cIj48L3NwYW4+PC9kaXY+YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjdXN0b21DbGFzcyA9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpLmVsZW1lbnRzLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS5lbGVtZW50c1swXS5kYXRhc2V0Lm9wdENsYXNzXHJcbiAgICAgICAgICAgICAgICAgICAgPyBgICR7dGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS5lbGVtZW50c1swXS5kYXRhc2V0Lm9wdENsYXNzfWBcclxuICAgICAgICAgICAgICAgICAgICA6ICcnO1xyXG4gICAgICAgICAgICByZXR1cm4gYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMudGl0bGV9XCI+PHNwYW4gJHthdHRyID8gYXR0ciA6ICcnfSBjbGFzcz1cIiR7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzZXMudmFsXHJcbiAgICAgICAgICAgIH0gJHthdHRyQ2xhc3MgPyBhdHRyQ2xhc3MgOiAnJ31cIj48c3BhbiBjbGFzcz1cIiR7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzZXMuY29udGVudFxyXG4gICAgICAgICAgICB9JHtjdXN0b21DbGFzc31cIj4ke3RpdGxlVmFsfTwvc3Bhbj48L3NwYW4+PC9idXR0b24+YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgb3B0aW9uc1xyXG4gICAgZ2V0T3B0aW9ucyhyZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGNvbnN0IHNlbFNjcm9sbCA9IHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtc2Nyb2xsJykgPyBgZGF0YS1zaW1wbGViYXJgIDogJyc7XHJcbiAgICAgICAgbGV0IHNlbFNjcm9sbEhlaWdodCA9IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsU2Nyb2xsXHJcbiAgICAgICAgICAgID8gYHN0eWxlPVwibWF4LWhlaWdodDoke3dpbmRvdy5pbm5lcldpZHRoID4gNzY4ID8gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxTY3JvbGwgOiAyMn1yZW1cImBcclxuICAgICAgICAgICAgOiAnJztcclxuICAgICAgICBsZXQgc2VsT3B0aW9ucyA9IEFycmF5LmZyb20ocmVsYXRpdmVTZWwub3B0aW9ucyk7XHJcblxyXG4gICAgICAgIGlmIChzZWxPcHRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsZXQgc2VsT3B0aW9uc0hUTUwgPSBgYDtcclxuXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICh0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKSAmJiAhdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkuc2hvdykgfHxcclxuICAgICAgICAgICAgICAgIHJlbGF0aXZlU2VsLm11bHRpcGxlXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgc2VsT3B0aW9ucyA9IHNlbE9wdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsT3B0aW9uc0hUTUwgKz0gc2VsU2Nyb2xsXHJcbiAgICAgICAgICAgICAgICA/IGA8ZGl2ICR7c2VsU2Nyb2xsfSAke3NlbFNjcm9sbEhlaWdodH0gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5zY3JvbGx9XCI+YFxyXG4gICAgICAgICAgICAgICAgOiAnJztcclxuICAgICAgICAgICAgc2VsT3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHNlbE9wdGlvbnNIVE1MICs9IHRoaXMuZ2V0T3B0aW9uKG9wdGlvbiwgcmVsYXRpdmVTZWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2VsT3B0aW9uc0hUTUwgKz0gc2VsU2Nyb2xsID8gYDwvZGl2PmAgOiAnJztcclxuICAgICAgICAgICAgcmV0dXJuIHNlbE9wdGlvbnNIVE1MO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGdldCBvcHRpb25cclxuICAgIGdldE9wdGlvbihvcHRpb24sIHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IG9wdGlvbi5zZWxlY3RlZCAmJiByZWxhdGl2ZVNlbC5tdWx0aXBsZSA/IGAgJHt0aGlzLmNsYXNzZXMuc2VsZWN0ZWR9YCA6ICcnO1xyXG4gICAgICAgIGNvbnN0IHNob3dTZWxlY3Rpb24gPVxyXG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgJiYgIXJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zaG93LXNlbGVjdGlvbicpICYmICFyZWxhdGl2ZVNlbC5tdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgPyBgaGlkZGVuYFxyXG4gICAgICAgICAgICAgICAgOiBgYDtcclxuICAgICAgICBjb25zdCBvcHRpb25DbGFzcyA9IG9wdGlvbi5kYXRhc2V0Lm9wdENsYXNzID8gYCAke29wdGlvbi5kYXRhc2V0Lm9wdENsYXNzfWAgOiAnJztcclxuICAgICAgICBjb25zdCBvcHRpb25MaW5rID0gb3B0aW9uLmRhdGFzZXQub3B0aW9uTGluayA/IG9wdGlvbi5kYXRhc2V0Lm9wdGlvbkxpbmsgOiBmYWxzZTtcclxuICAgICAgICBjb25zdCBvcHRpb25MaW5rVGFyZ2V0ID0gb3B0aW9uLmhhc0F0dHJpYnV0ZSgnZGF0YS1vcHRpb24tbGluay10YXJnZXQnKSA/IGB0YXJnZXQ9XCJfYmxhbmtcImAgOiAnJztcclxuICAgICAgICBsZXQgb3B0aW9uSFRNTCA9IGBgO1xyXG5cclxuICAgICAgICBvcHRpb25IVE1MICs9IG9wdGlvbkxpbmtcclxuICAgICAgICAgICAgPyBgPGEgJHtvcHRpb25MaW5rVGFyZ2V0fSAke3Nob3dTZWxlY3Rpb259IGhyZWY9XCIke29wdGlvbkxpbmt9XCIgZGF0YS1vcHQtdmFsPVwiJHtvcHRpb24udmFsdWV9XCIgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5vcHRpb259JHtvcHRpb25DbGFzc30ke3NlbGVjdGlvbnN9XCI+YFxyXG4gICAgICAgICAgICA6IGA8YnV0dG9uICR7c2hvd1NlbGVjdGlvbn0gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5vcHRpb259JHtvcHRpb25DbGFzc30ke3NlbGVjdGlvbnN9XCIgZGF0YS1vcHQtdmFsPVwiJHtvcHRpb24udmFsdWV9XCIgdHlwZT1cImJ1dHRvblwiPmA7XHJcbiAgICAgICAgb3B0aW9uSFRNTCArPSB0aGlzLmdldENvbnRlbnQob3B0aW9uKTtcclxuICAgICAgICBvcHRpb25IVE1MICs9IG9wdGlvbkxpbmsgPyBgPC9hPmAgOiBgPC9idXR0b24+YDtcclxuICAgICAgICByZXR1cm4gb3B0aW9uSFRNTDtcclxuICAgIH1cclxuICAgIC8vIGdldCBzZWxlY3QgY29udGVudFxyXG4gICAgZ2V0Q29udGVudChvcHRpb24pIHtcclxuICAgICAgICBjb25zdCBvcHRpb25EYXRhID0gb3B0aW9uLmRhdGFzZXQub3B0QXNzZXQgPyBgJHtvcHRpb24uZGF0YXNldC5vcHRBc3NldH1gIDogJyc7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uRGF0YUhUTUwgPVxyXG4gICAgICAgICAgICBvcHRpb25EYXRhLmluZGV4T2YoJ2ltZycpID49IDAgPyBgPGltZyBzcmM9XCIke29wdGlvbkRhdGF9XCIgYWx0PVwiXCI+YCA6IG9wdGlvbkRhdGE7XHJcbiAgICAgICAgbGV0IG9wdGlvbkNvbnRlbnRIVE1MID0gYGA7XHJcblxyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5ncm91cH1cIj5gIDogJyc7XHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8c3BhbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmFzc2V0fVwiPmAgOiAnJztcclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gb3B0aW9uRGF0YUhUTUwgOiAnJztcclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDwvc3Bhbj5gIDogJyc7XHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8c3BhbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnR4dH1cIj5gIDogJyc7XHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uLnRleHRDb250ZW50O1xyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPC9zcGFuPmAgOiAnJztcclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDwvc3Bhbj5gIDogJyc7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbkNvbnRlbnRIVE1MO1xyXG4gICAgfVxyXG4gICAgLy8gZ2V0IHNlbGVjdCBwbGFjZWhvbGRlclxyXG4gICAgZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IEFycmF5LmZyb20ocmVsYXRpdmVTZWwub3B0aW9ucykuZmluZCgob3B0aW9uKSA9PiAhb3B0aW9uLnZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnN1YnRpdGxlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBwbGFjZWhvbGRlci50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgICAgIHNob3c6IHBsYWNlaG9sZGVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtcGgtc2hvdycpLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBwbGFjZWhvbGRlci5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXBoJyksXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcGxhY2Vob2xkZXIuZGF0YXNldC5vcHRQbGFjZWhvbGRlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGdldCBzZWxlY3RlZCBvcHRpb25zIGRhdGFcclxuICAgIGdldERhdGEocmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBsZXQgc2VsZWN0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgc2VsZWN0aW9ucyA9IEFycmF5LmZyb20ocmVsYXRpdmVTZWwub3B0aW9ucylcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24uc2VsZWN0ZWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbnMucHVzaChyZWxhdGl2ZVNlbC5vcHRpb25zW3JlbGF0aXZlU2VsLnNlbGVjdGVkSW5kZXhdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZWxlbWVudHM6IHNlbGVjdGlvbnMubWFwKChvcHRpb24pID0+IG9wdGlvbiksXHJcbiAgICAgICAgICAgIHZhbHVlczogc2VsZWN0aW9ucy5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlKS5tYXAoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlKSxcclxuICAgICAgICAgICAgaHRtbDogc2VsZWN0aW9ucy5tYXAoKG9wdGlvbikgPT4gdGhpcy5nZXRDb250ZW50KG9wdGlvbikpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZWxlY3Rpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLyBpbml0IHNlbGVjdGlvbnNcclxuICAgIGluaXRTZWxlY3Rpb25zKGUpIHtcclxuICAgICAgICBjb25zdCByZWxhdGl2ZVNlbCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICB0aGlzLmJ1aWxkKHJlbGF0aXZlU2VsKTtcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGlvbnMocmVsYXRpdmVTZWwpO1xyXG4gICAgfVxyXG4gICAgLy8gc2V0IHNlbGVjdGlvbnNcclxuICAgIHNldFNlbGVjdGlvbnMocmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3QgPSByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXN1Ym1pdCcpICYmIHJlbGF0aXZlU2VsLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHRlbXBCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5jbG9zZXN0KCdmb3JtJykuYXBwZW5kKHRlbXBCdXR0b24pO1xyXG4gICAgICAgICAgICB0ZW1wQnV0dG9uLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIHRlbXBCdXR0b24ucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuZmlsbGVkKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsKTtcclxuICAgIH1cclxuICAgIC8vIGN1c3RvbSBzZWxlY3QgZXZlbnQgKGxpc3RlbiB0byBhbnkgc2VsZWN0aW9ucyAvIG11dGF0aW9ucylcclxuICAgIHNlbGVjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCdzZWxlY3Rpb24nLCB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Q6IHJlbGF0aXZlU2VsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5uZXcgU2VsZWN0KHt9KTtcclxuIiwiaW1wb3J0ICcuLi9zY3NzL3N0eWxlLnNjc3MnO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmb3JtcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIGltcG9ydCAqIGFzIGZvcm1zIGZyb20gJy4vdXRpbHMvZm9ybXMuanMnO1xyXG5cclxuLy8gZm9ybSBmaWVsZHNcclxuLy8gZm9ybXMuZm9ybUZpZWxkc0luaXQoeyB2aWV3UGFzczogZmFsc2UgfSk7XHJcblxyXG4vLyBmb3JtIHN1Ym1pdFxyXG4vLyBmb3Jtcy5mb3JtU3VibWl0KCk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHV0aWxzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy9oYW1idXJnZXJcclxuaW1wb3J0ICcuL3V0aWxzL2hhbWJ1cmdlci5qcyc7XHJcblxyXG4vLyB0YWJzXHJcbi8vIGltcG9ydCAnLi91dGlscy90YWJzLmpzJztcclxuXHJcbi8vIGFjY29yZGlvblxyXG4vLyBpbXBvcnQgJy4vdXRpbHMvYWNjb3JkaW9uLmpzJztcclxuXHJcbi8vIHNlbGVjdFxyXG5pbXBvcnQgJy4vdXRpbHMvc2VsZWN0LmpzJztcclxuXHJcbi8vIG1vZGFsc1xyXG4vLyBpbXBvcnQgJy4vdXRpbHMvbW9kYWxzLmpzJztcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbGlicyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBkeW5hbWljIGRvbVxyXG5pbXBvcnQgJy4vbGlicy9kZC5qcyc7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0ICcuL2Rldi92em1zazEuanMnO1xyXG5pbXBvcnQgJy4vZGV2L21hcmt1c0RNLmpzJztcclxuaW1wb3J0ICcuL2Rldi91a2lrMC5qcyc7XHJcbmltcG9ydCAnLi9kZXYva2llNmVyLmpzJztcclxuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiZXZlbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJEeW5hbWljQWRhcHQiLCJ0eXBlIiwicHJvdG90eXBlIiwiaW5pdCIsIl90aGlzIiwi0L5iamVjdHMiLCJkYUNsYXNzbmFtZSIsIm5vZGVzIiwiaSIsImxlbmd0aCIsIm5vZGUiLCJkYXRhIiwiZGF0YXNldCIsImRhIiwidHJpbSIsImRhdGFBcnJheSIsInNwbGl0Iiwi0L5iamVjdCIsImVsZW1lbnQiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiZGVzdGluYXRpb24iLCJxdWVyeVNlbGVjdG9yIiwiYnJlYWtwb2ludCIsInBsYWNlIiwiaW5kZXgiLCJpbmRleEluUGFyZW50IiwicHVzaCIsImFycmF5U29ydCIsIm1lZGlhUXVlcmllcyIsIkFycmF5IiwibWFwIiwiY2FsbCIsImZpbHRlciIsInNlbGYiLCJpbmRleE9mIiwibWVkaWEiLCJtZWRpYVNwbGl0IiwiU3RyaW5nIiwibWF0Y2hNZWRpYSIsIndpbmRvdyIsIm1lZGlhQnJlYWtwb2ludCIsItC+YmplY3RzRmlsdGVyIiwiYWRkTGlzdGVuZXIiLCJtZWRpYUhhbmRsZXIiLCJtYXRjaGVzIiwibW92ZVRvIiwiY29udGFpbnMiLCJtb3ZlQmFjayIsImFkZCIsImNoaWxkcmVuIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwicmVtb3ZlIiwidW5kZWZpbmVkIiwiYXJyYXkiLCJzbGljZSIsImFyciIsInNvcnQiLCJhIiwiYiIsInNldEhhc2giLCJoYXNoIiwibG9jYXRpb24iLCJocmVmIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImdldEhhc2giLCJyZXBsYWNlIiwiYm9keUxvY2tTdGF0dXMiLCJib2R5TG9ja1RvZ2dsZSIsImRlbGF5IiwiYXJndW1lbnRzIiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keVVubG9jayIsImJvZHlMb2NrIiwic2V0VGltZW91dCIsImRhdGFNZWRpYVF1ZXJpZXMiLCJkYXRhU2V0VmFsdWUiLCJmcm9tIiwiYnJlYWtwb2ludHNBcnJheSIsInBhcmFtcyIsInBhcmFtc0FycmF5IiwidmFsdWUiLCJtZFF1ZXJpZXMiLCJ1bmlxdWVBcnJheSIsIm1kUXVlcmllc0FycmF5IiwibWVkaWFUeXBlIiwiaXRlbXNBcnJheSIsIl9zbGlkZVVwIiwidGFyZ2V0IiwiZHVyYXRpb24iLCJzaG93bW9yZSIsInN0eWxlIiwidHJhbnNpdGlvblByb3BlcnR5IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib3ZlcmZsb3ciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImhpZGRlbiIsInJlbW92ZVByb3BlcnR5IiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiX3NsaWRlRG93biIsIl9zbGlkZVRvZ2dsZSIsInJlbVRvUHgiLCJyZW1WYWx1ZSIsImh0bWxGb250U2l6ZSIsInBhcnNlRmxvYXQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZm9udFNpemUiLCJweFZhbHVlIiwiTWF0aCIsInJvdW5kIiwicmVtb3ZlQ2xhc3NlcyIsImNsYXNzTmFtZSIsIm1lbnVJbml0IiwiaGFtYnVyZ2VyIiwiZSIsIlNlbGVjdCIsImNvbnN0cnVjdG9yIiwiY2xhc3NlcyIsInNlbCIsImJvZHkiLCJsYWJlbCIsInRpdGxlIiwidmFsIiwiY29udGVudCIsIm9wdGlvbnMiLCJvcHRpb24iLCJzY3JvbGwiLCJncm91cCIsImlucCIsImFzc2V0IiwidHh0IiwiaGludCIsImFjdGl2ZSIsImZvY3VzZWQiLCJvcGVuZWQiLCJmaWxsZWQiLCJzZWxlY3RlZCIsImRpc2FibGVkIiwibGlzdCIsImVycm9yIiwibXVsdGlwbGUiLCJjaGVja2JveCIsInNlbGVjdExpc3QiLCJzZWxlY3QiLCJpbml0U2VsSXRlbSIsInNldEFjdGlvbnMiLCJiaW5kIiwicmVsYXRpdmVTZWwiLCJjcmVhdGVFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJzZWxJZCIsImdldFBsYWNlaG9sZGVyIiwib3B0UGxhY2Vob2xkZXIiLCJzaG93Iiwic2VsVGl0bGUiLCJnZXRTZWxlY3QiLCJ0d2luU2VsIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwidGV4dCIsInNwZWVkIiwiYnVpbGQiLCJpbml0U2VsZWN0aW9ucyIsInBhcmVudEVsZW1lbnQiLCJzZWxPYmoiLCJzZXRWYWx1ZSIsInNldE9wdGlvbnMiLCJzZWxBZGRvbkNsYXNzIiwiaGFzQXR0cmlidXRlIiwiZGlzYWJsZVNlbGVjdCIsInNldFNlYXJjaEFjdGlvbnMiLCJzZXRBY3Rpb24iLCJzZWxIaW50IiwiY2xvc2VzdCIsImFkZEVyciIsInJlbW92ZUVyciIsInNlbEJvZHkiLCJnZXRWYWx1ZSIsInJlbGF0aXZlU2VsT3B0aW9ucyIsImlubmVySFRNTCIsImdldE9wdGlvbnMiLCJnZXRDbGFzcyIsInNlbGVjdElkIiwic2VsTGlzdCIsInNlbE9wdGlvbiIsIm9wdFZhbCIsInNldE9wdGlvbkFjdGlvbiIsImNvZGUiLCJjbG9zZUdyb3VwIiwic2VsT3B0aW9ucyIsInNlbGVjdE9uZUdyb3VwIiwic2VsR3JvdXAiLCJzZWxlY3Rpb25zIiwic2VsZWN0aW9uIiwiY2xvc2VJdGVtIiwicmVsYXRpdmVTZWxlY3Rpb25zIiwiZ2V0RGF0YSIsImVsZW1lbnRzIiwicmVsYXRpdmVTZWxlY3Rpb24iLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0d2luU2VsZWN0aW9ucyIsInR3aW5TZWxlY3Rpb24iLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwib3B0IiwidGV4dENvbnRlbnQiLCJzZXRTZWxlY3Rpb25zIiwic2VsSW5wdXQiLCJ0b1VwcGVyQ2FzZSIsInNldFN1YnRpdGxlIiwic2VsRXJyb3IiLCJyZW1vdmVDaGlsZCIsImNzc0NsYXNzIiwiYXR0ciIsImF0dHJDbGFzcyIsInRpdGxlVmFsIiwiaHRtbCIsInNlbExhYmVsIiwidmFsdWVzIiwiZ2V0Q29udGVudCIsImpvaW4iLCJjdXN0b21DbGFzcyIsIm9wdENsYXNzIiwic2VsU2Nyb2xsIiwic2VsU2Nyb2xsSGVpZ2h0IiwiaW5uZXJXaWR0aCIsInNlbE9wdGlvbnNIVE1MIiwiZ2V0T3B0aW9uIiwic2hvd1NlbGVjdGlvbiIsIm9wdGlvbkNsYXNzIiwib3B0aW9uTGluayIsIm9wdGlvbkxpbmtUYXJnZXQiLCJvcHRpb25IVE1MIiwib3B0aW9uRGF0YSIsIm9wdEFzc2V0Iiwib3B0aW9uRGF0YUhUTUwiLCJvcHRpb25Db250ZW50SFRNTCIsInBsYWNlaG9sZGVyIiwiZmluZCIsInN1YnRpdGxlIiwic2VsZWN0ZWRJbmRleCIsInRlbXBCdXR0b24iLCJhcHBlbmQiLCJjbGljayJdLCJzb3VyY2VSb290IjoiIn0=