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
  if (document.querySelector('.intro__categories-item')) {
    Array.from(document.querySelectorAll('.intro__categories-item')).forEach(category => {
      category.addEventListener('click', () => {
        Array.from(document.querySelectorAll('.intro__categories-item')).forEach(category => {
          category.classList.remove('--active');
        });
        category.classList.add('--active');
      });
    });
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STtNQUNaO0lBQ0osQ0FBQyxDQUNMLENBQUM7RUFDTDtBQUNKO0FBQ0EsSUFBSWhDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7O0FDcm1CYzs7QUFFNUI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQzhCOztBQUU5QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDMkI7O0FBRTNCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDc0I7O0FBRXRCOztBQUV5QjtBQUNFO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvZGV2L3VraWswLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9saWJzL2RkLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL3V0aWxzL2hhbWJ1cmdlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvdXRpbHMvc2VsZWN0LmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX25hdi1pdGVtLWhlYWRpbmcnKTtcblxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCctLWFjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50cm9fX2NhdGVnb3JpZXMtaXRlbScpKSB7XG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmludHJvX19jYXRlZ29yaWVzLWl0ZW0nKSkuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgIGNhdGVnb3J5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmludHJvX19jYXRlZ29yaWVzLWl0ZW0nKSkuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkuY2xhc3NMaXN0LnJlbW92ZSgnLS1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoJy0tYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XHJcbmZ1bmN0aW9uIER5bmFtaWNBZGFwdCh0eXBlKSB7XHJcbiAgdGhpcy50eXBlID0gdHlwZTtcclxufVxyXG5EeW5hbWljQWRhcHQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gIHRoaXMu0L5iamVjdHMgPSBbXTtcclxuICB0aGlzLmRhQ2xhc3NuYW1lID0gJ19keW5hbWljX2FkYXB0Xyc7XHJcbiAgdGhpcy5ub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRhXScpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZXNbaV07XHJcbiAgICBjb25zdCBkYXRhID0gbm9kZS5kYXRhc2V0LmRhLnRyaW0oKTtcclxuICAgIGNvbnN0IGRhdGFBcnJheSA9IGRhdGEuc3BsaXQoJywnKTtcclxuICAgIGNvbnN0INC+YmplY3QgPSB7fTtcclxuICAgINC+YmplY3QuZWxlbWVudCA9IG5vZGU7XHJcbiAgICDQvmJqZWN0LnBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgINC+YmplY3QuZGVzdGluYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRhdGFBcnJheVswXS50cmltKCkpO1xyXG4gICAg0L5iamVjdC5icmVha3BvaW50ID0gZGF0YUFycmF5WzFdID8gZGF0YUFycmF5WzFdLnRyaW0oKSA6ICc3NjcnO1xyXG4gICAg0L5iamVjdC5wbGFjZSA9IGRhdGFBcnJheVsyXSA/IGRhdGFBcnJheVsyXS50cmltKCkgOiAnbGFzdCc7XHJcbiAgICDQvmJqZWN0LmluZGV4ID0gdGhpcy5pbmRleEluUGFyZW50KNC+YmplY3QucGFyZW50LCDQvmJqZWN0LmVsZW1lbnQpO1xyXG4gICAgdGhpcy7QvmJqZWN0cy5wdXNoKNC+YmplY3QpO1xyXG4gIH1cclxuICB0aGlzLmFycmF5U29ydCh0aGlzLtC+YmplY3RzKTtcclxuICB0aGlzLm1lZGlhUXVlcmllcyA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChcclxuICAgIHRoaXMu0L5iamVjdHMsXHJcbiAgICBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICcoJyArXHJcbiAgICAgICAgdGhpcy50eXBlICtcclxuICAgICAgICAnLXdpZHRoOiAnICtcclxuICAgICAgICBpdGVtLmJyZWFrcG9pbnQgK1xyXG4gICAgICAgICdweCksJyArXHJcbiAgICAgICAgaXRlbS5icmVha3BvaW50XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgdGhpc1xyXG4gICk7XHJcbiAgdGhpcy5tZWRpYVF1ZXJpZXMgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoXHJcbiAgICB0aGlzLm1lZGlhUXVlcmllcyxcclxuICAgIGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgc2VsZikge1xyXG4gICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChzZWxmLCBpdGVtKSA9PT0gaW5kZXg7XHJcbiAgICB9XHJcbiAgKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWVkaWFRdWVyaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBtZWRpYSA9IHRoaXMubWVkaWFRdWVyaWVzW2ldO1xyXG4gICAgY29uc3QgbWVkaWFTcGxpdCA9IFN0cmluZy5wcm90b3R5cGUuc3BsaXQuY2FsbChtZWRpYSwgJywnKTtcclxuICAgIGNvbnN0IG1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYVNwbGl0WzBdKTtcclxuICAgIGNvbnN0IG1lZGlhQnJlYWtwb2ludCA9IG1lZGlhU3BsaXRbMV07XHJcbiAgICBjb25zdCDQvmJqZWN0c0ZpbHRlciA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChcclxuICAgICAgdGhpcy7QvmJqZWN0cyxcclxuICAgICAgZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5icmVha3BvaW50ID09PSBtZWRpYUJyZWFrcG9pbnQ7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBtYXRjaE1lZGlhLmFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgX3RoaXMubWVkaWFIYW5kbGVyKG1hdGNoTWVkaWEsINC+YmplY3RzRmlsdGVyKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5tZWRpYUhhbmRsZXIobWF0Y2hNZWRpYSwg0L5iamVjdHNGaWx0ZXIpO1xyXG4gIH1cclxufTtcclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5tZWRpYUhhbmRsZXIgPSBmdW5jdGlvbiAobWF0Y2hNZWRpYSwg0L5iamVjdHMpIHtcclxuICBpZiAobWF0Y2hNZWRpYS5tYXRjaGVzKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8INC+YmplY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0INC+YmplY3QgPSDQvmJqZWN0c1tpXTtcclxuICAgICAg0L5iamVjdC5pbmRleCA9IHRoaXMuaW5kZXhJblBhcmVudCjQvmJqZWN0LnBhcmVudCwg0L5iamVjdC5lbGVtZW50KTtcclxuICAgICAgdGhpcy5tb3ZlVG8o0L5iamVjdC5wbGFjZSwg0L5iamVjdC5lbGVtZW50LCDQvmJqZWN0LmRlc3RpbmF0aW9uKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgLy9mb3IgKGxldCBpID0gMDsgaSA8INC+YmplY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBmb3IgKGxldCBpID0g0L5iamVjdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgY29uc3Qg0L5iamVjdCA9INC+YmplY3RzW2ldO1xyXG4gICAgICBpZiAo0L5iamVjdC5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmRhQ2xhc3NuYW1lKSkge1xyXG4gICAgICAgIHRoaXMubW92ZUJhY2so0L5iamVjdC5wYXJlbnQsINC+YmplY3QuZWxlbWVudCwg0L5iamVjdC5pbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUubW92ZVRvID0gZnVuY3Rpb24gKHBsYWNlLCBlbGVtZW50LCBkZXN0aW5hdGlvbikge1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmRhQ2xhc3NuYW1lKTtcclxuICBpZiAocGxhY2UgPT09ICdsYXN0JyB8fCBwbGFjZSA+PSBkZXN0aW5hdGlvbi5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgIGRlc3RpbmF0aW9uLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZWxlbWVudCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChwbGFjZSA9PT0gJ2ZpcnN0Jykge1xyXG4gICAgZGVzdGluYXRpb24uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgZWxlbWVudCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGRlc3RpbmF0aW9uLmNoaWxkcmVuW3BsYWNlXS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgZWxlbWVudCk7XHJcbn07XHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUubW92ZUJhY2sgPSBmdW5jdGlvbiAocGFyZW50LCBlbGVtZW50LCBpbmRleCkge1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmRhQ2xhc3NuYW1lKTtcclxuICBpZiAocGFyZW50LmNoaWxkcmVuW2luZGV4XSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBwYXJlbnQuY2hpbGRyZW5baW5kZXhdLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBlbGVtZW50KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcGFyZW50Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZWxlbWVudCk7XHJcbiAgfVxyXG59O1xyXG5EeW5hbWljQWRhcHQucHJvdG90eXBlLmluZGV4SW5QYXJlbnQgPSBmdW5jdGlvbiAocGFyZW50LCBlbGVtZW50KSB7XHJcbiAgY29uc3QgYXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChwYXJlbnQuY2hpbGRyZW4pO1xyXG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGFycmF5LCBlbGVtZW50KTtcclxufTtcclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5hcnJheVNvcnQgPSBmdW5jdGlvbiAoYXJyKSB7XHJcbiAgaWYgKHRoaXMudHlwZSA9PT0gJ21pbicpIHtcclxuICAgIEFycmF5LnByb3RvdHlwZS5zb3J0LmNhbGwoYXJyLCBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICBpZiAoYS5icmVha3BvaW50ID09PSBiLmJyZWFrcG9pbnQpIHtcclxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gYi5wbGFjZSkge1xyXG4gICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gJ2ZpcnN0JyB8fCBiLnBsYWNlID09PSAnbGFzdCcpIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhLnBsYWNlID09PSAnbGFzdCcgfHwgYi5wbGFjZSA9PT0gJ2ZpcnN0Jykge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYS5wbGFjZSAtIGIucGxhY2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBhLmJyZWFrcG9pbnQgLSBiLmJyZWFrcG9pbnQ7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgQXJyYXkucHJvdG90eXBlLnNvcnQuY2FsbChhcnIsIGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgIGlmIChhLmJyZWFrcG9pbnQgPT09IGIuYnJlYWtwb2ludCkge1xyXG4gICAgICAgIGlmIChhLnBsYWNlID09PSBiLnBsYWNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhLnBsYWNlID09PSAnZmlyc3QnIHx8IGIucGxhY2UgPT09ICdsYXN0Jykge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gJ2xhc3QnIHx8IGIucGxhY2UgPT09ICdmaXJzdCcpIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBiLnBsYWNlIC0gYS5wbGFjZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGIuYnJlYWtwb2ludCAtIGEuYnJlYWtwb2ludDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufTtcclxuY29uc3QgZGEgPSBuZXcgRHluYW1pY0FkYXB0KCdtYXgnKTtcclxuZGEuaW5pdCgpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLyoqXHJcbiAqIHNldCBoYXNoIHRvIHVybFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldEhhc2ggPSBoYXNoID0+IHtcclxuICBoYXNoID0gaGFzaCA/IGAjJHtoYXNofWAgOiB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnIycpWzBdO1xyXG4gIGhpc3RvcnkucHVzaFN0YXRlKCcnLCAnJywgaGFzaCk7XHJcbn07XHJcblxyXG4vKipcclxuICogZ2V0IGhhc2ggZnJvbSB1cmxcclxuICogQHJldHVybnMgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0SGFzaCA9ICgpID0+IHtcclxuICBpZiAobG9jYXRpb24uaGFzaCkge1xyXG4gICAgcmV0dXJuIGxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBib2R5IGxvY2tcclxuZXhwb3J0IGxldCBib2R5TG9ja1N0YXR1cyA9IHRydWU7XHJcbi8qKlxyXG4gKiB0b2dnbGVzIGJvZHkgbG9ja1xyXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcclxuICovXHJcbmV4cG9ydCBjb25zdCBib2R5TG9ja1RvZ2dsZSA9IChkZWxheSA9IDUwMCkgPT4ge1xyXG4gIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2NrJykpIHtcclxuICAgIGJvZHlVbmxvY2soZGVsYXkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBib2R5TG9jayhkZWxheSk7XHJcbiAgfVxyXG59O1xyXG4vKipcclxuICogdW5sb2NrcyBib2R5XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJvZHlVbmxvY2sgPSAoZGVsYXkgPSA1MDApID0+IHtcclxuICBpZiAoYm9keUxvY2tTdGF0dXMpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpO1xyXG4gICAgfSwgZGVsYXkpO1xyXG4gICAgYm9keUxvY2tTdGF0dXMgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBib2R5TG9ja1N0YXR1cyA9IHRydWU7XHJcbiAgICB9LCBkZWxheSk7XHJcbiAgfVxyXG59O1xyXG4vKipcclxuICogbG9ja3MgYm9keVxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcclxuICovXHJcbmV4cG9ydCBjb25zdCBib2R5TG9jayA9IChkZWxheSA9IDUwMCkgPT4ge1xyXG4gIGlmIChib2R5TG9ja1N0YXR1cykge1xyXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xvY2snKTtcclxuXHJcbiAgICBib2R5TG9ja1N0YXR1cyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcclxuICAgIH0sIGRlbGF5KTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHthcnJheX0gYXJyYXlcclxuICogQHBhcmFtIHtudW1iZXJ9IGRhdGFTZXRWYWx1ZVxyXG4gKiBwcm9jZXNzIG1lZGlhIHJlcXVlc3RzIGZyb20gYXR0cmlidXRlc1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGRhdGFNZWRpYVF1ZXJpZXMgPSAoYXJyYXksIGRhdGFTZXRWYWx1ZSkgPT4ge1xyXG4gIC8vIGdldCBvYmplY3RzIHdpdGggbWVkaWEgcXVlcmllc1xyXG4gIGNvbnN0IG1lZGlhID0gQXJyYXkuZnJvbShhcnJheSkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgc2VsZikge1xyXG4gICAgaWYgKGl0ZW0uZGF0YXNldFtkYXRhU2V0VmFsdWVdKSB7XHJcbiAgICAgIHJldHVybiBpdGVtLmRhdGFzZXRbZGF0YVNldFZhbHVlXS5zcGxpdCgnLCcpWzBdO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8vIG9iamVjdHMgd2l0aCBtZWRpYSBxdWVyaWVzIGluaXRpYWxpemF0aW9uXHJcbiAgaWYgKG1lZGlhLmxlbmd0aCkge1xyXG4gICAgY29uc3QgYnJlYWtwb2ludHNBcnJheSA9IFtdO1xyXG4gICAgbWVkaWEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgcGFyYW1zID0gaXRlbS5kYXRhc2V0W2RhdGFTZXRWYWx1ZV07XHJcbiAgICAgIGNvbnN0IGJyZWFrcG9pbnQgPSB7fTtcclxuICAgICAgY29uc3QgcGFyYW1zQXJyYXkgPSBwYXJhbXMuc3BsaXQoJywnKTtcclxuICAgICAgYnJlYWtwb2ludC52YWx1ZSA9IHBhcmFtc0FycmF5WzBdO1xyXG4gICAgICBicmVha3BvaW50LnR5cGUgPSBwYXJhbXNBcnJheVsxXSA/IHBhcmFtc0FycmF5WzFdLnRyaW0oKSA6ICdtYXgnO1xyXG4gICAgICBicmVha3BvaW50Lml0ZW0gPSBpdGVtO1xyXG4gICAgICBicmVha3BvaW50c0FycmF5LnB1c2goYnJlYWtwb2ludCk7XHJcbiAgICB9KTtcclxuICAgIC8vIGdldCB1bmlxdWUgYnJlYWtwb2ludHNcclxuICAgIGxldCBtZFF1ZXJpZXMgPSBicmVha3BvaW50c0FycmF5Lm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICcoJyArXHJcbiAgICAgICAgaXRlbS50eXBlICtcclxuICAgICAgICAnLXdpZHRoOiAnICtcclxuICAgICAgICBpdGVtLnZhbHVlICtcclxuICAgICAgICAncHgpLCcgK1xyXG4gICAgICAgIGl0ZW0udmFsdWUgK1xyXG4gICAgICAgICcsJyArXHJcbiAgICAgICAgaXRlbS50eXBlXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIG1kUXVlcmllcyA9IHVuaXF1ZUFycmF5KG1kUXVlcmllcyk7XHJcbiAgICBjb25zdCBtZFF1ZXJpZXNBcnJheSA9IFtdO1xyXG5cclxuICAgIGlmIChtZFF1ZXJpZXMubGVuZ3RoKSB7XHJcbiAgICAgIC8vIHdvcmsgd2l0aCBldmVyeSBicmVha3BvaW50XHJcbiAgICAgIG1kUXVlcmllcy5mb3JFYWNoKGJyZWFrcG9pbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtc0FycmF5ID0gYnJlYWtwb2ludC5zcGxpdCgnLCcpO1xyXG4gICAgICAgIGNvbnN0IG1lZGlhQnJlYWtwb2ludCA9IHBhcmFtc0FycmF5WzFdO1xyXG4gICAgICAgIGNvbnN0IG1lZGlhVHlwZSA9IHBhcmFtc0FycmF5WzJdO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShwYXJhbXNBcnJheVswXSk7XHJcbiAgICAgICAgLy8gb2JqZWN0cyB3aXRoIGNvbmRpdGlvbnNcclxuICAgICAgICBjb25zdCBpdGVtc0FycmF5ID0gYnJlYWtwb2ludHNBcnJheS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgIGlmIChpdGVtLnZhbHVlID09PSBtZWRpYUJyZWFrcG9pbnQgJiYgaXRlbS50eXBlID09PSBtZWRpYVR5cGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbWRRdWVyaWVzQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICBpdGVtc0FycmF5LFxyXG4gICAgICAgICAgbWF0Y2hNZWRpYSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBtZFF1ZXJpZXNBcnJheTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogc21vb3RobHkgc2xpZGVzIHVwXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxyXG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cclxuICogQHBhcmFtIHtib29sZWFufSBzaG93bW9yZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IF9zbGlkZVVwID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDAsIHNob3dtb3JlID0gMCkgPT4ge1xyXG4gIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcclxuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdfc2xpZGUnKTtcclxuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmcnO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcclxuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBgJHt0YXJnZXQub2Zmc2V0SGVpZ2h0fXB4YDtcclxuICAgIHRhcmdldC5vZmZzZXRIZWlnaHQ7XHJcbiAgICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBzaG93bW9yZSA/IGAke3Nob3dtb3JlfXJlbWAgOiBgMGA7XHJcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IDA7XHJcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XHJcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gMDtcclxuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0YXJnZXQuaGlkZGVuID0gIXNob3dtb3JlID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAhc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpIDogbnVsbDtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcclxuICAgICAgIXNob3dtb3JlID8gdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpIDogbnVsbDtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xyXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnX3NsaWRlJyk7XHJcbiAgICAgIC8vIGNyZWF0ZSBldmVudFxyXG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgIG5ldyBDdXN0b21FdmVudCgnc2xpZGVVcERvbmUnLCB7XHJcbiAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9LCBkdXJhdGlvbik7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIHNtb290aGx5IHNsaWRlcyBkb3duXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxyXG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cclxuICogQHBhcmFtIHtib29sZWFufSBzaG93bW9yZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IF9zbGlkZURvd24gPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCwgc2hvd21vcmUgPSAwKSA9PiB7XHJcbiAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xyXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ19zbGlkZScpO1xyXG4gICAgdGFyZ2V0LmhpZGRlbiA9IHRhcmdldC5oaWRkZW4gPyBmYWxzZSA6IG51bGw7XHJcbiAgICBzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JykgOiBudWxsO1xyXG4gICAgbGV0IGhlaWdodCA9IHRhcmdldC5vZmZzZXRIZWlnaHQ7XHJcbiAgICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBzaG93bW9yZSA/IGAke3Nob3dtb3JlfXJlbWAgOiBgMGA7XHJcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IDA7XHJcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XHJcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gMDtcclxuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgdGFyZ2V0Lm9mZnNldEhlaWdodDtcclxuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmcnO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcclxuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJyk7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XHJcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdfc2xpZGUnKTtcclxuICAgICAgLy8gY3JlYXRlIGV2ZW50XHJcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCdzbGlkZURvd25Eb25lJywge1xyXG4gICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSwgZHVyYXRpb24pO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiB0b2dnbGVzIHNtb290aCBzbGlkZVxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcclxuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXHJcbiAqIEByZXR1cm5zIGZ1bmN0aW9uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgX3NsaWRlVG9nZ2xlID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDApID0+IHtcclxuICBpZiAodGFyZ2V0LmhpZGRlbikge1xyXG4gICAgcmV0dXJuIF9zbGlkZURvd24odGFyZ2V0LCBkdXJhdGlvbik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBfc2xpZGVVcCh0YXJnZXQsIGR1cmF0aW9uKTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogY29udmVydHMgcmVtIHRvIHBpeGVsc1xyXG4gKiBAcGFyYW0ge251bWJlcn0gcmVtVmFsdWVcclxuICogQHJldHVybnMgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtVG9QeChyZW1WYWx1ZSkge1xyXG4gIC8vINCf0L7Qu9GD0YfQsNC10Lwg0YLQtdC60YPRidC40Lkg0LHQsNC30L7QstGL0Lkg0YDQsNC30LzQtdGAINGI0YDQuNGE0YLQsCAoZm9udC1zaXplKSDQuNC3INGN0LvQtdC80LXQvdGC0LAgPGh0bWw+XHJcbiAgdmFyIGh0bWxGb250U2l6ZSA9IHBhcnNlRmxvYXQoXHJcbiAgICBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZm9udFNpemVcclxuICApO1xyXG5cclxuICAvLyDQn9C10YDQtdCy0L7QtNC40Lwg0LfQvdCw0YfQtdC90LjQtSDQuNC3IHJlbSDQsiBweFxyXG4gIHZhciBweFZhbHVlID0gcmVtVmFsdWUgKiBodG1sRm9udFNpemU7XHJcblxyXG4gIC8vINCe0LrRgNGD0LPQu9GP0LXQvCDQt9C90LDRh9C10L3QuNC1INC00L4g0YbQtdC70YvRhSDQv9C40LrRgdC10LvQtdC5ICjQv9C+INC20LXQu9Cw0L3QuNGOKVxyXG4gIHJldHVybiBNYXRoLnJvdW5kKHB4VmFsdWUpICsgJ3B4JztcclxufVxyXG5cclxuLy8gcmVtb3ZlIGNsYXNzIGZyb20gYWxsIGFycmF5IGVsZW1lbnRzXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDbGFzc2VzID0gKGFycmF5LCBjbGFzc05hbWUpID0+IHtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBhcnJheVtpXS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBib2R5TG9ja1N0YXR1cywgYm9keUxvY2tUb2dnbGUgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmNvbnN0IG1lbnVJbml0ID0gKCkgPT4ge1xyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKSkge1xyXG4gICAgICAgIGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKTtcclxuXHJcbiAgICAgICAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKGJvZHlMb2NrU3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnX21lbnUtb3BlbmVkJyk7XHJcbiAgICAgICAgICAgICAgICBib2R5TG9ja1RvZ2dsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5tZW51SW5pdCgpO1xyXG4iLCJpbXBvcnQgeyBfc2xpZGVVcCwgX3NsaWRlRG93biwgX3NsaWRlVG9nZ2xlIH0gZnJvbSAnLi91dGlscy5qcyc7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY2xhc3MgU2VsZWN0IHtcclxuICAgIC8vIHNldHVwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyBjdXN0b20gc2VsZWN0IGNsYXNzZXNcclxuICAgICAgICB0aGlzLmNsYXNzZXMgPSB7XHJcbiAgICAgICAgICAgIC8vIGh0bWwgYnVpbGQgY2xhc3Nlc1xyXG4gICAgICAgICAgICBzZWw6ICdzZWxlY3QnLFxyXG4gICAgICAgICAgICBib2R5OiAnc2VsZWN0X19ib2R5JyxcclxuICAgICAgICAgICAgbGFiZWw6ICdzZWxlY3RfX2xhYmVsJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdzZWxlY3RfX3RpdGxlJyxcclxuICAgICAgICAgICAgdmFsOiAnc2VsZWN0X192YWx1ZScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdzZWxlY3RfX2NvbnRlbnQnLFxyXG4gICAgICAgICAgICBvcHRpb25zOiAnc2VsZWN0X19vcHRpb25zJyxcclxuICAgICAgICAgICAgb3B0aW9uOiAnc2VsZWN0X19vcHRpb24nLFxyXG4gICAgICAgICAgICBzY3JvbGw6ICdzZWxlY3RfX3Njcm9sbCcsXHJcbiAgICAgICAgICAgIGdyb3VwOiAnc2VsZWN0X19ncm91cCcsXHJcbiAgICAgICAgICAgIGlucDogJ3NlbGVjdF9faW5wdXQnLFxyXG4gICAgICAgICAgICBhc3NldDogJ3NlbGVjdF9fYXNzZXQnLFxyXG4gICAgICAgICAgICB0eHQ6ICdzZWxlY3RfX3RleHQnLFxyXG4gICAgICAgICAgICBoaW50OiAnc2VsZWN0X19oaW50JyxcclxuXHJcbiAgICAgICAgICAgIC8vIHN0YXRlIGNsYXNzZXNcclxuICAgICAgICAgICAgYWN0aXZlOiAnX3NlbGVjdC1hY3RpdmUnLFxyXG4gICAgICAgICAgICBmb2N1c2VkOiAnX3NlbGVjdC1mb2N1c2VkJyxcclxuICAgICAgICAgICAgb3BlbmVkOiAnX3NlbGVjdC1vcGVuZWQnLFxyXG4gICAgICAgICAgICBmaWxsZWQ6ICdfc2VsZWN0LWZpbGxlZCcsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkOiAnX3NlbGVjdC1zZWxlY3RlZCcsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiAnX3NlbGVjdC1kaXNhYmxlZCcsXHJcblxyXG4gICAgICAgICAgICAvLyBhZGRpdGlvbmFsIGNsYXNzZXNcclxuICAgICAgICAgICAgbGlzdDogJ19zZWxlY3QtbGlzdCcsXHJcbiAgICAgICAgICAgIGVycm9yOiAnX3NlbGVjdC1lcnJvcicsXHJcbiAgICAgICAgICAgIG11bHRpcGxlOiAnX3NlbGVjdC1tdWx0aXBsZScsXHJcbiAgICAgICAgICAgIGNoZWNrYm94OiAnX3NlbGVjdC1jaGVja2JveCcsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnX3NlbGVjdC1sYWJlbCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBhbGwgc2VsZWN0IGl0ZW1zXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpO1xyXG4gICAgICAgIGlmIChzZWxlY3RMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXQoc2VsZWN0TGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNlbGVjdCBpbml0aWFsaXphdGlvbiAmIGJ1aWxkIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vIGluaXRpYWxpemF0aW9uXHJcbiAgICBpbml0KHNlbGVjdExpc3QpIHtcclxuICAgICAgICAvLyBpbml0XHJcbiAgICAgICAgc2VsZWN0TGlzdC5mb3JFYWNoKChzZWxlY3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygnc3Rhci1yYXRpbmcnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0U2VsSXRlbShzZWxlY3QsIGluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gZXZlbnRzXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgJ2NsaWNrJyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAna2V5ZG93bicsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGlvbnMoZSk7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgJ2ZvY3VzaW4nLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb25zKGUpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgICApO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICdmb2N1c291dCcsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGlvbnMoZSk7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvLyBzaW5nbGUgc2VsZWN0IGl0ZW0gaW5pdGlhbGl6YXRpb25cclxuICAgIGluaXRTZWxJdGVtKHJlbGF0aXZlU2VsLCBpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnNlbCk7XHJcbiAgICAgICAgcmVsYXRpdmVTZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKHJlbGF0aXZlU2VsKTtcclxuICAgICAgICByZWxhdGl2ZVNlbC5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIGluZGV4ID8gKHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSWQgPSBpbmRleCkgOiBudWxsO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkpIHtcclxuICAgICAgICAgICAgcmVsYXRpdmVTZWwuZGF0YXNldC5vcHRQbGFjZWhvbGRlciA9IHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkubGFiZWwuc2hvdykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsVGl0bGUgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbDtcclxuICAgICAgICAgICAgICAgIHNlbFRpdGxlLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAgICAgICAgICAgICAnYWZ0ZXJiZWdpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMubGFiZWx9XCI+JHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkubGFiZWwudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS5sYWJlbC50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTwvc3Bhbj5gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkICE9PSAnMCcpIHtcclxuICAgICAgICAgICAgc2VsZWN0Lmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAgICAgICAgICdiZWZvcmVlbmQnLFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5ib2R5fVwiPjxkaXYgaGlkZGVuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMub3B0aW9uc31cIj48L2Rpdj48L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0Lmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAgICAgICAgICdiZWZvcmVlbmQnLFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5ib2R5fVwiPjxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5vcHRpb25zfVwiPjwvZGl2PjwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYnVpbGQocmVsYXRpdmVTZWwpO1xyXG5cclxuICAgICAgICByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkID0gcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCA/IHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgOiAnMTUwJztcclxuICAgICAgICByZWxhdGl2ZVNlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBfdGhpcy5pbml0U2VsZWN0aW9ucyhlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIHNlbGVjdCBidWlsZFxyXG4gICAgYnVpbGQocmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3QgPSByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IHNlbE9iaiA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8vIHNldCBpZFxyXG4gICAgICAgIHNlbGVjdC5kYXRhc2V0LnNlbElkID0gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxJZDtcclxuICAgICAgICAvLyBzZXQgdmFsdWVcclxuICAgICAgICB0aGlzLnNldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIC8vIHNldCBvcHRpb25zXHJcbiAgICAgICAgdGhpcy5zZXRPcHRpb25zKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIC8vIHNldCBjc3MgbW9kaWZpY2F0b3JcclxuICAgICAgICByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEFkZG9uQ2xhc3NcclxuICAgICAgICAgICAgPyBzZWxlY3QuY2xhc3NMaXN0LmFkZChgc2VsZWN0XyR7cmVsYXRpdmVTZWwuZGF0YXNldC5zZWxBZGRvbkNsYXNzfWApXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAvLyBzZXQgY2xhc3MgaWYgc2VsZWN0IGlzIG11bHRpcGxlXHJcbiAgICAgICAgcmVsYXRpdmVTZWwubXVsdGlwbGVcclxuICAgICAgICAgICAgPyBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMubXVsdGlwbGUpXHJcbiAgICAgICAgICAgIDogc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLm11bHRpcGxlKTtcclxuICAgICAgICAvLyBzZXQgY2xhc3MgaWYgc2VsZWN0IGNoZWNrYm94ZXMgYXJlIHNldFxyXG4gICAgICAgIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtY2hlY2tib3hlcycpICYmIHJlbGF0aXZlU2VsLm11bHRpcGxlXHJcbiAgICAgICAgICAgID8gc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmNoZWNrYm94KVxyXG4gICAgICAgICAgICA6IHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5jaGVja2JveCk7XHJcbiAgICAgICAgLy8gZGlzYWJsZSBzZWxlY3RcclxuICAgICAgICB0aGlzLmRpc2FibGVTZWxlY3Qoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgLy8gc2V0IHNlYXJjaCBhY3Rpb25zIGlmIGRhdGEtc2VsLXNlYXJjaCBpcyBzZXRcclxuICAgICAgICByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNlYXJjaCcpID8gdGhpcy5zZXRTZWFyY2hBY3Rpb25zKHNlbGVjdCkgOiBudWxsO1xyXG4gICAgICAgIC8vIHNldCBzZWxlY3QgYWN0aW9ucyBpZiBpdCdzIGluaXRpYWxseSBvcGVuZWRcclxuICAgICAgICByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLW9wZW5lZCcpID8gdGhpcy5zZXRBY3Rpb24oc2VsZWN0KSA6IG51bGw7XHJcblxyXG4gICAgICAgIC8vIHNldCBzZWxlY3QgaGludFxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnQpIHtcclxuICAgICAgICAgICAgcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICAnYmVmb3JlZW5kJyxcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwic2VsZWN0X19oaW50XCI+JHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnR9PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdmFsaWRhdGUgc2VsZWN0XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmNsb3Nlc3QoJ2Zvcm0nKSkge1xyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5jbG9zZXN0KCdmb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbE9iai5jbGFzc2VzLmZpbGxlZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxPYmouYWRkRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxPYmoucmVtb3ZlRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNob3cgLyBoaWRlIHNlbGVjdGlvbiBmcm9tIHNlbGVjdCB0aXRsZVxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvdy12YWwnKSkge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCgnX3NlbGVjdC1zaG93LXZhbCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdfc2VsZWN0LXNob3ctdmFsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gc2V0IHR3aW4gc2VsZWN0IHRpdGxlIHZhbHVlXHJcbiAgICBzZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsQm9keSA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLmJvZHkpLnR3aW5TZWw7XHJcbiAgICAgICAgY29uc3Qgc2VsVGl0bGUgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbDtcclxuXHJcbiAgICAgICAgaWYgKHNlbFRpdGxlKSBzZWxUaXRsZS5yZW1vdmUoKTtcclxuICAgICAgICBzZWxCb2R5Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHRoaXMuZ2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCkpO1xyXG4gICAgfVxyXG4gICAgLy8gc2V0IHR3aW4gc2VsZWN0IG9wdGlvbnNcclxuICAgIHNldE9wdGlvbnMoc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS50d2luU2VsO1xyXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsT3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnJlbGF0aXZlU2VsO1xyXG5cclxuICAgICAgICBvcHRpb25zLmlubmVySFRNTCA9IHRoaXMuZ2V0T3B0aW9ucyhyZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsT3B0aW9ucy5xdWVyeVNlbGVjdG9yKCdbc2VsZWN0ZWRdJykpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmNsYXNzZXMub3B0aW9ufWApLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnNlbGVjdGVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBkaXNhYmxlIHNlbGVjdFxyXG4gICAgZGlzYWJsZVNlbGVjdChzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLnRpdGxlKS50d2luU2VsLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xyXG4gICAgICAgICAgICB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBtYWluIGFjdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLyBzZXQgbWFpbiBhY3Rpb25zXHJcbiAgICBzZXRBY3Rpb25zKGUpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICBjb25zdCB0eXBlID0gZS50eXBlO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnNlbCkpIHx8XHJcbiAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3QgPSB0YXJnZXQuY2xvc2VzdCgnLnNlbGVjdCcpXHJcbiAgICAgICAgICAgICAgICA/IHRhcmdldC5jbG9zZXN0KCcuc2VsZWN0JylcclxuICAgICAgICAgICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgICAgICAgICAgIGAuJHt0aGlzLmNsYXNzZXMuc2VsfVtkYXRhLXNlbC1pZD1cIiR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMubGlzdCkpLmRhdGFzZXQuc2VsZWN0SWRcclxuICAgICAgICAgICAgICAgICAgICAgIH1cIl1gXHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0KS5yZWxhdGl2ZVNlbDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnY2xpY2snKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlbGF0aXZlU2VsLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxMaXN0ID0gdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMubGlzdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYC4ke3RoaXMuY2xhc3Nlcy5zZWx9W2RhdGEtc2VsLWlkPVwiJHtzZWxMaXN0LmRhdGFzZXQuc2VsSWR9XCJdIC5zZWxlY3RfX29wdGlvbltkYXRhLW9wdC12YWw9XCIke3NlbExpc3QuZGF0YXNldC5vcHRWYWx9XCJdYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE9wdGlvbkFjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsLCBzZWxPcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMudGl0bGUpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGlvbihzZWxlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3B0aW9uKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsT3B0aW9uID0gdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3B0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0T3B0aW9uQWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwsIHNlbE9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdmb2N1c2luJyB8fCB0eXBlID09PSAnZm9jdXNvdXQnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMuc2VsKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2ZvY3VzaW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5mb2N1c2VkKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuZm9jdXNlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5maWxsZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdrZXlkb3duJyAmJiBlLmNvZGUgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlR3JvdXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VHcm91cCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHNldCBzaW5nbGUgc2VsZWN0IGFjdGlvblxyXG4gICAgc2V0QWN0aW9uKHNlbGVjdCkge1xyXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0KS5yZWxhdGl2ZVNlbDtcclxuICAgICAgICBjb25zdCBzZWxPcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykudHdpblNlbDtcclxuXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmNsb3Nlc3QoJ1tkYXRhLW9uZS1zZWxlY3RdJykpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0T25lR3JvdXAgPSByZWxhdGl2ZVNlbC5jbG9zZXN0KCdbZGF0YS1vbmUtc2VsZWN0XScpO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlR3JvdXAoc2VsZWN0T25lR3JvdXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzZWxPcHRpb25zLmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC50b2dnbGUodGhpcy5jbGFzc2VzLm9wZW5lZCk7XHJcbiAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkICE9PSAnMCcpIHtcclxuICAgICAgICAgICAgICAgIF9zbGlkZVRvZ2dsZShzZWxPcHRpb25zLCByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5vcGVuZWQpICYmXHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUnKSAmJlxyXG4gICAgICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuZXJyb3IpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjbG9zZSBzaW5nbGUgc2VsZWN0IGdyb3VwXHJcbiAgICBjbG9zZUdyb3VwKGdyb3VwKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsR3JvdXAgPSBncm91cCA/IGdyb3VwIDogZG9jdW1lbnQ7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IHNlbEdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgIGAke3RoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnNlbCl9JHt0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcGVuZWQpfWBcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChzZWxlY3Rpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZWxlY3Rpb25zLmZvckVhY2goKHNlbGVjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUl0ZW0oc2VsZWN0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY2xvc2Ugc2luZ2xlIHNlbGVjdCBpdGVtXHJcbiAgICBjbG9zZUl0ZW0oc2VsZWN0KSB7XHJcbiAgICAgICAgY29uc3QgcmVsYXRpdmVTZWwgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QpLnJlbGF0aXZlU2VsO1xyXG4gICAgICAgIGNvbnN0IHNlbE9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS50d2luU2VsO1xyXG5cclxuICAgICAgICBpZiAoIXNlbE9wdGlvbnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMub3BlbmVkKTtcclxuICAgICAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgIT09ICcwJykge1xyXG4gICAgICAgICAgICAgICAgX3NsaWRlVXAoc2VsT3B0aW9ucywgcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBzZXQgc2luZ2xlIG9wdGlvbiBhY3Rpb25zXHJcbiAgICBzZXRPcHRpb25BY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCwgb3B0aW9uKSB7XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsZWN0aW9ucyA9IHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHM7XHJcblxyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbGVjdGlvbnMuZm9yRWFjaCgocmVsYXRpdmVTZWxlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlbGF0aXZlU2VsZWN0aW9uLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0d2luU2VsZWN0aW9ucyA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnNlbGVjdGVkKSk7XHJcbiAgICAgICAgICAgIHR3aW5TZWxlY3Rpb25zLmZvckVhY2goKHR3aW5TZWxlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlbGF0aXZlU2VsXHJcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7dHdpblNlbGVjdGlvbi5kYXRhc2V0Lm9wdFZhbH1cIl1gKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIW9wdGlvbi5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLnNlbGVjdGVkKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVsYXRpdmVTZWwucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPVwiJHtvcHRpb24uZGF0YXNldC5vcHRWYWx9XCJdYCkpO1xyXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVTZWxcclxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPVwiJHtvcHRpb24uZGF0YXNldC5vcHRWYWx9XCJdYClcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdF9fb3B0aW9uJylcclxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChvcHQpID0+IG9wdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCkpO1xyXG4gICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBpZiAoIXJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zaG93LXNlbGVjdGlvbicpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoYCR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3B0aW9uKX1baGlkZGVuXWApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoYCR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3B0aW9uKX1baGlkZGVuXWApLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9uLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVsYXRpdmVTZWwudmFsdWUgPSBvcHRpb24uaGFzQXR0cmlidXRlKCdkYXRhLW9wdC12YWwnKVxyXG4gICAgICAgICAgICAgICAgPyBvcHRpb24uZGF0YXNldC5vcHRWYWxcclxuICAgICAgICAgICAgICAgIDogb3B0aW9uLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICB0aGlzLnNldEFjdGlvbihzZWxlY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0aW9ucyhyZWxhdGl2ZVNlbCk7XHJcbiAgICB9XHJcbiAgICAvLyBzZXQgc2VhcmNoIGFjdGlvbnNcclxuICAgIHNldFNlYXJjaEFjdGlvbnMoc2VsZWN0KSB7XHJcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IHNlbElucHV0ID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMuaW5wKS50d2luU2VsO1xyXG4gICAgICAgIGNvbnN0IHNlbE9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS50d2luU2VsLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgIGAuJHt0aGlzLmNsYXNzZXMub3B0aW9ufWBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBzZWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsT3B0aW9ucy5mb3JFYWNoKChzZWxPcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxPcHRpb24udGV4dENvbnRlbnQudG9VcHBlckNhc2UoKS5pbmRleE9mKHNlbElucHV0LnZhbHVlLnRvVXBwZXJDYXNlKCkpID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxPcHRpb24uaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbE9wdGlvbi5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2VsT3B0aW9ucy5oaWRkZW4gPT09IHRydWUgPyBfdGhpcy5zZXRBY3Rpb24oc2VsZWN0KSA6IG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBzZXQgc2VsZWN0IHN1YnRpdGxlXHJcbiAgICBzZXRTdWJ0aXRsZShyZWxhdGl2ZVNlbCkge31cclxuXHJcbiAgICAvLyB2YWxpZGF0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLyBhZGQgYW4gZXJyb3IgdG8gYSBzZWxlY3RcclxuICAgIGFkZEVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KSB7XHJcbiAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmVycm9yKTtcclxuXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsRXJyb3IgJiYgIXJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSGludCkge1xyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAgICAgICAgICdiZWZvcmVlbmQnLFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJzZWxlY3RfX2hpbnRcIj4ke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsRXJyb3J9PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHJlbW92ZSBhbiBlcnJvciBmcm9tIGEgc2VsZWN0XHJcbiAgICByZW1vdmVFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCkge1xyXG4gICAgICAgIGlmIChzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5lcnJvcikpIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdF9faGludCcpICYmICFyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnQpIHtcclxuICAgICAgICAgICAgcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChyZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2hpbnQnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHV0aWxzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vIGdldCBjdXN0b20gY2xhc3NcclxuICAgIGdldENsYXNzKGNzc0NsYXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIGAuJHtjc3NDbGFzc31gO1xyXG4gICAgfVxyXG4gICAgLy8gZ2V0IHNpbmdsZSBzZWxlY3QgaXRlbVxyXG4gICAgZ2V0U2VsZWN0KHNlbGVjdCwgY3NzQ2xhc3MpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbDogc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLFxyXG4gICAgICAgICAgICB0d2luU2VsOiBzZWxlY3QucXVlcnlTZWxlY3Rvcih0aGlzLmdldENsYXNzKGNzc0NsYXNzKSlcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gZ2V0IHNlbGVjdGVkIGl0ZW0gdmFsdWVcclxuICAgIGdldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBsZXQgYXR0cixcclxuICAgICAgICAgICAgYXR0ckNsYXNzLFxyXG4gICAgICAgICAgICB0aXRsZVZhbCA9IHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCwgMikuaHRtbDtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRpdGxlIHZhbHVlXHJcbiAgICAgICAgdGl0bGVWYWwgPSB0aXRsZVZhbC5sZW5ndGhcclxuICAgICAgICAgICAgPyB0aXRsZVZhbFxyXG4gICAgICAgICAgICA6IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsTGFiZWxcclxuICAgICAgICAgICAgPyByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbExhYmVsXHJcbiAgICAgICAgICAgIDogJyc7XHJcblxyXG4gICAgICAgIC8vIHNldCBhY3RpdmUgY2xhc3MgdG8gc2VsZWN0IGlmIGl0IGNvbnRhaW5zIGFueSB2YWx1ZXNcclxuICAgICAgICBpZiAodGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS52YWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5hY3RpdmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5hY3RpdmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2V0IHNlbGVjdCBsYWJlbFxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLWxhYmVsJykpIHtcclxuICAgICAgICAgICAgYXR0ciA9IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsTGFiZWxcclxuICAgICAgICAgICAgICAgID8gYCBkYXRhLXNlbC1sYWJlbD1cIiR7cmVsYXRpdmVTZWwuZGF0YXNldC5zZWxMYWJlbH1cImBcclxuICAgICAgICAgICAgICAgIDogYCBkYXRhLXNlbC1sYWJlbD1cItCS0YvQsdC+0YBcImA7XHJcbiAgICAgICAgICAgIGF0dHJDbGFzcyA9IGAgJHt0aGlzLmNsYXNzZXMubGFiZWx9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHB1c2ggc2VsZWN0aW9ucyB0byB0aGUgbGlzdCBpbnNpZGUgb2Ygc2VsZWN0IHRpdGxlXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLm11bHRpcGxlICYmIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtbGlzdCcpKSB7XHJcbiAgICAgICAgICAgIHRpdGxlVmFsID0gdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKVxyXG4gICAgICAgICAgICAgICAgLmVsZW1lbnRzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAob3B0aW9uKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgPHNwYW4gZGF0YS1vcHQtaWQ9XCIke3NlbGVjdC5kYXRhc2V0LnNlbElkfVwiIGRhdGEtb3B0LXZhbD1cIiR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiIGNsYXNzPVwiX2xpc3QtaXRlbVwiPiR7dGhpcy5nZXRDb250ZW50KG9wdGlvbil9PC9zcGFuPmBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5qb2luKCcnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0Lmxpc3QgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWxhdGl2ZVNlbC5kYXRhc2V0Lmxpc3QpKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlbGF0aXZlU2VsLmRhdGFzZXQubGlzdCkuaW5uZXJIVE1MID0gdGl0bGVWYWw7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1zZWFyY2gnKSkgdGl0bGVWYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaW5pdCBzZWxlY3Qgc2VhcmNoXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtc2VhcmNoJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMudGl0bGV9XCI+PHNwYW4gJHthdHRyfSBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnZhbH1cIj48aW5wdXQgYXV0b2NvbXBsZXRlPVwib2ZmXCIgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiJHt0aXRsZVZhbH1cIiBkYXRhLXBsYWNlaG9sZGVyPVwiJHt0aXRsZVZhbH1cIiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmlucH1cIj48L3NwYW4+PC9kaXY+YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjdXN0b21DbGFzcyA9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpLmVsZW1lbnRzLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS5lbGVtZW50c1swXS5kYXRhc2V0Lm9wdENsYXNzXHJcbiAgICAgICAgICAgICAgICAgICAgPyBgICR7dGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS5lbGVtZW50c1swXS5kYXRhc2V0Lm9wdENsYXNzfWBcclxuICAgICAgICAgICAgICAgICAgICA6ICcnO1xyXG4gICAgICAgICAgICByZXR1cm4gYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMudGl0bGV9XCI+PHNwYW4gJHthdHRyID8gYXR0ciA6ICcnfSBjbGFzcz1cIiR7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzZXMudmFsXHJcbiAgICAgICAgICAgIH0gJHthdHRyQ2xhc3MgPyBhdHRyQ2xhc3MgOiAnJ31cIj48c3BhbiBjbGFzcz1cIiR7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzZXMuY29udGVudFxyXG4gICAgICAgICAgICB9JHtjdXN0b21DbGFzc31cIj4ke3RpdGxlVmFsfTwvc3Bhbj48L3NwYW4+PC9idXR0b24+YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgb3B0aW9uc1xyXG4gICAgZ2V0T3B0aW9ucyhyZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGNvbnN0IHNlbFNjcm9sbCA9IHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtc2Nyb2xsJykgPyBgZGF0YS1zaW1wbGViYXJgIDogJyc7XHJcbiAgICAgICAgbGV0IHNlbFNjcm9sbEhlaWdodCA9IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsU2Nyb2xsXHJcbiAgICAgICAgICAgID8gYHN0eWxlPVwibWF4LWhlaWdodDoke3dpbmRvdy5pbm5lcldpZHRoID4gNzY4ID8gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxTY3JvbGwgOiAyMn1yZW1cImBcclxuICAgICAgICAgICAgOiAnJztcclxuICAgICAgICBsZXQgc2VsT3B0aW9ucyA9IEFycmF5LmZyb20ocmVsYXRpdmVTZWwub3B0aW9ucyk7XHJcblxyXG4gICAgICAgIGlmIChzZWxPcHRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsZXQgc2VsT3B0aW9uc0hUTUwgPSBgYDtcclxuXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICh0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKSAmJiAhdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkuc2hvdykgfHxcclxuICAgICAgICAgICAgICAgIHJlbGF0aXZlU2VsLm11bHRpcGxlXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgc2VsT3B0aW9ucyA9IHNlbE9wdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsT3B0aW9uc0hUTUwgKz0gc2VsU2Nyb2xsXHJcbiAgICAgICAgICAgICAgICA/IGA8ZGl2ICR7c2VsU2Nyb2xsfSAke3NlbFNjcm9sbEhlaWdodH0gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5zY3JvbGx9XCI+YFxyXG4gICAgICAgICAgICAgICAgOiAnJztcclxuICAgICAgICAgICAgc2VsT3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHNlbE9wdGlvbnNIVE1MICs9IHRoaXMuZ2V0T3B0aW9uKG9wdGlvbiwgcmVsYXRpdmVTZWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2VsT3B0aW9uc0hUTUwgKz0gc2VsU2Nyb2xsID8gYDwvZGl2PmAgOiAnJztcclxuICAgICAgICAgICAgcmV0dXJuIHNlbE9wdGlvbnNIVE1MO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGdldCBvcHRpb25cclxuICAgIGdldE9wdGlvbihvcHRpb24sIHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IG9wdGlvbi5zZWxlY3RlZCAmJiByZWxhdGl2ZVNlbC5tdWx0aXBsZSA/IGAgJHt0aGlzLmNsYXNzZXMuc2VsZWN0ZWR9YCA6ICcnO1xyXG4gICAgICAgIGNvbnN0IHNob3dTZWxlY3Rpb24gPVxyXG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgJiYgIXJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zaG93LXNlbGVjdGlvbicpICYmICFyZWxhdGl2ZVNlbC5tdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgPyBgaGlkZGVuYFxyXG4gICAgICAgICAgICAgICAgOiBgYDtcclxuICAgICAgICBjb25zdCBvcHRpb25DbGFzcyA9IG9wdGlvbi5kYXRhc2V0Lm9wdENsYXNzID8gYCAke29wdGlvbi5kYXRhc2V0Lm9wdENsYXNzfWAgOiAnJztcclxuICAgICAgICBjb25zdCBvcHRpb25MaW5rID0gb3B0aW9uLmRhdGFzZXQub3B0aW9uTGluayA/IG9wdGlvbi5kYXRhc2V0Lm9wdGlvbkxpbmsgOiBmYWxzZTtcclxuICAgICAgICBjb25zdCBvcHRpb25MaW5rVGFyZ2V0ID0gb3B0aW9uLmhhc0F0dHJpYnV0ZSgnZGF0YS1vcHRpb24tbGluay10YXJnZXQnKSA/IGB0YXJnZXQ9XCJfYmxhbmtcImAgOiAnJztcclxuICAgICAgICBsZXQgb3B0aW9uSFRNTCA9IGBgO1xyXG5cclxuICAgICAgICBvcHRpb25IVE1MICs9IG9wdGlvbkxpbmtcclxuICAgICAgICAgICAgPyBgPGEgJHtvcHRpb25MaW5rVGFyZ2V0fSAke3Nob3dTZWxlY3Rpb259IGhyZWY9XCIke29wdGlvbkxpbmt9XCIgZGF0YS1vcHQtdmFsPVwiJHtvcHRpb24udmFsdWV9XCIgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5vcHRpb259JHtvcHRpb25DbGFzc30ke3NlbGVjdGlvbnN9XCI+YFxyXG4gICAgICAgICAgICA6IGA8YnV0dG9uICR7c2hvd1NlbGVjdGlvbn0gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5vcHRpb259JHtvcHRpb25DbGFzc30ke3NlbGVjdGlvbnN9XCIgZGF0YS1vcHQtdmFsPVwiJHtvcHRpb24udmFsdWV9XCIgdHlwZT1cImJ1dHRvblwiPmA7XHJcbiAgICAgICAgb3B0aW9uSFRNTCArPSB0aGlzLmdldENvbnRlbnQob3B0aW9uKTtcclxuICAgICAgICBvcHRpb25IVE1MICs9IG9wdGlvbkxpbmsgPyBgPC9hPmAgOiBgPC9idXR0b24+YDtcclxuICAgICAgICByZXR1cm4gb3B0aW9uSFRNTDtcclxuICAgIH1cclxuICAgIC8vIGdldCBzZWxlY3QgY29udGVudFxyXG4gICAgZ2V0Q29udGVudChvcHRpb24pIHtcclxuICAgICAgICBjb25zdCBvcHRpb25EYXRhID0gb3B0aW9uLmRhdGFzZXQub3B0QXNzZXQgPyBgJHtvcHRpb24uZGF0YXNldC5vcHRBc3NldH1gIDogJyc7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uRGF0YUhUTUwgPVxyXG4gICAgICAgICAgICBvcHRpb25EYXRhLmluZGV4T2YoJ2ltZycpID49IDAgPyBgPGltZyBzcmM9XCIke29wdGlvbkRhdGF9XCIgYWx0PVwiXCI+YCA6IG9wdGlvbkRhdGE7XHJcbiAgICAgICAgbGV0IG9wdGlvbkNvbnRlbnRIVE1MID0gYGA7XHJcblxyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5ncm91cH1cIj5gIDogJyc7XHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8c3BhbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmFzc2V0fVwiPmAgOiAnJztcclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gb3B0aW9uRGF0YUhUTUwgOiAnJztcclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDwvc3Bhbj5gIDogJyc7XHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8c3BhbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnR4dH1cIj5gIDogJyc7XHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uLnRleHRDb250ZW50O1xyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPC9zcGFuPmAgOiAnJztcclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDwvc3Bhbj5gIDogJyc7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbkNvbnRlbnRIVE1MO1xyXG4gICAgfVxyXG4gICAgLy8gZ2V0IHNlbGVjdCBwbGFjZWhvbGRlclxyXG4gICAgZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IEFycmF5LmZyb20ocmVsYXRpdmVTZWwub3B0aW9ucykuZmluZCgob3B0aW9uKSA9PiAhb3B0aW9uLnZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnN1YnRpdGxlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBwbGFjZWhvbGRlci50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgICAgIHNob3c6IHBsYWNlaG9sZGVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtcGgtc2hvdycpLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBwbGFjZWhvbGRlci5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXBoJyksXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcGxhY2Vob2xkZXIuZGF0YXNldC5vcHRQbGFjZWhvbGRlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGdldCBzZWxlY3RlZCBvcHRpb25zIGRhdGFcclxuICAgIGdldERhdGEocmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBsZXQgc2VsZWN0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgc2VsZWN0aW9ucyA9IEFycmF5LmZyb20ocmVsYXRpdmVTZWwub3B0aW9ucylcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24uc2VsZWN0ZWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbnMucHVzaChyZWxhdGl2ZVNlbC5vcHRpb25zW3JlbGF0aXZlU2VsLnNlbGVjdGVkSW5kZXhdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZWxlbWVudHM6IHNlbGVjdGlvbnMubWFwKChvcHRpb24pID0+IG9wdGlvbiksXHJcbiAgICAgICAgICAgIHZhbHVlczogc2VsZWN0aW9ucy5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlKS5tYXAoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlKSxcclxuICAgICAgICAgICAgaHRtbDogc2VsZWN0aW9ucy5tYXAoKG9wdGlvbikgPT4gdGhpcy5nZXRDb250ZW50KG9wdGlvbikpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZWxlY3Rpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLyBpbml0IHNlbGVjdGlvbnNcclxuICAgIGluaXRTZWxlY3Rpb25zKGUpIHtcclxuICAgICAgICBjb25zdCByZWxhdGl2ZVNlbCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICB0aGlzLmJ1aWxkKHJlbGF0aXZlU2VsKTtcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGlvbnMocmVsYXRpdmVTZWwpO1xyXG4gICAgfVxyXG4gICAgLy8gc2V0IHNlbGVjdGlvbnNcclxuICAgIHNldFNlbGVjdGlvbnMocmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3QgPSByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXN1Ym1pdCcpICYmIHJlbGF0aXZlU2VsLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHRlbXBCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5jbG9zZXN0KCdmb3JtJykuYXBwZW5kKHRlbXBCdXR0b24pO1xyXG4gICAgICAgICAgICB0ZW1wQnV0dG9uLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIHRlbXBCdXR0b24ucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuZmlsbGVkKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsKTtcclxuICAgIH1cclxuICAgIC8vIGN1c3RvbSBzZWxlY3QgZXZlbnQgKGxpc3RlbiB0byBhbnkgc2VsZWN0aW9ucyAvIG11dGF0aW9ucylcclxuICAgIHNlbGVjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCdzZWxlY3Rpb24nLCB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Q6IHJlbGF0aXZlU2VsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5uZXcgU2VsZWN0KHt9KTtcclxuIiwiaW1wb3J0ICcuLi9zY3NzL3N0eWxlLnNjc3MnO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmb3JtcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIGltcG9ydCAqIGFzIGZvcm1zIGZyb20gJy4vdXRpbHMvZm9ybXMuanMnO1xyXG5cclxuLy8gZm9ybSBmaWVsZHNcclxuLy8gZm9ybXMuZm9ybUZpZWxkc0luaXQoeyB2aWV3UGFzczogZmFsc2UgfSk7XHJcblxyXG4vLyBmb3JtIHN1Ym1pdFxyXG4vLyBmb3Jtcy5mb3JtU3VibWl0KCk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHV0aWxzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy9oYW1idXJnZXJcclxuaW1wb3J0ICcuL3V0aWxzL2hhbWJ1cmdlci5qcyc7XHJcblxyXG4vLyB0YWJzXHJcbi8vIGltcG9ydCAnLi91dGlscy90YWJzLmpzJztcclxuXHJcbi8vIGFjY29yZGlvblxyXG4vLyBpbXBvcnQgJy4vdXRpbHMvYWNjb3JkaW9uLmpzJztcclxuXHJcbi8vIHNlbGVjdFxyXG5pbXBvcnQgJy4vdXRpbHMvc2VsZWN0LmpzJztcclxuXHJcbi8vIG1vZGFsc1xyXG4vLyBpbXBvcnQgJy4vdXRpbHMvbW9kYWxzLmpzJztcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbGlicyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBkeW5hbWljIGRvbVxyXG5pbXBvcnQgJy4vbGlicy9kZC5qcyc7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0ICcuL2Rldi92em1zazEuanMnO1xyXG5pbXBvcnQgJy4vZGV2L21hcmt1c0RNLmpzJztcclxuaW1wb3J0ICcuL2Rldi91a2lrMC5qcyc7XHJcbmltcG9ydCAnLi9kZXYva2llNmVyLmpzJztcclxuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiZXZlbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJxdWVyeVNlbGVjdG9yIiwiQXJyYXkiLCJmcm9tIiwiY2F0ZWdvcnkiLCJyZW1vdmUiLCJhZGQiLCJEeW5hbWljQWRhcHQiLCJ0eXBlIiwicHJvdG90eXBlIiwiaW5pdCIsIl90aGlzIiwi0L5iamVjdHMiLCJkYUNsYXNzbmFtZSIsIm5vZGVzIiwiaSIsImxlbmd0aCIsIm5vZGUiLCJkYXRhIiwiZGF0YXNldCIsImRhIiwidHJpbSIsImRhdGFBcnJheSIsInNwbGl0Iiwi0L5iamVjdCIsImVsZW1lbnQiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiZGVzdGluYXRpb24iLCJicmVha3BvaW50IiwicGxhY2UiLCJpbmRleCIsImluZGV4SW5QYXJlbnQiLCJwdXNoIiwiYXJyYXlTb3J0IiwibWVkaWFRdWVyaWVzIiwibWFwIiwiY2FsbCIsImZpbHRlciIsInNlbGYiLCJpbmRleE9mIiwibWVkaWEiLCJtZWRpYVNwbGl0IiwiU3RyaW5nIiwibWF0Y2hNZWRpYSIsIndpbmRvdyIsIm1lZGlhQnJlYWtwb2ludCIsItC+YmplY3RzRmlsdGVyIiwiYWRkTGlzdGVuZXIiLCJtZWRpYUhhbmRsZXIiLCJtYXRjaGVzIiwibW92ZVRvIiwiY29udGFpbnMiLCJtb3ZlQmFjayIsImNoaWxkcmVuIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwidW5kZWZpbmVkIiwiYXJyYXkiLCJzbGljZSIsImFyciIsInNvcnQiLCJhIiwiYiIsInNldEhhc2giLCJoYXNoIiwibG9jYXRpb24iLCJocmVmIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImdldEhhc2giLCJyZXBsYWNlIiwiYm9keUxvY2tTdGF0dXMiLCJib2R5TG9ja1RvZ2dsZSIsImRlbGF5IiwiYXJndW1lbnRzIiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keVVubG9jayIsImJvZHlMb2NrIiwic2V0VGltZW91dCIsImRhdGFNZWRpYVF1ZXJpZXMiLCJkYXRhU2V0VmFsdWUiLCJicmVha3BvaW50c0FycmF5IiwicGFyYW1zIiwicGFyYW1zQXJyYXkiLCJ2YWx1ZSIsIm1kUXVlcmllcyIsInVuaXF1ZUFycmF5IiwibWRRdWVyaWVzQXJyYXkiLCJtZWRpYVR5cGUiLCJpdGVtc0FycmF5IiwiX3NsaWRlVXAiLCJ0YXJnZXQiLCJkdXJhdGlvbiIsInNob3dtb3JlIiwic3R5bGUiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvdmVyZmxvdyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiaGlkZGVuIiwicmVtb3ZlUHJvcGVydHkiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJfc2xpZGVEb3duIiwiX3NsaWRlVG9nZ2xlIiwicmVtVG9QeCIsInJlbVZhbHVlIiwiaHRtbEZvbnRTaXplIiwicGFyc2VGbG9hdCIsImdldENvbXB1dGVkU3R5bGUiLCJmb250U2l6ZSIsInB4VmFsdWUiLCJNYXRoIiwicm91bmQiLCJyZW1vdmVDbGFzc2VzIiwiY2xhc3NOYW1lIiwibWVudUluaXQiLCJoYW1idXJnZXIiLCJlIiwiU2VsZWN0IiwiY29uc3RydWN0b3IiLCJjbGFzc2VzIiwic2VsIiwiYm9keSIsImxhYmVsIiwidGl0bGUiLCJ2YWwiLCJjb250ZW50Iiwib3B0aW9ucyIsIm9wdGlvbiIsInNjcm9sbCIsImdyb3VwIiwiaW5wIiwiYXNzZXQiLCJ0eHQiLCJoaW50IiwiYWN0aXZlIiwiZm9jdXNlZCIsIm9wZW5lZCIsImZpbGxlZCIsInNlbGVjdGVkIiwiZGlzYWJsZWQiLCJsaXN0IiwiZXJyb3IiLCJtdWx0aXBsZSIsImNoZWNrYm94Iiwic2VsZWN0TGlzdCIsInNlbGVjdCIsImluaXRTZWxJdGVtIiwic2V0QWN0aW9ucyIsImJpbmQiLCJyZWxhdGl2ZVNlbCIsImNyZWF0ZUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInNlbElkIiwiZ2V0UGxhY2Vob2xkZXIiLCJvcHRQbGFjZWhvbGRlciIsInNob3ciLCJzZWxUaXRsZSIsImdldFNlbGVjdCIsInR3aW5TZWwiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJ0ZXh0Iiwic3BlZWQiLCJidWlsZCIsImluaXRTZWxlY3Rpb25zIiwicGFyZW50RWxlbWVudCIsInNlbE9iaiIsInNldFZhbHVlIiwic2V0T3B0aW9ucyIsInNlbEFkZG9uQ2xhc3MiLCJoYXNBdHRyaWJ1dGUiLCJkaXNhYmxlU2VsZWN0Iiwic2V0U2VhcmNoQWN0aW9ucyIsInNldEFjdGlvbiIsInNlbEhpbnQiLCJjbG9zZXN0IiwiYWRkRXJyIiwicmVtb3ZlRXJyIiwic2VsQm9keSIsImdldFZhbHVlIiwicmVsYXRpdmVTZWxPcHRpb25zIiwiaW5uZXJIVE1MIiwiZ2V0T3B0aW9ucyIsImdldENsYXNzIiwic2VsZWN0SWQiLCJzZWxMaXN0Iiwic2VsT3B0aW9uIiwib3B0VmFsIiwic2V0T3B0aW9uQWN0aW9uIiwiY29kZSIsImNsb3NlR3JvdXAiLCJzZWxPcHRpb25zIiwic2VsZWN0T25lR3JvdXAiLCJzZWxHcm91cCIsInNlbGVjdGlvbnMiLCJzZWxlY3Rpb24iLCJjbG9zZUl0ZW0iLCJyZWxhdGl2ZVNlbGVjdGlvbnMiLCJnZXREYXRhIiwiZWxlbWVudHMiLCJyZWxhdGl2ZVNlbGVjdGlvbiIsInJlbW92ZUF0dHJpYnV0ZSIsInR3aW5TZWxlY3Rpb25zIiwidHdpblNlbGVjdGlvbiIsInNldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJvcHQiLCJ0ZXh0Q29udGVudCIsInNldFNlbGVjdGlvbnMiLCJzZWxJbnB1dCIsInRvVXBwZXJDYXNlIiwic2V0U3VidGl0bGUiLCJzZWxFcnJvciIsInJlbW92ZUNoaWxkIiwiY3NzQ2xhc3MiLCJhdHRyIiwiYXR0ckNsYXNzIiwidGl0bGVWYWwiLCJodG1sIiwic2VsTGFiZWwiLCJ2YWx1ZXMiLCJnZXRDb250ZW50Iiwiam9pbiIsImN1c3RvbUNsYXNzIiwib3B0Q2xhc3MiLCJzZWxTY3JvbGwiLCJzZWxTY3JvbGxIZWlnaHQiLCJpbm5lcldpZHRoIiwic2VsT3B0aW9uc0hUTUwiLCJnZXRPcHRpb24iLCJzaG93U2VsZWN0aW9uIiwib3B0aW9uQ2xhc3MiLCJvcHRpb25MaW5rIiwib3B0aW9uTGlua1RhcmdldCIsIm9wdGlvbkhUTUwiLCJvcHRpb25EYXRhIiwib3B0QXNzZXQiLCJvcHRpb25EYXRhSFRNTCIsIm9wdGlvbkNvbnRlbnRIVE1MIiwicGxhY2Vob2xkZXIiLCJmaW5kIiwic3VidGl0bGUiLCJzZWxlY3RlZEluZGV4IiwidGVtcEJ1dHRvbiIsImFwcGVuZCIsImNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==