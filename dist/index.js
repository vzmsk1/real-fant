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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxJQUFJd0ssVUFBVSxHQUFHblEsUUFBUSxDQUFDcUssYUFBYSxDQUFDLFFBQVEsQ0FBQztNQUNqRDhGLFVBQVUsQ0FBQ3pQLElBQUksR0FBRyxRQUFRO01BQzFCMEosV0FBVyxDQUFDMEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDc0UsTUFBTSxDQUFDRCxVQUFVLENBQUM7TUFDOUNBLFVBQVUsQ0FBQ0UsS0FBSyxDQUFDLENBQUM7TUFDbEJGLFVBQVUsQ0FBQ3RNLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZCO0lBQ0F1RyxXQUFXLENBQUNnQixhQUFhLENBQUM3SyxTQUFTLENBQUNtRCxHQUFHLENBQUMsSUFBSSxDQUFDNEUsT0FBTyxDQUFDa0IsTUFBTSxDQUFDO0lBQzVELElBQUksQ0FBQzBELFNBQVMsQ0FBQ2xELE1BQU0sRUFBRUksV0FBVyxDQUFDO0VBQ3ZDO0VBQ0E7RUFDQThDLFNBQVNBLENBQUNsRCxNQUFNLEVBQUVJLFdBQVcsRUFBRTtJQUMzQnBLLFFBQVEsQ0FBQ2lILGFBQWEsQ0FDbEIsSUFBSUMsV0FBVyxDQUFDLFdBQVcsRUFBRTtNQUN6QkMsTUFBTSxFQUFFO1FBQ0o2QyxNQUFNLEVBQUVJO01BQ1o7SUFDSixDQUFDLENBQ0wsQ0FBQztFQUNMO0FBQ0o7QUFDQSxJQUFJaEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7QUNybUJjOztBQUU1Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDOEI7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUMyQjs7QUFFM0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNzQjs7QUFFdEI7O0FBRXlCO0FBQ0U7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9kZXYvdWtpazAuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2xpYnMvZGQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvdXRpbHMvaGFtYnVyZ2VyLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbmF2LWl0ZW0taGVhZGluZycpO1xuXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJy0tYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XHJcbmZ1bmN0aW9uIER5bmFtaWNBZGFwdCh0eXBlKSB7XHJcbiAgdGhpcy50eXBlID0gdHlwZTtcclxufVxyXG5EeW5hbWljQWRhcHQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gIHRoaXMu0L5iamVjdHMgPSBbXTtcclxuICB0aGlzLmRhQ2xhc3NuYW1lID0gJ19keW5hbWljX2FkYXB0Xyc7XHJcbiAgdGhpcy5ub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRhXScpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZXNbaV07XHJcbiAgICBjb25zdCBkYXRhID0gbm9kZS5kYXRhc2V0LmRhLnRyaW0oKTtcclxuICAgIGNvbnN0IGRhdGFBcnJheSA9IGRhdGEuc3BsaXQoJywnKTtcclxuICAgIGNvbnN0INC+YmplY3QgPSB7fTtcclxuICAgINC+YmplY3QuZWxlbWVudCA9IG5vZGU7XHJcbiAgICDQvmJqZWN0LnBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgINC+YmplY3QuZGVzdGluYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRhdGFBcnJheVswXS50cmltKCkpO1xyXG4gICAg0L5iamVjdC5icmVha3BvaW50ID0gZGF0YUFycmF5WzFdID8gZGF0YUFycmF5WzFdLnRyaW0oKSA6ICc3NjcnO1xyXG4gICAg0L5iamVjdC5wbGFjZSA9IGRhdGFBcnJheVsyXSA/IGRhdGFBcnJheVsyXS50cmltKCkgOiAnbGFzdCc7XHJcbiAgICDQvmJqZWN0LmluZGV4ID0gdGhpcy5pbmRleEluUGFyZW50KNC+YmplY3QucGFyZW50LCDQvmJqZWN0LmVsZW1lbnQpO1xyXG4gICAgdGhpcy7QvmJqZWN0cy5wdXNoKNC+YmplY3QpO1xyXG4gIH1cclxuICB0aGlzLmFycmF5U29ydCh0aGlzLtC+YmplY3RzKTtcclxuICB0aGlzLm1lZGlhUXVlcmllcyA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChcclxuICAgIHRoaXMu0L5iamVjdHMsXHJcbiAgICBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICcoJyArXHJcbiAgICAgICAgdGhpcy50eXBlICtcclxuICAgICAgICAnLXdpZHRoOiAnICtcclxuICAgICAgICBpdGVtLmJyZWFrcG9pbnQgK1xyXG4gICAgICAgICdweCksJyArXHJcbiAgICAgICAgaXRlbS5icmVha3BvaW50XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgdGhpc1xyXG4gICk7XHJcbiAgdGhpcy5tZWRpYVF1ZXJpZXMgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoXHJcbiAgICB0aGlzLm1lZGlhUXVlcmllcyxcclxuICAgIGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgc2VsZikge1xyXG4gICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChzZWxmLCBpdGVtKSA9PT0gaW5kZXg7XHJcbiAgICB9XHJcbiAgKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWVkaWFRdWVyaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBtZWRpYSA9IHRoaXMubWVkaWFRdWVyaWVzW2ldO1xyXG4gICAgY29uc3QgbWVkaWFTcGxpdCA9IFN0cmluZy5wcm90b3R5cGUuc3BsaXQuY2FsbChtZWRpYSwgJywnKTtcclxuICAgIGNvbnN0IG1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYVNwbGl0WzBdKTtcclxuICAgIGNvbnN0IG1lZGlhQnJlYWtwb2ludCA9IG1lZGlhU3BsaXRbMV07XHJcbiAgICBjb25zdCDQvmJqZWN0c0ZpbHRlciA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChcclxuICAgICAgdGhpcy7QvmJqZWN0cyxcclxuICAgICAgZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5icmVha3BvaW50ID09PSBtZWRpYUJyZWFrcG9pbnQ7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBtYXRjaE1lZGlhLmFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgX3RoaXMubWVkaWFIYW5kbGVyKG1hdGNoTWVkaWEsINC+YmplY3RzRmlsdGVyKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5tZWRpYUhhbmRsZXIobWF0Y2hNZWRpYSwg0L5iamVjdHNGaWx0ZXIpO1xyXG4gIH1cclxufTtcclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5tZWRpYUhhbmRsZXIgPSBmdW5jdGlvbiAobWF0Y2hNZWRpYSwg0L5iamVjdHMpIHtcclxuICBpZiAobWF0Y2hNZWRpYS5tYXRjaGVzKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8INC+YmplY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0INC+YmplY3QgPSDQvmJqZWN0c1tpXTtcclxuICAgICAg0L5iamVjdC5pbmRleCA9IHRoaXMuaW5kZXhJblBhcmVudCjQvmJqZWN0LnBhcmVudCwg0L5iamVjdC5lbGVtZW50KTtcclxuICAgICAgdGhpcy5tb3ZlVG8o0L5iamVjdC5wbGFjZSwg0L5iamVjdC5lbGVtZW50LCDQvmJqZWN0LmRlc3RpbmF0aW9uKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgLy9mb3IgKGxldCBpID0gMDsgaSA8INC+YmplY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBmb3IgKGxldCBpID0g0L5iamVjdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgY29uc3Qg0L5iamVjdCA9INC+YmplY3RzW2ldO1xyXG4gICAgICBpZiAo0L5iamVjdC5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmRhQ2xhc3NuYW1lKSkge1xyXG4gICAgICAgIHRoaXMubW92ZUJhY2so0L5iamVjdC5wYXJlbnQsINC+YmplY3QuZWxlbWVudCwg0L5iamVjdC5pbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUubW92ZVRvID0gZnVuY3Rpb24gKHBsYWNlLCBlbGVtZW50LCBkZXN0aW5hdGlvbikge1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmRhQ2xhc3NuYW1lKTtcclxuICBpZiAocGxhY2UgPT09ICdsYXN0JyB8fCBwbGFjZSA+PSBkZXN0aW5hdGlvbi5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgIGRlc3RpbmF0aW9uLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZWxlbWVudCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChwbGFjZSA9PT0gJ2ZpcnN0Jykge1xyXG4gICAgZGVzdGluYXRpb24uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgZWxlbWVudCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGRlc3RpbmF0aW9uLmNoaWxkcmVuW3BsYWNlXS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgZWxlbWVudCk7XHJcbn07XHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUubW92ZUJhY2sgPSBmdW5jdGlvbiAocGFyZW50LCBlbGVtZW50LCBpbmRleCkge1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmRhQ2xhc3NuYW1lKTtcclxuICBpZiAocGFyZW50LmNoaWxkcmVuW2luZGV4XSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBwYXJlbnQuY2hpbGRyZW5baW5kZXhdLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBlbGVtZW50KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcGFyZW50Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZWxlbWVudCk7XHJcbiAgfVxyXG59O1xyXG5EeW5hbWljQWRhcHQucHJvdG90eXBlLmluZGV4SW5QYXJlbnQgPSBmdW5jdGlvbiAocGFyZW50LCBlbGVtZW50KSB7XHJcbiAgY29uc3QgYXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChwYXJlbnQuY2hpbGRyZW4pO1xyXG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGFycmF5LCBlbGVtZW50KTtcclxufTtcclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5hcnJheVNvcnQgPSBmdW5jdGlvbiAoYXJyKSB7XHJcbiAgaWYgKHRoaXMudHlwZSA9PT0gJ21pbicpIHtcclxuICAgIEFycmF5LnByb3RvdHlwZS5zb3J0LmNhbGwoYXJyLCBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICBpZiAoYS5icmVha3BvaW50ID09PSBiLmJyZWFrcG9pbnQpIHtcclxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gYi5wbGFjZSkge1xyXG4gICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gJ2ZpcnN0JyB8fCBiLnBsYWNlID09PSAnbGFzdCcpIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhLnBsYWNlID09PSAnbGFzdCcgfHwgYi5wbGFjZSA9PT0gJ2ZpcnN0Jykge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYS5wbGFjZSAtIGIucGxhY2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBhLmJyZWFrcG9pbnQgLSBiLmJyZWFrcG9pbnQ7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgQXJyYXkucHJvdG90eXBlLnNvcnQuY2FsbChhcnIsIGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgIGlmIChhLmJyZWFrcG9pbnQgPT09IGIuYnJlYWtwb2ludCkge1xyXG4gICAgICAgIGlmIChhLnBsYWNlID09PSBiLnBsYWNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhLnBsYWNlID09PSAnZmlyc3QnIHx8IGIucGxhY2UgPT09ICdsYXN0Jykge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gJ2xhc3QnIHx8IGIucGxhY2UgPT09ICdmaXJzdCcpIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBiLnBsYWNlIC0gYS5wbGFjZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGIuYnJlYWtwb2ludCAtIGEuYnJlYWtwb2ludDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufTtcclxuY29uc3QgZGEgPSBuZXcgRHluYW1pY0FkYXB0KCdtYXgnKTtcclxuZGEuaW5pdCgpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLyoqXHJcbiAqIHNldCBoYXNoIHRvIHVybFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldEhhc2ggPSBoYXNoID0+IHtcclxuICBoYXNoID0gaGFzaCA/IGAjJHtoYXNofWAgOiB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnIycpWzBdO1xyXG4gIGhpc3RvcnkucHVzaFN0YXRlKCcnLCAnJywgaGFzaCk7XHJcbn07XHJcblxyXG4vKipcclxuICogZ2V0IGhhc2ggZnJvbSB1cmxcclxuICogQHJldHVybnMgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0SGFzaCA9ICgpID0+IHtcclxuICBpZiAobG9jYXRpb24uaGFzaCkge1xyXG4gICAgcmV0dXJuIGxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBib2R5IGxvY2tcclxuZXhwb3J0IGxldCBib2R5TG9ja1N0YXR1cyA9IHRydWU7XHJcbi8qKlxyXG4gKiB0b2dnbGVzIGJvZHkgbG9ja1xyXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcclxuICovXHJcbmV4cG9ydCBjb25zdCBib2R5TG9ja1RvZ2dsZSA9IChkZWxheSA9IDUwMCkgPT4ge1xyXG4gIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2NrJykpIHtcclxuICAgIGJvZHlVbmxvY2soZGVsYXkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBib2R5TG9jayhkZWxheSk7XHJcbiAgfVxyXG59O1xyXG4vKipcclxuICogdW5sb2NrcyBib2R5XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJvZHlVbmxvY2sgPSAoZGVsYXkgPSA1MDApID0+IHtcclxuICBpZiAoYm9keUxvY2tTdGF0dXMpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpO1xyXG4gICAgfSwgZGVsYXkpO1xyXG4gICAgYm9keUxvY2tTdGF0dXMgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBib2R5TG9ja1N0YXR1cyA9IHRydWU7XHJcbiAgICB9LCBkZWxheSk7XHJcbiAgfVxyXG59O1xyXG4vKipcclxuICogbG9ja3MgYm9keVxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcclxuICovXHJcbmV4cG9ydCBjb25zdCBib2R5TG9jayA9IChkZWxheSA9IDUwMCkgPT4ge1xyXG4gIGlmIChib2R5TG9ja1N0YXR1cykge1xyXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xvY2snKTtcclxuXHJcbiAgICBib2R5TG9ja1N0YXR1cyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcclxuICAgIH0sIGRlbGF5KTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHthcnJheX0gYXJyYXlcclxuICogQHBhcmFtIHtudW1iZXJ9IGRhdGFTZXRWYWx1ZVxyXG4gKiBwcm9jZXNzIG1lZGlhIHJlcXVlc3RzIGZyb20gYXR0cmlidXRlc1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGRhdGFNZWRpYVF1ZXJpZXMgPSAoYXJyYXksIGRhdGFTZXRWYWx1ZSkgPT4ge1xyXG4gIC8vIGdldCBvYmplY3RzIHdpdGggbWVkaWEgcXVlcmllc1xyXG4gIGNvbnN0IG1lZGlhID0gQXJyYXkuZnJvbShhcnJheSkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgc2VsZikge1xyXG4gICAgaWYgKGl0ZW0uZGF0YXNldFtkYXRhU2V0VmFsdWVdKSB7XHJcbiAgICAgIHJldHVybiBpdGVtLmRhdGFzZXRbZGF0YVNldFZhbHVlXS5zcGxpdCgnLCcpWzBdO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8vIG9iamVjdHMgd2l0aCBtZWRpYSBxdWVyaWVzIGluaXRpYWxpemF0aW9uXHJcbiAgaWYgKG1lZGlhLmxlbmd0aCkge1xyXG4gICAgY29uc3QgYnJlYWtwb2ludHNBcnJheSA9IFtdO1xyXG4gICAgbWVkaWEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgcGFyYW1zID0gaXRlbS5kYXRhc2V0W2RhdGFTZXRWYWx1ZV07XHJcbiAgICAgIGNvbnN0IGJyZWFrcG9pbnQgPSB7fTtcclxuICAgICAgY29uc3QgcGFyYW1zQXJyYXkgPSBwYXJhbXMuc3BsaXQoJywnKTtcclxuICAgICAgYnJlYWtwb2ludC52YWx1ZSA9IHBhcmFtc0FycmF5WzBdO1xyXG4gICAgICBicmVha3BvaW50LnR5cGUgPSBwYXJhbXNBcnJheVsxXSA/IHBhcmFtc0FycmF5WzFdLnRyaW0oKSA6ICdtYXgnO1xyXG4gICAgICBicmVha3BvaW50Lml0ZW0gPSBpdGVtO1xyXG4gICAgICBicmVha3BvaW50c0FycmF5LnB1c2goYnJlYWtwb2ludCk7XHJcbiAgICB9KTtcclxuICAgIC8vIGdldCB1bmlxdWUgYnJlYWtwb2ludHNcclxuICAgIGxldCBtZFF1ZXJpZXMgPSBicmVha3BvaW50c0FycmF5Lm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICcoJyArXHJcbiAgICAgICAgaXRlbS50eXBlICtcclxuICAgICAgICAnLXdpZHRoOiAnICtcclxuICAgICAgICBpdGVtLnZhbHVlICtcclxuICAgICAgICAncHgpLCcgK1xyXG4gICAgICAgIGl0ZW0udmFsdWUgK1xyXG4gICAgICAgICcsJyArXHJcbiAgICAgICAgaXRlbS50eXBlXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIG1kUXVlcmllcyA9IHVuaXF1ZUFycmF5KG1kUXVlcmllcyk7XHJcbiAgICBjb25zdCBtZFF1ZXJpZXNBcnJheSA9IFtdO1xyXG5cclxuICAgIGlmIChtZFF1ZXJpZXMubGVuZ3RoKSB7XHJcbiAgICAgIC8vIHdvcmsgd2l0aCBldmVyeSBicmVha3BvaW50XHJcbiAgICAgIG1kUXVlcmllcy5mb3JFYWNoKGJyZWFrcG9pbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtc0FycmF5ID0gYnJlYWtwb2ludC5zcGxpdCgnLCcpO1xyXG4gICAgICAgIGNvbnN0IG1lZGlhQnJlYWtwb2ludCA9IHBhcmFtc0FycmF5WzFdO1xyXG4gICAgICAgIGNvbnN0IG1lZGlhVHlwZSA9IHBhcmFtc0FycmF5WzJdO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShwYXJhbXNBcnJheVswXSk7XHJcbiAgICAgICAgLy8gb2JqZWN0cyB3aXRoIGNvbmRpdGlvbnNcclxuICAgICAgICBjb25zdCBpdGVtc0FycmF5ID0gYnJlYWtwb2ludHNBcnJheS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgIGlmIChpdGVtLnZhbHVlID09PSBtZWRpYUJyZWFrcG9pbnQgJiYgaXRlbS50eXBlID09PSBtZWRpYVR5cGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbWRRdWVyaWVzQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICBpdGVtc0FycmF5LFxyXG4gICAgICAgICAgbWF0Y2hNZWRpYSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBtZFF1ZXJpZXNBcnJheTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogc21vb3RobHkgc2xpZGVzIHVwXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxyXG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cclxuICogQHBhcmFtIHtib29sZWFufSBzaG93bW9yZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IF9zbGlkZVVwID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDAsIHNob3dtb3JlID0gMCkgPT4ge1xyXG4gIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcclxuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdfc2xpZGUnKTtcclxuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmcnO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcclxuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBgJHt0YXJnZXQub2Zmc2V0SGVpZ2h0fXB4YDtcclxuICAgIHRhcmdldC5vZmZzZXRIZWlnaHQ7XHJcbiAgICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBzaG93bW9yZSA/IGAke3Nob3dtb3JlfXJlbWAgOiBgMGA7XHJcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IDA7XHJcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XHJcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gMDtcclxuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0YXJnZXQuaGlkZGVuID0gIXNob3dtb3JlID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAhc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpIDogbnVsbDtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcclxuICAgICAgIXNob3dtb3JlID8gdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpIDogbnVsbDtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xyXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnX3NsaWRlJyk7XHJcbiAgICAgIC8vIGNyZWF0ZSBldmVudFxyXG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgIG5ldyBDdXN0b21FdmVudCgnc2xpZGVVcERvbmUnLCB7XHJcbiAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9LCBkdXJhdGlvbik7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIHNtb290aGx5IHNsaWRlcyBkb3duXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxyXG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cclxuICogQHBhcmFtIHtib29sZWFufSBzaG93bW9yZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IF9zbGlkZURvd24gPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCwgc2hvd21vcmUgPSAwKSA9PiB7XHJcbiAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xyXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ19zbGlkZScpO1xyXG4gICAgdGFyZ2V0LmhpZGRlbiA9IHRhcmdldC5oaWRkZW4gPyBmYWxzZSA6IG51bGw7XHJcbiAgICBzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JykgOiBudWxsO1xyXG4gICAgbGV0IGhlaWdodCA9IHRhcmdldC5vZmZzZXRIZWlnaHQ7XHJcbiAgICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBzaG93bW9yZSA/IGAke3Nob3dtb3JlfXJlbWAgOiBgMGA7XHJcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IDA7XHJcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XHJcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gMDtcclxuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgdGFyZ2V0Lm9mZnNldEhlaWdodDtcclxuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmcnO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcclxuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJyk7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XHJcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdfc2xpZGUnKTtcclxuICAgICAgLy8gY3JlYXRlIGV2ZW50XHJcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCdzbGlkZURvd25Eb25lJywge1xyXG4gICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSwgZHVyYXRpb24pO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiB0b2dnbGVzIHNtb290aCBzbGlkZVxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcclxuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXHJcbiAqIEByZXR1cm5zIGZ1bmN0aW9uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgX3NsaWRlVG9nZ2xlID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDApID0+IHtcclxuICBpZiAodGFyZ2V0LmhpZGRlbikge1xyXG4gICAgcmV0dXJuIF9zbGlkZURvd24odGFyZ2V0LCBkdXJhdGlvbik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBfc2xpZGVVcCh0YXJnZXQsIGR1cmF0aW9uKTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogY29udmVydHMgcmVtIHRvIHBpeGVsc1xyXG4gKiBAcGFyYW0ge251bWJlcn0gcmVtVmFsdWVcclxuICogQHJldHVybnMgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtVG9QeChyZW1WYWx1ZSkge1xyXG4gIC8vINCf0L7Qu9GD0YfQsNC10Lwg0YLQtdC60YPRidC40Lkg0LHQsNC30L7QstGL0Lkg0YDQsNC30LzQtdGAINGI0YDQuNGE0YLQsCAoZm9udC1zaXplKSDQuNC3INGN0LvQtdC80LXQvdGC0LAgPGh0bWw+XHJcbiAgdmFyIGh0bWxGb250U2l6ZSA9IHBhcnNlRmxvYXQoXHJcbiAgICBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZm9udFNpemVcclxuICApO1xyXG5cclxuICAvLyDQn9C10YDQtdCy0L7QtNC40Lwg0LfQvdCw0YfQtdC90LjQtSDQuNC3IHJlbSDQsiBweFxyXG4gIHZhciBweFZhbHVlID0gcmVtVmFsdWUgKiBodG1sRm9udFNpemU7XHJcblxyXG4gIC8vINCe0LrRgNGD0LPQu9GP0LXQvCDQt9C90LDRh9C10L3QuNC1INC00L4g0YbQtdC70YvRhSDQv9C40LrRgdC10LvQtdC5ICjQv9C+INC20LXQu9Cw0L3QuNGOKVxyXG4gIHJldHVybiBNYXRoLnJvdW5kKHB4VmFsdWUpICsgJ3B4JztcclxufVxyXG5cclxuLy8gcmVtb3ZlIGNsYXNzIGZyb20gYWxsIGFycmF5IGVsZW1lbnRzXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDbGFzc2VzID0gKGFycmF5LCBjbGFzc05hbWUpID0+IHtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBhcnJheVtpXS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBib2R5TG9ja1N0YXR1cywgYm9keUxvY2tUb2dnbGUgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgbWVudUluaXQgPSAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKSkge1xuICAgICAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJyk7XG5cbiAgICAgICAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChib2R5TG9ja1N0YXR1cykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdfbWVudS1vcGVuZWQnKTtcbiAgICAgICAgICAgICAgICBib2R5TG9ja1RvZ2dsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5tZW51SW5pdCgpO1xuIiwiaW1wb3J0IHsgX3NsaWRlVXAsIF9zbGlkZURvd24sIF9zbGlkZVRvZ2dsZSB9IGZyb20gJy4vdXRpbHMuanMnO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNsYXNzIFNlbGVjdCB7XHJcbiAgICAvLyBzZXR1cCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl90aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gY3VzdG9tIHNlbGVjdCBjbGFzc2VzXHJcbiAgICAgICAgdGhpcy5jbGFzc2VzID0ge1xyXG4gICAgICAgICAgICAvLyBodG1sIGJ1aWxkIGNsYXNzZXNcclxuICAgICAgICAgICAgc2VsOiAnc2VsZWN0JyxcclxuICAgICAgICAgICAgYm9keTogJ3NlbGVjdF9fYm9keScsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnc2VsZWN0X19sYWJlbCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnc2VsZWN0X190aXRsZScsXHJcbiAgICAgICAgICAgIHZhbDogJ3NlbGVjdF9fdmFsdWUnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnc2VsZWN0X19jb250ZW50JyxcclxuICAgICAgICAgICAgb3B0aW9uczogJ3NlbGVjdF9fb3B0aW9ucycsXHJcbiAgICAgICAgICAgIG9wdGlvbjogJ3NlbGVjdF9fb3B0aW9uJyxcclxuICAgICAgICAgICAgc2Nyb2xsOiAnc2VsZWN0X19zY3JvbGwnLFxyXG4gICAgICAgICAgICBncm91cDogJ3NlbGVjdF9fZ3JvdXAnLFxyXG4gICAgICAgICAgICBpbnA6ICdzZWxlY3RfX2lucHV0JyxcclxuICAgICAgICAgICAgYXNzZXQ6ICdzZWxlY3RfX2Fzc2V0JyxcclxuICAgICAgICAgICAgdHh0OiAnc2VsZWN0X190ZXh0JyxcclxuICAgICAgICAgICAgaGludDogJ3NlbGVjdF9faGludCcsXHJcblxyXG4gICAgICAgICAgICAvLyBzdGF0ZSBjbGFzc2VzXHJcbiAgICAgICAgICAgIGFjdGl2ZTogJ19zZWxlY3QtYWN0aXZlJyxcclxuICAgICAgICAgICAgZm9jdXNlZDogJ19zZWxlY3QtZm9jdXNlZCcsXHJcbiAgICAgICAgICAgIG9wZW5lZDogJ19zZWxlY3Qtb3BlbmVkJyxcclxuICAgICAgICAgICAgZmlsbGVkOiAnX3NlbGVjdC1maWxsZWQnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZDogJ19zZWxlY3Qtc2VsZWN0ZWQnLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogJ19zZWxlY3QtZGlzYWJsZWQnLFxyXG5cclxuICAgICAgICAgICAgLy8gYWRkaXRpb25hbCBjbGFzc2VzXHJcbiAgICAgICAgICAgIGxpc3Q6ICdfc2VsZWN0LWxpc3QnLFxyXG4gICAgICAgICAgICBlcnJvcjogJ19zZWxlY3QtZXJyb3InLFxyXG4gICAgICAgICAgICBtdWx0aXBsZTogJ19zZWxlY3QtbXVsdGlwbGUnLFxyXG4gICAgICAgICAgICBjaGVja2JveDogJ19zZWxlY3QtY2hlY2tib3gnLFxyXG4gICAgICAgICAgICBsYWJlbDogJ19zZWxlY3QtbGFiZWwnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gYWxsIHNlbGVjdCBpdGVtc1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKTtcclxuICAgICAgICBpZiAoc2VsZWN0TGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0KHNlbGVjdExpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzZWxlY3QgaW5pdGlhbGl6YXRpb24gJiBidWlsZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLyBpbml0aWFsaXphdGlvblxyXG4gICAgaW5pdChzZWxlY3RMaXN0KSB7XHJcbiAgICAgICAgLy8gaW5pdFxyXG4gICAgICAgIHNlbGVjdExpc3QuZm9yRWFjaCgoc2VsZWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXItcmF0aW5nJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFNlbEl0ZW0oc2VsZWN0LCBpbmRleCArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGV2ZW50c1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICdjbGljaycsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGlvbnMoZSk7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgJ2tleWRvd24nLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb25zKGUpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgICApO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICdmb2N1c2luJyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAnZm9jdXNvdXQnLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb25zKGUpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgLy8gc2luZ2xlIHNlbGVjdCBpdGVtIGluaXRpYWxpemF0aW9uXHJcbiAgICBpbml0U2VsSXRlbShyZWxhdGl2ZVNlbCwgaW5kZXgpIHtcclxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zZWwpO1xyXG4gICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChyZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgcmVsYXRpdmVTZWwuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICBpbmRleCA/IChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbElkID0gaW5kZXgpIDogbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpKSB7XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLmRhdGFzZXQub3B0UGxhY2Vob2xkZXIgPSB0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLmxhYmVsLnNob3cpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbFRpdGxlID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMudGl0bGUpLnR3aW5TZWw7XHJcbiAgICAgICAgICAgICAgICBzZWxUaXRsZS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FmdGVyYmVnaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGA8c3BhbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmxhYmVsfVwiPiR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLmxhYmVsLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkubGFiZWwudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH08L3NwYW4+YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCAhPT0gJzAnKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICAnYmVmb3JlZW5kJyxcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuYm9keX1cIj48ZGl2IGhpZGRlbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLm9wdGlvbnN9XCI+PC9kaXY+PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICAnYmVmb3JlZW5kJyxcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuYm9keX1cIj48ZGl2IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMub3B0aW9uc31cIj48L2Rpdj48L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJ1aWxkKHJlbGF0aXZlU2VsKTtcclxuXHJcbiAgICAgICAgcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCA9IHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgPyByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkIDogJzE1MCc7XHJcbiAgICAgICAgcmVsYXRpdmVTZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgX3RoaXMuaW5pdFNlbGVjdGlvbnMoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBzZWxlY3QgYnVpbGRcclxuICAgIGJ1aWxkKHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudDtcclxuICAgICAgICBjb25zdCBzZWxPYmogPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyBzZXQgaWRcclxuICAgICAgICBzZWxlY3QuZGF0YXNldC5zZWxJZCA9IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSWQ7XHJcbiAgICAgICAgLy8gc2V0IHZhbHVlXHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKTtcclxuICAgICAgICAvLyBzZXQgb3B0aW9uc1xyXG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyhzZWxlY3QsIHJlbGF0aXZlU2VsKTtcclxuICAgICAgICAvLyBzZXQgY3NzIG1vZGlmaWNhdG9yXHJcbiAgICAgICAgcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxBZGRvbkNsYXNzXHJcbiAgICAgICAgICAgID8gc2VsZWN0LmNsYXNzTGlzdC5hZGQoYHNlbGVjdF8ke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsQWRkb25DbGFzc31gKVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgLy8gc2V0IGNsYXNzIGlmIHNlbGVjdCBpcyBtdWx0aXBsZVxyXG4gICAgICAgIHJlbGF0aXZlU2VsLm11bHRpcGxlXHJcbiAgICAgICAgICAgID8gc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLm11bHRpcGxlKVxyXG4gICAgICAgICAgICA6IHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5tdWx0aXBsZSk7XHJcbiAgICAgICAgLy8gc2V0IGNsYXNzIGlmIHNlbGVjdCBjaGVja2JveGVzIGFyZSBzZXRcclxuICAgICAgICByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLWNoZWNrYm94ZXMnKSAmJiByZWxhdGl2ZVNlbC5tdWx0aXBsZVxyXG4gICAgICAgICAgICA/IHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5jaGVja2JveClcclxuICAgICAgICAgICAgOiBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuY2hlY2tib3gpO1xyXG4gICAgICAgIC8vIGRpc2FibGUgc2VsZWN0XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlU2VsZWN0KHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIC8vIHNldCBzZWFyY2ggYWN0aW9ucyBpZiBkYXRhLXNlbC1zZWFyY2ggaXMgc2V0XHJcbiAgICAgICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1zZWFyY2gnKSA/IHRoaXMuc2V0U2VhcmNoQWN0aW9ucyhzZWxlY3QpIDogbnVsbDtcclxuICAgICAgICAvLyBzZXQgc2VsZWN0IGFjdGlvbnMgaWYgaXQncyBpbml0aWFsbHkgb3BlbmVkXHJcbiAgICAgICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1vcGVuZWQnKSA/IHRoaXMuc2V0QWN0aW9uKHNlbGVjdCkgOiBudWxsO1xyXG5cclxuICAgICAgICAvLyBzZXQgc2VsZWN0IGhpbnRcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50KSB7XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgICAgICAgICAgJ2JlZm9yZWVuZCcsXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInNlbGVjdF9faGludFwiPiR7cmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50fTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHZhbGlkYXRlIHNlbGVjdFxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5jbG9zZXN0KCdmb3JtJykpIHtcclxuICAgICAgICAgICAgcmVsYXRpdmVTZWwuY2xvc2VzdCgnZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyhzZWxPYmouY2xhc3Nlcy5maWxsZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsT2JqLmFkZEVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsT2JqLnJlbW92ZUVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzaG93IC8gaGlkZSBzZWxlY3Rpb24gZnJvbSBzZWxlY3QgdGl0bGVcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNob3ctdmFsJykpIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ19zZWxlY3Qtc2hvdy12YWwnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnX3NlbGVjdC1zaG93LXZhbCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHNldCB0d2luIHNlbGVjdCB0aXRsZSB2YWx1ZVxyXG4gICAgc2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGNvbnN0IHNlbEJvZHkgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5ib2R5KS50d2luU2VsO1xyXG4gICAgICAgIGNvbnN0IHNlbFRpdGxlID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMudGl0bGUpLnR3aW5TZWw7XHJcblxyXG4gICAgICAgIGlmIChzZWxUaXRsZSkgc2VsVGl0bGUucmVtb3ZlKCk7XHJcbiAgICAgICAgc2VsQm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aGlzLmdldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpKTtcclxuICAgIH1cclxuICAgIC8vIHNldCB0d2luIHNlbGVjdCBvcHRpb25zXHJcbiAgICBzZXRPcHRpb25zKHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykudHdpblNlbDtcclxuICAgICAgICBjb25zdCByZWxhdGl2ZVNlbE9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS5yZWxhdGl2ZVNlbDtcclxuXHJcbiAgICAgICAgb3B0aW9ucy5pbm5lckhUTUwgPSB0aGlzLmdldE9wdGlvbnMocmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbE9wdGlvbnMucXVlcnlTZWxlY3RvcignW3NlbGVjdGVkXScpKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5jbGFzc2VzLm9wdGlvbn1gKS5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZGlzYWJsZSBzZWxlY3RcclxuICAgIGRpc2FibGVTZWxlY3Qoc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xyXG4gICAgICAgICAgICB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMudGl0bGUpLnR3aW5TZWwuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbWFpbiBhY3Rpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLy8gc2V0IG1haW4gYWN0aW9uc1xyXG4gICAgc2V0QWN0aW9ucyhlKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IGUudHlwZTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5zZWwpKSB8fFxyXG4gICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5saXN0KSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gdGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3QnKVxyXG4gICAgICAgICAgICAgICAgPyB0YXJnZXQuY2xvc2VzdCgnLnNlbGVjdCcpXHJcbiAgICAgICAgICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICBgLiR7dGhpcy5jbGFzc2VzLnNlbH1bZGF0YS1zZWwtaWQ9XCIke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKS5kYXRhc2V0LnNlbGVjdElkXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XCJdYFxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCByZWxhdGl2ZVNlbCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCkucmVsYXRpdmVTZWw7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2NsaWNrJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZWxhdGl2ZVNlbC5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5saXN0KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsTGlzdCA9IHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAuJHt0aGlzLmNsYXNzZXMuc2VsfVtkYXRhLXNlbC1pZD1cIiR7c2VsTGlzdC5kYXRhc2V0LnNlbElkfVwiXSAuc2VsZWN0X19vcHRpb25bZGF0YS1vcHQtdmFsPVwiJHtzZWxMaXN0LmRhdGFzZXQub3B0VmFsfVwiXWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25BY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCwgc2VsT3B0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnRpdGxlKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb24oc2VsZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wdGlvbikpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbE9wdGlvbiA9IHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE9wdGlvbkFjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsLCBzZWxPcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnZm9jdXNpbicgfHwgdHlwZSA9PT0gJ2ZvY3Vzb3V0Jykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnNlbCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdmb2N1c2luJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuZm9jdXNlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmZvY3VzZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuZmlsbGVkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAna2V5ZG93bicgJiYgZS5jb2RlID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUdyb3VwKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlR3JvdXAoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBzZXQgc2luZ2xlIHNlbGVjdCBhY3Rpb25cclxuICAgIHNldEFjdGlvbihzZWxlY3QpIHtcclxuICAgICAgICBjb25zdCByZWxhdGl2ZVNlbCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCkucmVsYXRpdmVTZWw7XHJcbiAgICAgICAgY29uc3Qgc2VsT3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnR3aW5TZWw7XHJcblxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5jbG9zZXN0KCdbZGF0YS1vbmUtc2VsZWN0XScpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdE9uZUdyb3VwID0gcmVsYXRpdmVTZWwuY2xvc2VzdCgnW2RhdGEtb25lLXNlbGVjdF0nKTtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZUdyb3VwKHNlbGVjdE9uZUdyb3VwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2VsT3B0aW9ucy5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuY2xhc3Nlcy5vcGVuZWQpO1xyXG4gICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCAhPT0gJzAnKSB7XHJcbiAgICAgICAgICAgICAgICBfc2xpZGVUb2dnbGUoc2VsT3B0aW9ucywgcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMub3BlbmVkKSAmJlxyXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlJykgJiZcclxuICAgICAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLmVycm9yKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY2xvc2Ugc2luZ2xlIHNlbGVjdCBncm91cFxyXG4gICAgY2xvc2VHcm91cChncm91cCkge1xyXG4gICAgICAgIGNvbnN0IHNlbEdyb3VwID0gZ3JvdXAgPyBncm91cCA6IGRvY3VtZW50O1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSBzZWxHcm91cC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICBgJHt0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5zZWwpfSR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3BlbmVkKX1gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoc2VsZWN0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc2VsZWN0aW9ucy5mb3JFYWNoKChzZWxlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VJdGVtKHNlbGVjdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNsb3NlIHNpbmdsZSBzZWxlY3QgaXRlbVxyXG4gICAgY2xvc2VJdGVtKHNlbGVjdCkge1xyXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0KS5yZWxhdGl2ZVNlbDtcclxuICAgICAgICBjb25zdCBzZWxPcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykudHdpblNlbDtcclxuXHJcbiAgICAgICAgaWYgKCFzZWxPcHRpb25zLmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLm9wZW5lZCk7XHJcbiAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkICE9PSAnMCcpIHtcclxuICAgICAgICAgICAgICAgIF9zbGlkZVVwKHNlbE9wdGlvbnMsIHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gc2V0IHNpbmdsZSBvcHRpb24gYWN0aW9uc1xyXG4gICAgc2V0T3B0aW9uQWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwsIG9wdGlvbikge1xyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBjb25zdCByZWxhdGl2ZVNlbGVjdGlvbnMgPSB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpLmVsZW1lbnRzO1xyXG5cclxuICAgICAgICAgICAgcmVsYXRpdmVTZWxlY3Rpb25zLmZvckVhY2goKHJlbGF0aXZlU2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbGVjdGlvbi5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdHdpblNlbGVjdGlvbnMgPSBzZWxlY3QucXVlcnlTZWxlY3RvckFsbCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCkpO1xyXG4gICAgICAgICAgICB0d2luU2VsZWN0aW9ucy5mb3JFYWNoKCh0d2luU2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbFxyXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBvcHRpb25bdmFsdWU9XCIke3R3aW5TZWxlY3Rpb24uZGF0YXNldC5vcHRWYWx9XCJdYClcclxuICAgICAgICAgICAgICAgICAgICAuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFvcHRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlbGF0aXZlU2VsLnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7b3B0aW9uLmRhdGFzZXQub3B0VmFsfVwiXWApKTtcclxuICAgICAgICAgICAgICAgIHJlbGF0aXZlU2VsXHJcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7b3B0aW9uLmRhdGFzZXQub3B0VmFsfVwiXWApXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RfX29wdGlvbicpXHJcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgob3B0KSA9PiBvcHQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpKTtcclxuICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnNlbGVjdGVkKTtcclxuICAgICAgICAgICAgaWYgKCFyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvdy1zZWxlY3Rpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdC5xdWVyeVNlbGVjdG9yKGAke3RoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wdGlvbil9W2hpZGRlbl1gKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdC5xdWVyeVNlbGVjdG9yKGAke3RoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wdGlvbil9W2hpZGRlbl1gKS5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9wdGlvbi5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLnZhbHVlID0gb3B0aW9uLmhhc0F0dHJpYnV0ZSgnZGF0YS1vcHQtdmFsJylcclxuICAgICAgICAgICAgICAgID8gb3B0aW9uLmRhdGFzZXQub3B0VmFsXHJcbiAgICAgICAgICAgICAgICA6IG9wdGlvbi50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb24oc2VsZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKTtcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGlvbnMocmVsYXRpdmVTZWwpO1xyXG4gICAgfVxyXG4gICAgLy8gc2V0IHNlYXJjaCBhY3Rpb25zXHJcbiAgICBzZXRTZWFyY2hBY3Rpb25zKHNlbGVjdCkge1xyXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgICAgICBjb25zdCBzZWxJbnB1dCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLmlucCkudHdpblNlbDtcclxuICAgICAgICBjb25zdCBzZWxPcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykudHdpblNlbC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICBgLiR7dGhpcy5jbGFzc2VzLm9wdGlvbn1gXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2VsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbE9wdGlvbnMuZm9yRWFjaCgoc2VsT3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsT3B0aW9uLnRleHRDb250ZW50LnRvVXBwZXJDYXNlKCkuaW5kZXhPZihzZWxJbnB1dC52YWx1ZS50b1VwcGVyQ2FzZSgpKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsT3B0aW9uLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxPcHRpb24uaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNlbE9wdGlvbnMuaGlkZGVuID09PSB0cnVlID8gX3RoaXMuc2V0QWN0aW9uKHNlbGVjdCkgOiBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gc2V0IHNlbGVjdCBzdWJ0aXRsZVxyXG4gICAgc2V0U3VidGl0bGUocmVsYXRpdmVTZWwpIHt9XHJcblxyXG4gICAgLy8gdmFsaWRhdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLy8gYWRkIGFuIGVycm9yIHRvIGEgc2VsZWN0XHJcbiAgICBhZGRFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCkge1xyXG4gICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5lcnJvcik7XHJcblxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEVycm9yICYmICFyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnQpIHtcclxuICAgICAgICAgICAgcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICAnYmVmb3JlZW5kJyxcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwic2VsZWN0X19oaW50XCI+JHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEVycm9yfTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyByZW1vdmUgYW4gZXJyb3IgZnJvbSBhIHNlbGVjdFxyXG4gICAgcmVtb3ZlRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpIHtcclxuICAgICAgICBpZiAoc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuZXJyb3IpKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5lcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2hpbnQnKSAmJiAhcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50KSB7XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19oaW50JykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB1dGlscyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLyBnZXQgY3VzdG9tIGNsYXNzXHJcbiAgICBnZXRDbGFzcyhjc3NDbGFzcykge1xyXG4gICAgICAgIHJldHVybiBgLiR7Y3NzQ2xhc3N9YDtcclxuICAgIH1cclxuICAgIC8vIGdldCBzaW5nbGUgc2VsZWN0IGl0ZW1cclxuICAgIGdldFNlbGVjdChzZWxlY3QsIGNzc0NsYXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVsYXRpdmVTZWw6IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSxcclxuICAgICAgICAgICAgdHdpblNlbDogc2VsZWN0LnF1ZXJ5U2VsZWN0b3IodGhpcy5nZXRDbGFzcyhjc3NDbGFzcykpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vIGdldCBzZWxlY3RlZCBpdGVtIHZhbHVlXHJcbiAgICBnZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgbGV0IGF0dHIsXHJcbiAgICAgICAgICAgIGF0dHJDbGFzcyxcclxuICAgICAgICAgICAgdGl0bGVWYWwgPSB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwsIDIpLmh0bWw7XHJcblxyXG4gICAgICAgIC8vIHNldCB0aXRsZSB2YWx1ZVxyXG4gICAgICAgIHRpdGxlVmFsID0gdGl0bGVWYWwubGVuZ3RoXHJcbiAgICAgICAgICAgID8gdGl0bGVWYWxcclxuICAgICAgICAgICAgOiByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbExhYmVsXHJcbiAgICAgICAgICAgID8gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxMYWJlbFxyXG4gICAgICAgICAgICA6ICcnO1xyXG5cclxuICAgICAgICAvLyBzZXQgYWN0aXZlIGNsYXNzIHRvIHNlbGVjdCBpZiBpdCBjb250YWlucyBhbnkgdmFsdWVzXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkudmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuYWN0aXZlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuYWN0aXZlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNldCBzZWxlY3QgbGFiZWxcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1sYWJlbCcpKSB7XHJcbiAgICAgICAgICAgIGF0dHIgPSByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbExhYmVsXHJcbiAgICAgICAgICAgICAgICA/IGAgZGF0YS1zZWwtbGFiZWw9XCIke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsTGFiZWx9XCJgXHJcbiAgICAgICAgICAgICAgICA6IGAgZGF0YS1zZWwtbGFiZWw9XCLQktGL0LHQvtGAXCJgO1xyXG4gICAgICAgICAgICBhdHRyQ2xhc3MgPSBgICR7dGhpcy5jbGFzc2VzLmxhYmVsfWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwdXNoIHNlbGVjdGlvbnMgdG8gdGhlIGxpc3QgaW5zaWRlIG9mIHNlbGVjdCB0aXRsZVxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5tdWx0aXBsZSAmJiByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLWxpc3QnKSkge1xyXG4gICAgICAgICAgICB0aXRsZVZhbCA9IHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbClcclxuICAgICAgICAgICAgICAgIC5lbGVtZW50cy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgKG9wdGlvbikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYDxzcGFuIGRhdGEtb3B0LWlkPVwiJHtzZWxlY3QuZGF0YXNldC5zZWxJZH1cIiBkYXRhLW9wdC12YWw9XCIke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIiBjbGFzcz1cIl9saXN0LWl0ZW1cIj4ke3RoaXMuZ2V0Q29udGVudChvcHRpb24pfTwvc3Bhbj5gXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuam9pbignJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5saXN0ICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVsYXRpdmVTZWwuZGF0YXNldC5saXN0KSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWxhdGl2ZVNlbC5kYXRhc2V0Lmxpc3QpLmlubmVySFRNTCA9IHRpdGxlVmFsO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtc2VhcmNoJykpIHRpdGxlVmFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGluaXQgc2VsZWN0IHNlYXJjaFxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNlYXJjaCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnRpdGxlfVwiPjxzcGFuICR7YXR0cn0gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy52YWx9XCI+PGlucHV0IGF1dG9jb21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIiR7dGl0bGVWYWx9XCIgZGF0YS1wbGFjZWhvbGRlcj1cIiR7dGl0bGVWYWx9XCIgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5pbnB9XCI+PC9zcGFuPjwvZGl2PmA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY3VzdG9tQ2xhc3MgPVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS5lbGVtZW50cy5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHNbMF0uZGF0YXNldC5vcHRDbGFzc1xyXG4gICAgICAgICAgICAgICAgICAgID8gYCAke3RoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHNbMF0uZGF0YXNldC5vcHRDbGFzc31gXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnJztcclxuICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnRpdGxlfVwiPjxzcGFuICR7YXR0ciA/IGF0dHIgOiAnJ30gY2xhc3M9XCIke1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzLnZhbFxyXG4gICAgICAgICAgICB9ICR7YXR0ckNsYXNzID8gYXR0ckNsYXNzIDogJyd9XCI+PHNwYW4gY2xhc3M9XCIke1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzLmNvbnRlbnRcclxuICAgICAgICAgICAgfSR7Y3VzdG9tQ2xhc3N9XCI+JHt0aXRsZVZhbH08L3NwYW4+PC9zcGFuPjwvYnV0dG9uPmA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZ2V0IG9wdGlvbnNcclxuICAgIGdldE9wdGlvbnMocmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBjb25zdCBzZWxTY3JvbGwgPSByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNjcm9sbCcpID8gYGRhdGEtc2ltcGxlYmFyYCA6ICcnO1xyXG4gICAgICAgIGxldCBzZWxTY3JvbGxIZWlnaHQgPSByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbFNjcm9sbFxyXG4gICAgICAgICAgICA/IGBzdHlsZT1cIm1heC1oZWlnaHQ6JHt3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCA/IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsU2Nyb2xsIDogMjJ9cmVtXCJgXHJcbiAgICAgICAgICAgIDogJyc7XHJcbiAgICAgICAgbGV0IHNlbE9wdGlvbnMgPSBBcnJheS5mcm9tKHJlbGF0aXZlU2VsLm9wdGlvbnMpO1xyXG5cclxuICAgICAgICBpZiAoc2VsT3B0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGV0IHNlbE9wdGlvbnNIVE1MID0gYGA7XHJcblxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAodGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkgJiYgIXRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLnNob3cpIHx8XHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbC5tdWx0aXBsZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHNlbE9wdGlvbnMgPSBzZWxPcHRpb25zLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbE9wdGlvbnNIVE1MICs9IHNlbFNjcm9sbFxyXG4gICAgICAgICAgICAgICAgPyBgPGRpdiAke3NlbFNjcm9sbH0gJHtzZWxTY3JvbGxIZWlnaHR9IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuc2Nyb2xsfVwiPmBcclxuICAgICAgICAgICAgICAgIDogJyc7XHJcbiAgICAgICAgICAgIHNlbE9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxPcHRpb25zSFRNTCArPSB0aGlzLmdldE9wdGlvbihvcHRpb24sIHJlbGF0aXZlU2VsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNlbE9wdGlvbnNIVE1MICs9IHNlbFNjcm9sbCA/IGA8L2Rpdj5gIDogJyc7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxPcHRpb25zSFRNTDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgb3B0aW9uXHJcbiAgICBnZXRPcHRpb24ob3B0aW9uLCByZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSBvcHRpb24uc2VsZWN0ZWQgJiYgcmVsYXRpdmVTZWwubXVsdGlwbGUgPyBgICR7dGhpcy5jbGFzc2VzLnNlbGVjdGVkfWAgOiAnJztcclxuICAgICAgICBjb25zdCBzaG93U2VsZWN0aW9uID1cclxuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkICYmICFyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvdy1zZWxlY3Rpb24nKSAmJiAhcmVsYXRpdmVTZWwubXVsdGlwbGVcclxuICAgICAgICAgICAgICAgID8gYGhpZGRlbmBcclxuICAgICAgICAgICAgICAgIDogYGA7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uQ2xhc3MgPSBvcHRpb24uZGF0YXNldC5vcHRDbGFzcyA/IGAgJHtvcHRpb24uZGF0YXNldC5vcHRDbGFzc31gIDogJyc7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uTGluayA9IG9wdGlvbi5kYXRhc2V0Lm9wdGlvbkxpbmsgPyBvcHRpb24uZGF0YXNldC5vcHRpb25MaW5rIDogZmFsc2U7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uTGlua1RhcmdldCA9IG9wdGlvbi5oYXNBdHRyaWJ1dGUoJ2RhdGEtb3B0aW9uLWxpbmstdGFyZ2V0JykgPyBgdGFyZ2V0PVwiX2JsYW5rXCJgIDogJyc7XHJcbiAgICAgICAgbGV0IG9wdGlvbkhUTUwgPSBgYDtcclxuXHJcbiAgICAgICAgb3B0aW9uSFRNTCArPSBvcHRpb25MaW5rXHJcbiAgICAgICAgICAgID8gYDxhICR7b3B0aW9uTGlua1RhcmdldH0gJHtzaG93U2VsZWN0aW9ufSBocmVmPVwiJHtvcHRpb25MaW5rfVwiIGRhdGEtb3B0LXZhbD1cIiR7b3B0aW9uLnZhbHVlfVwiIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMub3B0aW9ufSR7b3B0aW9uQ2xhc3N9JHtzZWxlY3Rpb25zfVwiPmBcclxuICAgICAgICAgICAgOiBgPGJ1dHRvbiAke3Nob3dTZWxlY3Rpb259IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMub3B0aW9ufSR7b3B0aW9uQ2xhc3N9JHtzZWxlY3Rpb25zfVwiIGRhdGEtb3B0LXZhbD1cIiR7b3B0aW9uLnZhbHVlfVwiIHR5cGU9XCJidXR0b25cIj5gO1xyXG4gICAgICAgIG9wdGlvbkhUTUwgKz0gdGhpcy5nZXRDb250ZW50KG9wdGlvbik7XHJcbiAgICAgICAgb3B0aW9uSFRNTCArPSBvcHRpb25MaW5rID8gYDwvYT5gIDogYDwvYnV0dG9uPmA7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbkhUTUw7XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgc2VsZWN0IGNvbnRlbnRcclxuICAgIGdldENvbnRlbnQob3B0aW9uKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uRGF0YSA9IG9wdGlvbi5kYXRhc2V0Lm9wdEFzc2V0ID8gYCR7b3B0aW9uLmRhdGFzZXQub3B0QXNzZXR9YCA6ICcnO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbkRhdGFIVE1MID1cclxuICAgICAgICAgICAgb3B0aW9uRGF0YS5pbmRleE9mKCdpbWcnKSA+PSAwID8gYDxpbWcgc3JjPVwiJHtvcHRpb25EYXRhfVwiIGFsdD1cIlwiPmAgOiBvcHRpb25EYXRhO1xyXG4gICAgICAgIGxldCBvcHRpb25Db250ZW50SFRNTCA9IGBgO1xyXG5cclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuZ3JvdXB9XCI+YCA6ICcnO1xyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5hc3NldH1cIj5gIDogJyc7XHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IG9wdGlvbkRhdGFIVE1MIDogJyc7XHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8L3NwYW4+YCA6ICcnO1xyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy50eHR9XCI+YCA6ICcnO1xyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbi50ZXh0Q29udGVudDtcclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDwvc3Bhbj5gIDogJyc7XHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8L3NwYW4+YCA6ICcnO1xyXG4gICAgICAgIHJldHVybiBvcHRpb25Db250ZW50SFRNTDtcclxuICAgIH1cclxuICAgIC8vIGdldCBzZWxlY3QgcGxhY2Vob2xkZXJcclxuICAgIGdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBBcnJheS5mcm9tKHJlbGF0aXZlU2VsLm9wdGlvbnMpLmZpbmQoKG9wdGlvbikgPT4gIW9wdGlvbi52YWx1ZSk7XHJcblxyXG4gICAgICAgIGlmIChwbGFjZWhvbGRlcikge1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zdWJ0aXRsZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogcGxhY2Vob2xkZXIudGV4dENvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBzaG93OiBwbGFjZWhvbGRlci5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXBoLXNob3cnKSxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogcGxhY2Vob2xkZXIuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1waCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHBsYWNlaG9sZGVyLmRhdGFzZXQub3B0UGxhY2Vob2xkZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgc2VsZWN0ZWQgb3B0aW9ucyBkYXRhXHJcbiAgICBnZXREYXRhKHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbnMgPSBBcnJheS5mcm9tKHJlbGF0aXZlU2VsLm9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSlcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnNlbGVjdGVkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3Rpb25zLnB1c2gocmVsYXRpdmVTZWwub3B0aW9uc1tyZWxhdGl2ZVNlbC5zZWxlY3RlZEluZGV4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzOiBzZWxlY3Rpb25zLm1hcCgob3B0aW9uKSA9PiBvcHRpb24pLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IHNlbGVjdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSkubWFwKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSksXHJcbiAgICAgICAgICAgIGh0bWw6IHNlbGVjdGlvbnMubWFwKChvcHRpb24pID0+IHRoaXMuZ2V0Q29udGVudChvcHRpb24pKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2VsZWN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLy8gaW5pdCBzZWxlY3Rpb25zXHJcbiAgICBpbml0U2VsZWN0aW9ucyhlKSB7XHJcbiAgICAgICAgY29uc3QgcmVsYXRpdmVTZWwgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgdGhpcy5idWlsZChyZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25zKHJlbGF0aXZlU2VsKTtcclxuICAgIH1cclxuICAgIC8vIHNldCBzZWxlY3Rpb25zXHJcbiAgICBzZXRTZWxlY3Rpb25zKHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zdWJtaXQnKSAmJiByZWxhdGl2ZVNlbC52YWx1ZSkge1xyXG4gICAgICAgICAgICBsZXQgdGVtcEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICB0ZW1wQnV0dG9uLnR5cGUgPSAnc3VibWl0JztcclxuICAgICAgICAgICAgcmVsYXRpdmVTZWwuY2xvc2VzdCgnZm9ybScpLmFwcGVuZCh0ZW1wQnV0dG9uKTtcclxuICAgICAgICAgICAgdGVtcEJ1dHRvbi5jbGljaygpO1xyXG4gICAgICAgICAgICB0ZW1wQnV0dG9uLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmZpbGxlZCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCk7XHJcbiAgICB9XHJcbiAgICAvLyBjdXN0b20gc2VsZWN0IGV2ZW50IChsaXN0ZW4gdG8gYW55IHNlbGVjdGlvbnMgLyBtdXRhdGlvbnMpXHJcbiAgICBzZWxlY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudCgnc2VsZWN0aW9uJywge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0OiByZWxhdGl2ZVNlbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxubmV3IFNlbGVjdCh7fSk7XHJcbiIsImltcG9ydCAnLi4vc2Nzcy9zdHlsZS5zY3NzJztcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZm9ybXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBpbXBvcnQgKiBhcyBmb3JtcyBmcm9tICcuL3V0aWxzL2Zvcm1zLmpzJztcclxuXHJcbi8vIGZvcm0gZmllbGRzXHJcbi8vIGZvcm1zLmZvcm1GaWVsZHNJbml0KHsgdmlld1Bhc3M6IGZhbHNlIH0pO1xyXG5cclxuLy8gZm9ybSBzdWJtaXRcclxuLy8gZm9ybXMuZm9ybVN1Ym1pdCgpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB1dGlscyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vaGFtYnVyZ2VyXHJcbmltcG9ydCAnLi91dGlscy9oYW1idXJnZXIuanMnO1xyXG5cclxuLy8gdGFic1xyXG4vLyBpbXBvcnQgJy4vdXRpbHMvdGFicy5qcyc7XHJcblxyXG4vLyBhY2NvcmRpb25cclxuLy8gaW1wb3J0ICcuL3V0aWxzL2FjY29yZGlvbi5qcyc7XHJcblxyXG4vLyBzZWxlY3RcclxuaW1wb3J0ICcuL3V0aWxzL3NlbGVjdC5qcyc7XHJcblxyXG4vLyBtb2RhbHNcclxuLy8gaW1wb3J0ICcuL3V0aWxzL21vZGFscy5qcyc7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGxpYnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gZHluYW1pYyBkb21cclxuaW1wb3J0ICcuL2xpYnMvZGQuanMnO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCAnLi9kZXYvdnptc2sxLmpzJztcclxuaW1wb3J0ICcuL2Rldi9tYXJrdXNETS5qcyc7XHJcbmltcG9ydCAnLi9kZXYvdWtpazAuanMnO1xyXG5pbXBvcnQgJy4vZGV2L2tpZTZlci5qcyc7XHJcbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsImV2ZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiRHluYW1pY0FkYXB0IiwidHlwZSIsInByb3RvdHlwZSIsImluaXQiLCJfdGhpcyIsItC+YmplY3RzIiwiZGFDbGFzc25hbWUiLCJub2RlcyIsImkiLCJsZW5ndGgiLCJub2RlIiwiZGF0YSIsImRhdGFzZXQiLCJkYSIsInRyaW0iLCJkYXRhQXJyYXkiLCJzcGxpdCIsItC+YmplY3QiLCJlbGVtZW50IiwicGFyZW50IiwicGFyZW50Tm9kZSIsImRlc3RpbmF0aW9uIiwicXVlcnlTZWxlY3RvciIsImJyZWFrcG9pbnQiLCJwbGFjZSIsImluZGV4IiwiaW5kZXhJblBhcmVudCIsInB1c2giLCJhcnJheVNvcnQiLCJtZWRpYVF1ZXJpZXMiLCJBcnJheSIsIm1hcCIsImNhbGwiLCJmaWx0ZXIiLCJzZWxmIiwiaW5kZXhPZiIsIm1lZGlhIiwibWVkaWFTcGxpdCIsIlN0cmluZyIsIm1hdGNoTWVkaWEiLCJ3aW5kb3ciLCJtZWRpYUJyZWFrcG9pbnQiLCLQvmJqZWN0c0ZpbHRlciIsImFkZExpc3RlbmVyIiwibWVkaWFIYW5kbGVyIiwibWF0Y2hlcyIsIm1vdmVUbyIsImNvbnRhaW5zIiwibW92ZUJhY2siLCJhZGQiLCJjaGlsZHJlbiIsImluc2VydEFkamFjZW50RWxlbWVudCIsInJlbW92ZSIsInVuZGVmaW5lZCIsImFycmF5Iiwic2xpY2UiLCJhcnIiLCJzb3J0IiwiYSIsImIiLCJzZXRIYXNoIiwiaGFzaCIsImxvY2F0aW9uIiwiaHJlZiIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJnZXRIYXNoIiwicmVwbGFjZSIsImJvZHlMb2NrU3RhdHVzIiwiYm9keUxvY2tUb2dnbGUiLCJkZWxheSIsImFyZ3VtZW50cyIsImRvY3VtZW50RWxlbWVudCIsImJvZHlVbmxvY2siLCJib2R5TG9jayIsInNldFRpbWVvdXQiLCJkYXRhTWVkaWFRdWVyaWVzIiwiZGF0YVNldFZhbHVlIiwiZnJvbSIsImJyZWFrcG9pbnRzQXJyYXkiLCJwYXJhbXMiLCJwYXJhbXNBcnJheSIsInZhbHVlIiwibWRRdWVyaWVzIiwidW5pcXVlQXJyYXkiLCJtZFF1ZXJpZXNBcnJheSIsIm1lZGlhVHlwZSIsIml0ZW1zQXJyYXkiLCJfc2xpZGVVcCIsInRhcmdldCIsImR1cmF0aW9uIiwic2hvd21vcmUiLCJzdHlsZSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyYW5zaXRpb25EdXJhdGlvbiIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsIm92ZXJmbG93IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJoaWRkZW4iLCJyZW1vdmVQcm9wZXJ0eSIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsIl9zbGlkZURvd24iLCJfc2xpZGVUb2dnbGUiLCJyZW1Ub1B4IiwicmVtVmFsdWUiLCJodG1sRm9udFNpemUiLCJwYXJzZUZsb2F0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImZvbnRTaXplIiwicHhWYWx1ZSIsIk1hdGgiLCJyb3VuZCIsInJlbW92ZUNsYXNzZXMiLCJjbGFzc05hbWUiLCJtZW51SW5pdCIsImhhbWJ1cmdlciIsImUiLCJTZWxlY3QiLCJjb25zdHJ1Y3RvciIsImNsYXNzZXMiLCJzZWwiLCJib2R5IiwibGFiZWwiLCJ0aXRsZSIsInZhbCIsImNvbnRlbnQiLCJvcHRpb25zIiwib3B0aW9uIiwic2Nyb2xsIiwiZ3JvdXAiLCJpbnAiLCJhc3NldCIsInR4dCIsImhpbnQiLCJhY3RpdmUiLCJmb2N1c2VkIiwib3BlbmVkIiwiZmlsbGVkIiwic2VsZWN0ZWQiLCJkaXNhYmxlZCIsImxpc3QiLCJlcnJvciIsIm11bHRpcGxlIiwiY2hlY2tib3giLCJzZWxlY3RMaXN0Iiwic2VsZWN0IiwiaW5pdFNlbEl0ZW0iLCJzZXRBY3Rpb25zIiwiYmluZCIsInJlbGF0aXZlU2VsIiwiY3JlYXRlRWxlbWVudCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic2VsSWQiLCJnZXRQbGFjZWhvbGRlciIsIm9wdFBsYWNlaG9sZGVyIiwic2hvdyIsInNlbFRpdGxlIiwiZ2V0U2VsZWN0IiwidHdpblNlbCIsImluc2VydEFkamFjZW50SFRNTCIsInRleHQiLCJzcGVlZCIsImJ1aWxkIiwiaW5pdFNlbGVjdGlvbnMiLCJwYXJlbnRFbGVtZW50Iiwic2VsT2JqIiwic2V0VmFsdWUiLCJzZXRPcHRpb25zIiwic2VsQWRkb25DbGFzcyIsImhhc0F0dHJpYnV0ZSIsImRpc2FibGVTZWxlY3QiLCJzZXRTZWFyY2hBY3Rpb25zIiwic2V0QWN0aW9uIiwic2VsSGludCIsImNsb3Nlc3QiLCJhZGRFcnIiLCJyZW1vdmVFcnIiLCJzZWxCb2R5IiwiZ2V0VmFsdWUiLCJyZWxhdGl2ZVNlbE9wdGlvbnMiLCJpbm5lckhUTUwiLCJnZXRPcHRpb25zIiwiZ2V0Q2xhc3MiLCJzZWxlY3RJZCIsInNlbExpc3QiLCJzZWxPcHRpb24iLCJvcHRWYWwiLCJzZXRPcHRpb25BY3Rpb24iLCJjb2RlIiwiY2xvc2VHcm91cCIsInNlbE9wdGlvbnMiLCJzZWxlY3RPbmVHcm91cCIsInNlbEdyb3VwIiwic2VsZWN0aW9ucyIsInNlbGVjdGlvbiIsImNsb3NlSXRlbSIsInJlbGF0aXZlU2VsZWN0aW9ucyIsImdldERhdGEiLCJlbGVtZW50cyIsInJlbGF0aXZlU2VsZWN0aW9uIiwicmVtb3ZlQXR0cmlidXRlIiwidHdpblNlbGVjdGlvbnMiLCJ0d2luU2VsZWN0aW9uIiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsIm9wdCIsInRleHRDb250ZW50Iiwic2V0U2VsZWN0aW9ucyIsInNlbElucHV0IiwidG9VcHBlckNhc2UiLCJzZXRTdWJ0aXRsZSIsInNlbEVycm9yIiwicmVtb3ZlQ2hpbGQiLCJjc3NDbGFzcyIsImF0dHIiLCJhdHRyQ2xhc3MiLCJ0aXRsZVZhbCIsImh0bWwiLCJzZWxMYWJlbCIsInZhbHVlcyIsImdldENvbnRlbnQiLCJqb2luIiwiY3VzdG9tQ2xhc3MiLCJvcHRDbGFzcyIsInNlbFNjcm9sbCIsInNlbFNjcm9sbEhlaWdodCIsImlubmVyV2lkdGgiLCJzZWxPcHRpb25zSFRNTCIsImdldE9wdGlvbiIsInNob3dTZWxlY3Rpb24iLCJvcHRpb25DbGFzcyIsIm9wdGlvbkxpbmsiLCJvcHRpb25MaW5rVGFyZ2V0Iiwib3B0aW9uSFRNTCIsIm9wdGlvbkRhdGEiLCJvcHRBc3NldCIsIm9wdGlvbkRhdGFIVE1MIiwib3B0aW9uQ29udGVudEhUTUwiLCJwbGFjZWhvbGRlciIsImZpbmQiLCJzdWJ0aXRsZSIsInNlbGVjdGVkSW5kZXgiLCJ0ZW1wQnV0dG9uIiwiYXBwZW5kIiwiY2xpY2siXSwic291cmNlUm9vdCI6IiJ9