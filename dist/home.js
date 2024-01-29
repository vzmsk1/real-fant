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
.section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}
.group {
  display: flex;
  align-items: center;
  gap: 3.7rem;
}
.group__projects {
  display: flex;
  align-items: center;
  gap: 1.8rem;
  position: relative;
}
.group__projects::after {
  content: "";
  position: absolute;
  left: -2rem;
  height: 100%;
  width: 0.2rem;
  background: rgba(255, 255, 255, 0.2);
}
.group__counter {
  flex: 0 0 5.8rem;
  width: 5.8rem;
  height: 5.8rem;
  border-radius: 50%;
  background: #29ff7f;
}
.group__counter span {
  color: #1a1a1a;
  font-family: "Space Age Cyrillic";
  font-size: 1.7rem;
  display: block;
  margin-top: 1.6rem;
  text-align: center;
}
.group__title {
  max-width: 23rem;
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
  .group {
    gap: 5rem;
  }
  .group__projects::after {
    left: -3rem;
    width: 0.4rem;
  }
  .group__projects {
    gap: 2.4rem;
  }
  .group__counter {
    flex: 0 0 8.8rem;
    width: 8.8rem;
    height: 8.8rem;
  }
  .group__counter span {
    font-size: 2.48rem;
    line-height: 0.7735rem;
    margin-top: 3.5rem;
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
}`, "",{"version":3,"sources":["webpack://./src/scss/fonts.scss","webpack://./src/scss/style.scss","webpack://./src/scss/set.scss","webpack://./src/scss/sections/header.scss","webpack://./src/scss/mixins.scss","webpack://./src/scss/sections/footer.scss","webpack://./src/ui/styles/_typo.scss","webpack://./src/ui/styles/_button.scss","webpack://./src/ui/styles/_input.scss","webpack://./src/ui/styles/_select.scss","webpack://./src/ui/styles/_badge.scss","webpack://./src/ui/styles/_section-head.scss","webpack://./src/ui/styles/_group.scss","webpack://./src/scss/dev/vzmsk1.scss","webpack://./src/scss/sections/_intro.scss","webpack://./src/scss/sections/_promotion.scss","webpack://./src/scss/sections/_marketing.scss","webpack://./src/scss/sections/benefits.scss","webpack://./src/scss/sections/_portfolio.scss","webpack://./src/scss/dev/ukik0.scss","<no source>"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Euclid Circular A';\n    font-weight: 300;\n    src: url('./assets/fonts/Euclid-Circular-A-Light.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'Euclid Circular A';\n    font-weight: 400;\n    src: url('./assets/fonts/Euclid-Circular-A-Regular.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'Euclid Circular A';\n    font-weight: 500;\n    src: url('./assets/fonts/Euclid-Circular-A-Medium.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'Euclid Circular A';\n    font-weight: 600;\n    src: url('./assets/fonts/Euclid-Circular-A-SemiBold.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'Euclid Circular A';\n    font-weight: 700;\n    src: url('./assets/fonts/Euclid-Circular-A-Bold.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'Space Age';\n    font-weight: 400;\n    src: url('./assets/fonts/Space-Age.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'Space Age Cyrillic';\n    font-weight: 400;\n    src: url('./assets/fonts/Space-Age-Cyrillic.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'EuropeExtendedC';\n    font-weight: 700;\n    src: url('./assets/fonts/Europe-Extended-C.woff2') format('woff2');\n}\n","// --------------------------------- mixins ---------------------------------\n\n@import './mixins';\n\n// -------------------------------- variables -------------------------------\n\n// fonts\n$spaceAge: 'Space Age';\n$spaceAgeCyr: 'Space Age Cyrillic';\n$EuropeE: 'EuropeExtendedC';\n$ECA: 'Euclid Circular A';\n\n// colors\n$white: #ffffff;\n$white-secondary: rgba(255, 255, 255, 0.69);\n$black: #000000;\n$darkPurple: #11073b;\n$darkPurple2: #140a3f;\n$green: #29ff7f;\n$blue: #182678;\n$bgColor: #101653;\n\n// ---------------------------------- fonts ---------------------------------\n\n// local fonts\n@import './fonts';\n\n// ------------------------------- base styles ------------------------------\n\n// base scss file\n@import './set';\n\n// html\nhtml.lock,\nhtml.lock body {\n    overflow: hidden;\n    touch-action: none;\n}\nhtml,\nbody {\n    overflow-x: hidden;\n}\n\n// main\nmain {\n    position: relative;\n    flex: 1 1 auto;\n}\n\n.wrapper {\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    max-width: 1920px;\n    height: 100%;\n}\n\n// --------------------------------------------------------------------------\n\n// header / footer\n@import './sections/header';\n@import './sections/footer';\n\n// ui\n@import '../ui/styles/ui.scss';\n\n// --------------------------------------------------------------------------\n\n@import './dev/vzmsk1.scss';\n@import './dev/markusDM.scss';\n@import './dev/ukik0.scss';\n@import './dev/kie6er.scss';\n","*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\nhtml {\n    font-family: $ECA; // шрифт по умолчанию по сайту\n    font-size: 0.5208335vw; // на разрешении 1920 0.520835vw === 10px\n    font-style: normal;\n    font-weight: normal;\n    -webkit-animation: bugfix infinite 1s;\n    line-height: 1.2;\n    margin: 0;\n    padding: 0;\n    height: 100%;\n}\n\nbody {\n    font-style: normal;\n    font-weight: normal;\n    -webkit-animation: bugfix infinite 1s;\n    height: 100%;\n    line-height: 1.2;\n    margin: 0;\n    padding: 0;\n    font-size: 1.8rem;\n    color: $white; // цвет по умолчанию текста по сайту\n    background-color: $bgColor;\n}\n\ninput,\ntextarea {\n    -webkit-animation: bugfix infinite 1s;\n    line-height: inherit;\n    margin: 0;\n    padding: 0;\n    background-color: transparent;\n    border: none;\n    color: inherit;\n}\na {\n    color: unset;\n}\na,\na:hover {\n    text-decoration: none;\n}\n\nbutton,\ninput,\na,\ntextarea {\n    outline: none;\n    cursor: pointer;\n    font: inherit;\n    &:focus {\n        outline: none;\n    }\n    &:active {\n        outline: none;\n    }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font: inherit;\n    margin: 0;\n    padding: 0;\n}\np {\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\nimg {\n    width: 100%;\n    height: auto;\n    display: block;\n}\n\nbutton {\n    border: none;\n    color: inherit;\n    font: inherit;\n    text-align: inherit;\n    padding: 0;\n    background-color: transparent;\n}\nul {\n    padding: 0;\n    margin: 0;\n}\n\nul li {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.container {\n    width: 160rem;\n    margin: 0 auto;\n}\n\ninput[type='number']::-webkit-inner-spin-button,\ninput[type='number']::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\ninput[type='number'] {\n    -moz-appearance: textfield;\n}\n\nsvg,\nimg {\n    width: 100%;\n    height: auto;\n    object-fit: contain;\n}\n\n@media (min-width: 1920px) {\n    html {\n        font-size: 10px;\n    }\n}\n\n@media (max-width: 48em) {\n    html {\n        font-size: 5px;\n        font-size: 1.5625vw;\n        font-size: calc((100 / 375) * 5vw); // где 375 это ширина моб версии макета\n        -webkit-text-size-adjust: none;\n    }\n\n    body {\n        -webkit-text-size-adjust: none;\n        font-size: 2.8rem;\n    }\n\n    .container {\n        padding: 0 3.2rem; // в моб версии отступ от края задаем для всех контейнеров, а там где не нужно можем точечно убрать\n        width: 100%;\n    }\n}\n",".header {\n    padding-top: 2.3rem;\n    position: relative;\n    z-index: 100;\n\n    @include small-tablet {\n        padding-top: 3.6rem;\n    }\n\n    &__content {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        width: 100%;\n\n        @include small-tablet {\n            justify-content: initial;\n            gap: 16rem;\n            transition: 0.3s gap ease;\n\n            ._menu-opened & {\n                &::after {\n                    opacity: 1;\n                }\n\n                gap: 11.6rem;\n            }\n        }\n    }\n\n    &__burger {\n        display: none;\n\n        @include small-tablet {\n            display: block;\n        }\n    }\n\n    &__logo {\n        @include sizes(17.8rem, 5.7rem);\n        display: block;\n\n        @include small-tablet {\n            @include sizes(27rem, 8.6rem);\n            position: relative;\n            z-index: 2;\n        }\n\n        img {\n            height: 100%;\n        }\n    }\n\n    &__menu {\n        @include small-tablet {\n            position: fixed;\n            top: 0;\n            left: 0;\n            max-width: calc(100% - 7.4rem);\n            width: 100%;\n            height: 100%;\n            display: flex;\n            flex-direction: column;\n            opacity: 0;\n            transform: translateX(-100%);\n            transition:\n                transform 0.3s ease,\n                opacity 0.3s ease;\n            background: $bgColor;\n            padding: 21.4rem 5.2rem 8.8rem 7.8rem;\n\n            ._menu-opened & {\n                opacity: 1;\n                transform: translateX(0);\n            }\n        }\n\n        &-contacts {\n            display: none;\n\n            @include small-tablet {\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                margin-top: auto;\n                margin-right: 4rem;\n\n                &-item {\n                    margin-bottom: 2.4rem;\n                    color: rgba(255, 255, 255, 0.67);\n                    font-size: 3.2rem;\n                    font-style: normal;\n                    font-weight: 400;\n                    line-height: 3rem;\n                }\n\n                &-button {\n                    margin-top: 2rem;\n                    border: 0.4rem solid rgba(255, 255, 255, 0.78);\n                    border-radius: 0rem 24rem 24rem 24rem;\n                    display: flex;\n                    align-items: center;\n                    gap: 2rem;\n                    padding: 1rem 1rem 1rem 4rem;\n                    transition: 0.3s border ease;\n\n                    &:active {\n                        border-color: rgba(255, 255, 255, 0.5);\n\n                        span {\n                            color: $white-secondary;\n                        }\n\n                        .header__menu-contacts-button-icon {\n                            background: $white-secondary;\n                        }\n                    }\n\n                    span {\n                        font-size: 2.8rem;\n                        font-style: normal;\n                        font-weight: 400;\n                        line-height: normal;\n                        transition: 0.3s color ease;\n                    }\n\n                    &-icon {\n                        padding: 1.4rem;\n                        border-radius: 50%;\n                        background: $white;\n                        @include sizes(6.8rem, 6.8rem);\n\n                        img {\n                            width: 100%;\n                            height: 100%;\n                        }\n                    }\n                }\n            }\n        }\n    }\n\n    &__nav {\n        @include small-tablet {\n            max-height: 101rem;\n            overflow-x: auto;\n            height: 100%;\n        }\n\n        &-list {\n            display: flex;\n            align-items: center;\n            gap: 6.3rem;\n\n            @include small-tablet {\n                flex-direction: column;\n                align-items: flex-start;\n                gap: 7.2rem;\n            }\n        }\n\n        &-item {\n            @include small-tablet {\n                width: 100%;\n\n                &.--active {\n                    a {\n                        color: $green;\n                    }\n                }\n            }\n\n            &-heading {\n                @include small-tablet {\n                    width: 98%;\n                    display: flex;\n                    align-items: center;\n                    justify-content: space-between;\n                    position: relative;\n\n                    &.--active {\n                        .header__nav-item-icon {\n                            transform: rotate(-180deg);\n                        }\n\n                        ~ .header__nav-item-dropdown {\n                            grid-template-rows: 1fr;\n\n                            .header__nav-item-dropdown-wrapper {\n                                margin-top: 4rem;\n                            }\n                        }\n                    }\n\n                    a {\n                        pointer-events: none;\n                    }\n                }\n            }\n\n            &-icon {\n                display: none;\n\n                @include small-tablet {\n                    display: block;\n                    transition: 0.3s transform ease;\n                }\n            }\n\n            &-dropdown {\n                display: none;\n\n                @include small-tablet {\n                    display: grid;\n                    grid-template-rows: 0fr;\n                    transition: 0.3s grid-template-rows ease;\n                }\n\n                &-wrapper {\n                    @include small-tablet {\n                        overflow: hidden;\n                        transition: 0.3s margin ease;\n                        margin-top: 0;\n                        padding-left: 4.8rem;\n                    }\n                }\n\n                &-item {\n                    @include small-tablet {\n                        font-size: 3.2rem;\n                        font-style: normal;\n                        font-weight: 400;\n                        line-height: 3rem;\n\n                        &:not(:first-child) {\n                            margin-top: 5rem;\n                        }\n                    }\n                }\n            }\n\n            &-link {\n                display: block;\n                font-size: 1.8rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: 3rem;\n                transition: 0.3s color ease;\n\n                &:hover {\n                    color: $white-secondary;\n                }\n\n                @include small-tablet {\n                    font-size: 3.2rem;\n                    font-style: normal;\n                    font-weight: 500;\n                    line-height: 3rem;\n                }\n            }\n        }\n    }\n\n    &__contacts {\n        display: flex;\n        align-items: center;\n        gap: 1.7rem;\n\n        @include small-tablet {\n            position: relative;\n            z-index: 2;\n        }\n\n        &:hover {\n            .header__contacts-title {\n                color: $white-secondary;\n            }\n\n            svg {\n                path {\n                    stroke: $white-secondary;\n                }\n            }\n        }\n\n        &-title {\n            font-size: 1.8rem;\n            font-style: normal;\n            font-weight: 700;\n            line-height: 3rem;\n            transition: 0.3s color ease;\n\n            @include small-tablet {\n                display: none;\n            }\n        }\n\n        svg {\n            @include sizes(2.4rem, 2.4rem);\n\n            @include small-tablet {\n                @include sizes(4.8rem, 4.8rem);\n            }\n\n            path {\n                transition: 0.3s stroke ease;\n            }\n        }\n    }\n\n    .hamburger {\n        position: relative;\n        z-index: 2;\n        width: 4.6rem;\n        height: 3.6rem;\n        cursor: pointer;\n\n        span,\n        &::before,\n        &::after {\n            @include pseudo {\n                right: 0;\n                width: 100%;\n                height: 2px;\n                background-color: $white;\n                transition:\n                    top 0.3s ease,\n                    width 0.3s ease,\n                    transform 0.3s ease,\n                    bottom 0.3s ease,\n                    background-color 0.3s ease;\n                border-radius: 0.2rem;\n            }\n        }\n        &::before {\n            top: 0;\n        }\n        &::after {\n            bottom: 0;\n        }\n        span {\n            top: calc(50% - 1px);\n        }\n        ._menu-opened & {\n            span {\n                width: 0;\n            }\n            &::before {\n                top: calc(50% - 1px);\n                transform: rotate(-45deg);\n            }\n            &::after {\n                bottom: calc(50% - 1px);\n                transform: rotate(45deg);\n            }\n            span,\n            &::before,\n            &::after {\n                background-color: $white;\n            }\n        }\n    }\n}\n","@mixin pseudo() {\n    content: '';\n    position: absolute;\n    @content;\n}\n\n@mixin small-tablet {\n    @media (max-width: 48em) {\n        @content;\n    }\n}\n\n@mixin sizes($width, $height) {\n    max-width: $width;\n    width: 100%;\n    height: $height;\n\n    @content;\n}\n\n@mixin item-dot() {\n    position: relative;\n\n    &::after {\n        @include pseudo {\n            width: 0.5rem;\n            height: 0.5rem;\n            top: 1.5rem;\n            left: -2rem;\n            border-radius: 50%;\n            background: #ffffff;\n\n            @include small-tablet {\n                top: 0.5rem;\n                width: 1rem;\n                height: 1rem;\n            }\n\n            @content;\n        }\n    }\n}\n\n@mixin rotated-arrow() {\n    padding: 0.6rem;\n    border-radius: 50%;\n    background: rgba(255, 255, 255, 0.2);\n    backdrop-filter: blur(2rem);\n    @include sizes(4.6rem, 4.6rem);\n\n    img {\n        height: 100%;\n    }\n\n    @include small-tablet {\n        @include sizes(6rem, 6rem);\n    }\n\n    @content;\n}\n",".footer {\n    padding-bottom: 7.8rem;\n\n    @include small-tablet {\n        padding-bottom: 11rem;\n    }\n\n    &__content {\n        display: flex;\n        align-items: flex-start;\n        justify-content: space-between;\n\n        @include small-tablet {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            gap: 0;\n        }\n    }\n\n    &__list {\n        display: flex;\n        flex-direction: column;\n        gap: 0.8rem;\n        padding-top: 0.5rem;\n\n        @include small-tablet {\n            gap: 3rem;\n        }\n\n        &:last-child {\n            @media (min-width: 48em) {\n                align-items: flex-end;\n            }\n\n            @include small-tablet {\n                margin-right: 5rem;\n            }\n\n            .footer__item {\n                &:last-child {\n                    a {\n                        font-weight: 700;\n                    }\n                }\n            }\n        }\n    }\n\n    &__item {\n        a {\n            display: block;\n            font-size: 1.8rem;\n            font-style: normal;\n            font-weight: 400;\n            line-height: 3rem;\n            transition: 0.3s color ease;\n\n            @include small-tablet {\n                font-size: 2.8rem;\n                font-style: normal;\n                font-weight: 300;\n                line-height: 3rem;\n            }\n\n            &:hover {\n                color: $white-secondary;\n            }\n        }\n    }\n\n    &__middle {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n\n        @include small-tablet {\n            grid-column: span 2;\n            order: -1;\n            justify-content: flex-start;\n            align-items: flex-start;\n        }\n    }\n\n    &__logo {\n        @include sizes(10.9rem, 13rem);\n        margin-bottom: 6.1rem;\n\n        @include small-tablet {\n            @include sizes(27rem, 8.6rem);\n        }\n    }\n\n    &__contacts {\n        display: flex;\n        flex-direction: column;\n        gap: 2.2rem;\n\n        @include small-tablet {\n            display: none;\n        }\n    }\n\n    &__contact {\n        a {\n            display: block;\n            font-size: 1.8rem;\n            font-style: normal;\n            font-weight: 500;\n            line-height: normal;\n            transition: 0.3s color ease;\n\n            &:hover {\n                color: $white-secondary;\n            }\n        }\n    }\n}\n",".title {\n    font-family: $spaceAge;\n    font-size: 9rem;\n\n    @media (max-width: 48em) {\n        font-size: 6rem;\n    }\n}\n\n.subtitle {\n    font-family: $spaceAge;\n    font-size: 3rem;\n    @media (max-width: 48em) {\n        font-size: 4rem;\n    }\n}\n\n.txt25 {\n    @media (min-width: 48em) {\n        font-size: 2.5rem;\n    }\n}\n\n.txt30 {\n    font-size: 3rem;\n    @media (max-width: 48em) {\n        font-size: 4rem;\n    }\n}\n\n.txt16 {\n    font-size: 1.6rem;\n    @media (max-width: 48em) {\n        font-size: 2rem;\n    }\n}\n\n.cyr {\n    font-family: $spaceAgeCyr;\n}\n",".btn {\n    padding: 0.6rem 0.6rem 0.6rem 2rem;\n    display: flex;\n    align-items: center;\n    column-gap: 2rem;\n    border: 2px solid rgba(255, 255, 255, 0.78);\n    border-radius: 0 4rem 4rem 4rem;\n\n    @media (max-width: 48em) {\n        padding: 1rem 1rem 1rem 4rem;\n        column-gap: 3.2rem;\n        border: 0.4rem solid rgba(255, 255, 255, 0.78);\n        border-radius: 0 8rem 8rem 8rem;\n    }\n\n    // .btn__text\n\n    &__text {\n        white-space: nowrap;\n    }\n\n    // .btn__arrow-wrap\n\n    &__arrow-wrap {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        flex: 0 0 4rem;\n        width: 4.4rem;\n        height: 4.4rem;\n        padding: 1rem;\n        border-radius: 50%;\n        background-color: $white;\n        @media (max-width: 48em) {\n            flex: 0 0 7rem;\n            width: 7rem;\n            height: 7rem;\n        }\n    }\n\n    // .btn__arrow-icon\n\n    &__arrow-icon {\n        width: 2.4rem;\n        object-fit: contain;\n        @media (max-width: 48em) {\n            width: 3.8rem;\n        }\n    }\n}\n","input[type='text'],\ninput[type='email'],\ninput[type='tel'],\ntextarea {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\ntextarea:focus,\ninput:focus {\n    outline: none;\n}\n\n.input {\n    position: relative;\n    padding: 4.6rem 2.7rem 2rem 2.7rem;\n    border-radius: 3rem;\n    background: rgba(255, 255, 255, 0.15);\n    backdrop-filter: blur(2rem);\n    &_textarea {\n        height: 25.5rem;\n        textarea {\n            padding: 0;\n            height: 100%;\n            resize: none;\n        }\n    }\n    @media (max-width: 48em) {\n        padding: 7rem 8rem 2.4rem 2.4rem;\n        border-radius: 4rem;\n        backdrop-filter: blur(4rem);\n        &_textarea {\n            height: 34.8rem;\n        }\n    }\n\n    // .input__field\n\n    &__field {\n        display: block;\n        width: 100%;\n        border-radius: 0 !important;\n        line-height: 1;\n        &::placeholder {\n            color: $white;\n        }\n    }\n\n    // .input__label\n\n    &__label {\n        position: absolute;\n        top: 1.8rem;\n        left: 2.7rem;\n        white-space: nowrap;\n        opacity: 0.5;\n        @media (max-width: 48em) {\n            top: 2.4rem;\n            left: 2.4rem;\n        }\n    }\n\n    &._form-focus {\n    }\n    &._form-error {\n    }\n}\n",".select {\n    position: relative;\n\n    // .select__body\n\n    &__body {\n        position: relative;\n    }\n\n    // .select__title\n\n    &__title {\n        position: relative;\n        z-index: 3;\n        width: 100%;\n        border-radius: 3rem;\n        background: rgba(255, 255, 255, 0.15);\n        backdrop-filter: blur(2rem);\n        cursor: pointer;\n        @media (max-width: 48em) {\n            border-radius: 4rem;\n            backdrop-filter: blur(4rem);\n        }\n    }\n\n    // .select__value\n\n    &__value {\n        padding: 1.3rem 1.3rem 1.3rem 2.7rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: 2rem;\n        height: 7.2rem;\n        width: 100%;\n\n        > * {\n            flex: 1 1 auto;\n        }\n\n        &::after {\n            content: '';\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            flex: 0 0 5rem;\n            width: 5rem;\n            height: 5rem;\n            border-radius: 50%;\n            border: 1px solid rgba(255, 255, 255, 0.6);\n            background-color: rgba(255, 255, 255, 0.15);\n            backdrop-filter: blur(2rem);\n            background-image: url(./assets/images/icons/arr-white.svg);\n            background-size: 2.4rem;\n            background-position: center;\n            background-repeat: no-repeat;\n            transition: transform 0.3s ease;\n        }\n        &._select-label {\n            &::before {\n                content: attr(data-sel-label);\n                ._select-filled & {\n                    display: none;\n                }\n            }\n        }\n        &._select-label::before,\n        .select__content {\n            max-width: 31.4rem;\n            overflow: hidden;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n        }\n\n        @media (max-width: 48em) {\n            padding: 1.6rem;\n            gap: 4rem;\n            height: 10rem;\n            &::after {\n                flex: 0 0 6rem;\n                width: 6rem;\n                height: 6rem;\n                background-size: 3.2rem;\n                backdrop-filter: blur(2.4rem);\n            }\n        }\n    }\n\n    // .select__content\n\n    &__content {\n        // hide / show selected value\n        &:not(._select-filled &) {\n            display: none;\n        }\n    }\n\n    // .select__text\n\n    &__text {\n        flex: 1 1 auto;\n    }\n\n    // .select__input\n\n    &__input {\n        width: 100%;\n        height: 100%;\n        background-color: transparent;\n    }\n\n    // .select__options\n\n    &__options {\n        position: absolute;\n        z-index: 2;\n        top: calc(100% - 3rem);\n        left: 0;\n        padding: 4.6rem 2.7rem 2.4rem 2.7rem;\n        min-width: 100%;\n        border-radius: 0 0 3rem 3rem;\n        background: #36396c;\n        backdrop-filter: blur(2rem);\n        @media (max-width: 48em) {\n            top: calc(100% - 4rem);\n            padding: 8rem 4rem 4rem 4rem;\n            border-radius: 0 0 4rem 4rem;\n            backdrop-filter: blur(4rem);\n        }\n    }\n\n    // .select__scroll\n\n    &__scroll {\n        overflow-y: auto;\n        overflow-x: hidden;\n\n        // maximum height\n        max-height: 19rem;\n\n        // scrollbar styles\n        &.simplebar-scrollable-y {\n            .simplebar-track.simplebar-vertical {\n                right: 1.2rem;\n                width: 0.4rem;\n                border-radius: 0.8rem;\n                background-color: #e4e7ee;\n            }\n            .simplebar-scrollbar {\n                min-height: 3.2rem;\n                border-radius: 0.8rem;\n                background-color: #a2adc1;\n            }\n        }\n    }\n\n    // .select__option\n    &__option {\n        width: 100%;\n        transition: color 0.3s ease;\n        &:not(:last-child) {\n            margin-bottom: 2.5rem;\n            @media (max-width: 48em) {\n                margin-bottom: 5rem;\n            }\n        }\n        &._select-selected {\n            color: $green;\n        }\n        @media (any-hover: hover) {\n            &:hover {\n                &:not(&.select__subtitle) {\n                    cursor: pointer;\n                    color: $green;\n                }\n            }\n        }\n    }\n\n    // .select__group\n\n    &__group {\n        display: inline-flex;\n        align-items: flex-start;\n        flex-direction: column-reverse;\n    }\n\n    // .select__asset\n\n    &__asset {\n    }\n\n    // .select__text\n\n    &__text {\n    }\n\n    // .select__hint\n\n    &__hint {\n        position: absolute;\n        top: calc(100% + 0.8rem);\n        font-size: 1.4rem;\n        line-height: 142.857%;\n    }\n\n    // .select__subtitle\n\n    &__subtitle {\n        cursor: text;\n    }\n\n    // select state\n    &._select-opened {\n        z-index: 5;\n        .select__value::after {\n            transform: rotate(-180deg);\n        }\n    }\n    &._select-focused {\n    }\n    &._select-error {\n        &:not(&._select-filled, &._select-opened) {\n        }\n    }\n    &._select-filled {\n        &:not(&._select-opened) {\n            &:not(&._select-show-val) {\n            }\n        }\n    }\n    &._select-show-val {\n        &._select-focused,\n        &._select-filled,\n        &._select-error,\n        &._select-disabled {\n        }\n    }\n    &._select-disabled {\n    }\n    &._select-multiple {\n    }\n    &._select-active {\n    }\n    &._select-checkbox {\n    }\n}\n\n// list\n._select-list {\n    cursor: pointer;\n}\n",".badge {\n    padding: 1rem 3rem 1rem 1rem;\n    display: inline-flex;\n    align-items: center;\n    column-gap: 2.5rem;\n    border-radius: 3rem;\n    background: rgba(255, 255, 255, 0.1);\n    backdrop-filter: blur(2rem);\n    &._active {\n        color: $darkPurple2;\n        background-color: $white;\n        .badge__icon-wrap {\n            background-color: $blue;\n            &::before {\n                background-image: url(./assets/images/icons/star-active.svg);\n            }\n        }\n    }\n    @media (max-width: 48em) {\n        padding: 2rem 8rem 2rem 2rem;\n        column-gap: 3rem;\n        border-radius: 6rem;\n        backdrop-filter: blur(4rem);\n    }\n\n    // .badge__icon-wrap\n\n    &__icon-wrap {\n        position: relative;\n        flex: 0 0 4.5rem;\n        width: 4.5rem;\n        height: 4.5rem;\n        border-radius: 50%;\n        background-color: rgba(255, 255, 255, 0.2);\n        backdrop-filter: blur(2rem);\n        &::before {\n            content: '';\n            position: absolute;\n            width: 8rem;\n            height: 8rem;\n            top: 50%;\n            left: 50%;\n            background-image: url(./assets/images/icons/star.svg);\n            background-position: center;\n            background-size: contain;\n            background-repeat: no-repeat;\n            transform: translate(-50%, -50%);\n        }\n        @media (max-width: 48em) {\n            flex: 0 0 6rem;\n            width: 6rem;\n            height: 6rem;\n            backdrop-filter: blur(4rem);\n            &::before {\n                width: 10rem;\n                height: 10rem;\n            }\n        }\n    }\n\n    // .badge__text\n\n    &__text {\n    }\n}\n",".section-head {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 2rem;\n\n\t\t// .section-head__title\n\n\t\t&__title {\n\t\t}\n\n\t\t// .section-head__group\n\n\t\t&__group {\n\t\t}\n}\n\n",".group {\n        display: flex;\n        align-items: center;\n        gap: 3.7rem;\n\n        @include small-tablet {\n            gap: 5rem;\n        }\n\n\t\t// .group__button\n\n\t\t&__button {\n\t\t}\n\n\t\t// .group__projects\n\n\t\t&__projects {\n            display: flex;\n            align-items: center;\n            gap: 1.8rem;\n            position: relative;\n\n            &::after {\n                @include pseudo {\n                    left: -2rem;\n                    height: 100%;\n                    width: 0.2rem;\n                    background: rgba(255, 255, 255, 0.2);\n\n                    @include small-tablet {\n                        left: -3rem;\n                        width: 0.4rem;\n                    }\n                }\n            }\n\n            @include small-tablet {\n                gap: 2.4rem;\n            }\n\t\t}\n\n\t\t// .group__counter\n\n\t\t&__counter {\n\n                flex: 0 0 5.8rem;\n                width: 5.8rem;\n                height: 5.8rem;\n                border-radius: 50%;\n                background: $green;\n\n                @include small-tablet {\n                    flex: 0 0 8.8rem;\n                    width: 8.8rem;\n                    height: 8.8rem;\n                }\n\n                span {\n                    color: #1a1a1a;\n                    font-family: $spaceAgeCyr;\n                    font-size: 1.7rem;\n                    display: block;\n                    margin-top: 1.6rem;\n                    text-align: center;\n\n                    @include small-tablet {\n                        font-size: 2.48rem;\n                        line-height: 0.7735rem;\n                        margin-top: 3.5rem;\n                    }\n                }\n\t\t}\n\n\t\t// .group__title\n\n\t\t&__title {\n                max-width: 23rem;\n\t\t}\n}",".txt-green {\n        color: $green;\n    &_do {\n        @media (max-width: 48em){\n             color: inherit;\n        }\n    }\n}\n\n._desktop-only {\n  @media (max-width: 48em){\n    display: none;\n}\n  }\n ._mobile-only {\n   display: none;\n  @media (max-width: 48em){\n     display: block;\n   }\n }",".intro {\n    position: relative;\n    margin-top: -8rem;\n    margin-bottom: 10.5rem;\n    padding-top: 40rem;\n\n    @include small-tablet {\n        margin-bottom: 15.5rem;\n        padding-top: 68rem;\n    }\n\n    .container {\n        display: flex;\n        height: 100%;\n    }\n\n    @include small-tablet {\n        margin-top: -16rem;\n        &::after {\n            background: linear-gradient(0deg, #101653 13%, rgba(23, 15, 67, 0) 75.45%);\n        }\n    }\n\n    &::after {\n        @include pseudo {\n            content: '';\n            position: absolute;\n            background: linear-gradient(0deg, #101653 0%, rgba(23, 15, 67, 0) 63.45%);\n            z-index: -1;\n            inset: 0;\n            bottom: -0.5rem;\n        }\n    }\n\n    &__content {\n        margin-top: auto;\n        padding-bottom: 11.7rem;\n\n        @include small-tablet {\n        }\n    }\n\n    &__title {\n        display: block;\n        line-height: 110%;\n        margin-bottom: 5.3rem;\n\n        .promo-page & {\n            max-width: 118rem;\n\n        }\n\n        @include small-tablet {\n            .promo-page & {\n                    max-width: 62rem;\n                    font-family: \"Space Age Cyrillic\";\n            }\n            span {\n                &:not(&.txt-green) {\n                color: $green;\n\n                }\n            }\n\n            line-height: 85%;\n            margin-bottom: 7.3rem;\n        }\n    }\n\n    &__poster-image {\n        position: absolute;\n        inset: 0;\n        z-index: -1;\n\n        &_has-backdrop {\n            &::after {\n                content: '';\n                position: absolute;width: 100%;height: 100%;top: 0;left: 0;background-color: rgba(0, 0, 0, 0.3);\n            }\n        }\n\n        img {\n            height: 100%;\n            object-fit: cover;\n\n            @include small-tablet {\n                .home-page & {\n                    object-position: -140rem;\n                }\n            }\n        }\n    }\n\n    &__request {\n        display: flex;\n        align-items: center;\n        gap: 3.7rem;\n\n        @include small-tablet {\n            gap: 5rem;\n        }\n\n        &-projects {\n\n            &-counter {\n            }\n\n            &-title {\n            }\n        }\n    }\n\n    &__articles {\n        display: grid;\n        grid-template-columns: repeat(3, minmax(51rem, 1fr));\n        gap: 3.7rem;\n        margin-top: 5.9rem;\n\n        @include small-tablet {\n            grid-template-columns: repeat(3, minmax(15.2rem, 1fr));\n            gap: 2.8rem;\n            margin-top: 17rem;\n        }\n    }\n\n    &__article {\n        border-radius: 3rem;\n        background: rgba(255, 255, 255, 0.1);\n        backdrop-filter: blur(2rem);\n        position: relative;\n\n        a:hover {\n            color: $green;\n        }\n\n        @include small-tablet {\n            border-radius: 2rem;\n        }\n\n        &-link {\n            padding: 1.1rem 6rem 1.1rem 4.1rem;\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            gap: 2rem;\n\n            @include small-tablet {\n                flex-direction: column;\n                gap: 2.6rem;\n                height: 100%;\n                padding: 11.5rem 2rem 3rem;\n            }\n\n\n            &-title {\n                font-size: 2.5rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: normal;\n                max-width: 18rem;\n                transition: 0.3s color ease;\n\n                @include small-tablet {\n                    font-size: 2.8rem;\n                    font-style: normal;\n                    font-weight: 400;\n                    line-height: normal;\n                    text-align: center;\n                    max-width: 100%;\n                    flex: 1 1 auto;\n                }\n            }\n\n            &-image {\n                @include sizes(20.2rem, 20.2rem);\n                flex: 0 0 20.2rem;\n                border-radius: 50%;\n\n                @include small-tablet {\n                    position: absolute;\n                    @include sizes(16.2rem, 16.2rem);\n                    flex: 0 0 16.2rem;\n                    top: 0;\n                    left: 50%;\n                    transform: translate(-50%, -50%);\n                }\n\n                img {\n                    border-radius: inherit;\n                    height: 100%;\n                    object-fit: cover;\n                }\n            }\n\n            &-icon {\n                position: absolute;\n                top: 1rem;\n                right: 1.3rem;\n\n                &_has-number {\n                    display: inline-flex;\n                    align-items: center;\n                    justify-content: center;\n                    font-weight: 300;\n                    transition: color 0.3s ease;\n                }\n\n                @include rotated-arrow;\n\n                @include small-tablet {\n                    position: static;\n                    padding: 0.8rem;\n                }\n            }\n        }\n    }\n}\n",".promotion {\n    margin-bottom: 31rem;\n\n    &__content {\n        display: flex;\n        flex-direction: column;\n        padding: 0 1.5rem 0 2.9rem;\n        position: relative;\n\n        @include small-tablet {\n            padding: 0;\n            gap: 1rem;\n        }\n\n        &::after {\n            @include pseudo {\n                content: '3';\n                -webkit-text-stroke-width: 0.5rem;\n                -webkit-text-stroke-color: rgba(41, 255, 127, 0.1);\n                font-family: $spaceAgeCyr;\n                font-size: 70rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: normal;\n                color: $bgColor;\n                left: 50%;\n                transform: translateX(-50%);\n                top: -34rem;\n                z-index: -1;\n            }\n        }\n    }\n\n    &__title {\n        @include small-tablet {\n            letter-spacing: 0.5rem;\n        }\n    }\n\n    &__block {\n        display: flex;\n        flex-direction: column;\n\n        @include small-tablet {\n            flex-direction: column-reverse;\n            gap: 1rem;\n\n            &:last-child {\n                .promotion__title {\n                    margin-left: auto;\n                    margin-right: 0 !important;\n                }\n            }\n        }\n\n        &:nth-child(even) {\n            text-align: end;\n\n            @include small-tablet {\n                text-align: start;\n            }\n\n            span {\n                display: block;\n                margin-right: 34rem;\n\n                @include small-tablet {\n                    margin-right: auto;\n                }\n            }\n        }\n\n        @include small-tablet {\n            &:nth-child(odd) {\n                text-align: end;\n\n                .promotion__title {\n                    margin-right: 5rem;\n                }\n            }\n        }\n    }\n\n    &__subtitle {\n        font-size: 1.8rem;\n        font-style: normal;\n        font-weight: 500;\n        line-height: normal;\n\n        @include small-tablet {\n            font-size: 2.8rem;\n            font-style: normal;\n            font-weight: 400;\n            line-height: normal;\n        }\n    }\n}\n",".marketing {\n    margin-bottom: 29rem;\n\n    @include small-tablet{\n        margin-bottom: 25rem;\n    }\n\n    &__image {\n        position: absolute;\n        left: -15.2rem;\n        top: -12rem;\n        max-width: 74rem;\n        width: 100%;\n\n        @include small-tablet {\n            position: static;\n            max-width: 68rem;\n        }\n    }\n\n    &__content {\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n\n        @include small-tablet {\n            flex-direction: column;\n        }\n    }\n\n    &__title {\n        margin-bottom: 4.8rem;\n\n        @include small-tablet {\n            margin-bottom: 4.4rem;\n            text-align: center;\n        }\n    }\n\n    &__info {\n        max-width: 51rem;\n        width: 100%;\n        margin-left: 21rem;\n\n        @include small-tablet {\n            max-width: 100%;\n            margin-left: 0;\n        }\n\n        &-row {\n            display: flex;\n            align-items: flex-start;\n            gap: 4.1rem;\n            justify-content: space-between;\n            margin-bottom: 5rem;\n\n            @include small-tablet {\n                gap: 3rem;\n            }\n        }\n\n        &-list {\n            display: flex;\n            flex-direction: column;\n            padding-left: 3rem;\n            width: 100%;\n\n            @include small-tablet {\n                gap: 2rem;\n            }\n        }\n\n        &-item {\n            font-size: 1.8rem;\n            font-style: normal;\n            font-weight: 400;\n            line-height: 3rem;\n\n            @include small-tablet {\n                font-size: 2.8rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: 2rem;\n            }\n\n            @include item-dot;\n        }\n\n        &-description {\n            font-size: 1.8rem;\n            font-style: normal;\n            font-weight: 600;\n            line-height: normal;\n            max-width: 21.7rem;\n\n            @include small-tablet {\n                max-width: 33.2rem;\n                font-size: 2.8rem;\n                font-style: normal;\n                font-weight: 600;\n                line-height: normal;\n            }\n        }\n    }\n}\n",".benefits {\n    margin-bottom: 17.7rem;\n\n    @include small-tablet {\n        margin-bottom: 26rem;\n    }\n\n    &__content {\n        display: grid;\n        grid-template-columns: repeat(4, minmax(37.4rem, 1fr));\n        gap: 3.6rem;\n\n        @include small-tablet {\n            grid-template-columns: repeat(2, minmax(32.8rem, 1fr));\n            gap: 2.6rem 2.2rem;\n        }\n    }\n\n    &__article {\n        border-radius: 3rem;\n        background: rgba(255, 255, 255, 0.1);\n        padding: 3.8rem 2.2rem;\n        display: flex;\n        flex-direction: column;\n\n        @include small-tablet {\n            padding: 3.4rem 2rem 2rem;\n        }\n\n        &-heading {\n            display: flex;\n            align-items: flex-start;\n            gap: 1.6rem;\n            margin-bottom: 4rem;\n            justify-content: space-between;\n\n            @include small-tablet {\n                margin-bottom: 3.4rem;\n            }\n\n            &-title {\n                font-size: 2.5rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: normal;\n                display: block;\n                max-width: 22.6rem;\n                width: 100%;\n\n                @include small-tablet {\n                    max-width: 100%;\n                }\n            }\n\n            &-counter {\n                color: $darkPurple;\n                font-size: 6rem;\n                font-style: normal;\n                font-weight: 700;\n                line-height: normal;\n\n                @include small-tablet {\n                    display: none;\n                }\n            }\n        }\n\n        &-poster {\n            border-radius: 3rem;\n            border: 0.1rem solid rgba(255, 255, 255, 0.3);\n            background: #101653;\n            height: 21.9rem;\n            position: relative;\n            margin-bottom: 3rem;\n            margin-top: auto;\n\n            @include small-tablet {\n                margin-bottom: 2rem;\n                height: 20rem;\n            }\n\n            &-image {\n                height: auto;\n                width: auto;\n                position: absolute;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n                @include sizes(28rem, 30rem);\n\n                @include small-tablet {\n                    @include sizes(26rem, 28rem);\n                }\n\n                img {\n                    width: 100%;\n                    height: 100%;\n                }\n            }\n        }\n\n        &-description {\n            font-size: 1.6rem;\n            font-style: normal;\n            font-weight: 300;\n            line-height: normal;\n            padding-right: 3rem;\n\n            @include small-tablet {\n                font-size: 2rem;\n                font-style: normal;\n                font-weight: 300;\n                line-height: normal;\n                padding-right: 0;\n            }\n        }\n    }\n}\n",".portfolio {\n    margin-bottom: 18.5rem;\n\n    @include small-tablet {\n        margin-bottom: 27rem;\n    }\n\n    &__heading {\n        margin-bottom: 6.3rem;\n\n        @include small-tablet {\n            flex-direction: column;\n            gap: 8rem;\n            margin-bottom: 8rem;\n        }\n    }\n\n    &__list {\n        display: grid;\n        grid-template-columns: repeat(2, minmax(78.4rem, 1fr));\n        gap: 3.6rem 3.3rem;\n        margin-bottom: 6.6rem;\n\n        @include small-tablet {\n            display: flex;\n            flex-direction: column;\n            gap: 3.2rem;\n            margin-bottom: 7.6rem;\n        }\n    }\n\n    &__item {\n        a {\n            display: flex;\n            flex-direction: column;\n            gap: 3.3rem;\n            border-radius: 3rem;\n            background: rgba(255, 255, 255, 0.1);\n            padding: 2.2rem;\n\n            @include small-tablet {\n                gap: 2.6rem;\n                padding: 2rem;\n            }\n\n            &:hover {\n                .portfolio__item-text {\n                    color: $green;\n                }\n\n                .portfolio__item-image img {\n                    transform: scale(1.1);\n                }\n            }\n        }\n\n        &-image {\n            @include sizes(100%, 36.5rem);\n            border-radius: 3rem;\n            border: 0.1rem solid rgba(255, 255, 255, 0.3);\n            overflow: hidden;\n\n            @include small-tablet {\n                @include sizes(100%, 32rem);\n            }\n\n            img {\n                height: 100%;\n                border-radius: inherit;\n                transition: 0.3s transform ease;\n            }\n        }\n\n        &-bottom {\n            display: flex;\n            align-items: flex-end;\n            justify-content: space-between;\n        }\n\n        &-text {\n            display: flex;\n            flex-direction: column;\n            gap: 1rem;\n            font-size: 2.5rem;\n            font-style: normal;\n            font-weight: 400;\n            line-height: 3rem;\n            transition: 0.3s color ease;\n\n            @include small-tablet {\n                font-size: 2.8rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: 1.5rem;\n                gap: 2rem;\n            }\n\n            span {\n                font-size: 1.6rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: 3rem;\n                color: $white;\n\n                @include small-tablet {\n                    font-size: 2rem;\n                    font-style: normal;\n                    font-weight: 400;\n                    line-height: 1.5rem;\n                }\n            }\n        }\n\n        &-icon {\n            @include rotated-arrow;\n\n            @include small-tablet{\n                padding: .6rem;\n                @include sizes(5.2rem, 5.2rem);\n            }\n        }\n    }\n\n    &__link {\n        margin: 0 auto;\n        width: fit-content;\n    }\n}\n","@import '../sections/intro';\n@import '../sections/promotion';\n@import '../sections/marketing';\n@import '../sections/benefits';\n@import '../sections/portfolio';\n\nfigure {\n    margin: 0;\n}\n\nbody::after {\n    content: '';\n    position: fixed;\n    z-index: 99;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(255, 255, 255, 0.1);\n    backdrop-filter: blur(2rem);\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.8s ease 0s;\n\n    ._menu-opened & {\n        opacity: 1;\n    }\n}\n\n@media (min-width: 48.01em) {\n    .mobile {\n        display: none;\n    }\n}\n\n@media (max-width: 48em) {\n    .desktop {\n        display: none;\n    }\n}\n",null],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx3M0JBQXczQixXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxRQUFRLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sU0FBUyxVQUFVLFVBQVUsVUFBVSxNQUFNLFNBQVMsVUFBVSxNQUFNLFNBQVMsVUFBVSxPQUFPLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxjQUFjLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLGNBQWMsWUFBWSxZQUFZLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFlBQVksUUFBUSxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sUUFBUSxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sWUFBWSxRQUFRLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxjQUFjLFlBQVksWUFBWSxZQUFZLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFlBQVksU0FBUyxPQUFPLFdBQVcsVUFBVSxRQUFRLE9BQU8sV0FBVyxVQUFVLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxZQUFZLFFBQVEsT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksT0FBTyxPQUFPLFVBQVUsV0FBVyxRQUFRLFVBQVUsV0FBVyxXQUFXLFdBQVcsUUFBUSxRQUFRLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLFFBQVEsVUFBVSxRQUFRLFFBQVEsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFlBQVksVUFBVSxVQUFVLFdBQVcsUUFBUSxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxPQUFPLFFBQVEsVUFBVSxZQUFZLFlBQVksVUFBVSxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsU0FBUyxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxRQUFRLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sY0FBYyxZQUFZLFlBQVksWUFBWSxXQUFXLFFBQVEsUUFBUSxXQUFXLFVBQVUsV0FBVyxRQUFRLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxhQUFhLFdBQVcsWUFBWSxRQUFRLFFBQVEsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxRQUFRLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFFBQVEsUUFBUSxXQUFXLFFBQVEsUUFBUSxVQUFVLFdBQVcsVUFBVSxRQUFRLFFBQVEsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFFBQVEsUUFBUSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsUUFBUSxRQUFRLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsU0FBUyxRQUFRLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxTQUFTLFFBQVEsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxRQUFRLFFBQVEsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsY0FBYyxZQUFZLFlBQVksU0FBUyxTQUFTLFVBQVUsVUFBVSxTQUFTLFFBQVEsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFNBQVMsUUFBUSxXQUFXLFFBQVEsUUFBUSxXQUFXLFFBQVEsUUFBUSxVQUFVLFdBQVcsV0FBVyxXQUFXLFFBQVEsUUFBUSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxRQUFRLFNBQVMsWUFBWSxPQUFPLFNBQVMsV0FBVyxTQUFTLFFBQVEsYUFBYSxZQUFZLFlBQVksWUFBWSxXQUFXLFdBQVcsUUFBUSxRQUFRLFVBQVUsV0FBVyxXQUFXLFNBQVMsUUFBUSxVQUFVLFdBQVcsV0FBVyxRQUFRLFFBQVEsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFFBQVEsUUFBUSxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksT0FBTyxRQUFRLFdBQVcsV0FBVyxXQUFXLFdBQVcsYUFBYSxXQUFXLFlBQVksUUFBUSxPQUFPLFVBQVUsT0FBTyxRQUFRLFVBQVUsV0FBVyxTQUFTLFFBQVEsVUFBVSxTQUFTLFFBQVEsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsUUFBUSxRQUFRLFVBQVUsUUFBUSxRQUFRLE1BQU0sVUFBVSxRQUFRLE9BQU8sUUFBUSxNQUFNLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFFBQVEsT0FBTyxVQUFVLE1BQU0sT0FBTyxRQUFRLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxjQUFjLFlBQVksWUFBWSxZQUFZLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxhQUFhLGFBQWEsWUFBWSxZQUFZLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLGNBQWMsWUFBWSxZQUFZLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sY0FBYyxZQUFZLFlBQVksUUFBUSxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFlBQVksV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLE9BQU8sT0FBTyxZQUFZLFVBQVUsVUFBVSxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sWUFBWSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sWUFBWSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLGVBQWUsWUFBWSxZQUFZLFlBQVksVUFBVSxVQUFVLFdBQVcsUUFBUSxPQUFPLGFBQWEsWUFBWSxZQUFZLFFBQVEsT0FBTyxZQUFZLFVBQVUsUUFBUSxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxRQUFRLFdBQVcsUUFBUSxRQUFRLFdBQVcsV0FBVyxRQUFRLFFBQVEsV0FBVyxRQUFRLFFBQVEsV0FBVyxRQUFRLFFBQVEsVUFBVSxTQUFTLFFBQVEsVUFBVSxTQUFTLFFBQVEsV0FBVyxVQUFVLFFBQVEsUUFBUSxjQUFjLFlBQVksWUFBWSxTQUFTLFFBQVEsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFFBQVEsUUFBUSxXQUFXLFFBQVEsUUFBUSxXQUFXLFVBQVUsV0FBVyxRQUFRLFFBQVEsVUFBVSxXQUFXLFVBQVUsV0FBVyxRQUFRLFFBQVEsVUFBVSxVQUFVLFFBQVEsUUFBUSxhQUFhLFlBQVksWUFBWSxTQUFTLFFBQVEsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFFBQVEsUUFBUSxVQUFVLFdBQVcsV0FBVyxXQUFXLFNBQVMsUUFBUSxhQUFhLFlBQVksWUFBWSxRQUFRLFFBQVEsVUFBVSxjQUFjLFlBQVksWUFBWSxTQUFTLFFBQVEsVUFBVSxRQUFRLE1BQU0sUUFBUSxPQUFPLFVBQVUsV0FBVyxPQUFPLHVDQUF1Qyx1Q0FBdUMsdUJBQXVCLCtFQUErRSxHQUFHLGdCQUFnQix1Q0FBdUMsdUJBQXVCLGlGQUFpRixHQUFHLGdCQUFnQix1Q0FBdUMsdUJBQXVCLGdGQUFnRixHQUFHLGdCQUFnQix1Q0FBdUMsdUJBQXVCLGtGQUFrRixHQUFHLGdCQUFnQix1Q0FBdUMsdUJBQXVCLDhFQUE4RSxHQUFHLGdCQUFn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V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0Qjs7QUFFNUI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQzhCOztBQUU5QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDMkI7O0FBRTNCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDc0I7O0FBRXRCOztBQUV5QjtBQUNFO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvZGV2L3VraWswLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9saWJzL2RkLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy9oYW1idXJnZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL3V0aWxzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/NmMyZCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX25hdi1pdGVtLWhlYWRpbmcnKTtcblxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCctLWFjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuZnVuY3Rpb24gRHluYW1pY0FkYXB0KHR5cGUpIHtcbiAgdGhpcy50eXBlID0gdHlwZTtcbn1cbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICB0aGlzLtC+YmplY3RzID0gW107XG4gIHRoaXMuZGFDbGFzc25hbWUgPSAnX2R5bmFtaWNfYWRhcHRfJztcbiAgdGhpcy5ub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRhXScpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5ub2Rlc1tpXTtcbiAgICBjb25zdCBkYXRhID0gbm9kZS5kYXRhc2V0LmRhLnRyaW0oKTtcbiAgICBjb25zdCBkYXRhQXJyYXkgPSBkYXRhLnNwbGl0KCcsJyk7XG4gICAgY29uc3Qg0L5iamVjdCA9IHt9O1xuICAgINC+YmplY3QuZWxlbWVudCA9IG5vZGU7XG4gICAg0L5iamVjdC5wYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG4gICAg0L5iamVjdC5kZXN0aW5hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZGF0YUFycmF5WzBdLnRyaW0oKSk7XG4gICAg0L5iamVjdC5icmVha3BvaW50ID0gZGF0YUFycmF5WzFdID8gZGF0YUFycmF5WzFdLnRyaW0oKSA6ICc3NjcnO1xuICAgINC+YmplY3QucGxhY2UgPSBkYXRhQXJyYXlbMl0gPyBkYXRhQXJyYXlbMl0udHJpbSgpIDogJ2xhc3QnO1xuICAgINC+YmplY3QuaW5kZXggPSB0aGlzLmluZGV4SW5QYXJlbnQo0L5iamVjdC5wYXJlbnQsINC+YmplY3QuZWxlbWVudCk7XG4gICAgdGhpcy7QvmJqZWN0cy5wdXNoKNC+YmplY3QpO1xuICB9XG4gIHRoaXMuYXJyYXlTb3J0KHRoaXMu0L5iamVjdHMpO1xuICB0aGlzLm1lZGlhUXVlcmllcyA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChcbiAgICB0aGlzLtC+YmplY3RzLFxuICAgIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAnKCcgK1xuICAgICAgICB0aGlzLnR5cGUgK1xuICAgICAgICAnLXdpZHRoOiAnICtcbiAgICAgICAgaXRlbS5icmVha3BvaW50ICtcbiAgICAgICAgJ3B4KSwnICtcbiAgICAgICAgaXRlbS5icmVha3BvaW50XG4gICAgICApO1xuICAgIH0sXG4gICAgdGhpc1xuICApO1xuICB0aGlzLm1lZGlhUXVlcmllcyA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChcbiAgICB0aGlzLm1lZGlhUXVlcmllcyxcbiAgICBmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIHNlbGYpIHtcbiAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHNlbGYsIGl0ZW0pID09PSBpbmRleDtcbiAgICB9XG4gICk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tZWRpYVF1ZXJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtZWRpYSA9IHRoaXMubWVkaWFRdWVyaWVzW2ldO1xuICAgIGNvbnN0IG1lZGlhU3BsaXQgPSBTdHJpbmcucHJvdG90eXBlLnNwbGl0LmNhbGwobWVkaWEsICcsJyk7XG4gICAgY29uc3QgbWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKG1lZGlhU3BsaXRbMF0pO1xuICAgIGNvbnN0IG1lZGlhQnJlYWtwb2ludCA9IG1lZGlhU3BsaXRbMV07XG4gICAgY29uc3Qg0L5iamVjdHNGaWx0ZXIgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoXG4gICAgICB0aGlzLtC+YmplY3RzLFxuICAgICAgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uYnJlYWtwb2ludCA9PT0gbWVkaWFCcmVha3BvaW50O1xuICAgICAgfVxuICAgICk7XG4gICAgbWF0Y2hNZWRpYS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5tZWRpYUhhbmRsZXIobWF0Y2hNZWRpYSwg0L5iamVjdHNGaWx0ZXIpO1xuICAgIH0pO1xuICAgIHRoaXMubWVkaWFIYW5kbGVyKG1hdGNoTWVkaWEsINC+YmplY3RzRmlsdGVyKTtcbiAgfVxufTtcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUubWVkaWFIYW5kbGVyID0gZnVuY3Rpb24gKG1hdGNoTWVkaWEsINC+YmplY3RzKSB7XG4gIGlmIChtYXRjaE1lZGlhLm1hdGNoZXMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8INC+YmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCDQvmJqZWN0ID0g0L5iamVjdHNbaV07XG4gICAgICDQvmJqZWN0LmluZGV4ID0gdGhpcy5pbmRleEluUGFyZW50KNC+YmplY3QucGFyZW50LCDQvmJqZWN0LmVsZW1lbnQpO1xuICAgICAgdGhpcy5tb3ZlVG8o0L5iamVjdC5wbGFjZSwg0L5iamVjdC5lbGVtZW50LCDQvmJqZWN0LmRlc3RpbmF0aW9uKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy9mb3IgKGxldCBpID0gMDsgaSA8INC+YmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaSA9INC+YmplY3RzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCDQvmJqZWN0ID0g0L5iamVjdHNbaV07XG4gICAgICBpZiAo0L5iamVjdC5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmRhQ2xhc3NuYW1lKSkge1xuICAgICAgICB0aGlzLm1vdmVCYWNrKNC+YmplY3QucGFyZW50LCDQvmJqZWN0LmVsZW1lbnQsINC+YmplY3QuaW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUubW92ZVRvID0gZnVuY3Rpb24gKHBsYWNlLCBlbGVtZW50LCBkZXN0aW5hdGlvbikge1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5kYUNsYXNzbmFtZSk7XG4gIGlmIChwbGFjZSA9PT0gJ2xhc3QnIHx8IHBsYWNlID49IGRlc3RpbmF0aW9uLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgIGRlc3RpbmF0aW9uLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZWxlbWVudCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwbGFjZSA9PT0gJ2ZpcnN0Jykge1xuICAgIGRlc3RpbmF0aW9uLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIGVsZW1lbnQpO1xuICAgIHJldHVybjtcbiAgfVxuICBkZXN0aW5hdGlvbi5jaGlsZHJlbltwbGFjZV0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIGVsZW1lbnQpO1xufTtcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUubW92ZUJhY2sgPSBmdW5jdGlvbiAocGFyZW50LCBlbGVtZW50LCBpbmRleCkge1xuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5kYUNsYXNzbmFtZSk7XG4gIGlmIChwYXJlbnQuY2hpbGRyZW5baW5kZXhdICE9PSB1bmRlZmluZWQpIHtcbiAgICBwYXJlbnQuY2hpbGRyZW5baW5kZXhdLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBwYXJlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcbiAgfVxufTtcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUuaW5kZXhJblBhcmVudCA9IGZ1bmN0aW9uIChwYXJlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgYXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChwYXJlbnQuY2hpbGRyZW4pO1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhcnJheSwgZWxlbWVudCk7XG59O1xuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5hcnJheVNvcnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmICh0aGlzLnR5cGUgPT09ICdtaW4nKSB7XG4gICAgQXJyYXkucHJvdG90eXBlLnNvcnQuY2FsbChhcnIsIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICBpZiAoYS5icmVha3BvaW50ID09PSBiLmJyZWFrcG9pbnQpIHtcbiAgICAgICAgaWYgKGEucGxhY2UgPT09IGIucGxhY2UpIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhLnBsYWNlID09PSAnZmlyc3QnIHx8IGIucGxhY2UgPT09ICdsYXN0Jykge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhLnBsYWNlID09PSAnbGFzdCcgfHwgYi5wbGFjZSA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGEucGxhY2UgLSBiLnBsYWNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYS5icmVha3BvaW50IC0gYi5icmVha3BvaW50O1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIEFycmF5LnByb3RvdHlwZS5zb3J0LmNhbGwoYXJyLCBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgaWYgKGEuYnJlYWtwb2ludCA9PT0gYi5icmVha3BvaW50KSB7XG4gICAgICAgIGlmIChhLnBsYWNlID09PSBiLnBsYWNlKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gJ2ZpcnN0JyB8fCBiLnBsYWNlID09PSAnbGFzdCcpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhLnBsYWNlID09PSAnbGFzdCcgfHwgYi5wbGFjZSA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBiLnBsYWNlIC0gYS5wbGFjZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGIuYnJlYWtwb2ludCAtIGEuYnJlYWtwb2ludDtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbn07XG5jb25zdCBkYSA9IG5ldyBEeW5hbWljQWRhcHQoJ21heCcpO1xuZGEuaW5pdCgpO1xuIiwiaW1wb3J0IHsgYm9keUxvY2tTdGF0dXMsIGJvZHlMb2NrVG9nZ2xlIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IG1lbnVJbml0ID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJykpIHtcbiAgICAgICAgY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpO1xuXG4gICAgICAgIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoYm9keUxvY2tTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnX21lbnUtb3BlbmVkJyk7XG4gICAgICAgICAgICAgICAgYm9keUxvY2tUb2dnbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxubWVudUluaXQoKTtcbiIsImltcG9ydCB7IF9zbGlkZVVwLCBfc2xpZGVEb3duLCBfc2xpZGVUb2dnbGUgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY2xhc3MgU2VsZWN0IHtcbiAgICAvLyBzZXR1cCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl90aGlzID0gdGhpcztcblxuICAgICAgICAvLyBjdXN0b20gc2VsZWN0IGNsYXNzZXNcbiAgICAgICAgdGhpcy5jbGFzc2VzID0ge1xuICAgICAgICAgICAgLy8gaHRtbCBidWlsZCBjbGFzc2VzXG4gICAgICAgICAgICBzZWw6ICdzZWxlY3QnLFxuICAgICAgICAgICAgYm9keTogJ3NlbGVjdF9fYm9keScsXG4gICAgICAgICAgICBsYWJlbDogJ3NlbGVjdF9fbGFiZWwnLFxuICAgICAgICAgICAgdGl0bGU6ICdzZWxlY3RfX3RpdGxlJyxcbiAgICAgICAgICAgIHZhbDogJ3NlbGVjdF9fdmFsdWUnLFxuICAgICAgICAgICAgY29udGVudDogJ3NlbGVjdF9fY29udGVudCcsXG4gICAgICAgICAgICBvcHRpb25zOiAnc2VsZWN0X19vcHRpb25zJyxcbiAgICAgICAgICAgIG9wdGlvbjogJ3NlbGVjdF9fb3B0aW9uJyxcbiAgICAgICAgICAgIHNjcm9sbDogJ3NlbGVjdF9fc2Nyb2xsJyxcbiAgICAgICAgICAgIGdyb3VwOiAnc2VsZWN0X19ncm91cCcsXG4gICAgICAgICAgICBpbnA6ICdzZWxlY3RfX2lucHV0JyxcbiAgICAgICAgICAgIGFzc2V0OiAnc2VsZWN0X19hc3NldCcsXG4gICAgICAgICAgICB0eHQ6ICdzZWxlY3RfX3RleHQnLFxuICAgICAgICAgICAgaGludDogJ3NlbGVjdF9faGludCcsXG5cbiAgICAgICAgICAgIC8vIHN0YXRlIGNsYXNzZXNcbiAgICAgICAgICAgIGFjdGl2ZTogJ19zZWxlY3QtYWN0aXZlJyxcbiAgICAgICAgICAgIGZvY3VzZWQ6ICdfc2VsZWN0LWZvY3VzZWQnLFxuICAgICAgICAgICAgb3BlbmVkOiAnX3NlbGVjdC1vcGVuZWQnLFxuICAgICAgICAgICAgZmlsbGVkOiAnX3NlbGVjdC1maWxsZWQnLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6ICdfc2VsZWN0LXNlbGVjdGVkJyxcbiAgICAgICAgICAgIGRpc2FibGVkOiAnX3NlbGVjdC1kaXNhYmxlZCcsXG5cbiAgICAgICAgICAgIC8vIGFkZGl0aW9uYWwgY2xhc3Nlc1xuICAgICAgICAgICAgbGlzdDogJ19zZWxlY3QtbGlzdCcsXG4gICAgICAgICAgICBlcnJvcjogJ19zZWxlY3QtZXJyb3InLFxuICAgICAgICAgICAgbXVsdGlwbGU6ICdfc2VsZWN0LW11bHRpcGxlJyxcbiAgICAgICAgICAgIGNoZWNrYm94OiAnX3NlbGVjdC1jaGVja2JveCcsXG4gICAgICAgICAgICBsYWJlbDogJ19zZWxlY3QtbGFiZWwnXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gYWxsIHNlbGVjdCBpdGVtc1xuICAgICAgICBjb25zdCBzZWxlY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0Jyk7XG4gICAgICAgIGlmIChzZWxlY3RMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0KHNlbGVjdExpc3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc2VsZWN0IGluaXRpYWxpemF0aW9uICYgYnVpbGQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyBpbml0aWFsaXphdGlvblxuICAgIGluaXQoc2VsZWN0TGlzdCkge1xuICAgICAgICAvLyBpbml0XG4gICAgICAgIHNlbGVjdExpc3QuZm9yRWFjaCgoc2VsZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGFyLXJhdGluZycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0U2VsSXRlbShzZWxlY3QsIGluZGV4ICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGV2ZW50c1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb25zKGUpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAna2V5ZG93bicsXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2ZvY3VzaW4nLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGlvbnMoZSk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdmb2N1c291dCcsXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgIH1cbiAgICAvLyBzaW5nbGUgc2VsZWN0IGl0ZW0gaW5pdGlhbGl6YXRpb25cbiAgICBpbml0U2VsSXRlbShyZWxhdGl2ZVNlbCwgaW5kZXgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc2VsKTtcbiAgICAgICAgcmVsYXRpdmVTZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChyZWxhdGl2ZVNlbCk7XG4gICAgICAgIHJlbGF0aXZlU2VsLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIGluZGV4ID8gKHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSWQgPSBpbmRleCkgOiBudWxsO1xuXG4gICAgICAgIGlmICh0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKSkge1xuICAgICAgICAgICAgcmVsYXRpdmVTZWwuZGF0YXNldC5vcHRQbGFjZWhvbGRlciA9IHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLnZhbHVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLmxhYmVsLnNob3cpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxUaXRsZSA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLnRpdGxlKS50d2luU2VsO1xuICAgICAgICAgICAgICAgIHNlbFRpdGxlLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgICAgICAgICAgJ2FmdGVyYmVnaW4nLFxuICAgICAgICAgICAgICAgICAgICBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5sYWJlbH1cIj4ke1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkubGFiZWwudGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkubGFiZWwudGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfTwvc3Bhbj5gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCAhPT0gJzAnKSB7XG4gICAgICAgICAgICBzZWxlY3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgICAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuYm9keX1cIj48ZGl2IGhpZGRlbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLm9wdGlvbnN9XCI+PC9kaXY+PC9kaXY+YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICAgICAgICAgJ2JlZm9yZWVuZCcsXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5ib2R5fVwiPjxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5vcHRpb25zfVwiPjwvZGl2PjwvZGl2PmBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJ1aWxkKHJlbGF0aXZlU2VsKTtcblxuICAgICAgICByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkID0gcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCA/IHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgOiAnMTUwJztcbiAgICAgICAgcmVsYXRpdmVTZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLmluaXRTZWxlY3Rpb25zKGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gc2VsZWN0IGJ1aWxkXG4gICAgYnVpbGQocmVsYXRpdmVTZWwpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3Qgc2VsT2JqID0gdGhpcztcblxuICAgICAgICAvLyBzZXQgaWRcbiAgICAgICAgc2VsZWN0LmRhdGFzZXQuc2VsSWQgPSByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbElkO1xuICAgICAgICAvLyBzZXQgdmFsdWVcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKTtcbiAgICAgICAgLy8gc2V0IG9wdGlvbnNcbiAgICAgICAgdGhpcy5zZXRPcHRpb25zKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xuICAgICAgICAvLyBzZXQgY3NzIG1vZGlmaWNhdG9yXG4gICAgICAgIHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsQWRkb25DbGFzc1xuICAgICAgICAgICAgPyBzZWxlY3QuY2xhc3NMaXN0LmFkZChgc2VsZWN0XyR7cmVsYXRpdmVTZWwuZGF0YXNldC5zZWxBZGRvbkNsYXNzfWApXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIC8vIHNldCBjbGFzcyBpZiBzZWxlY3QgaXMgbXVsdGlwbGVcbiAgICAgICAgcmVsYXRpdmVTZWwubXVsdGlwbGVcbiAgICAgICAgICAgID8gc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLm11bHRpcGxlKVxuICAgICAgICAgICAgOiBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMubXVsdGlwbGUpO1xuICAgICAgICAvLyBzZXQgY2xhc3MgaWYgc2VsZWN0IGNoZWNrYm94ZXMgYXJlIHNldFxuICAgICAgICByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLWNoZWNrYm94ZXMnKSAmJiByZWxhdGl2ZVNlbC5tdWx0aXBsZVxuICAgICAgICAgICAgPyBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuY2hlY2tib3gpXG4gICAgICAgICAgICA6IHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5jaGVja2JveCk7XG4gICAgICAgIC8vIGRpc2FibGUgc2VsZWN0XG4gICAgICAgIHRoaXMuZGlzYWJsZVNlbGVjdChzZWxlY3QsIHJlbGF0aXZlU2VsKTtcbiAgICAgICAgLy8gc2V0IHNlYXJjaCBhY3Rpb25zIGlmIGRhdGEtc2VsLXNlYXJjaCBpcyBzZXRcbiAgICAgICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1zZWFyY2gnKSA/IHRoaXMuc2V0U2VhcmNoQWN0aW9ucyhzZWxlY3QpIDogbnVsbDtcbiAgICAgICAgLy8gc2V0IHNlbGVjdCBhY3Rpb25zIGlmIGl0J3MgaW5pdGlhbGx5IG9wZW5lZFxuICAgICAgICByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLW9wZW5lZCcpID8gdGhpcy5zZXRBY3Rpb24oc2VsZWN0KSA6IG51bGw7XG5cbiAgICAgICAgLy8gc2V0IHNlbGVjdCBoaW50XG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnQpIHtcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgICAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwic2VsZWN0X19oaW50XCI+JHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnR9PC9kaXY+YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkYXRlIHNlbGVjdFxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuY2xvc2VzdCgnZm9ybScpKSB7XG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5jbG9zZXN0KCdmb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyhzZWxPYmouY2xhc3Nlcy5maWxsZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbE9iai5hZGRFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsT2JqLnJlbW92ZUVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNob3cgLyBoaWRlIHNlbGVjdGlvbiBmcm9tIHNlbGVjdCB0aXRsZVxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNob3ctdmFsJykpIHtcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0LXNob3ctdmFsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnX3NlbGVjdC1zaG93LXZhbCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHNldCB0d2luIHNlbGVjdCB0aXRsZSB2YWx1ZVxuICAgIHNldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcbiAgICAgICAgY29uc3Qgc2VsQm9keSA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLmJvZHkpLnR3aW5TZWw7XG4gICAgICAgIGNvbnN0IHNlbFRpdGxlID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMudGl0bGUpLnR3aW5TZWw7XG5cbiAgICAgICAgaWYgKHNlbFRpdGxlKSBzZWxUaXRsZS5yZW1vdmUoKTtcbiAgICAgICAgc2VsQm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aGlzLmdldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpKTtcbiAgICB9XG4gICAgLy8gc2V0IHR3aW4gc2VsZWN0IG9wdGlvbnNcbiAgICBzZXRPcHRpb25zKHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnR3aW5TZWw7XG4gICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsT3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnJlbGF0aXZlU2VsO1xuXG4gICAgICAgIG9wdGlvbnMuaW5uZXJIVE1MID0gdGhpcy5nZXRPcHRpb25zKHJlbGF0aXZlU2VsKTtcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsT3B0aW9ucy5xdWVyeVNlbGVjdG9yKCdbc2VsZWN0ZWRdJykpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5jbGFzc2VzLm9wdGlvbn1gKS5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZGlzYWJsZSBzZWxlY3RcbiAgICBkaXNhYmxlU2VsZWN0KHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgICAgICAgdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMudGl0bGUpLnR3aW5TZWwuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLnRpdGxlKS50d2luU2VsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtYWluIGFjdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIHNldCBtYWluIGFjdGlvbnNcbiAgICBzZXRBY3Rpb25zKGUpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBlLnR5cGU7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMuc2VsKSkgfHxcbiAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IHRhcmdldC5jbG9zZXN0KCcuc2VsZWN0JylcbiAgICAgICAgICAgICAgICA/IHRhcmdldC5jbG9zZXN0KCcuc2VsZWN0JylcbiAgICAgICAgICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgYC4ke3RoaXMuY2xhc3Nlcy5zZWx9W2RhdGEtc2VsLWlkPVwiJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMubGlzdCkpLmRhdGFzZXQuc2VsZWN0SWRcbiAgICAgICAgICAgICAgICAgICAgICB9XCJdYFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0KS5yZWxhdGl2ZVNlbDtcblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlbGF0aXZlU2VsLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5saXN0KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbExpc3QgPSB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5saXN0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAuJHt0aGlzLmNsYXNzZXMuc2VsfVtkYXRhLXNlbC1pZD1cIiR7c2VsTGlzdC5kYXRhc2V0LnNlbElkfVwiXSAuc2VsZWN0X19vcHRpb25bZGF0YS1vcHQtdmFsPVwiJHtzZWxMaXN0LmRhdGFzZXQub3B0VmFsfVwiXWBcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE9wdGlvbkFjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsLCBzZWxPcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnRpdGxlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9uKHNlbGVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3B0aW9uKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbE9wdGlvbiA9IHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wdGlvbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25BY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCwgc2VsT3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2ZvY3VzaW4nIHx8IHR5cGUgPT09ICdmb2N1c291dCcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMuc2VsKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdmb2N1c2luJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmZvY3VzZWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmZvY3VzZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5maWxsZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2tleWRvd24nICYmIGUuY29kZSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlR3JvdXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VHcm91cCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHNldCBzaW5nbGUgc2VsZWN0IGFjdGlvblxuICAgIHNldEFjdGlvbihzZWxlY3QpIHtcbiAgICAgICAgY29uc3QgcmVsYXRpdmVTZWwgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QpLnJlbGF0aXZlU2VsO1xuICAgICAgICBjb25zdCBzZWxPcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykudHdpblNlbDtcblxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuY2xvc2VzdCgnW2RhdGEtb25lLXNlbGVjdF0nKSkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0T25lR3JvdXAgPSByZWxhdGl2ZVNlbC5jbG9zZXN0KCdbZGF0YS1vbmUtc2VsZWN0XScpO1xuICAgICAgICAgICAgdGhpcy5jbG9zZUdyb3VwKHNlbGVjdE9uZUdyb3VwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2VsT3B0aW9ucy5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmNsYXNzZXMub3BlbmVkKTtcbiAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkICE9PSAnMCcpIHtcbiAgICAgICAgICAgICAgICBfc2xpZGVUb2dnbGUoc2VsT3B0aW9ucywgcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMub3BlbmVkKSAmJlxuICAgICAgICAgICAgICAgIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZScpICYmXG4gICAgICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuZXJyb3IpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBjbG9zZSBzaW5nbGUgc2VsZWN0IGdyb3VwXG4gICAgY2xvc2VHcm91cChncm91cCkge1xuICAgICAgICBjb25zdCBzZWxHcm91cCA9IGdyb3VwID8gZ3JvdXAgOiBkb2N1bWVudDtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IHNlbEdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICBgJHt0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5zZWwpfSR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3BlbmVkKX1gXG4gICAgICAgICk7XG4gICAgICAgIGlmIChzZWxlY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgc2VsZWN0aW9ucy5mb3JFYWNoKChzZWxlY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlSXRlbShzZWxlY3Rpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gY2xvc2Ugc2luZ2xlIHNlbGVjdCBpdGVtXG4gICAgY2xvc2VJdGVtKHNlbGVjdCkge1xuICAgICAgICBjb25zdCByZWxhdGl2ZVNlbCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCkucmVsYXRpdmVTZWw7XG4gICAgICAgIGNvbnN0IHNlbE9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS50d2luU2VsO1xuXG4gICAgICAgIGlmICghc2VsT3B0aW9ucy5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMub3BlbmVkKTtcbiAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkICE9PSAnMCcpIHtcbiAgICAgICAgICAgICAgICBfc2xpZGVVcChzZWxPcHRpb25zLCByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzZXQgc2luZ2xlIG9wdGlvbiBhY3Rpb25zXG4gICAgc2V0T3B0aW9uQWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwsIG9wdGlvbikge1xuICAgICAgICBpZiAocmVsYXRpdmVTZWwubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCk7XG4gICAgICAgICAgICBjb25zdCByZWxhdGl2ZVNlbGVjdGlvbnMgPSB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpLmVsZW1lbnRzO1xuXG4gICAgICAgICAgICByZWxhdGl2ZVNlbGVjdGlvbnMuZm9yRWFjaCgocmVsYXRpdmVTZWxlY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbGVjdGlvbi5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgdHdpblNlbGVjdGlvbnMgPSBzZWxlY3QucXVlcnlTZWxlY3RvckFsbCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCkpO1xuICAgICAgICAgICAgdHdpblNlbGVjdGlvbnMuZm9yRWFjaCgodHdpblNlbGVjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHJlbGF0aXZlU2VsXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBvcHRpb25bdmFsdWU9XCIke3R3aW5TZWxlY3Rpb24uZGF0YXNldC5vcHRWYWx9XCJdYClcbiAgICAgICAgICAgICAgICAgICAgLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFvcHRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZWxhdGl2ZVNlbC5xdWVyeVNlbGVjdG9yKGBvcHRpb25bdmFsdWU9XCIke29wdGlvbi5kYXRhc2V0Lm9wdFZhbH1cIl1gKSk7XG4gICAgICAgICAgICAgICAgcmVsYXRpdmVTZWxcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7b3B0aW9uLmRhdGFzZXQub3B0VmFsfVwiXWApXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdF9fb3B0aW9uJylcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgob3B0KSA9PiBvcHQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpKTtcbiAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCk7XG4gICAgICAgICAgICBpZiAoIXJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zaG93LXNlbGVjdGlvbicpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdC5xdWVyeVNlbGVjdG9yKGAke3RoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wdGlvbil9W2hpZGRlbl1gKSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3QucXVlcnlTZWxlY3RvcihgJHt0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcHRpb24pfVtoaWRkZW5dYCkuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9wdGlvbi5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsYXRpdmVTZWwudmFsdWUgPSBvcHRpb24uaGFzQXR0cmlidXRlKCdkYXRhLW9wdC12YWwnKVxuICAgICAgICAgICAgICAgID8gb3B0aW9uLmRhdGFzZXQub3B0VmFsXG4gICAgICAgICAgICAgICAgOiBvcHRpb24udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB0aGlzLnNldEFjdGlvbihzZWxlY3QpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XG4gICAgICAgIHRoaXMuc2V0U2VsZWN0aW9ucyhyZWxhdGl2ZVNlbCk7XG4gICAgfVxuICAgIC8vIHNldCBzZWFyY2ggYWN0aW9uc1xuICAgIHNldFNlYXJjaEFjdGlvbnMoc2VsZWN0KSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgY29uc3Qgc2VsSW5wdXQgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5pbnApLnR3aW5TZWw7XG4gICAgICAgIGNvbnN0IHNlbE9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS50d2luU2VsLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICBgLiR7dGhpcy5jbGFzc2VzLm9wdGlvbn1gXG4gICAgICAgICk7XG5cbiAgICAgICAgc2VsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxPcHRpb25zLmZvckVhY2goKHNlbE9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWxPcHRpb24udGV4dENvbnRlbnQudG9VcHBlckNhc2UoKS5pbmRleE9mKHNlbElucHV0LnZhbHVlLnRvVXBwZXJDYXNlKCkpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsT3B0aW9uLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbE9wdGlvbi5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsT3B0aW9ucy5oaWRkZW4gPT09IHRydWUgPyBfdGhpcy5zZXRBY3Rpb24oc2VsZWN0KSA6IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBzZXQgc2VsZWN0IHN1YnRpdGxlXG4gICAgc2V0U3VidGl0bGUocmVsYXRpdmVTZWwpIHt9XG5cbiAgICAvLyB2YWxpZGF0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIGFkZCBhbiBlcnJvciB0byBhIHNlbGVjdFxuICAgIGFkZEVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KSB7XG4gICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5lcnJvcik7XG5cbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsRXJyb3IgJiYgIXJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSGludCkge1xuICAgICAgICAgICAgcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICAgICAgICAgJ2JlZm9yZWVuZCcsXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJzZWxlY3RfX2hpbnRcIj4ke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsRXJyb3J9PC9kaXY+YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyByZW1vdmUgYW4gZXJyb3IgZnJvbSBhIHNlbGVjdFxuICAgIHJlbW92ZUVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KSB7XG4gICAgICAgIGlmIChzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5lcnJvcikpIHtcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdF9faGludCcpICYmICFyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnQpIHtcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19oaW50JykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdXRpbHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyBnZXQgY3VzdG9tIGNsYXNzXG4gICAgZ2V0Q2xhc3MoY3NzQ2xhc3MpIHtcbiAgICAgICAgcmV0dXJuIGAuJHtjc3NDbGFzc31gO1xuICAgIH1cbiAgICAvLyBnZXQgc2luZ2xlIHNlbGVjdCBpdGVtXG4gICAgZ2V0U2VsZWN0KHNlbGVjdCwgY3NzQ2xhc3MpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsOiBzZWxlY3QucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksXG4gICAgICAgICAgICB0d2luU2VsOiBzZWxlY3QucXVlcnlTZWxlY3Rvcih0aGlzLmdldENsYXNzKGNzc0NsYXNzKSlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gZ2V0IHNlbGVjdGVkIGl0ZW0gdmFsdWVcbiAgICBnZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XG4gICAgICAgIGxldCBhdHRyLFxuICAgICAgICAgICAgYXR0ckNsYXNzLFxuICAgICAgICAgICAgdGl0bGVWYWwgPSB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwsIDIpLmh0bWw7XG5cbiAgICAgICAgLy8gc2V0IHRpdGxlIHZhbHVlXG4gICAgICAgIHRpdGxlVmFsID0gdGl0bGVWYWwubGVuZ3RoXG4gICAgICAgICAgICA/IHRpdGxlVmFsXG4gICAgICAgICAgICA6IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsTGFiZWxcbiAgICAgICAgICAgID8gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxMYWJlbFxuICAgICAgICAgICAgOiAnJztcblxuICAgICAgICAvLyBzZXQgYWN0aXZlIGNsYXNzIHRvIHNlbGVjdCBpZiBpdCBjb250YWlucyBhbnkgdmFsdWVzXG4gICAgICAgIGlmICh0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpLnZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXQgc2VsZWN0IGxhYmVsXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLWxhYmVsJykpIHtcbiAgICAgICAgICAgIGF0dHIgPSByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbExhYmVsXG4gICAgICAgICAgICAgICAgPyBgIGRhdGEtc2VsLWxhYmVsPVwiJHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbExhYmVsfVwiYFxuICAgICAgICAgICAgICAgIDogYCBkYXRhLXNlbC1sYWJlbD1cItCS0YvQsdC+0YBcImA7XG4gICAgICAgICAgICBhdHRyQ2xhc3MgPSBgICR7dGhpcy5jbGFzc2VzLmxhYmVsfWA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwdXNoIHNlbGVjdGlvbnMgdG8gdGhlIGxpc3QgaW5zaWRlIG9mIHNlbGVjdCB0aXRsZVxuICAgICAgICBpZiAocmVsYXRpdmVTZWwubXVsdGlwbGUgJiYgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1saXN0JykpIHtcbiAgICAgICAgICAgIHRpdGxlVmFsID0gdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKVxuICAgICAgICAgICAgICAgIC5lbGVtZW50cy5tYXAoXG4gICAgICAgICAgICAgICAgICAgIChvcHRpb24pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBgPHNwYW4gZGF0YS1vcHQtaWQ9XCIke3NlbGVjdC5kYXRhc2V0LnNlbElkfVwiIGRhdGEtb3B0LXZhbD1cIiR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCIgY2xhc3M9XCJfbGlzdC1pdGVtXCI+JHt0aGlzLmdldENvbnRlbnQob3B0aW9uKX08L3NwYW4+YFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuam9pbignJyk7XG5cbiAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0Lmxpc3QgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWxhdGl2ZVNlbC5kYXRhc2V0Lmxpc3QpKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWxhdGl2ZVNlbC5kYXRhc2V0Lmxpc3QpLmlubmVySFRNTCA9IHRpdGxlVmFsO1xuICAgICAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNlYXJjaCcpKSB0aXRsZVZhbCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaW5pdCBzZWxlY3Qgc2VhcmNoXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNlYXJjaCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy50aXRsZX1cIj48c3BhbiAke2F0dHJ9IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMudmFsfVwiPjxpbnB1dCBhdXRvY29tcGxldGU9XCJvZmZcIiB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCIke3RpdGxlVmFsfVwiIGRhdGEtcGxhY2Vob2xkZXI9XCIke3RpdGxlVmFsfVwiIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuaW5wfVwiPjwvc3Bhbj48L2Rpdj5gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tQ2xhc3MgPVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHMubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS5lbGVtZW50c1swXS5kYXRhc2V0Lm9wdENsYXNzXG4gICAgICAgICAgICAgICAgICAgID8gYCAke3RoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHNbMF0uZGF0YXNldC5vcHRDbGFzc31gXG4gICAgICAgICAgICAgICAgICAgIDogJyc7XG4gICAgICAgICAgICByZXR1cm4gYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMudGl0bGV9XCI+PHNwYW4gJHthdHRyID8gYXR0ciA6ICcnfSBjbGFzcz1cIiR7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzLnZhbFxuICAgICAgICAgICAgfSAke2F0dHJDbGFzcyA/IGF0dHJDbGFzcyA6ICcnfVwiPjxzcGFuIGNsYXNzPVwiJHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzZXMuY29udGVudFxuICAgICAgICAgICAgfSR7Y3VzdG9tQ2xhc3N9XCI+JHt0aXRsZVZhbH08L3NwYW4+PC9zcGFuPjwvYnV0dG9uPmA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZ2V0IG9wdGlvbnNcbiAgICBnZXRPcHRpb25zKHJlbGF0aXZlU2VsKSB7XG4gICAgICAgIGNvbnN0IHNlbFNjcm9sbCA9IHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtc2Nyb2xsJykgPyBgZGF0YS1zaW1wbGViYXJgIDogJyc7XG4gICAgICAgIGxldCBzZWxTY3JvbGxIZWlnaHQgPSByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbFNjcm9sbFxuICAgICAgICAgICAgPyBgc3R5bGU9XCJtYXgtaGVpZ2h0OiR7d2luZG93LmlubmVyV2lkdGggPiA3NjggPyByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbFNjcm9sbCA6IDIyfXJlbVwiYFxuICAgICAgICAgICAgOiAnJztcbiAgICAgICAgbGV0IHNlbE9wdGlvbnMgPSBBcnJheS5mcm9tKHJlbGF0aXZlU2VsLm9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChzZWxPcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHNlbE9wdGlvbnNIVE1MID0gYGA7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAodGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkgJiYgIXRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLnNob3cpIHx8XG4gICAgICAgICAgICAgICAgcmVsYXRpdmVTZWwubXVsdGlwbGVcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHNlbE9wdGlvbnMgPSBzZWxPcHRpb25zLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsT3B0aW9uc0hUTUwgKz0gc2VsU2Nyb2xsXG4gICAgICAgICAgICAgICAgPyBgPGRpdiAke3NlbFNjcm9sbH0gJHtzZWxTY3JvbGxIZWlnaHR9IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuc2Nyb2xsfVwiPmBcbiAgICAgICAgICAgICAgICA6ICcnO1xuICAgICAgICAgICAgc2VsT3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzZWxPcHRpb25zSFRNTCArPSB0aGlzLmdldE9wdGlvbihvcHRpb24sIHJlbGF0aXZlU2VsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsT3B0aW9uc0hUTUwgKz0gc2VsU2Nyb2xsID8gYDwvZGl2PmAgOiAnJztcbiAgICAgICAgICAgIHJldHVybiBzZWxPcHRpb25zSFRNTDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBnZXQgb3B0aW9uXG4gICAgZ2V0T3B0aW9uKG9wdGlvbiwgcmVsYXRpdmVTZWwpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IG9wdGlvbi5zZWxlY3RlZCAmJiByZWxhdGl2ZVNlbC5tdWx0aXBsZSA/IGAgJHt0aGlzLmNsYXNzZXMuc2VsZWN0ZWR9YCA6ICcnO1xuICAgICAgICBjb25zdCBzaG93U2VsZWN0aW9uID1cbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCAmJiAhcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNob3ctc2VsZWN0aW9uJykgJiYgIXJlbGF0aXZlU2VsLm11bHRpcGxlXG4gICAgICAgICAgICAgICAgPyBgaGlkZGVuYFxuICAgICAgICAgICAgICAgIDogYGA7XG4gICAgICAgIGNvbnN0IG9wdGlvbkNsYXNzID0gb3B0aW9uLmRhdGFzZXQub3B0Q2xhc3MgPyBgICR7b3B0aW9uLmRhdGFzZXQub3B0Q2xhc3N9YCA6ICcnO1xuICAgICAgICBjb25zdCBvcHRpb25MaW5rID0gb3B0aW9uLmRhdGFzZXQub3B0aW9uTGluayA/IG9wdGlvbi5kYXRhc2V0Lm9wdGlvbkxpbmsgOiBmYWxzZTtcbiAgICAgICAgY29uc3Qgb3B0aW9uTGlua1RhcmdldCA9IG9wdGlvbi5oYXNBdHRyaWJ1dGUoJ2RhdGEtb3B0aW9uLWxpbmstdGFyZ2V0JykgPyBgdGFyZ2V0PVwiX2JsYW5rXCJgIDogJyc7XG4gICAgICAgIGxldCBvcHRpb25IVE1MID0gYGA7XG5cbiAgICAgICAgb3B0aW9uSFRNTCArPSBvcHRpb25MaW5rXG4gICAgICAgICAgICA/IGA8YSAke29wdGlvbkxpbmtUYXJnZXR9ICR7c2hvd1NlbGVjdGlvbn0gaHJlZj1cIiR7b3B0aW9uTGlua31cIiBkYXRhLW9wdC12YWw9XCIke29wdGlvbi52YWx1ZX1cIiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLm9wdGlvbn0ke29wdGlvbkNsYXNzfSR7c2VsZWN0aW9uc31cIj5gXG4gICAgICAgICAgICA6IGA8YnV0dG9uICR7c2hvd1NlbGVjdGlvbn0gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5vcHRpb259JHtvcHRpb25DbGFzc30ke3NlbGVjdGlvbnN9XCIgZGF0YS1vcHQtdmFsPVwiJHtvcHRpb24udmFsdWV9XCIgdHlwZT1cImJ1dHRvblwiPmA7XG4gICAgICAgIG9wdGlvbkhUTUwgKz0gdGhpcy5nZXRDb250ZW50KG9wdGlvbik7XG4gICAgICAgIG9wdGlvbkhUTUwgKz0gb3B0aW9uTGluayA/IGA8L2E+YCA6IGA8L2J1dHRvbj5gO1xuICAgICAgICByZXR1cm4gb3B0aW9uSFRNTDtcbiAgICB9XG4gICAgLy8gZ2V0IHNlbGVjdCBjb250ZW50XG4gICAgZ2V0Q29udGVudChvcHRpb24pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uRGF0YSA9IG9wdGlvbi5kYXRhc2V0Lm9wdEFzc2V0ID8gYCR7b3B0aW9uLmRhdGFzZXQub3B0QXNzZXR9YCA6ICcnO1xuICAgICAgICBjb25zdCBvcHRpb25EYXRhSFRNTCA9XG4gICAgICAgICAgICBvcHRpb25EYXRhLmluZGV4T2YoJ2ltZycpID49IDAgPyBgPGltZyBzcmM9XCIke29wdGlvbkRhdGF9XCIgYWx0PVwiXCI+YCA6IG9wdGlvbkRhdGE7XG4gICAgICAgIGxldCBvcHRpb25Db250ZW50SFRNTCA9IGBgO1xuXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5ncm91cH1cIj5gIDogJyc7XG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5hc3NldH1cIj5gIDogJyc7XG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBvcHRpb25EYXRhSFRNTCA6ICcnO1xuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDwvc3Bhbj5gIDogJyc7XG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy50eHR9XCI+YCA6ICcnO1xuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb24udGV4dENvbnRlbnQ7XG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPC9zcGFuPmAgOiAnJztcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8L3NwYW4+YCA6ICcnO1xuICAgICAgICByZXR1cm4gb3B0aW9uQ29udGVudEhUTUw7XG4gICAgfVxuICAgIC8vIGdldCBzZWxlY3QgcGxhY2Vob2xkZXJcbiAgICBnZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkge1xuICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IEFycmF5LmZyb20ocmVsYXRpdmVTZWwub3B0aW9ucykuZmluZCgob3B0aW9uKSA9PiAhb3B0aW9uLnZhbHVlKTtcblxuICAgICAgICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnN1YnRpdGxlKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHBsYWNlaG9sZGVyLnRleHRDb250ZW50LFxuICAgICAgICAgICAgICAgIHNob3c6IHBsYWNlaG9sZGVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtcGgtc2hvdycpLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHBsYWNlaG9sZGVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtcGgnKSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcGxhY2Vob2xkZXIuZGF0YXNldC5vcHRQbGFjZWhvbGRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZ2V0IHNlbGVjdGVkIG9wdGlvbnMgZGF0YVxuICAgIGdldERhdGEocmVsYXRpdmVTZWwpIHtcbiAgICAgICAgbGV0IHNlbGVjdGlvbnMgPSBbXTtcblxuICAgICAgICBpZiAocmVsYXRpdmVTZWwubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbnMgPSBBcnJheS5mcm9tKHJlbGF0aXZlU2VsLm9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpXG4gICAgICAgICAgICAgICAgLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24uc2VsZWN0ZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0aW9ucy5wdXNoKHJlbGF0aXZlU2VsLm9wdGlvbnNbcmVsYXRpdmVTZWwuc2VsZWN0ZWRJbmRleF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50czogc2VsZWN0aW9ucy5tYXAoKG9wdGlvbikgPT4gb3B0aW9uKSxcbiAgICAgICAgICAgIHZhbHVlczogc2VsZWN0aW9ucy5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlKS5tYXAoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlKSxcbiAgICAgICAgICAgIGh0bWw6IHNlbGVjdGlvbnMubWFwKChvcHRpb24pID0+IHRoaXMuZ2V0Q29udGVudChvcHRpb24pKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIHNlbGVjdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gaW5pdCBzZWxlY3Rpb25zXG4gICAgaW5pdFNlbGVjdGlvbnMoZSkge1xuICAgICAgICBjb25zdCByZWxhdGl2ZVNlbCA9IGUudGFyZ2V0O1xuXG4gICAgICAgIHRoaXMuYnVpbGQocmVsYXRpdmVTZWwpO1xuICAgICAgICB0aGlzLnNldFNlbGVjdGlvbnMocmVsYXRpdmVTZWwpO1xuICAgIH1cbiAgICAvLyBzZXQgc2VsZWN0aW9uc1xuICAgIHNldFNlbGVjdGlvbnMocmVsYXRpdmVTZWwpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudDtcblxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXN1Ym1pdCcpICYmIHJlbGF0aXZlU2VsLnZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgdGVtcEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgdGVtcEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5jbG9zZXN0KCdmb3JtJykuYXBwZW5kKHRlbXBCdXR0b24pO1xuICAgICAgICAgICAgdGVtcEJ1dHRvbi5jbGljaygpO1xuICAgICAgICAgICAgdGVtcEJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmZpbGxlZCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xuICAgIH1cbiAgICAvLyBjdXN0b20gc2VsZWN0IGV2ZW50IChsaXN0ZW4gdG8gYW55IHNlbGVjdGlvbnMgLyBtdXRhdGlvbnMpXG4gICAgc2VsZWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudCgnc2VsZWN0aW9uJywge1xuICAgICAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3Q6IHJlbGF0aXZlU2VsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG59XG5uZXcgU2VsZWN0KHt9KTtcbiIsIi8qKlxuICogc2V0IGhhc2ggdG8gdXJsXG4gKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICovXG5leHBvcnQgY29uc3Qgc2V0SGFzaCA9IGhhc2ggPT4ge1xuICBoYXNoID0gaGFzaCA/IGAjJHtoYXNofWAgOiB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnIycpWzBdO1xuICBoaXN0b3J5LnB1c2hTdGF0ZSgnJywgJycsIGhhc2gpO1xufTtcblxuLyoqXG4gKiBnZXQgaGFzaCBmcm9tIHVybFxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRIYXNoID0gKCkgPT4ge1xuICBpZiAobG9jYXRpb24uaGFzaCkge1xuICAgIHJldHVybiBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG4gIH1cbn07XG5cbi8vIGJvZHkgbG9ja1xuZXhwb3J0IGxldCBib2R5TG9ja1N0YXR1cyA9IHRydWU7XG4vKipcbiAqIHRvZ2dsZXMgYm9keSBsb2NrXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcbiAqL1xuZXhwb3J0IGNvbnN0IGJvZHlMb2NrVG9nZ2xlID0gKGRlbGF5ID0gNTAwKSA9PiB7XG4gIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2NrJykpIHtcbiAgICBib2R5VW5sb2NrKGRlbGF5KTtcbiAgfSBlbHNlIHtcbiAgICBib2R5TG9jayhkZWxheSk7XG4gIH1cbn07XG4vKipcbiAqIHVubG9ja3MgYm9keVxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5XG4gKi9cbmV4cG9ydCBjb25zdCBib2R5VW5sb2NrID0gKGRlbGF5ID0gNTAwKSA9PiB7XG4gIGlmIChib2R5TG9ja1N0YXR1cykge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKTtcbiAgICB9LCBkZWxheSk7XG4gICAgYm9keUxvY2tTdGF0dXMgPSBmYWxzZTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcbiAgICB9LCBkZWxheSk7XG4gIH1cbn07XG4vKipcbiAqIGxvY2tzIGJvZHlcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheVxuICovXG5leHBvcnQgY29uc3QgYm9keUxvY2sgPSAoZGVsYXkgPSA1MDApID0+IHtcbiAgaWYgKGJvZHlMb2NrU3RhdHVzKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xvY2snKTtcblxuICAgIGJvZHlMb2NrU3RhdHVzID0gZmFsc2U7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBib2R5TG9ja1N0YXR1cyA9IHRydWU7XG4gICAgfSwgZGVsYXkpO1xuICB9XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJheVxuICogQHBhcmFtIHtudW1iZXJ9IGRhdGFTZXRWYWx1ZVxuICogcHJvY2VzcyBtZWRpYSByZXF1ZXN0cyBmcm9tIGF0dHJpYnV0ZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGRhdGFNZWRpYVF1ZXJpZXMgPSAoYXJyYXksIGRhdGFTZXRWYWx1ZSkgPT4ge1xuICAvLyBnZXQgb2JqZWN0cyB3aXRoIG1lZGlhIHF1ZXJpZXNcbiAgY29uc3QgbWVkaWEgPSBBcnJheS5mcm9tKGFycmF5KS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0sIGluZGV4LCBzZWxmKSB7XG4gICAgaWYgKGl0ZW0uZGF0YXNldFtkYXRhU2V0VmFsdWVdKSB7XG4gICAgICByZXR1cm4gaXRlbS5kYXRhc2V0W2RhdGFTZXRWYWx1ZV0uc3BsaXQoJywnKVswXTtcbiAgICB9XG4gIH0pO1xuICAvLyBvYmplY3RzIHdpdGggbWVkaWEgcXVlcmllcyBpbml0aWFsaXphdGlvblxuICBpZiAobWVkaWEubGVuZ3RoKSB7XG4gICAgY29uc3QgYnJlYWtwb2ludHNBcnJheSA9IFtdO1xuICAgIG1lZGlhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb25zdCBwYXJhbXMgPSBpdGVtLmRhdGFzZXRbZGF0YVNldFZhbHVlXTtcbiAgICAgIGNvbnN0IGJyZWFrcG9pbnQgPSB7fTtcbiAgICAgIGNvbnN0IHBhcmFtc0FycmF5ID0gcGFyYW1zLnNwbGl0KCcsJyk7XG4gICAgICBicmVha3BvaW50LnZhbHVlID0gcGFyYW1zQXJyYXlbMF07XG4gICAgICBicmVha3BvaW50LnR5cGUgPSBwYXJhbXNBcnJheVsxXSA/IHBhcmFtc0FycmF5WzFdLnRyaW0oKSA6ICdtYXgnO1xuICAgICAgYnJlYWtwb2ludC5pdGVtID0gaXRlbTtcbiAgICAgIGJyZWFrcG9pbnRzQXJyYXkucHVzaChicmVha3BvaW50KTtcbiAgICB9KTtcbiAgICAvLyBnZXQgdW5pcXVlIGJyZWFrcG9pbnRzXG4gICAgbGV0IG1kUXVlcmllcyA9IGJyZWFrcG9pbnRzQXJyYXkubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAnKCcgK1xuICAgICAgICBpdGVtLnR5cGUgK1xuICAgICAgICAnLXdpZHRoOiAnICtcbiAgICAgICAgaXRlbS52YWx1ZSArXG4gICAgICAgICdweCksJyArXG4gICAgICAgIGl0ZW0udmFsdWUgK1xuICAgICAgICAnLCcgK1xuICAgICAgICBpdGVtLnR5cGVcbiAgICAgICk7XG4gICAgfSk7XG4gICAgbWRRdWVyaWVzID0gdW5pcXVlQXJyYXkobWRRdWVyaWVzKTtcbiAgICBjb25zdCBtZFF1ZXJpZXNBcnJheSA9IFtdO1xuXG4gICAgaWYgKG1kUXVlcmllcy5sZW5ndGgpIHtcbiAgICAgIC8vIHdvcmsgd2l0aCBldmVyeSBicmVha3BvaW50XG4gICAgICBtZFF1ZXJpZXMuZm9yRWFjaChicmVha3BvaW50ID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW1zQXJyYXkgPSBicmVha3BvaW50LnNwbGl0KCcsJyk7XG4gICAgICAgIGNvbnN0IG1lZGlhQnJlYWtwb2ludCA9IHBhcmFtc0FycmF5WzFdO1xuICAgICAgICBjb25zdCBtZWRpYVR5cGUgPSBwYXJhbXNBcnJheVsyXTtcbiAgICAgICAgY29uc3QgbWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKHBhcmFtc0FycmF5WzBdKTtcbiAgICAgICAgLy8gb2JqZWN0cyB3aXRoIGNvbmRpdGlvbnNcbiAgICAgICAgY29uc3QgaXRlbXNBcnJheSA9IGJyZWFrcG9pbnRzQXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPT09IG1lZGlhQnJlYWtwb2ludCAmJiBpdGVtLnR5cGUgPT09IG1lZGlhVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbWRRdWVyaWVzQXJyYXkucHVzaCh7XG4gICAgICAgICAgaXRlbXNBcnJheSxcbiAgICAgICAgICBtYXRjaE1lZGlhLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1kUXVlcmllc0FycmF5O1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBzbW9vdGhseSBzbGlkZXMgdXBcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3dtb3JlXG4gKi9cbmV4cG9ydCBjb25zdCBfc2xpZGVVcCA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwLCBzaG93bW9yZSA9IDApID0+IHtcbiAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdfc2xpZGUnKTtcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2hlaWdodCwgbWFyZ2luLCBwYWRkaW5nJztcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBgJHt0YXJnZXQub2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xuICAgIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBzaG93bW9yZSA/IGAke3Nob3dtb3JlfXJlbWAgOiBgMGA7XG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gMDtcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0YXJnZXQuaGlkZGVuID0gIXNob3dtb3JlID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgIXNob3dtb3JlID8gdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKSA6IG51bGw7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJyk7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJyk7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKTtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpO1xuICAgICAgIXNob3dtb3JlID8gdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpIDogbnVsbDtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnX3NsaWRlJyk7XG4gICAgICAvLyBjcmVhdGUgZXZlbnRcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBDdXN0b21FdmVudCgnc2xpZGVVcERvbmUnLCB7XG4gICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9LCBkdXJhdGlvbik7XG4gIH1cbn07XG5cbi8qKlxuICogc21vb3RobHkgc2xpZGVzIGRvd25cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3dtb3JlXG4gKi9cbmV4cG9ydCBjb25zdCBfc2xpZGVEb3duID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDAsIHNob3dtb3JlID0gMCkgPT4ge1xuICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ19zbGlkZScpO1xuICAgIHRhcmdldC5oaWRkZW4gPSB0YXJnZXQuaGlkZGVuID8gZmFsc2UgOiBudWxsO1xuICAgIHNob3dtb3JlID8gdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKSA6IG51bGw7XG4gICAgbGV0IGhlaWdodCA9IHRhcmdldC5vZmZzZXRIZWlnaHQ7XG4gICAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHNob3dtb3JlID8gYCR7c2hvd21vcmV9cmVtYCA6IGAwYDtcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IDA7XG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xuICAgIHRhcmdldC5vZmZzZXRIZWlnaHQ7XG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdoZWlnaHQsIG1hcmdpbiwgcGFkZGluZyc7XG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJyk7XG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ19zbGlkZScpO1xuICAgICAgLy8gY3JlYXRlIGV2ZW50XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ3NsaWRlRG93bkRvbmUnLCB7XG4gICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9LCBkdXJhdGlvbik7XG4gIH1cbn07XG5cbi8qKlxuICogdG9nZ2xlcyBzbW9vdGggc2xpZGVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXG4gKiBAcmV0dXJucyBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgX3NsaWRlVG9nZ2xlID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDApID0+IHtcbiAgaWYgKHRhcmdldC5oaWRkZW4pIHtcbiAgICByZXR1cm4gX3NsaWRlRG93bih0YXJnZXQsIGR1cmF0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gX3NsaWRlVXAodGFyZ2V0LCBkdXJhdGlvbik7XG4gIH1cbn07XG5cbi8qKlxuICogY29udmVydHMgcmVtIHRvIHBpeGVsc1xuICogQHBhcmFtIHtudW1iZXJ9IHJlbVZhbHVlXG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbVRvUHgocmVtVmFsdWUpIHtcbiAgLy8g0J/QvtC70YPRh9Cw0LXQvCDRgtC10LrRg9GJ0LjQuSDQsdCw0LfQvtCy0YvQuSDRgNCw0LfQvNC10YAg0YjRgNC40YTRgtCwIChmb250LXNpemUpINC40Lcg0Y3Qu9C10LzQtdC90YLQsCA8aHRtbD5cbiAgdmFyIGh0bWxGb250U2l6ZSA9IHBhcnNlRmxvYXQoXG4gICAgZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmZvbnRTaXplXG4gICk7XG5cbiAgLy8g0J/QtdGA0LXQstC+0LTQuNC8INC30L3QsNGH0LXQvdC40LUg0LjQtyByZW0g0LIgcHhcbiAgdmFyIHB4VmFsdWUgPSByZW1WYWx1ZSAqIGh0bWxGb250U2l6ZTtcblxuICAvLyDQntC60YDRg9Cz0LvRj9C10Lwg0LfQvdCw0YfQtdC90LjQtSDQtNC+INGG0LXQu9GL0YUg0L/QuNC60YHQtdC70LXQuSAo0L/QviDQttC10LvQsNC90LjRjilcbiAgcmV0dXJuIE1hdGgucm91bmQocHhWYWx1ZSkgKyAncHgnO1xufVxuXG4vLyByZW1vdmUgY2xhc3MgZnJvbSBhbGwgYXJyYXkgZWxlbWVudHNcbmV4cG9ydCBjb25zdCByZW1vdmVDbGFzc2VzID0gKGFycmF5LCBjbGFzc05hbWUpID0+IHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGFycmF5W2ldLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfVxufTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRXVjbGlkIENpcmN1bGFyIEFcIjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgc3JjOiB1cmwoXCIuL2Fzc2V0cy9mb250cy9FdWNsaWQtQ2lyY3VsYXItQS1MaWdodC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJFdWNsaWQgQ2lyY3VsYXIgQVwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChcIi4vYXNzZXRzL2ZvbnRzL0V1Y2xpZC1DaXJjdWxhci1BLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRXVjbGlkIENpcmN1bGFyIEFcIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiB1cmwoXCIuL2Fzc2V0cy9mb250cy9FdWNsaWQtQ2lyY3VsYXItQS1NZWRpdW0ud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRXVjbGlkIENpcmN1bGFyIEFcIjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgc3JjOiB1cmwoXCIuL2Fzc2V0cy9mb250cy9FdWNsaWQtQ2lyY3VsYXItQS1TZW1pQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJFdWNsaWQgQ2lyY3VsYXIgQVwiO1xuICBmb250LXdlaWdodDogNzAwO1xuICBzcmM6IHVybChcIi4vYXNzZXRzL2ZvbnRzL0V1Y2xpZC1DaXJjdWxhci1BLUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU3BhY2UgQWdlXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKFwiLi9hc3NldHMvZm9udHMvU3BhY2UtQWdlLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNwYWNlIEFnZSBDeXJpbGxpY1wiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChcIi4vYXNzZXRzL2ZvbnRzL1NwYWNlLUFnZS1DeXJpbGxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJFdXJvcGVFeHRlbmRlZENcIjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoXCIuL2Fzc2V0cy9mb250cy9FdXJvcGUtRXh0ZW5kZWQtQy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwge1xuICBmb250LWZhbWlseTogXCJFdWNsaWQgQ2lyY3VsYXIgQVwiO1xuICBmb250LXNpemU6IDAuNTIwODMzNXZ3O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBidWdmaXggaW5maW5pdGUgMXM7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYnVnZml4IGluZmluaXRlIDFzO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxNjUzO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGJ1Z2ZpeCBpbmZpbml0ZSAxcztcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmEge1xuICBjb2xvcjogdW5zZXQ7XG59XG5cbmEsXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5idXR0b24sXG5pbnB1dCxcbmEsXG50ZXh0YXJlYSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udDogaW5oZXJpdDtcbn1cbmJ1dHRvbjpmb2N1cyxcbmlucHV0OmZvY3VzLFxuYTpmb2N1cyxcbnRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmJ1dHRvbjphY3RpdmUsXG5pbnB1dDphY3RpdmUsXG5hOmFjdGl2ZSxcbnRleHRhcmVhOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxucCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250OiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxudWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbnVsIGxpIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDE2MHJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cblxuc3ZnLFxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbmh0bWwubG9jayxcbmh0bWwubG9jayBib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxubWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi53cmFwcGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogMTkyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMi4zcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5oZWFkZXJfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhlYWRlcl9fYnVyZ2VyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oZWFkZXJfX2xvZ28ge1xuICBtYXgtd2lkdGg6IDE3LjhyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUuN3JlbTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaGVhZGVyX19sb2dvIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5oZWFkZXJfX21lbnUtY29udGFjdHMge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhlYWRlcl9fbmF2LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDYuM3JlbTtcbn1cbi5oZWFkZXJfX25hdi1pdGVtLWljb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhlYWRlcl9fbmF2LWl0ZW0tZHJvcGRvd24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhlYWRlcl9fbmF2LWl0ZW0tbGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogM3JlbTtcbiAgdHJhbnNpdGlvbjogMC4zcyBjb2xvciBlYXNlO1xufVxuLmhlYWRlcl9fbmF2LWl0ZW0tbGluazpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjkpO1xufVxuLmhlYWRlcl9fY29udGFjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEuN3JlbTtcbn1cbi5oZWFkZXJfX2NvbnRhY3RzOmhvdmVyIC5oZWFkZXJfX2NvbnRhY3RzLXRpdGxlIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OSk7XG59XG4uaGVhZGVyX19jb250YWN0czpob3ZlciBzdmcgcGF0aCB7XG4gIHN0cm9rZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY5KTtcbn1cbi5oZWFkZXJfX2NvbnRhY3RzLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcbn1cbi5oZWFkZXJfX2NvbnRhY3RzIHN2ZyB7XG4gIG1heC13aWR0aDogMi40cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyLjRyZW07XG59XG4uaGVhZGVyX19jb250YWN0cyBzdmcgcGF0aCB7XG4gIHRyYW5zaXRpb246IDAuM3Mgc3Ryb2tlIGVhc2U7XG59XG4uaGVhZGVyIC5oYW1idXJnZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiA0LjZyZW07XG4gIGhlaWdodDogMy42cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGVhZGVyIC5oYW1idXJnZXIgc3BhbiwgLmhlYWRlciAuaGFtYnVyZ2VyOjpiZWZvcmUsIC5oZWFkZXIgLmhhbWJ1cmdlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRyYW5zaXRpb246IHRvcCAwLjNzIGVhc2UsIHdpZHRoIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm90dG9tIDAuM3MgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbn1cbi5oZWFkZXIgLmhhbWJ1cmdlcjo6YmVmb3JlIHtcbiAgdG9wOiAwO1xufVxuLmhlYWRlciAuaGFtYnVyZ2VyOjphZnRlciB7XG4gIGJvdHRvbTogMDtcbn1cbi5oZWFkZXIgLmhhbWJ1cmdlciBzcGFuIHtcbiAgdG9wOiBjYWxjKDUwJSAtIDFweCk7XG59XG4uX21lbnUtb3BlbmVkIC5oZWFkZXIgLmhhbWJ1cmdlciBzcGFuIHtcbiAgd2lkdGg6IDA7XG59XG4uX21lbnUtb3BlbmVkIC5oZWFkZXIgLmhhbWJ1cmdlcjo6YmVmb3JlIHtcbiAgdG9wOiBjYWxjKDUwJSAtIDFweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4uX21lbnUtb3BlbmVkIC5oZWFkZXIgLmhhbWJ1cmdlcjo6YWZ0ZXIge1xuICBib3R0b206IGNhbGMoNTAlIC0gMXB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLl9tZW51LW9wZW5lZCAuaGVhZGVyIC5oYW1idXJnZXIgc3BhbiwgLl9tZW51LW9wZW5lZCAuaGVhZGVyIC5oYW1idXJnZXI6OmJlZm9yZSwgLl9tZW51LW9wZW5lZCAuaGVhZGVyIC5oYW1idXJnZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmZvb3RlciB7XG4gIHBhZGRpbmctYm90dG9tOiA3LjhyZW07XG59XG4uZm9vdGVyX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mb290ZXJfX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuOHJlbTtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbn1cbi5mb290ZXJfX2xpc3Q6bGFzdC1jaGlsZCAuZm9vdGVyX19pdGVtOmxhc3QtY2hpbGQgYSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uZm9vdGVyX19pdGVtIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcbn1cbi5mb290ZXJfX2l0ZW0gYTpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjkpO1xufVxuLmZvb3Rlcl9fbWlkZGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb290ZXJfX2xvZ28ge1xuICBtYXgtd2lkdGg6IDEwLjlyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEzcmVtO1xuICBtYXJnaW4tYm90dG9tOiA2LjFyZW07XG59XG4uZm9vdGVyX19jb250YWN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMi4ycmVtO1xufVxuLmZvb3Rlcl9fY29udGFjdCBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcbn1cbi5mb290ZXJfX2NvbnRhY3QgYTpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjkpO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogXCJTcGFjZSBBZ2VcIjtcbiAgZm9udC1zaXplOiA5cmVtO1xufVxuXG4uc3VidGl0bGUge1xuICBmb250LWZhbWlseTogXCJTcGFjZSBBZ2VcIjtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4udHh0MzAge1xuICBmb250LXNpemU6IDNyZW07XG59XG5cbi50eHQxNiB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uY3lyIHtcbiAgZm9udC1mYW1pbHk6IFwiU3BhY2UgQWdlIEN5cmlsbGljXCI7XG59XG5cbi5idG4ge1xuICBwYWRkaW5nOiAwLjZyZW0gMC42cmVtIDAuNnJlbSAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAycmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzgpO1xuICBib3JkZXItcmFkaXVzOiAwIDRyZW0gNHJlbSA0cmVtO1xufVxuLmJ0bl9fdGV4dCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uYnRuX19hcnJvdy13cmFwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAwIDAgNHJlbTtcbiAgd2lkdGg6IDQuNHJlbTtcbiAgaGVpZ2h0OiA0LjRyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5idG5fX2Fycm93LWljb24ge1xuICB3aWR0aDogMi40cmVtO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1lbWFpbF0sXG5pbnB1dFt0eXBlPXRlbF0sXG50ZXh0YXJlYSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xufVxuXG50ZXh0YXJlYTpmb2N1cyxcbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA0LjZyZW0gMi43cmVtIDJyZW0gMi43cmVtO1xuICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XG59XG4uaW5wdXRfdGV4dGFyZWEge1xuICBoZWlnaHQ6IDI1LjVyZW07XG59XG4uaW5wdXRfdGV4dGFyZWEgdGV4dGFyZWEge1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHJlc2l6ZTogbm9uZTtcbn1cbi5pbnB1dF9fZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4uaW5wdXRfX2ZpZWxkOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmlucHV0X19sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxLjhyZW07XG4gIGxlZnQ6IDIuN3JlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3BhY2l0eTogMC41O1xufVxuLnNlbGVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWxlY3RfX2JvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VsZWN0X190aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNlbGVjdF9fdmFsdWUge1xuICBwYWRkaW5nOiAxLjNyZW0gMS4zcmVtIDEuM3JlbSAyLjdyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAycmVtO1xuICBoZWlnaHQ6IDcuMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VsZWN0X192YWx1ZSA+ICoge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi5zZWxlY3RfX3ZhbHVlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMCAwIDVyZW07XG4gIHdpZHRoOiA1cmVtO1xuICBoZWlnaHQ6IDVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvaWNvbnMvYXJyLXdoaXRlLnN2Zyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMi40cmVtO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG4uc2VsZWN0X192YWx1ZS5fc2VsZWN0LWxhYmVsOjpiZWZvcmUge1xuICBjb250ZW50OiBhdHRyKGRhdGEtc2VsLWxhYmVsKTtcbn1cbi5fc2VsZWN0LWZpbGxlZCAuc2VsZWN0X192YWx1ZS5fc2VsZWN0LWxhYmVsOjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNlbGVjdF9fdmFsdWUuX3NlbGVjdC1sYWJlbDo6YmVmb3JlLFxuLnNlbGVjdF9fdmFsdWUgLnNlbGVjdF9fY29udGVudCB7XG4gIG1heC13aWR0aDogMzEuNHJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uc2VsZWN0X19jb250ZW50Om5vdCguX3NlbGVjdC1maWxsZWQgLnNlbGVjdF9fY29udGVudCkge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNlbGVjdF9fdGV4dCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLnNlbGVjdF9faW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5zZWxlY3RfX29wdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogY2FsYygxMDAlIC0gM3JlbSk7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDQuNnJlbSAyLjdyZW0gMi40cmVtIDIuN3JlbTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwIDAgM3JlbSAzcmVtO1xuICBiYWNrZ3JvdW5kOiAjMzYzOTZjO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XG59XG4uc2VsZWN0X19zY3JvbGwge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG1heC1oZWlnaHQ6IDE5cmVtO1xufVxuLnNlbGVjdF9fc2Nyb2xsLnNpbXBsZWJhci1zY3JvbGxhYmxlLXkgLnNpbXBsZWJhci10cmFjay5zaW1wbGViYXItdmVydGljYWwge1xuICByaWdodDogMS4ycmVtO1xuICB3aWR0aDogMC40cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU3ZWU7XG59XG4uc2VsZWN0X19zY3JvbGwuc2ltcGxlYmFyLXNjcm9sbGFibGUteSAuc2ltcGxlYmFyLXNjcm9sbGJhciB7XG4gIG1pbi1oZWlnaHQ6IDMuMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTJhZGMxO1xufVxuLnNlbGVjdF9fb3B0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcbn1cbi5zZWxlY3RfX29wdGlvbjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuLnNlbGVjdF9fb3B0aW9uLl9zZWxlY3Qtc2VsZWN0ZWQge1xuICBjb2xvcjogIzI5ZmY3Zjtcbn1cbi5zZWxlY3RfX2dyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG59XG4uc2VsZWN0X19oaW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoMTAwJSArIDAuOHJlbSk7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBsaW5lLWhlaWdodDogMTQyLjg1NyU7XG59XG4uc2VsZWN0X19zdWJ0aXRsZSB7XG4gIGN1cnNvcjogdGV4dDtcbn1cbi5zZWxlY3QuX3NlbGVjdC1vcGVuZWQge1xuICB6LWluZGV4OiA1O1xufVxuLnNlbGVjdC5fc2VsZWN0LW9wZW5lZCAuc2VsZWN0X192YWx1ZTo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbn1cbi5fc2VsZWN0LWxpc3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iYWRnZSB7XG4gIHBhZGRpbmc6IDFyZW0gM3JlbSAxcmVtIDFyZW07XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAyLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xufVxuLmJhZGdlLl9hY3RpdmUge1xuICBjb2xvcjogIzE0MGEzZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5iYWRnZS5fYWN0aXZlIC5iYWRnZV9faWNvbi13cmFwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MjY3ODtcbn1cbi5iYWRnZS5fYWN0aXZlIC5iYWRnZV9faWNvbi13cmFwOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2ljb25zL3N0YXItYWN0aXZlLnN2Zyk7XG59XG4uYmFkZ2VfX2ljb24td3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMCAwIDQuNXJlbTtcbiAgd2lkdGg6IDQuNXJlbTtcbiAgaGVpZ2h0OiA0LjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XG59XG4uYmFkZ2VfX2ljb24td3JhcDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOHJlbTtcbiAgaGVpZ2h0OiA4cmVtO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2ljb25zL3N0YXIuc3ZnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLnNlY3Rpb24taGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAycmVtO1xufVxuLmdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAzLjdyZW07XG59XG4uZ3JvdXBfX3Byb2plY3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxLjhyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ncm91cF9fcHJvamVjdHM6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMnJlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMC4ycmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG4uZ3JvdXBfX2NvdW50ZXIge1xuICBmbGV4OiAwIDAgNS44cmVtO1xuICB3aWR0aDogNS44cmVtO1xuICBoZWlnaHQ6IDUuOHJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMjlmZjdmO1xufVxuLmdyb3VwX19jb3VudGVyIHNwYW4ge1xuICBjb2xvcjogIzFhMWExYTtcbiAgZm9udC1mYW1pbHk6IFwiU3BhY2UgQWdlIEN5cmlsbGljXCI7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMS42cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZ3JvdXBfX3RpdGxlIHtcbiAgbWF4LXdpZHRoOiAyM3JlbTtcbn1cblxuLnR4dC1ncmVlbiB7XG4gIGNvbG9yOiAjMjlmZjdmO1xufVxuXG4uX21vYmlsZS1vbmx5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmludHJvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAtOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTAuNXJlbTtcbiAgcGFkZGluZy10b3A6IDQwcmVtO1xufVxuLmludHJvIC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaW50cm86OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMTAxNjUzIDAlLCByZ2JhKDIzLCAxNSwgNjcsIDApIDYzLjQ1JSk7XG4gIHotaW5kZXg6IC0xO1xuICBpbnNldDogMDtcbiAgYm90dG9tOiAtMC41cmVtO1xufVxuLmludHJvX19jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDExLjdyZW07XG59XG4uaW50cm9fX3RpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICBtYXJnaW4tYm90dG9tOiA1LjNyZW07XG59XG4ucHJvbW8tcGFnZSAuaW50cm9fX3RpdGxlIHtcbiAgbWF4LXdpZHRoOiAxMThyZW07XG59XG4uaW50cm9fX3Bvc3Rlci1pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuLmludHJvX19wb3N0ZXItaW1hZ2VfaGFzLWJhY2tkcm9wOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4uaW50cm9fX3Bvc3Rlci1pbWFnZSBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmludHJvX19yZXF1ZXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAzLjdyZW07XG59XG4uaW50cm9fX2FydGljbGVzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDUxcmVtLCAxZnIpKTtcbiAgZ2FwOiAzLjdyZW07XG4gIG1hcmdpbi10b3A6IDUuOXJlbTtcbn1cbi5pbnRyb19fYXJ0aWNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW50cm9fX2FydGljbGUgYTpob3ZlciB7XG4gIGNvbG9yOiAjMjlmZjdmO1xufVxuLmludHJvX19hcnRpY2xlLWxpbmsge1xuICBwYWRkaW5nOiAxLjFyZW0gNnJlbSAxLjFyZW0gNC4xcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMnJlbTtcbn1cbi5pbnRyb19fYXJ0aWNsZS1saW5rLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbWF4LXdpZHRoOiAxOHJlbTtcbiAgdHJhbnNpdGlvbjogMC4zcyBjb2xvciBlYXNlO1xufVxuLmludHJvX19hcnRpY2xlLWxpbmstaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDIwLjJyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwLjJyZW07XG4gIGZsZXg6IDAgMCAyMC4ycmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uaW50cm9fX2FydGljbGUtbGluay1pbWFnZSBpbWcge1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmludHJvX19hcnRpY2xlLWxpbmstaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxcmVtO1xuICByaWdodDogMS4zcmVtO1xuICBwYWRkaW5nOiAwLjZyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XG4gIG1heC13aWR0aDogNC42cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0LjZyZW07XG59XG4uaW50cm9fX2FydGljbGUtbGluay1pY29uX2hhcy1udW1iZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcbn1cbi5pbnRyb19fYXJ0aWNsZS1saW5rLWljb24gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucHJvbW90aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMzFyZW07XG59XG4ucHJvbW90aW9uX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMCAxLjVyZW0gMCAyLjlyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9tb3Rpb25fX2NvbnRlbnQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIjNcIjtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMC41cmVtO1xuICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiByZ2JhKDQxLCAyNTUsIDEyNywgMC4xKTtcbiAgZm9udC1mYW1pbHk6IFwiU3BhY2UgQWdlIEN5cmlsbGljXCI7XG4gIGZvbnQtc2l6ZTogNzByZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMxMDE2NTM7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0b3A6IC0zNHJlbTtcbiAgei1pbmRleDogLTE7XG59XG4ucHJvbW90aW9uX19ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucHJvbW90aW9uX19ibG9jazpudGgtY2hpbGQoZXZlbikge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG4ucHJvbW90aW9uX19ibG9jazpudGgtY2hpbGQoZXZlbikgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDM0cmVtO1xufVxuLnByb21vdGlvbl9fc3VidGl0bGUge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4ubWFya2V0aW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMjlyZW07XG59XG4ubWFya2V0aW5nX19pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTE1LjJyZW07XG4gIHRvcDogLTEycmVtO1xuICBtYXgtd2lkdGg6IDc0cmVtO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYXJrZXRpbmdfX2NvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1hcmtldGluZ19fdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA0LjhyZW07XG59XG4ubWFya2V0aW5nX19pbmZvIHtcbiAgbWF4LXdpZHRoOiA1MXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAyMXJlbTtcbn1cbi5tYXJrZXRpbmdfX2luZm8tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogNC4xcmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG59XG4ubWFya2V0aW5nX19pbmZvLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1hcmtldGluZ19faW5mby1pdGVtIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYXJrZXRpbmdfX2luZm8taXRlbTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwLjVyZW07XG4gIGhlaWdodDogMC41cmVtO1xuICB0b3A6IDEuNXJlbTtcbiAgbGVmdDogLTJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbi5tYXJrZXRpbmdfX2luZm8tZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBtYXgtd2lkdGg6IDIxLjdyZW07XG59XG5cbi5iZW5lZml0cyB7XG4gIG1hcmdpbi1ib3R0b206IDE3LjdyZW07XG59XG4uYmVuZWZpdHNfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMzcuNHJlbSwgMWZyKSk7XG4gIGdhcDogMy42cmVtO1xufVxuLmJlbmVmaXRzX19hcnRpY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBwYWRkaW5nOiAzLjhyZW0gMi4ycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmJlbmVmaXRzX19hcnRpY2xlLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxLjZyZW07XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5iZW5lZml0c19fYXJ0aWNsZS1oZWFkaW5nLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMjIuNnJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYmVuZWZpdHNfX2FydGljbGUtaGVhZGluZy1jb3VudGVyIHtcbiAgY29sb3I6ICMxMTA3M2I7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuLmJlbmVmaXRzX19hcnRpY2xlLXBvc3RlciB7XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYmFja2dyb3VuZDogIzEwMTY1MztcbiAgaGVpZ2h0OiAyMS45cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG4uYmVuZWZpdHNfX2FydGljbGUtcG9zdGVyLWltYWdlIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbWF4LXdpZHRoOiAyOHJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzByZW07XG59XG4uYmVuZWZpdHNfX2FydGljbGUtcG9zdGVyLWltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uYmVuZWZpdHNfX2FydGljbGUtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xufVxuXG4ucG9ydGZvbGlvIHtcbiAgbWFyZ2luLWJvdHRvbTogMTguNXJlbTtcbn1cbi5wb3J0Zm9saW9fX2hlYWRpbmcge1xuICBtYXJnaW4tYm90dG9tOiA2LjNyZW07XG59XG4ucG9ydGZvbGlvX19saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDc4LjRyZW0sIDFmcikpO1xuICBnYXA6IDMuNnJlbSAzLjNyZW07XG4gIG1hcmdpbi1ib3R0b206IDYuNnJlbTtcbn1cbi5wb3J0Zm9saW9fX2l0ZW0gYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMy4zcmVtO1xuICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIHBhZGRpbmc6IDIuMnJlbTtcbn1cbi5wb3J0Zm9saW9fX2l0ZW0gYTpob3ZlciAucG9ydGZvbGlvX19pdGVtLXRleHQge1xuICBjb2xvcjogIzI5ZmY3Zjtcbn1cbi5wb3J0Zm9saW9fX2l0ZW0gYTpob3ZlciAucG9ydGZvbGlvX19pdGVtLWltYWdlIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi5wb3J0Zm9saW9fX2l0ZW0taW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM2LjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wb3J0Zm9saW9fX2l0ZW0taW1hZ2UgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybSBlYXNlO1xufVxuLnBvcnRmb2xpb19faXRlbS1ib3R0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5wb3J0Zm9saW9fX2l0ZW0tdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcbn1cbi5wb3J0Zm9saW9fX2l0ZW0tdGV4dCBzcGFuIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnBvcnRmb2xpb19faXRlbS1pY29uIHtcbiAgcGFkZGluZzogMC42cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xuICBtYXgtd2lkdGg6IDQuNnJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNC42cmVtO1xufVxuLnBvcnRmb2xpb19faXRlbS1pY29uIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5wb3J0Zm9saW9fX2xpbmsge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG5maWd1cmUge1xuICBtYXJnaW46IDA7XG59XG5cbmJvZHk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC44cyBlYXNlIDBzO1xufVxuLl9tZW51LW9wZW5lZCBib2R5OjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDguMDFlbSkge1xuICAubW9iaWxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xuICAuZm9vdGVyX19saXN0Omxhc3QtY2hpbGQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgfVxuICAudHh0MjUge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiA1cHg7XG4gICAgZm9udC1zaXplOiAxLjU2MjV2dztcbiAgICBmb250LXNpemU6IDEuMzMzMzMzMzMzM3Z3O1xuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcbiAgfVxuICBib2R5IHtcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyLjhyZW07XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAzLjJyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmhlYWRlciB7XG4gICAgcGFkZGluZy10b3A6IDMuNnJlbTtcbiAgfVxuICAuaGVhZGVyX19jb250ZW50IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XG4gICAgZ2FwOiAxNnJlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGdhcCBlYXNlO1xuICB9XG4gIC5fbWVudS1vcGVuZWQgLmhlYWRlcl9fY29udGVudCB7XG4gICAgZ2FwOiAxMS42cmVtO1xuICB9XG4gIC5fbWVudS1vcGVuZWQgLmhlYWRlcl9fY29udGVudDo6YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLmhlYWRlcl9fYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuaGVhZGVyX19sb2dvIHtcbiAgICBtYXgtd2lkdGg6IDI3cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOC42cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIC5oZWFkZXJfX21lbnUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDcuNHJlbSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2U7XG4gICAgYmFja2dyb3VuZDogIzEwMTY1MztcbiAgICBwYWRkaW5nOiAyMS40cmVtIDUuMnJlbSA4LjhyZW0gNy44cmVtO1xuICB9XG4gIC5fbWVudS1vcGVuZWQgLmhlYWRlcl9fbWVudSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgLmhlYWRlcl9fbWVudS1jb250YWN0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XG4gIH1cbiAgLmhlYWRlcl9fbWVudS1jb250YWN0cy1pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjRyZW07XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42Nyk7XG4gICAgZm9udC1zaXplOiAzLjJyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIH1cbiAgLmhlYWRlcl9fbWVudS1jb250YWN0cy1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgYm9yZGVyOiAwLjRyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4KTtcbiAgICBib3JkZXItcmFkaXVzOiAwcmVtIDI0cmVtIDI0cmVtIDI0cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG4gICAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gNHJlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGJvcmRlciBlYXNlO1xuICB9XG4gIC5oZWFkZXJfX21lbnUtY29udGFjdHMtYnV0dG9uOmFjdGl2ZSB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIH1cbiAgLmhlYWRlcl9fbWVudS1jb250YWN0cy1idXR0b246YWN0aXZlIHNwYW4ge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjkpO1xuICB9XG4gIC5oZWFkZXJfX21lbnUtY29udGFjdHMtYnV0dG9uOmFjdGl2ZSAuaGVhZGVyX19tZW51LWNvbnRhY3RzLWJ1dHRvbi1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjkpO1xuICB9XG4gIC5oZWFkZXJfX21lbnUtY29udGFjdHMtYnV0dG9uIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBjb2xvciBlYXNlO1xuICB9XG4gIC5oZWFkZXJfX21lbnUtY29udGFjdHMtYnV0dG9uLWljb24ge1xuICAgIHBhZGRpbmc6IDEuNHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBtYXgtd2lkdGg6IDYuOHJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYuOHJlbTtcbiAgfVxuICAuaGVhZGVyX19tZW51LWNvbnRhY3RzLWJ1dHRvbi1pY29uIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5oZWFkZXJfX25hdiB7XG4gICAgbWF4LWhlaWdodDogMTAxcmVtO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5oZWFkZXJfX25hdi1saXN0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogNy4ycmVtO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS4tLWFjdGl2ZSBhIHtcbiAgICBjb2xvcjogIzI5ZmY3ZjtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS1oZWFkaW5nIHtcbiAgICB3aWR0aDogOTglO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtLWhlYWRpbmcuLS1hY3RpdmUgLmhlYWRlcl9fbmF2LWl0ZW0taWNvbiB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIH1cbiAgLmhlYWRlcl9fbmF2LWl0ZW0taGVhZGluZy4tLWFjdGl2ZSB+IC5oZWFkZXJfX25hdi1pdGVtLWRyb3Bkb3duIHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS1oZWFkaW5nLi0tYWN0aXZlIH4gLmhlYWRlcl9fbmF2LWl0ZW0tZHJvcGRvd24gLmhlYWRlcl9fbmF2LWl0ZW0tZHJvcGRvd24td3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS1oZWFkaW5nIGEge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtLWljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtIGVhc2U7XG4gIH1cbiAgLmhlYWRlcl9fbmF2LWl0ZW0tZHJvcGRvd24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwZnI7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBncmlkLXRlbXBsYXRlLXJvd3MgZWFzZTtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS1kcm9wZG93bi13cmFwcGVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IDAuM3MgbWFyZ2luIGVhc2U7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQuOHJlbTtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS1kcm9wZG93bi1pdGVtIHtcbiAgICBmb250LXNpemU6IDMuMnJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS1kcm9wZG93bi1pdGVtOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtLWxpbmsge1xuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICB9XG4gIC5oZWFkZXJfX2NvbnRhY3RzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgfVxuICAuaGVhZGVyX19jb250YWN0cy10aXRsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaGVhZGVyX19jb250YWN0cyBzdmcge1xuICAgIG1heC13aWR0aDogNC44cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNC44cmVtO1xuICB9XG4gIC5mb290ZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMXJlbTtcbiAgfVxuICAuZm9vdGVyX19jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ2FwOiAwO1xuICB9XG4gIC5mb290ZXJfX2xpc3Qge1xuICAgIGdhcDogM3JlbTtcbiAgfVxuICAuZm9vdGVyX19saXN0Omxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogNXJlbTtcbiAgfVxuICAuZm9vdGVyX19pdGVtIGEge1xuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICB9XG4gIC5mb290ZXJfX21pZGRsZSB7XG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgICBvcmRlcjogLTE7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG4gIC5mb290ZXJfX2xvZ28ge1xuICAgIG1heC13aWR0aDogMjdyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4LjZyZW07XG4gIH1cbiAgLmZvb3Rlcl9fY29udGFjdHMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDZyZW07XG4gIH1cbiAgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cbiAgLnR4dDMwIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cbiAgLnR4dDE2IHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgLmJ0biB7XG4gICAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gNHJlbTtcbiAgICBjb2x1bW4tZ2FwOiAzLjJyZW07XG4gICAgYm9yZGVyOiAwLjRyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4KTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDhyZW0gOHJlbSA4cmVtO1xuICB9XG4gIC5idG5fX2Fycm93LXdyYXAge1xuICAgIGZsZXg6IDAgMCA3cmVtO1xuICAgIHdpZHRoOiA3cmVtO1xuICAgIGhlaWdodDogN3JlbTtcbiAgfVxuICAuYnRuX19hcnJvdy1pY29uIHtcbiAgICB3aWR0aDogMy44cmVtO1xuICB9XG4gIC5pbnB1dCB7XG4gICAgcGFkZGluZzogN3JlbSA4cmVtIDIuNHJlbSAyLjRyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHJlbTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHJlbSk7XG4gIH1cbiAgLmlucHV0X3RleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDM0LjhyZW07XG4gIH1cbiAgLmlucHV0X19sYWJlbCB7XG4gICAgdG9wOiAyLjRyZW07XG4gICAgbGVmdDogMi40cmVtO1xuICB9XG4gIC5zZWxlY3RfX3RpdGxlIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cmVtO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcbiAgfVxuICAuc2VsZWN0X192YWx1ZSB7XG4gICAgcGFkZGluZzogMS42cmVtO1xuICAgIGdhcDogNHJlbTtcbiAgICBoZWlnaHQ6IDEwcmVtO1xuICB9XG4gIC5zZWxlY3RfX3ZhbHVlOjphZnRlciB7XG4gICAgZmxleDogMCAwIDZyZW07XG4gICAgd2lkdGg6IDZyZW07XG4gICAgaGVpZ2h0OiA2cmVtO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMy4ycmVtO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyLjRyZW0pO1xuICB9XG4gIC5zZWxlY3RfX29wdGlvbnMge1xuICAgIHRvcDogY2FsYygxMDAlIC0gNHJlbSk7XG4gICAgcGFkZGluZzogOHJlbSA0cmVtIDRyZW0gNHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNHJlbSA0cmVtO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcbiAgfVxuICAuc2VsZWN0X19vcHRpb246bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbiAgfVxuICAuYmFkZ2Uge1xuICAgIHBhZGRpbmc6IDJyZW0gOHJlbSAycmVtIDJyZW07XG4gICAgY29sdW1uLWdhcDogM3JlbTtcbiAgICBib3JkZXItcmFkaXVzOiA2cmVtO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcbiAgfVxuICAuYmFkZ2VfX2ljb24td3JhcCB7XG4gICAgZmxleDogMCAwIDZyZW07XG4gICAgd2lkdGg6IDZyZW07XG4gICAgaGVpZ2h0OiA2cmVtO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcbiAgfVxuICAuYmFkZ2VfX2ljb24td3JhcDo6YmVmb3JlIHtcbiAgICB3aWR0aDogMTByZW07XG4gICAgaGVpZ2h0OiAxMHJlbTtcbiAgfVxuICAuZ3JvdXAge1xuICAgIGdhcDogNXJlbTtcbiAgfVxuICAuZ3JvdXBfX3Byb2plY3RzOjphZnRlciB7XG4gICAgbGVmdDogLTNyZW07XG4gICAgd2lkdGg6IDAuNHJlbTtcbiAgfVxuICAuZ3JvdXBfX3Byb2plY3RzIHtcbiAgICBnYXA6IDIuNHJlbTtcbiAgfVxuICAuZ3JvdXBfX2NvdW50ZXIge1xuICAgIGZsZXg6IDAgMCA4LjhyZW07XG4gICAgd2lkdGg6IDguOHJlbTtcbiAgICBoZWlnaHQ6IDguOHJlbTtcbiAgfVxuICAuZ3JvdXBfX2NvdW50ZXIgc3BhbiB7XG4gICAgZm9udC1zaXplOiAyLjQ4cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjc3MzVyZW07XG4gICAgbWFyZ2luLXRvcDogMy41cmVtO1xuICB9XG4gIC50eHQtZ3JlZW5fZG8ge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG4gIC5fZGVza3RvcC1vbmx5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5fbW9iaWxlLW9ubHkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5pbnRybyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTUuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogNjhyZW07XG4gIH1cbiAgLmludHJvIHtcbiAgICBtYXJnaW4tdG9wOiAtMTZyZW07XG4gIH1cbiAgLmludHJvOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMxMDE2NTMgMTMlLCByZ2JhKDIzLCAxNSwgNjcsIDApIDc1LjQ1JSk7XG4gIH1cbiAgLmludHJvX190aXRsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDg1JTtcbiAgICBtYXJnaW4tYm90dG9tOiA3LjNyZW07XG4gIH1cbiAgLnByb21vLXBhZ2UgLmludHJvX190aXRsZSB7XG4gICAgbWF4LXdpZHRoOiA2MnJlbTtcbiAgICBmb250LWZhbWlseTogXCJTcGFjZSBBZ2UgQ3lyaWxsaWNcIjtcbiAgfVxuICAuaW50cm9fX3RpdGxlIHNwYW46bm90KC5pbnRyb19fdGl0bGUgc3Bhbi50eHQtZ3JlZW4pIHtcbiAgICBjb2xvcjogIzI5ZmY3ZjtcbiAgfVxuICAuaG9tZS1wYWdlIC5pbnRyb19fcG9zdGVyLWltYWdlIGltZyB7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiAtMTQwcmVtO1xuICB9XG4gIC5pbnRyb19fcmVxdWVzdCB7XG4gICAgZ2FwOiA1cmVtO1xuICB9XG4gIC5pbnRyb19fYXJ0aWNsZXMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgxNS4ycmVtLCAxZnIpKTtcbiAgICBnYXA6IDIuOHJlbTtcbiAgICBtYXJnaW4tdG9wOiAxN3JlbTtcbiAgfVxuICAuaW50cm9fX2FydGljbGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIH1cbiAgLmludHJvX19hcnRpY2xlLWxpbmsge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyLjZyZW07XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDExLjVyZW0gMnJlbSAzcmVtO1xuICB9XG4gIC5pbnRyb19fYXJ0aWNsZS1saW5rLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cbiAgLmludHJvX19hcnRpY2xlLWxpbmstaW1hZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXgtd2lkdGg6IDE2LjJyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNi4ycmVtO1xuICAgIGZsZXg6IDAgMCAxNi4ycmVtO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgLmludHJvX19hcnRpY2xlLWxpbmstaWNvbiB7XG4gICAgbWF4LXdpZHRoOiA2cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNnJlbTtcbiAgfVxuICAuaW50cm9fX2FydGljbGUtbGluay1pY29uIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHBhZGRpbmc6IDAuOHJlbTtcbiAgfVxuICAucHJvbW90aW9uX19jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGdhcDogMXJlbTtcbiAgfVxuICAucHJvbW90aW9uX190aXRsZSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcbiAgfVxuICAucHJvbW90aW9uX19ibG9jayB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIGdhcDogMXJlbTtcbiAgfVxuICAucHJvbW90aW9uX19ibG9jazpsYXN0LWNoaWxkIC5wcm9tb3Rpb25fX3RpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucHJvbW90aW9uX19ibG9jazpudGgtY2hpbGQoZXZlbikge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICB9XG4gIC5wcm9tb3Rpb25fX2Jsb2NrOm50aC1jaGlsZChldmVuKSBzcGFuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cbiAgLnByb21vdGlvbl9fYmxvY2s6bnRoLWNoaWxkKG9kZCkge1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgfVxuICAucHJvbW90aW9uX19ibG9jazpudGgtY2hpbGQob2RkKSAucHJvbW90aW9uX190aXRsZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xuICB9XG4gIC5wcm9tb3Rpb25fX3N1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB9XG4gIC5tYXJrZXRpbmcge1xuICAgIG1hcmdpbi1ib3R0b206IDI1cmVtO1xuICB9XG4gIC5tYXJrZXRpbmdfX2ltYWdlIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIG1heC13aWR0aDogNjhyZW07XG4gIH1cbiAgLm1hcmtldGluZ19fY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAubWFya2V0aW5nX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNC40cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubWFya2V0aW5nX19pbmZvIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgLm1hcmtldGluZ19faW5mby1yb3cge1xuICAgIGdhcDogM3JlbTtcbiAgfVxuICAubWFya2V0aW5nX19pbmZvLWxpc3Qge1xuICAgIGdhcDogMnJlbTtcbiAgfVxuICAubWFya2V0aW5nX19pbmZvLWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB9XG4gIC5tYXJrZXRpbmdfX2luZm8taXRlbTo6YWZ0ZXIge1xuICAgIHRvcDogMC41cmVtO1xuICAgIHdpZHRoOiAxcmVtO1xuICAgIGhlaWdodDogMXJlbTtcbiAgfVxuICAubWFya2V0aW5nX19pbmZvLWRlc2NyaXB0aW9uIHtcbiAgICBtYXgtd2lkdGg6IDMzLjJyZW07XG4gICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgfVxuICAuYmVuZWZpdHMge1xuICAgIG1hcmdpbi1ib3R0b206IDI2cmVtO1xuICB9XG4gIC5iZW5lZml0c19fY29udGVudCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDMyLjhyZW0sIDFmcikpO1xuICAgIGdhcDogMi42cmVtIDIuMnJlbTtcbiAgfVxuICAuYmVuZWZpdHNfX2FydGljbGUge1xuICAgIHBhZGRpbmc6IDMuNHJlbSAycmVtIDJyZW07XG4gIH1cbiAgLmJlbmVmaXRzX19hcnRpY2xlLWhlYWRpbmcge1xuICAgIG1hcmdpbi1ib3R0b206IDMuNHJlbTtcbiAgfVxuICAuYmVuZWZpdHNfX2FydGljbGUtaGVhZGluZy10aXRsZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4gIC5iZW5lZml0c19fYXJ0aWNsZS1oZWFkaW5nLWNvdW50ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmJlbmVmaXRzX19hcnRpY2xlLXBvc3RlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBoZWlnaHQ6IDIwcmVtO1xuICB9XG4gIC5iZW5lZml0c19fYXJ0aWNsZS1wb3N0ZXItaW1hZ2Uge1xuICAgIG1heC13aWR0aDogMjZyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyOHJlbTtcbiAgfVxuICAuYmVuZWZpdHNfX2FydGljbGUtZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbiAgLnBvcnRmb2xpbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjdyZW07XG4gIH1cbiAgLnBvcnRmb2xpb19faGVhZGluZyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogOHJlbTtcbiAgfVxuICAucG9ydGZvbGlvX19saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAzLjJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogNy42cmVtO1xuICB9XG4gIC5wb3J0Zm9saW9fX2l0ZW0gYSB7XG4gICAgZ2FwOiAyLjZyZW07XG4gICAgcGFkZGluZzogMnJlbTtcbiAgfVxuICAucG9ydGZvbGlvX19pdGVtLWltYWdlIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMnJlbTtcbiAgfVxuICAucG9ydGZvbGlvX19pdGVtLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgZ2FwOiAycmVtO1xuICB9XG4gIC5wb3J0Zm9saW9fX2l0ZW0tdGV4dCBzcGFuIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgfVxuICAucG9ydGZvbGlvX19pdGVtLWljb24ge1xuICAgIG1heC13aWR0aDogNnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDZyZW07XG4gIH1cbiAgLnBvcnRmb2xpb19faXRlbS1pY29uIHtcbiAgICBwYWRkaW5nOiAwLjZyZW07XG4gICAgbWF4LXdpZHRoOiA1LjJyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1LjJyZW07XG4gIH1cbiAgLmRlc2t0b3Age1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xuICAuc2VsZWN0X19vcHRpb246aG92ZXI6bm90KC5zZWxlY3RfX29wdGlvbjpob3Zlci5zZWxlY3RfX3N1YnRpdGxlKSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjMjlmZjdmO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc2VjdGlvbnMvaGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zZWN0aW9ucy9mb290ZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3VpL3N0eWxlcy9fdHlwby5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL19idXR0b24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3VpL3N0eWxlcy9faW5wdXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3VpL3N0eWxlcy9fc2VsZWN0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvX2JhZGdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvX3NlY3Rpb24taGVhZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL19ncm91cC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9kZXYvdnptc2sxLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3NlY3Rpb25zL19pbnRyby5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zZWN0aW9ucy9fcHJvbW90aW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3NlY3Rpb25zL19tYXJrZXRpbmcuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc2VjdGlvbnMvYmVuZWZpdHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc2VjdGlvbnMvX3BvcnRmb2xpby5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9kZXYvdWtpazAuc2Nzc1wiLFwiPG5vIHNvdXJjZT5cIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0VBQUE7QUNDSjtBREVBO0VBQ0ksZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLDBF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QTtJQUNBLGFBQUE7RWpCZ3FEZDtFaUJscERNO0lkM0NKLGVja0QyQjtJZGpEM0IsV0FBQTtJQUNBLGFjZ0RpQztFakJncURuQztFaUJocERNO0lBV1EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxTQUFBO0VqQjhwRGQ7RWlCM3BEVTtJQVFRLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RWpCK3BEbEI7RWlCMXBETTtJZHBHSixlQTBDbUI7SUF6Q25CLFdBQUE7SUFDQSxZQXdDeUI7RUh1dUQzQjtFaUI3cURNO0lBSVEsZUFBQTtJZHhHWixpQmN5RzJCO0lkeEczQixXQUFBO0lBQ0EsY2N1R21DO0VqQmdyRHJDO0VrQmx3REU7SUFDSSxhQUFBO0VsQnN5RE47QUE3TUY7QW1COW5EQTtFWDJLZ0I7SUFDSSxlQUFBO0lBQ0EsY1IzSlo7RUEyNkJOO0FBdXNCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdFdWNsaWQgQ2lyY3VsYXIgQSc7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9FdWNsaWQtQ2lyY3VsYXItQS1MaWdodC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRXVjbGlkIENpcmN1bGFyIEEnO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvRXVjbGlkLUNpcmN1bGFyLUEtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRXVjbGlkIENpcmN1bGFyIEEnO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvRXVjbGlkLUNpcmN1bGFyLUEtTWVkaXVtLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdFdWNsaWQgQ2lyY3VsYXIgQSc7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9FdWNsaWQtQ2lyY3VsYXItQS1TZW1pQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRXVjbGlkIENpcmN1bGFyIEEnO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvRXVjbGlkLUNpcmN1bGFyLUEtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU3BhY2UgQWdlJztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL1NwYWNlLUFnZS53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU3BhY2UgQWdlIEN5cmlsbGljJztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL1NwYWNlLUFnZS1DeXJpbGxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRXVyb3BlRXh0ZW5kZWRDJztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0V1cm9wZS1FeHRlbmRlZC1DLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xcbn1cXG5cIixcIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtaXhpbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuQGltcG9ydCAnLi9taXhpbnMnO1xcblxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHZhcmlhYmxlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuLy8gZm9udHNcXG4kc3BhY2VBZ2U6ICdTcGFjZSBBZ2UnO1xcbiRzcGFjZUFnZUN5cjogJ1NwYWNlIEFnZSBDeXJpbGxpYyc7XFxuJEV1cm9wZUU6ICdFdXJvcGVFeHRlbmRlZEMnO1xcbiRFQ0E6ICdFdWNsaWQgQ2lyY3VsYXIgQSc7XFxuXFxuLy8gY29sb3JzXFxuJHdoaXRlOiAjZmZmZmZmO1xcbiR3aGl0ZS1zZWNvbmRhcnk6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OSk7XFxuJGJsYWNrOiAjMDAwMDAwO1xcbiRkYXJrUHVycGxlOiAjMTEwNzNiO1xcbiRkYXJrUHVycGxlMjogIzE0MGEzZjtcXG4kZ3JlZW46ICMyOWZmN2Y7XFxuJGJsdWU6ICMxODI2Nzg7XFxuJGJnQ29sb3I6ICMxMDE2NTM7XFxuXFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmb250cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5cXG4vLyBsb2NhbCBmb250c1xcbkBpbXBvcnQgJy4vZm9udHMnO1xcblxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYmFzZSBzdHlsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuLy8gYmFzZSBzY3NzIGZpbGVcXG5AaW1wb3J0ICcuL3NldCc7XFxuXFxuLy8gaHRtbFxcbmh0bWwubG9jayxcXG5odG1sLmxvY2sgYm9keSB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4vLyBtYWluXFxubWFpbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxleDogMSAxIGF1dG87XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1heC13aWR0aDogMTkyMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuLy8gaGVhZGVyIC8gZm9vdGVyXFxuQGltcG9ydCAnLi9zZWN0aW9ucy9oZWFkZXInO1xcbkBpbXBvcnQgJy4vc2VjdGlvbnMvZm9vdGVyJztcXG5cXG4vLyB1aVxcbkBpbXBvcnQgJy4uL3VpL3N0eWxlcy91aS5zY3NzJztcXG5cXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcblxcbkBpbXBvcnQgJy4vZGV2L3Z6bXNrMS5zY3NzJztcXG5AaW1wb3J0ICcuL2Rldi9tYXJrdXNETS5zY3NzJztcXG5AaW1wb3J0ICcuL2Rldi91a2lrMC5zY3NzJztcXG5AaW1wb3J0ICcuL2Rldi9raWU2ZXIuc2Nzcyc7XFxuXCIsXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogJEVDQTsgLy8g0YjRgNC40YTRgiDQv9C+INGD0LzQvtC70YfQsNC90LjRjiDQv9C+INGB0LDQudGC0YNcXG4gICAgZm9udC1zaXplOiAwLjUyMDgzMzV2dzsgLy8g0L3QsCDRgNCw0LfRgNC10YjQtdC90LjQuCAxOTIwIDAuNTIwODM1dncgPT09IDEwcHhcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYnVnZml4IGluZmluaXRlIDFzO1xcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJ1Z2ZpeCBpbmZpbml0ZSAxcztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBjb2xvcjogJHdoaXRlOyAvLyDRhtCy0LXRgiDQv9C+INGD0LzQvtC70YfQsNC90LjRjiDRgtC10LrRgdGC0LAg0L/QviDRgdCw0LnRgtGDXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ0NvbG9yO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBidWdmaXggaW5maW5pdGUgMXM7XFxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5hIHtcXG4gICAgY29sb3I6IHVuc2V0O1xcbn1cXG5hLFxcbmE6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5hLFxcbnRleHRhcmVhIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICAmOmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIH1cXG4gICAgJjphY3RpdmUge1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxucCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbmltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxudWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbnVsIGxpIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDE2MHJlbTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmlucHV0W3R5cGU9J251bWJlciddOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbmlucHV0W3R5cGU9J251bWJlciddOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmlucHV0W3R5cGU9J251bWJlciddIHtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxufVxcblxcbnN2ZyxcXG5pbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSB7XFxuICAgIGh0bWwge1xcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgIGh0bWwge1xcbiAgICAgICAgZm9udC1zaXplOiA1cHg7XFxuICAgICAgICBmb250LXNpemU6IDEuNTYyNXZ3O1xcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKCgxMDAgLyAzNzUpICogNXZ3KTsgLy8g0LPQtNC1IDM3NSDRjdGC0L4g0YjQuNGA0LjQvdCwINC80L7QsSDQstC10YDRgdC40Lgg0LzQsNC60LXRgtCwXFxuICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgYm9keSB7XFxuICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxuICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDAgMy4ycmVtOyAvLyDQsiDQvNC+0LEg0LLQtdGA0YHQuNC4INC+0YLRgdGC0YPQvyDQvtGCINC60YDQsNGPINC30LDQtNCw0LXQvCDQtNC70Y8g0LLRgdC10YUg0LrQvtC90YLQtdC50L3QtdGA0L7Qsiwg0LAg0YLQsNC8INCz0LTQtSDQvdC1INC90YPQttC90L4g0LzQvtC20LXQvCDRgtC+0YfQtdGH0L3QviDRg9Cx0YDQsNGC0YxcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVxcblwiLFwiLmhlYWRlciB7XFxuICAgIHBhZGRpbmctdG9wOiAyLjNyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTAwO1xcblxcbiAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDMuNnJlbTtcXG4gICAgfVxcblxcbiAgICAmX19jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcXG4gICAgICAgICAgICBnYXA6IDE2cmVtO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgZ2FwIGVhc2U7XFxuXFxuICAgICAgICAgICAgLl9tZW51LW9wZW5lZCAmIHtcXG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBnYXA6IDExLjZyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2J1cmdlciB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19sb2dvIHtcXG4gICAgICAgIEBpbmNsdWRlIHNpemVzKDE3LjhyZW0sIDUuN3JlbSk7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgc2l6ZXMoMjdyZW0sIDguNnJlbSk7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19tZW51IHtcXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNy40cmVtKTtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOlxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMC4zcyBlYXNlLFxcbiAgICAgICAgICAgICAgICBvcGFjaXR5IDAuM3MgZWFzZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmdDb2xvcjtcXG4gICAgICAgICAgICBwYWRkaW5nOiAyMS40cmVtIDUuMnJlbSA4LjhyZW0gNy44cmVtO1xcblxcbiAgICAgICAgICAgIC5fbWVudS1vcGVuZWQgJiB7XFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLWNvbnRhY3RzIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHJlbTtcXG5cXG4gICAgICAgICAgICAgICAgJi1pdGVtIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIuNHJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjcpO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjJyZW07XFxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgJi1idXR0b24ge1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMC40cmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OCk7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcmVtIDI0cmVtIDI0cmVtIDI0cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBnYXA6IDJyZW07XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSA0cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBib3JkZXIgZWFzZTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZS1zZWNvbmRhcnk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtY29udGFjdHMtYnV0dG9uLWljb24ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGUtc2Vjb25kYXJ5O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBjb2xvciBlYXNlO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgJi1pY29uIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjRyZW07XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBzaXplcyg2LjhyZW0sIDYuOHJlbSk7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fbmF2IHtcXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAxcmVtO1xcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1saXN0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiA2LjNyZW07XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgICAgIGdhcDogNy4ycmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtaXRlbSB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgICAgICAgICAgICYuLS1hY3RpdmUge1xcbiAgICAgICAgICAgICAgICAgICAgYSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmVlbjtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLWhlYWRpbmcge1xcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk4JTtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgICAgICAgICAgICAgJi4tLWFjdGl2ZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRlcl9fbmF2LWl0ZW0taWNvbiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICB+IC5oZWFkZXJfX25hdi1pdGVtLWRyb3Bkb3duIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkZXJfX25hdi1pdGVtLWRyb3Bkb3duLXdyYXBwZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIGEge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICYtaWNvbiB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtIGVhc2U7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJi1kcm9wZG93biB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwZnI7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGdyaWQtdGVtcGxhdGUtcm93cyBlYXNlO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICYtd3JhcHBlciB7XFxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBtYXJnaW4gZWFzZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNC44cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICYtaXRlbSB7XFxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLWxpbmsge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcXG5cXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlLXNlY29uZGFyeTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjJyZW07XFxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fY29udGFjdHMge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEuN3JlbTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAuaGVhZGVyX19jb250YWN0cy10aXRsZSB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUtc2Vjb25kYXJ5O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBzdmcge1xcbiAgICAgICAgICAgICAgICBwYXRoIHtcXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJHdoaXRlLXNlY29uZGFyeTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtdGl0bGUge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHN2ZyB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgc2l6ZXMoMi40cmVtLCAyLjRyZW0pO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNpemVzKDQuOHJlbSwgNC44cmVtKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgcGF0aCB7XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3Mgc3Ryb2tlIGVhc2U7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5oYW1idXJnZXIge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgIHdpZHRoOiA0LjZyZW07XFxuICAgICAgICBoZWlnaHQ6IDMuNnJlbTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgIHNwYW4sXFxuICAgICAgICAmOjpiZWZvcmUsXFxuICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgcHNldWRvIHtcXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOlxcbiAgICAgICAgICAgICAgICAgICAgdG9wIDAuM3MgZWFzZSxcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoIDAuM3MgZWFzZSxcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAwLjNzIGVhc2UsXFxuICAgICAgICAgICAgICAgICAgICBib3R0b20gMC4zcyBlYXNlLFxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgIH1cXG4gICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICBib3R0b206IDA7XFxuICAgICAgICB9XFxuICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMXB4KTtcXG4gICAgICAgIH1cXG4gICAgICAgIC5fbWVudS1vcGVuZWQgJiB7XFxuICAgICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMXB4KTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICBib3R0b206IGNhbGMoNTAlIC0gMXB4KTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBzcGFuLFxcbiAgICAgICAgICAgICY6OmJlZm9yZSxcXG4gICAgICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCJAbWl4aW4gcHNldWRvKCkge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBAY29udGVudDtcXG59XFxuXFxuQG1peGluIHNtYWxsLXRhYmxldCB7XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICBAY29udGVudDtcXG4gICAgfVxcbn1cXG5cXG5AbWl4aW4gc2l6ZXMoJHdpZHRoLCAkaGVpZ2h0KSB7XFxuICAgIG1heC13aWR0aDogJHdpZHRoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xcblxcbiAgICBAY29udGVudDtcXG59XFxuXFxuQG1peGluIGl0ZW0tZG90KCkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICY6OmFmdGVyIHtcXG4gICAgICAgIEBpbmNsdWRlIHBzZXVkbyB7XFxuICAgICAgICAgICAgd2lkdGg6IDAuNXJlbTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDAuNXJlbTtcXG4gICAgICAgICAgICB0b3A6IDEuNXJlbTtcXG4gICAgICAgICAgICBsZWZ0OiAtMnJlbTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICB0b3A6IDAuNXJlbTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDFyZW07XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMXJlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgQGNvbnRlbnQ7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuQG1peGluIHJvdGF0ZWQtYXJyb3coKSB7XFxuICAgIHBhZGRpbmc6IDAuNnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcXG4gICAgQGluY2x1ZGUgc2l6ZXMoNC42cmVtLCA0LjZyZW0pO1xcblxcbiAgICBpbWcge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICBAaW5jbHVkZSBzaXplcyg2cmVtLCA2cmVtKTtcXG4gICAgfVxcblxcbiAgICBAY29udGVudDtcXG59XFxuXCIsXCIuZm9vdGVyIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDcuOHJlbTtcXG5cXG4gICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMXJlbTtcXG4gICAgfVxcblxcbiAgICAmX19jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICAgICAgICAgIGdhcDogMDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19saXN0IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAwLjhyZW07XFxuICAgICAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBnYXA6IDNyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmxhc3QtY2hpbGQge1xcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuZm9vdGVyX19pdGVtIHtcXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcXG4gICAgICAgICAgICAgICAgICAgIGEge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9faXRlbSB7XFxuICAgICAgICBhIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGNvbG9yIGVhc2U7XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlLXNlY29uZGFyeTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fbWlkZGxlIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgICAgICAgICAgIG9yZGVyOiAtMTtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fbG9nbyB7XFxuICAgICAgICBAaW5jbHVkZSBzaXplcygxMC45cmVtLCAxM3JlbSk7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA2LjFyZW07XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIHNpemVzKDI3cmVtLCA4LjZyZW0pO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2NvbnRhY3RzIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAyLjJyZW07XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fY29udGFjdCB7XFxuICAgICAgICBhIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcXG5cXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZS1zZWNvbmRhcnk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiLFwiLnRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICRzcGFjZUFnZTtcXG4gICAgZm9udC1zaXplOiA5cmVtO1xcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgZm9udC1zaXplOiA2cmVtO1xcbiAgICB9XFxufVxcblxcbi5zdWJ0aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAkc3BhY2VBZ2U7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgfVxcbn1cXG5cXG4udHh0MjUge1xcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIH1cXG59XFxuXFxuLnR4dDMwIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICB9XFxufVxcblxcbi50eHQxNiB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxufVxcblxcbi5jeXIge1xcbiAgICBmb250LWZhbWlseTogJHNwYWNlQWdlQ3lyO1xcbn1cXG5cIixcIi5idG4ge1xcbiAgICBwYWRkaW5nOiAwLjZyZW0gMC42cmVtIDAuNnJlbSAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiAycmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDRyZW0gNHJlbSA0cmVtO1xcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gNHJlbTtcXG4gICAgICAgIGNvbHVtbi1nYXA6IDMuMnJlbTtcXG4gICAgICAgIGJvcmRlcjogMC40cmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OCk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDhyZW0gOHJlbSA4cmVtO1xcbiAgICB9XFxuXFxuICAgIC8vIC5idG5fX3RleHRcXG5cXG4gICAgJl9fdGV4dCB7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB9XFxuXFxuICAgIC8vIC5idG5fX2Fycm93LXdyYXBcXG5cXG4gICAgJl9fYXJyb3ctd3JhcCB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGZsZXg6IDAgMCA0cmVtO1xcbiAgICAgICAgd2lkdGg6IDQuNHJlbTtcXG4gICAgICAgIGhlaWdodDogNC40cmVtO1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgZmxleDogMCAwIDdyZW07XFxuICAgICAgICAgICAgd2lkdGg6IDdyZW07XFxuICAgICAgICAgICAgaGVpZ2h0OiA3cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5idG5fX2Fycm93LWljb25cXG5cXG4gICAgJl9fYXJyb3ctaWNvbiB7XFxuICAgICAgICB3aWR0aDogMi40cmVtO1xcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgd2lkdGg6IDMuOHJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcImlucHV0W3R5cGU9J3RleHQnXSxcXG5pbnB1dFt0eXBlPSdlbWFpbCddLFxcbmlucHV0W3R5cGU9J3RlbCddLFxcbnRleHRhcmVhIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcbnRleHRhcmVhOmZvY3VzLFxcbmlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmlucHV0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiA0LjZyZW0gMi43cmVtIDJyZW0gMi43cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgICZfdGV4dGFyZWEge1xcbiAgICAgICAgaGVpZ2h0OiAyNS41cmVtO1xcbiAgICAgICAgdGV4dGFyZWEge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgcGFkZGluZzogN3JlbSA4cmVtIDIuNHJlbSAyLjRyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRyZW0pO1xcbiAgICAgICAgJl90ZXh0YXJlYSB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAzNC44cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5pbnB1dF9fZmllbGRcXG5cXG4gICAgJl9fZmllbGQge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLmlucHV0X19sYWJlbFxcblxcbiAgICAmX19sYWJlbCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDEuOHJlbTtcXG4gICAgICAgIGxlZnQ6IDIuN3JlbTtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIHRvcDogMi40cmVtO1xcbiAgICAgICAgICAgIGxlZnQ6IDIuNHJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmLl9mb3JtLWZvY3VzIHtcXG4gICAgfVxcbiAgICAmLl9mb3JtLWVycm9yIHtcXG4gICAgfVxcbn1cXG5cIixcIi5zZWxlY3Qge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIC8vIC5zZWxlY3RfX2JvZHlcXG5cXG4gICAgJl9fYm9keSB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fdGl0bGVcXG5cXG4gICAgJl9fdGl0bGUge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgei1pbmRleDogMztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRyZW07XFxuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRyZW0pO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX3ZhbHVlXFxuXFxuICAgICZfX3ZhbHVlIHtcXG4gICAgICAgIHBhZGRpbmc6IDEuM3JlbSAxLjNyZW0gMS4zcmVtIDIuN3JlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAycmVtO1xcbiAgICAgICAgaGVpZ2h0OiA3LjJyZW07XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgICAgID4gKiB7XFxuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgNXJlbTtcXG4gICAgICAgICAgICB3aWR0aDogNXJlbTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDVyZW07XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2ljb25zL2Fyci13aGl0ZS5zdmcpO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMi40cmVtO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxuICAgICAgICB9XFxuICAgICAgICAmLl9zZWxlY3QtbGFiZWwge1xcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1zZWwtbGFiZWwpO1xcbiAgICAgICAgICAgICAgICAuX3NlbGVjdC1maWxsZWQgJiB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgJi5fc2VsZWN0LWxhYmVsOjpiZWZvcmUsXFxuICAgICAgICAuc2VsZWN0X19jb250ZW50IHtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMxLjRyZW07XFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjZyZW07XFxuICAgICAgICAgICAgZ2FwOiA0cmVtO1xcbiAgICAgICAgICAgIGhlaWdodDogMTByZW07XFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgNnJlbTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDZyZW07XFxuICAgICAgICAgICAgICAgIGhlaWdodDogNnJlbTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzLjJyZW07XFxuICAgICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyLjRyZW0pO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X19jb250ZW50XFxuXFxuICAgICZfX2NvbnRlbnQge1xcbiAgICAgICAgLy8gaGlkZSAvIHNob3cgc2VsZWN0ZWQgdmFsdWVcXG4gICAgICAgICY6bm90KC5fc2VsZWN0LWZpbGxlZCAmKSB7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X190ZXh0XFxuXFxuICAgICZfX3RleHQge1xcbiAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9faW5wdXRcXG5cXG4gICAgJl9faW5wdXQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X19vcHRpb25zXFxuXFxuICAgICZfX29wdGlvbnMge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgIHRvcDogY2FsYygxMDAlIC0gM3JlbSk7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgcGFkZGluZzogNC42cmVtIDIuN3JlbSAyLjRyZW0gMi43cmVtO1xcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDNyZW0gM3JlbTtcXG4gICAgICAgIGJhY2tncm91bmQ6ICMzNjM5NmM7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIHRvcDogY2FsYygxMDAlIC0gNHJlbSk7XFxuICAgICAgICAgICAgcGFkZGluZzogOHJlbSA0cmVtIDRyZW0gNHJlbTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNHJlbSA0cmVtO1xcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X19zY3JvbGxcXG5cXG4gICAgJl9fc2Nyb2xsIHtcXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuXFxuICAgICAgICAvLyBtYXhpbXVtIGhlaWdodFxcbiAgICAgICAgbWF4LWhlaWdodDogMTlyZW07XFxuXFxuICAgICAgICAvLyBzY3JvbGxiYXIgc3R5bGVzXFxuICAgICAgICAmLnNpbXBsZWJhci1zY3JvbGxhYmxlLXkge1xcbiAgICAgICAgICAgIC5zaW1wbGViYXItdHJhY2suc2ltcGxlYmFyLXZlcnRpY2FsIHtcXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEuMnJlbTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAuNHJlbTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2VlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuc2ltcGxlYmFyLXNjcm9sbGJhciB7XFxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMuMnJlbTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTJhZGMxO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X19vcHRpb25cXG4gICAgJl9fb3B0aW9uIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XFxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAmLl9zZWxlY3Qtc2VsZWN0ZWQge1xcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JlZW47XFxuICAgICAgICB9XFxuICAgICAgICBAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgJjpub3QoJi5zZWxlY3RfX3N1YnRpdGxlKSB7XFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyZWVuO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX2dyb3VwXFxuXFxuICAgICZfX2dyb3VwIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fYXNzZXRcXG5cXG4gICAgJl9fYXNzZXQge1xcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX3RleHRcXG5cXG4gICAgJl9fdGV4dCB7XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9faGludFxcblxcbiAgICAmX19oaW50IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogY2FsYygxMDAlICsgMC44cmVtKTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0Mi44NTclO1xcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX3N1YnRpdGxlXFxuXFxuICAgICZfX3N1YnRpdGxlIHtcXG4gICAgICAgIGN1cnNvcjogdGV4dDtcXG4gICAgfVxcblxcbiAgICAvLyBzZWxlY3Qgc3RhdGVcXG4gICAgJi5fc2VsZWN0LW9wZW5lZCB7XFxuICAgICAgICB6LWluZGV4OiA1O1xcbiAgICAgICAgLnNlbGVjdF9fdmFsdWU6OmFmdGVyIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAmLl9zZWxlY3QtZm9jdXNlZCB7XFxuICAgIH1cXG4gICAgJi5fc2VsZWN0LWVycm9yIHtcXG4gICAgICAgICY6bm90KCYuX3NlbGVjdC1maWxsZWQsICYuX3NlbGVjdC1vcGVuZWQpIHtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAmLl9zZWxlY3QtZmlsbGVkIHtcXG4gICAgICAgICY6bm90KCYuX3NlbGVjdC1vcGVuZWQpIHtcXG4gICAgICAgICAgICAmOm5vdCgmLl9zZWxlY3Qtc2hvdy12YWwpIHtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgJi5fc2VsZWN0LXNob3ctdmFsIHtcXG4gICAgICAgICYuX3NlbGVjdC1mb2N1c2VkLFxcbiAgICAgICAgJi5fc2VsZWN0LWZpbGxlZCxcXG4gICAgICAgICYuX3NlbGVjdC1lcnJvcixcXG4gICAgICAgICYuX3NlbGVjdC1kaXNhYmxlZCB7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgJi5fc2VsZWN0LWRpc2FibGVkIHtcXG4gICAgfVxcbiAgICAmLl9zZWxlY3QtbXVsdGlwbGUge1xcbiAgICB9XFxuICAgICYuX3NlbGVjdC1hY3RpdmUge1xcbiAgICB9XFxuICAgICYuX3NlbGVjdC1jaGVja2JveCB7XFxuICAgIH1cXG59XFxuXFxuLy8gbGlzdFxcbi5fc2VsZWN0LWxpc3Qge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLFwiLmJhZGdlIHtcXG4gICAgcGFkZGluZzogMXJlbSAzcmVtIDFyZW0gMXJlbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDIuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgICYuX2FjdGl2ZSB7XFxuICAgICAgICBjb2xvcjogJGRhcmtQdXJwbGUyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgICAgICAgLmJhZGdlX19pY29uLXdyYXAge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc3Rhci1hY3RpdmUuc3ZnKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gOHJlbSAycmVtIDJyZW07XFxuICAgICAgICBjb2x1bW4tZ2FwOiAzcmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnJlbTtcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcXG4gICAgfVxcblxcbiAgICAvLyAuYmFkZ2VfX2ljb24td3JhcFxcblxcbiAgICAmX19pY29uLXdyYXAge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZmxleDogMCAwIDQuNXJlbTtcXG4gICAgICAgIHdpZHRoOiA0LjVyZW07XFxuICAgICAgICBoZWlnaHQ6IDQuNXJlbTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcXG4gICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIHdpZHRoOiA4cmVtO1xcbiAgICAgICAgICAgIGhlaWdodDogOHJlbTtcXG4gICAgICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9pY29ucy9zdGFyLnN2Zyk7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgfVxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgNnJlbTtcXG4gICAgICAgICAgICB3aWR0aDogNnJlbTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDZyZW07XFxuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRyZW0pO1xcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLmJhZGdlX190ZXh0XFxuXFxuICAgICZfX3RleHQge1xcbiAgICB9XFxufVxcblwiLFwiLnNlY3Rpb24taGVhZCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGdhcDogMnJlbTtcXG5cXG5cXHRcXHQvLyAuc2VjdGlvbi1oZWFkX190aXRsZVxcblxcblxcdFxcdCZfX3RpdGxlIHtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0Ly8gLnNlY3Rpb24taGVhZF9fZ3JvdXBcXG5cXG5cXHRcXHQmX19ncm91cCB7XFxuXFx0XFx0fVxcbn1cXG5cXG5cIixcIi5ncm91cCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMy43cmVtO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBnYXA6IDVyZW07XFxuICAgICAgICB9XFxuXFxuXFx0XFx0Ly8gLmdyb3VwX19idXR0b25cXG5cXG5cXHRcXHQmX19idXR0b24ge1xcblxcdFxcdH1cXG5cXG5cXHRcXHQvLyAuZ3JvdXBfX3Byb2plY3RzXFxuXFxuXFx0XFx0Jl9fcHJvamVjdHMge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDEuOHJlbTtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBwc2V1ZG8ge1xcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTJyZW07XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMC4ycmVtO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcblxcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtM3JlbTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMC40cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIGdhcDogMi40cmVtO1xcbiAgICAgICAgICAgIH1cXG5cXHRcXHR9XFxuXFxuXFx0XFx0Ly8gLmdyb3VwX19jb3VudGVyXFxuXFxuXFx0XFx0Jl9fY291bnRlciB7XFxuXFxuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCA1LjhyZW07XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA1LjhyZW07XFxuICAgICAgICAgICAgICAgIGhlaWdodDogNS44cmVtO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRncmVlbjtcXG5cXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCA4LjhyZW07XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOC44cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4LjhyZW07XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFhMWExYTtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkc3BhY2VBZ2VDeXI7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS42cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNDhyZW07XFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuNzczNXJlbTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzLjVyZW07XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG5cXHRcXHR9XFxuXFxuXFx0XFx0Ly8gLmdyb3VwX190aXRsZVxcblxcblxcdFxcdCZfX3RpdGxlIHtcXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyM3JlbTtcXG5cXHRcXHR9XFxufVwiLFwiLnR4dC1ncmVlbiB7XFxuICAgICAgICBjb2xvcjogJGdyZWVuO1xcbiAgICAmX2RvIHtcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKXtcXG4gICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLl9kZXNrdG9wLW9ubHkge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pe1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4gIH1cXG4gLl9tb2JpbGUtb25seSB7XFxuICAgZGlzcGxheTogbm9uZTtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKXtcXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgIH1cXG4gfVwiLFwiLmludHJvIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tdG9wOiAtOHJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAuNXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDQwcmVtO1xcblxcbiAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTUuNXJlbTtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA2OHJlbTtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgIG1hcmdpbi10b3A6IC0xNnJlbTtcXG4gICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzEwMTY1MyAxMyUsIHJnYmEoMjMsIDE1LCA2NywgMCkgNzUuNDUlKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmOjphZnRlciB7XFxuICAgICAgICBAaW5jbHVkZSBwc2V1ZG8ge1xcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzEwMTY1MyAwJSwgcmdiYSgyMywgMTUsIDY3LCAwKSA2My40NSUpO1xcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xcbiAgICAgICAgICAgIGluc2V0OiAwO1xcbiAgICAgICAgICAgIGJvdHRvbTogLTAuNXJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19jb250ZW50IHtcXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTEuN3JlbTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fdGl0bGUge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBsaW5lLWhlaWdodDogMTEwJTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUuM3JlbTtcXG5cXG4gICAgICAgIC5wcm9tby1wYWdlICYge1xcbiAgICAgICAgICAgIG1heC13aWR0aDogMTE4cmVtO1xcblxcbiAgICAgICAgfVxcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAucHJvbW8tcGFnZSAmIHtcXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjJyZW07XFxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXFxcIlNwYWNlIEFnZSBDeXJpbGxpY1xcXCI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgICAgICAmOm5vdCgmLnR4dC1ncmVlbikge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogJGdyZWVuO1xcblxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4NSU7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNy4zcmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX3Bvc3Rlci1pbWFnZSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBpbnNldDogMDtcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcblxcbiAgICAgICAgJl9oYXMtYmFja2Ryb3Age1xcbiAgICAgICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTt3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMCU7dG9wOiAwO2xlZnQ6IDA7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIC5ob21lLXBhZ2UgJiB7XFxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IC0xNDByZW07XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fcmVxdWVzdCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMy43cmVtO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBnYXA6IDVyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLXByb2plY3RzIHtcXG5cXG4gICAgICAgICAgICAmLWNvdW50ZXIge1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLXRpdGxlIHtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fYXJ0aWNsZXMge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCg1MXJlbSwgMWZyKSk7XFxuICAgICAgICBnYXA6IDMuN3JlbTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDUuOXJlbTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDE1LjJyZW0sIDFmcikpO1xcbiAgICAgICAgICAgIGdhcDogMi44cmVtO1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE3cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2FydGljbGUge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICAgIGE6aG92ZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JlZW47XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLWxpbmsge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuMXJlbSA2cmVtIDEuMXJlbSA0LjFyZW07XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBnYXA6IDJyZW07XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgZ2FwOiAyLjZyZW07XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTEuNXJlbSAycmVtIDNyZW07XFxuICAgICAgICAgICAgfVxcblxcblxcbiAgICAgICAgICAgICYtdGl0bGUge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE4cmVtO1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGNvbG9yIGVhc2U7XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJi1pbWFnZSB7XFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNpemVzKDIwLjJyZW0sIDIwLjJyZW0pO1xcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgMjAuMnJlbTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcblxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc2l6ZXMoMTYuMnJlbSwgMTYuMnJlbSk7XFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgMTYuMnJlbTtcXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJi1pY29uIHtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICB0b3A6IDFyZW07XFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxLjNyZW07XFxuXFxuICAgICAgICAgICAgICAgICZfaGFzLW51bWJlciB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgcm90YXRlZC1hcnJvdztcXG5cXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjhyZW07XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCIucHJvbW90aW9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzFyZW07XFxuXFxuICAgICZfX2NvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBwYWRkaW5nOiAwIDEuNXJlbSAwIDIuOXJlbTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgcHNldWRvIHtcXG4gICAgICAgICAgICAgICAgY29udGVudDogJzMnO1xcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwLjVyZW07XFxuICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IHJnYmEoNDEsIDI1NSwgMTI3LCAwLjEpO1xcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHNwYWNlQWdlQ3lyO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDcwcmVtO1xcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYmdDb2xvcjtcXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgICAgICAgICAgICAgIHRvcDogLTM0cmVtO1xcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fdGl0bGUge1xcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2Jsb2NrIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgICAgICAgICAgZ2FwOiAxcmVtO1xcblxcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XFxuICAgICAgICAgICAgICAgIC5wcm9tb3Rpb25fX3RpdGxlIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOm50aC1jaGlsZChldmVuKSB7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzRyZW07XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKG9kZCkge1xcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuXFxuICAgICAgICAgICAgICAgIC5wcm9tb3Rpb25fX3RpdGxlIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXJlbTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19zdWJ0aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiLFwiLm1hcmtldGluZyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI5cmVtO1xcblxcbiAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXR7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXJlbTtcXG4gICAgfVxcblxcbiAgICAmX19pbWFnZSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAtMTUuMnJlbTtcXG4gICAgICAgIHRvcDogLTEycmVtO1xcbiAgICAgICAgbWF4LXdpZHRoOiA3NHJlbTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICAgICAgICAgIG1heC13aWR0aDogNjhyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fY29udGVudCB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX190aXRsZSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0LjhyZW07XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQuNHJlbTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9faW5mbyB7XFxuICAgICAgICBtYXgtd2lkdGg6IDUxcmVtO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMjFyZW07XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtcm93IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgIGdhcDogNC4xcmVtO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIGdhcDogM3JlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLWxpc3Qge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgZ2FwOiAycmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtaXRlbSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIGl0ZW0tZG90O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1kZXNjcmlwdGlvbiB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIxLjdyZW07XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMy4ycmVtO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcIi5iZW5lZml0cyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE3LjdyZW07XFxuXFxuICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNnJlbTtcXG4gICAgfVxcblxcbiAgICAmX19jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMzcuNHJlbSwgMWZyKSk7XFxuICAgICAgICBnYXA6IDMuNnJlbTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDMyLjhyZW0sIDFmcikpO1xcbiAgICAgICAgICAgIGdhcDogMi42cmVtIDIuMnJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19hcnRpY2xlIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICAgICAgICBwYWRkaW5nOiAzLjhyZW0gMi4ycmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDMuNHJlbSAycmVtIDJyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLWhlYWRpbmcge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgZ2FwOiAxLjZyZW07XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMy40cmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLXRpdGxlIHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjIuNnJlbTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJi1jb3VudGVyIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRkYXJrUHVycGxlO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDZyZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG5cXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLXBvc3RlciB7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gICAgICAgICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzEwMTY1MztcXG4gICAgICAgICAgICBoZWlnaHQ6IDIxLjlyZW07XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLWltYWdlIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc2l6ZXMoMjhyZW0sIDMwcmVtKTtcXG5cXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNpemVzKDI2cmVtLCAyOHJlbSk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1kZXNjcmlwdGlvbiB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcIi5wb3J0Zm9saW8ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxOC41cmVtO1xcblxcbiAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjdyZW07XFxuICAgIH1cXG5cXG4gICAgJl9faGVhZGluZyB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA2LjNyZW07XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZ2FwOiA4cmVtO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fbGlzdCB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDc4LjRyZW0sIDFmcikpO1xcbiAgICAgICAgZ2FwOiAzLjZyZW0gMy4zcmVtO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNi42cmVtO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZ2FwOiAzLjJyZW07XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNy42cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2l0ZW0ge1xcbiAgICAgICAgYSB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGdhcDogMy4zcmVtO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDIuMnJlbTtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBnYXA6IDIuNnJlbTtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnJlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIC5wb3J0Zm9saW9fX2l0ZW0tdGV4dCB7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyZWVuO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5wb3J0Zm9saW9fX2l0ZW0taW1hZ2UgaW1nIHtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtaW1hZ2Uge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIHNpemVzKDEwMCUsIDM2LjVyZW0pO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICAgICAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc2l6ZXMoMTAwJSwgMzJyZW0pO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtIGVhc2U7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1ib3R0b20ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtdGV4dCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGNvbG9yIGVhc2U7XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gICAgICAgICAgICAgICAgZ2FwOiAycmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtaWNvbiB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgcm90YXRlZC1hcnJvdztcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXR7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IC42cmVtO1xcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzaXplcyg1LjJyZW0sIDUuMnJlbSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2xpbmsge1xcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIH1cXG59XFxuXCIsXCJAaW1wb3J0ICcuLi9zZWN0aW9ucy9pbnRybyc7XFxuQGltcG9ydCAnLi4vc2VjdGlvbnMvcHJvbW90aW9uJztcXG5AaW1wb3J0ICcuLi9zZWN0aW9ucy9tYXJrZXRpbmcnO1xcbkBpbXBvcnQgJy4uL3NlY3Rpb25zL2JlbmVmaXRzJztcXG5AaW1wb3J0ICcuLi9zZWN0aW9ucy9wb3J0Zm9saW8nO1xcblxcbmZpZ3VyZSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiA5OTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC44cyBlYXNlIDBzO1xcblxcbiAgICAuX21lbnUtb3BlbmVkICYge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNDguMDFlbSkge1xcbiAgICAubW9iaWxlIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgLmRlc2t0b3Age1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cIixudWxsXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvZ3JvdXAtY3NzLW1lZGlhLXF1ZXJpZXMtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9ncm91cC1jc3MtbWVkaWEtcXVlcmllcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vc2Nzcy9zdHlsZS5zY3NzJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmb3JtcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gaW1wb3J0ICogYXMgZm9ybXMgZnJvbSAnLi91dGlscy9mb3Jtcy5qcyc7XG5cbi8vIGZvcm0gZmllbGRzXG4vLyBmb3Jtcy5mb3JtRmllbGRzSW5pdCh7IHZpZXdQYXNzOiBmYWxzZSB9KTtcblxuLy8gZm9ybSBzdWJtaXRcbi8vIGZvcm1zLmZvcm1TdWJtaXQoKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB1dGlscyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy9oYW1idXJnZXJcbmltcG9ydCAnLi91dGlscy9oYW1idXJnZXIuanMnO1xuXG4vLyB0YWJzXG4vLyBpbXBvcnQgJy4vdXRpbHMvdGFicy5qcyc7XG5cbi8vIGFjY29yZGlvblxuLy8gaW1wb3J0ICcuL3V0aWxzL2FjY29yZGlvbi5qcyc7XG5cbi8vIHNlbGVjdFxuaW1wb3J0ICcuL3V0aWxzL3NlbGVjdC5qcyc7XG5cbi8vIG1vZGFsc1xuLy8gaW1wb3J0ICcuL3V0aWxzL21vZGFscy5qcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbGlicyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGR5bmFtaWMgZG9tXG5pbXBvcnQgJy4vbGlicy9kZC5qcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCAnLi9kZXYvdnptc2sxLmpzJztcbmltcG9ydCAnLi9kZXYvbWFya3VzRE0uanMnO1xuaW1wb3J0ICcuL2Rldi91a2lrMC5qcyc7XG5pbXBvcnQgJy4vZGV2L2tpZTZlci5qcyc7XG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJldmVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIkR5bmFtaWNBZGFwdCIsInR5cGUiLCJwcm90b3R5cGUiLCJpbml0IiwiX3RoaXMiLCLQvmJqZWN0cyIsImRhQ2xhc3NuYW1lIiwibm9kZXMiLCJpIiwibGVuZ3RoIiwibm9kZSIsImRhdGEiLCJkYXRhc2V0IiwiZGEiLCJ0cmltIiwiZGF0YUFycmF5Iiwic3BsaXQiLCLQvmJqZWN0IiwiZWxlbWVudCIsInBhcmVudCIsInBhcmVudE5vZGUiLCJkZXN0aW5hdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJicmVha3BvaW50IiwicGxhY2UiLCJpbmRleCIsImluZGV4SW5QYXJlbnQiLCJwdXNoIiwiYXJyYXlTb3J0IiwibWVkaWFRdWVyaWVzIiwiQXJyYXkiLCJtYXAiLCJjYWxsIiwiZmlsdGVyIiwic2VsZiIsImluZGV4T2YiLCJtZWRpYSIsIm1lZGlhU3BsaXQiLCJTdHJpbmciLCJtYXRjaE1lZGlhIiwid2luZG93IiwibWVkaWFCcmVha3BvaW50Iiwi0L5iamVjdHNGaWx0ZXIiLCJhZGRMaXN0ZW5lciIsIm1lZGlhSGFuZGxlciIsIm1hdGNoZXMiLCJtb3ZlVG8iLCJjb250YWlucyIsIm1vdmVCYWNrIiwiYWRkIiwiY2hpbGRyZW4iLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJyZW1vdmUiLCJ1bmRlZmluZWQiLCJhcnJheSIsInNsaWNlIiwiYXJyIiwic29ydCIsImEiLCJiIiwiYm9keUxvY2tTdGF0dXMiLCJib2R5TG9ja1RvZ2dsZSIsIm1lbnVJbml0IiwiaGFtYnVyZ2VyIiwiZSIsImRvY3VtZW50RWxlbWVudCIsIl9zbGlkZVVwIiwiX3NsaWRlRG93biIsIl9zbGlkZVRvZ2dsZSIsIlNlbGVjdCIsImNvbnN0cnVjdG9yIiwiY2xhc3NlcyIsInNlbCIsImJvZHkiLCJsYWJlbCIsInRpdGxlIiwidmFsIiwiY29udGVudCIsIm9wdGlvbnMiLCJvcHRpb24iLCJzY3JvbGwiLCJncm91cCIsImlucCIsImFzc2V0IiwidHh0IiwiaGludCIsImFjdGl2ZSIsImZvY3VzZWQiLCJvcGVuZWQiLCJmaWxsZWQiLCJzZWxlY3RlZCIsImRpc2FibGVkIiwibGlzdCIsImVycm9yIiwibXVsdGlwbGUiLCJjaGVja2JveCIsInNlbGVjdExpc3QiLCJzZWxlY3QiLCJpbml0U2VsSXRlbSIsInNldEFjdGlvbnMiLCJiaW5kIiwicmVsYXRpdmVTZWwiLCJjcmVhdGVFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJoaWRkZW4iLCJzZWxJZCIsImdldFBsYWNlaG9sZGVyIiwib3B0UGxhY2Vob2xkZXIiLCJ2YWx1ZSIsInNob3ciLCJzZWxUaXRsZSIsImdldFNlbGVjdCIsInR3aW5TZWwiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJ0ZXh0Iiwic3BlZWQiLCJidWlsZCIsImluaXRTZWxlY3Rpb25zIiwicGFyZW50RWxlbWVudCIsInNlbE9iaiIsInNldFZhbHVlIiwic2V0T3B0aW9ucyIsInNlbEFkZG9uQ2xhc3MiLCJoYXNBdHRyaWJ1dGUiLCJkaXNhYmxlU2VsZWN0Iiwic2V0U2VhcmNoQWN0aW9ucyIsInNldEFjdGlvbiIsInNlbEhpbnQiLCJjbG9zZXN0IiwiYWRkRXJyIiwicmVtb3ZlRXJyIiwic2VsQm9keSIsImdldFZhbHVlIiwicmVsYXRpdmVTZWxPcHRpb25zIiwiaW5uZXJIVE1MIiwiZ2V0T3B0aW9ucyIsInRhcmdldCIsImdldENsYXNzIiwic2VsZWN0SWQiLCJzZWxMaXN0Iiwic2VsT3B0aW9uIiwib3B0VmFsIiwic2V0T3B0aW9uQWN0aW9uIiwiY29kZSIsImNsb3NlR3JvdXAiLCJzZWxPcHRpb25zIiwic2VsZWN0T25lR3JvdXAiLCJzZWxHcm91cCIsInNlbGVjdGlvbnMiLCJzZWxlY3Rpb24iLCJjbG9zZUl0ZW0iLCJyZWxhdGl2ZVNlbGVjdGlvbnMiLCJnZXREYXRhIiwiZWxlbWVudHMiLCJyZWxhdGl2ZVNlbGVjdGlvbiIsInJlbW92ZUF0dHJpYnV0ZSIsInR3aW5TZWxlY3Rpb25zIiwidHdpblNlbGVjdGlvbiIsInNldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJvcHQiLCJ0ZXh0Q29udGVudCIsInNldFNlbGVjdGlvbnMiLCJzZWxJbnB1dCIsInRvVXBwZXJDYXNlIiwic2V0U3VidGl0bGUiLCJzZWxFcnJvciIsInJlbW92ZUNoaWxkIiwiY3NzQ2xhc3MiLCJhdHRyIiwiYXR0ckNsYXNzIiwidGl0bGVWYWwiLCJodG1sIiwic2VsTGFiZWwiLCJ2YWx1ZXMiLCJnZXRDb250ZW50Iiwiam9pbiIsImN1c3RvbUNsYXNzIiwib3B0Q2xhc3MiLCJzZWxTY3JvbGwiLCJzZWxTY3JvbGxIZWlnaHQiLCJpbm5lcldpZHRoIiwiZnJvbSIsInNlbE9wdGlvbnNIVE1MIiwiZ2V0T3B0aW9uIiwic2hvd1NlbGVjdGlvbiIsIm9wdGlvbkNsYXNzIiwib3B0aW9uTGluayIsIm9wdGlvbkxpbmtUYXJnZXQiLCJvcHRpb25IVE1MIiwib3B0aW9uRGF0YSIsIm9wdEFzc2V0Iiwib3B0aW9uRGF0YUhUTUwiLCJvcHRpb25Db250ZW50SFRNTCIsInBsYWNlaG9sZGVyIiwiZmluZCIsInN1YnRpdGxlIiwic2VsZWN0ZWRJbmRleCIsInRlbXBCdXR0b24iLCJhcHBlbmQiLCJjbGljayIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsInNldEhhc2giLCJoYXNoIiwibG9jYXRpb24iLCJocmVmIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImdldEhhc2giLCJyZXBsYWNlIiwiZGVsYXkiLCJhcmd1bWVudHMiLCJib2R5VW5sb2NrIiwiYm9keUxvY2siLCJzZXRUaW1lb3V0IiwiZGF0YU1lZGlhUXVlcmllcyIsImRhdGFTZXRWYWx1ZSIsImJyZWFrcG9pbnRzQXJyYXkiLCJwYXJhbXMiLCJwYXJhbXNBcnJheSIsIm1kUXVlcmllcyIsInVuaXF1ZUFycmF5IiwibWRRdWVyaWVzQXJyYXkiLCJtZWRpYVR5cGUiLCJpdGVtc0FycmF5IiwiZHVyYXRpb24iLCJzaG93bW9yZSIsInN0eWxlIiwidHJhbnNpdGlvblByb3BlcnR5IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib3ZlcmZsb3ciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInJlbW92ZVByb3BlcnR5IiwicmVtVG9QeCIsInJlbVZhbHVlIiwiaHRtbEZvbnRTaXplIiwicGFyc2VGbG9hdCIsImdldENvbXB1dGVkU3R5bGUiLCJmb250U2l6ZSIsInB4VmFsdWUiLCJNYXRoIiwicm91bmQiLCJyZW1vdmVDbGFzc2VzIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==