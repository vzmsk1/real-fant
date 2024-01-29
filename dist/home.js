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

.footer {
  padding-bottom: 7.8rem;
}
.footer__content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.footer__list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-top: 0.5rem;
}
.footer__list:last-child .footer__item:last-child a {
  font-weight: 700;
}
.footer__item a {
  display: block;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3rem;
  transition: 0.3s color ease;
}
.footer__item a:hover {
  color: rgba(255, 255, 255, 0.69);
}
.footer__middle {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.footer__logo {
  max-width: 10.9rem;
  width: 100%;
  height: 13rem;
  margin-bottom: 6.1rem;
}
.footer__contacts {
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
}
.footer__contact a {
  display: block;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: 0.3s color ease;
}
.footer__contact a:hover {
  color: rgba(255, 255, 255, 0.69);
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
.btn__text {
  white-space: nowrap;
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
.txt-green {
  color: #29ff7f;
}

._mobile-only {
  display: none;
}

.intro {
  position: relative;
  margin-top: -8rem;
  margin-bottom: 10.5rem;
  padding-top: 40rem;
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
  display: block;
  line-height: 110%;
  margin-bottom: 5.3rem;
}
.promo-page .intro__title {
  max-width: 118rem;
}
.intro__poster-image {
  position: absolute;
  inset: 0;
  z-index: -1;
}
.intro__poster-image_has-backdrop::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.intro__poster-image img {
  height: 100%;
  object-fit: cover;
}
.intro__request {
  display: flex;
  align-items: center;
  gap: 3.7rem;
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
  flex: 0 0 5.8rem;
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
  max-width: 23rem;
}
.intro__articles {
  display: grid;
  grid-template-columns: repeat(3, minmax(51rem, 1fr));
  gap: 3.7rem;
  margin-top: 5.9rem;
}
.intro__article {
  border-radius: 3rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2rem);
  position: relative;
}
.intro__article a:hover {
  color: #29ff7f;
}
.intro__article-link {
  padding: 1.1rem 6rem 1.1rem 4.1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}
.intro__article-link-title {
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 18rem;
  transition: 0.3s color ease;
}
.intro__article-link-image {
  max-width: 20.2rem;
  width: 100%;
  height: 20.2rem;
  flex: 0 0 20.2rem;
  border-radius: 50%;
}
.intro__article-link-image img {
  border-radius: inherit;
  height: 100%;
  object-fit: cover;
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
}
.intro__article-link-icon_has-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  transition: color 0.3s ease;
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

.marketing {
  margin-bottom: 29rem;
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

.benefits {
  margin-bottom: 17.7rem;
}
.benefits__content {
  display: grid;
  grid-template-columns: repeat(4, minmax(37.4rem, 1fr));
  gap: 3.6rem;
}
.benefits__article {
  border-radius: 3rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 3.8rem 2.2rem;
  display: flex;
  flex-direction: column;
}
.benefits__article-heading {
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;
  margin-bottom: 4rem;
  justify-content: space-between;
}
.benefits__article-heading-title {
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: block;
  max-width: 22.6rem;
  width: 100%;
}
.benefits__article-heading-counter {
  color: #11073b;
  font-size: 6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.benefits__article-poster {
  border-radius: 3rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.3);
  background: #101653;
  height: 21.9rem;
  position: relative;
  margin-bottom: 3rem;
  margin-top: auto;
}
.benefits__article-poster-image {
  height: auto;
  width: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 28rem;
  width: 100%;
  height: 30rem;
}
.benefits__article-poster-image img {
  width: 100%;
  height: 100%;
}
.benefits__article-description {
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding-right: 3rem;
}

.portfolio {
  margin-bottom: 18.5rem;
}
.portfolio__heading {
  margin-bottom: 6.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}
.portfolio__list {
  display: grid;
  grid-template-columns: repeat(2, minmax(78.4rem, 1fr));
  gap: 3.6rem 3.3rem;
  margin-bottom: 6.6rem;
}
.portfolio__item a {
  display: flex;
  flex-direction: column;
  gap: 3.3rem;
  border-radius: 3rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 2.2rem;
}
.portfolio__item a:hover .portfolio__item-text {
  color: #29ff7f;
}
.portfolio__item a:hover .portfolio__item-image img {
  transform: scale(1.1);
}
.portfolio__item-image {
  max-width: 100%;
  width: 100%;
  height: 36.5rem;
  border-radius: 3rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.portfolio__item-image img {
  height: 100%;
  border-radius: inherit;
  transition: 0.3s transform ease;
}
.portfolio__item-bottom {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.portfolio__item-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3rem;
  transition: 0.3s color ease;
}
.portfolio__item-text span {
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3rem;
  color: #ffffff;
}
.portfolio__item-icon {
  padding: 0.6rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2rem);
  max-width: 4.6rem;
  width: 100%;
  height: 4.6rem;
}
.portfolio__item-icon img {
  height: 100%;
}
.portfolio__link {
  margin: 0 auto;
  width: fit-content;
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
@media (min-width: 48.01em) {
  .mobile {
    display: none;
  }
}
@media (min-width: 48em) {
  .footer__list:last-child {
    align-items: flex-end;
  }
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
  .footer {
    padding-bottom: 11rem;
  }
  .footer__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
  }
  .footer__list {
    gap: 3rem;
  }
  .footer__list:last-child {
    margin-right: 5rem;
  }
  .footer__item a {
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 300;
    line-height: 3rem;
  }
  .footer__middle {
    grid-column: span 2;
    order: -1;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .footer__logo {
    max-width: 27rem;
    width: 100%;
    height: 8.6rem;
  }
  .footer__contacts {
    display: none;
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
  .txt-green_do {
    color: inherit;
  }
  ._desktop-only {
    display: none;
  }
  ._mobile-only {
    display: block;
  }
  .intro {
    margin-bottom: 15.5rem;
    padding-top: 68rem;
  }
  .intro {
    margin-top: -16rem;
  }
  .intro::after {
    background: linear-gradient(0deg, #101653 13%, rgba(23, 15, 67, 0) 75.45%);
  }
  .intro__title {
    line-height: 85%;
    margin-bottom: 7.3rem;
  }
  .promo-page .intro__title {
    max-width: 62rem;
    font-family: "Space Age Cyrillic";
  }
  .intro__title span:not(.intro__title span.txt-green) {
    color: #29ff7f;
  }
  .home-page .intro__poster-image img {
    object-position: -140rem;
  }
  .intro__request {
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
    flex: 0 0 8.8rem;
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
    margin-top: 17rem;
  }
  .intro__article {
    border-radius: 2rem;
  }
  .intro__article-link {
    flex-direction: column;
    gap: 2.6rem;
    height: 100%;
    padding: 11.5rem 2rem 3rem;
  }
  .intro__article-link-title {
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    max-width: 100%;
    flex: 1 1 auto;
  }
  .intro__article-link-image {
    position: absolute;
    max-width: 16.2rem;
    width: 100%;
    height: 16.2rem;
    flex: 0 0 16.2rem;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .intro__article-link-icon {
    max-width: 6rem;
    width: 100%;
    height: 6rem;
  }
  .intro__article-link-icon {
    position: static;
    padding: 0.8rem;
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
  .marketing {
    margin-bottom: 25rem;
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
  .benefits {
    margin-bottom: 26rem;
  }
  .benefits__content {
    grid-template-columns: repeat(2, minmax(32.8rem, 1fr));
    gap: 2.6rem 2.2rem;
  }
  .benefits__article {
    padding: 3.4rem 2rem 2rem;
  }
  .benefits__article-heading {
    margin-bottom: 3.4rem;
  }
  .benefits__article-heading-title {
    max-width: 100%;
  }
  .benefits__article-heading-counter {
    display: none;
  }
  .benefits__article-poster {
    margin-bottom: 2rem;
    height: 20rem;
  }
  .benefits__article-poster-image {
    max-width: 26rem;
    width: 100%;
    height: 28rem;
  }
  .benefits__article-description {
    font-size: 2rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    padding-right: 0;
  }
  .portfolio {
    margin-bottom: 27rem;
  }
  .portfolio__heading {
    flex-direction: column;
    gap: 8rem;
    margin-bottom: 8rem;
  }
  .portfolio__list {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    margin-bottom: 7.6rem;
  }
  .portfolio__item a {
    gap: 2.6rem;
    padding: 2rem;
  }
  .portfolio__item-image {
    max-width: 100%;
    width: 100%;
    height: 32rem;
  }
  .portfolio__item-text {
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    gap: 2rem;
  }
  .portfolio__item-text span {
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
  }
  .portfolio__item-icon {
    max-width: 6rem;
    width: 100%;
    height: 6rem;
  }
  .portfolio__item-icon {
    padding: 0.6rem;
    max-width: 5.2rem;
    width: 100%;
    height: 5.2rem;
  }
  .desktop {
    display: none;
  }
}
@media (any-hover: hover) {
  .select__option:hover:not(.select__option:hover.select__subtitle) {
    cursor: pointer;
    color: #29ff7f;
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/fonts.scss","webpack://./src/scss/style.scss","webpack://./src/scss/set.scss","webpack://./src/scss/sections/header.scss","webpack://./src/scss/mixins.scss","webpack://./src/scss/sections/footer.scss","webpack://./src/ui/styles/_typo.scss","webpack://./src/ui/styles/_button.scss","webpack://./src/ui/styles/_input.scss","webpack://./src/ui/styles/_select.scss","webpack://./src/ui/styles/_badge.scss","webpack://./src/scss/dev/vzmsk1.scss","webpack://./src/scss/sections/_intro.scss","webpack://./src/scss/sections/_promotion.scss","webpack://./src/scss/sections/_marketing.scss","webpack://./src/scss/sections/benefits.scss","webpack://./src/scss/sections/_portfolio.scss","webpack://./src/scss/dev/ukik0.scss","<no source>"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Euclid Circular A';\n    font-weight: 300;\n    src: url('./assets/fonts/Euclid-Circular-A-Light.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'Euclid Circular A';\n    font-weight: 400;\n    src: url('./assets/fonts/Euclid-Circular-A-Regular.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'Euclid Circular A';\n    font-weight: 500;\n    src: url('./assets/fonts/Euclid-Circular-A-Medium.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'Euclid Circular A';\n    font-weight: 600;\n    src: url('./assets/fonts/Euclid-Circular-A-SemiBold.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'Euclid Circular A';\n    font-weight: 700;\n    src: url('./assets/fonts/Euclid-Circular-A-Bold.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'Space Age';\n    font-weight: 400;\n    src: url('./assets/fonts/Space-Age.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'Space Age Cyrillic';\n    font-weight: 400;\n    src: url('./assets/fonts/Space-Age-Cyrillic.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'EuropeExtendedC';\n    font-weight: 700;\n    src: url('./assets/fonts/Europe-Extended-C.woff2') format('woff2');\n}\n","// --------------------------------- mixins ---------------------------------\n\n@import './mixins';\n\n// -------------------------------- variables -------------------------------\n\n// fonts\n$spaceAge: 'Space Age';\n$spaceAgeCyr: 'Space Age Cyrillic';\n$EuropeE: 'EuropeExtendedC';\n$ECA: 'Euclid Circular A';\n\n// colors\n$white: #ffffff;\n$white-secondary: rgba(255, 255, 255, 0.69);\n$black: #000000;\n$darkPurple: #11073b;\n$darkPurple2: #140a3f;\n$green: #29ff7f;\n$blue: #182678;\n$bgColor: #101653;\n\n// ---------------------------------- fonts ---------------------------------\n\n// local fonts\n@import './fonts';\n\n// ------------------------------- base styles ------------------------------\n\n// base scss file\n@import './set';\n\n// html\nhtml.lock,\nhtml.lock body {\n    overflow: hidden;\n    touch-action: none;\n}\nhtml,\nbody {\n    overflow-x: hidden;\n}\n\n// main\nmain {\n    position: relative;\n    flex: 1 1 auto;\n}\n\n.wrapper {\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    max-width: 1920px;\n    height: 100%;\n}\n\n// --------------------------------------------------------------------------\n\n// header / footer\n@import './sections/header';\n@import './sections/footer';\n\n// ui\n@import '../ui/styles/ui.scss';\n\n// --------------------------------------------------------------------------\n\n@import './dev/vzmsk1.scss';\n@import './dev/markusDM.scss';\n@import './dev/ukik0.scss';\n@import './dev/kie6er.scss';\n","*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\nhtml {\n    font-family: $ECA; // шрифт по умолчанию по сайту\n    font-size: 0.5208335vw; // на разрешении 1920 0.520835vw === 10px\n    font-style: normal;\n    font-weight: normal;\n    -webkit-animation: bugfix infinite 1s;\n    line-height: 1.2;\n    margin: 0;\n    padding: 0;\n    height: 100%;\n}\n\nbody {\n    font-style: normal;\n    font-weight: normal;\n    -webkit-animation: bugfix infinite 1s;\n    height: 100%;\n    line-height: 1.2;\n    margin: 0;\n    padding: 0;\n    font-size: 1.8rem;\n    color: $white; // цвет по умолчанию текста по сайту\n    background-color: $bgColor;\n}\n\ninput,\ntextarea {\n    -webkit-animation: bugfix infinite 1s;\n    line-height: inherit;\n    margin: 0;\n    padding: 0;\n    background-color: transparent;\n    border: none;\n    color: inherit;\n}\na {\n    color: unset;\n}\na,\na:hover {\n    text-decoration: none;\n}\n\nbutton,\ninput,\na,\ntextarea {\n    outline: none;\n    cursor: pointer;\n    font: inherit;\n    &:focus {\n        outline: none;\n    }\n    &:active {\n        outline: none;\n    }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font: inherit;\n    margin: 0;\n    padding: 0;\n}\np {\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\nimg {\n    width: 100%;\n    height: auto;\n    display: block;\n}\n\nbutton {\n    border: none;\n    color: inherit;\n    font: inherit;\n    text-align: inherit;\n    padding: 0;\n    background-color: transparent;\n}\nul {\n    padding: 0;\n    margin: 0;\n}\n\nul li {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.container {\n    width: 160rem;\n    margin: 0 auto;\n}\n\ninput[type='number']::-webkit-inner-spin-button,\ninput[type='number']::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\ninput[type='number'] {\n    -moz-appearance: textfield;\n}\n\nsvg,\nimg {\n    width: 100%;\n    height: auto;\n    object-fit: contain;\n}\n\n@media (min-width: 1920px) {\n    html {\n        font-size: 10px;\n    }\n}\n\n@media (max-width: 48em) {\n    html {\n        font-size: 5px;\n        font-size: 1.5625vw;\n        font-size: calc((100 / 375) * 5vw); // где 375 это ширина моб версии макета\n        -webkit-text-size-adjust: none;\n    }\n\n    body {\n        -webkit-text-size-adjust: none;\n        font-size: 2.8rem;\n    }\n\n    .container {\n        padding: 0 3.2rem; // в моб версии отступ от края задаем для всех контейнеров, а там где не нужно можем точечно убрать\n        width: 100%;\n    }\n}\n",".header {\n    padding-top: 2.3rem;\n    position: relative;\n    z-index: 100;\n\n    @include small-tablet {\n        padding-top: 3.6rem;\n    }\n\n    &__content {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        width: 100%;\n\n        @include small-tablet {\n            justify-content: initial;\n            gap: 16rem;\n            transition: 0.3s gap ease;\n\n            ._menu-opened & {\n                &::after {\n                    opacity: 1;\n                }\n\n                gap: 11.6rem;\n            }\n        }\n    }\n\n    &__burger {\n        display: none;\n\n        @include small-tablet {\n            display: block;\n        }\n    }\n\n    &__logo {\n        @include sizes(17.8rem, 5.7rem);\n        display: block;\n\n        @include small-tablet {\n            @include sizes(27rem, 8.6rem);\n            position: relative;\n            z-index: 2;\n        }\n\n        img {\n            height: 100%;\n        }\n    }\n\n    &__menu {\n        @include small-tablet {\n            position: fixed;\n            top: 0;\n            left: 0;\n            max-width: calc(100% - 7.4rem);\n            width: 100%;\n            height: 100%;\n            display: flex;\n            flex-direction: column;\n            opacity: 0;\n            transform: translateX(-100%);\n            transition:\n                transform 0.3s ease,\n                opacity 0.3s ease;\n            background: $bgColor;\n            padding: 21.4rem 5.2rem 8.8rem 7.8rem;\n\n            ._menu-opened & {\n                opacity: 1;\n                transform: translateX(0);\n            }\n        }\n\n        &-contacts {\n            display: none;\n\n            @include small-tablet {\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                margin-top: auto;\n                margin-right: 4rem;\n\n                &-item {\n                    margin-bottom: 2.4rem;\n                    color: rgba(255, 255, 255, 0.67);\n                    font-size: 3.2rem;\n                    font-style: normal;\n                    font-weight: 400;\n                    line-height: 3rem;\n                }\n\n                &-button {\n                    margin-top: 2rem;\n                    border: 0.4rem solid rgba(255, 255, 255, 0.78);\n                    border-radius: 0rem 24rem 24rem 24rem;\n                    display: flex;\n                    align-items: center;\n                    gap: 2rem;\n                    padding: 1rem 1rem 1rem 4rem;\n                    transition: 0.3s border ease;\n\n                    &:active {\n                        border-color: rgba(255, 255, 255, 0.5);\n\n                        span {\n                            color: $white-secondary;\n                        }\n\n                        .header__menu-contacts-button-icon {\n                            background: $white-secondary;\n                        }\n                    }\n\n                    span {\n                        font-size: 2.8rem;\n                        font-style: normal;\n                        font-weight: 400;\n                        line-height: normal;\n                        transition: 0.3s color ease;\n                    }\n\n                    &-icon {\n                        padding: 1.4rem;\n                        border-radius: 50%;\n                        background: $white;\n                        @include sizes(6.8rem, 6.8rem);\n\n                        img {\n                            width: 100%;\n                            height: 100%;\n                        }\n                    }\n                }\n            }\n        }\n    }\n\n    &__nav {\n        @include small-tablet {\n            max-height: 101rem;\n            overflow-x: auto;\n            height: 100%;\n        }\n\n        &-list {\n            display: flex;\n            align-items: center;\n            gap: 6.3rem;\n\n            @include small-tablet {\n                flex-direction: column;\n                align-items: flex-start;\n                gap: 7.2rem;\n            }\n        }\n\n        &-item {\n            @include small-tablet {\n                width: 100%;\n\n                &.--active {\n                    a {\n                        color: $green;\n                    }\n                }\n            }\n\n            &-heading {\n                @include small-tablet {\n                    width: 98%;\n                    display: flex;\n                    align-items: center;\n                    justify-content: space-between;\n                    position: relative;\n\n                    &.--active {\n                        .header__nav-item-icon {\n                            transform: rotate(-180deg);\n                        }\n\n                        ~ .header__nav-item-dropdown {\n                            grid-template-rows: 1fr;\n\n                            .header__nav-item-dropdown-wrapper {\n                                margin-top: 4rem;\n                            }\n                        }\n                    }\n\n                    a {\n                        pointer-events: none;\n                    }\n                }\n            }\n\n            &-icon {\n                display: none;\n\n                @include small-tablet {\n                    display: block;\n                    transition: 0.3s transform ease;\n                }\n            }\n\n            &-dropdown {\n                display: none;\n\n                @include small-tablet {\n                    display: grid;\n                    grid-template-rows: 0fr;\n                    transition: 0.3s grid-template-rows ease;\n                }\n\n                &-wrapper {\n                    @include small-tablet {\n                        overflow: hidden;\n                        transition: 0.3s margin ease;\n                        margin-top: 0;\n                        padding-left: 4.8rem;\n                    }\n                }\n\n                &-item {\n                    @include small-tablet {\n                        font-size: 3.2rem;\n                        font-style: normal;\n                        font-weight: 400;\n                        line-height: 3rem;\n\n                        &:not(:first-child) {\n                            margin-top: 5rem;\n                        }\n                    }\n                }\n            }\n\n            &-link {\n                display: block;\n                font-size: 1.8rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: 3rem;\n                transition: 0.3s color ease;\n\n                &:hover {\n                    color: $white-secondary;\n                }\n\n                @include small-tablet {\n                    font-size: 3.2rem;\n                    font-style: normal;\n                    font-weight: 500;\n                    line-height: 3rem;\n                }\n            }\n        }\n    }\n\n    &__contacts {\n        display: flex;\n        align-items: center;\n        gap: 1.7rem;\n\n        @include small-tablet {\n            position: relative;\n            z-index: 2;\n        }\n\n        &:hover {\n            .header__contacts-title {\n                color: $white-secondary;\n            }\n\n            svg {\n                path {\n                    stroke: $white-secondary;\n                }\n            }\n        }\n\n        &-title {\n            font-size: 1.8rem;\n            font-style: normal;\n            font-weight: 700;\n            line-height: 3rem;\n            transition: 0.3s color ease;\n\n            @include small-tablet {\n                display: none;\n            }\n        }\n\n        svg {\n            @include sizes(2.4rem, 2.4rem);\n\n            @include small-tablet {\n                @include sizes(4.8rem, 4.8rem);\n            }\n\n            path {\n                transition: 0.3s stroke ease;\n            }\n        }\n    }\n\n    .hamburger {\n        position: relative;\n        z-index: 2;\n        width: 4.6rem;\n        height: 3.6rem;\n        cursor: pointer;\n\n        span,\n        &::before,\n        &::after {\n            @include pseudo {\n                right: 0;\n                width: 100%;\n                height: 2px;\n                background-color: $white;\n                transition:\n                    top 0.3s ease,\n                    width 0.3s ease,\n                    transform 0.3s ease,\n                    bottom 0.3s ease,\n                    background-color 0.3s ease;\n                border-radius: 0.2rem;\n            }\n        }\n        &::before {\n            top: 0;\n        }\n        &::after {\n            bottom: 0;\n        }\n        span {\n            top: calc(50% - 1px);\n        }\n        ._menu-opened & {\n            span {\n                width: 0;\n            }\n            &::before {\n                top: calc(50% - 1px);\n                transform: rotate(-45deg);\n            }\n            &::after {\n                bottom: calc(50% - 1px);\n                transform: rotate(45deg);\n            }\n            span,\n            &::before,\n            &::after {\n                background-color: $white;\n            }\n        }\n    }\n}\n","@mixin pseudo() {\n    content: '';\n    position: absolute;\n    @content;\n}\n\n@mixin small-tablet {\n    @media (max-width: 48em) {\n        @content;\n    }\n}\n\n@mixin sizes($width, $height) {\n    max-width: $width;\n    width: 100%;\n    height: $height;\n\n    @content;\n}\n\n@mixin item-dot() {\n    position: relative;\n\n    &::after {\n        @include pseudo {\n            width: 0.5rem;\n            height: 0.5rem;\n            top: 1.5rem;\n            left: -2rem;\n            border-radius: 50%;\n            background: #ffffff;\n\n            @include small-tablet {\n                top: 0.5rem;\n                width: 1rem;\n                height: 1rem;\n            }\n\n            @content;\n        }\n    }\n}\n\n@mixin rotated-arrow() {\n    padding: 0.6rem;\n    border-radius: 50%;\n    background: rgba(255, 255, 255, 0.2);\n    backdrop-filter: blur(2rem);\n    @include sizes(4.6rem, 4.6rem);\n\n    img {\n        height: 100%;\n    }\n\n    @include small-tablet {\n        @include sizes(6rem, 6rem);\n    }\n\n    @content;\n}\n",".footer {\n    padding-bottom: 7.8rem;\n\n    @include small-tablet {\n        padding-bottom: 11rem;\n    }\n\n    &__content {\n        display: flex;\n        align-items: flex-start;\n        justify-content: space-between;\n\n        @include small-tablet {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            gap: 0;\n        }\n    }\n\n    &__list {\n        display: flex;\n        flex-direction: column;\n        gap: 0.8rem;\n        padding-top: 0.5rem;\n\n        @include small-tablet {\n            gap: 3rem;\n        }\n\n        &:last-child {\n            @media (min-width: 48em) {\n                align-items: flex-end;\n            }\n\n            @include small-tablet {\n                margin-right: 5rem;\n            }\n\n            .footer__item {\n                &:last-child {\n                    a {\n                        font-weight: 700;\n                    }\n                }\n            }\n        }\n    }\n\n    &__item {\n        a {\n            display: block;\n            font-size: 1.8rem;\n            font-style: normal;\n            font-weight: 400;\n            line-height: 3rem;\n            transition: 0.3s color ease;\n\n            @include small-tablet {\n                font-size: 2.8rem;\n                font-style: normal;\n                font-weight: 300;\n                line-height: 3rem;\n            }\n\n            &:hover {\n                color: $white-secondary;\n            }\n        }\n    }\n\n    &__middle {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n\n        @include small-tablet {\n            grid-column: span 2;\n            order: -1;\n            justify-content: flex-start;\n            align-items: flex-start;\n        }\n    }\n\n    &__logo {\n        @include sizes(10.9rem, 13rem);\n        margin-bottom: 6.1rem;\n\n        @include small-tablet {\n            @include sizes(27rem, 8.6rem);\n        }\n    }\n\n    &__contacts {\n        display: flex;\n        flex-direction: column;\n        gap: 2.2rem;\n\n        @include small-tablet {\n            display: none;\n        }\n    }\n\n    &__contact {\n        a {\n            display: block;\n            font-size: 1.8rem;\n            font-style: normal;\n            font-weight: 500;\n            line-height: normal;\n            transition: 0.3s color ease;\n\n            &:hover {\n                color: $white-secondary;\n            }\n        }\n    }\n}\n",".title {\n    font-family: $spaceAge;\n    font-size: 9rem;\n\n    @media (max-width: 48em) {\n        font-size: 6rem;\n    }\n}\n\n.subtitle {\n    font-family: $spaceAge;\n    font-size: 3rem;\n    @media (max-width: 48em) {\n        font-size: 4rem;\n    }\n}\n\n.txt25 {\n    @media (min-width: 48em) {\n        font-size: 2.5rem;\n    }\n}\n\n.txt30 {\n    font-size: 3rem;\n    @media (max-width: 48em) {\n        font-size: 4rem;\n    }\n}\n\n.txt16 {\n    font-size: 1.6rem;\n    @media (max-width: 48em) {\n        font-size: 2rem;\n    }\n}\n\n.cyr {\n    font-family: $spaceAgeCyr;\n}\n",".btn {\n    padding: 0.6rem 0.6rem 0.6rem 2rem;\n    display: flex;\n    align-items: center;\n    column-gap: 2rem;\n    border: 2px solid rgba(255, 255, 255, 0.78);\n    border-radius: 0 4rem 4rem 4rem;\n\n    @media (max-width: 48em) {\n        padding: 1rem 1rem 1rem 4rem;\n        column-gap: 3.2rem;\n        border: 0.4rem solid rgba(255, 255, 255, 0.78);\n        border-radius: 0 8rem 8rem 8rem;\n    }\n\n    // .btn__text\n\n    &__text {\n        white-space: nowrap;\n    }\n\n    // .btn__arrow-wrap\n\n    &__arrow-wrap {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        flex: 0 0 4rem;\n        width: 4.4rem;\n        height: 4.4rem;\n        padding: 1rem;\n        border-radius: 50%;\n        background-color: $white;\n        @media (max-width: 48em) {\n            flex: 0 0 7rem;\n            width: 7rem;\n            height: 7rem;\n        }\n    }\n\n    // .btn__arrow-icon\n\n    &__arrow-icon {\n        width: 2.4rem;\n        object-fit: contain;\n        @media (max-width: 48em) {\n            width: 3.8rem;\n        }\n    }\n}\n","input[type='text'],\ninput[type='email'],\ninput[type='tel'],\ntextarea {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\ntextarea:focus,\ninput:focus {\n    outline: none;\n}\n\n.input {\n    position: relative;\n    padding: 4.6rem 2.7rem 2rem 2.7rem;\n    border-radius: 3rem;\n    background: rgba(255, 255, 255, 0.15);\n    backdrop-filter: blur(2rem);\n    &_textarea {\n        height: 25.5rem;\n        textarea {\n            padding: 0;\n            height: 100%;\n            resize: none;\n        }\n    }\n    @media (max-width: 48em) {\n        padding: 7rem 8rem 2.4rem 2.4rem;\n        border-radius: 4rem;\n        backdrop-filter: blur(4rem);\n        &_textarea {\n            height: 34.8rem;\n        }\n    }\n\n    // .input__field\n\n    &__field {\n        display: block;\n        width: 100%;\n        border-radius: 0 !important;\n        line-height: 1;\n        &::placeholder {\n            color: $white;\n        }\n    }\n\n    // .input__label\n\n    &__label {\n        position: absolute;\n        top: 1.8rem;\n        left: 2.7rem;\n        white-space: nowrap;\n        opacity: 0.5;\n        @media (max-width: 48em) {\n            top: 2.4rem;\n            left: 2.4rem;\n        }\n    }\n\n    &._form-focus {\n    }\n    &._form-error {\n    }\n}\n",".select {\n    position: relative;\n\n    // .select__body\n\n    &__body {\n        position: relative;\n    }\n\n    // .select__title\n\n    &__title {\n        position: relative;\n        z-index: 3;\n        width: 100%;\n        border-radius: 3rem;\n        background: rgba(255, 255, 255, 0.15);\n        backdrop-filter: blur(2rem);\n        cursor: pointer;\n        @media (max-width: 48em) {\n            border-radius: 4rem;\n            backdrop-filter: blur(4rem);\n        }\n    }\n\n    // .select__value\n\n    &__value {\n        padding: 1.3rem 1.3rem 1.3rem 2.7rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: 2rem;\n        height: 7.2rem;\n        width: 100%;\n\n        > * {\n            flex: 1 1 auto;\n        }\n\n        &::after {\n            content: '';\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            flex: 0 0 5rem;\n            width: 5rem;\n            height: 5rem;\n            border-radius: 50%;\n            border: 1px solid rgba(255, 255, 255, 0.6);\n            background-color: rgba(255, 255, 255, 0.15);\n            backdrop-filter: blur(2rem);\n            background-image: url(./assets/images/icons/arr-white.svg);\n            background-size: 2.4rem;\n            background-position: center;\n            background-repeat: no-repeat;\n            transition: transform 0.3s ease;\n        }\n        &._select-label {\n            &::before {\n                content: attr(data-sel-label);\n                ._select-filled & {\n                    display: none;\n                }\n            }\n        }\n        &._select-label::before,\n        .select__content {\n            max-width: 31.4rem;\n            overflow: hidden;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n        }\n\n        @media (max-width: 48em) {\n            padding: 1.6rem;\n            gap: 4rem;\n            height: 10rem;\n            &::after {\n                flex: 0 0 6rem;\n                width: 6rem;\n                height: 6rem;\n                background-size: 3.2rem;\n                backdrop-filter: blur(2.4rem);\n            }\n        }\n    }\n\n    // .select__content\n\n    &__content {\n        // hide / show selected value\n        &:not(._select-filled &) {\n            display: none;\n        }\n    }\n\n    // .select__text\n\n    &__text {\n        flex: 1 1 auto;\n    }\n\n    // .select__input\n\n    &__input {\n        width: 100%;\n        height: 100%;\n        background-color: transparent;\n    }\n\n    // .select__options\n\n    &__options {\n        position: absolute;\n        z-index: 2;\n        top: calc(100% - 3rem);\n        left: 0;\n        padding: 4.6rem 2.7rem 2.4rem 2.7rem;\n        min-width: 100%;\n        border-radius: 0 0 3rem 3rem;\n        background: #36396c;\n        backdrop-filter: blur(2rem);\n        @media (max-width: 48em) {\n            top: calc(100% - 4rem);\n            padding: 8rem 4rem 4rem 4rem;\n            border-radius: 0 0 4rem 4rem;\n            backdrop-filter: blur(4rem);\n        }\n    }\n\n    // .select__scroll\n\n    &__scroll {\n        overflow-y: auto;\n        overflow-x: hidden;\n\n        // maximum height\n        max-height: 19rem;\n\n        // scrollbar styles\n        &.simplebar-scrollable-y {\n            .simplebar-track.simplebar-vertical {\n                right: 1.2rem;\n                width: 0.4rem;\n                border-radius: 0.8rem;\n                background-color: #e4e7ee;\n            }\n            .simplebar-scrollbar {\n                min-height: 3.2rem;\n                border-radius: 0.8rem;\n                background-color: #a2adc1;\n            }\n        }\n    }\n\n    // .select__option\n    &__option {\n        width: 100%;\n        transition: color 0.3s ease;\n        &:not(:last-child) {\n            margin-bottom: 2.5rem;\n            @media (max-width: 48em) {\n                margin-bottom: 5rem;\n            }\n        }\n        &._select-selected {\n            color: $green;\n        }\n        @media (any-hover: hover) {\n            &:hover {\n                &:not(&.select__subtitle) {\n                    cursor: pointer;\n                    color: $green;\n                }\n            }\n        }\n    }\n\n    // .select__group\n\n    &__group {\n        display: inline-flex;\n        align-items: flex-start;\n        flex-direction: column-reverse;\n    }\n\n    // .select__asset\n\n    &__asset {\n    }\n\n    // .select__text\n\n    &__text {\n    }\n\n    // .select__hint\n\n    &__hint {\n        position: absolute;\n        top: calc(100% + 0.8rem);\n        font-size: 1.4rem;\n        line-height: 142.857%;\n    }\n\n    // .select__subtitle\n\n    &__subtitle {\n        cursor: text;\n    }\n\n    // select state\n    &._select-opened {\n        z-index: 5;\n        .select__value::after {\n            transform: rotate(-180deg);\n        }\n    }\n    &._select-focused {\n    }\n    &._select-error {\n        &:not(&._select-filled, &._select-opened) {\n        }\n    }\n    &._select-filled {\n        &:not(&._select-opened) {\n            &:not(&._select-show-val) {\n            }\n        }\n    }\n    &._select-show-val {\n        &._select-focused,\n        &._select-filled,\n        &._select-error,\n        &._select-disabled {\n        }\n    }\n    &._select-disabled {\n    }\n    &._select-multiple {\n    }\n    &._select-active {\n    }\n    &._select-checkbox {\n    }\n}\n\n// list\n._select-list {\n    cursor: pointer;\n}\n",".badge {\n    padding: 1rem 3rem 1rem 1rem;\n    display: inline-flex;\n    align-items: center;\n    column-gap: 2.5rem;\n    border-radius: 3rem;\n    background: rgba(255, 255, 255, 0.1);\n    backdrop-filter: blur(2rem);\n    &._active {\n        color: $darkPurple2;\n        background-color: $white;\n        .badge__icon-wrap {\n            background-color: $blue;\n            &::before {\n                background-image: url(./assets/images/icons/star-active.svg);\n            }\n        }\n    }\n    @media (max-width: 48em) {\n        padding: 2rem 8rem 2rem 2rem;\n        column-gap: 3rem;\n        border-radius: 6rem;\n        backdrop-filter: blur(4rem);\n    }\n\n    // .badge__icon-wrap\n\n    &__icon-wrap {\n        position: relative;\n        flex: 0 0 4.5rem;\n        width: 4.5rem;\n        height: 4.5rem;\n        border-radius: 50%;\n        background-color: rgba(255, 255, 255, 0.2);\n        backdrop-filter: blur(2rem);\n        &::before {\n            content: '';\n            position: absolute;\n            width: 8rem;\n            height: 8rem;\n            top: 50%;\n            left: 50%;\n            background-image: url(./assets/images/icons/star.svg);\n            background-position: center;\n            background-size: contain;\n            background-repeat: no-repeat;\n            transform: translate(-50%, -50%);\n        }\n        @media (max-width: 48em) {\n            flex: 0 0 6rem;\n            width: 6rem;\n            height: 6rem;\n            backdrop-filter: blur(4rem);\n            &::before {\n                width: 10rem;\n                height: 10rem;\n            }\n        }\n    }\n\n    // .badge__text\n\n    &__text {\n    }\n}\n",".txt-green {\n        color: $green;\n    &_do {\n        @media (max-width: 48em){\n             color: inherit;\n        }\n    }\n}\n\n\n                    ._desktop-only {\n                        @media (max-width: 48em){\n                        display: none;\n\n                        }\n                    }\n                    ._mobile-only {\n                        display: none;\n                        @media (max-width: 48em){\n                            display: block;\n\n                        }\n                    }",".intro {\n    position: relative;\n    margin-top: -8rem;\n    margin-bottom: 10.5rem;\n    padding-top: 40rem;\n\n    @include small-tablet {\n        margin-bottom: 15.5rem;\n        padding-top: 68rem;\n    }\n\n    .container {\n        display: flex;\n        height: 100%;\n    }\n\n    @include small-tablet {\n        margin-top: -16rem;\n        &::after {\n            background: linear-gradient(0deg, #101653 13%, rgba(23, 15, 67, 0) 75.45%);\n        }\n    }\n\n    &::after {\n        @include pseudo {\n            content: '';\n            position: absolute;\n            background: linear-gradient(0deg, #101653 0%, rgba(23, 15, 67, 0) 63.45%);\n            z-index: -1;\n            inset: 0;\n            bottom: -0.5rem;\n        }\n    }\n\n    &__content {\n        margin-top: auto;\n        padding-bottom: 11.7rem;\n\n        @include small-tablet {\n        }\n    }\n\n    &__title {\n        display: block;\n        line-height: 110%;\n        margin-bottom: 5.3rem;\n\n        .promo-page & {\n            max-width: 118rem;\n\n        }\n\n        @include small-tablet {\n            .promo-page & {\n                    max-width: 62rem;\n                    font-family: \"Space Age Cyrillic\";\n            }\n            span {\n                &:not(&.txt-green) {\n                color: $green;\n\n                }\n            }\n\n            line-height: 85%;\n            margin-bottom: 7.3rem;\n        }\n    }\n\n    &__poster-image {\n        position: absolute;\n        inset: 0;\n        z-index: -1;\n\n        &_has-backdrop {\n            &::after {\n                content: '';\n                position: absolute;width: 100%;height: 100%;top: 0;left: 0;background-color: rgba(0, 0, 0, 0.3);\n            }\n        }\n\n        img {\n            height: 100%;\n            object-fit: cover;\n\n            @include small-tablet {\n                .home-page & {\n                    object-position: -140rem;\n                }\n            }\n        }\n    }\n\n    &__request {\n        display: flex;\n        align-items: center;\n        gap: 3.7rem;\n\n        @include small-tablet {\n            gap: 5rem;\n        }\n\n        &-projects {\n            display: flex;\n            align-items: center;\n            gap: 1.8rem;\n            position: relative;\n\n            &::after {\n                @include pseudo {\n                    left: -2rem;\n                    height: 100%;\n                    width: 0.2rem;\n                    background: rgba(255, 255, 255, 0.2);\n\n                    @include small-tablet {\n                        left: -3rem;\n                        width: 0.4rem;\n                    }\n                }\n            }\n\n            @include small-tablet {\n                gap: 2.4rem;\n            }\n\n            &-counter {\n                flex: 0 0 5.8rem;\n                width: 5.8rem;\n                height: 5.8rem;\n                border-radius: 50%;\n                background: $green;\n\n                @include small-tablet {\n                    flex: 0 0 8.8rem;\n                    width: 8.8rem;\n                    height: 8.8rem;\n                }\n\n                span {\n                    color: #1a1a1a;\n                    font-family: $spaceAgeCyr;\n                    font-size: 1.7rem;\n                    font-style: normal;\n                    font-weight: 400;\n                    display: block;\n                    margin-top: 1.6rem;\n                    text-align: center;\n\n                    @include small-tablet {\n                        font-size: 2.48rem;\n                        font-style: normal;\n                        font-weight: 400;\n                        line-height: 0.7735rem;\n                        margin-top: 3.5rem;\n                    }\n                }\n            }\n\n            &-title {\n                max-width: 23rem;\n\n                @include small-tablet {\n                    font-size: 2.8rem;\n                    font-style: normal;\n                    font-weight: 400;\n                    line-height: normal;\n                }\n            }\n        }\n    }\n\n    &__articles {\n        display: grid;\n        grid-template-columns: repeat(3, minmax(51rem, 1fr));\n        gap: 3.7rem;\n        margin-top: 5.9rem;\n\n        @include small-tablet {\n            grid-template-columns: repeat(3, minmax(15.2rem, 1fr));\n            gap: 2.8rem;\n            margin-top: 17rem;\n        }\n    }\n\n    &__article {\n        border-radius: 3rem;\n        background: rgba(255, 255, 255, 0.1);\n        backdrop-filter: blur(2rem);\n        position: relative;\n\n        a:hover {\n            color: $green;\n        }\n\n        @include small-tablet {\n            border-radius: 2rem;\n        }\n\n        &-link {\n            padding: 1.1rem 6rem 1.1rem 4.1rem;\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            gap: 2rem;\n\n            @include small-tablet {\n                flex-direction: column;\n                gap: 2.6rem;\n                height: 100%;\n                padding: 11.5rem 2rem 3rem;\n            }\n\n\n            &-title {\n                font-size: 2.5rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: normal;\n                max-width: 18rem;\n                transition: 0.3s color ease;\n\n                @include small-tablet {\n                    font-size: 2.8rem;\n                    font-style: normal;\n                    font-weight: 400;\n                    line-height: normal;\n                    text-align: center;\n                    max-width: 100%;\n                    flex: 1 1 auto;\n                }\n            }\n\n            &-image {\n                @include sizes(20.2rem, 20.2rem);\n                flex: 0 0 20.2rem;\n                border-radius: 50%;\n\n                @include small-tablet {\n                    position: absolute;\n                    @include sizes(16.2rem, 16.2rem);\n                    flex: 0 0 16.2rem;\n                    top: 0;\n                    left: 50%;\n                    transform: translate(-50%, -50%);\n                }\n\n                img {\n                    border-radius: inherit;\n                    height: 100%;\n                    object-fit: cover;\n                }\n            }\n\n            &-icon {\n                position: absolute;\n                top: 1rem;\n                right: 1.3rem;\n\n                &_has-number {\n                    display: inline-flex;\n                    align-items: center;\n                    justify-content: center;\n                    font-weight: 300;\n                    transition: color 0.3s ease;\n                }\n\n                @include rotated-arrow;\n\n                @include small-tablet {\n                    position: static;\n                    padding: 0.8rem;\n                }\n            }\n        }\n    }\n}\n",".promotion {\n    margin-bottom: 31rem;\n\n    &__content {\n        display: flex;\n        flex-direction: column;\n        padding: 0 1.5rem 0 2.9rem;\n        position: relative;\n\n        @include small-tablet {\n            padding: 0;\n            gap: 1rem;\n        }\n\n        &::after {\n            @include pseudo {\n                content: '3';\n                -webkit-text-stroke-width: 0.5rem;\n                -webkit-text-stroke-color: rgba(41, 255, 127, 0.1);\n                font-family: $spaceAgeCyr;\n                font-size: 70rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: normal;\n                color: $bgColor;\n                left: 50%;\n                transform: translateX(-50%);\n                top: -34rem;\n                z-index: -1;\n            }\n        }\n    }\n\n    &__title {\n        @include small-tablet {\n            letter-spacing: 0.5rem;\n        }\n    }\n\n    &__block {\n        display: flex;\n        flex-direction: column;\n\n        @include small-tablet {\n            flex-direction: column-reverse;\n            gap: 1rem;\n\n            &:last-child {\n                .promotion__title {\n                    margin-left: auto;\n                    margin-right: 0 !important;\n                }\n            }\n        }\n\n        &:nth-child(even) {\n            text-align: end;\n\n            @include small-tablet {\n                text-align: start;\n            }\n\n            span {\n                display: block;\n                margin-right: 34rem;\n\n                @include small-tablet {\n                    margin-right: auto;\n                }\n            }\n        }\n\n        @include small-tablet {\n            &:nth-child(odd) {\n                text-align: end;\n\n                .promotion__title {\n                    margin-right: 5rem;\n                }\n            }\n        }\n    }\n\n    &__subtitle {\n        font-size: 1.8rem;\n        font-style: normal;\n        font-weight: 500;\n        line-height: normal;\n\n        @include small-tablet {\n            font-size: 2.8rem;\n            font-style: normal;\n            font-weight: 400;\n            line-height: normal;\n        }\n    }\n}\n",".marketing {\n    margin-bottom: 29rem;\n\n    @include small-tablet{\n        margin-bottom: 25rem;\n    }\n\n    &__image {\n        position: absolute;\n        left: -15.2rem;\n        top: -12rem;\n        max-width: 74rem;\n        width: 100%;\n\n        @include small-tablet {\n            position: static;\n            max-width: 68rem;\n        }\n    }\n\n    &__content {\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n\n        @include small-tablet {\n            flex-direction: column;\n        }\n    }\n\n    &__title {\n        margin-bottom: 4.8rem;\n\n        @include small-tablet {\n            margin-bottom: 4.4rem;\n            text-align: center;\n        }\n    }\n\n    &__info {\n        max-width: 51rem;\n        width: 100%;\n        margin-left: 21rem;\n\n        @include small-tablet {\n            max-width: 100%;\n            margin-left: 0;\n        }\n\n        &-row {\n            display: flex;\n            align-items: flex-start;\n            gap: 4.1rem;\n            justify-content: space-between;\n            margin-bottom: 5rem;\n\n            @include small-tablet {\n                gap: 3rem;\n            }\n        }\n\n        &-list {\n            display: flex;\n            flex-direction: column;\n            padding-left: 3rem;\n            width: 100%;\n\n            @include small-tablet {\n                gap: 2rem;\n            }\n        }\n\n        &-item {\n            font-size: 1.8rem;\n            font-style: normal;\n            font-weight: 400;\n            line-height: 3rem;\n\n            @include small-tablet {\n                font-size: 2.8rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: 2rem;\n            }\n\n            @include item-dot;\n        }\n\n        &-description {\n            font-size: 1.8rem;\n            font-style: normal;\n            font-weight: 600;\n            line-height: normal;\n            max-width: 21.7rem;\n\n            @include small-tablet {\n                max-width: 33.2rem;\n                font-size: 2.8rem;\n                font-style: normal;\n                font-weight: 600;\n                line-height: normal;\n            }\n        }\n    }\n}\n",".benefits {\n    margin-bottom: 17.7rem;\n\n    @include small-tablet {\n        margin-bottom: 26rem;\n    }\n\n    &__content {\n        display: grid;\n        grid-template-columns: repeat(4, minmax(37.4rem, 1fr));\n        gap: 3.6rem;\n\n        @include small-tablet {\n            grid-template-columns: repeat(2, minmax(32.8rem, 1fr));\n            gap: 2.6rem 2.2rem;\n        }\n    }\n\n    &__article {\n        border-radius: 3rem;\n        background: rgba(255, 255, 255, 0.1);\n        padding: 3.8rem 2.2rem;\n        display: flex;\n        flex-direction: column;\n\n        @include small-tablet {\n            padding: 3.4rem 2rem 2rem;\n        }\n\n        &-heading {\n            display: flex;\n            align-items: flex-start;\n            gap: 1.6rem;\n            margin-bottom: 4rem;\n            justify-content: space-between;\n\n            @include small-tablet {\n                margin-bottom: 3.4rem;\n            }\n\n            &-title {\n                font-size: 2.5rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: normal;\n                display: block;\n                max-width: 22.6rem;\n                width: 100%;\n\n                @include small-tablet {\n                    max-width: 100%;\n                }\n            }\n\n            &-counter {\n                color: $darkPurple;\n                font-size: 6rem;\n                font-style: normal;\n                font-weight: 700;\n                line-height: normal;\n\n                @include small-tablet {\n                    display: none;\n                }\n            }\n        }\n\n        &-poster {\n            border-radius: 3rem;\n            border: 0.1rem solid rgba(255, 255, 255, 0.3);\n            background: #101653;\n            height: 21.9rem;\n            position: relative;\n            margin-bottom: 3rem;\n            margin-top: auto;\n\n            @include small-tablet {\n                margin-bottom: 2rem;\n                height: 20rem;\n            }\n\n            &-image {\n                height: auto;\n                width: auto;\n                position: absolute;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n                @include sizes(28rem, 30rem);\n\n                @include small-tablet {\n                    @include sizes(26rem, 28rem);\n                }\n\n                img {\n                    width: 100%;\n                    height: 100%;\n                }\n            }\n        }\n\n        &-description {\n            font-size: 1.6rem;\n            font-style: normal;\n            font-weight: 300;\n            line-height: normal;\n            padding-right: 3rem;\n\n            @include small-tablet {\n                font-size: 2rem;\n                font-style: normal;\n                font-weight: 300;\n                line-height: normal;\n                padding-right: 0;\n            }\n        }\n    }\n}\n",".portfolio {\n    margin-bottom: 18.5rem;\n\n    @include small-tablet {\n        margin-bottom: 27rem;\n    }\n\n    &__heading {\n        margin-bottom: 6.3rem;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 2rem;\n\n        @include small-tablet {\n            flex-direction: column;\n            gap: 8rem;\n            margin-bottom: 8rem;\n        }\n    }\n\n    &__list {\n        display: grid;\n        grid-template-columns: repeat(2, minmax(78.4rem, 1fr));\n        gap: 3.6rem 3.3rem;\n        margin-bottom: 6.6rem;\n\n        @include small-tablet {\n            display: flex;\n            flex-direction: column;\n            gap: 3.2rem;\n            margin-bottom: 7.6rem;\n        }\n    }\n\n    &__item {\n        a {\n            display: flex;\n            flex-direction: column;\n            gap: 3.3rem;\n            border-radius: 3rem;\n            background: rgba(255, 255, 255, 0.1);\n            padding: 2.2rem;\n\n            @include small-tablet {\n                gap: 2.6rem;\n                padding: 2rem;\n            }\n\n            &:hover {\n                .portfolio__item-text {\n                    color: $green;\n                }\n\n                .portfolio__item-image img {\n                    transform: scale(1.1);\n                }\n            }\n        }\n\n        &-image {\n            @include sizes(100%, 36.5rem);\n            border-radius: 3rem;\n            border: 0.1rem solid rgba(255, 255, 255, 0.3);\n            overflow: hidden;\n\n            @include small-tablet {\n                @include sizes(100%, 32rem);\n            }\n\n            img {\n                height: 100%;\n                border-radius: inherit;\n                transition: 0.3s transform ease;\n            }\n        }\n\n        &-bottom {\n            display: flex;\n            align-items: flex-end;\n            justify-content: space-between;\n        }\n\n        &-text {\n            display: flex;\n            flex-direction: column;\n            gap: 1rem;\n            font-size: 2.5rem;\n            font-style: normal;\n            font-weight: 400;\n            line-height: 3rem;\n            transition: 0.3s color ease;\n\n            @include small-tablet {\n                font-size: 2.8rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: 1.5rem;\n                gap: 2rem;\n            }\n\n            span {\n                font-size: 1.6rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: 3rem;\n                color: $white;\n\n                @include small-tablet {\n                    font-size: 2rem;\n                    font-style: normal;\n                    font-weight: 400;\n                    line-height: 1.5rem;\n                }\n            }\n        }\n\n        &-icon {\n            @include rotated-arrow;\n\n            @include small-tablet{\n                padding: .6rem;\n                @include sizes(5.2rem, 5.2rem);\n            }\n        }\n    }\n\n    &__link {\n        margin: 0 auto;\n        width: fit-content;\n    }\n}\n","@import '../sections/intro';\n@import '../sections/promotion';\n@import '../sections/marketing';\n@import '../sections/benefits';\n@import '../sections/portfolio';\n\nfigure {\n    margin: 0;\n}\n\nbody::after {\n    content: '';\n    position: fixed;\n    z-index: 99;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(255, 255, 255, 0.1);\n    backdrop-filter: blur(2rem);\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.8s ease 0s;\n\n    ._menu-opened & {\n        opacity: 1;\n    }\n}\n\n@media (min-width: 48.01em) {\n    .mobile {\n        display: none;\n    }\n}\n\n@media (max-width: 48em) {\n    .desktop {\n        display: none;\n    }\n}\n",null],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGl5QkFBaXlCLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLFFBQVEsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxTQUFTLFVBQVUsVUFBVSxVQUFVLE1BQU0sU0FBUyxVQUFVLE1BQU0sU0FBUyxVQUFVLE9BQU8sV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLGNBQWMsWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sY0FBYyxZQUFZLFlBQVksT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFlBQVksWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sWUFBWSxRQUFRLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxRQUFRLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxZQUFZLFFBQVEsT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLGNBQWMsWUFBWSxZQUFZLFlBQVksT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sWUFBWSxTQUFTLE9BQU8sV0FBVyxVQUFVLFFBQVEsT0FBTyxXQUFXLFVBQVUsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFlBQVksUUFBUSxPQUFPLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxPQUFPLE9BQU8sVUFBVSxXQUFXLFFBQVEsVUFBVSxXQUFXLFdBQVcsV0FBVyxRQUFRLFFBQVEsVUFBVSxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsUUFBUSxVQUFVLFFBQVEsUUFBUSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsUUFBUSxRQUFRLFVBQVUsU0FBUyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxRQUFRLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFlBQVksVUFBVSxVQUFVLFdBQVcsUUFBUSxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxPQUFPLFFBQVEsVUFBVSxZQUFZLFlBQVksV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxjQUFjLFlBQVksWUFBWSxZQUFZLFdBQVcsUUFBUSxRQUFRLFdBQVcsVUFBVSxXQUFXLFFBQVEsT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLGFBQWEsV0FBVyxZQUFZLFFBQVEsUUFBUSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFFBQVEsT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxjQUFjLFlBQVksWUFBWSxRQUFRLFFBQVEsVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxRQUFRLFdBQVcsT0FBTyxRQUFRLFdBQVcsUUFBUSxPQUFPLGFBQWEsWUFBWSxZQUFZLFlBQVksV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLGFBQWEsV0FBVyxZQUFZLFFBQVEsT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsUUFBUSxRQUFRLFVBQVUsU0FBUyxRQUFRLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFFBQVEsUUFBUSxVQUFVLFFBQVEsUUFBUSxNQUFNLFVBQVUsUUFBUSxPQUFPLFFBQVEsTUFBTSxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxRQUFRLE9BQU8sVUFBVSxNQUFNLE9BQU8sUUFBUSxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sY0FBYyxZQUFZLFlBQVksWUFBWSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsYUFBYSxhQUFhLFlBQVksWUFBWSxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxjQUFjLFlBQVksWUFBWSxPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLGNBQWMsWUFBWSxZQUFZLFFBQVEsT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxZQUFZLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxRQUFRLFVBQVUsUUFBUSxRQUFRLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sWUFBWSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sWUFBWSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxRQUFRLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsUUFBUSxPQUFPLFdBQVcsZUFBZSxZQUFZLFlBQVksWUFBWSxVQUFVLFVBQVUsV0FBVyxRQUFRLE9BQU8sYUFBYSxZQUFZLFlBQVksUUFBUSxPQUFPLFlBQVksVUFBVSxRQUFRLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLGNBQWMsWUFBWSxZQUFZLFFBQVEsT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLGFBQWEsWUFBWSxZQUFZLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLGFBQWEsWUFBWSxZQUFZLFFBQVEsT0FBTyxVQUFVLGNBQWMsWUFBWSxZQUFZLFFBQVEsUUFBUSxVQUFVLFFBQVEsTUFBTSxRQUFRLE9BQU8sVUFBVSxXQUFXLE9BQU8sdUNBQXVDLHVDQUF1Qyx1QkFBdUIsK0VBQStFLEdBQUcsZ0JBQWdCLHVDQUF1Qyx1QkFBdUIsaUZBQWlGLEdBQUcsZ0JBQWdCLHVDQUF1Qyx1QkFBdUIsZ0ZBQWdGLEdBQUcsZ0JBQWdCLHVDQUF1Qyx1QkFBdUIsa0ZBQWtGLEdBQUcsZ0JBQWdCLHVDQUF1Qyx1QkFBdUIsOEVBQThFLEdBQUcsZ0JBQWdC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QTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCOztBQUU1Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDOEI7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUMyQjs7QUFFM0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNzQjs7QUFFdEI7O0FBRXlCO0FBQ0U7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9kZXYvdWtpazAuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2xpYnMvZGQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL3V0aWxzL2hhbWJ1cmdlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvdXRpbHMvc2VsZWN0LmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz82YzJkIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbmF2LWl0ZW0taGVhZGluZycpO1xuXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJy0tYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5mdW5jdGlvbiBEeW5hbWljQWRhcHQodHlwZSkge1xuICB0aGlzLnR5cGUgPSB0eXBlO1xufVxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gIHRoaXMu0L5iamVjdHMgPSBbXTtcbiAgdGhpcy5kYUNsYXNzbmFtZSA9ICdfZHluYW1pY19hZGFwdF8nO1xuICB0aGlzLm5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZGFdJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLm5vZGVzW2ldO1xuICAgIGNvbnN0IGRhdGEgPSBub2RlLmRhdGFzZXQuZGEudHJpbSgpO1xuICAgIGNvbnN0IGRhdGFBcnJheSA9IGRhdGEuc3BsaXQoJywnKTtcbiAgICBjb25zdCDQvmJqZWN0ID0ge307XG4gICAg0L5iamVjdC5lbGVtZW50ID0gbm9kZTtcbiAgICDQvmJqZWN0LnBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICDQvmJqZWN0LmRlc3RpbmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihkYXRhQXJyYXlbMF0udHJpbSgpKTtcbiAgICDQvmJqZWN0LmJyZWFrcG9pbnQgPSBkYXRhQXJyYXlbMV0gPyBkYXRhQXJyYXlbMV0udHJpbSgpIDogJzc2Nyc7XG4gICAg0L5iamVjdC5wbGFjZSA9IGRhdGFBcnJheVsyXSA/IGRhdGFBcnJheVsyXS50cmltKCkgOiAnbGFzdCc7XG4gICAg0L5iamVjdC5pbmRleCA9IHRoaXMuaW5kZXhJblBhcmVudCjQvmJqZWN0LnBhcmVudCwg0L5iamVjdC5lbGVtZW50KTtcbiAgICB0aGlzLtC+YmplY3RzLnB1c2go0L5iamVjdCk7XG4gIH1cbiAgdGhpcy5hcnJheVNvcnQodGhpcy7QvmJqZWN0cyk7XG4gIHRoaXMubWVkaWFRdWVyaWVzID0gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKFxuICAgIHRoaXMu0L5iamVjdHMsXG4gICAgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICcoJyArXG4gICAgICAgIHRoaXMudHlwZSArXG4gICAgICAgICctd2lkdGg6ICcgK1xuICAgICAgICBpdGVtLmJyZWFrcG9pbnQgK1xuICAgICAgICAncHgpLCcgK1xuICAgICAgICBpdGVtLmJyZWFrcG9pbnRcbiAgICAgICk7XG4gICAgfSxcbiAgICB0aGlzXG4gICk7XG4gIHRoaXMubWVkaWFRdWVyaWVzID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKFxuICAgIHRoaXMubWVkaWFRdWVyaWVzLFxuICAgIGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgc2VsZikge1xuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoc2VsZiwgaXRlbSkgPT09IGluZGV4O1xuICAgIH1cbiAgKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1lZGlhUXVlcmllcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG1lZGlhID0gdGhpcy5tZWRpYVF1ZXJpZXNbaV07XG4gICAgY29uc3QgbWVkaWFTcGxpdCA9IFN0cmluZy5wcm90b3R5cGUuc3BsaXQuY2FsbChtZWRpYSwgJywnKTtcbiAgICBjb25zdCBtYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEobWVkaWFTcGxpdFswXSk7XG4gICAgY29uc3QgbWVkaWFCcmVha3BvaW50ID0gbWVkaWFTcGxpdFsxXTtcbiAgICBjb25zdCDQvmJqZWN0c0ZpbHRlciA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChcbiAgICAgIHRoaXMu0L5iamVjdHMsXG4gICAgICBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5icmVha3BvaW50ID09PSBtZWRpYUJyZWFrcG9pbnQ7XG4gICAgICB9XG4gICAgKTtcbiAgICBtYXRjaE1lZGlhLmFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLm1lZGlhSGFuZGxlcihtYXRjaE1lZGlhLCDQvmJqZWN0c0ZpbHRlcik7XG4gICAgfSk7XG4gICAgdGhpcy5tZWRpYUhhbmRsZXIobWF0Y2hNZWRpYSwg0L5iamVjdHNGaWx0ZXIpO1xuICB9XG59O1xuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5tZWRpYUhhbmRsZXIgPSBmdW5jdGlvbiAobWF0Y2hNZWRpYSwg0L5iamVjdHMpIHtcbiAgaWYgKG1hdGNoTWVkaWEubWF0Y2hlcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwg0L5iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0INC+YmplY3QgPSDQvmJqZWN0c1tpXTtcbiAgICAgINC+YmplY3QuaW5kZXggPSB0aGlzLmluZGV4SW5QYXJlbnQo0L5iamVjdC5wYXJlbnQsINC+YmplY3QuZWxlbWVudCk7XG4gICAgICB0aGlzLm1vdmVUbyjQvmJqZWN0LnBsYWNlLCDQvmJqZWN0LmVsZW1lbnQsINC+YmplY3QuZGVzdGluYXRpb24pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvL2ZvciAobGV0IGkgPSAwOyBpIDwg0L5iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBpID0g0L5iamVjdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0INC+YmplY3QgPSDQvmJqZWN0c1tpXTtcbiAgICAgIGlmICjQvmJqZWN0LmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuZGFDbGFzc25hbWUpKSB7XG4gICAgICAgIHRoaXMubW92ZUJhY2so0L5iamVjdC5wYXJlbnQsINC+YmplY3QuZWxlbWVudCwg0L5iamVjdC5pbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5tb3ZlVG8gPSBmdW5jdGlvbiAocGxhY2UsIGVsZW1lbnQsIGRlc3RpbmF0aW9uKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmRhQ2xhc3NuYW1lKTtcbiAgaWYgKHBsYWNlID09PSAnbGFzdCcgfHwgcGxhY2UgPj0gZGVzdGluYXRpb24uY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgZGVzdGluYXRpb24uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHBsYWNlID09PSAnZmlyc3QnKSB7XG4gICAgZGVzdGluYXRpb24uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgZWxlbWVudCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGRlc3RpbmF0aW9uLmNoaWxkcmVuW3BsYWNlXS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgZWxlbWVudCk7XG59O1xuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5tb3ZlQmFjayA9IGZ1bmN0aW9uIChwYXJlbnQsIGVsZW1lbnQsIGluZGV4KSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmRhQ2xhc3NuYW1lKTtcbiAgaWYgKHBhcmVudC5jaGlsZHJlbltpbmRleF0gIT09IHVuZGVmaW5lZCkge1xuICAgIHBhcmVudC5jaGlsZHJlbltpbmRleF0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIGVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHBhcmVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xuICB9XG59O1xuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5pbmRleEluUGFyZW50ID0gZnVuY3Rpb24gKHBhcmVudCwgZWxlbWVudCkge1xuICBjb25zdCBhcnJheSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHBhcmVudC5jaGlsZHJlbik7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGFycmF5LCBlbGVtZW50KTtcbn07XG5EeW5hbWljQWRhcHQucHJvdG90eXBlLmFycmF5U29ydCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKHRoaXMudHlwZSA9PT0gJ21pbicpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuc29ydC5jYWxsKGFyciwgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIGlmIChhLmJyZWFrcG9pbnQgPT09IGIuYnJlYWtwb2ludCkge1xuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gYi5wbGFjZSkge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGEucGxhY2UgPT09ICdmaXJzdCcgfHwgYi5wbGFjZSA9PT0gJ2xhc3QnKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGEucGxhY2UgPT09ICdsYXN0JyB8fCBiLnBsYWNlID09PSAnZmlyc3QnKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYS5wbGFjZSAtIGIucGxhY2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhLmJyZWFrcG9pbnQgLSBiLmJyZWFrcG9pbnQ7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgQXJyYXkucHJvdG90eXBlLnNvcnQuY2FsbChhcnIsIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICBpZiAoYS5icmVha3BvaW50ID09PSBiLmJyZWFrcG9pbnQpIHtcbiAgICAgICAgaWYgKGEucGxhY2UgPT09IGIucGxhY2UpIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhLnBsYWNlID09PSAnZmlyc3QnIHx8IGIucGxhY2UgPT09ICdsYXN0Jykge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGEucGxhY2UgPT09ICdsYXN0JyB8fCBiLnBsYWNlID09PSAnZmlyc3QnKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGIucGxhY2UgLSBhLnBsYWNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYi5icmVha3BvaW50IC0gYS5icmVha3BvaW50O1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxufTtcbmNvbnN0IGRhID0gbmV3IER5bmFtaWNBZGFwdCgnbWF4Jyk7XG5kYS5pbml0KCk7XG4iLCJpbXBvcnQgeyBib2R5TG9ja1N0YXR1cywgYm9keUxvY2tUb2dnbGUgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgbWVudUluaXQgPSAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKSkge1xuICAgICAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJyk7XG5cbiAgICAgICAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChib2R5TG9ja1N0YXR1cykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdfbWVudS1vcGVuZWQnKTtcbiAgICAgICAgICAgICAgICBib2R5TG9ja1RvZ2dsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5tZW51SW5pdCgpO1xuIiwiaW1wb3J0IHsgX3NsaWRlVXAsIF9zbGlkZURvd24sIF9zbGlkZVRvZ2dsZSB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jbGFzcyBTZWxlY3Qge1xuICAgIC8vIHNldHVwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIC8vIGN1c3RvbSBzZWxlY3QgY2xhc3Nlc1xuICAgICAgICB0aGlzLmNsYXNzZXMgPSB7XG4gICAgICAgICAgICAvLyBodG1sIGJ1aWxkIGNsYXNzZXNcbiAgICAgICAgICAgIHNlbDogJ3NlbGVjdCcsXG4gICAgICAgICAgICBib2R5OiAnc2VsZWN0X19ib2R5JyxcbiAgICAgICAgICAgIGxhYmVsOiAnc2VsZWN0X19sYWJlbCcsXG4gICAgICAgICAgICB0aXRsZTogJ3NlbGVjdF9fdGl0bGUnLFxuICAgICAgICAgICAgdmFsOiAnc2VsZWN0X192YWx1ZScsXG4gICAgICAgICAgICBjb250ZW50OiAnc2VsZWN0X19jb250ZW50JyxcbiAgICAgICAgICAgIG9wdGlvbnM6ICdzZWxlY3RfX29wdGlvbnMnLFxuICAgICAgICAgICAgb3B0aW9uOiAnc2VsZWN0X19vcHRpb24nLFxuICAgICAgICAgICAgc2Nyb2xsOiAnc2VsZWN0X19zY3JvbGwnLFxuICAgICAgICAgICAgZ3JvdXA6ICdzZWxlY3RfX2dyb3VwJyxcbiAgICAgICAgICAgIGlucDogJ3NlbGVjdF9faW5wdXQnLFxuICAgICAgICAgICAgYXNzZXQ6ICdzZWxlY3RfX2Fzc2V0JyxcbiAgICAgICAgICAgIHR4dDogJ3NlbGVjdF9fdGV4dCcsXG4gICAgICAgICAgICBoaW50OiAnc2VsZWN0X19oaW50JyxcblxuICAgICAgICAgICAgLy8gc3RhdGUgY2xhc3Nlc1xuICAgICAgICAgICAgYWN0aXZlOiAnX3NlbGVjdC1hY3RpdmUnLFxuICAgICAgICAgICAgZm9jdXNlZDogJ19zZWxlY3QtZm9jdXNlZCcsXG4gICAgICAgICAgICBvcGVuZWQ6ICdfc2VsZWN0LW9wZW5lZCcsXG4gICAgICAgICAgICBmaWxsZWQ6ICdfc2VsZWN0LWZpbGxlZCcsXG4gICAgICAgICAgICBzZWxlY3RlZDogJ19zZWxlY3Qtc2VsZWN0ZWQnLFxuICAgICAgICAgICAgZGlzYWJsZWQ6ICdfc2VsZWN0LWRpc2FibGVkJyxcblxuICAgICAgICAgICAgLy8gYWRkaXRpb25hbCBjbGFzc2VzXG4gICAgICAgICAgICBsaXN0OiAnX3NlbGVjdC1saXN0JyxcbiAgICAgICAgICAgIGVycm9yOiAnX3NlbGVjdC1lcnJvcicsXG4gICAgICAgICAgICBtdWx0aXBsZTogJ19zZWxlY3QtbXVsdGlwbGUnLFxuICAgICAgICAgICAgY2hlY2tib3g6ICdfc2VsZWN0LWNoZWNrYm94JyxcbiAgICAgICAgICAgIGxhYmVsOiAnX3NlbGVjdC1sYWJlbCdcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBhbGwgc2VsZWN0IGl0ZW1zXG4gICAgICAgIGNvbnN0IHNlbGVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKTtcbiAgICAgICAgaWYgKHNlbGVjdExpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmluaXQoc2VsZWN0TGlzdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzZWxlY3QgaW5pdGlhbGl6YXRpb24gJiBidWlsZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIGluaXRpYWxpemF0aW9uXG4gICAgaW5pdChzZWxlY3RMaXN0KSB7XG4gICAgICAgIC8vIGluaXRcbiAgICAgICAgc2VsZWN0TGlzdC5mb3JFYWNoKChzZWxlY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXItcmF0aW5nJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRTZWxJdGVtKHNlbGVjdCwgaW5kZXggKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZXZlbnRzXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAnY2xpY2snLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGlvbnMoZSk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdrZXlkb3duJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb25zKGUpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAnZm9jdXNpbicsXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2ZvY3Vzb3V0JyxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb25zKGUpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgfVxuICAgIC8vIHNpbmdsZSBzZWxlY3QgaXRlbSBpbml0aWFsaXphdGlvblxuICAgIGluaXRTZWxJdGVtKHJlbGF0aXZlU2VsLCBpbmRleCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zZWwpO1xuICAgICAgICByZWxhdGl2ZVNlbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxlY3QsIHJlbGF0aXZlU2VsKTtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKHJlbGF0aXZlU2VsKTtcbiAgICAgICAgcmVsYXRpdmVTZWwuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgaW5kZXggPyAocmVsYXRpdmVTZWwuZGF0YXNldC5zZWxJZCA9IGluZGV4KSA6IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpKSB7XG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5kYXRhc2V0Lm9wdFBsYWNlaG9sZGVyID0gdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkudmFsdWU7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkubGFiZWwuc2hvdykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbFRpdGxlID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMudGl0bGUpLnR3aW5TZWw7XG4gICAgICAgICAgICAgICAgc2VsVGl0bGUuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgICAgICAgICAgICAnYWZ0ZXJiZWdpbicsXG4gICAgICAgICAgICAgICAgICAgIGA8c3BhbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmxhYmVsfVwiPiR7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS5sYWJlbC50ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS5sYWJlbC50ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9PC9zcGFuPmBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkICE9PSAnMCcpIHtcbiAgICAgICAgICAgIHNlbGVjdC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICAgICAgICAgJ2JlZm9yZWVuZCcsXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5ib2R5fVwiPjxkaXYgaGlkZGVuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMub3B0aW9uc31cIj48L2Rpdj48L2Rpdj5gXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgICAgICAnYmVmb3JlZW5kJyxcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmJvZHl9XCI+PGRpdiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLm9wdGlvbnN9XCI+PC9kaXY+PC9kaXY+YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYnVpbGQocmVsYXRpdmVTZWwpO1xuXG4gICAgICAgIHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgPSByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkID8gcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCA6ICcxNTAnO1xuICAgICAgICByZWxhdGl2ZVNlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgX3RoaXMuaW5pdFNlbGVjdGlvbnMoZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBzZWxlY3QgYnVpbGRcbiAgICBidWlsZChyZWxhdGl2ZVNlbCkge1xuICAgICAgICBjb25zdCBzZWxlY3QgPSByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBzZWxPYmogPSB0aGlzO1xuXG4gICAgICAgIC8vIHNldCBpZFxuICAgICAgICBzZWxlY3QuZGF0YXNldC5zZWxJZCA9IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSWQ7XG4gICAgICAgIC8vIHNldCB2YWx1ZVxuICAgICAgICB0aGlzLnNldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xuICAgICAgICAvLyBzZXQgb3B0aW9uc1xuICAgICAgICB0aGlzLnNldE9wdGlvbnMoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XG4gICAgICAgIC8vIHNldCBjc3MgbW9kaWZpY2F0b3JcbiAgICAgICAgcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxBZGRvbkNsYXNzXG4gICAgICAgICAgICA/IHNlbGVjdC5jbGFzc0xpc3QuYWRkKGBzZWxlY3RfJHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEFkZG9uQ2xhc3N9YClcbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgLy8gc2V0IGNsYXNzIGlmIHNlbGVjdCBpcyBtdWx0aXBsZVxuICAgICAgICByZWxhdGl2ZVNlbC5tdWx0aXBsZVxuICAgICAgICAgICAgPyBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMubXVsdGlwbGUpXG4gICAgICAgICAgICA6IHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5tdWx0aXBsZSk7XG4gICAgICAgIC8vIHNldCBjbGFzcyBpZiBzZWxlY3QgY2hlY2tib3hlcyBhcmUgc2V0XG4gICAgICAgIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtY2hlY2tib3hlcycpICYmIHJlbGF0aXZlU2VsLm11bHRpcGxlXG4gICAgICAgICAgICA/IHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5jaGVja2JveClcbiAgICAgICAgICAgIDogc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmNoZWNrYm94KTtcbiAgICAgICAgLy8gZGlzYWJsZSBzZWxlY3RcbiAgICAgICAgdGhpcy5kaXNhYmxlU2VsZWN0KHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xuICAgICAgICAvLyBzZXQgc2VhcmNoIGFjdGlvbnMgaWYgZGF0YS1zZWwtc2VhcmNoIGlzIHNldFxuICAgICAgICByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNlYXJjaCcpID8gdGhpcy5zZXRTZWFyY2hBY3Rpb25zKHNlbGVjdCkgOiBudWxsO1xuICAgICAgICAvLyBzZXQgc2VsZWN0IGFjdGlvbnMgaWYgaXQncyBpbml0aWFsbHkgb3BlbmVkXG4gICAgICAgIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtb3BlbmVkJykgPyB0aGlzLnNldEFjdGlvbihzZWxlY3QpIDogbnVsbDtcblxuICAgICAgICAvLyBzZXQgc2VsZWN0IGhpbnRcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSGludCkge1xuICAgICAgICAgICAgcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICAgICAgICAgJ2JlZm9yZWVuZCcsXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJzZWxlY3RfX2hpbnRcIj4ke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSGludH08L2Rpdj5gXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWRhdGUgc2VsZWN0XG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5jbG9zZXN0KCdmb3JtJykpIHtcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLmNsb3Nlc3QoJ2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbE9iai5jbGFzc2VzLmZpbGxlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsT2JqLmFkZEVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxPYmoucmVtb3ZlRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2hvdyAvIGhpZGUgc2VsZWN0aW9uIGZyb20gc2VsZWN0IHRpdGxlXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvdy12YWwnKSkge1xuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ19zZWxlY3Qtc2hvdy12YWwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdfc2VsZWN0LXNob3ctdmFsJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gc2V0IHR3aW4gc2VsZWN0IHRpdGxlIHZhbHVlXG4gICAgc2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xuICAgICAgICBjb25zdCBzZWxCb2R5ID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMuYm9keSkudHdpblNlbDtcbiAgICAgICAgY29uc3Qgc2VsVGl0bGUgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbDtcblxuICAgICAgICBpZiAoc2VsVGl0bGUpIHNlbFRpdGxlLnJlbW92ZSgpO1xuICAgICAgICBzZWxCb2R5Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHRoaXMuZ2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCkpO1xuICAgIH1cbiAgICAvLyBzZXQgdHdpbiBzZWxlY3Qgb3B0aW9uc1xuICAgIHNldE9wdGlvbnMoc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykudHdpblNlbDtcbiAgICAgICAgY29uc3QgcmVsYXRpdmVTZWxPcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykucmVsYXRpdmVTZWw7XG5cbiAgICAgICAgb3B0aW9ucy5pbm5lckhUTUwgPSB0aGlzLmdldE9wdGlvbnMocmVsYXRpdmVTZWwpO1xuICAgICAgICBpZiAocmVsYXRpdmVTZWxPcHRpb25zLnF1ZXJ5U2VsZWN0b3IoJ1tzZWxlY3RlZF0nKSkge1xuICAgICAgICAgICAgb3B0aW9ucy5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmNsYXNzZXMub3B0aW9ufWApLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnNlbGVjdGVkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBkaXNhYmxlIHNlbGVjdFxuICAgIGRpc2FibGVTZWxlY3Qoc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xuICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICAgICAgICB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgICAgICAgdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMudGl0bGUpLnR3aW5TZWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1haW4gYWN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gc2V0IG1haW4gYWN0aW9uc1xuICAgIHNldEFjdGlvbnMoZSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgY29uc3QgdHlwZSA9IGUudHlwZTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5zZWwpKSB8fFxuICAgICAgICAgICAgdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMubGlzdCkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gdGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3QnKVxuICAgICAgICAgICAgICAgID8gdGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3QnKVxuICAgICAgICAgICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICBgLiR7dGhpcy5jbGFzc2VzLnNlbH1bZGF0YS1zZWwtaWQ9XCIke1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5saXN0KSkuZGF0YXNldC5zZWxlY3RJZFxuICAgICAgICAgICAgICAgICAgICAgIH1cIl1gXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgcmVsYXRpdmVTZWwgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QpLnJlbGF0aXZlU2VsO1xuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgICAgIGlmICghcmVsYXRpdmVTZWwuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsTGlzdCA9IHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbE9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYC4ke3RoaXMuY2xhc3Nlcy5zZWx9W2RhdGEtc2VsLWlkPVwiJHtzZWxMaXN0LmRhdGFzZXQuc2VsSWR9XCJdIC5zZWxlY3RfX29wdGlvbltkYXRhLW9wdC12YWw9XCIke3NlbExpc3QuZGF0YXNldC5vcHRWYWx9XCJdYFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0T3B0aW9uQWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwsIHNlbE9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMudGl0bGUpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb24oc2VsZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcHRpb24pKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsT3B0aW9uID0gdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3B0aW9uKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE9wdGlvbkFjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsLCBzZWxPcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnZm9jdXNpbicgfHwgdHlwZSA9PT0gJ2ZvY3Vzb3V0Jykge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5zZWwpKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2ZvY3VzaW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuZm9jdXNlZCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuZm9jdXNlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLmZpbGxlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAna2V5ZG93bicgJiYgZS5jb2RlID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VHcm91cCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbG9zZUdyb3VwKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gc2V0IHNpbmdsZSBzZWxlY3QgYWN0aW9uXG4gICAgc2V0QWN0aW9uKHNlbGVjdCkge1xuICAgICAgICBjb25zdCByZWxhdGl2ZVNlbCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCkucmVsYXRpdmVTZWw7XG4gICAgICAgIGNvbnN0IHNlbE9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS50d2luU2VsO1xuXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5jbG9zZXN0KCdbZGF0YS1vbmUtc2VsZWN0XScpKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RPbmVHcm91cCA9IHJlbGF0aXZlU2VsLmNsb3Nlc3QoJ1tkYXRhLW9uZS1zZWxlY3RdJyk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlR3JvdXAoc2VsZWN0T25lR3JvdXApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzZWxPcHRpb25zLmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuY2xhc3Nlcy5vcGVuZWQpO1xuICAgICAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgIT09ICcwJykge1xuICAgICAgICAgICAgICAgIF9zbGlkZVRvZ2dsZShzZWxPcHRpb25zLCByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5vcGVuZWQpICYmXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlJykgJiZcbiAgICAgICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5lcnJvcilcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGNsb3NlIHNpbmdsZSBzZWxlY3QgZ3JvdXBcbiAgICBjbG9zZUdyb3VwKGdyb3VwKSB7XG4gICAgICAgIGNvbnN0IHNlbEdyb3VwID0gZ3JvdXAgPyBncm91cCA6IGRvY3VtZW50O1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gc2VsR3JvdXAucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgIGAke3RoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnNlbCl9JHt0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcGVuZWQpfWBcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHNlbGVjdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZWxlY3Rpb25zLmZvckVhY2goKHNlbGVjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VJdGVtKHNlbGVjdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBjbG9zZSBzaW5nbGUgc2VsZWN0IGl0ZW1cbiAgICBjbG9zZUl0ZW0oc2VsZWN0KSB7XG4gICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0KS5yZWxhdGl2ZVNlbDtcbiAgICAgICAgY29uc3Qgc2VsT3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnR3aW5TZWw7XG5cbiAgICAgICAgaWYgKCFzZWxPcHRpb25zLmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5vcGVuZWQpO1xuICAgICAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgIT09ICcwJykge1xuICAgICAgICAgICAgICAgIF9zbGlkZVVwKHNlbE9wdGlvbnMsIHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHNldCBzaW5nbGUgb3B0aW9uIGFjdGlvbnNcbiAgICBzZXRPcHRpb25BY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCwgb3B0aW9uKSB7XG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5tdWx0aXBsZSkge1xuICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC50b2dnbGUodGhpcy5jbGFzc2VzLnNlbGVjdGVkKTtcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsZWN0aW9ucyA9IHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHM7XG5cbiAgICAgICAgICAgIHJlbGF0aXZlU2VsZWN0aW9ucy5mb3JFYWNoKChyZWxhdGl2ZVNlbGVjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHJlbGF0aXZlU2VsZWN0aW9uLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCB0d2luU2VsZWN0aW9ucyA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnNlbGVjdGVkKSk7XG4gICAgICAgICAgICB0d2luU2VsZWN0aW9ucy5mb3JFYWNoKCh0d2luU2VsZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVsYXRpdmVTZWxcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7dHdpblNlbGVjdGlvbi5kYXRhc2V0Lm9wdFZhbH1cIl1gKVxuICAgICAgICAgICAgICAgICAgICAuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbi5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLnNlbGVjdGVkKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlbGF0aXZlU2VsLnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7b3B0aW9uLmRhdGFzZXQub3B0VmFsfVwiXWApKTtcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbFxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPVwiJHtvcHRpb24uZGF0YXNldC5vcHRWYWx9XCJdYClcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0X19vcHRpb24nKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChvcHQpID0+IG9wdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCkpO1xuICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnNlbGVjdGVkKTtcbiAgICAgICAgICAgIGlmICghcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNob3ctc2VsZWN0aW9uJykpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoYCR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3B0aW9uKX1baGlkZGVuXWApKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdC5xdWVyeVNlbGVjdG9yKGAke3RoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wdGlvbil9W2hpZGRlbl1gKS5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3B0aW9uLmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWxhdGl2ZVNlbC52YWx1ZSA9IG9wdGlvbi5oYXNBdHRyaWJ1dGUoJ2RhdGEtb3B0LXZhbCcpXG4gICAgICAgICAgICAgICAgPyBvcHRpb24uZGF0YXNldC5vcHRWYWxcbiAgICAgICAgICAgICAgICA6IG9wdGlvbi50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9uKHNlbGVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKTtcbiAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25zKHJlbGF0aXZlU2VsKTtcbiAgICB9XG4gICAgLy8gc2V0IHNlYXJjaCBhY3Rpb25zXG4gICAgc2V0U2VhcmNoQWN0aW9ucyhzZWxlY3QpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjb25zdCBzZWxJbnB1dCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLmlucCkudHdpblNlbDtcbiAgICAgICAgY29uc3Qgc2VsT3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnR3aW5TZWwucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgIGAuJHt0aGlzLmNsYXNzZXMub3B0aW9ufWBcbiAgICAgICAgKTtcblxuICAgICAgICBzZWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbE9wdGlvbnMuZm9yRWFjaCgoc2VsT3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbE9wdGlvbi50ZXh0Q29udGVudC50b1VwcGVyQ2FzZSgpLmluZGV4T2Yoc2VsSW5wdXQudmFsdWUudG9VcHBlckNhc2UoKSkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxPcHRpb24uaGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsT3B0aW9uLmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxPcHRpb25zLmhpZGRlbiA9PT0gdHJ1ZSA/IF90aGlzLnNldEFjdGlvbihzZWxlY3QpIDogbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIHNldCBzZWxlY3Qgc3VidGl0bGVcbiAgICBzZXRTdWJ0aXRsZShyZWxhdGl2ZVNlbCkge31cblxuICAgIC8vIHZhbGlkYXRpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gYWRkIGFuIGVycm9yIHRvIGEgc2VsZWN0XG4gICAgYWRkRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpIHtcbiAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmVycm9yKTtcblxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zZWxFcnJvciAmJiAhcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50KSB7XG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgICAgICAnYmVmb3JlZW5kJyxcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInNlbGVjdF9faGludFwiPiR7cmVsYXRpdmVTZWwuZGF0YXNldC5zZWxFcnJvcn08L2Rpdj5gXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHJlbW92ZSBhbiBlcnJvciBmcm9tIGEgc2VsZWN0XG4gICAgcmVtb3ZlRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpIHtcbiAgICAgICAgaWYgKHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLmVycm9yKSkge1xuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19oaW50JykgJiYgIXJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSGludCkge1xuICAgICAgICAgICAgcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChyZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2hpbnQnKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1dGlscyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIGdldCBjdXN0b20gY2xhc3NcbiAgICBnZXRDbGFzcyhjc3NDbGFzcykge1xuICAgICAgICByZXR1cm4gYC4ke2Nzc0NsYXNzfWA7XG4gICAgfVxuICAgIC8vIGdldCBzaW5nbGUgc2VsZWN0IGl0ZW1cbiAgICBnZXRTZWxlY3Qoc2VsZWN0LCBjc3NDbGFzcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVsYXRpdmVTZWw6IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSxcbiAgICAgICAgICAgIHR3aW5TZWw6IHNlbGVjdC5xdWVyeVNlbGVjdG9yKHRoaXMuZ2V0Q2xhc3MoY3NzQ2xhc3MpKVxuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBnZXQgc2VsZWN0ZWQgaXRlbSB2YWx1ZVxuICAgIGdldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcbiAgICAgICAgbGV0IGF0dHIsXG4gICAgICAgICAgICBhdHRyQ2xhc3MsXG4gICAgICAgICAgICB0aXRsZVZhbCA9IHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCwgMikuaHRtbDtcblxuICAgICAgICAvLyBzZXQgdGl0bGUgdmFsdWVcbiAgICAgICAgdGl0bGVWYWwgPSB0aXRsZVZhbC5sZW5ndGhcbiAgICAgICAgICAgID8gdGl0bGVWYWxcbiAgICAgICAgICAgIDogcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxMYWJlbFxuICAgICAgICAgICAgPyByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbExhYmVsXG4gICAgICAgICAgICA6ICcnO1xuXG4gICAgICAgIC8vIHNldCBhY3RpdmUgY2xhc3MgdG8gc2VsZWN0IGlmIGl0IGNvbnRhaW5zIGFueSB2YWx1ZXNcbiAgICAgICAgaWYgKHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkudmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCBzZWxlY3QgbGFiZWxcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtbGFiZWwnKSkge1xuICAgICAgICAgICAgYXR0ciA9IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsTGFiZWxcbiAgICAgICAgICAgICAgICA/IGAgZGF0YS1zZWwtbGFiZWw9XCIke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsTGFiZWx9XCJgXG4gICAgICAgICAgICAgICAgOiBgIGRhdGEtc2VsLWxhYmVsPVwi0JLRi9Cx0L7RgFwiYDtcbiAgICAgICAgICAgIGF0dHJDbGFzcyA9IGAgJHt0aGlzLmNsYXNzZXMubGFiZWx9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHB1c2ggc2VsZWN0aW9ucyB0byB0aGUgbGlzdCBpbnNpZGUgb2Ygc2VsZWN0IHRpdGxlXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5tdWx0aXBsZSAmJiByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLWxpc3QnKSkge1xuICAgICAgICAgICAgdGl0bGVWYWwgPSB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpXG4gICAgICAgICAgICAgICAgLmVsZW1lbnRzLm1hcChcbiAgICAgICAgICAgICAgICAgICAgKG9wdGlvbikgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGA8c3BhbiBkYXRhLW9wdC1pZD1cIiR7c2VsZWN0LmRhdGFzZXQuc2VsSWR9XCIgZGF0YS1vcHQtdmFsPVwiJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIiBjbGFzcz1cIl9saXN0LWl0ZW1cIj4ke3RoaXMuZ2V0Q29udGVudChvcHRpb24pfTwvc3Bhbj5gXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5qb2luKCcnKTtcblxuICAgICAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQubGlzdCAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlbGF0aXZlU2VsLmRhdGFzZXQubGlzdCkpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlbGF0aXZlU2VsLmRhdGFzZXQubGlzdCkuaW5uZXJIVE1MID0gdGl0bGVWYWw7XG4gICAgICAgICAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtc2VhcmNoJykpIHRpdGxlVmFsID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpbml0IHNlbGVjdCBzZWFyY2hcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtc2VhcmNoJykpIHtcbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnRpdGxlfVwiPjxzcGFuICR7YXR0cn0gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy52YWx9XCI+PGlucHV0IGF1dG9jb21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIiR7dGl0bGVWYWx9XCIgZGF0YS1wbGFjZWhvbGRlcj1cIiR7dGl0bGVWYWx9XCIgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5pbnB9XCI+PC9zcGFuPjwvZGl2PmA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjdXN0b21DbGFzcyA9XG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS5lbGVtZW50cy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpLmVsZW1lbnRzWzBdLmRhdGFzZXQub3B0Q2xhc3NcbiAgICAgICAgICAgICAgICAgICAgPyBgICR7dGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS5lbGVtZW50c1swXS5kYXRhc2V0Lm9wdENsYXNzfWBcbiAgICAgICAgICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy50aXRsZX1cIj48c3BhbiAke2F0dHIgPyBhdHRyIDogJyd9IGNsYXNzPVwiJHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzZXMudmFsXG4gICAgICAgICAgICB9ICR7YXR0ckNsYXNzID8gYXR0ckNsYXNzIDogJyd9XCI+PHNwYW4gY2xhc3M9XCIke1xuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3Nlcy5jb250ZW50XG4gICAgICAgICAgICB9JHtjdXN0b21DbGFzc31cIj4ke3RpdGxlVmFsfTwvc3Bhbj48L3NwYW4+PC9idXR0b24+YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBnZXQgb3B0aW9uc1xuICAgIGdldE9wdGlvbnMocmVsYXRpdmVTZWwpIHtcbiAgICAgICAgY29uc3Qgc2VsU2Nyb2xsID0gcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1zY3JvbGwnKSA/IGBkYXRhLXNpbXBsZWJhcmAgOiAnJztcbiAgICAgICAgbGV0IHNlbFNjcm9sbEhlaWdodCA9IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsU2Nyb2xsXG4gICAgICAgICAgICA/IGBzdHlsZT1cIm1heC1oZWlnaHQ6JHt3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCA/IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsU2Nyb2xsIDogMjJ9cmVtXCJgXG4gICAgICAgICAgICA6ICcnO1xuICAgICAgICBsZXQgc2VsT3B0aW9ucyA9IEFycmF5LmZyb20ocmVsYXRpdmVTZWwub3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKHNlbE9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgc2VsT3B0aW9uc0hUTUwgPSBgYDtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICh0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKSAmJiAhdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkuc2hvdykgfHxcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbC5tdWx0aXBsZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc2VsT3B0aW9ucyA9IHNlbE9wdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxPcHRpb25zSFRNTCArPSBzZWxTY3JvbGxcbiAgICAgICAgICAgICAgICA/IGA8ZGl2ICR7c2VsU2Nyb2xsfSAke3NlbFNjcm9sbEhlaWdodH0gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5zY3JvbGx9XCI+YFxuICAgICAgICAgICAgICAgIDogJyc7XG4gICAgICAgICAgICBzZWxPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHNlbE9wdGlvbnNIVE1MICs9IHRoaXMuZ2V0T3B0aW9uKG9wdGlvbiwgcmVsYXRpdmVTZWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxPcHRpb25zSFRNTCArPSBzZWxTY3JvbGwgPyBgPC9kaXY+YCA6ICcnO1xuICAgICAgICAgICAgcmV0dXJuIHNlbE9wdGlvbnNIVE1MO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGdldCBvcHRpb25cbiAgICBnZXRPcHRpb24ob3B0aW9uLCByZWxhdGl2ZVNlbCkge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gb3B0aW9uLnNlbGVjdGVkICYmIHJlbGF0aXZlU2VsLm11bHRpcGxlID8gYCAke3RoaXMuY2xhc3Nlcy5zZWxlY3RlZH1gIDogJyc7XG4gICAgICAgIGNvbnN0IHNob3dTZWxlY3Rpb24gPVxuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkICYmICFyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvdy1zZWxlY3Rpb24nKSAmJiAhcmVsYXRpdmVTZWwubXVsdGlwbGVcbiAgICAgICAgICAgICAgICA/IGBoaWRkZW5gXG4gICAgICAgICAgICAgICAgOiBgYDtcbiAgICAgICAgY29uc3Qgb3B0aW9uQ2xhc3MgPSBvcHRpb24uZGF0YXNldC5vcHRDbGFzcyA/IGAgJHtvcHRpb24uZGF0YXNldC5vcHRDbGFzc31gIDogJyc7XG4gICAgICAgIGNvbnN0IG9wdGlvbkxpbmsgPSBvcHRpb24uZGF0YXNldC5vcHRpb25MaW5rID8gb3B0aW9uLmRhdGFzZXQub3B0aW9uTGluayA6IGZhbHNlO1xuICAgICAgICBjb25zdCBvcHRpb25MaW5rVGFyZ2V0ID0gb3B0aW9uLmhhc0F0dHJpYnV0ZSgnZGF0YS1vcHRpb24tbGluay10YXJnZXQnKSA/IGB0YXJnZXQ9XCJfYmxhbmtcImAgOiAnJztcbiAgICAgICAgbGV0IG9wdGlvbkhUTUwgPSBgYDtcblxuICAgICAgICBvcHRpb25IVE1MICs9IG9wdGlvbkxpbmtcbiAgICAgICAgICAgID8gYDxhICR7b3B0aW9uTGlua1RhcmdldH0gJHtzaG93U2VsZWN0aW9ufSBocmVmPVwiJHtvcHRpb25MaW5rfVwiIGRhdGEtb3B0LXZhbD1cIiR7b3B0aW9uLnZhbHVlfVwiIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMub3B0aW9ufSR7b3B0aW9uQ2xhc3N9JHtzZWxlY3Rpb25zfVwiPmBcbiAgICAgICAgICAgIDogYDxidXR0b24gJHtzaG93U2VsZWN0aW9ufSBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLm9wdGlvbn0ke29wdGlvbkNsYXNzfSR7c2VsZWN0aW9uc31cIiBkYXRhLW9wdC12YWw9XCIke29wdGlvbi52YWx1ZX1cIiB0eXBlPVwiYnV0dG9uXCI+YDtcbiAgICAgICAgb3B0aW9uSFRNTCArPSB0aGlzLmdldENvbnRlbnQob3B0aW9uKTtcbiAgICAgICAgb3B0aW9uSFRNTCArPSBvcHRpb25MaW5rID8gYDwvYT5gIDogYDwvYnV0dG9uPmA7XG4gICAgICAgIHJldHVybiBvcHRpb25IVE1MO1xuICAgIH1cbiAgICAvLyBnZXQgc2VsZWN0IGNvbnRlbnRcbiAgICBnZXRDb250ZW50KG9wdGlvbikge1xuICAgICAgICBjb25zdCBvcHRpb25EYXRhID0gb3B0aW9uLmRhdGFzZXQub3B0QXNzZXQgPyBgJHtvcHRpb24uZGF0YXNldC5vcHRBc3NldH1gIDogJyc7XG4gICAgICAgIGNvbnN0IG9wdGlvbkRhdGFIVE1MID1cbiAgICAgICAgICAgIG9wdGlvbkRhdGEuaW5kZXhPZignaW1nJykgPj0gMCA/IGA8aW1nIHNyYz1cIiR7b3B0aW9uRGF0YX1cIiBhbHQ9XCJcIj5gIDogb3B0aW9uRGF0YTtcbiAgICAgICAgbGV0IG9wdGlvbkNvbnRlbnRIVE1MID0gYGA7XG5cbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8c3BhbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmdyb3VwfVwiPmAgOiAnJztcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8c3BhbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmFzc2V0fVwiPmAgOiAnJztcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IG9wdGlvbkRhdGFIVE1MIDogJyc7XG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPC9zcGFuPmAgOiAnJztcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8c3BhbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnR4dH1cIj5gIDogJyc7XG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbi50ZXh0Q29udGVudDtcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8L3NwYW4+YCA6ICcnO1xuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDwvc3Bhbj5gIDogJyc7XG4gICAgICAgIHJldHVybiBvcHRpb25Db250ZW50SFRNTDtcbiAgICB9XG4gICAgLy8gZ2V0IHNlbGVjdCBwbGFjZWhvbGRlclxuICAgIGdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKSB7XG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gQXJyYXkuZnJvbShyZWxhdGl2ZVNlbC5vcHRpb25zKS5maW5kKChvcHRpb24pID0+ICFvcHRpb24udmFsdWUpO1xuXG4gICAgICAgIGlmIChwbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc3VidGl0bGUpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcGxhY2Vob2xkZXIudGV4dENvbnRlbnQsXG4gICAgICAgICAgICAgICAgc2hvdzogcGxhY2Vob2xkZXIuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1waC1zaG93JyksXG4gICAgICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogcGxhY2Vob2xkZXIuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1waCcpLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBwbGFjZWhvbGRlci5kYXRhc2V0Lm9wdFBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBnZXQgc2VsZWN0ZWQgb3B0aW9ucyBkYXRhXG4gICAgZ2V0RGF0YShyZWxhdGl2ZVNlbCkge1xuICAgICAgICBsZXQgc2VsZWN0aW9ucyA9IFtdO1xuXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5tdWx0aXBsZSkge1xuICAgICAgICAgICAgc2VsZWN0aW9ucyA9IEFycmF5LmZyb20ocmVsYXRpdmVTZWwub3B0aW9ucylcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi5zZWxlY3RlZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3Rpb25zLnB1c2gocmVsYXRpdmVTZWwub3B0aW9uc1tyZWxhdGl2ZVNlbC5zZWxlY3RlZEluZGV4XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVsZW1lbnRzOiBzZWxlY3Rpb25zLm1hcCgob3B0aW9uKSA9PiBvcHRpb24pLFxuICAgICAgICAgICAgdmFsdWVzOiBzZWxlY3Rpb25zLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpLm1hcCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpLFxuICAgICAgICAgICAgaHRtbDogc2VsZWN0aW9ucy5tYXAoKG9wdGlvbikgPT4gdGhpcy5nZXRDb250ZW50KG9wdGlvbikpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gc2VsZWN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyBpbml0IHNlbGVjdGlvbnNcbiAgICBpbml0U2VsZWN0aW9ucyhlKSB7XG4gICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsID0gZS50YXJnZXQ7XG5cbiAgICAgICAgdGhpcy5idWlsZChyZWxhdGl2ZVNlbCk7XG4gICAgICAgIHRoaXMuc2V0U2VsZWN0aW9ucyhyZWxhdGl2ZVNlbCk7XG4gICAgfVxuICAgIC8vIHNldCBzZWxlY3Rpb25zXG4gICAgc2V0U2VsZWN0aW9ucyhyZWxhdGl2ZVNlbCkge1xuICAgICAgICBjb25zdCBzZWxlY3QgPSByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc3VibWl0JykgJiYgcmVsYXRpdmVTZWwudmFsdWUpIHtcbiAgICAgICAgICAgIGxldCB0ZW1wQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICB0ZW1wQnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLmNsb3Nlc3QoJ2Zvcm0nKS5hcHBlbmQodGVtcEJ1dHRvbik7XG4gICAgICAgICAgICB0ZW1wQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgICAgICB0ZW1wQnV0dG9uLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuZmlsbGVkKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCk7XG4gICAgfVxuICAgIC8vIGN1c3RvbSBzZWxlY3QgZXZlbnQgKGxpc3RlbiB0byBhbnkgc2VsZWN0aW9ucyAvIG11dGF0aW9ucylcbiAgICBzZWxlY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCdzZWxlY3Rpb24nLCB7XG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdDogcmVsYXRpdmVTZWxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cbn1cbm5ldyBTZWxlY3Qoe30pO1xuIiwiLyoqXG4gKiBzZXQgaGFzaCB0byB1cmxcbiAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRIYXNoID0gaGFzaCA9PiB7XG4gIGhhc2ggPSBoYXNoID8gYCMke2hhc2h9YCA6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMF07XG4gIGhpc3RvcnkucHVzaFN0YXRlKCcnLCAnJywgaGFzaCk7XG59O1xuXG4vKipcbiAqIGdldCBoYXNoIGZyb20gdXJsXG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEhhc2ggPSAoKSA9PiB7XG4gIGlmIChsb2NhdGlvbi5oYXNoKSB7XG4gICAgcmV0dXJuIGxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgfVxufTtcblxuLy8gYm9keSBsb2NrXG5leHBvcnQgbGV0IGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcbi8qKlxuICogdG9nZ2xlcyBib2R5IGxvY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheVxuICovXG5leHBvcnQgY29uc3QgYm9keUxvY2tUb2dnbGUgPSAoZGVsYXkgPSA1MDApID0+IHtcbiAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2xvY2snKSkge1xuICAgIGJvZHlVbmxvY2soZGVsYXkpO1xuICB9IGVsc2Uge1xuICAgIGJvZHlMb2NrKGRlbGF5KTtcbiAgfVxufTtcbi8qKlxuICogdW5sb2NrcyBib2R5XG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcbiAqL1xuZXhwb3J0IGNvbnN0IGJvZHlVbmxvY2sgPSAoZGVsYXkgPSA1MDApID0+IHtcbiAgaWYgKGJvZHlMb2NrU3RhdHVzKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpO1xuICAgIH0sIGRlbGF5KTtcbiAgICBib2R5TG9ja1N0YXR1cyA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgYm9keUxvY2tTdGF0dXMgPSB0cnVlO1xuICAgIH0sIGRlbGF5KTtcbiAgfVxufTtcbi8qKlxuICogbG9ja3MgYm9keVxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5XG4gKi9cbmV4cG9ydCBjb25zdCBib2R5TG9jayA9IChkZWxheSA9IDUwMCkgPT4ge1xuICBpZiAoYm9keUxvY2tTdGF0dXMpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbG9jaycpO1xuXG4gICAgYm9keUxvY2tTdGF0dXMgPSBmYWxzZTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcbiAgICB9LCBkZWxheSk7XG4gIH1cbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGFycmF5XG4gKiBAcGFyYW0ge251bWJlcn0gZGF0YVNldFZhbHVlXG4gKiBwcm9jZXNzIG1lZGlhIHJlcXVlc3RzIGZyb20gYXR0cmlidXRlc1xuICovXG5leHBvcnQgY29uc3QgZGF0YU1lZGlhUXVlcmllcyA9IChhcnJheSwgZGF0YVNldFZhbHVlKSA9PiB7XG4gIC8vIGdldCBvYmplY3RzIHdpdGggbWVkaWEgcXVlcmllc1xuICBjb25zdCBtZWRpYSA9IEFycmF5LmZyb20oYXJyYXkpLmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIHNlbGYpIHtcbiAgICBpZiAoaXRlbS5kYXRhc2V0W2RhdGFTZXRWYWx1ZV0pIHtcbiAgICAgIHJldHVybiBpdGVtLmRhdGFzZXRbZGF0YVNldFZhbHVlXS5zcGxpdCgnLCcpWzBdO1xuICAgIH1cbiAgfSk7XG4gIC8vIG9iamVjdHMgd2l0aCBtZWRpYSBxdWVyaWVzIGluaXRpYWxpemF0aW9uXG4gIGlmIChtZWRpYS5sZW5ndGgpIHtcbiAgICBjb25zdCBicmVha3BvaW50c0FycmF5ID0gW107XG4gICAgbWVkaWEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IGl0ZW0uZGF0YXNldFtkYXRhU2V0VmFsdWVdO1xuICAgICAgY29uc3QgYnJlYWtwb2ludCA9IHt9O1xuICAgICAgY29uc3QgcGFyYW1zQXJyYXkgPSBwYXJhbXMuc3BsaXQoJywnKTtcbiAgICAgIGJyZWFrcG9pbnQudmFsdWUgPSBwYXJhbXNBcnJheVswXTtcbiAgICAgIGJyZWFrcG9pbnQudHlwZSA9IHBhcmFtc0FycmF5WzFdID8gcGFyYW1zQXJyYXlbMV0udHJpbSgpIDogJ21heCc7XG4gICAgICBicmVha3BvaW50Lml0ZW0gPSBpdGVtO1xuICAgICAgYnJlYWtwb2ludHNBcnJheS5wdXNoKGJyZWFrcG9pbnQpO1xuICAgIH0pO1xuICAgIC8vIGdldCB1bmlxdWUgYnJlYWtwb2ludHNcbiAgICBsZXQgbWRRdWVyaWVzID0gYnJlYWtwb2ludHNBcnJheS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICcoJyArXG4gICAgICAgIGl0ZW0udHlwZSArXG4gICAgICAgICctd2lkdGg6ICcgK1xuICAgICAgICBpdGVtLnZhbHVlICtcbiAgICAgICAgJ3B4KSwnICtcbiAgICAgICAgaXRlbS52YWx1ZSArXG4gICAgICAgICcsJyArXG4gICAgICAgIGl0ZW0udHlwZVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBtZFF1ZXJpZXMgPSB1bmlxdWVBcnJheShtZFF1ZXJpZXMpO1xuICAgIGNvbnN0IG1kUXVlcmllc0FycmF5ID0gW107XG5cbiAgICBpZiAobWRRdWVyaWVzLmxlbmd0aCkge1xuICAgICAgLy8gd29yayB3aXRoIGV2ZXJ5IGJyZWFrcG9pbnRcbiAgICAgIG1kUXVlcmllcy5mb3JFYWNoKGJyZWFrcG9pbnQgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXNBcnJheSA9IGJyZWFrcG9pbnQuc3BsaXQoJywnKTtcbiAgICAgICAgY29uc3QgbWVkaWFCcmVha3BvaW50ID0gcGFyYW1zQXJyYXlbMV07XG4gICAgICAgIGNvbnN0IG1lZGlhVHlwZSA9IHBhcmFtc0FycmF5WzJdO1xuICAgICAgICBjb25zdCBtYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEocGFyYW1zQXJyYXlbMF0pO1xuICAgICAgICAvLyBvYmplY3RzIHdpdGggY29uZGl0aW9uc1xuICAgICAgICBjb25zdCBpdGVtc0FycmF5ID0gYnJlYWtwb2ludHNBcnJheS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBpZiAoaXRlbS52YWx1ZSA9PT0gbWVkaWFCcmVha3BvaW50ICYmIGl0ZW0udHlwZSA9PT0gbWVkaWFUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtZFF1ZXJpZXNBcnJheS5wdXNoKHtcbiAgICAgICAgICBpdGVtc0FycmF5LFxuICAgICAgICAgIG1hdGNoTWVkaWEsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWRRdWVyaWVzQXJyYXk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIHNtb290aGx5IHNsaWRlcyB1cFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvd21vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IF9zbGlkZVVwID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDAsIHNob3dtb3JlID0gMCkgPT4ge1xuICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ19zbGlkZScpO1xuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmcnO1xuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGAke3RhcmdldC5vZmZzZXRIZWlnaHR9cHhgO1xuICAgIHRhcmdldC5vZmZzZXRIZWlnaHQ7XG4gICAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHNob3dtb3JlID8gYCR7c2hvd21vcmV9cmVtYCA6IGAwYDtcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IDA7XG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRhcmdldC5oaWRkZW4gPSAhc2hvd21vcmUgPyB0cnVlIDogZmFsc2U7XG4gICAgICAhc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpIDogbnVsbDtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKTtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJyk7XG4gICAgICAhc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93JykgOiBudWxsO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdfc2xpZGUnKTtcbiAgICAgIC8vIGNyZWF0ZSBldmVudFxuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCdzbGlkZVVwRG9uZScsIHtcbiAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0sIGR1cmF0aW9uKTtcbiAgfVxufTtcblxuLyoqXG4gKiBzbW9vdGhseSBzbGlkZXMgZG93blxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvd21vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IF9zbGlkZURvd24gPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCwgc2hvd21vcmUgPSAwKSA9PiB7XG4gIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnX3NsaWRlJyk7XG4gICAgdGFyZ2V0LmhpZGRlbiA9IHRhcmdldC5oaWRkZW4gPyBmYWxzZSA6IG51bGw7XG4gICAgc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpIDogbnVsbDtcbiAgICBsZXQgaGVpZ2h0ID0gdGFyZ2V0Lm9mZnNldEhlaWdodDtcbiAgICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gc2hvd21vcmUgPyBgJHtzaG93bW9yZX1yZW1gIDogYDBgO1xuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IDA7XG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XG4gICAgdGFyZ2V0Lm9mZnNldEhlaWdodDtcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2hlaWdodCwgbWFyZ2luLCBwYWRkaW5nJztcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKTtcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJyk7XG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJyk7XG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJyk7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKTtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnX3NsaWRlJyk7XG4gICAgICAvLyBjcmVhdGUgZXZlbnRcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBDdXN0b21FdmVudCgnc2xpZGVEb3duRG9uZScsIHtcbiAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0sIGR1cmF0aW9uKTtcbiAgfVxufTtcblxuLyoqXG4gKiB0b2dnbGVzIHNtb290aCBzbGlkZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cbiAqIEByZXR1cm5zIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBfc2xpZGVUb2dnbGUgPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCkgPT4ge1xuICBpZiAodGFyZ2V0LmhpZGRlbikge1xuICAgIHJldHVybiBfc2xpZGVEb3duKHRhcmdldCwgZHVyYXRpb24pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBfc2xpZGVVcCh0YXJnZXQsIGR1cmF0aW9uKTtcbiAgfVxufTtcblxuLyoqXG4gKiBjb252ZXJ0cyByZW0gdG8gcGl4ZWxzXG4gKiBAcGFyYW0ge251bWJlcn0gcmVtVmFsdWVcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtVG9QeChyZW1WYWx1ZSkge1xuICAvLyDQn9C+0LvRg9GH0LDQtdC8INGC0LXQutGD0YnQuNC5INCx0LDQt9C+0LLRi9C5INGA0LDQt9C80LXRgCDRiNGA0LjRhNGC0LAgKGZvbnQtc2l6ZSkg0LjQtyDRjdC70LXQvNC10L3RgtCwIDxodG1sPlxuICB2YXIgaHRtbEZvbnRTaXplID0gcGFyc2VGbG9hdChcbiAgICBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZm9udFNpemVcbiAgKTtcblxuICAvLyDQn9C10YDQtdCy0L7QtNC40Lwg0LfQvdCw0YfQtdC90LjQtSDQuNC3IHJlbSDQsiBweFxuICB2YXIgcHhWYWx1ZSA9IHJlbVZhbHVlICogaHRtbEZvbnRTaXplO1xuXG4gIC8vINCe0LrRgNGD0LPQu9GP0LXQvCDQt9C90LDRh9C10L3QuNC1INC00L4g0YbQtdC70YvRhSDQv9C40LrRgdC10LvQtdC5ICjQv9C+INC20LXQu9Cw0L3QuNGOKVxuICByZXR1cm4gTWF0aC5yb3VuZChweFZhbHVlKSArICdweCc7XG59XG5cbi8vIHJlbW92ZSBjbGFzcyBmcm9tIGFsbCBhcnJheSBlbGVtZW50c1xuZXhwb3J0IGNvbnN0IHJlbW92ZUNsYXNzZXMgPSAoYXJyYXksIGNsYXNzTmFtZSkgPT4ge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgYXJyYXlbaV0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9XG59O1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJFdWNsaWQgQ2lyY3VsYXIgQVwiO1xuICBmb250LXdlaWdodDogMzAwO1xuICBzcmM6IHVybChcIi4vYXNzZXRzL2ZvbnRzL0V1Y2xpZC1DaXJjdWxhci1BLUxpZ2h0LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkV1Y2xpZCBDaXJjdWxhciBBXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKFwiLi9hc3NldHMvZm9udHMvRXVjbGlkLUNpcmN1bGFyLUEtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJFdWNsaWQgQ2lyY3VsYXIgQVwiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IHVybChcIi4vYXNzZXRzL2ZvbnRzL0V1Y2xpZC1DaXJjdWxhci1BLU1lZGl1bS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJFdWNsaWQgQ2lyY3VsYXIgQVwiO1xuICBmb250LXdlaWdodDogNjAwO1xuICBzcmM6IHVybChcIi4vYXNzZXRzL2ZvbnRzL0V1Y2xpZC1DaXJjdWxhci1BLVNlbWlCb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkV1Y2xpZCBDaXJjdWxhciBBXCI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHNyYzogdXJsKFwiLi9hc3NldHMvZm9udHMvRXVjbGlkLUNpcmN1bGFyLUEtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTcGFjZSBBZ2VcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoXCIuL2Fzc2V0cy9mb250cy9TcGFjZS1BZ2Uud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU3BhY2UgQWdlIEN5cmlsbGljXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKFwiLi9hc3NldHMvZm9udHMvU3BhY2UtQWdlLUN5cmlsbGljLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkV1cm9wZUV4dGVuZGVkQ1wiO1xuICBmb250LXdlaWdodDogNzAwO1xuICBzcmM6IHVybChcIi4vYXNzZXRzL2ZvbnRzL0V1cm9wZS1FeHRlbmRlZC1DLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xufVxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBcIkV1Y2xpZCBDaXJjdWxhciBBXCI7XG4gIGZvbnQtc2l6ZTogMC41MjA4MzM1dnc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGJ1Z2ZpeCBpbmZpbml0ZSAxcztcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBidWdmaXggaW5maW5pdGUgMXM7XG4gIGhlaWdodDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDE2NTM7XG59XG5cbmlucHV0LFxudGV4dGFyZWEge1xuICAtd2Via2l0LWFuaW1hdGlvbjogYnVnZml4IGluZmluaXRlIDFzO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuYSB7XG4gIGNvbG9yOiB1bnNldDtcbn1cblxuYSxcbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmJ1dHRvbixcbmlucHV0LFxuYSxcbnRleHRhcmVhIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250OiBpbmhlcml0O1xufVxuYnV0dG9uOmZvY3VzLFxuaW5wdXQ6Zm9jdXMsXG5hOmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuYnV0dG9uOmFjdGl2ZSxcbmlucHV0OmFjdGl2ZSxcbmE6YWN0aXZlLFxudGV4dGFyZWE6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udDogaW5oZXJpdDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5wIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG51bCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxudWwgbGkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTYwcmVtO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG5zdmcsXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuaHRtbC5sb2NrLFxuaHRtbC5sb2NrIGJvZHkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLndyYXBwZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LXdpZHRoOiAxOTIwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAyLjNyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwO1xufVxuLmhlYWRlcl9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaGVhZGVyX19idXJnZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhlYWRlcl9fbG9nbyB7XG4gIG1heC13aWR0aDogMTcuOHJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNS43cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5oZWFkZXJfX2xvZ28gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmhlYWRlcl9fbWVudS1jb250YWN0cyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaGVhZGVyX19uYXYtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNi4zcmVtO1xufVxuLmhlYWRlcl9fbmF2LWl0ZW0taWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaGVhZGVyX19uYXYtaXRlbS1kcm9wZG93biB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaGVhZGVyX19uYXYtaXRlbS1saW5rIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICB0cmFuc2l0aW9uOiAwLjNzIGNvbG9yIGVhc2U7XG59XG4uaGVhZGVyX19uYXYtaXRlbS1saW5rOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OSk7XG59XG4uaGVhZGVyX19jb250YWN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS43cmVtO1xufVxuLmhlYWRlcl9fY29udGFjdHM6aG92ZXIgLmhlYWRlcl9fY29udGFjdHMtdGl0bGUge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY5KTtcbn1cbi5oZWFkZXJfX2NvbnRhY3RzOmhvdmVyIHN2ZyBwYXRoIHtcbiAgc3Ryb2tlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjkpO1xufVxuLmhlYWRlcl9fY29udGFjdHMtdGl0bGUge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogM3JlbTtcbiAgdHJhbnNpdGlvbjogMC4zcyBjb2xvciBlYXNlO1xufVxuLmhlYWRlcl9fY29udGFjdHMgc3ZnIHtcbiAgbWF4LXdpZHRoOiAyLjRyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIuNHJlbTtcbn1cbi5oZWFkZXJfX2NvbnRhY3RzIHN2ZyBwYXRoIHtcbiAgdHJhbnNpdGlvbjogMC4zcyBzdHJva2UgZWFzZTtcbn1cbi5oZWFkZXIgLmhhbWJ1cmdlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDQuNnJlbTtcbiAgaGVpZ2h0OiAzLjZyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5oZWFkZXIgLmhhbWJ1cmdlciBzcGFuLCAuaGVhZGVyIC5oYW1idXJnZXI6OmJlZm9yZSwgLmhlYWRlciAuaGFtYnVyZ2VyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdHJhbnNpdGlvbjogdG9wIDAuM3MgZWFzZSwgd2lkdGggMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3R0b20gMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xufVxuLmhlYWRlciAuaGFtYnVyZ2VyOjpiZWZvcmUge1xuICB0b3A6IDA7XG59XG4uaGVhZGVyIC5oYW1idXJnZXI6OmFmdGVyIHtcbiAgYm90dG9tOiAwO1xufVxuLmhlYWRlciAuaGFtYnVyZ2VyIHNwYW4ge1xuICB0b3A6IGNhbGMoNTAlIC0gMXB4KTtcbn1cbi5fbWVudS1vcGVuZWQgLmhlYWRlciAuaGFtYnVyZ2VyIHNwYW4ge1xuICB3aWR0aDogMDtcbn1cbi5fbWVudS1vcGVuZWQgLmhlYWRlciAuaGFtYnVyZ2VyOjpiZWZvcmUge1xuICB0b3A6IGNhbGMoNTAlIC0gMXB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5fbWVudS1vcGVuZWQgLmhlYWRlciAuaGFtYnVyZ2VyOjphZnRlciB7XG4gIGJvdHRvbTogY2FsYyg1MCUgLSAxcHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uX21lbnUtb3BlbmVkIC5oZWFkZXIgLmhhbWJ1cmdlciBzcGFuLCAuX21lbnUtb3BlbmVkIC5oZWFkZXIgLmhhbWJ1cmdlcjo6YmVmb3JlLCAuX21lbnUtb3BlbmVkIC5oZWFkZXIgLmhhbWJ1cmdlcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZm9vdGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDcuOHJlbTtcbn1cbi5mb290ZXJfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZvb3Rlcl9fbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC44cmVtO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xufVxuLmZvb3Rlcl9fbGlzdDpsYXN0LWNoaWxkIC5mb290ZXJfX2l0ZW06bGFzdC1jaGlsZCBhIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5mb290ZXJfX2l0ZW0gYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogM3JlbTtcbiAgdHJhbnNpdGlvbjogMC4zcyBjb2xvciBlYXNlO1xufVxuLmZvb3Rlcl9faXRlbSBhOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OSk7XG59XG4uZm9vdGVyX19taWRkbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvb3Rlcl9fbG9nbyB7XG4gIG1heC13aWR0aDogMTAuOXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTNyZW07XG4gIG1hcmdpbi1ib3R0b206IDYuMXJlbTtcbn1cbi5mb290ZXJfX2NvbnRhY3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyLjJyZW07XG59XG4uZm9vdGVyX19jb250YWN0IGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgdHJhbnNpdGlvbjogMC4zcyBjb2xvciBlYXNlO1xufVxuLmZvb3Rlcl9fY29udGFjdCBhOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OSk7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNwYWNlIEFnZVwiO1xuICBmb250LXNpemU6IDlyZW07XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNwYWNlIEFnZVwiO1xuICBmb250LXNpemU6IDNyZW07XG59XG5cbi50eHQzMCB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLnR4dDE2IHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi5jeXIge1xuICBmb250LWZhbWlseTogXCJTcGFjZSBBZ2UgQ3lyaWxsaWNcIjtcbn1cblxuLmJ0biB7XG4gIHBhZGRpbmc6IDAuNnJlbSAwLjZyZW0gMC42cmVtIDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDJyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OCk7XG4gIGJvcmRlci1yYWRpdXM6IDAgNHJlbSA0cmVtIDRyZW07XG59XG4uYnRuX190ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5idG5fX2Fycm93LXdyYXAge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDAgMCA0cmVtO1xuICB3aWR0aDogNC40cmVtO1xuICBoZWlnaHQ6IDQuNHJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLmJ0bl9fYXJyb3ctaWNvbiB7XG4gIHdpZHRoOiAyLjRyZW07XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbmlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dFt0eXBlPWVtYWlsXSxcbmlucHV0W3R5cGU9dGVsXSxcbnRleHRhcmVhIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbnRleHRhcmVhOmZvY3VzLFxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDQuNnJlbSAyLjdyZW0gMnJlbSAyLjdyZW07XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcbn1cbi5pbnB1dF90ZXh0YXJlYSB7XG4gIGhlaWdodDogMjUuNXJlbTtcbn1cbi5pbnB1dF90ZXh0YXJlYSB0ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgcmVzaXplOiBub25lO1xufVxuLmlucHV0X19maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5pbnB1dF9fZmllbGQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uaW5wdXRfX2xhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEuOHJlbTtcbiAgbGVmdDogMi43cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvcGFjaXR5OiAwLjU7XG59XG4uc2VsZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlbGVjdF9fYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWxlY3RfX3RpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAzO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2VsZWN0X192YWx1ZSB7XG4gIHBhZGRpbmc6IDEuM3JlbSAxLjNyZW0gMS4zcmVtIDIuN3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJyZW07XG4gIGhlaWdodDogNy4ycmVtO1xuICB3aWR0aDogMTAwJTtcbn1cbi5zZWxlY3RfX3ZhbHVlID4gKiB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLnNlbGVjdF9fdmFsdWU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAwIDAgNXJlbTtcbiAgd2lkdGg6IDVyZW07XG4gIGhlaWdodDogNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9pY29ucy9hcnItd2hpdGUuc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyLjRyZW07XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cbi5zZWxlY3RfX3ZhbHVlLl9zZWxlY3QtbGFiZWw6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1zZWwtbGFiZWwpO1xufVxuLl9zZWxlY3QtZmlsbGVkIC5zZWxlY3RfX3ZhbHVlLl9zZWxlY3QtbGFiZWw6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc2VsZWN0X192YWx1ZS5fc2VsZWN0LWxhYmVsOjpiZWZvcmUsXG4uc2VsZWN0X192YWx1ZSAuc2VsZWN0X19jb250ZW50IHtcbiAgbWF4LXdpZHRoOiAzMS40cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5zZWxlY3RfX2NvbnRlbnQ6bm90KC5fc2VsZWN0LWZpbGxlZCAuc2VsZWN0X19jb250ZW50KSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc2VsZWN0X190ZXh0IHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4uc2VsZWN0X19pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnNlbGVjdF9fb3B0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgdG9wOiBjYWxjKDEwMCUgLSAzcmVtKTtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogNC42cmVtIDIuN3JlbSAyLjRyZW0gMi43cmVtO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAzcmVtIDNyZW07XG4gIGJhY2tncm91bmQ6ICMzNjM5NmM7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcbn1cbi5zZWxlY3RfX3Njcm9sbCB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgbWF4LWhlaWdodDogMTlyZW07XG59XG4uc2VsZWN0X19zY3JvbGwuc2ltcGxlYmFyLXNjcm9sbGFibGUteSAuc2ltcGxlYmFyLXRyYWNrLnNpbXBsZWJhci12ZXJ0aWNhbCB7XG4gIHJpZ2h0OiAxLjJyZW07XG4gIHdpZHRoOiAwLjRyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTdlZTtcbn1cbi5zZWxlY3RfX3Njcm9sbC5zaW1wbGViYXItc2Nyb2xsYWJsZS15IC5zaW1wbGViYXItc2Nyb2xsYmFyIHtcbiAgbWluLWhlaWdodDogMy4ycmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMmFkYzE7XG59XG4uc2VsZWN0X19vcHRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xufVxuLnNlbGVjdF9fb3B0aW9uOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59XG4uc2VsZWN0X19vcHRpb24uX3NlbGVjdC1zZWxlY3RlZCB7XG4gIGNvbG9yOiAjMjlmZjdmO1xufVxuLnNlbGVjdF9fZ3JvdXAge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbn1cbi5zZWxlY3RfX2hpbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYygxMDAlICsgMC44cmVtKTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGxpbmUtaGVpZ2h0OiAxNDIuODU3JTtcbn1cbi5zZWxlY3RfX3N1YnRpdGxlIHtcbiAgY3Vyc29yOiB0ZXh0O1xufVxuLnNlbGVjdC5fc2VsZWN0LW9wZW5lZCB7XG4gIHotaW5kZXg6IDU7XG59XG4uc2VsZWN0Ll9zZWxlY3Qtb3BlbmVkIC5zZWxlY3RfX3ZhbHVlOjphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xufVxuLl9zZWxlY3QtbGlzdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJhZGdlIHtcbiAgcGFkZGluZzogMXJlbSAzcmVtIDFyZW0gMXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDIuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XG59XG4uYmFkZ2UuX2FjdGl2ZSB7XG4gIGNvbG9yOiAjMTQwYTNmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLmJhZGdlLl9hY3RpdmUgLmJhZGdlX19pY29uLXdyYXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgyNjc4O1xufVxuLmJhZGdlLl9hY3RpdmUgLmJhZGdlX19pY29uLXdyYXA6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc3Rhci1hY3RpdmUuc3ZnKTtcbn1cbi5iYWRnZV9faWNvbi13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAwIDAgNC41cmVtO1xuICB3aWR0aDogNC41cmVtO1xuICBoZWlnaHQ6IDQuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcbn1cbi5iYWRnZV9faWNvbi13cmFwOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA4cmVtO1xuICBoZWlnaHQ6IDhyZW07XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc3Rhci5zdmcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4udHh0LWdyZWVuIHtcbiAgY29sb3I6ICMyOWZmN2Y7XG59XG5cbi5fbW9iaWxlLW9ubHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaW50cm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IC04cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxMC41cmVtO1xuICBwYWRkaW5nLXRvcDogNDByZW07XG59XG4uaW50cm8gLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbnRybzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMxMDE2NTMgMCUsIHJnYmEoMjMsIDE1LCA2NywgMCkgNjMuNDUlKTtcbiAgei1pbmRleDogLTE7XG4gIGluc2V0OiAwO1xuICBib3R0b206IC0wLjVyZW07XG59XG4uaW50cm9fX2NvbnRlbnQge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMTEuN3JlbTtcbn1cbi5pbnRyb19fdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGluZS1oZWlnaHQ6IDExMCU7XG4gIG1hcmdpbi1ib3R0b206IDUuM3JlbTtcbn1cbi5wcm9tby1wYWdlIC5pbnRyb19fdGl0bGUge1xuICBtYXgtd2lkdGg6IDExOHJlbTtcbn1cbi5pbnRyb19fcG9zdGVyLWltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgei1pbmRleDogLTE7XG59XG4uaW50cm9fX3Bvc3Rlci1pbWFnZV9oYXMtYmFja2Ryb3A6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5pbnRyb19fcG9zdGVyLWltYWdlIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uaW50cm9fX3JlcXVlc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDMuN3JlbTtcbn1cbi5pbnRyb19fcmVxdWVzdC1wcm9qZWN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS44cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW50cm9fX3JlcXVlc3QtcHJvamVjdHM6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMnJlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMC4ycmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG4uaW50cm9fX3JlcXVlc3QtcHJvamVjdHMtY291bnRlciB7XG4gIGZsZXg6IDAgMCA1LjhyZW07XG4gIHdpZHRoOiA1LjhyZW07XG4gIGhlaWdodDogNS44cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMyOWZmN2Y7XG59XG4uaW50cm9fX3JlcXVlc3QtcHJvamVjdHMtY291bnRlciBzcGFuIHtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIGZvbnQtZmFtaWx5OiBcIlNwYWNlIEFnZSBDeXJpbGxpY1wiO1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMS42cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW50cm9fX3JlcXVlc3QtcHJvamVjdHMtdGl0bGUge1xuICBtYXgtd2lkdGg6IDIzcmVtO1xufVxuLmludHJvX19hcnRpY2xlcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCg1MXJlbSwgMWZyKSk7XG4gIGdhcDogMy43cmVtO1xuICBtYXJnaW4tdG9wOiA1LjlyZW07XG59XG4uaW50cm9fX2FydGljbGUge1xuICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmludHJvX19hcnRpY2xlIGE6aG92ZXIge1xuICBjb2xvcjogIzI5ZmY3Zjtcbn1cbi5pbnRyb19fYXJ0aWNsZS1saW5rIHtcbiAgcGFkZGluZzogMS4xcmVtIDZyZW0gMS4xcmVtIDQuMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDJyZW07XG59XG4uaW50cm9fX2FydGljbGUtbGluay10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIG1heC13aWR0aDogMThyZW07XG4gIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcbn1cbi5pbnRyb19fYXJ0aWNsZS1saW5rLWltYWdlIHtcbiAgbWF4LXdpZHRoOiAyMC4ycmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMC4ycmVtO1xuICBmbGV4OiAwIDAgMjAuMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmludHJvX19hcnRpY2xlLWxpbmstaW1hZ2UgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5pbnRyb19fYXJ0aWNsZS1saW5rLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXJlbTtcbiAgcmlnaHQ6IDEuM3JlbTtcbiAgcGFkZGluZzogMC42cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xuICBtYXgtd2lkdGg6IDQuNnJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNC42cmVtO1xufVxuLmludHJvX19hcnRpY2xlLWxpbmstaWNvbl9oYXMtbnVtYmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XG59XG4uaW50cm9fX2FydGljbGUtbGluay1pY29uIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnByb21vdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDMxcmVtO1xufVxuLnByb21vdGlvbl9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDAgMS41cmVtIDAgMi45cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvbW90aW9uX19jb250ZW50OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCIzXCI7XG4gIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuNXJlbTtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogcmdiYSg0MSwgMjU1LCAxMjcsIDAuMSk7XG4gIGZvbnQtZmFtaWx5OiBcIlNwYWNlIEFnZSBDeXJpbGxpY1wiO1xuICBmb250LXNpemU6IDcwcmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMTAxNjUzO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdG9wOiAtMzRyZW07XG4gIHotaW5kZXg6IC0xO1xufVxuLnByb21vdGlvbl9fYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnByb21vdGlvbl9fYmxvY2s6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuLnByb21vdGlvbl9fYmxvY2s6bnRoLWNoaWxkKGV2ZW4pIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAzNHJlbTtcbn1cbi5wcm9tb3Rpb25fX3N1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLm1hcmtldGluZyB7XG4gIG1hcmdpbi1ib3R0b206IDI5cmVtO1xufVxuLm1hcmtldGluZ19faW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xNS4ycmVtO1xuICB0b3A6IC0xMnJlbTtcbiAgbWF4LXdpZHRoOiA3NHJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFya2V0aW5nX19jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5tYXJrZXRpbmdfX3RpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogNC44cmVtO1xufVxuLm1hcmtldGluZ19faW5mbyB7XG4gIG1heC13aWR0aDogNTFyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMjFyZW07XG59XG4ubWFya2V0aW5nX19pbmZvLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDQuMXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xufVxuLm1hcmtldGluZ19faW5mby1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYXJrZXRpbmdfX2luZm8taXRlbSB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFya2V0aW5nX19pbmZvLWl0ZW06OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMC41cmVtO1xuICBoZWlnaHQ6IDAuNXJlbTtcbiAgdG9wOiAxLjVyZW07XG4gIGxlZnQ6IC0ycmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4ubWFya2V0aW5nX19pbmZvLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbWF4LXdpZHRoOiAyMS43cmVtO1xufVxuXG4uYmVuZWZpdHMge1xuICBtYXJnaW4tYm90dG9tOiAxNy43cmVtO1xufVxuLmJlbmVmaXRzX19jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDM3LjRyZW0sIDFmcikpO1xuICBnYXA6IDMuNnJlbTtcbn1cbi5iZW5lZml0c19fYXJ0aWNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgcGFkZGluZzogMy44cmVtIDIuMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5iZW5lZml0c19fYXJ0aWNsZS1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMS42cmVtO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYmVuZWZpdHNfX2FydGljbGUtaGVhZGluZy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDIyLjZyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJlbmVmaXRzX19hcnRpY2xlLWhlYWRpbmctY291bnRlciB7XG4gIGNvbG9yOiAjMTEwNzNiO1xuICBmb250LXNpemU6IDZyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cbi5iZW5lZml0c19fYXJ0aWNsZS1wb3N0ZXIge1xuICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGJhY2tncm91bmQ6ICMxMDE2NTM7XG4gIGhlaWdodDogMjEuOXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuLmJlbmVmaXRzX19hcnRpY2xlLXBvc3Rlci1pbWFnZSB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIG1heC13aWR0aDogMjhyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcmVtO1xufVxuLmJlbmVmaXRzX19hcnRpY2xlLXBvc3Rlci1pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmJlbmVmaXRzX19hcnRpY2xlLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZy1yaWdodDogM3JlbTtcbn1cblxuLnBvcnRmb2xpbyB7XG4gIG1hcmdpbi1ib3R0b206IDE4LjVyZW07XG59XG4ucG9ydGZvbGlvX19oZWFkaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogNi4zcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMnJlbTtcbn1cbi5wb3J0Zm9saW9fX2xpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoNzguNHJlbSwgMWZyKSk7XG4gIGdhcDogMy42cmVtIDMuM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogNi42cmVtO1xufVxuLnBvcnRmb2xpb19faXRlbSBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzLjNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgcGFkZGluZzogMi4ycmVtO1xufVxuLnBvcnRmb2xpb19faXRlbSBhOmhvdmVyIC5wb3J0Zm9saW9fX2l0ZW0tdGV4dCB7XG4gIGNvbG9yOiAjMjlmZjdmO1xufVxuLnBvcnRmb2xpb19faXRlbSBhOmhvdmVyIC5wb3J0Zm9saW9fX2l0ZW0taW1hZ2UgaW1nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLnBvcnRmb2xpb19faXRlbS1pbWFnZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzYuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnBvcnRmb2xpb19faXRlbS1pbWFnZSBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtIGVhc2U7XG59XG4ucG9ydGZvbGlvX19pdGVtLWJvdHRvbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnBvcnRmb2xpb19faXRlbS10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogM3JlbTtcbiAgdHJhbnNpdGlvbjogMC4zcyBjb2xvciBlYXNlO1xufVxuLnBvcnRmb2xpb19faXRlbS10ZXh0IHNwYW4ge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogM3JlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ucG9ydGZvbGlvX19pdGVtLWljb24ge1xuICBwYWRkaW5nOiAwLjZyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XG4gIG1heC13aWR0aDogNC42cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0LjZyZW07XG59XG4ucG9ydGZvbGlvX19pdGVtLWljb24gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnBvcnRmb2xpb19fbGluayB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuYm9keTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xuICBvcGFjaXR5OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjhzIGVhc2UgMHM7XG59XG4uX21lbnUtb3BlbmVkIGJvZHk6OmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0OC4wMWVtKSB7XG4gIC5tb2JpbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XG4gIC5mb290ZXJfX2xpc3Q6bGFzdC1jaGlsZCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICB9XG4gIC50eHQyNSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xuICBodG1sIHtcbiAgICBmb250LXNpemU6IDVweDtcbiAgICBmb250LXNpemU6IDEuNTYyNXZ3O1xuICAgIGZvbnQtc2l6ZTogMS4zMzMzMzMzMzMzdnc7XG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xuICB9XG4gIGJvZHkge1xuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcbiAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDMuMnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMy42cmVtO1xuICB9XG4gIC5oZWFkZXJfX2NvbnRlbnQge1xuICAgIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcbiAgICBnYXA6IDE2cmVtO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZ2FwIGVhc2U7XG4gIH1cbiAgLl9tZW51LW9wZW5lZCAuaGVhZGVyX19jb250ZW50IHtcbiAgICBnYXA6IDExLjZyZW07XG4gIH1cbiAgLl9tZW51LW9wZW5lZCAuaGVhZGVyX19jb250ZW50OjphZnRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAuaGVhZGVyX19idXJnZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5oZWFkZXJfX2xvZ28ge1xuICAgIG1heC13aWR0aDogMjdyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4LjZyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbiAgLmhlYWRlcl9fbWVudSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNy40cmVtKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgICBiYWNrZ3JvdW5kOiAjMTAxNjUzO1xuICAgIHBhZGRpbmc6IDIxLjRyZW0gNS4ycmVtIDguOHJlbSA3LjhyZW07XG4gIH1cbiAgLl9tZW51LW9wZW5lZCAuaGVhZGVyX19tZW51IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAuaGVhZGVyX19tZW51LWNvbnRhY3RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogNHJlbTtcbiAgfVxuICAuaGVhZGVyX19tZW51LWNvbnRhY3RzLWl0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDIuNHJlbTtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY3KTtcbiAgICBmb250LXNpemU6IDMuMnJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgfVxuICAuaGVhZGVyX19tZW51LWNvbnRhY3RzLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBib3JkZXI6IDAuNHJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDByZW0gMjRyZW0gMjRyZW0gMjRyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMnJlbTtcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSA0cmVtO1xuICAgIHRyYW5zaXRpb246IDAuM3MgYm9yZGVyIGVhc2U7XG4gIH1cbiAgLmhlYWRlcl9fbWVudS1jb250YWN0cy1idXR0b246YWN0aXZlIHtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgfVxuICAuaGVhZGVyX19tZW51LWNvbnRhY3RzLWJ1dHRvbjphY3RpdmUgc3BhbiB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OSk7XG4gIH1cbiAgLmhlYWRlcl9fbWVudS1jb250YWN0cy1idXR0b246YWN0aXZlIC5oZWFkZXJfX21lbnUtY29udGFjdHMtYnV0dG9uLWljb24ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OSk7XG4gIH1cbiAgLmhlYWRlcl9fbWVudS1jb250YWN0cy1idXR0b24gc3BhbiB7XG4gICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGNvbG9yIGVhc2U7XG4gIH1cbiAgLmhlYWRlcl9fbWVudS1jb250YWN0cy1idXR0b24taWNvbiB7XG4gICAgcGFkZGluZzogMS40cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIG1heC13aWR0aDogNi44cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNi44cmVtO1xuICB9XG4gIC5oZWFkZXJfX21lbnUtY29udGFjdHMtYnV0dG9uLWljb24gaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmhlYWRlcl9fbmF2IHtcbiAgICBtYXgtaGVpZ2h0OiAxMDFyZW07XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmhlYWRlcl9fbmF2LWxpc3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiA3LjJyZW07XG4gIH1cbiAgLmhlYWRlcl9fbmF2LWl0ZW0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtLi0tYWN0aXZlIGEge1xuICAgIGNvbG9yOiAjMjlmZjdmO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtLWhlYWRpbmcge1xuICAgIHdpZHRoOiA5OCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmhlYWRlcl9fbmF2LWl0ZW0taGVhZGluZy4tLWFjdGl2ZSAuaGVhZGVyX19uYXYtaXRlbS1pY29uIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS1oZWFkaW5nLi0tYWN0aXZlIH4gLmhlYWRlcl9fbmF2LWl0ZW0tZHJvcGRvd24ge1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtLWhlYWRpbmcuLS1hY3RpdmUgfiAuaGVhZGVyX19uYXYtaXRlbS1kcm9wZG93biAuaGVhZGVyX19uYXYtaXRlbS1kcm9wZG93bi13cmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtLWhlYWRpbmcgYSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgLmhlYWRlcl9fbmF2LWl0ZW0taWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm0gZWFzZTtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS1kcm9wZG93biB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDBmcjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGdyaWQtdGVtcGxhdGUtcm93cyBlYXNlO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtLWRyb3Bkb3duLXdyYXBwZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogMC4zcyBtYXJnaW4gZWFzZTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHBhZGRpbmctbGVmdDogNC44cmVtO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtLWRyb3Bkb3duLWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtLWRyb3Bkb3duLWl0ZW06bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIG1hcmdpbi10b3A6IDVyZW07XG4gIH1cbiAgLmhlYWRlcl9fbmF2LWl0ZW0tbGluayB7XG4gICAgZm9udC1zaXplOiAzLjJyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIH1cbiAgLmhlYWRlcl9fY29udGFjdHMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIC5oZWFkZXJfX2NvbnRhY3RzLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5oZWFkZXJfX2NvbnRhY3RzIHN2ZyB7XG4gICAgbWF4LXdpZHRoOiA0LjhyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0LjhyZW07XG4gIH1cbiAgLmZvb3RlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDExcmVtO1xuICB9XG4gIC5mb290ZXJfX2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBnYXA6IDA7XG4gIH1cbiAgLmZvb3Rlcl9fbGlzdCB7XG4gICAgZ2FwOiAzcmVtO1xuICB9XG4gIC5mb290ZXJfX2xpc3Q6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xuICB9XG4gIC5mb290ZXJfX2l0ZW0gYSB7XG4gICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIH1cbiAgLmZvb3Rlcl9fbWlkZGxlIHtcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xuICAgIG9yZGVyOiAtMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgLmZvb3Rlcl9fbG9nbyB7XG4gICAgbWF4LXdpZHRoOiAyN3JlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDguNnJlbTtcbiAgfVxuICAuZm9vdGVyX19jb250YWN0cyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgfVxuICAuc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgfVxuICAudHh0MzAge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgfVxuICAudHh0MTYge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuICAuYnRuIHtcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSA0cmVtO1xuICAgIGNvbHVtbi1nYXA6IDMuMnJlbTtcbiAgICBib3JkZXI6IDAuNHJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgOHJlbSA4cmVtIDhyZW07XG4gIH1cbiAgLmJ0bl9fYXJyb3ctd3JhcCB7XG4gICAgZmxleDogMCAwIDdyZW07XG4gICAgd2lkdGg6IDdyZW07XG4gICAgaGVpZ2h0OiA3cmVtO1xuICB9XG4gIC5idG5fX2Fycm93LWljb24ge1xuICAgIHdpZHRoOiAzLjhyZW07XG4gIH1cbiAgLmlucHV0IHtcbiAgICBwYWRkaW5nOiA3cmVtIDhyZW0gMi40cmVtIDIuNHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cmVtO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcbiAgfVxuICAuaW5wdXRfdGV4dGFyZWEge1xuICAgIGhlaWdodDogMzQuOHJlbTtcbiAgfVxuICAuaW5wdXRfX2xhYmVsIHtcbiAgICB0b3A6IDIuNHJlbTtcbiAgICBsZWZ0OiAyLjRyZW07XG4gIH1cbiAgLnNlbGVjdF9fdGl0bGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDRyZW07XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRyZW0pO1xuICB9XG4gIC5zZWxlY3RfX3ZhbHVlIHtcbiAgICBwYWRkaW5nOiAxLjZyZW07XG4gICAgZ2FwOiA0cmVtO1xuICAgIGhlaWdodDogMTByZW07XG4gIH1cbiAgLnNlbGVjdF9fdmFsdWU6OmFmdGVyIHtcbiAgICBmbGV4OiAwIDAgNnJlbTtcbiAgICB3aWR0aDogNnJlbTtcbiAgICBoZWlnaHQ6IDZyZW07XG4gICAgYmFja2dyb3VuZC1zaXplOiAzLjJyZW07XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIuNHJlbSk7XG4gIH1cbiAgLnNlbGVjdF9fb3B0aW9ucyB7XG4gICAgdG9wOiBjYWxjKDEwMCUgLSA0cmVtKTtcbiAgICBwYWRkaW5nOiA4cmVtIDRyZW0gNHJlbSA0cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA0cmVtIDRyZW07XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRyZW0pO1xuICB9XG4gIC5zZWxlY3RfX29wdGlvbjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICB9XG4gIC5iYWRnZSB7XG4gICAgcGFkZGluZzogMnJlbSA4cmVtIDJyZW0gMnJlbTtcbiAgICBjb2x1bW4tZ2FwOiAzcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDZyZW07XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRyZW0pO1xuICB9XG4gIC5iYWRnZV9faWNvbi13cmFwIHtcbiAgICBmbGV4OiAwIDAgNnJlbTtcbiAgICB3aWR0aDogNnJlbTtcbiAgICBoZWlnaHQ6IDZyZW07XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRyZW0pO1xuICB9XG4gIC5iYWRnZV9faWNvbi13cmFwOjpiZWZvcmUge1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgICBoZWlnaHQ6IDEwcmVtO1xuICB9XG4gIC50eHQtZ3JlZW5fZG8ge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG4gIC5fZGVza3RvcC1vbmx5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5fbW9iaWxlLW9ubHkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5pbnRybyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTUuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogNjhyZW07XG4gIH1cbiAgLmludHJvIHtcbiAgICBtYXJnaW4tdG9wOiAtMTZyZW07XG4gIH1cbiAgLmludHJvOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMxMDE2NTMgMTMlLCByZ2JhKDIzLCAxNSwgNjcsIDApIDc1LjQ1JSk7XG4gIH1cbiAgLmludHJvX190aXRsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDg1JTtcbiAgICBtYXJnaW4tYm90dG9tOiA3LjNyZW07XG4gIH1cbiAgLnByb21vLXBhZ2UgLmludHJvX190aXRsZSB7XG4gICAgbWF4LXdpZHRoOiA2MnJlbTtcbiAgICBmb250LWZhbWlseTogXCJTcGFjZSBBZ2UgQ3lyaWxsaWNcIjtcbiAgfVxuICAuaW50cm9fX3RpdGxlIHNwYW46bm90KC5pbnRyb19fdGl0bGUgc3Bhbi50eHQtZ3JlZW4pIHtcbiAgICBjb2xvcjogIzI5ZmY3ZjtcbiAgfVxuICAuaG9tZS1wYWdlIC5pbnRyb19fcG9zdGVyLWltYWdlIGltZyB7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiAtMTQwcmVtO1xuICB9XG4gIC5pbnRyb19fcmVxdWVzdCB7XG4gICAgZ2FwOiA1cmVtO1xuICB9XG4gIC5pbnRyb19fcmVxdWVzdC1wcm9qZWN0czo6YWZ0ZXIge1xuICAgIGxlZnQ6IC0zcmVtO1xuICAgIHdpZHRoOiAwLjRyZW07XG4gIH1cbiAgLmludHJvX19yZXF1ZXN0LXByb2plY3RzIHtcbiAgICBnYXA6IDIuNHJlbTtcbiAgfVxuICAuaW50cm9fX3JlcXVlc3QtcHJvamVjdHMtY291bnRlciB7XG4gICAgZmxleDogMCAwIDguOHJlbTtcbiAgICB3aWR0aDogOC44cmVtO1xuICAgIGhlaWdodDogOC44cmVtO1xuICB9XG4gIC5pbnRyb19fcmVxdWVzdC1wcm9qZWN0cy1jb3VudGVyIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMi40OHJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMC43NzM1cmVtO1xuICAgIG1hcmdpbi10b3A6IDMuNXJlbTtcbiAgfVxuICAuaW50cm9fX3JlcXVlc3QtcHJvamVjdHMtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIH1cbiAgLmludHJvX19hcnRpY2xlcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDE1LjJyZW0sIDFmcikpO1xuICAgIGdhcDogMi44cmVtO1xuICAgIG1hcmdpbi10b3A6IDE3cmVtO1xuICB9XG4gIC5pbnRyb19fYXJ0aWNsZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgfVxuICAuaW50cm9fX2FydGljbGUtbGluayB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIuNnJlbTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMTEuNXJlbSAycmVtIDNyZW07XG4gIH1cbiAgLmludHJvX19hcnRpY2xlLWxpbmstdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuICAuaW50cm9fX2FydGljbGUtbGluay1pbWFnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1heC13aWR0aDogMTYuMnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE2LjJyZW07XG4gICAgZmxleDogMCAwIDE2LjJyZW07XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICAuaW50cm9fX2FydGljbGUtbGluay1pY29uIHtcbiAgICBtYXgtd2lkdGg6IDZyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2cmVtO1xuICB9XG4gIC5pbnRyb19fYXJ0aWNsZS1saW5rLWljb24ge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgcGFkZGluZzogMC44cmVtO1xuICB9XG4gIC5wcm9tb3Rpb25fX2NvbnRlbnQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG4gIC5wcm9tb3Rpb25fX3RpdGxlIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xuICB9XG4gIC5wcm9tb3Rpb25fX2Jsb2NrIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG4gIC5wcm9tb3Rpb25fX2Jsb2NrOmxhc3QtY2hpbGQgLnByb21vdGlvbl9fdGl0bGUge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wcm9tb3Rpb25fX2Jsb2NrOm50aC1jaGlsZChldmVuKSB7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIH1cbiAgLnByb21vdGlvbl9fYmxvY2s6bnRoLWNoaWxkKGV2ZW4pIHNwYW4ge1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuICAucHJvbW90aW9uX19ibG9jazpudGgtY2hpbGQob2RkKSB7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICB9XG4gIC5wcm9tb3Rpb25fX2Jsb2NrOm50aC1jaGlsZChvZGQpIC5wcm9tb3Rpb25fX3RpdGxlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XG4gIH1cbiAgLnByb21vdGlvbl9fc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIH1cbiAgLm1hcmtldGluZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVyZW07XG4gIH1cbiAgLm1hcmtldGluZ19faW1hZ2Uge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgbWF4LXdpZHRoOiA2OHJlbTtcbiAgfVxuICAubWFya2V0aW5nX19jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5tYXJrZXRpbmdfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0LjRyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5tYXJrZXRpbmdfX2luZm8ge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAubWFya2V0aW5nX19pbmZvLXJvdyB7XG4gICAgZ2FwOiAzcmVtO1xuICB9XG4gIC5tYXJrZXRpbmdfX2luZm8tbGlzdCB7XG4gICAgZ2FwOiAycmVtO1xuICB9XG4gIC5tYXJrZXRpbmdfX2luZm8taXRlbSB7XG4gICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIH1cbiAgLm1hcmtldGluZ19faW5mby1pdGVtOjphZnRlciB7XG4gICAgdG9wOiAwLjVyZW07XG4gICAgd2lkdGg6IDFyZW07XG4gICAgaGVpZ2h0OiAxcmVtO1xuICB9XG4gIC5tYXJrZXRpbmdfX2luZm8tZGVzY3JpcHRpb24ge1xuICAgIG1heC13aWR0aDogMzMuMnJlbTtcbiAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB9XG4gIC5iZW5lZml0cyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjZyZW07XG4gIH1cbiAgLmJlbmVmaXRzX19jb250ZW50IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMzIuOHJlbSwgMWZyKSk7XG4gICAgZ2FwOiAyLjZyZW0gMi4ycmVtO1xuICB9XG4gIC5iZW5lZml0c19fYXJ0aWNsZSB7XG4gICAgcGFkZGluZzogMy40cmVtIDJyZW0gMnJlbTtcbiAgfVxuICAuYmVuZWZpdHNfX2FydGljbGUtaGVhZGluZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMy40cmVtO1xuICB9XG4gIC5iZW5lZml0c19fYXJ0aWNsZS1oZWFkaW5nLXRpdGxlIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmJlbmVmaXRzX19hcnRpY2xlLWhlYWRpbmctY291bnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYmVuZWZpdHNfX2FydGljbGUtcG9zdGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIGhlaWdodDogMjByZW07XG4gIH1cbiAgLmJlbmVmaXRzX19hcnRpY2xlLXBvc3Rlci1pbWFnZSB7XG4gICAgbWF4LXdpZHRoOiAyNnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI4cmVtO1xuICB9XG4gIC5iZW5lZml0c19fYXJ0aWNsZS1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuICAucG9ydGZvbGlvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyN3JlbTtcbiAgfVxuICAucG9ydGZvbGlvX19oZWFkaW5nIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogOHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiA4cmVtO1xuICB9XG4gIC5wb3J0Zm9saW9fX2xpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDMuMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiA3LjZyZW07XG4gIH1cbiAgLnBvcnRmb2xpb19faXRlbSBhIHtcbiAgICBnYXA6IDIuNnJlbTtcbiAgICBwYWRkaW5nOiAycmVtO1xuICB9XG4gIC5wb3J0Zm9saW9fX2l0ZW0taW1hZ2Uge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMycmVtO1xuICB9XG4gIC5wb3J0Zm9saW9fX2l0ZW0tdGV4dCB7XG4gICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICBnYXA6IDJyZW07XG4gIH1cbiAgLnBvcnRmb2xpb19faXRlbS10ZXh0IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICB9XG4gIC5wb3J0Zm9saW9fX2l0ZW0taWNvbiB7XG4gICAgbWF4LXdpZHRoOiA2cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNnJlbTtcbiAgfVxuICAucG9ydGZvbGlvX19pdGVtLWljb24ge1xuICAgIHBhZGRpbmc6IDAuNnJlbTtcbiAgICBtYXgtd2lkdGg6IDUuMnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUuMnJlbTtcbiAgfVxuICAuZGVza3RvcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XG4gIC5zZWxlY3RfX29wdGlvbjpob3Zlcjpub3QoLnNlbGVjdF9fb3B0aW9uOmhvdmVyLnNlbGVjdF9fc3VidGl0bGUpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICMyOWZmN2Y7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3NldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zZWN0aW9ucy9oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3NlY3Rpb25zL2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL190eXBvLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvX2J1dHRvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL19pbnB1dC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL19zZWxlY3Quc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3VpL3N0eWxlcy9fYmFkZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZGV2L3Z6bXNrMS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zZWN0aW9ucy9faW50cm8uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc2VjdGlvbnMvX3Byb21vdGlvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zZWN0aW9ucy9fbWFya2V0aW5nLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3NlY3Rpb25zL2JlbmVmaXRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3NlY3Rpb25zL19wb3J0Zm9saW8uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZGV2L3VraWswLnNjc3NcIixcIjxubyBzb3VyY2U+XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJB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cUJBQUE7RWY0cERWO0VldnBETTtJQVNRLFdBQUE7SUFDQSxhQUFBO0VmMnBEZDtFZTdvRE07SVovQ0osZVlzRDJCO0lackQzQixXQUFBO0lBQ0EsYVlvRGlDO0VmMnBEbkM7RWUzb0RNO0lBV1EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxTQUFBO0VmeXBEZDtFZXRwRFU7SUFRUSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VmMHBEbEI7RWVycERNO0laeEdKLGVBMENtQjtJQXpDbkIsV0FBQTtJQUNBLFlBd0N5QjtFSHN1RDNCO0VleHFETTtJQUlRLGVBQUE7SVo1R1osaUJZNkcyQjtJWjVHM0IsV0FBQTtJQUNBLGNZMkdtQztFZjJxRHJDO0VnQmp3REU7SUFDSSxhQUFBO0VoQnF5RE47QUE3TUY7QWlCN25EQTtFVDJLZ0I7SUFDSSxlQUFBO0lBQ0EsY1IzSlo7RUEyNkJOO0FBc3NCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdFdWNsaWQgQ2lyY3VsYXIgQSc7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9FdWNsaWQtQ2lyY3VsYXItQS1MaWdodC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRXVjbGlkIENpcmN1bGFyIEEnO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvRXVjbGlkLUNpcmN1bGFyLUEtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRXVjbGlkIENpcmN1bGFyIEEnO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvRXVjbGlkLUNpcmN1bGFyLUEtTWVkaXVtLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdFdWNsaWQgQ2lyY3VsYXIgQSc7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9FdWNsaWQtQ2lyY3VsYXItQS1TZW1pQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRXVjbGlkIENpcmN1bGFyIEEnO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvRXVjbGlkLUNpcmN1bGFyLUEtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU3BhY2UgQWdlJztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL1NwYWNlLUFnZS53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU3BhY2UgQWdlIEN5cmlsbGljJztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL1NwYWNlLUFnZS1DeXJpbGxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRXVyb3BlRXh0ZW5kZWRDJztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0V1cm9wZS1FeHRlbmRlZC1DLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xcbn1cXG5cIixcIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtaXhpbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuQGltcG9ydCAnLi9taXhpbnMnO1xcblxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHZhcmlhYmxlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuLy8gZm9udHNcXG4kc3BhY2VBZ2U6ICdTcGFjZSBBZ2UnO1xcbiRzcGFjZUFnZUN5cjogJ1NwYWNlIEFnZSBDeXJpbGxpYyc7XFxuJEV1cm9wZUU6ICdFdXJvcGVFeHRlbmRlZEMnO1xcbiRFQ0E6ICdFdWNsaWQgQ2lyY3VsYXIgQSc7XFxuXFxuLy8gY29sb3JzXFxuJHdoaXRlOiAjZmZmZmZmO1xcbiR3aGl0ZS1zZWNvbmRhcnk6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OSk7XFxuJGJsYWNrOiAjMDAwMDAwO1xcbiRkYXJrUHVycGxlOiAjMTEwNzNiO1xcbiRkYXJrUHVycGxlMjogIzE0MGEzZjtcXG4kZ3JlZW46ICMyOWZmN2Y7XFxuJGJsdWU6ICMxODI2Nzg7XFxuJGJnQ29sb3I6ICMxMDE2NTM7XFxuXFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmb250cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5cXG4vLyBsb2NhbCBmb250c1xcbkBpbXBvcnQgJy4vZm9udHMnO1xcblxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYmFzZSBzdHlsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuLy8gYmFzZSBzY3NzIGZpbGVcXG5AaW1wb3J0ICcuL3NldCc7XFxuXFxuLy8gaHRtbFxcbmh0bWwubG9jayxcXG5odG1sLmxvY2sgYm9keSB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4vLyBtYWluXFxubWFpbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxleDogMSAxIGF1dG87XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1heC13aWR0aDogMTkyMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuLy8gaGVhZGVyIC8gZm9vdGVyXFxuQGltcG9ydCAnLi9zZWN0aW9ucy9oZWFkZXInO1xcbkBpbXBvcnQgJy4vc2VjdGlvbnMvZm9vdGVyJztcXG5cXG4vLyB1aVxcbkBpbXBvcnQgJy4uL3VpL3N0eWxlcy91aS5zY3NzJztcXG5cXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcblxcbkBpbXBvcnQgJy4vZGV2L3Z6bXNrMS5zY3NzJztcXG5AaW1wb3J0ICcuL2Rldi9tYXJrdXNETS5zY3NzJztcXG5AaW1wb3J0ICcuL2Rldi91a2lrMC5zY3NzJztcXG5AaW1wb3J0ICcuL2Rldi9raWU2ZXIuc2Nzcyc7XFxuXCIsXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogJEVDQTsgLy8g0YjRgNC40YTRgiDQv9C+INGD0LzQvtC70YfQsNC90LjRjiDQv9C+INGB0LDQudGC0YNcXG4gICAgZm9udC1zaXplOiAwLjUyMDgzMzV2dzsgLy8g0L3QsCDRgNCw0LfRgNC10YjQtdC90LjQuCAxOTIwIDAuNTIwODM1dncgPT09IDEwcHhcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYnVnZml4IGluZmluaXRlIDFzO1xcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJ1Z2ZpeCBpbmZpbml0ZSAxcztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBjb2xvcjogJHdoaXRlOyAvLyDRhtCy0LXRgiDQv9C+INGD0LzQvtC70YfQsNC90LjRjiDRgtC10LrRgdGC0LAg0L/QviDRgdCw0LnRgtGDXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ0NvbG9yO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBidWdmaXggaW5maW5pdGUgMXM7XFxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5hIHtcXG4gICAgY29sb3I6IHVuc2V0O1xcbn1cXG5hLFxcbmE6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5hLFxcbnRleHRhcmVhIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICAmOmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIH1cXG4gICAgJjphY3RpdmUge1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxucCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbmltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxudWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbnVsIGxpIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDE2MHJlbTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmlucHV0W3R5cGU9J251bWJlciddOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbmlucHV0W3R5cGU9J251bWJlciddOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmlucHV0W3R5cGU9J251bWJlciddIHtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxufVxcblxcbnN2ZyxcXG5pbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSB7XFxuICAgIGh0bWwge1xcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgIGh0bWwge1xcbiAgICAgICAgZm9udC1zaXplOiA1cHg7XFxuICAgICAgICBmb250LXNpemU6IDEuNTYyNXZ3O1xcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKCgxMDAgLyAzNzUpICogNXZ3KTsgLy8g0LPQtNC1IDM3NSDRjdGC0L4g0YjQuNGA0LjQvdCwINC80L7QsSDQstC10YDRgdC40Lgg0LzQsNC60LXRgtCwXFxuICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgYm9keSB7XFxuICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxuICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDAgMy4ycmVtOyAvLyDQsiDQvNC+0LEg0LLQtdGA0YHQuNC4INC+0YLRgdGC0YPQvyDQvtGCINC60YDQsNGPINC30LDQtNCw0LXQvCDQtNC70Y8g0LLRgdC10YUg0LrQvtC90YLQtdC50L3QtdGA0L7Qsiwg0LAg0YLQsNC8INCz0LTQtSDQvdC1INC90YPQttC90L4g0LzQvtC20LXQvCDRgtC+0YfQtdGH0L3QviDRg9Cx0YDQsNGC0YxcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVxcblwiLFwiLmhlYWRlciB7XFxuICAgIHBhZGRpbmctdG9wOiAyLjNyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTAwO1xcblxcbiAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDMuNnJlbTtcXG4gICAgfVxcblxcbiAgICAmX19jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcXG4gICAgICAgICAgICBnYXA6IDE2cmVtO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgZ2FwIGVhc2U7XFxuXFxuICAgICAgICAgICAgLl9tZW51LW9wZW5lZCAmIHtcXG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBnYXA6IDExLjZyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2J1cmdlciB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19sb2dvIHtcXG4gICAgICAgIEBpbmNsdWRlIHNpemVzKDE3LjhyZW0sIDUuN3JlbSk7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgc2l6ZXMoMjdyZW0sIDguNnJlbSk7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19tZW51IHtcXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNy40cmVtKTtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOlxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMC4zcyBlYXNlLFxcbiAgICAgICAgICAgICAgICBvcGFjaXR5IDAuM3MgZWFzZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmdDb2xvcjtcXG4gICAgICAgICAgICBwYWRkaW5nOiAyMS40cmVtIDUuMnJlbSA4LjhyZW0gNy44cmVtO1xcblxcbiAgICAgICAgICAgIC5fbWVudS1vcGVuZWQgJiB7XFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLWNvbnRhY3RzIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHJlbTtcXG5cXG4gICAgICAgICAgICAgICAgJi1pdGVtIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIuNHJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjcpO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjJyZW07XFxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgJi1idXR0b24ge1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMC40cmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OCk7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcmVtIDI0cmVtIDI0cmVtIDI0cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBnYXA6IDJyZW07XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSA0cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBib3JkZXIgZWFzZTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZS1zZWNvbmRhcnk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtY29udGFjdHMtYnV0dG9uLWljb24ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGUtc2Vjb25kYXJ5O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBjb2xvciBlYXNlO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgJi1pY29uIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjRyZW07XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBzaXplcyg2LjhyZW0sIDYuOHJlbSk7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fbmF2IHtcXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAxcmVtO1xcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1saXN0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiA2LjNyZW07XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgICAgIGdhcDogNy4ycmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtaXRlbSB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgICAgICAgICAgICYuLS1hY3RpdmUge1xcbiAgICAgICAgICAgICAgICAgICAgYSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmVlbjtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLWhlYWRpbmcge1xcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk4JTtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgICAgICAgICAgICAgJi4tLWFjdGl2ZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRlcl9fbmF2LWl0ZW0taWNvbiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICB+IC5oZWFkZXJfX25hdi1pdGVtLWRyb3Bkb3duIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkZXJfX25hdi1pdGVtLWRyb3Bkb3duLXdyYXBwZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIGEge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICYtaWNvbiB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtIGVhc2U7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJi1kcm9wZG93biB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwZnI7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGdyaWQtdGVtcGxhdGUtcm93cyBlYXNlO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICYtd3JhcHBlciB7XFxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBtYXJnaW4gZWFzZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNC44cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICYtaXRlbSB7XFxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLWxpbmsge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcXG5cXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlLXNlY29uZGFyeTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjJyZW07XFxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fY29udGFjdHMge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEuN3JlbTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAuaGVhZGVyX19jb250YWN0cy10aXRsZSB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUtc2Vjb25kYXJ5O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBzdmcge1xcbiAgICAgICAgICAgICAgICBwYXRoIHtcXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJHdoaXRlLXNlY29uZGFyeTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtdGl0bGUge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHN2ZyB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgc2l6ZXMoMi40cmVtLCAyLjRyZW0pO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNpemVzKDQuOHJlbSwgNC44cmVtKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgcGF0aCB7XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3Mgc3Ryb2tlIGVhc2U7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5oYW1idXJnZXIge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgIHdpZHRoOiA0LjZyZW07XFxuICAgICAgICBoZWlnaHQ6IDMuNnJlbTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgIHNwYW4sXFxuICAgICAgICAmOjpiZWZvcmUsXFxuICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgcHNldWRvIHtcXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOlxcbiAgICAgICAgICAgICAgICAgICAgdG9wIDAuM3MgZWFzZSxcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoIDAuM3MgZWFzZSxcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAwLjNzIGVhc2UsXFxuICAgICAgICAgICAgICAgICAgICBib3R0b20gMC4zcyBlYXNlLFxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgIH1cXG4gICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICBib3R0b206IDA7XFxuICAgICAgICB9XFxuICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMXB4KTtcXG4gICAgICAgIH1cXG4gICAgICAgIC5fbWVudS1vcGVuZWQgJiB7XFxuICAgICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMXB4KTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICBib3R0b206IGNhbGMoNTAlIC0gMXB4KTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBzcGFuLFxcbiAgICAgICAgICAgICY6OmJlZm9yZSxcXG4gICAgICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCJAbWl4aW4gcHNldWRvKCkge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBAY29udGVudDtcXG59XFxuXFxuQG1peGluIHNtYWxsLXRhYmxldCB7XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICBAY29udGVudDtcXG4gICAgfVxcbn1cXG5cXG5AbWl4aW4gc2l6ZXMoJHdpZHRoLCAkaGVpZ2h0KSB7XFxuICAgIG1heC13aWR0aDogJHdpZHRoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xcblxcbiAgICBAY29udGVudDtcXG59XFxuXFxuQG1peGluIGl0ZW0tZG90KCkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICY6OmFmdGVyIHtcXG4gICAgICAgIEBpbmNsdWRlIHBzZXVkbyB7XFxuICAgICAgICAgICAgd2lkdGg6IDAuNXJlbTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDAuNXJlbTtcXG4gICAgICAgICAgICB0b3A6IDEuNXJlbTtcXG4gICAgICAgICAgICBsZWZ0OiAtMnJlbTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICB0b3A6IDAuNXJlbTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDFyZW07XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMXJlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgQGNvbnRlbnQ7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuQG1peGluIHJvdGF0ZWQtYXJyb3coKSB7XFxuICAgIHBhZGRpbmc6IDAuNnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcXG4gICAgQGluY2x1ZGUgc2l6ZXMoNC42cmVtLCA0LjZyZW0pO1xcblxcbiAgICBpbWcge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICBAaW5jbHVkZSBzaXplcyg2cmVtLCA2cmVtKTtcXG4gICAgfVxcblxcbiAgICBAY29udGVudDtcXG59XFxuXCIsXCIuZm9vdGVyIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDcuOHJlbTtcXG5cXG4gICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMXJlbTtcXG4gICAgfVxcblxcbiAgICAmX19jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICAgICAgICAgIGdhcDogMDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19saXN0IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAwLjhyZW07XFxuICAgICAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBnYXA6IDNyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmxhc3QtY2hpbGQge1xcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuZm9vdGVyX19pdGVtIHtcXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcXG4gICAgICAgICAgICAgICAgICAgIGEge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9faXRlbSB7XFxuICAgICAgICBhIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGNvbG9yIGVhc2U7XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlLXNlY29uZGFyeTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fbWlkZGxlIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgICAgICAgICAgIG9yZGVyOiAtMTtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fbG9nbyB7XFxuICAgICAgICBAaW5jbHVkZSBzaXplcygxMC45cmVtLCAxM3JlbSk7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA2LjFyZW07XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIHNpemVzKDI3cmVtLCA4LjZyZW0pO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2NvbnRhY3RzIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAyLjJyZW07XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fY29udGFjdCB7XFxuICAgICAgICBhIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcXG5cXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZS1zZWNvbmRhcnk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiLFwiLnRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICRzcGFjZUFnZTtcXG4gICAgZm9udC1zaXplOiA5cmVtO1xcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgZm9udC1zaXplOiA2cmVtO1xcbiAgICB9XFxufVxcblxcbi5zdWJ0aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAkc3BhY2VBZ2U7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgfVxcbn1cXG5cXG4udHh0MjUge1xcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIH1cXG59XFxuXFxuLnR4dDMwIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICB9XFxufVxcblxcbi50eHQxNiB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxufVxcblxcbi5jeXIge1xcbiAgICBmb250LWZhbWlseTogJHNwYWNlQWdlQ3lyO1xcbn1cXG5cIixcIi5idG4ge1xcbiAgICBwYWRkaW5nOiAwLjZyZW0gMC42cmVtIDAuNnJlbSAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiAycmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDRyZW0gNHJlbSA0cmVtO1xcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gNHJlbTtcXG4gICAgICAgIGNvbHVtbi1nYXA6IDMuMnJlbTtcXG4gICAgICAgIGJvcmRlcjogMC40cmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OCk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDhyZW0gOHJlbSA4cmVtO1xcbiAgICB9XFxuXFxuICAgIC8vIC5idG5fX3RleHRcXG5cXG4gICAgJl9fdGV4dCB7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB9XFxuXFxuICAgIC8vIC5idG5fX2Fycm93LXdyYXBcXG5cXG4gICAgJl9fYXJyb3ctd3JhcCB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGZsZXg6IDAgMCA0cmVtO1xcbiAgICAgICAgd2lkdGg6IDQuNHJlbTtcXG4gICAgICAgIGhlaWdodDogNC40cmVtO1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgZmxleDogMCAwIDdyZW07XFxuICAgICAgICAgICAgd2lkdGg6IDdyZW07XFxuICAgICAgICAgICAgaGVpZ2h0OiA3cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5idG5fX2Fycm93LWljb25cXG5cXG4gICAgJl9fYXJyb3ctaWNvbiB7XFxuICAgICAgICB3aWR0aDogMi40cmVtO1xcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgd2lkdGg6IDMuOHJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcImlucHV0W3R5cGU9J3RleHQnXSxcXG5pbnB1dFt0eXBlPSdlbWFpbCddLFxcbmlucHV0W3R5cGU9J3RlbCddLFxcbnRleHRhcmVhIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcbnRleHRhcmVhOmZvY3VzLFxcbmlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmlucHV0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiA0LjZyZW0gMi43cmVtIDJyZW0gMi43cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgICZfdGV4dGFyZWEge1xcbiAgICAgICAgaGVpZ2h0OiAyNS41cmVtO1xcbiAgICAgICAgdGV4dGFyZWEge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgcGFkZGluZzogN3JlbSA4cmVtIDIuNHJlbSAyLjRyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRyZW0pO1xcbiAgICAgICAgJl90ZXh0YXJlYSB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAzNC44cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5pbnB1dF9fZmllbGRcXG5cXG4gICAgJl9fZmllbGQge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLmlucHV0X19sYWJlbFxcblxcbiAgICAmX19sYWJlbCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDEuOHJlbTtcXG4gICAgICAgIGxlZnQ6IDIuN3JlbTtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIHRvcDogMi40cmVtO1xcbiAgICAgICAgICAgIGxlZnQ6IDIuNHJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmLl9mb3JtLWZvY3VzIHtcXG4gICAgfVxcbiAgICAmLl9mb3JtLWVycm9yIHtcXG4gICAgfVxcbn1cXG5cIixcIi5zZWxlY3Qge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIC8vIC5zZWxlY3RfX2JvZHlcXG5cXG4gICAgJl9fYm9keSB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fdGl0bGVcXG5cXG4gICAgJl9fdGl0bGUge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgei1pbmRleDogMztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRyZW07XFxuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRyZW0pO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX3ZhbHVlXFxuXFxuICAgICZfX3ZhbHVlIHtcXG4gICAgICAgIHBhZGRpbmc6IDEuM3JlbSAxLjNyZW0gMS4zcmVtIDIuN3JlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAycmVtO1xcbiAgICAgICAgaGVpZ2h0OiA3LjJyZW07XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgICAgID4gKiB7XFxuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgNXJlbTtcXG4gICAgICAgICAgICB3aWR0aDogNXJlbTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDVyZW07XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2ljb25zL2Fyci13aGl0ZS5zdmcpO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMi40cmVtO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxuICAgICAgICB9XFxuICAgICAgICAmLl9zZWxlY3QtbGFiZWwge1xcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1zZWwtbGFiZWwpO1xcbiAgICAgICAgICAgICAgICAuX3NlbGVjdC1maWxsZWQgJiB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgJi5fc2VsZWN0LWxhYmVsOjpiZWZvcmUsXFxuICAgICAgICAuc2VsZWN0X19jb250ZW50IHtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMxLjRyZW07XFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjZyZW07XFxuICAgICAgICAgICAgZ2FwOiA0cmVtO1xcbiAgICAgICAgICAgIGhlaWdodDogMTByZW07XFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgNnJlbTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDZyZW07XFxuICAgICAgICAgICAgICAgIGhlaWdodDogNnJlbTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzLjJyZW07XFxuICAgICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyLjRyZW0pO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X19jb250ZW50XFxuXFxuICAgICZfX2NvbnRlbnQge1xcbiAgICAgICAgLy8gaGlkZSAvIHNob3cgc2VsZWN0ZWQgdmFsdWVcXG4gICAgICAgICY6bm90KC5fc2VsZWN0LWZpbGxlZCAmKSB7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X190ZXh0XFxuXFxuICAgICZfX3RleHQge1xcbiAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9faW5wdXRcXG5cXG4gICAgJl9faW5wdXQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X19vcHRpb25zXFxuXFxuICAgICZfX29wdGlvbnMge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgIHRvcDogY2FsYygxMDAlIC0gM3JlbSk7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgcGFkZGluZzogNC42cmVtIDIuN3JlbSAyLjRyZW0gMi43cmVtO1xcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDNyZW0gM3JlbTtcXG4gICAgICAgIGJhY2tncm91bmQ6ICMzNjM5NmM7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIHRvcDogY2FsYygxMDAlIC0gNHJlbSk7XFxuICAgICAgICAgICAgcGFkZGluZzogOHJlbSA0cmVtIDRyZW0gNHJlbTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNHJlbSA0cmVtO1xcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X19zY3JvbGxcXG5cXG4gICAgJl9fc2Nyb2xsIHtcXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuXFxuICAgICAgICAvLyBtYXhpbXVtIGhlaWdodFxcbiAgICAgICAgbWF4LWhlaWdodDogMTlyZW07XFxuXFxuICAgICAgICAvLyBzY3JvbGxiYXIgc3R5bGVzXFxuICAgICAgICAmLnNpbXBsZWJhci1zY3JvbGxhYmxlLXkge1xcbiAgICAgICAgICAgIC5zaW1wbGViYXItdHJhY2suc2ltcGxlYmFyLXZlcnRpY2FsIHtcXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEuMnJlbTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAuNHJlbTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2VlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuc2ltcGxlYmFyLXNjcm9sbGJhciB7XFxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMuMnJlbTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTJhZGMxO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X19vcHRpb25cXG4gICAgJl9fb3B0aW9uIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XFxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAmLl9zZWxlY3Qtc2VsZWN0ZWQge1xcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JlZW47XFxuICAgICAgICB9XFxuICAgICAgICBAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgJjpub3QoJi5zZWxlY3RfX3N1YnRpdGxlKSB7XFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyZWVuO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX2dyb3VwXFxuXFxuICAgICZfX2dyb3VwIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fYXNzZXRcXG5cXG4gICAgJl9fYXNzZXQge1xcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX3RleHRcXG5cXG4gICAgJl9fdGV4dCB7XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9faGludFxcblxcbiAgICAmX19oaW50IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogY2FsYygxMDAlICsgMC44cmVtKTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0Mi44NTclO1xcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX3N1YnRpdGxlXFxuXFxuICAgICZfX3N1YnRpdGxlIHtcXG4gICAgICAgIGN1cnNvcjogdGV4dDtcXG4gICAgfVxcblxcbiAgICAvLyBzZWxlY3Qgc3RhdGVcXG4gICAgJi5fc2VsZWN0LW9wZW5lZCB7XFxuICAgICAgICB6LWluZGV4OiA1O1xcbiAgICAgICAgLnNlbGVjdF9fdmFsdWU6OmFmdGVyIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAmLl9zZWxlY3QtZm9jdXNlZCB7XFxuICAgIH1cXG4gICAgJi5fc2VsZWN0LWVycm9yIHtcXG4gICAgICAgICY6bm90KCYuX3NlbGVjdC1maWxsZWQsICYuX3NlbGVjdC1vcGVuZWQpIHtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAmLl9zZWxlY3QtZmlsbGVkIHtcXG4gICAgICAgICY6bm90KCYuX3NlbGVjdC1vcGVuZWQpIHtcXG4gICAgICAgICAgICAmOm5vdCgmLl9zZWxlY3Qtc2hvdy12YWwpIHtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgJi5fc2VsZWN0LXNob3ctdmFsIHtcXG4gICAgICAgICYuX3NlbGVjdC1mb2N1c2VkLFxcbiAgICAgICAgJi5fc2VsZWN0LWZpbGxlZCxcXG4gICAgICAgICYuX3NlbGVjdC1lcnJvcixcXG4gICAgICAgICYuX3NlbGVjdC1kaXNhYmxlZCB7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgJi5fc2VsZWN0LWRpc2FibGVkIHtcXG4gICAgfVxcbiAgICAmLl9zZWxlY3QtbXVsdGlwbGUge1xcbiAgICB9XFxuICAgICYuX3NlbGVjdC1hY3RpdmUge1xcbiAgICB9XFxuICAgICYuX3NlbGVjdC1jaGVja2JveCB7XFxuICAgIH1cXG59XFxuXFxuLy8gbGlzdFxcbi5fc2VsZWN0LWxpc3Qge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLFwiLmJhZGdlIHtcXG4gICAgcGFkZGluZzogMXJlbSAzcmVtIDFyZW0gMXJlbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDIuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgICYuX2FjdGl2ZSB7XFxuICAgICAgICBjb2xvcjogJGRhcmtQdXJwbGUyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgICAgICAgLmJhZGdlX19pY29uLXdyYXAge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc3Rhci1hY3RpdmUuc3ZnKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gOHJlbSAycmVtIDJyZW07XFxuICAgICAgICBjb2x1bW4tZ2FwOiAzcmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnJlbTtcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcXG4gICAgfVxcblxcbiAgICAvLyAuYmFkZ2VfX2ljb24td3JhcFxcblxcbiAgICAmX19pY29uLXdyYXAge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZmxleDogMCAwIDQuNXJlbTtcXG4gICAgICAgIHdpZHRoOiA0LjVyZW07XFxuICAgICAgICBoZWlnaHQ6IDQuNXJlbTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcXG4gICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIHdpZHRoOiA4cmVtO1xcbiAgICAgICAgICAgIGhlaWdodDogOHJlbTtcXG4gICAgICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9pY29ucy9zdGFyLnN2Zyk7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgfVxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgNnJlbTtcXG4gICAgICAgICAgICB3aWR0aDogNnJlbTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDZyZW07XFxuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRyZW0pO1xcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLmJhZGdlX190ZXh0XFxuXFxuICAgICZfX3RleHQge1xcbiAgICB9XFxufVxcblwiLFwiLnR4dC1ncmVlbiB7XFxuICAgICAgICBjb2xvcjogJGdyZWVuO1xcbiAgICAmX2RvIHtcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKXtcXG4gICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuXFxuICAgICAgICAgICAgICAgICAgICAuX2Rlc2t0b3Atb25seSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pe1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgLl9tb2JpbGUtb25seSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSl7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cIixcIi5pbnRybyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLXRvcDogLThyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDEwLjVyZW07XFxuICAgIHBhZGRpbmctdG9wOiA0MHJlbTtcXG5cXG4gICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1LjVyZW07XFxuICAgICAgICBwYWRkaW5nLXRvcDogNjhyZW07XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtMTZyZW07XFxuICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMxMDE2NTMgMTMlLCByZ2JhKDIzLCAxNSwgNjcsIDApIDc1LjQ1JSk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgQGluY2x1ZGUgcHNldWRvIHtcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMxMDE2NTMgMCUsIHJnYmEoMjMsIDE1LCA2NywgMCkgNjMuNDUlKTtcXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgICAgICAgICBpbnNldDogMDtcXG4gICAgICAgICAgICBib3R0b206IC0wLjVyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fY29udGVudCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDExLjdyZW07XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX3RpdGxlIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDExMCU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1LjNyZW07XFxuXFxuICAgICAgICAucHJvbW8tcGFnZSAmIHtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDExOHJlbTtcXG5cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgLnByb21vLXBhZ2UgJiB7XFxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYycmVtO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJTcGFjZSBBZ2UgQ3lyaWxsaWNcXFwiO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICAgICAgJjpub3QoJi50eHQtZ3JlZW4pIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmVlbjtcXG5cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogODUlO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDcuM3JlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19wb3N0ZXItaW1hZ2Uge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgaW5zZXQ6IDA7XFxuICAgICAgICB6LWluZGV4OiAtMTtcXG5cXG4gICAgICAgICZfaGFzLWJhY2tkcm9wIHtcXG4gICAgICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO3RvcDogMDtsZWZ0OiAwO2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAuaG9tZS1wYWdlICYge1xcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiAtMTQwcmVtO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX3JlcXVlc3Qge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDMuN3JlbTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgZ2FwOiA1cmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1wcm9qZWN0cyB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogMS44cmVtO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBzZXVkbyB7XFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMnJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwLjJyZW07XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuXFxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0zcmVtO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwLjRyZW07XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgZ2FwOiAyLjRyZW07XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICYtY291bnRlciB7XFxuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCA1LjhyZW07XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA1LjhyZW07XFxuICAgICAgICAgICAgICAgIGhlaWdodDogNS44cmVtO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRncmVlbjtcXG5cXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCA4LjhyZW07XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOC44cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4LjhyZW07XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFhMWExYTtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkc3BhY2VBZ2VDeXI7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNnJlbTtcXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjQ4cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjc3MzVyZW07XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMy41cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICYtdGl0bGUge1xcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIzcmVtO1xcblxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XFxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19hcnRpY2xlcyB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDUxcmVtLCAxZnIpKTtcXG4gICAgICAgIGdhcDogMy43cmVtO1xcbiAgICAgICAgbWFyZ2luLXRvcDogNS45cmVtO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMTUuMnJlbSwgMWZyKSk7XFxuICAgICAgICAgICAgZ2FwOiAyLjhyZW07XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTdyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fYXJ0aWNsZSB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgYTpob3ZlciB7XFxuICAgICAgICAgICAgY29sb3I6ICRncmVlbjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtbGluayB7XFxuICAgICAgICAgICAgcGFkZGluZzogMS4xcmVtIDZyZW0gMS4xcmVtIDQuMXJlbTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGdhcDogMnJlbTtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBnYXA6IDIuNnJlbTtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMS41cmVtIDJyZW0gM3JlbTtcXG4gICAgICAgICAgICB9XFxuXFxuXFxuICAgICAgICAgICAgJi10aXRsZSB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMThyZW07XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcXG5cXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLWltYWdlIHtcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc2l6ZXMoMjAuMnJlbSwgMjAuMnJlbSk7XFxuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCAyMC4ycmVtO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBzaXplcygxNi4ycmVtLCAxNi4ycmVtKTtcXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCAxNi4ycmVtO1xcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLWljb24ge1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIHRvcDogMXJlbTtcXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEuM3JlbTtcXG5cXG4gICAgICAgICAgICAgICAgJl9oYXMtbnVtYmVyIHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSByb3RhdGVkLWFycm93O1xcblxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuOHJlbTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcIi5wcm9tb3Rpb24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMXJlbTtcXG5cXG4gICAgJl9fY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHBhZGRpbmc6IDAgMS41cmVtIDAgMi45cmVtO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBwc2V1ZG8ge1xcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnMyc7XFxuICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuNXJlbTtcXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogcmdiYSg0MSwgMjU1LCAxMjcsIDAuMSk7XFxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkc3BhY2VBZ2VDeXI7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNzByZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRiZ0NvbG9yO1xcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgICAgICAgICAgICAgdG9wOiAtMzRyZW07XFxuICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX190aXRsZSB7XFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fYmxvY2sge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgICAgICAgICBnYXA6IDFyZW07XFxuXFxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcXG4gICAgICAgICAgICAgICAgLnByb21vdGlvbl9fdGl0bGUge1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNHJlbTtcXG5cXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgJjpudGgtY2hpbGQob2RkKSB7XFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcXG5cXG4gICAgICAgICAgICAgICAgLnByb21vdGlvbl9fdGl0bGUge1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX3N1YnRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCIubWFya2V0aW5nIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjlyZW07XFxuXFxuICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cmVtO1xcbiAgICB9XFxuXFxuICAgICZfX2ltYWdlIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IC0xNS4ycmVtO1xcbiAgICAgICAgdG9wOiAtMTJyZW07XFxuICAgICAgICBtYXgtd2lkdGg6IDc0cmVtO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2OHJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19jb250ZW50IHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX3RpdGxlIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQuOHJlbTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNC40cmVtO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19pbmZvIHtcXG4gICAgICAgIG1heC13aWR0aDogNTFyZW07XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMXJlbTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1yb3cge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgZ2FwOiA0LjFyZW07XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVyZW07XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgZ2FwOiAzcmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtbGlzdCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM3JlbTtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBnYXA6IDJyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1pdGVtIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgaXRlbS1kb3Q7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLWRlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgIG1heC13aWR0aDogMjEuN3JlbTtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMzLjJyZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiLFwiLmJlbmVmaXRzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTcuN3JlbTtcXG5cXG4gICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI2cmVtO1xcbiAgICB9XFxuXFxuICAgICZfX2NvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgzNy40cmVtLCAxZnIpKTtcXG4gICAgICAgIGdhcDogMy42cmVtO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMzIuOHJlbSwgMWZyKSk7XFxuICAgICAgICAgICAgZ2FwOiAyLjZyZW0gMi4ycmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2FydGljbGUge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gICAgICAgIHBhZGRpbmc6IDMuOHJlbSAyLjJyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgcGFkZGluZzogMy40cmVtIDJyZW0gMnJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtaGVhZGluZyB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgICAgICBnYXA6IDEuNnJlbTtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzLjRyZW07XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICYtdGl0bGUge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMi42cmVtO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLWNvdW50ZXIge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogJGRhcmtQdXJwbGU7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcblxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtcG9zdGVyIHtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICAgICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTAxNjUzO1xcbiAgICAgICAgICAgIGhlaWdodDogMjEuOXJlbTtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMjByZW07XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICYtaW1hZ2Uge1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzaXplcygyOHJlbSwgMzByZW0pO1xcblxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc2l6ZXMoMjZyZW0sIDI4cmVtKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLWRlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiLFwiLnBvcnRmb2xpbyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE4LjVyZW07XFxuXFxuICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyN3JlbTtcXG4gICAgfVxcblxcbiAgICAmX19oZWFkaW5nIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDYuM3JlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgZ2FwOiAycmVtO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGdhcDogOHJlbTtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2xpc3Qge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCg3OC40cmVtLCAxZnIpKTtcXG4gICAgICAgIGdhcDogMy42cmVtIDMuM3JlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDYuNnJlbTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGdhcDogMy4ycmVtO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDcuNnJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19pdGVtIHtcXG4gICAgICAgIGEge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBnYXA6IDMuM3JlbTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAyLjJyZW07XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgZ2FwOiAyLjZyZW07XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAucG9ydGZvbGlvX19pdGVtLXRleHQge1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmVlbjtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAucG9ydGZvbGlvX19pdGVtLWltYWdlIGltZyB7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLWltYWdlIHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBzaXplcygxMDAlLCAzNi41cmVtKTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICAgICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNpemVzKDEwMCUsIDMycmVtKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybSBlYXNlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtYm90dG9tIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLXRleHQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBjb2xvciBlYXNlO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICAgICAgICAgICAgICAgIGdhcDogMnJlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xcblxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLWljb24ge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIHJvdGF0ZWQtYXJyb3c7XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0e1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNnJlbTtcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc2l6ZXMoNS4ycmVtLCA1LjJyZW0pO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19saW5rIHtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICB9XFxufVxcblwiLFwiQGltcG9ydCAnLi4vc2VjdGlvbnMvaW50cm8nO1xcbkBpbXBvcnQgJy4uL3NlY3Rpb25zL3Byb21vdGlvbic7XFxuQGltcG9ydCAnLi4vc2VjdGlvbnMvbWFya2V0aW5nJztcXG5AaW1wb3J0ICcuLi9zZWN0aW9ucy9iZW5lZml0cyc7XFxuQGltcG9ydCAnLi4vc2VjdGlvbnMvcG9ydGZvbGlvJztcXG5cXG5maWd1cmUge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHk6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogOTk7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHMgZWFzZSAwcztcXG5cXG4gICAgLl9tZW51LW9wZW5lZCAmIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4LjAxZW0pIHtcXG4gICAgLm1vYmlsZSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgIC5kZXNrdG9wIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuXCIsbnVsbF0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL2dyb3VwLWNzcy1tZWRpYS1xdWVyaWVzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvZ3JvdXAtY3NzLW1lZGlhLXF1ZXJpZXMtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL3Njc3Mvc3R5bGUuc2Nzcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZm9ybXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGltcG9ydCAqIGFzIGZvcm1zIGZyb20gJy4vdXRpbHMvZm9ybXMuanMnO1xuXG4vLyBmb3JtIGZpZWxkc1xuLy8gZm9ybXMuZm9ybUZpZWxkc0luaXQoeyB2aWV3UGFzczogZmFsc2UgfSk7XG5cbi8vIGZvcm0gc3VibWl0XG4vLyBmb3Jtcy5mb3JtU3VibWl0KCk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdXRpbHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vaGFtYnVyZ2VyXG5pbXBvcnQgJy4vdXRpbHMvaGFtYnVyZ2VyLmpzJztcblxuLy8gdGFic1xuLy8gaW1wb3J0ICcuL3V0aWxzL3RhYnMuanMnO1xuXG4vLyBhY2NvcmRpb25cbi8vIGltcG9ydCAnLi91dGlscy9hY2NvcmRpb24uanMnO1xuXG4vLyBzZWxlY3RcbmltcG9ydCAnLi91dGlscy9zZWxlY3QuanMnO1xuXG4vLyBtb2RhbHNcbi8vIGltcG9ydCAnLi91dGlscy9tb2RhbHMuanMnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGxpYnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBkeW5hbWljIGRvbVxuaW1wb3J0ICcuL2xpYnMvZGQuanMnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgJy4vZGV2L3Z6bXNrMS5qcyc7XG5pbXBvcnQgJy4vZGV2L21hcmt1c0RNLmpzJztcbmltcG9ydCAnLi9kZXYvdWtpazAuanMnO1xuaW1wb3J0ICcuL2Rldi9raWU2ZXIuanMnO1xuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiZXZlbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJEeW5hbWljQWRhcHQiLCJ0eXBlIiwicHJvdG90eXBlIiwiaW5pdCIsIl90aGlzIiwi0L5iamVjdHMiLCJkYUNsYXNzbmFtZSIsIm5vZGVzIiwiaSIsImxlbmd0aCIsIm5vZGUiLCJkYXRhIiwiZGF0YXNldCIsImRhIiwidHJpbSIsImRhdGFBcnJheSIsInNwbGl0Iiwi0L5iamVjdCIsImVsZW1lbnQiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiZGVzdGluYXRpb24iLCJxdWVyeVNlbGVjdG9yIiwiYnJlYWtwb2ludCIsInBsYWNlIiwiaW5kZXgiLCJpbmRleEluUGFyZW50IiwicHVzaCIsImFycmF5U29ydCIsIm1lZGlhUXVlcmllcyIsIkFycmF5IiwibWFwIiwiY2FsbCIsImZpbHRlciIsInNlbGYiLCJpbmRleE9mIiwibWVkaWEiLCJtZWRpYVNwbGl0IiwiU3RyaW5nIiwibWF0Y2hNZWRpYSIsIndpbmRvdyIsIm1lZGlhQnJlYWtwb2ludCIsItC+YmplY3RzRmlsdGVyIiwiYWRkTGlzdGVuZXIiLCJtZWRpYUhhbmRsZXIiLCJtYXRjaGVzIiwibW92ZVRvIiwiY29udGFpbnMiLCJtb3ZlQmFjayIsImFkZCIsImNoaWxkcmVuIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwicmVtb3ZlIiwidW5kZWZpbmVkIiwiYXJyYXkiLCJzbGljZSIsImFyciIsInNvcnQiLCJhIiwiYiIsImJvZHlMb2NrU3RhdHVzIiwiYm9keUxvY2tUb2dnbGUiLCJtZW51SW5pdCIsImhhbWJ1cmdlciIsImUiLCJkb2N1bWVudEVsZW1lbnQiLCJfc2xpZGVVcCIsIl9zbGlkZURvd24iLCJfc2xpZGVUb2dnbGUiLCJTZWxlY3QiLCJjb25zdHJ1Y3RvciIsImNsYXNzZXMiLCJzZWwiLCJib2R5IiwibGFiZWwiLCJ0aXRsZSIsInZhbCIsImNvbnRlbnQiLCJvcHRpb25zIiwib3B0aW9uIiwic2Nyb2xsIiwiZ3JvdXAiLCJpbnAiLCJhc3NldCIsInR4dCIsImhpbnQiLCJhY3RpdmUiLCJmb2N1c2VkIiwib3BlbmVkIiwiZmlsbGVkIiwic2VsZWN0ZWQiLCJkaXNhYmxlZCIsImxpc3QiLCJlcnJvciIsIm11bHRpcGxlIiwiY2hlY2tib3giLCJzZWxlY3RMaXN0Iiwic2VsZWN0IiwiaW5pdFNlbEl0ZW0iLCJzZXRBY3Rpb25zIiwiYmluZCIsInJlbGF0aXZlU2VsIiwiY3JlYXRlRWxlbWVudCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwiaGlkZGVuIiwic2VsSWQiLCJnZXRQbGFjZWhvbGRlciIsIm9wdFBsYWNlaG9sZGVyIiwidmFsdWUiLCJzaG93Iiwic2VsVGl0bGUiLCJnZXRTZWxlY3QiLCJ0d2luU2VsIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwidGV4dCIsInNwZWVkIiwiYnVpbGQiLCJpbml0U2VsZWN0aW9ucyIsInBhcmVudEVsZW1lbnQiLCJzZWxPYmoiLCJzZXRWYWx1ZSIsInNldE9wdGlvbnMiLCJzZWxBZGRvbkNsYXNzIiwiaGFzQXR0cmlidXRlIiwiZGlzYWJsZVNlbGVjdCIsInNldFNlYXJjaEFjdGlvbnMiLCJzZXRBY3Rpb24iLCJzZWxIaW50IiwiY2xvc2VzdCIsImFkZEVyciIsInJlbW92ZUVyciIsInNlbEJvZHkiLCJnZXRWYWx1ZSIsInJlbGF0aXZlU2VsT3B0aW9ucyIsImlubmVySFRNTCIsImdldE9wdGlvbnMiLCJ0YXJnZXQiLCJnZXRDbGFzcyIsInNlbGVjdElkIiwic2VsTGlzdCIsInNlbE9wdGlvbiIsIm9wdFZhbCIsInNldE9wdGlvbkFjdGlvbiIsImNvZGUiLCJjbG9zZUdyb3VwIiwic2VsT3B0aW9ucyIsInNlbGVjdE9uZUdyb3VwIiwic2VsR3JvdXAiLCJzZWxlY3Rpb25zIiwic2VsZWN0aW9uIiwiY2xvc2VJdGVtIiwicmVsYXRpdmVTZWxlY3Rpb25zIiwiZ2V0RGF0YSIsImVsZW1lbnRzIiwicmVsYXRpdmVTZWxlY3Rpb24iLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0d2luU2VsZWN0aW9ucyIsInR3aW5TZWxlY3Rpb24iLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwib3B0IiwidGV4dENvbnRlbnQiLCJzZXRTZWxlY3Rpb25zIiwic2VsSW5wdXQiLCJ0b1VwcGVyQ2FzZSIsInNldFN1YnRpdGxlIiwic2VsRXJyb3IiLCJyZW1vdmVDaGlsZCIsImNzc0NsYXNzIiwiYXR0ciIsImF0dHJDbGFzcyIsInRpdGxlVmFsIiwiaHRtbCIsInNlbExhYmVsIiwidmFsdWVzIiwiZ2V0Q29udGVudCIsImpvaW4iLCJjdXN0b21DbGFzcyIsIm9wdENsYXNzIiwic2VsU2Nyb2xsIiwic2VsU2Nyb2xsSGVpZ2h0IiwiaW5uZXJXaWR0aCIsImZyb20iLCJzZWxPcHRpb25zSFRNTCIsImdldE9wdGlvbiIsInNob3dTZWxlY3Rpb24iLCJvcHRpb25DbGFzcyIsIm9wdGlvbkxpbmsiLCJvcHRpb25MaW5rVGFyZ2V0Iiwib3B0aW9uSFRNTCIsIm9wdGlvbkRhdGEiLCJvcHRBc3NldCIsIm9wdGlvbkRhdGFIVE1MIiwib3B0aW9uQ29udGVudEhUTUwiLCJwbGFjZWhvbGRlciIsImZpbmQiLCJzdWJ0aXRsZSIsInNlbGVjdGVkSW5kZXgiLCJ0ZW1wQnV0dG9uIiwiYXBwZW5kIiwiY2xpY2siLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJzZXRIYXNoIiwiaGFzaCIsImxvY2F0aW9uIiwiaHJlZiIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJnZXRIYXNoIiwicmVwbGFjZSIsImRlbGF5IiwiYXJndW1lbnRzIiwiYm9keVVubG9jayIsImJvZHlMb2NrIiwic2V0VGltZW91dCIsImRhdGFNZWRpYVF1ZXJpZXMiLCJkYXRhU2V0VmFsdWUiLCJicmVha3BvaW50c0FycmF5IiwicGFyYW1zIiwicGFyYW1zQXJyYXkiLCJtZFF1ZXJpZXMiLCJ1bmlxdWVBcnJheSIsIm1kUXVlcmllc0FycmF5IiwibWVkaWFUeXBlIiwiaXRlbXNBcnJheSIsImR1cmF0aW9uIiwic2hvd21vcmUiLCJzdHlsZSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyYW5zaXRpb25EdXJhdGlvbiIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsIm92ZXJmbG93IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJyZW1vdmVQcm9wZXJ0eSIsInJlbVRvUHgiLCJyZW1WYWx1ZSIsImh0bWxGb250U2l6ZSIsInBhcnNlRmxvYXQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZm9udFNpemUiLCJweFZhbHVlIiwiTWF0aCIsInJvdW5kIiwicmVtb3ZlQ2xhc3NlcyIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=