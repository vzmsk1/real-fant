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

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.header__nav-item-heading');
  items.forEach(item => {
    item.addEventListener('click', event => {
      item.classList.toggle('--active');
    });
  });
});

/***/ }),

/***/ "./src/js/dev/vzmsk1.js":
/*!******************************!*\
  !*** ./src/js/dev/vzmsk1.js ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/libs/dd.js":
/*!***************************!*\
  !*** ./src/js/libs/dd.js ***!
  \***************************/
/***/ (() => {

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

/***/ }),

/***/ "./src/js/utils/hamburger.js":
/*!***********************************!*\
  !*** ./src/js/utils/hamburger.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils/utils.js");

const menuInit = () => {
  if (document.querySelector('.hamburger')) {
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', function (e) {
      if (_utils__WEBPACK_IMPORTED_MODULE_0__.bodyLockStatus) {
        document.documentElement.classList.toggle('_menu-opened');
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.bodyLockToggle)();
      }
    });
  }
};
menuInit();

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
  width: 160rem;
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

.header {
  padding-top: 2.3rem;
  position: relative;
  z-index: 100;
}
.header__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.header__burger {
  display: none;
}
.header__logo {
  max-width: 17.8rem;
  width: 100%;
  height: 5.7rem;
  display: block;
}
.header__logo img {
  height: 100%;
}
.header__menu-contacts {
  display: none;
}
.header__nav-list {
  display: flex;
  align-items: center;
  gap: 6.3rem;
}
.header__nav-item-icon {
  display: none;
}
.header__nav-item-dropdown {
  display: none;
}
.header__nav-item-link {
  display: block;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3rem;
  transition: 0.3s color ease;
}
.header__nav-item-link:hover {
  color: rgba(255, 255, 255, 0.69);
}
.header__contacts {
  display: flex;
  align-items: center;
  gap: 1.7rem;
}
.header__contacts:hover .header__contacts-title {
  color: rgba(255, 255, 255, 0.69);
}
.header__contacts:hover svg path {
  stroke: rgba(255, 255, 255, 0.69);
}
.header__contacts-title {
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3rem;
  transition: 0.3s color ease;
}
.header__contacts svg {
  max-width: 2.4rem;
  width: 100%;
  height: 2.4rem;
}
.header__contacts svg path {
  transition: 0.3s stroke ease;
}
.header .hamburger {
  position: relative;
  z-index: 2;
  width: 4.6rem;
  height: 3.6rem;
  cursor: pointer;
}
.header .hamburger span, .header .hamburger::before, .header .hamburger::after {
  content: "";
  position: absolute;
  right: 0;
  width: 100%;
  height: 2px;
  background-color: #ffffff;
  transition: top 0.3s ease, width 0.3s ease, transform 0.3s ease, bottom 0.3s ease, background-color 0.3s ease;
  border-radius: 0.2rem;
}
.header .hamburger::before {
  top: 0;
}
.header .hamburger::after {
  bottom: 0;
}
.header .hamburger span {
  top: calc(50% - 1px);
}
._menu-opened .header .hamburger span {
  width: 0;
}
._menu-opened .header .hamburger::before {
  top: calc(50% - 1px);
  transform: rotate(-45deg);
}
._menu-opened .header .hamburger::after {
  bottom: calc(50% - 1px);
  transform: rotate(45deg);
}
._menu-opened .header .hamburger span, ._menu-opened .header .hamburger::before, ._menu-opened .header .hamburger::after {
  background-color: #ffffff;
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
.btn__arrow-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 4rem;
  width: 4.4rem;
  height: 4.4rem;
  padding: 1rem;
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
.intro {
  position: relative;
  margin-top: -8rem;
  height: 108rem;
  margin-bottom: 10.5rem;
}
.intro .container {
  display: flex;
  height: 100%;
}
.intro::after {
  content: "";
  position: absolute;
  content: "";
  position: absolute;
  background: linear-gradient(0deg, #101653 0%, rgba(23, 15, 67, 0) 63.45%);
  z-index: -1;
  inset: 0;
  bottom: -0.5rem;
}
.intro__content {
  margin-top: auto;
  padding-bottom: 11.7rem;
}
.intro__title {
  line-height: 110%;
  margin-bottom: 5.3rem;
}
.intro__poster-image {
  position: absolute;
  inset: 0;
  z-index: -1;
}
.intro__poster-image img {
  height: 100%;
  object-fit: cover;
}
.intro__request {
  display: flex;
  align-items: center;
  gap: 3.7rem;
  margin-bottom: 5.9rem;
}
.intro__request-projects {
  display: flex;
  align-items: center;
  gap: 1.8rem;
  position: relative;
}
.intro__request-projects::after {
  content: "";
  position: absolute;
  left: -2rem;
  height: 100%;
  width: 0.2rem;
  background: rgba(255, 255, 255, 0.2);
}
.intro__request-projects-counter {
  width: 5.8rem;
  height: 5.8rem;
  border-radius: 50%;
  background: #29ff7f;
}
.intro__request-projects-counter span {
  color: #1a1a1a;
  font-family: "Space Age Cyrillic";
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 400;
  display: block;
  margin-top: 1.6rem;
  text-align: center;
}
.intro__request-projects-title {
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.intro__articles {
  display: grid;
  grid-template-columns: repeat(3, minmax(51rem, 1fr));
  gap: 3.7rem;
}
.intro__article {
  border-radius: 3rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2rem);
  position: relative;
}
.intro__article-link {
  padding: 1.1rem 6rem 1.1rem 4.1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}
.intro__article-link:hover {
  color: #29ff7f;
}
.intro__article-link-title {
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 15rem;
  display: block;
  transition: 0.3s color ease;
}
.intro__article-link-image {
  max-width: 20.2rem;
  width: 100%;
  height: 20.2rem;
  border-radius: 50%;
}
.intro__article-link-image img {
  border-radius: inherit;
  height: 100%;
}
.intro__article-link-icon {
  position: absolute;
  top: 1rem;
  right: 1.3rem;
  padding: 0.6rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2rem);
  max-width: 4.6rem;
  width: 100%;
  height: 4.6rem;
  transition: 0.3s background ease;
}
.intro__article-link-icon img {
  height: 100%;
}

.promotion {
  margin-bottom: 31rem;
}
.promotion__content {
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem 0 2.9rem;
  position: relative;
}
.promotion__content::after {
  content: "";
  position: absolute;
  content: "3";
  -webkit-text-stroke-width: 0.5rem;
  -webkit-text-stroke-color: rgba(41, 255, 127, 0.1);
  font-family: "Space Age Cyrillic";
  font-size: 70rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #101653;
  left: 50%;
  transform: translateX(-50%);
  top: -34rem;
  z-index: -1;
}
.promotion__block {
  display: flex;
  flex-direction: column;
}
.promotion__block:nth-child(even) {
  text-align: end;
}
.promotion__block:nth-child(even) span {
  display: block;
  margin-right: 34rem;
}
.promotion__subtitle {
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.marketing__image {
  position: absolute;
  left: -15.2rem;
  top: -12rem;
  max-width: 74rem;
  width: 100%;
}
.marketing__content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.marketing__title {
  margin-bottom: 4.8rem;
}
.marketing__info {
  max-width: 51rem;
  width: 100%;
  margin-left: 21rem;
}
.marketing__info-row {
  display: flex;
  align-items: flex-start;
  gap: 4.1rem;
  justify-content: space-between;
  margin-bottom: 5rem;
}
.marketing__info-list {
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
  width: 100%;
}
.marketing__info-item {
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3rem;
  position: relative;
}
.marketing__info-item::after {
  content: "";
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  top: 1.5rem;
  left: -2rem;
  border-radius: 50%;
  background: #ffffff;
}
.marketing__info-description {
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  max-width: 21.7rem;
}

figure {
  margin: 0;
}

body::after {
  content: "";
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2rem);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.8s ease 0s;
}
._menu-opened body::after {
  opacity: 1;
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
    padding: 0 3.2rem;
    width: 100%;
  }
  .header {
    padding-top: 3.6rem;
  }
  .header__content {
    justify-content: initial;
    gap: 16rem;
    transition: 0.3s gap ease;
  }
  ._menu-opened .header__content {
    gap: 11.6rem;
  }
  ._menu-opened .header__content::after {
    opacity: 1;
  }
  .header__burger {
    display: block;
  }
  .header__logo {
    max-width: 27rem;
    width: 100%;
    height: 8.6rem;
    position: relative;
    z-index: 2;
  }
  .header__menu {
    position: fixed;
    top: 0;
    left: 0;
    max-width: calc(100% - 7.4rem);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    opacity: 0;
    transform: translateX(-100%);
    transition: transform 0.3s ease, opacity 0.3s ease;
    background: #101653;
    padding: 21.4rem 5.2rem 8.8rem 7.8rem;
  }
  ._menu-opened .header__menu {
    opacity: 1;
    transform: translateX(0);
  }
  .header__menu-contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: auto;
    margin-right: 4rem;
  }
  .header__menu-contacts-item {
    margin-bottom: 2.4rem;
    color: rgba(255, 255, 255, 0.67);
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3rem;
  }
  .header__menu-contacts-button {
    margin-top: 2rem;
    border: 0.4rem solid rgba(255, 255, 255, 0.78);
    border-radius: 0rem 24rem 24rem 24rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1rem 1rem 1rem 4rem;
    transition: 0.3s border ease;
  }
  .header__menu-contacts-button:active {
    border-color: rgba(255, 255, 255, 0.5);
  }
  .header__menu-contacts-button:active span {
    color: rgba(255, 255, 255, 0.69);
  }
  .header__menu-contacts-button:active .header__menu-contacts-button-icon {
    background: rgba(255, 255, 255, 0.69);
  }
  .header__menu-contacts-button span {
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    transition: 0.3s color ease;
  }
  .header__menu-contacts-button-icon {
    padding: 1.4rem;
    border-radius: 50%;
    background: #ffffff;
    max-width: 6.8rem;
    width: 100%;
    height: 6.8rem;
  }
  .header__menu-contacts-button-icon img {
    width: 100%;
    height: 100%;
  }
  .header__nav {
    max-height: 101rem;
    overflow-x: auto;
    height: 100%;
  }
  .header__nav-list {
    flex-direction: column;
    align-items: flex-start;
    gap: 7.2rem;
  }
  .header__nav-item {
    width: 100%;
  }
  .header__nav-item.--active a {
    color: #29ff7f;
  }
  .header__nav-item-heading {
    width: 98%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  .header__nav-item-heading.--active .header__nav-item-icon {
    transform: rotate(-180deg);
  }
  .header__nav-item-heading.--active ~ .header__nav-item-dropdown {
    grid-template-rows: 1fr;
  }
  .header__nav-item-heading.--active ~ .header__nav-item-dropdown .header__nav-item-dropdown-wrapper {
    margin-top: 4rem;
  }
  .header__nav-item-heading a {
    pointer-events: none;
  }
  .header__nav-item-icon {
    display: block;
    transition: 0.3s transform ease;
  }
  .header__nav-item-dropdown {
    display: grid;
    grid-template-rows: 0fr;
    transition: 0.3s grid-template-rows ease;
  }
  .header__nav-item-dropdown-wrapper {
    overflow: hidden;
    transition: 0.3s margin ease;
    margin-top: 0;
    padding-left: 4.8rem;
  }
  .header__nav-item-dropdown-item {
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3rem;
  }
  .header__nav-item-dropdown-item:not(:first-child) {
    margin-top: 5rem;
  }
  .header__nav-item-link {
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 3rem;
  }
  .header__contacts {
    position: relative;
    z-index: 2;
  }
  .header__contacts-title {
    display: none;
  }
  .header__contacts svg {
    max-width: 4.8rem;
    width: 100%;
    height: 4.8rem;
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
    padding: 1rem 1rem 1rem 4rem;
    column-gap: 3.2rem;
    border: 0.4rem solid rgba(255, 255, 255, 0.78);
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
  .intro {
    height: 164rem;
    margin-bottom: 15.5rem;
  }
  .intro {
    margin-top: -16rem;
  }
  .intro__title {
    line-height: 85%;
    margin-bottom: 7.3rem;
  }
  .intro__title span {
    color: #29ff7f;
  }
  .intro__poster-image img {
    object-position: -140rem;
  }
  .intro__request {
    margin-bottom: 17rem;
    gap: 5rem;
  }
  .intro__request-projects::after {
    left: -3rem;
    width: 0.4rem;
  }
  .intro__request-projects {
    gap: 2.4rem;
  }
  .intro__request-projects-counter {
    width: 8.8rem;
    height: 8.8rem;
  }
  .intro__request-projects-counter span {
    font-size: 2.48rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.7735rem;
    margin-top: 3.5rem;
  }
  .intro__request-projects-title {
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .intro__articles {
    grid-template-columns: repeat(3, minmax(15.2rem, 1fr));
    gap: 2.8rem;
  }
  .intro__article {
    border-radius: 2rem;
  }
  .intro__article-link {
    flex-direction: column;
    gap: 2.6rem;
    padding: 11.5rem 2rem 3rem;
  }
  .intro__article-link-title {
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    max-width: 100%;
  }
  .intro__article-link-image {
    position: absolute;
    max-width: 16.2rem;
    width: 100%;
    height: 16.2rem;
    top: -6rem;
    left: 50%;
    transform: translateX(-50%);
  }
  .intro__article-link-icon {
    position: static;
    padding: 0.8rem;
    max-width: 6rem;
    width: 100%;
    height: 6rem;
  }
  .promotion__content {
    padding: 0;
    gap: 1rem;
  }
  .promotion__title {
    letter-spacing: 0.5rem;
  }
  .promotion__block {
    flex-direction: column-reverse;
    gap: 1rem;
  }
  .promotion__block:last-child .promotion__title {
    margin-left: auto;
    margin-right: 0 !important;
  }
  .promotion__block:nth-child(even) {
    text-align: start;
  }
  .promotion__block:nth-child(even) span {
    margin-right: auto;
  }
  .promotion__block:nth-child(odd) {
    text-align: end;
  }
  .promotion__block:nth-child(odd) .promotion__title {
    margin-right: 5rem;
  }
  .promotion__subtitle {
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .marketing__image {
    position: static;
    max-width: 68rem;
  }
  .marketing__content {
    flex-direction: column;
  }
  .marketing__title {
    margin-bottom: 4.4rem;
    text-align: center;
  }
  .marketing__info {
    max-width: 100%;
    margin-left: 0;
  }
  .marketing__info-row {
    gap: 3rem;
  }
  .marketing__info-list {
    gap: 2rem;
  }
  .marketing__info-item {
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2rem;
  }
  .marketing__info-item::after {
    top: 0.5rem;
    width: 1rem;
    height: 1rem;
  }
  .marketing__info-description {
    max-width: 33.2rem;
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
}
@media (any-hover: hover) {
  .select__option:hover:not(.select__option:hover.select__subtitle) {
    cursor: pointer;
    color: #29ff7f;
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/fonts.scss","webpack://./src/scss/style.scss","webpack://./src/scss/set.scss","webpack://./src/scss/sections/header.scss","webpack://./src/scss/mixins.scss","webpack://./src/ui/styles/_typo.scss","webpack://./src/ui/styles/_button.scss","webpack://./src/ui/styles/_input.scss","webpack://./src/ui/styles/_select.scss","webpack://./src/ui/styles/_badge.scss","webpack://./src/scss/sections/_intro.scss","webpack://./src/scss/sections/_promotion.scss","webpack://./src/scss/sections/_marketing.scss","webpack://./src/scss/dev/ukik0.scss","<no source>"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: 'Euclid Circular A';\r\n    font-weight: 300;\r\n    src: url('./assets/fonts/Euclid-Circular-A-Light.woff2') format('woff2');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Euclid Circular A';\r\n    font-weight: 400;\r\n    src: url('./assets/fonts/Euclid-Circular-A-Regular.woff2') format('woff2');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Euclid Circular A';\r\n    font-weight: 500;\r\n    src: url('./assets/fonts/Euclid-Circular-A-Medium.woff2') format('woff2');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Euclid Circular A';\r\n    font-weight: 600;\r\n    src: url('./assets/fonts/Euclid-Circular-A-SemiBold.woff2') format('woff2');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Euclid Circular A';\r\n    font-weight: 700;\r\n    src: url('./assets/fonts/Euclid-Circular-A-Bold.woff2') format('woff2');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Space Age';\r\n    font-weight: 400;\r\n    src: url('./assets/fonts/Space-Age.woff2') format('woff2');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Space Age Cyrillic';\r\n    font-weight: 400;\r\n    src: url('./assets/fonts/Space-Age-Cyrillic.woff2') format('woff2');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'EuropeExtendedC';\r\n    font-weight: 700;\r\n    src: url('./assets/fonts/Europe-Extended-C.woff2') format('woff2');\r\n}\r\n","// --------------------------------- mixins ---------------------------------\r\n\r\n@import './mixins';\r\n\r\n// -------------------------------- variables -------------------------------\r\n\r\n// fonts\r\n$spaceAge: 'Space Age';\r\n$spaceAgeCyr: 'Space Age Cyrillic';\r\n$EuropeE: 'EuropeExtendedC';\r\n$ECA: 'Euclid Circular A';\r\n\r\n// colors\r\n$white: #ffffff;\r\n$white-secondary: rgba(255, 255, 255, 0.69);\r\n$black: #000000;\r\n$darkPurple: #11073b;\r\n$darkPurple2: #140a3f;\r\n$green: #29ff7f;\r\n$blue: #182678;\r\n$bgColor: #101653;\r\n\r\n// ---------------------------------- fonts ---------------------------------\r\n\r\n// local fonts\r\n@import './fonts';\r\n\r\n// ------------------------------- base styles ------------------------------\r\n\r\n// base scss file\r\n@import './set';\r\n\r\n// html\r\nhtml.lock,\r\nhtml.lock body {\r\n    overflow: hidden;\r\n    touch-action: none;\r\n}\r\nhtml,\r\nbody {\r\n    overflow-x: hidden;\r\n}\r\n\r\n// main\r\nmain {\r\n    position: relative;\r\n    flex: 1 1 auto;\r\n}\r\n\r\n.wrapper {\r\n    margin: 0 auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 1920px;\r\n    height: 100%;\r\n}\r\n\r\n// --------------------------------------------------------------------------\r\n\r\n// header / footer\r\n@import './sections/header';\r\n@import './sections/footer';\r\n\r\n// ui\r\n@import '../ui/styles/ui.scss';\r\n\r\n// --------------------------------------------------------------------------\r\n\r\n@import './dev/vzmsk1.scss';\r\n@import './dev/markusDM.scss';\r\n@import './dev/ukik0.scss';\r\n@import './dev/kie6er.scss';\r\n","*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\nhtml {\r\n    font-family: $ECA; // шрифт по умолчанию по сайту\r\n    font-size: 0.5208335vw; // на разрешении 1920 0.520835vw === 10px\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    -webkit-animation: bugfix infinite 1s;\r\n    line-height: 1.2;\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    -webkit-animation: bugfix infinite 1s;\r\n    height: 100%;\r\n    line-height: 1.2;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: 1.8rem;\r\n    color: $white; // цвет по умолчанию текста по сайту\r\n    background-color: $bgColor;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n    -webkit-animation: bugfix infinite 1s;\r\n    line-height: inherit;\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: transparent;\r\n    border: none;\r\n    color: inherit;\r\n}\r\na {\r\n    color: unset;\r\n}\r\na,\r\na:hover {\r\n    text-decoration: none;\r\n}\r\n\r\nbutton,\r\ninput,\r\na,\r\ntextarea {\r\n    outline: none;\r\n    cursor: pointer;\r\n    font: inherit;\r\n    &:focus {\r\n        outline: none;\r\n    }\r\n    &:active {\r\n        outline: none;\r\n    }\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    font: inherit;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\np {\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n}\r\n\r\nimg {\r\n    width: 100%;\r\n    height: auto;\r\n    display: block;\r\n}\r\n\r\nbutton {\r\n    border: none;\r\n    color: inherit;\r\n    font: inherit;\r\n    text-align: inherit;\r\n    padding: 0;\r\n    background-color: transparent;\r\n}\r\nul {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nul li {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.container {\r\n    width: 160rem;\r\n    margin: 0 auto;\r\n}\r\n\r\ninput[type='number']::-webkit-inner-spin-button,\r\ninput[type='number']::-webkit-outer-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n\r\ninput[type='number'] {\r\n    -moz-appearance: textfield;\r\n}\r\n\r\nsvg,\r\nimg {\r\n    width: 100%;\r\n    height: auto;\r\n    object-fit: contain;\r\n}\r\n\r\n@media (min-width: 1920px) {\r\n    html {\r\n        font-size: 10px;\r\n    }\r\n}\r\n\r\n@media (max-width: 48em) {\r\n    html {\r\n        font-size: 5px;\r\n        font-size: 1.5625vw;\r\n        font-size: calc((100 / 375) * 5vw); // где 375 это ширина моб версии макета\r\n        -webkit-text-size-adjust: none;\r\n    }\r\n\r\n    body {\r\n        -webkit-text-size-adjust: none;\r\n        font-size: 2.8rem;\r\n    }\r\n\r\n    .container {\r\n        padding: 0 3.2rem; // в моб версии отступ от края задаем для всех контейнеров, а там где не нужно можем точечно убрать\r\n        width: 100%;\r\n    }\r\n}\r\n",".header {\n    padding-top: 2.3rem;\n    position: relative;\n    z-index: 100;\n\n    @include small-tablet {\n        padding-top: 3.6rem;\n    }\n\n    &__content {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        width: 100%;\n\n        @include small-tablet {\n            justify-content: initial;\n            gap: 16rem;\n            transition: 0.3s gap ease;\n\n            ._menu-opened & {\n                &::after {\n                    opacity: 1;\n                }\n\n                gap: 11.6rem;\n            }\n        }\n    }\n\n    &__burger {\n        display: none;\n\n        @include small-tablet {\n            display: block;\n        }\n    }\n\n    &__logo {\n        @include sizes(17.8rem, 5.7rem);\n        display: block;\n\n        @include small-tablet {\n            @include sizes(27rem, 8.6rem);\n            position: relative;\n            z-index: 2;\n        }\n\n        img {\n            height: 100%;\n        }\n    }\n\n    &__menu {\n        @include small-tablet {\n            position: fixed;\n            top: 0;\n            left: 0;\n            max-width: calc(100% - 7.4rem);\n            width: 100%;\n            height: 100%;\n            display: flex;\n            flex-direction: column;\n            opacity: 0;\n            transform: translateX(-100%);\n            transition:\n                transform 0.3s ease,\n                opacity 0.3s ease;\n            background: $bgColor;\n            padding: 21.4rem 5.2rem 8.8rem 7.8rem;\n\n            ._menu-opened & {\n                opacity: 1;\n                transform: translateX(0);\n            }\n        }\n\n        &-contacts {\n            display: none;\n\n            @include small-tablet {\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                margin-top: auto;\n                margin-right: 4rem;\n\n                &-item {\n                    margin-bottom: 2.4rem;\n                    color: rgba(255, 255, 255, 0.67);\n                    font-size: 3.2rem;\n                    font-style: normal;\n                    font-weight: 400;\n                    line-height: 3rem;\n                }\n\n                &-button {\n                    margin-top: 2rem;\n                    border: 0.4rem solid rgba(255, 255, 255, 0.78);\n                    border-radius: 0rem 24rem 24rem 24rem;\n                    display: flex;\n                    align-items: center;\n                    gap: 2rem;\n                    padding: 1rem 1rem 1rem 4rem;\n                    transition: 0.3s border ease;\n\n                    &:active {\n                        border-color: rgba(255, 255, 255, 0.5);\n\n                        span {\n                            color: $white-secondary;\n                        }\n\n                        .header__menu-contacts-button-icon {\n                            background: $white-secondary;\n                        }\n                    }\n\n                    span {\n                        font-size: 2.8rem;\n                        font-style: normal;\n                        font-weight: 400;\n                        line-height: normal;\n                        transition: 0.3s color ease;\n                    }\n\n                    &-icon {\n                        padding: 1.4rem;\n                        border-radius: 50%;\n                        background: $white;\n                        @include sizes(6.8rem, 6.8rem);\n\n                        img {\n                            width: 100%;\n                            height: 100%;\n                        }\n                    }\n                }\n            }\n        }\n    }\n\n    &__nav {\n        @include small-tablet {\n            max-height: 101rem;\n            overflow-x: auto;\n            height: 100%;\n        }\n\n        &-list {\n            display: flex;\n            align-items: center;\n            gap: 6.3rem;\n\n            @include small-tablet {\n                flex-direction: column;\n                align-items: flex-start;\n                gap: 7.2rem;\n            }\n        }\n\n        &-item {\n            @include small-tablet {\n                width: 100%;\n\n                &.--active {\n                    a {\n                        color: $green;\n                    }\n                }\n            }\n\n            &-heading {\n                @include small-tablet {\n                    width: 98%;\n                    display: flex;\n                    align-items: center;\n                    justify-content: space-between;\n                    position: relative;\n\n                    &.--active {\n                        .header__nav-item-icon {\n                            transform: rotate(-180deg);\n                        }\n\n                        ~ .header__nav-item-dropdown {\n                            grid-template-rows: 1fr;\n\n                            .header__nav-item-dropdown-wrapper {\n                                margin-top: 4rem;\n                            }\n                        }\n                    }\n\n                    a {\n                        pointer-events: none;\n                    }\n                }\n            }\n\n            &-icon {\n                display: none;\n\n                @include small-tablet {\n                    display: block;\n                    transition: 0.3s transform ease;\n                }\n            }\n\n            &-dropdown {\n                display: none;\n\n                @include small-tablet {\n                    display: grid;\n                    grid-template-rows: 0fr;\n                    transition: 0.3s grid-template-rows ease;\n                }\n\n                &-wrapper {\n                    @include small-tablet {\n                        overflow: hidden;\n                        transition: 0.3s margin ease;\n                        margin-top: 0;\n                        padding-left: 4.8rem;\n                    }\n                }\n\n                &-item {\n                    @include small-tablet {\n                        font-size: 3.2rem;\n                        font-style: normal;\n                        font-weight: 400;\n                        line-height: 3rem;\n\n                        &:not(:first-child) {\n                            margin-top: 5rem;\n                        }\n                    }\n                }\n            }\n\n            &-link {\n                display: block;\n                font-size: 1.8rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: 3rem;\n                transition: 0.3s color ease;\n\n                &:hover {\n                    color: $white-secondary;\n                }\n\n                @include small-tablet {\n                    font-size: 3.2rem;\n                    font-style: normal;\n                    font-weight: 500;\n                    line-height: 3rem;\n                }\n            }\n        }\n    }\n\n    &__contacts {\n        display: flex;\n        align-items: center;\n        gap: 1.7rem;\n\n        @include small-tablet {\n            position: relative;\n            z-index: 2;\n        }\n\n        &:hover {\n            .header__contacts-title {\n                color: $white-secondary;\n            }\n\n            svg {\n                path {\n                    stroke: $white-secondary;\n                }\n            }\n        }\n\n        &-title {\n            font-size: 1.8rem;\n            font-style: normal;\n            font-weight: 700;\n            line-height: 3rem;\n            transition: 0.3s color ease;\n\n            @include small-tablet {\n                display: none;\n            }\n        }\n\n        svg {\n            @include sizes(2.4rem, 2.4rem);\n\n            @include small-tablet {\n                @include sizes(4.8rem, 4.8rem);\n            }\n\n            path {\n                transition: 0.3s stroke ease;\n            }\n        }\n    }\n\n    .hamburger {\n        position: relative;\n        z-index: 2;\n        width: 4.6rem;\n        height: 3.6rem;\n        cursor: pointer;\n\n        span,\n        &::before,\n        &::after {\n            @include pseudo {\n                right: 0;\n                width: 100%;\n                height: 2px;\n                background-color: $white;\n                transition:\n                    top 0.3s ease,\n                    width 0.3s ease,\n                    transform 0.3s ease,\n                    bottom 0.3s ease,\n                    background-color 0.3s ease;\n                border-radius: 0.2rem;\n            }\n        }\n        &::before {\n            top: 0;\n        }\n        &::after {\n            bottom: 0;\n        }\n        span {\n            top: calc(50% - 1px);\n        }\n        ._menu-opened & {\n            span {\n                width: 0;\n            }\n            &::before {\n                top: calc(50% - 1px);\n                transform: rotate(-45deg);\n            }\n            &::after {\n                bottom: calc(50% - 1px);\n                transform: rotate(45deg);\n            }\n            span,\n            &::before,\n            &::after {\n                background-color: $white;\n            }\n        }\n    }\n}\n","@mixin pseudo() {\n    content: '';\n    position: absolute;\n    @content;\n}\n\n@mixin small-tablet {\n    @media (max-width: 48em) {\n        @content;\n    }\n}\n\n@mixin sizes($width, $height) {\n    max-width: $width;\n    width: 100%;\n    height: $height;\n\n    @content;\n}\n\n@mixin item-dot() {\n    position: relative;\n\n    &::after {\n        @include pseudo {\n            width: 0.5rem;\n            height: 0.5rem;\n            top: 1.5rem;\n            left: -2rem;\n            border-radius: 50%;\n            background: #ffffff;\n\n            @include small-tablet {\n                top: 0.5rem;\n                width: 1rem;\n                height: 1rem;\n            }\n\n            @content;\n        }\n    }\n}\n",".title {\r\n    font-family: $spaceAge;\r\n    font-size: 9rem;\r\n\r\n    @media (max-width: 48em) {\r\n        font-size: 6rem;\r\n    }\r\n}\r\n\r\n.subtitle {\r\n    font-family: $spaceAge;\r\n    font-size: 3rem;\r\n    @media (max-width: 48em) {\r\n        font-size: 4rem;\r\n    }\r\n}\r\n\r\n.txt25 {\r\n    @media (min-width: 48em) {\r\n        font-size: 2.5rem;\r\n    }\r\n}\r\n\r\n.txt30 {\r\n    font-size: 3rem;\r\n    @media (max-width: 48em) {\r\n        font-size: 4rem;\r\n    }\r\n}\r\n\r\n.txt16 {\r\n    font-size: 1.6rem;\r\n    @media (max-width: 48em) {\r\n        font-size: 2rem;\r\n    }\r\n}\r\n\r\n.cyr {\r\n    font-family: $spaceAgeCyr;\r\n}\r\n",".btn {\n    padding: 0.6rem 0.6rem 0.6rem 2rem;\n    display: flex;\n    align-items: center;\n    column-gap: 2rem;\n    border: 2px solid rgba(255, 255, 255, 0.78);\n    border-radius: 0 4rem 4rem 4rem;\n\n    @media (max-width: 48em) {\n        padding: 1rem 1rem 1rem 4rem;\n        column-gap: 3.2rem;\n        border: 0.4rem solid rgba(255, 255, 255, 0.78);\n        border-radius: 0 8rem 8rem 8rem;\n    }\n\n    // .btn__text\n\n    &__text {\n    }\n\n    // .btn__arrow-wrap\n\n    &__arrow-wrap {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        flex: 0 0 4rem;\n        width: 4.4rem;\n        height: 4.4rem;\n        padding: 1rem;\n        border-radius: 50%;\n        background-color: $white;\n        @media (max-width: 48em) {\n            flex: 0 0 7rem;\n            width: 7rem;\n            height: 7rem;\n        }\n    }\n\n    // .btn__arrow-icon\n\n    &__arrow-icon {\n        width: 2.4rem;\n        object-fit: contain;\n        @media (max-width: 48em) {\n            width: 3.8rem;\n        }\n    }\n}\n","input[type='text'],\r\ninput[type='email'],\r\ninput[type='tel'],\r\ntextarea {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n}\r\ntextarea:focus,\r\ninput:focus {\r\n    outline: none;\r\n}\r\n\r\n.input {\r\n    position: relative;\r\n    padding: 4.6rem 2.7rem 2rem 2.7rem;\r\n    border-radius: 3rem;\r\n    background: rgba(255, 255, 255, 0.15);\r\n    backdrop-filter: blur(2rem);\r\n    &_textarea {\r\n        height: 25.5rem;\r\n        textarea {\r\n            padding: 0;\r\n            height: 100%;\r\n            resize: none;\r\n        }\r\n    }\r\n    @media (max-width: 48em) {\r\n        padding: 7rem 8rem 2.4rem 2.4rem;\r\n        border-radius: 4rem;\r\n        backdrop-filter: blur(4rem);\r\n        &_textarea {\r\n            height: 34.8rem;\r\n        }\r\n    }\r\n\r\n    // .input__field\r\n\r\n    &__field {\r\n        display: block;\r\n        width: 100%;\r\n        border-radius: 0 !important;\r\n        line-height: 1;\r\n        &::placeholder {\r\n            color: $white;\r\n        }\r\n    }\r\n\r\n    // .input__label\r\n\r\n    &__label {\r\n        position: absolute;\r\n        top: 1.8rem;\r\n        left: 2.7rem;\r\n        white-space: nowrap;\r\n        opacity: 0.5;\r\n        @media (max-width: 48em) {\r\n            top: 2.4rem;\r\n            left: 2.4rem;\r\n        }\r\n    }\r\n\r\n    &._form-focus {\r\n    }\r\n    &._form-error {\r\n    }\r\n}\r\n",".select {\r\n    position: relative;\r\n\r\n    // .select__body\r\n\r\n    &__body {\r\n        position: relative;\r\n    }\r\n\r\n    // .select__title\r\n\r\n    &__title {\r\n        position: relative;\r\n        z-index: 3;\r\n        width: 100%;\r\n        border-radius: 3rem;\r\n        background: rgba(255, 255, 255, 0.15);\r\n        backdrop-filter: blur(2rem);\r\n        cursor: pointer;\r\n        @media (max-width: 48em) {\r\n            border-radius: 4rem;\r\n            backdrop-filter: blur(4rem);\r\n        }\r\n    }\r\n\r\n    // .select__value\r\n\r\n    &__value {\r\n        padding: 1.3rem 1.3rem 1.3rem 2.7rem;\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        gap: 2rem;\r\n        height: 7.2rem;\r\n        width: 100%;\r\n\r\n        > * {\r\n            flex: 1 1 auto;\r\n        }\r\n\r\n        &::after {\r\n            content: '';\r\n            display: inline-flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            flex: 0 0 5rem;\r\n            width: 5rem;\r\n            height: 5rem;\r\n            border-radius: 50%;\r\n            border: 1px solid rgba(255, 255, 255, 0.6);\r\n            background-color: rgba(255, 255, 255, 0.15);\r\n            backdrop-filter: blur(2rem);\r\n            background-image: url(./assets/images/icons/arr-white.svg);\r\n            background-size: 2.4rem;\r\n            background-position: center;\r\n            background-repeat: no-repeat;\r\n            transition: transform 0.3s ease;\r\n        }\r\n        &._select-label {\r\n            &::before {\r\n                content: attr(data-sel-label);\r\n                ._select-filled & {\r\n                    display: none;\r\n                }\r\n            }\r\n        }\r\n        &._select-label::before,\r\n        .select__content {\r\n            max-width: 31.4rem;\r\n            overflow: hidden;\r\n            white-space: nowrap;\r\n            text-overflow: ellipsis;\r\n        }\r\n\r\n        @media (max-width: 48em) {\r\n            padding: 1.6rem;\r\n            gap: 4rem;\r\n            height: 10rem;\r\n            &::after {\r\n                flex: 0 0 6rem;\r\n                width: 6rem;\r\n                height: 6rem;\r\n                background-size: 3.2rem;\r\n                backdrop-filter: blur(2.4rem);\r\n            }\r\n        }\r\n    }\r\n\r\n    // .select__content\r\n\r\n    &__content {\r\n        // hide / show selected value\r\n        &:not(._select-filled &) {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    // .select__text\r\n\r\n    &__text {\r\n        flex: 1 1 auto;\r\n    }\r\n\r\n    // .select__input\r\n\r\n    &__input {\r\n        width: 100%;\r\n        height: 100%;\r\n        background-color: transparent;\r\n    }\r\n\r\n    // .select__options\r\n\r\n    &__options {\r\n        position: absolute;\r\n        z-index: 2;\r\n        top: calc(100% - 3rem);\r\n        left: 0;\r\n        padding: 4.6rem 2.7rem 2.4rem 2.7rem;\r\n        min-width: 100%;\r\n        border-radius: 0 0 3rem 3rem;\r\n        background: #36396c;\r\n        backdrop-filter: blur(2rem);\r\n        @media (max-width: 48em) {\r\n            top: calc(100% - 4rem);\r\n            padding: 8rem 4rem 4rem 4rem;\r\n            border-radius: 0 0 4rem 4rem;\r\n            backdrop-filter: blur(4rem);\r\n        }\r\n    }\r\n\r\n    // .select__scroll\r\n\r\n    &__scroll {\r\n        overflow-y: auto;\r\n        overflow-x: hidden;\r\n\r\n        // maximum height\r\n        max-height: 19rem;\r\n\r\n        // scrollbar styles\r\n        &.simplebar-scrollable-y {\r\n            .simplebar-track.simplebar-vertical {\r\n                right: 1.2rem;\r\n                width: 0.4rem;\r\n                border-radius: 0.8rem;\r\n                background-color: #e4e7ee;\r\n            }\r\n            .simplebar-scrollbar {\r\n                min-height: 3.2rem;\r\n                border-radius: 0.8rem;\r\n                background-color: #a2adc1;\r\n            }\r\n        }\r\n    }\r\n\r\n    // .select__option\r\n    &__option {\r\n        width: 100%;\r\n        transition: color 0.3s ease;\r\n        &:not(:last-child) {\r\n            margin-bottom: 2.5rem;\r\n            @media (max-width: 48em) {\r\n                margin-bottom: 5rem;\r\n            }\r\n        }\r\n        &._select-selected {\r\n            color: $green;\r\n        }\r\n        @media (any-hover: hover) {\r\n            &:hover {\r\n                &:not(&.select__subtitle) {\r\n                    cursor: pointer;\r\n                    color: $green;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    // .select__group\r\n\r\n    &__group {\r\n        display: inline-flex;\r\n        align-items: flex-start;\r\n        flex-direction: column-reverse;\r\n    }\r\n\r\n    // .select__asset\r\n\r\n    &__asset {\r\n    }\r\n\r\n    // .select__text\r\n\r\n    &__text {\r\n    }\r\n\r\n    // .select__hint\r\n\r\n    &__hint {\r\n        position: absolute;\r\n        top: calc(100% + 0.8rem);\r\n        font-size: 1.4rem;\r\n        line-height: 142.857%;\r\n    }\r\n\r\n    // .select__subtitle\r\n\r\n    &__subtitle {\r\n        cursor: text;\r\n    }\r\n\r\n    // select state\r\n    &._select-opened {\r\n        z-index: 5;\r\n        .select__value::after {\r\n            transform: rotate(-180deg);\r\n        }\r\n    }\r\n    &._select-focused {\r\n    }\r\n    &._select-error {\r\n        &:not(&._select-filled, &._select-opened) {\r\n        }\r\n    }\r\n    &._select-filled {\r\n        &:not(&._select-opened) {\r\n            &:not(&._select-show-val) {\r\n            }\r\n        }\r\n    }\r\n    &._select-show-val {\r\n        &._select-focused,\r\n        &._select-filled,\r\n        &._select-error,\r\n        &._select-disabled {\r\n        }\r\n    }\r\n    &._select-disabled {\r\n    }\r\n    &._select-multiple {\r\n    }\r\n    &._select-active {\r\n    }\r\n    &._select-checkbox {\r\n    }\r\n}\r\n\r\n// list\r\n._select-list {\r\n    cursor: pointer;\r\n}\r\n",".badge {\r\n    padding: 1rem 3rem 1rem 1rem;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    column-gap: 2.5rem;\r\n    border-radius: 3rem;\r\n    background: rgba(255, 255, 255, 0.1);\r\n    backdrop-filter: blur(2rem);\r\n    &._active {\r\n        color: $darkPurple2;\r\n        background-color: $white;\r\n        .badge__icon-wrap {\r\n            background-color: $blue;\r\n            &::before {\r\n                background-image: url(./assets/images/icons/star-active.svg);\r\n            }\r\n        }\r\n    }\r\n    @media (max-width: 48em) {\r\n        padding: 2rem 8rem 2rem 2rem;\r\n        column-gap: 3rem;\r\n        border-radius: 6rem;\r\n        backdrop-filter: blur(4rem);\r\n    }\r\n\r\n    // .badge__icon-wrap\r\n\r\n    &__icon-wrap {\r\n        position: relative;\r\n        flex: 0 0 4.5rem;\r\n        width: 4.5rem;\r\n        height: 4.5rem;\r\n        border-radius: 50%;\r\n        background-color: rgba(255, 255, 255, 0.2);\r\n        backdrop-filter: blur(2rem);\r\n        &::before {\r\n            content: '';\r\n            position: absolute;\r\n            width: 8rem;\r\n            height: 8rem;\r\n            top: 50%;\r\n            left: 50%;\r\n            background-image: url(./assets/images/icons/star.svg);\r\n            background-position: center;\r\n            background-size: contain;\r\n            background-repeat: no-repeat;\r\n            transform: translate(-50%, -50%);\r\n        }\r\n        @media (max-width: 48em) {\r\n            flex: 0 0 6rem;\r\n            width: 6rem;\r\n            height: 6rem;\r\n            backdrop-filter: blur(4rem);\r\n            &::before {\r\n                width: 10rem;\r\n                height: 10rem;\r\n            }\r\n        }\r\n    }\r\n\r\n    // .badge__text\r\n\r\n    &__text {\r\n    }\r\n}\r\n",".intro {\n    position: relative;\n    margin-top: -8rem;\n    height: 108rem;\n    margin-bottom: 10.5rem;\n\n    @include small-tablet {\n        height: 164rem;\n        margin-bottom: 15.5rem;\n    }\n\n    .container {\n        display: flex;\n        height: 100%;\n    }\n\n    @include small-tablet {\n        margin-top: -16rem;\n    }\n\n    &::after {\n        @include pseudo {\n            content: '';\n            position: absolute;\n            background: linear-gradient(0deg, #101653 0%, rgba(23, 15, 67, 0) 63.45%);\n            z-index: -1;\n            inset: 0;\n            bottom: -0.5rem;\n        }\n    }\n\n    &__content {\n        margin-top: auto;\n        padding-bottom: 11.7rem;\n\n        @include small-tablet {\n        }\n    }\n\n    &__title {\n        line-height: 110%;\n        margin-bottom: 5.3rem;\n\n        @include small-tablet {\n            span {\n                color: $green;\n            }\n\n            line-height: 85%;\n            margin-bottom: 7.3rem;\n        }\n    }\n\n    &__poster-image {\n        position: absolute;\n        inset: 0;\n        z-index: -1;\n\n        img {\n            height: 100%;\n            object-fit: cover;\n\n            @include small-tablet {\n                object-position: -140rem;\n            }\n        }\n    }\n\n    &__request {\n        display: flex;\n        align-items: center;\n        gap: 3.7rem;\n        margin-bottom: 5.9rem;\n\n        @include small-tablet {\n            margin-bottom: 17rem;\n            gap: 5rem;\n        }\n\n        &-projects {\n            display: flex;\n            align-items: center;\n            gap: 1.8rem;\n            position: relative;\n\n            &::after {\n                @include pseudo {\n                    left: -2rem;\n                    height: 100%;\n                    width: 0.2rem;\n                    background: rgba(255, 255, 255, 0.2);\n\n                    @include small-tablet {\n                        left: -3rem;\n                        width: 0.4rem;\n                    }\n                }\n            }\n\n            @include small-tablet {\n                gap: 2.4rem;\n            }\n\n            &-counter {\n                width: 5.8rem;\n                height: 5.8rem;\n                border-radius: 50%;\n                background: $green;\n\n                @include small-tablet {\n                    width: 8.8rem;\n                    height: 8.8rem;\n                }\n\n                span {\n                    color: #1a1a1a;\n                    font-family: $spaceAgeCyr;\n                    font-size: 1.7rem;\n                    font-style: normal;\n                    font-weight: 400;\n                    display: block;\n                    margin-top: 1.6rem;\n                    text-align: center;\n\n                    @include small-tablet {\n                        font-size: 2.48rem;\n                        font-style: normal;\n                        font-weight: 400;\n                        line-height: 0.7735rem;\n                        margin-top: 3.5rem;\n                    }\n                }\n            }\n\n            &-title {\n                font-size: 1.8rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: normal;\n\n                @include small-tablet {\n                    font-size: 2.8rem;\n                    font-style: normal;\n                    font-weight: 400;\n                    line-height: normal;\n                }\n            }\n        }\n    }\n\n    &__articles {\n        display: grid;\n        grid-template-columns: repeat(3, minmax(51rem, 1fr));\n        gap: 3.7rem;\n\n        @include small-tablet {\n            grid-template-columns: repeat(3, minmax(15.2rem, 1fr));\n            gap: 2.8rem;\n        }\n    }\n\n    &__article {\n        border-radius: 3rem;\n        background: rgba(255, 255, 255, 0.1);\n        backdrop-filter: blur(2rem);\n        position: relative;\n\n        @include small-tablet {\n            border-radius: 2rem;\n        }\n\n        &-link {\n            padding: 1.1rem 6rem 1.1rem 4.1rem;\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            gap: 2rem;\n\n            @include small-tablet {\n                flex-direction: column;\n                gap: 2.6rem;\n                padding: 11.5rem 2rem 3rem;\n            }\n\n            &:hover {\n                color: $green;\n            }\n\n            &-title {\n                font-size: 2.5rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: normal;\n                max-width: 15rem;\n                display: block;\n                transition: 0.3s color ease;\n\n                @include small-tablet {\n                    font-size: 2.8rem;\n                    font-style: normal;\n                    font-weight: 400;\n                    line-height: normal;\n                    text-align: center;\n                    max-width: 100%;\n                }\n            }\n\n            &-image {\n                @include sizes(20.2rem, 20.2rem);\n                border-radius: 50%;\n\n                @include small-tablet {\n                    position: absolute;\n                    @include sizes(16.2rem, 16.2rem);\n                    top: -6rem;\n                    left: 50%;\n                    transform: translateX(-50%);\n                }\n\n                img {\n                    border-radius: inherit;\n                    height: 100%;\n                }\n            }\n\n            &-icon {\n                position: absolute;\n                top: 1rem;\n                right: 1.3rem;\n                padding: 0.6rem;\n                border-radius: 50%;\n                background: rgba(255, 255, 255, 0.2);\n                backdrop-filter: blur(2rem);\n                @include sizes(4.6rem, 4.6rem);\n                transition: 0.3s background ease;\n\n                @include small-tablet {\n                    position: static;\n                    padding: 0.8rem;\n                    @include sizes(6rem, 6rem);\n                }\n\n                img {\n                    height: 100%;\n                }\n            }\n        }\n    }\n}\n",".promotion {\n    margin-bottom: 31rem;\n\n    &__content {\n        display: flex;\n        flex-direction: column;\n        padding: 0 1.5rem 0 2.9rem;\n        position: relative;\n\n        @include small-tablet {\n            padding: 0;\n            gap: 1rem;\n        }\n\n        &::after {\n            @include pseudo {\n                content: '3';\n                -webkit-text-stroke-width: 0.5rem;\n                -webkit-text-stroke-color: rgba(41, 255, 127, 0.1);\n                font-family: $spaceAgeCyr;\n                font-size: 70rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: normal;\n                color: $bgColor;\n                left: 50%;\n                transform: translateX(-50%);\n                top: -34rem;\n                z-index: -1;\n            }\n        }\n    }\n\n    &__title {\n        @include small-tablet {\n            letter-spacing: 0.5rem;\n        }\n    }\n\n    &__block {\n        display: flex;\n        flex-direction: column;\n\n        @include small-tablet {\n            flex-direction: column-reverse;\n            gap: 1rem;\n\n            &:last-child {\n                .promotion__title {\n                    margin-left: auto;\n                    margin-right: 0 !important;\n                }\n            }\n        }\n\n        &:nth-child(even) {\n            text-align: end;\n\n            @include small-tablet {\n                text-align: start;\n            }\n\n            span {\n                display: block;\n                margin-right: 34rem;\n\n                @include small-tablet {\n                    margin-right: auto;\n                }\n            }\n        }\n\n        @include small-tablet {\n            &:nth-child(odd) {\n                text-align: end;\n\n                .promotion__title {\n                    margin-right: 5rem;\n                }\n            }\n        }\n    }\n\n    &__subtitle {\n        font-size: 1.8rem;\n        font-style: normal;\n        font-weight: 500;\n        line-height: normal;\n\n        @include small-tablet {\n            font-size: 2.8rem;\n            font-style: normal;\n            font-weight: 400;\n            line-height: normal;\n        }\n    }\n}\n",".marketing {\n    &__image {\n        position: absolute;\n        left: -15.2rem;\n        top: -12rem;\n        max-width: 74rem;\n        width: 100%;\n\n        @include small-tablet {\n            position: static;\n            max-width: 68rem;\n        }\n    }\n\n    &__content {\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n\n        @include small-tablet {\n            flex-direction: column;\n        }\n    }\n\n    &__title {\n        margin-bottom: 4.8rem;\n\n        @include small-tablet {\n            margin-bottom: 4.4rem;\n            text-align: center;\n        }\n    }\n\n    &__info {\n        max-width: 51rem;\n        width: 100%;\n        margin-left: 21rem;\n\n        @include small-tablet {\n            max-width: 100%;\n            margin-left: 0;\n        }\n\n        &-row {\n            display: flex;\n            align-items: flex-start;\n            gap: 4.1rem;\n            justify-content: space-between;\n            margin-bottom: 5rem;\n\n            @include small-tablet {\n                gap: 3rem;\n            }\n        }\n\n        &-list {\n            display: flex;\n            flex-direction: column;\n            padding-left: 3rem;\n            width: 100%;\n\n            @include small-tablet {\n                gap: 2rem;\n            }\n        }\n\n        &-item {\n            font-size: 1.8rem;\n            font-style: normal;\n            font-weight: 400;\n            line-height: 3rem;\n\n            @include small-tablet {\n                font-size: 2.8rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: 2rem;\n            }\n\n            @include item-dot;\n        }\n\n        &-description {\n            font-size: 1.8rem;\n            font-style: normal;\n            font-weight: 600;\n            line-height: normal;\n            max-width: 21.7rem;\n\n            @include small-tablet {\n                max-width: 33.2rem;\n                font-size: 2.8rem;\n                font-style: normal;\n                font-weight: 600;\n                line-height: normal;\n            }\n        }\n    }\n}\n","@import '../sections/intro';\n@import '../sections/promotion';\n@import '../sections/marketing';\n\nfigure {\n    margin: 0;\n}\n\nbody::after {\n    content: '';\n    position: fixed;\n    z-index: 99;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(255, 255, 255, 0.1);\n    backdrop-filter: blur(2rem);\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.8s ease 0s;\n\n    ._menu-opened & {\n        opacity: 1;\n    }\n}\n",null],"sourceRoot":""}]);
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
/* harmony import */ var _utils_hamburger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/hamburger.js */ "./src/js/utils/hamburger.js");
/* harmony import */ var _utils_select_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/select.js */ "./src/js/utils/select.js");
/* harmony import */ var _libs_dd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/dd.js */ "./src/js/libs/dd.js");
/* harmony import */ var _libs_dd_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_libs_dd_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dev_vzmsk1_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dev/vzmsk1.js */ "./src/js/dev/vzmsk1.js");
/* harmony import */ var _dev_vzmsk1_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dev_vzmsk1_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dev_markusDM_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dev/markusDM.js */ "./src/js/dev/markusDM.js");
/* harmony import */ var _dev_markusDM_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_dev_markusDM_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dev_ukik0_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dev/ukik0.js */ "./src/js/dev/ukik0.js");
/* harmony import */ var _dev_ukik0_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_dev_ukik0_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _dev_kie6er_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dev/kie6er.js */ "./src/js/dev/kie6er.js");
/* harmony import */ var _dev_kie6er_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_dev_kie6er_js__WEBPACK_IMPORTED_MODULE_7__);


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





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGduQkFBZ25CLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLFFBQVEsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxTQUFTLFVBQVUsVUFBVSxVQUFVLE1BQU0sU0FBUyxVQUFVLE1BQU0sU0FBUyxVQUFVLE9BQU8sV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLGNBQWMsWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sY0FBYyxZQUFZLFlBQVksT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFlBQVksWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sWUFBWSxRQUFRLE9BQU8sV0FBVyxVQUFVLFFBQVEsT0FBTyxXQUFXLFVBQVUsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFlBQVksUUFBUSxPQUFPLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxPQUFPLE9BQU8sVUFBVSxXQUFXLFFBQVEsVUFBVSxXQUFXLFdBQVcsV0FBVyxRQUFRLFFBQVEsVUFBVSxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsUUFBUSxVQUFVLFFBQVEsUUFBUSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFlBQVksVUFBVSxVQUFVLFdBQVcsUUFBUSxPQUFPLFVBQVUsVUFBVSxXQUFXLFlBQVksT0FBTyxRQUFRLFVBQVUsWUFBWSxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxRQUFRLE9BQU8sY0FBYyxZQUFZLFlBQVksWUFBWSxRQUFRLFFBQVEsV0FBVyxVQUFVLFFBQVEsT0FBTyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLGNBQWMsWUFBWSxZQUFZLFlBQVksUUFBUSxRQUFRLFVBQVUsU0FBUyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFFBQVEsT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLE9BQU8sTUFBTSxVQUFVLE1BQU0sT0FBTyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxjQUFjLFlBQVksWUFBWSxZQUFZLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxhQUFhLGFBQWEsWUFBWSxZQUFZLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLGNBQWMsWUFBWSxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxZQUFZLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sWUFBWSxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxRQUFRLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFFBQVEsT0FBTyxXQUFXLGVBQWUsWUFBWSxZQUFZLFdBQVcsVUFBVSxX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QUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCOztBQUU1Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDOEI7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUMyQjs7QUFFM0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNzQjs7QUFFdEI7O0FBRXlCO0FBQ0U7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9kZXYvdWtpazAuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2xpYnMvZGQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL3V0aWxzL2hhbWJ1cmdlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvdXRpbHMvc2VsZWN0LmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz82YzJkIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbmF2LWl0ZW0taGVhZGluZycpO1xuXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJy0tYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XHJcbmZ1bmN0aW9uIER5bmFtaWNBZGFwdCh0eXBlKSB7XHJcbiAgdGhpcy50eXBlID0gdHlwZTtcclxufVxyXG5EeW5hbWljQWRhcHQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gIHRoaXMu0L5iamVjdHMgPSBbXTtcclxuICB0aGlzLmRhQ2xhc3NuYW1lID0gJ19keW5hbWljX2FkYXB0Xyc7XHJcbiAgdGhpcy5ub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRhXScpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZXNbaV07XHJcbiAgICBjb25zdCBkYXRhID0gbm9kZS5kYXRhc2V0LmRhLnRyaW0oKTtcclxuICAgIGNvbnN0IGRhdGFBcnJheSA9IGRhdGEuc3BsaXQoJywnKTtcclxuICAgIGNvbnN0INC+YmplY3QgPSB7fTtcclxuICAgINC+YmplY3QuZWxlbWVudCA9IG5vZGU7XHJcbiAgICDQvmJqZWN0LnBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgINC+YmplY3QuZGVzdGluYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRhdGFBcnJheVswXS50cmltKCkpO1xyXG4gICAg0L5iamVjdC5icmVha3BvaW50ID0gZGF0YUFycmF5WzFdID8gZGF0YUFycmF5WzFdLnRyaW0oKSA6ICc3NjcnO1xyXG4gICAg0L5iamVjdC5wbGFjZSA9IGRhdGFBcnJheVsyXSA/IGRhdGFBcnJheVsyXS50cmltKCkgOiAnbGFzdCc7XHJcbiAgICDQvmJqZWN0LmluZGV4ID0gdGhpcy5pbmRleEluUGFyZW50KNC+YmplY3QucGFyZW50LCDQvmJqZWN0LmVsZW1lbnQpO1xyXG4gICAgdGhpcy7QvmJqZWN0cy5wdXNoKNC+YmplY3QpO1xyXG4gIH1cclxuICB0aGlzLmFycmF5U29ydCh0aGlzLtC+YmplY3RzKTtcclxuICB0aGlzLm1lZGlhUXVlcmllcyA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChcclxuICAgIHRoaXMu0L5iamVjdHMsXHJcbiAgICBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICcoJyArXHJcbiAgICAgICAgdGhpcy50eXBlICtcclxuICAgICAgICAnLXdpZHRoOiAnICtcclxuICAgICAgICBpdGVtLmJyZWFrcG9pbnQgK1xyXG4gICAgICAgICdweCksJyArXHJcbiAgICAgICAgaXRlbS5icmVha3BvaW50XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgdGhpc1xyXG4gICk7XHJcbiAgdGhpcy5tZWRpYVF1ZXJpZXMgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoXHJcbiAgICB0aGlzLm1lZGlhUXVlcmllcyxcclxuICAgIGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgc2VsZikge1xyXG4gICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChzZWxmLCBpdGVtKSA9PT0gaW5kZXg7XHJcbiAgICB9XHJcbiAgKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWVkaWFRdWVyaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBtZWRpYSA9IHRoaXMubWVkaWFRdWVyaWVzW2ldO1xyXG4gICAgY29uc3QgbWVkaWFTcGxpdCA9IFN0cmluZy5wcm90b3R5cGUuc3BsaXQuY2FsbChtZWRpYSwgJywnKTtcclxuICAgIGNvbnN0IG1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYVNwbGl0WzBdKTtcclxuICAgIGNvbnN0IG1lZGlhQnJlYWtwb2ludCA9IG1lZGlhU3BsaXRbMV07XHJcbiAgICBjb25zdCDQvmJqZWN0c0ZpbHRlciA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChcclxuICAgICAgdGhpcy7QvmJqZWN0cyxcclxuICAgICAgZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5icmVha3BvaW50ID09PSBtZWRpYUJyZWFrcG9pbnQ7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBtYXRjaE1lZGlhLmFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgX3RoaXMubWVkaWFIYW5kbGVyKG1hdGNoTWVkaWEsINC+YmplY3RzRmlsdGVyKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5tZWRpYUhhbmRsZXIobWF0Y2hNZWRpYSwg0L5iamVjdHNGaWx0ZXIpO1xyXG4gIH1cclxufTtcclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5tZWRpYUhhbmRsZXIgPSBmdW5jdGlvbiAobWF0Y2hNZWRpYSwg0L5iamVjdHMpIHtcclxuICBpZiAobWF0Y2hNZWRpYS5tYXRjaGVzKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8INC+YmplY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0INC+YmplY3QgPSDQvmJqZWN0c1tpXTtcclxuICAgICAg0L5iamVjdC5pbmRleCA9IHRoaXMuaW5kZXhJblBhcmVudCjQvmJqZWN0LnBhcmVudCwg0L5iamVjdC5lbGVtZW50KTtcclxuICAgICAgdGhpcy5tb3ZlVG8o0L5iamVjdC5wbGFjZSwg0L5iamVjdC5lbGVtZW50LCDQvmJqZWN0LmRlc3RpbmF0aW9uKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgLy9mb3IgKGxldCBpID0gMDsgaSA8INC+YmplY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBmb3IgKGxldCBpID0g0L5iamVjdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgY29uc3Qg0L5iamVjdCA9INC+YmplY3RzW2ldO1xyXG4gICAgICBpZiAo0L5iamVjdC5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmRhQ2xhc3NuYW1lKSkge1xyXG4gICAgICAgIHRoaXMubW92ZUJhY2so0L5iamVjdC5wYXJlbnQsINC+YmplY3QuZWxlbWVudCwg0L5iamVjdC5pbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUubW92ZVRvID0gZnVuY3Rpb24gKHBsYWNlLCBlbGVtZW50LCBkZXN0aW5hdGlvbikge1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmRhQ2xhc3NuYW1lKTtcclxuICBpZiAocGxhY2UgPT09ICdsYXN0JyB8fCBwbGFjZSA+PSBkZXN0aW5hdGlvbi5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgIGRlc3RpbmF0aW9uLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZWxlbWVudCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChwbGFjZSA9PT0gJ2ZpcnN0Jykge1xyXG4gICAgZGVzdGluYXRpb24uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgZWxlbWVudCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGRlc3RpbmF0aW9uLmNoaWxkcmVuW3BsYWNlXS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgZWxlbWVudCk7XHJcbn07XHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUubW92ZUJhY2sgPSBmdW5jdGlvbiAocGFyZW50LCBlbGVtZW50LCBpbmRleCkge1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmRhQ2xhc3NuYW1lKTtcclxuICBpZiAocGFyZW50LmNoaWxkcmVuW2luZGV4XSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBwYXJlbnQuY2hpbGRyZW5baW5kZXhdLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBlbGVtZW50KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcGFyZW50Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZWxlbWVudCk7XHJcbiAgfVxyXG59O1xyXG5EeW5hbWljQWRhcHQucHJvdG90eXBlLmluZGV4SW5QYXJlbnQgPSBmdW5jdGlvbiAocGFyZW50LCBlbGVtZW50KSB7XHJcbiAgY29uc3QgYXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChwYXJlbnQuY2hpbGRyZW4pO1xyXG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGFycmF5LCBlbGVtZW50KTtcclxufTtcclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5hcnJheVNvcnQgPSBmdW5jdGlvbiAoYXJyKSB7XHJcbiAgaWYgKHRoaXMudHlwZSA9PT0gJ21pbicpIHtcclxuICAgIEFycmF5LnByb3RvdHlwZS5zb3J0LmNhbGwoYXJyLCBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICBpZiAoYS5icmVha3BvaW50ID09PSBiLmJyZWFrcG9pbnQpIHtcclxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gYi5wbGFjZSkge1xyXG4gICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gJ2ZpcnN0JyB8fCBiLnBsYWNlID09PSAnbGFzdCcpIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhLnBsYWNlID09PSAnbGFzdCcgfHwgYi5wbGFjZSA9PT0gJ2ZpcnN0Jykge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYS5wbGFjZSAtIGIucGxhY2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBhLmJyZWFrcG9pbnQgLSBiLmJyZWFrcG9pbnQ7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgQXJyYXkucHJvdG90eXBlLnNvcnQuY2FsbChhcnIsIGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgIGlmIChhLmJyZWFrcG9pbnQgPT09IGIuYnJlYWtwb2ludCkge1xyXG4gICAgICAgIGlmIChhLnBsYWNlID09PSBiLnBsYWNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhLnBsYWNlID09PSAnZmlyc3QnIHx8IGIucGxhY2UgPT09ICdsYXN0Jykge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gJ2xhc3QnIHx8IGIucGxhY2UgPT09ICdmaXJzdCcpIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBiLnBsYWNlIC0gYS5wbGFjZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGIuYnJlYWtwb2ludCAtIGEuYnJlYWtwb2ludDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufTtcclxuY29uc3QgZGEgPSBuZXcgRHluYW1pY0FkYXB0KCdtYXgnKTtcclxuZGEuaW5pdCgpO1xyXG4iLCJpbXBvcnQgeyBib2R5TG9ja1N0YXR1cywgYm9keUxvY2tUb2dnbGUgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgbWVudUluaXQgPSAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKSkge1xuICAgICAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJyk7XG5cbiAgICAgICAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChib2R5TG9ja1N0YXR1cykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdfbWVudS1vcGVuZWQnKTtcbiAgICAgICAgICAgICAgICBib2R5TG9ja1RvZ2dsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5tZW51SW5pdCgpO1xuIiwiaW1wb3J0IHsgX3NsaWRlVXAsIF9zbGlkZURvd24sIF9zbGlkZVRvZ2dsZSB9IGZyb20gJy4vdXRpbHMuanMnO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNsYXNzIFNlbGVjdCB7XHJcbiAgICAvLyBzZXR1cCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl90aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gY3VzdG9tIHNlbGVjdCBjbGFzc2VzXHJcbiAgICAgICAgdGhpcy5jbGFzc2VzID0ge1xyXG4gICAgICAgICAgICAvLyBodG1sIGJ1aWxkIGNsYXNzZXNcclxuICAgICAgICAgICAgc2VsOiAnc2VsZWN0JyxcclxuICAgICAgICAgICAgYm9keTogJ3NlbGVjdF9fYm9keScsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnc2VsZWN0X19sYWJlbCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnc2VsZWN0X190aXRsZScsXHJcbiAgICAgICAgICAgIHZhbDogJ3NlbGVjdF9fdmFsdWUnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnc2VsZWN0X19jb250ZW50JyxcclxuICAgICAgICAgICAgb3B0aW9uczogJ3NlbGVjdF9fb3B0aW9ucycsXHJcbiAgICAgICAgICAgIG9wdGlvbjogJ3NlbGVjdF9fb3B0aW9uJyxcclxuICAgICAgICAgICAgc2Nyb2xsOiAnc2VsZWN0X19zY3JvbGwnLFxyXG4gICAgICAgICAgICBncm91cDogJ3NlbGVjdF9fZ3JvdXAnLFxyXG4gICAgICAgICAgICBpbnA6ICdzZWxlY3RfX2lucHV0JyxcclxuICAgICAgICAgICAgYXNzZXQ6ICdzZWxlY3RfX2Fzc2V0JyxcclxuICAgICAgICAgICAgdHh0OiAnc2VsZWN0X190ZXh0JyxcclxuICAgICAgICAgICAgaGludDogJ3NlbGVjdF9faGludCcsXHJcblxyXG4gICAgICAgICAgICAvLyBzdGF0ZSBjbGFzc2VzXHJcbiAgICAgICAgICAgIGFjdGl2ZTogJ19zZWxlY3QtYWN0aXZlJyxcclxuICAgICAgICAgICAgZm9jdXNlZDogJ19zZWxlY3QtZm9jdXNlZCcsXHJcbiAgICAgICAgICAgIG9wZW5lZDogJ19zZWxlY3Qtb3BlbmVkJyxcclxuICAgICAgICAgICAgZmlsbGVkOiAnX3NlbGVjdC1maWxsZWQnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZDogJ19zZWxlY3Qtc2VsZWN0ZWQnLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogJ19zZWxlY3QtZGlzYWJsZWQnLFxyXG5cclxuICAgICAgICAgICAgLy8gYWRkaXRpb25hbCBjbGFzc2VzXHJcbiAgICAgICAgICAgIGxpc3Q6ICdfc2VsZWN0LWxpc3QnLFxyXG4gICAgICAgICAgICBlcnJvcjogJ19zZWxlY3QtZXJyb3InLFxyXG4gICAgICAgICAgICBtdWx0aXBsZTogJ19zZWxlY3QtbXVsdGlwbGUnLFxyXG4gICAgICAgICAgICBjaGVja2JveDogJ19zZWxlY3QtY2hlY2tib3gnLFxyXG4gICAgICAgICAgICBsYWJlbDogJ19zZWxlY3QtbGFiZWwnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gYWxsIHNlbGVjdCBpdGVtc1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKTtcclxuICAgICAgICBpZiAoc2VsZWN0TGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0KHNlbGVjdExpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzZWxlY3QgaW5pdGlhbGl6YXRpb24gJiBidWlsZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLyBpbml0aWFsaXphdGlvblxyXG4gICAgaW5pdChzZWxlY3RMaXN0KSB7XHJcbiAgICAgICAgLy8gaW5pdFxyXG4gICAgICAgIHNlbGVjdExpc3QuZm9yRWFjaCgoc2VsZWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXItcmF0aW5nJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFNlbEl0ZW0oc2VsZWN0LCBpbmRleCArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGV2ZW50c1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICdjbGljaycsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGlvbnMoZSk7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgJ2tleWRvd24nLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb25zKGUpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgICApO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICdmb2N1c2luJyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAnZm9jdXNvdXQnLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb25zKGUpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgLy8gc2luZ2xlIHNlbGVjdCBpdGVtIGluaXRpYWxpemF0aW9uXHJcbiAgICBpbml0U2VsSXRlbShyZWxhdGl2ZVNlbCwgaW5kZXgpIHtcclxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zZWwpO1xyXG4gICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChyZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgcmVsYXRpdmVTZWwuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICBpbmRleCA/IChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbElkID0gaW5kZXgpIDogbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpKSB7XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLmRhdGFzZXQub3B0UGxhY2Vob2xkZXIgPSB0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLmxhYmVsLnNob3cpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbFRpdGxlID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMudGl0bGUpLnR3aW5TZWw7XHJcbiAgICAgICAgICAgICAgICBzZWxUaXRsZS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FmdGVyYmVnaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGA8c3BhbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmxhYmVsfVwiPiR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLmxhYmVsLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkubGFiZWwudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH08L3NwYW4+YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCAhPT0gJzAnKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICAnYmVmb3JlZW5kJyxcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuYm9keX1cIj48ZGl2IGhpZGRlbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLm9wdGlvbnN9XCI+PC9kaXY+PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICAnYmVmb3JlZW5kJyxcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuYm9keX1cIj48ZGl2IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMub3B0aW9uc31cIj48L2Rpdj48L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJ1aWxkKHJlbGF0aXZlU2VsKTtcclxuXHJcbiAgICAgICAgcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCA9IHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgPyByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkIDogJzE1MCc7XHJcbiAgICAgICAgcmVsYXRpdmVTZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgX3RoaXMuaW5pdFNlbGVjdGlvbnMoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBzZWxlY3QgYnVpbGRcclxuICAgIGJ1aWxkKHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudDtcclxuICAgICAgICBjb25zdCBzZWxPYmogPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyBzZXQgaWRcclxuICAgICAgICBzZWxlY3QuZGF0YXNldC5zZWxJZCA9IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSWQ7XHJcbiAgICAgICAgLy8gc2V0IHZhbHVlXHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKTtcclxuICAgICAgICAvLyBzZXQgb3B0aW9uc1xyXG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyhzZWxlY3QsIHJlbGF0aXZlU2VsKTtcclxuICAgICAgICAvLyBzZXQgY3NzIG1vZGlmaWNhdG9yXHJcbiAgICAgICAgcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxBZGRvbkNsYXNzXHJcbiAgICAgICAgICAgID8gc2VsZWN0LmNsYXNzTGlzdC5hZGQoYHNlbGVjdF8ke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsQWRkb25DbGFzc31gKVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgLy8gc2V0IGNsYXNzIGlmIHNlbGVjdCBpcyBtdWx0aXBsZVxyXG4gICAgICAgIHJlbGF0aXZlU2VsLm11bHRpcGxlXHJcbiAgICAgICAgICAgID8gc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLm11bHRpcGxlKVxyXG4gICAgICAgICAgICA6IHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5tdWx0aXBsZSk7XHJcbiAgICAgICAgLy8gc2V0IGNsYXNzIGlmIHNlbGVjdCBjaGVja2JveGVzIGFyZSBzZXRcclxuICAgICAgICByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLWNoZWNrYm94ZXMnKSAmJiByZWxhdGl2ZVNlbC5tdWx0aXBsZVxyXG4gICAgICAgICAgICA/IHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5jaGVja2JveClcclxuICAgICAgICAgICAgOiBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuY2hlY2tib3gpO1xyXG4gICAgICAgIC8vIGRpc2FibGUgc2VsZWN0XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlU2VsZWN0KHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIC8vIHNldCBzZWFyY2ggYWN0aW9ucyBpZiBkYXRhLXNlbC1zZWFyY2ggaXMgc2V0XHJcbiAgICAgICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1zZWFyY2gnKSA/IHRoaXMuc2V0U2VhcmNoQWN0aW9ucyhzZWxlY3QpIDogbnVsbDtcclxuICAgICAgICAvLyBzZXQgc2VsZWN0IGFjdGlvbnMgaWYgaXQncyBpbml0aWFsbHkgb3BlbmVkXHJcbiAgICAgICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1vcGVuZWQnKSA/IHRoaXMuc2V0QWN0aW9uKHNlbGVjdCkgOiBudWxsO1xyXG5cclxuICAgICAgICAvLyBzZXQgc2VsZWN0IGhpbnRcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50KSB7XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgICAgICAgICAgJ2JlZm9yZWVuZCcsXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInNlbGVjdF9faGludFwiPiR7cmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50fTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHZhbGlkYXRlIHNlbGVjdFxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5jbG9zZXN0KCdmb3JtJykpIHtcclxuICAgICAgICAgICAgcmVsYXRpdmVTZWwuY2xvc2VzdCgnZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyhzZWxPYmouY2xhc3Nlcy5maWxsZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsT2JqLmFkZEVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsT2JqLnJlbW92ZUVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzaG93IC8gaGlkZSBzZWxlY3Rpb24gZnJvbSBzZWxlY3QgdGl0bGVcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNob3ctdmFsJykpIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ19zZWxlY3Qtc2hvdy12YWwnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnX3NlbGVjdC1zaG93LXZhbCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHNldCB0d2luIHNlbGVjdCB0aXRsZSB2YWx1ZVxyXG4gICAgc2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGNvbnN0IHNlbEJvZHkgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5ib2R5KS50d2luU2VsO1xyXG4gICAgICAgIGNvbnN0IHNlbFRpdGxlID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMudGl0bGUpLnR3aW5TZWw7XHJcblxyXG4gICAgICAgIGlmIChzZWxUaXRsZSkgc2VsVGl0bGUucmVtb3ZlKCk7XHJcbiAgICAgICAgc2VsQm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aGlzLmdldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpKTtcclxuICAgIH1cclxuICAgIC8vIHNldCB0d2luIHNlbGVjdCBvcHRpb25zXHJcbiAgICBzZXRPcHRpb25zKHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykudHdpblNlbDtcclxuICAgICAgICBjb25zdCByZWxhdGl2ZVNlbE9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS5yZWxhdGl2ZVNlbDtcclxuXHJcbiAgICAgICAgb3B0aW9ucy5pbm5lckhUTUwgPSB0aGlzLmdldE9wdGlvbnMocmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbE9wdGlvbnMucXVlcnlTZWxlY3RvcignW3NlbGVjdGVkXScpKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5jbGFzc2VzLm9wdGlvbn1gKS5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZGlzYWJsZSBzZWxlY3RcclxuICAgIGRpc2FibGVTZWxlY3Qoc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xyXG4gICAgICAgICAgICB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMudGl0bGUpLnR3aW5TZWwuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbWFpbiBhY3Rpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLy8gc2V0IG1haW4gYWN0aW9uc1xyXG4gICAgc2V0QWN0aW9ucyhlKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IGUudHlwZTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5zZWwpKSB8fFxyXG4gICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5saXN0KSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gdGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3QnKVxyXG4gICAgICAgICAgICAgICAgPyB0YXJnZXQuY2xvc2VzdCgnLnNlbGVjdCcpXHJcbiAgICAgICAgICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICBgLiR7dGhpcy5jbGFzc2VzLnNlbH1bZGF0YS1zZWwtaWQ9XCIke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKS5kYXRhc2V0LnNlbGVjdElkXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XCJdYFxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCByZWxhdGl2ZVNlbCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCkucmVsYXRpdmVTZWw7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2NsaWNrJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZWxhdGl2ZVNlbC5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5saXN0KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsTGlzdCA9IHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAuJHt0aGlzLmNsYXNzZXMuc2VsfVtkYXRhLXNlbC1pZD1cIiR7c2VsTGlzdC5kYXRhc2V0LnNlbElkfVwiXSAuc2VsZWN0X19vcHRpb25bZGF0YS1vcHQtdmFsPVwiJHtzZWxMaXN0LmRhdGFzZXQub3B0VmFsfVwiXWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25BY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCwgc2VsT3B0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnRpdGxlKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb24oc2VsZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wdGlvbikpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbE9wdGlvbiA9IHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE9wdGlvbkFjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsLCBzZWxPcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnZm9jdXNpbicgfHwgdHlwZSA9PT0gJ2ZvY3Vzb3V0Jykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnNlbCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdmb2N1c2luJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuZm9jdXNlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmZvY3VzZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuZmlsbGVkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAna2V5ZG93bicgJiYgZS5jb2RlID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUdyb3VwKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlR3JvdXAoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBzZXQgc2luZ2xlIHNlbGVjdCBhY3Rpb25cclxuICAgIHNldEFjdGlvbihzZWxlY3QpIHtcclxuICAgICAgICBjb25zdCByZWxhdGl2ZVNlbCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCkucmVsYXRpdmVTZWw7XHJcbiAgICAgICAgY29uc3Qgc2VsT3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnR3aW5TZWw7XHJcblxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5jbG9zZXN0KCdbZGF0YS1vbmUtc2VsZWN0XScpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdE9uZUdyb3VwID0gcmVsYXRpdmVTZWwuY2xvc2VzdCgnW2RhdGEtb25lLXNlbGVjdF0nKTtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZUdyb3VwKHNlbGVjdE9uZUdyb3VwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2VsT3B0aW9ucy5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuY2xhc3Nlcy5vcGVuZWQpO1xyXG4gICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCAhPT0gJzAnKSB7XHJcbiAgICAgICAgICAgICAgICBfc2xpZGVUb2dnbGUoc2VsT3B0aW9ucywgcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMub3BlbmVkKSAmJlxyXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlJykgJiZcclxuICAgICAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLmVycm9yKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY2xvc2Ugc2luZ2xlIHNlbGVjdCBncm91cFxyXG4gICAgY2xvc2VHcm91cChncm91cCkge1xyXG4gICAgICAgIGNvbnN0IHNlbEdyb3VwID0gZ3JvdXAgPyBncm91cCA6IGRvY3VtZW50O1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSBzZWxHcm91cC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICBgJHt0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5zZWwpfSR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3BlbmVkKX1gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoc2VsZWN0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc2VsZWN0aW9ucy5mb3JFYWNoKChzZWxlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VJdGVtKHNlbGVjdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNsb3NlIHNpbmdsZSBzZWxlY3QgaXRlbVxyXG4gICAgY2xvc2VJdGVtKHNlbGVjdCkge1xyXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0KS5yZWxhdGl2ZVNlbDtcclxuICAgICAgICBjb25zdCBzZWxPcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykudHdpblNlbDtcclxuXHJcbiAgICAgICAgaWYgKCFzZWxPcHRpb25zLmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLm9wZW5lZCk7XHJcbiAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkICE9PSAnMCcpIHtcclxuICAgICAgICAgICAgICAgIF9zbGlkZVVwKHNlbE9wdGlvbnMsIHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gc2V0IHNpbmdsZSBvcHRpb24gYWN0aW9uc1xyXG4gICAgc2V0T3B0aW9uQWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwsIG9wdGlvbikge1xyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBjb25zdCByZWxhdGl2ZVNlbGVjdGlvbnMgPSB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpLmVsZW1lbnRzO1xyXG5cclxuICAgICAgICAgICAgcmVsYXRpdmVTZWxlY3Rpb25zLmZvckVhY2goKHJlbGF0aXZlU2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbGVjdGlvbi5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdHdpblNlbGVjdGlvbnMgPSBzZWxlY3QucXVlcnlTZWxlY3RvckFsbCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCkpO1xyXG4gICAgICAgICAgICB0d2luU2VsZWN0aW9ucy5mb3JFYWNoKCh0d2luU2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbFxyXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBvcHRpb25bdmFsdWU9XCIke3R3aW5TZWxlY3Rpb24uZGF0YXNldC5vcHRWYWx9XCJdYClcclxuICAgICAgICAgICAgICAgICAgICAuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFvcHRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlbGF0aXZlU2VsLnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7b3B0aW9uLmRhdGFzZXQub3B0VmFsfVwiXWApKTtcclxuICAgICAgICAgICAgICAgIHJlbGF0aXZlU2VsXHJcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7b3B0aW9uLmRhdGFzZXQub3B0VmFsfVwiXWApXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RfX29wdGlvbicpXHJcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgob3B0KSA9PiBvcHQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpKTtcclxuICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnNlbGVjdGVkKTtcclxuICAgICAgICAgICAgaWYgKCFyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvdy1zZWxlY3Rpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdC5xdWVyeVNlbGVjdG9yKGAke3RoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wdGlvbil9W2hpZGRlbl1gKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdC5xdWVyeVNlbGVjdG9yKGAke3RoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wdGlvbil9W2hpZGRlbl1gKS5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9wdGlvbi5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLnZhbHVlID0gb3B0aW9uLmhhc0F0dHJpYnV0ZSgnZGF0YS1vcHQtdmFsJylcclxuICAgICAgICAgICAgICAgID8gb3B0aW9uLmRhdGFzZXQub3B0VmFsXHJcbiAgICAgICAgICAgICAgICA6IG9wdGlvbi50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb24oc2VsZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKTtcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGlvbnMocmVsYXRpdmVTZWwpO1xyXG4gICAgfVxyXG4gICAgLy8gc2V0IHNlYXJjaCBhY3Rpb25zXHJcbiAgICBzZXRTZWFyY2hBY3Rpb25zKHNlbGVjdCkge1xyXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgICAgICBjb25zdCBzZWxJbnB1dCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLmlucCkudHdpblNlbDtcclxuICAgICAgICBjb25zdCBzZWxPcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykudHdpblNlbC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICBgLiR7dGhpcy5jbGFzc2VzLm9wdGlvbn1gXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2VsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbE9wdGlvbnMuZm9yRWFjaCgoc2VsT3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsT3B0aW9uLnRleHRDb250ZW50LnRvVXBwZXJDYXNlKCkuaW5kZXhPZihzZWxJbnB1dC52YWx1ZS50b1VwcGVyQ2FzZSgpKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsT3B0aW9uLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxPcHRpb24uaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNlbE9wdGlvbnMuaGlkZGVuID09PSB0cnVlID8gX3RoaXMuc2V0QWN0aW9uKHNlbGVjdCkgOiBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gc2V0IHNlbGVjdCBzdWJ0aXRsZVxyXG4gICAgc2V0U3VidGl0bGUocmVsYXRpdmVTZWwpIHt9XHJcblxyXG4gICAgLy8gdmFsaWRhdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLy8gYWRkIGFuIGVycm9yIHRvIGEgc2VsZWN0XHJcbiAgICBhZGRFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCkge1xyXG4gICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5lcnJvcik7XHJcblxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEVycm9yICYmICFyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnQpIHtcclxuICAgICAgICAgICAgcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICAnYmVmb3JlZW5kJyxcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwic2VsZWN0X19oaW50XCI+JHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEVycm9yfTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyByZW1vdmUgYW4gZXJyb3IgZnJvbSBhIHNlbGVjdFxyXG4gICAgcmVtb3ZlRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpIHtcclxuICAgICAgICBpZiAoc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuZXJyb3IpKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5lcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2hpbnQnKSAmJiAhcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50KSB7XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19oaW50JykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB1dGlscyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLyBnZXQgY3VzdG9tIGNsYXNzXHJcbiAgICBnZXRDbGFzcyhjc3NDbGFzcykge1xyXG4gICAgICAgIHJldHVybiBgLiR7Y3NzQ2xhc3N9YDtcclxuICAgIH1cclxuICAgIC8vIGdldCBzaW5nbGUgc2VsZWN0IGl0ZW1cclxuICAgIGdldFNlbGVjdChzZWxlY3QsIGNzc0NsYXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVsYXRpdmVTZWw6IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSxcclxuICAgICAgICAgICAgdHdpblNlbDogc2VsZWN0LnF1ZXJ5U2VsZWN0b3IodGhpcy5nZXRDbGFzcyhjc3NDbGFzcykpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vIGdldCBzZWxlY3RlZCBpdGVtIHZhbHVlXHJcbiAgICBnZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgbGV0IGF0dHIsXHJcbiAgICAgICAgICAgIGF0dHJDbGFzcyxcclxuICAgICAgICAgICAgdGl0bGVWYWwgPSB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwsIDIpLmh0bWw7XHJcblxyXG4gICAgICAgIC8vIHNldCB0aXRsZSB2YWx1ZVxyXG4gICAgICAgIHRpdGxlVmFsID0gdGl0bGVWYWwubGVuZ3RoXHJcbiAgICAgICAgICAgID8gdGl0bGVWYWxcclxuICAgICAgICAgICAgOiByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbExhYmVsXHJcbiAgICAgICAgICAgID8gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxMYWJlbFxyXG4gICAgICAgICAgICA6ICcnO1xyXG5cclxuICAgICAgICAvLyBzZXQgYWN0aXZlIGNsYXNzIHRvIHNlbGVjdCBpZiBpdCBjb250YWlucyBhbnkgdmFsdWVzXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkudmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuYWN0aXZlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuYWN0aXZlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNldCBzZWxlY3QgbGFiZWxcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1sYWJlbCcpKSB7XHJcbiAgICAgICAgICAgIGF0dHIgPSByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbExhYmVsXHJcbiAgICAgICAgICAgICAgICA/IGAgZGF0YS1zZWwtbGFiZWw9XCIke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsTGFiZWx9XCJgXHJcbiAgICAgICAgICAgICAgICA6IGAgZGF0YS1zZWwtbGFiZWw9XCLQktGL0LHQvtGAXCJgO1xyXG4gICAgICAgICAgICBhdHRyQ2xhc3MgPSBgICR7dGhpcy5jbGFzc2VzLmxhYmVsfWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwdXNoIHNlbGVjdGlvbnMgdG8gdGhlIGxpc3QgaW5zaWRlIG9mIHNlbGVjdCB0aXRsZVxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5tdWx0aXBsZSAmJiByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLWxpc3QnKSkge1xyXG4gICAgICAgICAgICB0aXRsZVZhbCA9IHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbClcclxuICAgICAgICAgICAgICAgIC5lbGVtZW50cy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgKG9wdGlvbikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYDxzcGFuIGRhdGEtb3B0LWlkPVwiJHtzZWxlY3QuZGF0YXNldC5zZWxJZH1cIiBkYXRhLW9wdC12YWw9XCIke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIiBjbGFzcz1cIl9saXN0LWl0ZW1cIj4ke3RoaXMuZ2V0Q29udGVudChvcHRpb24pfTwvc3Bhbj5gXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuam9pbignJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5saXN0ICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVsYXRpdmVTZWwuZGF0YXNldC5saXN0KSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWxhdGl2ZVNlbC5kYXRhc2V0Lmxpc3QpLmlubmVySFRNTCA9IHRpdGxlVmFsO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtc2VhcmNoJykpIHRpdGxlVmFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGluaXQgc2VsZWN0IHNlYXJjaFxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNlYXJjaCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnRpdGxlfVwiPjxzcGFuICR7YXR0cn0gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy52YWx9XCI+PGlucHV0IGF1dG9jb21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIiR7dGl0bGVWYWx9XCIgZGF0YS1wbGFjZWhvbGRlcj1cIiR7dGl0bGVWYWx9XCIgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5pbnB9XCI+PC9zcGFuPjwvZGl2PmA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY3VzdG9tQ2xhc3MgPVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS5lbGVtZW50cy5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHNbMF0uZGF0YXNldC5vcHRDbGFzc1xyXG4gICAgICAgICAgICAgICAgICAgID8gYCAke3RoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHNbMF0uZGF0YXNldC5vcHRDbGFzc31gXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnJztcclxuICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnRpdGxlfVwiPjxzcGFuICR7YXR0ciA/IGF0dHIgOiAnJ30gY2xhc3M9XCIke1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzLnZhbFxyXG4gICAgICAgICAgICB9ICR7YXR0ckNsYXNzID8gYXR0ckNsYXNzIDogJyd9XCI+PHNwYW4gY2xhc3M9XCIke1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzLmNvbnRlbnRcclxuICAgICAgICAgICAgfSR7Y3VzdG9tQ2xhc3N9XCI+JHt0aXRsZVZhbH08L3NwYW4+PC9zcGFuPjwvYnV0dG9uPmA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZ2V0IG9wdGlvbnNcclxuICAgIGdldE9wdGlvbnMocmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBjb25zdCBzZWxTY3JvbGwgPSByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNjcm9sbCcpID8gYGRhdGEtc2ltcGxlYmFyYCA6ICcnO1xyXG4gICAgICAgIGxldCBzZWxTY3JvbGxIZWlnaHQgPSByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbFNjcm9sbFxyXG4gICAgICAgICAgICA/IGBzdHlsZT1cIm1heC1oZWlnaHQ6JHt3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCA/IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsU2Nyb2xsIDogMjJ9cmVtXCJgXHJcbiAgICAgICAgICAgIDogJyc7XHJcbiAgICAgICAgbGV0IHNlbE9wdGlvbnMgPSBBcnJheS5mcm9tKHJlbGF0aXZlU2VsLm9wdGlvbnMpO1xyXG5cclxuICAgICAgICBpZiAoc2VsT3B0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGV0IHNlbE9wdGlvbnNIVE1MID0gYGA7XHJcblxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAodGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkgJiYgIXRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLnNob3cpIHx8XHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbC5tdWx0aXBsZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHNlbE9wdGlvbnMgPSBzZWxPcHRpb25zLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbE9wdGlvbnNIVE1MICs9IHNlbFNjcm9sbFxyXG4gICAgICAgICAgICAgICAgPyBgPGRpdiAke3NlbFNjcm9sbH0gJHtzZWxTY3JvbGxIZWlnaHR9IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuc2Nyb2xsfVwiPmBcclxuICAgICAgICAgICAgICAgIDogJyc7XHJcbiAgICAgICAgICAgIHNlbE9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxPcHRpb25zSFRNTCArPSB0aGlzLmdldE9wdGlvbihvcHRpb24sIHJlbGF0aXZlU2VsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNlbE9wdGlvbnNIVE1MICs9IHNlbFNjcm9sbCA/IGA8L2Rpdj5gIDogJyc7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxPcHRpb25zSFRNTDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgb3B0aW9uXHJcbiAgICBnZXRPcHRpb24ob3B0aW9uLCByZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSBvcHRpb24uc2VsZWN0ZWQgJiYgcmVsYXRpdmVTZWwubXVsdGlwbGUgPyBgICR7dGhpcy5jbGFzc2VzLnNlbGVjdGVkfWAgOiAnJztcclxuICAgICAgICBjb25zdCBzaG93U2VsZWN0aW9uID1cclxuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkICYmICFyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvdy1zZWxlY3Rpb24nKSAmJiAhcmVsYXRpdmVTZWwubXVsdGlwbGVcclxuICAgICAgICAgICAgICAgID8gYGhpZGRlbmBcclxuICAgICAgICAgICAgICAgIDogYGA7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uQ2xhc3MgPSBvcHRpb24uZGF0YXNldC5vcHRDbGFzcyA/IGAgJHtvcHRpb24uZGF0YXNldC5vcHRDbGFzc31gIDogJyc7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uTGluayA9IG9wdGlvbi5kYXRhc2V0Lm9wdGlvbkxpbmsgPyBvcHRpb24uZGF0YXNldC5vcHRpb25MaW5rIDogZmFsc2U7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uTGlua1RhcmdldCA9IG9wdGlvbi5oYXNBdHRyaWJ1dGUoJ2RhdGEtb3B0aW9uLWxpbmstdGFyZ2V0JykgPyBgdGFyZ2V0PVwiX2JsYW5rXCJgIDogJyc7XHJcbiAgICAgICAgbGV0IG9wdGlvbkhUTUwgPSBgYDtcclxuXHJcbiAgICAgICAgb3B0aW9uSFRNTCArPSBvcHRpb25MaW5rXHJcbiAgICAgICAgICAgID8gYDxhICR7b3B0aW9uTGlua1RhcmdldH0gJHtzaG93U2VsZWN0aW9ufSBocmVmPVwiJHtvcHRpb25MaW5rfVwiIGRhdGEtb3B0LXZhbD1cIiR7b3B0aW9uLnZhbHVlfVwiIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMub3B0aW9ufSR7b3B0aW9uQ2xhc3N9JHtzZWxlY3Rpb25zfVwiPmBcclxuICAgICAgICAgICAgOiBgPGJ1dHRvbiAke3Nob3dTZWxlY3Rpb259IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMub3B0aW9ufSR7b3B0aW9uQ2xhc3N9JHtzZWxlY3Rpb25zfVwiIGRhdGEtb3B0LXZhbD1cIiR7b3B0aW9uLnZhbHVlfVwiIHR5cGU9XCJidXR0b25cIj5gO1xyXG4gICAgICAgIG9wdGlvbkhUTUwgKz0gdGhpcy5nZXRDb250ZW50KG9wdGlvbik7XHJcbiAgICAgICAgb3B0aW9uSFRNTCArPSBvcHRpb25MaW5rID8gYDwvYT5gIDogYDwvYnV0dG9uPmA7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbkhUTUw7XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgc2VsZWN0IGNvbnRlbnRcclxuICAgIGdldENvbnRlbnQob3B0aW9uKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uRGF0YSA9IG9wdGlvbi5kYXRhc2V0Lm9wdEFzc2V0ID8gYCR7b3B0aW9uLmRhdGFzZXQub3B0QXNzZXR9YCA6ICcnO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbkRhdGFIVE1MID1cclxuICAgICAgICAgICAgb3B0aW9uRGF0YS5pbmRleE9mKCdpbWcnKSA+PSAwID8gYDxpbWcgc3JjPVwiJHtvcHRpb25EYXRhfVwiIGFsdD1cIlwiPmAgOiBvcHRpb25EYXRhO1xyXG4gICAgICAgIGxldCBvcHRpb25Db250ZW50SFRNTCA9IGBgO1xyXG5cclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuZ3JvdXB9XCI+YCA6ICcnO1xyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5hc3NldH1cIj5gIDogJyc7XHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IG9wdGlvbkRhdGFIVE1MIDogJyc7XHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8L3NwYW4+YCA6ICcnO1xyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy50eHR9XCI+YCA6ICcnO1xyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbi50ZXh0Q29udGVudDtcclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDwvc3Bhbj5gIDogJyc7XHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8L3NwYW4+YCA6ICcnO1xyXG4gICAgICAgIHJldHVybiBvcHRpb25Db250ZW50SFRNTDtcclxuICAgIH1cclxuICAgIC8vIGdldCBzZWxlY3QgcGxhY2Vob2xkZXJcclxuICAgIGdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBBcnJheS5mcm9tKHJlbGF0aXZlU2VsLm9wdGlvbnMpLmZpbmQoKG9wdGlvbikgPT4gIW9wdGlvbi52YWx1ZSk7XHJcblxyXG4gICAgICAgIGlmIChwbGFjZWhvbGRlcikge1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zdWJ0aXRsZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogcGxhY2Vob2xkZXIudGV4dENvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBzaG93OiBwbGFjZWhvbGRlci5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXBoLXNob3cnKSxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogcGxhY2Vob2xkZXIuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1waCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHBsYWNlaG9sZGVyLmRhdGFzZXQub3B0UGxhY2Vob2xkZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgc2VsZWN0ZWQgb3B0aW9ucyBkYXRhXHJcbiAgICBnZXREYXRhKHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbnMgPSBBcnJheS5mcm9tKHJlbGF0aXZlU2VsLm9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSlcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnNlbGVjdGVkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3Rpb25zLnB1c2gocmVsYXRpdmVTZWwub3B0aW9uc1tyZWxhdGl2ZVNlbC5zZWxlY3RlZEluZGV4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzOiBzZWxlY3Rpb25zLm1hcCgob3B0aW9uKSA9PiBvcHRpb24pLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IHNlbGVjdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSkubWFwKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSksXHJcbiAgICAgICAgICAgIGh0bWw6IHNlbGVjdGlvbnMubWFwKChvcHRpb24pID0+IHRoaXMuZ2V0Q29udGVudChvcHRpb24pKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2VsZWN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLy8gaW5pdCBzZWxlY3Rpb25zXHJcbiAgICBpbml0U2VsZWN0aW9ucyhlKSB7XHJcbiAgICAgICAgY29uc3QgcmVsYXRpdmVTZWwgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgdGhpcy5idWlsZChyZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25zKHJlbGF0aXZlU2VsKTtcclxuICAgIH1cclxuICAgIC8vIHNldCBzZWxlY3Rpb25zXHJcbiAgICBzZXRTZWxlY3Rpb25zKHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zdWJtaXQnKSAmJiByZWxhdGl2ZVNlbC52YWx1ZSkge1xyXG4gICAgICAgICAgICBsZXQgdGVtcEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICB0ZW1wQnV0dG9uLnR5cGUgPSAnc3VibWl0JztcclxuICAgICAgICAgICAgcmVsYXRpdmVTZWwuY2xvc2VzdCgnZm9ybScpLmFwcGVuZCh0ZW1wQnV0dG9uKTtcclxuICAgICAgICAgICAgdGVtcEJ1dHRvbi5jbGljaygpO1xyXG4gICAgICAgICAgICB0ZW1wQnV0dG9uLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmZpbGxlZCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCk7XHJcbiAgICB9XHJcbiAgICAvLyBjdXN0b20gc2VsZWN0IGV2ZW50IChsaXN0ZW4gdG8gYW55IHNlbGVjdGlvbnMgLyBtdXRhdGlvbnMpXHJcbiAgICBzZWxlY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudCgnc2VsZWN0aW9uJywge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0OiByZWxhdGl2ZVNlbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxubmV3IFNlbGVjdCh7fSk7XHJcbiIsIi8qKlxyXG4gKiBzZXQgaGFzaCB0byB1cmxcclxuICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXRIYXNoID0gaGFzaCA9PiB7XHJcbiAgaGFzaCA9IGhhc2ggPyBgIyR7aGFzaH1gIDogd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVswXTtcclxuICBoaXN0b3J5LnB1c2hTdGF0ZSgnJywgJycsIGhhc2gpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIGdldCBoYXNoIGZyb20gdXJsXHJcbiAqIEByZXR1cm5zIHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEhhc2ggPSAoKSA9PiB7XHJcbiAgaWYgKGxvY2F0aW9uLmhhc2gpIHtcclxuICAgIHJldHVybiBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gYm9keSBsb2NrXHJcbmV4cG9ydCBsZXQgYm9keUxvY2tTdGF0dXMgPSB0cnVlO1xyXG4vKipcclxuICogdG9nZ2xlcyBib2R5IGxvY2tcclxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYm9keUxvY2tUb2dnbGUgPSAoZGVsYXkgPSA1MDApID0+IHtcclxuICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbG9jaycpKSB7XHJcbiAgICBib2R5VW5sb2NrKGRlbGF5KTtcclxuICB9IGVsc2Uge1xyXG4gICAgYm9keUxvY2soZGVsYXkpO1xyXG4gIH1cclxufTtcclxuLyoqXHJcbiAqIHVubG9ja3MgYm9keVxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcclxuICovXHJcbmV4cG9ydCBjb25zdCBib2R5VW5sb2NrID0gKGRlbGF5ID0gNTAwKSA9PiB7XHJcbiAgaWYgKGJvZHlMb2NrU3RhdHVzKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKTtcclxuICAgIH0sIGRlbGF5KTtcclxuICAgIGJvZHlMb2NrU3RhdHVzID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgYm9keUxvY2tTdGF0dXMgPSB0cnVlO1xyXG4gICAgfSwgZGVsYXkpO1xyXG4gIH1cclxufTtcclxuLyoqXHJcbiAqIGxvY2tzIGJvZHlcclxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYm9keUxvY2sgPSAoZGVsYXkgPSA1MDApID0+IHtcclxuICBpZiAoYm9keUxvY2tTdGF0dXMpIHtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XHJcblxyXG4gICAgYm9keUxvY2tTdGF0dXMgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBib2R5TG9ja1N0YXR1cyA9IHRydWU7XHJcbiAgICB9LCBkZWxheSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7YXJyYXl9IGFycmF5XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhU2V0VmFsdWVcclxuICogcHJvY2VzcyBtZWRpYSByZXF1ZXN0cyBmcm9tIGF0dHJpYnV0ZXNcclxuICovXHJcbmV4cG9ydCBjb25zdCBkYXRhTWVkaWFRdWVyaWVzID0gKGFycmF5LCBkYXRhU2V0VmFsdWUpID0+IHtcclxuICAvLyBnZXQgb2JqZWN0cyB3aXRoIG1lZGlhIHF1ZXJpZXNcclxuICBjb25zdCBtZWRpYSA9IEFycmF5LmZyb20oYXJyYXkpLmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIHNlbGYpIHtcclxuICAgIGlmIChpdGVtLmRhdGFzZXRbZGF0YVNldFZhbHVlXSkge1xyXG4gICAgICByZXR1cm4gaXRlbS5kYXRhc2V0W2RhdGFTZXRWYWx1ZV0uc3BsaXQoJywnKVswXTtcclxuICAgIH1cclxuICB9KTtcclxuICAvLyBvYmplY3RzIHdpdGggbWVkaWEgcXVlcmllcyBpbml0aWFsaXphdGlvblxyXG4gIGlmIChtZWRpYS5sZW5ndGgpIHtcclxuICAgIGNvbnN0IGJyZWFrcG9pbnRzQXJyYXkgPSBbXTtcclxuICAgIG1lZGlhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhcmFtcyA9IGl0ZW0uZGF0YXNldFtkYXRhU2V0VmFsdWVdO1xyXG4gICAgICBjb25zdCBicmVha3BvaW50ID0ge307XHJcbiAgICAgIGNvbnN0IHBhcmFtc0FycmF5ID0gcGFyYW1zLnNwbGl0KCcsJyk7XHJcbiAgICAgIGJyZWFrcG9pbnQudmFsdWUgPSBwYXJhbXNBcnJheVswXTtcclxuICAgICAgYnJlYWtwb2ludC50eXBlID0gcGFyYW1zQXJyYXlbMV0gPyBwYXJhbXNBcnJheVsxXS50cmltKCkgOiAnbWF4JztcclxuICAgICAgYnJlYWtwb2ludC5pdGVtID0gaXRlbTtcclxuICAgICAgYnJlYWtwb2ludHNBcnJheS5wdXNoKGJyZWFrcG9pbnQpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBnZXQgdW5pcXVlIGJyZWFrcG9pbnRzXHJcbiAgICBsZXQgbWRRdWVyaWVzID0gYnJlYWtwb2ludHNBcnJheS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAnKCcgK1xyXG4gICAgICAgIGl0ZW0udHlwZSArXHJcbiAgICAgICAgJy13aWR0aDogJyArXHJcbiAgICAgICAgaXRlbS52YWx1ZSArXHJcbiAgICAgICAgJ3B4KSwnICtcclxuICAgICAgICBpdGVtLnZhbHVlICtcclxuICAgICAgICAnLCcgK1xyXG4gICAgICAgIGl0ZW0udHlwZVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICBtZFF1ZXJpZXMgPSB1bmlxdWVBcnJheShtZFF1ZXJpZXMpO1xyXG4gICAgY29uc3QgbWRRdWVyaWVzQXJyYXkgPSBbXTtcclxuXHJcbiAgICBpZiAobWRRdWVyaWVzLmxlbmd0aCkge1xyXG4gICAgICAvLyB3b3JrIHdpdGggZXZlcnkgYnJlYWtwb2ludFxyXG4gICAgICBtZFF1ZXJpZXMuZm9yRWFjaChicmVha3BvaW50ID0+IHtcclxuICAgICAgICBjb25zdCBwYXJhbXNBcnJheSA9IGJyZWFrcG9pbnQuc3BsaXQoJywnKTtcclxuICAgICAgICBjb25zdCBtZWRpYUJyZWFrcG9pbnQgPSBwYXJhbXNBcnJheVsxXTtcclxuICAgICAgICBjb25zdCBtZWRpYVR5cGUgPSBwYXJhbXNBcnJheVsyXTtcclxuICAgICAgICBjb25zdCBtYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEocGFyYW1zQXJyYXlbMF0pO1xyXG4gICAgICAgIC8vIG9iamVjdHMgd2l0aCBjb25kaXRpb25zXHJcbiAgICAgICAgY29uc3QgaXRlbXNBcnJheSA9IGJyZWFrcG9pbnRzQXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICBpZiAoaXRlbS52YWx1ZSA9PT0gbWVkaWFCcmVha3BvaW50ICYmIGl0ZW0udHlwZSA9PT0gbWVkaWFUeXBlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1kUXVlcmllc0FycmF5LnB1c2goe1xyXG4gICAgICAgICAgaXRlbXNBcnJheSxcclxuICAgICAgICAgIG1hdGNoTWVkaWEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gbWRRdWVyaWVzQXJyYXk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIHNtb290aGx5IHNsaWRlcyB1cFxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcclxuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvd21vcmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBfc2xpZGVVcCA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwLCBzaG93bW9yZSA9IDApID0+IHtcclxuICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XHJcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnX3NsaWRlJyk7XHJcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2hlaWdodCwgbWFyZ2luLCBwYWRkaW5nJztcclxuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XHJcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gYCR7dGFyZ2V0Lm9mZnNldEhlaWdodH1weGA7XHJcbiAgICB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gc2hvd21vcmUgPyBgJHtzaG93bW9yZX1yZW1gIDogYDBgO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xyXG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IDA7XHJcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGFyZ2V0LmhpZGRlbiA9ICFzaG93bW9yZSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgIXNob3dtb3JlID8gdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKSA6IG51bGw7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJyk7XHJcbiAgICAgICFzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKSA6IG51bGw7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKTtcclxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ19zbGlkZScpO1xyXG4gICAgICAvLyBjcmVhdGUgZXZlbnRcclxuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ3NsaWRlVXBEb25lJywge1xyXG4gICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSwgZHVyYXRpb24pO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBzbW9vdGhseSBzbGlkZXMgZG93blxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcclxuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvd21vcmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBfc2xpZGVEb3duID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDAsIHNob3dtb3JlID0gMCkgPT4ge1xyXG4gIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcclxuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdfc2xpZGUnKTtcclxuICAgIHRhcmdldC5oaWRkZW4gPSB0YXJnZXQuaGlkZGVuID8gZmFsc2UgOiBudWxsO1xyXG4gICAgc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpIDogbnVsbDtcclxuICAgIGxldCBoZWlnaHQgPSB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gc2hvd21vcmUgPyBgJHtzaG93bW9yZX1yZW1gIDogYDBgO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xyXG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IDA7XHJcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgIHRhcmdldC5vZmZzZXRIZWlnaHQ7XHJcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2hlaWdodCwgbWFyZ2luLCBwYWRkaW5nJztcclxuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XHJcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKTtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJyk7XHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xyXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnX3NsaWRlJyk7XHJcbiAgICAgIC8vIGNyZWF0ZSBldmVudFxyXG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgIG5ldyBDdXN0b21FdmVudCgnc2xpZGVEb3duRG9uZScsIHtcclxuICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0sIGR1cmF0aW9uKTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogdG9nZ2xlcyBzbW9vdGggc2xpZGVcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxyXG4gKiBAcmV0dXJucyBmdW5jdGlvblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IF9zbGlkZVRvZ2dsZSA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwKSA9PiB7XHJcbiAgaWYgKHRhcmdldC5oaWRkZW4pIHtcclxuICAgIHJldHVybiBfc2xpZGVEb3duKHRhcmdldCwgZHVyYXRpb24pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gX3NsaWRlVXAodGFyZ2V0LCBkdXJhdGlvbik7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIGNvbnZlcnRzIHJlbSB0byBwaXhlbHNcclxuICogQHBhcmFtIHtudW1iZXJ9IHJlbVZhbHVlXHJcbiAqIEByZXR1cm5zIHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbVRvUHgocmVtVmFsdWUpIHtcclxuICAvLyDQn9C+0LvRg9GH0LDQtdC8INGC0LXQutGD0YnQuNC5INCx0LDQt9C+0LLRi9C5INGA0LDQt9C80LXRgCDRiNGA0LjRhNGC0LAgKGZvbnQtc2l6ZSkg0LjQtyDRjdC70LXQvNC10L3RgtCwIDxodG1sPlxyXG4gIHZhciBodG1sRm9udFNpemUgPSBwYXJzZUZsb2F0KFxyXG4gICAgZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmZvbnRTaXplXHJcbiAgKTtcclxuXHJcbiAgLy8g0J/QtdGA0LXQstC+0LTQuNC8INC30L3QsNGH0LXQvdC40LUg0LjQtyByZW0g0LIgcHhcclxuICB2YXIgcHhWYWx1ZSA9IHJlbVZhbHVlICogaHRtbEZvbnRTaXplO1xyXG5cclxuICAvLyDQntC60YDRg9Cz0LvRj9C10Lwg0LfQvdCw0YfQtdC90LjQtSDQtNC+INGG0LXQu9GL0YUg0L/QuNC60YHQtdC70LXQuSAo0L/QviDQttC10LvQsNC90LjRjilcclxuICByZXR1cm4gTWF0aC5yb3VuZChweFZhbHVlKSArICdweCc7XHJcbn1cclxuXHJcbi8vIHJlbW92ZSBjbGFzcyBmcm9tIGFsbCBhcnJheSBlbGVtZW50c1xyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2xhc3NlcyA9IChhcnJheSwgY2xhc3NOYW1lKSA9PiB7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgYXJyYXlbaV0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gIH1cclxufTtcclxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJFdWNsaWQgQ2lyY3VsYXIgQVwiO1xuICBmb250LXdlaWdodDogMzAwO1xuICBzcmM6IHVybChcIi4vYXNzZXRzL2ZvbnRzL0V1Y2xpZC1DaXJjdWxhci1BLUxpZ2h0LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkV1Y2xpZCBDaXJjdWxhciBBXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKFwiLi9hc3NldHMvZm9udHMvRXVjbGlkLUNpcmN1bGFyLUEtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJFdWNsaWQgQ2lyY3VsYXIgQVwiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IHVybChcIi4vYXNzZXRzL2ZvbnRzL0V1Y2xpZC1DaXJjdWxhci1BLU1lZGl1bS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJFdWNsaWQgQ2lyY3VsYXIgQVwiO1xuICBmb250LXdlaWdodDogNjAwO1xuICBzcmM6IHVybChcIi4vYXNzZXRzL2ZvbnRzL0V1Y2xpZC1DaXJjdWxhci1BLVNlbWlCb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkV1Y2xpZCBDaXJjdWxhciBBXCI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHNyYzogdXJsKFwiLi9hc3NldHMvZm9udHMvRXVjbGlkLUNpcmN1bGFyLUEtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTcGFjZSBBZ2VcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoXCIuL2Fzc2V0cy9mb250cy9TcGFjZS1BZ2Uud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU3BhY2UgQWdlIEN5cmlsbGljXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKFwiLi9hc3NldHMvZm9udHMvU3BhY2UtQWdlLUN5cmlsbGljLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkV1cm9wZUV4dGVuZGVkQ1wiO1xuICBmb250LXdlaWdodDogNzAwO1xuICBzcmM6IHVybChcIi4vYXNzZXRzL2ZvbnRzL0V1cm9wZS1FeHRlbmRlZC1DLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xufVxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBcIkV1Y2xpZCBDaXJjdWxhciBBXCI7XG4gIGZvbnQtc2l6ZTogMC41MjA4MzM1dnc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGJ1Z2ZpeCBpbmZpbml0ZSAxcztcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBidWdmaXggaW5maW5pdGUgMXM7XG4gIGhlaWdodDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDE2NTM7XG59XG5cbmlucHV0LFxudGV4dGFyZWEge1xuICAtd2Via2l0LWFuaW1hdGlvbjogYnVnZml4IGluZmluaXRlIDFzO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuYSB7XG4gIGNvbG9yOiB1bnNldDtcbn1cblxuYSxcbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmJ1dHRvbixcbmlucHV0LFxuYSxcbnRleHRhcmVhIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250OiBpbmhlcml0O1xufVxuYnV0dG9uOmZvY3VzLFxuaW5wdXQ6Zm9jdXMsXG5hOmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuYnV0dG9uOmFjdGl2ZSxcbmlucHV0OmFjdGl2ZSxcbmE6YWN0aXZlLFxudGV4dGFyZWE6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udDogaW5oZXJpdDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5wIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG51bCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxudWwgbGkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTYwcmVtO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG5zdmcsXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuaHRtbC5sb2NrLFxuaHRtbC5sb2NrIGJvZHkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLndyYXBwZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LXdpZHRoOiAxOTIwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAyLjNyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwO1xufVxuLmhlYWRlcl9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaGVhZGVyX19idXJnZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhlYWRlcl9fbG9nbyB7XG4gIG1heC13aWR0aDogMTcuOHJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNS43cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5oZWFkZXJfX2xvZ28gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmhlYWRlcl9fbWVudS1jb250YWN0cyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaGVhZGVyX19uYXYtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNi4zcmVtO1xufVxuLmhlYWRlcl9fbmF2LWl0ZW0taWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaGVhZGVyX19uYXYtaXRlbS1kcm9wZG93biB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaGVhZGVyX19uYXYtaXRlbS1saW5rIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICB0cmFuc2l0aW9uOiAwLjNzIGNvbG9yIGVhc2U7XG59XG4uaGVhZGVyX19uYXYtaXRlbS1saW5rOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OSk7XG59XG4uaGVhZGVyX19jb250YWN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS43cmVtO1xufVxuLmhlYWRlcl9fY29udGFjdHM6aG92ZXIgLmhlYWRlcl9fY29udGFjdHMtdGl0bGUge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY5KTtcbn1cbi5oZWFkZXJfX2NvbnRhY3RzOmhvdmVyIHN2ZyBwYXRoIHtcbiAgc3Ryb2tlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjkpO1xufVxuLmhlYWRlcl9fY29udGFjdHMtdGl0bGUge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogM3JlbTtcbiAgdHJhbnNpdGlvbjogMC4zcyBjb2xvciBlYXNlO1xufVxuLmhlYWRlcl9fY29udGFjdHMgc3ZnIHtcbiAgbWF4LXdpZHRoOiAyLjRyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIuNHJlbTtcbn1cbi5oZWFkZXJfX2NvbnRhY3RzIHN2ZyBwYXRoIHtcbiAgdHJhbnNpdGlvbjogMC4zcyBzdHJva2UgZWFzZTtcbn1cbi5oZWFkZXIgLmhhbWJ1cmdlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDQuNnJlbTtcbiAgaGVpZ2h0OiAzLjZyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5oZWFkZXIgLmhhbWJ1cmdlciBzcGFuLCAuaGVhZGVyIC5oYW1idXJnZXI6OmJlZm9yZSwgLmhlYWRlciAuaGFtYnVyZ2VyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdHJhbnNpdGlvbjogdG9wIDAuM3MgZWFzZSwgd2lkdGggMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3R0b20gMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xufVxuLmhlYWRlciAuaGFtYnVyZ2VyOjpiZWZvcmUge1xuICB0b3A6IDA7XG59XG4uaGVhZGVyIC5oYW1idXJnZXI6OmFmdGVyIHtcbiAgYm90dG9tOiAwO1xufVxuLmhlYWRlciAuaGFtYnVyZ2VyIHNwYW4ge1xuICB0b3A6IGNhbGMoNTAlIC0gMXB4KTtcbn1cbi5fbWVudS1vcGVuZWQgLmhlYWRlciAuaGFtYnVyZ2VyIHNwYW4ge1xuICB3aWR0aDogMDtcbn1cbi5fbWVudS1vcGVuZWQgLmhlYWRlciAuaGFtYnVyZ2VyOjpiZWZvcmUge1xuICB0b3A6IGNhbGMoNTAlIC0gMXB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5fbWVudS1vcGVuZWQgLmhlYWRlciAuaGFtYnVyZ2VyOjphZnRlciB7XG4gIGJvdHRvbTogY2FsYyg1MCUgLSAxcHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uX21lbnUtb3BlbmVkIC5oZWFkZXIgLmhhbWJ1cmdlciBzcGFuLCAuX21lbnUtb3BlbmVkIC5oZWFkZXIgLmhhbWJ1cmdlcjo6YmVmb3JlLCAuX21lbnUtb3BlbmVkIC5oZWFkZXIgLmhhbWJ1cmdlcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogXCJTcGFjZSBBZ2VcIjtcbiAgZm9udC1zaXplOiA5cmVtO1xufVxuXG4uc3VidGl0bGUge1xuICBmb250LWZhbWlseTogXCJTcGFjZSBBZ2VcIjtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4udHh0MzAge1xuICBmb250LXNpemU6IDNyZW07XG59XG5cbi50eHQxNiB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uY3lyIHtcbiAgZm9udC1mYW1pbHk6IFwiU3BhY2UgQWdlIEN5cmlsbGljXCI7XG59XG5cbi5idG4ge1xuICBwYWRkaW5nOiAwLjZyZW0gMC42cmVtIDAuNnJlbSAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAycmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzgpO1xuICBib3JkZXItcmFkaXVzOiAwIDRyZW0gNHJlbSA0cmVtO1xufVxuLmJ0bl9fYXJyb3ctd3JhcCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMCAwIDRyZW07XG4gIHdpZHRoOiA0LjRyZW07XG4gIGhlaWdodDogNC40cmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4uYnRuX19hcnJvdy1pY29uIHtcbiAgd2lkdGg6IDIuNHJlbTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9ZW1haWxdLFxuaW5wdXRbdHlwZT10ZWxdLFxudGV4dGFyZWEge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxudGV4dGFyZWE6Zm9jdXMsXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNC42cmVtIDIuN3JlbSAycmVtIDIuN3JlbTtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xufVxuLmlucHV0X3RleHRhcmVhIHtcbiAgaGVpZ2h0OiAyNS41cmVtO1xufVxuLmlucHV0X3RleHRhcmVhIHRleHRhcmVhIHtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICByZXNpemU6IG5vbmU7XG59XG4uaW5wdXRfX2ZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLmlucHV0X19maWVsZDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5pbnB1dF9fbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMS44cmVtO1xuICBsZWZ0OiAyLjdyZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5zZWxlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VsZWN0X19ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlbGVjdF9fdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDM7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZWxlY3RfX3ZhbHVlIHtcbiAgcGFkZGluZzogMS4zcmVtIDEuM3JlbSAxLjNyZW0gMi43cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMnJlbTtcbiAgaGVpZ2h0OiA3LjJyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNlbGVjdF9fdmFsdWUgPiAqIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4uc2VsZWN0X192YWx1ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDAgMCA1cmVtO1xuICB3aWR0aDogNXJlbTtcbiAgaGVpZ2h0OiA1cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2ljb25zL2Fyci13aGl0ZS5zdmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIuNHJlbTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuLnNlbGVjdF9fdmFsdWUuX3NlbGVjdC1sYWJlbDo6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLXNlbC1sYWJlbCk7XG59XG4uX3NlbGVjdC1maWxsZWQgLnNlbGVjdF9fdmFsdWUuX3NlbGVjdC1sYWJlbDo6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zZWxlY3RfX3ZhbHVlLl9zZWxlY3QtbGFiZWw6OmJlZm9yZSxcbi5zZWxlY3RfX3ZhbHVlIC5zZWxlY3RfX2NvbnRlbnQge1xuICBtYXgtd2lkdGg6IDMxLjRyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLnNlbGVjdF9fY29udGVudDpub3QoLl9zZWxlY3QtZmlsbGVkIC5zZWxlY3RfX2NvbnRlbnQpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zZWxlY3RfX3RleHQge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi5zZWxlY3RfX2lucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uc2VsZWN0X19vcHRpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IGNhbGMoMTAwJSAtIDNyZW0pO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiA0LjZyZW0gMi43cmVtIDIuNHJlbSAyLjdyZW07XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDNyZW0gM3JlbTtcbiAgYmFja2dyb3VuZDogIzM2Mzk2YztcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xufVxuLnNlbGVjdF9fc2Nyb2xsIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBtYXgtaGVpZ2h0OiAxOXJlbTtcbn1cbi5zZWxlY3RfX3Njcm9sbC5zaW1wbGViYXItc2Nyb2xsYWJsZS15IC5zaW1wbGViYXItdHJhY2suc2ltcGxlYmFyLXZlcnRpY2FsIHtcbiAgcmlnaHQ6IDEuMnJlbTtcbiAgd2lkdGg6IDAuNHJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2VlO1xufVxuLnNlbGVjdF9fc2Nyb2xsLnNpbXBsZWJhci1zY3JvbGxhYmxlLXkgLnNpbXBsZWJhci1zY3JvbGxiYXIge1xuICBtaW4taGVpZ2h0OiAzLjJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EyYWRjMTtcbn1cbi5zZWxlY3RfX29wdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XG59XG4uc2VsZWN0X19vcHRpb246bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbn1cbi5zZWxlY3RfX29wdGlvbi5fc2VsZWN0LXNlbGVjdGVkIHtcbiAgY29sb3I6ICMyOWZmN2Y7XG59XG4uc2VsZWN0X19ncm91cCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xufVxuLnNlbGVjdF9faGludCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDEwMCUgKyAwLjhyZW0pO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbGluZS1oZWlnaHQ6IDE0Mi44NTclO1xufVxuLnNlbGVjdF9fc3VidGl0bGUge1xuICBjdXJzb3I6IHRleHQ7XG59XG4uc2VsZWN0Ll9zZWxlY3Qtb3BlbmVkIHtcbiAgei1pbmRleDogNTtcbn1cbi5zZWxlY3QuX3NlbGVjdC1vcGVuZWQgLnNlbGVjdF9fdmFsdWU6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG59XG4uX3NlbGVjdC1saXN0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFkZ2Uge1xuICBwYWRkaW5nOiAxcmVtIDNyZW0gMXJlbSAxcmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMi41cmVtO1xuICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcbn1cbi5iYWRnZS5fYWN0aXZlIHtcbiAgY29sb3I6ICMxNDBhM2Y7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4uYmFkZ2UuX2FjdGl2ZSAuYmFkZ2VfX2ljb24td3JhcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODI2Nzg7XG59XG4uYmFkZ2UuX2FjdGl2ZSAuYmFkZ2VfX2ljb24td3JhcDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9pY29ucy9zdGFyLWFjdGl2ZS5zdmcpO1xufVxuLmJhZGdlX19pY29uLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDAgMCA0LjVyZW07XG4gIHdpZHRoOiA0LjVyZW07XG4gIGhlaWdodDogNC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xufVxuLmJhZGdlX19pY29uLXdyYXA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDhyZW07XG4gIGhlaWdodDogOHJlbTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9pY29ucy9zdGFyLnN2Zyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5pbnRybyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogLThyZW07XG4gIGhlaWdodDogMTA4cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxMC41cmVtO1xufVxuLmludHJvIC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaW50cm86OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMTAxNjUzIDAlLCByZ2JhKDIzLCAxNSwgNjcsIDApIDYzLjQ1JSk7XG4gIHotaW5kZXg6IC0xO1xuICBpbnNldDogMDtcbiAgYm90dG9tOiAtMC41cmVtO1xufVxuLmludHJvX19jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDExLjdyZW07XG59XG4uaW50cm9fX3RpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDExMCU7XG4gIG1hcmdpbi1ib3R0b206IDUuM3JlbTtcbn1cbi5pbnRyb19fcG9zdGVyLWltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgei1pbmRleDogLTE7XG59XG4uaW50cm9fX3Bvc3Rlci1pbWFnZSBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmludHJvX19yZXF1ZXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAzLjdyZW07XG4gIG1hcmdpbi1ib3R0b206IDUuOXJlbTtcbn1cbi5pbnRyb19fcmVxdWVzdC1wcm9qZWN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS44cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW50cm9fX3JlcXVlc3QtcHJvamVjdHM6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMnJlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMC4ycmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG4uaW50cm9fX3JlcXVlc3QtcHJvamVjdHMtY291bnRlciB7XG4gIHdpZHRoOiA1LjhyZW07XG4gIGhlaWdodDogNS44cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMyOWZmN2Y7XG59XG4uaW50cm9fX3JlcXVlc3QtcHJvamVjdHMtY291bnRlciBzcGFuIHtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIGZvbnQtZmFtaWx5OiBcIlNwYWNlIEFnZSBDeXJpbGxpY1wiO1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMS42cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW50cm9fX3JlcXVlc3QtcHJvamVjdHMtdGl0bGUge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuLmludHJvX19hcnRpY2xlcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCg1MXJlbSwgMWZyKSk7XG4gIGdhcDogMy43cmVtO1xufVxuLmludHJvX19hcnRpY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbnRyb19fYXJ0aWNsZS1saW5rIHtcbiAgcGFkZGluZzogMS4xcmVtIDZyZW0gMS4xcmVtIDQuMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDJyZW07XG59XG4uaW50cm9fX2FydGljbGUtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMjlmZjdmO1xufVxuLmludHJvX19hcnRpY2xlLWxpbmstdGl0bGUge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBtYXgtd2lkdGg6IDE1cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4zcyBjb2xvciBlYXNlO1xufVxuLmludHJvX19hcnRpY2xlLWxpbmstaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDIwLjJyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwLjJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5pbnRyb19fYXJ0aWNsZS1saW5rLWltYWdlIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbnRyb19fYXJ0aWNsZS1saW5rLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXJlbTtcbiAgcmlnaHQ6IDEuM3JlbTtcbiAgcGFkZGluZzogMC42cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xuICBtYXgtd2lkdGg6IDQuNnJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNC42cmVtO1xuICB0cmFuc2l0aW9uOiAwLjNzIGJhY2tncm91bmQgZWFzZTtcbn1cbi5pbnRyb19fYXJ0aWNsZS1saW5rLWljb24gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucHJvbW90aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMzFyZW07XG59XG4ucHJvbW90aW9uX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMCAxLjVyZW0gMCAyLjlyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9tb3Rpb25fX2NvbnRlbnQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIjNcIjtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMC41cmVtO1xuICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiByZ2JhKDQxLCAyNTUsIDEyNywgMC4xKTtcbiAgZm9udC1mYW1pbHk6IFwiU3BhY2UgQWdlIEN5cmlsbGljXCI7XG4gIGZvbnQtc2l6ZTogNzByZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMxMDE2NTM7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0b3A6IC0zNHJlbTtcbiAgei1pbmRleDogLTE7XG59XG4ucHJvbW90aW9uX19ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucHJvbW90aW9uX19ibG9jazpudGgtY2hpbGQoZXZlbikge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG4ucHJvbW90aW9uX19ibG9jazpudGgtY2hpbGQoZXZlbikgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDM0cmVtO1xufVxuLnByb21vdGlvbl9fc3VidGl0bGUge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4ubWFya2V0aW5nX19pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTE1LjJyZW07XG4gIHRvcDogLTEycmVtO1xuICBtYXgtd2lkdGg6IDc0cmVtO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYXJrZXRpbmdfX2NvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1hcmtldGluZ19fdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA0LjhyZW07XG59XG4ubWFya2V0aW5nX19pbmZvIHtcbiAgbWF4LXdpZHRoOiA1MXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAyMXJlbTtcbn1cbi5tYXJrZXRpbmdfX2luZm8tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogNC4xcmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG59XG4ubWFya2V0aW5nX19pbmZvLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1hcmtldGluZ19faW5mby1pdGVtIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYXJrZXRpbmdfX2luZm8taXRlbTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwLjVyZW07XG4gIGhlaWdodDogMC41cmVtO1xuICB0b3A6IDEuNXJlbTtcbiAgbGVmdDogLTJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbi5tYXJrZXRpbmdfX2luZm8tZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBtYXgtd2lkdGg6IDIxLjdyZW07XG59XG5cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuYm9keTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xuICBvcGFjaXR5OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjhzIGVhc2UgMHM7XG59XG4uX21lbnUtb3BlbmVkIGJvZHk6OmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XG4gIC50eHQyNSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xuICBodG1sIHtcbiAgICBmb250LXNpemU6IDVweDtcbiAgICBmb250LXNpemU6IDEuNTYyNXZ3O1xuICAgIGZvbnQtc2l6ZTogMS4zMzMzMzMzMzMzdnc7XG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xuICB9XG4gIGJvZHkge1xuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcbiAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDMuMnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMy42cmVtO1xuICB9XG4gIC5oZWFkZXJfX2NvbnRlbnQge1xuICAgIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcbiAgICBnYXA6IDE2cmVtO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZ2FwIGVhc2U7XG4gIH1cbiAgLl9tZW51LW9wZW5lZCAuaGVhZGVyX19jb250ZW50IHtcbiAgICBnYXA6IDExLjZyZW07XG4gIH1cbiAgLl9tZW51LW9wZW5lZCAuaGVhZGVyX19jb250ZW50OjphZnRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAuaGVhZGVyX19idXJnZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5oZWFkZXJfX2xvZ28ge1xuICAgIG1heC13aWR0aDogMjdyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4LjZyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbiAgLmhlYWRlcl9fbWVudSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNy40cmVtKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgICBiYWNrZ3JvdW5kOiAjMTAxNjUzO1xuICAgIHBhZGRpbmc6IDIxLjRyZW0gNS4ycmVtIDguOHJlbSA3LjhyZW07XG4gIH1cbiAgLl9tZW51LW9wZW5lZCAuaGVhZGVyX19tZW51IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAuaGVhZGVyX19tZW51LWNvbnRhY3RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogNHJlbTtcbiAgfVxuICAuaGVhZGVyX19tZW51LWNvbnRhY3RzLWl0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDIuNHJlbTtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY3KTtcbiAgICBmb250LXNpemU6IDMuMnJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgfVxuICAuaGVhZGVyX19tZW51LWNvbnRhY3RzLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBib3JkZXI6IDAuNHJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDByZW0gMjRyZW0gMjRyZW0gMjRyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMnJlbTtcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSA0cmVtO1xuICAgIHRyYW5zaXRpb246IDAuM3MgYm9yZGVyIGVhc2U7XG4gIH1cbiAgLmhlYWRlcl9fbWVudS1jb250YWN0cy1idXR0b246YWN0aXZlIHtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgfVxuICAuaGVhZGVyX19tZW51LWNvbnRhY3RzLWJ1dHRvbjphY3RpdmUgc3BhbiB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OSk7XG4gIH1cbiAgLmhlYWRlcl9fbWVudS1jb250YWN0cy1idXR0b246YWN0aXZlIC5oZWFkZXJfX21lbnUtY29udGFjdHMtYnV0dG9uLWljb24ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OSk7XG4gIH1cbiAgLmhlYWRlcl9fbWVudS1jb250YWN0cy1idXR0b24gc3BhbiB7XG4gICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGNvbG9yIGVhc2U7XG4gIH1cbiAgLmhlYWRlcl9fbWVudS1jb250YWN0cy1idXR0b24taWNvbiB7XG4gICAgcGFkZGluZzogMS40cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIG1heC13aWR0aDogNi44cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNi44cmVtO1xuICB9XG4gIC5oZWFkZXJfX21lbnUtY29udGFjdHMtYnV0dG9uLWljb24gaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmhlYWRlcl9fbmF2IHtcbiAgICBtYXgtaGVpZ2h0OiAxMDFyZW07XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmhlYWRlcl9fbmF2LWxpc3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiA3LjJyZW07XG4gIH1cbiAgLmhlYWRlcl9fbmF2LWl0ZW0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtLi0tYWN0aXZlIGEge1xuICAgIGNvbG9yOiAjMjlmZjdmO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtLWhlYWRpbmcge1xuICAgIHdpZHRoOiA5OCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmhlYWRlcl9fbmF2LWl0ZW0taGVhZGluZy4tLWFjdGl2ZSAuaGVhZGVyX19uYXYtaXRlbS1pY29uIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS1oZWFkaW5nLi0tYWN0aXZlIH4gLmhlYWRlcl9fbmF2LWl0ZW0tZHJvcGRvd24ge1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtLWhlYWRpbmcuLS1hY3RpdmUgfiAuaGVhZGVyX19uYXYtaXRlbS1kcm9wZG93biAuaGVhZGVyX19uYXYtaXRlbS1kcm9wZG93bi13cmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtLWhlYWRpbmcgYSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgLmhlYWRlcl9fbmF2LWl0ZW0taWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm0gZWFzZTtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS1kcm9wZG93biB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDBmcjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGdyaWQtdGVtcGxhdGUtcm93cyBlYXNlO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtLWRyb3Bkb3duLXdyYXBwZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogMC4zcyBtYXJnaW4gZWFzZTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHBhZGRpbmctbGVmdDogNC44cmVtO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtLWRyb3Bkb3duLWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtLWRyb3Bkb3duLWl0ZW06bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIG1hcmdpbi10b3A6IDVyZW07XG4gIH1cbiAgLmhlYWRlcl9fbmF2LWl0ZW0tbGluayB7XG4gICAgZm9udC1zaXplOiAzLjJyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIH1cbiAgLmhlYWRlcl9fY29udGFjdHMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIC5oZWFkZXJfX2NvbnRhY3RzLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5oZWFkZXJfX2NvbnRhY3RzIHN2ZyB7XG4gICAgbWF4LXdpZHRoOiA0LjhyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0LjhyZW07XG4gIH1cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDZyZW07XG4gIH1cbiAgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cbiAgLnR4dDMwIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cbiAgLnR4dDE2IHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgLmJ0biB7XG4gICAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gNHJlbTtcbiAgICBjb2x1bW4tZ2FwOiAzLjJyZW07XG4gICAgYm9yZGVyOiAwLjRyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4KTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDhyZW0gOHJlbSA4cmVtO1xuICB9XG4gIC5idG5fX2Fycm93LXdyYXAge1xuICAgIGZsZXg6IDAgMCA3cmVtO1xuICAgIHdpZHRoOiA3cmVtO1xuICAgIGhlaWdodDogN3JlbTtcbiAgfVxuICAuYnRuX19hcnJvdy1pY29uIHtcbiAgICB3aWR0aDogMy44cmVtO1xuICB9XG4gIC5pbnB1dCB7XG4gICAgcGFkZGluZzogN3JlbSA4cmVtIDIuNHJlbSAyLjRyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHJlbTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHJlbSk7XG4gIH1cbiAgLmlucHV0X3RleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDM0LjhyZW07XG4gIH1cbiAgLmlucHV0X19sYWJlbCB7XG4gICAgdG9wOiAyLjRyZW07XG4gICAgbGVmdDogMi40cmVtO1xuICB9XG4gIC5zZWxlY3RfX3RpdGxlIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cmVtO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcbiAgfVxuICAuc2VsZWN0X192YWx1ZSB7XG4gICAgcGFkZGluZzogMS42cmVtO1xuICAgIGdhcDogNHJlbTtcbiAgICBoZWlnaHQ6IDEwcmVtO1xuICB9XG4gIC5zZWxlY3RfX3ZhbHVlOjphZnRlciB7XG4gICAgZmxleDogMCAwIDZyZW07XG4gICAgd2lkdGg6IDZyZW07XG4gICAgaGVpZ2h0OiA2cmVtO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMy4ycmVtO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyLjRyZW0pO1xuICB9XG4gIC5zZWxlY3RfX29wdGlvbnMge1xuICAgIHRvcDogY2FsYygxMDAlIC0gNHJlbSk7XG4gICAgcGFkZGluZzogOHJlbSA0cmVtIDRyZW0gNHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNHJlbSA0cmVtO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcbiAgfVxuICAuc2VsZWN0X19vcHRpb246bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbiAgfVxuICAuYmFkZ2Uge1xuICAgIHBhZGRpbmc6IDJyZW0gOHJlbSAycmVtIDJyZW07XG4gICAgY29sdW1uLWdhcDogM3JlbTtcbiAgICBib3JkZXItcmFkaXVzOiA2cmVtO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcbiAgfVxuICAuYmFkZ2VfX2ljb24td3JhcCB7XG4gICAgZmxleDogMCAwIDZyZW07XG4gICAgd2lkdGg6IDZyZW07XG4gICAgaGVpZ2h0OiA2cmVtO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcbiAgfVxuICAuYmFkZ2VfX2ljb24td3JhcDo6YmVmb3JlIHtcbiAgICB3aWR0aDogMTByZW07XG4gICAgaGVpZ2h0OiAxMHJlbTtcbiAgfVxuICAuaW50cm8ge1xuICAgIGhlaWdodDogMTY0cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDE1LjVyZW07XG4gIH1cbiAgLmludHJvIHtcbiAgICBtYXJnaW4tdG9wOiAtMTZyZW07XG4gIH1cbiAgLmludHJvX190aXRsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDg1JTtcbiAgICBtYXJnaW4tYm90dG9tOiA3LjNyZW07XG4gIH1cbiAgLmludHJvX190aXRsZSBzcGFuIHtcbiAgICBjb2xvcjogIzI5ZmY3ZjtcbiAgfVxuICAuaW50cm9fX3Bvc3Rlci1pbWFnZSBpbWcge1xuICAgIG9iamVjdC1wb3NpdGlvbjogLTE0MHJlbTtcbiAgfVxuICAuaW50cm9fX3JlcXVlc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDE3cmVtO1xuICAgIGdhcDogNXJlbTtcbiAgfVxuICAuaW50cm9fX3JlcXVlc3QtcHJvamVjdHM6OmFmdGVyIHtcbiAgICBsZWZ0OiAtM3JlbTtcbiAgICB3aWR0aDogMC40cmVtO1xuICB9XG4gIC5pbnRyb19fcmVxdWVzdC1wcm9qZWN0cyB7XG4gICAgZ2FwOiAyLjRyZW07XG4gIH1cbiAgLmludHJvX19yZXF1ZXN0LXByb2plY3RzLWNvdW50ZXIge1xuICAgIHdpZHRoOiA4LjhyZW07XG4gICAgaGVpZ2h0OiA4LjhyZW07XG4gIH1cbiAgLmludHJvX19yZXF1ZXN0LXByb2plY3RzLWNvdW50ZXIgc3BhbiB7XG4gICAgZm9udC1zaXplOiAyLjQ4cmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjc3MzVyZW07XG4gICAgbWFyZ2luLXRvcDogMy41cmVtO1xuICB9XG4gIC5pbnRyb19fcmVxdWVzdC1wcm9qZWN0cy10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgfVxuICAuaW50cm9fX2FydGljbGVzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMTUuMnJlbSwgMWZyKSk7XG4gICAgZ2FwOiAyLjhyZW07XG4gIH1cbiAgLmludHJvX19hcnRpY2xlIHtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICB9XG4gIC5pbnRyb19fYXJ0aWNsZS1saW5rIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMi42cmVtO1xuICAgIHBhZGRpbmc6IDExLjVyZW0gMnJlbSAzcmVtO1xuICB9XG4gIC5pbnRyb19fYXJ0aWNsZS1saW5rLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmludHJvX19hcnRpY2xlLWxpbmstaW1hZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXgtd2lkdGg6IDE2LjJyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNi4ycmVtO1xuICAgIHRvcDogLTZyZW07XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgfVxuICAuaW50cm9fX2FydGljbGUtbGluay1pY29uIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHBhZGRpbmc6IDAuOHJlbTtcbiAgICBtYXgtd2lkdGg6IDZyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2cmVtO1xuICB9XG4gIC5wcm9tb3Rpb25fX2NvbnRlbnQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG4gIC5wcm9tb3Rpb25fX3RpdGxlIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xuICB9XG4gIC5wcm9tb3Rpb25fX2Jsb2NrIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG4gIC5wcm9tb3Rpb25fX2Jsb2NrOmxhc3QtY2hpbGQgLnByb21vdGlvbl9fdGl0bGUge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wcm9tb3Rpb25fX2Jsb2NrOm50aC1jaGlsZChldmVuKSB7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIH1cbiAgLnByb21vdGlvbl9fYmxvY2s6bnRoLWNoaWxkKGV2ZW4pIHNwYW4ge1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuICAucHJvbW90aW9uX19ibG9jazpudGgtY2hpbGQob2RkKSB7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICB9XG4gIC5wcm9tb3Rpb25fX2Jsb2NrOm50aC1jaGlsZChvZGQpIC5wcm9tb3Rpb25fX3RpdGxlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XG4gIH1cbiAgLnByb21vdGlvbl9fc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIH1cbiAgLm1hcmtldGluZ19faW1hZ2Uge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgbWF4LXdpZHRoOiA2OHJlbTtcbiAgfVxuICAubWFya2V0aW5nX19jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5tYXJrZXRpbmdfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0LjRyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5tYXJrZXRpbmdfX2luZm8ge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAubWFya2V0aW5nX19pbmZvLXJvdyB7XG4gICAgZ2FwOiAzcmVtO1xuICB9XG4gIC5tYXJrZXRpbmdfX2luZm8tbGlzdCB7XG4gICAgZ2FwOiAycmVtO1xuICB9XG4gIC5tYXJrZXRpbmdfX2luZm8taXRlbSB7XG4gICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIH1cbiAgLm1hcmtldGluZ19faW5mby1pdGVtOjphZnRlciB7XG4gICAgdG9wOiAwLjVyZW07XG4gICAgd2lkdGg6IDFyZW07XG4gICAgaGVpZ2h0OiAxcmVtO1xuICB9XG4gIC5tYXJrZXRpbmdfX2luZm8tZGVzY3JpcHRpb24ge1xuICAgIG1heC13aWR0aDogMzMuMnJlbTtcbiAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB9XG59XG5AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcbiAgLnNlbGVjdF9fb3B0aW9uOmhvdmVyOm5vdCguc2VsZWN0X19vcHRpb246aG92ZXIuc2VsZWN0X19zdWJ0aXRsZSkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzI5ZmY3ZjtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3NlY3Rpb25zL2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9taXhpbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3VpL3N0eWxlcy9fdHlwby5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL19idXR0b24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3VpL3N0eWxlcy9faW5wdXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3VpL3N0eWxlcy9fc2VsZWN0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvX2JhZGdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3NlY3Rpb25zL19pbnRyby5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zZWN0aW9ucy9fcHJvbW90aW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3NlY3Rpb25zL19tYXJrZXRpbmcuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZGV2L3VraWswLnNjc3NcIixcIjxubyBzb3VyY2U+XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLHdFQUFBO0FDQ0o7QURFQTtFQUNJLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwRUFBQTtBQ0FKO0FER0E7RUFDSSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EseUVBQUE7QUNESjtBRElBO0VBQ0ksZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLDJFQUFBO0FDRko7QURLQTtFQUNJLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1RUFBQTtBQ0hKO0FETUE7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMERBQUE7QUNKSjtBRE9BO0VBQ0ksaUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FDTEo7QURRQTtFQUNJLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrRUFBQTtBQ05KO0FDdkNBOzs7RUFHSSxzQkFBQTtBRHlDSjs7QUN2Q0E7RUFDSSxnQ0RJRTtFQ0hGLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUQwQ0o7O0FDdkNBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNEYkk7RUNjSix5QkRQTTtBQWlEVjs7QUN2Q0E7O0VBRUkscUNBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBRDBDSjs7QUN4Q0E7RUFDSSxZQUFBO0FEMkNKOztBQ3pDQTs7RUFFSSxxQkFBQTtBRDRDSjs7QUN6Q0E7Ozs7RUFJSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFB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QTtFVnNwQ2xCO0VVaHBDRTtJQU9RLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VWb3BDVjtFV2h2Q0U7SUFRUSxnQkFBQTtJQUNBLGdCQUFBO0VYcXZDVjtFV2p2Q0U7SUFRUSxzQkFBQTtFWHF2Q1Y7RVdqdkNFO0lBSVEscUJBQUE7SUFDQSxrQkFBQTtFWHF2Q1Y7RVdqdkNFO0lBTVEsZUFBQTtJQUNBLGNBQUE7RVhxdkNWO0VXbHZDTTtJQVFRLFNBQUE7RVhzdkNkO0VXbHZDTTtJQU9RLFNBQUE7RVhzdkNkO0VXbHZDTTtJQU9RLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VYdXZDZDtFRzl5Q0U7SUFVWSxXQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUhtekNkO0VXbHdDTTtJQVFRLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RVhzd0NkO0FBbkhGO0FhbnZDQTtFTjJLZ0I7SUFDSSxlQUFBO0lBQ0EsY1AzSlo7RUF1ekJOO0FBZ2JGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0V1Y2xpZCBDaXJjdWxhciBBJztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0V1Y2xpZC1DaXJjdWxhci1BLUxpZ2h0LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdFdWNsaWQgQ2lyY3VsYXIgQSc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9FdWNsaWQtQ2lyY3VsYXItQS1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdFdWNsaWQgQ2lyY3VsYXIgQSc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9FdWNsaWQtQ2lyY3VsYXItQS1NZWRpdW0ud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0V1Y2xpZCBDaXJjdWxhciBBJztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0V1Y2xpZC1DaXJjdWxhci1BLVNlbWlCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdFdWNsaWQgQ2lyY3VsYXIgQSc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9FdWNsaWQtQ2lyY3VsYXItQS1Cb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTcGFjZSBBZ2UnO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvU3BhY2UtQWdlLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTcGFjZSBBZ2UgQ3lyaWxsaWMnO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvU3BhY2UtQWdlLUN5cmlsbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdFdXJvcGVFeHRlbmRlZEMnO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvRXVyb3BlLUV4dGVuZGVkLUMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxyXFxufVxcclxcblwiLFwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1peGlucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG5cXHJcXG5AaW1wb3J0ICcuL21peGlucyc7XFxyXFxuXFxyXFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdmFyaWFibGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG5cXHJcXG4vLyBmb250c1xcclxcbiRzcGFjZUFnZTogJ1NwYWNlIEFnZSc7XFxyXFxuJHNwYWNlQWdlQ3lyOiAnU3BhY2UgQWdlIEN5cmlsbGljJztcXHJcXG4kRXVyb3BlRTogJ0V1cm9wZUV4dGVuZGVkQyc7XFxyXFxuJEVDQTogJ0V1Y2xpZCBDaXJjdWxhciBBJztcXHJcXG5cXHJcXG4vLyBjb2xvcnNcXHJcXG4kd2hpdGU6ICNmZmZmZmY7XFxyXFxuJHdoaXRlLXNlY29uZGFyeTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY5KTtcXHJcXG4kYmxhY2s6ICMwMDAwMDA7XFxyXFxuJGRhcmtQdXJwbGU6ICMxMTA3M2I7XFxyXFxuJGRhcmtQdXJwbGUyOiAjMTQwYTNmO1xcclxcbiRncmVlbjogIzI5ZmY3ZjtcXHJcXG4kYmx1ZTogIzE4MjY3ODtcXHJcXG4kYmdDb2xvcjogIzEwMTY1MztcXHJcXG5cXHJcXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZvbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcblxcclxcbi8vIGxvY2FsIGZvbnRzXFxyXFxuQGltcG9ydCAnLi9mb250cyc7XFxyXFxuXFxyXFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBiYXNlIHN0eWxlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG5cXHJcXG4vLyBiYXNlIHNjc3MgZmlsZVxcclxcbkBpbXBvcnQgJy4vc2V0JztcXHJcXG5cXHJcXG4vLyBodG1sXFxyXFxuaHRtbC5sb2NrLFxcclxcbmh0bWwubG9jayBib2R5IHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdG91Y2gtYWN0aW9uOiBub25lO1xcclxcbn1cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi8vIG1haW5cXHJcXG5tYWluIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWF4LXdpZHRoOiAxOTIwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG5cXHJcXG4vLyBoZWFkZXIgLyBmb290ZXJcXHJcXG5AaW1wb3J0ICcuL3NlY3Rpb25zL2hlYWRlcic7XFxyXFxuQGltcG9ydCAnLi9zZWN0aW9ucy9mb290ZXInO1xcclxcblxcclxcbi8vIHVpXFxyXFxuQGltcG9ydCAnLi4vdWkvc3R5bGVzL3VpLnNjc3MnO1xcclxcblxcclxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuXFxyXFxuQGltcG9ydCAnLi9kZXYvdnptc2sxLnNjc3MnO1xcclxcbkBpbXBvcnQgJy4vZGV2L21hcmt1c0RNLnNjc3MnO1xcclxcbkBpbXBvcnQgJy4vZGV2L3VraWswLnNjc3MnO1xcclxcbkBpbXBvcnQgJy4vZGV2L2tpZTZlci5zY3NzJztcXHJcXG5cIixcIiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuaHRtbCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkRUNBOyAvLyDRiNGA0LjRhNGCINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINC/0L4g0YHQsNC50YLRg1xcclxcbiAgICBmb250LXNpemU6IDAuNTIwODMzNXZ3OyAvLyDQvdCwINGA0LDQt9GA0LXRiNC10L3QuNC4IDE5MjAgMC41MjA4MzV2dyA9PT0gMTBweFxcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBidWdmaXggaW5maW5pdGUgMXM7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYnVnZml4IGluZmluaXRlIDFzO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIGNvbG9yOiAkd2hpdGU7IC8vINGG0LLQtdGCINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINGC0LXQutGB0YLQsCDQv9C+INGB0LDQudGC0YNcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnQ29sb3I7XFxyXFxufVxcclxcblxcclxcbmlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJ1Z2ZpeCBpbmZpbml0ZSAxcztcXHJcXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcbmEge1xcclxcbiAgICBjb2xvcjogdW5zZXQ7XFxyXFxufVxcclxcbmEsXFxyXFxuYTpob3ZlciB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbmEsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICAgICY6Zm9jdXMge1xcclxcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAmOmFjdGl2ZSB7XFxyXFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2IHtcXHJcXG4gICAgZm9udDogaW5oZXJpdDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5wIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG51bCB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxudWwgbGkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTYwcmVtO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxyXFxuaW5wdXRbdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nbnVtYmVyJ10ge1xcclxcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXHJcXG59XFxyXFxuXFxyXFxuc3ZnLFxcclxcbmltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxOTIwcHgpIHtcXHJcXG4gICAgaHRtbCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXHJcXG4gICAgaHRtbCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDVweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41NjI1dnc7XFxyXFxuICAgICAgICBmb250LXNpemU6IGNhbGMoKDEwMCAvIDM3NSkgKiA1dncpOyAvLyDQs9C00LUgMzc1INGN0YLQviDRiNC40YDQuNC90LAg0LzQvtCxINCy0LXRgNGB0LjQuCDQvNCw0LrQtdGC0LBcXHJcXG4gICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBib2R5IHtcXHJcXG4gICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWluZXIge1xcclxcbiAgICAgICAgcGFkZGluZzogMCAzLjJyZW07IC8vINCyINC80L7QsSDQstC10YDRgdC40Lgg0L7RgtGB0YLRg9C/INC+0YIg0LrRgNCw0Y8g0LfQsNC00LDQtdC8INC00LvRjyDQstGB0LXRhSDQutC+0L3RgtC10LnQvdC10YDQvtCyLCDQsCDRgtCw0Lwg0LPQtNC1INC90LUg0L3Rg9C20L3QviDQvNC+0LbQtdC8INGC0L7Rh9C10YfQvdC+INGD0LHRgNCw0YLRjFxcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsXCIuaGVhZGVyIHtcXG4gICAgcGFkZGluZy10b3A6IDIuM3JlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuXFxuICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMy42cmVtO1xcbiAgICB9XFxuXFxuICAgICZfX2NvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xcbiAgICAgICAgICAgIGdhcDogMTZyZW07XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBnYXAgZWFzZTtcXG5cXG4gICAgICAgICAgICAuX21lbnUtb3BlbmVkICYge1xcbiAgICAgICAgICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGdhcDogMTEuNnJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fYnVyZ2VyIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2xvZ28ge1xcbiAgICAgICAgQGluY2x1ZGUgc2l6ZXMoMTcuOHJlbSwgNS43cmVtKTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBzaXplcygyN3JlbSwgOC42cmVtKTtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX21lbnUge1xcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA3LjRyZW0pO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAwLjNzIGVhc2UsXFxuICAgICAgICAgICAgICAgIG9wYWNpdHkgMC4zcyBlYXNlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiZ0NvbG9yO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDIxLjRyZW0gNS4ycmVtIDguOHJlbSA3LjhyZW07XFxuXFxuICAgICAgICAgICAgLl9tZW51LW9wZW5lZCAmIHtcXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtY29udGFjdHMge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xcblxcbiAgICAgICAgICAgICAgICAmLWl0ZW0ge1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMi40cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42Nyk7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuMnJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAmLWJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLjRyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4KTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDByZW0gMjRyZW0gMjRyZW0gMjRyZW07XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGdhcDogMnJlbTtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDRyZW07XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGJvcmRlciBlYXNlO1xcblxcbiAgICAgICAgICAgICAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlLXNlY29uZGFyeTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS1jb250YWN0cy1idXR0b24taWNvbiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZS1zZWNvbmRhcnk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGNvbG9yIGVhc2U7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAmLWljb24ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuNHJlbTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNpemVzKDYuOHJlbSwgNi44cmVtKTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19uYXYge1xcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDFyZW07XFxuICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLWxpc3Qge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDYuM3JlbTtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgICAgICAgICAgZ2FwOiA3LjJyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1pdGVtIHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgICAgICAgICAgICAgJi4tLWFjdGl2ZSB7XFxuICAgICAgICAgICAgICAgICAgICBhIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyZWVuO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICYtaGVhZGluZyB7XFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTglO1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgICAgICAgICAgICAgICAmLi0tYWN0aXZlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGVhZGVyX19uYXYtaXRlbS1pY29uIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIH4gLmhlYWRlcl9fbmF2LWl0ZW0tZHJvcGRvd24ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRlcl9fbmF2LWl0ZW0tZHJvcGRvd24td3JhcHBlciB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgYSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJi1pY29uIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm0gZWFzZTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLWRyb3Bkb3duIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDBmcjtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgZ3JpZC10ZW1wbGF0ZS1yb3dzIGVhc2U7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgJi13cmFwcGVyIHtcXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIG1hcmdpbiBlYXNlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0LjhyZW07XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgJi1pdGVtIHtcXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjJyZW07XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVyZW07XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICYtbGluayB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBjb2xvciBlYXNlO1xcblxcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUtc2Vjb25kYXJ5O1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuMnJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19jb250YWN0cyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMS43cmVtO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIC5oZWFkZXJfX2NvbnRhY3RzLXRpdGxlIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZS1zZWNvbmRhcnk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHN2ZyB7XFxuICAgICAgICAgICAgICAgIHBhdGgge1xcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAkd2hpdGUtc2Vjb25kYXJ5O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi10aXRsZSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBjb2xvciBlYXNlO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgc3ZnIHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBzaXplcygyLjRyZW0sIDIuNHJlbSk7XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc2l6ZXMoNC44cmVtLCA0LjhyZW0pO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBwYXRoIHtcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBzdHJva2UgZWFzZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmhhbWJ1cmdlciB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgd2lkdGg6IDQuNnJlbTtcXG4gICAgICAgIGhlaWdodDogMy42cmVtO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgc3BhbixcXG4gICAgICAgICY6OmJlZm9yZSxcXG4gICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBwc2V1ZG8ge1xcbiAgICAgICAgICAgICAgICByaWdodDogMDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246XFxuICAgICAgICAgICAgICAgICAgICB0b3AgMC4zcyBlYXNlLFxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggMC4zcyBlYXNlLFxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIDAuM3MgZWFzZSxcXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbSAwLjNzIGVhc2UsXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgfVxcbiAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIH1cXG4gICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSAxcHgpO1xcbiAgICAgICAgfVxcbiAgICAgICAgLl9tZW51LW9wZW5lZCAmIHtcXG4gICAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSAxcHgpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgICAgIGJvdHRvbTogY2FsYyg1MCUgLSAxcHgpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHNwYW4sXFxuICAgICAgICAgICAgJjo6YmVmb3JlLFxcbiAgICAgICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcIkBtaXhpbiBwc2V1ZG8oKSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIEBjb250ZW50O1xcbn1cXG5cXG5AbWl4aW4gc21hbGwtdGFibGV0IHtcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIEBjb250ZW50O1xcbiAgICB9XFxufVxcblxcbkBtaXhpbiBzaXplcygkd2lkdGgsICRoZWlnaHQpIHtcXG4gICAgbWF4LXdpZHRoOiAkd2lkdGg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XFxuXFxuICAgIEBjb250ZW50O1xcbn1cXG5cXG5AbWl4aW4gaXRlbS1kb3QoKSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgQGluY2x1ZGUgcHNldWRvIHtcXG4gICAgICAgICAgICB3aWR0aDogMC41cmVtO1xcbiAgICAgICAgICAgIGhlaWdodDogMC41cmVtO1xcbiAgICAgICAgICAgIHRvcDogMS41cmVtO1xcbiAgICAgICAgICAgIGxlZnQ6IC0ycmVtO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIHRvcDogMC41cmVtO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMXJlbTtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBAY29udGVudDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcIi50aXRsZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkc3BhY2VBZ2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogOXJlbTtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc3VidGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogJHNwYWNlQWdlO1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnR4dDI1IHtcXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi50eHQzMCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4udHh0MTYge1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY3lyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRzcGFjZUFnZUN5cjtcXHJcXG59XFxyXFxuXCIsXCIuYnRuIHtcXG4gICAgcGFkZGluZzogMC42cmVtIDAuNnJlbSAwLjZyZW0gMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogMnJlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMCA0cmVtIDRyZW0gNHJlbTtcXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDRyZW07XFxuICAgICAgICBjb2x1bW4tZ2FwOiAzLjJyZW07XFxuICAgICAgICBib3JkZXI6IDAuNHJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzgpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA4cmVtIDhyZW0gOHJlbTtcXG4gICAgfVxcblxcbiAgICAvLyAuYnRuX190ZXh0XFxuXFxuICAgICZfX3RleHQge1xcbiAgICB9XFxuXFxuICAgIC8vIC5idG5fX2Fycm93LXdyYXBcXG5cXG4gICAgJl9fYXJyb3ctd3JhcCB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGZsZXg6IDAgMCA0cmVtO1xcbiAgICAgICAgd2lkdGg6IDQuNHJlbTtcXG4gICAgICAgIGhlaWdodDogNC40cmVtO1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgZmxleDogMCAwIDdyZW07XFxuICAgICAgICAgICAgd2lkdGg6IDdyZW07XFxuICAgICAgICAgICAgaGVpZ2h0OiA3cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5idG5fX2Fycm93LWljb25cXG5cXG4gICAgJl9fYXJyb3ctaWNvbiB7XFxuICAgICAgICB3aWR0aDogMi40cmVtO1xcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgd2lkdGg6IDMuOHJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcImlucHV0W3R5cGU9J3RleHQnXSxcXHJcXG5pbnB1dFt0eXBlPSdlbWFpbCddLFxcclxcbmlucHV0W3R5cGU9J3RlbCddLFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcbnRleHRhcmVhOmZvY3VzLFxcclxcbmlucHV0OmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBwYWRkaW5nOiA0LjZyZW0gMi43cmVtIDJyZW0gMi43cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxyXFxuICAgICZfdGV4dGFyZWEge1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNS41cmVtO1xcclxcbiAgICAgICAgdGV4dGFyZWEge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcclxcbiAgICAgICAgcGFkZGluZzogN3JlbSA4cmVtIDIuNHJlbSAyLjRyZW07XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cmVtO1xcclxcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRyZW0pO1xcclxcbiAgICAgICAgJl90ZXh0YXJlYSB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAzNC44cmVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8vIC5pbnB1dF9fZmllbGRcXHJcXG5cXHJcXG4gICAgJl9fZmllbGQge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gLmlucHV0X19sYWJlbFxcclxcblxcclxcbiAgICAmX19sYWJlbCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDEuOHJlbTtcXHJcXG4gICAgICAgIGxlZnQ6IDIuN3JlbTtcXHJcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcclxcbiAgICAgICAgICAgIHRvcDogMi40cmVtO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDIuNHJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLl9mb3JtLWZvY3VzIHtcXHJcXG4gICAgfVxcclxcbiAgICAmLl9mb3JtLWVycm9yIHtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIixcIi5zZWxlY3Qge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgIC8vIC5zZWxlY3RfX2JvZHlcXHJcXG5cXHJcXG4gICAgJl9fYm9keSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gLnNlbGVjdF9fdGl0bGVcXHJcXG5cXHJcXG4gICAgJl9fdGl0bGUge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgei1pbmRleDogMztcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XFxyXFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRyZW07XFxyXFxuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRyZW0pO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8vIC5zZWxlY3RfX3ZhbHVlXFxyXFxuXFxyXFxuICAgICZfX3ZhbHVlIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEuM3JlbSAxLjNyZW0gMS4zcmVtIDIuN3JlbTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgZ2FwOiAycmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiA3LjJyZW07XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgICAgID4gKiB7XFxyXFxuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBmbGV4OiAwIDAgNXJlbTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNXJlbTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcclxcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2ljb25zL2Fyci13aGl0ZS5zdmcpO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMi40cmVtO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAmLl9zZWxlY3QtbGFiZWwge1xcclxcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1zZWwtbGFiZWwpO1xcclxcbiAgICAgICAgICAgICAgICAuX3NlbGVjdC1maWxsZWQgJiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgJi5fc2VsZWN0LWxhYmVsOjpiZWZvcmUsXFxyXFxuICAgICAgICAuc2VsZWN0X19jb250ZW50IHtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMxLjRyZW07XFxyXFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjZyZW07XFxyXFxuICAgICAgICAgICAgZ2FwOiA0cmVtO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTByZW07XFxyXFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgNnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDZyZW07XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogNnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzLjJyZW07XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyLjRyZW0pO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyAuc2VsZWN0X19jb250ZW50XFxyXFxuXFxyXFxuICAgICZfX2NvbnRlbnQge1xcclxcbiAgICAgICAgLy8gaGlkZSAvIHNob3cgc2VsZWN0ZWQgdmFsdWVcXHJcXG4gICAgICAgICY6bm90KC5fc2VsZWN0LWZpbGxlZCAmKSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyAuc2VsZWN0X190ZXh0XFxyXFxuXFxyXFxuICAgICZfX3RleHQge1xcclxcbiAgICAgICAgZmxleDogMSAxIGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gLnNlbGVjdF9faW5wdXRcXHJcXG5cXHJcXG4gICAgJl9faW5wdXQge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyAuc2VsZWN0X19vcHRpb25zXFxyXFxuXFxyXFxuICAgICZfX29wdGlvbnMge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgei1pbmRleDogMjtcXHJcXG4gICAgICAgIHRvcDogY2FsYygxMDAlIC0gM3JlbSk7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgcGFkZGluZzogNC42cmVtIDIuN3JlbSAyLjRyZW0gMi43cmVtO1xcclxcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDNyZW0gM3JlbTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICMzNjM5NmM7XFxyXFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcclxcbiAgICAgICAgICAgIHRvcDogY2FsYygxMDAlIC0gNHJlbSk7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogOHJlbSA0cmVtIDRyZW0gNHJlbTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNHJlbSA0cmVtO1xcclxcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyAuc2VsZWN0X19zY3JvbGxcXHJcXG5cXHJcXG4gICAgJl9fc2Nyb2xsIHtcXHJcXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuXFxyXFxuICAgICAgICAvLyBtYXhpbXVtIGhlaWdodFxcclxcbiAgICAgICAgbWF4LWhlaWdodDogMTlyZW07XFxyXFxuXFxyXFxuICAgICAgICAvLyBzY3JvbGxiYXIgc3R5bGVzXFxyXFxuICAgICAgICAmLnNpbXBsZWJhci1zY3JvbGxhYmxlLXkge1xcclxcbiAgICAgICAgICAgIC5zaW1wbGViYXItdHJhY2suc2ltcGxlYmFyLXZlcnRpY2FsIHtcXHJcXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEuMnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAuNHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2VlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAuc2ltcGxlYmFyLXNjcm9sbGJhciB7XFxyXFxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMuMnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTJhZGMxO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyAuc2VsZWN0X19vcHRpb25cXHJcXG4gICAgJl9fb3B0aW9uIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XFxyXFxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAmLl9zZWxlY3Qtc2VsZWN0ZWQge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JlZW47XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXHJcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgJjpub3QoJi5zZWxlY3RfX3N1YnRpdGxlKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyZWVuO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8vIC5zZWxlY3RfX2dyb3VwXFxyXFxuXFxyXFxuICAgICZfX2dyb3VwIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gLnNlbGVjdF9fYXNzZXRcXHJcXG5cXHJcXG4gICAgJl9fYXNzZXQge1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8vIC5zZWxlY3RfX3RleHRcXHJcXG5cXHJcXG4gICAgJl9fdGV4dCB7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gLnNlbGVjdF9faGludFxcclxcblxcclxcbiAgICAmX19oaW50IHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogY2FsYygxMDAlICsgMC44cmVtKTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0Mi44NTclO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8vIC5zZWxlY3RfX3N1YnRpdGxlXFxyXFxuXFxyXFxuICAgICZfX3N1YnRpdGxlIHtcXHJcXG4gICAgICAgIGN1cnNvcjogdGV4dDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyBzZWxlY3Qgc3RhdGVcXHJcXG4gICAgJi5fc2VsZWN0LW9wZW5lZCB7XFxyXFxuICAgICAgICB6LWluZGV4OiA1O1xcclxcbiAgICAgICAgLnNlbGVjdF9fdmFsdWU6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAmLl9zZWxlY3QtZm9jdXNlZCB7XFxyXFxuICAgIH1cXHJcXG4gICAgJi5fc2VsZWN0LWVycm9yIHtcXHJcXG4gICAgICAgICY6bm90KCYuX3NlbGVjdC1maWxsZWQsICYuX3NlbGVjdC1vcGVuZWQpIHtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAmLl9zZWxlY3QtZmlsbGVkIHtcXHJcXG4gICAgICAgICY6bm90KCYuX3NlbGVjdC1vcGVuZWQpIHtcXHJcXG4gICAgICAgICAgICAmOm5vdCgmLl9zZWxlY3Qtc2hvdy12YWwpIHtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJi5fc2VsZWN0LXNob3ctdmFsIHtcXHJcXG4gICAgICAgICYuX3NlbGVjdC1mb2N1c2VkLFxcclxcbiAgICAgICAgJi5fc2VsZWN0LWZpbGxlZCxcXHJcXG4gICAgICAgICYuX3NlbGVjdC1lcnJvcixcXHJcXG4gICAgICAgICYuX3NlbGVjdC1kaXNhYmxlZCB7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJi5fc2VsZWN0LWRpc2FibGVkIHtcXHJcXG4gICAgfVxcclxcbiAgICAmLl9zZWxlY3QtbXVsdGlwbGUge1xcclxcbiAgICB9XFxyXFxuICAgICYuX3NlbGVjdC1hY3RpdmUge1xcclxcbiAgICB9XFxyXFxuICAgICYuX3NlbGVjdC1jaGVja2JveCB7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gbGlzdFxcclxcbi5fc2VsZWN0LWxpc3Qge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblwiLFwiLmJhZGdlIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAzcmVtIDFyZW0gMXJlbTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDIuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxyXFxuICAgICYuX2FjdGl2ZSB7XFxyXFxuICAgICAgICBjb2xvcjogJGRhcmtQdXJwbGUyO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcclxcbiAgICAgICAgLmJhZGdlX19pY29uLXdyYXAge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xcclxcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc3Rhci1hY3RpdmUuc3ZnKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gOHJlbSAycmVtIDJyZW07XFxyXFxuICAgICAgICBjb2x1bW4tZ2FwOiAzcmVtO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnJlbTtcXHJcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyAuYmFkZ2VfX2ljb24td3JhcFxcclxcblxcclxcbiAgICAmX19pY29uLXdyYXAge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgZmxleDogMCAwIDQuNXJlbTtcXHJcXG4gICAgICAgIHdpZHRoOiA0LjVyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDQuNXJlbTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXHJcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcXHJcXG4gICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA4cmVtO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogOHJlbTtcXHJcXG4gICAgICAgICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9pY29ucy9zdGFyLnN2Zyk7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXHJcXG4gICAgICAgICAgICBmbGV4OiAwIDAgNnJlbTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNnJlbTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDZyZW07XFxyXFxuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRyZW0pO1xcclxcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHJlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gLmJhZGdlX190ZXh0XFxyXFxuXFxyXFxuICAgICZfX3RleHQge1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiLFwiLmludHJvIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tdG9wOiAtOHJlbTtcXG4gICAgaGVpZ2h0OiAxMDhyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDEwLjVyZW07XFxuXFxuICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICBoZWlnaHQ6IDE2NHJlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1LjVyZW07XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtMTZyZW07XFxuICAgIH1cXG5cXG4gICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgQGluY2x1ZGUgcHNldWRvIHtcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMxMDE2NTMgMCUsIHJnYmEoMjMsIDE1LCA2NywgMCkgNjMuNDUlKTtcXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgICAgICAgICBpbnNldDogMDtcXG4gICAgICAgICAgICBib3R0b206IC0wLjVyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fY29udGVudCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDExLjdyZW07XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX3RpdGxlIHtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNS4zcmVtO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmVlbjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDg1JTtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3LjNyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fcG9zdGVyLWltYWdlIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGluc2V0OiAwO1xcbiAgICAgICAgei1pbmRleDogLTE7XFxuXFxuICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IC0xNDByZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX3JlcXVlc3Qge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDMuN3JlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUuOXJlbTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTdyZW07XFxuICAgICAgICAgICAgZ2FwOiA1cmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1wcm9qZWN0cyB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogMS44cmVtO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBzZXVkbyB7XFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMnJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwLjJyZW07XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuXFxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0zcmVtO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwLjRyZW07XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgZ2FwOiAyLjRyZW07XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICYtY291bnRlciB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA1LjhyZW07XFxuICAgICAgICAgICAgICAgIGhlaWdodDogNS44cmVtO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRncmVlbjtcXG5cXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4LjhyZW07XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDguOHJlbTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMWExYTFhO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRzcGFjZUFnZUN5cjtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS42cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNDhyZW07XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuNzczNXJlbTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzLjVyZW07XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJi10aXRsZSB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2FydGljbGVzIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoNTFyZW0sIDFmcikpO1xcbiAgICAgICAgZ2FwOiAzLjdyZW07XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgxNS4ycmVtLCAxZnIpKTtcXG4gICAgICAgICAgICBnYXA6IDIuOHJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19hcnRpY2xlIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLWxpbmsge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuMXJlbSA2cmVtIDEuMXJlbSA0LjFyZW07XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBnYXA6IDJyZW07XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgZ2FwOiAyLjZyZW07XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDExLjVyZW0gMnJlbSAzcmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmVlbjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJi10aXRsZSB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTVyZW07XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGNvbG9yIGVhc2U7XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICYtaW1hZ2Uge1xcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzaXplcygyMC4ycmVtLCAyMC4ycmVtKTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcblxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc2l6ZXMoMTYuMnJlbSwgMTYuMnJlbSk7XFxuICAgICAgICAgICAgICAgICAgICB0b3A6IC02cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICYtaWNvbiB7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgdG9wOiAxcmVtO1xcbiAgICAgICAgICAgICAgICByaWdodDogMS4zcmVtO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjZyZW07XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgICAgICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNpemVzKDQuNnJlbSwgNC42cmVtKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBiYWNrZ3JvdW5kIGVhc2U7XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC44cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc2l6ZXMoNnJlbSwgNnJlbSk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcIi5wcm9tb3Rpb24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMXJlbTtcXG5cXG4gICAgJl9fY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHBhZGRpbmc6IDAgMS41cmVtIDAgMi45cmVtO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBwc2V1ZG8ge1xcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnMyc7XFxuICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuNXJlbTtcXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogcmdiYSg0MSwgMjU1LCAxMjcsIDAuMSk7XFxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkc3BhY2VBZ2VDeXI7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNzByZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRiZ0NvbG9yO1xcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgICAgICAgICAgICAgdG9wOiAtMzRyZW07XFxuICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX190aXRsZSB7XFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fYmxvY2sge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgICAgICAgICBnYXA6IDFyZW07XFxuXFxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcXG4gICAgICAgICAgICAgICAgLnByb21vdGlvbl9fdGl0bGUge1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNHJlbTtcXG5cXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgJjpudGgtY2hpbGQob2RkKSB7XFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcXG5cXG4gICAgICAgICAgICAgICAgLnByb21vdGlvbl9fdGl0bGUge1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX3N1YnRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCIubWFya2V0aW5nIHtcXG4gICAgJl9faW1hZ2Uge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogLTE1LjJyZW07XFxuICAgICAgICB0b3A6IC0xMnJlbTtcXG4gICAgICAgIG1heC13aWR0aDogNzRyZW07XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDY4cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2NvbnRlbnQge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fdGl0bGUge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNC44cmVtO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0LjRyZW07XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2luZm8ge1xcbiAgICAgICAgbWF4LXdpZHRoOiA1MXJlbTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIxcmVtO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLXJvdyB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgICAgICBnYXA6IDQuMXJlbTtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBnYXA6IDNyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1saXN0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIGdhcDogMnJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLWl0ZW0ge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBpdGVtLWRvdDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtZGVzY3JpcHRpb24ge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMS43cmVtO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzMuMnJlbTtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCJAaW1wb3J0ICcuLi9zZWN0aW9ucy9pbnRybyc7XFxuQGltcG9ydCAnLi4vc2VjdGlvbnMvcHJvbW90aW9uJztcXG5AaW1wb3J0ICcuLi9zZWN0aW9ucy9tYXJrZXRpbmcnO1xcblxcbmZpZ3VyZSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiA5OTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC44cyBlYXNlIDBzO1xcblxcbiAgICAuX21lbnUtb3BlbmVkICYge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cIixudWxsXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvZ3JvdXAtY3NzLW1lZGlhLXF1ZXJpZXMtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9ncm91cC1jc3MtbWVkaWEtcXVlcmllcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vc2Nzcy9zdHlsZS5zY3NzJztcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZm9ybXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBpbXBvcnQgKiBhcyBmb3JtcyBmcm9tICcuL3V0aWxzL2Zvcm1zLmpzJztcclxuXHJcbi8vIGZvcm0gZmllbGRzXHJcbi8vIGZvcm1zLmZvcm1GaWVsZHNJbml0KHsgdmlld1Bhc3M6IGZhbHNlIH0pO1xyXG5cclxuLy8gZm9ybSBzdWJtaXRcclxuLy8gZm9ybXMuZm9ybVN1Ym1pdCgpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB1dGlscyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vaGFtYnVyZ2VyXHJcbmltcG9ydCAnLi91dGlscy9oYW1idXJnZXIuanMnO1xyXG5cclxuLy8gdGFic1xyXG4vLyBpbXBvcnQgJy4vdXRpbHMvdGFicy5qcyc7XHJcblxyXG4vLyBhY2NvcmRpb25cclxuLy8gaW1wb3J0ICcuL3V0aWxzL2FjY29yZGlvbi5qcyc7XHJcblxyXG4vLyBzZWxlY3RcclxuaW1wb3J0ICcuL3V0aWxzL3NlbGVjdC5qcyc7XHJcblxyXG4vLyBtb2RhbHNcclxuLy8gaW1wb3J0ICcuL3V0aWxzL21vZGFscy5qcyc7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGxpYnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gZHluYW1pYyBkb21cclxuaW1wb3J0ICcuL2xpYnMvZGQuanMnO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCAnLi9kZXYvdnptc2sxLmpzJztcclxuaW1wb3J0ICcuL2Rldi9tYXJrdXNETS5qcyc7XHJcbmltcG9ydCAnLi9kZXYvdWtpazAuanMnO1xyXG5pbXBvcnQgJy4vZGV2L2tpZTZlci5qcyc7XHJcbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsImV2ZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiRHluYW1pY0FkYXB0IiwidHlwZSIsInByb3RvdHlwZSIsImluaXQiLCJfdGhpcyIsItC+YmplY3RzIiwiZGFDbGFzc25hbWUiLCJub2RlcyIsImkiLCJsZW5ndGgiLCJub2RlIiwiZGF0YSIsImRhdGFzZXQiLCJkYSIsInRyaW0iLCJkYXRhQXJyYXkiLCJzcGxpdCIsItC+YmplY3QiLCJlbGVtZW50IiwicGFyZW50IiwicGFyZW50Tm9kZSIsImRlc3RpbmF0aW9uIiwicXVlcnlTZWxlY3RvciIsImJyZWFrcG9pbnQiLCJwbGFjZSIsImluZGV4IiwiaW5kZXhJblBhcmVudCIsInB1c2giLCJhcnJheVNvcnQiLCJtZWRpYVF1ZXJpZXMiLCJBcnJheSIsIm1hcCIsImNhbGwiLCJmaWx0ZXIiLCJzZWxmIiwiaW5kZXhPZiIsIm1lZGlhIiwibWVkaWFTcGxpdCIsIlN0cmluZyIsIm1hdGNoTWVkaWEiLCJ3aW5kb3ciLCJtZWRpYUJyZWFrcG9pbnQiLCLQvmJqZWN0c0ZpbHRlciIsImFkZExpc3RlbmVyIiwibWVkaWFIYW5kbGVyIiwibWF0Y2hlcyIsIm1vdmVUbyIsImNvbnRhaW5zIiwibW92ZUJhY2siLCJhZGQiLCJjaGlsZHJlbiIsImluc2VydEFkamFjZW50RWxlbWVudCIsInJlbW92ZSIsInVuZGVmaW5lZCIsImFycmF5Iiwic2xpY2UiLCJhcnIiLCJzb3J0IiwiYSIsImIiLCJib2R5TG9ja1N0YXR1cyIsImJvZHlMb2NrVG9nZ2xlIiwibWVudUluaXQiLCJoYW1idXJnZXIiLCJlIiwiZG9jdW1lbnRFbGVtZW50IiwiX3NsaWRlVXAiLCJfc2xpZGVEb3duIiwiX3NsaWRlVG9nZ2xlIiwiU2VsZWN0IiwiY29uc3RydWN0b3IiLCJjbGFzc2VzIiwic2VsIiwiYm9keSIsImxhYmVsIiwidGl0bGUiLCJ2YWwiLCJjb250ZW50Iiwib3B0aW9ucyIsIm9wdGlvbiIsInNjcm9sbCIsImdyb3VwIiwiaW5wIiwiYXNzZXQiLCJ0eHQiLCJoaW50IiwiYWN0aXZlIiwiZm9jdXNlZCIsIm9wZW5lZCIsImZpbGxlZCIsInNlbGVjdGVkIiwiZGlzYWJsZWQiLCJsaXN0IiwiZXJyb3IiLCJtdWx0aXBsZSIsImNoZWNrYm94Iiwic2VsZWN0TGlzdCIsInNlbGVjdCIsImluaXRTZWxJdGVtIiwic2V0QWN0aW9ucyIsImJpbmQiLCJyZWxhdGl2ZVNlbCIsImNyZWF0ZUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsImhpZGRlbiIsInNlbElkIiwiZ2V0UGxhY2Vob2xkZXIiLCJvcHRQbGFjZWhvbGRlciIsInZhbHVlIiwic2hvdyIsInNlbFRpdGxlIiwiZ2V0U2VsZWN0IiwidHdpblNlbCIsImluc2VydEFkamFjZW50SFRNTCIsInRleHQiLCJzcGVlZCIsImJ1aWxkIiwiaW5pdFNlbGVjdGlvbnMiLCJwYXJlbnRFbGVtZW50Iiwic2VsT2JqIiwic2V0VmFsdWUiLCJzZXRPcHRpb25zIiwic2VsQWRkb25DbGFzcyIsImhhc0F0dHJpYnV0ZSIsImRpc2FibGVTZWxlY3QiLCJzZXRTZWFyY2hBY3Rpb25zIiwic2V0QWN0aW9uIiwic2VsSGludCIsImNsb3Nlc3QiLCJhZGRFcnIiLCJyZW1vdmVFcnIiLCJzZWxCb2R5IiwiZ2V0VmFsdWUiLCJyZWxhdGl2ZVNlbE9wdGlvbnMiLCJpbm5lckhUTUwiLCJnZXRPcHRpb25zIiwidGFyZ2V0IiwiZ2V0Q2xhc3MiLCJzZWxlY3RJZCIsInNlbExpc3QiLCJzZWxPcHRpb24iLCJvcHRWYWwiLCJzZXRPcHRpb25BY3Rpb24iLCJjb2RlIiwiY2xvc2VHcm91cCIsInNlbE9wdGlvbnMiLCJzZWxlY3RPbmVHcm91cCIsInNlbEdyb3VwIiwic2VsZWN0aW9ucyIsInNlbGVjdGlvbiIsImNsb3NlSXRlbSIsInJlbGF0aXZlU2VsZWN0aW9ucyIsImdldERhdGEiLCJlbGVtZW50cyIsInJlbGF0aXZlU2VsZWN0aW9uIiwicmVtb3ZlQXR0cmlidXRlIiwidHdpblNlbGVjdGlvbnMiLCJ0d2luU2VsZWN0aW9uIiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsIm9wdCIsInRleHRDb250ZW50Iiwic2V0U2VsZWN0aW9ucyIsInNlbElucHV0IiwidG9VcHBlckNhc2UiLCJzZXRTdWJ0aXRsZSIsInNlbEVycm9yIiwicmVtb3ZlQ2hpbGQiLCJjc3NDbGFzcyIsImF0dHIiLCJhdHRyQ2xhc3MiLCJ0aXRsZVZhbCIsImh0bWwiLCJzZWxMYWJlbCIsInZhbHVlcyIsImdldENvbnRlbnQiLCJqb2luIiwiY3VzdG9tQ2xhc3MiLCJvcHRDbGFzcyIsInNlbFNjcm9sbCIsInNlbFNjcm9sbEhlaWdodCIsImlubmVyV2lkdGgiLCJmcm9tIiwic2VsT3B0aW9uc0hUTUwiLCJnZXRPcHRpb24iLCJzaG93U2VsZWN0aW9uIiwib3B0aW9uQ2xhc3MiLCJvcHRpb25MaW5rIiwib3B0aW9uTGlua1RhcmdldCIsIm9wdGlvbkhUTUwiLCJvcHRpb25EYXRhIiwib3B0QXNzZXQiLCJvcHRpb25EYXRhSFRNTCIsIm9wdGlvbkNvbnRlbnRIVE1MIiwicGxhY2Vob2xkZXIiLCJmaW5kIiwic3VidGl0bGUiLCJzZWxlY3RlZEluZGV4IiwidGVtcEJ1dHRvbiIsImFwcGVuZCIsImNsaWNrIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwic2V0SGFzaCIsImhhc2giLCJsb2NhdGlvbiIsImhyZWYiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiZ2V0SGFzaCIsInJlcGxhY2UiLCJkZWxheSIsImFyZ3VtZW50cyIsImJvZHlVbmxvY2siLCJib2R5TG9jayIsInNldFRpbWVvdXQiLCJkYXRhTWVkaWFRdWVyaWVzIiwiZGF0YVNldFZhbHVlIiwiYnJlYWtwb2ludHNBcnJheSIsInBhcmFtcyIsInBhcmFtc0FycmF5IiwibWRRdWVyaWVzIiwidW5pcXVlQXJyYXkiLCJtZFF1ZXJpZXNBcnJheSIsIm1lZGlhVHlwZSIsIml0ZW1zQXJyYXkiLCJkdXJhdGlvbiIsInNob3dtb3JlIiwic3R5bGUiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvdmVyZmxvdyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwicmVtb3ZlUHJvcGVydHkiLCJyZW1Ub1B4IiwicmVtVmFsdWUiLCJodG1sRm9udFNpemUiLCJwYXJzZUZsb2F0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImZvbnRTaXplIiwicHhWYWx1ZSIsIk1hdGgiLCJyb3VuZCIsInJlbW92ZUNsYXNzZXMiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9