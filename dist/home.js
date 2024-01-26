/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/dev/kie6er.js":
/*!******************************!*\
  !*** ./src/js/dev/kie6er.js ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/dev/markusDM.js":
/*!********************************!*\
  !*** ./src/js/dev/markusDM.js ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/dev/ukik0.js":
/*!*****************************!*\
  !*** ./src/js/dev/ukik0.js ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/dev/vzmsk1.js":
/*!******************************!*\
  !*** ./src/js/dev/vzmsk1.js ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/utils/select.js":
/*!********************************!*\
  !*** ./src/js/utils/select.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/js/utils/utils.js");


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
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._slideToggle)(selOptions, relativeSel.dataset.speed);
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
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._slideUp)(selOptions, relativeSel.dataset.speed);
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

/***/ }),

/***/ "./src/js/utils/utils.js":
/*!*******************************!*\
  !*** ./src/js/utils/utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _slideDown: () => (/* binding */ _slideDown),
/* harmony export */   _slideToggle: () => (/* binding */ _slideToggle),
/* harmony export */   _slideUp: () => (/* binding */ _slideUp),
/* harmony export */   bodyLock: () => (/* binding */ bodyLock),
/* harmony export */   bodyLockStatus: () => (/* binding */ bodyLockStatus),
/* harmony export */   bodyLockToggle: () => (/* binding */ bodyLockToggle),
/* harmony export */   bodyUnlock: () => (/* binding */ bodyUnlock),
/* harmony export */   dataMediaQueries: () => (/* binding */ dataMediaQueries),
/* harmony export */   getHash: () => (/* binding */ getHash),
/* harmony export */   remToPx: () => (/* binding */ remToPx),
/* harmony export */   removeClasses: () => (/* binding */ removeClasses),
/* harmony export */   setHash: () => (/* binding */ setHash)
/* harmony export */ });
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Euclid Circular A";
  font-weight: 300;
  src: url("./assets/fonts/Euclid-Circular-A-Light.woff2") format("woff2");
}
@font-face {
  font-family: "Euclid Circular A";
  font-weight: 400;
  src: url("./assets/fonts/Euclid-Circular-A-Regular.woff2") format("woff2");
}
@font-face {
  font-family: "Euclid Circular A";
  font-weight: 500;
  src: url("./assets/fonts/Euclid-Circular-A-Medium.woff2") format("woff2");
}
@font-face {
  font-family: "Euclid Circular A";
  font-weight: 600;
  src: url("./assets/fonts/Euclid-Circular-A-SemiBold.woff2") format("woff2");
}
@font-face {
  font-family: "Euclid Circular A";
  font-weight: 700;
  src: url("./assets/fonts/Euclid-Circular-A-Bold.woff2") format("woff2");
}
@font-face {
  font-family: "Space Age";
  font-weight: 400;
  src: url("./assets/fonts/Space-Age.woff2") format("woff2");
}
@font-face {
  font-family: "Space Age Cyrillic";
  font-weight: 400;
  src: url("./assets/fonts/Space-Age-Cyrillic.woff2") format("woff2");
}
@font-face {
  font-family: "EuropeExtendedC";
  font-weight: 700;
  src: url("./assets/fonts/Europe-Extended-C.woff2") format("woff2");
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: "Euclid Circular A";
  font-size: 0.5208335vw;
  font-style: normal;
  font-weight: normal;
  -webkit-animation: bugfix infinite 1s;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  font-style: normal;
  font-weight: normal;
  -webkit-animation: bugfix infinite 1s;
  height: 100%;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  font-size: 1.8rem;
  color: #ffffff;
  background-color: #101653;
}

input,
textarea {
  -webkit-animation: bugfix infinite 1s;
  line-height: inherit;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  color: inherit;
}

a {
  color: unset;
}

a,
a:hover {
  text-decoration: none;
}

button,
input,
a,
textarea {
  outline: none;
  cursor: pointer;
  font: inherit;
}
button:focus,
input:focus,
a:focus,
textarea:focus {
  outline: none;
}
button:active,
input:active,
a:active,
textarea:active {
  outline: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font: inherit;
  margin: 0;
  padding: 0;
}

p {
  margin-top: 0;
  margin-bottom: 0;
}

img {
  width: 100%;
  height: auto;
  display: block;
}

button {
  border: none;
  color: inherit;
  font: inherit;
  text-align: inherit;
  padding: 0;
  background-color: transparent;
}

ul {
  padding: 0;
  margin: 0;
}

ul li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.container {
  width: 16rem;
  margin: 0 auto;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

svg,
img {
  width: 100%;
  height: auto;
  object-fit: contain;
}
html.lock,
html.lock body {
  overflow: hidden;
  touch-action: none;
}

html,
body {
  overflow-x: hidden;
}

main {
  position: relative;
  flex: 1 1 auto;
}

.wrapper {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  height: 100%;
}

.title {
  font-family: "Space Age";
  font-size: 9rem;
}

.subtitle {
  font-family: "Space Age";
  font-size: 3rem;
}

.txt30 {
  font-size: 3rem;
}

.txt16 {
  font-size: 1.6rem;
}

.cyr {
  font-family: "Space Age Cyrillic";
}

.btn {
  padding: 0.6rem 0.6rem 0.6rem 2rem;
  display: flex;
  align-items: center;
  column-gap: 2rem;
  border: 2px solid rgba(255, 255, 255, 0.78);
  border-radius: 0 4rem 4rem 4rem;
}
.btn_arr-down .btn__arrow-icon {
  transform: rotate(90deg);
}
.btn__arrow-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 4rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #ffffff;
}
.btn__arrow-icon {
  width: 2.4rem;
  object-fit: contain;
}

input[type=text],
input[type=email],
input[type=tel],
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

textarea:focus,
input:focus {
  outline: none;
}

