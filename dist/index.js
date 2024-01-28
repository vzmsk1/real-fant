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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnbkJBQWduQixXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxRQUFRLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sU0FBUyxVQUFVLFVBQVUsVUFBVSxNQUFNLFNBQVMsVUFBVSxNQUFNLFNBQVMsVUFBVSxPQUFPLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxjQUFjLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLGNBQWMsWUFBWSxZQUFZLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFlBQVksUUFBUSxPQUFPLFdBQVcsVUFBVSxRQUFRLE9BQU8sV0FBVyxVQUFVLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxZQUFZLFFBQVEsT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksT0FBTyxPQUFPLFVBQVUsV0FBVyxRQUFRLFVBQVUsV0FBVyxXQUFXLFdBQVcsUUFBUSxRQUFRLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLFFBQVEsVUFBVSxRQUFRLFFBQVEsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxZQUFZLFVBQVUsVUFBVSxXQUFXLFFBQVEsT0FBTyxVQUFVLFVBQVUsV0FBVyxZQUFZLE9BQU8sUUFBUSxVQUFVLFlBQVksWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsUUFBUSxPQUFPLGNBQWMsWUFBWSxZQUFZLFlBQVksUUFBUSxRQUFRLFdBQVcsVUFBVSxRQUFRLE9BQU8sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxjQUFjLFlBQVksWUFBWSxZQUFZLFFBQVEsUUFBUSxVQUFVLFNBQVMsT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxRQUFRLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxPQUFPLE1BQU0sVUFBVSxNQUFNLE9BQU8sT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sY0FBYyxZQUFZLFlBQVksWUFBWSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsYUFBYSxhQUFhLFlBQVksWUFBWSxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxjQUFjLFlBQVksWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sWUFBWSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFlBQVksT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsUUFBUSxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxRQUFRLE9BQU8sV0FBVyxlQUFlLFlBQVksWUFBWSxXQUFXLFVBQVUs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REFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0Qjs7QUFFNUI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQzhCOztBQUU5QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDMkI7O0FBRTNCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDc0I7O0FBRXRCOztBQUV5QjtBQUNFO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvZGV2L3VraWswLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9saWJzL2RkLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy9oYW1idXJnZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL3V0aWxzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/NmMyZCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX25hdi1pdGVtLWhlYWRpbmcnKTtcblxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCctLWFjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5mdW5jdGlvbiBEeW5hbWljQWRhcHQodHlwZSkge1xyXG4gIHRoaXMudHlwZSA9IHR5cGU7XHJcbn1cclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IF90aGlzID0gdGhpcztcclxuICB0aGlzLtC+YmplY3RzID0gW107XHJcbiAgdGhpcy5kYUNsYXNzbmFtZSA9ICdfZHluYW1pY19hZGFwdF8nO1xyXG4gIHRoaXMubm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kYV0nKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLm5vZGVzW2ldO1xyXG4gICAgY29uc3QgZGF0YSA9IG5vZGUuZGF0YXNldC5kYS50cmltKCk7XHJcbiAgICBjb25zdCBkYXRhQXJyYXkgPSBkYXRhLnNwbGl0KCcsJyk7XHJcbiAgICBjb25zdCDQvmJqZWN0ID0ge307XHJcbiAgICDQvmJqZWN0LmVsZW1lbnQgPSBub2RlO1xyXG4gICAg0L5iamVjdC5wYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICDQvmJqZWN0LmRlc3RpbmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihkYXRhQXJyYXlbMF0udHJpbSgpKTtcclxuICAgINC+YmplY3QuYnJlYWtwb2ludCA9IGRhdGFBcnJheVsxXSA/IGRhdGFBcnJheVsxXS50cmltKCkgOiAnNzY3JztcclxuICAgINC+YmplY3QucGxhY2UgPSBkYXRhQXJyYXlbMl0gPyBkYXRhQXJyYXlbMl0udHJpbSgpIDogJ2xhc3QnO1xyXG4gICAg0L5iamVjdC5pbmRleCA9IHRoaXMuaW5kZXhJblBhcmVudCjQvmJqZWN0LnBhcmVudCwg0L5iamVjdC5lbGVtZW50KTtcclxuICAgIHRoaXMu0L5iamVjdHMucHVzaCjQvmJqZWN0KTtcclxuICB9XHJcbiAgdGhpcy5hcnJheVNvcnQodGhpcy7QvmJqZWN0cyk7XHJcbiAgdGhpcy5tZWRpYVF1ZXJpZXMgPSBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoXHJcbiAgICB0aGlzLtC+YmplY3RzLFxyXG4gICAgZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAnKCcgK1xyXG4gICAgICAgIHRoaXMudHlwZSArXHJcbiAgICAgICAgJy13aWR0aDogJyArXHJcbiAgICAgICAgaXRlbS5icmVha3BvaW50ICtcclxuICAgICAgICAncHgpLCcgK1xyXG4gICAgICAgIGl0ZW0uYnJlYWtwb2ludFxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICAgIHRoaXNcclxuICApO1xyXG4gIHRoaXMubWVkaWFRdWVyaWVzID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKFxyXG4gICAgdGhpcy5tZWRpYVF1ZXJpZXMsXHJcbiAgICBmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIHNlbGYpIHtcclxuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoc2VsZiwgaXRlbSkgPT09IGluZGV4O1xyXG4gICAgfVxyXG4gICk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1lZGlhUXVlcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgbWVkaWEgPSB0aGlzLm1lZGlhUXVlcmllc1tpXTtcclxuICAgIGNvbnN0IG1lZGlhU3BsaXQgPSBTdHJpbmcucHJvdG90eXBlLnNwbGl0LmNhbGwobWVkaWEsICcsJyk7XHJcbiAgICBjb25zdCBtYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEobWVkaWFTcGxpdFswXSk7XHJcbiAgICBjb25zdCBtZWRpYUJyZWFrcG9pbnQgPSBtZWRpYVNwbGl0WzFdO1xyXG4gICAgY29uc3Qg0L5iamVjdHNGaWx0ZXIgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoXHJcbiAgICAgIHRoaXMu0L5iamVjdHMsXHJcbiAgICAgIGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uYnJlYWtwb2ludCA9PT0gbWVkaWFCcmVha3BvaW50O1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgbWF0Y2hNZWRpYS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgIF90aGlzLm1lZGlhSGFuZGxlcihtYXRjaE1lZGlhLCDQvmJqZWN0c0ZpbHRlcik7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubWVkaWFIYW5kbGVyKG1hdGNoTWVkaWEsINC+YmplY3RzRmlsdGVyKTtcclxuICB9XHJcbn07XHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUubWVkaWFIYW5kbGVyID0gZnVuY3Rpb24gKG1hdGNoTWVkaWEsINC+YmplY3RzKSB7XHJcbiAgaWYgKG1hdGNoTWVkaWEubWF0Y2hlcykge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCDQvmJqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCDQvmJqZWN0ID0g0L5iamVjdHNbaV07XHJcbiAgICAgINC+YmplY3QuaW5kZXggPSB0aGlzLmluZGV4SW5QYXJlbnQo0L5iamVjdC5wYXJlbnQsINC+YmplY3QuZWxlbWVudCk7XHJcbiAgICAgIHRoaXMubW92ZVRvKNC+YmplY3QucGxhY2UsINC+YmplY3QuZWxlbWVudCwg0L5iamVjdC5kZXN0aW5hdGlvbik7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vZm9yIChsZXQgaSA9IDA7IGkgPCDQvmJqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgZm9yIChsZXQgaSA9INC+YmplY3RzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGNvbnN0INC+YmplY3QgPSDQvmJqZWN0c1tpXTtcclxuICAgICAgaWYgKNC+YmplY3QuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5kYUNsYXNzbmFtZSkpIHtcclxuICAgICAgICB0aGlzLm1vdmVCYWNrKNC+YmplY3QucGFyZW50LCDQvmJqZWN0LmVsZW1lbnQsINC+YmplY3QuaW5kZXgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5EeW5hbWljQWRhcHQucHJvdG90eXBlLm1vdmVUbyA9IGZ1bmN0aW9uIChwbGFjZSwgZWxlbWVudCwgZGVzdGluYXRpb24pIHtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5kYUNsYXNzbmFtZSk7XHJcbiAgaWYgKHBsYWNlID09PSAnbGFzdCcgfHwgcGxhY2UgPj0gZGVzdGluYXRpb24uY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICBkZXN0aW5hdGlvbi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAocGxhY2UgPT09ICdmaXJzdCcpIHtcclxuICAgIGRlc3RpbmF0aW9uLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIGVsZW1lbnQpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBkZXN0aW5hdGlvbi5jaGlsZHJlbltwbGFjZV0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIGVsZW1lbnQpO1xyXG59O1xyXG5EeW5hbWljQWRhcHQucHJvdG90eXBlLm1vdmVCYWNrID0gZnVuY3Rpb24gKHBhcmVudCwgZWxlbWVudCwgaW5kZXgpIHtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5kYUNsYXNzbmFtZSk7XHJcbiAgaWYgKHBhcmVudC5jaGlsZHJlbltpbmRleF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgcGFyZW50LmNoaWxkcmVuW2luZGV4XS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgZWxlbWVudCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBhcmVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xyXG4gIH1cclxufTtcclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5pbmRleEluUGFyZW50ID0gZnVuY3Rpb24gKHBhcmVudCwgZWxlbWVudCkge1xyXG4gIGNvbnN0IGFycmF5ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwocGFyZW50LmNoaWxkcmVuKTtcclxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhcnJheSwgZWxlbWVudCk7XHJcbn07XHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUuYXJyYXlTb3J0ID0gZnVuY3Rpb24gKGFycikge1xyXG4gIGlmICh0aGlzLnR5cGUgPT09ICdtaW4nKSB7XHJcbiAgICBBcnJheS5wcm90b3R5cGUuc29ydC5jYWxsKGFyciwgZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgaWYgKGEuYnJlYWtwb2ludCA9PT0gYi5icmVha3BvaW50KSB7XHJcbiAgICAgICAgaWYgKGEucGxhY2UgPT09IGIucGxhY2UpIHtcclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGEucGxhY2UgPT09ICdmaXJzdCcgfHwgYi5wbGFjZSA9PT0gJ2xhc3QnKSB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gJ2xhc3QnIHx8IGIucGxhY2UgPT09ICdmaXJzdCcpIHtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGEucGxhY2UgLSBiLnBsYWNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYS5icmVha3BvaW50IC0gYi5icmVha3BvaW50O1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIEFycmF5LnByb3RvdHlwZS5zb3J0LmNhbGwoYXJyLCBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICBpZiAoYS5icmVha3BvaW50ID09PSBiLmJyZWFrcG9pbnQpIHtcclxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gYi5wbGFjZSkge1xyXG4gICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gJ2ZpcnN0JyB8fCBiLnBsYWNlID09PSAnbGFzdCcpIHtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGEucGxhY2UgPT09ICdsYXN0JyB8fCBiLnBsYWNlID09PSAnZmlyc3QnKSB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYi5wbGFjZSAtIGEucGxhY2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBiLmJyZWFrcG9pbnQgLSBhLmJyZWFrcG9pbnQ7XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn07XHJcbmNvbnN0IGRhID0gbmV3IER5bmFtaWNBZGFwdCgnbWF4Jyk7XHJcbmRhLmluaXQoKTtcclxuIiwiaW1wb3J0IHsgYm9keUxvY2tTdGF0dXMsIGJvZHlMb2NrVG9nZ2xlIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IG1lbnVJbml0ID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJykpIHtcbiAgICAgICAgY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpO1xuXG4gICAgICAgIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoYm9keUxvY2tTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnX21lbnUtb3BlbmVkJyk7XG4gICAgICAgICAgICAgICAgYm9keUxvY2tUb2dnbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxubWVudUluaXQoKTtcbiIsImltcG9ydCB7IF9zbGlkZVVwLCBfc2xpZGVEb3duLCBfc2xpZGVUb2dnbGUgfSBmcm9tICcuL3V0aWxzLmpzJztcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jbGFzcyBTZWxlY3Qge1xyXG4gICAgLy8gc2V0dXAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8vIGN1c3RvbSBzZWxlY3QgY2xhc3Nlc1xyXG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IHtcclxuICAgICAgICAgICAgLy8gaHRtbCBidWlsZCBjbGFzc2VzXHJcbiAgICAgICAgICAgIHNlbDogJ3NlbGVjdCcsXHJcbiAgICAgICAgICAgIGJvZHk6ICdzZWxlY3RfX2JvZHknLFxyXG4gICAgICAgICAgICBsYWJlbDogJ3NlbGVjdF9fbGFiZWwnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ3NlbGVjdF9fdGl0bGUnLFxyXG4gICAgICAgICAgICB2YWw6ICdzZWxlY3RfX3ZhbHVlJyxcclxuICAgICAgICAgICAgY29udGVudDogJ3NlbGVjdF9fY29udGVudCcsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6ICdzZWxlY3RfX29wdGlvbnMnLFxyXG4gICAgICAgICAgICBvcHRpb246ICdzZWxlY3RfX29wdGlvbicsXHJcbiAgICAgICAgICAgIHNjcm9sbDogJ3NlbGVjdF9fc2Nyb2xsJyxcclxuICAgICAgICAgICAgZ3JvdXA6ICdzZWxlY3RfX2dyb3VwJyxcclxuICAgICAgICAgICAgaW5wOiAnc2VsZWN0X19pbnB1dCcsXHJcbiAgICAgICAgICAgIGFzc2V0OiAnc2VsZWN0X19hc3NldCcsXHJcbiAgICAgICAgICAgIHR4dDogJ3NlbGVjdF9fdGV4dCcsXHJcbiAgICAgICAgICAgIGhpbnQ6ICdzZWxlY3RfX2hpbnQnLFxyXG5cclxuICAgICAgICAgICAgLy8gc3RhdGUgY2xhc3Nlc1xyXG4gICAgICAgICAgICBhY3RpdmU6ICdfc2VsZWN0LWFjdGl2ZScsXHJcbiAgICAgICAgICAgIGZvY3VzZWQ6ICdfc2VsZWN0LWZvY3VzZWQnLFxyXG4gICAgICAgICAgICBvcGVuZWQ6ICdfc2VsZWN0LW9wZW5lZCcsXHJcbiAgICAgICAgICAgIGZpbGxlZDogJ19zZWxlY3QtZmlsbGVkJyxcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ICdfc2VsZWN0LXNlbGVjdGVkJyxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6ICdfc2VsZWN0LWRpc2FibGVkJyxcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZGl0aW9uYWwgY2xhc3Nlc1xyXG4gICAgICAgICAgICBsaXN0OiAnX3NlbGVjdC1saXN0JyxcclxuICAgICAgICAgICAgZXJyb3I6ICdfc2VsZWN0LWVycm9yJyxcclxuICAgICAgICAgICAgbXVsdGlwbGU6ICdfc2VsZWN0LW11bHRpcGxlJyxcclxuICAgICAgICAgICAgY2hlY2tib3g6ICdfc2VsZWN0LWNoZWNrYm94JyxcclxuICAgICAgICAgICAgbGFiZWw6ICdfc2VsZWN0LWxhYmVsJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGFsbCBzZWxlY3QgaXRlbXNcclxuICAgICAgICBjb25zdCBzZWxlY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0Jyk7XHJcbiAgICAgICAgaWYgKHNlbGVjdExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdChzZWxlY3RMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2VsZWN0IGluaXRpYWxpemF0aW9uICYgYnVpbGQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLy8gaW5pdGlhbGl6YXRpb25cclxuICAgIGluaXQoc2VsZWN0TGlzdCkge1xyXG4gICAgICAgIC8vIGluaXRcclxuICAgICAgICBzZWxlY3RMaXN0LmZvckVhY2goKHNlbGVjdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGFyLXJhdGluZycpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRTZWxJdGVtKHNlbGVjdCwgaW5kZXggKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBldmVudHNcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAnY2xpY2snLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb25zKGUpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgICApO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICdrZXlkb3duJyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAnZm9jdXNpbicsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGlvbnMoZSk7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgJ2ZvY3Vzb3V0JyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIC8vIHNpbmdsZSBzZWxlY3QgaXRlbSBpbml0aWFsaXphdGlvblxyXG4gICAgaW5pdFNlbEl0ZW0ocmVsYXRpdmVTZWwsIGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc2VsKTtcclxuICAgICAgICByZWxhdGl2ZVNlbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxlY3QsIHJlbGF0aXZlU2VsKTtcclxuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQocmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIHJlbGF0aXZlU2VsLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgaW5kZXggPyAocmVsYXRpdmVTZWwuZGF0YXNldC5zZWxJZCA9IGluZGV4KSA6IG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKSkge1xyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5kYXRhc2V0Lm9wdFBsYWNlaG9sZGVyID0gdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS5sYWJlbC5zaG93KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxUaXRsZSA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLnRpdGxlKS50d2luU2VsO1xyXG4gICAgICAgICAgICAgICAgc2VsVGl0bGUuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgICAgICAgICAgICAgICdhZnRlcmJlZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5sYWJlbH1cIj4ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS5sYWJlbC50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLmxhYmVsLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9PC9zcGFuPmBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgIT09ICcwJykge1xyXG4gICAgICAgICAgICBzZWxlY3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgICAgICAgICAgJ2JlZm9yZWVuZCcsXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmJvZHl9XCI+PGRpdiBoaWRkZW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5vcHRpb25zfVwiPjwvZGl2PjwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgICAgICAgICAgJ2JlZm9yZWVuZCcsXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmJvZHl9XCI+PGRpdiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLm9wdGlvbnN9XCI+PC9kaXY+PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5idWlsZChyZWxhdGl2ZVNlbCk7XHJcblxyXG4gICAgICAgIHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgPSByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkID8gcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCA6ICcxNTAnO1xyXG4gICAgICAgIHJlbGF0aXZlU2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmluaXRTZWxlY3Rpb25zKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gc2VsZWN0IGJ1aWxkXHJcbiAgICBidWlsZChyZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3Qgc2VsT2JqID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gc2V0IGlkXHJcbiAgICAgICAgc2VsZWN0LmRhdGFzZXQuc2VsSWQgPSByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbElkO1xyXG4gICAgICAgIC8vIHNldCB2YWx1ZVxyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgLy8gc2V0IG9wdGlvbnNcclxuICAgICAgICB0aGlzLnNldE9wdGlvbnMoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgLy8gc2V0IGNzcyBtb2RpZmljYXRvclxyXG4gICAgICAgIHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsQWRkb25DbGFzc1xyXG4gICAgICAgICAgICA/IHNlbGVjdC5jbGFzc0xpc3QuYWRkKGBzZWxlY3RfJHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEFkZG9uQ2xhc3N9YClcclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgIC8vIHNldCBjbGFzcyBpZiBzZWxlY3QgaXMgbXVsdGlwbGVcclxuICAgICAgICByZWxhdGl2ZVNlbC5tdWx0aXBsZVxyXG4gICAgICAgICAgICA/IHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5tdWx0aXBsZSlcclxuICAgICAgICAgICAgOiBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMubXVsdGlwbGUpO1xyXG4gICAgICAgIC8vIHNldCBjbGFzcyBpZiBzZWxlY3QgY2hlY2tib3hlcyBhcmUgc2V0XHJcbiAgICAgICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1jaGVja2JveGVzJykgJiYgcmVsYXRpdmVTZWwubXVsdGlwbGVcclxuICAgICAgICAgICAgPyBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuY2hlY2tib3gpXHJcbiAgICAgICAgICAgIDogc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmNoZWNrYm94KTtcclxuICAgICAgICAvLyBkaXNhYmxlIHNlbGVjdFxyXG4gICAgICAgIHRoaXMuZGlzYWJsZVNlbGVjdChzZWxlY3QsIHJlbGF0aXZlU2VsKTtcclxuICAgICAgICAvLyBzZXQgc2VhcmNoIGFjdGlvbnMgaWYgZGF0YS1zZWwtc2VhcmNoIGlzIHNldFxyXG4gICAgICAgIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtc2VhcmNoJykgPyB0aGlzLnNldFNlYXJjaEFjdGlvbnMoc2VsZWN0KSA6IG51bGw7XHJcbiAgICAgICAgLy8gc2V0IHNlbGVjdCBhY3Rpb25zIGlmIGl0J3MgaW5pdGlhbGx5IG9wZW5lZFxyXG4gICAgICAgIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtb3BlbmVkJykgPyB0aGlzLnNldEFjdGlvbihzZWxlY3QpIDogbnVsbDtcclxuXHJcbiAgICAgICAgLy8gc2V0IHNlbGVjdCBoaW50XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSGludCkge1xyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAgICAgICAgICdiZWZvcmVlbmQnLFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJzZWxlY3RfX2hpbnRcIj4ke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSGludH08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB2YWxpZGF0ZSBzZWxlY3RcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuY2xvc2VzdCgnZm9ybScpKSB7XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLmNsb3Nlc3QoJ2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoc2VsT2JqLmNsYXNzZXMuZmlsbGVkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbE9iai5hZGRFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbE9iai5yZW1vdmVFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2hvdyAvIGhpZGUgc2VsZWN0aW9uIGZyb20gc2VsZWN0IHRpdGxlXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zaG93LXZhbCcpKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0LXNob3ctdmFsJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ19zZWxlY3Qtc2hvdy12YWwnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBzZXQgdHdpbiBzZWxlY3QgdGl0bGUgdmFsdWVcclxuICAgIHNldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBjb25zdCBzZWxCb2R5ID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMuYm9keSkudHdpblNlbDtcclxuICAgICAgICBjb25zdCBzZWxUaXRsZSA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLnRpdGxlKS50d2luU2VsO1xyXG5cclxuICAgICAgICBpZiAoc2VsVGl0bGUpIHNlbFRpdGxlLnJlbW92ZSgpO1xyXG4gICAgICAgIHNlbEJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy5nZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKSk7XHJcbiAgICB9XHJcbiAgICAvLyBzZXQgdHdpbiBzZWxlY3Qgb3B0aW9uc1xyXG4gICAgc2V0T3B0aW9ucyhzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnR3aW5TZWw7XHJcbiAgICAgICAgY29uc3QgcmVsYXRpdmVTZWxPcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykucmVsYXRpdmVTZWw7XHJcblxyXG4gICAgICAgIG9wdGlvbnMuaW5uZXJIVE1MID0gdGhpcy5nZXRPcHRpb25zKHJlbGF0aXZlU2VsKTtcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWxPcHRpb25zLnF1ZXJ5U2VsZWN0b3IoJ1tzZWxlY3RlZF0nKSkge1xyXG4gICAgICAgICAgICBvcHRpb25zLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuY2xhc3Nlcy5vcHRpb259YCkuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGRpc2FibGUgc2VsZWN0XHJcbiAgICBkaXNhYmxlU2VsZWN0KHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMudGl0bGUpLnR3aW5TZWwuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLnRpdGxlKS50d2luU2VsLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG1haW4gYWN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vIHNldCBtYWluIGFjdGlvbnNcclxuICAgIHNldEFjdGlvbnMoZSkge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBlLnR5cGU7XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMuc2VsKSkgfHxcclxuICAgICAgICAgICAgdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMubGlzdCkpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IHRhcmdldC5jbG9zZXN0KCcuc2VsZWN0JylcclxuICAgICAgICAgICAgICAgID8gdGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3QnKVxyXG4gICAgICAgICAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgYC4ke3RoaXMuY2xhc3Nlcy5zZWx9W2RhdGEtc2VsLWlkPVwiJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5saXN0KSkuZGF0YXNldC5zZWxlY3RJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVwiXWBcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgcmVsYXRpdmVTZWwgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QpLnJlbGF0aXZlU2VsO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdjbGljaycpIHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVsYXRpdmVTZWwuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMubGlzdCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbExpc3QgPSB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5saXN0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbE9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgLiR7dGhpcy5jbGFzc2VzLnNlbH1bZGF0YS1zZWwtaWQ9XCIke3NlbExpc3QuZGF0YXNldC5zZWxJZH1cIl0gLnNlbGVjdF9fb3B0aW9uW2RhdGEtb3B0LXZhbD1cIiR7c2VsTGlzdC5kYXRhc2V0Lm9wdFZhbH1cIl1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0T3B0aW9uQWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwsIHNlbE9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy50aXRsZSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9uKHNlbGVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcHRpb24pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxPcHRpb24gPSB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcHRpb24pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25BY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCwgc2VsT3B0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2ZvY3VzaW4nIHx8IHR5cGUgPT09ICdmb2N1c291dCcpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5zZWwpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnZm9jdXNpbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmZvY3VzZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5mb2N1c2VkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLmZpbGxlZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2tleWRvd24nICYmIGUuY29kZSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VHcm91cCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZUdyb3VwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gc2V0IHNpbmdsZSBzZWxlY3QgYWN0aW9uXHJcbiAgICBzZXRBY3Rpb24oc2VsZWN0KSB7XHJcbiAgICAgICAgY29uc3QgcmVsYXRpdmVTZWwgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QpLnJlbGF0aXZlU2VsO1xyXG4gICAgICAgIGNvbnN0IHNlbE9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS50d2luU2VsO1xyXG5cclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuY2xvc2VzdCgnW2RhdGEtb25lLXNlbGVjdF0nKSkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RPbmVHcm91cCA9IHJlbGF0aXZlU2VsLmNsb3Nlc3QoJ1tkYXRhLW9uZS1zZWxlY3RdJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VHcm91cChzZWxlY3RPbmVHcm91cCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNlbE9wdGlvbnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmNsYXNzZXMub3BlbmVkKTtcclxuICAgICAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgIT09ICcwJykge1xyXG4gICAgICAgICAgICAgICAgX3NsaWRlVG9nZ2xlKHNlbE9wdGlvbnMsIHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLm9wZW5lZCkgJiZcclxuICAgICAgICAgICAgICAgIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZScpICYmXHJcbiAgICAgICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5lcnJvcilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNsb3NlIHNpbmdsZSBzZWxlY3QgZ3JvdXBcclxuICAgIGNsb3NlR3JvdXAoZ3JvdXApIHtcclxuICAgICAgICBjb25zdCBzZWxHcm91cCA9IGdyb3VwID8gZ3JvdXAgOiBkb2N1bWVudDtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gc2VsR3JvdXAucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgYCR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMuc2VsKX0ke3RoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wZW5lZCl9YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKHNlbGVjdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbnMuZm9yRWFjaCgoc2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlSXRlbShzZWxlY3Rpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjbG9zZSBzaW5nbGUgc2VsZWN0IGl0ZW1cclxuICAgIGNsb3NlSXRlbShzZWxlY3QpIHtcclxuICAgICAgICBjb25zdCByZWxhdGl2ZVNlbCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCkucmVsYXRpdmVTZWw7XHJcbiAgICAgICAgY29uc3Qgc2VsT3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnR3aW5TZWw7XHJcblxyXG4gICAgICAgIGlmICghc2VsT3B0aW9ucy5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5vcGVuZWQpO1xyXG4gICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCAhPT0gJzAnKSB7XHJcbiAgICAgICAgICAgICAgICBfc2xpZGVVcChzZWxPcHRpb25zLCByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHNldCBzaW5nbGUgb3B0aW9uIGFjdGlvbnNcclxuICAgIHNldE9wdGlvbkFjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsLCBvcHRpb24pIHtcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC50b2dnbGUodGhpcy5jbGFzc2VzLnNlbGVjdGVkKTtcclxuICAgICAgICAgICAgY29uc3QgcmVsYXRpdmVTZWxlY3Rpb25zID0gdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS5lbGVtZW50cztcclxuXHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsZWN0aW9ucy5mb3JFYWNoKChyZWxhdGl2ZVNlbGVjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVTZWxlY3Rpb24ucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHR3aW5TZWxlY3Rpb25zID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpKTtcclxuICAgICAgICAgICAgdHdpblNlbGVjdGlvbnMuZm9yRWFjaCgodHdpblNlbGVjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVTZWxcclxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPVwiJHt0d2luU2VsZWN0aW9uLmRhdGFzZXQub3B0VmFsfVwiXWApXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghb3B0aW9uLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZWxhdGl2ZVNlbC5xdWVyeVNlbGVjdG9yKGBvcHRpb25bdmFsdWU9XCIke29wdGlvbi5kYXRhc2V0Lm9wdFZhbH1cIl1gKSk7XHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbFxyXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBvcHRpb25bdmFsdWU9XCIke29wdGlvbi5kYXRhc2V0Lm9wdFZhbH1cIl1gKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0X19vcHRpb24nKVxyXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKG9wdCkgPT4gb3B0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLnNlbGVjdGVkKSk7XHJcbiAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIGlmICghcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNob3ctc2VsZWN0aW9uJykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3QucXVlcnlTZWxlY3RvcihgJHt0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcHRpb24pfVtoaWRkZW5dYCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3QucXVlcnlTZWxlY3RvcihgJHt0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcHRpb24pfVtoaWRkZW5dYCkuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvcHRpb24uaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbC52YWx1ZSA9IG9wdGlvbi5oYXNBdHRyaWJ1dGUoJ2RhdGEtb3B0LXZhbCcpXHJcbiAgICAgICAgICAgICAgICA/IG9wdGlvbi5kYXRhc2V0Lm9wdFZhbFxyXG4gICAgICAgICAgICAgICAgOiBvcHRpb24udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9uKHNlbGVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25zKHJlbGF0aXZlU2VsKTtcclxuICAgIH1cclxuICAgIC8vIHNldCBzZWFyY2ggYWN0aW9uc1xyXG4gICAgc2V0U2VhcmNoQWN0aW9ucyhzZWxlY3QpIHtcclxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgY29uc3Qgc2VsSW5wdXQgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5pbnApLnR3aW5TZWw7XHJcbiAgICAgICAgY29uc3Qgc2VsT3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnR3aW5TZWwucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgYC4ke3RoaXMuY2xhc3Nlcy5vcHRpb259YFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHNlbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxPcHRpb25zLmZvckVhY2goKHNlbE9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbE9wdGlvbi50ZXh0Q29udGVudC50b1VwcGVyQ2FzZSgpLmluZGV4T2Yoc2VsSW5wdXQudmFsdWUudG9VcHBlckNhc2UoKSkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbE9wdGlvbi5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsT3B0aW9uLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZWxPcHRpb25zLmhpZGRlbiA9PT0gdHJ1ZSA/IF90aGlzLnNldEFjdGlvbihzZWxlY3QpIDogbnVsbDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIHNldCBzZWxlY3Qgc3VidGl0bGVcclxuICAgIHNldFN1YnRpdGxlKHJlbGF0aXZlU2VsKSB7fVxyXG5cclxuICAgIC8vIHZhbGlkYXRpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vIGFkZCBhbiBlcnJvciB0byBhIHNlbGVjdFxyXG4gICAgYWRkRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpIHtcclxuICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuZXJyb3IpO1xyXG5cclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zZWxFcnJvciAmJiAhcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50KSB7XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgICAgICAgICAgJ2JlZm9yZWVuZCcsXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInNlbGVjdF9faGludFwiPiR7cmVsYXRpdmVTZWwuZGF0YXNldC5zZWxFcnJvcn08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gcmVtb3ZlIGFuIGVycm9yIGZyb20gYSBzZWxlY3RcclxuICAgIHJlbW92ZUVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLmVycm9yKSkge1xyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19oaW50JykgJiYgIXJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSGludCkge1xyXG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdF9faGludCcpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXRpbHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLy8gZ2V0IGN1c3RvbSBjbGFzc1xyXG4gICAgZ2V0Q2xhc3MoY3NzQ2xhc3MpIHtcclxuICAgICAgICByZXR1cm4gYC4ke2Nzc0NsYXNzfWA7XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgc2luZ2xlIHNlbGVjdCBpdGVtXHJcbiAgICBnZXRTZWxlY3Qoc2VsZWN0LCBjc3NDbGFzcykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsOiBzZWxlY3QucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksXHJcbiAgICAgICAgICAgIHR3aW5TZWw6IHNlbGVjdC5xdWVyeVNlbGVjdG9yKHRoaXMuZ2V0Q2xhc3MoY3NzQ2xhc3MpKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgc2VsZWN0ZWQgaXRlbSB2YWx1ZVxyXG4gICAgZ2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGxldCBhdHRyLFxyXG4gICAgICAgICAgICBhdHRyQ2xhc3MsXHJcbiAgICAgICAgICAgIHRpdGxlVmFsID0gdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsLCAyKS5odG1sO1xyXG5cclxuICAgICAgICAvLyBzZXQgdGl0bGUgdmFsdWVcclxuICAgICAgICB0aXRsZVZhbCA9IHRpdGxlVmFsLmxlbmd0aFxyXG4gICAgICAgICAgICA/IHRpdGxlVmFsXHJcbiAgICAgICAgICAgIDogcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxMYWJlbFxyXG4gICAgICAgICAgICA/IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsTGFiZWxcclxuICAgICAgICAgICAgOiAnJztcclxuXHJcbiAgICAgICAgLy8gc2V0IGFjdGl2ZSBjbGFzcyB0byBzZWxlY3QgaWYgaXQgY29udGFpbnMgYW55IHZhbHVlc1xyXG4gICAgICAgIGlmICh0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpLnZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmFjdGl2ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmFjdGl2ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZXQgc2VsZWN0IGxhYmVsXHJcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtbGFiZWwnKSkge1xyXG4gICAgICAgICAgICBhdHRyID0gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxMYWJlbFxyXG4gICAgICAgICAgICAgICAgPyBgIGRhdGEtc2VsLWxhYmVsPVwiJHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbExhYmVsfVwiYFxyXG4gICAgICAgICAgICAgICAgOiBgIGRhdGEtc2VsLWxhYmVsPVwi0JLRi9Cx0L7RgFwiYDtcclxuICAgICAgICAgICAgYXR0ckNsYXNzID0gYCAke3RoaXMuY2xhc3Nlcy5sYWJlbH1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcHVzaCBzZWxlY3Rpb25zIHRvIHRoZSBsaXN0IGluc2lkZSBvZiBzZWxlY3QgdGl0bGVcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwubXVsdGlwbGUgJiYgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1saXN0JykpIHtcclxuICAgICAgICAgICAgdGl0bGVWYWwgPSB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpXHJcbiAgICAgICAgICAgICAgICAuZWxlbWVudHMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgIChvcHRpb24pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA8c3BhbiBkYXRhLW9wdC1pZD1cIiR7c2VsZWN0LmRhdGFzZXQuc2VsSWR9XCIgZGF0YS1vcHQtdmFsPVwiJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCIgY2xhc3M9XCJfbGlzdC1pdGVtXCI+JHt0aGlzLmdldENvbnRlbnQob3B0aW9uKX08L3NwYW4+YFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLmpvaW4oJycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQubGlzdCAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlbGF0aXZlU2VsLmRhdGFzZXQubGlzdCkpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVsYXRpdmVTZWwuZGF0YXNldC5saXN0KS5pbm5lckhUTUwgPSB0aXRsZVZhbDtcclxuICAgICAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNlYXJjaCcpKSB0aXRsZVZhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpbml0IHNlbGVjdCBzZWFyY2hcclxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1zZWFyY2gnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy50aXRsZX1cIj48c3BhbiAke2F0dHJ9IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMudmFsfVwiPjxpbnB1dCBhdXRvY29tcGxldGU9XCJvZmZcIiB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCIke3RpdGxlVmFsfVwiIGRhdGEtcGxhY2Vob2xkZXI9XCIke3RpdGxlVmFsfVwiIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuaW5wfVwiPjwvc3Bhbj48L2Rpdj5gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbUNsYXNzID1cclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHMubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpLmVsZW1lbnRzWzBdLmRhdGFzZXQub3B0Q2xhc3NcclxuICAgICAgICAgICAgICAgICAgICA/IGAgJHt0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpLmVsZW1lbnRzWzBdLmRhdGFzZXQub3B0Q2xhc3N9YFxyXG4gICAgICAgICAgICAgICAgICAgIDogJyc7XHJcbiAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy50aXRsZX1cIj48c3BhbiAke2F0dHIgPyBhdHRyIDogJyd9IGNsYXNzPVwiJHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3Nlcy52YWxcclxuICAgICAgICAgICAgfSAke2F0dHJDbGFzcyA/IGF0dHJDbGFzcyA6ICcnfVwiPjxzcGFuIGNsYXNzPVwiJHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3Nlcy5jb250ZW50XHJcbiAgICAgICAgICAgIH0ke2N1c3RvbUNsYXNzfVwiPiR7dGl0bGVWYWx9PC9zcGFuPjwvc3Bhbj48L2J1dHRvbj5gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGdldCBvcHRpb25zXHJcbiAgICBnZXRPcHRpb25zKHJlbGF0aXZlU2VsKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsU2Nyb2xsID0gcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1zY3JvbGwnKSA/IGBkYXRhLXNpbXBsZWJhcmAgOiAnJztcclxuICAgICAgICBsZXQgc2VsU2Nyb2xsSGVpZ2h0ID0gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxTY3JvbGxcclxuICAgICAgICAgICAgPyBgc3R5bGU9XCJtYXgtaGVpZ2h0OiR7d2luZG93LmlubmVyV2lkdGggPiA3NjggPyByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbFNjcm9sbCA6IDIyfXJlbVwiYFxyXG4gICAgICAgICAgICA6ICcnO1xyXG4gICAgICAgIGxldCBzZWxPcHRpb25zID0gQXJyYXkuZnJvbShyZWxhdGl2ZVNlbC5vcHRpb25zKTtcclxuXHJcbiAgICAgICAgaWYgKHNlbE9wdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxPcHRpb25zSFRNTCA9IGBgO1xyXG5cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpICYmICF0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS5zaG93KSB8fFxyXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVTZWwubXVsdGlwbGVcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxPcHRpb25zID0gc2VsT3B0aW9ucy5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxPcHRpb25zSFRNTCArPSBzZWxTY3JvbGxcclxuICAgICAgICAgICAgICAgID8gYDxkaXYgJHtzZWxTY3JvbGx9ICR7c2VsU2Nyb2xsSGVpZ2h0fSBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnNjcm9sbH1cIj5gXHJcbiAgICAgICAgICAgICAgICA6ICcnO1xyXG4gICAgICAgICAgICBzZWxPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VsT3B0aW9uc0hUTUwgKz0gdGhpcy5nZXRPcHRpb24ob3B0aW9uLCByZWxhdGl2ZVNlbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZWxPcHRpb25zSFRNTCArPSBzZWxTY3JvbGwgPyBgPC9kaXY+YCA6ICcnO1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsT3B0aW9uc0hUTUw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZ2V0IG9wdGlvblxyXG4gICAgZ2V0T3B0aW9uKG9wdGlvbiwgcmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gb3B0aW9uLnNlbGVjdGVkICYmIHJlbGF0aXZlU2VsLm11bHRpcGxlID8gYCAke3RoaXMuY2xhc3Nlcy5zZWxlY3RlZH1gIDogJyc7XHJcbiAgICAgICAgY29uc3Qgc2hvd1NlbGVjdGlvbiA9XHJcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCAmJiAhcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNob3ctc2VsZWN0aW9uJykgJiYgIXJlbGF0aXZlU2VsLm11bHRpcGxlXHJcbiAgICAgICAgICAgICAgICA/IGBoaWRkZW5gXHJcbiAgICAgICAgICAgICAgICA6IGBgO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbkNsYXNzID0gb3B0aW9uLmRhdGFzZXQub3B0Q2xhc3MgPyBgICR7b3B0aW9uLmRhdGFzZXQub3B0Q2xhc3N9YCA6ICcnO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbkxpbmsgPSBvcHRpb24uZGF0YXNldC5vcHRpb25MaW5rID8gb3B0aW9uLmRhdGFzZXQub3B0aW9uTGluayA6IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbkxpbmtUYXJnZXQgPSBvcHRpb24uaGFzQXR0cmlidXRlKCdkYXRhLW9wdGlvbi1saW5rLXRhcmdldCcpID8gYHRhcmdldD1cIl9ibGFua1wiYCA6ICcnO1xyXG4gICAgICAgIGxldCBvcHRpb25IVE1MID0gYGA7XHJcblxyXG4gICAgICAgIG9wdGlvbkhUTUwgKz0gb3B0aW9uTGlua1xyXG4gICAgICAgICAgICA/IGA8YSAke29wdGlvbkxpbmtUYXJnZXR9ICR7c2hvd1NlbGVjdGlvbn0gaHJlZj1cIiR7b3B0aW9uTGlua31cIiBkYXRhLW9wdC12YWw9XCIke29wdGlvbi52YWx1ZX1cIiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLm9wdGlvbn0ke29wdGlvbkNsYXNzfSR7c2VsZWN0aW9uc31cIj5gXHJcbiAgICAgICAgICAgIDogYDxidXR0b24gJHtzaG93U2VsZWN0aW9ufSBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLm9wdGlvbn0ke29wdGlvbkNsYXNzfSR7c2VsZWN0aW9uc31cIiBkYXRhLW9wdC12YWw9XCIke29wdGlvbi52YWx1ZX1cIiB0eXBlPVwiYnV0dG9uXCI+YDtcclxuICAgICAgICBvcHRpb25IVE1MICs9IHRoaXMuZ2V0Q29udGVudChvcHRpb24pO1xyXG4gICAgICAgIG9wdGlvbkhUTUwgKz0gb3B0aW9uTGluayA/IGA8L2E+YCA6IGA8L2J1dHRvbj5gO1xyXG4gICAgICAgIHJldHVybiBvcHRpb25IVE1MO1xyXG4gICAgfVxyXG4gICAgLy8gZ2V0IHNlbGVjdCBjb250ZW50XHJcbiAgICBnZXRDb250ZW50KG9wdGlvbikge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbkRhdGEgPSBvcHRpb24uZGF0YXNldC5vcHRBc3NldCA/IGAke29wdGlvbi5kYXRhc2V0Lm9wdEFzc2V0fWAgOiAnJztcclxuICAgICAgICBjb25zdCBvcHRpb25EYXRhSFRNTCA9XHJcbiAgICAgICAgICAgIG9wdGlvbkRhdGEuaW5kZXhPZignaW1nJykgPj0gMCA/IGA8aW1nIHNyYz1cIiR7b3B0aW9uRGF0YX1cIiBhbHQ9XCJcIj5gIDogb3B0aW9uRGF0YTtcclxuICAgICAgICBsZXQgb3B0aW9uQ29udGVudEhUTUwgPSBgYDtcclxuXHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8c3BhbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmdyb3VwfVwiPmAgOiAnJztcclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuYXNzZXR9XCI+YCA6ICcnO1xyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBvcHRpb25EYXRhSFRNTCA6ICcnO1xyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPC9zcGFuPmAgOiAnJztcclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMudHh0fVwiPmAgOiAnJztcclxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb24udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8L3NwYW4+YCA6ICcnO1xyXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPC9zcGFuPmAgOiAnJztcclxuICAgICAgICByZXR1cm4gb3B0aW9uQ29udGVudEhUTUw7XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgc2VsZWN0IHBsYWNlaG9sZGVyXHJcbiAgICBnZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gQXJyYXkuZnJvbShyZWxhdGl2ZVNlbC5vcHRpb25zKS5maW5kKChvcHRpb24pID0+ICFvcHRpb24udmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAocGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc3VidGl0bGUpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHBsYWNlaG9sZGVyLnRleHRDb250ZW50LFxyXG4gICAgICAgICAgICAgICAgc2hvdzogcGxhY2Vob2xkZXIuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1waC1zaG93JyksXHJcbiAgICAgICAgICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHBsYWNlaG9sZGVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtcGgnKSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBwbGFjZWhvbGRlci5kYXRhc2V0Lm9wdFBsYWNlaG9sZGVyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZ2V0IHNlbGVjdGVkIG9wdGlvbnMgZGF0YVxyXG4gICAgZ2V0RGF0YShyZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGxldCBzZWxlY3Rpb25zID0gW107XHJcblxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgICBzZWxlY3Rpb25zID0gQXJyYXkuZnJvbShyZWxhdGl2ZVNlbC5vcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi5zZWxlY3RlZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0aW9ucy5wdXNoKHJlbGF0aXZlU2VsLm9wdGlvbnNbcmVsYXRpdmVTZWwuc2VsZWN0ZWRJbmRleF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlbGVtZW50czogc2VsZWN0aW9ucy5tYXAoKG9wdGlvbikgPT4gb3B0aW9uKSxcclxuICAgICAgICAgICAgdmFsdWVzOiBzZWxlY3Rpb25zLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpLm1hcCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpLFxyXG4gICAgICAgICAgICBodG1sOiBzZWxlY3Rpb25zLm1hcCgob3B0aW9uKSA9PiB0aGlzLmdldENvbnRlbnQob3B0aW9uKSlcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNlbGVjdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vIGluaXQgc2VsZWN0aW9uc1xyXG4gICAgaW5pdFNlbGVjdGlvbnMoZSkge1xyXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgIHRoaXMuYnVpbGQocmVsYXRpdmVTZWwpO1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0aW9ucyhyZWxhdGl2ZVNlbCk7XHJcbiAgICB9XHJcbiAgICAvLyBzZXQgc2VsZWN0aW9uc1xyXG4gICAgc2V0U2VsZWN0aW9ucyhyZWxhdGl2ZVNlbCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc3VibWl0JykgJiYgcmVsYXRpdmVTZWwudmFsdWUpIHtcclxuICAgICAgICAgICAgbGV0IHRlbXBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgdGVtcEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XHJcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLmNsb3Nlc3QoJ2Zvcm0nKS5hcHBlbmQodGVtcEJ1dHRvbik7XHJcbiAgICAgICAgICAgIHRlbXBCdXR0b24uY2xpY2soKTtcclxuICAgICAgICAgICAgdGVtcEJ1dHRvbi5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5maWxsZWQpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xyXG4gICAgfVxyXG4gICAgLy8gY3VzdG9tIHNlbGVjdCBldmVudCAobGlzdGVuIHRvIGFueSBzZWxlY3Rpb25zIC8gbXV0YXRpb25zKVxyXG4gICAgc2VsZWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcclxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGlvbicsIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdDogcmVsYXRpdmVTZWxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbm5ldyBTZWxlY3Qoe30pO1xyXG4iLCIvKipcclxuICogc2V0IGhhc2ggdG8gdXJsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2V0SGFzaCA9IGhhc2ggPT4ge1xyXG4gIGhhc2ggPSBoYXNoID8gYCMke2hhc2h9YCA6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMF07XHJcbiAgaGlzdG9yeS5wdXNoU3RhdGUoJycsICcnLCBoYXNoKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBnZXQgaGFzaCBmcm9tIHVybFxyXG4gKiBAcmV0dXJucyBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRIYXNoID0gKCkgPT4ge1xyXG4gIGlmIChsb2NhdGlvbi5oYXNoKSB7XHJcbiAgICByZXR1cm4gbG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIGJvZHkgbG9ja1xyXG5leHBvcnQgbGV0IGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcclxuLyoqXHJcbiAqIHRvZ2dsZXMgYm9keSBsb2NrXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJvZHlMb2NrVG9nZ2xlID0gKGRlbGF5ID0gNTAwKSA9PiB7XHJcbiAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2xvY2snKSkge1xyXG4gICAgYm9keVVubG9jayhkZWxheSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGJvZHlMb2NrKGRlbGF5KTtcclxuICB9XHJcbn07XHJcbi8qKlxyXG4gKiB1bmxvY2tzIGJvZHlcclxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYm9keVVubG9jayA9IChkZWxheSA9IDUwMCkgPT4ge1xyXG4gIGlmIChib2R5TG9ja1N0YXR1cykge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJyk7XHJcbiAgICB9LCBkZWxheSk7XHJcbiAgICBib2R5TG9ja1N0YXR1cyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcclxuICAgIH0sIGRlbGF5KTtcclxuICB9XHJcbn07XHJcbi8qKlxyXG4gKiBsb2NrcyBib2R5XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJvZHlMb2NrID0gKGRlbGF5ID0gNTAwKSA9PiB7XHJcbiAgaWYgKGJvZHlMb2NrU3RhdHVzKSB7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbG9jaycpO1xyXG5cclxuICAgIGJvZHlMb2NrU3RhdHVzID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgYm9keUxvY2tTdGF0dXMgPSB0cnVlO1xyXG4gICAgfSwgZGVsYXkpO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJheVxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGF0YVNldFZhbHVlXHJcbiAqIHByb2Nlc3MgbWVkaWEgcmVxdWVzdHMgZnJvbSBhdHRyaWJ1dGVzXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZGF0YU1lZGlhUXVlcmllcyA9IChhcnJheSwgZGF0YVNldFZhbHVlKSA9PiB7XHJcbiAgLy8gZ2V0IG9iamVjdHMgd2l0aCBtZWRpYSBxdWVyaWVzXHJcbiAgY29uc3QgbWVkaWEgPSBBcnJheS5mcm9tKGFycmF5KS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0sIGluZGV4LCBzZWxmKSB7XHJcbiAgICBpZiAoaXRlbS5kYXRhc2V0W2RhdGFTZXRWYWx1ZV0pIHtcclxuICAgICAgcmV0dXJuIGl0ZW0uZGF0YXNldFtkYXRhU2V0VmFsdWVdLnNwbGl0KCcsJylbMF07XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy8gb2JqZWN0cyB3aXRoIG1lZGlhIHF1ZXJpZXMgaW5pdGlhbGl6YXRpb25cclxuICBpZiAobWVkaWEubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBicmVha3BvaW50c0FycmF5ID0gW107XHJcbiAgICBtZWRpYS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBwYXJhbXMgPSBpdGVtLmRhdGFzZXRbZGF0YVNldFZhbHVlXTtcclxuICAgICAgY29uc3QgYnJlYWtwb2ludCA9IHt9O1xyXG4gICAgICBjb25zdCBwYXJhbXNBcnJheSA9IHBhcmFtcy5zcGxpdCgnLCcpO1xyXG4gICAgICBicmVha3BvaW50LnZhbHVlID0gcGFyYW1zQXJyYXlbMF07XHJcbiAgICAgIGJyZWFrcG9pbnQudHlwZSA9IHBhcmFtc0FycmF5WzFdID8gcGFyYW1zQXJyYXlbMV0udHJpbSgpIDogJ21heCc7XHJcbiAgICAgIGJyZWFrcG9pbnQuaXRlbSA9IGl0ZW07XHJcbiAgICAgIGJyZWFrcG9pbnRzQXJyYXkucHVzaChicmVha3BvaW50KTtcclxuICAgIH0pO1xyXG4gICAgLy8gZ2V0IHVuaXF1ZSBicmVha3BvaW50c1xyXG4gICAgbGV0IG1kUXVlcmllcyA9IGJyZWFrcG9pbnRzQXJyYXkubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgJygnICtcclxuICAgICAgICBpdGVtLnR5cGUgK1xyXG4gICAgICAgICctd2lkdGg6ICcgK1xyXG4gICAgICAgIGl0ZW0udmFsdWUgK1xyXG4gICAgICAgICdweCksJyArXHJcbiAgICAgICAgaXRlbS52YWx1ZSArXHJcbiAgICAgICAgJywnICtcclxuICAgICAgICBpdGVtLnR5cGVcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgbWRRdWVyaWVzID0gdW5pcXVlQXJyYXkobWRRdWVyaWVzKTtcclxuICAgIGNvbnN0IG1kUXVlcmllc0FycmF5ID0gW107XHJcblxyXG4gICAgaWYgKG1kUXVlcmllcy5sZW5ndGgpIHtcclxuICAgICAgLy8gd29yayB3aXRoIGV2ZXJ5IGJyZWFrcG9pbnRcclxuICAgICAgbWRRdWVyaWVzLmZvckVhY2goYnJlYWtwb2ludCA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zQXJyYXkgPSBicmVha3BvaW50LnNwbGl0KCcsJyk7XHJcbiAgICAgICAgY29uc3QgbWVkaWFCcmVha3BvaW50ID0gcGFyYW1zQXJyYXlbMV07XHJcbiAgICAgICAgY29uc3QgbWVkaWFUeXBlID0gcGFyYW1zQXJyYXlbMl07XHJcbiAgICAgICAgY29uc3QgbWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKHBhcmFtc0FycmF5WzBdKTtcclxuICAgICAgICAvLyBvYmplY3RzIHdpdGggY29uZGl0aW9uc1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zQXJyYXkgPSBicmVha3BvaW50c0FycmF5LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPT09IG1lZGlhQnJlYWtwb2ludCAmJiBpdGVtLnR5cGUgPT09IG1lZGlhVHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBtZFF1ZXJpZXNBcnJheS5wdXNoKHtcclxuICAgICAgICAgIGl0ZW1zQXJyYXksXHJcbiAgICAgICAgICBtYXRjaE1lZGlhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIG1kUXVlcmllc0FycmF5O1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBzbW9vdGhseSBzbGlkZXMgdXBcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3dtb3JlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgX3NsaWRlVXAgPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCwgc2hvd21vcmUgPSAwKSA9PiB7XHJcbiAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xyXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ19zbGlkZScpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdoZWlnaHQsIG1hcmdpbiwgcGFkZGluZyc7XHJcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xyXG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGAke3RhcmdldC5vZmZzZXRIZWlnaHR9cHhgO1xyXG4gICAgdGFyZ2V0Lm9mZnNldEhlaWdodDtcclxuICAgIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHNob3dtb3JlID8gYCR7c2hvd21vcmV9cmVtYCA6IGAwYDtcclxuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcclxuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcclxuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRhcmdldC5oaWRkZW4gPSAhc2hvd21vcmUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICFzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JykgOiBudWxsO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpO1xyXG4gICAgICAhc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93JykgOiBudWxsO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XHJcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdfc2xpZGUnKTtcclxuICAgICAgLy8gY3JlYXRlIGV2ZW50XHJcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCdzbGlkZVVwRG9uZScsIHtcclxuICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0sIGR1cmF0aW9uKTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogc21vb3RobHkgc2xpZGVzIGRvd25cclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3dtb3JlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgX3NsaWRlRG93biA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwLCBzaG93bW9yZSA9IDApID0+IHtcclxuICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XHJcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnX3NsaWRlJyk7XHJcbiAgICB0YXJnZXQuaGlkZGVuID0gdGFyZ2V0LmhpZGRlbiA/IGZhbHNlIDogbnVsbDtcclxuICAgIHNob3dtb3JlID8gdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKSA6IG51bGw7XHJcbiAgICBsZXQgaGVpZ2h0ID0gdGFyZ2V0Lm9mZnNldEhlaWdodDtcclxuICAgIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHNob3dtb3JlID8gYCR7c2hvd21vcmV9cmVtYCA6IGAwYDtcclxuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcclxuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcclxuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdoZWlnaHQsIG1hcmdpbiwgcGFkZGluZyc7XHJcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xyXG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJyk7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJyk7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKTtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpO1xyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKTtcclxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ19zbGlkZScpO1xyXG4gICAgICAvLyBjcmVhdGUgZXZlbnRcclxuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ3NsaWRlRG93bkRvbmUnLCB7XHJcbiAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9LCBkdXJhdGlvbik7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIHRvZ2dsZXMgc21vb3RoIHNsaWRlXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxyXG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cclxuICogQHJldHVybnMgZnVuY3Rpb25cclxuICovXHJcbmV4cG9ydCBjb25zdCBfc2xpZGVUb2dnbGUgPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCkgPT4ge1xyXG4gIGlmICh0YXJnZXQuaGlkZGVuKSB7XHJcbiAgICByZXR1cm4gX3NsaWRlRG93bih0YXJnZXQsIGR1cmF0aW9uKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIF9zbGlkZVVwKHRhcmdldCwgZHVyYXRpb24pO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBjb252ZXJ0cyByZW0gdG8gcGl4ZWxzXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSByZW1WYWx1ZVxyXG4gKiBAcmV0dXJucyBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1Ub1B4KHJlbVZhbHVlKSB7XHJcbiAgLy8g0J/QvtC70YPRh9Cw0LXQvCDRgtC10LrRg9GJ0LjQuSDQsdCw0LfQvtCy0YvQuSDRgNCw0LfQvNC10YAg0YjRgNC40YTRgtCwIChmb250LXNpemUpINC40Lcg0Y3Qu9C10LzQtdC90YLQsCA8aHRtbD5cclxuICB2YXIgaHRtbEZvbnRTaXplID0gcGFyc2VGbG9hdChcclxuICAgIGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5mb250U2l6ZVxyXG4gICk7XHJcblxyXG4gIC8vINCf0LXRgNC10LLQvtC00LjQvCDQt9C90LDRh9C10L3QuNC1INC40LcgcmVtINCyIHB4XHJcbiAgdmFyIHB4VmFsdWUgPSByZW1WYWx1ZSAqIGh0bWxGb250U2l6ZTtcclxuXHJcbiAgLy8g0J7QutGA0YPQs9C70Y/QtdC8INC30L3QsNGH0LXQvdC40LUg0LTQviDRhtC10LvRi9GFINC/0LjQutGB0LXQu9C10LkgKNC/0L4g0LbQtdC70LDQvdC40Y4pXHJcbiAgcmV0dXJuIE1hdGgucm91bmQocHhWYWx1ZSkgKyAncHgnO1xyXG59XHJcblxyXG4vLyByZW1vdmUgY2xhc3MgZnJvbSBhbGwgYXJyYXkgZWxlbWVudHNcclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNsYXNzZXMgPSAoYXJyYXksIGNsYXNzTmFtZSkgPT4ge1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgIGFycmF5W2ldLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICB9XHJcbn07XHJcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRXVjbGlkIENpcmN1bGFyIEFcIjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgc3JjOiB1cmwoXCIuL2Fzc2V0cy9mb250cy9FdWNsaWQtQ2lyY3VsYXItQS1MaWdodC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJFdWNsaWQgQ2lyY3VsYXIgQVwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChcIi4vYXNzZXRzL2ZvbnRzL0V1Y2xpZC1DaXJjdWxhci1BLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRXVjbGlkIENpcmN1bGFyIEFcIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiB1cmwoXCIuL2Fzc2V0cy9mb250cy9FdWNsaWQtQ2lyY3VsYXItQS1NZWRpdW0ud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRXVjbGlkIENpcmN1bGFyIEFcIjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgc3JjOiB1cmwoXCIuL2Fzc2V0cy9mb250cy9FdWNsaWQtQ2lyY3VsYXItQS1TZW1pQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJFdWNsaWQgQ2lyY3VsYXIgQVwiO1xuICBmb250LXdlaWdodDogNzAwO1xuICBzcmM6IHVybChcIi4vYXNzZXRzL2ZvbnRzL0V1Y2xpZC1DaXJjdWxhci1BLUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU3BhY2UgQWdlXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKFwiLi9hc3NldHMvZm9udHMvU3BhY2UtQWdlLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNwYWNlIEFnZSBDeXJpbGxpY1wiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChcIi4vYXNzZXRzL2ZvbnRzL1NwYWNlLUFnZS1DeXJpbGxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJFdXJvcGVFeHRlbmRlZENcIjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoXCIuL2Fzc2V0cy9mb250cy9FdXJvcGUtRXh0ZW5kZWQtQy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwge1xuICBmb250LWZhbWlseTogXCJFdWNsaWQgQ2lyY3VsYXIgQVwiO1xuICBmb250LXNpemU6IDAuNTIwODMzNXZ3O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBidWdmaXggaW5maW5pdGUgMXM7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYnVnZml4IGluZmluaXRlIDFzO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxNjUzO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGJ1Z2ZpeCBpbmZpbml0ZSAxcztcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmEge1xuICBjb2xvcjogdW5zZXQ7XG59XG5cbmEsXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5idXR0b24sXG5pbnB1dCxcbmEsXG50ZXh0YXJlYSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udDogaW5oZXJpdDtcbn1cbmJ1dHRvbjpmb2N1cyxcbmlucHV0OmZvY3VzLFxuYTpmb2N1cyxcbnRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmJ1dHRvbjphY3RpdmUsXG5pbnB1dDphY3RpdmUsXG5hOmFjdGl2ZSxcbnRleHRhcmVhOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxucCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250OiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxudWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbnVsIGxpIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDE2MHJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cblxuc3ZnLFxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbmh0bWwubG9jayxcbmh0bWwubG9jayBib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxubWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi53cmFwcGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogMTkyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMi4zcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5oZWFkZXJfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhlYWRlcl9fYnVyZ2VyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oZWFkZXJfX2xvZ28ge1xuICBtYXgtd2lkdGg6IDE3LjhyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUuN3JlbTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaGVhZGVyX19sb2dvIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5oZWFkZXJfX21lbnUtY29udGFjdHMge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhlYWRlcl9fbmF2LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDYuM3JlbTtcbn1cbi5oZWFkZXJfX25hdi1pdGVtLWljb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhlYWRlcl9fbmF2LWl0ZW0tZHJvcGRvd24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhlYWRlcl9fbmF2LWl0ZW0tbGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogM3JlbTtcbiAgdHJhbnNpdGlvbjogMC4zcyBjb2xvciBlYXNlO1xufVxuLmhlYWRlcl9fbmF2LWl0ZW0tbGluazpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjkpO1xufVxuLmhlYWRlcl9fY29udGFjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEuN3JlbTtcbn1cbi5oZWFkZXJfX2NvbnRhY3RzOmhvdmVyIC5oZWFkZXJfX2NvbnRhY3RzLXRpdGxlIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OSk7XG59XG4uaGVhZGVyX19jb250YWN0czpob3ZlciBzdmcgcGF0aCB7XG4gIHN0cm9rZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY5KTtcbn1cbi5oZWFkZXJfX2NvbnRhY3RzLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcbn1cbi5oZWFkZXJfX2NvbnRhY3RzIHN2ZyB7XG4gIG1heC13aWR0aDogMi40cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyLjRyZW07XG59XG4uaGVhZGVyX19jb250YWN0cyBzdmcgcGF0aCB7XG4gIHRyYW5zaXRpb246IDAuM3Mgc3Ryb2tlIGVhc2U7XG59XG4uaGVhZGVyIC5oYW1idXJnZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiA0LjZyZW07XG4gIGhlaWdodDogMy42cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGVhZGVyIC5oYW1idXJnZXIgc3BhbiwgLmhlYWRlciAuaGFtYnVyZ2VyOjpiZWZvcmUsIC5oZWFkZXIgLmhhbWJ1cmdlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRyYW5zaXRpb246IHRvcCAwLjNzIGVhc2UsIHdpZHRoIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm90dG9tIDAuM3MgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbn1cbi5oZWFkZXIgLmhhbWJ1cmdlcjo6YmVmb3JlIHtcbiAgdG9wOiAwO1xufVxuLmhlYWRlciAuaGFtYnVyZ2VyOjphZnRlciB7XG4gIGJvdHRvbTogMDtcbn1cbi5oZWFkZXIgLmhhbWJ1cmdlciBzcGFuIHtcbiAgdG9wOiBjYWxjKDUwJSAtIDFweCk7XG59XG4uX21lbnUtb3BlbmVkIC5oZWFkZXIgLmhhbWJ1cmdlciBzcGFuIHtcbiAgd2lkdGg6IDA7XG59XG4uX21lbnUtb3BlbmVkIC5oZWFkZXIgLmhhbWJ1cmdlcjo6YmVmb3JlIHtcbiAgdG9wOiBjYWxjKDUwJSAtIDFweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4uX21lbnUtb3BlbmVkIC5oZWFkZXIgLmhhbWJ1cmdlcjo6YWZ0ZXIge1xuICBib3R0b206IGNhbGMoNTAlIC0gMXB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLl9tZW51LW9wZW5lZCAuaGVhZGVyIC5oYW1idXJnZXIgc3BhbiwgLl9tZW51LW9wZW5lZCAuaGVhZGVyIC5oYW1idXJnZXI6OmJlZm9yZSwgLl9tZW51LW9wZW5lZCAuaGVhZGVyIC5oYW1idXJnZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiU3BhY2UgQWdlXCI7XG4gIGZvbnQtc2l6ZTogOXJlbTtcbn1cblxuLnN1YnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiU3BhY2UgQWdlXCI7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLnR4dDMwIHtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4udHh0MTYge1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmN5ciB7XG4gIGZvbnQtZmFtaWx5OiBcIlNwYWNlIEFnZSBDeXJpbGxpY1wiO1xufVxuXG4uYnRuIHtcbiAgcGFkZGluZzogMC42cmVtIDAuNnJlbSAwLjZyZW0gMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMnJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4KTtcbiAgYm9yZGVyLXJhZGl1czogMCA0cmVtIDRyZW0gNHJlbTtcbn1cbi5idG5fX2Fycm93LXdyYXAge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDAgMCA0cmVtO1xuICB3aWR0aDogNC40cmVtO1xuICBoZWlnaHQ6IDQuNHJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLmJ0bl9fYXJyb3ctaWNvbiB7XG4gIHdpZHRoOiAyLjRyZW07XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbmlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dFt0eXBlPWVtYWlsXSxcbmlucHV0W3R5cGU9dGVsXSxcbnRleHRhcmVhIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbnRleHRhcmVhOmZvY3VzLFxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDQuNnJlbSAyLjdyZW0gMnJlbSAyLjdyZW07XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcbn1cbi5pbnB1dF90ZXh0YXJlYSB7XG4gIGhlaWdodDogMjUuNXJlbTtcbn1cbi5pbnB1dF90ZXh0YXJlYSB0ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgcmVzaXplOiBub25lO1xufVxuLmlucHV0X19maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5pbnB1dF9fZmllbGQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uaW5wdXRfX2xhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEuOHJlbTtcbiAgbGVmdDogMi43cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvcGFjaXR5OiAwLjU7XG59XG4uc2VsZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlbGVjdF9fYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWxlY3RfX3RpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAzO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2VsZWN0X192YWx1ZSB7XG4gIHBhZGRpbmc6IDEuM3JlbSAxLjNyZW0gMS4zcmVtIDIuN3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJyZW07XG4gIGhlaWdodDogNy4ycmVtO1xuICB3aWR0aDogMTAwJTtcbn1cbi5zZWxlY3RfX3ZhbHVlID4gKiB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLnNlbGVjdF9fdmFsdWU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAwIDAgNXJlbTtcbiAgd2lkdGg6IDVyZW07XG4gIGhlaWdodDogNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9pY29ucy9hcnItd2hpdGUuc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyLjRyZW07XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cbi5zZWxlY3RfX3ZhbHVlLl9zZWxlY3QtbGFiZWw6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1zZWwtbGFiZWwpO1xufVxuLl9zZWxlY3QtZmlsbGVkIC5zZWxlY3RfX3ZhbHVlLl9zZWxlY3QtbGFiZWw6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc2VsZWN0X192YWx1ZS5fc2VsZWN0LWxhYmVsOjpiZWZvcmUsXG4uc2VsZWN0X192YWx1ZSAuc2VsZWN0X19jb250ZW50IHtcbiAgbWF4LXdpZHRoOiAzMS40cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5zZWxlY3RfX2NvbnRlbnQ6bm90KC5fc2VsZWN0LWZpbGxlZCAuc2VsZWN0X19jb250ZW50KSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc2VsZWN0X190ZXh0IHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4uc2VsZWN0X19pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnNlbGVjdF9fb3B0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgdG9wOiBjYWxjKDEwMCUgLSAzcmVtKTtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogNC42cmVtIDIuN3JlbSAyLjRyZW0gMi43cmVtO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAzcmVtIDNyZW07XG4gIGJhY2tncm91bmQ6ICMzNjM5NmM7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcbn1cbi5zZWxlY3RfX3Njcm9sbCB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgbWF4LWhlaWdodDogMTlyZW07XG59XG4uc2VsZWN0X19zY3JvbGwuc2ltcGxlYmFyLXNjcm9sbGFibGUteSAuc2ltcGxlYmFyLXRyYWNrLnNpbXBsZWJhci12ZXJ0aWNhbCB7XG4gIHJpZ2h0OiAxLjJyZW07XG4gIHdpZHRoOiAwLjRyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTdlZTtcbn1cbi5zZWxlY3RfX3Njcm9sbC5zaW1wbGViYXItc2Nyb2xsYWJsZS15IC5zaW1wbGViYXItc2Nyb2xsYmFyIHtcbiAgbWluLWhlaWdodDogMy4ycmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMmFkYzE7XG59XG4uc2VsZWN0X19vcHRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xufVxuLnNlbGVjdF9fb3B0aW9uOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59XG4uc2VsZWN0X19vcHRpb24uX3NlbGVjdC1zZWxlY3RlZCB7XG4gIGNvbG9yOiAjMjlmZjdmO1xufVxuLnNlbGVjdF9fZ3JvdXAge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbn1cbi5zZWxlY3RfX2hpbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYygxMDAlICsgMC44cmVtKTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGxpbmUtaGVpZ2h0OiAxNDIuODU3JTtcbn1cbi5zZWxlY3RfX3N1YnRpdGxlIHtcbiAgY3Vyc29yOiB0ZXh0O1xufVxuLnNlbGVjdC5fc2VsZWN0LW9wZW5lZCB7XG4gIHotaW5kZXg6IDU7XG59XG4uc2VsZWN0Ll9zZWxlY3Qtb3BlbmVkIC5zZWxlY3RfX3ZhbHVlOjphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xufVxuLl9zZWxlY3QtbGlzdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJhZGdlIHtcbiAgcGFkZGluZzogMXJlbSAzcmVtIDFyZW0gMXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDIuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XG59XG4uYmFkZ2UuX2FjdGl2ZSB7XG4gIGNvbG9yOiAjMTQwYTNmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLmJhZGdlLl9hY3RpdmUgLmJhZGdlX19pY29uLXdyYXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgyNjc4O1xufVxuLmJhZGdlLl9hY3RpdmUgLmJhZGdlX19pY29uLXdyYXA6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc3Rhci1hY3RpdmUuc3ZnKTtcbn1cbi5iYWRnZV9faWNvbi13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAwIDAgNC41cmVtO1xuICB3aWR0aDogNC41cmVtO1xuICBoZWlnaHQ6IDQuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcbn1cbi5iYWRnZV9faWNvbi13cmFwOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA4cmVtO1xuICBoZWlnaHQ6IDhyZW07XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc3Rhci5zdmcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uaW50cm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IC04cmVtO1xuICBoZWlnaHQ6IDEwOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTAuNXJlbTtcbn1cbi5pbnRybyAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmludHJvOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzEwMTY1MyAwJSwgcmdiYSgyMywgMTUsIDY3LCAwKSA2My40NSUpO1xuICB6LWluZGV4OiAtMTtcbiAgaW5zZXQ6IDA7XG4gIGJvdHRvbTogLTAuNXJlbTtcbn1cbi5pbnRyb19fY29udGVudCB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAxMS43cmVtO1xufVxuLmludHJvX190aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICBtYXJnaW4tYm90dG9tOiA1LjNyZW07XG59XG4uaW50cm9fX3Bvc3Rlci1pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuLmludHJvX19wb3N0ZXItaW1hZ2UgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5pbnRyb19fcmVxdWVzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMy43cmVtO1xuICBtYXJnaW4tYm90dG9tOiA1LjlyZW07XG59XG4uaW50cm9fX3JlcXVlc3QtcHJvamVjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEuOHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmludHJvX19yZXF1ZXN0LXByb2plY3RzOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTJyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDAuMnJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuLmludHJvX19yZXF1ZXN0LXByb2plY3RzLWNvdW50ZXIge1xuICB3aWR0aDogNS44cmVtO1xuICBoZWlnaHQ6IDUuOHJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMjlmZjdmO1xufVxuLmludHJvX19yZXF1ZXN0LXByb2plY3RzLWNvdW50ZXIgc3BhbiB7XG4gIGNvbG9yOiAjMWExYTFhO1xuICBmb250LWZhbWlseTogXCJTcGFjZSBBZ2UgQ3lyaWxsaWNcIjtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEuNnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmludHJvX19yZXF1ZXN0LXByb2plY3RzLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cbi5pbnRyb19fYXJ0aWNsZXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoNTFyZW0sIDFmcikpO1xuICBnYXA6IDMuN3JlbTtcbn1cbi5pbnRyb19fYXJ0aWNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW50cm9fX2FydGljbGUtbGluayB7XG4gIHBhZGRpbmc6IDEuMXJlbSA2cmVtIDEuMXJlbSA0LjFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAycmVtO1xufVxuLmludHJvX19hcnRpY2xlLWxpbms6aG92ZXIge1xuICBjb2xvcjogIzI5ZmY3Zjtcbn1cbi5pbnRyb19fYXJ0aWNsZS1saW5rLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbWF4LXdpZHRoOiAxNXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcbn1cbi5pbnRyb19fYXJ0aWNsZS1saW5rLWltYWdlIHtcbiAgbWF4LXdpZHRoOiAyMC4ycmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMC4ycmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uaW50cm9fX2FydGljbGUtbGluay1pbWFnZSBpbWcge1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaW50cm9fX2FydGljbGUtbGluay1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFyZW07XG4gIHJpZ2h0OiAxLjNyZW07XG4gIHBhZGRpbmc6IDAuNnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcbiAgbWF4LXdpZHRoOiA0LjZyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQuNnJlbTtcbiAgdHJhbnNpdGlvbjogMC4zcyBiYWNrZ3JvdW5kIGVhc2U7XG59XG4uaW50cm9fX2FydGljbGUtbGluay1pY29uIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnByb21vdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDMxcmVtO1xufVxuLnByb21vdGlvbl9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDAgMS41cmVtIDAgMi45cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvbW90aW9uX19jb250ZW50OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCIzXCI7XG4gIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuNXJlbTtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogcmdiYSg0MSwgMjU1LCAxMjcsIDAuMSk7XG4gIGZvbnQtZmFtaWx5OiBcIlNwYWNlIEFnZSBDeXJpbGxpY1wiO1xuICBmb250LXNpemU6IDcwcmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMTAxNjUzO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdG9wOiAtMzRyZW07XG4gIHotaW5kZXg6IC0xO1xufVxuLnByb21vdGlvbl9fYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnByb21vdGlvbl9fYmxvY2s6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuLnByb21vdGlvbl9fYmxvY2s6bnRoLWNoaWxkKGV2ZW4pIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAzNHJlbTtcbn1cbi5wcm9tb3Rpb25fX3N1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLm1hcmtldGluZ19faW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xNS4ycmVtO1xuICB0b3A6IC0xMnJlbTtcbiAgbWF4LXdpZHRoOiA3NHJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFya2V0aW5nX19jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5tYXJrZXRpbmdfX3RpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogNC44cmVtO1xufVxuLm1hcmtldGluZ19faW5mbyB7XG4gIG1heC13aWR0aDogNTFyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMjFyZW07XG59XG4ubWFya2V0aW5nX19pbmZvLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDQuMXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xufVxuLm1hcmtldGluZ19faW5mby1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYXJrZXRpbmdfX2luZm8taXRlbSB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFya2V0aW5nX19pbmZvLWl0ZW06OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMC41cmVtO1xuICBoZWlnaHQ6IDAuNXJlbTtcbiAgdG9wOiAxLjVyZW07XG4gIGxlZnQ6IC0ycmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4ubWFya2V0aW5nX19pbmZvLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbWF4LXdpZHRoOiAyMS43cmVtO1xufVxuXG5maWd1cmUge1xuICBtYXJnaW46IDA7XG59XG5cbmJvZHk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC44cyBlYXNlIDBzO1xufVxuLl9tZW51LW9wZW5lZCBib2R5OjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xuICAudHh0MjUge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiA1cHg7XG4gICAgZm9udC1zaXplOiAxLjU2MjV2dztcbiAgICBmb250LXNpemU6IDEuMzMzMzMzMzMzM3Z3O1xuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcbiAgfVxuICBib2R5IHtcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyLjhyZW07XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAzLjJyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmhlYWRlciB7XG4gICAgcGFkZGluZy10b3A6IDMuNnJlbTtcbiAgfVxuICAuaGVhZGVyX19jb250ZW50IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XG4gICAgZ2FwOiAxNnJlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGdhcCBlYXNlO1xuICB9XG4gIC5fbWVudS1vcGVuZWQgLmhlYWRlcl9fY29udGVudCB7XG4gICAgZ2FwOiAxMS42cmVtO1xuICB9XG4gIC5fbWVudS1vcGVuZWQgLmhlYWRlcl9fY29udGVudDo6YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLmhlYWRlcl9fYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuaGVhZGVyX19sb2dvIHtcbiAgICBtYXgtd2lkdGg6IDI3cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOC42cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIC5oZWFkZXJfX21lbnUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDcuNHJlbSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2U7XG4gICAgYmFja2dyb3VuZDogIzEwMTY1MztcbiAgICBwYWRkaW5nOiAyMS40cmVtIDUuMnJlbSA4LjhyZW0gNy44cmVtO1xuICB9XG4gIC5fbWVudS1vcGVuZWQgLmhlYWRlcl9fbWVudSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgLmhlYWRlcl9fbWVudS1jb250YWN0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XG4gIH1cbiAgLmhlYWRlcl9fbWVudS1jb250YWN0cy1pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjRyZW07XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42Nyk7XG4gICAgZm9udC1zaXplOiAzLjJyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIH1cbiAgLmhlYWRlcl9fbWVudS1jb250YWN0cy1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgYm9yZGVyOiAwLjRyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4KTtcbiAgICBib3JkZXItcmFkaXVzOiAwcmVtIDI0cmVtIDI0cmVtIDI0cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG4gICAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gNHJlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGJvcmRlciBlYXNlO1xuICB9XG4gIC5oZWFkZXJfX21lbnUtY29udGFjdHMtYnV0dG9uOmFjdGl2ZSB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIH1cbiAgLmhlYWRlcl9fbWVudS1jb250YWN0cy1idXR0b246YWN0aXZlIHNwYW4ge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjkpO1xuICB9XG4gIC5oZWFkZXJfX21lbnUtY29udGFjdHMtYnV0dG9uOmFjdGl2ZSAuaGVhZGVyX19tZW51LWNvbnRhY3RzLWJ1dHRvbi1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjkpO1xuICB9XG4gIC5oZWFkZXJfX21lbnUtY29udGFjdHMtYnV0dG9uIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBjb2xvciBlYXNlO1xuICB9XG4gIC5oZWFkZXJfX21lbnUtY29udGFjdHMtYnV0dG9uLWljb24ge1xuICAgIHBhZGRpbmc6IDEuNHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBtYXgtd2lkdGg6IDYuOHJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYuOHJlbTtcbiAgfVxuICAuaGVhZGVyX19tZW51LWNvbnRhY3RzLWJ1dHRvbi1pY29uIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5oZWFkZXJfX25hdiB7XG4gICAgbWF4LWhlaWdodDogMTAxcmVtO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5oZWFkZXJfX25hdi1saXN0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogNy4ycmVtO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS4tLWFjdGl2ZSBhIHtcbiAgICBjb2xvcjogIzI5ZmY3ZjtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS1oZWFkaW5nIHtcbiAgICB3aWR0aDogOTglO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtLWhlYWRpbmcuLS1hY3RpdmUgLmhlYWRlcl9fbmF2LWl0ZW0taWNvbiB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIH1cbiAgLmhlYWRlcl9fbmF2LWl0ZW0taGVhZGluZy4tLWFjdGl2ZSB+IC5oZWFkZXJfX25hdi1pdGVtLWRyb3Bkb3duIHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS1oZWFkaW5nLi0tYWN0aXZlIH4gLmhlYWRlcl9fbmF2LWl0ZW0tZHJvcGRvd24gLmhlYWRlcl9fbmF2LWl0ZW0tZHJvcGRvd24td3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS1oZWFkaW5nIGEge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtLWljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtIGVhc2U7XG4gIH1cbiAgLmhlYWRlcl9fbmF2LWl0ZW0tZHJvcGRvd24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwZnI7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBncmlkLXRlbXBsYXRlLXJvd3MgZWFzZTtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS1kcm9wZG93bi13cmFwcGVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IDAuM3MgbWFyZ2luIGVhc2U7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQuOHJlbTtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS1kcm9wZG93bi1pdGVtIHtcbiAgICBmb250LXNpemU6IDMuMnJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS1kcm9wZG93bi1pdGVtOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtLWxpbmsge1xuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICB9XG4gIC5oZWFkZXJfX2NvbnRhY3RzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgfVxuICAuaGVhZGVyX19jb250YWN0cy10aXRsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaGVhZGVyX19jb250YWN0cyBzdmcge1xuICAgIG1heC13aWR0aDogNC44cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNC44cmVtO1xuICB9XG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiA2cmVtO1xuICB9XG4gIC5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICB9XG4gIC50eHQzMCB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICB9XG4gIC50eHQxNiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIC5idG4ge1xuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDRyZW07XG4gICAgY29sdW1uLWdhcDogMy4ycmVtO1xuICAgIGJvcmRlcjogMC40cmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OCk7XG4gICAgYm9yZGVyLXJhZGl1czogMCA4cmVtIDhyZW0gOHJlbTtcbiAgfVxuICAuYnRuX19hcnJvdy13cmFwIHtcbiAgICBmbGV4OiAwIDAgN3JlbTtcbiAgICB3aWR0aDogN3JlbTtcbiAgICBoZWlnaHQ6IDdyZW07XG4gIH1cbiAgLmJ0bl9fYXJyb3ctaWNvbiB7XG4gICAgd2lkdGg6IDMuOHJlbTtcbiAgfVxuICAuaW5wdXQge1xuICAgIHBhZGRpbmc6IDdyZW0gOHJlbSAyLjRyZW0gMi40cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRyZW07XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRyZW0pO1xuICB9XG4gIC5pbnB1dF90ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiAzNC44cmVtO1xuICB9XG4gIC5pbnB1dF9fbGFiZWwge1xuICAgIHRvcDogMi40cmVtO1xuICAgIGxlZnQ6IDIuNHJlbTtcbiAgfVxuICAuc2VsZWN0X190aXRsZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNHJlbTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHJlbSk7XG4gIH1cbiAgLnNlbGVjdF9fdmFsdWUge1xuICAgIHBhZGRpbmc6IDEuNnJlbTtcbiAgICBnYXA6IDRyZW07XG4gICAgaGVpZ2h0OiAxMHJlbTtcbiAgfVxuICAuc2VsZWN0X192YWx1ZTo6YWZ0ZXIge1xuICAgIGZsZXg6IDAgMCA2cmVtO1xuICAgIHdpZHRoOiA2cmVtO1xuICAgIGhlaWdodDogNnJlbTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMuMnJlbTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMi40cmVtKTtcbiAgfVxuICAuc2VsZWN0X19vcHRpb25zIHtcbiAgICB0b3A6IGNhbGMoMTAwJSAtIDRyZW0pO1xuICAgIHBhZGRpbmc6IDhyZW0gNHJlbSA0cmVtIDRyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDRyZW0gNHJlbTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHJlbSk7XG4gIH1cbiAgLnNlbGVjdF9fb3B0aW9uOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XG4gIH1cbiAgLmJhZGdlIHtcbiAgICBwYWRkaW5nOiAycmVtIDhyZW0gMnJlbSAycmVtO1xuICAgIGNvbHVtbi1nYXA6IDNyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNnJlbTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHJlbSk7XG4gIH1cbiAgLmJhZGdlX19pY29uLXdyYXAge1xuICAgIGZsZXg6IDAgMCA2cmVtO1xuICAgIHdpZHRoOiA2cmVtO1xuICAgIGhlaWdodDogNnJlbTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHJlbSk7XG4gIH1cbiAgLmJhZGdlX19pY29uLXdyYXA6OmJlZm9yZSB7XG4gICAgd2lkdGg6IDEwcmVtO1xuICAgIGhlaWdodDogMTByZW07XG4gIH1cbiAgLmludHJvIHtcbiAgICBoZWlnaHQ6IDE2NHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNS41cmVtO1xuICB9XG4gIC5pbnRybyB7XG4gICAgbWFyZ2luLXRvcDogLTE2cmVtO1xuICB9XG4gIC5pbnRyb19fdGl0bGUge1xuICAgIGxpbmUtaGVpZ2h0OiA4NSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNy4zcmVtO1xuICB9XG4gIC5pbnRyb19fdGl0bGUgc3BhbiB7XG4gICAgY29sb3I6ICMyOWZmN2Y7XG4gIH1cbiAgLmludHJvX19wb3N0ZXItaW1hZ2UgaW1nIHtcbiAgICBvYmplY3QtcG9zaXRpb246IC0xNDByZW07XG4gIH1cbiAgLmludHJvX19yZXF1ZXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxN3JlbTtcbiAgICBnYXA6IDVyZW07XG4gIH1cbiAgLmludHJvX19yZXF1ZXN0LXByb2plY3RzOjphZnRlciB7XG4gICAgbGVmdDogLTNyZW07XG4gICAgd2lkdGg6IDAuNHJlbTtcbiAgfVxuICAuaW50cm9fX3JlcXVlc3QtcHJvamVjdHMge1xuICAgIGdhcDogMi40cmVtO1xuICB9XG4gIC5pbnRyb19fcmVxdWVzdC1wcm9qZWN0cy1jb3VudGVyIHtcbiAgICB3aWR0aDogOC44cmVtO1xuICAgIGhlaWdodDogOC44cmVtO1xuICB9XG4gIC5pbnRyb19fcmVxdWVzdC1wcm9qZWN0cy1jb3VudGVyIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMi40OHJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMC43NzM1cmVtO1xuICAgIG1hcmdpbi10b3A6IDMuNXJlbTtcbiAgfVxuICAuaW50cm9fX3JlcXVlc3QtcHJvamVjdHMtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIH1cbiAgLmludHJvX19hcnRpY2xlcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDE1LjJyZW0sIDFmcikpO1xuICAgIGdhcDogMi44cmVtO1xuICB9XG4gIC5pbnRyb19fYXJ0aWNsZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgfVxuICAuaW50cm9fX2FydGljbGUtbGluayB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIuNnJlbTtcbiAgICBwYWRkaW5nOiAxMS41cmVtIDJyZW0gM3JlbTtcbiAgfVxuICAuaW50cm9fX2FydGljbGUtbGluay10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4gIC5pbnRyb19fYXJ0aWNsZS1saW5rLWltYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWF4LXdpZHRoOiAxNi4ycmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTYuMnJlbTtcbiAgICB0b3A6IC02cmVtO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIH1cbiAgLmludHJvX19hcnRpY2xlLWxpbmstaWNvbiB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBwYWRkaW5nOiAwLjhyZW07XG4gICAgbWF4LXdpZHRoOiA2cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNnJlbTtcbiAgfVxuICAucHJvbW90aW9uX19jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGdhcDogMXJlbTtcbiAgfVxuICAucHJvbW90aW9uX190aXRsZSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcbiAgfVxuICAucHJvbW90aW9uX19ibG9jayB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIGdhcDogMXJlbTtcbiAgfVxuICAucHJvbW90aW9uX19ibG9jazpsYXN0LWNoaWxkIC5wcm9tb3Rpb25fX3RpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucHJvbW90aW9uX19ibG9jazpudGgtY2hpbGQoZXZlbikge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICB9XG4gIC5wcm9tb3Rpb25fX2Jsb2NrOm50aC1jaGlsZChldmVuKSBzcGFuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cbiAgLnByb21vdGlvbl9fYmxvY2s6bnRoLWNoaWxkKG9kZCkge1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgfVxuICAucHJvbW90aW9uX19ibG9jazpudGgtY2hpbGQob2RkKSAucHJvbW90aW9uX190aXRsZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xuICB9XG4gIC5wcm9tb3Rpb25fX3N1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB9XG4gIC5tYXJrZXRpbmdfX2ltYWdlIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIG1heC13aWR0aDogNjhyZW07XG4gIH1cbiAgLm1hcmtldGluZ19fY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAubWFya2V0aW5nX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNC40cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubWFya2V0aW5nX19pbmZvIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgLm1hcmtldGluZ19faW5mby1yb3cge1xuICAgIGdhcDogM3JlbTtcbiAgfVxuICAubWFya2V0aW5nX19pbmZvLWxpc3Qge1xuICAgIGdhcDogMnJlbTtcbiAgfVxuICAubWFya2V0aW5nX19pbmZvLWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB9XG4gIC5tYXJrZXRpbmdfX2luZm8taXRlbTo6YWZ0ZXIge1xuICAgIHRvcDogMC41cmVtO1xuICAgIHdpZHRoOiAxcmVtO1xuICAgIGhlaWdodDogMXJlbTtcbiAgfVxuICAubWFya2V0aW5nX19pbmZvLWRlc2NyaXB0aW9uIHtcbiAgICBtYXgtd2lkdGg6IDMzLjJyZW07XG4gICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgfVxufVxuQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XG4gIC5zZWxlY3RfX29wdGlvbjpob3Zlcjpub3QoLnNlbGVjdF9fb3B0aW9uOmhvdmVyLnNlbGVjdF9fc3VidGl0bGUpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICMyOWZmN2Y7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3NldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zZWN0aW9ucy9oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvX3R5cG8uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3VpL3N0eWxlcy9fYnV0dG9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvX2lucHV0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvX3NlbGVjdC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL19iYWRnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zZWN0aW9ucy9faW50cm8uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc2VjdGlvbnMvX3Byb21vdGlvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zZWN0aW9ucy9fbWFya2V0aW5nLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Rldi91a2lrMC5zY3NzXCIsXCI8bm8gc291cmNlPlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3RUFBQTtBQ0NKO0FERUE7RUFDSSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEVBQUE7QUNBSjtBREdBO0VBQ0ksZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLHlFQUFBO0FDREo7QURJQTtFQUNJLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyRUFBQTtBQ0ZKO0FES0E7RUFDSSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUVBQUE7QUNISjtBRE1BO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBEQUFBO0FDSko7QURPQTtFQUNJLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQ0xKO0FEUUE7RUFDSSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0VBQUE7QUNOSjtBQ3ZDQTs7O0VBR0ksc0JBQUE7QUR5Q0o7O0FDdkNBO0VBQ0ksZ0NESUU7RUNIRixzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FEMENKOztBQ3ZDQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRGJJO0VDY0oseUJEUE07QUFpRFY7O0FDdkNBOztFQUVJLHFDQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUQwQ0o7O0FDeENBO0VBQ0ksWUFBQTtBRDJDSjs7QUN6Q0E7O0VBRUkscUJBQUE7QUQ0Q0o7O0FDekNBOzs7O0VBSUksYUFBQTtFQUNBLGVBQUE7RUFDQSxh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QUE7RVZzcENsQjtFVWhwQ0U7SUFPUSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFVm9wQ1Y7RVdodkNFO0lBUVEsZ0JBQUE7SUFDQSxnQkFBQTtFWHF2Q1Y7RVdqdkNFO0lBUVEsc0JBQUE7RVhxdkNWO0VXanZDRTtJQUlRLHFCQUFBO0lBQ0Esa0JBQUE7RVhxdkNWO0VXanZDRTtJQU1RLGVBQUE7SUFDQSxjQUFBO0VYcXZDVjtFV2x2Q007SUFRUSxTQUFBO0VYc3ZDZDtFV2x2Q007SUFPUSxTQUFBO0VYc3ZDZDtFV2x2Q007SUFPUSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFWHV2Q2Q7RUc5eUNFO0lBVVksV0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VIbXpDZDtFV2x3Q007SUFRUSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VYc3dDZDtBQW5IRjtBYW52Q0E7RU4yS2dCO0lBQ0ksZUFBQTtJQUNBLGNQM0paO0VBdXpCTjtBQWdiRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdFdWNsaWQgQ2lyY3VsYXIgQSc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9FdWNsaWQtQ2lyY3VsYXItQS1MaWdodC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRXVjbGlkIENpcmN1bGFyIEEnO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvRXVjbGlkLUNpcmN1bGFyLUEtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRXVjbGlkIENpcmN1bGFyIEEnO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvRXVjbGlkLUNpcmN1bGFyLUEtTWVkaXVtLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdFdWNsaWQgQ2lyY3VsYXIgQSc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9FdWNsaWQtQ2lyY3VsYXItQS1TZW1pQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRXVjbGlkIENpcmN1bGFyIEEnO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvRXVjbGlkLUNpcmN1bGFyLUEtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU3BhY2UgQWdlJztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL1NwYWNlLUFnZS53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU3BhY2UgQWdlIEN5cmlsbGljJztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL1NwYWNlLUFnZS1DeXJpbGxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRXVyb3BlRXh0ZW5kZWRDJztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0V1cm9wZS1FeHRlbmRlZC1DLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xcclxcbn1cXHJcXG5cIixcIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtaXhpbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuXFxyXFxuQGltcG9ydCAnLi9taXhpbnMnO1xcclxcblxcclxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHZhcmlhYmxlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuXFxyXFxuLy8gZm9udHNcXHJcXG4kc3BhY2VBZ2U6ICdTcGFjZSBBZ2UnO1xcclxcbiRzcGFjZUFnZUN5cjogJ1NwYWNlIEFnZSBDeXJpbGxpYyc7XFxyXFxuJEV1cm9wZUU6ICdFdXJvcGVFeHRlbmRlZEMnO1xcclxcbiRFQ0E6ICdFdWNsaWQgQ2lyY3VsYXIgQSc7XFxyXFxuXFxyXFxuLy8gY29sb3JzXFxyXFxuJHdoaXRlOiAjZmZmZmZmO1xcclxcbiR3aGl0ZS1zZWNvbmRhcnk6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OSk7XFxyXFxuJGJsYWNrOiAjMDAwMDAwO1xcclxcbiRkYXJrUHVycGxlOiAjMTEwNzNiO1xcclxcbiRkYXJrUHVycGxlMjogIzE0MGEzZjtcXHJcXG4kZ3JlZW46ICMyOWZmN2Y7XFxyXFxuJGJsdWU6ICMxODI2Nzg7XFxyXFxuJGJnQ29sb3I6ICMxMDE2NTM7XFxyXFxuXFxyXFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmb250cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG5cXHJcXG4vLyBsb2NhbCBmb250c1xcclxcbkBpbXBvcnQgJy4vZm9udHMnO1xcclxcblxcclxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYmFzZSBzdHlsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuXFxyXFxuLy8gYmFzZSBzY3NzIGZpbGVcXHJcXG5AaW1wb3J0ICcuL3NldCc7XFxyXFxuXFxyXFxuLy8gaHRtbFxcclxcbmh0bWwubG9jayxcXHJcXG5odG1sLmxvY2sgYm9keSB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBtYWluXFxyXFxubWFpbiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZmxleDogMSAxIGF1dG87XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1heC13aWR0aDogMTkyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuXFxyXFxuLy8gaGVhZGVyIC8gZm9vdGVyXFxyXFxuQGltcG9ydCAnLi9zZWN0aW9ucy9oZWFkZXInO1xcclxcbkBpbXBvcnQgJy4vc2VjdGlvbnMvZm9vdGVyJztcXHJcXG5cXHJcXG4vLyB1aVxcclxcbkBpbXBvcnQgJy4uL3VpL3N0eWxlcy91aS5zY3NzJztcXHJcXG5cXHJcXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcblxcclxcbkBpbXBvcnQgJy4vZGV2L3Z6bXNrMS5zY3NzJztcXHJcXG5AaW1wb3J0ICcuL2Rldi9tYXJrdXNETS5zY3NzJztcXHJcXG5AaW1wb3J0ICcuL2Rldi91a2lrMC5zY3NzJztcXHJcXG5AaW1wb3J0ICcuL2Rldi9raWU2ZXIuc2Nzcyc7XFxyXFxuXCIsXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmh0bWwge1xcclxcbiAgICBmb250LWZhbWlseTogJEVDQTsgLy8g0YjRgNC40YTRgiDQv9C+INGD0LzQvtC70YfQsNC90LjRjiDQv9C+INGB0LDQudGC0YNcXHJcXG4gICAgZm9udC1zaXplOiAwLjUyMDgzMzV2dzsgLy8g0L3QsCDRgNCw0LfRgNC10YjQtdC90LjQuCAxOTIwIDAuNTIwODM1dncgPT09IDEwcHhcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYnVnZml4IGluZmluaXRlIDFzO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJ1Z2ZpeCBpbmZpbml0ZSAxcztcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgICBjb2xvcjogJHdoaXRlOyAvLyDRhtCy0LXRgiDQv9C+INGD0LzQvtC70YfQsNC90LjRjiDRgtC10LrRgdGC0LAg0L/QviDRgdCw0LnRgtGDXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ0NvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBidWdmaXggaW5maW5pdGUgMXM7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5hIHtcXHJcXG4gICAgY29sb3I6IHVuc2V0O1xcclxcbn1cXHJcXG5hLFxcclxcbmE6aG92ZXIge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCxcXHJcXG5hLFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250OiBpbmhlcml0O1xcclxcbiAgICAmOmZvY3VzIHtcXHJcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgJjphY3RpdmUge1xcclxcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNiB7XFxyXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxucCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBmb250OiBpbmhlcml0O1xcclxcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxudWwge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbnVsIGxpIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDE2MHJlbTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J251bWJlciddOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcclxcbmlucHV0W3R5cGU9J251bWJlciddOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J251bWJlciddIHtcXHJcXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxyXFxufVxcclxcblxcclxcbnN2ZyxcXHJcXG5pbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSB7XFxyXFxuICAgIGh0bWwge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxyXFxuICAgIGh0bWwge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNTYyNXZ3O1xcclxcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKCgxMDAgLyAzNzUpICogNXZ3KTsgLy8g0LPQtNC1IDM3NSDRjdGC0L4g0YjQuNGA0LjQvdCwINC80L7QsSDQstC10YDRgdC40Lgg0LzQsNC60LXRgtCwXFxyXFxuICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgYm9keSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMy4ycmVtOyAvLyDQsiDQvNC+0LEg0LLQtdGA0YHQuNC4INC+0YLRgdGC0YPQvyDQvtGCINC60YDQsNGPINC30LDQtNCw0LXQvCDQtNC70Y8g0LLRgdC10YUg0LrQvtC90YLQtdC50L3QtdGA0L7Qsiwg0LAg0YLQsNC8INCz0LTQtSDQvdC1INC90YPQttC90L4g0LzQvtC20LXQvCDRgtC+0YfQtdGH0L3QviDRg9Cx0YDQsNGC0YxcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiLFwiLmhlYWRlciB7XFxuICAgIHBhZGRpbmctdG9wOiAyLjNyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTAwO1xcblxcbiAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDMuNnJlbTtcXG4gICAgfVxcblxcbiAgICAmX19jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcXG4gICAgICAgICAgICBnYXA6IDE2cmVtO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgZ2FwIGVhc2U7XFxuXFxuICAgICAgICAgICAgLl9tZW51LW9wZW5lZCAmIHtcXG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBnYXA6IDExLjZyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2J1cmdlciB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19sb2dvIHtcXG4gICAgICAgIEBpbmNsdWRlIHNpemVzKDE3LjhyZW0sIDUuN3JlbSk7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgc2l6ZXMoMjdyZW0sIDguNnJlbSk7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19tZW51IHtcXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNy40cmVtKTtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOlxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMC4zcyBlYXNlLFxcbiAgICAgICAgICAgICAgICBvcGFjaXR5IDAuM3MgZWFzZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmdDb2xvcjtcXG4gICAgICAgICAgICBwYWRkaW5nOiAyMS40cmVtIDUuMnJlbSA4LjhyZW0gNy44cmVtO1xcblxcbiAgICAgICAgICAgIC5fbWVudS1vcGVuZWQgJiB7XFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLWNvbnRhY3RzIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHJlbTtcXG5cXG4gICAgICAgICAgICAgICAgJi1pdGVtIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIuNHJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjcpO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjJyZW07XFxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgJi1idXR0b24ge1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMC40cmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OCk7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcmVtIDI0cmVtIDI0cmVtIDI0cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBnYXA6IDJyZW07XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSA0cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBib3JkZXIgZWFzZTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZS1zZWNvbmRhcnk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtY29udGFjdHMtYnV0dG9uLWljb24ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGUtc2Vjb25kYXJ5O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBjb2xvciBlYXNlO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgJi1pY29uIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjRyZW07XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBzaXplcyg2LjhyZW0sIDYuOHJlbSk7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fbmF2IHtcXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAxcmVtO1xcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1saXN0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiA2LjNyZW07XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgICAgIGdhcDogNy4ycmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtaXRlbSB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgICAgICAgICAgICYuLS1hY3RpdmUge1xcbiAgICAgICAgICAgICAgICAgICAgYSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmVlbjtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLWhlYWRpbmcge1xcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk4JTtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgICAgICAgICAgICAgJi4tLWFjdGl2ZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRlcl9fbmF2LWl0ZW0taWNvbiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICB+IC5oZWFkZXJfX25hdi1pdGVtLWRyb3Bkb3duIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkZXJfX25hdi1pdGVtLWRyb3Bkb3duLXdyYXBwZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIGEge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICYtaWNvbiB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtIGVhc2U7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJi1kcm9wZG93biB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwZnI7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGdyaWQtdGVtcGxhdGUtcm93cyBlYXNlO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICYtd3JhcHBlciB7XFxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBtYXJnaW4gZWFzZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNC44cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICYtaXRlbSB7XFxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLWxpbmsge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcXG5cXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlLXNlY29uZGFyeTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjJyZW07XFxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fY29udGFjdHMge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEuN3JlbTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAuaGVhZGVyX19jb250YWN0cy10aXRsZSB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUtc2Vjb25kYXJ5O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBzdmcge1xcbiAgICAgICAgICAgICAgICBwYXRoIHtcXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJHdoaXRlLXNlY29uZGFyeTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtdGl0bGUge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHN2ZyB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgc2l6ZXMoMi40cmVtLCAyLjRyZW0pO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNpemVzKDQuOHJlbSwgNC44cmVtKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgcGF0aCB7XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3Mgc3Ryb2tlIGVhc2U7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5oYW1idXJnZXIge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgIHdpZHRoOiA0LjZyZW07XFxuICAgICAgICBoZWlnaHQ6IDMuNnJlbTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgIHNwYW4sXFxuICAgICAgICAmOjpiZWZvcmUsXFxuICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgcHNldWRvIHtcXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOlxcbiAgICAgICAgICAgICAgICAgICAgdG9wIDAuM3MgZWFzZSxcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoIDAuM3MgZWFzZSxcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAwLjNzIGVhc2UsXFxuICAgICAgICAgICAgICAgICAgICBib3R0b20gMC4zcyBlYXNlLFxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgIH1cXG4gICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICBib3R0b206IDA7XFxuICAgICAgICB9XFxuICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMXB4KTtcXG4gICAgICAgIH1cXG4gICAgICAgIC5fbWVudS1vcGVuZWQgJiB7XFxuICAgICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMXB4KTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICBib3R0b206IGNhbGMoNTAlIC0gMXB4KTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBzcGFuLFxcbiAgICAgICAgICAgICY6OmJlZm9yZSxcXG4gICAgICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCJAbWl4aW4gcHNldWRvKCkge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBAY29udGVudDtcXG59XFxuXFxuQG1peGluIHNtYWxsLXRhYmxldCB7XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICBAY29udGVudDtcXG4gICAgfVxcbn1cXG5cXG5AbWl4aW4gc2l6ZXMoJHdpZHRoLCAkaGVpZ2h0KSB7XFxuICAgIG1heC13aWR0aDogJHdpZHRoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xcblxcbiAgICBAY29udGVudDtcXG59XFxuXFxuQG1peGluIGl0ZW0tZG90KCkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICY6OmFmdGVyIHtcXG4gICAgICAgIEBpbmNsdWRlIHBzZXVkbyB7XFxuICAgICAgICAgICAgd2lkdGg6IDAuNXJlbTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDAuNXJlbTtcXG4gICAgICAgICAgICB0b3A6IDEuNXJlbTtcXG4gICAgICAgICAgICBsZWZ0OiAtMnJlbTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICB0b3A6IDAuNXJlbTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDFyZW07XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMXJlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgQGNvbnRlbnQ7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCIudGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogJHNwYWNlQWdlO1xcclxcbiAgICBmb250LXNpemU6IDlyZW07XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDZyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnN1YnRpdGxlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRzcGFjZUFnZTtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi50eHQyNSB7XFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4udHh0MzAge1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnR4dDE2IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmN5ciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkc3BhY2VBZ2VDeXI7XFxyXFxufVxcclxcblwiLFwiLmJ0biB7XFxuICAgIHBhZGRpbmc6IDAuNnJlbSAwLjZyZW0gMC42cmVtIDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDJyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgNHJlbSA0cmVtIDRyZW07XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSA0cmVtO1xcbiAgICAgICAgY29sdW1uLWdhcDogMy4ycmVtO1xcbiAgICAgICAgYm9yZGVyOiAwLjRyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4KTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgOHJlbSA4cmVtIDhyZW07XFxuICAgIH1cXG5cXG4gICAgLy8gLmJ0bl9fdGV4dFxcblxcbiAgICAmX190ZXh0IHtcXG4gICAgfVxcblxcbiAgICAvLyAuYnRuX19hcnJvdy13cmFwXFxuXFxuICAgICZfX2Fycm93LXdyYXAge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBmbGV4OiAwIDAgNHJlbTtcXG4gICAgICAgIHdpZHRoOiA0LjRyZW07XFxuICAgICAgICBoZWlnaHQ6IDQuNHJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCA3cmVtO1xcbiAgICAgICAgICAgIHdpZHRoOiA3cmVtO1xcbiAgICAgICAgICAgIGhlaWdodDogN3JlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuYnRuX19hcnJvdy1pY29uXFxuXFxuICAgICZfX2Fycm93LWljb24ge1xcbiAgICAgICAgd2lkdGg6IDIuNHJlbTtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIHdpZHRoOiAzLjhyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCJpbnB1dFt0eXBlPSd0ZXh0J10sXFxyXFxuaW5wdXRbdHlwZT0nZW1haWwnXSxcXHJcXG5pbnB1dFt0eXBlPSd0ZWwnXSxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG50ZXh0YXJlYTpmb2N1cyxcXHJcXG5pbnB1dDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcGFkZGluZzogNC42cmVtIDIuN3JlbSAycmVtIDIuN3JlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xcclxcbiAgICAmX3RleHRhcmVhIHtcXHJcXG4gICAgICAgIGhlaWdodDogMjUuNXJlbTtcXHJcXG4gICAgICAgIHRleHRhcmVhIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDdyZW0gOHJlbSAyLjRyZW0gMi40cmVtO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHJlbTtcXHJcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcXHJcXG4gICAgICAgICZfdGV4dGFyZWEge1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMzQuOHJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyAuaW5wdXRfX2ZpZWxkXFxyXFxuXFxyXFxuICAgICZfX2ZpZWxkIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8vIC5pbnB1dF9fbGFiZWxcXHJcXG5cXHJcXG4gICAgJl9fbGFiZWwge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAxLjhyZW07XFxyXFxuICAgICAgICBsZWZ0OiAyLjdyZW07XFxyXFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICAgICAgb3BhY2l0eTogMC41O1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXHJcXG4gICAgICAgICAgICB0b3A6IDIuNHJlbTtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAyLjRyZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi5fZm9ybS1mb2N1cyB7XFxyXFxuICAgIH1cXHJcXG4gICAgJi5fZm9ybS1lcnJvciB7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsXCIuc2VsZWN0IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICAvLyAuc2VsZWN0X19ib2R5XFxyXFxuXFxyXFxuICAgICZfX2JvZHkge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8vIC5zZWxlY3RfX3RpdGxlXFxyXFxuXFxyXFxuICAgICZfX3RpdGxlIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHotaW5kZXg6IDM7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcclxcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cmVtO1xcclxcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyAuc2VsZWN0X192YWx1ZVxcclxcblxcclxcbiAgICAmX192YWx1ZSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxLjNyZW0gMS4zcmVtIDEuM3JlbSAyLjdyZW07XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGdhcDogMnJlbTtcXHJcXG4gICAgICAgIGhlaWdodDogNy4ycmVtO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgICAgICA+ICoge1xcclxcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgZmxleDogMCAwIDVyZW07XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDVyZW07XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcXHJcXG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9pY29ucy9hcnItd2hpdGUuc3ZnKTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIuNHJlbTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgJi5fc2VsZWN0LWxhYmVsIHtcXHJcXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtc2VsLWxhYmVsKTtcXHJcXG4gICAgICAgICAgICAgICAgLl9zZWxlY3QtZmlsbGVkICYge1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICYuX3NlbGVjdC1sYWJlbDo6YmVmb3JlLFxcclxcbiAgICAgICAgLnNlbGVjdF9fY29udGVudCB7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMS40cmVtO1xcclxcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMS42cmVtO1xcclxcbiAgICAgICAgICAgIGdhcDogNHJlbTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcmVtO1xcclxcbiAgICAgICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICAgICAgZmxleDogMCAwIDZyZW07XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA2cmVtO1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDZyZW07XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMy4ycmVtO1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMi40cmVtKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gLnNlbGVjdF9fY29udGVudFxcclxcblxcclxcbiAgICAmX19jb250ZW50IHtcXHJcXG4gICAgICAgIC8vIGhpZGUgLyBzaG93IHNlbGVjdGVkIHZhbHVlXFxyXFxuICAgICAgICAmOm5vdCguX3NlbGVjdC1maWxsZWQgJikge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gLnNlbGVjdF9fdGV4dFxcclxcblxcclxcbiAgICAmX190ZXh0IHtcXHJcXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8vIC5zZWxlY3RfX2lucHV0XFxyXFxuXFxyXFxuICAgICZfX2lucHV0IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gLnNlbGVjdF9fb3B0aW9uc1xcclxcblxcclxcbiAgICAmX19vcHRpb25zIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHotaW5kZXg6IDI7XFxyXFxuICAgICAgICB0b3A6IGNhbGMoMTAwJSAtIDNyZW0pO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDQuNnJlbSAyLjdyZW0gMi40cmVtIDIuN3JlbTtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAzcmVtIDNyZW07XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzYzOTZjO1xcclxcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXHJcXG4gICAgICAgICAgICB0b3A6IGNhbGMoMTAwJSAtIDRyZW0pO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDhyZW0gNHJlbSA0cmVtIDRyZW07XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDRyZW0gNHJlbTtcXHJcXG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHJlbSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gLnNlbGVjdF9fc2Nyb2xsXFxyXFxuXFxyXFxuICAgICZfX3Njcm9sbCB7XFxyXFxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcblxcclxcbiAgICAgICAgLy8gbWF4aW11bSBoZWlnaHRcXHJcXG4gICAgICAgIG1heC1oZWlnaHQ6IDE5cmVtO1xcclxcblxcclxcbiAgICAgICAgLy8gc2Nyb2xsYmFyIHN0eWxlc1xcclxcbiAgICAgICAgJi5zaW1wbGViYXItc2Nyb2xsYWJsZS15IHtcXHJcXG4gICAgICAgICAgICAuc2ltcGxlYmFyLXRyYWNrLnNpbXBsZWJhci12ZXJ0aWNhbCB7XFxyXFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxLjJyZW07XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLjRyZW07XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTdlZTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgLnNpbXBsZWJhci1zY3JvbGxiYXIge1xcclxcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzLjJyZW07XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EyYWRjMTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gLnNlbGVjdF9fb3B0aW9uXFxyXFxuICAgICZfX29wdGlvbiB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xcclxcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVyZW07XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgJi5fc2VsZWN0LXNlbGVjdGVkIHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogJGdyZWVuO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxyXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICY6bm90KCYuc2VsZWN0X19zdWJ0aXRsZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmVlbjtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyAuc2VsZWN0X19ncm91cFxcclxcblxcclxcbiAgICAmX19ncm91cCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8vIC5zZWxlY3RfX2Fzc2V0XFxyXFxuXFxyXFxuICAgICZfX2Fzc2V0IHtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyAuc2VsZWN0X190ZXh0XFxyXFxuXFxyXFxuICAgICZfX3RleHQge1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8vIC5zZWxlY3RfX2hpbnRcXHJcXG5cXHJcXG4gICAgJl9faGludCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IGNhbGMoMTAwJSArIDAuOHJlbSk7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNDIuODU3JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyAuc2VsZWN0X19zdWJ0aXRsZVxcclxcblxcclxcbiAgICAmX19zdWJ0aXRsZSB7XFxyXFxuICAgICAgICBjdXJzb3I6IHRleHQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gc2VsZWN0IHN0YXRlXFxyXFxuICAgICYuX3NlbGVjdC1vcGVuZWQge1xcclxcbiAgICAgICAgei1pbmRleDogNTtcXHJcXG4gICAgICAgIC5zZWxlY3RfX3ZhbHVlOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJi5fc2VsZWN0LWZvY3VzZWQge1xcclxcbiAgICB9XFxyXFxuICAgICYuX3NlbGVjdC1lcnJvciB7XFxyXFxuICAgICAgICAmOm5vdCgmLl9zZWxlY3QtZmlsbGVkLCAmLl9zZWxlY3Qtb3BlbmVkKSB7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJi5fc2VsZWN0LWZpbGxlZCB7XFxyXFxuICAgICAgICAmOm5vdCgmLl9zZWxlY3Qtb3BlbmVkKSB7XFxyXFxuICAgICAgICAgICAgJjpub3QoJi5fc2VsZWN0LXNob3ctdmFsKSB7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICYuX3NlbGVjdC1zaG93LXZhbCB7XFxyXFxuICAgICAgICAmLl9zZWxlY3QtZm9jdXNlZCxcXHJcXG4gICAgICAgICYuX3NlbGVjdC1maWxsZWQsXFxyXFxuICAgICAgICAmLl9zZWxlY3QtZXJyb3IsXFxyXFxuICAgICAgICAmLl9zZWxlY3QtZGlzYWJsZWQge1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICYuX3NlbGVjdC1kaXNhYmxlZCB7XFxyXFxuICAgIH1cXHJcXG4gICAgJi5fc2VsZWN0LW11bHRpcGxlIHtcXHJcXG4gICAgfVxcclxcbiAgICAmLl9zZWxlY3QtYWN0aXZlIHtcXHJcXG4gICAgfVxcclxcbiAgICAmLl9zZWxlY3QtY2hlY2tib3gge1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8vIGxpc3RcXHJcXG4uX3NlbGVjdC1saXN0IHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIixcIi5iYWRnZSB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gM3JlbSAxcmVtIDFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAyLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xcclxcbiAgICAmLl9hY3RpdmUge1xcclxcbiAgICAgICAgY29sb3I6ICRkYXJrUHVycGxlMjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXHJcXG4gICAgICAgIC5iYWRnZV9faWNvbi13cmFwIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcXHJcXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2ljb25zL3N0YXItYWN0aXZlLnN2Zyk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAycmVtIDhyZW0gMnJlbSAycmVtO1xcclxcbiAgICAgICAgY29sdW1uLWdhcDogM3JlbTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZyZW07XFxyXFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHJlbSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gLmJhZGdlX19pY29uLXdyYXBcXHJcXG5cXHJcXG4gICAgJl9faWNvbi13cmFwIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIGZsZXg6IDAgMCA0LjVyZW07XFxyXFxuICAgICAgICB3aWR0aDogNC41cmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0LjVyZW07XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxyXFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxyXFxuICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogOHJlbTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDhyZW07XFxyXFxuICAgICAgICAgICAgdG9wOiA1MCU7XFxyXFxuICAgICAgICAgICAgbGVmdDogNTAlO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc3Rhci5zdmcpO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxyXFxuICAgICAgICAgICAgZmxleDogMCAwIDZyZW07XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDZyZW07XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA2cmVtO1xcclxcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcXHJcXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTByZW07XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTByZW07XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8vIC5iYWRnZV9fdGV4dFxcclxcblxcclxcbiAgICAmX190ZXh0IHtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIixcIi5pbnRybyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLXRvcDogLThyZW07XFxuICAgIGhlaWdodDogMTA4cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMC41cmVtO1xcblxcbiAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgaGVpZ2h0OiAxNjRyZW07XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNS41cmVtO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcblxcbiAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTE2cmVtO1xcbiAgICB9XFxuXFxuICAgICY6OmFmdGVyIHtcXG4gICAgICAgIEBpbmNsdWRlIHBzZXVkbyB7XFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMTAxNjUzIDAlLCByZ2JhKDIzLCAxNSwgNjcsIDApIDYzLjQ1JSk7XFxuICAgICAgICAgICAgei1pbmRleDogLTE7XFxuICAgICAgICAgICAgaW5zZXQ6IDA7XFxuICAgICAgICAgICAgYm90dG9tOiAtMC41cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2NvbnRlbnQge1xcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMS43cmVtO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX190aXRsZSB7XFxuICAgICAgICBsaW5lLWhlaWdodDogMTEwJTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUuM3JlbTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JlZW47XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4NSU7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNy4zcmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX3Bvc3Rlci1pbWFnZSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBpbnNldDogMDtcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcblxcbiAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiAtMTQwcmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19yZXF1ZXN0IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAzLjdyZW07XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1LjlyZW07XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE3cmVtO1xcbiAgICAgICAgICAgIGdhcDogNXJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtcHJvamVjdHMge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDEuOHJlbTtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBwc2V1ZG8ge1xcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTJyZW07XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMC4ycmVtO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcblxcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtM3JlbTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMC40cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIGdhcDogMi40cmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLWNvdW50ZXIge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogNS44cmVtO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUuOHJlbTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JlZW47XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOC44cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4LjhyZW07XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFhMWExYTtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkc3BhY2VBZ2VDeXI7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNnJlbTtcXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjQ4cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjc3MzVyZW07XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMy41cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICYtdGl0bGUge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcblxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XFxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19hcnRpY2xlcyB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDUxcmVtLCAxZnIpKTtcXG4gICAgICAgIGdhcDogMy43cmVtO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMTUuMnJlbSwgMWZyKSk7XFxuICAgICAgICAgICAgZ2FwOiAyLjhyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fYXJ0aWNsZSB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1saW5rIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjFyZW0gNnJlbSAxLjFyZW0gNC4xcmVtO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgZ2FwOiAycmVtO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgICAgIGdhcDogMi42cmVtO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMS41cmVtIDJyZW0gM3JlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JlZW47XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICYtdGl0bGUge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE1cmVtO1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBjb2xvciBlYXNlO1xcblxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XFxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLWltYWdlIHtcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc2l6ZXMoMjAuMnJlbSwgMjAuMnJlbSk7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNpemVzKDE2LjJyZW0sIDE2LjJyZW0pO1xcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtNnJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLWljb24ge1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIHRvcDogMXJlbTtcXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEuM3JlbTtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC42cmVtO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gICAgICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzaXplcyg0LjZyZW0sIDQuNnJlbSk7XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgYmFja2dyb3VuZCBlYXNlO1xcblxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuOHJlbTtcXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNpemVzKDZyZW0sIDZyZW0pO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCIucHJvbW90aW9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzFyZW07XFxuXFxuICAgICZfX2NvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBwYWRkaW5nOiAwIDEuNXJlbSAwIDIuOXJlbTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgcHNldWRvIHtcXG4gICAgICAgICAgICAgICAgY29udGVudDogJzMnO1xcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwLjVyZW07XFxuICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IHJnYmEoNDEsIDI1NSwgMTI3LCAwLjEpO1xcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHNwYWNlQWdlQ3lyO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDcwcmVtO1xcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYmdDb2xvcjtcXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgICAgICAgICAgICAgIHRvcDogLTM0cmVtO1xcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fdGl0bGUge1xcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2Jsb2NrIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgICAgICAgICAgZ2FwOiAxcmVtO1xcblxcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XFxuICAgICAgICAgICAgICAgIC5wcm9tb3Rpb25fX3RpdGxlIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOm50aC1jaGlsZChldmVuKSB7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzRyZW07XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKG9kZCkge1xcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuXFxuICAgICAgICAgICAgICAgIC5wcm9tb3Rpb25fX3RpdGxlIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXJlbTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19zdWJ0aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiLFwiLm1hcmtldGluZyB7XFxuICAgICZfX2ltYWdlIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IC0xNS4ycmVtO1xcbiAgICAgICAgdG9wOiAtMTJyZW07XFxuICAgICAgICBtYXgtd2lkdGg6IDc0cmVtO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2OHJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19jb250ZW50IHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX3RpdGxlIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQuOHJlbTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNC40cmVtO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19pbmZvIHtcXG4gICAgICAgIG1heC13aWR0aDogNTFyZW07XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMXJlbTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1yb3cge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgZ2FwOiA0LjFyZW07XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVyZW07XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgZ2FwOiAzcmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtbGlzdCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM3JlbTtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBnYXA6IDJyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1pdGVtIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgaXRlbS1kb3Q7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLWRlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgIG1heC13aWR0aDogMjEuN3JlbTtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMzLjJyZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiLFwiQGltcG9ydCAnLi4vc2VjdGlvbnMvaW50cm8nO1xcbkBpbXBvcnQgJy4uL3NlY3Rpb25zL3Byb21vdGlvbic7XFxuQGltcG9ydCAnLi4vc2VjdGlvbnMvbWFya2V0aW5nJztcXG5cXG5maWd1cmUge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHk6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogOTk7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHMgZWFzZSAwcztcXG5cXG4gICAgLl9tZW51LW9wZW5lZCAmIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXCIsbnVsbF0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL2dyb3VwLWNzcy1tZWRpYS1xdWVyaWVzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvZ3JvdXAtY3NzLW1lZGlhLXF1ZXJpZXMtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL3Njc3Mvc3R5bGUuc2Nzcyc7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZvcm1zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gaW1wb3J0ICogYXMgZm9ybXMgZnJvbSAnLi91dGlscy9mb3Jtcy5qcyc7XHJcblxyXG4vLyBmb3JtIGZpZWxkc1xyXG4vLyBmb3Jtcy5mb3JtRmllbGRzSW5pdCh7IHZpZXdQYXNzOiBmYWxzZSB9KTtcclxuXHJcbi8vIGZvcm0gc3VibWl0XHJcbi8vIGZvcm1zLmZvcm1TdWJtaXQoKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdXRpbHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vL2hhbWJ1cmdlclxyXG5pbXBvcnQgJy4vdXRpbHMvaGFtYnVyZ2VyLmpzJztcclxuXHJcbi8vIHRhYnNcclxuLy8gaW1wb3J0ICcuL3V0aWxzL3RhYnMuanMnO1xyXG5cclxuLy8gYWNjb3JkaW9uXHJcbi8vIGltcG9ydCAnLi91dGlscy9hY2NvcmRpb24uanMnO1xyXG5cclxuLy8gc2VsZWN0XHJcbmltcG9ydCAnLi91dGlscy9zZWxlY3QuanMnO1xyXG5cclxuLy8gbW9kYWxzXHJcbi8vIGltcG9ydCAnLi91dGlscy9tb2RhbHMuanMnO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBsaWJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIGR5bmFtaWMgZG9tXHJcbmltcG9ydCAnLi9saWJzL2RkLmpzJztcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgJy4vZGV2L3Z6bXNrMS5qcyc7XHJcbmltcG9ydCAnLi9kZXYvbWFya3VzRE0uanMnO1xyXG5pbXBvcnQgJy4vZGV2L3VraWswLmpzJztcclxuaW1wb3J0ICcuL2Rldi9raWU2ZXIuanMnO1xyXG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJldmVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIkR5bmFtaWNBZGFwdCIsInR5cGUiLCJwcm90b3R5cGUiLCJpbml0IiwiX3RoaXMiLCLQvmJqZWN0cyIsImRhQ2xhc3NuYW1lIiwibm9kZXMiLCJpIiwibGVuZ3RoIiwibm9kZSIsImRhdGEiLCJkYXRhc2V0IiwiZGEiLCJ0cmltIiwiZGF0YUFycmF5Iiwic3BsaXQiLCLQvmJqZWN0IiwiZWxlbWVudCIsInBhcmVudCIsInBhcmVudE5vZGUiLCJkZXN0aW5hdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJicmVha3BvaW50IiwicGxhY2UiLCJpbmRleCIsImluZGV4SW5QYXJlbnQiLCJwdXNoIiwiYXJyYXlTb3J0IiwibWVkaWFRdWVyaWVzIiwiQXJyYXkiLCJtYXAiLCJjYWxsIiwiZmlsdGVyIiwic2VsZiIsImluZGV4T2YiLCJtZWRpYSIsIm1lZGlhU3BsaXQiLCJTdHJpbmciLCJtYXRjaE1lZGlhIiwid2luZG93IiwibWVkaWFCcmVha3BvaW50Iiwi0L5iamVjdHNGaWx0ZXIiLCJhZGRMaXN0ZW5lciIsIm1lZGlhSGFuZGxlciIsIm1hdGNoZXMiLCJtb3ZlVG8iLCJjb250YWlucyIsIm1vdmVCYWNrIiwiYWRkIiwiY2hpbGRyZW4iLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJyZW1vdmUiLCJ1bmRlZmluZWQiLCJhcnJheSIsInNsaWNlIiwiYXJyIiwic29ydCIsImEiLCJiIiwiYm9keUxvY2tTdGF0dXMiLCJib2R5TG9ja1RvZ2dsZSIsIm1lbnVJbml0IiwiaGFtYnVyZ2VyIiwiZSIsImRvY3VtZW50RWxlbWVudCIsIl9zbGlkZVVwIiwiX3NsaWRlRG93biIsIl9zbGlkZVRvZ2dsZSIsIlNlbGVjdCIsImNvbnN0cnVjdG9yIiwiY2xhc3NlcyIsInNlbCIsImJvZHkiLCJsYWJlbCIsInRpdGxlIiwidmFsIiwiY29udGVudCIsIm9wdGlvbnMiLCJvcHRpb24iLCJzY3JvbGwiLCJncm91cCIsImlucCIsImFzc2V0IiwidHh0IiwiaGludCIsImFjdGl2ZSIsImZvY3VzZWQiLCJvcGVuZWQiLCJmaWxsZWQiLCJzZWxlY3RlZCIsImRpc2FibGVkIiwibGlzdCIsImVycm9yIiwibXVsdGlwbGUiLCJjaGVja2JveCIsInNlbGVjdExpc3QiLCJzZWxlY3QiLCJpbml0U2VsSXRlbSIsInNldEFjdGlvbnMiLCJiaW5kIiwicmVsYXRpdmVTZWwiLCJjcmVhdGVFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJoaWRkZW4iLCJzZWxJZCIsImdldFBsYWNlaG9sZGVyIiwib3B0UGxhY2Vob2xkZXIiLCJ2YWx1ZSIsInNob3ciLCJzZWxUaXRsZSIsImdldFNlbGVjdCIsInR3aW5TZWwiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJ0ZXh0Iiwic3BlZWQiLCJidWlsZCIsImluaXRTZWxlY3Rpb25zIiwicGFyZW50RWxlbWVudCIsInNlbE9iaiIsInNldFZhbHVlIiwic2V0T3B0aW9ucyIsInNlbEFkZG9uQ2xhc3MiLCJoYXNBdHRyaWJ1dGUiLCJkaXNhYmxlU2VsZWN0Iiwic2V0U2VhcmNoQWN0aW9ucyIsInNldEFjdGlvbiIsInNlbEhpbnQiLCJjbG9zZXN0IiwiYWRkRXJyIiwicmVtb3ZlRXJyIiwic2VsQm9keSIsImdldFZhbHVlIiwicmVsYXRpdmVTZWxPcHRpb25zIiwiaW5uZXJIVE1MIiwiZ2V0T3B0aW9ucyIsInRhcmdldCIsImdldENsYXNzIiwic2VsZWN0SWQiLCJzZWxMaXN0Iiwic2VsT3B0aW9uIiwib3B0VmFsIiwic2V0T3B0aW9uQWN0aW9uIiwiY29kZSIsImNsb3NlR3JvdXAiLCJzZWxPcHRpb25zIiwic2VsZWN0T25lR3JvdXAiLCJzZWxHcm91cCIsInNlbGVjdGlvbnMiLCJzZWxlY3Rpb24iLCJjbG9zZUl0ZW0iLCJyZWxhdGl2ZVNlbGVjdGlvbnMiLCJnZXREYXRhIiwiZWxlbWVudHMiLCJyZWxhdGl2ZVNlbGVjdGlvbiIsInJlbW92ZUF0dHJpYnV0ZSIsInR3aW5TZWxlY3Rpb25zIiwidHdpblNlbGVjdGlvbiIsInNldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJvcHQiLCJ0ZXh0Q29udGVudCIsInNldFNlbGVjdGlvbnMiLCJzZWxJbnB1dCIsInRvVXBwZXJDYXNlIiwic2V0U3VidGl0bGUiLCJzZWxFcnJvciIsInJlbW92ZUNoaWxkIiwiY3NzQ2xhc3MiLCJhdHRyIiwiYXR0ckNsYXNzIiwidGl0bGVWYWwiLCJodG1sIiwic2VsTGFiZWwiLCJ2YWx1ZXMiLCJnZXRDb250ZW50Iiwiam9pbiIsImN1c3RvbUNsYXNzIiwib3B0Q2xhc3MiLCJzZWxTY3JvbGwiLCJzZWxTY3JvbGxIZWlnaHQiLCJpbm5lcldpZHRoIiwiZnJvbSIsInNlbE9wdGlvbnNIVE1MIiwiZ2V0T3B0aW9uIiwic2hvd1NlbGVjdGlvbiIsIm9wdGlvbkNsYXNzIiwib3B0aW9uTGluayIsIm9wdGlvbkxpbmtUYXJnZXQiLCJvcHRpb25IVE1MIiwib3B0aW9uRGF0YSIsIm9wdEFzc2V0Iiwib3B0aW9uRGF0YUhUTUwiLCJvcHRpb25Db250ZW50SFRNTCIsInBsYWNlaG9sZGVyIiwiZmluZCIsInN1YnRpdGxlIiwic2VsZWN0ZWRJbmRleCIsInRlbXBCdXR0b24iLCJhcHBlbmQiLCJjbGljayIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsInNldEhhc2giLCJoYXNoIiwibG9jYXRpb24iLCJocmVmIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImdldEhhc2giLCJyZXBsYWNlIiwiZGVsYXkiLCJhcmd1bWVudHMiLCJib2R5VW5sb2NrIiwiYm9keUxvY2siLCJzZXRUaW1lb3V0IiwiZGF0YU1lZGlhUXVlcmllcyIsImRhdGFTZXRWYWx1ZSIsImJyZWFrcG9pbnRzQXJyYXkiLCJwYXJhbXMiLCJwYXJhbXNBcnJheSIsIm1kUXVlcmllcyIsInVuaXF1ZUFycmF5IiwibWRRdWVyaWVzQXJyYXkiLCJtZWRpYVR5cGUiLCJpdGVtc0FycmF5IiwiZHVyYXRpb24iLCJzaG93bW9yZSIsInN0eWxlIiwidHJhbnNpdGlvblByb3BlcnR5IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib3ZlcmZsb3ciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInJlbW92ZVByb3BlcnR5IiwicmVtVG9QeCIsInJlbVZhbHVlIiwiaHRtbEZvbnRTaXplIiwicGFyc2VGbG9hdCIsImdldENvbXB1dGVkU3R5bGUiLCJmb250U2l6ZSIsInB4VmFsdWUiLCJNYXRoIiwicm91bmQiLCJyZW1vdmVDbGFzc2VzIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==