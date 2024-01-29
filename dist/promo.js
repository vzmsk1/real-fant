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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxJQUFJd0ssVUFBVSxHQUFHblEsUUFBUSxDQUFDcUssYUFBYSxDQUFDLFFBQVEsQ0FBQztNQUNqRDhGLFVBQVUsQ0FBQ3pQLElBQUksR0FBRyxRQUFRO01BQzFCMEosV0FBVyxDQUFDMEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDc0UsTUFBTSxDQUFDRCxVQUFVLENBQUM7TUFDOUNBLFVBQVUsQ0FBQ0UsS0FBSyxDQUFDLENBQUM7TUFDbEJGLFVBQVUsQ0FBQ3RNLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZCO0lBQ0F1RyxXQUFXLENBQUNnQixhQUFhLENBQUM3SyxTQUFTLENBQUNtRCxHQUFHLENBQUMsSUFBSSxDQUFDNEUsT0FBTyxDQUFDa0IsTUFBTSxDQUFDO0lBQzVELElBQUksQ0FBQzBELFNBQVMsQ0FBQ2xELE1BQU0sRUFBRUksV0FBVyxDQUFDO0VBQ3ZDO0VBQ0E7RUFDQThDLFNBQVNBLENBQUNsRCxNQUFNLEVBQUVJLFdBQVcsRUFBRTtJQUMzQnBLLFFBQVEsQ0FBQ2lILGFBQWEsQ0FDbEIsSUFBSUMsV0FBVyxDQUFDLFdBQVcsRUFBRTtNQUN6QkMsTUFBTSxFQUFFO1FBQ0o2QyxNQUFNLEVBQUVJO01BQ1o7SUFDSixDQUFDLENBQ0wsQ0FBQztFQUNMO0FBQ0o7QUFDQSxJQUFJaEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7QUNybUJjOztBQUU1Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDOEI7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUMyQjs7QUFFM0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNzQjs7QUFFdEI7O0FBRXlCO0FBQ0U7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9kZXYvdWtpazAuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2xpYnMvZGQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvdXRpbHMvaGFtYnVyZ2VyLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19uYXYtaXRlbS1oZWFkaW5nJyk7XHJcblxyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCctLWFjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbmZ1bmN0aW9uIER5bmFtaWNBZGFwdCh0eXBlKSB7XHJcbiAgdGhpcy50eXBlID0gdHlwZTtcclxufVxyXG5EeW5hbWljQWRhcHQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gIHRoaXMu0L5iamVjdHMgPSBbXTtcclxuICB0aGlzLmRhQ2xhc3NuYW1lID0gJ19keW5hbWljX2FkYXB0Xyc7XHJcbiAgdGhpcy5ub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRhXScpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZXNbaV07XHJcbiAgICBjb25zdCBkYXRhID0gbm9kZS5kYXRhc2V0LmRhLnRyaW0oKTtcclxuICAgIGNvbnN0IGRhdGFBcnJheSA9IGRhdGEuc3BsaXQoJywnKTtcclxuICAgIGNvbnN0INC+YmplY3QgPSB7fTtcclxuICAgINC+YmplY3QuZWxlbWVudCA9IG5vZGU7XHJcbiAgICDQvmJqZWN0LnBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgINC+YmplY3QuZGVzdGluYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRhdGFBcnJheVswXS50cmltKCkpO1xyXG4gICAg0L5iamVjdC5icmVha3BvaW50ID0gZGF0YUFycmF5WzFdID8gZGF0YUFycmF5WzFdLnRyaW0oKSA6ICc3NjcnO1xyXG4gICAg0L5iamVjdC5wbGFjZSA9IGRhdGFBcnJheVsyXSA/IGRhdGFBcnJheVsyXS50cmltKCkgOiAnbGFzdCc7XHJcbiAgICDQvmJqZWN0LmluZGV4ID0gdGhpcy5pbmRleEluUGFyZW50KNC+YmplY3QucGFyZW50LCDQvmJqZWN0LmVsZW1lbnQpO1xyXG4gICAgdGhpcy7QvmJqZWN0cy5wdXNoKNC+YmplY3QpO1xyXG4gIH1cclxuICB0aGlzLmFycmF5U29ydCh0aGlzLtC+YmplY3RzKTtcclxuICB0aGlzLm1lZGlhUXVlcmllcyA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChcclxuICAgIHRoaXMu0L5iamVjdHMsXHJcbiAgICBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICcoJyArXHJcbiAgICAgICAgdGhpcy50eXBlICtcclxuICAgICAgICAnLXdpZHRoOiAnICtcclxuICAgICAgICBpdGVtLmJyZWFrcG9pbnQgK1xyXG4gICAgICAgICdweCksJyArXHJcbiAgICAgICAgaXRlbS5icmVha3BvaW50XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgdGhpc1xyXG4gICk7XHJcbiAgdGhpcy5tZWRpYVF1ZXJpZXMgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoXHJcbiAgICB0aGlzLm1lZGlhUXVlcmllcyxcclxuICAgIGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgc2VsZikge1xyXG4gICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChzZWxmLCBpdGVtKSA9PT0gaW5kZXg7XHJcbiAgICB9XHJcbiAgKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWVkaWFRdWVyaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBtZWRpYSA9IHRoaXMubWVkaWFRdWVyaWVzW2ldO1xyXG4gICAgY29uc3QgbWVkaWFTcGxpdCA9IFN0cmluZy5wcm90b3R5cGUuc3BsaXQuY2FsbChtZWRpYSwgJywnKTtcclxuICAgIGNvbnN0IG1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYVNwbGl0WzBdKTtcclxuICAgIGNvbnN0IG1lZGlhQnJlYWtwb2ludCA9IG1lZGlhU3BsaXRbMV07XHJcbiAgICBjb25zdCDQvmJqZWN0c0ZpbHRlciA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChcclxuICAgICAgdGhpcy7QvmJqZWN0cyxcclxuICAgICAgZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5icmVha3BvaW50ID09PSBtZWRpYUJyZWFrcG9pbnQ7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBtYXRjaE1lZGlhLmFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgX3RoaXMubWVkaWFIYW5kbGVyKG1hdGNoTWVkaWEsINC+YmplY3RzRmlsdGVyKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5tZWRpYUhhbmRsZXIobWF0Y2hNZWRpYSwg0L5iamVjdHNGaWx0ZXIpO1xyXG4gIH1cclxufTtcclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5tZWRpYUhhbmRsZXIgPSBmdW5jdGlvbiAobWF0Y2hNZWRpYSwg0L5iamVjdHMpIHtcclxuICBpZiAobWF0Y2hNZWRpYS5tYXRjaGVzKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8INC+YmplY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0INC+YmplY3QgPSDQvmJqZWN0c1tpXTtcclxuICAgICAg0L5iamVjdC5pbmRleCA9IHRoaXMuaW5kZXhJblBhcmVudCjQvmJqZWN0LnBhcmVudCwg0L5iamVjdC5lbGVtZW50KTtcclxuICAgICAgdGhpcy5tb3ZlVG8o0L5iamVjdC5wbGFjZSwg0L5iamVjdC5lbGVtZW50LCDQvmJqZWN0LmRlc3RpbmF0aW9uKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgLy9mb3IgKGxldCBpID0gMDsgaSA8INC+YmplY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBmb3IgKGxldCBpID0g0L5iamVjdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgY29uc3Qg0L5iamVjdCA9INC+YmplY3RzW2ldO1xyXG4gICAgICBpZiAo0L5iamVjdC5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmRhQ2xhc3NuYW1lKSkge1xyXG4gICAgICAgIHRoaXMubW92ZUJhY2so0L5iamVjdC5wYXJlbnQsINC+YmplY3QuZWxlbWVudCwg0L5iamVjdC5pbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUubW92ZVRvID0gZnVuY3Rpb24gKHBsYWNlLCBlbGVtZW50LCBkZXN0aW5hdGlvbikge1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmRhQ2xhc3NuYW1lKTtcclxuICBpZiAocGxhY2UgPT09ICdsYXN0JyB8fCBwbGFjZSA+PSBkZXN0aW5hdGlvbi5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgIGRlc3RpbmF0aW9uLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZWxlbWVudCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChwbGFjZSA9PT0gJ2ZpcnN0Jykge1xyXG4gICAgZGVzdGluYXRpb24uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgZWxlbWVudCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGRlc3RpbmF0aW9uLmNoaWxkcmVuW3BsYWNlXS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgZWxlbWVudCk7XHJcbn07XHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUubW92ZUJhY2sgPSBmdW5jdGlvbiAocGFyZW50LCBlbGVtZW50LCBpbmRleCkge1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmRhQ2xhc3NuYW1lKTtcclxuICBpZiAocGFyZW50LmNoaWxkcmVuW2luZGV4XSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBwYXJlbnQuY2hpbGRyZW5baW5kZXhdLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBlbGVtZW50KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcGFyZW50Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZWxlbWVudCk7XHJcbiAgfVxyXG59O1xyXG5EeW5hbWljQWRhcHQucHJvdG90eXBlLmluZGV4SW5QYXJlbnQgPSBmdW5jdGlvbiAocGFyZW50LCBlbGVtZW50KSB7XHJcbiAgY29uc3QgYXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChwYXJlbnQuY2hpbGRyZW4pO1xyXG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGFycmF5LCBlbGVtZW50KTtcclxufTtcclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5hcnJheVNvcnQgPSBmdW5jdGlvbiAoYXJyKSB7XHJcbiAgaWYgKHRoaXMudHlwZSA9PT0gJ21pbicpIHtcclxuICAgIEFycmF5LnByb3RvdHlwZS5zb3J0LmNhbGwoYXJyLCBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICBpZiAoYS5icmVha3BvaW50ID09PSBiLmJyZWFrcG9pbnQpIHtcclxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gYi5wbGFjZSkge1xyXG4gICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gJ2ZpcnN0JyB8fCBiLnBsYWNlID09PSAnbGFzdCcpIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhLnBsYWNlID09PSAnbGFzdCcgfHwgYi5wbGFjZSA9PT0gJ2ZpcnN0Jykge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYS5wbGFjZSAtIGIucGxhY2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBhLmJyZWFrcG9pbnQgLSBiLmJyZWFrcG9pbnQ7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgQXJyYXkucHJvdG90eXBlLnNvcnQuY2FsbChhcnIsIGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgIGlmIChhLmJyZWFrcG9pbnQgPT09IGIuYnJlYWtwb2ludCkge1xyXG4gICAgICAgIGlmIChhLnBsYWNlID09PSBiLnBsYWNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhLnBsYWNlID09PSAnZmlyc3QnIHx8IGIucGxhY2UgPT09ICdsYXN0Jykge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gJ2xhc3QnIHx8IGIucGxhY2UgPT09ICdmaXJzdCcpIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBiLnBsYWNlIC0gYS5wbGFjZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGIuYnJlYWtwb2ludCAtIGEuYnJlYWtwb2ludDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufTtcclxuY29uc3QgZGEgPSBuZXcgRHluYW1pY0FkYXB0KCdtYXgnKTtcclxuZGEuaW5pdCgpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLyoqXHJcbiAqIHNldCBoYXNoIHRvIHVybFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldEhhc2ggPSBoYXNoID0+IHtcclxuICBoYXNoID0gaGFzaCA/IGAjJHtoYXNofWAgOiB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnIycpWzBdO1xyXG4gIGhpc3RvcnkucHVzaFN0YXRlKCcnLCAnJywgaGFzaCk7XHJcbn07XHJcblxyXG4vKipcclxuICogZ2V0IGhhc2ggZnJvbSB1cmxcclxuICogQHJldHVybnMgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0SGFzaCA9ICgpID0+IHtcclxuICBpZiAobG9jYXRpb24uaGFzaCkge1xyXG4gICAgcmV0dXJuIGxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBib2R5IGxvY2tcclxuZXhwb3J0IGxldCBib2R5TG9ja1N0YXR1cyA9IHRydWU7XHJcbi8qKlxyXG4gKiB0b2dnbGVzIGJvZHkgbG9ja1xyXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcclxuICovXHJcbmV4cG9ydCBjb25zdCBib2R5TG9ja1RvZ2dsZSA9IChkZWxheSA9IDUwMCkgPT4ge1xyXG4gIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2NrJykpIHtcclxuICAgIGJvZHlVbmxvY2soZGVsYXkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBib2R5TG9jayhkZWxheSk7XHJcbiAgfVxyXG59O1xyXG4vKipcclxuICogdW5sb2NrcyBib2R5XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJvZHlVbmxvY2sgPSAoZGVsYXkgPSA1MDApID0+IHtcclxuICBpZiAoYm9keUxvY2tTdGF0dXMpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpO1xyXG4gICAgfSwgZGVsYXkpO1xyXG4gICAgYm9keUxvY2tTdGF0dXMgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBib2R5TG9ja1N0YXR1cyA9IHRydWU7XHJcbiAgICB9LCBkZWxheSk7XHJcbiAgfVxyXG59O1xyXG4vKipcclxuICogbG9ja3MgYm9keVxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcclxuICovXHJcbmV4cG9ydCBjb25zdCBib2R5TG9jayA9IChkZWxheSA9IDUwMCkgPT4ge1xyXG4gIGlmIChib2R5TG9ja1N0YXR1cykge1xyXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xvY2snKTtcclxuXHJcbiAgICBib2R5TG9ja1N0YXR1cyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcclxuICAgIH0sIGRlbGF5KTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHthcnJheX0gYXJyYXlcclxuICogQHBhcmFtIHtudW1iZXJ9IGRhdGFTZXRWYWx1ZVxyXG4gKiBwcm9jZXNzIG1lZGlhIHJlcXVlc3RzIGZyb20gYXR0cmlidXRlc1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGRhdGFNZWRpYVF1ZXJpZXMgPSAoYXJyYXksIGRhdGFTZXRWYWx1ZSkgPT4ge1xyXG4gIC8vIGdldCBvYmplY3RzIHdpdGggbWVkaWEgcXVlcmllc1xyXG4gIGNvbnN0IG1lZGlhID0gQXJyYXkuZnJvbShhcnJheSkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgc2VsZikge1xyXG4gICAgaWYgKGl0ZW0uZGF0YXNldFtkYXRhU2V0VmFsdWVdKSB7XHJcbiAgICAgIHJldHVybiBpdGVtLmRhdGFzZXRbZGF0YVNldFZhbHVlXS5zcGxpdCgnLCcpWzBdO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8vIG9iamVjdHMgd2l0aCBtZWRpYSBxdWVyaWVzIGluaXRpYWxpemF0aW9uXHJcbiAgaWYgKG1lZGlhLmxlbmd0aCkge1xyXG4gICAgY29uc3QgYnJlYWtwb2ludHNBcnJheSA9IFtdO1xyXG4gICAgbWVkaWEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgcGFyYW1zID0gaXRlbS5kYXRhc2V0W2RhdGFTZXRWYWx1ZV07XHJcbiAgICAgIGNvbnN0IGJyZWFrcG9pbnQgPSB7fTtcclxuICAgICAgY29uc3QgcGFyYW1zQXJyYXkgPSBwYXJhbXMuc3BsaXQoJywnKTtcclxuICAgICAgYnJlYWtwb2ludC52YWx1ZSA9IHBhcmFtc0FycmF5WzBdO1xyXG4gICAgICBicmVha3BvaW50LnR5cGUgPSBwYXJhbXNBcnJheVsxXSA/IHBhcmFtc0FycmF5WzFdLnRyaW0oKSA6ICdtYXgnO1xyXG4gICAgICBicmVha3BvaW50Lml0ZW0gPSBpdGVtO1xyXG4gICAgICBicmVha3BvaW50c0FycmF5LnB1c2goYnJlYWtwb2ludCk7XHJcbiAgICB9KTtcclxuICAgIC8vIGdldCB1bmlxdWUgYnJlYWtwb2ludHNcclxuICAgIGxldCBtZFF1ZXJpZXMgPSBicmVha3BvaW50c0FycmF5Lm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICcoJyArXHJcbiAgICAgICAgaXRlbS50eXBlICtcclxuICAgICAgICAnLXdpZHRoOiAnICtcclxuICAgICAgICBpdGVtLnZhbHVlICtcclxuICAgICAgICAncHgpLCcgK1xyXG4gICAgICAgIGl0ZW0udmFsdWUgK1xyXG4gICAgICAgICcsJyArXHJcbiAgICAgICAgaXRlbS50eXBlXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIG1kUXVlcmllcyA9IHVuaXF1ZUFycmF5KG1kUXVlcmllcyk7XHJcbiAgICBjb25zdCBtZFF1ZXJpZXNBcnJheSA9IFtdO1xyXG5cclxuICAgIGlmIChtZFF1ZXJpZXMubGVuZ3RoKSB7XHJcbiAgICAgIC8vIHdvcmsgd2l0aCBldmVyeSBicmVha3BvaW50XHJcbiAgICAgIG1kUXVlcmllcy5mb3JFYWNoKGJyZWFrcG9pbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtc0FycmF5ID0gYnJlYWtwb2ludC5zcGxpdCgnLCcpO1xyXG4gICAgICAgIGNvbnN0IG1lZGlhQnJlYWtwb2ludCA9IHBhcmFtc0FycmF5WzFdO1xyXG4gICAgICAgIGNvbnN0IG1lZGlhVHlwZSA9IHBhcmFtc0FycmF5WzJdO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShwYXJhbXNBcnJheVswXSk7XHJcbiAgICAgICAgLy8gb2JqZWN0cyB3aXRoIGNvbmRpdGlvbnNcclxuICAgICAgICBjb25zdCBpdGVtc0FycmF5ID0gYnJlYWtwb2ludHNBcnJheS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgIGlmIChpdGVtLnZhbHVlID09PSBtZWRpYUJyZWFrcG9pbnQgJiYgaXRlbS50eXBlID09PSBtZWRpYVR5cGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbWRRdWVyaWVzQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICBpdGVtc0FycmF5LFxyXG4gICAgICAgICAgbWF0Y2hNZWRpYSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBtZFF1ZXJpZXNBcnJheTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogc21vb3RobHkgc2xpZGVzIHVwXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxyXG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cclxuICogQHBhcmFtIHtib29sZWFufSBzaG93bW9yZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IF9zbGlkZVVwID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDAsIHNob3dtb3JlID0gMCkgPT4ge1xyXG4gIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcclxuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdfc2xpZGUnKTtcclxuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmcnO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcclxuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBgJHt0YXJnZXQub2Zmc2V0SGVpZ2h0fXB4YDtcclxuICAgIHRhcmdldC5vZmZzZXRIZWlnaHQ7XHJcbiAgICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBzaG93bW9yZSA/IGAke3Nob3dtb3JlfXJlbWAgOiBgMGA7XHJcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IDA7XHJcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XHJcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gMDtcclxuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0YXJnZXQuaGlkZGVuID0gIXNob3dtb3JlID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAhc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpIDogbnVsbDtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcclxuICAgICAgIXNob3dtb3JlID8gdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpIDogbnVsbDtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xyXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnX3NsaWRlJyk7XHJcbiAgICAgIC8vIGNyZWF0ZSBldmVudFxyXG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgIG5ldyBDdXN0b21FdmVudCgnc2xpZGVVcERvbmUnLCB7XHJcbiAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9LCBkdXJhdGlvbik7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIHNtb290aGx5IHNsaWRlcyBkb3duXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxyXG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cclxuICogQHBhcmFtIHtib29sZWFufSBzaG93bW9yZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IF9zbGlkZURvd24gPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCwgc2hvd21vcmUgPSAwKSA9PiB7XHJcbiAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xyXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ19zbGlkZScpO1xyXG4gICAgdGFyZ2V0LmhpZGRlbiA9IHRhcmdldC5oaWRkZW4gPyBmYWxzZSA6IG51bGw7XHJcbiAgICBzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JykgOiBudWxsO1xyXG4gICAgbGV0IGhlaWdodCA9IHRhcmdldC5vZmZzZXRIZWlnaHQ7XHJcbiAgICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBzaG93bW9yZSA/IGAke3Nob3dtb3JlfXJlbWAgOiBgMGA7XHJcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IDA7XHJcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XHJcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gMDtcclxuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgdGFyZ2V0Lm9mZnNldEhlaWdodDtcclxuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmcnO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcclxuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJyk7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XHJcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdfc2xpZGUnKTtcclxuICAgICAgLy8gY3JlYXRlIGV2ZW50XHJcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCdzbGlkZURvd25Eb25lJywge1xyXG4gICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSwgZHVyYXRpb24pO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiB0b2dnbGVzIHNtb290aCBzbGlkZVxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcclxuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXHJcbiAqIEByZXR1cm5zIGZ1bmN0aW9uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgX3NsaWRlVG9nZ2xlID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDApID0+IHtcclxuICBpZiAodGFyZ2V0LmhpZGRlbikge1xyXG4gICAgcmV0dXJuIF9zbGlkZURvd24odGFyZ2V0LCBkdXJhdGlvbik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBfc2xpZGVVcCh0YXJnZXQsIGR1cmF0aW9uKTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogY29udmVydHMgcmVtIHRvIHBpeGVsc1xyXG4gKiBAcGFyYW0ge251bWJlcn0gcmVtVmFsdWVcclxuICogQHJldHVybnMgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtVG9QeChyZW1WYWx1ZSkge1xyXG4gIC8vINCf0L7Qu9GD0YfQsNC10Lwg0YLQtdC60YPRidC40Lkg0LHQsNC30L7QstGL0Lkg0YDQsNC30LzQtdGAINGI0YDQuNGE0YLQsCAoZm9udC1zaXplKSDQuNC3INGN0LvQtdC80LXQvdGC0LAgPGh0bWw+XHJcbiAgdmFyIGh0bWxGb250U2l6ZSA9IHBhcnNlRmxvYXQoXHJcbiAgICBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZm9udFNpemVcclxuICApO1xyXG5cclxuICAvLyDQn9C10YDQtdCy0L7QtNC40Lwg0LfQvdCw0YfQtdC90LjQtSDQuNC3IHJlbSDQsiBweFxyXG4gIHZhciBweFZhbHVlID0gcmVtVmFsdWUgKiBodG1sRm9udFNpemU7XHJcblxyXG4gIC8vINCe0LrRgNGD0LPQu9GP0LXQvCDQt9C90LDRh9C10L3QuNC1INC00L4g0YbQtdC70YvRhSDQv9C40LrRgdC10LvQtdC5ICjQv9C+INC20LXQu9Cw0L3QuNGOKVxyXG4gIHJldHVybiBNYXRoLnJvdW5kKHB4VmFsdWUpICsgJ3B4JztcclxufVxyXG5cclxuLy8gcmVtb3ZlIGNsYXNzIGZyb20gYWxsIGFycmF5IGVsZW1lbnRzXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDbGFzc2VzID0gKGFycmF5LCBjbGFzc05hbWUpID0+IHtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBhcnJheVtpXS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBib2R5TG9ja1N0YXR1cywgYm9keUxvY2tUb2dnbGUgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmNvbnN0IG1lbnVJbml0ID0gKCkgPT4ge1xyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKSkge1xyXG4gICAgICAgIGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKTtcclxuXHJcbiAgICAgICAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKGJvZHlMb2NrU3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnX21lbnUtb3BlbmVkJyk7XHJcbiAgICAgICAgICAgICAgICBib2R5TG9ja1RvZ2dsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5tZW51SW5pdCgpO1xyXG4iLCJpbXBvcnQgeyBfc2xpZGVVcCwgX3NsaWRlRG93biwgX3NsaWRlVG9nZ2xlIH0gZnJvbSAnLi91dGlscy5qcyc7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY2xhc3MgU2VsZWN0IHtcclxuICAgIC8vIHNldHVwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyBjdXN0b20gc2VsZWN0IGNsYXNzZXNcclxuICAgICAgICB0aGlzLmNsYXNzZXMgPSB7XHJcbiAgICAgICAgICAgIC8vIGh0bWwgYnVpbGQgY2xhc3Nlc1xyXG4gICAgICAgICAgICBzZWw6ICdzZWxlY3QnLFxyXG4gICAgICAgICAgICBib2R5OiAnc2VsZWN0X19ib2R5JyxcclxuICAgICAgICAgICAgbGFiZWw6ICdzZWxlY3RfX2xhYmVsJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdzZWxlY3RfX3RpdGxlJyxcclxuICAgICAgICAgICAgdmFsOiAnc2VsZWN0X192YWx1ZScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdzZWxlY3RfX2NvbnRlbnQnLFxyXG4gICAgICAgICAgICBvcHRpb25zOiAnc2VsZWN0X19vcHRpb25zJyxcclxuICAgICAgICAgICAgb3B0aW9uOiAnc2VsZWN0X19vcHRpb24nLFxyXG4gICAgICAgICAgICBzY3JvbGw6ICdzZWxlY3RfX3Njcm9sbCcsXHJcbiAgICAgICAgICAgIGdyb3VwOiAnc2VsZWN0X19ncm91cCcsXHJcbiAgICAgICAgICAgIGlucDogJ3NlbGVjdF9faW5wdXQnLFxyXG4gICAgICAgICAgICBhc3NldDogJ3NlbGVjdF9fYXNzZXQnLFxyXG4gICAgICAgICAgICB0eHQ6ICdzZWxlY3RfX3RleHQnLFxyXG4gICAgICAgICAgICBoaW50OiAnc2VsZWN0X19oaW50JyxcclxuXHJcbiAgICAgICAgICAgIC8vIHN0YXRlIGNsYXNzZXNcclxuICAgICAgICAgICAgYWN0aXZlOiAnX3NlbGVjdC1hY3RpdmUnLFxyXG4gICAgICAgICAgICBmb2N1c2VkOiAnX3NlbGVjdC1mb2N1c2VkJyxcclxuICAgICAgICAgICAgb3BlbmVkOiAnX3NlbGVjdC1vcGVuZWQnLFxyXG4gICAgICAgICAgICBmaWxsZWQ6ICdfc2VsZWN0LWZpbGxlZCcsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkOiAnX3NlbGVjdC1zZWxlY3RlZCcsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiAnX3NlbGVjdC1kaXNhYmxlZCcsXHJcblxyXG4gICAgICAgICAgICAvLyBhZGRpdGlvbmFsIGNsYXNzZXNcclxuICAgICAgICAgICAgbGlzdDogJ19zZWxlY3QtbGlzdCcsXHJcbiAgICAgICAgICAgIGVycm9yOiAnX3NlbGVjdC1lcnJvcicsXHJcbiAgICAgICAgICAgIG11bHRpcGxlOiAnX3NlbGVjdC1tdWx0aXBsZScsXHJcbiAgICAgICAgICAgIGNoZWNrYm94OiAnX3NlbGVjdC1jaGVja2JveCcsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnX3NlbGVjdC1sYWJlbCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBhbGwgc2VsZWN0IGl0ZW1zXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpO1xyXG4gICAgICAgIGlmIChzZWxlY3RMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXQoc2VsZWN0TGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNlbGVjdCBpbml0aWFsaXphdGlvbiAmIGJ1aWxkIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vIGluaXRpYWxpemF0aW9uXHJcbiAgICBpbml0KHNlbGVjdExpc3QpIHtcclxuICAgICAgICAvLyBpbml0XHJcbiAgICAgICAgc2VsZWN0TGlzdC5mb3JFYWNoKChzZWxlY3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygnc3Rhci1yYXRpbmcnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0U2VsSXRlbShzZWxlY3QsIGluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gZXZlbnRzXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgJ2NsaWNrJyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAna2V5ZG93bicsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGlvbnMoZSk7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgJ2ZvY3VzaW4nLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb25zKGUpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgICApO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICdmb2N1c291dCcsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGlvbnMoZSk7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvLyBzaW5nbGUgc2VsZWN0IGl0ZW0gaW5pdGlhbGl6YXRpb25cclxuICAgIGluaXRTZWxJdGVtKHJlbGF0aXZlU2VsLCBpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnNlbCk7XHJcbiAgICAgICAgcmVsYXRpdmVTZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKHJlbGF0aXZlU2VsKTtcclxuICAgICAgICByZWxhdGl2ZVNlbC5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIGluZGV4ID8gKHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSWQgPSBpbmRleCkgOiBudWxsO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkpIHtcclxuICAgICAgICAgICAgcmVsYXRpdmVTZWwuZGF0YXNldC5vcHRQbGFjZWhvbGRlciA9IHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkubGFiZWwuc2hvdykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsVGl0bGUgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbDtcclxuICAgICAgICAgICAgICAgIHNlbFRpdGxlLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAgICAgICAgICAgICAnYWZ0ZXJiZWdpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMubGFiZWx9XCI+JHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkubGFiZWwudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS5sYWJlbC50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTwvc3Bhbj5gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkICE9PSAnMCcpIHtcclxuICAgICAgICAgICAgc2VsZWN0Lmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAgICAgICAgICdiZWZvcmVlbmQnLFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5ib2R5fVwiPjxkaXYgaGlkZGVuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMub3B0aW9uc31cIj48L2Rpdj48L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0Lmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAgICAgICAgICdiZWZvcmVlbmQnLFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5ib2R5fVwiPjxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5vcHRpb25zfVwiPjwvZGl2PjwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYnVpbGQocmVsYXRpdmVTZWwpO1xyXG5cclxuICAgICAgICByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkID0gcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCA/IHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgOiAnMTUwJztcclxuICAgICAgICByZWxhdGl2ZVNlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBfdGhpcy5pbml0U2VsZWN0aW9ucyhlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIHNlbGVjdCBidWlsZFxyXG4gICAgYnVpbGQocmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3QgPSByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IHNlbE9iaiA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8vIHNldCBpZFxyXG4gICAgICAgIHNlbGVjdC5kYXRhc2V0LnNlbElkID0gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxJZDtcclxuICAgICAgICAvLyBzZXQgdmFsdWVcclxuICAgICAgICB0aGlzLnNldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIC8vIHNldCBvcHRpb25zXHJcbiAgICAgICAgdGhpcy5zZXRPcHRpb25zKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIC8vIHNldCBjc3MgbW9kaWZpY2F0b3JcclxuICAgICAgICByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEFkZG9uQ2xhc3NcclxuICAgICAgICAgICAgPyBzZWxlY3QuY2xhc3NMaXN0LmFkZChgc2VsZWN0XyR7cmVsYXRpdmVTZWwuZGF0YXNldC5zZWxBZGRvbkNsYXNzfWApXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAvLyBzZXQgY2xhc3MgaWYgc2VsZWN0IGlzIG11bHRpcGxlXHJcbiAgICAgICAgcmVsYXRpdmVTZWwubXVsdGlwbGVcclxuICAgICAgICAgICAgPyBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMubXVsdGlwbGUpXHJcbiAgICAgICAgICAgIDogc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLm11bHRpcGxlKTtcclxuICAgICAgICAvLyBzZXQgY2xhc3MgaWYgc2VsZWN0IGNoZWNrYm94ZXMgYXJlIHNldFxyXG4gICAgICAgIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtY2hlY2tib3hlcycpICYmIHJlbGF0aXZlU2VsLm11bHRpcGxlXHJcbiAgICAgICAgICAgID8gc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmNoZWNrYm94KVxyXG4gICAgICAgICAgICA6IHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5jaGVja2JveCk7XHJcbiAgICAgICAgLy8gZGlzYWJsZSBzZWxlY3RcclxuICAgICAgICB0aGlzLmRpc2FibGVTZWxlY3Qoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgLy8gc2V0IHNlYXJjaCBhY3Rpb25zIGlmIGRhdGEtc2VsLXNlYXJjaCBpcyBzZXRcclxuICAgICAgICByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNlYXJjaCcpID8gdGhpcy5zZXRTZWFyY2hBY3Rpb25zKHNlbGVjdCkgOiBudWxsO1xyXG4gICAgICAgIC8vIHNldCBzZWxlY3QgYWN0aW9ucyBpZiBpdCdzIGluaXRpYWxseSBvcGVuZWRcclxuICAgICAgICByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLW9wZW5lZCcpID8gdGhpcy5zZXRBY3Rpb24oc2VsZWN0KSA6IG51bGw7XHJcblxyXG4gICAgICAgIC8vIHNldCBzZWxlY3QgaGludFxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnQpIHtcclxuICAgICAgICAgICAgcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICAnYmVmb3JlZW5kJyxcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwic2VsZWN0X19oaW50XCI+JHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnR9PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdmFsaWRhdGUgc2VsZWN0XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmNsb3Nlc3QoJ2Zvcm0nKSkge1xyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5jbG9zZXN0KCdmb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbE9iai5jbGFzc2VzLmZpbGxlZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxPYmouYWRkRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxPYmoucmVtb3ZlRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNob3cgLyBoaWRlIHNlbGVjdGlvbiBmcm9tIHNlbGVjdCB0aXRsZVxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvdy12YWwnKSkge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCgnX3NlbGVjdC1zaG93LXZhbCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdfc2VsZWN0LXNob3ctdmFsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gc2V0IHR3aW4gc2VsZWN0IHRpdGxlIHZhbHVlXHJcbiAgICBzZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsQm9keSA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLmJvZHkpLnR3aW5TZWw7XHJcbiAgICAgICAgY29uc3Qgc2VsVGl0bGUgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbDtcclxuXHJcbiAgICAgICAgaWYgKHNlbFRpdGxlKSBzZWxUaXRsZS5yZW1vdmUoKTtcclxuICAgICAgICBzZWxCb2R5Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHRoaXMuZ2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCkpO1xyXG4gICAgfVxyXG4gICAgLy8gc2V0IHR3aW4gc2VsZWN0IG9wdGlvbnNcclxuICAgIHNldE9wdGlvbnMoc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS50d2luU2VsO1xyXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsT3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnJlbGF0aXZlU2VsO1xyXG5cclxuICAgICAgICBvcHRpb25zLmlubmVySFRNTCA9IHRoaXMuZ2V0T3B0aW9ucyhyZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsT3B0aW9ucy5xdWVyeVNlbGVjdG9yKCdbc2VsZWN0ZWRdJykpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmNsYXNzZXMub3B0aW9ufWApLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnNlbGVjdGVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBkaXNhYmxlIHNlbGVjdFxyXG4gICAgZGlzYWJsZVNlbGVjdChzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLnRpdGxlKS50d2luU2VsLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xyXG4gICAgICAgICAgICB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBtYWluIGFjdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLyBzZXQgbWFpbiBhY3Rpb25zXHJcbiAgICBzZXRBY3Rpb25zKGUpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICBjb25zdCB0eXBlID0gZS50eXBlO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnNlbCkpIHx8XHJcbiAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3QgPSB0YXJnZXQuY2xvc2VzdCgnLnNlbGVjdCcpXHJcbiAgICAgICAgICAgICAgICA/IHRhcmdldC5jbG9zZXN0KCcuc2VsZWN0JylcclxuICAgICAgICAgICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgICAgICAgICAgIGAuJHt0aGlzLmNsYXNzZXMuc2VsfVtkYXRhLXNlbC1pZD1cIiR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMubGlzdCkpLmRhdGFzZXQuc2VsZWN0SWRcclxuICAgICAgICAgICAgICAgICAgICAgIH1cIl1gXHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0KS5yZWxhdGl2ZVNlbDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnY2xpY2snKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlbGF0aXZlU2VsLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxMaXN0ID0gdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMubGlzdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYC4ke3RoaXMuY2xhc3Nlcy5zZWx9W2RhdGEtc2VsLWlkPVwiJHtzZWxMaXN0LmRhdGFzZXQuc2VsSWR9XCJdIC5zZWxlY3RfX29wdGlvbltkYXRhLW9wdC12YWw9XCIke3NlbExpc3QuZGF0YXNldC5vcHRWYWx9XCJdYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE9wdGlvbkFjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsLCBzZWxPcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMudGl0bGUpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGlvbihzZWxlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3B0aW9uKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsT3B0aW9uID0gdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3B0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0T3B0aW9uQWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwsIHNlbE9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdmb2N1c2luJyB8fCB0eXBlID09PSAnZm9jdXNvdXQnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMuc2VsKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2ZvY3VzaW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5mb2N1c2VkKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuZm9jdXNlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5maWxsZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdrZXlkb3duJyAmJiBlLmNvZGUgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlR3JvdXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VHcm91cCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHNldCBzaW5nbGUgc2VsZWN0IGFjdGlvblxyXG4gICAgc2V0QWN0aW9uKHNlbGVjdCkge1xyXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0KS5yZWxhdGl2ZVNlbDtcclxuICAgICAgICBjb25zdCBzZWxPcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykudHdpblNlbDtcclxuXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmNsb3Nlc3QoJ1tkYXRhLW9uZS1zZWxlY3RdJykpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0T25lR3JvdXAgPSByZWxhdGl2ZVNlbC5jbG9zZXN0KCdbZGF0YS1vbmUtc2VsZWN0XScpO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlR3JvdXAoc2VsZWN0T25lR3JvdXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzZWxPcHRpb25zLmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC50b2dnbGUodGhpcy5jbGFzc2VzLm9wZW5lZCk7XHJcbiAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkICE9PSAnMCcpIHtcclxuICAgICAgICAgICAgICAgIF9zbGlkZVRvZ2dsZShzZWxPcHRpb25zLCByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5vcGVuZWQpICYmXHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUnKSAmJlxyXG4gICAgICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuZXJyb3IpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjbG9zZSBzaW5nbGUgc2VsZWN0IGdyb3VwXHJcbiAgICBjbG9zZUdyb3VwKGdyb3VwKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsR3JvdXAgPSBncm91cCA/IGdyb3VwIDogZG9jdW1lbnQ7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IHNlbEdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgIGAke3RoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnNlbCl9JHt0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcGVuZWQpfWBcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChzZWxlY3Rpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZWxlY3Rpb25zLmZvckVhY2goKHNlbGVjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUl0ZW0oc2VsZWN0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY2xvc2Ugc2luZ2xlIHNlbGVjdCBpdGVtXHJcbiAgICBjbG9zZUl0ZW0oc2VsZWN0KSB7XHJcbiAgICAgICAgY29uc3QgcmVsYXRpdmVTZWwgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QpLnJlbGF0aXZlU2VsO1xyXG4gICAgICAgIGNvbnN0IHNlbE9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS50d2luU2VsO1xyXG5cclxuICAgICAgICBpZiAoIXNlbE9wdGlvbnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMub3BlbmVkKTtcclxuICAgICAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgIT09ICcwJykge1xyXG4gICAgICAgICAgICAgICAgX3NsaWRlVXAoc2VsT3B0aW9ucywgcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBzZXQgc2luZ2xlIG9wdGlvbiBhY3Rpb25zXHJcbiAgICBzZXRPcHRpb25BY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCwgb3B0aW9uKSB7XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsZWN0aW9ucyA9IHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHM7XHJcblxyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbGVjdGlvbnMuZm9yRWFjaCgocmVsYXRpdmVTZWxlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlbGF0aXZlU2VsZWN0aW9uLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0d2luU2VsZWN0aW9ucyA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnNlbGVjdGVkKSk7XHJcbiAgICAgICAgICAgIHR3aW5TZWxlY3Rpb25zLmZvckVhY2goKHR3aW5TZWxlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlbGF0aXZlU2VsXHJcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7dHdpblNlbGVjdGlvbi5kYXRhc2V0Lm9wdFZhbH1cIl1gKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIW9wdGlvbi5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLnNlbGVjdGVkKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVsYXRpdmVTZWwucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPVwiJHtvcHRpb24uZGF0YXNldC5vcHRWYWx9XCJdYCkpO1xyXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVTZWxcclxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPVwiJHtvcHRpb24uZGF0YXNldC5vcHRWYWx9XCJdYClcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdF9fb3B0aW9uJylcclxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChvcHQpID0+IG9wdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCkpO1xyXG4gICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBpZiAoIXJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zaG93LXNlbGVjdGlvbicpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoYCR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3B0aW9uKX1baGlkZGVuXWApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoYCR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3B0aW9uKX1baGlkZGVuXWApLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9uLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVsYXRpdmVTZWwudmFsdWUgPSBvcHRpb24uaGFzQXR0cmlidXRlKCdkYXRhLW9wdC12YWwnKVxyXG4gICAgICAgICAgICAgICAgPyBvcHRpb24uZGF0YXNldC5vcHRWYWxcclxuICAgICAgICAgICAgICAgIDogb3B0aW9uLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICB0aGlzLnNldEFjdGlvbihzZWxlY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0aW9ucyhyZWxhdGl2ZVNlbCk7XHJcbiAgICB9XHJcbiAgICAvLyBzZXQgc2VhcmNoIGFjdGlvbnNcclxuICAgIHNldFNlYXJjaEFjdGlvbnMoc2VsZWN0KSB7XHJcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IHNlbElucHV0ID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMuaW5wKS50d2luU2VsO1xyXG4gICAgICAgIGNvbnN0IHNlbE9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS50d2luU2VsLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgIGAuJHt0aGlzLmNsYXNzZXMub3B0aW9ufWBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBzZWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsT3B0aW9ucy5mb3JFYWNoKChzZWxPcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxPcHRpb24udGV4dENvbnRlbnQudG9VcHBlckNhc2UoKS5pbmRleE9mKHNlbElucHV0LnZhbHVlLnRvVXBwZXJDYXNlKCkpID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxPcHRpb24uaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbE9wdGlvbi5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2VsT3B0aW9ucy5oaWRkZW4gPT09IHRydWUgPyBfdGhpcy5zZXRBY3Rpb24oc2VsZWN0KSA6IG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBzZXQgc2VsZWN0IHN1YnRpdGxlXHJcbiAgICBzZXRTdWJ0aXRsZShyZWxhdGl2ZVNlbCkge31cclxuXHJcbiAgICAvLyB2YWxpZGF0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLyBhZGQgYW4gZXJyb3IgdG8gYSBzZWxlY3RcclxuICAgIGFkZEVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KSB7XHJcbiAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmVycm9yKTtcclxuXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsRXJyb3IgJiYgIXJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSGludCkge1xyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAgICAgICAgICdiZWZvcmVlbmQnLFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJzZWxlY3RfX2hpbnRcIj4ke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsRXJyb3J9PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHJlbW92ZSBhbiBlcnJvciBmcm9tIGEgc2VsZWN0XHJcbiAgICByZW1vdmVFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCkge1xyXG4gICAgICAgIGlmIChzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5lcnJvcikpIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdF9faGludCcpICYmICFyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnQpIHtcclxuICAgICAgICAgICAgcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChyZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2hpbnQnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHV0aWxzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vIGdldCBjdXN0b20gY2xhc3NcclxuICAgIGdldENsYXNzKGNzc0NsYXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIGAuJHtjc3NDbGFzc31gO1xyXG4gICAgfVxyXG4gICAgLy8gZ2V0IHNpbmdsZSBzZWxlY3QgaXRlbVxyXG4gICAgZ2V0U2VsZWN0KHNlbGVjdCwgY3NzQ2xhc3MpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbDogc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLFxyXG4gICAgICAgICAgICB0d2luU2VsOiBzZWxlY3QucXVlcnlTZWxlY3Rvcih0aGlzLmdldENsYXNzKGNzc0NsYXNzKSlcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gZ2V0IHNlbGVjdGVkIGl0ZW0gdmFsdWVcclxuICAgIGdldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBsZXQgYXR0cixcclxuICAgICAgICAgICAgYXR0ckNsYXNzLFxyXG4gICAgICAgICAgICB0aXRsZVZhbCA9IHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCwgMikuaHRtbDtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRpdGxlIHZhbHVlXHJcbiAgICAgICAgdGl0bGVWYWwgPSB0aXRsZVZhbC5sZW5ndGhcclxuICAgICAgICAgICAgPyB0aXRsZVZhbFxyXG4gICAgICAgICAgICA6IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsTGFiZWxcclxuICAgICAgICAgICAgPyByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbExhYmVsXHJcbiAgICAgICAgICAgIDogJyc7XHJcblxyXG4gICAgICAgIC8vIHNldCBhY3RpdmUgY2xhc3MgdG8gc2VsZWN0IGlmIGl0IGNvbnRhaW5zIGFueSB2YWx1ZXNcclxuICAgICAgICBpZiAodGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS52YWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5hY3RpdmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5hY3RpdmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2V0IHNlbGVjdCBsYWJlbFxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLWxhYmVsJykpIHtcclxuICAgICAgICAgICAgYXR0ciA9IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsTGFiZWxcclxuICAgICAgICAgICAgICAgID8gYCBkYXRhLXNlbC1sYWJlbD1cIiR7cmVsYXRpdmVTZWwuZGF0YXNldC5zZWxMYWJlbH1cImBcclxuICAgICAgICAgICAgICAgIDogYCBkYXRhLXNlbC1sYWJlbD1cItCS0YvQsdC+0YBcImA7XHJcbiAgICAgICAgICAgIGF0dHJDbGFzcyA9IGAgJHt0aGlzLmNsYXNzZXMubGFiZWx9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHB1c2ggc2VsZWN0aW9ucyB0byB0aGUgbGlzdCBpbnNpZGUgb2Ygc2VsZWN0IHRpdGxlXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLm11bHRpcGxlICYmIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtbGlzdCcpKSB7XHJcbiAgICAgICAgICAgIHRpdGxlVmFsID0gdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKVxyXG4gICAgICAgICAgICAgICAgLmVsZW1lbnRzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAob3B0aW9uKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgPHNwYW4gZGF0YS1vcHQtaWQ9XCIke3NlbGVjdC5kYXRhc2V0LnNlbElkfVwiIGRhdGEtb3B0LXZhbD1cIiR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiIGNsYXNzPVwiX2xpc3QtaXRlbVwiPiR7dGhpcy5nZXRDb250ZW50KG9wdGlvbil9PC9zcGFuPmBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5qb2luKCcnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0Lmxpc3QgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWxhdGl2ZVNlbC5kYXRhc2V0Lmxpc3QpKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlbGF0aXZlU2VsLmRhdGFzZXQubGlzdCkuaW5uZXJIVE1MID0gdGl0bGVWYWw7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1zZWFyY2gnKSkgdGl0bGVWYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaW5pdCBzZWxlY3Qgc2VhcmNoXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtc2VhcmNoJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMudGl0bGV9XCI+PHNwYW4gJHthdHRyfSBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnZhbH1cIj48aW5wdXQgYXV0b2NvbXBsZXRlPVwib2ZmXCIgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiJHt0aXRsZVZhbH1cIiBkYXRhLXBsYWNlaG9sZGVyPVwiJHt0aXRsZVZhbH1cIiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmlucH1cIj48L3NwYW4+PC9kaXY+YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjdXN0b21DbGFzcyA9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpLmVsZW1lbnRzLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS5lbGVtZW50c1swXS5kYXRhc2V0Lm9wdENsYXNzXHJcbiAgICAgICAgICAgICAgICAgICAgPyBgICR7dGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS5lbGVtZW50c1swXS5kYXRhc2V0Lm9wdENsYXNzfWBcclxuICAgICAgICAgICAgICAgICAgICA6ICcnO1xyXG4gICAgICAgICAgICByZXR1cm4gYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMudGl0bGV9XCI+PHNwYW4gJHthdHRyID8gYXR0ciA6ICcnfSBjbGFzcz1cIiR7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzZXMudmFsXHJcbiAgICAgICAgICAgIH0gJHthdHRyQ2xhc3MgPyBhdHRyQ2xhc3MgOiAnJ31cIj48c3BhbiBjbGFzcz1cIiR7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzZXMuY29udGVudFxyXG4gICAgICAgICAgICB9JHtjdXN0b21DbGFzc31cIj4ke3RpdGxlVmFsfTwvc3Bhbj48L3NwYW4+PC9idXR0b24+YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgb3B0aW9uc1xyXG4gICAgZ2V0T3B0aW9ucyhyZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGNvbnN0IHNlbFNjcm9sbCA9IHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtc2Nyb2xsJykgPyBgZGF0YS1zaW1wbGViYXJgIDogJyc7XHJcbiAgICAgICAgbGV0IHNlbFNjcm9sbEhlaWdodCA9IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsU2Nyb2xsXHJcbiAgICAgICAgICAgID8gYHN0eWxlPVwibWF4LWhlaWdodDoke3dpbmRvdy5pbm5lcldpZHRoID4gNzY4ID8gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxTY3JvbGwgOiAyMn1yZW1cImBcclxuICAgICAgICAgICAgOiAnJztcclxuICAgICAgICBsZXQgc2VsT3B0aW9ucyA9IEFycmF5LmZyb20ocmVsYXRpdmVTZWwub3B0aW9ucyk7XHJcblxyXG4gICAgICAgIGlmIChzZWxPcHRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsZXQgc2VsT3B0aW9uc0hUTUwgPSBgYDtcclxuXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICh0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKSAmJiAhdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkuc2hvdykgfHxcclxuICAgICAgICAgICAgICAgIHJlbGF0aXZlU2VsLm11bHRpcGxlXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgc2VsT3B0aW9ucyA9IHNlbE9wdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsT3B0aW9uc0hUTUwgKz0gc2VsU2Nyb2xsXHJcbiAgICAgICAgICAgICAgICA/IGA8ZGl2ICR7c2VsU2Nyb2xsfSAke3NlbFNjcm9sbEhlaWdodH0gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5zY3JvbGx9XCI+YFxyXG4gICAgICAgICAgICAgICAgOiAnJztcclxuICAgICAgICAgICAgc2VsT3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHNlbE9wdGlvbnNIVE1MICs9IHRoaXMuZ2V0T3B0aW9uKG9wdGlvbiwgcmVsYXRpdmVTZWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2VsT3B0aW9uc0hUTUwgKz0gc2VsU2Nyb2xsID8gYDwvZGl2PmAgOiAnJztcclxuICAgICAgICAgICAgcmV0dXJuIHNlbE9wdGlvbnNIVE1MO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGdldCBvcHRpb25cclxuICAgIGdldE9wdGlvbihvcHRpb24sIHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IG9wdGlvbi5zZWxlY3RlZCAmJiByZWxhdGl2ZVNlbC5tdWx0aXBsZSA/IGAgJHt0aGlzLmNsYXNzZXMuc2VsZWN0ZWR9YCA6ICcnO1xyXG4gICAgICAgIGNvbnN0IHNob3dTZWxlY3Rpb24gPVxyXG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgJiYgIXJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zaG93LXNlbGVjdGlvbicpICYmICFyZWxhdGl2ZVNlbC5tdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgPyBgaGlkZGVuYFxyXG4gICAgICAgICAgICAgICAgOiBgYDtcclxuICAgICAgICBjb25zdCBvcHRpb25DbGFzcyA9IG9wdGlvbi5kYXRhc2V0Lm9wdENsYXNzID8gYCAke29wdGlvbi5kYXRhc2V0Lm9wdENsYXNzfWAgOiAnJztcclxuICAgICAgICBjb25zdCBvcHRpb25MaW5rID0gb3B0aW9uLmRhdGFzZXQub3B0aW9uTGluayA/IG9wdGlvbi5kYXRhc2V0Lm9wdGlvbkxpbmsgOiBmYWxzZTtcclxuICAgICAgICBjb25zdCBvcHRpb25MaW5rVGFyZ2V0ID0gb3B0aW9uLmhhc0F0dHJpYnV0ZSgnZGF0YS1vcHRpb24tbGluay10YXJnZXQnKSA/IGB0YXJnZXQ9XCJfYmxhbmtcImAgOiAnJztcclxuICAgICAgICBsZXQgb3B0aW9uSFRNTCA9IGBgO1xyXG5cclxuICAgICAgICBvcHRpb25IVE1MICs9IG9wdGlvbkxpbmtcclxuICAgICAgICAgICAgPyBgPGEgJHtvcHRpb25MaW5rVGFyZ2V0fSAke3Nob3dTZWxlY3Rpb259IGhyZWY9XCIke29wdGlvbkxpbmt9XCIgZGF0YS1vcHQtdmFsPVwiJHtvcHRpb24udmFsdWV9XCIgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5vcHRpb259JHtvcHRpb25DbGFzc30ke3NlbGVjdGlvbnN9XCI+YFxyXG4gICAgICAgICAgICA6IGA8YnV0dG9uICR7c2hvd1NlbGVjdGlvbn0gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5vcHRpb259JHtvcHRpb25DbGFzc30ke3NlbGVjdGlvbnN9XCIgZGF0YS1vcHQtdmFsPVwiJHtvcHRpb24udmFsdWV9XCIgdHlwZT1cImJ1dHRvblwiPmA7XHJcbiAgICAgICAgb3B0aW9uSFRNTCArPSB0aGlzLmdldENvbnRlbnQob3B0aW9uKTtcclxuICAgICAgICBvcHRpb25IVE1MICs9IG9wdGlvbkxpbmsgPyBgPC9hPmAgOiBgPC9idXR0b24+YDtcclxuICAgICAgICByZXR1cm4gb3B0aW9uSFRNTDtcclxuICAgIH1cclxuICAgIC8vIGdldCBzZWxlY3QgY29udGVudFxyXG4gICAgZ2V0Q29udGVudChvcHRpb24pIHtcclxuICAgICAgICBjb25zdCBvcHRpb25EYXRhID0gb3B0aW9uLmRhdGFzZXQub3B0QXNzZXQgPyBgJHtvcHRpb24uZGF0YXNldC5vcHRBc3NldH1gIDogJyc7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uRGF0YUhUTUwgPVxyXG4gICAgICAgICAgICBvcHRpb25EYXRhLmluZGV4T2YoJ2ltZycpID49IDAgPyBgPGltZyBzcmM9XCIke29wdGlvbkRhdGF9XCIgYWx0PVwiXCI+YCA6IG9wdGlvbkRhdGE7XHJcbiAgICAgICAgbGV0IG9wdGlvbkNvbnRlbnRIVE1MID0gYGA7XHJcblxyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5ncm91cH1cIj5gIDogJyc7XHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8c3BhbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmFzc2V0fVwiPmAgOiAnJztcclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gb3B0aW9uRGF0YUhUTUwgOiAnJztcclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDwvc3Bhbj5gIDogJyc7XHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8c3BhbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnR4dH1cIj5gIDogJyc7XHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uLnRleHRDb250ZW50O1xyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPC9zcGFuPmAgOiAnJztcclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDwvc3Bhbj5gIDogJyc7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbkNvbnRlbnRIVE1MO1xyXG4gICAgfVxyXG4gICAgLy8gZ2V0IHNlbGVjdCBwbGFjZWhvbGRlclxyXG4gICAgZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IEFycmF5LmZyb20ocmVsYXRpdmVTZWwub3B0aW9ucykuZmluZCgob3B0aW9uKSA9PiAhb3B0aW9uLnZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnN1YnRpdGxlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBwbGFjZWhvbGRlci50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgICAgIHNob3c6IHBsYWNlaG9sZGVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtcGgtc2hvdycpLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBwbGFjZWhvbGRlci5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXBoJyksXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcGxhY2Vob2xkZXIuZGF0YXNldC5vcHRQbGFjZWhvbGRlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGdldCBzZWxlY3RlZCBvcHRpb25zIGRhdGFcclxuICAgIGdldERhdGEocmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBsZXQgc2VsZWN0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgc2VsZWN0aW9ucyA9IEFycmF5LmZyb20ocmVsYXRpdmVTZWwub3B0aW9ucylcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24uc2VsZWN0ZWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbnMucHVzaChyZWxhdGl2ZVNlbC5vcHRpb25zW3JlbGF0aXZlU2VsLnNlbGVjdGVkSW5kZXhdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZWxlbWVudHM6IHNlbGVjdGlvbnMubWFwKChvcHRpb24pID0+IG9wdGlvbiksXHJcbiAgICAgICAgICAgIHZhbHVlczogc2VsZWN0aW9ucy5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlKS5tYXAoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlKSxcclxuICAgICAgICAgICAgaHRtbDogc2VsZWN0aW9ucy5tYXAoKG9wdGlvbikgPT4gdGhpcy5nZXRDb250ZW50KG9wdGlvbikpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZWxlY3Rpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLyBpbml0IHNlbGVjdGlvbnNcclxuICAgIGluaXRTZWxlY3Rpb25zKGUpIHtcclxuICAgICAgICBjb25zdCByZWxhdGl2ZVNlbCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICB0aGlzLmJ1aWxkKHJlbGF0aXZlU2VsKTtcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGlvbnMocmVsYXRpdmVTZWwpO1xyXG4gICAgfVxyXG4gICAgLy8gc2V0IHNlbGVjdGlvbnNcclxuICAgIHNldFNlbGVjdGlvbnMocmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3QgPSByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXN1Ym1pdCcpICYmIHJlbGF0aXZlU2VsLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHRlbXBCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5jbG9zZXN0KCdmb3JtJykuYXBwZW5kKHRlbXBCdXR0b24pO1xyXG4gICAgICAgICAgICB0ZW1wQnV0dG9uLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIHRlbXBCdXR0b24ucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuZmlsbGVkKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsKTtcclxuICAgIH1cclxuICAgIC8vIGN1c3RvbSBzZWxlY3QgZXZlbnQgKGxpc3RlbiB0byBhbnkgc2VsZWN0aW9ucyAvIG11dGF0aW9ucylcclxuICAgIHNlbGVjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCdzZWxlY3Rpb24nLCB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Q6IHJlbGF0aXZlU2VsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5uZXcgU2VsZWN0KHt9KTtcclxuIiwiaW1wb3J0ICcuLi9zY3NzL3N0eWxlLnNjc3MnO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmb3JtcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIGltcG9ydCAqIGFzIGZvcm1zIGZyb20gJy4vdXRpbHMvZm9ybXMuanMnO1xyXG5cclxuLy8gZm9ybSBmaWVsZHNcclxuLy8gZm9ybXMuZm9ybUZpZWxkc0luaXQoeyB2aWV3UGFzczogZmFsc2UgfSk7XHJcblxyXG4vLyBmb3JtIHN1Ym1pdFxyXG4vLyBmb3Jtcy5mb3JtU3VibWl0KCk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHV0aWxzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy9oYW1idXJnZXJcclxuaW1wb3J0ICcuL3V0aWxzL2hhbWJ1cmdlci5qcyc7XHJcblxyXG4vLyB0YWJzXHJcbi8vIGltcG9ydCAnLi91dGlscy90YWJzLmpzJztcclxuXHJcbi8vIGFjY29yZGlvblxyXG4vLyBpbXBvcnQgJy4vdXRpbHMvYWNjb3JkaW9uLmpzJztcclxuXHJcbi8vIHNlbGVjdFxyXG5pbXBvcnQgJy4vdXRpbHMvc2VsZWN0LmpzJztcclxuXHJcbi8vIG1vZGFsc1xyXG4vLyBpbXBvcnQgJy4vdXRpbHMvbW9kYWxzLmpzJztcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbGlicyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBkeW5hbWljIGRvbVxyXG5pbXBvcnQgJy4vbGlicy9kZC5qcyc7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0ICcuL2Rldi92em1zazEuanMnO1xyXG5pbXBvcnQgJy4vZGV2L21hcmt1c0RNLmpzJztcclxuaW1wb3J0ICcuL2Rldi91a2lrMC5qcyc7XHJcbmltcG9ydCAnLi9kZXYva2llNmVyLmpzJztcclxuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiZXZlbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJEeW5hbWljQWRhcHQiLCJ0eXBlIiwicHJvdG90eXBlIiwiaW5pdCIsIl90aGlzIiwi0L5iamVjdHMiLCJkYUNsYXNzbmFtZSIsIm5vZGVzIiwiaSIsImxlbmd0aCIsIm5vZGUiLCJkYXRhIiwiZGF0YXNldCIsImRhIiwidHJpbSIsImRhdGFBcnJheSIsInNwbGl0Iiwi0L5iamVjdCIsImVsZW1lbnQiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiZGVzdGluYXRpb24iLCJxdWVyeVNlbGVjdG9yIiwiYnJlYWtwb2ludCIsInBsYWNlIiwiaW5kZXgiLCJpbmRleEluUGFyZW50IiwicHVzaCIsImFycmF5U29ydCIsIm1lZGlhUXVlcmllcyIsIkFycmF5IiwibWFwIiwiY2FsbCIsImZpbHRlciIsInNlbGYiLCJpbmRleE9mIiwibWVkaWEiLCJtZWRpYVNwbGl0IiwiU3RyaW5nIiwibWF0Y2hNZWRpYSIsIndpbmRvdyIsIm1lZGlhQnJlYWtwb2ludCIsItC+YmplY3RzRmlsdGVyIiwiYWRkTGlzdGVuZXIiLCJtZWRpYUhhbmRsZXIiLCJtYXRjaGVzIiwibW92ZVRvIiwiY29udGFpbnMiLCJtb3ZlQmFjayIsImFkZCIsImNoaWxkcmVuIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwicmVtb3ZlIiwidW5kZWZpbmVkIiwiYXJyYXkiLCJzbGljZSIsImFyciIsInNvcnQiLCJhIiwiYiIsInNldEhhc2giLCJoYXNoIiwibG9jYXRpb24iLCJocmVmIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImdldEhhc2giLCJyZXBsYWNlIiwiYm9keUxvY2tTdGF0dXMiLCJib2R5TG9ja1RvZ2dsZSIsImRlbGF5IiwiYXJndW1lbnRzIiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keVVubG9jayIsImJvZHlMb2NrIiwic2V0VGltZW91dCIsImRhdGFNZWRpYVF1ZXJpZXMiLCJkYXRhU2V0VmFsdWUiLCJmcm9tIiwiYnJlYWtwb2ludHNBcnJheSIsInBhcmFtcyIsInBhcmFtc0FycmF5IiwidmFsdWUiLCJtZFF1ZXJpZXMiLCJ1bmlxdWVBcnJheSIsIm1kUXVlcmllc0FycmF5IiwibWVkaWFUeXBlIiwiaXRlbXNBcnJheSIsIl9zbGlkZVVwIiwidGFyZ2V0IiwiZHVyYXRpb24iLCJzaG93bW9yZSIsInN0eWxlIiwidHJhbnNpdGlvblByb3BlcnR5IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib3ZlcmZsb3ciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImhpZGRlbiIsInJlbW92ZVByb3BlcnR5IiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiX3NsaWRlRG93biIsIl9zbGlkZVRvZ2dsZSIsInJlbVRvUHgiLCJyZW1WYWx1ZSIsImh0bWxGb250U2l6ZSIsInBhcnNlRmxvYXQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZm9udFNpemUiLCJweFZhbHVlIiwiTWF0aCIsInJvdW5kIiwicmVtb3ZlQ2xhc3NlcyIsImNsYXNzTmFtZSIsIm1lbnVJbml0IiwiaGFtYnVyZ2VyIiwiZSIsIlNlbGVjdCIsImNvbnN0cnVjdG9yIiwiY2xhc3NlcyIsInNlbCIsImJvZHkiLCJsYWJlbCIsInRpdGxlIiwidmFsIiwiY29udGVudCIsIm9wdGlvbnMiLCJvcHRpb24iLCJzY3JvbGwiLCJncm91cCIsImlucCIsImFzc2V0IiwidHh0IiwiaGludCIsImFjdGl2ZSIsImZvY3VzZWQiLCJvcGVuZWQiLCJmaWxsZWQiLCJzZWxlY3RlZCIsImRpc2FibGVkIiwibGlzdCIsImVycm9yIiwibXVsdGlwbGUiLCJjaGVja2JveCIsInNlbGVjdExpc3QiLCJzZWxlY3QiLCJpbml0U2VsSXRlbSIsInNldEFjdGlvbnMiLCJiaW5kIiwicmVsYXRpdmVTZWwiLCJjcmVhdGVFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJzZWxJZCIsImdldFBsYWNlaG9sZGVyIiwib3B0UGxhY2Vob2xkZXIiLCJzaG93Iiwic2VsVGl0bGUiLCJnZXRTZWxlY3QiLCJ0d2luU2VsIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwidGV4dCIsInNwZWVkIiwiYnVpbGQiLCJpbml0U2VsZWN0aW9ucyIsInBhcmVudEVsZW1lbnQiLCJzZWxPYmoiLCJzZXRWYWx1ZSIsInNldE9wdGlvbnMiLCJzZWxBZGRvbkNsYXNzIiwiaGFzQXR0cmlidXRlIiwiZGlzYWJsZVNlbGVjdCIsInNldFNlYXJjaEFjdGlvbnMiLCJzZXRBY3Rpb24iLCJzZWxIaW50IiwiY2xvc2VzdCIsImFkZEVyciIsInJlbW92ZUVyciIsInNlbEJvZHkiLCJnZXRWYWx1ZSIsInJlbGF0aXZlU2VsT3B0aW9ucyIsImlubmVySFRNTCIsImdldE9wdGlvbnMiLCJnZXRDbGFzcyIsInNlbGVjdElkIiwic2VsTGlzdCIsInNlbE9wdGlvbiIsIm9wdFZhbCIsInNldE9wdGlvbkFjdGlvbiIsImNvZGUiLCJjbG9zZUdyb3VwIiwic2VsT3B0aW9ucyIsInNlbGVjdE9uZUdyb3VwIiwic2VsR3JvdXAiLCJzZWxlY3Rpb25zIiwic2VsZWN0aW9uIiwiY2xvc2VJdGVtIiwicmVsYXRpdmVTZWxlY3Rpb25zIiwiZ2V0RGF0YSIsImVsZW1lbnRzIiwicmVsYXRpdmVTZWxlY3Rpb24iLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0d2luU2VsZWN0aW9ucyIsInR3aW5TZWxlY3Rpb24iLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwib3B0IiwidGV4dENvbnRlbnQiLCJzZXRTZWxlY3Rpb25zIiwic2VsSW5wdXQiLCJ0b1VwcGVyQ2FzZSIsInNldFN1YnRpdGxlIiwic2VsRXJyb3IiLCJyZW1vdmVDaGlsZCIsImNzc0NsYXNzIiwiYXR0ciIsImF0dHJDbGFzcyIsInRpdGxlVmFsIiwiaHRtbCIsInNlbExhYmVsIiwidmFsdWVzIiwiZ2V0Q29udGVudCIsImpvaW4iLCJjdXN0b21DbGFzcyIsIm9wdENsYXNzIiwic2VsU2Nyb2xsIiwic2VsU2Nyb2xsSGVpZ2h0IiwiaW5uZXJXaWR0aCIsInNlbE9wdGlvbnNIVE1MIiwiZ2V0T3B0aW9uIiwic2hvd1NlbGVjdGlvbiIsIm9wdGlvbkNsYXNzIiwib3B0aW9uTGluayIsIm9wdGlvbkxpbmtUYXJnZXQiLCJvcHRpb25IVE1MIiwib3B0aW9uRGF0YSIsIm9wdEFzc2V0Iiwib3B0aW9uRGF0YUhUTUwiLCJvcHRpb25Db250ZW50SFRNTCIsInBsYWNlaG9sZGVyIiwiZmluZCIsInN1YnRpdGxlIiwic2VsZWN0ZWRJbmRleCIsInRlbXBCdXR0b24iLCJhcHBlbmQiLCJjbGljayJdLCJzb3VyY2VSb290IjoiIn0=