.input {
  position: relative;
  padding: 4.6rem 2.7rem 2rem 2.7rem;
  border-radius: 3rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(2rem);
}
.input_textarea {
  height: 25.5rem;
}
.input_textarea textarea {
  padding: 0;
  height: 100%;
  resize: none;
}
.input__field {
  display: block;
  width: 100%;
  border-radius: 0 !important;
  line-height: 1;
}
.input__field::placeholder {
  color: #ffffff;
}
.input__label {
  position: absolute;
  top: 1.8rem;
  left: 2.7rem;
  white-space: nowrap;
  opacity: 0.5;
}
.select {
  position: relative;
}
.select__body {
  position: relative;
}
.select__title {
  position: relative;
  z-index: 3;
  width: 100%;
  border-radius: 3rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(2rem);
  cursor: pointer;
}
.select__value {
  padding: 1.3rem 1.3rem 1.3rem 2.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  height: 7.2rem;
  width: 100%;
}
.select__value > * {
  flex: 1 1 auto;
}
.select__value::after {
  content: "";
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 5rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(2rem);
  background-image: url(./assets/images/icons/arr-white.svg);
  background-size: 2.4rem;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.3s ease;
}
.select__value._select-label::before {
  content: attr(data-sel-label);
}
._select-filled .select__value._select-label::before {
  display: none;
}
.select__value._select-label::before,
.select__value .select__content {
  max-width: 31.4rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.select__content:not(._select-filled .select__content) {
  display: none;
}
.select__text {
  flex: 1 1 auto;
}
.select__input {
  width: 100%;
  height: 100%;
  background-color: transparent;
}
.select__options {
  position: absolute;
  z-index: 2;
  top: calc(100% - 3rem);
  left: 0;
  padding: 4.6rem 2.7rem 2.4rem 2.7rem;
  min-width: 100%;
  border-radius: 0 0 3rem 3rem;
  background: #36396c;
  backdrop-filter: blur(2rem);
}
.select__scroll {
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 19rem;
}
.select__scroll.simplebar-scrollable-y .simplebar-track.simplebar-vertical {
  right: 1.2rem;
  width: 0.4rem;
  border-radius: 0.8rem;
  background-color: #e4e7ee;
}
.select__scroll.simplebar-scrollable-y .simplebar-scrollbar {
  min-height: 3.2rem;
  border-radius: 0.8rem;
  background-color: #a2adc1;
}
.select__option {
  width: 100%;
  transition: color 0.3s ease;
}
.select__option:not(:last-child) {
  margin-bottom: 2.5rem;
}
.select__option._select-selected {
  color: #29ff7f;
}
.select__group {
  display: inline-flex;
  align-items: flex-start;
  flex-direction: column-reverse;
}
.select__hint {
  position: absolute;
  top: calc(100% + 0.8rem);
  font-size: 1.4rem;
  line-height: 142.857%;
}
.select__subtitle {
  cursor: text;
}
.select._select-opened {
  z-index: 5;
}
.select._select-opened .select__value::after {
  transform: rotate(-180deg);
}
._select-list {
  cursor: pointer;
}

.badge {
  padding: 1rem 3rem 1rem 1rem;
  display: inline-flex;
  align-items: center;
  column-gap: 2.5rem;
  border-radius: 3rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2rem);
}
.badge._active {
  color: #140a3f;
  background-color: #ffffff;
}
.badge._active .badge__icon-wrap {
  background-color: #182678;
}
.badge._active .badge__icon-wrap::before {
  background-image: url(./assets/images/icons/star-active.svg);
}
.badge__icon-wrap {
  position: relative;
  flex: 0 0 4.5rem;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2rem);
}
.badge__icon-wrap::before {
  content: "";
  position: absolute;
  width: 8rem;
  height: 8rem;
  top: 50%;
  left: 50%;
  background-image: url(./assets/images/icons/star.svg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transform: translate(-50%, -50%);
}
@media (min-width: 48em) {
  .txt25 {
    font-size: 2.5rem;
  }
}
@media (min-width: 1920px) {
  html {
    font-size: 10px;
  }
}
@media (max-width: 48em) {
  html {
    font-size: 5px;
    font-size: 1.5625vw;
    font-size: 1.3333333333vw;
    -webkit-text-size-adjust: none;
  }
  body {
    -webkit-text-size-adjust: none;
    font-size: 2.8rem;
  }
  .container {
    padding: 0 2rem;
    width: 100%;
  }
  .title {
    font-size: 6rem;
  }
  .subtitle {
    font-size: 4rem;
  }
  .txt30 {
    font-size: 4rem;
  }
  .txt16 {
    font-size: 2rem;
  }
  .btn {
    padding: 1rem 1rem 1rem 3.2rem;
    column-gap: 3.2rem;
    border: 1.5px solid rgba(255, 255, 255, 0.78);
    border-radius: 0 8rem 8rem 8rem;
  }
  .btn__arrow-wrap {
    flex: 0 0 7rem;
    width: 7rem;
    height: 7rem;
  }
  .btn__arrow-icon {
    width: 3.8rem;
  }
  .input {
    padding: 7rem 8rem 2.4rem 2.4rem;
    border-radius: 4rem;
    backdrop-filter: blur(4rem);
  }
  .input_textarea {
    height: 34.8rem;
  }
  .input__label {
    top: 2.4rem;
    left: 2.4rem;
  }
  .select__title {
    border-radius: 4rem;
    backdrop-filter: blur(4rem);
  }
  .select__value {
    padding: 1.6rem;
    gap: 4rem;
    height: 10rem;
  }
  .select__value::after {
    flex: 0 0 6rem;
    width: 6rem;
    height: 6rem;
    background-size: 3.2rem;
    backdrop-filter: blur(2.4rem);
  }
  .select__options {
    top: calc(100% - 4rem);
    padding: 8rem 4rem 4rem 4rem;
    border-radius: 0 0 4rem 4rem;
    backdrop-filter: blur(4rem);
  }
  .select__option:not(:last-child) {
    margin-bottom: 5rem;
  }
  .badge {
    padding: 2rem 8rem 2rem 2rem;
    column-gap: 3rem;
    border-radius: 6rem;
    backdrop-filter: blur(4rem);
  }
  .badge__icon-wrap {
    flex: 0 0 6rem;
    width: 6rem;
    height: 6rem;
    backdrop-filter: blur(4rem);
  }
  .badge__icon-wrap::before {
    width: 10rem;
    height: 10rem;
  }
}
@media (any-hover: hover) {
  .select__option:hover:not(.select__option:hover.select__subtitle) {
    cursor: pointer;
    color: #29ff7f;
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/fonts.scss","webpack://./src/scss/style.scss","webpack://./src/scss/set.scss","webpack://./src/ui/styles/_typo.scss","webpack://./src/ui/styles/_button.scss","webpack://./src/ui/styles/_input.scss","webpack://./src/ui/styles/_select.scss","webpack://./src/ui/styles/_badge.scss","<no source>"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Euclid Circular A';\n    font-weight: 300;\n    src: url('./assets/fonts/Euclid-Circular-A-Light.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'Euclid Circular A';\n    font-weight: 400;\n    src: url('./assets/fonts/Euclid-Circular-A-Regular.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'Euclid Circular A';\n    font-weight: 500;\n    src: url('./assets/fonts/Euclid-Circular-A-Medium.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'Euclid Circular A';\n    font-weight: 600;\n    src: url('./assets/fonts/Euclid-Circular-A-SemiBold.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'Euclid Circular A';\n    font-weight: 700;\n    src: url('./assets/fonts/Euclid-Circular-A-Bold.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'Space Age';\n    font-weight: 400;\n    src: url('./assets/fonts/Space-Age.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'Space Age Cyrillic';\n    font-weight: 400;\n    src: url('./assets/fonts/Space-Age-Cyrillic.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'EuropeExtendedC';\n    font-weight: 700;\n    src: url('./assets/fonts/Europe-Extended-C.woff2') format('woff2');\n}\n","// --------------------------------- mixins ---------------------------------\n\n@import './mixins';\n\n// -------------------------------- variables -------------------------------\n\n// fonts\n$spaceAge: 'Space Age';\n$spaceAgeCyr: 'Space Age Cyrillic';\n$EuropeE: 'EuropeExtendedC';\n$ECA: 'Euclid Circular A';\n\n// colors\n$white: #ffffff;\n$black: #000000;\n$darkPurple: #11073b;\n$darkPurple2: #140a3f;\n$green: #29ff7f;\n$blue: #182678;\n$bgColor: #101653;\n\n// ---------------------------------- fonts ---------------------------------\n\n// local fonts\n@import './fonts';\n\n// ------------------------------- base styles ------------------------------\n\n// base scss file\n@import './set';\n\n// html\nhtml.lock,\nhtml.lock body {\n    overflow: hidden;\n    touch-action: none;\n}\nhtml,\nbody {\n    overflow-x: hidden;\n}\n\n// main\nmain {\n    position: relative;\n    flex: 1 1 auto;\n}\n\n.wrapper {\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    max-width: 1920px;\n    height: 100%;\n}\n\n// --------------------------------------------------------------------------\n\n// header / footer\n@import './sections/header';\n@import './sections/footer';\n\n// ui\n@import '../ui/styles/ui.scss';\n\n// --------------------------------------------------------------------------\n\n@import './dev/vzmsk1.scss';\n@import './dev/markusDM.scss';\n@import './dev/ukik0.scss';\n@import './dev/kie6er.scss';\n","*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\nhtml {\n    font-family: $ECA; // шрифт по умолчанию по сайту\n    font-size: 0.5208335vw; // на разрешении 1920 0.520835vw === 10px\n    font-style: normal;\n    font-weight: normal;\n    -webkit-animation: bugfix infinite 1s;\n    line-height: 1.2;\n    margin: 0;\n    padding: 0;\n    height: 100%;\n}\n\nbody {\n    font-style: normal;\n    font-weight: normal;\n    -webkit-animation: bugfix infinite 1s;\n    height: 100%;\n    line-height: 1.2;\n    margin: 0;\n    padding: 0;\n    font-size: 1.8rem;\n    color: $white; // цвет по умолчанию текста по сайту\n    background-color: $bgColor;\n}\n\ninput,\ntextarea {\n    -webkit-animation: bugfix infinite 1s;\n    line-height: inherit;\n    margin: 0;\n    padding: 0;\n    background-color: transparent;\n    border: none;\n    color: inherit;\n}\na {\n    color: unset;\n}\na,\na:hover {\n    text-decoration: none;\n}\n\nbutton,\ninput,\na,\ntextarea {\n    outline: none;\n    cursor: pointer;\n    font: inherit;\n    &:focus {\n        outline: none;\n    }\n    &:active {\n        outline: none;\n    }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font: inherit;\n    margin: 0;\n    padding: 0;\n}\np {\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\nimg {\n    width: 100%;\n    height: auto;\n    display: block;\n}\n\nbutton {\n    border: none;\n    color: inherit;\n    font: inherit;\n    text-align: inherit;\n    padding: 0;\n    background-color: transparent;\n}\nul {\n    padding: 0;\n    margin: 0;\n}\n\nul li {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.container {\n    width: 16rem;\n    margin: 0 auto;\n}\n\ninput[type='number']::-webkit-inner-spin-button,\ninput[type='number']::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\ninput[type='number'] {\n    -moz-appearance: textfield;\n}\n\nsvg,\nimg {\n    width: 100%;\n    height: auto;\n    object-fit: contain;\n}\n\n@media (min-width: 1920px) {\n    html {\n        font-size: 10px;\n    }\n}\n\n@media (max-width: 48em) {\n    html {\n        font-size: 5px;\n        font-size: 1.5625vw;\n        font-size: calc((100 / 375) * 5vw); // где 375 это ширина моб версии макета\n        -webkit-text-size-adjust: none;\n    }\n\n    body {\n        -webkit-text-size-adjust: none;\n        font-size: 2.8rem;\n    }\n\n    .container {\n        padding: 0 2rem; // в моб версии отступ от края задаем для всех контейнеров, а там где не нужно можем точечно убрать\n        width: 100%;\n    }\n}\n",".title {\n    font-family: $spaceAge;\n    font-size: 9rem;\n\n    @media (max-width: 48em) {\n        font-size: 6rem;\n    }\n}\n\n.subtitle {\n    font-family: $spaceAge;\n    font-size: 3rem;\n    @media (max-width: 48em) {\n        font-size: 4rem;\n    }\n}\n\n.txt25 {\n    @media (min-width: 48em) {\n        font-size: 2.5rem;\n    }\n}\n\n.txt30 {\n    font-size: 3rem;\n    @media (max-width: 48em) {\n        font-size: 4rem;\n    }\n}\n\n.txt16 {\n    font-size: 1.6rem;\n    @media (max-width: 48em) {\n        font-size: 2rem;\n    }\n}\n\n.cyr {\n    font-family: $spaceAgeCyr;\n}\n",".btn {\n    padding: 0.6rem 0.6rem 0.6rem 2rem;\n    display: flex;\n    align-items: center;\n    column-gap: 2rem;\n    border: 2px solid rgba(255, 255, 255, 0.78);\n    border-radius: 0 4rem 4rem 4rem;\n    &_arr-down {\n        .btn__arrow-icon {\n            transform: rotate(90deg);\n        }\n    }\n    @media (max-width: 48em) {\n        padding: 1rem 1rem 1rem 3.2rem;\n        column-gap: 3.2rem;\n        border: 1.5px solid rgba(255, 255, 255, 0.78);\n        border-radius: 0 8rem 8rem 8rem;\n    }\n\n    // .btn__text\n\n    &__text {\n    }\n\n    // .btn__arrow-wrap\n\n    &__arrow-wrap {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        flex: 0 0 4rem;\n        width: 4rem;\n        height: 4rem;\n        border-radius: 50%;\n        background-color: $white;\n        @media (max-width: 48em) {\n            flex: 0 0 7rem;\n            width: 7rem;\n            height: 7rem;\n        }\n    }\n\n    // .btn__arrow-icon\n\n    &__arrow-icon {\n        width: 2.4rem;\n        object-fit: contain;\n        @media (max-width: 48em) {\n            width: 3.8rem;\n        }\n    }\n}\n","input[type='text'],\ninput[type='email'],\ninput[type='tel'],\ntextarea {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\ntextarea:focus,\ninput:focus {\n    outline: none;\n}\n\n.input {\n    position: relative;\n    padding: 4.6rem 2.7rem 2rem 2.7rem;\n    border-radius: 3rem;\n    background: rgba(255, 255, 255, 0.15);\n    backdrop-filter: blur(2rem);\n    &_textarea {\n        height: 25.5rem;\n        textarea {\n            padding: 0;\n            height: 100%;\n            resize: none;\n        }\n    }\n    @media (max-width: 48em) {\n        padding: 7rem 8rem 2.4rem 2.4rem;\n        border-radius: 4rem;\n        backdrop-filter: blur(4rem);\n        &_textarea {\n            height: 34.8rem;\n        }\n    }\n\n    // .input__field\n\n    &__field {\n        display: block;\n        width: 100%;\n        border-radius: 0 !important;\n        line-height: 1;\n        &::placeholder {\n            color: $white;\n        }\n    }\n\n    // .input__label\n\n    &__label {\n        position: absolute;\n        top: 1.8rem;\n        left: 2.7rem;\n        white-space: nowrap;\n        opacity: 0.5;\n        @media (max-width: 48em) {\n            top: 2.4rem;\n            left: 2.4rem;\n        }\n    }\n\n    &._form-focus {\n    }\n    &._form-error {\n    }\n}\n",".select {\n    position: relative;\n\n    // .select__body\n\n    &__body {\n        position: relative;\n    }\n\n    // .select__title\n\n    &__title {\n        position: relative;\n        z-index: 3;\n        width: 100%;\n        border-radius: 3rem;\n        background: rgba(255, 255, 255, 0.15);\n        backdrop-filter: blur(2rem);\n        cursor: pointer;\n        @media (max-width: 48em) {\n            border-radius: 4rem;\n            backdrop-filter: blur(4rem);\n        }\n    }\n\n    // .select__value\n\n    &__value {\n        padding: 1.3rem 1.3rem 1.3rem 2.7rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: 2rem;\n        height: 7.2rem;\n        width: 100%;\n\n        > * {\n            flex: 1 1 auto;\n        }\n\n        &::after {\n            content: '';\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            flex: 0 0 5rem;\n            width: 5rem;\n            height: 5rem;\n            border-radius: 50%;\n            border: 1px solid rgba(255, 255, 255, 0.6);\n            background-color: rgba(255, 255, 255, 0.15);\n            backdrop-filter: blur(2rem);\n            background-image: url(./assets/images/icons/arr-white.svg);\n            background-size: 2.4rem;\n            background-position: center;\n            background-repeat: no-repeat;\n            transition: transform 0.3s ease;\n        }\n        &._select-label {\n            &::before {\n                content: attr(data-sel-label);\n                ._select-filled & {\n                    display: none;\n                }\n            }\n        }\n        &._select-label::before,\n        .select__content {\n            max-width: 31.4rem;\n            overflow: hidden;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n        }\n\n        @media (max-width: 48em) {\n            padding: 1.6rem;\n            gap: 4rem;\n            height: 10rem;\n            &::after {\n                flex: 0 0 6rem;\n                width: 6rem;\n                height: 6rem;\n                background-size: 3.2rem;\n                backdrop-filter: blur(2.4rem);\n            }\n        }\n    }\n\n    // .select__content\n\n    &__content {\n        // hide / show selected value\n        &:not(._select-filled &) {\n            display: none;\n        }\n    }\n\n    // .select__text\n\n    &__text {\n        flex: 1 1 auto;\n    }\n\n    // .select__input\n\n    &__input {\n        width: 100%;\n        height: 100%;\n        background-color: transparent;\n    }\n\n    // .select__options\n\n    &__options {\n        position: absolute;\n        z-index: 2;\n        top: calc(100% - 3rem);\n        left: 0;\n        padding: 4.6rem 2.7rem 2.4rem 2.7rem;\n        min-width: 100%;\n        border-radius: 0 0 3rem 3rem;\n        background: #36396c;\n        backdrop-filter: blur(2rem);\n        @media (max-width: 48em) {\n            top: calc(100% - 4rem);\n            padding: 8rem 4rem 4rem 4rem;\n            border-radius: 0 0 4rem 4rem;\n            backdrop-filter: blur(4rem);\n        }\n    }\n\n    // .select__scroll\n\n    &__scroll {\n        overflow-y: auto;\n        overflow-x: hidden;\n\n        // maximum height\n        max-height: 19rem;\n\n        // scrollbar styles\n        &.simplebar-scrollable-y {\n            .simplebar-track.simplebar-vertical {\n                right: 1.2rem;\n                width: 0.4rem;\n                border-radius: 0.8rem;\n                background-color: #e4e7ee;\n            }\n            .simplebar-scrollbar {\n                min-height: 3.2rem;\n                border-radius: 0.8rem;\n                background-color: #a2adc1;\n            }\n        }\n    }\n\n    // .select__option\n    &__option {\n        width: 100%;\n        transition: color 0.3s ease;\n        &:not(:last-child) {\n            margin-bottom: 2.5rem;\n            @media (max-width: 48em) {\n                margin-bottom: 5rem;\n            }\n        }\n        &._select-selected {\n            color: $green;\n        }\n        @media (any-hover: hover) {\n            &:hover {\n                &:not(&.select__subtitle) {\n                    cursor: pointer;\n                    color: $green;\n                }\n            }\n        }\n    }\n\n    // .select__group\n\n    &__group {\n        display: inline-flex;\n        align-items: flex-start;\n        flex-direction: column-reverse;\n    }\n\n    // .select__asset\n\n    &__asset {\n    }\n\n    // .select__text\n\n    &__text {\n    }\n\n    // .select__hint\n\n    &__hint {\n        position: absolute;\n        top: calc(100% + 0.8rem);\n        font-size: 1.4rem;\n        line-height: 142.857%;\n    }\n\n    // .select__subtitle\n\n    &__subtitle {\n        cursor: text;\n    }\n\n    // select state\n    &._select-opened {\n        z-index: 5;\n        .select__value::after {\n            transform: rotate(-180deg);\n        }\n    }\n    &._select-focused {\n    }\n    &._select-error {\n        &:not(&._select-filled, &._select-opened) {\n        }\n    }\n    &._select-filled {\n        &:not(&._select-opened) {\n            &:not(&._select-show-val) {\n            }\n        }\n    }\n    &._select-show-val {\n        &._select-focused,\n        &._select-filled,\n        &._select-error,\n        &._select-disabled {\n        }\n    }\n    &._select-disabled {\n    }\n    &._select-multiple {\n    }\n    &._select-active {\n    }\n    &._select-checkbox {\n    }\n}\n\n// list\n._select-list {\n    cursor: pointer;\n}\n",".badge {\n    padding: 1rem 3rem 1rem 1rem;\n    display: inline-flex;\n    align-items: center;\n    column-gap: 2.5rem;\n    border-radius: 3rem;\n    background: rgba(255, 255, 255, 0.1);\n    backdrop-filter: blur(2rem);\n    &._active {\n        color: $darkPurple2;\n        background-color: $white;\n        .badge__icon-wrap {\n            background-color: $blue;\n            &::before {\n                background-image: url(./assets/images/icons/star-active.svg);\n            }\n        }\n    }\n    @media (max-width: 48em) {\n        padding: 2rem 8rem 2rem 2rem;\n        column-gap: 3rem;\n        border-radius: 6rem;\n        backdrop-filter: blur(4rem);\n    }\n\n    // .badge__icon-wrap\n\n    &__icon-wrap {\n        position: relative;\n        flex: 0 0 4.5rem;\n        width: 4.5rem;\n        height: 4.5rem;\n        border-radius: 50%;\n        background-color: rgba(255, 255, 255, 0.2);\n        backdrop-filter: blur(2rem);\n        &::before {\n            content: '';\n            position: absolute;\n            width: 8rem;\n            height: 8rem;\n            top: 50%;\n            left: 50%;\n            background-image: url(./assets/images/icons/star.svg);\n            background-position: center;\n            background-size: contain;\n            background-repeat: no-repeat;\n            transform: translate(-50%, -50%);\n        }\n        @media (max-width: 48em) {\n            flex: 0 0 6rem;\n            width: 6rem;\n            height: 6rem;\n            backdrop-filter: blur(4rem);\n            &::before {\n                width: 10rem;\n                height: 10rem;\n            }\n        }\n    }\n\n    // .badge__text\n\n    &__text {\n    }\n}\n",null],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/group-css-media-queries-loader/lib/index.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _utils_select_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/select.js */ "./src/js/utils/select.js");
/* harmony import */ var _dev_vzmsk1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dev/vzmsk1.js */ "./src/js/dev/vzmsk1.js");
/* harmony import */ var _dev_vzmsk1_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dev_vzmsk1_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dev_markusDM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dev/markusDM.js */ "./src/js/dev/markusDM.js");
/* harmony import */ var _dev_markusDM_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dev_markusDM_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dev_ukik0_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dev/ukik0.js */ "./src/js/dev/ukik0.js");
/* harmony import */ var _dev_ukik0_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dev_ukik0_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dev_kie6er_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dev/kie6er.js */ "./src/js/dev/kie6er.js");
/* harmony import */ var _dev_kie6er_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_dev_kie6er_js__WEBPACK_IMPORTED_MODULE_5__);


// ---------------------------------- forms ---------------------------------

// import * as forms from './utils/forms.js';

// form fields
// forms.formFieldsInit({ viewPass: false });

// form submit
// forms.formSubmit();

// ---------------------------------- utils ---------------------------------

// tabs
// import './utils/tabs.js';

// accordion
// import './utils/accordion.js';

// select


// modals
// import './utils/modals.js';

// ---------------------------------- libs ----------------------------------

