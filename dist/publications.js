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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUVJO01BQ1o7SUFDSixDQUFDLENBQ0wsQ0FBQztFQUNMO0FBQ0o7QUFDQSxJQUFJaEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7QUNybUJjOztBQUU1Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDOEI7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUMyQjs7QUFFM0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNzQjs7QUFFdEI7O0FBRXlCO0FBQ0U7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9kZXYvdWtpazAuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2xpYnMvZGQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvdXRpbHMvaGFtYnVyZ2VyLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbmF2LWl0ZW0taGVhZGluZycpO1xuXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJy0tYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRyb19fY2F0ZWdvcmllcy1pdGVtJykpIHtcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW50cm9fX2NhdGVnb3JpZXMtaXRlbScpKS5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgY2F0ZWdvcnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW50cm9fX2NhdGVnb3JpZXMtaXRlbScpKS5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS5jbGFzc0xpc3QucmVtb3ZlKCctLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkuY2xhc3NMaXN0LmFkZCgnLS1hY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcclxuZnVuY3Rpb24gRHluYW1pY0FkYXB0KHR5cGUpIHtcclxuICB0aGlzLnR5cGUgPSB0eXBlO1xyXG59XHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgdGhpcy7QvmJqZWN0cyA9IFtdO1xyXG4gIHRoaXMuZGFDbGFzc25hbWUgPSAnX2R5bmFtaWNfYWRhcHRfJztcclxuICB0aGlzLm5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZGFdJyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBub2RlID0gdGhpcy5ub2Rlc1tpXTtcclxuICAgIGNvbnN0IGRhdGEgPSBub2RlLmRhdGFzZXQuZGEudHJpbSgpO1xyXG4gICAgY29uc3QgZGF0YUFycmF5ID0gZGF0YS5zcGxpdCgnLCcpO1xyXG4gICAgY29uc3Qg0L5iamVjdCA9IHt9O1xyXG4gICAg0L5iamVjdC5lbGVtZW50ID0gbm9kZTtcclxuICAgINC+YmplY3QucGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAg0L5iamVjdC5kZXN0aW5hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZGF0YUFycmF5WzBdLnRyaW0oKSk7XHJcbiAgICDQvmJqZWN0LmJyZWFrcG9pbnQgPSBkYXRhQXJyYXlbMV0gPyBkYXRhQXJyYXlbMV0udHJpbSgpIDogJzc2Nyc7XHJcbiAgICDQvmJqZWN0LnBsYWNlID0gZGF0YUFycmF5WzJdID8gZGF0YUFycmF5WzJdLnRyaW0oKSA6ICdsYXN0JztcclxuICAgINC+YmplY3QuaW5kZXggPSB0aGlzLmluZGV4SW5QYXJlbnQo0L5iamVjdC5wYXJlbnQsINC+YmplY3QuZWxlbWVudCk7XHJcbiAgICB0aGlzLtC+YmplY3RzLnB1c2go0L5iamVjdCk7XHJcbiAgfVxyXG4gIHRoaXMuYXJyYXlTb3J0KHRoaXMu0L5iamVjdHMpO1xyXG4gIHRoaXMubWVkaWFRdWVyaWVzID0gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKFxyXG4gICAgdGhpcy7QvmJqZWN0cyxcclxuICAgIGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgJygnICtcclxuICAgICAgICB0aGlzLnR5cGUgK1xyXG4gICAgICAgICctd2lkdGg6ICcgK1xyXG4gICAgICAgIGl0ZW0uYnJlYWtwb2ludCArXHJcbiAgICAgICAgJ3B4KSwnICtcclxuICAgICAgICBpdGVtLmJyZWFrcG9pbnRcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICB0aGlzXHJcbiAgKTtcclxuICB0aGlzLm1lZGlhUXVlcmllcyA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChcclxuICAgIHRoaXMubWVkaWFRdWVyaWVzLFxyXG4gICAgZnVuY3Rpb24gKGl0ZW0sIGluZGV4LCBzZWxmKSB7XHJcbiAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHNlbGYsIGl0ZW0pID09PSBpbmRleDtcclxuICAgIH1cclxuICApO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tZWRpYVF1ZXJpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IG1lZGlhID0gdGhpcy5tZWRpYVF1ZXJpZXNbaV07XHJcbiAgICBjb25zdCBtZWRpYVNwbGl0ID0gU3RyaW5nLnByb3RvdHlwZS5zcGxpdC5jYWxsKG1lZGlhLCAnLCcpO1xyXG4gICAgY29uc3QgbWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKG1lZGlhU3BsaXRbMF0pO1xyXG4gICAgY29uc3QgbWVkaWFCcmVha3BvaW50ID0gbWVkaWFTcGxpdFsxXTtcclxuICAgIGNvbnN0INC+YmplY3RzRmlsdGVyID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKFxyXG4gICAgICB0aGlzLtC+YmplY3RzLFxyXG4gICAgICBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmJyZWFrcG9pbnQgPT09IG1lZGlhQnJlYWtwb2ludDtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIG1hdGNoTWVkaWEuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICBfdGhpcy5tZWRpYUhhbmRsZXIobWF0Y2hNZWRpYSwg0L5iamVjdHNGaWx0ZXIpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1lZGlhSGFuZGxlcihtYXRjaE1lZGlhLCDQvmJqZWN0c0ZpbHRlcik7XHJcbiAgfVxyXG59O1xyXG5EeW5hbWljQWRhcHQucHJvdG90eXBlLm1lZGlhSGFuZGxlciA9IGZ1bmN0aW9uIChtYXRjaE1lZGlhLCDQvmJqZWN0cykge1xyXG4gIGlmIChtYXRjaE1lZGlhLm1hdGNoZXMpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwg0L5iamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qg0L5iamVjdCA9INC+YmplY3RzW2ldO1xyXG4gICAgICDQvmJqZWN0LmluZGV4ID0gdGhpcy5pbmRleEluUGFyZW50KNC+YmplY3QucGFyZW50LCDQvmJqZWN0LmVsZW1lbnQpO1xyXG4gICAgICB0aGlzLm1vdmVUbyjQvmJqZWN0LnBsYWNlLCDQvmJqZWN0LmVsZW1lbnQsINC+YmplY3QuZGVzdGluYXRpb24pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICAvL2ZvciAobGV0IGkgPSAwOyBpIDwg0L5iamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGZvciAobGV0IGkgPSDQvmJqZWN0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICBjb25zdCDQvmJqZWN0ID0g0L5iamVjdHNbaV07XHJcbiAgICAgIGlmICjQvmJqZWN0LmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuZGFDbGFzc25hbWUpKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlQmFjayjQvmJqZWN0LnBhcmVudCwg0L5iamVjdC5lbGVtZW50LCDQvmJqZWN0LmluZGV4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5tb3ZlVG8gPSBmdW5jdGlvbiAocGxhY2UsIGVsZW1lbnQsIGRlc3RpbmF0aW9uKSB7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZGFDbGFzc25hbWUpO1xyXG4gIGlmIChwbGFjZSA9PT0gJ2xhc3QnIHx8IHBsYWNlID49IGRlc3RpbmF0aW9uLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgZGVzdGluYXRpb24uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKHBsYWNlID09PSAnZmlyc3QnKSB7XHJcbiAgICBkZXN0aW5hdGlvbi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBlbGVtZW50KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgZGVzdGluYXRpb24uY2hpbGRyZW5bcGxhY2VdLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBlbGVtZW50KTtcclxufTtcclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5tb3ZlQmFjayA9IGZ1bmN0aW9uIChwYXJlbnQsIGVsZW1lbnQsIGluZGV4KSB7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZGFDbGFzc25hbWUpO1xyXG4gIGlmIChwYXJlbnQuY2hpbGRyZW5baW5kZXhdICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHBhcmVudC5jaGlsZHJlbltpbmRleF0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIGVsZW1lbnQpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwYXJlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcclxuICB9XHJcbn07XHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUuaW5kZXhJblBhcmVudCA9IGZ1bmN0aW9uIChwYXJlbnQsIGVsZW1lbnQpIHtcclxuICBjb25zdCBhcnJheSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHBhcmVudC5jaGlsZHJlbik7XHJcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYXJyYXksIGVsZW1lbnQpO1xyXG59O1xyXG5EeW5hbWljQWRhcHQucHJvdG90eXBlLmFycmF5U29ydCA9IGZ1bmN0aW9uIChhcnIpIHtcclxuICBpZiAodGhpcy50eXBlID09PSAnbWluJykge1xyXG4gICAgQXJyYXkucHJvdG90eXBlLnNvcnQuY2FsbChhcnIsIGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgIGlmIChhLmJyZWFrcG9pbnQgPT09IGIuYnJlYWtwb2ludCkge1xyXG4gICAgICAgIGlmIChhLnBsYWNlID09PSBiLnBsYWNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhLnBsYWNlID09PSAnZmlyc3QnIHx8IGIucGxhY2UgPT09ICdsYXN0Jykge1xyXG4gICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGEucGxhY2UgPT09ICdsYXN0JyB8fCBiLnBsYWNlID09PSAnZmlyc3QnKSB7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhLnBsYWNlIC0gYi5wbGFjZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGEuYnJlYWtwb2ludCAtIGIuYnJlYWtwb2ludDtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBBcnJheS5wcm90b3R5cGUuc29ydC5jYWxsKGFyciwgZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgaWYgKGEuYnJlYWtwb2ludCA9PT0gYi5icmVha3BvaW50KSB7XHJcbiAgICAgICAgaWYgKGEucGxhY2UgPT09IGIucGxhY2UpIHtcclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGEucGxhY2UgPT09ICdmaXJzdCcgfHwgYi5wbGFjZSA9PT0gJ2xhc3QnKSB7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhLnBsYWNlID09PSAnbGFzdCcgfHwgYi5wbGFjZSA9PT0gJ2ZpcnN0Jykge1xyXG4gICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGIucGxhY2UgLSBhLnBsYWNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYi5icmVha3BvaW50IC0gYS5icmVha3BvaW50O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59O1xyXG5jb25zdCBkYSA9IG5ldyBEeW5hbWljQWRhcHQoJ21heCcpO1xyXG5kYS5pbml0KCk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvKipcclxuICogc2V0IGhhc2ggdG8gdXJsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2V0SGFzaCA9IGhhc2ggPT4ge1xyXG4gIGhhc2ggPSBoYXNoID8gYCMke2hhc2h9YCA6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMF07XHJcbiAgaGlzdG9yeS5wdXNoU3RhdGUoJycsICcnLCBoYXNoKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBnZXQgaGFzaCBmcm9tIHVybFxyXG4gKiBAcmV0dXJucyBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRIYXNoID0gKCkgPT4ge1xyXG4gIGlmIChsb2NhdGlvbi5oYXNoKSB7XHJcbiAgICByZXR1cm4gbG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIGJvZHkgbG9ja1xyXG5leHBvcnQgbGV0IGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcclxuLyoqXHJcbiAqIHRvZ2dsZXMgYm9keSBsb2NrXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJvZHlMb2NrVG9nZ2xlID0gKGRlbGF5ID0gNTAwKSA9PiB7XHJcbiAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2xvY2snKSkge1xyXG4gICAgYm9keVVubG9jayhkZWxheSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGJvZHlMb2NrKGRlbGF5KTtcclxuICB9XHJcbn07XHJcbi8qKlxyXG4gKiB1bmxvY2tzIGJvZHlcclxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYm9keVVubG9jayA9IChkZWxheSA9IDUwMCkgPT4ge1xyXG4gIGlmIChib2R5TG9ja1N0YXR1cykge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJyk7XHJcbiAgICB9LCBkZWxheSk7XHJcbiAgICBib2R5TG9ja1N0YXR1cyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcclxuICAgIH0sIGRlbGF5KTtcclxuICB9XHJcbn07XHJcbi8qKlxyXG4gKiBsb2NrcyBib2R5XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJvZHlMb2NrID0gKGRlbGF5ID0gNTAwKSA9PiB7XHJcbiAgaWYgKGJvZHlMb2NrU3RhdHVzKSB7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbG9jaycpO1xyXG5cclxuICAgIGJvZHlMb2NrU3RhdHVzID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgYm9keUxvY2tTdGF0dXMgPSB0cnVlO1xyXG4gICAgfSwgZGVsYXkpO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJheVxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGF0YVNldFZhbHVlXHJcbiAqIHByb2Nlc3MgbWVkaWEgcmVxdWVzdHMgZnJvbSBhdHRyaWJ1dGVzXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZGF0YU1lZGlhUXVlcmllcyA9IChhcnJheSwgZGF0YVNldFZhbHVlKSA9PiB7XHJcbiAgLy8gZ2V0IG9iamVjdHMgd2l0aCBtZWRpYSBxdWVyaWVzXHJcbiAgY29uc3QgbWVkaWEgPSBBcnJheS5mcm9tKGFycmF5KS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0sIGluZGV4LCBzZWxmKSB7XHJcbiAgICBpZiAoaXRlbS5kYXRhc2V0W2RhdGFTZXRWYWx1ZV0pIHtcclxuICAgICAgcmV0dXJuIGl0ZW0uZGF0YXNldFtkYXRhU2V0VmFsdWVdLnNwbGl0KCcsJylbMF07XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy8gb2JqZWN0cyB3aXRoIG1lZGlhIHF1ZXJpZXMgaW5pdGlhbGl6YXRpb25cclxuICBpZiAobWVkaWEubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBicmVha3BvaW50c0FycmF5ID0gW107XHJcbiAgICBtZWRpYS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBwYXJhbXMgPSBpdGVtLmRhdGFzZXRbZGF0YVNldFZhbHVlXTtcclxuICAgICAgY29uc3QgYnJlYWtwb2ludCA9IHt9O1xyXG4gICAgICBjb25zdCBwYXJhbXNBcnJheSA9IHBhcmFtcy5zcGxpdCgnLCcpO1xyXG4gICAgICBicmVha3BvaW50LnZhbHVlID0gcGFyYW1zQXJyYXlbMF07XHJcbiAgICAgIGJyZWFrcG9pbnQudHlwZSA9IHBhcmFtc0FycmF5WzFdID8gcGFyYW1zQXJyYXlbMV0udHJpbSgpIDogJ21heCc7XHJcbiAgICAgIGJyZWFrcG9pbnQuaXRlbSA9IGl0ZW07XHJcbiAgICAgIGJyZWFrcG9pbnRzQXJyYXkucHVzaChicmVha3BvaW50KTtcclxuICAgIH0pO1xyXG4gICAgLy8gZ2V0IHVuaXF1ZSBicmVha3BvaW50c1xyXG4gICAgbGV0IG1kUXVlcmllcyA9IGJyZWFrcG9pbnRzQXJyYXkubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgJygnICtcclxuICAgICAgICBpdGVtLnR5cGUgK1xyXG4gICAgICAgICctd2lkdGg6ICcgK1xyXG4gICAgICAgIGl0ZW0udmFsdWUgK1xyXG4gICAgICAgICdweCksJyArXHJcbiAgICAgICAgaXRlbS52YWx1ZSArXHJcbiAgICAgICAgJywnICtcclxuICAgICAgICBpdGVtLnR5cGVcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgbWRRdWVyaWVzID0gdW5pcXVlQXJyYXkobWRRdWVyaWVzKTtcclxuICAgIGNvbnN0IG1kUXVlcmllc0FycmF5ID0gW107XHJcblxyXG4gICAgaWYgKG1kUXVlcmllcy5sZW5ndGgpIHtcclxuICAgICAgLy8gd29yayB3aXRoIGV2ZXJ5IGJyZWFrcG9pbnRcclxuICAgICAgbWRRdWVyaWVzLmZvckVhY2goYnJlYWtwb2ludCA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zQXJyYXkgPSBicmVha3BvaW50LnNwbGl0KCcsJyk7XHJcbiAgICAgICAgY29uc3QgbWVkaWFCcmVha3BvaW50ID0gcGFyYW1zQXJyYXlbMV07XHJcbiAgICAgICAgY29uc3QgbWVkaWFUeXBlID0gcGFyYW1zQXJyYXlbMl07XHJcbiAgICAgICAgY29uc3QgbWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKHBhcmFtc0FycmF5WzBdKTtcclxuICAgICAgICAvLyBvYmplY3RzIHdpdGggY29uZGl0aW9uc1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zQXJyYXkgPSBicmVha3BvaW50c0FycmF5LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPT09IG1lZGlhQnJlYWtwb2ludCAmJiBpdGVtLnR5cGUgPT09IG1lZGlhVHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBtZFF1ZXJpZXNBcnJheS5wdXNoKHtcclxuICAgICAgICAgIGl0ZW1zQXJyYXksXHJcbiAgICAgICAgICBtYXRjaE1lZGlhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIG1kUXVlcmllc0FycmF5O1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBzbW9vdGhseSBzbGlkZXMgdXBcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3dtb3JlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgX3NsaWRlVXAgPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCwgc2hvd21vcmUgPSAwKSA9PiB7XHJcbiAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xyXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ19zbGlkZScpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdoZWlnaHQsIG1hcmdpbiwgcGFkZGluZyc7XHJcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xyXG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGAke3RhcmdldC5vZmZzZXRIZWlnaHR9cHhgO1xyXG4gICAgdGFyZ2V0Lm9mZnNldEhlaWdodDtcclxuICAgIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHNob3dtb3JlID8gYCR7c2hvd21vcmV9cmVtYCA6IGAwYDtcclxuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcclxuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcclxuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRhcmdldC5oaWRkZW4gPSAhc2hvd21vcmUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICFzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JykgOiBudWxsO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpO1xyXG4gICAgICAhc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93JykgOiBudWxsO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XHJcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdfc2xpZGUnKTtcclxuICAgICAgLy8gY3JlYXRlIGV2ZW50XHJcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCdzbGlkZVVwRG9uZScsIHtcclxuICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0sIGR1cmF0aW9uKTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogc21vb3RobHkgc2xpZGVzIGRvd25cclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3dtb3JlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgX3NsaWRlRG93biA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwLCBzaG93bW9yZSA9IDApID0+IHtcclxuICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XHJcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnX3NsaWRlJyk7XHJcbiAgICB0YXJnZXQuaGlkZGVuID0gdGFyZ2V0LmhpZGRlbiA/IGZhbHNlIDogbnVsbDtcclxuICAgIHNob3dtb3JlID8gdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKSA6IG51bGw7XHJcbiAgICBsZXQgaGVpZ2h0ID0gdGFyZ2V0Lm9mZnNldEhlaWdodDtcclxuICAgIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHNob3dtb3JlID8gYCR7c2hvd21vcmV9cmVtYCA6IGAwYDtcclxuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcclxuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcclxuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdoZWlnaHQsIG1hcmdpbiwgcGFkZGluZyc7XHJcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xyXG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJyk7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJyk7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKTtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpO1xyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKTtcclxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ19zbGlkZScpO1xyXG4gICAgICAvLyBjcmVhdGUgZXZlbnRcclxuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ3NsaWRlRG93bkRvbmUnLCB7XHJcbiAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9LCBkdXJhdGlvbik7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIHRvZ2dsZXMgc21vb3RoIHNsaWRlXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxyXG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cclxuICogQHJldHVybnMgZnVuY3Rpb25cclxuICovXHJcbmV4cG9ydCBjb25zdCBfc2xpZGVUb2dnbGUgPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCkgPT4ge1xyXG4gIGlmICh0YXJnZXQuaGlkZGVuKSB7XHJcbiAgICByZXR1cm4gX3NsaWRlRG93bih0YXJnZXQsIGR1cmF0aW9uKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIF9zbGlkZVVwKHRhcmdldCwgZHVyYXRpb24pO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBjb252ZXJ0cyByZW0gdG8gcGl4ZWxzXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSByZW1WYWx1ZVxyXG4gKiBAcmV0dXJucyBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1Ub1B4KHJlbVZhbHVlKSB7XHJcbiAgLy8g0J/QvtC70YPRh9Cw0LXQvCDRgtC10LrRg9GJ0LjQuSDQsdCw0LfQvtCy0YvQuSDRgNCw0LfQvNC10YAg0YjRgNC40YTRgtCwIChmb250LXNpemUpINC40Lcg0Y3Qu9C10LzQtdC90YLQsCA8aHRtbD5cclxuICB2YXIgaHRtbEZvbnRTaXplID0gcGFyc2VGbG9hdChcclxuICAgIGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5mb250U2l6ZVxyXG4gICk7XHJcblxyXG4gIC8vINCf0LXRgNC10LLQvtC00LjQvCDQt9C90LDRh9C10L3QuNC1INC40LcgcmVtINCyIHB4XHJcbiAgdmFyIHB4VmFsdWUgPSByZW1WYWx1ZSAqIGh0bWxGb250U2l6ZTtcclxuXHJcbiAgLy8g0J7QutGA0YPQs9C70Y/QtdC8INC30L3QsNGH0LXQvdC40LUg0LTQviDRhtC10LvRi9GFINC/0LjQutGB0LXQu9C10LkgKNC/0L4g0LbQtdC70LDQvdC40Y4pXHJcbiAgcmV0dXJuIE1hdGgucm91bmQocHhWYWx1ZSkgKyAncHgnO1xyXG59XHJcblxyXG4vLyByZW1vdmUgY2xhc3MgZnJvbSBhbGwgYXJyYXkgZWxlbWVudHNcclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNsYXNzZXMgPSAoYXJyYXksIGNsYXNzTmFtZSkgPT4ge1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgIGFycmF5W2ldLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IGJvZHlMb2NrU3RhdHVzLCBib2R5TG9ja1RvZ2dsZSB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuY29uc3QgbWVudUluaXQgPSAoKSA9PiB7XHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpKSB7XHJcbiAgICAgICAgY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpO1xyXG5cclxuICAgICAgICBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoYm9keUxvY2tTdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdfbWVudS1vcGVuZWQnKTtcclxuICAgICAgICAgICAgICAgIGJvZHlMb2NrVG9nZ2xlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbm1lbnVJbml0KCk7XHJcbiIsImltcG9ydCB7IF9zbGlkZVVwLCBfc2xpZGVEb3duLCBfc2xpZGVUb2dnbGUgfSBmcm9tICcuL3V0aWxzLmpzJztcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jbGFzcyBTZWxlY3Qge1xyXG4gICAgLy8gc2V0dXAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8vIGN1c3RvbSBzZWxlY3QgY2xhc3Nlc1xyXG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IHtcclxuICAgICAgICAgICAgLy8gaHRtbCBidWlsZCBjbGFzc2VzXHJcbiAgICAgICAgICAgIHNlbDogJ3NlbGVjdCcsXHJcbiAgICAgICAgICAgIGJvZHk6ICdzZWxlY3RfX2JvZHknLFxyXG4gICAgICAgICAgICBsYWJlbDogJ3NlbGVjdF9fbGFiZWwnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ3NlbGVjdF9fdGl0bGUnLFxyXG4gICAgICAgICAgICB2YWw6ICdzZWxlY3RfX3ZhbHVlJyxcclxuICAgICAgICAgICAgY29udGVudDogJ3NlbGVjdF9fY29udGVudCcsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6ICdzZWxlY3RfX29wdGlvbnMnLFxyXG4gICAgICAgICAgICBvcHRpb246ICdzZWxlY3RfX29wdGlvbicsXHJcbiAgICAgICAgICAgIHNjcm9sbDogJ3NlbGVjdF9fc2Nyb2xsJyxcclxuICAgICAgICAgICAgZ3JvdXA6ICdzZWxlY3RfX2dyb3VwJyxcclxuICAgICAgICAgICAgaW5wOiAnc2VsZWN0X19pbnB1dCcsXHJcbiAgICAgICAgICAgIGFzc2V0OiAnc2VsZWN0X19hc3NldCcsXHJcbiAgICAgICAgICAgIHR4dDogJ3NlbGVjdF9fdGV4dCcsXHJcbiAgICAgICAgICAgIGhpbnQ6ICdzZWxlY3RfX2hpbnQnLFxyXG5cclxuICAgICAgICAgICAgLy8gc3RhdGUgY2xhc3Nlc1xyXG4gICAgICAgICAgICBhY3RpdmU6ICdfc2VsZWN0LWFjdGl2ZScsXHJcbiAgICAgICAgICAgIGZvY3VzZWQ6ICdfc2VsZWN0LWZvY3VzZWQnLFxyXG4gICAgICAgICAgICBvcGVuZWQ6ICdfc2VsZWN0LW9wZW5lZCcsXHJcbiAgICAgICAgICAgIGZpbGxlZDogJ19zZWxlY3QtZmlsbGVkJyxcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ICdfc2VsZWN0LXNlbGVjdGVkJyxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6ICdfc2VsZWN0LWRpc2FibGVkJyxcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZGl0aW9uYWwgY2xhc3Nlc1xyXG4gICAgICAgICAgICBsaXN0OiAnX3NlbGVjdC1saXN0JyxcclxuICAgICAgICAgICAgZXJyb3I6ICdfc2VsZWN0LWVycm9yJyxcclxuICAgICAgICAgICAgbXVsdGlwbGU6ICdfc2VsZWN0LW11bHRpcGxlJyxcclxuICAgICAgICAgICAgY2hlY2tib3g6ICdfc2VsZWN0LWNoZWNrYm94JyxcclxuICAgICAgICAgICAgbGFiZWw6ICdfc2VsZWN0LWxhYmVsJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGFsbCBzZWxlY3QgaXRlbXNcclxuICAgICAgICBjb25zdCBzZWxlY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0Jyk7XHJcbiAgICAgICAgaWYgKHNlbGVjdExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdChzZWxlY3RMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2VsZWN0IGluaXRpYWxpemF0aW9uICYgYnVpbGQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLy8gaW5pdGlhbGl6YXRpb25cclxuICAgIGluaXQoc2VsZWN0TGlzdCkge1xyXG4gICAgICAgIC8vIGluaXRcclxuICAgICAgICBzZWxlY3RMaXN0LmZvckVhY2goKHNlbGVjdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGFyLXJhdGluZycpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRTZWxJdGVtKHNlbGVjdCwgaW5kZXggKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBldmVudHNcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAnY2xpY2snLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb25zKGUpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgICApO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICdrZXlkb3duJyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAnZm9jdXNpbicsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGlvbnMoZSk7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgJ2ZvY3Vzb3V0JyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIC8vIHNpbmdsZSBzZWxlY3QgaXRlbSBpbml0aWFsaXphdGlvblxyXG4gICAgaW5pdFNlbEl0ZW0ocmVsYXRpdmVTZWwsIGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc2VsKTtcclxuICAgICAgICByZWxhdGl2ZVNlbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxlY3QsIHJlbGF0aXZlU2VsKTtcclxuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQocmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIHJlbGF0aXZlU2VsLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgaW5kZXggPyAocmVsYXRpdmVTZWwuZGF0YXNldC5zZWxJZCA9IGluZGV4KSA6IG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKSkge1xyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5kYXRhc2V0Lm9wdFBsYWNlaG9sZGVyID0gdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS5sYWJlbC5zaG93KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxUaXRsZSA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLnRpdGxlKS50d2luU2VsO1xyXG4gICAgICAgICAgICAgICAgc2VsVGl0bGUuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgICAgICAgICAgICAgICdhZnRlcmJlZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5sYWJlbH1cIj4ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS5sYWJlbC50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLmxhYmVsLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9PC9zcGFuPmBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgIT09ICcwJykge1xyXG4gICAgICAgICAgICBzZWxlY3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgICAgICAgICAgJ2JlZm9yZWVuZCcsXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmJvZHl9XCI+PGRpdiBoaWRkZW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5vcHRpb25zfVwiPjwvZGl2PjwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgICAgICAgICAgJ2JlZm9yZWVuZCcsXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmJvZHl9XCI+PGRpdiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLm9wdGlvbnN9XCI+PC9kaXY+PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5idWlsZChyZWxhdGl2ZVNlbCk7XHJcblxyXG4gICAgICAgIHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgPSByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkID8gcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCA6ICcxNTAnO1xyXG4gICAgICAgIHJlbGF0aXZlU2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmluaXRTZWxlY3Rpb25zKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gc2VsZWN0IGJ1aWxkXHJcbiAgICBidWlsZChyZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3Qgc2VsT2JqID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gc2V0IGlkXHJcbiAgICAgICAgc2VsZWN0LmRhdGFzZXQuc2VsSWQgPSByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbElkO1xyXG4gICAgICAgIC8vIHNldCB2YWx1ZVxyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgLy8gc2V0IG9wdGlvbnNcclxuICAgICAgICB0aGlzLnNldE9wdGlvbnMoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgLy8gc2V0IGNzcyBtb2RpZmljYXRvclxyXG4gICAgICAgIHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsQWRkb25DbGFzc1xyXG4gICAgICAgICAgICA/IHNlbGVjdC5jbGFzc0xpc3QuYWRkKGBzZWxlY3RfJHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEFkZG9uQ2xhc3N9YClcclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgIC8vIHNldCBjbGFzcyBpZiBzZWxlY3QgaXMgbXVsdGlwbGVcclxuICAgICAgICByZWxhdGl2ZVNlbC5tdWx0aXBsZVxyXG4gICAgICAgICAgICA/IHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5tdWx0aXBsZSlcclxuICAgICAgICAgICAgOiBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMubXVsdGlwbGUpO1xyXG4gICAgICAgIC8vIHNldCBjbGFzcyBpZiBzZWxlY3QgY2hlY2tib3hlcyBhcmUgc2V0XHJcbiAgICAgICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1jaGVja2JveGVzJykgJiYgcmVsYXRpdmVTZWwubXVsdGlwbGVcclxuICAgICAgICAgICAgPyBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuY2hlY2tib3gpXHJcbiAgICAgICAgICAgIDogc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmNoZWNrYm94KTtcclxuICAgICAgICAvLyBkaXNhYmxlIHNlbGVjdFxyXG4gICAgICAgIHRoaXMuZGlzYWJsZVNlbGVjdChzZWxlY3QsIHJlbGF0aXZlU2VsKTtcclxuICAgICAgICAvLyBzZXQgc2VhcmNoIGFjdGlvbnMgaWYgZGF0YS1zZWwtc2VhcmNoIGlzIHNldFxyXG4gICAgICAgIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtc2VhcmNoJykgPyB0aGlzLnNldFNlYXJjaEFjdGlvbnMoc2VsZWN0KSA6IG51bGw7XHJcbiAgICAgICAgLy8gc2V0IHNlbGVjdCBhY3Rpb25zIGlmIGl0J3MgaW5pdGlhbGx5IG9wZW5lZFxyXG4gICAgICAgIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtb3BlbmVkJykgPyB0aGlzLnNldEFjdGlvbihzZWxlY3QpIDogbnVsbDtcclxuXHJcbiAgICAgICAgLy8gc2V0IHNlbGVjdCBoaW50XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSGludCkge1xyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAgICAgICAgICdiZWZvcmVlbmQnLFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJzZWxlY3RfX2hpbnRcIj4ke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSGludH08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB2YWxpZGF0ZSBzZWxlY3RcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuY2xvc2VzdCgnZm9ybScpKSB7XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLmNsb3Nlc3QoJ2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoc2VsT2JqLmNsYXNzZXMuZmlsbGVkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbE9iai5hZGRFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbE9iai5yZW1vdmVFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2hvdyAvIGhpZGUgc2VsZWN0aW9uIGZyb20gc2VsZWN0IHRpdGxlXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zaG93LXZhbCcpKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0LXNob3ctdmFsJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ19zZWxlY3Qtc2hvdy12YWwnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBzZXQgdHdpbiBzZWxlY3QgdGl0bGUgdmFsdWVcclxuICAgIHNldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBjb25zdCBzZWxCb2R5ID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMuYm9keSkudHdpblNlbDtcclxuICAgICAgICBjb25zdCBzZWxUaXRsZSA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLnRpdGxlKS50d2luU2VsO1xyXG5cclxuICAgICAgICBpZiAoc2VsVGl0bGUpIHNlbFRpdGxlLnJlbW92ZSgpO1xyXG4gICAgICAgIHNlbEJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy5nZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKSk7XHJcbiAgICB9XHJcbiAgICAvLyBzZXQgdHdpbiBzZWxlY3Qgb3B0aW9uc1xyXG4gICAgc2V0T3B0aW9ucyhzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnR3aW5TZWw7XHJcbiAgICAgICAgY29uc3QgcmVsYXRpdmVTZWxPcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykucmVsYXRpdmVTZWw7XHJcblxyXG4gICAgICAgIG9wdGlvbnMuaW5uZXJIVE1MID0gdGhpcy5nZXRPcHRpb25zKHJlbGF0aXZlU2VsKTtcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWxPcHRpb25zLnF1ZXJ5U2VsZWN0b3IoJ1tzZWxlY3RlZF0nKSkge1xyXG4gICAgICAgICAgICBvcHRpb25zLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuY2xhc3Nlcy5vcHRpb259YCkuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGRpc2FibGUgc2VsZWN0XHJcbiAgICBkaXNhYmxlU2VsZWN0KHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMudGl0bGUpLnR3aW5TZWwuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLnRpdGxlKS50d2luU2VsLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG1haW4gYWN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vIHNldCBtYWluIGFjdGlvbnNcclxuICAgIHNldEFjdGlvbnMoZSkge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBlLnR5cGU7XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMuc2VsKSkgfHxcclxuICAgICAgICAgICAgdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMubGlzdCkpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IHRhcmdldC5jbG9zZXN0KCcuc2VsZWN0JylcclxuICAgICAgICAgICAgICAgID8gdGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3QnKVxyXG4gICAgICAgICAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgYC4ke3RoaXMuY2xhc3Nlcy5zZWx9W2RhdGEtc2VsLWlkPVwiJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5saXN0KSkuZGF0YXNldC5zZWxlY3RJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVwiXWBcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgcmVsYXRpdmVTZWwgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QpLnJlbGF0aXZlU2VsO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdjbGljaycpIHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVsYXRpdmVTZWwuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMubGlzdCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbExpc3QgPSB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5saXN0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbE9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgLiR7dGhpcy5jbGFzc2VzLnNlbH1bZGF0YS1zZWwtaWQ9XCIke3NlbExpc3QuZGF0YXNldC5zZWxJZH1cIl0gLnNlbGVjdF9fb3B0aW9uW2RhdGEtb3B0LXZhbD1cIiR7c2VsTGlzdC5kYXRhc2V0Lm9wdFZhbH1cIl1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0T3B0aW9uQWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwsIHNlbE9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy50aXRsZSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9uKHNlbGVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcHRpb24pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxPcHRpb24gPSB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcHRpb24pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25BY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCwgc2VsT3B0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2ZvY3VzaW4nIHx8IHR5cGUgPT09ICdmb2N1c291dCcpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5zZWwpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnZm9jdXNpbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmZvY3VzZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5mb2N1c2VkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLmZpbGxlZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2tleWRvd24nICYmIGUuY29kZSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VHcm91cCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZUdyb3VwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gc2V0IHNpbmdsZSBzZWxlY3QgYWN0aW9uXHJcbiAgICBzZXRBY3Rpb24oc2VsZWN0KSB7XHJcbiAgICAgICAgY29uc3QgcmVsYXRpdmVTZWwgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QpLnJlbGF0aXZlU2VsO1xyXG4gICAgICAgIGNvbnN0IHNlbE9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS50d2luU2VsO1xyXG5cclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuY2xvc2VzdCgnW2RhdGEtb25lLXNlbGVjdF0nKSkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RPbmVHcm91cCA9IHJlbGF0aXZlU2VsLmNsb3Nlc3QoJ1tkYXRhLW9uZS1zZWxlY3RdJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VHcm91cChzZWxlY3RPbmVHcm91cCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNlbE9wdGlvbnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmNsYXNzZXMub3BlbmVkKTtcclxuICAgICAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgIT09ICcwJykge1xyXG4gICAgICAgICAgICAgICAgX3NsaWRlVG9nZ2xlKHNlbE9wdGlvbnMsIHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLm9wZW5lZCkgJiZcclxuICAgICAgICAgICAgICAgIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZScpICYmXHJcbiAgICAgICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5lcnJvcilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNsb3NlIHNpbmdsZSBzZWxlY3QgZ3JvdXBcclxuICAgIGNsb3NlR3JvdXAoZ3JvdXApIHtcclxuICAgICAgICBjb25zdCBzZWxHcm91cCA9IGdyb3VwID8gZ3JvdXAgOiBkb2N1bWVudDtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gc2VsR3JvdXAucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgYCR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMuc2VsKX0ke3RoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wZW5lZCl9YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKHNlbGVjdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbnMuZm9yRWFjaCgoc2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlSXRlbShzZWxlY3Rpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjbG9zZSBzaW5nbGUgc2VsZWN0IGl0ZW1cclxuICAgIGNsb3NlSXRlbShzZWxlY3QpIHtcclxuICAgICAgICBjb25zdCByZWxhdGl2ZVNlbCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCkucmVsYXRpdmVTZWw7XHJcbiAgICAgICAgY29uc3Qgc2VsT3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnR3aW5TZWw7XHJcblxyXG4gICAgICAgIGlmICghc2VsT3B0aW9ucy5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5vcGVuZWQpO1xyXG4gICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCAhPT0gJzAnKSB7XHJcbiAgICAgICAgICAgICAgICBfc2xpZGVVcChzZWxPcHRpb25zLCByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHNldCBzaW5nbGUgb3B0aW9uIGFjdGlvbnNcclxuICAgIHNldE9wdGlvbkFjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsLCBvcHRpb24pIHtcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC50b2dnbGUodGhpcy5jbGFzc2VzLnNlbGVjdGVkKTtcclxuICAgICAgICAgICAgY29uc3QgcmVsYXRpdmVTZWxlY3Rpb25zID0gdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS5lbGVtZW50cztcclxuXHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsZWN0aW9ucy5mb3JFYWNoKChyZWxhdGl2ZVNlbGVjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVTZWxlY3Rpb24ucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHR3aW5TZWxlY3Rpb25zID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpKTtcclxuICAgICAgICAgICAgdHdpblNlbGVjdGlvbnMuZm9yRWFjaCgodHdpblNlbGVjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVTZWxcclxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPVwiJHt0d2luU2VsZWN0aW9uLmRhdGFzZXQub3B0VmFsfVwiXWApXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghb3B0aW9uLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZWxhdGl2ZVNlbC5xdWVyeVNlbGVjdG9yKGBvcHRpb25bdmFsdWU9XCIke29wdGlvbi5kYXRhc2V0Lm9wdFZhbH1cIl1gKSk7XHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbFxyXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBvcHRpb25bdmFsdWU9XCIke29wdGlvbi5kYXRhc2V0Lm9wdFZhbH1cIl1gKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0X19vcHRpb24nKVxyXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKG9wdCkgPT4gb3B0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLnNlbGVjdGVkKSk7XHJcbiAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIGlmICghcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNob3ctc2VsZWN0aW9uJykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3QucXVlcnlTZWxlY3RvcihgJHt0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcHRpb24pfVtoaWRkZW5dYCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3QucXVlcnlTZWxlY3RvcihgJHt0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcHRpb24pfVtoaWRkZW5dYCkuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvcHRpb24uaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbC52YWx1ZSA9IG9wdGlvbi5oYXNBdHRyaWJ1dGUoJ2RhdGEtb3B0LXZhbCcpXHJcbiAgICAgICAgICAgICAgICA/IG9wdGlvbi5kYXRhc2V0Lm9wdFZhbFxyXG4gICAgICAgICAgICAgICAgOiBvcHRpb24udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9uKHNlbGVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25zKHJlbGF0aXZlU2VsKTtcclxuICAgIH1cclxuICAgIC8vIHNldCBzZWFyY2ggYWN0aW9uc1xyXG4gICAgc2V0U2VhcmNoQWN0aW9ucyhzZWxlY3QpIHtcclxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgY29uc3Qgc2VsSW5wdXQgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5pbnApLnR3aW5TZWw7XHJcbiAgICAgICAgY29uc3Qgc2VsT3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnR3aW5TZWwucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgYC4ke3RoaXMuY2xhc3Nlcy5vcHRpb259YFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHNlbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxPcHRpb25zLmZvckVhY2goKHNlbE9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbE9wdGlvbi50ZXh0Q29udGVudC50b1VwcGVyQ2FzZSgpLmluZGV4T2Yoc2VsSW5wdXQudmFsdWUudG9VcHBlckNhc2UoKSkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbE9wdGlvbi5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsT3B0aW9uLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZWxPcHRpb25zLmhpZGRlbiA9PT0gdHJ1ZSA/IF90aGlzLnNldEFjdGlvbihzZWxlY3QpIDogbnVsbDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIHNldCBzZWxlY3Qgc3VidGl0bGVcclxuICAgIHNldFN1YnRpdGxlKHJlbGF0aXZlU2VsKSB7fVxyXG5cclxuICAgIC8vIHZhbGlkYXRpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vIGFkZCBhbiBlcnJvciB0byBhIHNlbGVjdFxyXG4gICAgYWRkRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpIHtcclxuICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuZXJyb3IpO1xyXG5cclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zZWxFcnJvciAmJiAhcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50KSB7XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgICAgICAgICAgJ2JlZm9yZWVuZCcsXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInNlbGVjdF9faGludFwiPiR7cmVsYXRpdmVTZWwuZGF0YXNldC5zZWxFcnJvcn08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gcmVtb3ZlIGFuIGVycm9yIGZyb20gYSBzZWxlY3RcclxuICAgIHJlbW92ZUVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLmVycm9yKSkge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19oaW50JykgJiYgIXJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSGludCkge1xyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdF9faGludCcpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXRpbHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLy8gZ2V0IGN1c3RvbSBjbGFzc1xyXG4gICAgZ2V0Q2xhc3MoY3NzQ2xhc3MpIHtcclxuICAgICAgICByZXR1cm4gYC4ke2Nzc0NsYXNzfWA7XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgc2luZ2xlIHNlbGVjdCBpdGVtXHJcbiAgICBnZXRTZWxlY3Qoc2VsZWN0LCBjc3NDbGFzcykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsOiBzZWxlY3QucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksXHJcbiAgICAgICAgICAgIHR3aW5TZWw6IHNlbGVjdC5xdWVyeVNlbGVjdG9yKHRoaXMuZ2V0Q2xhc3MoY3NzQ2xhc3MpKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgc2VsZWN0ZWQgaXRlbSB2YWx1ZVxyXG4gICAgZ2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGxldCBhdHRyLFxyXG4gICAgICAgICAgICBhdHRyQ2xhc3MsXHJcbiAgICAgICAgICAgIHRpdGxlVmFsID0gdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsLCAyKS5odG1sO1xyXG5cclxuICAgICAgICAvLyBzZXQgdGl0bGUgdmFsdWVcclxuICAgICAgICB0aXRsZVZhbCA9IHRpdGxlVmFsLmxlbmd0aFxyXG4gICAgICAgICAgICA/IHRpdGxlVmFsXHJcbiAgICAgICAgICAgIDogcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxMYWJlbFxyXG4gICAgICAgICAgICA/IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsTGFiZWxcclxuICAgICAgICAgICAgOiAnJztcclxuXHJcbiAgICAgICAgLy8gc2V0IGFjdGl2ZSBjbGFzcyB0byBzZWxlY3QgaWYgaXQgY29udGFpbnMgYW55IHZhbHVlc1xyXG4gICAgICAgIGlmICh0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpLnZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmFjdGl2ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmFjdGl2ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZXQgc2VsZWN0IGxhYmVsXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtbGFiZWwnKSkge1xyXG4gICAgICAgICAgICBhdHRyID0gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxMYWJlbFxyXG4gICAgICAgICAgICAgICAgPyBgIGRhdGEtc2VsLWxhYmVsPVwiJHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbExhYmVsfVwiYFxyXG4gICAgICAgICAgICAgICAgOiBgIGRhdGEtc2VsLWxhYmVsPVwi0JLRi9Cx0L7RgFwiYDtcclxuICAgICAgICAgICAgYXR0ckNsYXNzID0gYCAke3RoaXMuY2xhc3Nlcy5sYWJlbH1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcHVzaCBzZWxlY3Rpb25zIHRvIHRoZSBsaXN0IGluc2lkZSBvZiBzZWxlY3QgdGl0bGVcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwubXVsdGlwbGUgJiYgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1saXN0JykpIHtcclxuICAgICAgICAgICAgdGl0bGVWYWwgPSB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpXHJcbiAgICAgICAgICAgICAgICAuZWxlbWVudHMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgIChvcHRpb24pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA8c3BhbiBkYXRhLW9wdC1pZD1cIiR7c2VsZWN0LmRhdGFzZXQuc2VsSWR9XCIgZGF0YS1vcHQtdmFsPVwiJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCIgY2xhc3M9XCJfbGlzdC1pdGVtXCI+JHt0aGlzLmdldENvbnRlbnQob3B0aW9uKX08L3NwYW4+YFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLmpvaW4oJycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQubGlzdCAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlbGF0aXZlU2VsLmRhdGFzZXQubGlzdCkpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVsYXRpdmVTZWwuZGF0YXNldC5saXN0KS5pbm5lckhUTUwgPSB0aXRsZVZhbDtcclxuICAgICAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNlYXJjaCcpKSB0aXRsZVZhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpbml0IHNlbGVjdCBzZWFyY2hcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1zZWFyY2gnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy50aXRsZX1cIj48c3BhbiAke2F0dHJ9IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMudmFsfVwiPjxpbnB1dCBhdXRvY29tcGxldGU9XCJvZmZcIiB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCIke3RpdGxlVmFsfVwiIGRhdGEtcGxhY2Vob2xkZXI9XCIke3RpdGxlVmFsfVwiIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuaW5wfVwiPjwvc3Bhbj48L2Rpdj5gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbUNsYXNzID1cclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHMubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpLmVsZW1lbnRzWzBdLmRhdGFzZXQub3B0Q2xhc3NcclxuICAgICAgICAgICAgICAgICAgICA/IGAgJHt0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpLmVsZW1lbnRzWzBdLmRhdGFzZXQub3B0Q2xhc3N9YFxyXG4gICAgICAgICAgICAgICAgICAgIDogJyc7XHJcbiAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy50aXRsZX1cIj48c3BhbiAke2F0dHIgPyBhdHRyIDogJyd9IGNsYXNzPVwiJHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3Nlcy52YWxcclxuICAgICAgICAgICAgfSAke2F0dHJDbGFzcyA/IGF0dHJDbGFzcyA6ICcnfVwiPjxzcGFuIGNsYXNzPVwiJHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3Nlcy5jb250ZW50XHJcbiAgICAgICAgICAgIH0ke2N1c3RvbUNsYXNzfVwiPiR7dGl0bGVWYWx9PC9zcGFuPjwvc3Bhbj48L2J1dHRvbj5gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGdldCBvcHRpb25zXHJcbiAgICBnZXRPcHRpb25zKHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsU2Nyb2xsID0gcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1zY3JvbGwnKSA/IGBkYXRhLXNpbXBsZWJhcmAgOiAnJztcclxuICAgICAgICBsZXQgc2VsU2Nyb2xsSGVpZ2h0ID0gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxTY3JvbGxcclxuICAgICAgICAgICAgPyBgc3R5bGU9XCJtYXgtaGVpZ2h0OiR7d2luZG93LmlubmVyV2lkdGggPiA3NjggPyByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbFNjcm9sbCA6IDIyfXJlbVwiYFxyXG4gICAgICAgICAgICA6ICcnO1xyXG4gICAgICAgIGxldCBzZWxPcHRpb25zID0gQXJyYXkuZnJvbShyZWxhdGl2ZVNlbC5vcHRpb25zKTtcclxuXHJcbiAgICAgICAgaWYgKHNlbE9wdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxPcHRpb25zSFRNTCA9IGBgO1xyXG5cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpICYmICF0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS5zaG93KSB8fFxyXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVTZWwubXVsdGlwbGVcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxPcHRpb25zID0gc2VsT3B0aW9ucy5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxPcHRpb25zSFRNTCArPSBzZWxTY3JvbGxcclxuICAgICAgICAgICAgICAgID8gYDxkaXYgJHtzZWxTY3JvbGx9ICR7c2VsU2Nyb2xsSGVpZ2h0fSBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnNjcm9sbH1cIj5gXHJcbiAgICAgICAgICAgICAgICA6ICcnO1xyXG4gICAgICAgICAgICBzZWxPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VsT3B0aW9uc0hUTUwgKz0gdGhpcy5nZXRPcHRpb24ob3B0aW9uLCByZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZWxPcHRpb25zSFRNTCArPSBzZWxTY3JvbGwgPyBgPC9kaXY+YCA6ICcnO1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsT3B0aW9uc0hUTUw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZ2V0IG9wdGlvblxyXG4gICAgZ2V0T3B0aW9uKG9wdGlvbiwgcmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gb3B0aW9uLnNlbGVjdGVkICYmIHJlbGF0aXZlU2VsLm11bHRpcGxlID8gYCAke3RoaXMuY2xhc3Nlcy5zZWxlY3RlZH1gIDogJyc7XHJcbiAgICAgICAgY29uc3Qgc2hvd1NlbGVjdGlvbiA9XHJcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCAmJiAhcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNob3ctc2VsZWN0aW9uJykgJiYgIXJlbGF0aXZlU2VsLm11bHRpcGxlXHJcbiAgICAgICAgICAgICAgICA/IGBoaWRkZW5gXHJcbiAgICAgICAgICAgICAgICA6IGBgO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbkNsYXNzID0gb3B0aW9uLmRhdGFzZXQub3B0Q2xhc3MgPyBgICR7b3B0aW9uLmRhdGFzZXQub3B0Q2xhc3N9YCA6ICcnO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbkxpbmsgPSBvcHRpb24uZGF0YXNldC5vcHRpb25MaW5rID8gb3B0aW9uLmRhdGFzZXQub3B0aW9uTGluayA6IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbkxpbmtUYXJnZXQgPSBvcHRpb24uaGFzQXR0cmlidXRlKCdkYXRhLW9wdGlvbi1saW5rLXRhcmdldCcpID8gYHRhcmdldD1cIl9ibGFua1wiYCA6ICcnO1xyXG4gICAgICAgIGxldCBvcHRpb25IVE1MID0gYGA7XHJcblxyXG4gICAgICAgIG9wdGlvbkhUTUwgKz0gb3B0aW9uTGlua1xyXG4gICAgICAgICAgICA/IGA8YSAke29wdGlvbkxpbmtUYXJnZXR9ICR7c2hvd1NlbGVjdGlvbn0gaHJlZj1cIiR7b3B0aW9uTGlua31cIiBkYXRhLW9wdC12YWw9XCIke29wdGlvbi52YWx1ZX1cIiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLm9wdGlvbn0ke29wdGlvbkNsYXNzfSR7c2VsZWN0aW9uc31cIj5gXHJcbiAgICAgICAgICAgIDogYDxidXR0b24gJHtzaG93U2VsZWN0aW9ufSBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLm9wdGlvbn0ke29wdGlvbkNsYXNzfSR7c2VsZWN0aW9uc31cIiBkYXRhLW9wdC12YWw9XCIke29wdGlvbi52YWx1ZX1cIiB0eXBlPVwiYnV0dG9uXCI+YDtcclxuICAgICAgICBvcHRpb25IVE1MICs9IHRoaXMuZ2V0Q29udGVudChvcHRpb24pO1xyXG4gICAgICAgIG9wdGlvbkhUTUwgKz0gb3B0aW9uTGluayA/IGA8L2E+YCA6IGA8L2J1dHRvbj5gO1xyXG4gICAgICAgIHJldHVybiBvcHRpb25IVE1MO1xyXG4gICAgfVxyXG4gICAgLy8gZ2V0IHNlbGVjdCBjb250ZW50XHJcbiAgICBnZXRDb250ZW50KG9wdGlvbikge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbkRhdGEgPSBvcHRpb24uZGF0YXNldC5vcHRBc3NldCA/IGAke29wdGlvbi5kYXRhc2V0Lm9wdEFzc2V0fWAgOiAnJztcclxuICAgICAgICBjb25zdCBvcHRpb25EYXRhSFRNTCA9XHJcbiAgICAgICAgICAgIG9wdGlvbkRhdGEuaW5kZXhPZignaW1nJykgPj0gMCA/IGA8aW1nIHNyYz1cIiR7b3B0aW9uRGF0YX1cIiBhbHQ9XCJcIj5gIDogb3B0aW9uRGF0YTtcclxuICAgICAgICBsZXQgb3B0aW9uQ29udGVudEhUTUwgPSBgYDtcclxuXHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8c3BhbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmdyb3VwfVwiPmAgOiAnJztcclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuYXNzZXR9XCI+YCA6ICcnO1xyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBvcHRpb25EYXRhSFRNTCA6ICcnO1xyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPC9zcGFuPmAgOiAnJztcclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMudHh0fVwiPmAgOiAnJztcclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb24udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8L3NwYW4+YCA6ICcnO1xyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPC9zcGFuPmAgOiAnJztcclxuICAgICAgICByZXR1cm4gb3B0aW9uQ29udGVudEhUTUw7XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgc2VsZWN0IHBsYWNlaG9sZGVyXHJcbiAgICBnZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gQXJyYXkuZnJvbShyZWxhdGl2ZVNlbC5vcHRpb25zKS5maW5kKChvcHRpb24pID0+ICFvcHRpb24udmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAocGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc3VidGl0bGUpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHBsYWNlaG9sZGVyLnRleHRDb250ZW50LFxyXG4gICAgICAgICAgICAgICAgc2hvdzogcGxhY2Vob2xkZXIuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1waC1zaG93JyksXHJcbiAgICAgICAgICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHBsYWNlaG9sZGVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtcGgnKSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBwbGFjZWhvbGRlci5kYXRhc2V0Lm9wdFBsYWNlaG9sZGVyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZ2V0IHNlbGVjdGVkIG9wdGlvbnMgZGF0YVxyXG4gICAgZ2V0RGF0YShyZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGxldCBzZWxlY3Rpb25zID0gW107XHJcblxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgICBzZWxlY3Rpb25zID0gQXJyYXkuZnJvbShyZWxhdGl2ZVNlbC5vcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi5zZWxlY3RlZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0aW9ucy5wdXNoKHJlbGF0aXZlU2VsLm9wdGlvbnNbcmVsYXRpdmVTZWwuc2VsZWN0ZWRJbmRleF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlbGVtZW50czogc2VsZWN0aW9ucy5tYXAoKG9wdGlvbikgPT4gb3B0aW9uKSxcclxuICAgICAgICAgICAgdmFsdWVzOiBzZWxlY3Rpb25zLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpLm1hcCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpLFxyXG4gICAgICAgICAgICBodG1sOiBzZWxlY3Rpb25zLm1hcCgob3B0aW9uKSA9PiB0aGlzLmdldENvbnRlbnQob3B0aW9uKSlcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNlbGVjdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vIGluaXQgc2VsZWN0aW9uc1xyXG4gICAgaW5pdFNlbGVjdGlvbnMoZSkge1xyXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgIHRoaXMuYnVpbGQocmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0aW9ucyhyZWxhdGl2ZVNlbCk7XHJcbiAgICB9XHJcbiAgICAvLyBzZXQgc2VsZWN0aW9uc1xyXG4gICAgc2V0U2VsZWN0aW9ucyhyZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc3VibWl0JykgJiYgcmVsYXRpdmVTZWwudmFsdWUpIHtcclxuICAgICAgICAgICAgbGV0IHRlbXBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgdGVtcEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLmNsb3Nlc3QoJ2Zvcm0nKS5hcHBlbmQodGVtcEJ1dHRvbik7XHJcbiAgICAgICAgICAgIHRlbXBCdXR0b24uY2xpY2soKTtcclxuICAgICAgICAgICAgdGVtcEJ1dHRvbi5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5maWxsZWQpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xyXG4gICAgfVxyXG4gICAgLy8gY3VzdG9tIHNlbGVjdCBldmVudCAobGlzdGVuIHRvIGFueSBzZWxlY3Rpb25zIC8gbXV0YXRpb25zKVxyXG4gICAgc2VsZWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGlvbicsIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdDogcmVsYXRpdmVTZWxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbm5ldyBTZWxlY3Qoe30pO1xyXG4iLCJpbXBvcnQgJy4uL3Njc3Mvc3R5bGUuc2Nzcyc7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZvcm1zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gaW1wb3J0ICogYXMgZm9ybXMgZnJvbSAnLi91dGlscy9mb3Jtcy5qcyc7XHJcblxyXG4vLyBmb3JtIGZpZWxkc1xyXG4vLyBmb3Jtcy5mb3JtRmllbGRzSW5pdCh7IHZpZXdQYXNzOiBmYWxzZSB9KTtcclxuXHJcbi8vIGZvcm0gc3VibWl0XHJcbi8vIGZvcm1zLmZvcm1TdWJtaXQoKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdXRpbHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vL2hhbWJ1cmdlclxyXG5pbXBvcnQgJy4vdXRpbHMvaGFtYnVyZ2VyLmpzJztcclxuXHJcbi8vIHRhYnNcclxuLy8gaW1wb3J0ICcuL3V0aWxzL3RhYnMuanMnO1xyXG5cclxuLy8gYWNjb3JkaW9uXHJcbi8vIGltcG9ydCAnLi91dGlscy9hY2NvcmRpb24uanMnO1xyXG5cclxuLy8gc2VsZWN0XHJcbmltcG9ydCAnLi91dGlscy9zZWxlY3QuanMnO1xyXG5cclxuLy8gbW9kYWxzXHJcbi8vIGltcG9ydCAnLi91dGlscy9tb2RhbHMuanMnO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBsaWJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIGR5bmFtaWMgZG9tXHJcbmltcG9ydCAnLi9saWJzL2RkLmpzJztcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgJy4vZGV2L3Z6bXNrMS5qcyc7XHJcbmltcG9ydCAnLi9kZXYvbWFya3VzRE0uanMnO1xyXG5pbXBvcnQgJy4vZGV2L3VraWswLmpzJztcclxuaW1wb3J0ICcuL2Rldi9raWU2ZXIuanMnO1xyXG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJldmVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInF1ZXJ5U2VsZWN0b3IiLCJBcnJheSIsImZyb20iLCJjYXRlZ29yeSIsInJlbW92ZSIsImFkZCIsIkR5bmFtaWNBZGFwdCIsInR5cGUiLCJwcm90b3R5cGUiLCJpbml0IiwiX3RoaXMiLCLQvmJqZWN0cyIsImRhQ2xhc3NuYW1lIiwibm9kZXMiLCJpIiwibGVuZ3RoIiwibm9kZSIsImRhdGEiLCJkYXRhc2V0IiwiZGEiLCJ0cmltIiwiZGF0YUFycmF5Iiwic3BsaXQiLCLQvmJqZWN0IiwiZWxlbWVudCIsInBhcmVudCIsInBhcmVudE5vZGUiLCJkZXN0aW5hdGlvbiIsImJyZWFrcG9pbnQiLCJwbGFjZSIsImluZGV4IiwiaW5kZXhJblBhcmVudCIsInB1c2giLCJhcnJheVNvcnQiLCJtZWRpYVF1ZXJpZXMiLCJtYXAiLCJjYWxsIiwiZmlsdGVyIiwic2VsZiIsImluZGV4T2YiLCJtZWRpYSIsIm1lZGlhU3BsaXQiLCJTdHJpbmciLCJtYXRjaE1lZGlhIiwid2luZG93IiwibWVkaWFCcmVha3BvaW50Iiwi0L5iamVjdHNGaWx0ZXIiLCJhZGRMaXN0ZW5lciIsIm1lZGlhSGFuZGxlciIsIm1hdGNoZXMiLCJtb3ZlVG8iLCJjb250YWlucyIsIm1vdmVCYWNrIiwiY2hpbGRyZW4iLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJ1bmRlZmluZWQiLCJhcnJheSIsInNsaWNlIiwiYXJyIiwic29ydCIsImEiLCJiIiwic2V0SGFzaCIsImhhc2giLCJsb2NhdGlvbiIsImhyZWYiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiZ2V0SGFzaCIsInJlcGxhY2UiLCJib2R5TG9ja1N0YXR1cyIsImJvZHlMb2NrVG9nZ2xlIiwiZGVsYXkiLCJhcmd1bWVudHMiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5VW5sb2NrIiwiYm9keUxvY2siLCJzZXRUaW1lb3V0IiwiZGF0YU1lZGlhUXVlcmllcyIsImRhdGFTZXRWYWx1ZSIsImJyZWFrcG9pbnRzQXJyYXkiLCJwYXJhbXMiLCJwYXJhbXNBcnJheSIsInZhbHVlIiwibWRRdWVyaWVzIiwidW5pcXVlQXJyYXkiLCJtZFF1ZXJpZXNBcnJheSIsIm1lZGlhVHlwZSIsIml0ZW1zQXJyYXkiLCJfc2xpZGVVcCIsInRhcmdldCIsImR1cmF0aW9uIiwic2hvd21vcmUiLCJzdHlsZSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyYW5zaXRpb25EdXJhdGlvbiIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsIm92ZXJmbG93IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJoaWRkZW4iLCJyZW1vdmVQcm9wZXJ0eSIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsIl9zbGlkZURvd24iLCJfc2xpZGVUb2dnbGUiLCJyZW1Ub1B4IiwicmVtVmFsdWUiLCJodG1sRm9udFNpemUiLCJwYXJzZUZsb2F0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImZvbnRTaXplIiwicHhWYWx1ZSIsIk1hdGgiLCJyb3VuZCIsInJlbW92ZUNsYXNzZXMiLCJjbGFzc05hbWUiLCJtZW51SW5pdCIsImhhbWJ1cmdlciIsImUiLCJTZWxlY3QiLCJjb25zdHJ1Y3RvciIsImNsYXNzZXMiLCJzZWwiLCJib2R5IiwibGFiZWwiLCJ0aXRsZSIsInZhbCIsImNvbnRlbnQiLCJvcHRpb25zIiwib3B0aW9uIiwic2Nyb2xsIiwiZ3JvdXAiLCJpbnAiLCJhc3NldCIsInR4dCIsImhpbnQiLCJhY3RpdmUiLCJmb2N1c2VkIiwib3BlbmVkIiwiZmlsbGVkIiwic2VsZWN0ZWQiLCJkaXNhYmxlZCIsImxpc3QiLCJlcnJvciIsIm11bHRpcGxlIiwiY2hlY2tib3giLCJzZWxlY3RMaXN0Iiwic2VsZWN0IiwiaW5pdFNlbEl0ZW0iLCJzZXRBY3Rpb25zIiwiYmluZCIsInJlbGF0aXZlU2VsIiwiY3JlYXRlRWxlbWVudCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic2VsSWQiLCJnZXRQbGFjZWhvbGRlciIsIm9wdFBsYWNlaG9sZGVyIiwic2hvdyIsInNlbFRpdGxlIiwiZ2V0U2VsZWN0IiwidHdpblNlbCIsImluc2VydEFkamFjZW50SFRNTCIsInRleHQiLCJzcGVlZCIsImJ1aWxkIiwiaW5pdFNlbGVjdGlvbnMiLCJwYXJlbnRFbGVtZW50Iiwic2VsT2JqIiwic2V0VmFsdWUiLCJzZXRPcHRpb25zIiwic2VsQWRkb25DbGFzcyIsImhhc0F0dHJpYnV0ZSIsImRpc2FibGVTZWxlY3QiLCJzZXRTZWFyY2hBY3Rpb25zIiwic2V0QWN0aW9uIiwic2VsSGludCIsImNsb3Nlc3QiLCJhZGRFcnIiLCJyZW1vdmVFcnIiLCJzZWxCb2R5IiwiZ2V0VmFsdWUiLCJyZWxhdGl2ZVNlbE9wdGlvbnMiLCJpbm5lckhUTUwiLCJnZXRPcHRpb25zIiwiZ2V0Q2xhc3MiLCJzZWxlY3RJZCIsInNlbExpc3QiLCJzZWxPcHRpb24iLCJvcHRWYWwiLCJzZXRPcHRpb25BY3Rpb24iLCJjb2RlIiwiY2xvc2VHcm91cCIsInNlbE9wdGlvbnMiLCJzZWxlY3RPbmVHcm91cCIsInNlbEdyb3VwIiwic2VsZWN0aW9ucyIsInNlbGVjdGlvbiIsImNsb3NlSXRlbSIsInJlbGF0aXZlU2VsZWN0aW9ucyIsImdldERhdGEiLCJlbGVtZW50cyIsInJlbGF0aXZlU2VsZWN0aW9uIiwicmVtb3ZlQXR0cmlidXRlIiwidHdpblNlbGVjdGlvbnMiLCJ0d2luU2VsZWN0aW9uIiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsIm9wdCIsInRleHRDb250ZW50Iiwic2V0U2VsZWN0aW9ucyIsInNlbElucHV0IiwidG9VcHBlckNhc2UiLCJzZXRTdWJ0aXRsZSIsInNlbEVycm9yIiwicmVtb3ZlQ2hpbGQiLCJjc3NDbGFzcyIsImF0dHIiLCJhdHRyQ2xhc3MiLCJ0aXRsZVZhbCIsImh0bWwiLCJzZWxMYWJlbCIsInZhbHVlcyIsImdldENvbnRlbnQiLCJqb2luIiwiY3VzdG9tQ2xhc3MiLCJvcHRDbGFzcyIsInNlbFNjcm9sbCIsInNlbFNjcm9sbEhlaWdodCIsImlubmVyV2lkdGgiLCJzZWxPcHRpb25zSFRNTCIsImdldE9wdGlvbiIsInNob3dTZWxlY3Rpb24iLCJvcHRpb25DbGFzcyIsIm9wdGlvbkxpbmsiLCJvcHRpb25MaW5rVGFyZ2V0Iiwib3B0aW9uSFRNTCIsIm9wdGlvbkRhdGEiLCJvcHRBc3NldCIsIm9wdGlvbkRhdGFIVE1MIiwib3B0aW9uQ29udGVudEhUTUwiLCJwbGFjZWhvbGRlciIsImZpbmQiLCJzdWJ0aXRsZSIsInNlbGVjdGVkSW5kZXgiLCJ0ZW1wQnV0dG9uIiwiYXBwZW5kIiwiY2xpY2siXSwic291cmNlUm9vdCI6IiJ9