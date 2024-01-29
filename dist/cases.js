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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFDWjtJQUNKLENBQUMsQ0FDTCxDQUFDO0VBQ0w7QUFDSjtBQUNBLElBQUloQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7OztBQ3JtQmM7O0FBRTVCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUM4Qjs7QUFFOUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQzJCOztBQUUzQjtBQUNBOztBQUVBOztBQUVBO0FBQ3NCOztBQUV0Qjs7QUFFeUI7QUFDRTtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2Rldi91a2lrMC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvbGlicy9kZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy9oYW1idXJnZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL3V0aWxzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19uYXYtaXRlbS1oZWFkaW5nJyk7XG5cbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnLS1hY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludHJvX19jYXRlZ29yaWVzLWl0ZW0nKSkge1xuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnRyb19fY2F0ZWdvcmllcy1pdGVtJykpLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICBjYXRlZ29yeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnRyb19fY2F0ZWdvcmllcy1pdGVtJykpLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5yZW1vdmUoJy0tYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjYXRlZ29yeS5jbGFzc0xpc3QuYWRkKCctLWFjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5mdW5jdGlvbiBEeW5hbWljQWRhcHQodHlwZSkge1xyXG4gIHRoaXMudHlwZSA9IHR5cGU7XHJcbn1cclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IF90aGlzID0gdGhpcztcclxuICB0aGlzLtC+YmplY3RzID0gW107XHJcbiAgdGhpcy5kYUNsYXNzbmFtZSA9ICdfZHluYW1pY19hZGFwdF8nO1xyXG4gIHRoaXMubm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kYV0nKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLm5vZGVzW2ldO1xyXG4gICAgY29uc3QgZGF0YSA9IG5vZGUuZGF0YXNldC5kYS50cmltKCk7XHJcbiAgICBjb25zdCBkYXRhQXJyYXkgPSBkYXRhLnNwbGl0KCcsJyk7XHJcbiAgICBjb25zdCDQvmJqZWN0ID0ge307XHJcbiAgICDQvmJqZWN0LmVsZW1lbnQgPSBub2RlO1xyXG4gICAg0L5iamVjdC5wYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICDQvmJqZWN0LmRlc3RpbmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihkYXRhQXJyYXlbMF0udHJpbSgpKTtcclxuICAgINC+YmplY3QuYnJlYWtwb2ludCA9IGRhdGFBcnJheVsxXSA/IGRhdGFBcnJheVsxXS50cmltKCkgOiAnNzY3JztcclxuICAgINC+YmplY3QucGxhY2UgPSBkYXRhQXJyYXlbMl0gPyBkYXRhQXJyYXlbMl0udHJpbSgpIDogJ2xhc3QnO1xyXG4gICAg0L5iamVjdC5pbmRleCA9IHRoaXMuaW5kZXhJblBhcmVudCjQvmJqZWN0LnBhcmVudCwg0L5iamVjdC5lbGVtZW50KTtcclxuICAgIHRoaXMu0L5iamVjdHMucHVzaCjQvmJqZWN0KTtcclxuICB9XHJcbiAgdGhpcy5hcnJheVNvcnQodGhpcy7QvmJqZWN0cyk7XHJcbiAgdGhpcy5tZWRpYVF1ZXJpZXMgPSBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoXHJcbiAgICB0aGlzLtC+YmplY3RzLFxyXG4gICAgZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAnKCcgK1xyXG4gICAgICAgIHRoaXMudHlwZSArXHJcbiAgICAgICAgJy13aWR0aDogJyArXHJcbiAgICAgICAgaXRlbS5icmVha3BvaW50ICtcclxuICAgICAgICAncHgpLCcgK1xyXG4gICAgICAgIGl0ZW0uYnJlYWtwb2ludFxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICAgIHRoaXNcclxuICApO1xyXG4gIHRoaXMubWVkaWFRdWVyaWVzID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKFxyXG4gICAgdGhpcy5tZWRpYVF1ZXJpZXMsXHJcbiAgICBmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIHNlbGYpIHtcclxuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoc2VsZiwgaXRlbSkgPT09IGluZGV4O1xyXG4gICAgfVxyXG4gICk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1lZGlhUXVlcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgbWVkaWEgPSB0aGlzLm1lZGlhUXVlcmllc1tpXTtcclxuICAgIGNvbnN0IG1lZGlhU3BsaXQgPSBTdHJpbmcucHJvdG90eXBlLnNwbGl0LmNhbGwobWVkaWEsICcsJyk7XHJcbiAgICBjb25zdCBtYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEobWVkaWFTcGxpdFswXSk7XHJcbiAgICBjb25zdCBtZWRpYUJyZWFrcG9pbnQgPSBtZWRpYVNwbGl0WzFdO1xyXG4gICAgY29uc3Qg0L5iamVjdHNGaWx0ZXIgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoXHJcbiAgICAgIHRoaXMu0L5iamVjdHMsXHJcbiAgICAgIGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uYnJlYWtwb2ludCA9PT0gbWVkaWFCcmVha3BvaW50O1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgbWF0Y2hNZWRpYS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgIF90aGlzLm1lZGlhSGFuZGxlcihtYXRjaE1lZGlhLCDQvmJqZWN0c0ZpbHRlcik7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubWVkaWFIYW5kbGVyKG1hdGNoTWVkaWEsINC+YmplY3RzRmlsdGVyKTtcclxuICB9XHJcbn07XHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUubWVkaWFIYW5kbGVyID0gZnVuY3Rpb24gKG1hdGNoTWVkaWEsINC+YmplY3RzKSB7XHJcbiAgaWYgKG1hdGNoTWVkaWEubWF0Y2hlcykge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCDQvmJqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCDQvmJqZWN0ID0g0L5iamVjdHNbaV07XHJcbiAgICAgINC+YmplY3QuaW5kZXggPSB0aGlzLmluZGV4SW5QYXJlbnQo0L5iamVjdC5wYXJlbnQsINC+YmplY3QuZWxlbWVudCk7XHJcbiAgICAgIHRoaXMubW92ZVRvKNC+YmplY3QucGxhY2UsINC+YmplY3QuZWxlbWVudCwg0L5iamVjdC5kZXN0aW5hdGlvbik7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vZm9yIChsZXQgaSA9IDA7IGkgPCDQvmJqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgZm9yIChsZXQgaSA9INC+YmplY3RzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGNvbnN0INC+YmplY3QgPSDQvmJqZWN0c1tpXTtcclxuICAgICAgaWYgKNC+YmplY3QuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5kYUNsYXNzbmFtZSkpIHtcclxuICAgICAgICB0aGlzLm1vdmVCYWNrKNC+YmplY3QucGFyZW50LCDQvmJqZWN0LmVsZW1lbnQsINC+YmplY3QuaW5kZXgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5EeW5hbWljQWRhcHQucHJvdG90eXBlLm1vdmVUbyA9IGZ1bmN0aW9uIChwbGFjZSwgZWxlbWVudCwgZGVzdGluYXRpb24pIHtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5kYUNsYXNzbmFtZSk7XHJcbiAgaWYgKHBsYWNlID09PSAnbGFzdCcgfHwgcGxhY2UgPj0gZGVzdGluYXRpb24uY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICBkZXN0aW5hdGlvbi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAocGxhY2UgPT09ICdmaXJzdCcpIHtcclxuICAgIGRlc3RpbmF0aW9uLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIGVsZW1lbnQpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBkZXN0aW5hdGlvbi5jaGlsZHJlbltwbGFjZV0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIGVsZW1lbnQpO1xyXG59O1xyXG5EeW5hbWljQWRhcHQucHJvdG90eXBlLm1vdmVCYWNrID0gZnVuY3Rpb24gKHBhcmVudCwgZWxlbWVudCwgaW5kZXgpIHtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5kYUNsYXNzbmFtZSk7XHJcbiAgaWYgKHBhcmVudC5jaGlsZHJlbltpbmRleF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgcGFyZW50LmNoaWxkcmVuW2luZGV4XS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgZWxlbWVudCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBhcmVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xyXG4gIH1cclxufTtcclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5pbmRleEluUGFyZW50ID0gZnVuY3Rpb24gKHBhcmVudCwgZWxlbWVudCkge1xyXG4gIGNvbnN0IGFycmF5ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwocGFyZW50LmNoaWxkcmVuKTtcclxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhcnJheSwgZWxlbWVudCk7XHJcbn07XHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUuYXJyYXlTb3J0ID0gZnVuY3Rpb24gKGFycikge1xyXG4gIGlmICh0aGlzLnR5cGUgPT09ICdtaW4nKSB7XHJcbiAgICBBcnJheS5wcm90b3R5cGUuc29ydC5jYWxsKGFyciwgZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgaWYgKGEuYnJlYWtwb2ludCA9PT0gYi5icmVha3BvaW50KSB7XHJcbiAgICAgICAgaWYgKGEucGxhY2UgPT09IGIucGxhY2UpIHtcclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGEucGxhY2UgPT09ICdmaXJzdCcgfHwgYi5wbGFjZSA9PT0gJ2xhc3QnKSB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gJ2xhc3QnIHx8IGIucGxhY2UgPT09ICdmaXJzdCcpIHtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGEucGxhY2UgLSBiLnBsYWNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYS5icmVha3BvaW50IC0gYi5icmVha3BvaW50O1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIEFycmF5LnByb3RvdHlwZS5zb3J0LmNhbGwoYXJyLCBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICBpZiAoYS5icmVha3BvaW50ID09PSBiLmJyZWFrcG9pbnQpIHtcclxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gYi5wbGFjZSkge1xyXG4gICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gJ2ZpcnN0JyB8fCBiLnBsYWNlID09PSAnbGFzdCcpIHtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGEucGxhY2UgPT09ICdsYXN0JyB8fCBiLnBsYWNlID09PSAnZmlyc3QnKSB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYi5wbGFjZSAtIGEucGxhY2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBiLmJyZWFrcG9pbnQgLSBhLmJyZWFrcG9pbnQ7XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn07XHJcbmNvbnN0IGRhID0gbmV3IER5bmFtaWNBZGFwdCgnbWF4Jyk7XHJcbmRhLmluaXQoKTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8qKlxyXG4gKiBzZXQgaGFzaCB0byB1cmxcclxuICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXRIYXNoID0gaGFzaCA9PiB7XHJcbiAgaGFzaCA9IGhhc2ggPyBgIyR7aGFzaH1gIDogd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVswXTtcclxuICBoaXN0b3J5LnB1c2hTdGF0ZSgnJywgJycsIGhhc2gpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIGdldCBoYXNoIGZyb20gdXJsXHJcbiAqIEByZXR1cm5zIHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEhhc2ggPSAoKSA9PiB7XHJcbiAgaWYgKGxvY2F0aW9uLmhhc2gpIHtcclxuICAgIHJldHVybiBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gYm9keSBsb2NrXHJcbmV4cG9ydCBsZXQgYm9keUxvY2tTdGF0dXMgPSB0cnVlO1xyXG4vKipcclxuICogdG9nZ2xlcyBib2R5IGxvY2tcclxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYm9keUxvY2tUb2dnbGUgPSAoZGVsYXkgPSA1MDApID0+IHtcclxuICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbG9jaycpKSB7XHJcbiAgICBib2R5VW5sb2NrKGRlbGF5KTtcclxuICB9IGVsc2Uge1xyXG4gICAgYm9keUxvY2soZGVsYXkpO1xyXG4gIH1cclxufTtcclxuLyoqXHJcbiAqIHVubG9ja3MgYm9keVxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcclxuICovXHJcbmV4cG9ydCBjb25zdCBib2R5VW5sb2NrID0gKGRlbGF5ID0gNTAwKSA9PiB7XHJcbiAgaWYgKGJvZHlMb2NrU3RhdHVzKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKTtcclxuICAgIH0sIGRlbGF5KTtcclxuICAgIGJvZHlMb2NrU3RhdHVzID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgYm9keUxvY2tTdGF0dXMgPSB0cnVlO1xyXG4gICAgfSwgZGVsYXkpO1xyXG4gIH1cclxufTtcclxuLyoqXHJcbiAqIGxvY2tzIGJvZHlcclxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYm9keUxvY2sgPSAoZGVsYXkgPSA1MDApID0+IHtcclxuICBpZiAoYm9keUxvY2tTdGF0dXMpIHtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XHJcblxyXG4gICAgYm9keUxvY2tTdGF0dXMgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBib2R5TG9ja1N0YXR1cyA9IHRydWU7XHJcbiAgICB9LCBkZWxheSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7YXJyYXl9IGFycmF5XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhU2V0VmFsdWVcclxuICogcHJvY2VzcyBtZWRpYSByZXF1ZXN0cyBmcm9tIGF0dHJpYnV0ZXNcclxuICovXHJcbmV4cG9ydCBjb25zdCBkYXRhTWVkaWFRdWVyaWVzID0gKGFycmF5LCBkYXRhU2V0VmFsdWUpID0+IHtcclxuICAvLyBnZXQgb2JqZWN0cyB3aXRoIG1lZGlhIHF1ZXJpZXNcclxuICBjb25zdCBtZWRpYSA9IEFycmF5LmZyb20oYXJyYXkpLmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIHNlbGYpIHtcclxuICAgIGlmIChpdGVtLmRhdGFzZXRbZGF0YVNldFZhbHVlXSkge1xyXG4gICAgICByZXR1cm4gaXRlbS5kYXRhc2V0W2RhdGFTZXRWYWx1ZV0uc3BsaXQoJywnKVswXTtcclxuICAgIH1cclxuICB9KTtcclxuICAvLyBvYmplY3RzIHdpdGggbWVkaWEgcXVlcmllcyBpbml0aWFsaXphdGlvblxyXG4gIGlmIChtZWRpYS5sZW5ndGgpIHtcclxuICAgIGNvbnN0IGJyZWFrcG9pbnRzQXJyYXkgPSBbXTtcclxuICAgIG1lZGlhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhcmFtcyA9IGl0ZW0uZGF0YXNldFtkYXRhU2V0VmFsdWVdO1xyXG4gICAgICBjb25zdCBicmVha3BvaW50ID0ge307XHJcbiAgICAgIGNvbnN0IHBhcmFtc0FycmF5ID0gcGFyYW1zLnNwbGl0KCcsJyk7XHJcbiAgICAgIGJyZWFrcG9pbnQudmFsdWUgPSBwYXJhbXNBcnJheVswXTtcclxuICAgICAgYnJlYWtwb2ludC50eXBlID0gcGFyYW1zQXJyYXlbMV0gPyBwYXJhbXNBcnJheVsxXS50cmltKCkgOiAnbWF4JztcclxuICAgICAgYnJlYWtwb2ludC5pdGVtID0gaXRlbTtcclxuICAgICAgYnJlYWtwb2ludHNBcnJheS5wdXNoKGJyZWFrcG9pbnQpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBnZXQgdW5pcXVlIGJyZWFrcG9pbnRzXHJcbiAgICBsZXQgbWRRdWVyaWVzID0gYnJlYWtwb2ludHNBcnJheS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAnKCcgK1xyXG4gICAgICAgIGl0ZW0udHlwZSArXHJcbiAgICAgICAgJy13aWR0aDogJyArXHJcbiAgICAgICAgaXRlbS52YWx1ZSArXHJcbiAgICAgICAgJ3B4KSwnICtcclxuICAgICAgICBpdGVtLnZhbHVlICtcclxuICAgICAgICAnLCcgK1xyXG4gICAgICAgIGl0ZW0udHlwZVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICBtZFF1ZXJpZXMgPSB1bmlxdWVBcnJheShtZFF1ZXJpZXMpO1xyXG4gICAgY29uc3QgbWRRdWVyaWVzQXJyYXkgPSBbXTtcclxuXHJcbiAgICBpZiAobWRRdWVyaWVzLmxlbmd0aCkge1xyXG4gICAgICAvLyB3b3JrIHdpdGggZXZlcnkgYnJlYWtwb2ludFxyXG4gICAgICBtZFF1ZXJpZXMuZm9yRWFjaChicmVha3BvaW50ID0+IHtcclxuICAgICAgICBjb25zdCBwYXJhbXNBcnJheSA9IGJyZWFrcG9pbnQuc3BsaXQoJywnKTtcclxuICAgICAgICBjb25zdCBtZWRpYUJyZWFrcG9pbnQgPSBwYXJhbXNBcnJheVsxXTtcclxuICAgICAgICBjb25zdCBtZWRpYVR5cGUgPSBwYXJhbXNBcnJheVsyXTtcclxuICAgICAgICBjb25zdCBtYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEocGFyYW1zQXJyYXlbMF0pO1xyXG4gICAgICAgIC8vIG9iamVjdHMgd2l0aCBjb25kaXRpb25zXHJcbiAgICAgICAgY29uc3QgaXRlbXNBcnJheSA9IGJyZWFrcG9pbnRzQXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICBpZiAoaXRlbS52YWx1ZSA9PT0gbWVkaWFCcmVha3BvaW50ICYmIGl0ZW0udHlwZSA9PT0gbWVkaWFUeXBlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1kUXVlcmllc0FycmF5LnB1c2goe1xyXG4gICAgICAgICAgaXRlbXNBcnJheSxcclxuICAgICAgICAgIG1hdGNoTWVkaWEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gbWRRdWVyaWVzQXJyYXk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIHNtb290aGx5IHNsaWRlcyB1cFxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcclxuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvd21vcmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBfc2xpZGVVcCA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwLCBzaG93bW9yZSA9IDApID0+IHtcclxuICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XHJcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnX3NsaWRlJyk7XHJcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2hlaWdodCwgbWFyZ2luLCBwYWRkaW5nJztcclxuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XHJcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gYCR7dGFyZ2V0Lm9mZnNldEhlaWdodH1weGA7XHJcbiAgICB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gc2hvd21vcmUgPyBgJHtzaG93bW9yZX1yZW1gIDogYDBgO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xyXG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IDA7XHJcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGFyZ2V0LmhpZGRlbiA9ICFzaG93bW9yZSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgIXNob3dtb3JlID8gdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKSA6IG51bGw7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJyk7XHJcbiAgICAgICFzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKSA6IG51bGw7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKTtcclxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ19zbGlkZScpO1xyXG4gICAgICAvLyBjcmVhdGUgZXZlbnRcclxuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ3NsaWRlVXBEb25lJywge1xyXG4gICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSwgZHVyYXRpb24pO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBzbW9vdGhseSBzbGlkZXMgZG93blxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcclxuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvd21vcmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBfc2xpZGVEb3duID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDAsIHNob3dtb3JlID0gMCkgPT4ge1xyXG4gIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcclxuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdfc2xpZGUnKTtcclxuICAgIHRhcmdldC5oaWRkZW4gPSB0YXJnZXQuaGlkZGVuID8gZmFsc2UgOiBudWxsO1xyXG4gICAgc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpIDogbnVsbDtcclxuICAgIGxldCBoZWlnaHQgPSB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gc2hvd21vcmUgPyBgJHtzaG93bW9yZX1yZW1gIDogYDBgO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xyXG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IDA7XHJcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgIHRhcmdldC5vZmZzZXRIZWlnaHQ7XHJcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2hlaWdodCwgbWFyZ2luLCBwYWRkaW5nJztcclxuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XHJcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKTtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJyk7XHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xyXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnX3NsaWRlJyk7XHJcbiAgICAgIC8vIGNyZWF0ZSBldmVudFxyXG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgIG5ldyBDdXN0b21FdmVudCgnc2xpZGVEb3duRG9uZScsIHtcclxuICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0sIGR1cmF0aW9uKTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogdG9nZ2xlcyBzbW9vdGggc2xpZGVcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxyXG4gKiBAcmV0dXJucyBmdW5jdGlvblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IF9zbGlkZVRvZ2dsZSA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwKSA9PiB7XHJcbiAgaWYgKHRhcmdldC5oaWRkZW4pIHtcclxuICAgIHJldHVybiBfc2xpZGVEb3duKHRhcmdldCwgZHVyYXRpb24pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gX3NsaWRlVXAodGFyZ2V0LCBkdXJhdGlvbik7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIGNvbnZlcnRzIHJlbSB0byBwaXhlbHNcclxuICogQHBhcmFtIHtudW1iZXJ9IHJlbVZhbHVlXHJcbiAqIEByZXR1cm5zIHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbVRvUHgocmVtVmFsdWUpIHtcclxuICAvLyDQn9C+0LvRg9GH0LDQtdC8INGC0LXQutGD0YnQuNC5INCx0LDQt9C+0LLRi9C5INGA0LDQt9C80LXRgCDRiNGA0LjRhNGC0LAgKGZvbnQtc2l6ZSkg0LjQtyDRjdC70LXQvNC10L3RgtCwIDxodG1sPlxyXG4gIHZhciBodG1sRm9udFNpemUgPSBwYXJzZUZsb2F0KFxyXG4gICAgZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmZvbnRTaXplXHJcbiAgKTtcclxuXHJcbiAgLy8g0J/QtdGA0LXQstC+0LTQuNC8INC30L3QsNGH0LXQvdC40LUg0LjQtyByZW0g0LIgcHhcclxuICB2YXIgcHhWYWx1ZSA9IHJlbVZhbHVlICogaHRtbEZvbnRTaXplO1xyXG5cclxuICAvLyDQntC60YDRg9Cz0LvRj9C10Lwg0LfQvdCw0YfQtdC90LjQtSDQtNC+INGG0LXQu9GL0YUg0L/QuNC60YHQtdC70LXQuSAo0L/QviDQttC10LvQsNC90LjRjilcclxuICByZXR1cm4gTWF0aC5yb3VuZChweFZhbHVlKSArICdweCc7XHJcbn1cclxuXHJcbi8vIHJlbW92ZSBjbGFzcyBmcm9tIGFsbCBhcnJheSBlbGVtZW50c1xyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2xhc3NlcyA9IChhcnJheSwgY2xhc3NOYW1lKSA9PiB7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgYXJyYXlbaV0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgYm9keUxvY2tTdGF0dXMsIGJvZHlMb2NrVG9nZ2xlIH0gZnJvbSAnLi91dGlscyc7XHJcblxyXG5jb25zdCBtZW51SW5pdCA9ICgpID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJykpIHtcclxuICAgICAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJyk7XHJcblxyXG4gICAgICAgIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChib2R5TG9ja1N0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ19tZW51LW9wZW5lZCcpO1xyXG4gICAgICAgICAgICAgICAgYm9keUxvY2tUb2dnbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxubWVudUluaXQoKTtcclxuIiwiaW1wb3J0IHsgX3NsaWRlVXAsIF9zbGlkZURvd24sIF9zbGlkZVRvZ2dsZSB9IGZyb20gJy4vdXRpbHMuanMnO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNsYXNzIFNlbGVjdCB7XHJcbiAgICAvLyBzZXR1cCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl90aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gY3VzdG9tIHNlbGVjdCBjbGFzc2VzXHJcbiAgICAgICAgdGhpcy5jbGFzc2VzID0ge1xyXG4gICAgICAgICAgICAvLyBodG1sIGJ1aWxkIGNsYXNzZXNcclxuICAgICAgICAgICAgc2VsOiAnc2VsZWN0JyxcclxuICAgICAgICAgICAgYm9keTogJ3NlbGVjdF9fYm9keScsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnc2VsZWN0X19sYWJlbCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnc2VsZWN0X190aXRsZScsXHJcbiAgICAgICAgICAgIHZhbDogJ3NlbGVjdF9fdmFsdWUnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnc2VsZWN0X19jb250ZW50JyxcclxuICAgICAgICAgICAgb3B0aW9uczogJ3NlbGVjdF9fb3B0aW9ucycsXHJcbiAgICAgICAgICAgIG9wdGlvbjogJ3NlbGVjdF9fb3B0aW9uJyxcclxuICAgICAgICAgICAgc2Nyb2xsOiAnc2VsZWN0X19zY3JvbGwnLFxyXG4gICAgICAgICAgICBncm91cDogJ3NlbGVjdF9fZ3JvdXAnLFxyXG4gICAgICAgICAgICBpbnA6ICdzZWxlY3RfX2lucHV0JyxcclxuICAgICAgICAgICAgYXNzZXQ6ICdzZWxlY3RfX2Fzc2V0JyxcclxuICAgICAgICAgICAgdHh0OiAnc2VsZWN0X190ZXh0JyxcclxuICAgICAgICAgICAgaGludDogJ3NlbGVjdF9faGludCcsXHJcblxyXG4gICAgICAgICAgICAvLyBzdGF0ZSBjbGFzc2VzXHJcbiAgICAgICAgICAgIGFjdGl2ZTogJ19zZWxlY3QtYWN0aXZlJyxcclxuICAgICAgICAgICAgZm9jdXNlZDogJ19zZWxlY3QtZm9jdXNlZCcsXHJcbiAgICAgICAgICAgIG9wZW5lZDogJ19zZWxlY3Qtb3BlbmVkJyxcclxuICAgICAgICAgICAgZmlsbGVkOiAnX3NlbGVjdC1maWxsZWQnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZDogJ19zZWxlY3Qtc2VsZWN0ZWQnLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogJ19zZWxlY3QtZGlzYWJsZWQnLFxyXG5cclxuICAgICAgICAgICAgLy8gYWRkaXRpb25hbCBjbGFzc2VzXHJcbiAgICAgICAgICAgIGxpc3Q6ICdfc2VsZWN0LWxpc3QnLFxyXG4gICAgICAgICAgICBlcnJvcjogJ19zZWxlY3QtZXJyb3InLFxyXG4gICAgICAgICAgICBtdWx0aXBsZTogJ19zZWxlY3QtbXVsdGlwbGUnLFxyXG4gICAgICAgICAgICBjaGVja2JveDogJ19zZWxlY3QtY2hlY2tib3gnLFxyXG4gICAgICAgICAgICBsYWJlbDogJ19zZWxlY3QtbGFiZWwnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gYWxsIHNlbGVjdCBpdGVtc1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKTtcclxuICAgICAgICBpZiAoc2VsZWN0TGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0KHNlbGVjdExpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzZWxlY3QgaW5pdGlhbGl6YXRpb24gJiBidWlsZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLyBpbml0aWFsaXphdGlvblxyXG4gICAgaW5pdChzZWxlY3RMaXN0KSB7XHJcbiAgICAgICAgLy8gaW5pdFxyXG4gICAgICAgIHNlbGVjdExpc3QuZm9yRWFjaCgoc2VsZWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXItcmF0aW5nJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFNlbEl0ZW0oc2VsZWN0LCBpbmRleCArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGV2ZW50c1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICdjbGljaycsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGlvbnMoZSk7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgJ2tleWRvd24nLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb25zKGUpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgICApO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICdmb2N1c2luJyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAnZm9jdXNvdXQnLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb25zKGUpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgLy8gc2luZ2xlIHNlbGVjdCBpdGVtIGluaXRpYWxpemF0aW9uXHJcbiAgICBpbml0U2VsSXRlbShyZWxhdGl2ZVNlbCwgaW5kZXgpIHtcclxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zZWwpO1xyXG4gICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChyZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgcmVsYXRpdmVTZWwuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICBpbmRleCA/IChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbElkID0gaW5kZXgpIDogbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpKSB7XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLmRhdGFzZXQub3B0UGxhY2Vob2xkZXIgPSB0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLmxhYmVsLnNob3cpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbFRpdGxlID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMudGl0bGUpLnR3aW5TZWw7XHJcbiAgICAgICAgICAgICAgICBzZWxUaXRsZS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FmdGVyYmVnaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGA8c3BhbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmxhYmVsfVwiPiR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLmxhYmVsLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkubGFiZWwudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH08L3NwYW4+YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCAhPT0gJzAnKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICAnYmVmb3JlZW5kJyxcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuYm9keX1cIj48ZGl2IGhpZGRlbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLm9wdGlvbnN9XCI+PC9kaXY+PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICAnYmVmb3JlZW5kJyxcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuYm9keX1cIj48ZGl2IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMub3B0aW9uc31cIj48L2Rpdj48L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJ1aWxkKHJlbGF0aXZlU2VsKTtcclxuXHJcbiAgICAgICAgcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCA9IHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgPyByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkIDogJzE1MCc7XHJcbiAgICAgICAgcmVsYXRpdmVTZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgX3RoaXMuaW5pdFNlbGVjdGlvbnMoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBzZWxlY3QgYnVpbGRcclxuICAgIGJ1aWxkKHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudDtcclxuICAgICAgICBjb25zdCBzZWxPYmogPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyBzZXQgaWRcclxuICAgICAgICBzZWxlY3QuZGF0YXNldC5zZWxJZCA9IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSWQ7XHJcbiAgICAgICAgLy8gc2V0IHZhbHVlXHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKTtcclxuICAgICAgICAvLyBzZXQgb3B0aW9uc1xyXG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyhzZWxlY3QsIHJlbGF0aXZlU2VsKTtcclxuICAgICAgICAvLyBzZXQgY3NzIG1vZGlmaWNhdG9yXHJcbiAgICAgICAgcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxBZGRvbkNsYXNzXHJcbiAgICAgICAgICAgID8gc2VsZWN0LmNsYXNzTGlzdC5hZGQoYHNlbGVjdF8ke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsQWRkb25DbGFzc31gKVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgLy8gc2V0IGNsYXNzIGlmIHNlbGVjdCBpcyBtdWx0aXBsZVxyXG4gICAgICAgIHJlbGF0aXZlU2VsLm11bHRpcGxlXHJcbiAgICAgICAgICAgID8gc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLm11bHRpcGxlKVxyXG4gICAgICAgICAgICA6IHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5tdWx0aXBsZSk7XHJcbiAgICAgICAgLy8gc2V0IGNsYXNzIGlmIHNlbGVjdCBjaGVja2JveGVzIGFyZSBzZXRcclxuICAgICAgICByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLWNoZWNrYm94ZXMnKSAmJiByZWxhdGl2ZVNlbC5tdWx0aXBsZVxyXG4gICAgICAgICAgICA/IHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5jaGVja2JveClcclxuICAgICAgICAgICAgOiBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuY2hlY2tib3gpO1xyXG4gICAgICAgIC8vIGRpc2FibGUgc2VsZWN0XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlU2VsZWN0KHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIC8vIHNldCBzZWFyY2ggYWN0aW9ucyBpZiBkYXRhLXNlbC1zZWFyY2ggaXMgc2V0XHJcbiAgICAgICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1zZWFyY2gnKSA/IHRoaXMuc2V0U2VhcmNoQWN0aW9ucyhzZWxlY3QpIDogbnVsbDtcclxuICAgICAgICAvLyBzZXQgc2VsZWN0IGFjdGlvbnMgaWYgaXQncyBpbml0aWFsbHkgb3BlbmVkXHJcbiAgICAgICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1vcGVuZWQnKSA/IHRoaXMuc2V0QWN0aW9uKHNlbGVjdCkgOiBudWxsO1xyXG5cclxuICAgICAgICAvLyBzZXQgc2VsZWN0IGhpbnRcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50KSB7XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgICAgICAgICAgJ2JlZm9yZWVuZCcsXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInNlbGVjdF9faGludFwiPiR7cmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50fTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHZhbGlkYXRlIHNlbGVjdFxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5jbG9zZXN0KCdmb3JtJykpIHtcclxuICAgICAgICAgICAgcmVsYXRpdmVTZWwuY2xvc2VzdCgnZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyhzZWxPYmouY2xhc3Nlcy5maWxsZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsT2JqLmFkZEVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsT2JqLnJlbW92ZUVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzaG93IC8gaGlkZSBzZWxlY3Rpb24gZnJvbSBzZWxlY3QgdGl0bGVcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNob3ctdmFsJykpIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ19zZWxlY3Qtc2hvdy12YWwnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnX3NlbGVjdC1zaG93LXZhbCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHNldCB0d2luIHNlbGVjdCB0aXRsZSB2YWx1ZVxyXG4gICAgc2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGNvbnN0IHNlbEJvZHkgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5ib2R5KS50d2luU2VsO1xyXG4gICAgICAgIGNvbnN0IHNlbFRpdGxlID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMudGl0bGUpLnR3aW5TZWw7XHJcblxyXG4gICAgICAgIGlmIChzZWxUaXRsZSkgc2VsVGl0bGUucmVtb3ZlKCk7XHJcbiAgICAgICAgc2VsQm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aGlzLmdldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpKTtcclxuICAgIH1cclxuICAgIC8vIHNldCB0d2luIHNlbGVjdCBvcHRpb25zXHJcbiAgICBzZXRPcHRpb25zKHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykudHdpblNlbDtcclxuICAgICAgICBjb25zdCByZWxhdGl2ZVNlbE9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS5yZWxhdGl2ZVNlbDtcclxuXHJcbiAgICAgICAgb3B0aW9ucy5pbm5lckhUTUwgPSB0aGlzLmdldE9wdGlvbnMocmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbE9wdGlvbnMucXVlcnlTZWxlY3RvcignW3NlbGVjdGVkXScpKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5jbGFzc2VzLm9wdGlvbn1gKS5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZGlzYWJsZSBzZWxlY3RcclxuICAgIGRpc2FibGVTZWxlY3Qoc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xyXG4gICAgICAgICAgICB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMudGl0bGUpLnR3aW5TZWwuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbWFpbiBhY3Rpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLy8gc2V0IG1haW4gYWN0aW9uc1xyXG4gICAgc2V0QWN0aW9ucyhlKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IGUudHlwZTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5zZWwpKSB8fFxyXG4gICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5saXN0KSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gdGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3QnKVxyXG4gICAgICAgICAgICAgICAgPyB0YXJnZXQuY2xvc2VzdCgnLnNlbGVjdCcpXHJcbiAgICAgICAgICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICBgLiR7dGhpcy5jbGFzc2VzLnNlbH1bZGF0YS1zZWwtaWQ9XCIke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKS5kYXRhc2V0LnNlbGVjdElkXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XCJdYFxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCByZWxhdGl2ZVNlbCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCkucmVsYXRpdmVTZWw7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2NsaWNrJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZWxhdGl2ZVNlbC5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5saXN0KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsTGlzdCA9IHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAuJHt0aGlzLmNsYXNzZXMuc2VsfVtkYXRhLXNlbC1pZD1cIiR7c2VsTGlzdC5kYXRhc2V0LnNlbElkfVwiXSAuc2VsZWN0X19vcHRpb25bZGF0YS1vcHQtdmFsPVwiJHtzZWxMaXN0LmRhdGFzZXQub3B0VmFsfVwiXWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25BY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCwgc2VsT3B0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnRpdGxlKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb24oc2VsZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wdGlvbikpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbE9wdGlvbiA9IHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE9wdGlvbkFjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsLCBzZWxPcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnZm9jdXNpbicgfHwgdHlwZSA9PT0gJ2ZvY3Vzb3V0Jykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnNlbCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdmb2N1c2luJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuZm9jdXNlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmZvY3VzZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuZmlsbGVkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAna2V5ZG93bicgJiYgZS5jb2RlID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUdyb3VwKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlR3JvdXAoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBzZXQgc2luZ2xlIHNlbGVjdCBhY3Rpb25cclxuICAgIHNldEFjdGlvbihzZWxlY3QpIHtcclxuICAgICAgICBjb25zdCByZWxhdGl2ZVNlbCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCkucmVsYXRpdmVTZWw7XHJcbiAgICAgICAgY29uc3Qgc2VsT3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnR3aW5TZWw7XHJcblxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5jbG9zZXN0KCdbZGF0YS1vbmUtc2VsZWN0XScpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdE9uZUdyb3VwID0gcmVsYXRpdmVTZWwuY2xvc2VzdCgnW2RhdGEtb25lLXNlbGVjdF0nKTtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZUdyb3VwKHNlbGVjdE9uZUdyb3VwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2VsT3B0aW9ucy5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuY2xhc3Nlcy5vcGVuZWQpO1xyXG4gICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCAhPT0gJzAnKSB7XHJcbiAgICAgICAgICAgICAgICBfc2xpZGVUb2dnbGUoc2VsT3B0aW9ucywgcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMub3BlbmVkKSAmJlxyXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlJykgJiZcclxuICAgICAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLmVycm9yKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY2xvc2Ugc2luZ2xlIHNlbGVjdCBncm91cFxyXG4gICAgY2xvc2VHcm91cChncm91cCkge1xyXG4gICAgICAgIGNvbnN0IHNlbEdyb3VwID0gZ3JvdXAgPyBncm91cCA6IGRvY3VtZW50O1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSBzZWxHcm91cC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICBgJHt0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5zZWwpfSR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3BlbmVkKX1gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoc2VsZWN0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc2VsZWN0aW9ucy5mb3JFYWNoKChzZWxlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VJdGVtKHNlbGVjdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNsb3NlIHNpbmdsZSBzZWxlY3QgaXRlbVxyXG4gICAgY2xvc2VJdGVtKHNlbGVjdCkge1xyXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0KS5yZWxhdGl2ZVNlbDtcclxuICAgICAgICBjb25zdCBzZWxPcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykudHdpblNlbDtcclxuXHJcbiAgICAgICAgaWYgKCFzZWxPcHRpb25zLmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLm9wZW5lZCk7XHJcbiAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkICE9PSAnMCcpIHtcclxuICAgICAgICAgICAgICAgIF9zbGlkZVVwKHNlbE9wdGlvbnMsIHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gc2V0IHNpbmdsZSBvcHRpb24gYWN0aW9uc1xyXG4gICAgc2V0T3B0aW9uQWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwsIG9wdGlvbikge1xyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBjb25zdCByZWxhdGl2ZVNlbGVjdGlvbnMgPSB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpLmVsZW1lbnRzO1xyXG5cclxuICAgICAgICAgICAgcmVsYXRpdmVTZWxlY3Rpb25zLmZvckVhY2goKHJlbGF0aXZlU2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbGVjdGlvbi5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdHdpblNlbGVjdGlvbnMgPSBzZWxlY3QucXVlcnlTZWxlY3RvckFsbCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCkpO1xyXG4gICAgICAgICAgICB0d2luU2VsZWN0aW9ucy5mb3JFYWNoKCh0d2luU2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbFxyXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBvcHRpb25bdmFsdWU9XCIke3R3aW5TZWxlY3Rpb24uZGF0YXNldC5vcHRWYWx9XCJdYClcclxuICAgICAgICAgICAgICAgICAgICAuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFvcHRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlbGF0aXZlU2VsLnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7b3B0aW9uLmRhdGFzZXQub3B0VmFsfVwiXWApKTtcclxuICAgICAgICAgICAgICAgIHJlbGF0aXZlU2VsXHJcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7b3B0aW9uLmRhdGFzZXQub3B0VmFsfVwiXWApXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RfX29wdGlvbicpXHJcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgob3B0KSA9PiBvcHQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpKTtcclxuICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnNlbGVjdGVkKTtcclxuICAgICAgICAgICAgaWYgKCFyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvdy1zZWxlY3Rpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdC5xdWVyeVNlbGVjdG9yKGAke3RoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wdGlvbil9W2hpZGRlbl1gKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdC5xdWVyeVNlbGVjdG9yKGAke3RoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wdGlvbil9W2hpZGRlbl1gKS5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9wdGlvbi5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLnZhbHVlID0gb3B0aW9uLmhhc0F0dHJpYnV0ZSgnZGF0YS1vcHQtdmFsJylcclxuICAgICAgICAgICAgICAgID8gb3B0aW9uLmRhdGFzZXQub3B0VmFsXHJcbiAgICAgICAgICAgICAgICA6IG9wdGlvbi50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb24oc2VsZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKTtcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGlvbnMocmVsYXRpdmVTZWwpO1xyXG4gICAgfVxyXG4gICAgLy8gc2V0IHNlYXJjaCBhY3Rpb25zXHJcbiAgICBzZXRTZWFyY2hBY3Rpb25zKHNlbGVjdCkge1xyXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgICAgICBjb25zdCBzZWxJbnB1dCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLmlucCkudHdpblNlbDtcclxuICAgICAgICBjb25zdCBzZWxPcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykudHdpblNlbC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICBgLiR7dGhpcy5jbGFzc2VzLm9wdGlvbn1gXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2VsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbE9wdGlvbnMuZm9yRWFjaCgoc2VsT3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsT3B0aW9uLnRleHRDb250ZW50LnRvVXBwZXJDYXNlKCkuaW5kZXhPZihzZWxJbnB1dC52YWx1ZS50b1VwcGVyQ2FzZSgpKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsT3B0aW9uLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxPcHRpb24uaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNlbE9wdGlvbnMuaGlkZGVuID09PSB0cnVlID8gX3RoaXMuc2V0QWN0aW9uKHNlbGVjdCkgOiBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gc2V0IHNlbGVjdCBzdWJ0aXRsZVxyXG4gICAgc2V0U3VidGl0bGUocmVsYXRpdmVTZWwpIHt9XHJcblxyXG4gICAgLy8gdmFsaWRhdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLy8gYWRkIGFuIGVycm9yIHRvIGEgc2VsZWN0XHJcbiAgICBhZGRFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCkge1xyXG4gICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5lcnJvcik7XHJcblxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEVycm9yICYmICFyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnQpIHtcclxuICAgICAgICAgICAgcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICAnYmVmb3JlZW5kJyxcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwic2VsZWN0X19oaW50XCI+JHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEVycm9yfTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyByZW1vdmUgYW4gZXJyb3IgZnJvbSBhIHNlbGVjdFxyXG4gICAgcmVtb3ZlRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpIHtcclxuICAgICAgICBpZiAoc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuZXJyb3IpKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5lcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2hpbnQnKSAmJiAhcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50KSB7XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19oaW50JykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB1dGlscyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLyBnZXQgY3VzdG9tIGNsYXNzXHJcbiAgICBnZXRDbGFzcyhjc3NDbGFzcykge1xyXG4gICAgICAgIHJldHVybiBgLiR7Y3NzQ2xhc3N9YDtcclxuICAgIH1cclxuICAgIC8vIGdldCBzaW5nbGUgc2VsZWN0IGl0ZW1cclxuICAgIGdldFNlbGVjdChzZWxlY3QsIGNzc0NsYXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVsYXRpdmVTZWw6IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSxcclxuICAgICAgICAgICAgdHdpblNlbDogc2VsZWN0LnF1ZXJ5U2VsZWN0b3IodGhpcy5nZXRDbGFzcyhjc3NDbGFzcykpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vIGdldCBzZWxlY3RlZCBpdGVtIHZhbHVlXHJcbiAgICBnZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgbGV0IGF0dHIsXHJcbiAgICAgICAgICAgIGF0dHJDbGFzcyxcclxuICAgICAgICAgICAgdGl0bGVWYWwgPSB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwsIDIpLmh0bWw7XHJcblxyXG4gICAgICAgIC8vIHNldCB0aXRsZSB2YWx1ZVxyXG4gICAgICAgIHRpdGxlVmFsID0gdGl0bGVWYWwubGVuZ3RoXHJcbiAgICAgICAgICAgID8gdGl0bGVWYWxcclxuICAgICAgICAgICAgOiByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbExhYmVsXHJcbiAgICAgICAgICAgID8gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxMYWJlbFxyXG4gICAgICAgICAgICA6ICcnO1xyXG5cclxuICAgICAgICAvLyBzZXQgYWN0aXZlIGNsYXNzIHRvIHNlbGVjdCBpZiBpdCBjb250YWlucyBhbnkgdmFsdWVzXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkudmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuYWN0aXZlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuYWN0aXZlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNldCBzZWxlY3QgbGFiZWxcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1sYWJlbCcpKSB7XHJcbiAgICAgICAgICAgIGF0dHIgPSByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbExhYmVsXHJcbiAgICAgICAgICAgICAgICA/IGAgZGF0YS1zZWwtbGFiZWw9XCIke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsTGFiZWx9XCJgXHJcbiAgICAgICAgICAgICAgICA6IGAgZGF0YS1zZWwtbGFiZWw9XCLQktGL0LHQvtGAXCJgO1xyXG4gICAgICAgICAgICBhdHRyQ2xhc3MgPSBgICR7dGhpcy5jbGFzc2VzLmxhYmVsfWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwdXNoIHNlbGVjdGlvbnMgdG8gdGhlIGxpc3QgaW5zaWRlIG9mIHNlbGVjdCB0aXRsZVxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5tdWx0aXBsZSAmJiByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLWxpc3QnKSkge1xyXG4gICAgICAgICAgICB0aXRsZVZhbCA9IHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbClcclxuICAgICAgICAgICAgICAgIC5lbGVtZW50cy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgKG9wdGlvbikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYDxzcGFuIGRhdGEtb3B0LWlkPVwiJHtzZWxlY3QuZGF0YXNldC5zZWxJZH1cIiBkYXRhLW9wdC12YWw9XCIke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIiBjbGFzcz1cIl9saXN0LWl0ZW1cIj4ke3RoaXMuZ2V0Q29udGVudChvcHRpb24pfTwvc3Bhbj5gXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuam9pbignJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5saXN0ICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVsYXRpdmVTZWwuZGF0YXNldC5saXN0KSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWxhdGl2ZVNlbC5kYXRhc2V0Lmxpc3QpLmlubmVySFRNTCA9IHRpdGxlVmFsO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtc2VhcmNoJykpIHRpdGxlVmFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGluaXQgc2VsZWN0IHNlYXJjaFxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNlYXJjaCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnRpdGxlfVwiPjxzcGFuICR7YXR0cn0gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy52YWx9XCI+PGlucHV0IGF1dG9jb21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIiR7dGl0bGVWYWx9XCIgZGF0YS1wbGFjZWhvbGRlcj1cIiR7dGl0bGVWYWx9XCIgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5pbnB9XCI+PC9zcGFuPjwvZGl2PmA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY3VzdG9tQ2xhc3MgPVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS5lbGVtZW50cy5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHNbMF0uZGF0YXNldC5vcHRDbGFzc1xyXG4gICAgICAgICAgICAgICAgICAgID8gYCAke3RoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHNbMF0uZGF0YXNldC5vcHRDbGFzc31gXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnJztcclxuICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnRpdGxlfVwiPjxzcGFuICR7YXR0ciA/IGF0dHIgOiAnJ30gY2xhc3M9XCIke1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzLnZhbFxyXG4gICAgICAgICAgICB9ICR7YXR0ckNsYXNzID8gYXR0ckNsYXNzIDogJyd9XCI+PHNwYW4gY2xhc3M9XCIke1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzLmNvbnRlbnRcclxuICAgICAgICAgICAgfSR7Y3VzdG9tQ2xhc3N9XCI+JHt0aXRsZVZhbH08L3NwYW4+PC9zcGFuPjwvYnV0dG9uPmA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZ2V0IG9wdGlvbnNcclxuICAgIGdldE9wdGlvbnMocmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBjb25zdCBzZWxTY3JvbGwgPSByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNjcm9sbCcpID8gYGRhdGEtc2ltcGxlYmFyYCA6ICcnO1xyXG4gICAgICAgIGxldCBzZWxTY3JvbGxIZWlnaHQgPSByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbFNjcm9sbFxyXG4gICAgICAgICAgICA/IGBzdHlsZT1cIm1heC1oZWlnaHQ6JHt3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCA/IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsU2Nyb2xsIDogMjJ9cmVtXCJgXHJcbiAgICAgICAgICAgIDogJyc7XHJcbiAgICAgICAgbGV0IHNlbE9wdGlvbnMgPSBBcnJheS5mcm9tKHJlbGF0aXZlU2VsLm9wdGlvbnMpO1xyXG5cclxuICAgICAgICBpZiAoc2VsT3B0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGV0IHNlbE9wdGlvbnNIVE1MID0gYGA7XHJcblxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAodGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkgJiYgIXRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLnNob3cpIHx8XHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbC5tdWx0aXBsZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHNlbE9wdGlvbnMgPSBzZWxPcHRpb25zLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbE9wdGlvbnNIVE1MICs9IHNlbFNjcm9sbFxyXG4gICAgICAgICAgICAgICAgPyBgPGRpdiAke3NlbFNjcm9sbH0gJHtzZWxTY3JvbGxIZWlnaHR9IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuc2Nyb2xsfVwiPmBcclxuICAgICAgICAgICAgICAgIDogJyc7XHJcbiAgICAgICAgICAgIHNlbE9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxPcHRpb25zSFRNTCArPSB0aGlzLmdldE9wdGlvbihvcHRpb24sIHJlbGF0aXZlU2VsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNlbE9wdGlvbnNIVE1MICs9IHNlbFNjcm9sbCA/IGA8L2Rpdj5gIDogJyc7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxPcHRpb25zSFRNTDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgb3B0aW9uXHJcbiAgICBnZXRPcHRpb24ob3B0aW9uLCByZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSBvcHRpb24uc2VsZWN0ZWQgJiYgcmVsYXRpdmVTZWwubXVsdGlwbGUgPyBgICR7dGhpcy5jbGFzc2VzLnNlbGVjdGVkfWAgOiAnJztcclxuICAgICAgICBjb25zdCBzaG93U2VsZWN0aW9uID1cclxuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkICYmICFyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvdy1zZWxlY3Rpb24nKSAmJiAhcmVsYXRpdmVTZWwubXVsdGlwbGVcclxuICAgICAgICAgICAgICAgID8gYGhpZGRlbmBcclxuICAgICAgICAgICAgICAgIDogYGA7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uQ2xhc3MgPSBvcHRpb24uZGF0YXNldC5vcHRDbGFzcyA/IGAgJHtvcHRpb24uZGF0YXNldC5vcHRDbGFzc31gIDogJyc7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uTGluayA9IG9wdGlvbi5kYXRhc2V0Lm9wdGlvbkxpbmsgPyBvcHRpb24uZGF0YXNldC5vcHRpb25MaW5rIDogZmFsc2U7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uTGlua1RhcmdldCA9IG9wdGlvbi5oYXNBdHRyaWJ1dGUoJ2RhdGEtb3B0aW9uLWxpbmstdGFyZ2V0JykgPyBgdGFyZ2V0PVwiX2JsYW5rXCJgIDogJyc7XHJcbiAgICAgICAgbGV0IG9wdGlvbkhUTUwgPSBgYDtcclxuXHJcbiAgICAgICAgb3B0aW9uSFRNTCArPSBvcHRpb25MaW5rXHJcbiAgICAgICAgICAgID8gYDxhICR7b3B0aW9uTGlua1RhcmdldH0gJHtzaG93U2VsZWN0aW9ufSBocmVmPVwiJHtvcHRpb25MaW5rfVwiIGRhdGEtb3B0LXZhbD1cIiR7b3B0aW9uLnZhbHVlfVwiIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMub3B0aW9ufSR7b3B0aW9uQ2xhc3N9JHtzZWxlY3Rpb25zfVwiPmBcclxuICAgICAgICAgICAgOiBgPGJ1dHRvbiAke3Nob3dTZWxlY3Rpb259IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMub3B0aW9ufSR7b3B0aW9uQ2xhc3N9JHtzZWxlY3Rpb25zfVwiIGRhdGEtb3B0LXZhbD1cIiR7b3B0aW9uLnZhbHVlfVwiIHR5cGU9XCJidXR0b25cIj5gO1xyXG4gICAgICAgIG9wdGlvbkhUTUwgKz0gdGhpcy5nZXRDb250ZW50KG9wdGlvbik7XHJcbiAgICAgICAgb3B0aW9uSFRNTCArPSBvcHRpb25MaW5rID8gYDwvYT5gIDogYDwvYnV0dG9uPmA7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbkhUTUw7XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgc2VsZWN0IGNvbnRlbnRcclxuICAgIGdldENvbnRlbnQob3B0aW9uKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uRGF0YSA9IG9wdGlvbi5kYXRhc2V0Lm9wdEFzc2V0ID8gYCR7b3B0aW9uLmRhdGFzZXQub3B0QXNzZXR9YCA6ICcnO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbkRhdGFIVE1MID1cclxuICAgICAgICAgICAgb3B0aW9uRGF0YS5pbmRleE9mKCdpbWcnKSA+PSAwID8gYDxpbWcgc3JjPVwiJHtvcHRpb25EYXRhfVwiIGFsdD1cIlwiPmAgOiBvcHRpb25EYXRhO1xyXG4gICAgICAgIGxldCBvcHRpb25Db250ZW50SFRNTCA9IGBgO1xyXG5cclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuZ3JvdXB9XCI+YCA6ICcnO1xyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5hc3NldH1cIj5gIDogJyc7XHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IG9wdGlvbkRhdGFIVE1MIDogJyc7XHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8L3NwYW4+YCA6ICcnO1xyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy50eHR9XCI+YCA6ICcnO1xyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbi50ZXh0Q29udGVudDtcclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDwvc3Bhbj5gIDogJyc7XHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8L3NwYW4+YCA6ICcnO1xyXG4gICAgICAgIHJldHVybiBvcHRpb25Db250ZW50SFRNTDtcclxuICAgIH1cclxuICAgIC8vIGdldCBzZWxlY3QgcGxhY2Vob2xkZXJcclxuICAgIGdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBBcnJheS5mcm9tKHJlbGF0aXZlU2VsLm9wdGlvbnMpLmZpbmQoKG9wdGlvbikgPT4gIW9wdGlvbi52YWx1ZSk7XHJcblxyXG4gICAgICAgIGlmIChwbGFjZWhvbGRlcikge1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zdWJ0aXRsZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogcGxhY2Vob2xkZXIudGV4dENvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBzaG93OiBwbGFjZWhvbGRlci5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXBoLXNob3cnKSxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogcGxhY2Vob2xkZXIuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1waCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHBsYWNlaG9sZGVyLmRhdGFzZXQub3B0UGxhY2Vob2xkZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgc2VsZWN0ZWQgb3B0aW9ucyBkYXRhXHJcbiAgICBnZXREYXRhKHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbnMgPSBBcnJheS5mcm9tKHJlbGF0aXZlU2VsLm9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSlcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnNlbGVjdGVkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3Rpb25zLnB1c2gocmVsYXRpdmVTZWwub3B0aW9uc1tyZWxhdGl2ZVNlbC5zZWxlY3RlZEluZGV4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzOiBzZWxlY3Rpb25zLm1hcCgob3B0aW9uKSA9PiBvcHRpb24pLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IHNlbGVjdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSkubWFwKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSksXHJcbiAgICAgICAgICAgIGh0bWw6IHNlbGVjdGlvbnMubWFwKChvcHRpb24pID0+IHRoaXMuZ2V0Q29udGVudChvcHRpb24pKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2VsZWN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLy8gaW5pdCBzZWxlY3Rpb25zXHJcbiAgICBpbml0U2VsZWN0aW9ucyhlKSB7XHJcbiAgICAgICAgY29uc3QgcmVsYXRpdmVTZWwgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgdGhpcy5idWlsZChyZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25zKHJlbGF0aXZlU2VsKTtcclxuICAgIH1cclxuICAgIC8vIHNldCBzZWxlY3Rpb25zXHJcbiAgICBzZXRTZWxlY3Rpb25zKHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zdWJtaXQnKSAmJiByZWxhdGl2ZVNlbC52YWx1ZSkge1xyXG4gICAgICAgICAgICBsZXQgdGVtcEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICB0ZW1wQnV0dG9uLnR5cGUgPSAnc3VibWl0JztcclxuICAgICAgICAgICAgcmVsYXRpdmVTZWwuY2xvc2VzdCgnZm9ybScpLmFwcGVuZCh0ZW1wQnV0dG9uKTtcclxuICAgICAgICAgICAgdGVtcEJ1dHRvbi5jbGljaygpO1xyXG4gICAgICAgICAgICB0ZW1wQnV0dG9uLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmZpbGxlZCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCk7XHJcbiAgICB9XHJcbiAgICAvLyBjdXN0b20gc2VsZWN0IGV2ZW50IChsaXN0ZW4gdG8gYW55IHNlbGVjdGlvbnMgLyBtdXRhdGlvbnMpXHJcbiAgICBzZWxlY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudCgnc2VsZWN0aW9uJywge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0OiByZWxhdGl2ZVNlbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxubmV3IFNlbGVjdCh7fSk7XHJcbiIsImltcG9ydCAnLi4vc2Nzcy9zdHlsZS5zY3NzJztcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZm9ybXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBpbXBvcnQgKiBhcyBmb3JtcyBmcm9tICcuL3V0aWxzL2Zvcm1zLmpzJztcclxuXHJcbi8vIGZvcm0gZmllbGRzXHJcbi8vIGZvcm1zLmZvcm1GaWVsZHNJbml0KHsgdmlld1Bhc3M6IGZhbHNlIH0pO1xyXG5cclxuLy8gZm9ybSBzdWJtaXRcclxuLy8gZm9ybXMuZm9ybVN1Ym1pdCgpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB1dGlscyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vaGFtYnVyZ2VyXHJcbmltcG9ydCAnLi91dGlscy9oYW1idXJnZXIuanMnO1xyXG5cclxuLy8gdGFic1xyXG4vLyBpbXBvcnQgJy4vdXRpbHMvdGFicy5qcyc7XHJcblxyXG4vLyBhY2NvcmRpb25cclxuLy8gaW1wb3J0ICcuL3V0aWxzL2FjY29yZGlvbi5qcyc7XHJcblxyXG4vLyBzZWxlY3RcclxuaW1wb3J0ICcuL3V0aWxzL3NlbGVjdC5qcyc7XHJcblxyXG4vLyBtb2RhbHNcclxuLy8gaW1wb3J0ICcuL3V0aWxzL21vZGFscy5qcyc7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGxpYnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gZHluYW1pYyBkb21cclxuaW1wb3J0ICcuL2xpYnMvZGQuanMnO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCAnLi9kZXYvdnptc2sxLmpzJztcclxuaW1wb3J0ICcuL2Rldi9tYXJrdXNETS5qcyc7XHJcbmltcG9ydCAnLi9kZXYvdWtpazAuanMnO1xyXG5pbXBvcnQgJy4vZGV2L2tpZTZlci5qcyc7XHJcbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsImV2ZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicXVlcnlTZWxlY3RvciIsIkFycmF5IiwiZnJvbSIsImNhdGVnb3J5IiwicmVtb3ZlIiwiYWRkIiwiRHluYW1pY0FkYXB0IiwidHlwZSIsInByb3RvdHlwZSIsImluaXQiLCJfdGhpcyIsItC+YmplY3RzIiwiZGFDbGFzc25hbWUiLCJub2RlcyIsImkiLCJsZW5ndGgiLCJub2RlIiwiZGF0YSIsImRhdGFzZXQiLCJkYSIsInRyaW0iLCJkYXRhQXJyYXkiLCJzcGxpdCIsItC+YmplY3QiLCJlbGVtZW50IiwicGFyZW50IiwicGFyZW50Tm9kZSIsImRlc3RpbmF0aW9uIiwiYnJlYWtwb2ludCIsInBsYWNlIiwiaW5kZXgiLCJpbmRleEluUGFyZW50IiwicHVzaCIsImFycmF5U29ydCIsIm1lZGlhUXVlcmllcyIsIm1hcCIsImNhbGwiLCJmaWx0ZXIiLCJzZWxmIiwiaW5kZXhPZiIsIm1lZGlhIiwibWVkaWFTcGxpdCIsIlN0cmluZyIsIm1hdGNoTWVkaWEiLCJ3aW5kb3ciLCJtZWRpYUJyZWFrcG9pbnQiLCLQvmJqZWN0c0ZpbHRlciIsImFkZExpc3RlbmVyIiwibWVkaWFIYW5kbGVyIiwibWF0Y2hlcyIsIm1vdmVUbyIsImNvbnRhaW5zIiwibW92ZUJhY2siLCJjaGlsZHJlbiIsImluc2VydEFkamFjZW50RWxlbWVudCIsInVuZGVmaW5lZCIsImFycmF5Iiwic2xpY2UiLCJhcnIiLCJzb3J0IiwiYSIsImIiLCJzZXRIYXNoIiwiaGFzaCIsImxvY2F0aW9uIiwiaHJlZiIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJnZXRIYXNoIiwicmVwbGFjZSIsImJvZHlMb2NrU3RhdHVzIiwiYm9keUxvY2tUb2dnbGUiLCJkZWxheSIsImFyZ3VtZW50cyIsImRvY3VtZW50RWxlbWVudCIsImJvZHlVbmxvY2siLCJib2R5TG9jayIsInNldFRpbWVvdXQiLCJkYXRhTWVkaWFRdWVyaWVzIiwiZGF0YVNldFZhbHVlIiwiYnJlYWtwb2ludHNBcnJheSIsInBhcmFtcyIsInBhcmFtc0FycmF5IiwidmFsdWUiLCJtZFF1ZXJpZXMiLCJ1bmlxdWVBcnJheSIsIm1kUXVlcmllc0FycmF5IiwibWVkaWFUeXBlIiwiaXRlbXNBcnJheSIsIl9zbGlkZVVwIiwidGFyZ2V0IiwiZHVyYXRpb24iLCJzaG93bW9yZSIsInN0eWxlIiwidHJhbnNpdGlvblByb3BlcnR5IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib3ZlcmZsb3ciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImhpZGRlbiIsInJlbW92ZVByb3BlcnR5IiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiX3NsaWRlRG93biIsIl9zbGlkZVRvZ2dsZSIsInJlbVRvUHgiLCJyZW1WYWx1ZSIsImh0bWxGb250U2l6ZSIsInBhcnNlRmxvYXQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZm9udFNpemUiLCJweFZhbHVlIiwiTWF0aCIsInJvdW5kIiwicmVtb3ZlQ2xhc3NlcyIsImNsYXNzTmFtZSIsIm1lbnVJbml0IiwiaGFtYnVyZ2VyIiwiZSIsIlNlbGVjdCIsImNvbnN0cnVjdG9yIiwiY2xhc3NlcyIsInNlbCIsImJvZHkiLCJsYWJlbCIsInRpdGxlIiwidmFsIiwiY29udGVudCIsIm9wdGlvbnMiLCJvcHRpb24iLCJzY3JvbGwiLCJncm91cCIsImlucCIsImFzc2V0IiwidHh0IiwiaGludCIsImFjdGl2ZSIsImZvY3VzZWQiLCJvcGVuZWQiLCJmaWxsZWQiLCJzZWxlY3RlZCIsImRpc2FibGVkIiwibGlzdCIsImVycm9yIiwibXVsdGlwbGUiLCJjaGVja2JveCIsInNlbGVjdExpc3QiLCJzZWxlY3QiLCJpbml0U2VsSXRlbSIsInNldEFjdGlvbnMiLCJiaW5kIiwicmVsYXRpdmVTZWwiLCJjcmVhdGVFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJzZWxJZCIsImdldFBsYWNlaG9sZGVyIiwib3B0UGxhY2Vob2xkZXIiLCJzaG93Iiwic2VsVGl0bGUiLCJnZXRTZWxlY3QiLCJ0d2luU2VsIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwidGV4dCIsInNwZWVkIiwiYnVpbGQiLCJpbml0U2VsZWN0aW9ucyIsInBhcmVudEVsZW1lbnQiLCJzZWxPYmoiLCJzZXRWYWx1ZSIsInNldE9wdGlvbnMiLCJzZWxBZGRvbkNsYXNzIiwiaGFzQXR0cmlidXRlIiwiZGlzYWJsZVNlbGVjdCIsInNldFNlYXJjaEFjdGlvbnMiLCJzZXRBY3Rpb24iLCJzZWxIaW50IiwiY2xvc2VzdCIsImFkZEVyciIsInJlbW92ZUVyciIsInNlbEJvZHkiLCJnZXRWYWx1ZSIsInJlbGF0aXZlU2VsT3B0aW9ucyIsImlubmVySFRNTCIsImdldE9wdGlvbnMiLCJnZXRDbGFzcyIsInNlbGVjdElkIiwic2VsTGlzdCIsInNlbE9wdGlvbiIsIm9wdFZhbCIsInNldE9wdGlvbkFjdGlvbiIsImNvZGUiLCJjbG9zZUdyb3VwIiwic2VsT3B0aW9ucyIsInNlbGVjdE9uZUdyb3VwIiwic2VsR3JvdXAiLCJzZWxlY3Rpb25zIiwic2VsZWN0aW9uIiwiY2xvc2VJdGVtIiwicmVsYXRpdmVTZWxlY3Rpb25zIiwiZ2V0RGF0YSIsImVsZW1lbnRzIiwicmVsYXRpdmVTZWxlY3Rpb24iLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0d2luU2VsZWN0aW9ucyIsInR3aW5TZWxlY3Rpb24iLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwib3B0IiwidGV4dENvbnRlbnQiLCJzZXRTZWxlY3Rpb25zIiwic2VsSW5wdXQiLCJ0b1VwcGVyQ2FzZSIsInNldFN1YnRpdGxlIiwic2VsRXJyb3IiLCJyZW1vdmVDaGlsZCIsImNzc0NsYXNzIiwiYXR0ciIsImF0dHJDbGFzcyIsInRpdGxlVmFsIiwiaHRtbCIsInNlbExhYmVsIiwidmFsdWVzIiwiZ2V0Q29udGVudCIsImpvaW4iLCJjdXN0b21DbGFzcyIsIm9wdENsYXNzIiwic2VsU2Nyb2xsIiwic2VsU2Nyb2xsSGVpZ2h0IiwiaW5uZXJXaWR0aCIsInNlbE9wdGlvbnNIVE1MIiwiZ2V0T3B0aW9uIiwic2hvd1NlbGVjdGlvbiIsIm9wdGlvbkNsYXNzIiwib3B0aW9uTGluayIsIm9wdGlvbkxpbmtUYXJnZXQiLCJvcHRpb25IVE1MIiwib3B0aW9uRGF0YSIsIm9wdEFzc2V0Iiwib3B0aW9uRGF0YUhUTUwiLCJvcHRpb25Db250ZW50SFRNTCIsInBsYWNlaG9sZGVyIiwiZmluZCIsInN1YnRpdGxlIiwic2VsZWN0ZWRJbmRleCIsInRlbXBCdXR0b24iLCJhcHBlbmQiLCJjbGljayJdLCJzb3VyY2VSb290IjoiIn0=