// dynamic dom
// import './libs/dd.js';

// --------------------------------------------------------------------------





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywrV0FBK1csV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssUUFBUSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLFNBQVMsVUFBVSxVQUFVLFVBQVUsTUFBTSxTQUFTLFVBQVUsTUFBTSxTQUFTLFVBQVUsT0FBTyxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sU0FBUyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcs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QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0Qjs7QUFFNUI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUMyQjs7QUFFM0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUV5QjtBQUNFO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvdXRpbHMvc2VsZWN0LmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz82YzJkIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfc2xpZGVVcCwgX3NsaWRlRG93biwgX3NsaWRlVG9nZ2xlIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNsYXNzIFNlbGVjdCB7XG4gICAgLy8gc2V0dXAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgLy8gY3VzdG9tIHNlbGVjdCBjbGFzc2VzXG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IHtcbiAgICAgICAgICAgIC8vIGh0bWwgYnVpbGQgY2xhc3Nlc1xuICAgICAgICAgICAgc2VsOiAnc2VsZWN0JyxcbiAgICAgICAgICAgIGJvZHk6ICdzZWxlY3RfX2JvZHknLFxuICAgICAgICAgICAgbGFiZWw6ICdzZWxlY3RfX2xhYmVsJyxcbiAgICAgICAgICAgIHRpdGxlOiAnc2VsZWN0X190aXRsZScsXG4gICAgICAgICAgICB2YWw6ICdzZWxlY3RfX3ZhbHVlJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdzZWxlY3RfX2NvbnRlbnQnLFxuICAgICAgICAgICAgb3B0aW9uczogJ3NlbGVjdF9fb3B0aW9ucycsXG4gICAgICAgICAgICBvcHRpb246ICdzZWxlY3RfX29wdGlvbicsXG4gICAgICAgICAgICBzY3JvbGw6ICdzZWxlY3RfX3Njcm9sbCcsXG4gICAgICAgICAgICBncm91cDogJ3NlbGVjdF9fZ3JvdXAnLFxuICAgICAgICAgICAgaW5wOiAnc2VsZWN0X19pbnB1dCcsXG4gICAgICAgICAgICBhc3NldDogJ3NlbGVjdF9fYXNzZXQnLFxuICAgICAgICAgICAgdHh0OiAnc2VsZWN0X190ZXh0JyxcbiAgICAgICAgICAgIGhpbnQ6ICdzZWxlY3RfX2hpbnQnLFxuXG4gICAgICAgICAgICAvLyBzdGF0ZSBjbGFzc2VzXG4gICAgICAgICAgICBhY3RpdmU6ICdfc2VsZWN0LWFjdGl2ZScsXG4gICAgICAgICAgICBmb2N1c2VkOiAnX3NlbGVjdC1mb2N1c2VkJyxcbiAgICAgICAgICAgIG9wZW5lZDogJ19zZWxlY3Qtb3BlbmVkJyxcbiAgICAgICAgICAgIGZpbGxlZDogJ19zZWxlY3QtZmlsbGVkJyxcbiAgICAgICAgICAgIHNlbGVjdGVkOiAnX3NlbGVjdC1zZWxlY3RlZCcsXG4gICAgICAgICAgICBkaXNhYmxlZDogJ19zZWxlY3QtZGlzYWJsZWQnLFxuXG4gICAgICAgICAgICAvLyBhZGRpdGlvbmFsIGNsYXNzZXNcbiAgICAgICAgICAgIGxpc3Q6ICdfc2VsZWN0LWxpc3QnLFxuICAgICAgICAgICAgZXJyb3I6ICdfc2VsZWN0LWVycm9yJyxcbiAgICAgICAgICAgIG11bHRpcGxlOiAnX3NlbGVjdC1tdWx0aXBsZScsXG4gICAgICAgICAgICBjaGVja2JveDogJ19zZWxlY3QtY2hlY2tib3gnLFxuICAgICAgICAgICAgbGFiZWw6ICdfc2VsZWN0LWxhYmVsJ1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGFsbCBzZWxlY3QgaXRlbXNcbiAgICAgICAgY29uc3Qgc2VsZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpO1xuICAgICAgICBpZiAoc2VsZWN0TGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdChzZWxlY3RMaXN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNlbGVjdCBpbml0aWFsaXphdGlvbiAmIGJ1aWxkIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gaW5pdGlhbGl6YXRpb25cbiAgICBpbml0KHNlbGVjdExpc3QpIHtcbiAgICAgICAgLy8gaW5pdFxuICAgICAgICBzZWxlY3RMaXN0LmZvckVhY2goKHNlbGVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICghc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygnc3Rhci1yYXRpbmcnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFNlbEl0ZW0oc2VsZWN0LCBpbmRleCArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBldmVudHNcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2tleWRvd24nLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGlvbnMoZSk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdmb2N1c2luJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb25zKGUpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAnZm9jdXNvdXQnLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGlvbnMoZSk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICB9XG4gICAgLy8gc2luZ2xlIHNlbGVjdCBpdGVtIGluaXRpYWxpemF0aW9uXG4gICAgaW5pdFNlbEl0ZW0ocmVsYXRpdmVTZWwsIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnNlbCk7XG4gICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQocmVsYXRpdmVTZWwpO1xuICAgICAgICByZWxhdGl2ZVNlbC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICBpbmRleCA/IChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbElkID0gaW5kZXgpIDogbnVsbDtcblxuICAgICAgICBpZiAodGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkpIHtcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLmRhdGFzZXQub3B0UGxhY2Vob2xkZXIgPSB0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS52YWx1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS5sYWJlbC5zaG93KSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsVGl0bGUgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbDtcbiAgICAgICAgICAgICAgICBzZWxUaXRsZS5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICAgICAgICAgICAgICdhZnRlcmJlZ2luJyxcbiAgICAgICAgICAgICAgICAgICAgYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMubGFiZWx9XCI+JHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLmxhYmVsLnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLmxhYmVsLnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH08L3NwYW4+YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgIT09ICcwJykge1xuICAgICAgICAgICAgc2VsZWN0Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgICAgICAnYmVmb3JlZW5kJyxcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmJvZHl9XCI+PGRpdiBoaWRkZW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5vcHRpb25zfVwiPjwvZGl2PjwvZGl2PmBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgICAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuYm9keX1cIj48ZGl2IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMub3B0aW9uc31cIj48L2Rpdj48L2Rpdj5gXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5idWlsZChyZWxhdGl2ZVNlbCk7XG5cbiAgICAgICAgcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCA9IHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgPyByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkIDogJzE1MCc7XG4gICAgICAgIHJlbGF0aXZlU2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpcy5pbml0U2VsZWN0aW9ucyhlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIHNlbGVjdCBidWlsZFxuICAgIGJ1aWxkKHJlbGF0aXZlU2VsKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHNlbE9iaiA9IHRoaXM7XG5cbiAgICAgICAgLy8gc2V0IGlkXG4gICAgICAgIHNlbGVjdC5kYXRhc2V0LnNlbElkID0gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxJZDtcbiAgICAgICAgLy8gc2V0IHZhbHVlXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XG4gICAgICAgIC8vIHNldCBvcHRpb25zXG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyhzZWxlY3QsIHJlbGF0aXZlU2VsKTtcbiAgICAgICAgLy8gc2V0IGNzcyBtb2RpZmljYXRvclxuICAgICAgICByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEFkZG9uQ2xhc3NcbiAgICAgICAgICAgID8gc2VsZWN0LmNsYXNzTGlzdC5hZGQoYHNlbGVjdF8ke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsQWRkb25DbGFzc31gKVxuICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAvLyBzZXQgY2xhc3MgaWYgc2VsZWN0IGlzIG11bHRpcGxlXG4gICAgICAgIHJlbGF0aXZlU2VsLm11bHRpcGxlXG4gICAgICAgICAgICA/IHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5tdWx0aXBsZSlcbiAgICAgICAgICAgIDogc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLm11bHRpcGxlKTtcbiAgICAgICAgLy8gc2V0IGNsYXNzIGlmIHNlbGVjdCBjaGVja2JveGVzIGFyZSBzZXRcbiAgICAgICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1jaGVja2JveGVzJykgJiYgcmVsYXRpdmVTZWwubXVsdGlwbGVcbiAgICAgICAgICAgID8gc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmNoZWNrYm94KVxuICAgICAgICAgICAgOiBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuY2hlY2tib3gpO1xuICAgICAgICAvLyBkaXNhYmxlIHNlbGVjdFxuICAgICAgICB0aGlzLmRpc2FibGVTZWxlY3Qoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XG4gICAgICAgIC8vIHNldCBzZWFyY2ggYWN0aW9ucyBpZiBkYXRhLXNlbC1zZWFyY2ggaXMgc2V0XG4gICAgICAgIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtc2VhcmNoJykgPyB0aGlzLnNldFNlYXJjaEFjdGlvbnMoc2VsZWN0KSA6IG51bGw7XG4gICAgICAgIC8vIHNldCBzZWxlY3QgYWN0aW9ucyBpZiBpdCdzIGluaXRpYWxseSBvcGVuZWRcbiAgICAgICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1vcGVuZWQnKSA/IHRoaXMuc2V0QWN0aW9uKHNlbGVjdCkgOiBudWxsO1xuXG4gICAgICAgIC8vIHNldCBzZWxlY3QgaGludFxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50KSB7XG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgICAgICAnYmVmb3JlZW5kJyxcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInNlbGVjdF9faGludFwiPiR7cmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50fTwvZGl2PmBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZGF0ZSBzZWxlY3RcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmNsb3Nlc3QoJ2Zvcm0nKSkge1xuICAgICAgICAgICAgcmVsYXRpdmVTZWwuY2xvc2VzdCgnZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoc2VsT2JqLmNsYXNzZXMuZmlsbGVkKSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxPYmouYWRkRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbE9iai5yZW1vdmVFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzaG93IC8gaGlkZSBzZWxlY3Rpb24gZnJvbSBzZWxlY3QgdGl0bGVcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zaG93LXZhbCcpKSB7XG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCgnX3NlbGVjdC1zaG93LXZhbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ19zZWxlY3Qtc2hvdy12YWwnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzZXQgdHdpbiBzZWxlY3QgdGl0bGUgdmFsdWVcbiAgICBzZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XG4gICAgICAgIGNvbnN0IHNlbEJvZHkgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5ib2R5KS50d2luU2VsO1xuICAgICAgICBjb25zdCBzZWxUaXRsZSA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLnRpdGxlKS50d2luU2VsO1xuXG4gICAgICAgIGlmIChzZWxUaXRsZSkgc2VsVGl0bGUucmVtb3ZlKCk7XG4gICAgICAgIHNlbEJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy5nZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKSk7XG4gICAgfVxuICAgIC8vIHNldCB0d2luIHNlbGVjdCBvcHRpb25zXG4gICAgc2V0T3B0aW9ucyhzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS50d2luU2VsO1xuICAgICAgICBjb25zdCByZWxhdGl2ZVNlbE9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS5yZWxhdGl2ZVNlbDtcblxuICAgICAgICBvcHRpb25zLmlubmVySFRNTCA9IHRoaXMuZ2V0T3B0aW9ucyhyZWxhdGl2ZVNlbCk7XG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbE9wdGlvbnMucXVlcnlTZWxlY3RvcignW3NlbGVjdGVkXScpKSB7XG4gICAgICAgICAgICBvcHRpb25zLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuY2xhc3Nlcy5vcHRpb259YCkuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGRpc2FibGUgc2VsZWN0XG4gICAgZGlzYWJsZVNlbGVjdChzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLnRpdGxlKS50d2luU2VsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICAgICAgICB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbWFpbiBhY3Rpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyBzZXQgbWFpbiBhY3Rpb25zXG4gICAgc2V0QWN0aW9ucyhlKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCB0eXBlID0gZS50eXBlO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnNlbCkpIHx8XG4gICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5saXN0KSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3QgPSB0YXJnZXQuY2xvc2VzdCgnLnNlbGVjdCcpXG4gICAgICAgICAgICAgICAgPyB0YXJnZXQuY2xvc2VzdCgnLnNlbGVjdCcpXG4gICAgICAgICAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgIGAuJHt0aGlzLmNsYXNzZXMuc2VsfVtkYXRhLXNlbC1pZD1cIiR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKS5kYXRhc2V0LnNlbGVjdElkXG4gICAgICAgICAgICAgICAgICAgICAgfVwiXWBcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCByZWxhdGl2ZVNlbCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCkucmVsYXRpdmVTZWw7XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZWxhdGl2ZVNlbC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMubGlzdCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxMaXN0ID0gdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMubGlzdCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgLiR7dGhpcy5jbGFzc2VzLnNlbH1bZGF0YS1zZWwtaWQ9XCIke3NlbExpc3QuZGF0YXNldC5zZWxJZH1cIl0gLnNlbGVjdF9fb3B0aW9uW2RhdGEtb3B0LXZhbD1cIiR7c2VsTGlzdC5kYXRhc2V0Lm9wdFZhbH1cIl1gXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25BY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCwgc2VsT3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy50aXRsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGlvbihzZWxlY3QpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wdGlvbikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxPcHRpb24gPSB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcHRpb24pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0T3B0aW9uQWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwsIHNlbE9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdmb2N1c2luJyB8fCB0eXBlID09PSAnZm9jdXNvdXQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnNlbCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnZm9jdXNpbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5mb2N1c2VkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5mb2N1c2VkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuZmlsbGVkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdrZXlkb3duJyAmJiBlLmNvZGUgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUdyb3VwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlR3JvdXAoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzZXQgc2luZ2xlIHNlbGVjdCBhY3Rpb25cbiAgICBzZXRBY3Rpb24oc2VsZWN0KSB7XG4gICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0KS5yZWxhdGl2ZVNlbDtcbiAgICAgICAgY29uc3Qgc2VsT3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnR3aW5TZWw7XG5cbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmNsb3Nlc3QoJ1tkYXRhLW9uZS1zZWxlY3RdJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdE9uZUdyb3VwID0gcmVsYXRpdmVTZWwuY2xvc2VzdCgnW2RhdGEtb25lLXNlbGVjdF0nKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VHcm91cChzZWxlY3RPbmVHcm91cCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNlbE9wdGlvbnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC50b2dnbGUodGhpcy5jbGFzc2VzLm9wZW5lZCk7XG4gICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCAhPT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgX3NsaWRlVG9nZ2xlKHNlbE9wdGlvbnMsIHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLm9wZW5lZCkgJiZcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUnKSAmJlxuICAgICAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLmVycm9yKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gY2xvc2Ugc2luZ2xlIHNlbGVjdCBncm91cFxuICAgIGNsb3NlR3JvdXAoZ3JvdXApIHtcbiAgICAgICAgY29uc3Qgc2VsR3JvdXAgPSBncm91cCA/IGdyb3VwIDogZG9jdW1lbnQ7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSBzZWxHcm91cC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgYCR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMuc2VsKX0ke3RoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wZW5lZCl9YFxuICAgICAgICApO1xuICAgICAgICBpZiAoc2VsZWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbnMuZm9yRWFjaCgoc2VsZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUl0ZW0oc2VsZWN0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGNsb3NlIHNpbmdsZSBzZWxlY3QgaXRlbVxuICAgIGNsb3NlSXRlbShzZWxlY3QpIHtcbiAgICAgICAgY29uc3QgcmVsYXRpdmVTZWwgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QpLnJlbGF0aXZlU2VsO1xuICAgICAgICBjb25zdCBzZWxPcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykudHdpblNlbDtcblxuICAgICAgICBpZiAoIXNlbE9wdGlvbnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLm9wZW5lZCk7XG4gICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCAhPT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgX3NsaWRlVXAoc2VsT3B0aW9ucywgcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gc2V0IHNpbmdsZSBvcHRpb24gYWN0aW9uc1xuICAgIHNldE9wdGlvbkFjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsLCBvcHRpb24pIHtcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLm11bHRpcGxlKSB7XG4gICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpO1xuICAgICAgICAgICAgY29uc3QgcmVsYXRpdmVTZWxlY3Rpb25zID0gdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS5lbGVtZW50cztcblxuICAgICAgICAgICAgcmVsYXRpdmVTZWxlY3Rpb25zLmZvckVhY2goKHJlbGF0aXZlU2VsZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVsYXRpdmVTZWxlY3Rpb24ucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHR3aW5TZWxlY3Rpb25zID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpKTtcbiAgICAgICAgICAgIHR3aW5TZWxlY3Rpb25zLmZvckVhY2goKHR3aW5TZWxlY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbFxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPVwiJHt0d2luU2VsZWN0aW9uLmRhdGFzZXQub3B0VmFsfVwiXWApXG4gICAgICAgICAgICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghb3B0aW9uLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVsYXRpdmVTZWwucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPVwiJHtvcHRpb24uZGF0YXNldC5vcHRWYWx9XCJdYCkpO1xuICAgICAgICAgICAgICAgIHJlbGF0aXZlU2VsXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBvcHRpb25bdmFsdWU9XCIke29wdGlvbi5kYXRhc2V0Lm9wdFZhbH1cIl1gKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RfX29wdGlvbicpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKG9wdCkgPT4gb3B0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLnNlbGVjdGVkKSk7XG4gICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpO1xuICAgICAgICAgICAgaWYgKCFyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvdy1zZWxlY3Rpb24nKSkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3QucXVlcnlTZWxlY3RvcihgJHt0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcHRpb24pfVtoaWRkZW5dYCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoYCR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3B0aW9uKX1baGlkZGVuXWApLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcHRpb24uaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLnZhbHVlID0gb3B0aW9uLmhhc0F0dHJpYnV0ZSgnZGF0YS1vcHQtdmFsJylcbiAgICAgICAgICAgICAgICA/IG9wdGlvbi5kYXRhc2V0Lm9wdFZhbFxuICAgICAgICAgICAgICAgIDogb3B0aW9uLnRleHRDb250ZW50O1xuICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb24oc2VsZWN0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xuICAgICAgICB0aGlzLnNldFNlbGVjdGlvbnMocmVsYXRpdmVTZWwpO1xuICAgIH1cbiAgICAvLyBzZXQgc2VhcmNoIGFjdGlvbnNcbiAgICBzZXRTZWFyY2hBY3Rpb25zKHNlbGVjdCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHNlbElucHV0ID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMuaW5wKS50d2luU2VsO1xuICAgICAgICBjb25zdCBzZWxPcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykudHdpblNlbC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgYC4ke3RoaXMuY2xhc3Nlcy5vcHRpb259YFxuICAgICAgICApO1xuXG4gICAgICAgIHNlbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsT3B0aW9ucy5mb3JFYWNoKChzZWxPcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsT3B0aW9uLnRleHRDb250ZW50LnRvVXBwZXJDYXNlKCkuaW5kZXhPZihzZWxJbnB1dC52YWx1ZS50b1VwcGVyQ2FzZSgpKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbE9wdGlvbi5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxPcHRpb24uaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbE9wdGlvbnMuaGlkZGVuID09PSB0cnVlID8gX3RoaXMuc2V0QWN0aW9uKHNlbGVjdCkgOiBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gc2V0IHNlbGVjdCBzdWJ0aXRsZVxuICAgIHNldFN1YnRpdGxlKHJlbGF0aXZlU2VsKSB7fVxuXG4gICAgLy8gdmFsaWRhdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyBhZGQgYW4gZXJyb3IgdG8gYSBzZWxlY3RcbiAgICBhZGRFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCkge1xuICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuZXJyb3IpO1xuXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEVycm9yICYmICFyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnQpIHtcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgICAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwic2VsZWN0X19oaW50XCI+JHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEVycm9yfTwvZGl2PmBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gcmVtb3ZlIGFuIGVycm9yIGZyb20gYSBzZWxlY3RcbiAgICByZW1vdmVFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCkge1xuICAgICAgICBpZiAoc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuZXJyb3IpKSB7XG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2hpbnQnKSAmJiAhcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50KSB7XG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdF9faGludCcpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHV0aWxzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gZ2V0IGN1c3RvbSBjbGFzc1xuICAgIGdldENsYXNzKGNzc0NsYXNzKSB7XG4gICAgICAgIHJldHVybiBgLiR7Y3NzQ2xhc3N9YDtcbiAgICB9XG4gICAgLy8gZ2V0IHNpbmdsZSBzZWxlY3QgaXRlbVxuICAgIGdldFNlbGVjdChzZWxlY3QsIGNzc0NsYXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWxhdGl2ZVNlbDogc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLFxuICAgICAgICAgICAgdHdpblNlbDogc2VsZWN0LnF1ZXJ5U2VsZWN0b3IodGhpcy5nZXRDbGFzcyhjc3NDbGFzcykpXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIGdldCBzZWxlY3RlZCBpdGVtIHZhbHVlXG4gICAgZ2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xuICAgICAgICBsZXQgYXR0cixcbiAgICAgICAgICAgIGF0dHJDbGFzcyxcbiAgICAgICAgICAgIHRpdGxlVmFsID0gdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsLCAyKS5odG1sO1xuXG4gICAgICAgIC8vIHNldCB0aXRsZSB2YWx1ZVxuICAgICAgICB0aXRsZVZhbCA9IHRpdGxlVmFsLmxlbmd0aFxuICAgICAgICAgICAgPyB0aXRsZVZhbFxuICAgICAgICAgICAgOiByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbExhYmVsXG4gICAgICAgICAgICA/IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsTGFiZWxcbiAgICAgICAgICAgIDogJyc7XG5cbiAgICAgICAgLy8gc2V0IGFjdGl2ZSBjbGFzcyB0byBzZWxlY3QgaWYgaXQgY29udGFpbnMgYW55IHZhbHVlc1xuICAgICAgICBpZiAodGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS52YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IHNlbGVjdCBsYWJlbFxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1sYWJlbCcpKSB7XG4gICAgICAgICAgICBhdHRyID0gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxMYWJlbFxuICAgICAgICAgICAgICAgID8gYCBkYXRhLXNlbC1sYWJlbD1cIiR7cmVsYXRpdmVTZWwuZGF0YXNldC5zZWxMYWJlbH1cImBcbiAgICAgICAgICAgICAgICA6IGAgZGF0YS1zZWwtbGFiZWw9XCLQktGL0LHQvtGAXCJgO1xuICAgICAgICAgICAgYXR0ckNsYXNzID0gYCAke3RoaXMuY2xhc3Nlcy5sYWJlbH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcHVzaCBzZWxlY3Rpb25zIHRvIHRoZSBsaXN0IGluc2lkZSBvZiBzZWxlY3QgdGl0bGVcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLm11bHRpcGxlICYmIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtbGlzdCcpKSB7XG4gICAgICAgICAgICB0aXRsZVZhbCA9IHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbClcbiAgICAgICAgICAgICAgICAuZWxlbWVudHMubWFwKFxuICAgICAgICAgICAgICAgICAgICAob3B0aW9uKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgYDxzcGFuIGRhdGEtb3B0LWlkPVwiJHtzZWxlY3QuZGF0YXNldC5zZWxJZH1cIiBkYXRhLW9wdC12YWw9XCIke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiIGNsYXNzPVwiX2xpc3QtaXRlbVwiPiR7dGhpcy5nZXRDb250ZW50KG9wdGlvbil9PC9zcGFuPmBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmpvaW4oJycpO1xuXG4gICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5saXN0ICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVsYXRpdmVTZWwuZGF0YXNldC5saXN0KSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVsYXRpdmVTZWwuZGF0YXNldC5saXN0KS5pbm5lckhUTUwgPSB0aXRsZVZhbDtcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1zZWFyY2gnKSkgdGl0bGVWYWwgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGluaXQgc2VsZWN0IHNlYXJjaFxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1zZWFyY2gnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMudGl0bGV9XCI+PHNwYW4gJHthdHRyfSBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnZhbH1cIj48aW5wdXQgYXV0b2NvbXBsZXRlPVwib2ZmXCIgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiJHt0aXRsZVZhbH1cIiBkYXRhLXBsYWNlaG9sZGVyPVwiJHt0aXRsZVZhbH1cIiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmlucH1cIj48L3NwYW4+PC9kaXY+YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbUNsYXNzID1cbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpLmVsZW1lbnRzLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHNbMF0uZGF0YXNldC5vcHRDbGFzc1xuICAgICAgICAgICAgICAgICAgICA/IGAgJHt0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpLmVsZW1lbnRzWzBdLmRhdGFzZXQub3B0Q2xhc3N9YFxuICAgICAgICAgICAgICAgICAgICA6ICcnO1xuICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnRpdGxlfVwiPjxzcGFuICR7YXR0ciA/IGF0dHIgOiAnJ30gY2xhc3M9XCIke1xuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3Nlcy52YWxcbiAgICAgICAgICAgIH0gJHthdHRyQ2xhc3MgPyBhdHRyQ2xhc3MgOiAnJ31cIj48c3BhbiBjbGFzcz1cIiR7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzLmNvbnRlbnRcbiAgICAgICAgICAgIH0ke2N1c3RvbUNsYXNzfVwiPiR7dGl0bGVWYWx9PC9zcGFuPjwvc3Bhbj48L2J1dHRvbj5gO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGdldCBvcHRpb25zXG4gICAgZ2V0T3B0aW9ucyhyZWxhdGl2ZVNlbCkge1xuICAgICAgICBjb25zdCBzZWxTY3JvbGwgPSByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNjcm9sbCcpID8gYGRhdGEtc2ltcGxlYmFyYCA6ICcnO1xuICAgICAgICBsZXQgc2VsU2Nyb2xsSGVpZ2h0ID0gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxTY3JvbGxcbiAgICAgICAgICAgID8gYHN0eWxlPVwibWF4LWhlaWdodDoke3dpbmRvdy5pbm5lcldpZHRoID4gNzY4ID8gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxTY3JvbGwgOiAyMn1yZW1cImBcbiAgICAgICAgICAgIDogJyc7XG4gICAgICAgIGxldCBzZWxPcHRpb25zID0gQXJyYXkuZnJvbShyZWxhdGl2ZVNlbC5vcHRpb25zKTtcblxuICAgICAgICBpZiAoc2VsT3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBzZWxPcHRpb25zSFRNTCA9IGBgO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpICYmICF0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS5zaG93KSB8fFxuICAgICAgICAgICAgICAgIHJlbGF0aXZlU2VsLm11bHRpcGxlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzZWxPcHRpb25zID0gc2VsT3B0aW9ucy5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbE9wdGlvbnNIVE1MICs9IHNlbFNjcm9sbFxuICAgICAgICAgICAgICAgID8gYDxkaXYgJHtzZWxTY3JvbGx9ICR7c2VsU2Nyb2xsSGVpZ2h0fSBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnNjcm9sbH1cIj5gXG4gICAgICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICAgIHNlbE9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsT3B0aW9uc0hUTUwgKz0gdGhpcy5nZXRPcHRpb24ob3B0aW9uLCByZWxhdGl2ZVNlbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbE9wdGlvbnNIVE1MICs9IHNlbFNjcm9sbCA/IGA8L2Rpdj5gIDogJyc7XG4gICAgICAgICAgICByZXR1cm4gc2VsT3B0aW9uc0hUTUw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZ2V0IG9wdGlvblxuICAgIGdldE9wdGlvbihvcHRpb24sIHJlbGF0aXZlU2VsKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSBvcHRpb24uc2VsZWN0ZWQgJiYgcmVsYXRpdmVTZWwubXVsdGlwbGUgPyBgICR7dGhpcy5jbGFzc2VzLnNlbGVjdGVkfWAgOiAnJztcbiAgICAgICAgY29uc3Qgc2hvd1NlbGVjdGlvbiA9XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgJiYgIXJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zaG93LXNlbGVjdGlvbicpICYmICFyZWxhdGl2ZVNlbC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgID8gYGhpZGRlbmBcbiAgICAgICAgICAgICAgICA6IGBgO1xuICAgICAgICBjb25zdCBvcHRpb25DbGFzcyA9IG9wdGlvbi5kYXRhc2V0Lm9wdENsYXNzID8gYCAke29wdGlvbi5kYXRhc2V0Lm9wdENsYXNzfWAgOiAnJztcbiAgICAgICAgY29uc3Qgb3B0aW9uTGluayA9IG9wdGlvbi5kYXRhc2V0Lm9wdGlvbkxpbmsgPyBvcHRpb24uZGF0YXNldC5vcHRpb25MaW5rIDogZmFsc2U7XG4gICAgICAgIGNvbnN0IG9wdGlvbkxpbmtUYXJnZXQgPSBvcHRpb24uaGFzQXR0cmlidXRlKCdkYXRhLW9wdGlvbi1saW5rLXRhcmdldCcpID8gYHRhcmdldD1cIl9ibGFua1wiYCA6ICcnO1xuICAgICAgICBsZXQgb3B0aW9uSFRNTCA9IGBgO1xuXG4gICAgICAgIG9wdGlvbkhUTUwgKz0gb3B0aW9uTGlua1xuICAgICAgICAgICAgPyBgPGEgJHtvcHRpb25MaW5rVGFyZ2V0fSAke3Nob3dTZWxlY3Rpb259IGhyZWY9XCIke29wdGlvbkxpbmt9XCIgZGF0YS1vcHQtdmFsPVwiJHtvcHRpb24udmFsdWV9XCIgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5vcHRpb259JHtvcHRpb25DbGFzc30ke3NlbGVjdGlvbnN9XCI+YFxuICAgICAgICAgICAgOiBgPGJ1dHRvbiAke3Nob3dTZWxlY3Rpb259IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMub3B0aW9ufSR7b3B0aW9uQ2xhc3N9JHtzZWxlY3Rpb25zfVwiIGRhdGEtb3B0LXZhbD1cIiR7b3B0aW9uLnZhbHVlfVwiIHR5cGU9XCJidXR0b25cIj5gO1xuICAgICAgICBvcHRpb25IVE1MICs9IHRoaXMuZ2V0Q29udGVudChvcHRpb24pO1xuICAgICAgICBvcHRpb25IVE1MICs9IG9wdGlvbkxpbmsgPyBgPC9hPmAgOiBgPC9idXR0b24+YDtcbiAgICAgICAgcmV0dXJuIG9wdGlvbkhUTUw7XG4gICAgfVxuICAgIC8vIGdldCBzZWxlY3QgY29udGVudFxuICAgIGdldENvbnRlbnQob3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbkRhdGEgPSBvcHRpb24uZGF0YXNldC5vcHRBc3NldCA/IGAke29wdGlvbi5kYXRhc2V0Lm9wdEFzc2V0fWAgOiAnJztcbiAgICAgICAgY29uc3Qgb3B0aW9uRGF0YUhUTUwgPVxuICAgICAgICAgICAgb3B0aW9uRGF0YS5pbmRleE9mKCdpbWcnKSA+PSAwID8gYDxpbWcgc3JjPVwiJHtvcHRpb25EYXRhfVwiIGFsdD1cIlwiPmAgOiBvcHRpb25EYXRhO1xuICAgICAgICBsZXQgb3B0aW9uQ29udGVudEhUTUwgPSBgYDtcblxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuZ3JvdXB9XCI+YCA6ICcnO1xuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuYXNzZXR9XCI+YCA6ICcnO1xuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gb3B0aW9uRGF0YUhUTUwgOiAnJztcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8L3NwYW4+YCA6ICcnO1xuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMudHh0fVwiPmAgOiAnJztcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uLnRleHRDb250ZW50O1xuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDwvc3Bhbj5gIDogJyc7XG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPC9zcGFuPmAgOiAnJztcbiAgICAgICAgcmV0dXJuIG9wdGlvbkNvbnRlbnRIVE1MO1xuICAgIH1cbiAgICAvLyBnZXQgc2VsZWN0IHBsYWNlaG9sZGVyXG4gICAgZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpIHtcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBBcnJheS5mcm9tKHJlbGF0aXZlU2VsLm9wdGlvbnMpLmZpbmQoKG9wdGlvbikgPT4gIW9wdGlvbi52YWx1ZSk7XG5cbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICBwbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zdWJ0aXRsZSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBwbGFjZWhvbGRlci50ZXh0Q29udGVudCxcbiAgICAgICAgICAgICAgICBzaG93OiBwbGFjZWhvbGRlci5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXBoLXNob3cnKSxcbiAgICAgICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBwbGFjZWhvbGRlci5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXBoJyksXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHBsYWNlaG9sZGVyLmRhdGFzZXQub3B0UGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGdldCBzZWxlY3RlZCBvcHRpb25zIGRhdGFcbiAgICBnZXREYXRhKHJlbGF0aXZlU2VsKSB7XG4gICAgICAgIGxldCBzZWxlY3Rpb25zID0gW107XG5cbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLm11bHRpcGxlKSB7XG4gICAgICAgICAgICBzZWxlY3Rpb25zID0gQXJyYXkuZnJvbShyZWxhdGl2ZVNlbC5vcHRpb25zKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnNlbGVjdGVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbnMucHVzaChyZWxhdGl2ZVNlbC5vcHRpb25zW3JlbGF0aXZlU2VsLnNlbGVjdGVkSW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudHM6IHNlbGVjdGlvbnMubWFwKChvcHRpb24pID0+IG9wdGlvbiksXG4gICAgICAgICAgICB2YWx1ZXM6IHNlbGVjdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSkubWFwKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSksXG4gICAgICAgICAgICBodG1sOiBzZWxlY3Rpb25zLm1hcCgob3B0aW9uKSA9PiB0aGlzLmdldENvbnRlbnQob3B0aW9uKSlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBzZWxlY3Rpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIGluaXQgc2VsZWN0aW9uc1xuICAgIGluaXRTZWxlY3Rpb25zKGUpIHtcbiAgICAgICAgY29uc3QgcmVsYXRpdmVTZWwgPSBlLnRhcmdldDtcblxuICAgICAgICB0aGlzLmJ1aWxkKHJlbGF0aXZlU2VsKTtcbiAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25zKHJlbGF0aXZlU2VsKTtcbiAgICB9XG4gICAgLy8gc2V0IHNlbGVjdGlvbnNcbiAgICBzZXRTZWxlY3Rpb25zKHJlbGF0aXZlU2VsKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zdWJtaXQnKSAmJiByZWxhdGl2ZVNlbC52YWx1ZSkge1xuICAgICAgICAgICAgbGV0IHRlbXBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHRlbXBCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgICAgICAgICAgcmVsYXRpdmVTZWwuY2xvc2VzdCgnZm9ybScpLmFwcGVuZCh0ZW1wQnV0dG9uKTtcbiAgICAgICAgICAgIHRlbXBCdXR0b24uY2xpY2soKTtcbiAgICAgICAgICAgIHRlbXBCdXR0b24ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5maWxsZWQpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsKTtcbiAgICB9XG4gICAgLy8gY3VzdG9tIHNlbGVjdCBldmVudCAobGlzdGVuIHRvIGFueSBzZWxlY3Rpb25zIC8gbXV0YXRpb25zKVxuICAgIHNlbGVjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGlvbicsIHtcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0OiByZWxhdGl2ZVNlbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxufVxubmV3IFNlbGVjdCh7fSk7XG4iLCIvKipcbiAqIHNldCBoYXNoIHRvIHVybFxuICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAqL1xuZXhwb3J0IGNvbnN0IHNldEhhc2ggPSBoYXNoID0+IHtcbiAgaGFzaCA9IGhhc2ggPyBgIyR7aGFzaH1gIDogd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVswXTtcbiAgaGlzdG9yeS5wdXNoU3RhdGUoJycsICcnLCBoYXNoKTtcbn07XG5cbi8qKlxuICogZ2V0IGhhc2ggZnJvbSB1cmxcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5leHBvcnQgY29uc3QgZ2V0SGFzaCA9ICgpID0+IHtcbiAgaWYgKGxvY2F0aW9uLmhhc2gpIHtcbiAgICByZXR1cm4gbG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICB9XG59O1xuXG4vLyBib2R5IGxvY2tcbmV4cG9ydCBsZXQgYm9keUxvY2tTdGF0dXMgPSB0cnVlO1xuLyoqXG4gKiB0b2dnbGVzIGJvZHkgbG9ja1xuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5XG4gKi9cbmV4cG9ydCBjb25zdCBib2R5TG9ja1RvZ2dsZSA9IChkZWxheSA9IDUwMCkgPT4ge1xuICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbG9jaycpKSB7XG4gICAgYm9keVVubG9jayhkZWxheSk7XG4gIH0gZWxzZSB7XG4gICAgYm9keUxvY2soZGVsYXkpO1xuICB9XG59O1xuLyoqXG4gKiB1bmxvY2tzIGJvZHlcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheVxuICovXG5leHBvcnQgY29uc3QgYm9keVVubG9jayA9IChkZWxheSA9IDUwMCkgPT4ge1xuICBpZiAoYm9keUxvY2tTdGF0dXMpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJyk7XG4gICAgfSwgZGVsYXkpO1xuICAgIGJvZHlMb2NrU3RhdHVzID0gZmFsc2U7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBib2R5TG9ja1N0YXR1cyA9IHRydWU7XG4gICAgfSwgZGVsYXkpO1xuICB9XG59O1xuLyoqXG4gKiBsb2NrcyBib2R5XG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcbiAqL1xuZXhwb3J0IGNvbnN0IGJvZHlMb2NrID0gKGRlbGF5ID0gNTAwKSA9PiB7XG4gIGlmIChib2R5TG9ja1N0YXR1cykge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XG5cbiAgICBib2R5TG9ja1N0YXR1cyA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgYm9keUxvY2tTdGF0dXMgPSB0cnVlO1xuICAgIH0sIGRlbGF5KTtcbiAgfVxufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHthcnJheX0gYXJyYXlcbiAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhU2V0VmFsdWVcbiAqIHByb2Nlc3MgbWVkaWEgcmVxdWVzdHMgZnJvbSBhdHRyaWJ1dGVzXG4gKi9cbmV4cG9ydCBjb25zdCBkYXRhTWVkaWFRdWVyaWVzID0gKGFycmF5LCBkYXRhU2V0VmFsdWUpID0+IHtcbiAgLy8gZ2V0IG9iamVjdHMgd2l0aCBtZWRpYSBxdWVyaWVzXG4gIGNvbnN0IG1lZGlhID0gQXJyYXkuZnJvbShhcnJheSkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgc2VsZikge1xuICAgIGlmIChpdGVtLmRhdGFzZXRbZGF0YVNldFZhbHVlXSkge1xuICAgICAgcmV0dXJuIGl0ZW0uZGF0YXNldFtkYXRhU2V0VmFsdWVdLnNwbGl0KCcsJylbMF07XG4gICAgfVxuICB9KTtcbiAgLy8gb2JqZWN0cyB3aXRoIG1lZGlhIHF1ZXJpZXMgaW5pdGlhbGl6YXRpb25cbiAgaWYgKG1lZGlhLmxlbmd0aCkge1xuICAgIGNvbnN0IGJyZWFrcG9pbnRzQXJyYXkgPSBbXTtcbiAgICBtZWRpYS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgcGFyYW1zID0gaXRlbS5kYXRhc2V0W2RhdGFTZXRWYWx1ZV07XG4gICAgICBjb25zdCBicmVha3BvaW50ID0ge307XG4gICAgICBjb25zdCBwYXJhbXNBcnJheSA9IHBhcmFtcy5zcGxpdCgnLCcpO1xuICAgICAgYnJlYWtwb2ludC52YWx1ZSA9IHBhcmFtc0FycmF5WzBdO1xuICAgICAgYnJlYWtwb2ludC50eXBlID0gcGFyYW1zQXJyYXlbMV0gPyBwYXJhbXNBcnJheVsxXS50cmltKCkgOiAnbWF4JztcbiAgICAgIGJyZWFrcG9pbnQuaXRlbSA9IGl0ZW07XG4gICAgICBicmVha3BvaW50c0FycmF5LnB1c2goYnJlYWtwb2ludCk7XG4gICAgfSk7XG4gICAgLy8gZ2V0IHVuaXF1ZSBicmVha3BvaW50c1xuICAgIGxldCBtZFF1ZXJpZXMgPSBicmVha3BvaW50c0FycmF5Lm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgJygnICtcbiAgICAgICAgaXRlbS50eXBlICtcbiAgICAgICAgJy13aWR0aDogJyArXG4gICAgICAgIGl0ZW0udmFsdWUgK1xuICAgICAgICAncHgpLCcgK1xuICAgICAgICBpdGVtLnZhbHVlICtcbiAgICAgICAgJywnICtcbiAgICAgICAgaXRlbS50eXBlXG4gICAgICApO1xuICAgIH0pO1xuICAgIG1kUXVlcmllcyA9IHVuaXF1ZUFycmF5KG1kUXVlcmllcyk7XG4gICAgY29uc3QgbWRRdWVyaWVzQXJyYXkgPSBbXTtcblxuICAgIGlmIChtZFF1ZXJpZXMubGVuZ3RoKSB7XG4gICAgICAvLyB3b3JrIHdpdGggZXZlcnkgYnJlYWtwb2ludFxuICAgICAgbWRRdWVyaWVzLmZvckVhY2goYnJlYWtwb2ludCA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtc0FycmF5ID0gYnJlYWtwb2ludC5zcGxpdCgnLCcpO1xuICAgICAgICBjb25zdCBtZWRpYUJyZWFrcG9pbnQgPSBwYXJhbXNBcnJheVsxXTtcbiAgICAgICAgY29uc3QgbWVkaWFUeXBlID0gcGFyYW1zQXJyYXlbMl07XG4gICAgICAgIGNvbnN0IG1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShwYXJhbXNBcnJheVswXSk7XG4gICAgICAgIC8vIG9iamVjdHMgd2l0aCBjb25kaXRpb25zXG4gICAgICAgIGNvbnN0IGl0ZW1zQXJyYXkgPSBicmVha3BvaW50c0FycmF5LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIGlmIChpdGVtLnZhbHVlID09PSBtZWRpYUJyZWFrcG9pbnQgJiYgaXRlbS50eXBlID09PSBtZWRpYVR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG1kUXVlcmllc0FycmF5LnB1c2goe1xuICAgICAgICAgIGl0ZW1zQXJyYXksXG4gICAgICAgICAgbWF0Y2hNZWRpYSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBtZFF1ZXJpZXNBcnJheTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogc21vb3RobHkgc2xpZGVzIHVwXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxuICogQHBhcmFtIHtib29sZWFufSBzaG93bW9yZVxuICovXG5leHBvcnQgY29uc3QgX3NsaWRlVXAgPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCwgc2hvd21vcmUgPSAwKSA9PiB7XG4gIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnX3NsaWRlJyk7XG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdoZWlnaHQsIG1hcmdpbiwgcGFkZGluZyc7XG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gYCR7dGFyZ2V0Lm9mZnNldEhlaWdodH1weGA7XG4gICAgdGFyZ2V0Lm9mZnNldEhlaWdodDtcbiAgICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gc2hvd21vcmUgPyBgJHtzaG93bW9yZX1yZW1gIDogYDBgO1xuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IDA7XG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGFyZ2V0LmhpZGRlbiA9ICFzaG93bW9yZSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICFzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JykgOiBudWxsO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJyk7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcbiAgICAgICFzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKSA6IG51bGw7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ19zbGlkZScpO1xuICAgICAgLy8gY3JlYXRlIGV2ZW50XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ3NsaWRlVXBEb25lJywge1xuICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSwgZHVyYXRpb24pO1xuICB9XG59O1xuXG4vKipcbiAqIHNtb290aGx5IHNsaWRlcyBkb3duXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxuICogQHBhcmFtIHtib29sZWFufSBzaG93bW9yZVxuICovXG5leHBvcnQgY29uc3QgX3NsaWRlRG93biA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwLCBzaG93bW9yZSA9IDApID0+IHtcbiAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdfc2xpZGUnKTtcbiAgICB0YXJnZXQuaGlkZGVuID0gdGFyZ2V0LmhpZGRlbiA/IGZhbHNlIDogbnVsbDtcbiAgICBzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JykgOiBudWxsO1xuICAgIGxldCBoZWlnaHQgPSB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xuICAgIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBzaG93bW9yZSA/IGAke3Nob3dtb3JlfXJlbWAgOiBgMGA7XG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gMDtcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcbiAgICB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmcnO1xuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKTtcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdfc2xpZGUnKTtcbiAgICAgIC8vIGNyZWF0ZSBldmVudFxuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCdzbGlkZURvd25Eb25lJywge1xuICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSwgZHVyYXRpb24pO1xuICB9XG59O1xuXG4vKipcbiAqIHRvZ2dsZXMgc21vb3RoIHNsaWRlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxuICogQHJldHVybnMgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IF9zbGlkZVRvZ2dsZSA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwKSA9PiB7XG4gIGlmICh0YXJnZXQuaGlkZGVuKSB7XG4gICAgcmV0dXJuIF9zbGlkZURvd24odGFyZ2V0LCBkdXJhdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIF9zbGlkZVVwKHRhcmdldCwgZHVyYXRpb24pO1xuICB9XG59O1xuXG4vKipcbiAqIGNvbnZlcnRzIHJlbSB0byBwaXhlbHNcbiAqIEBwYXJhbSB7bnVtYmVyfSByZW1WYWx1ZVxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1Ub1B4KHJlbVZhbHVlKSB7XG4gIC8vINCf0L7Qu9GD0YfQsNC10Lwg0YLQtdC60YPRidC40Lkg0LHQsNC30L7QstGL0Lkg0YDQsNC30LzQtdGAINGI0YDQuNGE0YLQsCAoZm9udC1zaXplKSDQuNC3INGN0LvQtdC80LXQvdGC0LAgPGh0bWw+XG4gIHZhciBodG1sRm9udFNpemUgPSBwYXJzZUZsb2F0KFxuICAgIGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5mb250U2l6ZVxuICApO1xuXG4gIC8vINCf0LXRgNC10LLQvtC00LjQvCDQt9C90LDRh9C10L3QuNC1INC40LcgcmVtINCyIHB4XG4gIHZhciBweFZhbHVlID0gcmVtVmFsdWUgKiBodG1sRm9udFNpemU7XG5cbiAgLy8g0J7QutGA0YPQs9C70Y/QtdC8INC30L3QsNGH0LXQvdC40LUg0LTQviDRhtC10LvRi9GFINC/0LjQutGB0LXQu9C10LkgKNC/0L4g0LbQtdC70LDQvdC40Y4pXG4gIHJldHVybiBNYXRoLnJvdW5kKHB4VmFsdWUpICsgJ3B4Jztcbn1cblxuLy8gcmVtb3ZlIGNsYXNzIGZyb20gYWxsIGFycmF5IGVsZW1lbnRzXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2xhc3NlcyA9IChhcnJheSwgY2xhc3NOYW1lKSA9PiB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBhcnJheVtpXS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH1cbn07XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkV1Y2xpZCBDaXJjdWxhciBBXCI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogdXJsKFwiLi9hc3NldHMvZm9udHMvRXVjbGlkLUNpcmN1bGFyLUEtTGlnaHQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRXVjbGlkIENpcmN1bGFyIEFcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoXCIuL2Fzc2V0cy9mb250cy9FdWNsaWQtQ2lyY3VsYXItQS1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkV1Y2xpZCBDaXJjdWxhciBBXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKFwiLi9hc3NldHMvZm9udHMvRXVjbGlkLUNpcmN1bGFyLUEtTWVkaXVtLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkV1Y2xpZCBDaXJjdWxhciBBXCI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHNyYzogdXJsKFwiLi9hc3NldHMvZm9udHMvRXVjbGlkLUNpcmN1bGFyLUEtU2VtaUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRXVjbGlkIENpcmN1bGFyIEFcIjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoXCIuL2Fzc2V0cy9mb250cy9FdWNsaWQtQ2lyY3VsYXItQS1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNwYWNlIEFnZVwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChcIi4vYXNzZXRzL2ZvbnRzL1NwYWNlLUFnZS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTcGFjZSBBZ2UgQ3lyaWxsaWNcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoXCIuL2Fzc2V0cy9mb250cy9TcGFjZS1BZ2UtQ3lyaWxsaWMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRXVyb3BlRXh0ZW5kZWRDXCI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHNyYzogdXJsKFwiLi9hc3NldHMvZm9udHMvRXVyb3BlLUV4dGVuZGVkLUMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG59XG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgZm9udC1mYW1pbHk6IFwiRXVjbGlkIENpcmN1bGFyIEFcIjtcbiAgZm9udC1zaXplOiAwLjUyMDgzMzV2dztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYnVnZml4IGluZmluaXRlIDFzO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGJ1Z2ZpeCBpbmZpbml0ZSAxcztcbiAgaGVpZ2h0OiAxMDAlO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTY1Mztcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBidWdmaXggaW5maW5pdGUgMXM7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5hIHtcbiAgY29sb3I6IHVuc2V0O1xufVxuXG5hLFxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYnV0dG9uLFxuaW5wdXQsXG5hLFxudGV4dGFyZWEge1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5idXR0b246Zm9jdXMsXG5pbnB1dDpmb2N1cyxcbmE6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5idXR0b246YWN0aXZlLFxuaW5wdXQ6YWN0aXZlLFxuYTphY3RpdmUsXG50ZXh0YXJlYTphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250OiBpbmhlcml0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnAge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udDogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbnVsIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG51bCBsaSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxNnJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cblxuc3ZnLFxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbmh0bWwubG9jayxcbmh0bWwubG9jayBib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxubWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi53cmFwcGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogMTkyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNwYWNlIEFnZVwiO1xuICBmb250LXNpemU6IDlyZW07XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNwYWNlIEFnZVwiO1xuICBmb250LXNpemU6IDNyZW07XG59XG5cbi50eHQzMCB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLnR4dDE2IHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi5jeXIge1xuICBmb250LWZhbWlseTogXCJTcGFjZSBBZ2UgQ3lyaWxsaWNcIjtcbn1cblxuLmJ0biB7XG4gIHBhZGRpbmc6IDAuNnJlbSAwLjZyZW0gMC42cmVtIDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDJyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OCk7XG4gIGJvcmRlci1yYWRpdXM6IDAgNHJlbSA0cmVtIDRyZW07XG59XG4uYnRuX2Fyci1kb3duIC5idG5fX2Fycm93LWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4uYnRuX19hcnJvdy13cmFwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAwIDAgNHJlbTtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLmJ0bl9fYXJyb3ctaWNvbiB7XG4gIHdpZHRoOiAyLjRyZW07XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbmlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dFt0eXBlPWVtYWlsXSxcbmlucHV0W3R5cGU9dGVsXSxcbnRleHRhcmVhIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbnRleHRhcmVhOmZvY3VzLFxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDQuNnJlbSAyLjdyZW0gMnJlbSAyLjdyZW07XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcbn1cbi5pbnB1dF90ZXh0YXJlYSB7XG4gIGhlaWdodDogMjUuNXJlbTtcbn1cbi5pbnB1dF90ZXh0YXJlYSB0ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgcmVzaXplOiBub25lO1xufVxuLmlucHV0X19maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5pbnB1dF9fZmllbGQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uaW5wdXRfX2xhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEuOHJlbTtcbiAgbGVmdDogMi43cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvcGFjaXR5OiAwLjU7XG59XG4uc2VsZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlbGVjdF9fYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWxlY3RfX3RpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAzO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2VsZWN0X192YWx1ZSB7XG4gIHBhZGRpbmc6IDEuM3JlbSAxLjNyZW0gMS4zcmVtIDIuN3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJyZW07XG4gIGhlaWdodDogNy4ycmVtO1xuICB3aWR0aDogMTAwJTtcbn1cbi5zZWxlY3RfX3ZhbHVlID4gKiB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLnNlbGVjdF9fdmFsdWU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAwIDAgNXJlbTtcbiAgd2lkdGg6IDVyZW07XG4gIGhlaWdodDogNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9pY29ucy9hcnItd2hpdGUuc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyLjRyZW07XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cbi5zZWxlY3RfX3ZhbHVlLl9zZWxlY3QtbGFiZWw6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1zZWwtbGFiZWwpO1xufVxuLl9zZWxlY3QtZmlsbGVkIC5zZWxlY3RfX3ZhbHVlLl9zZWxlY3QtbGFiZWw6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc2VsZWN0X192YWx1ZS5fc2VsZWN0LWxhYmVsOjpiZWZvcmUsXG4uc2VsZWN0X192YWx1ZSAuc2VsZWN0X19jb250ZW50IHtcbiAgbWF4LXdpZHRoOiAzMS40cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5zZWxlY3RfX2NvbnRlbnQ6bm90KC5fc2VsZWN0LWZpbGxlZCAuc2VsZWN0X19jb250ZW50KSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc2VsZWN0X190ZXh0IHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4uc2VsZWN0X19pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnNlbGVjdF9fb3B0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgdG9wOiBjYWxjKDEwMCUgLSAzcmVtKTtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogNC42cmVtIDIuN3JlbSAyLjRyZW0gMi43cmVtO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAzcmVtIDNyZW07XG4gIGJhY2tncm91bmQ6ICMzNjM5NmM7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcbn1cbi5zZWxlY3RfX3Njcm9sbCB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgbWF4LWhlaWdodDogMTlyZW07XG59XG4uc2VsZWN0X19zY3JvbGwuc2ltcGxlYmFyLXNjcm9sbGFibGUteSAuc2ltcGxlYmFyLXRyYWNrLnNpbXBsZWJhci12ZXJ0aWNhbCB7XG4gIHJpZ2h0OiAxLjJyZW07XG4gIHdpZHRoOiAwLjRyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTdlZTtcbn1cbi5zZWxlY3RfX3Njcm9sbC5zaW1wbGViYXItc2Nyb2xsYWJsZS15IC5zaW1wbGViYXItc2Nyb2xsYmFyIHtcbiAgbWluLWhlaWdodDogMy4ycmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMmFkYzE7XG59XG4uc2VsZWN0X19vcHRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xufVxuLnNlbGVjdF9fb3B0aW9uOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59XG4uc2VsZWN0X19vcHRpb24uX3NlbGVjdC1zZWxlY3RlZCB7XG4gIGNvbG9yOiAjMjlmZjdmO1xufVxuLnNlbGVjdF9fZ3JvdXAge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbn1cbi5zZWxlY3RfX2hpbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYygxMDAlICsgMC44cmVtKTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGxpbmUtaGVpZ2h0OiAxNDIuODU3JTtcbn1cbi5zZWxlY3RfX3N1YnRpdGxlIHtcbiAgY3Vyc29yOiB0ZXh0O1xufVxuLnNlbGVjdC5fc2VsZWN0LW9wZW5lZCB7XG4gIHotaW5kZXg6IDU7XG59XG4uc2VsZWN0Ll9zZWxlY3Qtb3BlbmVkIC5zZWxlY3RfX3ZhbHVlOjphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xufVxuLl9zZWxlY3QtbGlzdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJhZGdlIHtcbiAgcGFkZGluZzogMXJlbSAzcmVtIDFyZW0gMXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDIuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XG59XG4uYmFkZ2UuX2FjdGl2ZSB7XG4gIGNvbG9yOiAjMTQwYTNmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLmJhZGdlLl9hY3RpdmUgLmJhZGdlX19pY29uLXdyYXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgyNjc4O1xufVxuLmJhZGdlLl9hY3RpdmUgLmJhZGdlX19pY29uLXdyYXA6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc3Rhci1hY3RpdmUuc3ZnKTtcbn1cbi5iYWRnZV9faWNvbi13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAwIDAgNC41cmVtO1xuICB3aWR0aDogNC41cmVtO1xuICBoZWlnaHQ6IDQuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcbn1cbi5iYWRnZV9faWNvbi13cmFwOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA4cmVtO1xuICBoZWlnaHQ6IDhyZW07XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc3Rhci5zdmcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xuICAudHh0MjUge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiA1cHg7XG4gICAgZm9udC1zaXplOiAxLjU2MjV2dztcbiAgICBmb250LXNpemU6IDEuMzMzMzMzMzMzM3Z3O1xuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcbiAgfVxuICBib2R5IHtcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyLjhyZW07XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAycmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiA2cmVtO1xuICB9XG4gIC5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICB9XG4gIC50eHQzMCB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICB9XG4gIC50eHQxNiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIC5idG4ge1xuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDMuMnJlbTtcbiAgICBjb2x1bW4tZ2FwOiAzLjJyZW07XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgOHJlbSA4cmVtIDhyZW07XG4gIH1cbiAgLmJ0bl9fYXJyb3ctd3JhcCB7XG4gICAgZmxleDogMCAwIDdyZW07XG4gICAgd2lkdGg6IDdyZW07XG4gICAgaGVpZ2h0OiA3cmVtO1xuICB9XG4gIC5idG5fX2Fycm93LWljb24ge1xuICAgIHdpZHRoOiAzLjhyZW07XG4gIH1cbiAgLmlucHV0IHtcbiAgICBwYWRkaW5nOiA3cmVtIDhyZW0gMi40cmVtIDIuNHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cmVtO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcbiAgfVxuICAuaW5wdXRfdGV4dGFyZWEge1xuICAgIGhlaWdodDogMzQuOHJlbTtcbiAgfVxuICAuaW5wdXRfX2xhYmVsIHtcbiAgICB0b3A6IDIuNHJlbTtcbiAgICBsZWZ0OiAyLjRyZW07XG4gIH1cbiAgLnNlbGVjdF9fdGl0bGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDRyZW07XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRyZW0pO1xuICB9XG4gIC5zZWxlY3RfX3ZhbHVlIHtcbiAgICBwYWRkaW5nOiAxLjZyZW07XG4gICAgZ2FwOiA0cmVtO1xuICAgIGhlaWdodDogMTByZW07XG4gIH1cbiAgLnNlbGVjdF9fdmFsdWU6OmFmdGVyIHtcbiAgICBmbGV4OiAwIDAgNnJlbTtcbiAgICB3aWR0aDogNnJlbTtcbiAgICBoZWlnaHQ6IDZyZW07XG4gICAgYmFja2dyb3VuZC1zaXplOiAzLjJyZW07XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIuNHJlbSk7XG4gIH1cbiAgLnNlbGVjdF9fb3B0aW9ucyB7XG4gICAgdG9wOiBjYWxjKDEwMCUgLSA0cmVtKTtcbiAgICBwYWRkaW5nOiA4cmVtIDRyZW0gNHJlbSA0cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA0cmVtIDRyZW07XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRyZW0pO1xuICB9XG4gIC5zZWxlY3RfX29wdGlvbjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICB9XG4gIC5iYWRnZSB7XG4gICAgcGFkZGluZzogMnJlbSA4cmVtIDJyZW0gMnJlbTtcbiAgICBjb2x1bW4tZ2FwOiAzcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDZyZW07XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRyZW0pO1xuICB9XG4gIC5iYWRnZV9faWNvbi13cmFwIHtcbiAgICBmbGV4OiAwIDAgNnJlbTtcbiAgICB3aWR0aDogNnJlbTtcbiAgICBoZWlnaHQ6IDZyZW07XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRyZW0pO1xuICB9XG4gIC5iYWRnZV9faWNvbi13cmFwOjpiZWZvcmUge1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgICBoZWlnaHQ6IDEwcmVtO1xuICB9XG59XG5AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcbiAgLnNlbGVjdF9fb3B0aW9uOmhvdmVyOm5vdCguc2VsZWN0X19vcHRpb246aG92ZXIuc2VsZWN0X19zdWJ0aXRsZSkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzI5ZmY3ZjtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvX3R5cG8uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3VpL3N0eWxlcy9fYnV0dG9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvX2lucHV0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvX3NlbGVjdC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL19iYWRnZS5zY3NzXCIsXCI8bm8gc291cmNlPlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3RUFBQTtBQ0NKO0FERUE7RUFDSSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEVBQUE7QUNBSjtBREdBO0VBQ0ksZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLHlFQUFBO0FDREo7QURJQTtFQUNJLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyRUFBQTtBQ0ZKO0FES0E7RUFDSSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUVBQUE7QUNISjtBRE1BO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBEQUFBO0FDSko7QURPQTtFQUNJLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQ0xKO0FEUUE7RUFDSSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0VBQUE7QUNOSjtBQ3ZDQTs7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QUFBO0lBQ0Esa0JBQUE7SUFDQSw2Q0FBQTtJQUNBLCtCQUFBO0VIOFFOO0VHcFFFO0lBVVEsY0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VIeVFWO0VHblFFO0lBSVEsYUFBQTtFSHdRVjtFSTNTRjtJQWVRLGdDQUFBO0lBQ0EsbUJBQUE7SUFDQSwyQkFBQTtFSitUTjtFSTlUTTtJQUNJLGVBQUE7RUpnVVY7RUk5U0U7SUFPUSxXQUFBO0lBQ0EsWUFBQTtFSjRUVjtFSzNXRTtJQVNRLG1CQUFBO0lBQ0EsMkJBQUE7RUxzWFY7RUtoWEU7SUFnRFEsZUFBQTtJQUNBLFNBQUE7SUFDQSxhQUFBO0VMZ1hWO0VLL1dVO0lBQ0ksY0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7SUFDQSw2QkFBQTtFTGlYZDtFS25WRTtJQVdRLHNCQUFBO0lBQ0EsNEJBQUE7SUFDQSw0QkFBQTtJQUNBLDJCQUFBO0VMbVdWO0VLbFVNO0lBR1EsbUJBQUE7RUwyVmQ7RU05ZkY7SUFtQlEsNEJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsMkJBQUE7RU5vaUJOO0VNL2hCRTtJQXNCUSxjQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSwyQkFBQTtFTm9pQlY7RU1uaUJVO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RU5xaUJkO0FBckNGO0FPdmpCQTtFRjJLZ0I7SUFDSSxlQUFBO0lBQ0EsY0w1Slo7RUFzZk47QUFzREZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRXVjbGlkIENpcmN1bGFyIEEnO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvRXVjbGlkLUNpcmN1bGFyLUEtTGlnaHQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0V1Y2xpZCBDaXJjdWxhciBBJztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0V1Y2xpZC1DaXJjdWxhci1BLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0V1Y2xpZCBDaXJjdWxhciBBJztcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0V1Y2xpZC1DaXJjdWxhci1BLU1lZGl1bS53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRXVjbGlkIENpcmN1bGFyIEEnO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvRXVjbGlkLUNpcmN1bGFyLUEtU2VtaUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0V1Y2xpZCBDaXJjdWxhciBBJztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0V1Y2xpZC1DaXJjdWxhci1BLUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1NwYWNlIEFnZSc7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9TcGFjZS1BZ2Uud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1NwYWNlIEFnZSBDeXJpbGxpYyc7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9TcGFjZS1BZ2UtQ3lyaWxsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0V1cm9wZUV4dGVuZGVkQyc7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9FdXJvcGUtRXh0ZW5kZWQtQy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuXCIsXCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWl4aW5zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcblxcbkBpbXBvcnQgJy4vbWl4aW5zJztcXG5cXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB2YXJpYWJsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcblxcbi8vIGZvbnRzXFxuJHNwYWNlQWdlOiAnU3BhY2UgQWdlJztcXG4kc3BhY2VBZ2VDeXI6ICdTcGFjZSBBZ2UgQ3lyaWxsaWMnO1xcbiRFdXJvcGVFOiAnRXVyb3BlRXh0ZW5kZWRDJztcXG4kRUNBOiAnRXVjbGlkIENpcmN1bGFyIEEnO1xcblxcbi8vIGNvbG9yc1xcbiR3aGl0ZTogI2ZmZmZmZjtcXG4kYmxhY2s6ICMwMDAwMDA7XFxuJGRhcmtQdXJwbGU6ICMxMTA3M2I7XFxuJGRhcmtQdXJwbGUyOiAjMTQwYTNmO1xcbiRncmVlbjogIzI5ZmY3ZjtcXG4kYmx1ZTogIzE4MjY3ODtcXG4kYmdDb2xvcjogIzEwMTY1MztcXG5cXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZvbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcblxcbi8vIGxvY2FsIGZvbnRzXFxuQGltcG9ydCAnLi9mb250cyc7XFxuXFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBiYXNlIHN0eWxlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5cXG4vLyBiYXNlIHNjc3MgZmlsZVxcbkBpbXBvcnQgJy4vc2V0JztcXG5cXG4vLyBodG1sXFxuaHRtbC5sb2NrLFxcbmh0bWwubG9jayBib2R5IHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdG91Y2gtYWN0aW9uOiBub25lO1xcbn1cXG5odG1sLFxcbmJvZHkge1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi8vIG1haW5cXG5tYWluIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWF4LXdpZHRoOiAxOTIwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5cXG4vLyBoZWFkZXIgLyBmb290ZXJcXG5AaW1wb3J0ICcuL3NlY3Rpb25zL2hlYWRlcic7XFxuQGltcG9ydCAnLi9zZWN0aW9ucy9mb290ZXInO1xcblxcbi8vIHVpXFxuQGltcG9ydCAnLi4vdWkvc3R5bGVzL3VpLnNjc3MnO1xcblxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuQGltcG9ydCAnLi9kZXYvdnptc2sxLnNjc3MnO1xcbkBpbXBvcnQgJy4vZGV2L21hcmt1c0RNLnNjc3MnO1xcbkBpbXBvcnQgJy4vZGV2L3VraWswLnNjc3MnO1xcbkBpbXBvcnQgJy4vZGV2L2tpZTZlci5zY3NzJztcXG5cIixcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiAkRUNBOyAvLyDRiNGA0LjRhNGCINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINC/0L4g0YHQsNC50YLRg1xcbiAgICBmb250LXNpemU6IDAuNTIwODMzNXZ3OyAvLyDQvdCwINGA0LDQt9GA0LXRiNC10L3QuNC4IDE5MjAgMC41MjA4MzV2dyA9PT0gMTBweFxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBidWdmaXggaW5maW5pdGUgMXM7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYnVnZml4IGluZmluaXRlIDFzO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGNvbG9yOiAkd2hpdGU7IC8vINGG0LLQtdGCINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINGC0LXQutGB0YLQsCDQv9C+INGB0LDQudGC0YNcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnQ29sb3I7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJ1Z2ZpeCBpbmZpbml0ZSAxcztcXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcbmEge1xcbiAgICBjb2xvcjogdW5zZXQ7XFxufVxcbmEsXFxuYTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbmEsXFxudGV4dGFyZWEge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgICY6Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgfVxcbiAgICAmOmFjdGl2ZSB7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICB9XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5wIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG51bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxudWwgbGkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICB3aWR0aDogMTZyZW07XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5pbnB1dFt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdudW1iZXInXSB7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbn1cXG5cXG5zdmcsXFxuaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDE5MjBweCkge1xcbiAgICBodG1sIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICBodG1sIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxLjU2MjV2dztcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygoMTAwIC8gMzc1KSAqIDV2dyk7IC8vINCz0LTQtSAzNzUg0Y3RgtC+INGI0LjRgNC40L3QsCDQvNC+0LEg0LLQtdGA0YHQuNC4INC80LDQutC10YLQsFxcbiAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xcbiAgICB9XFxuXFxuICAgIGJvZHkge1xcbiAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xcbiAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBwYWRkaW5nOiAwIDJyZW07IC8vINCyINC80L7QsSDQstC10YDRgdC40Lgg0L7RgtGB0YLRg9C/INC+0YIg0LrRgNCw0Y8g0LfQsNC00LDQtdC8INC00LvRjyDQstGB0LXRhSDQutC+0L3RgtC10LnQvdC10YDQvtCyLCDQsCDRgtCw0Lwg0LPQtNC1INC90LUg0L3Rg9C20L3QviDQvNC+0LbQtdC8INGC0L7Rh9C10YfQvdC+INGD0LHRgNCw0YLRjFxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XFxuXCIsXCIudGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJHNwYWNlQWdlO1xcbiAgICBmb250LXNpemU6IDlyZW07XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICBmb250LXNpemU6IDZyZW07XFxuICAgIH1cXG59XFxuXFxuLnN1YnRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICRzcGFjZUFnZTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICB9XFxufVxcblxcbi50eHQyNSB7XFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgfVxcbn1cXG5cXG4udHh0MzAge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICBmb250LXNpemU6IDRyZW07XFxuICAgIH1cXG59XFxuXFxuLnR4dDE2IHtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG59XFxuXFxuLmN5ciB7XFxuICAgIGZvbnQtZmFtaWx5OiAkc3BhY2VBZ2VDeXI7XFxufVxcblwiLFwiLmJ0biB7XFxuICAgIHBhZGRpbmc6IDAuNnJlbSAwLjZyZW0gMC42cmVtIDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDJyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgNHJlbSA0cmVtIDRyZW07XFxuICAgICZfYXJyLWRvd24ge1xcbiAgICAgICAgLmJ0bl9fYXJyb3ctaWNvbiB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAzLjJyZW07XFxuICAgICAgICBjb2x1bW4tZ2FwOiAzLjJyZW07XFxuICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OCk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDhyZW0gOHJlbSA4cmVtO1xcbiAgICB9XFxuXFxuICAgIC8vIC5idG5fX3RleHRcXG5cXG4gICAgJl9fdGV4dCB7XFxuICAgIH1cXG5cXG4gICAgLy8gLmJ0bl9fYXJyb3ctd3JhcFxcblxcbiAgICAmX19hcnJvdy13cmFwIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZmxleDogMCAwIDRyZW07XFxuICAgICAgICB3aWR0aDogNHJlbTtcXG4gICAgICAgIGhlaWdodDogNHJlbTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgZmxleDogMCAwIDdyZW07XFxuICAgICAgICAgICAgd2lkdGg6IDdyZW07XFxuICAgICAgICAgICAgaGVpZ2h0OiA3cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5idG5fX2Fycm93LWljb25cXG5cXG4gICAgJl9fYXJyb3ctaWNvbiB7XFxuICAgICAgICB3aWR0aDogMi40cmVtO1xcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgd2lkdGg6IDMuOHJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcImlucHV0W3R5cGU9J3RleHQnXSxcXG5pbnB1dFt0eXBlPSdlbWFpbCddLFxcbmlucHV0W3R5cGU9J3RlbCddLFxcbnRleHRhcmVhIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcbnRleHRhcmVhOmZvY3VzLFxcbmlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmlucHV0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiA0LjZyZW0gMi43cmVtIDJyZW0gMi43cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgICZfdGV4dGFyZWEge1xcbiAgICAgICAgaGVpZ2h0OiAyNS41cmVtO1xcbiAgICAgICAgdGV4dGFyZWEge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgcGFkZGluZzogN3JlbSA4cmVtIDIuNHJlbSAyLjRyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRyZW0pO1xcbiAgICAgICAgJl90ZXh0YXJlYSB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAzNC44cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5pbnB1dF9fZmllbGRcXG5cXG4gICAgJl9fZmllbGQge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLmlucHV0X19sYWJlbFxcblxcbiAgICAmX19sYWJlbCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDEuOHJlbTtcXG4gICAgICAgIGxlZnQ6IDIuN3JlbTtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIHRvcDogMi40cmVtO1xcbiAgICAgICAgICAgIGxlZnQ6IDIuNHJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmLl9mb3JtLWZvY3VzIHtcXG4gICAgfVxcbiAgICAmLl9mb3JtLWVycm9yIHtcXG4gICAgfVxcbn1cXG5cIixcIi5zZWxlY3Qge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIC8vIC5zZWxlY3RfX2JvZHlcXG5cXG4gICAgJl9fYm9keSB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fdGl0bGVcXG5cXG4gICAgJl9fdGl0bGUge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgei1pbmRleDogMztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRyZW07XFxuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRyZW0pO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX3ZhbHVlXFxuXFxuICAgICZfX3ZhbHVlIHtcXG4gICAgICAgIHBhZGRpbmc6IDEuM3JlbSAxLjNyZW0gMS4zcmVtIDIuN3JlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAycmVtO1xcbiAgICAgICAgaGVpZ2h0OiA3LjJyZW07XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgICAgID4gKiB7XFxuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgNXJlbTtcXG4gICAgICAgICAgICB3aWR0aDogNXJlbTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDVyZW07XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2ljb25zL2Fyci13aGl0ZS5zdmcpO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMi40cmVtO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxuICAgICAgICB9XFxuICAgICAgICAmLl9zZWxlY3QtbGFiZWwge1xcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1zZWwtbGFiZWwpO1xcbiAgICAgICAgICAgICAgICAuX3NlbGVjdC1maWxsZWQgJiB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgJi5fc2VsZWN0LWxhYmVsOjpiZWZvcmUsXFxuICAgICAgICAuc2VsZWN0X19jb250ZW50IHtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMxLjRyZW07XFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjZyZW07XFxuICAgICAgICAgICAgZ2FwOiA0cmVtO1xcbiAgICAgICAgICAgIGhlaWdodDogMTByZW07XFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgNnJlbTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDZyZW07XFxuICAgICAgICAgICAgICAgIGhlaWdodDogNnJlbTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzLjJyZW07XFxuICAgICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyLjRyZW0pO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X19jb250ZW50XFxuXFxuICAgICZfX2NvbnRlbnQge1xcbiAgICAgICAgLy8gaGlkZSAvIHNob3cgc2VsZWN0ZWQgdmFsdWVcXG4gICAgICAgICY6bm90KC5fc2VsZWN0LWZpbGxlZCAmKSB7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X190ZXh0XFxuXFxuICAgICZfX3RleHQge1xcbiAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9faW5wdXRcXG5cXG4gICAgJl9faW5wdXQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X19vcHRpb25zXFxuXFxuICAgICZfX29wdGlvbnMge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgIHRvcDogY2FsYygxMDAlIC0gM3JlbSk7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgcGFkZGluZzogNC42cmVtIDIuN3JlbSAyLjRyZW0gMi43cmVtO1xcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDNyZW0gM3JlbTtcXG4gICAgICAgIGJhY2tncm91bmQ6ICMzNjM5NmM7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIHRvcDogY2FsYygxMDAlIC0gNHJlbSk7XFxuICAgICAgICAgICAgcGFkZGluZzogOHJlbSA0cmVtIDRyZW0gNHJlbTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNHJlbSA0cmVtO1xcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X19zY3JvbGxcXG5cXG4gICAgJl9fc2Nyb2xsIHtcXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuXFxuICAgICAgICAvLyBtYXhpbXVtIGhlaWdodFxcbiAgICAgICAgbWF4LWhlaWdodDogMTlyZW07XFxuXFxuICAgICAgICAvLyBzY3JvbGxiYXIgc3R5bGVzXFxuICAgICAgICAmLnNpbXBsZWJhci1zY3JvbGxhYmxlLXkge1xcbiAgICAgICAgICAgIC5zaW1wbGViYXItdHJhY2suc2ltcGxlYmFyLXZlcnRpY2FsIHtcXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEuMnJlbTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAuNHJlbTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2VlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuc2ltcGxlYmFyLXNjcm9sbGJhciB7XFxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMuMnJlbTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTJhZGMxO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X19vcHRpb25cXG4gICAgJl9fb3B0aW9uIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XFxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAmLl9zZWxlY3Qtc2VsZWN0ZWQge1xcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JlZW47XFxuICAgICAgICB9XFxuICAgICAgICBAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgJjpub3QoJi5zZWxlY3RfX3N1YnRpdGxlKSB7XFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyZWVuO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX2dyb3VwXFxuXFxuICAgICZfX2dyb3VwIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fYXNzZXRcXG5cXG4gICAgJl9fYXNzZXQge1xcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX3RleHRcXG5cXG4gICAgJl9fdGV4dCB7XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9faGludFxcblxcbiAgICAmX19oaW50IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogY2FsYygxMDAlICsgMC44cmVtKTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0Mi44NTclO1xcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX3N1YnRpdGxlXFxuXFxuICAgICZfX3N1YnRpdGxlIHtcXG4gICAgICAgIGN1cnNvcjogdGV4dDtcXG4gICAgfVxcblxcbiAgICAvLyBzZWxlY3Qgc3RhdGVcXG4gICAgJi5fc2VsZWN0LW9wZW5lZCB7XFxuICAgICAgICB6LWluZGV4OiA1O1xcbiAgICAgICAgLnNlbGVjdF9fdmFsdWU6OmFmdGVyIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAmLl9zZWxlY3QtZm9jdXNlZCB7XFxuICAgIH1cXG4gICAgJi5fc2VsZWN0LWVycm9yIHtcXG4gICAgICAgICY6bm90KCYuX3NlbGVjdC1maWxsZWQsICYuX3NlbGVjdC1vcGVuZWQpIHtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAmLl9zZWxlY3QtZmlsbGVkIHtcXG4gICAgICAgICY6bm90KCYuX3NlbGVjdC1vcGVuZWQpIHtcXG4gICAgICAgICAgICAmOm5vdCgmLl9zZWxlY3Qtc2hvdy12YWwpIHtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgJi5fc2VsZWN0LXNob3ctdmFsIHtcXG4gICAgICAgICYuX3NlbGVjdC1mb2N1c2VkLFxcbiAgICAgICAgJi5fc2VsZWN0LWZpbGxlZCxcXG4gICAgICAgICYuX3NlbGVjdC1lcnJvcixcXG4gICAgICAgICYuX3NlbGVjdC1kaXNhYmxlZCB7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgJi5fc2VsZWN0LWRpc2FibGVkIHtcXG4gICAgfVxcbiAgICAmLl9zZWxlY3QtbXVsdGlwbGUge1xcbiAgICB9XFxuICAgICYuX3NlbGVjdC1hY3RpdmUge1xcbiAgICB9XFxuICAgICYuX3NlbGVjdC1jaGVja2JveCB7XFxuICAgIH1cXG59XFxuXFxuLy8gbGlzdFxcbi5fc2VsZWN0LWxpc3Qge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLFwiLmJhZGdlIHtcXG4gICAgcGFkZGluZzogMXJlbSAzcmVtIDFyZW0gMXJlbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDIuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgICYuX2FjdGl2ZSB7XFxuICAgICAgICBjb2xvcjogJGRhcmtQdXJwbGUyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgICAgICAgLmJhZGdlX19pY29uLXdyYXAge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc3Rhci1hY3RpdmUuc3ZnKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gOHJlbSAycmVtIDJyZW07XFxuICAgICAgICBjb2x1bW4tZ2FwOiAzcmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnJlbTtcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcXG4gICAgfVxcblxcbiAgICAvLyAuYmFkZ2VfX2ljb24td3JhcFxcblxcbiAgICAmX19pY29uLXdyYXAge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZmxleDogMCAwIDQuNXJlbTtcXG4gICAgICAgIHdpZHRoOiA0LjVyZW07XFxuICAgICAgICBoZWlnaHQ6IDQuNXJlbTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcXG4gICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIHdpZHRoOiA4cmVtO1xcbiAgICAgICAgICAgIGhlaWdodDogOHJlbTtcXG4gICAgICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9pY29ucy9zdGFyLnN2Zyk7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgfVxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgNnJlbTtcXG4gICAgICAgICAgICB3aWR0aDogNnJlbTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDZyZW07XFxuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRyZW0pO1xcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLmJhZGdlX190ZXh0XFxuXFxuICAgICZfX3RleHQge1xcbiAgICB9XFxufVxcblwiLG51bGxdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9ncm91cC1jc3MtbWVkaWEtcXVlcmllcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL2dyb3VwLWNzcy1tZWRpYS1xdWVyaWVzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9zY3NzL3N0eWxlLnNjc3MnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZvcm1zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBpbXBvcnQgKiBhcyBmb3JtcyBmcm9tICcuL3V0aWxzL2Zvcm1zLmpzJztcblxuLy8gZm9ybSBmaWVsZHNcbi8vIGZvcm1zLmZvcm1GaWVsZHNJbml0KHsgdmlld1Bhc3M6IGZhbHNlIH0pO1xuXG4vLyBmb3JtIHN1Ym1pdFxuLy8gZm9ybXMuZm9ybVN1Ym1pdCgpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHV0aWxzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB0YWJzXG4vLyBpbXBvcnQgJy4vdXRpbHMvdGFicy5qcyc7XG5cbi8vIGFjY29yZGlvblxuLy8gaW1wb3J0ICcuL3V0aWxzL2FjY29yZGlvbi5qcyc7XG5cbi8vIHNlbGVjdFxuaW1wb3J0ICcuL3V0aWxzL3NlbGVjdC5qcyc7XG5cbi8vIG1vZGFsc1xuLy8gaW1wb3J0ICcuL3V0aWxzL21vZGFscy5qcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbGlicyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGR5bmFtaWMgZG9tXG4vLyBpbXBvcnQgJy4vbGlicy9kZC5qcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCAnLi9kZXYvdnptc2sxLmpzJztcbmltcG9ydCAnLi9kZXYvbWFya3VzRE0uanMnO1xuaW1wb3J0ICcuL2Rldi91a2lrMC5qcyc7XG5pbXBvcnQgJy4vZGV2L2tpZTZlci5qcyc7XG4iXSwibmFtZXMiOlsiX3NsaWRlVXAiLCJfc2xpZGVEb3duIiwiX3NsaWRlVG9nZ2xlIiwiU2VsZWN0IiwiY29uc3RydWN0b3IiLCJfdGhpcyIsImNsYXNzZXMiLCJzZWwiLCJib2R5IiwibGFiZWwiLCJ0aXRsZSIsInZhbCIsImNvbnRlbnQiLCJvcHRpb25zIiwib3B0aW9uIiwic2Nyb2xsIiwiZ3JvdXAiLCJpbnAiLCJhc3NldCIsInR4dCIsImhpbnQiLCJhY3RpdmUiLCJmb2N1c2VkIiwib3BlbmVkIiwiZmlsbGVkIiwic2VsZWN0ZWQiLCJkaXNhYmxlZCIsImxpc3QiLCJlcnJvciIsIm11bHRpcGxlIiwiY2hlY2tib3giLCJzZWxlY3RMaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiaW5pdCIsImZvckVhY2giLCJzZWxlY3QiLCJpbmRleCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiaW5pdFNlbEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInNldEFjdGlvbnMiLCJiaW5kIiwicmVsYXRpdmVTZWwiLCJjcmVhdGVFbGVtZW50IiwiYWRkIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwiaGlkZGVuIiwiZGF0YXNldCIsInNlbElkIiwiZ2V0UGxhY2Vob2xkZXIiLCJvcHRQbGFjZWhvbGRlciIsInZhbHVlIiwic2hvdyIsInNlbFRpdGxlIiwiZ2V0U2VsZWN0IiwidHdpblNlbCIsImluc2VydEFkamFjZW50SFRNTCIsInRleHQiLCJzcGVlZCIsImJ1aWxkIiwiaW5pdFNlbGVjdGlvbnMiLCJwYXJlbnRFbGVtZW50Iiwic2VsT2JqIiwic2V0VmFsdWUiLCJzZXRPcHRpb25zIiwic2VsQWRkb25DbGFzcyIsInJlbW92ZSIsImhhc0F0dHJpYnV0ZSIsImRpc2FibGVTZWxlY3QiLCJzZXRTZWFyY2hBY3Rpb25zIiwic2V0QWN0aW9uIiwic2VsSGludCIsImNsb3Nlc3QiLCJhZGRFcnIiLCJyZW1vdmVFcnIiLCJzZWxCb2R5IiwiZ2V0VmFsdWUiLCJyZWxhdGl2ZVNlbE9wdGlvbnMiLCJpbm5lckhUTUwiLCJnZXRPcHRpb25zIiwicXVlcnlTZWxlY3RvciIsInRhcmdldCIsInR5cGUiLCJnZXRDbGFzcyIsInNlbGVjdElkIiwic2VsTGlzdCIsInNlbE9wdGlvbiIsIm9wdFZhbCIsInNldE9wdGlvbkFjdGlvbiIsImNvZGUiLCJjbG9zZUdyb3VwIiwic2VsT3B0aW9ucyIsInNlbGVjdE9uZUdyb3VwIiwidG9nZ2xlIiwic2VsR3JvdXAiLCJzZWxlY3Rpb25zIiwic2VsZWN0aW9uIiwiY2xvc2VJdGVtIiwicmVsYXRpdmVTZWxlY3Rpb25zIiwiZ2V0RGF0YSIsImVsZW1lbnRzIiwicmVsYXRpdmVTZWxlY3Rpb24iLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0d2luU2VsZWN0aW9ucyIsInR3aW5TZWxlY3Rpb24iLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwib3B0IiwidGV4dENvbnRlbnQiLCJzZXRTZWxlY3Rpb25zIiwic2VsSW5wdXQiLCJ0b1VwcGVyQ2FzZSIsImluZGV4T2YiLCJzZXRTdWJ0aXRsZSIsInNlbEVycm9yIiwicmVtb3ZlQ2hpbGQiLCJjc3NDbGFzcyIsImF0dHIiLCJhdHRyQ2xhc3MiLCJ0aXRsZVZhbCIsImh0bWwiLCJzZWxMYWJlbCIsInZhbHVlcyIsIm1hcCIsImdldENvbnRlbnQiLCJqb2luIiwiY3VzdG9tQ2xhc3MiLCJvcHRDbGFzcyIsInNlbFNjcm9sbCIsInNlbFNjcm9sbEhlaWdodCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJBcnJheSIsImZyb20iLCJzZWxPcHRpb25zSFRNTCIsImZpbHRlciIsImdldE9wdGlvbiIsInNob3dTZWxlY3Rpb24iLCJvcHRpb25DbGFzcyIsIm9wdGlvbkxpbmsiLCJvcHRpb25MaW5rVGFyZ2V0Iiwib3B0aW9uSFRNTCIsIm9wdGlvbkRhdGEiLCJvcHRBc3NldCIsIm9wdGlvbkRhdGFIVE1MIiwib3B0aW9uQ29udGVudEhUTUwiLCJwbGFjZWhvbGRlciIsImZpbmQiLCJzdWJ0aXRsZSIsInB1c2giLCJzZWxlY3RlZEluZGV4IiwidGVtcEJ1dHRvbiIsImFwcGVuZCIsImNsaWNrIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwic2V0SGFzaCIsImhhc2giLCJsb2NhdGlvbiIsImhyZWYiLCJzcGxpdCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJnZXRIYXNoIiwicmVwbGFjZSIsImJvZHlMb2NrU3RhdHVzIiwiYm9keUxvY2tUb2dnbGUiLCJkZWxheSIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImRvY3VtZW50RWxlbWVudCIsImJvZHlVbmxvY2siLCJib2R5TG9jayIsInNldFRpbWVvdXQiLCJkYXRhTWVkaWFRdWVyaWVzIiwiYXJyYXkiLCJkYXRhU2V0VmFsdWUiLCJtZWRpYSIsIml0ZW0iLCJzZWxmIiwiYnJlYWtwb2ludHNBcnJheSIsInBhcmFtcyIsImJyZWFrcG9pbnQiLCJwYXJhbXNBcnJheSIsInRyaW0iLCJtZFF1ZXJpZXMiLCJ1bmlxdWVBcnJheSIsIm1kUXVlcmllc0FycmF5IiwibWVkaWFCcmVha3BvaW50IiwibWVkaWFUeXBlIiwibWF0Y2hNZWRpYSIsIml0ZW1zQXJyYXkiLCJkdXJhdGlvbiIsInNob3dtb3JlIiwic3R5bGUiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvdmVyZmxvdyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwicmVtb3ZlUHJvcGVydHkiLCJyZW1Ub1B4IiwicmVtVmFsdWUiLCJodG1sRm9udFNpemUiLCJwYXJzZUZsb2F0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImZvbnRTaXplIiwicHhWYWx1ZSIsIk1hdGgiLCJyb3VuZCIsInJlbW92ZUNsYXNzZXMiLCJjbGFzc05hbWUiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==