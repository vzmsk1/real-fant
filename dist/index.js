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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdzNCQUF3M0IsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssUUFBUSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLFNBQVMsVUFBVSxVQUFVLFVBQVUsTUFBTSxTQUFTLFVBQVUsTUFBTSxTQUFTLFVBQVUsT0FBTyxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sY0FBYyxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxZQUFZLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxjQUFjLFlBQVksWUFBWSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxZQUFZLFFBQVEsT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLFFBQVEsV0FBVyxRQUFRLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFlBQVksUUFBUSxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sY0FBYyxZQUFZLFlBQVksWUFBWSxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxZQUFZLFNBQVMsT0FBTyxXQUFXLFVBQVUsUUFBUSxPQUFPLFdBQVcsVUFBVSxRQUFRLE9BQU8sVUFBVSxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sWUFBWSxRQUFRLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLE9BQU8sT0FBTyxVQUFVLFdBQVcsUUFBUSxVQUFVLFdBQVcsV0FBVyxXQUFXLFFBQVEsUUFBUSxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsUUFBUSxRQUFRLFVBQVUsUUFBUSxRQUFRLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxZQUFZLFVBQVUsVUFBVSxXQUFXLFFBQVEsT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLFlBQVksT0FBTyxRQUFRLFVBQVUsWUFBWSxZQUFZLFVBQVUsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFNBQVMsT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLGNBQWMsWUFBWSxZQUFZLFlBQVksV0FBVyxRQUFRLFFBQVEsV0FBVyxVQUFVLFdBQVcsUUFBUSxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsYUFBYSxXQUFXLFlBQVksUUFBUSxRQUFRLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxRQUFRLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsUUFBUSxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLFFBQVEsV0FBVyxRQUFRLFFBQVEsVUFBVSxXQUFXLFVBQVUsUUFBUSxRQUFRLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxRQUFRLFFBQVEsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFFBQVEsUUFBUSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFNBQVMsUUFBUSxZQUFZLFlBQVksV0FBVyxXQUFXLFdBQVcsU0FBUyxRQUFRLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsUUFBUSxRQUFRLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLGNBQWMsWUFBWSxZQUFZLFNBQVMsU0FBUyxVQUFVLFVBQVUsU0FBUyxRQUFRLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxTQUFTLFFBQVEsV0FBVyxRQUFRLFFBQVEsV0FBVyxRQUFRLFFBQVEsVUFBVSxXQUFXLFdBQVcsV0FBVyxRQUFRLFFBQVEsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsUUFBUSxTQUFTLFlBQVksT0FBTyxTQUFTLFdBQVcsU0FBUyxRQUFRLGFBQWEsWUFBWSxZQUFZLFlBQVksV0FBVyxXQUFXLFFBQVEsUUFBUSxVQUFVLFdBQVcsV0FBVyxTQUFTLFFBQVEsVUFBVSxXQUFXLFdBQVcsUUFBUSxRQUFRLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLFFBQVEsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLE9BQU8sUUFBUSxXQUFXLFdBQVcsV0FBVyxXQUFXLGFBQWEsV0FBVyxZQUFZLFFBQVEsT0FBTyxVQUFVLE9BQU8sUUFBUSxVQUFVLFdBQVcsU0FBUyxRQUFRLFVBQVUsU0FBUyxRQUFRLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFFBQVEsUUFBUSxVQUFVLFFBQVEsUUFBUSxNQUFNLFVBQVUsUUFBUSxPQUFPLFFBQVEsTUFBTSxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxRQUFRLE9BQU8sVUFBVSxNQUFNLE9BQU8sUUFBUSxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sY0FBYyxZQUFZLFlBQVksWUFBWSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsYUFBYSxhQUFhLFlBQVksWUFBWSxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxjQUFjLFlBQVksWUFBWSxPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLGNBQWMsWUFBWSxZQUFZLFFBQVEsT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxZQUFZLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxRQUFRLE9BQU8sV0FBVyxPQUFPLE9BQU8sWUFBWSxVQUFVLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFlBQVksT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFlBQVksV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxRQUFRLE9BQU8sV0FBVyxlQUFlLFlBQVksWUFBWSxZQUFZLFVBQVUsVUFBVSxXQUFXLFFBQVEsT0FBTyxhQUFhLFlBQVksWUFBWSxRQUFRLE9BQU8sWUFBWSxVQUFVLFFBQVEsT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFX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O1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7O0FBRTVCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUM4Qjs7QUFFOUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQzJCOztBQUUzQjtBQUNBOztBQUVBOztBQUVBO0FBQ3NCOztBQUV0Qjs7QUFFeUI7QUFDRTtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2Rldi91a2lrMC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvbGlicy9kZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvdXRpbHMvaGFtYnVyZ2VyLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzZjMmQiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19uYXYtaXRlbS1oZWFkaW5nJyk7XG5cbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnLS1hY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbmZ1bmN0aW9uIER5bmFtaWNBZGFwdCh0eXBlKSB7XG4gIHRoaXMudHlwZSA9IHR5cGU7XG59XG5EeW5hbWljQWRhcHQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IF90aGlzID0gdGhpcztcbiAgdGhpcy7QvmJqZWN0cyA9IFtdO1xuICB0aGlzLmRhQ2xhc3NuYW1lID0gJ19keW5hbWljX2FkYXB0Xyc7XG4gIHRoaXMubm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kYV0nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZXNbaV07XG4gICAgY29uc3QgZGF0YSA9IG5vZGUuZGF0YXNldC5kYS50cmltKCk7XG4gICAgY29uc3QgZGF0YUFycmF5ID0gZGF0YS5zcGxpdCgnLCcpO1xuICAgIGNvbnN0INC+YmplY3QgPSB7fTtcbiAgICDQvmJqZWN0LmVsZW1lbnQgPSBub2RlO1xuICAgINC+YmplY3QucGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuICAgINC+YmplY3QuZGVzdGluYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRhdGFBcnJheVswXS50cmltKCkpO1xuICAgINC+YmplY3QuYnJlYWtwb2ludCA9IGRhdGFBcnJheVsxXSA/IGRhdGFBcnJheVsxXS50cmltKCkgOiAnNzY3JztcbiAgICDQvmJqZWN0LnBsYWNlID0gZGF0YUFycmF5WzJdID8gZGF0YUFycmF5WzJdLnRyaW0oKSA6ICdsYXN0JztcbiAgICDQvmJqZWN0LmluZGV4ID0gdGhpcy5pbmRleEluUGFyZW50KNC+YmplY3QucGFyZW50LCDQvmJqZWN0LmVsZW1lbnQpO1xuICAgIHRoaXMu0L5iamVjdHMucHVzaCjQvmJqZWN0KTtcbiAgfVxuICB0aGlzLmFycmF5U29ydCh0aGlzLtC+YmplY3RzKTtcbiAgdGhpcy5tZWRpYVF1ZXJpZXMgPSBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoXG4gICAgdGhpcy7QvmJqZWN0cyxcbiAgICBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgJygnICtcbiAgICAgICAgdGhpcy50eXBlICtcbiAgICAgICAgJy13aWR0aDogJyArXG4gICAgICAgIGl0ZW0uYnJlYWtwb2ludCArXG4gICAgICAgICdweCksJyArXG4gICAgICAgIGl0ZW0uYnJlYWtwb2ludFxuICAgICAgKTtcbiAgICB9LFxuICAgIHRoaXNcbiAgKTtcbiAgdGhpcy5tZWRpYVF1ZXJpZXMgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoXG4gICAgdGhpcy5tZWRpYVF1ZXJpZXMsXG4gICAgZnVuY3Rpb24gKGl0ZW0sIGluZGV4LCBzZWxmKSB7XG4gICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChzZWxmLCBpdGVtKSA9PT0gaW5kZXg7XG4gICAgfVxuICApO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWVkaWFRdWVyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbWVkaWEgPSB0aGlzLm1lZGlhUXVlcmllc1tpXTtcbiAgICBjb25zdCBtZWRpYVNwbGl0ID0gU3RyaW5nLnByb3RvdHlwZS5zcGxpdC5jYWxsKG1lZGlhLCAnLCcpO1xuICAgIGNvbnN0IG1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYVNwbGl0WzBdKTtcbiAgICBjb25zdCBtZWRpYUJyZWFrcG9pbnQgPSBtZWRpYVNwbGl0WzFdO1xuICAgIGNvbnN0INC+YmplY3RzRmlsdGVyID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKFxuICAgICAgdGhpcy7QvmJqZWN0cyxcbiAgICAgIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmJyZWFrcG9pbnQgPT09IG1lZGlhQnJlYWtwb2ludDtcbiAgICAgIH1cbiAgICApO1xuICAgIG1hdGNoTWVkaWEuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMubWVkaWFIYW5kbGVyKG1hdGNoTWVkaWEsINC+YmplY3RzRmlsdGVyKTtcbiAgICB9KTtcbiAgICB0aGlzLm1lZGlhSGFuZGxlcihtYXRjaE1lZGlhLCDQvmJqZWN0c0ZpbHRlcik7XG4gIH1cbn07XG5EeW5hbWljQWRhcHQucHJvdG90eXBlLm1lZGlhSGFuZGxlciA9IGZ1bmN0aW9uIChtYXRjaE1lZGlhLCDQvmJqZWN0cykge1xuICBpZiAobWF0Y2hNZWRpYS5tYXRjaGVzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCDQvmJqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qg0L5iamVjdCA9INC+YmplY3RzW2ldO1xuICAgICAg0L5iamVjdC5pbmRleCA9IHRoaXMuaW5kZXhJblBhcmVudCjQvmJqZWN0LnBhcmVudCwg0L5iamVjdC5lbGVtZW50KTtcbiAgICAgIHRoaXMubW92ZVRvKNC+YmplY3QucGxhY2UsINC+YmplY3QuZWxlbWVudCwg0L5iamVjdC5kZXN0aW5hdGlvbik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vZm9yIChsZXQgaSA9IDA7IGkgPCDQvmJqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGkgPSDQvmJqZWN0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3Qg0L5iamVjdCA9INC+YmplY3RzW2ldO1xuICAgICAgaWYgKNC+YmplY3QuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5kYUNsYXNzbmFtZSkpIHtcbiAgICAgICAgdGhpcy5tb3ZlQmFjayjQvmJqZWN0LnBhcmVudCwg0L5iamVjdC5lbGVtZW50LCDQvmJqZWN0LmluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5EeW5hbWljQWRhcHQucHJvdG90eXBlLm1vdmVUbyA9IGZ1bmN0aW9uIChwbGFjZSwgZWxlbWVudCwgZGVzdGluYXRpb24pIHtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZGFDbGFzc25hbWUpO1xuICBpZiAocGxhY2UgPT09ICdsYXN0JyB8fCBwbGFjZSA+PSBkZXN0aW5hdGlvbi5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICBkZXN0aW5hdGlvbi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocGxhY2UgPT09ICdmaXJzdCcpIHtcbiAgICBkZXN0aW5hdGlvbi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBlbGVtZW50KTtcbiAgICByZXR1cm47XG4gIH1cbiAgZGVzdGluYXRpb24uY2hpbGRyZW5bcGxhY2VdLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBlbGVtZW50KTtcbn07XG5EeW5hbWljQWRhcHQucHJvdG90eXBlLm1vdmVCYWNrID0gZnVuY3Rpb24gKHBhcmVudCwgZWxlbWVudCwgaW5kZXgpIHtcbiAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZGFDbGFzc25hbWUpO1xuICBpZiAocGFyZW50LmNoaWxkcmVuW2luZGV4XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcGFyZW50LmNoaWxkcmVuW2luZGV4XS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZWxlbWVudCk7XG4gIH1cbn07XG5EeW5hbWljQWRhcHQucHJvdG90eXBlLmluZGV4SW5QYXJlbnQgPSBmdW5jdGlvbiAocGFyZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IGFycmF5ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwocGFyZW50LmNoaWxkcmVuKTtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYXJyYXksIGVsZW1lbnQpO1xufTtcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUuYXJyYXlTb3J0ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAodGhpcy50eXBlID09PSAnbWluJykge1xuICAgIEFycmF5LnByb3RvdHlwZS5zb3J0LmNhbGwoYXJyLCBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgaWYgKGEuYnJlYWtwb2ludCA9PT0gYi5icmVha3BvaW50KSB7XG4gICAgICAgIGlmIChhLnBsYWNlID09PSBiLnBsYWNlKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gJ2ZpcnN0JyB8fCBiLnBsYWNlID09PSAnbGFzdCcpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gJ2xhc3QnIHx8IGIucGxhY2UgPT09ICdmaXJzdCcpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhLnBsYWNlIC0gYi5wbGFjZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGEuYnJlYWtwb2ludCAtIGIuYnJlYWtwb2ludDtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBBcnJheS5wcm90b3R5cGUuc29ydC5jYWxsKGFyciwgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIGlmIChhLmJyZWFrcG9pbnQgPT09IGIuYnJlYWtwb2ludCkge1xuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gYi5wbGFjZSkge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGEucGxhY2UgPT09ICdmaXJzdCcgfHwgYi5wbGFjZSA9PT0gJ2xhc3QnKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gJ2xhc3QnIHx8IGIucGxhY2UgPT09ICdmaXJzdCcpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYi5wbGFjZSAtIGEucGxhY2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBiLmJyZWFrcG9pbnQgLSBhLmJyZWFrcG9pbnQ7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG59O1xuY29uc3QgZGEgPSBuZXcgRHluYW1pY0FkYXB0KCdtYXgnKTtcbmRhLmluaXQoKTtcbiIsImltcG9ydCB7IGJvZHlMb2NrU3RhdHVzLCBib2R5TG9ja1RvZ2dsZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBtZW51SW5pdCA9ICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpKSB7XG4gICAgICAgIGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKTtcblxuICAgICAgICBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGJvZHlMb2NrU3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ19tZW51LW9wZW5lZCcpO1xuICAgICAgICAgICAgICAgIGJvZHlMb2NrVG9nZ2xlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbm1lbnVJbml0KCk7XG4iLCJpbXBvcnQgeyBfc2xpZGVVcCwgX3NsaWRlRG93biwgX3NsaWRlVG9nZ2xlIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNsYXNzIFNlbGVjdCB7XG4gICAgLy8gc2V0dXAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgLy8gY3VzdG9tIHNlbGVjdCBjbGFzc2VzXG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IHtcbiAgICAgICAgICAgIC8vIGh0bWwgYnVpbGQgY2xhc3Nlc1xuICAgICAgICAgICAgc2VsOiAnc2VsZWN0JyxcbiAgICAgICAgICAgIGJvZHk6ICdzZWxlY3RfX2JvZHknLFxuICAgICAgICAgICAgbGFiZWw6ICdzZWxlY3RfX2xhYmVsJyxcbiAgICAgICAgICAgIHRpdGxlOiAnc2VsZWN0X190aXRsZScsXG4gICAgICAgICAgICB2YWw6ICdzZWxlY3RfX3ZhbHVlJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdzZWxlY3RfX2NvbnRlbnQnLFxuICAgICAgICAgICAgb3B0aW9uczogJ3NlbGVjdF9fb3B0aW9ucycsXG4gICAgICAgICAgICBvcHRpb246ICdzZWxlY3RfX29wdGlvbicsXG4gICAgICAgICAgICBzY3JvbGw6ICdzZWxlY3RfX3Njcm9sbCcsXG4gICAgICAgICAgICBncm91cDogJ3NlbGVjdF9fZ3JvdXAnLFxuICAgICAgICAgICAgaW5wOiAnc2VsZWN0X19pbnB1dCcsXG4gICAgICAgICAgICBhc3NldDogJ3NlbGVjdF9fYXNzZXQnLFxuICAgICAgICAgICAgdHh0OiAnc2VsZWN0X190ZXh0JyxcbiAgICAgICAgICAgIGhpbnQ6ICdzZWxlY3RfX2hpbnQnLFxuXG4gICAgICAgICAgICAvLyBzdGF0ZSBjbGFzc2VzXG4gICAgICAgICAgICBhY3RpdmU6ICdfc2VsZWN0LWFjdGl2ZScsXG4gICAgICAgICAgICBmb2N1c2VkOiAnX3NlbGVjdC1mb2N1c2VkJyxcbiAgICAgICAgICAgIG9wZW5lZDogJ19zZWxlY3Qtb3BlbmVkJyxcbiAgICAgICAgICAgIGZpbGxlZDogJ19zZWxlY3QtZmlsbGVkJyxcbiAgICAgICAgICAgIHNlbGVjdGVkOiAnX3NlbGVjdC1zZWxlY3RlZCcsXG4gICAgICAgICAgICBkaXNhYmxlZDogJ19zZWxlY3QtZGlzYWJsZWQnLFxuXG4gICAgICAgICAgICAvLyBhZGRpdGlvbmFsIGNsYXNzZXNcbiAgICAgICAgICAgIGxpc3Q6ICdfc2VsZWN0LWxpc3QnLFxuICAgICAgICAgICAgZXJyb3I6ICdfc2VsZWN0LWVycm9yJyxcbiAgICAgICAgICAgIG11bHRpcGxlOiAnX3NlbGVjdC1tdWx0aXBsZScsXG4gICAgICAgICAgICBjaGVja2JveDogJ19zZWxlY3QtY2hlY2tib3gnLFxuICAgICAgICAgICAgbGFiZWw6ICdfc2VsZWN0LWxhYmVsJ1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGFsbCBzZWxlY3QgaXRlbXNcbiAgICAgICAgY29uc3Qgc2VsZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpO1xuICAgICAgICBpZiAoc2VsZWN0TGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdChzZWxlY3RMaXN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNlbGVjdCBpbml0aWFsaXphdGlvbiAmIGJ1aWxkIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gaW5pdGlhbGl6YXRpb25cbiAgICBpbml0KHNlbGVjdExpc3QpIHtcbiAgICAgICAgLy8gaW5pdFxuICAgICAgICBzZWxlY3RMaXN0LmZvckVhY2goKHNlbGVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICghc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygnc3Rhci1yYXRpbmcnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFNlbEl0ZW0oc2VsZWN0LCBpbmRleCArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBldmVudHNcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2tleWRvd24nLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGlvbnMoZSk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdmb2N1c2luJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb25zKGUpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAnZm9jdXNvdXQnLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGlvbnMoZSk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICB9XG4gICAgLy8gc2luZ2xlIHNlbGVjdCBpdGVtIGluaXRpYWxpemF0aW9uXG4gICAgaW5pdFNlbEl0ZW0ocmVsYXRpdmVTZWwsIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnNlbCk7XG4gICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQocmVsYXRpdmVTZWwpO1xuICAgICAgICByZWxhdGl2ZVNlbC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICBpbmRleCA/IChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbElkID0gaW5kZXgpIDogbnVsbDtcblxuICAgICAgICBpZiAodGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkpIHtcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLmRhdGFzZXQub3B0UGxhY2Vob2xkZXIgPSB0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS52YWx1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS5sYWJlbC5zaG93KSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsVGl0bGUgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbDtcbiAgICAgICAgICAgICAgICBzZWxUaXRsZS5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICAgICAgICAgICAgICdhZnRlcmJlZ2luJyxcbiAgICAgICAgICAgICAgICAgICAgYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMubGFiZWx9XCI+JHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLmxhYmVsLnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLmxhYmVsLnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH08L3NwYW4+YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgIT09ICcwJykge1xuICAgICAgICAgICAgc2VsZWN0Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgICAgICAnYmVmb3JlZW5kJyxcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmJvZHl9XCI+PGRpdiBoaWRkZW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5vcHRpb25zfVwiPjwvZGl2PjwvZGl2PmBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgICAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuYm9keX1cIj48ZGl2IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMub3B0aW9uc31cIj48L2Rpdj48L2Rpdj5gXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5idWlsZChyZWxhdGl2ZVNlbCk7XG5cbiAgICAgICAgcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCA9IHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgPyByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkIDogJzE1MCc7XG4gICAgICAgIHJlbGF0aXZlU2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpcy5pbml0U2VsZWN0aW9ucyhlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIHNlbGVjdCBidWlsZFxuICAgIGJ1aWxkKHJlbGF0aXZlU2VsKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHNlbE9iaiA9IHRoaXM7XG5cbiAgICAgICAgLy8gc2V0IGlkXG4gICAgICAgIHNlbGVjdC5kYXRhc2V0LnNlbElkID0gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxJZDtcbiAgICAgICAgLy8gc2V0IHZhbHVlXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XG4gICAgICAgIC8vIHNldCBvcHRpb25zXG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyhzZWxlY3QsIHJlbGF0aXZlU2VsKTtcbiAgICAgICAgLy8gc2V0IGNzcyBtb2RpZmljYXRvclxuICAgICAgICByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEFkZG9uQ2xhc3NcbiAgICAgICAgICAgID8gc2VsZWN0LmNsYXNzTGlzdC5hZGQoYHNlbGVjdF8ke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsQWRkb25DbGFzc31gKVxuICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAvLyBzZXQgY2xhc3MgaWYgc2VsZWN0IGlzIG11bHRpcGxlXG4gICAgICAgIHJlbGF0aXZlU2VsLm11bHRpcGxlXG4gICAgICAgICAgICA/IHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5tdWx0aXBsZSlcbiAgICAgICAgICAgIDogc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLm11bHRpcGxlKTtcbiAgICAgICAgLy8gc2V0IGNsYXNzIGlmIHNlbGVjdCBjaGVja2JveGVzIGFyZSBzZXRcbiAgICAgICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1jaGVja2JveGVzJykgJiYgcmVsYXRpdmVTZWwubXVsdGlwbGVcbiAgICAgICAgICAgID8gc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmNoZWNrYm94KVxuICAgICAgICAgICAgOiBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuY2hlY2tib3gpO1xuICAgICAgICAvLyBkaXNhYmxlIHNlbGVjdFxuICAgICAgICB0aGlzLmRpc2FibGVTZWxlY3Qoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XG4gICAgICAgIC8vIHNldCBzZWFyY2ggYWN0aW9ucyBpZiBkYXRhLXNlbC1zZWFyY2ggaXMgc2V0XG4gICAgICAgIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtc2VhcmNoJykgPyB0aGlzLnNldFNlYXJjaEFjdGlvbnMoc2VsZWN0KSA6IG51bGw7XG4gICAgICAgIC8vIHNldCBzZWxlY3QgYWN0aW9ucyBpZiBpdCdzIGluaXRpYWxseSBvcGVuZWRcbiAgICAgICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1vcGVuZWQnKSA/IHRoaXMuc2V0QWN0aW9uKHNlbGVjdCkgOiBudWxsO1xuXG4gICAgICAgIC8vIHNldCBzZWxlY3QgaGludFxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50KSB7XG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgICAgICAnYmVmb3JlZW5kJyxcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInNlbGVjdF9faGludFwiPiR7cmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50fTwvZGl2PmBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZGF0ZSBzZWxlY3RcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmNsb3Nlc3QoJ2Zvcm0nKSkge1xuICAgICAgICAgICAgcmVsYXRpdmVTZWwuY2xvc2VzdCgnZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoc2VsT2JqLmNsYXNzZXMuZmlsbGVkKSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxPYmouYWRkRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbE9iai5yZW1vdmVFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzaG93IC8gaGlkZSBzZWxlY3Rpb24gZnJvbSBzZWxlY3QgdGl0bGVcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zaG93LXZhbCcpKSB7XG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCgnX3NlbGVjdC1zaG93LXZhbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ19zZWxlY3Qtc2hvdy12YWwnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzZXQgdHdpbiBzZWxlY3QgdGl0bGUgdmFsdWVcbiAgICBzZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XG4gICAgICAgIGNvbnN0IHNlbEJvZHkgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5ib2R5KS50d2luU2VsO1xuICAgICAgICBjb25zdCBzZWxUaXRsZSA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLnRpdGxlKS50d2luU2VsO1xuXG4gICAgICAgIGlmIChzZWxUaXRsZSkgc2VsVGl0bGUucmVtb3ZlKCk7XG4gICAgICAgIHNlbEJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy5nZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKSk7XG4gICAgfVxuICAgIC8vIHNldCB0d2luIHNlbGVjdCBvcHRpb25zXG4gICAgc2V0T3B0aW9ucyhzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS50d2luU2VsO1xuICAgICAgICBjb25zdCByZWxhdGl2ZVNlbE9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS5yZWxhdGl2ZVNlbDtcblxuICAgICAgICBvcHRpb25zLmlubmVySFRNTCA9IHRoaXMuZ2V0T3B0aW9ucyhyZWxhdGl2ZVNlbCk7XG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbE9wdGlvbnMucXVlcnlTZWxlY3RvcignW3NlbGVjdGVkXScpKSB7XG4gICAgICAgICAgICBvcHRpb25zLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuY2xhc3Nlcy5vcHRpb259YCkuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGRpc2FibGUgc2VsZWN0XG4gICAgZGlzYWJsZVNlbGVjdChzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLnRpdGxlKS50d2luU2VsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICAgICAgICB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbWFpbiBhY3Rpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyBzZXQgbWFpbiBhY3Rpb25zXG4gICAgc2V0QWN0aW9ucyhlKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCB0eXBlID0gZS50eXBlO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnNlbCkpIHx8XG4gICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5saXN0KSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3QgPSB0YXJnZXQuY2xvc2VzdCgnLnNlbGVjdCcpXG4gICAgICAgICAgICAgICAgPyB0YXJnZXQuY2xvc2VzdCgnLnNlbGVjdCcpXG4gICAgICAgICAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgIGAuJHt0aGlzLmNsYXNzZXMuc2VsfVtkYXRhLXNlbC1pZD1cIiR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKS5kYXRhc2V0LnNlbGVjdElkXG4gICAgICAgICAgICAgICAgICAgICAgfVwiXWBcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCByZWxhdGl2ZVNlbCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCkucmVsYXRpdmVTZWw7XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZWxhdGl2ZVNlbC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMubGlzdCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxMaXN0ID0gdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMubGlzdCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgLiR7dGhpcy5jbGFzc2VzLnNlbH1bZGF0YS1zZWwtaWQ9XCIke3NlbExpc3QuZGF0YXNldC5zZWxJZH1cIl0gLnNlbGVjdF9fb3B0aW9uW2RhdGEtb3B0LXZhbD1cIiR7c2VsTGlzdC5kYXRhc2V0Lm9wdFZhbH1cIl1gXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25BY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCwgc2VsT3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy50aXRsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGlvbihzZWxlY3QpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wdGlvbikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxPcHRpb24gPSB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcHRpb24pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0T3B0aW9uQWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwsIHNlbE9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdmb2N1c2luJyB8fCB0eXBlID09PSAnZm9jdXNvdXQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnNlbCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnZm9jdXNpbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5mb2N1c2VkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5mb2N1c2VkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuZmlsbGVkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdrZXlkb3duJyAmJiBlLmNvZGUgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUdyb3VwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlR3JvdXAoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzZXQgc2luZ2xlIHNlbGVjdCBhY3Rpb25cbiAgICBzZXRBY3Rpb24oc2VsZWN0KSB7XG4gICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0KS5yZWxhdGl2ZVNlbDtcbiAgICAgICAgY29uc3Qgc2VsT3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnR3aW5TZWw7XG5cbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmNsb3Nlc3QoJ1tkYXRhLW9uZS1zZWxlY3RdJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdE9uZUdyb3VwID0gcmVsYXRpdmVTZWwuY2xvc2VzdCgnW2RhdGEtb25lLXNlbGVjdF0nKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VHcm91cChzZWxlY3RPbmVHcm91cCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNlbE9wdGlvbnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC50b2dnbGUodGhpcy5jbGFzc2VzLm9wZW5lZCk7XG4gICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCAhPT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgX3NsaWRlVG9nZ2xlKHNlbE9wdGlvbnMsIHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLm9wZW5lZCkgJiZcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUnKSAmJlxuICAgICAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLmVycm9yKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gY2xvc2Ugc2luZ2xlIHNlbGVjdCBncm91cFxuICAgIGNsb3NlR3JvdXAoZ3JvdXApIHtcbiAgICAgICAgY29uc3Qgc2VsR3JvdXAgPSBncm91cCA/IGdyb3VwIDogZG9jdW1lbnQ7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSBzZWxHcm91cC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgYCR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMuc2VsKX0ke3RoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wZW5lZCl9YFxuICAgICAgICApO1xuICAgICAgICBpZiAoc2VsZWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbnMuZm9yRWFjaCgoc2VsZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUl0ZW0oc2VsZWN0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGNsb3NlIHNpbmdsZSBzZWxlY3QgaXRlbVxuICAgIGNsb3NlSXRlbShzZWxlY3QpIHtcbiAgICAgICAgY29uc3QgcmVsYXRpdmVTZWwgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QpLnJlbGF0aXZlU2VsO1xuICAgICAgICBjb25zdCBzZWxPcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykudHdpblNlbDtcblxuICAgICAgICBpZiAoIXNlbE9wdGlvbnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLm9wZW5lZCk7XG4gICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCAhPT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgX3NsaWRlVXAoc2VsT3B0aW9ucywgcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gc2V0IHNpbmdsZSBvcHRpb24gYWN0aW9uc1xuICAgIHNldE9wdGlvbkFjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsLCBvcHRpb24pIHtcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLm11bHRpcGxlKSB7XG4gICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpO1xuICAgICAgICAgICAgY29uc3QgcmVsYXRpdmVTZWxlY3Rpb25zID0gdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS5lbGVtZW50cztcblxuICAgICAgICAgICAgcmVsYXRpdmVTZWxlY3Rpb25zLmZvckVhY2goKHJlbGF0aXZlU2VsZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVsYXRpdmVTZWxlY3Rpb24ucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHR3aW5TZWxlY3Rpb25zID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpKTtcbiAgICAgICAgICAgIHR3aW5TZWxlY3Rpb25zLmZvckVhY2goKHR3aW5TZWxlY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbFxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPVwiJHt0d2luU2VsZWN0aW9uLmRhdGFzZXQub3B0VmFsfVwiXWApXG4gICAgICAgICAgICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghb3B0aW9uLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVsYXRpdmVTZWwucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPVwiJHtvcHRpb24uZGF0YXNldC5vcHRWYWx9XCJdYCkpO1xuICAgICAgICAgICAgICAgIHJlbGF0aXZlU2VsXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBvcHRpb25bdmFsdWU9XCIke29wdGlvbi5kYXRhc2V0Lm9wdFZhbH1cIl1gKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RfX29wdGlvbicpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKG9wdCkgPT4gb3B0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLnNlbGVjdGVkKSk7XG4gICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpO1xuICAgICAgICAgICAgaWYgKCFyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvdy1zZWxlY3Rpb24nKSkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3QucXVlcnlTZWxlY3RvcihgJHt0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcHRpb24pfVtoaWRkZW5dYCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoYCR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3B0aW9uKX1baGlkZGVuXWApLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcHRpb24uaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLnZhbHVlID0gb3B0aW9uLmhhc0F0dHJpYnV0ZSgnZGF0YS1vcHQtdmFsJylcbiAgICAgICAgICAgICAgICA/IG9wdGlvbi5kYXRhc2V0Lm9wdFZhbFxuICAgICAgICAgICAgICAgIDogb3B0aW9uLnRleHRDb250ZW50O1xuICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb24oc2VsZWN0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xuICAgICAgICB0aGlzLnNldFNlbGVjdGlvbnMocmVsYXRpdmVTZWwpO1xuICAgIH1cbiAgICAvLyBzZXQgc2VhcmNoIGFjdGlvbnNcbiAgICBzZXRTZWFyY2hBY3Rpb25zKHNlbGVjdCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHNlbElucHV0ID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMuaW5wKS50d2luU2VsO1xuICAgICAgICBjb25zdCBzZWxPcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykudHdpblNlbC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgYC4ke3RoaXMuY2xhc3Nlcy5vcHRpb259YFxuICAgICAgICApO1xuXG4gICAgICAgIHNlbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsT3B0aW9ucy5mb3JFYWNoKChzZWxPcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsT3B0aW9uLnRleHRDb250ZW50LnRvVXBwZXJDYXNlKCkuaW5kZXhPZihzZWxJbnB1dC52YWx1ZS50b1VwcGVyQ2FzZSgpKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbE9wdGlvbi5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxPcHRpb24uaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbE9wdGlvbnMuaGlkZGVuID09PSB0cnVlID8gX3RoaXMuc2V0QWN0aW9uKHNlbGVjdCkgOiBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gc2V0IHNlbGVjdCBzdWJ0aXRsZVxuICAgIHNldFN1YnRpdGxlKHJlbGF0aXZlU2VsKSB7fVxuXG4gICAgLy8gdmFsaWRhdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyBhZGQgYW4gZXJyb3IgdG8gYSBzZWxlY3RcbiAgICBhZGRFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCkge1xuICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuZXJyb3IpO1xuXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEVycm9yICYmICFyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnQpIHtcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgICAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwic2VsZWN0X19oaW50XCI+JHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEVycm9yfTwvZGl2PmBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gcmVtb3ZlIGFuIGVycm9yIGZyb20gYSBzZWxlY3RcbiAgICByZW1vdmVFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCkge1xuICAgICAgICBpZiAoc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuZXJyb3IpKSB7XG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2hpbnQnKSAmJiAhcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50KSB7XG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdF9faGludCcpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHV0aWxzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gZ2V0IGN1c3RvbSBjbGFzc1xuICAgIGdldENsYXNzKGNzc0NsYXNzKSB7XG4gICAgICAgIHJldHVybiBgLiR7Y3NzQ2xhc3N9YDtcbiAgICB9XG4gICAgLy8gZ2V0IHNpbmdsZSBzZWxlY3QgaXRlbVxuICAgIGdldFNlbGVjdChzZWxlY3QsIGNzc0NsYXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWxhdGl2ZVNlbDogc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLFxuICAgICAgICAgICAgdHdpblNlbDogc2VsZWN0LnF1ZXJ5U2VsZWN0b3IodGhpcy5nZXRDbGFzcyhjc3NDbGFzcykpXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIGdldCBzZWxlY3RlZCBpdGVtIHZhbHVlXG4gICAgZ2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xuICAgICAgICBsZXQgYXR0cixcbiAgICAgICAgICAgIGF0dHJDbGFzcyxcbiAgICAgICAgICAgIHRpdGxlVmFsID0gdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsLCAyKS5odG1sO1xuXG4gICAgICAgIC8vIHNldCB0aXRsZSB2YWx1ZVxuICAgICAgICB0aXRsZVZhbCA9IHRpdGxlVmFsLmxlbmd0aFxuICAgICAgICAgICAgPyB0aXRsZVZhbFxuICAgICAgICAgICAgOiByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbExhYmVsXG4gICAgICAgICAgICA/IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsTGFiZWxcbiAgICAgICAgICAgIDogJyc7XG5cbiAgICAgICAgLy8gc2V0IGFjdGl2ZSBjbGFzcyB0byBzZWxlY3QgaWYgaXQgY29udGFpbnMgYW55IHZhbHVlc1xuICAgICAgICBpZiAodGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS52YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IHNlbGVjdCBsYWJlbFxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1sYWJlbCcpKSB7XG4gICAgICAgICAgICBhdHRyID0gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxMYWJlbFxuICAgICAgICAgICAgICAgID8gYCBkYXRhLXNlbC1sYWJlbD1cIiR7cmVsYXRpdmVTZWwuZGF0YXNldC5zZWxMYWJlbH1cImBcbiAgICAgICAgICAgICAgICA6IGAgZGF0YS1zZWwtbGFiZWw9XCLQktGL0LHQvtGAXCJgO1xuICAgICAgICAgICAgYXR0ckNsYXNzID0gYCAke3RoaXMuY2xhc3Nlcy5sYWJlbH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcHVzaCBzZWxlY3Rpb25zIHRvIHRoZSBsaXN0IGluc2lkZSBvZiBzZWxlY3QgdGl0bGVcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLm11bHRpcGxlICYmIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtbGlzdCcpKSB7XG4gICAgICAgICAgICB0aXRsZVZhbCA9IHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbClcbiAgICAgICAgICAgICAgICAuZWxlbWVudHMubWFwKFxuICAgICAgICAgICAgICAgICAgICAob3B0aW9uKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgYDxzcGFuIGRhdGEtb3B0LWlkPVwiJHtzZWxlY3QuZGF0YXNldC5zZWxJZH1cIiBkYXRhLW9wdC12YWw9XCIke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiIGNsYXNzPVwiX2xpc3QtaXRlbVwiPiR7dGhpcy5nZXRDb250ZW50KG9wdGlvbil9PC9zcGFuPmBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmpvaW4oJycpO1xuXG4gICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5saXN0ICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVsYXRpdmVTZWwuZGF0YXNldC5saXN0KSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVsYXRpdmVTZWwuZGF0YXNldC5saXN0KS5pbm5lckhUTUwgPSB0aXRsZVZhbDtcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1zZWFyY2gnKSkgdGl0bGVWYWwgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGluaXQgc2VsZWN0IHNlYXJjaFxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1zZWFyY2gnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMudGl0bGV9XCI+PHNwYW4gJHthdHRyfSBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnZhbH1cIj48aW5wdXQgYXV0b2NvbXBsZXRlPVwib2ZmXCIgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiJHt0aXRsZVZhbH1cIiBkYXRhLXBsYWNlaG9sZGVyPVwiJHt0aXRsZVZhbH1cIiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmlucH1cIj48L3NwYW4+PC9kaXY+YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbUNsYXNzID1cbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpLmVsZW1lbnRzLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHNbMF0uZGF0YXNldC5vcHRDbGFzc1xuICAgICAgICAgICAgICAgICAgICA/IGAgJHt0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpLmVsZW1lbnRzWzBdLmRhdGFzZXQub3B0Q2xhc3N9YFxuICAgICAgICAgICAgICAgICAgICA6ICcnO1xuICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnRpdGxlfVwiPjxzcGFuICR7YXR0ciA/IGF0dHIgOiAnJ30gY2xhc3M9XCIke1xuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3Nlcy52YWxcbiAgICAgICAgICAgIH0gJHthdHRyQ2xhc3MgPyBhdHRyQ2xhc3MgOiAnJ31cIj48c3BhbiBjbGFzcz1cIiR7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzLmNvbnRlbnRcbiAgICAgICAgICAgIH0ke2N1c3RvbUNsYXNzfVwiPiR7dGl0bGVWYWx9PC9zcGFuPjwvc3Bhbj48L2J1dHRvbj5gO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGdldCBvcHRpb25zXG4gICAgZ2V0T3B0aW9ucyhyZWxhdGl2ZVNlbCkge1xuICAgICAgICBjb25zdCBzZWxTY3JvbGwgPSByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNjcm9sbCcpID8gYGRhdGEtc2ltcGxlYmFyYCA6ICcnO1xuICAgICAgICBsZXQgc2VsU2Nyb2xsSGVpZ2h0ID0gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxTY3JvbGxcbiAgICAgICAgICAgID8gYHN0eWxlPVwibWF4LWhlaWdodDoke3dpbmRvdy5pbm5lcldpZHRoID4gNzY4ID8gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxTY3JvbGwgOiAyMn1yZW1cImBcbiAgICAgICAgICAgIDogJyc7XG4gICAgICAgIGxldCBzZWxPcHRpb25zID0gQXJyYXkuZnJvbShyZWxhdGl2ZVNlbC5vcHRpb25zKTtcblxuICAgICAgICBpZiAoc2VsT3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBzZWxPcHRpb25zSFRNTCA9IGBgO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpICYmICF0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS5zaG93KSB8fFxuICAgICAgICAgICAgICAgIHJlbGF0aXZlU2VsLm11bHRpcGxlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzZWxPcHRpb25zID0gc2VsT3B0aW9ucy5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbE9wdGlvbnNIVE1MICs9IHNlbFNjcm9sbFxuICAgICAgICAgICAgICAgID8gYDxkaXYgJHtzZWxTY3JvbGx9ICR7c2VsU2Nyb2xsSGVpZ2h0fSBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnNjcm9sbH1cIj5gXG4gICAgICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICAgIHNlbE9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsT3B0aW9uc0hUTUwgKz0gdGhpcy5nZXRPcHRpb24ob3B0aW9uLCByZWxhdGl2ZVNlbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbE9wdGlvbnNIVE1MICs9IHNlbFNjcm9sbCA/IGA8L2Rpdj5gIDogJyc7XG4gICAgICAgICAgICByZXR1cm4gc2VsT3B0aW9uc0hUTUw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZ2V0IG9wdGlvblxuICAgIGdldE9wdGlvbihvcHRpb24sIHJlbGF0aXZlU2VsKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSBvcHRpb24uc2VsZWN0ZWQgJiYgcmVsYXRpdmVTZWwubXVsdGlwbGUgPyBgICR7dGhpcy5jbGFzc2VzLnNlbGVjdGVkfWAgOiAnJztcbiAgICAgICAgY29uc3Qgc2hvd1NlbGVjdGlvbiA9XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgJiYgIXJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zaG93LXNlbGVjdGlvbicpICYmICFyZWxhdGl2ZVNlbC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgID8gYGhpZGRlbmBcbiAgICAgICAgICAgICAgICA6IGBgO1xuICAgICAgICBjb25zdCBvcHRpb25DbGFzcyA9IG9wdGlvbi5kYXRhc2V0Lm9wdENsYXNzID8gYCAke29wdGlvbi5kYXRhc2V0Lm9wdENsYXNzfWAgOiAnJztcbiAgICAgICAgY29uc3Qgb3B0aW9uTGluayA9IG9wdGlvbi5kYXRhc2V0Lm9wdGlvbkxpbmsgPyBvcHRpb24uZGF0YXNldC5vcHRpb25MaW5rIDogZmFsc2U7XG4gICAgICAgIGNvbnN0IG9wdGlvbkxpbmtUYXJnZXQgPSBvcHRpb24uaGFzQXR0cmlidXRlKCdkYXRhLW9wdGlvbi1saW5rLXRhcmdldCcpID8gYHRhcmdldD1cIl9ibGFua1wiYCA6ICcnO1xuICAgICAgICBsZXQgb3B0aW9uSFRNTCA9IGBgO1xuXG4gICAgICAgIG9wdGlvbkhUTUwgKz0gb3B0aW9uTGlua1xuICAgICAgICAgICAgPyBgPGEgJHtvcHRpb25MaW5rVGFyZ2V0fSAke3Nob3dTZWxlY3Rpb259IGhyZWY9XCIke29wdGlvbkxpbmt9XCIgZGF0YS1vcHQtdmFsPVwiJHtvcHRpb24udmFsdWV9XCIgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5vcHRpb259JHtvcHRpb25DbGFzc30ke3NlbGVjdGlvbnN9XCI+YFxuICAgICAgICAgICAgOiBgPGJ1dHRvbiAke3Nob3dTZWxlY3Rpb259IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMub3B0aW9ufSR7b3B0aW9uQ2xhc3N9JHtzZWxlY3Rpb25zfVwiIGRhdGEtb3B0LXZhbD1cIiR7b3B0aW9uLnZhbHVlfVwiIHR5cGU9XCJidXR0b25cIj5gO1xuICAgICAgICBvcHRpb25IVE1MICs9IHRoaXMuZ2V0Q29udGVudChvcHRpb24pO1xuICAgICAgICBvcHRpb25IVE1MICs9IG9wdGlvbkxpbmsgPyBgPC9hPmAgOiBgPC9idXR0b24+YDtcbiAgICAgICAgcmV0dXJuIG9wdGlvbkhUTUw7XG4gICAgfVxuICAgIC8vIGdldCBzZWxlY3QgY29udGVudFxuICAgIGdldENvbnRlbnQob3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbkRhdGEgPSBvcHRpb24uZGF0YXNldC5vcHRBc3NldCA/IGAke29wdGlvbi5kYXRhc2V0Lm9wdEFzc2V0fWAgOiAnJztcbiAgICAgICAgY29uc3Qgb3B0aW9uRGF0YUhUTUwgPVxuICAgICAgICAgICAgb3B0aW9uRGF0YS5pbmRleE9mKCdpbWcnKSA+PSAwID8gYDxpbWcgc3JjPVwiJHtvcHRpb25EYXRhfVwiIGFsdD1cIlwiPmAgOiBvcHRpb25EYXRhO1xuICAgICAgICBsZXQgb3B0aW9uQ29udGVudEhUTUwgPSBgYDtcblxuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuZ3JvdXB9XCI+YCA6ICcnO1xuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuYXNzZXR9XCI+YCA6ICcnO1xuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gb3B0aW9uRGF0YUhUTUwgOiAnJztcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8L3NwYW4+YCA6ICcnO1xuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMudHh0fVwiPmAgOiAnJztcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uLnRleHRDb250ZW50O1xuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDwvc3Bhbj5gIDogJyc7XG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPC9zcGFuPmAgOiAnJztcbiAgICAgICAgcmV0dXJuIG9wdGlvbkNvbnRlbnRIVE1MO1xuICAgIH1cbiAgICAvLyBnZXQgc2VsZWN0IHBsYWNlaG9sZGVyXG4gICAgZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpIHtcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBBcnJheS5mcm9tKHJlbGF0aXZlU2VsLm9wdGlvbnMpLmZpbmQoKG9wdGlvbikgPT4gIW9wdGlvbi52YWx1ZSk7XG5cbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICBwbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zdWJ0aXRsZSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBwbGFjZWhvbGRlci50ZXh0Q29udGVudCxcbiAgICAgICAgICAgICAgICBzaG93OiBwbGFjZWhvbGRlci5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXBoLXNob3cnKSxcbiAgICAgICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBwbGFjZWhvbGRlci5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXBoJyksXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHBsYWNlaG9sZGVyLmRhdGFzZXQub3B0UGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGdldCBzZWxlY3RlZCBvcHRpb25zIGRhdGFcbiAgICBnZXREYXRhKHJlbGF0aXZlU2VsKSB7XG4gICAgICAgIGxldCBzZWxlY3Rpb25zID0gW107XG5cbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLm11bHRpcGxlKSB7XG4gICAgICAgICAgICBzZWxlY3Rpb25zID0gQXJyYXkuZnJvbShyZWxhdGl2ZVNlbC5vcHRpb25zKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnNlbGVjdGVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbnMucHVzaChyZWxhdGl2ZVNlbC5vcHRpb25zW3JlbGF0aXZlU2VsLnNlbGVjdGVkSW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudHM6IHNlbGVjdGlvbnMubWFwKChvcHRpb24pID0+IG9wdGlvbiksXG4gICAgICAgICAgICB2YWx1ZXM6IHNlbGVjdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSkubWFwKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSksXG4gICAgICAgICAgICBodG1sOiBzZWxlY3Rpb25zLm1hcCgob3B0aW9uKSA9PiB0aGlzLmdldENvbnRlbnQob3B0aW9uKSlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBzZWxlY3Rpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIGluaXQgc2VsZWN0aW9uc1xuICAgIGluaXRTZWxlY3Rpb25zKGUpIHtcbiAgICAgICAgY29uc3QgcmVsYXRpdmVTZWwgPSBlLnRhcmdldDtcblxuICAgICAgICB0aGlzLmJ1aWxkKHJlbGF0aXZlU2VsKTtcbiAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25zKHJlbGF0aXZlU2VsKTtcbiAgICB9XG4gICAgLy8gc2V0IHNlbGVjdGlvbnNcbiAgICBzZXRTZWxlY3Rpb25zKHJlbGF0aXZlU2VsKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zdWJtaXQnKSAmJiByZWxhdGl2ZVNlbC52YWx1ZSkge1xuICAgICAgICAgICAgbGV0IHRlbXBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHRlbXBCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgICAgICAgICAgcmVsYXRpdmVTZWwuY2xvc2VzdCgnZm9ybScpLmFwcGVuZCh0ZW1wQnV0dG9uKTtcbiAgICAgICAgICAgIHRlbXBCdXR0b24uY2xpY2soKTtcbiAgICAgICAgICAgIHRlbXBCdXR0b24ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5maWxsZWQpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsKTtcbiAgICB9XG4gICAgLy8gY3VzdG9tIHNlbGVjdCBldmVudCAobGlzdGVuIHRvIGFueSBzZWxlY3Rpb25zIC8gbXV0YXRpb25zKVxuICAgIHNlbGVjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGlvbicsIHtcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0OiByZWxhdGl2ZVNlbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxufVxubmV3IFNlbGVjdCh7fSk7XG4iLCIvKipcbiAqIHNldCBoYXNoIHRvIHVybFxuICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAqL1xuZXhwb3J0IGNvbnN0IHNldEhhc2ggPSBoYXNoID0+IHtcbiAgaGFzaCA9IGhhc2ggPyBgIyR7aGFzaH1gIDogd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVswXTtcbiAgaGlzdG9yeS5wdXNoU3RhdGUoJycsICcnLCBoYXNoKTtcbn07XG5cbi8qKlxuICogZ2V0IGhhc2ggZnJvbSB1cmxcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5leHBvcnQgY29uc3QgZ2V0SGFzaCA9ICgpID0+IHtcbiAgaWYgKGxvY2F0aW9uLmhhc2gpIHtcbiAgICByZXR1cm4gbG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICB9XG59O1xuXG4vLyBib2R5IGxvY2tcbmV4cG9ydCBsZXQgYm9keUxvY2tTdGF0dXMgPSB0cnVlO1xuLyoqXG4gKiB0b2dnbGVzIGJvZHkgbG9ja1xuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5XG4gKi9cbmV4cG9ydCBjb25zdCBib2R5TG9ja1RvZ2dsZSA9IChkZWxheSA9IDUwMCkgPT4ge1xuICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbG9jaycpKSB7XG4gICAgYm9keVVubG9jayhkZWxheSk7XG4gIH0gZWxzZSB7XG4gICAgYm9keUxvY2soZGVsYXkpO1xuICB9XG59O1xuLyoqXG4gKiB1bmxvY2tzIGJvZHlcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheVxuICovXG5leHBvcnQgY29uc3QgYm9keVVubG9jayA9IChkZWxheSA9IDUwMCkgPT4ge1xuICBpZiAoYm9keUxvY2tTdGF0dXMpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJyk7XG4gICAgfSwgZGVsYXkpO1xuICAgIGJvZHlMb2NrU3RhdHVzID0gZmFsc2U7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBib2R5TG9ja1N0YXR1cyA9IHRydWU7XG4gICAgfSwgZGVsYXkpO1xuICB9XG59O1xuLyoqXG4gKiBsb2NrcyBib2R5XG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcbiAqL1xuZXhwb3J0IGNvbnN0IGJvZHlMb2NrID0gKGRlbGF5ID0gNTAwKSA9PiB7XG4gIGlmIChib2R5TG9ja1N0YXR1cykge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XG5cbiAgICBib2R5TG9ja1N0YXR1cyA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgYm9keUxvY2tTdGF0dXMgPSB0cnVlO1xuICAgIH0sIGRlbGF5KTtcbiAgfVxufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHthcnJheX0gYXJyYXlcbiAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhU2V0VmFsdWVcbiAqIHByb2Nlc3MgbWVkaWEgcmVxdWVzdHMgZnJvbSBhdHRyaWJ1dGVzXG4gKi9cbmV4cG9ydCBjb25zdCBkYXRhTWVkaWFRdWVyaWVzID0gKGFycmF5LCBkYXRhU2V0VmFsdWUpID0+IHtcbiAgLy8gZ2V0IG9iamVjdHMgd2l0aCBtZWRpYSBxdWVyaWVzXG4gIGNvbnN0IG1lZGlhID0gQXJyYXkuZnJvbShhcnJheSkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgc2VsZikge1xuICAgIGlmIChpdGVtLmRhdGFzZXRbZGF0YVNldFZhbHVlXSkge1xuICAgICAgcmV0dXJuIGl0ZW0uZGF0YXNldFtkYXRhU2V0VmFsdWVdLnNwbGl0KCcsJylbMF07XG4gICAgfVxuICB9KTtcbiAgLy8gb2JqZWN0cyB3aXRoIG1lZGlhIHF1ZXJpZXMgaW5pdGlhbGl6YXRpb25cbiAgaWYgKG1lZGlhLmxlbmd0aCkge1xuICAgIGNvbnN0IGJyZWFrcG9pbnRzQXJyYXkgPSBbXTtcbiAgICBtZWRpYS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgcGFyYW1zID0gaXRlbS5kYXRhc2V0W2RhdGFTZXRWYWx1ZV07XG4gICAgICBjb25zdCBicmVha3BvaW50ID0ge307XG4gICAgICBjb25zdCBwYXJhbXNBcnJheSA9IHBhcmFtcy5zcGxpdCgnLCcpO1xuICAgICAgYnJlYWtwb2ludC52YWx1ZSA9IHBhcmFtc0FycmF5WzBdO1xuICAgICAgYnJlYWtwb2ludC50eXBlID0gcGFyYW1zQXJyYXlbMV0gPyBwYXJhbXNBcnJheVsxXS50cmltKCkgOiAnbWF4JztcbiAgICAgIGJyZWFrcG9pbnQuaXRlbSA9IGl0ZW07XG4gICAgICBicmVha3BvaW50c0FycmF5LnB1c2goYnJlYWtwb2ludCk7XG4gICAgfSk7XG4gICAgLy8gZ2V0IHVuaXF1ZSBicmVha3BvaW50c1xuICAgIGxldCBtZFF1ZXJpZXMgPSBicmVha3BvaW50c0FycmF5Lm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgJygnICtcbiAgICAgICAgaXRlbS50eXBlICtcbiAgICAgICAgJy13aWR0aDogJyArXG4gICAgICAgIGl0ZW0udmFsdWUgK1xuICAgICAgICAncHgpLCcgK1xuICAgICAgICBpdGVtLnZhbHVlICtcbiAgICAgICAgJywnICtcbiAgICAgICAgaXRlbS50eXBlXG4gICAgICApO1xuICAgIH0pO1xuICAgIG1kUXVlcmllcyA9IHVuaXF1ZUFycmF5KG1kUXVlcmllcyk7XG4gICAgY29uc3QgbWRRdWVyaWVzQXJyYXkgPSBbXTtcblxuICAgIGlmIChtZFF1ZXJpZXMubGVuZ3RoKSB7XG4gICAgICAvLyB3b3JrIHdpdGggZXZlcnkgYnJlYWtwb2ludFxuICAgICAgbWRRdWVyaWVzLmZvckVhY2goYnJlYWtwb2ludCA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtc0FycmF5ID0gYnJlYWtwb2ludC5zcGxpdCgnLCcpO1xuICAgICAgICBjb25zdCBtZWRpYUJyZWFrcG9pbnQgPSBwYXJhbXNBcnJheVsxXTtcbiAgICAgICAgY29uc3QgbWVkaWFUeXBlID0gcGFyYW1zQXJyYXlbMl07XG4gICAgICAgIGNvbnN0IG1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShwYXJhbXNBcnJheVswXSk7XG4gICAgICAgIC8vIG9iamVjdHMgd2l0aCBjb25kaXRpb25zXG4gICAgICAgIGNvbnN0IGl0ZW1zQXJyYXkgPSBicmVha3BvaW50c0FycmF5LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIGlmIChpdGVtLnZhbHVlID09PSBtZWRpYUJyZWFrcG9pbnQgJiYgaXRlbS50eXBlID09PSBtZWRpYVR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG1kUXVlcmllc0FycmF5LnB1c2goe1xuICAgICAgICAgIGl0ZW1zQXJyYXksXG4gICAgICAgICAgbWF0Y2hNZWRpYSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBtZFF1ZXJpZXNBcnJheTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogc21vb3RobHkgc2xpZGVzIHVwXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxuICogQHBhcmFtIHtib29sZWFufSBzaG93bW9yZVxuICovXG5leHBvcnQgY29uc3QgX3NsaWRlVXAgPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCwgc2hvd21vcmUgPSAwKSA9PiB7XG4gIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnX3NsaWRlJyk7XG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdoZWlnaHQsIG1hcmdpbiwgcGFkZGluZyc7XG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gYCR7dGFyZ2V0Lm9mZnNldEhlaWdodH1weGA7XG4gICAgdGFyZ2V0Lm9mZnNldEhlaWdodDtcbiAgICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gc2hvd21vcmUgPyBgJHtzaG93bW9yZX1yZW1gIDogYDBgO1xuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IDA7XG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGFyZ2V0LmhpZGRlbiA9ICFzaG93bW9yZSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICFzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JykgOiBudWxsO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJyk7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcbiAgICAgICFzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKSA6IG51bGw7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ19zbGlkZScpO1xuICAgICAgLy8gY3JlYXRlIGV2ZW50XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ3NsaWRlVXBEb25lJywge1xuICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSwgZHVyYXRpb24pO1xuICB9XG59O1xuXG4vKipcbiAqIHNtb290aGx5IHNsaWRlcyBkb3duXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxuICogQHBhcmFtIHtib29sZWFufSBzaG93bW9yZVxuICovXG5leHBvcnQgY29uc3QgX3NsaWRlRG93biA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwLCBzaG93bW9yZSA9IDApID0+IHtcbiAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdfc2xpZGUnKTtcbiAgICB0YXJnZXQuaGlkZGVuID0gdGFyZ2V0LmhpZGRlbiA/IGZhbHNlIDogbnVsbDtcbiAgICBzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JykgOiBudWxsO1xuICAgIGxldCBoZWlnaHQgPSB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xuICAgIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBzaG93bW9yZSA/IGAke3Nob3dtb3JlfXJlbWAgOiBgMGA7XG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gMDtcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcbiAgICB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmcnO1xuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKTtcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdfc2xpZGUnKTtcbiAgICAgIC8vIGNyZWF0ZSBldmVudFxuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCdzbGlkZURvd25Eb25lJywge1xuICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSwgZHVyYXRpb24pO1xuICB9XG59O1xuXG4vKipcbiAqIHRvZ2dsZXMgc21vb3RoIHNsaWRlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxuICogQHJldHVybnMgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IF9zbGlkZVRvZ2dsZSA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwKSA9PiB7XG4gIGlmICh0YXJnZXQuaGlkZGVuKSB7XG4gICAgcmV0dXJuIF9zbGlkZURvd24odGFyZ2V0LCBkdXJhdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIF9zbGlkZVVwKHRhcmdldCwgZHVyYXRpb24pO1xuICB9XG59O1xuXG4vKipcbiAqIGNvbnZlcnRzIHJlbSB0byBwaXhlbHNcbiAqIEBwYXJhbSB7bnVtYmVyfSByZW1WYWx1ZVxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1Ub1B4KHJlbVZhbHVlKSB7XG4gIC8vINCf0L7Qu9GD0YfQsNC10Lwg0YLQtdC60YPRidC40Lkg0LHQsNC30L7QstGL0Lkg0YDQsNC30LzQtdGAINGI0YDQuNGE0YLQsCAoZm9udC1zaXplKSDQuNC3INGN0LvQtdC80LXQvdGC0LAgPGh0bWw+XG4gIHZhciBodG1sRm9udFNpemUgPSBwYXJzZUZsb2F0KFxuICAgIGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5mb250U2l6ZVxuICApO1xuXG4gIC8vINCf0LXRgNC10LLQvtC00LjQvCDQt9C90LDRh9C10L3QuNC1INC40LcgcmVtINCyIHB4XG4gIHZhciBweFZhbHVlID0gcmVtVmFsdWUgKiBodG1sRm9udFNpemU7XG5cbiAgLy8g0J7QutGA0YPQs9C70Y/QtdC8INC30L3QsNGH0LXQvdC40LUg0LTQviDRhtC10LvRi9GFINC/0LjQutGB0LXQu9C10LkgKNC/0L4g0LbQtdC70LDQvdC40Y4pXG4gIHJldHVybiBNYXRoLnJvdW5kKHB4VmFsdWUpICsgJ3B4Jztcbn1cblxuLy8gcmVtb3ZlIGNsYXNzIGZyb20gYWxsIGFycmF5IGVsZW1lbnRzXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2xhc3NlcyA9IChhcnJheSwgY2xhc3NOYW1lKSA9PiB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBhcnJheVtpXS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH1cbn07XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkV1Y2xpZCBDaXJjdWxhciBBXCI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogdXJsKFwiLi9hc3NldHMvZm9udHMvRXVjbGlkLUNpcmN1bGFyLUEtTGlnaHQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRXVjbGlkIENpcmN1bGFyIEFcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoXCIuL2Fzc2V0cy9mb250cy9FdWNsaWQtQ2lyY3VsYXItQS1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkV1Y2xpZCBDaXJjdWxhciBBXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKFwiLi9hc3NldHMvZm9udHMvRXVjbGlkLUNpcmN1bGFyLUEtTWVkaXVtLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkV1Y2xpZCBDaXJjdWxhciBBXCI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHNyYzogdXJsKFwiLi9hc3NldHMvZm9udHMvRXVjbGlkLUNpcmN1bGFyLUEtU2VtaUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRXVjbGlkIENpcmN1bGFyIEFcIjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoXCIuL2Fzc2V0cy9mb250cy9FdWNsaWQtQ2lyY3VsYXItQS1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNwYWNlIEFnZVwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChcIi4vYXNzZXRzL2ZvbnRzL1NwYWNlLUFnZS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTcGFjZSBBZ2UgQ3lyaWxsaWNcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoXCIuL2Fzc2V0cy9mb250cy9TcGFjZS1BZ2UtQ3lyaWxsaWMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRXVyb3BlRXh0ZW5kZWRDXCI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHNyYzogdXJsKFwiLi9hc3NldHMvZm9udHMvRXVyb3BlLUV4dGVuZGVkLUMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG59XG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgZm9udC1mYW1pbHk6IFwiRXVjbGlkIENpcmN1bGFyIEFcIjtcbiAgZm9udC1zaXplOiAwLjUyMDgzMzV2dztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYnVnZml4IGluZmluaXRlIDFzO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGJ1Z2ZpeCBpbmZpbml0ZSAxcztcbiAgaGVpZ2h0OiAxMDAlO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTY1Mztcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBidWdmaXggaW5maW5pdGUgMXM7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5hIHtcbiAgY29sb3I6IHVuc2V0O1xufVxuXG5hLFxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYnV0dG9uLFxuaW5wdXQsXG5hLFxudGV4dGFyZWEge1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5idXR0b246Zm9jdXMsXG5pbnB1dDpmb2N1cyxcbmE6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5idXR0b246YWN0aXZlLFxuaW5wdXQ6YWN0aXZlLFxuYTphY3RpdmUsXG50ZXh0YXJlYTphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250OiBpbmhlcml0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnAge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udDogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbnVsIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG51bCBsaSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxNjByZW07XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbnN2ZyxcbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5odG1sLmxvY2ssXG5odG1sLmxvY2sgYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbm1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ud3JhcHBlciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDE5MjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDIuM3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDA7XG59XG4uaGVhZGVyX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbn1cbi5oZWFkZXJfX2J1cmdlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaGVhZGVyX19sb2dvIHtcbiAgbWF4LXdpZHRoOiAxNy44cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1LjdyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmhlYWRlcl9fbG9nbyBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaGVhZGVyX19tZW51LWNvbnRhY3RzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oZWFkZXJfX25hdi1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2LjNyZW07XG59XG4uaGVhZGVyX19uYXYtaXRlbS1pY29uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oZWFkZXJfX25hdi1pdGVtLWRyb3Bkb3duIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oZWFkZXJfX25hdi1pdGVtLWxpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcbn1cbi5oZWFkZXJfX25hdi1pdGVtLWxpbms6aG92ZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY5KTtcbn1cbi5oZWFkZXJfX2NvbnRhY3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxLjdyZW07XG59XG4uaGVhZGVyX19jb250YWN0czpob3ZlciAuaGVhZGVyX19jb250YWN0cy10aXRsZSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjkpO1xufVxuLmhlYWRlcl9fY29udGFjdHM6aG92ZXIgc3ZnIHBhdGgge1xuICBzdHJva2U6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OSk7XG59XG4uaGVhZGVyX19jb250YWN0cy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICB0cmFuc2l0aW9uOiAwLjNzIGNvbG9yIGVhc2U7XG59XG4uaGVhZGVyX19jb250YWN0cyBzdmcge1xuICBtYXgtd2lkdGg6IDIuNHJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMi40cmVtO1xufVxuLmhlYWRlcl9fY29udGFjdHMgc3ZnIHBhdGgge1xuICB0cmFuc2l0aW9uOiAwLjNzIHN0cm9rZSBlYXNlO1xufVxuLmhlYWRlciAuaGFtYnVyZ2VyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogNC42cmVtO1xuICBoZWlnaHQ6IDMuNnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhlYWRlciAuaGFtYnVyZ2VyIHNwYW4sIC5oZWFkZXIgLmhhbWJ1cmdlcjo6YmVmb3JlLCAuaGVhZGVyIC5oYW1idXJnZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0cmFuc2l0aW9uOiB0b3AgMC4zcyBlYXNlLCB3aWR0aCAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJvdHRvbSAwLjNzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG59XG4uaGVhZGVyIC5oYW1idXJnZXI6OmJlZm9yZSB7XG4gIHRvcDogMDtcbn1cbi5oZWFkZXIgLmhhbWJ1cmdlcjo6YWZ0ZXIge1xuICBib3R0b206IDA7XG59XG4uaGVhZGVyIC5oYW1idXJnZXIgc3BhbiB7XG4gIHRvcDogY2FsYyg1MCUgLSAxcHgpO1xufVxuLl9tZW51LW9wZW5lZCAuaGVhZGVyIC5oYW1idXJnZXIgc3BhbiB7XG4gIHdpZHRoOiAwO1xufVxuLl9tZW51LW9wZW5lZCAuaGVhZGVyIC5oYW1idXJnZXI6OmJlZm9yZSB7XG4gIHRvcDogY2FsYyg1MCUgLSAxcHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuLl9tZW51LW9wZW5lZCAuaGVhZGVyIC5oYW1idXJnZXI6OmFmdGVyIHtcbiAgYm90dG9tOiBjYWxjKDUwJSAtIDFweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi5fbWVudS1vcGVuZWQgLmhlYWRlciAuaGFtYnVyZ2VyIHNwYW4sIC5fbWVudS1vcGVuZWQgLmhlYWRlciAuaGFtYnVyZ2VyOjpiZWZvcmUsIC5fbWVudS1vcGVuZWQgLmhlYWRlciAuaGFtYnVyZ2VyOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5mb290ZXIge1xuICBwYWRkaW5nLWJvdHRvbTogNy44cmVtO1xufVxuLmZvb3Rlcl9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZm9vdGVyX19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjhyZW07XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG59XG4uZm9vdGVyX19saXN0Omxhc3QtY2hpbGQgLmZvb3Rlcl9faXRlbTpsYXN0LWNoaWxkIGEge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmZvb3Rlcl9faXRlbSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICB0cmFuc2l0aW9uOiAwLjNzIGNvbG9yIGVhc2U7XG59XG4uZm9vdGVyX19pdGVtIGE6aG92ZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY5KTtcbn1cbi5mb290ZXJfX21pZGRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9vdGVyX19sb2dvIHtcbiAgbWF4LXdpZHRoOiAxMC45cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogNi4xcmVtO1xufVxuLmZvb3Rlcl9fY29udGFjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIuMnJlbTtcbn1cbi5mb290ZXJfX2NvbnRhY3QgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB0cmFuc2l0aW9uOiAwLjNzIGNvbG9yIGVhc2U7XG59XG4uZm9vdGVyX19jb250YWN0IGE6aG92ZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY5KTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiU3BhY2UgQWdlXCI7XG4gIGZvbnQtc2l6ZTogOXJlbTtcbn1cblxuLnN1YnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiU3BhY2UgQWdlXCI7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLnR4dDMwIHtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4udHh0MTYge1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmN5ciB7XG4gIGZvbnQtZmFtaWx5OiBcIlNwYWNlIEFnZSBDeXJpbGxpY1wiO1xufVxuXG4uYnRuIHtcbiAgcGFkZGluZzogMC42cmVtIDAuNnJlbSAwLjZyZW0gMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMnJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4KTtcbiAgYm9yZGVyLXJhZGl1czogMCA0cmVtIDRyZW0gNHJlbTtcbn1cbi5idG5fX3RleHQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmJ0bl9fYXJyb3ctd3JhcCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMCAwIDRyZW07XG4gIHdpZHRoOiA0LjRyZW07XG4gIGhlaWdodDogNC40cmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4uYnRuX19hcnJvdy1pY29uIHtcbiAgd2lkdGg6IDIuNHJlbTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9ZW1haWxdLFxuaW5wdXRbdHlwZT10ZWxdLFxudGV4dGFyZWEge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxudGV4dGFyZWE6Zm9jdXMsXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNC42cmVtIDIuN3JlbSAycmVtIDIuN3JlbTtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xufVxuLmlucHV0X3RleHRhcmVhIHtcbiAgaGVpZ2h0OiAyNS41cmVtO1xufVxuLmlucHV0X3RleHRhcmVhIHRleHRhcmVhIHtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICByZXNpemU6IG5vbmU7XG59XG4uaW5wdXRfX2ZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLmlucHV0X19maWVsZDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5pbnB1dF9fbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMS44cmVtO1xuICBsZWZ0OiAyLjdyZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5zZWxlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VsZWN0X19ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlbGVjdF9fdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDM7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZWxlY3RfX3ZhbHVlIHtcbiAgcGFkZGluZzogMS4zcmVtIDEuM3JlbSAxLjNyZW0gMi43cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMnJlbTtcbiAgaGVpZ2h0OiA3LjJyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNlbGVjdF9fdmFsdWUgPiAqIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4uc2VsZWN0X192YWx1ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDAgMCA1cmVtO1xuICB3aWR0aDogNXJlbTtcbiAgaGVpZ2h0OiA1cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2ljb25zL2Fyci13aGl0ZS5zdmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIuNHJlbTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuLnNlbGVjdF9fdmFsdWUuX3NlbGVjdC1sYWJlbDo6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLXNlbC1sYWJlbCk7XG59XG4uX3NlbGVjdC1maWxsZWQgLnNlbGVjdF9fdmFsdWUuX3NlbGVjdC1sYWJlbDo6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zZWxlY3RfX3ZhbHVlLl9zZWxlY3QtbGFiZWw6OmJlZm9yZSxcbi5zZWxlY3RfX3ZhbHVlIC5zZWxlY3RfX2NvbnRlbnQge1xuICBtYXgtd2lkdGg6IDMxLjRyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLnNlbGVjdF9fY29udGVudDpub3QoLl9zZWxlY3QtZmlsbGVkIC5zZWxlY3RfX2NvbnRlbnQpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zZWxlY3RfX3RleHQge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi5zZWxlY3RfX2lucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uc2VsZWN0X19vcHRpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IGNhbGMoMTAwJSAtIDNyZW0pO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiA0LjZyZW0gMi43cmVtIDIuNHJlbSAyLjdyZW07XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDNyZW0gM3JlbTtcbiAgYmFja2dyb3VuZDogIzM2Mzk2YztcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xufVxuLnNlbGVjdF9fc2Nyb2xsIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBtYXgtaGVpZ2h0OiAxOXJlbTtcbn1cbi5zZWxlY3RfX3Njcm9sbC5zaW1wbGViYXItc2Nyb2xsYWJsZS15IC5zaW1wbGViYXItdHJhY2suc2ltcGxlYmFyLXZlcnRpY2FsIHtcbiAgcmlnaHQ6IDEuMnJlbTtcbiAgd2lkdGg6IDAuNHJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2VlO1xufVxuLnNlbGVjdF9fc2Nyb2xsLnNpbXBsZWJhci1zY3JvbGxhYmxlLXkgLnNpbXBsZWJhci1zY3JvbGxiYXIge1xuICBtaW4taGVpZ2h0OiAzLjJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EyYWRjMTtcbn1cbi5zZWxlY3RfX29wdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XG59XG4uc2VsZWN0X19vcHRpb246bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbn1cbi5zZWxlY3RfX29wdGlvbi5fc2VsZWN0LXNlbGVjdGVkIHtcbiAgY29sb3I6ICMyOWZmN2Y7XG59XG4uc2VsZWN0X19ncm91cCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xufVxuLnNlbGVjdF9faGludCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDEwMCUgKyAwLjhyZW0pO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbGluZS1oZWlnaHQ6IDE0Mi44NTclO1xufVxuLnNlbGVjdF9fc3VidGl0bGUge1xuICBjdXJzb3I6IHRleHQ7XG59XG4uc2VsZWN0Ll9zZWxlY3Qtb3BlbmVkIHtcbiAgei1pbmRleDogNTtcbn1cbi5zZWxlY3QuX3NlbGVjdC1vcGVuZWQgLnNlbGVjdF9fdmFsdWU6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG59XG4uX3NlbGVjdC1saXN0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFkZ2Uge1xuICBwYWRkaW5nOiAxcmVtIDNyZW0gMXJlbSAxcmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMi41cmVtO1xuICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcbn1cbi5iYWRnZS5fYWN0aXZlIHtcbiAgY29sb3I6ICMxNDBhM2Y7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4uYmFkZ2UuX2FjdGl2ZSAuYmFkZ2VfX2ljb24td3JhcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODI2Nzg7XG59XG4uYmFkZ2UuX2FjdGl2ZSAuYmFkZ2VfX2ljb24td3JhcDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9pY29ucy9zdGFyLWFjdGl2ZS5zdmcpO1xufVxuLmJhZGdlX19pY29uLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDAgMCA0LjVyZW07XG4gIHdpZHRoOiA0LjVyZW07XG4gIGhlaWdodDogNC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xufVxuLmJhZGdlX19pY29uLXdyYXA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDhyZW07XG4gIGhlaWdodDogOHJlbTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9pY29ucy9zdGFyLnN2Zyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5zZWN0aW9uLWhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMnJlbTtcbn1cbi5ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMy43cmVtO1xufVxuLmdyb3VwX19wcm9qZWN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS44cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZ3JvdXBfX3Byb2plY3RzOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTJyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDAuMnJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuLmdyb3VwX19jb3VudGVyIHtcbiAgZmxleDogMCAwIDUuOHJlbTtcbiAgd2lkdGg6IDUuOHJlbTtcbiAgaGVpZ2h0OiA1LjhyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzI5ZmY3Zjtcbn1cbi5ncm91cF9fY291bnRlciBzcGFuIHtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIGZvbnQtZmFtaWx5OiBcIlNwYWNlIEFnZSBDeXJpbGxpY1wiO1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEuNnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmdyb3VwX190aXRsZSB7XG4gIG1heC13aWR0aDogMjNyZW07XG59XG5cbi50eHQtZ3JlZW4ge1xuICBjb2xvcjogIzI5ZmY3Zjtcbn1cblxuLl9tb2JpbGUtb25seSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pbnRybyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogLThyZW07XG4gIG1hcmdpbi1ib3R0b206IDEwLjVyZW07XG4gIHBhZGRpbmctdG9wOiA0MHJlbTtcbn1cbi5pbnRybyAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmludHJvOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzEwMTY1MyAwJSwgcmdiYSgyMywgMTUsIDY3LCAwKSA2My40NSUpO1xuICB6LWluZGV4OiAtMTtcbiAgaW5zZXQ6IDA7XG4gIGJvdHRvbTogLTAuNXJlbTtcbn1cbi5pbnRyb19fY29udGVudCB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAxMS43cmVtO1xufVxuLmludHJvX190aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMTEwJTtcbiAgbWFyZ2luLWJvdHRvbTogNS4zcmVtO1xufVxuLnByb21vLXBhZ2UgLmludHJvX190aXRsZSB7XG4gIG1heC13aWR0aDogMTE4cmVtO1xufVxuLmludHJvX19wb3N0ZXItaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICB6LWluZGV4OiAtMTtcbn1cbi5pbnRyb19fcG9zdGVyLWltYWdlX2hhcy1iYWNrZHJvcDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLmludHJvX19wb3N0ZXItaW1hZ2UgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5pbnRyb19fcmVxdWVzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMy43cmVtO1xufVxuLmludHJvX19hcnRpY2xlcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCg1MXJlbSwgMWZyKSk7XG4gIGdhcDogMy43cmVtO1xuICBtYXJnaW4tdG9wOiA1LjlyZW07XG59XG4uaW50cm9fX2FydGljbGUge1xuICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmludHJvX19hcnRpY2xlIGE6aG92ZXIge1xuICBjb2xvcjogIzI5ZmY3Zjtcbn1cbi5pbnRyb19fYXJ0aWNsZS1saW5rIHtcbiAgcGFkZGluZzogMS4xcmVtIDZyZW0gMS4xcmVtIDQuMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDJyZW07XG59XG4uaW50cm9fX2FydGljbGUtbGluay10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIG1heC13aWR0aDogMThyZW07XG4gIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcbn1cbi5pbnRyb19fYXJ0aWNsZS1saW5rLWltYWdlIHtcbiAgbWF4LXdpZHRoOiAyMC4ycmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMC4ycmVtO1xuICBmbGV4OiAwIDAgMjAuMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmludHJvX19hcnRpY2xlLWxpbmstaW1hZ2UgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5pbnRyb19fYXJ0aWNsZS1saW5rLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXJlbTtcbiAgcmlnaHQ6IDEuM3JlbTtcbiAgcGFkZGluZzogMC42cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xuICBtYXgtd2lkdGg6IDQuNnJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNC42cmVtO1xufVxuLmludHJvX19hcnRpY2xlLWxpbmstaWNvbl9oYXMtbnVtYmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XG59XG4uaW50cm9fX2FydGljbGUtbGluay1pY29uIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnByb21vdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDMxcmVtO1xufVxuLnByb21vdGlvbl9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDAgMS41cmVtIDAgMi45cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvbW90aW9uX19jb250ZW50OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCIzXCI7XG4gIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuNXJlbTtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogcmdiYSg0MSwgMjU1LCAxMjcsIDAuMSk7XG4gIGZvbnQtZmFtaWx5OiBcIlNwYWNlIEFnZSBDeXJpbGxpY1wiO1xuICBmb250LXNpemU6IDcwcmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMTAxNjUzO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdG9wOiAtMzRyZW07XG4gIHotaW5kZXg6IC0xO1xufVxuLnByb21vdGlvbl9fYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnByb21vdGlvbl9fYmxvY2s6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuLnByb21vdGlvbl9fYmxvY2s6bnRoLWNoaWxkKGV2ZW4pIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAzNHJlbTtcbn1cbi5wcm9tb3Rpb25fX3N1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLm1hcmtldGluZyB7XG4gIG1hcmdpbi1ib3R0b206IDI5cmVtO1xufVxuLm1hcmtldGluZ19faW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xNS4ycmVtO1xuICB0b3A6IC0xMnJlbTtcbiAgbWF4LXdpZHRoOiA3NHJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFya2V0aW5nX19jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5tYXJrZXRpbmdfX3RpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogNC44cmVtO1xufVxuLm1hcmtldGluZ19faW5mbyB7XG4gIG1heC13aWR0aDogNTFyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMjFyZW07XG59XG4ubWFya2V0aW5nX19pbmZvLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDQuMXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xufVxuLm1hcmtldGluZ19faW5mby1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYXJrZXRpbmdfX2luZm8taXRlbSB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFya2V0aW5nX19pbmZvLWl0ZW06OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMC41cmVtO1xuICBoZWlnaHQ6IDAuNXJlbTtcbiAgdG9wOiAxLjVyZW07XG4gIGxlZnQ6IC0ycmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4ubWFya2V0aW5nX19pbmZvLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbWF4LXdpZHRoOiAyMS43cmVtO1xufVxuXG4uYmVuZWZpdHMge1xuICBtYXJnaW4tYm90dG9tOiAxNy43cmVtO1xufVxuLmJlbmVmaXRzX19jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDM3LjRyZW0sIDFmcikpO1xuICBnYXA6IDMuNnJlbTtcbn1cbi5iZW5lZml0c19fYXJ0aWNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgcGFkZGluZzogMy44cmVtIDIuMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5iZW5lZml0c19fYXJ0aWNsZS1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMS42cmVtO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYmVuZWZpdHNfX2FydGljbGUtaGVhZGluZy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDIyLjZyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJlbmVmaXRzX19hcnRpY2xlLWhlYWRpbmctY291bnRlciB7XG4gIGNvbG9yOiAjMTEwNzNiO1xuICBmb250LXNpemU6IDZyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cbi5iZW5lZml0c19fYXJ0aWNsZS1wb3N0ZXIge1xuICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGJhY2tncm91bmQ6ICMxMDE2NTM7XG4gIGhlaWdodDogMjEuOXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuLmJlbmVmaXRzX19hcnRpY2xlLXBvc3Rlci1pbWFnZSB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIG1heC13aWR0aDogMjhyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcmVtO1xufVxuLmJlbmVmaXRzX19hcnRpY2xlLXBvc3Rlci1pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmJlbmVmaXRzX19hcnRpY2xlLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZy1yaWdodDogM3JlbTtcbn1cblxuLnBvcnRmb2xpbyB7XG4gIG1hcmdpbi1ib3R0b206IDE4LjVyZW07XG59XG4ucG9ydGZvbGlvX19oZWFkaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogNi4zcmVtO1xufVxuLnBvcnRmb2xpb19fbGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCg3OC40cmVtLCAxZnIpKTtcbiAgZ2FwOiAzLjZyZW0gMy4zcmVtO1xuICBtYXJnaW4tYm90dG9tOiA2LjZyZW07XG59XG4ucG9ydGZvbGlvX19pdGVtIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDMuM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBwYWRkaW5nOiAyLjJyZW07XG59XG4ucG9ydGZvbGlvX19pdGVtIGE6aG92ZXIgLnBvcnRmb2xpb19faXRlbS10ZXh0IHtcbiAgY29sb3I6ICMyOWZmN2Y7XG59XG4ucG9ydGZvbGlvX19pdGVtIGE6aG92ZXIgLnBvcnRmb2xpb19faXRlbS1pbWFnZSBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4ucG9ydGZvbGlvX19pdGVtLWltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNi41cmVtO1xuICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucG9ydGZvbGlvX19pdGVtLWltYWdlIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm0gZWFzZTtcbn1cbi5wb3J0Zm9saW9fX2l0ZW0tYm90dG9tIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucG9ydGZvbGlvX19pdGVtLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICB0cmFuc2l0aW9uOiAwLjNzIGNvbG9yIGVhc2U7XG59XG4ucG9ydGZvbGlvX19pdGVtLXRleHQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5wb3J0Zm9saW9fX2l0ZW0taWNvbiB7XG4gIHBhZGRpbmc6IDAuNnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcbiAgbWF4LXdpZHRoOiA0LjZyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQuNnJlbTtcbn1cbi5wb3J0Zm9saW9fX2l0ZW0taWNvbiBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucG9ydGZvbGlvX19saW5rIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuZmlndXJlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XG4gIG9wYWNpdHk6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHMgZWFzZSAwcztcbn1cbi5fbWVudS1vcGVuZWQgYm9keTo6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ4LjAxZW0pIHtcbiAgLm1vYmlsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcbiAgLmZvb3Rlcl9fbGlzdDpsYXN0LWNoaWxkIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIH1cbiAgLnR4dDI1IHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE5MjBweCkge1xuICBodG1sIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogNXB4O1xuICAgIGZvbnQtc2l6ZTogMS41NjI1dnc7XG4gICAgZm9udC1zaXplOiAxLjMzMzMzMzMzMzN2dztcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG4gIH1cbiAgYm9keSB7XG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgMy4ycmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5oZWFkZXIge1xuICAgIHBhZGRpbmctdG9wOiAzLjZyZW07XG4gIH1cbiAgLmhlYWRlcl9fY29udGVudCB7XG4gICAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xuICAgIGdhcDogMTZyZW07XG4gICAgdHJhbnNpdGlvbjogMC4zcyBnYXAgZWFzZTtcbiAgfVxuICAuX21lbnUtb3BlbmVkIC5oZWFkZXJfX2NvbnRlbnQge1xuICAgIGdhcDogMTEuNnJlbTtcbiAgfVxuICAuX21lbnUtb3BlbmVkIC5oZWFkZXJfX2NvbnRlbnQ6OmFmdGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIC5oZWFkZXJfX2J1cmdlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmhlYWRlcl9fbG9nbyB7XG4gICAgbWF4LXdpZHRoOiAyN3JlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDguNnJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgfVxuICAuaGVhZGVyX19tZW51IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA3LjRyZW0pO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgIGJhY2tncm91bmQ6ICMxMDE2NTM7XG4gICAgcGFkZGluZzogMjEuNHJlbSA1LjJyZW0gOC44cmVtIDcuOHJlbTtcbiAgfVxuICAuX21lbnUtb3BlbmVkIC5oZWFkZXJfX21lbnUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIC5oZWFkZXJfX21lbnUtY29udGFjdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xuICB9XG4gIC5oZWFkZXJfX21lbnUtY29udGFjdHMtaXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi40cmVtO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjcpO1xuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICB9XG4gIC5oZWFkZXJfX21lbnUtY29udGFjdHMtYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIGJvcmRlcjogMC40cmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OCk7XG4gICAgYm9yZGVyLXJhZGl1czogMHJlbSAyNHJlbSAyNHJlbSAyNHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAycmVtO1xuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDRyZW07XG4gICAgdHJhbnNpdGlvbjogMC4zcyBib3JkZXIgZWFzZTtcbiAgfVxuICAuaGVhZGVyX19tZW51LWNvbnRhY3RzLWJ1dHRvbjphY3RpdmUge1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICB9XG4gIC5oZWFkZXJfX21lbnUtY29udGFjdHMtYnV0dG9uOmFjdGl2ZSBzcGFuIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY5KTtcbiAgfVxuICAuaGVhZGVyX19tZW51LWNvbnRhY3RzLWJ1dHRvbjphY3RpdmUgLmhlYWRlcl9fbWVudS1jb250YWN0cy1idXR0b24taWNvbiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY5KTtcbiAgfVxuICAuaGVhZGVyX19tZW51LWNvbnRhY3RzLWJ1dHRvbiBzcGFuIHtcbiAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcbiAgfVxuICAuaGVhZGVyX19tZW51LWNvbnRhY3RzLWJ1dHRvbi1pY29uIHtcbiAgICBwYWRkaW5nOiAxLjRyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgbWF4LXdpZHRoOiA2LjhyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2LjhyZW07XG4gIH1cbiAgLmhlYWRlcl9fbWVudS1jb250YWN0cy1idXR0b24taWNvbiBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuaGVhZGVyX19uYXYge1xuICAgIG1heC1oZWlnaHQ6IDEwMXJlbTtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuaGVhZGVyX19uYXYtbGlzdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDcuMnJlbTtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmhlYWRlcl9fbmF2LWl0ZW0uLS1hY3RpdmUgYSB7XG4gICAgY29sb3I6ICMyOWZmN2Y7XG4gIH1cbiAgLmhlYWRlcl9fbmF2LWl0ZW0taGVhZGluZyB7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS1oZWFkaW5nLi0tYWN0aXZlIC5oZWFkZXJfX25hdi1pdGVtLWljb24ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtLWhlYWRpbmcuLS1hY3RpdmUgfiAuaGVhZGVyX19uYXYtaXRlbS1kcm9wZG93biB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIH1cbiAgLmhlYWRlcl9fbmF2LWl0ZW0taGVhZGluZy4tLWFjdGl2ZSB+IC5oZWFkZXJfX25hdi1pdGVtLWRyb3Bkb3duIC5oZWFkZXJfX25hdi1pdGVtLWRyb3Bkb3duLXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDRyZW07XG4gIH1cbiAgLmhlYWRlcl9fbmF2LWl0ZW0taGVhZGluZyBhIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS1pY29uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybSBlYXNlO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtLWRyb3Bkb3duIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMGZyO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZ3JpZC10ZW1wbGF0ZS1yb3dzIGVhc2U7XG4gIH1cbiAgLmhlYWRlcl9fbmF2LWl0ZW0tZHJvcGRvd24td3JhcHBlciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIG1hcmdpbiBlYXNlO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiA0LjhyZW07XG4gIH1cbiAgLmhlYWRlcl9fbmF2LWl0ZW0tZHJvcGRvd24taXRlbSB7XG4gICAgZm9udC1zaXplOiAzLjJyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIH1cbiAgLmhlYWRlcl9fbmF2LWl0ZW0tZHJvcGRvd24taXRlbTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS1saW5rIHtcbiAgICBmb250LXNpemU6IDMuMnJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgfVxuICAuaGVhZGVyX19jb250YWN0cyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbiAgLmhlYWRlcl9fY29udGFjdHMtdGl0bGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmhlYWRlcl9fY29udGFjdHMgc3ZnIHtcbiAgICBtYXgtd2lkdGg6IDQuOHJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQuOHJlbTtcbiAgfVxuICAuZm9vdGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTFyZW07XG4gIH1cbiAgLmZvb3Rlcl9fY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdhcDogMDtcbiAgfVxuICAuZm9vdGVyX19saXN0IHtcbiAgICBnYXA6IDNyZW07XG4gIH1cbiAgLmZvb3Rlcl9fbGlzdDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XG4gIH1cbiAgLmZvb3Rlcl9faXRlbSBhIHtcbiAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgfVxuICAuZm9vdGVyX19taWRkbGUge1xuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gICAgb3JkZXI6IC0xO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuICAuZm9vdGVyX19sb2dvIHtcbiAgICBtYXgtd2lkdGg6IDI3cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOC42cmVtO1xuICB9XG4gIC5mb290ZXJfX2NvbnRhY3RzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiA2cmVtO1xuICB9XG4gIC5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICB9XG4gIC50eHQzMCB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICB9XG4gIC50eHQxNiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIC5idG4ge1xuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDRyZW07XG4gICAgY29sdW1uLWdhcDogMy4ycmVtO1xuICAgIGJvcmRlcjogMC40cmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OCk7XG4gICAgYm9yZGVyLXJhZGl1czogMCA4cmVtIDhyZW0gOHJlbTtcbiAgfVxuICAuYnRuX19hcnJvdy13cmFwIHtcbiAgICBmbGV4OiAwIDAgN3JlbTtcbiAgICB3aWR0aDogN3JlbTtcbiAgICBoZWlnaHQ6IDdyZW07XG4gIH1cbiAgLmJ0bl9fYXJyb3ctaWNvbiB7XG4gICAgd2lkdGg6IDMuOHJlbTtcbiAgfVxuICAuaW5wdXQge1xuICAgIHBhZGRpbmc6IDdyZW0gOHJlbSAyLjRyZW0gMi40cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRyZW07XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRyZW0pO1xuICB9XG4gIC5pbnB1dF90ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiAzNC44cmVtO1xuICB9XG4gIC5pbnB1dF9fbGFiZWwge1xuICAgIHRvcDogMi40cmVtO1xuICAgIGxlZnQ6IDIuNHJlbTtcbiAgfVxuICAuc2VsZWN0X190aXRsZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNHJlbTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHJlbSk7XG4gIH1cbiAgLnNlbGVjdF9fdmFsdWUge1xuICAgIHBhZGRpbmc6IDEuNnJlbTtcbiAgICBnYXA6IDRyZW07XG4gICAgaGVpZ2h0OiAxMHJlbTtcbiAgfVxuICAuc2VsZWN0X192YWx1ZTo6YWZ0ZXIge1xuICAgIGZsZXg6IDAgMCA2cmVtO1xuICAgIHdpZHRoOiA2cmVtO1xuICAgIGhlaWdodDogNnJlbTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMuMnJlbTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMi40cmVtKTtcbiAgfVxuICAuc2VsZWN0X19vcHRpb25zIHtcbiAgICB0b3A6IGNhbGMoMTAwJSAtIDRyZW0pO1xuICAgIHBhZGRpbmc6IDhyZW0gNHJlbSA0cmVtIDRyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDRyZW0gNHJlbTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHJlbSk7XG4gIH1cbiAgLnNlbGVjdF9fb3B0aW9uOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XG4gIH1cbiAgLmJhZGdlIHtcbiAgICBwYWRkaW5nOiAycmVtIDhyZW0gMnJlbSAycmVtO1xuICAgIGNvbHVtbi1nYXA6IDNyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNnJlbTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHJlbSk7XG4gIH1cbiAgLmJhZGdlX19pY29uLXdyYXAge1xuICAgIGZsZXg6IDAgMCA2cmVtO1xuICAgIHdpZHRoOiA2cmVtO1xuICAgIGhlaWdodDogNnJlbTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHJlbSk7XG4gIH1cbiAgLmJhZGdlX19pY29uLXdyYXA6OmJlZm9yZSB7XG4gICAgd2lkdGg6IDEwcmVtO1xuICAgIGhlaWdodDogMTByZW07XG4gIH1cbiAgLmdyb3VwIHtcbiAgICBnYXA6IDVyZW07XG4gIH1cbiAgLmdyb3VwX19wcm9qZWN0czo6YWZ0ZXIge1xuICAgIGxlZnQ6IC0zcmVtO1xuICAgIHdpZHRoOiAwLjRyZW07XG4gIH1cbiAgLmdyb3VwX19wcm9qZWN0cyB7XG4gICAgZ2FwOiAyLjRyZW07XG4gIH1cbiAgLmdyb3VwX19jb3VudGVyIHtcbiAgICBmbGV4OiAwIDAgOC44cmVtO1xuICAgIHdpZHRoOiA4LjhyZW07XG4gICAgaGVpZ2h0OiA4LjhyZW07XG4gIH1cbiAgLmdyb3VwX19jb3VudGVyIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMi40OHJlbTtcbiAgICBsaW5lLWhlaWdodDogMC43NzM1cmVtO1xuICAgIG1hcmdpbi10b3A6IDMuNXJlbTtcbiAgfVxuICAudHh0LWdyZWVuX2RvIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuICAuX2Rlc2t0b3Atb25seSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuX21vYmlsZS1vbmx5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuaW50cm8ge1xuICAgIG1hcmdpbi1ib3R0b206IDE1LjVyZW07XG4gICAgcGFkZGluZy10b3A6IDY4cmVtO1xuICB9XG4gIC5pbnRybyB7XG4gICAgbWFyZ2luLXRvcDogLTE2cmVtO1xuICB9XG4gIC5pbnRybzo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMTAxNjUzIDEzJSwgcmdiYSgyMywgMTUsIDY3LCAwKSA3NS40NSUpO1xuICB9XG4gIC5pbnRyb19fdGl0bGUge1xuICAgIGxpbmUtaGVpZ2h0OiA4NSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNy4zcmVtO1xuICB9XG4gIC5wcm9tby1wYWdlIC5pbnRyb19fdGl0bGUge1xuICAgIG1heC13aWR0aDogNjJyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiU3BhY2UgQWdlIEN5cmlsbGljXCI7XG4gIH1cbiAgLmludHJvX190aXRsZSBzcGFuOm5vdCguaW50cm9fX3RpdGxlIHNwYW4udHh0LWdyZWVuKSB7XG4gICAgY29sb3I6ICMyOWZmN2Y7XG4gIH1cbiAgLmhvbWUtcGFnZSAuaW50cm9fX3Bvc3Rlci1pbWFnZSBpbWcge1xuICAgIG9iamVjdC1wb3NpdGlvbjogLTE0MHJlbTtcbiAgfVxuICAuaW50cm9fX3JlcXVlc3Qge1xuICAgIGdhcDogNXJlbTtcbiAgfVxuICAuaW50cm9fX2FydGljbGVzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMTUuMnJlbSwgMWZyKSk7XG4gICAgZ2FwOiAyLjhyZW07XG4gICAgbWFyZ2luLXRvcDogMTdyZW07XG4gIH1cbiAgLmludHJvX19hcnRpY2xlIHtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICB9XG4gIC5pbnRyb19fYXJ0aWNsZS1saW5rIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMi42cmVtO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMS41cmVtIDJyZW0gM3JlbTtcbiAgfVxuICAuaW50cm9fX2FydGljbGUtbGluay10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG4gIC5pbnRyb19fYXJ0aWNsZS1saW5rLWltYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWF4LXdpZHRoOiAxNi4ycmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTYuMnJlbTtcbiAgICBmbGV4OiAwIDAgMTYuMnJlbTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIC5pbnRyb19fYXJ0aWNsZS1saW5rLWljb24ge1xuICAgIG1heC13aWR0aDogNnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDZyZW07XG4gIH1cbiAgLmludHJvX19hcnRpY2xlLWxpbmstaWNvbiB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBwYWRkaW5nOiAwLjhyZW07XG4gIH1cbiAgLnByb21vdGlvbl9fY29udGVudCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBnYXA6IDFyZW07XG4gIH1cbiAgLnByb21vdGlvbl9fdGl0bGUge1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVyZW07XG4gIH1cbiAgLnByb21vdGlvbl9fYmxvY2sge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICBnYXA6IDFyZW07XG4gIH1cbiAgLnByb21vdGlvbl9fYmxvY2s6bGFzdC1jaGlsZCAucHJvbW90aW9uX190aXRsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByb21vdGlvbl9fYmxvY2s6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgfVxuICAucHJvbW90aW9uX19ibG9jazpudGgtY2hpbGQoZXZlbikgc3BhbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG4gIC5wcm9tb3Rpb25fX2Jsb2NrOm50aC1jaGlsZChvZGQpIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gIH1cbiAgLnByb21vdGlvbl9fYmxvY2s6bnRoLWNoaWxkKG9kZCkgLnByb21vdGlvbl9fdGl0bGUge1xuICAgIG1hcmdpbi1yaWdodDogNXJlbTtcbiAgfVxuICAucHJvbW90aW9uX19zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgfVxuICAubWFya2V0aW5nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXJlbTtcbiAgfVxuICAubWFya2V0aW5nX19pbWFnZSB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBtYXgtd2lkdGg6IDY4cmVtO1xuICB9XG4gIC5tYXJrZXRpbmdfX2NvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLm1hcmtldGluZ19fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDQuNHJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLm1hcmtldGluZ19faW5mbyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC5tYXJrZXRpbmdfX2luZm8tcm93IHtcbiAgICBnYXA6IDNyZW07XG4gIH1cbiAgLm1hcmtldGluZ19faW5mby1saXN0IHtcbiAgICBnYXA6IDJyZW07XG4gIH1cbiAgLm1hcmtldGluZ19faW5mby1pdGVtIHtcbiAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgfVxuICAubWFya2V0aW5nX19pbmZvLWl0ZW06OmFmdGVyIHtcbiAgICB0b3A6IDAuNXJlbTtcbiAgICB3aWR0aDogMXJlbTtcbiAgICBoZWlnaHQ6IDFyZW07XG4gIH1cbiAgLm1hcmtldGluZ19faW5mby1kZXNjcmlwdGlvbiB7XG4gICAgbWF4LXdpZHRoOiAzMy4ycmVtO1xuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIH1cbiAgLmJlbmVmaXRzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNnJlbTtcbiAgfVxuICAuYmVuZWZpdHNfX2NvbnRlbnQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgzMi44cmVtLCAxZnIpKTtcbiAgICBnYXA6IDIuNnJlbSAyLjJyZW07XG4gIH1cbiAgLmJlbmVmaXRzX19hcnRpY2xlIHtcbiAgICBwYWRkaW5nOiAzLjRyZW0gMnJlbSAycmVtO1xuICB9XG4gIC5iZW5lZml0c19fYXJ0aWNsZS1oZWFkaW5nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjRyZW07XG4gIH1cbiAgLmJlbmVmaXRzX19hcnRpY2xlLWhlYWRpbmctdGl0bGUge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuICAuYmVuZWZpdHNfX2FydGljbGUtaGVhZGluZy1jb3VudGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5iZW5lZml0c19fYXJ0aWNsZS1wb3N0ZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgaGVpZ2h0OiAyMHJlbTtcbiAgfVxuICAuYmVuZWZpdHNfX2FydGljbGUtcG9zdGVyLWltYWdlIHtcbiAgICBtYXgtd2lkdGg6IDI2cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjhyZW07XG4gIH1cbiAgLmJlbmVmaXRzX19hcnRpY2xlLWRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG4gIC5wb3J0Zm9saW8ge1xuICAgIG1hcmdpbi1ib3R0b206IDI3cmVtO1xuICB9XG4gIC5wb3J0Zm9saW9fX2hlYWRpbmcge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA4cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDhyZW07XG4gIH1cbiAgLnBvcnRmb2xpb19fbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMy4ycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDcuNnJlbTtcbiAgfVxuICAucG9ydGZvbGlvX19pdGVtIGEge1xuICAgIGdhcDogMi42cmVtO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gIH1cbiAgLnBvcnRmb2xpb19faXRlbS1pbWFnZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzJyZW07XG4gIH1cbiAgLnBvcnRmb2xpb19faXRlbS10ZXh0IHtcbiAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgIGdhcDogMnJlbTtcbiAgfVxuICAucG9ydGZvbGlvX19pdGVtLXRleHQgc3BhbiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gIH1cbiAgLnBvcnRmb2xpb19faXRlbS1pY29uIHtcbiAgICBtYXgtd2lkdGg6IDZyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2cmVtO1xuICB9XG4gIC5wb3J0Zm9saW9fX2l0ZW0taWNvbiB7XG4gICAgcGFkZGluZzogMC42cmVtO1xuICAgIG1heC13aWR0aDogNS4ycmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNS4ycmVtO1xuICB9XG4gIC5kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcbiAgLnNlbGVjdF9fb3B0aW9uOmhvdmVyOm5vdCguc2VsZWN0X19vcHRpb246aG92ZXIuc2VsZWN0X19zdWJ0aXRsZSkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzI5ZmY3ZjtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3NlY3Rpb25zL2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9taXhpbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc2VjdGlvbnMvZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvX3R5cG8uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3VpL3N0eWxlcy9fYnV0dG9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvX2lucHV0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvX3NlbGVjdC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL19iYWRnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL19zZWN0aW9uLWhlYWQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3VpL3N0eWxlcy9fZ3JvdXAuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZGV2L3Z6bXNrMS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zZWN0aW9ucy9faW50cm8uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc2VjdGlvbnMvX3Byb21vdGlvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zZWN0aW9ucy9fbWFya2V0aW5nLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3NlY3Rpb25zL2JlbmVmaXRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3NlY3Rpb25zL19wb3J0Zm9saW8uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZGV2L3VraWswLnNjc3NcIixcIjxubyBzb3VyY2U+XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLHdFQUFBO0FDQ0o7QURFQTtFQUNJLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSww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QUE7SUFDQSxhQUFBO0VqQmdxRGQ7RWlCbHBETTtJZDNDSixlY2tEMkI7SWRqRDNCLFdBQUE7SUFDQSxhY2dEaUM7RWpCZ3FEbkM7RWlCaHBETTtJQVdRLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsU0FBQTtFakI4cERkO0VpQjNwRFU7SUFRUSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VqQitwRGxCO0VpQjFwRE07SWRwR0osZUEwQ21CO0lBekNuQixXQUFBO0lBQ0EsWUF3Q3lCO0VIdXVEM0I7RWlCN3FETTtJQUlRLGVBQUE7SWR4R1osaUJjeUcyQjtJZHhHM0IsV0FBQTtJQUNBLGNjdUdtQztFakJnckRyQztFa0Jsd0RFO0lBQ0ksYUFBQTtFbEJzeUROO0FBN01GO0FtQjluREE7RVgyS2dCO0lBQ0ksZUFBQTtJQUNBLGNSM0paO0VBMjZCTjtBQXVzQkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRXVjbGlkIENpcmN1bGFyIEEnO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvRXVjbGlkLUNpcmN1bGFyLUEtTGlnaHQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0V1Y2xpZCBDaXJjdWxhciBBJztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0V1Y2xpZC1DaXJjdWxhci1BLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0V1Y2xpZCBDaXJjdWxhciBBJztcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0V1Y2xpZC1DaXJjdWxhci1BLU1lZGl1bS53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRXVjbGlkIENpcmN1bGFyIEEnO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvRXVjbGlkLUNpcmN1bGFyLUEtU2VtaUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0V1Y2xpZCBDaXJjdWxhciBBJztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0V1Y2xpZC1DaXJjdWxhci1BLUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1NwYWNlIEFnZSc7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9TcGFjZS1BZ2Uud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1NwYWNlIEFnZSBDeXJpbGxpYyc7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9TcGFjZS1BZ2UtQ3lyaWxsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0V1cm9wZUV4dGVuZGVkQyc7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9FdXJvcGUtRXh0ZW5kZWQtQy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuXCIsXCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWl4aW5zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcblxcbkBpbXBvcnQgJy4vbWl4aW5zJztcXG5cXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB2YXJpYWJsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcblxcbi8vIGZvbnRzXFxuJHNwYWNlQWdlOiAnU3BhY2UgQWdlJztcXG4kc3BhY2VBZ2VDeXI6ICdTcGFjZSBBZ2UgQ3lyaWxsaWMnO1xcbiRFdXJvcGVFOiAnRXVyb3BlRXh0ZW5kZWRDJztcXG4kRUNBOiAnRXVjbGlkIENpcmN1bGFyIEEnO1xcblxcbi8vIGNvbG9yc1xcbiR3aGl0ZTogI2ZmZmZmZjtcXG4kd2hpdGUtc2Vjb25kYXJ5OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjkpO1xcbiRibGFjazogIzAwMDAwMDtcXG4kZGFya1B1cnBsZTogIzExMDczYjtcXG4kZGFya1B1cnBsZTI6ICMxNDBhM2Y7XFxuJGdyZWVuOiAjMjlmZjdmO1xcbiRibHVlOiAjMTgyNjc4O1xcbiRiZ0NvbG9yOiAjMTAxNjUzO1xcblxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZm9udHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuLy8gbG9jYWwgZm9udHNcXG5AaW1wb3J0ICcuL2ZvbnRzJztcXG5cXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGJhc2Ugc3R5bGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcblxcbi8vIGJhc2Ugc2NzcyBmaWxlXFxuQGltcG9ydCAnLi9zZXQnO1xcblxcbi8vIGh0bWxcXG5odG1sLmxvY2ssXFxuaHRtbC5sb2NrIGJvZHkge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0b3VjaC1hY3Rpb246IG5vbmU7XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLy8gbWFpblxcbm1haW4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXgtd2lkdGg6IDE5MjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcblxcbi8vIGhlYWRlciAvIGZvb3RlclxcbkBpbXBvcnQgJy4vc2VjdGlvbnMvaGVhZGVyJztcXG5AaW1wb3J0ICcuL3NlY3Rpb25zL2Zvb3Rlcic7XFxuXFxuLy8gdWlcXG5AaW1wb3J0ICcuLi91aS9zdHlsZXMvdWkuc2Nzcyc7XFxuXFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5cXG5AaW1wb3J0ICcuL2Rldi92em1zazEuc2Nzcyc7XFxuQGltcG9ydCAnLi9kZXYvbWFya3VzRE0uc2Nzcyc7XFxuQGltcG9ydCAnLi9kZXYvdWtpazAuc2Nzcyc7XFxuQGltcG9ydCAnLi9kZXYva2llNmVyLnNjc3MnO1xcblwiLFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6ICRFQ0E7IC8vINGI0YDQuNGE0YIg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0L/QviDRgdCw0LnRgtGDXFxuICAgIGZvbnQtc2l6ZTogMC41MjA4MzM1dnc7IC8vINC90LAg0YDQsNC30YDQtdGI0LXQvdC40LggMTkyMCAwLjUyMDgzNXZ3ID09PSAxMHB4XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJ1Z2ZpeCBpbmZpbml0ZSAxcztcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBidWdmaXggaW5maW5pdGUgMXM7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgY29sb3I6ICR3aGl0ZTsgLy8g0YbQstC10YIg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0YLQtdC60YHRgtCwINC/0L4g0YHQsNC50YLRg1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdDb2xvcjtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYnVnZml4IGluZmluaXRlIDFzO1xcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuYSB7XFxuICAgIGNvbG9yOiB1bnNldDtcXG59XFxuYSxcXG5hOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxuYSxcXG50ZXh0YXJlYSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgJjpmb2N1cyB7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICB9XFxuICAgICY6YWN0aXZlIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbnAge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG5pbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbnVsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG51bCBsaSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxNjByZW07XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5pbnB1dFt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdudW1iZXInXSB7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbn1cXG5cXG5zdmcsXFxuaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDE5MjBweCkge1xcbiAgICBodG1sIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICBodG1sIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxLjU2MjV2dztcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygoMTAwIC8gMzc1KSAqIDV2dyk7IC8vINCz0LTQtSAzNzUg0Y3RgtC+INGI0LjRgNC40L3QsCDQvNC+0LEg0LLQtdGA0YHQuNC4INC80LDQutC10YLQsFxcbiAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xcbiAgICB9XFxuXFxuICAgIGJvZHkge1xcbiAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xcbiAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBwYWRkaW5nOiAwIDMuMnJlbTsgLy8g0LIg0LzQvtCxINCy0LXRgNGB0LjQuCDQvtGC0YHRgtGD0L8g0L7RgiDQutGA0LDRjyDQt9Cw0LTQsNC10Lwg0LTQu9GPINCy0YHQtdGFINC60L7QvdGC0LXQudC90LXRgNC+0LIsINCwINGC0LDQvCDQs9C00LUg0L3QtSDQvdGD0LbQvdC+INC80L7QttC10Lwg0YLQvtGH0LXRh9C90L4g0YPQsdGA0LDRgtGMXFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cXG5cIixcIi5oZWFkZXIge1xcbiAgICBwYWRkaW5nLXRvcDogMi4zcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG5cXG4gICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAzLjZyZW07XFxuICAgIH1cXG5cXG4gICAgJl9fY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XFxuICAgICAgICAgICAgZ2FwOiAxNnJlbTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGdhcCBlYXNlO1xcblxcbiAgICAgICAgICAgIC5fbWVudS1vcGVuZWQgJiB7XFxuICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgZ2FwOiAxMS42cmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19idXJnZXIge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fbG9nbyB7XFxuICAgICAgICBAaW5jbHVkZSBzaXplcygxNy44cmVtLCA1LjdyZW0pO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIHNpemVzKDI3cmVtLCA4LjZyZW0pO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fbWVudSB7XFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDcuNHJlbSk7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjpcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtIDAuM3MgZWFzZSxcXG4gICAgICAgICAgICAgICAgb3BhY2l0eSAwLjNzIGVhc2U7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGJnQ29sb3I7XFxuICAgICAgICAgICAgcGFkZGluZzogMjEuNHJlbSA1LjJyZW0gOC44cmVtIDcuOHJlbTtcXG5cXG4gICAgICAgICAgICAuX21lbnUtb3BlbmVkICYge1xcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1jb250YWN0cyB7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XFxuXFxuICAgICAgICAgICAgICAgICYtaXRlbSB7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyLjRyZW07XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY3KTtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICYtYnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAuNHJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzgpO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHJlbSAyNHJlbSAyNHJlbSAyNHJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiAycmVtO1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gNHJlbTtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgYm9yZGVyIGVhc2U7XFxuXFxuICAgICAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUtc2Vjb25kYXJ5O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LWNvbnRhY3RzLWJ1dHRvbi1pY29uIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlLXNlY29uZGFyeTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICYtaWNvbiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMS40cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc2l6ZXMoNi44cmVtLCA2LjhyZW0pO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX25hdiB7XFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMXJlbTtcXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtbGlzdCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogNi4zcmVtO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgICAgICBnYXA6IDcuMnJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLWl0ZW0ge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgICAgICAgICAgICAmLi0tYWN0aXZlIHtcXG4gICAgICAgICAgICAgICAgICAgIGEge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JlZW47XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJi1oZWFkaW5nIHtcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5OCU7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICYuLS1hY3RpdmUge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkZXJfX25hdi1pdGVtLWljb24ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgfiAuaGVhZGVyX19uYXYtaXRlbS1kcm9wZG93biB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaGVhZGVyX19uYXYtaXRlbS1kcm9wZG93bi13cmFwcGVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRyZW07XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICBhIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLWljb24ge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcblxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybSBlYXNlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICYtZHJvcGRvd24ge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcblxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMGZyO1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBncmlkLXRlbXBsYXRlLXJvd3MgZWFzZTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAmLXdyYXBwZXIge1xcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgbWFyZ2luIGVhc2U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQuOHJlbTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAmLWl0ZW0ge1xcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuMnJlbTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJi1saW5rIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGNvbG9yIGVhc2U7XFxuXFxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZS1zZWNvbmRhcnk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2NvbnRhY3RzIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxLjdyZW07XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgLmhlYWRlcl9fY29udGFjdHMtdGl0bGUge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlLXNlY29uZGFyeTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgc3ZnIHtcXG4gICAgICAgICAgICAgICAgcGF0aCB7XFxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICR3aGl0ZS1zZWNvbmRhcnk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLXRpdGxlIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGNvbG9yIGVhc2U7XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICBzdmcge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIHNpemVzKDIuNHJlbSwgMi40cmVtKTtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzaXplcyg0LjhyZW0sIDQuOHJlbSk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHBhdGgge1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIHN0cm9rZSBlYXNlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuaGFtYnVyZ2VyIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICB3aWR0aDogNC42cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAzLjZyZW07XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICBzcGFuLFxcbiAgICAgICAgJjo6YmVmb3JlLFxcbiAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIHBzZXVkbyB7XFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjpcXG4gICAgICAgICAgICAgICAgICAgIHRvcCAwLjNzIGVhc2UsXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCAwLjNzIGVhc2UsXFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMC4zcyBlYXNlLFxcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tIDAuM3MgZWFzZSxcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgJjo6YmVmb3JlIHtcXG4gICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICB9XFxuICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgfVxcbiAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDFweCk7XFxuICAgICAgICB9XFxuICAgICAgICAuX21lbnUtb3BlbmVkICYge1xcbiAgICAgICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcXG4gICAgICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDFweCk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgYm90dG9tOiBjYWxjKDUwJSAtIDFweCk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgc3BhbixcXG4gICAgICAgICAgICAmOjpiZWZvcmUsXFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiLFwiQG1peGluIHBzZXVkbygpIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgQGNvbnRlbnQ7XFxufVxcblxcbkBtaXhpbiBzbWFsbC10YWJsZXQge1xcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG59XFxuXFxuQG1peGluIHNpemVzKCR3aWR0aCwgJGhlaWdodCkge1xcbiAgICBtYXgtd2lkdGg6ICR3aWR0aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogJGhlaWdodDtcXG5cXG4gICAgQGNvbnRlbnQ7XFxufVxcblxcbkBtaXhpbiBpdGVtLWRvdCgpIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAmOjphZnRlciB7XFxuICAgICAgICBAaW5jbHVkZSBwc2V1ZG8ge1xcbiAgICAgICAgICAgIHdpZHRoOiAwLjVyZW07XFxuICAgICAgICAgICAgaGVpZ2h0OiAwLjVyZW07XFxuICAgICAgICAgICAgdG9wOiAxLjVyZW07XFxuICAgICAgICAgICAgbGVmdDogLTJyZW07XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgdG9wOiAwLjVyZW07XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFyZW07XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIEBjb250ZW50O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbkBtaXhpbiByb3RhdGVkLWFycm93KCkge1xcbiAgICBwYWRkaW5nOiAwLjZyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgIEBpbmNsdWRlIHNpemVzKDQuNnJlbSwgNC42cmVtKTtcXG5cXG4gICAgaW1nIHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcblxcbiAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgQGluY2x1ZGUgc2l6ZXMoNnJlbSwgNnJlbSk7XFxuICAgIH1cXG5cXG4gICAgQGNvbnRlbnQ7XFxufVxcblwiLFwiLmZvb3RlciB7XFxuICAgIHBhZGRpbmctYm90dG9tOiA3LjhyZW07XFxuXFxuICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTFyZW07XFxuICAgIH1cXG5cXG4gICAgJl9fY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgICAgICAgICBnYXA6IDA7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fbGlzdCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMC44cmVtO1xcbiAgICAgICAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgZ2FwOiAzcmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXJlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmZvb3Rlcl9faXRlbSB7XFxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XFxuICAgICAgICAgICAgICAgICAgICBhIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2l0ZW0ge1xcbiAgICAgICAgYSB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBjb2xvciBlYXNlO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZS1zZWNvbmRhcnk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX21pZGRsZSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gICAgICAgICAgICBvcmRlcjogLTE7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2xvZ28ge1xcbiAgICAgICAgQGluY2x1ZGUgc2l6ZXMoMTAuOXJlbSwgMTNyZW0pO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNi4xcmVtO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBzaXplcygyN3JlbSwgOC42cmVtKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19jb250YWN0cyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMi4ycmVtO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2NvbnRhY3Qge1xcbiAgICAgICAgYSB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGNvbG9yIGVhc2U7XFxuXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUtc2Vjb25kYXJ5O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcIi50aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAkc3BhY2VBZ2U7XFxuICAgIGZvbnQtc2l6ZTogOXJlbTtcXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gICAgfVxcbn1cXG5cXG4uc3VidGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJHNwYWNlQWdlO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICBmb250LXNpemU6IDRyZW07XFxuICAgIH1cXG59XFxuXFxuLnR4dDI1IHtcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICB9XFxufVxcblxcbi50eHQzMCB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgfVxcbn1cXG5cXG4udHh0MTYge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcbn1cXG5cXG4uY3lyIHtcXG4gICAgZm9udC1mYW1pbHk6ICRzcGFjZUFnZUN5cjtcXG59XFxuXCIsXCIuYnRuIHtcXG4gICAgcGFkZGluZzogMC42cmVtIDAuNnJlbSAwLjZyZW0gMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogMnJlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMCA0cmVtIDRyZW0gNHJlbTtcXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDRyZW07XFxuICAgICAgICBjb2x1bW4tZ2FwOiAzLjJyZW07XFxuICAgICAgICBib3JkZXI6IDAuNHJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzgpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA4cmVtIDhyZW0gOHJlbTtcXG4gICAgfVxcblxcbiAgICAvLyAuYnRuX190ZXh0XFxuXFxuICAgICZfX3RleHQge1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgfVxcblxcbiAgICAvLyAuYnRuX19hcnJvdy13cmFwXFxuXFxuICAgICZfX2Fycm93LXdyYXAge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBmbGV4OiAwIDAgNHJlbTtcXG4gICAgICAgIHdpZHRoOiA0LjRyZW07XFxuICAgICAgICBoZWlnaHQ6IDQuNHJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCA3cmVtO1xcbiAgICAgICAgICAgIHdpZHRoOiA3cmVtO1xcbiAgICAgICAgICAgIGhlaWdodDogN3JlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuYnRuX19hcnJvdy1pY29uXFxuXFxuICAgICZfX2Fycm93LWljb24ge1xcbiAgICAgICAgd2lkdGg6IDIuNHJlbTtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIHdpZHRoOiAzLjhyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCJpbnB1dFt0eXBlPSd0ZXh0J10sXFxuaW5wdXRbdHlwZT0nZW1haWwnXSxcXG5pbnB1dFt0eXBlPSd0ZWwnXSxcXG50ZXh0YXJlYSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG50ZXh0YXJlYTpmb2N1cyxcXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5pbnB1dCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogNC42cmVtIDIuN3JlbSAycmVtIDIuN3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xcbiAgICAmX3RleHRhcmVhIHtcXG4gICAgICAgIGhlaWdodDogMjUuNXJlbTtcXG4gICAgICAgIHRleHRhcmVhIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIHBhZGRpbmc6IDdyZW0gOHJlbSAyLjRyZW0gMi40cmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcXG4gICAgICAgICZfdGV4dGFyZWEge1xcbiAgICAgICAgICAgIGhlaWdodDogMzQuOHJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuaW5wdXRfX2ZpZWxkXFxuXFxuICAgICZfX2ZpZWxkIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XFxuICAgICAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5pbnB1dF9fbGFiZWxcXG5cXG4gICAgJl9fbGFiZWwge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAxLjhyZW07XFxuICAgICAgICBsZWZ0OiAyLjdyZW07XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICB0b3A6IDIuNHJlbTtcXG4gICAgICAgICAgICBsZWZ0OiAyLjRyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJi5fZm9ybS1mb2N1cyB7XFxuICAgIH1cXG4gICAgJi5fZm9ybS1lcnJvciB7XFxuICAgIH1cXG59XFxuXCIsXCIuc2VsZWN0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAvLyAuc2VsZWN0X19ib2R5XFxuXFxuICAgICZfX2JvZHkge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX3RpdGxlXFxuXFxuICAgICZfX3RpdGxlIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHotaW5kZXg6IDM7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X192YWx1ZVxcblxcbiAgICAmX192YWx1ZSB7XFxuICAgICAgICBwYWRkaW5nOiAxLjNyZW0gMS4zcmVtIDEuM3JlbSAyLjdyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMnJlbTtcXG4gICAgICAgIGhlaWdodDogNy4ycmVtO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgICA+ICoge1xcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgZmxleDogMCAwIDVyZW07XFxuICAgICAgICAgICAgd2lkdGg6IDVyZW07XFxuICAgICAgICAgICAgaGVpZ2h0OiA1cmVtO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcXG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9pY29ucy9hcnItd2hpdGUuc3ZnKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIuNHJlbTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbiAgICAgICAgfVxcbiAgICAgICAgJi5fc2VsZWN0LWxhYmVsIHtcXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtc2VsLWxhYmVsKTtcXG4gICAgICAgICAgICAgICAgLl9zZWxlY3QtZmlsbGVkICYge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgICYuX3NlbGVjdC1sYWJlbDo6YmVmb3JlLFxcbiAgICAgICAgLnNlbGVjdF9fY29udGVudCB7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMS40cmVtO1xcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgcGFkZGluZzogMS42cmVtO1xcbiAgICAgICAgICAgIGdhcDogNHJlbTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgICAgICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgZmxleDogMCAwIDZyZW07XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA2cmVtO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDZyZW07XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMy4ycmVtO1xcbiAgICAgICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMi40cmVtKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fY29udGVudFxcblxcbiAgICAmX19jb250ZW50IHtcXG4gICAgICAgIC8vIGhpZGUgLyBzaG93IHNlbGVjdGVkIHZhbHVlXFxuICAgICAgICAmOm5vdCguX3NlbGVjdC1maWxsZWQgJikge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fdGV4dFxcblxcbiAgICAmX190ZXh0IHtcXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX2lucHV0XFxuXFxuICAgICZfX2lucHV0IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fb3B0aW9uc1xcblxcbiAgICAmX19vcHRpb25zIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICB0b3A6IGNhbGMoMTAwJSAtIDNyZW0pO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHBhZGRpbmc6IDQuNnJlbSAyLjdyZW0gMi40cmVtIDIuN3JlbTtcXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAzcmVtIDNyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzYzOTZjO1xcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICB0b3A6IGNhbGMoMTAwJSAtIDRyZW0pO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDhyZW0gNHJlbSA0cmVtIDRyZW07XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDRyZW0gNHJlbTtcXG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHJlbSk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fc2Nyb2xsXFxuXFxuICAgICZfX3Njcm9sbCB7XFxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcblxcbiAgICAgICAgLy8gbWF4aW11bSBoZWlnaHRcXG4gICAgICAgIG1heC1oZWlnaHQ6IDE5cmVtO1xcblxcbiAgICAgICAgLy8gc2Nyb2xsYmFyIHN0eWxlc1xcbiAgICAgICAgJi5zaW1wbGViYXItc2Nyb2xsYWJsZS15IHtcXG4gICAgICAgICAgICAuc2ltcGxlYmFyLXRyYWNrLnNpbXBsZWJhci12ZXJ0aWNhbCB7XFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxLjJyZW07XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLjRyZW07XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTdlZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnNpbXBsZWJhci1zY3JvbGxiYXIge1xcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzLjJyZW07XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EyYWRjMTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fb3B0aW9uXFxuICAgICZfX29wdGlvbiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgJi5fc2VsZWN0LXNlbGVjdGVkIHtcXG4gICAgICAgICAgICBjb2xvcjogJGdyZWVuO1xcbiAgICAgICAgfVxcbiAgICAgICAgQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICY6bm90KCYuc2VsZWN0X19zdWJ0aXRsZSkge1xcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmVlbjtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X19ncm91cFxcblxcbiAgICAmX19ncm91cCB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX2Fzc2V0XFxuXFxuICAgICZfX2Fzc2V0IHtcXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X190ZXh0XFxuXFxuICAgICZfX3RleHQge1xcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX2hpbnRcXG5cXG4gICAgJl9faGludCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IGNhbGMoMTAwJSArIDAuOHJlbSk7XFxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNDIuODU3JTtcXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X19zdWJ0aXRsZVxcblxcbiAgICAmX19zdWJ0aXRsZSB7XFxuICAgICAgICBjdXJzb3I6IHRleHQ7XFxuICAgIH1cXG5cXG4gICAgLy8gc2VsZWN0IHN0YXRlXFxuICAgICYuX3NlbGVjdC1vcGVuZWQge1xcbiAgICAgICAgei1pbmRleDogNTtcXG4gICAgICAgIC5zZWxlY3RfX3ZhbHVlOjphZnRlciB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgJi5fc2VsZWN0LWZvY3VzZWQge1xcbiAgICB9XFxuICAgICYuX3NlbGVjdC1lcnJvciB7XFxuICAgICAgICAmOm5vdCgmLl9zZWxlY3QtZmlsbGVkLCAmLl9zZWxlY3Qtb3BlbmVkKSB7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgJi5fc2VsZWN0LWZpbGxlZCB7XFxuICAgICAgICAmOm5vdCgmLl9zZWxlY3Qtb3BlbmVkKSB7XFxuICAgICAgICAgICAgJjpub3QoJi5fc2VsZWN0LXNob3ctdmFsKSB7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgICYuX3NlbGVjdC1zaG93LXZhbCB7XFxuICAgICAgICAmLl9zZWxlY3QtZm9jdXNlZCxcXG4gICAgICAgICYuX3NlbGVjdC1maWxsZWQsXFxuICAgICAgICAmLl9zZWxlY3QtZXJyb3IsXFxuICAgICAgICAmLl9zZWxlY3QtZGlzYWJsZWQge1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgICYuX3NlbGVjdC1kaXNhYmxlZCB7XFxuICAgIH1cXG4gICAgJi5fc2VsZWN0LW11bHRpcGxlIHtcXG4gICAgfVxcbiAgICAmLl9zZWxlY3QtYWN0aXZlIHtcXG4gICAgfVxcbiAgICAmLl9zZWxlY3QtY2hlY2tib3gge1xcbiAgICB9XFxufVxcblxcbi8vIGxpc3RcXG4uX3NlbGVjdC1saXN0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIixcIi5iYWRnZSB7XFxuICAgIHBhZGRpbmc6IDFyZW0gM3JlbSAxcmVtIDFyZW07XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiAyLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xcbiAgICAmLl9hY3RpdmUge1xcbiAgICAgICAgY29sb3I6ICRkYXJrUHVycGxlMjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gICAgICAgIC5iYWRnZV9faWNvbi13cmFwIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2ljb25zL3N0YXItYWN0aXZlLnN2Zyk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICBwYWRkaW5nOiAycmVtIDhyZW0gMnJlbSAycmVtO1xcbiAgICAgICAgY29sdW1uLWdhcDogM3JlbTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZyZW07XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHJlbSk7XFxuICAgIH1cXG5cXG4gICAgLy8gLmJhZGdlX19pY29uLXdyYXBcXG5cXG4gICAgJl9faWNvbi13cmFwIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGZsZXg6IDAgMCA0LjVyZW07XFxuICAgICAgICB3aWR0aDogNC41cmVtO1xcbiAgICAgICAgaGVpZ2h0OiA0LjVyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICB3aWR0aDogOHJlbTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDhyZW07XFxuICAgICAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc3Rhci5zdmcpO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgIH1cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgZmxleDogMCAwIDZyZW07XFxuICAgICAgICAgICAgd2lkdGg6IDZyZW07XFxuICAgICAgICAgICAgaGVpZ2h0OiA2cmVtO1xcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTByZW07XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTByZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5iYWRnZV9fdGV4dFxcblxcbiAgICAmX190ZXh0IHtcXG4gICAgfVxcbn1cXG5cIixcIi5zZWN0aW9uLWhlYWQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBnYXA6IDJyZW07XFxuXFxuXFx0XFx0Ly8gLnNlY3Rpb24taGVhZF9fdGl0bGVcXG5cXG5cXHRcXHQmX190aXRsZSB7XFxuXFx0XFx0fVxcblxcblxcdFxcdC8vIC5zZWN0aW9uLWhlYWRfX2dyb3VwXFxuXFxuXFx0XFx0Jl9fZ3JvdXAge1xcblxcdFxcdH1cXG59XFxuXFxuXCIsXCIuZ3JvdXAge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDMuN3JlbTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgZ2FwOiA1cmVtO1xcbiAgICAgICAgfVxcblxcblxcdFxcdC8vIC5ncm91cF9fYnV0dG9uXFxuXFxuXFx0XFx0Jl9fYnV0dG9uIHtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0Ly8gLmdyb3VwX19wcm9qZWN0c1xcblxcblxcdFxcdCZfX3Byb2plY3RzIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAxLjhyZW07XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgcHNldWRvIHtcXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0ycmVtO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDAuMnJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG5cXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTNyZW07XFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDAuNHJlbTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBnYXA6IDIuNHJlbTtcXG4gICAgICAgICAgICB9XFxuXFx0XFx0fVxcblxcblxcdFxcdC8vIC5ncm91cF9fY291bnRlclxcblxcblxcdFxcdCZfX2NvdW50ZXIge1xcblxcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgNS44cmVtO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogNS44cmVtO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUuOHJlbTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JlZW47XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgOC44cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDguOHJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOC44cmVtO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxYTFhMWE7XFxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHNwYWNlQWdlQ3lyO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNnJlbTtcXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjQ4cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjc3MzVyZW07XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMy41cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuXFx0XFx0fVxcblxcblxcdFxcdC8vIC5ncm91cF9fdGl0bGVcXG5cXG5cXHRcXHQmX190aXRsZSB7XFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjNyZW07XFxuXFx0XFx0fVxcbn1cIixcIi50eHQtZ3JlZW4ge1xcbiAgICAgICAgY29sb3I6ICRncmVlbjtcXG4gICAgJl9kbyB7XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSl7XFxuICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5fZGVza3RvcC1vbmx5IHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuICB9XFxuIC5fbW9iaWxlLW9ubHkge1xcbiAgIGRpc3BsYXk6IG5vbmU7XFxuICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSl7XFxuICAgICBkaXNwbGF5OiBibG9jaztcXG4gICB9XFxuIH1cIixcIi5pbnRybyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLXRvcDogLThyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDEwLjVyZW07XFxuICAgIHBhZGRpbmctdG9wOiA0MHJlbTtcXG5cXG4gICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1LjVyZW07XFxuICAgICAgICBwYWRkaW5nLXRvcDogNjhyZW07XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtMTZyZW07XFxuICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMxMDE2NTMgMTMlLCByZ2JhKDIzLCAxNSwgNjcsIDApIDc1LjQ1JSk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgQGluY2x1ZGUgcHNldWRvIHtcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMxMDE2NTMgMCUsIHJnYmEoMjMsIDE1LCA2NywgMCkgNjMuNDUlKTtcXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgICAgICAgICBpbnNldDogMDtcXG4gICAgICAgICAgICBib3R0b206IC0wLjVyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fY29udGVudCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDExLjdyZW07XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX3RpdGxlIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDExMCU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1LjNyZW07XFxuXFxuICAgICAgICAucHJvbW8tcGFnZSAmIHtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDExOHJlbTtcXG5cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgLnByb21vLXBhZ2UgJiB7XFxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYycmVtO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJTcGFjZSBBZ2UgQ3lyaWxsaWNcXFwiO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICAgICAgJjpub3QoJi50eHQtZ3JlZW4pIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmVlbjtcXG5cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogODUlO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDcuM3JlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19wb3N0ZXItaW1hZ2Uge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgaW5zZXQ6IDA7XFxuICAgICAgICB6LWluZGV4OiAtMTtcXG5cXG4gICAgICAgICZfaGFzLWJhY2tkcm9wIHtcXG4gICAgICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO3RvcDogMDtsZWZ0OiAwO2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAuaG9tZS1wYWdlICYge1xcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiAtMTQwcmVtO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX3JlcXVlc3Qge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDMuN3JlbTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgZ2FwOiA1cmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1wcm9qZWN0cyB7XFxuXFxuICAgICAgICAgICAgJi1jb3VudGVyIHtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJi10aXRsZSB7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2FydGljbGVzIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoNTFyZW0sIDFmcikpO1xcbiAgICAgICAgZ2FwOiAzLjdyZW07XFxuICAgICAgICBtYXJnaW4tdG9wOiA1LjlyZW07XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgxNS4ycmVtLCAxZnIpKTtcXG4gICAgICAgICAgICBnYXA6IDIuOHJlbTtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxN3JlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19hcnRpY2xlIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgICBhOmhvdmVyIHtcXG4gICAgICAgICAgICBjb2xvcjogJGdyZWVuO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1saW5rIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjFyZW0gNnJlbSAxLjFyZW0gNC4xcmVtO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgZ2FwOiAycmVtO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgICAgIGdhcDogMi42cmVtO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDExLjVyZW0gMnJlbSAzcmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG5cXG4gICAgICAgICAgICAmLXRpdGxlIHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxOHJlbTtcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBjb2xvciBlYXNlO1xcblxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XFxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICYtaW1hZ2Uge1xcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzaXplcygyMC4ycmVtLCAyMC4ycmVtKTtcXG4gICAgICAgICAgICAgICAgZmxleDogMCAwIDIwLjJyZW07XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNpemVzKDE2LjJyZW0sIDE2LjJyZW0pO1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDE2LjJyZW07XFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICYtaWNvbiB7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgdG9wOiAxcmVtO1xcbiAgICAgICAgICAgICAgICByaWdodDogMS4zcmVtO1xcblxcbiAgICAgICAgICAgICAgICAmX2hhcy1udW1iZXIge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJvdGF0ZWQtYXJyb3c7XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC44cmVtO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiLFwiLnByb21vdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDMxcmVtO1xcblxcbiAgICAmX19jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgcGFkZGluZzogMCAxLjVyZW0gMCAyLjlyZW07XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgICAgZ2FwOiAxcmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIHBzZXVkbyB7XFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICczJztcXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMC41cmVtO1xcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiByZ2JhKDQxLCAyNTUsIDEyNywgMC4xKTtcXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRzcGFjZUFnZUN5cjtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA3MHJlbTtcXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJnQ29sb3I7XFxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICAgICAgICAgICAgICB0b3A6IC0zNHJlbTtcXG4gICAgICAgICAgICAgICAgei1pbmRleDogLTE7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX3RpdGxlIHtcXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19ibG9jayB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICAgICAgICAgIGdhcDogMXJlbTtcXG5cXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xcbiAgICAgICAgICAgICAgICAucHJvbW90aW9uX190aXRsZSB7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpudGgtY2hpbGQoZXZlbikge1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDM0cmVtO1xcblxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAmOm50aC1jaGlsZChvZGQpIHtcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xcblxcbiAgICAgICAgICAgICAgICAucHJvbW90aW9uX190aXRsZSB7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fc3VidGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XFxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcIi5tYXJrZXRpbmcge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyOXJlbTtcXG5cXG4gICAgQGluY2x1ZGUgc21hbGwtdGFibGV0e1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVyZW07XFxuICAgIH1cXG5cXG4gICAgJl9faW1hZ2Uge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogLTE1LjJyZW07XFxuICAgICAgICB0b3A6IC0xMnJlbTtcXG4gICAgICAgIG1heC13aWR0aDogNzRyZW07XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDY4cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2NvbnRlbnQge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fdGl0bGUge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNC44cmVtO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0LjRyZW07XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2luZm8ge1xcbiAgICAgICAgbWF4LXdpZHRoOiA1MXJlbTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIxcmVtO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLXJvdyB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgICAgICBnYXA6IDQuMXJlbTtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBnYXA6IDNyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1saXN0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIGdhcDogMnJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLWl0ZW0ge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBpdGVtLWRvdDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtZGVzY3JpcHRpb24ge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMS43cmVtO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzMuMnJlbTtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCIuYmVuZWZpdHMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNy43cmVtO1xcblxcbiAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjZyZW07XFxuICAgIH1cXG5cXG4gICAgJl9fY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDM3LjRyZW0sIDFmcikpO1xcbiAgICAgICAgZ2FwOiAzLjZyZW07XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgzMi44cmVtLCAxZnIpKTtcXG4gICAgICAgICAgICBnYXA6IDIuNnJlbSAyLjJyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fYXJ0aWNsZSB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgICAgICAgcGFkZGluZzogMy44cmVtIDIuMnJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAzLjRyZW0gMnJlbSAycmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1oZWFkaW5nIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgIGdhcDogMS42cmVtO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRyZW07XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMuNHJlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJi10aXRsZSB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIyLjZyZW07XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICYtY291bnRlciB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZGFya1B1cnBsZTtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA2cmVtO1xcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1wb3N0ZXIge1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICAgICAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxMDE2NTM7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyMS45cmVtO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHJlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJi1pbWFnZSB7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNpemVzKDI4cmVtLCAzMHJlbSk7XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBzaXplcygyNnJlbSwgMjhyZW0pO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtZGVzY3JpcHRpb24ge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogM3JlbTtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCIucG9ydGZvbGlvIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTguNXJlbTtcXG5cXG4gICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI3cmVtO1xcbiAgICB9XFxuXFxuICAgICZfX2hlYWRpbmcge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNi4zcmVtO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGdhcDogOHJlbTtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2xpc3Qge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCg3OC40cmVtLCAxZnIpKTtcXG4gICAgICAgIGdhcDogMy42cmVtIDMuM3JlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDYuNnJlbTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGdhcDogMy4ycmVtO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDcuNnJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19pdGVtIHtcXG4gICAgICAgIGEge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBnYXA6IDMuM3JlbTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAyLjJyZW07XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgZ2FwOiAyLjZyZW07XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAucG9ydGZvbGlvX19pdGVtLXRleHQge1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmVlbjtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAucG9ydGZvbGlvX19pdGVtLWltYWdlIGltZyB7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLWltYWdlIHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBzaXplcygxMDAlLCAzNi41cmVtKTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICAgICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNpemVzKDEwMCUsIDMycmVtKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybSBlYXNlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtYm90dG9tIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLXRleHQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBjb2xvciBlYXNlO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICAgICAgICAgICAgICAgIGdhcDogMnJlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xcblxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLWljb24ge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIHJvdGF0ZWQtYXJyb3c7XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0e1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNnJlbTtcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc2l6ZXMoNS4ycmVtLCA1LjJyZW0pO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19saW5rIHtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICB9XFxufVxcblwiLFwiQGltcG9ydCAnLi4vc2VjdGlvbnMvaW50cm8nO1xcbkBpbXBvcnQgJy4uL3NlY3Rpb25zL3Byb21vdGlvbic7XFxuQGltcG9ydCAnLi4vc2VjdGlvbnMvbWFya2V0aW5nJztcXG5AaW1wb3J0ICcuLi9zZWN0aW9ucy9iZW5lZml0cyc7XFxuQGltcG9ydCAnLi4vc2VjdGlvbnMvcG9ydGZvbGlvJztcXG5cXG5maWd1cmUge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHk6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogOTk7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHMgZWFzZSAwcztcXG5cXG4gICAgLl9tZW51LW9wZW5lZCAmIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4LjAxZW0pIHtcXG4gICAgLm1vYmlsZSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgIC5kZXNrdG9wIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuXCIsbnVsbF0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL2dyb3VwLWNzcy1tZWRpYS1xdWVyaWVzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvZ3JvdXAtY3NzLW1lZGlhLXF1ZXJpZXMtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL3Njc3Mvc3R5bGUuc2Nzcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZm9ybXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGltcG9ydCAqIGFzIGZvcm1zIGZyb20gJy4vdXRpbHMvZm9ybXMuanMnO1xuXG4vLyBmb3JtIGZpZWxkc1xuLy8gZm9ybXMuZm9ybUZpZWxkc0luaXQoeyB2aWV3UGFzczogZmFsc2UgfSk7XG5cbi8vIGZvcm0gc3VibWl0XG4vLyBmb3Jtcy5mb3JtU3VibWl0KCk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdXRpbHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vaGFtYnVyZ2VyXG5pbXBvcnQgJy4vdXRpbHMvaGFtYnVyZ2VyLmpzJztcblxuLy8gdGFic1xuLy8gaW1wb3J0ICcuL3V0aWxzL3RhYnMuanMnO1xuXG4vLyBhY2NvcmRpb25cbi8vIGltcG9ydCAnLi91dGlscy9hY2NvcmRpb24uanMnO1xuXG4vLyBzZWxlY3RcbmltcG9ydCAnLi91dGlscy9zZWxlY3QuanMnO1xuXG4vLyBtb2RhbHNcbi8vIGltcG9ydCAnLi91dGlscy9tb2RhbHMuanMnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGxpYnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBkeW5hbWljIGRvbVxuaW1wb3J0ICcuL2xpYnMvZGQuanMnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgJy4vZGV2L3Z6bXNrMS5qcyc7XG5pbXBvcnQgJy4vZGV2L21hcmt1c0RNLmpzJztcbmltcG9ydCAnLi9kZXYvdWtpazAuanMnO1xuaW1wb3J0ICcuL2Rldi9raWU2ZXIuanMnO1xuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiZXZlbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJEeW5hbWljQWRhcHQiLCJ0eXBlIiwicHJvdG90eXBlIiwiaW5pdCIsIl90aGlzIiwi0L5iamVjdHMiLCJkYUNsYXNzbmFtZSIsIm5vZGVzIiwiaSIsImxlbmd0aCIsIm5vZGUiLCJkYXRhIiwiZGF0YXNldCIsImRhIiwidHJpbSIsImRhdGFBcnJheSIsInNwbGl0Iiwi0L5iamVjdCIsImVsZW1lbnQiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiZGVzdGluYXRpb24iLCJxdWVyeVNlbGVjdG9yIiwiYnJlYWtwb2ludCIsInBsYWNlIiwiaW5kZXgiLCJpbmRleEluUGFyZW50IiwicHVzaCIsImFycmF5U29ydCIsIm1lZGlhUXVlcmllcyIsIkFycmF5IiwibWFwIiwiY2FsbCIsImZpbHRlciIsInNlbGYiLCJpbmRleE9mIiwibWVkaWEiLCJtZWRpYVNwbGl0IiwiU3RyaW5nIiwibWF0Y2hNZWRpYSIsIndpbmRvdyIsIm1lZGlhQnJlYWtwb2ludCIsItC+YmplY3RzRmlsdGVyIiwiYWRkTGlzdGVuZXIiLCJtZWRpYUhhbmRsZXIiLCJtYXRjaGVzIiwibW92ZVRvIiwiY29udGFpbnMiLCJtb3ZlQmFjayIsImFkZCIsImNoaWxkcmVuIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwicmVtb3ZlIiwidW5kZWZpbmVkIiwiYXJyYXkiLCJzbGljZSIsImFyciIsInNvcnQiLCJhIiwiYiIsImJvZHlMb2NrU3RhdHVzIiwiYm9keUxvY2tUb2dnbGUiLCJtZW51SW5pdCIsImhhbWJ1cmdlciIsImUiLCJkb2N1bWVudEVsZW1lbnQiLCJfc2xpZGVVcCIsIl9zbGlkZURvd24iLCJfc2xpZGVUb2dnbGUiLCJTZWxlY3QiLCJjb25zdHJ1Y3RvciIsImNsYXNzZXMiLCJzZWwiLCJib2R5IiwibGFiZWwiLCJ0aXRsZSIsInZhbCIsImNvbnRlbnQiLCJvcHRpb25zIiwib3B0aW9uIiwic2Nyb2xsIiwiZ3JvdXAiLCJpbnAiLCJhc3NldCIsInR4dCIsImhpbnQiLCJhY3RpdmUiLCJmb2N1c2VkIiwib3BlbmVkIiwiZmlsbGVkIiwic2VsZWN0ZWQiLCJkaXNhYmxlZCIsImxpc3QiLCJlcnJvciIsIm11bHRpcGxlIiwiY2hlY2tib3giLCJzZWxlY3RMaXN0Iiwic2VsZWN0IiwiaW5pdFNlbEl0ZW0iLCJzZXRBY3Rpb25zIiwiYmluZCIsInJlbGF0aXZlU2VsIiwiY3JlYXRlRWxlbWVudCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwiaGlkZGVuIiwic2VsSWQiLCJnZXRQbGFjZWhvbGRlciIsIm9wdFBsYWNlaG9sZGVyIiwidmFsdWUiLCJzaG93Iiwic2VsVGl0bGUiLCJnZXRTZWxlY3QiLCJ0d2luU2VsIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwidGV4dCIsInNwZWVkIiwiYnVpbGQiLCJpbml0U2VsZWN0aW9ucyIsInBhcmVudEVsZW1lbnQiLCJzZWxPYmoiLCJzZXRWYWx1ZSIsInNldE9wdGlvbnMiLCJzZWxBZGRvbkNsYXNzIiwiaGFzQXR0cmlidXRlIiwiZGlzYWJsZVNlbGVjdCIsInNldFNlYXJjaEFjdGlvbnMiLCJzZXRBY3Rpb24iLCJzZWxIaW50IiwiY2xvc2VzdCIsImFkZEVyciIsInJlbW92ZUVyciIsInNlbEJvZHkiLCJnZXRWYWx1ZSIsInJlbGF0aXZlU2VsT3B0aW9ucyIsImlubmVySFRNTCIsImdldE9wdGlvbnMiLCJ0YXJnZXQiLCJnZXRDbGFzcyIsInNlbGVjdElkIiwic2VsTGlzdCIsInNlbE9wdGlvbiIsIm9wdFZhbCIsInNldE9wdGlvbkFjdGlvbiIsImNvZGUiLCJjbG9zZUdyb3VwIiwic2VsT3B0aW9ucyIsInNlbGVjdE9uZUdyb3VwIiwic2VsR3JvdXAiLCJzZWxlY3Rpb25zIiwic2VsZWN0aW9uIiwiY2xvc2VJdGVtIiwicmVsYXRpdmVTZWxlY3Rpb25zIiwiZ2V0RGF0YSIsImVsZW1lbnRzIiwicmVsYXRpdmVTZWxlY3Rpb24iLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0d2luU2VsZWN0aW9ucyIsInR3aW5TZWxlY3Rpb24iLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwib3B0IiwidGV4dENvbnRlbnQiLCJzZXRTZWxlY3Rpb25zIiwic2VsSW5wdXQiLCJ0b1VwcGVyQ2FzZSIsInNldFN1YnRpdGxlIiwic2VsRXJyb3IiLCJyZW1vdmVDaGlsZCIsImNzc0NsYXNzIiwiYXR0ciIsImF0dHJDbGFzcyIsInRpdGxlVmFsIiwiaHRtbCIsInNlbExhYmVsIiwidmFsdWVzIiwiZ2V0Q29udGVudCIsImpvaW4iLCJjdXN0b21DbGFzcyIsIm9wdENsYXNzIiwic2VsU2Nyb2xsIiwic2VsU2Nyb2xsSGVpZ2h0IiwiaW5uZXJXaWR0aCIsImZyb20iLCJzZWxPcHRpb25zSFRNTCIsImdldE9wdGlvbiIsInNob3dTZWxlY3Rpb24iLCJvcHRpb25DbGFzcyIsIm9wdGlvbkxpbmsiLCJvcHRpb25MaW5rVGFyZ2V0Iiwib3B0aW9uSFRNTCIsIm9wdGlvbkRhdGEiLCJvcHRBc3NldCIsIm9wdGlvbkRhdGFIVE1MIiwib3B0aW9uQ29udGVudEhUTUwiLCJwbGFjZWhvbGRlciIsImZpbmQiLCJzdWJ0aXRsZSIsInNlbGVjdGVkSW5kZXgiLCJ0ZW1wQnV0dG9uIiwiYXBwZW5kIiwiY2xpY2siLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJzZXRIYXNoIiwiaGFzaCIsImxvY2F0aW9uIiwiaHJlZiIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJnZXRIYXNoIiwicmVwbGFjZSIsImRlbGF5IiwiYXJndW1lbnRzIiwiYm9keVVubG9jayIsImJvZHlMb2NrIiwic2V0VGltZW91dCIsImRhdGFNZWRpYVF1ZXJpZXMiLCJkYXRhU2V0VmFsdWUiLCJicmVha3BvaW50c0FycmF5IiwicGFyYW1zIiwicGFyYW1zQXJyYXkiLCJtZFF1ZXJpZXMiLCJ1bmlxdWVBcnJheSIsIm1kUXVlcmllc0FycmF5IiwibWVkaWFUeXBlIiwiaXRlbXNBcnJheSIsImR1cmF0aW9uIiwic2hvd21vcmUiLCJzdHlsZSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyYW5zaXRpb25EdXJhdGlvbiIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsIm92ZXJmbG93IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJyZW1vdmVQcm9wZXJ0eSIsInJlbVRvUHgiLCJyZW1WYWx1ZSIsImh0bWxGb250U2l6ZSIsInBhcnNlRmxvYXQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZm9udFNpemUiLCJweFZhbHVlIiwiTWF0aCIsInJvdW5kIiwicmVtb3ZlQ2xhc3NlcyIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=