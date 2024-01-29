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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU7TUFDOUQsSUFBSXdLLFVBQVUsR0FBR25RLFFBQVEsQ0FBQ3FLLGFBQWEsQ0FBQyxRQUFRLENBQUM7TUFDakQ4RixVQUFVLENBQUN6UCxJQUFJLEdBQUcsUUFBUTtNQUMxQjBKLFdBQVcsQ0FBQzBCLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQ3NFLE1BQU0sQ0FBQ0QsVUFBVSxDQUFDO01BQzlDQSxVQUFVLENBQUNFLEtBQUssQ0FBQyxDQUFDO01BQ2xCRixVQUFVLENBQUN0TSxNQUFNLENBQUMsQ0FBQztJQUN2QjtJQUNBdUcsV0FBVyxDQUFDZ0IsYUFBYSxDQUFDN0ssU0FBUyxDQUFDbUQsR0FBRyxDQUFDLElBQUksQ0FBQzRFLE9BQU8sQ0FBQ2tCLE1BQU0sQ0FBQztJQUM1RCxJQUFJLENBQUMwRCxTQUFTLENBQUNsRCxNQUFNLEVBQUVJLFdBQVcsQ0FBQztFQUN2QztFQUNBO0VBQ0E4QyxTQUFTQSxDQUFDbEQsTUFBTSxFQUFFSSxXQUFXLEVBQUU7SUFDM0JwSyxRQUFRLENBQUNpSCxhQUFhLENBQ2xCLElBQUlDLFdBQVcsQ0FBQyxXQUFXLEVBQUU7TUFDekJDLE1BQU0sRUFBRTtRQUNKNkMsTUFBTSxFQUFFSTtNQUNaO0lBQ0osQ0FBQyxDQUNMLENBQUM7RUFDTDtBQUNKO0FBQ0EsSUFBSWhDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7O0FDcm1CYzs7QUFFNUI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQzhCOztBQUU5QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDMkI7O0FBRTNCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDc0I7O0FBRXRCOztBQUV5QjtBQUNFO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvZGV2L3VraWswLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9saWJzL2RkLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL3V0aWxzL2hhbWJ1cmdlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvdXRpbHMvc2VsZWN0LmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbmF2LWl0ZW0taGVhZGluZycpO1xyXG5cclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnLS1hY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5mdW5jdGlvbiBEeW5hbWljQWRhcHQodHlwZSkge1xyXG4gIHRoaXMudHlwZSA9IHR5cGU7XHJcbn1cclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IF90aGlzID0gdGhpcztcclxuICB0aGlzLtC+YmplY3RzID0gW107XHJcbiAgdGhpcy5kYUNsYXNzbmFtZSA9ICdfZHluYW1pY19hZGFwdF8nO1xyXG4gIHRoaXMubm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kYV0nKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLm5vZGVzW2ldO1xyXG4gICAgY29uc3QgZGF0YSA9IG5vZGUuZGF0YXNldC5kYS50cmltKCk7XHJcbiAgICBjb25zdCBkYXRhQXJyYXkgPSBkYXRhLnNwbGl0KCcsJyk7XHJcbiAgICBjb25zdCDQvmJqZWN0ID0ge307XHJcbiAgICDQvmJqZWN0LmVsZW1lbnQgPSBub2RlO1xyXG4gICAg0L5iamVjdC5wYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICDQvmJqZWN0LmRlc3RpbmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihkYXRhQXJyYXlbMF0udHJpbSgpKTtcclxuICAgINC+YmplY3QuYnJlYWtwb2ludCA9IGRhdGFBcnJheVsxXSA/IGRhdGFBcnJheVsxXS50cmltKCkgOiAnNzY3JztcclxuICAgINC+YmplY3QucGxhY2UgPSBkYXRhQXJyYXlbMl0gPyBkYXRhQXJyYXlbMl0udHJpbSgpIDogJ2xhc3QnO1xyXG4gICAg0L5iamVjdC5pbmRleCA9IHRoaXMuaW5kZXhJblBhcmVudCjQvmJqZWN0LnBhcmVudCwg0L5iamVjdC5lbGVtZW50KTtcclxuICAgIHRoaXMu0L5iamVjdHMucHVzaCjQvmJqZWN0KTtcclxuICB9XHJcbiAgdGhpcy5hcnJheVNvcnQodGhpcy7QvmJqZWN0cyk7XHJcbiAgdGhpcy5tZWRpYVF1ZXJpZXMgPSBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoXHJcbiAgICB0aGlzLtC+YmplY3RzLFxyXG4gICAgZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAnKCcgK1xyXG4gICAgICAgIHRoaXMudHlwZSArXHJcbiAgICAgICAgJy13aWR0aDogJyArXHJcbiAgICAgICAgaXRlbS5icmVha3BvaW50ICtcclxuICAgICAgICAncHgpLCcgK1xyXG4gICAgICAgIGl0ZW0uYnJlYWtwb2ludFxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICAgIHRoaXNcclxuICApO1xyXG4gIHRoaXMubWVkaWFRdWVyaWVzID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKFxyXG4gICAgdGhpcy5tZWRpYVF1ZXJpZXMsXHJcbiAgICBmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIHNlbGYpIHtcclxuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoc2VsZiwgaXRlbSkgPT09IGluZGV4O1xyXG4gICAgfVxyXG4gICk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1lZGlhUXVlcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgbWVkaWEgPSB0aGlzLm1lZGlhUXVlcmllc1tpXTtcclxuICAgIGNvbnN0IG1lZGlhU3BsaXQgPSBTdHJpbmcucHJvdG90eXBlLnNwbGl0LmNhbGwobWVkaWEsICcsJyk7XHJcbiAgICBjb25zdCBtYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEobWVkaWFTcGxpdFswXSk7XHJcbiAgICBjb25zdCBtZWRpYUJyZWFrcG9pbnQgPSBtZWRpYVNwbGl0WzFdO1xyXG4gICAgY29uc3Qg0L5iamVjdHNGaWx0ZXIgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoXHJcbiAgICAgIHRoaXMu0L5iamVjdHMsXHJcbiAgICAgIGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uYnJlYWtwb2ludCA9PT0gbWVkaWFCcmVha3BvaW50O1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgbWF0Y2hNZWRpYS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgIF90aGlzLm1lZGlhSGFuZGxlcihtYXRjaE1lZGlhLCDQvmJqZWN0c0ZpbHRlcik7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubWVkaWFIYW5kbGVyKG1hdGNoTWVkaWEsINC+YmplY3RzRmlsdGVyKTtcclxuICB9XHJcbn07XHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUubWVkaWFIYW5kbGVyID0gZnVuY3Rpb24gKG1hdGNoTWVkaWEsINC+YmplY3RzKSB7XHJcbiAgaWYgKG1hdGNoTWVkaWEubWF0Y2hlcykge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCDQvmJqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCDQvmJqZWN0ID0g0L5iamVjdHNbaV07XHJcbiAgICAgINC+YmplY3QuaW5kZXggPSB0aGlzLmluZGV4SW5QYXJlbnQo0L5iamVjdC5wYXJlbnQsINC+YmplY3QuZWxlbWVudCk7XHJcbiAgICAgIHRoaXMubW92ZVRvKNC+YmplY3QucGxhY2UsINC+YmplY3QuZWxlbWVudCwg0L5iamVjdC5kZXN0aW5hdGlvbik7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vZm9yIChsZXQgaSA9IDA7IGkgPCDQvmJqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgZm9yIChsZXQgaSA9INC+YmplY3RzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGNvbnN0INC+YmplY3QgPSDQvmJqZWN0c1tpXTtcclxuICAgICAgaWYgKNC+YmplY3QuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5kYUNsYXNzbmFtZSkpIHtcclxuICAgICAgICB0aGlzLm1vdmVCYWNrKNC+YmplY3QucGFyZW50LCDQvmJqZWN0LmVsZW1lbnQsINC+YmplY3QuaW5kZXgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5EeW5hbWljQWRhcHQucHJvdG90eXBlLm1vdmVUbyA9IGZ1bmN0aW9uIChwbGFjZSwgZWxlbWVudCwgZGVzdGluYXRpb24pIHtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5kYUNsYXNzbmFtZSk7XHJcbiAgaWYgKHBsYWNlID09PSAnbGFzdCcgfHwgcGxhY2UgPj0gZGVzdGluYXRpb24uY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICBkZXN0aW5hdGlvbi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAocGxhY2UgPT09ICdmaXJzdCcpIHtcclxuICAgIGRlc3RpbmF0aW9uLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIGVsZW1lbnQpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBkZXN0aW5hdGlvbi5jaGlsZHJlbltwbGFjZV0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIGVsZW1lbnQpO1xyXG59O1xyXG5EeW5hbWljQWRhcHQucHJvdG90eXBlLm1vdmVCYWNrID0gZnVuY3Rpb24gKHBhcmVudCwgZWxlbWVudCwgaW5kZXgpIHtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5kYUNsYXNzbmFtZSk7XHJcbiAgaWYgKHBhcmVudC5jaGlsZHJlbltpbmRleF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgcGFyZW50LmNoaWxkcmVuW2luZGV4XS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgZWxlbWVudCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBhcmVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xyXG4gIH1cclxufTtcclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5pbmRleEluUGFyZW50ID0gZnVuY3Rpb24gKHBhcmVudCwgZWxlbWVudCkge1xyXG4gIGNvbnN0IGFycmF5ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwocGFyZW50LmNoaWxkcmVuKTtcclxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhcnJheSwgZWxlbWVudCk7XHJcbn07XHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUuYXJyYXlTb3J0ID0gZnVuY3Rpb24gKGFycikge1xyXG4gIGlmICh0aGlzLnR5cGUgPT09ICdtaW4nKSB7XHJcbiAgICBBcnJheS5wcm90b3R5cGUuc29ydC5jYWxsKGFyciwgZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgaWYgKGEuYnJlYWtwb2ludCA9PT0gYi5icmVha3BvaW50KSB7XHJcbiAgICAgICAgaWYgKGEucGxhY2UgPT09IGIucGxhY2UpIHtcclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGEucGxhY2UgPT09ICdmaXJzdCcgfHwgYi5wbGFjZSA9PT0gJ2xhc3QnKSB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gJ2xhc3QnIHx8IGIucGxhY2UgPT09ICdmaXJzdCcpIHtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGEucGxhY2UgLSBiLnBsYWNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYS5icmVha3BvaW50IC0gYi5icmVha3BvaW50O1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIEFycmF5LnByb3RvdHlwZS5zb3J0LmNhbGwoYXJyLCBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICBpZiAoYS5icmVha3BvaW50ID09PSBiLmJyZWFrcG9pbnQpIHtcclxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gYi5wbGFjZSkge1xyXG4gICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gJ2ZpcnN0JyB8fCBiLnBsYWNlID09PSAnbGFzdCcpIHtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGEucGxhY2UgPT09ICdsYXN0JyB8fCBiLnBsYWNlID09PSAnZmlyc3QnKSB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYi5wbGFjZSAtIGEucGxhY2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBiLmJyZWFrcG9pbnQgLSBhLmJyZWFrcG9pbnQ7XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn07XHJcbmNvbnN0IGRhID0gbmV3IER5bmFtaWNBZGFwdCgnbWF4Jyk7XHJcbmRhLmluaXQoKTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8qKlxyXG4gKiBzZXQgaGFzaCB0byB1cmxcclxuICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXRIYXNoID0gaGFzaCA9PiB7XHJcbiAgaGFzaCA9IGhhc2ggPyBgIyR7aGFzaH1gIDogd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVswXTtcclxuICBoaXN0b3J5LnB1c2hTdGF0ZSgnJywgJycsIGhhc2gpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIGdldCBoYXNoIGZyb20gdXJsXHJcbiAqIEByZXR1cm5zIHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEhhc2ggPSAoKSA9PiB7XHJcbiAgaWYgKGxvY2F0aW9uLmhhc2gpIHtcclxuICAgIHJldHVybiBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gYm9keSBsb2NrXHJcbmV4cG9ydCBsZXQgYm9keUxvY2tTdGF0dXMgPSB0cnVlO1xyXG4vKipcclxuICogdG9nZ2xlcyBib2R5IGxvY2tcclxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYm9keUxvY2tUb2dnbGUgPSAoZGVsYXkgPSA1MDApID0+IHtcclxuICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbG9jaycpKSB7XHJcbiAgICBib2R5VW5sb2NrKGRlbGF5KTtcclxuICB9IGVsc2Uge1xyXG4gICAgYm9keUxvY2soZGVsYXkpO1xyXG4gIH1cclxufTtcclxuLyoqXHJcbiAqIHVubG9ja3MgYm9keVxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcclxuICovXHJcbmV4cG9ydCBjb25zdCBib2R5VW5sb2NrID0gKGRlbGF5ID0gNTAwKSA9PiB7XHJcbiAgaWYgKGJvZHlMb2NrU3RhdHVzKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKTtcclxuICAgIH0sIGRlbGF5KTtcclxuICAgIGJvZHlMb2NrU3RhdHVzID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgYm9keUxvY2tTdGF0dXMgPSB0cnVlO1xyXG4gICAgfSwgZGVsYXkpO1xyXG4gIH1cclxufTtcclxuLyoqXHJcbiAqIGxvY2tzIGJvZHlcclxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYm9keUxvY2sgPSAoZGVsYXkgPSA1MDApID0+IHtcclxuICBpZiAoYm9keUxvY2tTdGF0dXMpIHtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XHJcblxyXG4gICAgYm9keUxvY2tTdGF0dXMgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBib2R5TG9ja1N0YXR1cyA9IHRydWU7XHJcbiAgICB9LCBkZWxheSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7YXJyYXl9IGFycmF5XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhU2V0VmFsdWVcclxuICogcHJvY2VzcyBtZWRpYSByZXF1ZXN0cyBmcm9tIGF0dHJpYnV0ZXNcclxuICovXHJcbmV4cG9ydCBjb25zdCBkYXRhTWVkaWFRdWVyaWVzID0gKGFycmF5LCBkYXRhU2V0VmFsdWUpID0+IHtcclxuICAvLyBnZXQgb2JqZWN0cyB3aXRoIG1lZGlhIHF1ZXJpZXNcclxuICBjb25zdCBtZWRpYSA9IEFycmF5LmZyb20oYXJyYXkpLmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIHNlbGYpIHtcclxuICAgIGlmIChpdGVtLmRhdGFzZXRbZGF0YVNldFZhbHVlXSkge1xyXG4gICAgICByZXR1cm4gaXRlbS5kYXRhc2V0W2RhdGFTZXRWYWx1ZV0uc3BsaXQoJywnKVswXTtcclxuICAgIH1cclxuICB9KTtcclxuICAvLyBvYmplY3RzIHdpdGggbWVkaWEgcXVlcmllcyBpbml0aWFsaXphdGlvblxyXG4gIGlmIChtZWRpYS5sZW5ndGgpIHtcclxuICAgIGNvbnN0IGJyZWFrcG9pbnRzQXJyYXkgPSBbXTtcclxuICAgIG1lZGlhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhcmFtcyA9IGl0ZW0uZGF0YXNldFtkYXRhU2V0VmFsdWVdO1xyXG4gICAgICBjb25zdCBicmVha3BvaW50ID0ge307XHJcbiAgICAgIGNvbnN0IHBhcmFtc0FycmF5ID0gcGFyYW1zLnNwbGl0KCcsJyk7XHJcbiAgICAgIGJyZWFrcG9pbnQudmFsdWUgPSBwYXJhbXNBcnJheVswXTtcclxuICAgICAgYnJlYWtwb2ludC50eXBlID0gcGFyYW1zQXJyYXlbMV0gPyBwYXJhbXNBcnJheVsxXS50cmltKCkgOiAnbWF4JztcclxuICAgICAgYnJlYWtwb2ludC5pdGVtID0gaXRlbTtcclxuICAgICAgYnJlYWtwb2ludHNBcnJheS5wdXNoKGJyZWFrcG9pbnQpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBnZXQgdW5pcXVlIGJyZWFrcG9pbnRzXHJcbiAgICBsZXQgbWRRdWVyaWVzID0gYnJlYWtwb2ludHNBcnJheS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAnKCcgK1xyXG4gICAgICAgIGl0ZW0udHlwZSArXHJcbiAgICAgICAgJy13aWR0aDogJyArXHJcbiAgICAgICAgaXRlbS52YWx1ZSArXHJcbiAgICAgICAgJ3B4KSwnICtcclxuICAgICAgICBpdGVtLnZhbHVlICtcclxuICAgICAgICAnLCcgK1xyXG4gICAgICAgIGl0ZW0udHlwZVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICBtZFF1ZXJpZXMgPSB1bmlxdWVBcnJheShtZFF1ZXJpZXMpO1xyXG4gICAgY29uc3QgbWRRdWVyaWVzQXJyYXkgPSBbXTtcclxuXHJcbiAgICBpZiAobWRRdWVyaWVzLmxlbmd0aCkge1xyXG4gICAgICAvLyB3b3JrIHdpdGggZXZlcnkgYnJlYWtwb2ludFxyXG4gICAgICBtZFF1ZXJpZXMuZm9yRWFjaChicmVha3BvaW50ID0+IHtcclxuICAgICAgICBjb25zdCBwYXJhbXNBcnJheSA9IGJyZWFrcG9pbnQuc3BsaXQoJywnKTtcclxuICAgICAgICBjb25zdCBtZWRpYUJyZWFrcG9pbnQgPSBwYXJhbXNBcnJheVsxXTtcclxuICAgICAgICBjb25zdCBtZWRpYVR5cGUgPSBwYXJhbXNBcnJheVsyXTtcclxuICAgICAgICBjb25zdCBtYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEocGFyYW1zQXJyYXlbMF0pO1xyXG4gICAgICAgIC8vIG9iamVjdHMgd2l0aCBjb25kaXRpb25zXHJcbiAgICAgICAgY29uc3QgaXRlbXNBcnJheSA9IGJyZWFrcG9pbnRzQXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICBpZiAoaXRlbS52YWx1ZSA9PT0gbWVkaWFCcmVha3BvaW50ICYmIGl0ZW0udHlwZSA9PT0gbWVkaWFUeXBlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1kUXVlcmllc0FycmF5LnB1c2goe1xyXG4gICAgICAgICAgaXRlbXNBcnJheSxcclxuICAgICAgICAgIG1hdGNoTWVkaWEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gbWRRdWVyaWVzQXJyYXk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIHNtb290aGx5IHNsaWRlcyB1cFxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcclxuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvd21vcmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBfc2xpZGVVcCA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwLCBzaG93bW9yZSA9IDApID0+IHtcclxuICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XHJcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnX3NsaWRlJyk7XHJcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2hlaWdodCwgbWFyZ2luLCBwYWRkaW5nJztcclxuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XHJcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gYCR7dGFyZ2V0Lm9mZnNldEhlaWdodH1weGA7XHJcbiAgICB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gc2hvd21vcmUgPyBgJHtzaG93bW9yZX1yZW1gIDogYDBgO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xyXG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IDA7XHJcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGFyZ2V0LmhpZGRlbiA9ICFzaG93bW9yZSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgIXNob3dtb3JlID8gdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKSA6IG51bGw7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJyk7XHJcbiAgICAgICFzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKSA6IG51bGw7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKTtcclxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ19zbGlkZScpO1xyXG4gICAgICAvLyBjcmVhdGUgZXZlbnRcclxuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ3NsaWRlVXBEb25lJywge1xyXG4gICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSwgZHVyYXRpb24pO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBzbW9vdGhseSBzbGlkZXMgZG93blxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcclxuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvd21vcmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBfc2xpZGVEb3duID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDAsIHNob3dtb3JlID0gMCkgPT4ge1xyXG4gIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcclxuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdfc2xpZGUnKTtcclxuICAgIHRhcmdldC5oaWRkZW4gPSB0YXJnZXQuaGlkZGVuID8gZmFsc2UgOiBudWxsO1xyXG4gICAgc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpIDogbnVsbDtcclxuICAgIGxldCBoZWlnaHQgPSB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gc2hvd21vcmUgPyBgJHtzaG93bW9yZX1yZW1gIDogYDBgO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xyXG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IDA7XHJcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgIHRhcmdldC5vZmZzZXRIZWlnaHQ7XHJcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2hlaWdodCwgbWFyZ2luLCBwYWRkaW5nJztcclxuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XHJcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKTtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJyk7XHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xyXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnX3NsaWRlJyk7XHJcbiAgICAgIC8vIGNyZWF0ZSBldmVudFxyXG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgIG5ldyBDdXN0b21FdmVudCgnc2xpZGVEb3duRG9uZScsIHtcclxuICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0sIGR1cmF0aW9uKTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogdG9nZ2xlcyBzbW9vdGggc2xpZGVcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxyXG4gKiBAcmV0dXJucyBmdW5jdGlvblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IF9zbGlkZVRvZ2dsZSA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwKSA9PiB7XHJcbiAgaWYgKHRhcmdldC5oaWRkZW4pIHtcclxuICAgIHJldHVybiBfc2xpZGVEb3duKHRhcmdldCwgZHVyYXRpb24pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gX3NsaWRlVXAodGFyZ2V0LCBkdXJhdGlvbik7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIGNvbnZlcnRzIHJlbSB0byBwaXhlbHNcclxuICogQHBhcmFtIHtudW1iZXJ9IHJlbVZhbHVlXHJcbiAqIEByZXR1cm5zIHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbVRvUHgocmVtVmFsdWUpIHtcclxuICAvLyDQn9C+0LvRg9GH0LDQtdC8INGC0LXQutGD0YnQuNC5INCx0LDQt9C+0LLRi9C5INGA0LDQt9C80LXRgCDRiNGA0LjRhNGC0LAgKGZvbnQtc2l6ZSkg0LjQtyDRjdC70LXQvNC10L3RgtCwIDxodG1sPlxyXG4gIHZhciBodG1sRm9udFNpemUgPSBwYXJzZUZsb2F0KFxyXG4gICAgZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmZvbnRTaXplXHJcbiAgKTtcclxuXHJcbiAgLy8g0J/QtdGA0LXQstC+0LTQuNC8INC30L3QsNGH0LXQvdC40LUg0LjQtyByZW0g0LIgcHhcclxuICB2YXIgcHhWYWx1ZSA9IHJlbVZhbHVlICogaHRtbEZvbnRTaXplO1xyXG5cclxuICAvLyDQntC60YDRg9Cz0LvRj9C10Lwg0LfQvdCw0YfQtdC90LjQtSDQtNC+INGG0LXQu9GL0YUg0L/QuNC60YHQtdC70LXQuSAo0L/QviDQttC10LvQsNC90LjRjilcclxuICByZXR1cm4gTWF0aC5yb3VuZChweFZhbHVlKSArICdweCc7XHJcbn1cclxuXHJcbi8vIHJlbW92ZSBjbGFzcyBmcm9tIGFsbCBhcnJheSBlbGVtZW50c1xyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2xhc3NlcyA9IChhcnJheSwgY2xhc3NOYW1lKSA9PiB7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgYXJyYXlbaV0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgYm9keUxvY2tTdGF0dXMsIGJvZHlMb2NrVG9nZ2xlIH0gZnJvbSAnLi91dGlscyc7XHJcblxyXG5jb25zdCBtZW51SW5pdCA9ICgpID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJykpIHtcclxuICAgICAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJyk7XHJcblxyXG4gICAgICAgIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChib2R5TG9ja1N0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ19tZW51LW9wZW5lZCcpO1xyXG4gICAgICAgICAgICAgICAgYm9keUxvY2tUb2dnbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxubWVudUluaXQoKTtcclxuIiwiaW1wb3J0IHsgX3NsaWRlVXAsIF9zbGlkZURvd24sIF9zbGlkZVRvZ2dsZSB9IGZyb20gJy4vdXRpbHMuanMnO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNsYXNzIFNlbGVjdCB7XHJcbiAgICAvLyBzZXR1cCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl90aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gY3VzdG9tIHNlbGVjdCBjbGFzc2VzXHJcbiAgICAgICAgdGhpcy5jbGFzc2VzID0ge1xyXG4gICAgICAgICAgICAvLyBodG1sIGJ1aWxkIGNsYXNzZXNcclxuICAgICAgICAgICAgc2VsOiAnc2VsZWN0JyxcclxuICAgICAgICAgICAgYm9keTogJ3NlbGVjdF9fYm9keScsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnc2VsZWN0X19sYWJlbCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnc2VsZWN0X190aXRsZScsXHJcbiAgICAgICAgICAgIHZhbDogJ3NlbGVjdF9fdmFsdWUnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnc2VsZWN0X19jb250ZW50JyxcclxuICAgICAgICAgICAgb3B0aW9uczogJ3NlbGVjdF9fb3B0aW9ucycsXHJcbiAgICAgICAgICAgIG9wdGlvbjogJ3NlbGVjdF9fb3B0aW9uJyxcclxuICAgICAgICAgICAgc2Nyb2xsOiAnc2VsZWN0X19zY3JvbGwnLFxyXG4gICAgICAgICAgICBncm91cDogJ3NlbGVjdF9fZ3JvdXAnLFxyXG4gICAgICAgICAgICBpbnA6ICdzZWxlY3RfX2lucHV0JyxcclxuICAgICAgICAgICAgYXNzZXQ6ICdzZWxlY3RfX2Fzc2V0JyxcclxuICAgICAgICAgICAgdHh0OiAnc2VsZWN0X190ZXh0JyxcclxuICAgICAgICAgICAgaGludDogJ3NlbGVjdF9faGludCcsXHJcblxyXG4gICAgICAgICAgICAvLyBzdGF0ZSBjbGFzc2VzXHJcbiAgICAgICAgICAgIGFjdGl2ZTogJ19zZWxlY3QtYWN0aXZlJyxcclxuICAgICAgICAgICAgZm9jdXNlZDogJ19zZWxlY3QtZm9jdXNlZCcsXHJcbiAgICAgICAgICAgIG9wZW5lZDogJ19zZWxlY3Qtb3BlbmVkJyxcclxuICAgICAgICAgICAgZmlsbGVkOiAnX3NlbGVjdC1maWxsZWQnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZDogJ19zZWxlY3Qtc2VsZWN0ZWQnLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogJ19zZWxlY3QtZGlzYWJsZWQnLFxyXG5cclxuICAgICAgICAgICAgLy8gYWRkaXRpb25hbCBjbGFzc2VzXHJcbiAgICAgICAgICAgIGxpc3Q6ICdfc2VsZWN0LWxpc3QnLFxyXG4gICAgICAgICAgICBlcnJvcjogJ19zZWxlY3QtZXJyb3InLFxyXG4gICAgICAgICAgICBtdWx0aXBsZTogJ19zZWxlY3QtbXVsdGlwbGUnLFxyXG4gICAgICAgICAgICBjaGVja2JveDogJ19zZWxlY3QtY2hlY2tib3gnLFxyXG4gICAgICAgICAgICBsYWJlbDogJ19zZWxlY3QtbGFiZWwnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gYWxsIHNlbGVjdCBpdGVtc1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKTtcclxuICAgICAgICBpZiAoc2VsZWN0TGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0KHNlbGVjdExpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzZWxlY3QgaW5pdGlhbGl6YXRpb24gJiBidWlsZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLyBpbml0aWFsaXphdGlvblxyXG4gICAgaW5pdChzZWxlY3RMaXN0KSB7XHJcbiAgICAgICAgLy8gaW5pdFxyXG4gICAgICAgIHNlbGVjdExpc3QuZm9yRWFjaCgoc2VsZWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXItcmF0aW5nJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFNlbEl0ZW0oc2VsZWN0LCBpbmRleCArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGV2ZW50c1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICdjbGljaycsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGlvbnMoZSk7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgJ2tleWRvd24nLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb25zKGUpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgICApO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICdmb2N1c2luJyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAnZm9jdXNvdXQnLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb25zKGUpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgLy8gc2luZ2xlIHNlbGVjdCBpdGVtIGluaXRpYWxpemF0aW9uXHJcbiAgICBpbml0U2VsSXRlbShyZWxhdGl2ZVNlbCwgaW5kZXgpIHtcclxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zZWwpO1xyXG4gICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChyZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgcmVsYXRpdmVTZWwuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICBpbmRleCA/IChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbElkID0gaW5kZXgpIDogbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpKSB7XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLmRhdGFzZXQub3B0UGxhY2Vob2xkZXIgPSB0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLmxhYmVsLnNob3cpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbFRpdGxlID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMudGl0bGUpLnR3aW5TZWw7XHJcbiAgICAgICAgICAgICAgICBzZWxUaXRsZS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FmdGVyYmVnaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGA8c3BhbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmxhYmVsfVwiPiR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLmxhYmVsLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkubGFiZWwudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH08L3NwYW4+YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCAhPT0gJzAnKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICAnYmVmb3JlZW5kJyxcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuYm9keX1cIj48ZGl2IGhpZGRlbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLm9wdGlvbnN9XCI+PC9kaXY+PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICAnYmVmb3JlZW5kJyxcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuYm9keX1cIj48ZGl2IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMub3B0aW9uc31cIj48L2Rpdj48L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJ1aWxkKHJlbGF0aXZlU2VsKTtcclxuXHJcbiAgICAgICAgcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCA9IHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgPyByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkIDogJzE1MCc7XHJcbiAgICAgICAgcmVsYXRpdmVTZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgX3RoaXMuaW5pdFNlbGVjdGlvbnMoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBzZWxlY3QgYnVpbGRcclxuICAgIGJ1aWxkKHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudDtcclxuICAgICAgICBjb25zdCBzZWxPYmogPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyBzZXQgaWRcclxuICAgICAgICBzZWxlY3QuZGF0YXNldC5zZWxJZCA9IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSWQ7XHJcbiAgICAgICAgLy8gc2V0IHZhbHVlXHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKTtcclxuICAgICAgICAvLyBzZXQgb3B0aW9uc1xyXG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyhzZWxlY3QsIHJlbGF0aXZlU2VsKTtcclxuICAgICAgICAvLyBzZXQgY3NzIG1vZGlmaWNhdG9yXHJcbiAgICAgICAgcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxBZGRvbkNsYXNzXHJcbiAgICAgICAgICAgID8gc2VsZWN0LmNsYXNzTGlzdC5hZGQoYHNlbGVjdF8ke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsQWRkb25DbGFzc31gKVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgLy8gc2V0IGNsYXNzIGlmIHNlbGVjdCBpcyBtdWx0aXBsZVxyXG4gICAgICAgIHJlbGF0aXZlU2VsLm11bHRpcGxlXHJcbiAgICAgICAgICAgID8gc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLm11bHRpcGxlKVxyXG4gICAgICAgICAgICA6IHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5tdWx0aXBsZSk7XHJcbiAgICAgICAgLy8gc2V0IGNsYXNzIGlmIHNlbGVjdCBjaGVja2JveGVzIGFyZSBzZXRcclxuICAgICAgICByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLWNoZWNrYm94ZXMnKSAmJiByZWxhdGl2ZVNlbC5tdWx0aXBsZVxyXG4gICAgICAgICAgICA/IHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5jaGVja2JveClcclxuICAgICAgICAgICAgOiBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuY2hlY2tib3gpO1xyXG4gICAgICAgIC8vIGRpc2FibGUgc2VsZWN0XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlU2VsZWN0KHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIC8vIHNldCBzZWFyY2ggYWN0aW9ucyBpZiBkYXRhLXNlbC1zZWFyY2ggaXMgc2V0XHJcbiAgICAgICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1zZWFyY2gnKSA/IHRoaXMuc2V0U2VhcmNoQWN0aW9ucyhzZWxlY3QpIDogbnVsbDtcclxuICAgICAgICAvLyBzZXQgc2VsZWN0IGFjdGlvbnMgaWYgaXQncyBpbml0aWFsbHkgb3BlbmVkXHJcbiAgICAgICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1vcGVuZWQnKSA/IHRoaXMuc2V0QWN0aW9uKHNlbGVjdCkgOiBudWxsO1xyXG5cclxuICAgICAgICAvLyBzZXQgc2VsZWN0IGhpbnRcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50KSB7XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgICAgICAgICAgJ2JlZm9yZWVuZCcsXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInNlbGVjdF9faGludFwiPiR7cmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50fTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHZhbGlkYXRlIHNlbGVjdFxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5jbG9zZXN0KCdmb3JtJykpIHtcclxuICAgICAgICAgICAgcmVsYXRpdmVTZWwuY2xvc2VzdCgnZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyhzZWxPYmouY2xhc3Nlcy5maWxsZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsT2JqLmFkZEVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsT2JqLnJlbW92ZUVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzaG93IC8gaGlkZSBzZWxlY3Rpb24gZnJvbSBzZWxlY3QgdGl0bGVcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNob3ctdmFsJykpIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ19zZWxlY3Qtc2hvdy12YWwnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnX3NlbGVjdC1zaG93LXZhbCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHNldCB0d2luIHNlbGVjdCB0aXRsZSB2YWx1ZVxyXG4gICAgc2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGNvbnN0IHNlbEJvZHkgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5ib2R5KS50d2luU2VsO1xyXG4gICAgICAgIGNvbnN0IHNlbFRpdGxlID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMudGl0bGUpLnR3aW5TZWw7XHJcblxyXG4gICAgICAgIGlmIChzZWxUaXRsZSkgc2VsVGl0bGUucmVtb3ZlKCk7XHJcbiAgICAgICAgc2VsQm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aGlzLmdldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpKTtcclxuICAgIH1cclxuICAgIC8vIHNldCB0d2luIHNlbGVjdCBvcHRpb25zXHJcbiAgICBzZXRPcHRpb25zKHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykudHdpblNlbDtcclxuICAgICAgICBjb25zdCByZWxhdGl2ZVNlbE9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS5yZWxhdGl2ZVNlbDtcclxuXHJcbiAgICAgICAgb3B0aW9ucy5pbm5lckhUTUwgPSB0aGlzLmdldE9wdGlvbnMocmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbE9wdGlvbnMucXVlcnlTZWxlY3RvcignW3NlbGVjdGVkXScpKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5jbGFzc2VzLm9wdGlvbn1gKS5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZGlzYWJsZSBzZWxlY3RcclxuICAgIGRpc2FibGVTZWxlY3Qoc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xyXG4gICAgICAgICAgICB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMudGl0bGUpLnR3aW5TZWwuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbWFpbiBhY3Rpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLy8gc2V0IG1haW4gYWN0aW9uc1xyXG4gICAgc2V0QWN0aW9ucyhlKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IGUudHlwZTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5zZWwpKSB8fFxyXG4gICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5saXN0KSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gdGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3QnKVxyXG4gICAgICAgICAgICAgICAgPyB0YXJnZXQuY2xvc2VzdCgnLnNlbGVjdCcpXHJcbiAgICAgICAgICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICBgLiR7dGhpcy5jbGFzc2VzLnNlbH1bZGF0YS1zZWwtaWQ9XCIke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKS5kYXRhc2V0LnNlbGVjdElkXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XCJdYFxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCByZWxhdGl2ZVNlbCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCkucmVsYXRpdmVTZWw7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2NsaWNrJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZWxhdGl2ZVNlbC5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5saXN0KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsTGlzdCA9IHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAuJHt0aGlzLmNsYXNzZXMuc2VsfVtkYXRhLXNlbC1pZD1cIiR7c2VsTGlzdC5kYXRhc2V0LnNlbElkfVwiXSAuc2VsZWN0X19vcHRpb25bZGF0YS1vcHQtdmFsPVwiJHtzZWxMaXN0LmRhdGFzZXQub3B0VmFsfVwiXWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25BY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCwgc2VsT3B0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnRpdGxlKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb24oc2VsZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wdGlvbikpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbE9wdGlvbiA9IHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE9wdGlvbkFjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsLCBzZWxPcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnZm9jdXNpbicgfHwgdHlwZSA9PT0gJ2ZvY3Vzb3V0Jykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnNlbCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdmb2N1c2luJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuZm9jdXNlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmZvY3VzZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuZmlsbGVkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAna2V5ZG93bicgJiYgZS5jb2RlID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUdyb3VwKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlR3JvdXAoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBzZXQgc2luZ2xlIHNlbGVjdCBhY3Rpb25cclxuICAgIHNldEFjdGlvbihzZWxlY3QpIHtcclxuICAgICAgICBjb25zdCByZWxhdGl2ZVNlbCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCkucmVsYXRpdmVTZWw7XHJcbiAgICAgICAgY29uc3Qgc2VsT3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnR3aW5TZWw7XHJcblxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5jbG9zZXN0KCdbZGF0YS1vbmUtc2VsZWN0XScpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdE9uZUdyb3VwID0gcmVsYXRpdmVTZWwuY2xvc2VzdCgnW2RhdGEtb25lLXNlbGVjdF0nKTtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZUdyb3VwKHNlbGVjdE9uZUdyb3VwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2VsT3B0aW9ucy5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuY2xhc3Nlcy5vcGVuZWQpO1xyXG4gICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCAhPT0gJzAnKSB7XHJcbiAgICAgICAgICAgICAgICBfc2xpZGVUb2dnbGUoc2VsT3B0aW9ucywgcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMub3BlbmVkKSAmJlxyXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlJykgJiZcclxuICAgICAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLmVycm9yKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY2xvc2Ugc2luZ2xlIHNlbGVjdCBncm91cFxyXG4gICAgY2xvc2VHcm91cChncm91cCkge1xyXG4gICAgICAgIGNvbnN0IHNlbEdyb3VwID0gZ3JvdXAgPyBncm91cCA6IGRvY3VtZW50O1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSBzZWxHcm91cC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICBgJHt0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5zZWwpfSR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3BlbmVkKX1gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoc2VsZWN0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc2VsZWN0aW9ucy5mb3JFYWNoKChzZWxlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VJdGVtKHNlbGVjdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNsb3NlIHNpbmdsZSBzZWxlY3QgaXRlbVxyXG4gICAgY2xvc2VJdGVtKHNlbGVjdCkge1xyXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0KS5yZWxhdGl2ZVNlbDtcclxuICAgICAgICBjb25zdCBzZWxPcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykudHdpblNlbDtcclxuXHJcbiAgICAgICAgaWYgKCFzZWxPcHRpb25zLmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLm9wZW5lZCk7XHJcbiAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkICE9PSAnMCcpIHtcclxuICAgICAgICAgICAgICAgIF9zbGlkZVVwKHNlbE9wdGlvbnMsIHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gc2V0IHNpbmdsZSBvcHRpb24gYWN0aW9uc1xyXG4gICAgc2V0T3B0aW9uQWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwsIG9wdGlvbikge1xyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBjb25zdCByZWxhdGl2ZVNlbGVjdGlvbnMgPSB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpLmVsZW1lbnRzO1xyXG5cclxuICAgICAgICAgICAgcmVsYXRpdmVTZWxlY3Rpb25zLmZvckVhY2goKHJlbGF0aXZlU2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbGVjdGlvbi5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdHdpblNlbGVjdGlvbnMgPSBzZWxlY3QucXVlcnlTZWxlY3RvckFsbCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCkpO1xyXG4gICAgICAgICAgICB0d2luU2VsZWN0aW9ucy5mb3JFYWNoKCh0d2luU2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbFxyXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBvcHRpb25bdmFsdWU9XCIke3R3aW5TZWxlY3Rpb24uZGF0YXNldC5vcHRWYWx9XCJdYClcclxuICAgICAgICAgICAgICAgICAgICAuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFvcHRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlbGF0aXZlU2VsLnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7b3B0aW9uLmRhdGFzZXQub3B0VmFsfVwiXWApKTtcclxuICAgICAgICAgICAgICAgIHJlbGF0aXZlU2VsXHJcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7b3B0aW9uLmRhdGFzZXQub3B0VmFsfVwiXWApXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RfX29wdGlvbicpXHJcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgob3B0KSA9PiBvcHQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpKTtcclxuICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnNlbGVjdGVkKTtcclxuICAgICAgICAgICAgaWYgKCFyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvdy1zZWxlY3Rpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdC5xdWVyeVNlbGVjdG9yKGAke3RoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wdGlvbil9W2hpZGRlbl1gKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdC5xdWVyeVNlbGVjdG9yKGAke3RoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wdGlvbil9W2hpZGRlbl1gKS5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9wdGlvbi5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLnZhbHVlID0gb3B0aW9uLmhhc0F0dHJpYnV0ZSgnZGF0YS1vcHQtdmFsJylcclxuICAgICAgICAgICAgICAgID8gb3B0aW9uLmRhdGFzZXQub3B0VmFsXHJcbiAgICAgICAgICAgICAgICA6IG9wdGlvbi50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb24oc2VsZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKTtcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGlvbnMocmVsYXRpdmVTZWwpO1xyXG4gICAgfVxyXG4gICAgLy8gc2V0IHNlYXJjaCBhY3Rpb25zXHJcbiAgICBzZXRTZWFyY2hBY3Rpb25zKHNlbGVjdCkge1xyXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgICAgICBjb25zdCBzZWxJbnB1dCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLmlucCkudHdpblNlbDtcclxuICAgICAgICBjb25zdCBzZWxPcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykudHdpblNlbC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICBgLiR7dGhpcy5jbGFzc2VzLm9wdGlvbn1gXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2VsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbE9wdGlvbnMuZm9yRWFjaCgoc2VsT3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsT3B0aW9uLnRleHRDb250ZW50LnRvVXBwZXJDYXNlKCkuaW5kZXhPZihzZWxJbnB1dC52YWx1ZS50b1VwcGVyQ2FzZSgpKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsT3B0aW9uLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxPcHRpb24uaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNlbE9wdGlvbnMuaGlkZGVuID09PSB0cnVlID8gX3RoaXMuc2V0QWN0aW9uKHNlbGVjdCkgOiBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gc2V0IHNlbGVjdCBzdWJ0aXRsZVxyXG4gICAgc2V0U3VidGl0bGUocmVsYXRpdmVTZWwpIHt9XHJcblxyXG4gICAgLy8gdmFsaWRhdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLy8gYWRkIGFuIGVycm9yIHRvIGEgc2VsZWN0XHJcbiAgICBhZGRFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCkge1xyXG4gICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5lcnJvcik7XHJcblxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEVycm9yICYmICFyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnQpIHtcclxuICAgICAgICAgICAgcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICAnYmVmb3JlZW5kJyxcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwic2VsZWN0X19oaW50XCI+JHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEVycm9yfTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyByZW1vdmUgYW4gZXJyb3IgZnJvbSBhIHNlbGVjdFxyXG4gICAgcmVtb3ZlRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpIHtcclxuICAgICAgICBpZiAoc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuZXJyb3IpKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5lcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2hpbnQnKSAmJiAhcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50KSB7XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19oaW50JykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB1dGlscyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLyBnZXQgY3VzdG9tIGNsYXNzXHJcbiAgICBnZXRDbGFzcyhjc3NDbGFzcykge1xyXG4gICAgICAgIHJldHVybiBgLiR7Y3NzQ2xhc3N9YDtcclxuICAgIH1cclxuICAgIC8vIGdldCBzaW5nbGUgc2VsZWN0IGl0ZW1cclxuICAgIGdldFNlbGVjdChzZWxlY3QsIGNzc0NsYXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVsYXRpdmVTZWw6IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSxcclxuICAgICAgICAgICAgdHdpblNlbDogc2VsZWN0LnF1ZXJ5U2VsZWN0b3IodGhpcy5nZXRDbGFzcyhjc3NDbGFzcykpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vIGdldCBzZWxlY3RlZCBpdGVtIHZhbHVlXHJcbiAgICBnZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgbGV0IGF0dHIsXHJcbiAgICAgICAgICAgIGF0dHJDbGFzcyxcclxuICAgICAgICAgICAgdGl0bGVWYWwgPSB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwsIDIpLmh0bWw7XHJcblxyXG4gICAgICAgIC8vIHNldCB0aXRsZSB2YWx1ZVxyXG4gICAgICAgIHRpdGxlVmFsID0gdGl0bGVWYWwubGVuZ3RoXHJcbiAgICAgICAgICAgID8gdGl0bGVWYWxcclxuICAgICAgICAgICAgOiByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbExhYmVsXHJcbiAgICAgICAgICAgID8gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxMYWJlbFxyXG4gICAgICAgICAgICA6ICcnO1xyXG5cclxuICAgICAgICAvLyBzZXQgYWN0aXZlIGNsYXNzIHRvIHNlbGVjdCBpZiBpdCBjb250YWlucyBhbnkgdmFsdWVzXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkudmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuYWN0aXZlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuYWN0aXZlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNldCBzZWxlY3QgbGFiZWxcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1sYWJlbCcpKSB7XHJcbiAgICAgICAgICAgIGF0dHIgPSByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbExhYmVsXHJcbiAgICAgICAgICAgICAgICA/IGAgZGF0YS1zZWwtbGFiZWw9XCIke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsTGFiZWx9XCJgXHJcbiAgICAgICAgICAgICAgICA6IGAgZGF0YS1zZWwtbGFiZWw9XCLQktGL0LHQvtGAXCJgO1xyXG4gICAgICAgICAgICBhdHRyQ2xhc3MgPSBgICR7dGhpcy5jbGFzc2VzLmxhYmVsfWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwdXNoIHNlbGVjdGlvbnMgdG8gdGhlIGxpc3QgaW5zaWRlIG9mIHNlbGVjdCB0aXRsZVxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5tdWx0aXBsZSAmJiByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLWxpc3QnKSkge1xyXG4gICAgICAgICAgICB0aXRsZVZhbCA9IHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbClcclxuICAgICAgICAgICAgICAgIC5lbGVtZW50cy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgKG9wdGlvbikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYDxzcGFuIGRhdGEtb3B0LWlkPVwiJHtzZWxlY3QuZGF0YXNldC5zZWxJZH1cIiBkYXRhLW9wdC12YWw9XCIke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIiBjbGFzcz1cIl9saXN0LWl0ZW1cIj4ke3RoaXMuZ2V0Q29udGVudChvcHRpb24pfTwvc3Bhbj5gXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuam9pbignJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5saXN0ICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVsYXRpdmVTZWwuZGF0YXNldC5saXN0KSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWxhdGl2ZVNlbC5kYXRhc2V0Lmxpc3QpLmlubmVySFRNTCA9IHRpdGxlVmFsO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtc2VhcmNoJykpIHRpdGxlVmFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGluaXQgc2VsZWN0IHNlYXJjaFxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNlYXJjaCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnRpdGxlfVwiPjxzcGFuICR7YXR0cn0gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy52YWx9XCI+PGlucHV0IGF1dG9jb21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIiR7dGl0bGVWYWx9XCIgZGF0YS1wbGFjZWhvbGRlcj1cIiR7dGl0bGVWYWx9XCIgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5pbnB9XCI+PC9zcGFuPjwvZGl2PmA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY3VzdG9tQ2xhc3MgPVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS5lbGVtZW50cy5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHNbMF0uZGF0YXNldC5vcHRDbGFzc1xyXG4gICAgICAgICAgICAgICAgICAgID8gYCAke3RoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHNbMF0uZGF0YXNldC5vcHRDbGFzc31gXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnJztcclxuICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnRpdGxlfVwiPjxzcGFuICR7YXR0ciA/IGF0dHIgOiAnJ30gY2xhc3M9XCIke1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzLnZhbFxyXG4gICAgICAgICAgICB9ICR7YXR0ckNsYXNzID8gYXR0ckNsYXNzIDogJyd9XCI+PHNwYW4gY2xhc3M9XCIke1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzLmNvbnRlbnRcclxuICAgICAgICAgICAgfSR7Y3VzdG9tQ2xhc3N9XCI+JHt0aXRsZVZhbH08L3NwYW4+PC9zcGFuPjwvYnV0dG9uPmA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZ2V0IG9wdGlvbnNcclxuICAgIGdldE9wdGlvbnMocmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBjb25zdCBzZWxTY3JvbGwgPSByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNjcm9sbCcpID8gYGRhdGEtc2ltcGxlYmFyYCA6ICcnO1xyXG4gICAgICAgIGxldCBzZWxTY3JvbGxIZWlnaHQgPSByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbFNjcm9sbFxyXG4gICAgICAgICAgICA/IGBzdHlsZT1cIm1heC1oZWlnaHQ6JHt3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCA/IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsU2Nyb2xsIDogMjJ9cmVtXCJgXHJcbiAgICAgICAgICAgIDogJyc7XHJcbiAgICAgICAgbGV0IHNlbE9wdGlvbnMgPSBBcnJheS5mcm9tKHJlbGF0aXZlU2VsLm9wdGlvbnMpO1xyXG5cclxuICAgICAgICBpZiAoc2VsT3B0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGV0IHNlbE9wdGlvbnNIVE1MID0gYGA7XHJcblxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAodGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkgJiYgIXRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLnNob3cpIHx8XHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbC5tdWx0aXBsZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHNlbE9wdGlvbnMgPSBzZWxPcHRpb25zLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbE9wdGlvbnNIVE1MICs9IHNlbFNjcm9sbFxyXG4gICAgICAgICAgICAgICAgPyBgPGRpdiAke3NlbFNjcm9sbH0gJHtzZWxTY3JvbGxIZWlnaHR9IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuc2Nyb2xsfVwiPmBcclxuICAgICAgICAgICAgICAgIDogJyc7XHJcbiAgICAgICAgICAgIHNlbE9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxPcHRpb25zSFRNTCArPSB0aGlzLmdldE9wdGlvbihvcHRpb24sIHJlbGF0aXZlU2VsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNlbE9wdGlvbnNIVE1MICs9IHNlbFNjcm9sbCA/IGA8L2Rpdj5gIDogJyc7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxPcHRpb25zSFRNTDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgb3B0aW9uXHJcbiAgICBnZXRPcHRpb24ob3B0aW9uLCByZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSBvcHRpb24uc2VsZWN0ZWQgJiYgcmVsYXRpdmVTZWwubXVsdGlwbGUgPyBgICR7dGhpcy5jbGFzc2VzLnNlbGVjdGVkfWAgOiAnJztcclxuICAgICAgICBjb25zdCBzaG93U2VsZWN0aW9uID1cclxuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkICYmICFyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvdy1zZWxlY3Rpb24nKSAmJiAhcmVsYXRpdmVTZWwubXVsdGlwbGVcclxuICAgICAgICAgICAgICAgID8gYGhpZGRlbmBcclxuICAgICAgICAgICAgICAgIDogYGA7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uQ2xhc3MgPSBvcHRpb24uZGF0YXNldC5vcHRDbGFzcyA/IGAgJHtvcHRpb24uZGF0YXNldC5vcHRDbGFzc31gIDogJyc7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uTGluayA9IG9wdGlvbi5kYXRhc2V0Lm9wdGlvbkxpbmsgPyBvcHRpb24uZGF0YXNldC5vcHRpb25MaW5rIDogZmFsc2U7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uTGlua1RhcmdldCA9IG9wdGlvbi5oYXNBdHRyaWJ1dGUoJ2RhdGEtb3B0aW9uLWxpbmstdGFyZ2V0JykgPyBgdGFyZ2V0PVwiX2JsYW5rXCJgIDogJyc7XHJcbiAgICAgICAgbGV0IG9wdGlvbkhUTUwgPSBgYDtcclxuXHJcbiAgICAgICAgb3B0aW9uSFRNTCArPSBvcHRpb25MaW5rXHJcbiAgICAgICAgICAgID8gYDxhICR7b3B0aW9uTGlua1RhcmdldH0gJHtzaG93U2VsZWN0aW9ufSBocmVmPVwiJHtvcHRpb25MaW5rfVwiIGRhdGEtb3B0LXZhbD1cIiR7b3B0aW9uLnZhbHVlfVwiIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMub3B0aW9ufSR7b3B0aW9uQ2xhc3N9JHtzZWxlY3Rpb25zfVwiPmBcclxuICAgICAgICAgICAgOiBgPGJ1dHRvbiAke3Nob3dTZWxlY3Rpb259IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMub3B0aW9ufSR7b3B0aW9uQ2xhc3N9JHtzZWxlY3Rpb25zfVwiIGRhdGEtb3B0LXZhbD1cIiR7b3B0aW9uLnZhbHVlfVwiIHR5cGU9XCJidXR0b25cIj5gO1xyXG4gICAgICAgIG9wdGlvbkhUTUwgKz0gdGhpcy5nZXRDb250ZW50KG9wdGlvbik7XHJcbiAgICAgICAgb3B0aW9uSFRNTCArPSBvcHRpb25MaW5rID8gYDwvYT5gIDogYDwvYnV0dG9uPmA7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbkhUTUw7XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgc2VsZWN0IGNvbnRlbnRcclxuICAgIGdldENvbnRlbnQob3B0aW9uKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uRGF0YSA9IG9wdGlvbi5kYXRhc2V0Lm9wdEFzc2V0ID8gYCR7b3B0aW9uLmRhdGFzZXQub3B0QXNzZXR9YCA6ICcnO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbkRhdGFIVE1MID1cclxuICAgICAgICAgICAgb3B0aW9uRGF0YS5pbmRleE9mKCdpbWcnKSA+PSAwID8gYDxpbWcgc3JjPVwiJHtvcHRpb25EYXRhfVwiIGFsdD1cIlwiPmAgOiBvcHRpb25EYXRhO1xyXG4gICAgICAgIGxldCBvcHRpb25Db250ZW50SFRNTCA9IGBgO1xyXG5cclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuZ3JvdXB9XCI+YCA6ICcnO1xyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5hc3NldH1cIj5gIDogJyc7XHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IG9wdGlvbkRhdGFIVE1MIDogJyc7XHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8L3NwYW4+YCA6ICcnO1xyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy50eHR9XCI+YCA6ICcnO1xyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbi50ZXh0Q29udGVudDtcclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDwvc3Bhbj5gIDogJyc7XHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8L3NwYW4+YCA6ICcnO1xyXG4gICAgICAgIHJldHVybiBvcHRpb25Db250ZW50SFRNTDtcclxuICAgIH1cclxuICAgIC8vIGdldCBzZWxlY3QgcGxhY2Vob2xkZXJcclxuICAgIGdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBBcnJheS5mcm9tKHJlbGF0aXZlU2VsLm9wdGlvbnMpLmZpbmQoKG9wdGlvbikgPT4gIW9wdGlvbi52YWx1ZSk7XHJcblxyXG4gICAgICAgIGlmIChwbGFjZWhvbGRlcikge1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zdWJ0aXRsZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogcGxhY2Vob2xkZXIudGV4dENvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBzaG93OiBwbGFjZWhvbGRlci5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXBoLXNob3cnKSxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogcGxhY2Vob2xkZXIuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1waCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHBsYWNlaG9sZGVyLmRhdGFzZXQub3B0UGxhY2Vob2xkZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgc2VsZWN0ZWQgb3B0aW9ucyBkYXRhXHJcbiAgICBnZXREYXRhKHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbnMgPSBBcnJheS5mcm9tKHJlbGF0aXZlU2VsLm9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSlcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnNlbGVjdGVkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3Rpb25zLnB1c2gocmVsYXRpdmVTZWwub3B0aW9uc1tyZWxhdGl2ZVNlbC5zZWxlY3RlZEluZGV4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzOiBzZWxlY3Rpb25zLm1hcCgob3B0aW9uKSA9PiBvcHRpb24pLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IHNlbGVjdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSkubWFwKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSksXHJcbiAgICAgICAgICAgIGh0bWw6IHNlbGVjdGlvbnMubWFwKChvcHRpb24pID0+IHRoaXMuZ2V0Q29udGVudChvcHRpb24pKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2VsZWN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLy8gaW5pdCBzZWxlY3Rpb25zXHJcbiAgICBpbml0U2VsZWN0aW9ucyhlKSB7XHJcbiAgICAgICAgY29uc3QgcmVsYXRpdmVTZWwgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgdGhpcy5idWlsZChyZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25zKHJlbGF0aXZlU2VsKTtcclxuICAgIH1cclxuICAgIC8vIHNldCBzZWxlY3Rpb25zXHJcbiAgICBzZXRTZWxlY3Rpb25zKHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zdWJtaXQnKSAmJiByZWxhdGl2ZVNlbC52YWx1ZSkge1xyXG4gICAgICAgICAgICBsZXQgdGVtcEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICB0ZW1wQnV0dG9uLnR5cGUgPSAnc3VibWl0JztcclxuICAgICAgICAgICAgcmVsYXRpdmVTZWwuY2xvc2VzdCgnZm9ybScpLmFwcGVuZCh0ZW1wQnV0dG9uKTtcclxuICAgICAgICAgICAgdGVtcEJ1dHRvbi5jbGljaygpO1xyXG4gICAgICAgICAgICB0ZW1wQnV0dG9uLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmZpbGxlZCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCk7XHJcbiAgICB9XHJcbiAgICAvLyBjdXN0b20gc2VsZWN0IGV2ZW50IChsaXN0ZW4gdG8gYW55IHNlbGVjdGlvbnMgLyBtdXRhdGlvbnMpXHJcbiAgICBzZWxlY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudCgnc2VsZWN0aW9uJywge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0OiByZWxhdGl2ZVNlbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxubmV3IFNlbGVjdCh7fSk7XHJcbiIsImltcG9ydCAnLi4vc2Nzcy9zdHlsZS5zY3NzJztcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZm9ybXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBpbXBvcnQgKiBhcyBmb3JtcyBmcm9tICcuL3V0aWxzL2Zvcm1zLmpzJztcclxuXHJcbi8vIGZvcm0gZmllbGRzXHJcbi8vIGZvcm1zLmZvcm1GaWVsZHNJbml0KHsgdmlld1Bhc3M6IGZhbHNlIH0pO1xyXG5cclxuLy8gZm9ybSBzdWJtaXRcclxuLy8gZm9ybXMuZm9ybVN1Ym1pdCgpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB1dGlscyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vaGFtYnVyZ2VyXHJcbmltcG9ydCAnLi91dGlscy9oYW1idXJnZXIuanMnO1xyXG5cclxuLy8gdGFic1xyXG4vLyBpbXBvcnQgJy4vdXRpbHMvdGFicy5qcyc7XHJcblxyXG4vLyBhY2NvcmRpb25cclxuLy8gaW1wb3J0ICcuL3V0aWxzL2FjY29yZGlvbi5qcyc7XHJcblxyXG4vLyBzZWxlY3RcclxuaW1wb3J0ICcuL3V0aWxzL3NlbGVjdC5qcyc7XHJcblxyXG4vLyBtb2RhbHNcclxuLy8gaW1wb3J0ICcuL3V0aWxzL21vZGFscy5qcyc7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGxpYnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gZHluYW1pYyBkb21cclxuaW1wb3J0ICcuL2xpYnMvZGQuanMnO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCAnLi9kZXYvdnptc2sxLmpzJztcclxuaW1wb3J0ICcuL2Rldi9tYXJrdXNETS5qcyc7XHJcbmltcG9ydCAnLi9kZXYvdWtpazAuanMnO1xyXG5pbXBvcnQgJy4vZGV2L2tpZTZlci5qcyc7XHJcbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsImV2ZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiRHluYW1pY0FkYXB0IiwidHlwZSIsInByb3RvdHlwZSIsImluaXQiLCJfdGhpcyIsItC+YmplY3RzIiwiZGFDbGFzc25hbWUiLCJub2RlcyIsImkiLCJsZW5ndGgiLCJub2RlIiwiZGF0YSIsImRhdGFzZXQiLCJkYSIsInRyaW0iLCJkYXRhQXJyYXkiLCJzcGxpdCIsItC+YmplY3QiLCJlbGVtZW50IiwicGFyZW50IiwicGFyZW50Tm9kZSIsImRlc3RpbmF0aW9uIiwicXVlcnlTZWxlY3RvciIsImJyZWFrcG9pbnQiLCJwbGFjZSIsImluZGV4IiwiaW5kZXhJblBhcmVudCIsInB1c2giLCJhcnJheVNvcnQiLCJtZWRpYVF1ZXJpZXMiLCJBcnJheSIsIm1hcCIsImNhbGwiLCJmaWx0ZXIiLCJzZWxmIiwiaW5kZXhPZiIsIm1lZGlhIiwibWVkaWFTcGxpdCIsIlN0cmluZyIsIm1hdGNoTWVkaWEiLCJ3aW5kb3ciLCJtZWRpYUJyZWFrcG9pbnQiLCLQvmJqZWN0c0ZpbHRlciIsImFkZExpc3RlbmVyIiwibWVkaWFIYW5kbGVyIiwibWF0Y2hlcyIsIm1vdmVUbyIsImNvbnRhaW5zIiwibW92ZUJhY2siLCJhZGQiLCJjaGlsZHJlbiIsImluc2VydEFkamFjZW50RWxlbWVudCIsInJlbW92ZSIsInVuZGVmaW5lZCIsImFycmF5Iiwic2xpY2UiLCJhcnIiLCJzb3J0IiwiYSIsImIiLCJzZXRIYXNoIiwiaGFzaCIsImxvY2F0aW9uIiwiaHJlZiIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJnZXRIYXNoIiwicmVwbGFjZSIsImJvZHlMb2NrU3RhdHVzIiwiYm9keUxvY2tUb2dnbGUiLCJkZWxheSIsImFyZ3VtZW50cyIsImRvY3VtZW50RWxlbWVudCIsImJvZHlVbmxvY2siLCJib2R5TG9jayIsInNldFRpbWVvdXQiLCJkYXRhTWVkaWFRdWVyaWVzIiwiZGF0YVNldFZhbHVlIiwiZnJvbSIsImJyZWFrcG9pbnRzQXJyYXkiLCJwYXJhbXMiLCJwYXJhbXNBcnJheSIsInZhbHVlIiwibWRRdWVyaWVzIiwidW5pcXVlQXJyYXkiLCJtZFF1ZXJpZXNBcnJheSIsIm1lZGlhVHlwZSIsIml0ZW1zQXJyYXkiLCJfc2xpZGVVcCIsInRhcmdldCIsImR1cmF0aW9uIiwic2hvd21vcmUiLCJzdHlsZSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyYW5zaXRpb25EdXJhdGlvbiIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsIm92ZXJmbG93IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJoaWRkZW4iLCJyZW1vdmVQcm9wZXJ0eSIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsIl9zbGlkZURvd24iLCJfc2xpZGVUb2dnbGUiLCJyZW1Ub1B4IiwicmVtVmFsdWUiLCJodG1sRm9udFNpemUiLCJwYXJzZUZsb2F0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImZvbnRTaXplIiwicHhWYWx1ZSIsIk1hdGgiLCJyb3VuZCIsInJlbW92ZUNsYXNzZXMiLCJjbGFzc05hbWUiLCJtZW51SW5pdCIsImhhbWJ1cmdlciIsImUiLCJTZWxlY3QiLCJjb25zdHJ1Y3RvciIsImNsYXNzZXMiLCJzZWwiLCJib2R5IiwibGFiZWwiLCJ0aXRsZSIsInZhbCIsImNvbnRlbnQiLCJvcHRpb25zIiwib3B0aW9uIiwic2Nyb2xsIiwiZ3JvdXAiLCJpbnAiLCJhc3NldCIsInR4dCIsImhpbnQiLCJhY3RpdmUiLCJmb2N1c2VkIiwib3BlbmVkIiwiZmlsbGVkIiwic2VsZWN0ZWQiLCJkaXNhYmxlZCIsImxpc3QiLCJlcnJvciIsIm11bHRpcGxlIiwiY2hlY2tib3giLCJzZWxlY3RMaXN0Iiwic2VsZWN0IiwiaW5pdFNlbEl0ZW0iLCJzZXRBY3Rpb25zIiwiYmluZCIsInJlbGF0aXZlU2VsIiwiY3JlYXRlRWxlbWVudCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic2VsSWQiLCJnZXRQbGFjZWhvbGRlciIsIm9wdFBsYWNlaG9sZGVyIiwic2hvdyIsInNlbFRpdGxlIiwiZ2V0U2VsZWN0IiwidHdpblNlbCIsImluc2VydEFkamFjZW50SFRNTCIsInRleHQiLCJzcGVlZCIsImJ1aWxkIiwiaW5pdFNlbGVjdGlvbnMiLCJwYXJlbnRFbGVtZW50Iiwic2VsT2JqIiwic2V0VmFsdWUiLCJzZXRPcHRpb25zIiwic2VsQWRkb25DbGFzcyIsImhhc0F0dHJpYnV0ZSIsImRpc2FibGVTZWxlY3QiLCJzZXRTZWFyY2hBY3Rpb25zIiwic2V0QWN0aW9uIiwic2VsSGludCIsImNsb3Nlc3QiLCJhZGRFcnIiLCJyZW1vdmVFcnIiLCJzZWxCb2R5IiwiZ2V0VmFsdWUiLCJyZWxhdGl2ZVNlbE9wdGlvbnMiLCJpbm5lckhUTUwiLCJnZXRPcHRpb25zIiwiZ2V0Q2xhc3MiLCJzZWxlY3RJZCIsInNlbExpc3QiLCJzZWxPcHRpb24iLCJvcHRWYWwiLCJzZXRPcHRpb25BY3Rpb24iLCJjb2RlIiwiY2xvc2VHcm91cCIsInNlbE9wdGlvbnMiLCJzZWxlY3RPbmVHcm91cCIsInNlbEdyb3VwIiwic2VsZWN0aW9ucyIsInNlbGVjdGlvbiIsImNsb3NlSXRlbSIsInJlbGF0aXZlU2VsZWN0aW9ucyIsImdldERhdGEiLCJlbGVtZW50cyIsInJlbGF0aXZlU2VsZWN0aW9uIiwicmVtb3ZlQXR0cmlidXRlIiwidHdpblNlbGVjdGlvbnMiLCJ0d2luU2VsZWN0aW9uIiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsIm9wdCIsInRleHRDb250ZW50Iiwic2V0U2VsZWN0aW9ucyIsInNlbElucHV0IiwidG9VcHBlckNhc2UiLCJzZXRTdWJ0aXRsZSIsInNlbEVycm9yIiwicmVtb3ZlQ2hpbGQiLCJjc3NDbGFzcyIsImF0dHIiLCJhdHRyQ2xhc3MiLCJ0aXRsZVZhbCIsImh0bWwiLCJzZWxMYWJlbCIsInZhbHVlcyIsImdldENvbnRlbnQiLCJqb2luIiwiY3VzdG9tQ2xhc3MiLCJvcHRDbGFzcyIsInNlbFNjcm9sbCIsInNlbFNjcm9sbEhlaWdodCIsImlubmVyV2lkdGgiLCJzZWxPcHRpb25zSFRNTCIsImdldE9wdGlvbiIsInNob3dTZWxlY3Rpb24iLCJvcHRpb25DbGFzcyIsIm9wdGlvbkxpbmsiLCJvcHRpb25MaW5rVGFyZ2V0Iiwib3B0aW9uSFRNTCIsIm9wdGlvbkRhdGEiLCJvcHRBc3NldCIsIm9wdGlvbkRhdGFIVE1MIiwib3B0aW9uQ29udGVudEhUTUwiLCJwbGFjZWhvbGRlciIsImZpbmQiLCJzdWJ0aXRsZSIsInNlbGVjdGVkSW5kZXgiLCJ0ZW1wQnV0dG9uIiwiYXBwZW5kIiwiY2xpY2siXSwic291cmNlUm9vdCI6IiJ9