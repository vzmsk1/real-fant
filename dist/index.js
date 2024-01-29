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
}`, "",{"version":3,"sources":["webpack://./src/scss/fonts.scss","webpack://./src/scss/style.scss","webpack://./src/scss/set.scss","webpack://./src/scss/sections/header.scss","webpack://./src/scss/mixins.scss","webpack://./src/scss/sections/footer.scss","webpack://./src/ui/styles/_typo.scss","webpack://./src/ui/styles/_button.scss","webpack://./src/ui/styles/_input.scss","webpack://./src/ui/styles/_select.scss","webpack://./src/ui/styles/_badge.scss","webpack://./src/scss/dev/vzmsk1.scss","webpack://./src/scss/sections/_intro.scss","webpack://./src/scss/sections/_promotion.scss","webpack://./src/scss/sections/_marketing.scss","webpack://./src/scss/sections/benefits.scss","webpack://./src/scss/sections/_portfolio.scss","webpack://./src/scss/dev/ukik0.scss","<no source>"],"names":[],"mappings":"AAAA;EACI,gCAAA;EACA,gBAAA;EACA,wEAAA;ACCJ;ADEA;EACI,gCAAA;EACA,gBAAA;EACA,0EAAA;ACAJ;ADGA;EACI,gCAAA;EACA,gBAAA;EACA,yEAAA;ACDJ;ADIA;EACI,gCAAA;EACA,gBAAA;EACA,2EAAA;ACFJ;ADKA;EACI,gCAAA;EACA,gBAAA;EACA,uEAAA;ACHJ;ADMA;EACI,wBAAA;EACA,gBAAA;EACA,0DAAA;ACJJ;ADOA;EACI,iCAAA;EACA,gBAAA;EACA,mEAAA;ACLJ;ADQA;EACI,8BAAA;EACA,gBAAA;EACA,kEAAA;ACNJ;ACvCA;;;EAGI,sBAAA;ADyCJ;;ACvCA;EACI,gCDIE;ECHF,sBAAA;EACA,kBAAA;EACA,mBAAA;EACA,qCAAA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;AD0CJ;;ACvCA;EACI,kBAAA;EACA,mBAAA;EACA,qCAAA;EACA,YAAA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;EACA,iBAAA;EACA,cDbI;ECcJ,yBDPM;AAiDV;;ACvCA;;EAEI,qCAAA;EACA,oBAAA;EACA,SAAA;EACA,UAAA;EACA,6BAAA;EACA,YAAA;EACA,cAAA;AD0CJ;;ACxCA;EACI,YAAA;AD2CJ;;ACzCA;;EAEI,qBAAA;AD4CJ;;ACzCA;;;;EAII,aAAA;EACA,eAAA;EACA,aAAA;AD4CJ;AC3CI;;;;EACI,aAAA;ADgDR;AC9CI;;;;EACI,aAAA;ADmDR;;AC/CA;;;;;;EAMI,aAAA;EACA,SAAA;EACA,UAAA;ADkDJ;;AChDA;EACI,aAAA;EACA,gBAAA;ADmDJ;;AChDA;EACI,WAAA;EACA,YAAA;EACA,cAAA;ADmDJ;;AChDA;EACI,YAAA;EACA,cAAA;EACA,aAAA;EACA,mBAAA;EACA,UAAA;EACA,6BAAA;ADmDJ;;ACjDA;EACI,UAAA;EACA,SAAA;ADoDJ;;ACjDA;EACI,SAAA;EACA,UAAA;EACA,gBAAA;ADoDJ;;ACjDA;EACI,aAAA;EACA,cAAA;ADoDJ;;ACjDA;;EAEI,wBAAA;EACA,SAAA;ADoDJ;;ACjDA;EACI,0BAAA;ADoDJ;;ACjDA;;EAEI,WAAA;EACA,YAAA;EACA,mBAAA;ADoDJ;AA7IA;;EAEI,gBAAA;EACA,kBAAA;AAqKJ;;AAnKA;;EAEI,kBAAA;AAsKJ;;AAlKA;EACI,kBAAA;EACA,cAAA;AAqKJ;;AAlKA;EACI,cAAA;EACA,aAAA;EACA,sBAAA;EACA,iBAAA;EACA,YAAA;AAqKJ;;AE3NA;EACI,mBAAA;EACA,kBAAA;EACA,YAAA;AF8NJ;AExNI;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,WAAA;AF+NR;AE9MI;EACI,aAAA;AF6NR;AEtNI;ECzBA,kBD0BmB;ECzBnB,WAAA;EACA,cDwB4B;EACxB,cAAA;AF+NR;AEvNQ;EACI,YAAA;AFkOZ;AEtMQ;EACI,aAAA;AF6NZ;AEtJQ;EACI,aAAA;EACA,mBAAA;EACA,WAAA;AFsNZ;AEtKY;EACI,aAAA;AF4MhB;AEpMY;EACI,aAAA;AF4MhB;AE7KY;EACI,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,2BAAA;AFyMhB;AEvMgB;EACI,gCF5OF;AAqblB;AE5LI;EACI,aAAA;EACA,mBAAA;EACA,WAAA;AFsMR;AE9LY;EACI,gCFrQE;AA2clB;AElMgB;EACI,iCF1QF;AA8clB;AE/LQ;EACI,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,2BAAA;AFiMZ;AE1LQ;EC5RJ,iBD6RuB;EC5RvB,WAAA;EACA,cD2R+B;AFmMnC;AE7LY;EACI,4BAAA;AFsMhB;AEjMI;EACI,kBAAA;EACA,UAAA;EACA,aAAA;EACA,cAAA;EACA,eAAA;AFmMR;AEjMQ;EC5TJ,WAAA;EACA,kBAAA;ED+TY,QAAA;EACA,WAAA;EACA,WAAA;EACA,yBFvTR;EEwTQ,6GACI;EAKJ,qBAAA;AF6LhB;AE1LQ;EACI,MAAA;AF4LZ;AE1LQ;EACI,SAAA;AF4LZ;AE1LQ;EACI,oBAAA;AF4LZ;AEzLY;EACI,QAAA;AF2LhB;AEzLY;EACI,oBAAA;EACA,yBAAA;AF2LhB;AEzLY;EACI,uBAAA;EACA,wBAAA;AF2LhB;AEzLY;EAGI,yBFzVR;AAkhBR;;AI/hBA;EACI,sBAAA;AJkiBJ;AI5hBI;EACI,aAAA;EACA,uBAAA;EACA,8BAAA;AJmiBR;AI1hBI;EACI,aAAA;EACA,sBAAA;EACA,WAAA;EACA,mBAAA;AJmiBR;AIlhBoB;EACI,gBAAA;AJmiBxB;AI3hBQ;EACI,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,2BAAA;AJ6hBZ;AIphBY;EACI,gCJnDE;AAilBlB;AIzhBI;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;AJ2hBR;AIjhBI;EDxEA,kBCyEmB;EDxEnB,WAAA;EACA,aCuE4B;EACxB,qBAAA;AJ6hBR;AIthBI;EACI,aAAA;EACA,sBAAA;EACA,WAAA;AJ+hBR;AIvhBQ;EACI,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,2BAAA;AJ8hBZ;AI5hBY;EACI,gCJpGE;AAkoBlB;;AKhpBA;EACI,wBLMO;EKLP,eAAA;ALmpBJ;;AK5oBA;EACI,wBLHO;EKIP,eAAA;ALopBJ;;AKxoBA;EACI,eAAA;ALspBJ;;AKhpBA;EACI,iBAAA;ALwpBJ;;AKlpBA;EACI,iCL9BU;AAwrBd;;AMhsBA;EACI,kCAAA;EACA,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,2CAAA;EACA,+BAAA;ANmsBJ;AMxrBI;EACI,mBAAA;ANksBR;AM7rBI;EACI,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAAA;EACA,aAAA;EACA,cAAA;EACA,aAAA;EACA,kBAAA;EACA,yBNnBA;AAktBR;AMrrBI;EACI,aAAA;EACA,mBAAA;AN8rBR;;AO1uBA;;;;EAII,wBAAA;EACA,qBAAA;EACA,gBAAA;APkvBJ;;AOhvBA;;EAEI,aAAA;APmvBJ;;AOhvBA;EACI,kBAAA;EACA,kCAAA;EACA,mBAAA;EACA,qCAAA;EACA,2BAAA;APmvBJ;AOlvBI;EACI,eAAA;APovBR;AOnvBQ;EACI,UAAA;EACA,YAAA;EACA,YAAA;APqvBZ;AOvuBI;EACI,cAAA;EACA,WAAA;EACA,2BAAA;EACA,cAAA;APmvBR;AOlvBQ;EACI,cP/BJ;AAmxBR;AO9uBI;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;APgvBR;AQvyBA;EACI,kBAAA;AR+yBJ;AQ3yBI;EACI,kBAAA;AR6yBR;AQxyBI;EACI,kBAAA;EACA,UAAA;EACA,WAAA;EACA,mBAAA;EACA,qCAAA;EACA,2BAAA;EACA,eAAA;AR0yBR;AQjyBI;EACI,oCAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,SAAA;EACA,cAAA;EACA,WAAA;ARyyBR;AQvyBQ;EACI,cAAA;ARyyBZ;AQtyBQ;EACI,WAAA;EACA,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,0CAAA;EACA,2CAAA;EACA,2BAAA;EACA,0DAAA;EACA,uBAAA;EACA,2BAAA;EACA,4BAAA;EACA,+BAAA;ARwyBZ;AQryBY;EACI,6BAAA;ARuyBhB;AQtyBgB;EACI,aAAA;ARwyBpB;AQpyBQ;;EAEI,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,uBAAA;ARsyBZ;AQjxBQ;EACI,aAAA;ARiyBZ;AQ3xBI;EACI,cAAA;AR6xBR;AQxxBI;EACI,WAAA;EACA,YAAA;EACA,6BAAA;AR0xBR;AQrxBI;EACI,kBAAA;EACA,UAAA;EACA,sBAAA;EACA,OAAA;EACA,oCAAA;EACA,eAAA;EACA,4BAAA;EACA,mBAAA;EACA,2BAAA;ARuxBR;AQ5wBI;EACI,gBAAA;EACA,kBAAA;EAGA,iBAAA;ARoxBR;AQhxBY;EACI,aAAA;EACA,aAAA;EACA,qBAAA;EACA,yBAAA;ARkxBhB;AQhxBY;EACI,kBAAA;EACA,qBAAA;EACA,yBAAA;ARkxBhB;AQ5wBI;EACI,WAAA;EACA,2BAAA;AR8wBR;AQ7wBQ;EACI,qBAAA;AR+wBZ;AQ1wBQ;EACI,cRrJJ;AAs6BR;AQnwBI;EACI,oBAAA;EACA,uBAAA;EACA,8BAAA;AR2wBR;AQ5vBI;EACI,kBAAA;EACA,wBAAA;EACA,iBAAA;EACA,qBAAA;AR8vBR;AQzvBI;EACI,YAAA;AR2vBR;AQvvBI;EACI,UAAA;ARyvBR;AQxvBQ;EACI,0BAAA;AR0vBZ;AQztBA;EACI,eAAA;AR2tBJ;;ASr9BA;EACI,4BAAA;EACA,oBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;EACA,oCAAA;EACA,2BAAA;ATw9BJ;ASv9BI;EACI,cTQM;ESPN,yBTGA;AAs9BR;ASx9BQ;EACI,yBTOL;AAm9BP;ASz9BY;EACI,4DAAA;AT29BhB;AS98BI;EACI,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,cAAA;EACA,kBAAA;EACA,0CAAA;EACA,2BAAA;ATw9BR;ASv9BQ;EACI,WAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,QAAA;EACA,SAAA;EACA,qDAAA;EACA,2BAAA;EACA,wBAAA;EACA,4BAAA;EACA,gCAAA;ATy9BZ;AUvgCA;EACQ,cViBA;AAogCR;;AUtgCoB;EACI,aAAA;AVohCxB;;AWriCA;EACI,kBAAA;EACA,iBAAA;EACA,sBAAA;EACA,kBAAA;AX6iCJ;AWtiCI;EACI,aAAA;EACA,YAAA;AX8iCR;AWpiCI;ERtBA,WAAA;EACA,kBAAA;EQuBQ,WAAA;EACA,kBAAA;EACA,yEAAA;EACA,WAAA;EACA,QAAA;EACA,eAAA;AX+iCZ;AW3iCI;EACI,gBAAA;EACA,uBAAA;AX6iCR;AWviCI;EACI,cAAA;EACA,iBAAA;EACA,qBAAA;AXyiCR;AWviCQ;EACI,iBAAA;AXyiCZ;AWphCI;EACI,kBAAA;EACA,QAAA;EACA,WAAA;AXmiCR;AWhiCY;EACI,WAAA;EACA,kBAAA;EAAmB,WAAA;EAAY,YAAA;EAAa,MAAA;EAAO,OAAA;EAAQ,oCAAA;AXuiC3E;AWniCQ;EACI,YAAA;EACA,iBAAA;AXqiCZ;AW3hCI;EACI,aAAA;EACA,mBAAA;EACA,WAAA;AXkiCR;AW5hCQ;EACI,aAAA;EACA,mBAAA;EACA,WAAA;EACA,kBAAA;AXmiCZ;AWjiCY;ER3GR,WAAA;EACA,kBAAA;EQ4GgB,WAAA;EACA,YAAA;EACA,aAAA;EACA,oCAAA;AXoiCpB;AWvhCY;EACI,gBAAA;EACA,aAAA;EACA,cAAA;EACA,kBAAA;EACA,mBXjHR;AAqpCR;AW5hCgB;EACI,cAAA;EACA,iCXrIN;EWsIM,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,kBAAA;AXqiCpB;AWzhCY;EACI,gBAAA;AXoiChB;AWxhCI;EACI,aAAA;EACA,oDAAA;EACA,WAAA;EACA,kBAAA;AXkiCR;AWzhCI;EACI,mBAAA;EACA,oCAAA;EACA,2BAAA;EACA,kBAAA;AXkiCR;AWhiCQ;EACI,cX9KJ;AAgtCR;AW3hCQ;EACI,kCAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,SAAA;AXkiCZ;AWxhCY;EACI,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,2BAAA;AXkiChB;AWrhCY;ER5NR,kBQ6N2B;ER5N3B,WAAA;EACA,eQ2NoC;EACxB,iBAAA;EACA,kBAAA;AXoiChB;AWzhCgB;EACI,sBAAA;EACA,YAAA;EACA,iBAAA;AXuiCpB;AWniCY;EACI,kBAAA;EACA,SAAA;EACA,aAAA;ERrNZ,eAAA;EACA,kBAAA;EACA,oCAAA;EACA,2BAAA;EAlCA,iBAmCe;EAlCf,WAAA;EACA,cAiCuB;AH6vC3B;AW1iCgB;EACI,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,2BAAA;AX4iCpB;AGlwCI;EACI,YAAA;AHowCR;;AYvzCA;EACI,oBAAA;AZu0CJ;AYr0CI;EACI,aAAA;EACA,sBAAA;EACA,0BAAA;EACA,kBAAA;AZu0CR;AYh0CQ;ETbJ,WAAA;EACA,kBAAA;EScY,YAAA;EACA,iCAAA;EACA,kDAAA;EACA,iCZXF;EYYE,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,cZJN;EYKM,SAAA;EACA,2BAAA;EACA,WAAA;EACA,WAAA;AZy0ChB;AY9zCI;EACI,aAAA;EACA,sBAAA;AZq0CR;AYvzCQ;EACI,eAAA;AZm0CZ;AY7zCY;EACI,cAAA;EACA,mBAAA;AZo0ChB;AYjzCI;EACI,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AZg0CR;;Aav5CA;EACI,oBAAA;Abk6CJ;Aa55CI;EACI,kBAAA;EACA,cAAA;EACA,WAAA;EACA,gBAAA;EACA,WAAA;Abm6CR;Aa35CI;EACI,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;Abm6CR;Aa55CI;EACI,qBAAA;Abm6CR;Aa35CI;EACI,gBAAA;EACA,WAAA;EACA,kBAAA;Abm6CR;Aa55CQ;EACI,aAAA;EACA,uBAAA;EACA,WAAA;EACA,8BAAA;EACA,mBAAA;Abo6CZ;Aa75CQ;EACI,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,WAAA;Abo6CZ;Aa75CQ;EACI,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EVzDR,kBAAA;AH89CJ;AG59CI;EAtBA,WAAA;EACA,kBAAA;EAuBQ,aAAA;EACA,cAAA;EACA,WAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;AHu+CZ;Aa36CQ;EACI,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;Abo7CZ;;AcnhDA;EACI,sBAAA;Ad+hDJ;AczhDI;EACI,aAAA;EACA,sDAAA;EACA,WAAA;AdgiDR;AcxhDI;EACI,mBAAA;EACA,oCAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;AdgiDR;Ac1hDQ;EACI,aAAA;EACA,uBAAA;EACA,WAAA;EACA,mBAAA;EACA,8BAAA;AdiiDZ;Ac3hDY;EACI,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,cAAA;EACA,kBAAA;EACA,WAAA;AdkiDhB;Ac3hDY;EACI,cdvCH;EcwCG,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AdkiDhB;Ac1hDQ;EACI,mBAAA;EACA,6CAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;AdiiDZ;Ac1hDY;EACI,YAAA;EACA,WAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EX1EZ,gBW2E2B;EX1E3B,WAAA;EACA,aWyEkC;AdoiDtC;Ac9hDgB;EACI,WAAA;EACA,YAAA;AduiDpB;AcliDQ;EACI,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;AdoiDZ;;Ae9oDA;EACI,sBAAA;Af0pDJ;AeppDI;EACI,qBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,SAAA;Af2pDR;AelpDI;EACI,aAAA;EACA,sDAAA;EACA,kBAAA;EACA,qBAAA;Af2pDR;AehpDQ;EACI,aAAA;EACA,sBAAA;EACA,WAAA;EACA,mBAAA;EACA,oCAAA;EACA,eAAA;Af0pDZ;AelpDgB;EACI,cfjCZ;AA2rDR;AevpDgB;EACI,qBAAA;AfypDpB;AeppDQ;EZ/CJ,eYgDuB;EZ/CvB,WAAA;EACA,eY8C6B;EACrB,mBAAA;EACA,6CAAA;EACA,gBAAA;AfwpDZ;AelpDY;EACI,YAAA;EACA,sBAAA;EACA,+BAAA;Af2pDhB;AevpDQ;EACI,aAAA;EACA,qBAAA;EACA,8BAAA;AfypDZ;AetpDQ;EACI,aAAA;EACA,sBAAA;EACA,SAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,2BAAA;AfwpDZ;Ae9oDY;EACI,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,cf7FR;AAsvDR;Ae9oDQ;EZzEJ,eAAA;EACA,kBAAA;EACA,oCAAA;EACA,2BAAA;EAlCA,iBAmCe;EAlCf,WAAA;EACA,cAiCuB;AHouD3B;AGluDI;EACI,YAAA;AHouDR;AexpDI;EACI,cAAA;EACA,kBAAA;AfyqDR;;AgBpyDA;EACI,SAAA;AhBuyDJ;;AgBpyDA;EACI,WAAA;EACA,eAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,oCAAA;EACA,2BAAA;EACA,UAAA;EACA,oBAAA;EACA,gCAAA;AhBuyDJ;AgBryDI;EACI,UAAA;AhBuyDR;AiBh0DA;ED8BI;IACI,aAAA;EhBsyDN;AA1wBF;AiB3jCA;Eb6BQ;IAEQ,qBAAA;EJoiBd;EKljBF;IAEQ,iBAAA;ELspBN;AA0ZF;AiBnkCA;EhB8HI;IACI,eAAA;EDoDN;AAq5BF;AiBxkCA;EhBoII;IACI,cAAA;IACA,mBAAA;IACA,yBAAA;IACA,8BAAA;EDmDN;EChDE;IACI,8BAAA;IACA,iBAAA;EDkDN;EC/CE;IACI,iBAAA;IACA,WAAA;EDiDN;EEnMF;IAMQ,mBAAA;EF+NN;EE5NE;IAOQ,wBAAA;IACA,UAAA;IACA,yBAAA;EFgOV;EE9NU;IAKI,YAAA;EF4Nd;EEhOc;IACI,UAAA;EFkOlB;EE1NE;IAIQ,cAAA;EF8NV;EE1NE;ICzBA,gBD8BuB;IC7BvB,WAAA;IACA,cD4B8B;IACtB,kBAAA;IACA,UAAA;EFkOV;EE1NE;IAEQ,eAAA;IACA,MAAA;IACA,OAAA;IACA,8BAAA;IACA,WAAA;IACA,YAAA;IACA,aAAA;IACA,sBAAA;IACA,UAAA;IACA,4BAAA;IACA,kDACI;IAEJ,mBFhDF;IEiDE,qCAAA;EF8NV;EE5NU;IACI,UAAA;IACA,wBAAA;EF8Nd;EE1NM;IAIQ,aAAA;IACA,sBAAA;IACA,mBAAA;IACA,gBAAA;IACA,kBAAA;EF8Nd;EE5Nc;IACI,qBAAA;IACA,gCAAA;IACA,iBAAA;IACA,kBAAA;IACA,gBAAA;IACA,iBAAA;EF8NlB;EE3Nc;IACI,gBAAA;IACA,8CAAA;IACA,qCAAA;IACA,aAAA;IACA,mBAAA;IACA,SAAA;IACA,4BAAA;IACA,4BAAA;EF6NlB;EE3NkB;IACI,sCAAA;EF6NtB;EE3NsB;IACI,gCFhGV;EA6ThB;EE1NsB;IACI,qCFpGV;EAgUhB;EExNkB;IACI,iBAAA;IACA,kBAAA;IACA,gBAAA;IACA,mBAAA;IACA,2BAAA;EF0NtB;EEvNkB;IACI,eAAA;IACA,kBAAA;IACA,mBFpHhB;IGAJ,iBDqHmC;ICpHnC,WAAA;IACA,cDmH2C;EF2N7C;EEzNsB;IACI,WAAA;IACA,YAAA;EF2N1B;EEnNE;IAEQ,kBAAA;IACA,gBAAA;IACA,YAAA;EFsNV;EEnNM;IAMQ,sBAAA;IACA,uBAAA;IACA,WAAA;EFuNd;EEnNM;IAEQ,WAAA;EFsNd;EEnNkB;IACI,cFrJhB;EA0WN;EEhNU;IAEQ,UAAA;IACA,aAAA;IACA,mBAAA;IACA,8BAAA;IACA,kBAAA;EFmNlB;EEhNsB;IACI,0BAAA;EFkN1B;EE/MsB;IACI,uBAAA;EFiN1B;EE/M0B;IACI,gBAAA;EFiN9B;EE5MkB;IACI,oBAAA;EF8MtB;EEzMU;IAIQ,cAAA;IACA,+BAAA;EF6MlB;EEzMU;IAIQ,aAAA;IACA,uBAAA;IACA,wCAAA;EF6MlB;EE1Mc;IAEQ,gBAAA;IACA,4BAAA;IACA,aAAA;IACA,oBAAA;EF6MtB;EEzMc;IAEQ,iBAAA;IACA,kBAAA;IACA,gBAAA;IACA,iBAAA;EF4MtB;EE1MsB;IACI,gBAAA;EF4M1B;EEtMU;IAaQ,iBAAA;IACA,kBAAA;IACA,gBAAA;IACA,iBAAA;EFyMlB;EEnME;IAMQ,kBAAA;IACA,UAAA;EFuMV;EExLM;IAQQ,aAAA;EFkMd;EE9LM;IC5RJ,iBDgS2B;IC/R3B,WAAA;IACA,cD8RmC;EFsMrC;EInfF;IAIQ,qBAAA;EJmiBN;EIhiBE;IAMQ,aAAA;IACA,qCAAA;IACA,MAAA;EJoiBV;EIhiBE;IAOQ,SAAA;EJoiBV;EIjiBM;IAMQ,kBAAA;EJqiBd;EIvhBM;IASQ,iBAAA;IACA,kBAAA;IACA,gBAAA;IACA,iBAAA;EJ8hBd;EIrhBE;IAQQ,mBAAA;IACA,SAAA;IACA,2BAAA;IACA,uBAAA;EJ4hBV;EIxhBE;IDxEA,gBC6EuB;ID5EvB,WAAA;IACA,cC2E8B;EJgiBhC;EI5hBE;IAMQ,aAAA;EJgiBV;EKpoBF;IAKQ,eAAA;ELopBN;EKhpBF;IAIQ,eAAA;ELspBN;EK5oBF;IAGQ,eAAA;ELwpBN;EKppBF;IAGQ,eAAA;EL0pBN;EM3rBF;IASQ,4BAAA;IACA,kBAAA;IACA,8CAAA;IACA,+BAAA;ENosBN;EMzrBE;IAWQ,cAAA;IACA,WAAA;IACA,YAAA;ENisBV;EM3rBE;IAIQ,aAAA;ENgsBV;EOjuBF;IAeQ,gCAAA;IACA,mBAAA;IACA,2BAAA;EPqvBN;EOpvBM;IACI,eAAA;EPsvBV;EOpuBE;IAOQ,WAAA;IACA,YAAA;EPkvBV;EQjyBE;IASQ,mBAAA;IACA,2BAAA;ER4yBV;EQtyBE;IAgDQ,eAAA;IACA,SAAA;IACA,aAAA;ERsyBV;EQryBU;IACI,cAAA;IACA,WAAA;IACA,YAAA;IACA,uBAAA;IACA,6BAAA;ERuyBd;EQzwBE;IAWQ,sBAAA;IACA,4BAAA;IACA,4BAAA;IACA,2BAAA;ERyxBV;EQxvBM;IAGQ,mBAAA;ERixBd;ESp7BF;IAmBQ,4BAAA;IACA,gBAAA;IACA,mBAAA;IACA,2BAAA;ET09BN;ESr9BE;IAsBQ,cAAA;IACA,WAAA;IACA,YAAA;IACA,2BAAA;ET09BV;ESz9BU;IACI,YAAA;IACA,aAAA;ET29Bd;EUhhCE;IAES,cAAA;EVshCX;EUhhCkB;IAEI,aAAA;EVohCtB;EUhhCkB;IAGQ,cAAA;EVshC1B;EWziCF;IAOQ,sBAAA;IACA,kBAAA;EX8iCN;EWtjCF;IAiBQ,kBAAA;EX8iCN;EW7iCM;IACI,0EAAA;EX+iCV;EWxhCE;IAsBQ,gBAAA;IACA,qBAAA;EX6hCV;EWziCU;IACQ,gBAAA;IACA,iCAAA;EX2iClB;EWxiCc;IACA,cXzCR;EAmlCN;EW/gCc;IACI,wBAAA;EXqiClB;EW/hCE;IAMQ,SAAA;EXmiCV;EW1hCU;IAQY,WAAA;IACA,aAAA;EXqiCtB;EWpjCM;IAqBQ,WAAA;EXoiCd;EWjiCU;IAQQ,gBAAA;IACA,aAAA;IACA,cAAA;EXqiClB;EWliCc;IAWQ,kBAAA;IACA,kBAAA;IACA,gBAAA;IACA,sBAAA;IACA,kBAAA;EXsiCtB;EWjiCU;IAIQ,iBAAA;IACA,kBAAA;IACA,gBAAA;IACA,mBAAA;EXqiClB;EW/hCE;IAOQ,sDAAA;IACA,WAAA;IACA,iBAAA;EXmiCV;EW/hCE;IAWQ,mBAAA;EXkiCV;EW/hCM;IAQQ,sBAAA;IACA,WAAA;IACA,YAAA;IACA,0BAAA;EXmiCd;EW/hCU;IASQ,iBAAA;IACA,kBAAA;IACA,gBAAA;IACA,mBAAA;IACA,kBAAA;IACA,eAAA;IACA,cAAA;EXmiClB;EW/hCU;IAMQ,kBAAA;IRlOhB,kBQmO+B;IRlO/B,WAAA;IACA,eQiOwC;IACxB,iBAAA;IACA,MAAA;IACA,SAAA;IACA,gCAAA;EXuiClB;EW7hCU;IRjPR,eA0CmB;IAzCnB,WAAA;IACA,YAwCyB;EHswC3B;EW/jCU;IAgBQ,gBAAA;IACA,eAAA;EXojClB;EYh0CE;IAOQ,UAAA;IACA,SAAA;EZw0CV;EYlzCE;IAEQ,sBAAA;EZs0CV;EYl0CE;IAKQ,8BAAA;IACA,SAAA;EZs0CV;EYn0Cc;IACI,iBAAA;IACA,0BAAA;EZq0ClB;EYh0CM;IAIQ,iBAAA;EZo0Cd;EYj0CU;IAKQ,kBAAA;EZq0ClB;EY/zCU;IACI,eAAA;EZm0Cd;EYj0Cc;IACI,kBAAA;EZm0ClB;EY7zCE;IAOQ,iBAAA;IACA,kBAAA;IACA,gBAAA;IACA,mBAAA;EZi0CV;Ea95CF;IAIQ,oBAAA;Ebm6CN;Eah6CE;IAQQ,gBAAA;IACA,gBAAA;Ebo6CV;Eah6CE;IAQQ,sBAAA;Ebo6CV;Eah6CE;IAIQ,qBAAA;IACA,kBAAA;Ebo6CV;Eah6CE;IAMQ,eAAA;IACA,cAAA;Ebo6CV;Eaj6CM;IAQQ,SAAA;Ebq6Cd;Eaj6CM;IAOQ,SAAA;Ebq6Cd;Eaj6CM;IAOQ,iBAAA;IACA,kBAAA;IACA,gBAAA;IACA,iBAAA;Ebs6Cd;EGn+CE;IAUY,WAAA;IACA,WAAA;IACA,YAAA;EHw+Cd;Eaj7CM;IAQQ,kBAAA;IACA,iBAAA;IACA,kBAAA;IACA,gBAAA;IACA,mBAAA;Ebq7Cd;Ec3hDF;IAIQ,oBAAA;EdgiDN;Ec7hDE;IAMQ,sDAAA;IACA,kBAAA;EdiiDV;Ec7hDE;IAQQ,yBAAA;EdiiDV;Ec9hDM;IAQQ,qBAAA;EdkiDd;Ec/hDU;IAUQ,eAAA;EdmiDlB;Ec/hDU;IAQQ,aAAA;EdmiDlB;Ec9hDM;IAUQ,mBAAA;IACA,aAAA;EdkiDd;Ec/hDU;IXpER,gBW8E+B;IX7E/B,WAAA;IACA,aW4EsC;EduiDxC;Ec7hDM;IAQQ,eAAA;IACA,kBAAA;IACA,gBAAA;IACA,mBAAA;IACA,gBAAA;EdqiDd;EetpDF;IAIQ,oBAAA;Ef2pDN;EexpDE;IAQQ,sBAAA;IACA,SAAA;IACA,mBAAA;Ef4pDV;EexpDE;IAOQ,aAAA;IACA,sBAAA;IACA,WAAA;IACA,qBAAA;Ef4pDV;EevpDM;IASQ,WAAA;IACA,aAAA;Ef2pDd;Ee7oDM;IZ/CJ,eYsD2B;IZrD3B,WAAA;IACA,aYoDiC;Ef2pDnC;Ee3oDM;IAWQ,iBAAA;IACA,kBAAA;IACA,gBAAA;IACA,mBAAA;IACA,SAAA;EfypDd;EetpDU;IAQQ,eAAA;IACA,kBAAA;IACA,gBAAA;IACA,mBAAA;Ef0pDlB;EerpDM;IZxGJ,eA0CmB;IAzCnB,WAAA;IACA,YAwCyB;EHsuD3B;EexqDM;IAIQ,eAAA;IZ5GZ,iBY6G2B;IZ5G3B,WAAA;IACA,cY2GmC;Ef2qDrC;EgBjwDE;IACI,aAAA;EhBqyDN;AA7MF;AiB7nDA;ET2KgB;IACI,eAAA;IACA,cR3JZ;EA26BN;AAssBF","sourcesContent":["@font-face {\n    font-family: 'Euclid Circular A';\n    font-weight: 300;\n    src: url('./assets/fonts/Euclid-Circular-A-Light.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'Euclid Circular A';\n    font-weight: 400;\n    src: url('./assets/fonts/Euclid-Circular-A-Regular.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'Euclid Circular A';\n    font-weight: 500;\n    src: url('./assets/fonts/Euclid-Circular-A-Medium.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'Euclid Circular A';\n    font-weight: 600;\n    src: url('./assets/fonts/Euclid-Circular-A-SemiBold.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'Euclid Circular A';\n    font-weight: 700;\n    src: url('./assets/fonts/Euclid-Circular-A-Bold.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'Space Age';\n    font-weight: 400;\n    src: url('./assets/fonts/Space-Age.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'Space Age Cyrillic';\n    font-weight: 400;\n    src: url('./assets/fonts/Space-Age-Cyrillic.woff2') format('woff2');\n}\n\n@font-face {\n    font-family: 'EuropeExtendedC';\n    font-weight: 700;\n    src: url('./assets/fonts/Europe-Extended-C.woff2') format('woff2');\n}\n","// --------------------------------- mixins ---------------------------------\n\n@import './mixins';\n\n// -------------------------------- variables -------------------------------\n\n// fonts\n$spaceAge: 'Space Age';\n$spaceAgeCyr: 'Space Age Cyrillic';\n$EuropeE: 'EuropeExtendedC';\n$ECA: 'Euclid Circular A';\n\n// colors\n$white: #ffffff;\n$white-secondary: rgba(255, 255, 255, 0.69);\n$black: #000000;\n$darkPurple: #11073b;\n$darkPurple2: #140a3f;\n$green: #29ff7f;\n$blue: #182678;\n$bgColor: #101653;\n\n// ---------------------------------- fonts ---------------------------------\n\n// local fonts\n@import './fonts';\n\n// ------------------------------- base styles ------------------------------\n\n// base scss file\n@import './set';\n\n// html\nhtml.lock,\nhtml.lock body {\n    overflow: hidden;\n    touch-action: none;\n}\nhtml,\nbody {\n    overflow-x: hidden;\n}\n\n// main\nmain {\n    position: relative;\n    flex: 1 1 auto;\n}\n\n.wrapper {\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    max-width: 1920px;\n    height: 100%;\n}\n\n// --------------------------------------------------------------------------\n\n// header / footer\n@import './sections/header';\n@import './sections/footer';\n\n// ui\n@import '../ui/styles/ui.scss';\n\n// --------------------------------------------------------------------------\n\n@import './dev/vzmsk1.scss';\n@import './dev/markusDM.scss';\n@import './dev/ukik0.scss';\n@import './dev/kie6er.scss';\n","*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\nhtml {\n    font-family: $ECA; // шрифт по умолчанию по сайту\n    font-size: 0.5208335vw; // на разрешении 1920 0.520835vw === 10px\n    font-style: normal;\n    font-weight: normal;\n    -webkit-animation: bugfix infinite 1s;\n    line-height: 1.2;\n    margin: 0;\n    padding: 0;\n    height: 100%;\n}\n\nbody {\n    font-style: normal;\n    font-weight: normal;\n    -webkit-animation: bugfix infinite 1s;\n    height: 100%;\n    line-height: 1.2;\n    margin: 0;\n    padding: 0;\n    font-size: 1.8rem;\n    color: $white; // цвет по умолчанию текста по сайту\n    background-color: $bgColor;\n}\n\ninput,\ntextarea {\n    -webkit-animation: bugfix infinite 1s;\n    line-height: inherit;\n    margin: 0;\n    padding: 0;\n    background-color: transparent;\n    border: none;\n    color: inherit;\n}\na {\n    color: unset;\n}\na,\na:hover {\n    text-decoration: none;\n}\n\nbutton,\ninput,\na,\ntextarea {\n    outline: none;\n    cursor: pointer;\n    font: inherit;\n    &:focus {\n        outline: none;\n    }\n    &:active {\n        outline: none;\n    }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font: inherit;\n    margin: 0;\n    padding: 0;\n}\np {\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\nimg {\n    width: 100%;\n    height: auto;\n    display: block;\n}\n\nbutton {\n    border: none;\n    color: inherit;\n    font: inherit;\n    text-align: inherit;\n    padding: 0;\n    background-color: transparent;\n}\nul {\n    padding: 0;\n    margin: 0;\n}\n\nul li {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.container {\n    width: 160rem;\n    margin: 0 auto;\n}\n\ninput[type='number']::-webkit-inner-spin-button,\ninput[type='number']::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\ninput[type='number'] {\n    -moz-appearance: textfield;\n}\n\nsvg,\nimg {\n    width: 100%;\n    height: auto;\n    object-fit: contain;\n}\n\n@media (min-width: 1920px) {\n    html {\n        font-size: 10px;\n    }\n}\n\n@media (max-width: 48em) {\n    html {\n        font-size: 5px;\n        font-size: 1.5625vw;\n        font-size: calc((100 / 375) * 5vw); // где 375 это ширина моб версии макета\n        -webkit-text-size-adjust: none;\n    }\n\n    body {\n        -webkit-text-size-adjust: none;\n        font-size: 2.8rem;\n    }\n\n    .container {\n        padding: 0 3.2rem; // в моб версии отступ от края задаем для всех контейнеров, а там где не нужно можем точечно убрать\n        width: 100%;\n    }\n}\n",".header {\n    padding-top: 2.3rem;\n    position: relative;\n    z-index: 100;\n\n    @include small-tablet {\n        padding-top: 3.6rem;\n    }\n\n    &__content {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        width: 100%;\n\n        @include small-tablet {\n            justify-content: initial;\n            gap: 16rem;\n            transition: 0.3s gap ease;\n\n            ._menu-opened & {\n                &::after {\n                    opacity: 1;\n                }\n\n                gap: 11.6rem;\n            }\n        }\n    }\n\n    &__burger {\n        display: none;\n\n        @include small-tablet {\n            display: block;\n        }\n    }\n\n    &__logo {\n        @include sizes(17.8rem, 5.7rem);\n        display: block;\n\n        @include small-tablet {\n            @include sizes(27rem, 8.6rem);\n            position: relative;\n            z-index: 2;\n        }\n\n        img {\n            height: 100%;\n        }\n    }\n\n    &__menu {\n        @include small-tablet {\n            position: fixed;\n            top: 0;\n            left: 0;\n            max-width: calc(100% - 7.4rem);\n            width: 100%;\n            height: 100%;\n            display: flex;\n            flex-direction: column;\n            opacity: 0;\n            transform: translateX(-100%);\n            transition:\n                transform 0.3s ease,\n                opacity 0.3s ease;\n            background: $bgColor;\n            padding: 21.4rem 5.2rem 8.8rem 7.8rem;\n\n            ._menu-opened & {\n                opacity: 1;\n                transform: translateX(0);\n            }\n        }\n\n        &-contacts {\n            display: none;\n\n            @include small-tablet {\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                margin-top: auto;\n                margin-right: 4rem;\n\n                &-item {\n                    margin-bottom: 2.4rem;\n                    color: rgba(255, 255, 255, 0.67);\n                    font-size: 3.2rem;\n                    font-style: normal;\n                    font-weight: 400;\n                    line-height: 3rem;\n                }\n\n                &-button {\n                    margin-top: 2rem;\n                    border: 0.4rem solid rgba(255, 255, 255, 0.78);\n                    border-radius: 0rem 24rem 24rem 24rem;\n                    display: flex;\n                    align-items: center;\n                    gap: 2rem;\n                    padding: 1rem 1rem 1rem 4rem;\n                    transition: 0.3s border ease;\n\n                    &:active {\n                        border-color: rgba(255, 255, 255, 0.5);\n\n                        span {\n                            color: $white-secondary;\n                        }\n\n                        .header__menu-contacts-button-icon {\n                            background: $white-secondary;\n                        }\n                    }\n\n                    span {\n                        font-size: 2.8rem;\n                        font-style: normal;\n                        font-weight: 400;\n                        line-height: normal;\n                        transition: 0.3s color ease;\n                    }\n\n                    &-icon {\n                        padding: 1.4rem;\n                        border-radius: 50%;\n                        background: $white;\n                        @include sizes(6.8rem, 6.8rem);\n\n                        img {\n                            width: 100%;\n                            height: 100%;\n                        }\n                    }\n                }\n            }\n        }\n    }\n\n    &__nav {\n        @include small-tablet {\n            max-height: 101rem;\n            overflow-x: auto;\n            height: 100%;\n        }\n\n        &-list {\n            display: flex;\n            align-items: center;\n            gap: 6.3rem;\n\n            @include small-tablet {\n                flex-direction: column;\n                align-items: flex-start;\n                gap: 7.2rem;\n            }\n        }\n\n        &-item {\n            @include small-tablet {\n                width: 100%;\n\n                &.--active {\n                    a {\n                        color: $green;\n                    }\n                }\n            }\n\n            &-heading {\n                @include small-tablet {\n                    width: 98%;\n                    display: flex;\n                    align-items: center;\n                    justify-content: space-between;\n                    position: relative;\n\n                    &.--active {\n                        .header__nav-item-icon {\n                            transform: rotate(-180deg);\n                        }\n\n                        ~ .header__nav-item-dropdown {\n                            grid-template-rows: 1fr;\n\n                            .header__nav-item-dropdown-wrapper {\n                                margin-top: 4rem;\n                            }\n                        }\n                    }\n\n                    a {\n                        pointer-events: none;\n                    }\n                }\n            }\n\n            &-icon {\n                display: none;\n\n                @include small-tablet {\n                    display: block;\n                    transition: 0.3s transform ease;\n                }\n            }\n\n            &-dropdown {\n                display: none;\n\n                @include small-tablet {\n                    display: grid;\n                    grid-template-rows: 0fr;\n                    transition: 0.3s grid-template-rows ease;\n                }\n\n                &-wrapper {\n                    @include small-tablet {\n                        overflow: hidden;\n                        transition: 0.3s margin ease;\n                        margin-top: 0;\n                        padding-left: 4.8rem;\n                    }\n                }\n\n                &-item {\n                    @include small-tablet {\n                        font-size: 3.2rem;\n                        font-style: normal;\n                        font-weight: 400;\n                        line-height: 3rem;\n\n                        &:not(:first-child) {\n                            margin-top: 5rem;\n                        }\n                    }\n                }\n            }\n\n            &-link {\n                display: block;\n                font-size: 1.8rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: 3rem;\n                transition: 0.3s color ease;\n\n                &:hover {\n                    color: $white-secondary;\n                }\n\n                @include small-tablet {\n                    font-size: 3.2rem;\n                    font-style: normal;\n                    font-weight: 500;\n                    line-height: 3rem;\n                }\n            }\n        }\n    }\n\n    &__contacts {\n        display: flex;\n        align-items: center;\n        gap: 1.7rem;\n\n        @include small-tablet {\n            position: relative;\n            z-index: 2;\n        }\n\n        &:hover {\n            .header__contacts-title {\n                color: $white-secondary;\n            }\n\n            svg {\n                path {\n                    stroke: $white-secondary;\n                }\n            }\n        }\n\n        &-title {\n            font-size: 1.8rem;\n            font-style: normal;\n            font-weight: 700;\n            line-height: 3rem;\n            transition: 0.3s color ease;\n\n            @include small-tablet {\n                display: none;\n            }\n        }\n\n        svg {\n            @include sizes(2.4rem, 2.4rem);\n\n            @include small-tablet {\n                @include sizes(4.8rem, 4.8rem);\n            }\n\n            path {\n                transition: 0.3s stroke ease;\n            }\n        }\n    }\n\n    .hamburger {\n        position: relative;\n        z-index: 2;\n        width: 4.6rem;\n        height: 3.6rem;\n        cursor: pointer;\n\n        span,\n        &::before,\n        &::after {\n            @include pseudo {\n                right: 0;\n                width: 100%;\n                height: 2px;\n                background-color: $white;\n                transition:\n                    top 0.3s ease,\n                    width 0.3s ease,\n                    transform 0.3s ease,\n                    bottom 0.3s ease,\n                    background-color 0.3s ease;\n                border-radius: 0.2rem;\n            }\n        }\n        &::before {\n            top: 0;\n        }\n        &::after {\n            bottom: 0;\n        }\n        span {\n            top: calc(50% - 1px);\n        }\n        ._menu-opened & {\n            span {\n                width: 0;\n            }\n            &::before {\n                top: calc(50% - 1px);\n                transform: rotate(-45deg);\n            }\n            &::after {\n                bottom: calc(50% - 1px);\n                transform: rotate(45deg);\n            }\n            span,\n            &::before,\n            &::after {\n                background-color: $white;\n            }\n        }\n    }\n}\n","@mixin pseudo() {\n    content: '';\n    position: absolute;\n    @content;\n}\n\n@mixin small-tablet {\n    @media (max-width: 48em) {\n        @content;\n    }\n}\n\n@mixin sizes($width, $height) {\n    max-width: $width;\n    width: 100%;\n    height: $height;\n\n    @content;\n}\n\n@mixin item-dot() {\n    position: relative;\n\n    &::after {\n        @include pseudo {\n            width: 0.5rem;\n            height: 0.5rem;\n            top: 1.5rem;\n            left: -2rem;\n            border-radius: 50%;\n            background: #ffffff;\n\n            @include small-tablet {\n                top: 0.5rem;\n                width: 1rem;\n                height: 1rem;\n            }\n\n            @content;\n        }\n    }\n}\n\n@mixin rotated-arrow() {\n    padding: 0.6rem;\n    border-radius: 50%;\n    background: rgba(255, 255, 255, 0.2);\n    backdrop-filter: blur(2rem);\n    @include sizes(4.6rem, 4.6rem);\n\n    img {\n        height: 100%;\n    }\n\n    @include small-tablet {\n        @include sizes(6rem, 6rem);\n    }\n\n    @content;\n}\n",".footer {\n    padding-bottom: 7.8rem;\n\n    @include small-tablet {\n        padding-bottom: 11rem;\n    }\n\n    &__content {\n        display: flex;\n        align-items: flex-start;\n        justify-content: space-between;\n\n        @include small-tablet {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            gap: 0;\n        }\n    }\n\n    &__list {\n        display: flex;\n        flex-direction: column;\n        gap: 0.8rem;\n        padding-top: 0.5rem;\n\n        @include small-tablet {\n            gap: 3rem;\n        }\n\n        &:last-child {\n            @media (min-width: 48em) {\n                align-items: flex-end;\n            }\n\n            @include small-tablet {\n                margin-right: 5rem;\n            }\n\n            .footer__item {\n                &:last-child {\n                    a {\n                        font-weight: 700;\n                    }\n                }\n            }\n        }\n    }\n\n    &__item {\n        a {\n            display: block;\n            font-size: 1.8rem;\n            font-style: normal;\n            font-weight: 400;\n            line-height: 3rem;\n            transition: 0.3s color ease;\n\n            @include small-tablet {\n                font-size: 2.8rem;\n                font-style: normal;\n                font-weight: 300;\n                line-height: 3rem;\n            }\n\n            &:hover {\n                color: $white-secondary;\n            }\n        }\n    }\n\n    &__middle {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n\n        @include small-tablet {\n            grid-column: span 2;\n            order: -1;\n            justify-content: flex-start;\n            align-items: flex-start;\n        }\n    }\n\n    &__logo {\n        @include sizes(10.9rem, 13rem);\n        margin-bottom: 6.1rem;\n\n        @include small-tablet {\n            @include sizes(27rem, 8.6rem);\n        }\n    }\n\n    &__contacts {\n        display: flex;\n        flex-direction: column;\n        gap: 2.2rem;\n\n        @include small-tablet {\n            display: none;\n        }\n    }\n\n    &__contact {\n        a {\n            display: block;\n            font-size: 1.8rem;\n            font-style: normal;\n            font-weight: 500;\n            line-height: normal;\n            transition: 0.3s color ease;\n\n            &:hover {\n                color: $white-secondary;\n            }\n        }\n    }\n}\n",".title {\n    font-family: $spaceAge;\n    font-size: 9rem;\n\n    @media (max-width: 48em) {\n        font-size: 6rem;\n    }\n}\n\n.subtitle {\n    font-family: $spaceAge;\n    font-size: 3rem;\n    @media (max-width: 48em) {\n        font-size: 4rem;\n    }\n}\n\n.txt25 {\n    @media (min-width: 48em) {\n        font-size: 2.5rem;\n    }\n}\n\n.txt30 {\n    font-size: 3rem;\n    @media (max-width: 48em) {\n        font-size: 4rem;\n    }\n}\n\n.txt16 {\n    font-size: 1.6rem;\n    @media (max-width: 48em) {\n        font-size: 2rem;\n    }\n}\n\n.cyr {\n    font-family: $spaceAgeCyr;\n}\n",".btn {\n    padding: 0.6rem 0.6rem 0.6rem 2rem;\n    display: flex;\n    align-items: center;\n    column-gap: 2rem;\n    border: 2px solid rgba(255, 255, 255, 0.78);\n    border-radius: 0 4rem 4rem 4rem;\n\n    @media (max-width: 48em) {\n        padding: 1rem 1rem 1rem 4rem;\n        column-gap: 3.2rem;\n        border: 0.4rem solid rgba(255, 255, 255, 0.78);\n        border-radius: 0 8rem 8rem 8rem;\n    }\n\n    // .btn__text\n\n    &__text {\n        white-space: nowrap;\n    }\n\n    // .btn__arrow-wrap\n\n    &__arrow-wrap {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        flex: 0 0 4rem;\n        width: 4.4rem;\n        height: 4.4rem;\n        padding: 1rem;\n        border-radius: 50%;\n        background-color: $white;\n        @media (max-width: 48em) {\n            flex: 0 0 7rem;\n            width: 7rem;\n            height: 7rem;\n        }\n    }\n\n    // .btn__arrow-icon\n\n    &__arrow-icon {\n        width: 2.4rem;\n        object-fit: contain;\n        @media (max-width: 48em) {\n            width: 3.8rem;\n        }\n    }\n}\n","input[type='text'],\ninput[type='email'],\ninput[type='tel'],\ntextarea {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\ntextarea:focus,\ninput:focus {\n    outline: none;\n}\n\n.input {\n    position: relative;\n    padding: 4.6rem 2.7rem 2rem 2.7rem;\n    border-radius: 3rem;\n    background: rgba(255, 255, 255, 0.15);\n    backdrop-filter: blur(2rem);\n    &_textarea {\n        height: 25.5rem;\n        textarea {\n            padding: 0;\n            height: 100%;\n            resize: none;\n        }\n    }\n    @media (max-width: 48em) {\n        padding: 7rem 8rem 2.4rem 2.4rem;\n        border-radius: 4rem;\n        backdrop-filter: blur(4rem);\n        &_textarea {\n            height: 34.8rem;\n        }\n    }\n\n    // .input__field\n\n    &__field {\n        display: block;\n        width: 100%;\n        border-radius: 0 !important;\n        line-height: 1;\n        &::placeholder {\n            color: $white;\n        }\n    }\n\n    // .input__label\n\n    &__label {\n        position: absolute;\n        top: 1.8rem;\n        left: 2.7rem;\n        white-space: nowrap;\n        opacity: 0.5;\n        @media (max-width: 48em) {\n            top: 2.4rem;\n            left: 2.4rem;\n        }\n    }\n\n    &._form-focus {\n    }\n    &._form-error {\n    }\n}\n",".select {\n    position: relative;\n\n    // .select__body\n\n    &__body {\n        position: relative;\n    }\n\n    // .select__title\n\n    &__title {\n        position: relative;\n        z-index: 3;\n        width: 100%;\n        border-radius: 3rem;\n        background: rgba(255, 255, 255, 0.15);\n        backdrop-filter: blur(2rem);\n        cursor: pointer;\n        @media (max-width: 48em) {\n            border-radius: 4rem;\n            backdrop-filter: blur(4rem);\n        }\n    }\n\n    // .select__value\n\n    &__value {\n        padding: 1.3rem 1.3rem 1.3rem 2.7rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: 2rem;\n        height: 7.2rem;\n        width: 100%;\n\n        > * {\n            flex: 1 1 auto;\n        }\n\n        &::after {\n            content: '';\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            flex: 0 0 5rem;\n            width: 5rem;\n            height: 5rem;\n            border-radius: 50%;\n            border: 1px solid rgba(255, 255, 255, 0.6);\n            background-color: rgba(255, 255, 255, 0.15);\n            backdrop-filter: blur(2rem);\n            background-image: url(./assets/images/icons/arr-white.svg);\n            background-size: 2.4rem;\n            background-position: center;\n            background-repeat: no-repeat;\n            transition: transform 0.3s ease;\n        }\n        &._select-label {\n            &::before {\n                content: attr(data-sel-label);\n                ._select-filled & {\n                    display: none;\n                }\n            }\n        }\n        &._select-label::before,\n        .select__content {\n            max-width: 31.4rem;\n            overflow: hidden;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n        }\n\n        @media (max-width: 48em) {\n            padding: 1.6rem;\n            gap: 4rem;\n            height: 10rem;\n            &::after {\n                flex: 0 0 6rem;\n                width: 6rem;\n                height: 6rem;\n                background-size: 3.2rem;\n                backdrop-filter: blur(2.4rem);\n            }\n        }\n    }\n\n    // .select__content\n\n    &__content {\n        // hide / show selected value\n        &:not(._select-filled &) {\n            display: none;\n        }\n    }\n\n    // .select__text\n\n    &__text {\n        flex: 1 1 auto;\n    }\n\n    // .select__input\n\n    &__input {\n        width: 100%;\n        height: 100%;\n        background-color: transparent;\n    }\n\n    // .select__options\n\n    &__options {\n        position: absolute;\n        z-index: 2;\n        top: calc(100% - 3rem);\n        left: 0;\n        padding: 4.6rem 2.7rem 2.4rem 2.7rem;\n        min-width: 100%;\n        border-radius: 0 0 3rem 3rem;\n        background: #36396c;\n        backdrop-filter: blur(2rem);\n        @media (max-width: 48em) {\n            top: calc(100% - 4rem);\n            padding: 8rem 4rem 4rem 4rem;\n            border-radius: 0 0 4rem 4rem;\n            backdrop-filter: blur(4rem);\n        }\n    }\n\n    // .select__scroll\n\n    &__scroll {\n        overflow-y: auto;\n        overflow-x: hidden;\n\n        // maximum height\n        max-height: 19rem;\n\n        // scrollbar styles\n        &.simplebar-scrollable-y {\n            .simplebar-track.simplebar-vertical {\n                right: 1.2rem;\n                width: 0.4rem;\n                border-radius: 0.8rem;\n                background-color: #e4e7ee;\n            }\n            .simplebar-scrollbar {\n                min-height: 3.2rem;\n                border-radius: 0.8rem;\n                background-color: #a2adc1;\n            }\n        }\n    }\n\n    // .select__option\n    &__option {\n        width: 100%;\n        transition: color 0.3s ease;\n        &:not(:last-child) {\n            margin-bottom: 2.5rem;\n            @media (max-width: 48em) {\n                margin-bottom: 5rem;\n            }\n        }\n        &._select-selected {\n            color: $green;\n        }\n        @media (any-hover: hover) {\n            &:hover {\n                &:not(&.select__subtitle) {\n                    cursor: pointer;\n                    color: $green;\n                }\n            }\n        }\n    }\n\n    // .select__group\n\n    &__group {\n        display: inline-flex;\n        align-items: flex-start;\n        flex-direction: column-reverse;\n    }\n\n    // .select__asset\n\n    &__asset {\n    }\n\n    // .select__text\n\n    &__text {\n    }\n\n    // .select__hint\n\n    &__hint {\n        position: absolute;\n        top: calc(100% + 0.8rem);\n        font-size: 1.4rem;\n        line-height: 142.857%;\n    }\n\n    // .select__subtitle\n\n    &__subtitle {\n        cursor: text;\n    }\n\n    // select state\n    &._select-opened {\n        z-index: 5;\n        .select__value::after {\n            transform: rotate(-180deg);\n        }\n    }\n    &._select-focused {\n    }\n    &._select-error {\n        &:not(&._select-filled, &._select-opened) {\n        }\n    }\n    &._select-filled {\n        &:not(&._select-opened) {\n            &:not(&._select-show-val) {\n            }\n        }\n    }\n    &._select-show-val {\n        &._select-focused,\n        &._select-filled,\n        &._select-error,\n        &._select-disabled {\n        }\n    }\n    &._select-disabled {\n    }\n    &._select-multiple {\n    }\n    &._select-active {\n    }\n    &._select-checkbox {\n    }\n}\n\n// list\n._select-list {\n    cursor: pointer;\n}\n",".badge {\n    padding: 1rem 3rem 1rem 1rem;\n    display: inline-flex;\n    align-items: center;\n    column-gap: 2.5rem;\n    border-radius: 3rem;\n    background: rgba(255, 255, 255, 0.1);\n    backdrop-filter: blur(2rem);\n    &._active {\n        color: $darkPurple2;\n        background-color: $white;\n        .badge__icon-wrap {\n            background-color: $blue;\n            &::before {\n                background-image: url(./assets/images/icons/star-active.svg);\n            }\n        }\n    }\n    @media (max-width: 48em) {\n        padding: 2rem 8rem 2rem 2rem;\n        column-gap: 3rem;\n        border-radius: 6rem;\n        backdrop-filter: blur(4rem);\n    }\n\n    // .badge__icon-wrap\n\n    &__icon-wrap {\n        position: relative;\n        flex: 0 0 4.5rem;\n        width: 4.5rem;\n        height: 4.5rem;\n        border-radius: 50%;\n        background-color: rgba(255, 255, 255, 0.2);\n        backdrop-filter: blur(2rem);\n        &::before {\n            content: '';\n            position: absolute;\n            width: 8rem;\n            height: 8rem;\n            top: 50%;\n            left: 50%;\n            background-image: url(./assets/images/icons/star.svg);\n            background-position: center;\n            background-size: contain;\n            background-repeat: no-repeat;\n            transform: translate(-50%, -50%);\n        }\n        @media (max-width: 48em) {\n            flex: 0 0 6rem;\n            width: 6rem;\n            height: 6rem;\n            backdrop-filter: blur(4rem);\n            &::before {\n                width: 10rem;\n                height: 10rem;\n            }\n        }\n    }\n\n    // .badge__text\n\n    &__text {\n    }\n}\n",".txt-green {\n        color: $green;\n    &_do {\n        @media (max-width: 48em){\n             color: inherit;\n        }\n    }\n}\n\n\n                    ._desktop-only {\n                        @media (max-width: 48em){\n                        display: none;\n\n                        }\n                    }\n                    ._mobile-only {\n                        display: none;\n                        @media (max-width: 48em){\n                            display: block;\n\n                        }\n                    }",".intro {\n    position: relative;\n    margin-top: -8rem;\n    margin-bottom: 10.5rem;\n    padding-top: 40rem;\n\n    @include small-tablet {\n        margin-bottom: 15.5rem;\n        padding-top: 68rem;\n    }\n\n    .container {\n        display: flex;\n        height: 100%;\n    }\n\n    @include small-tablet {\n        margin-top: -16rem;\n        &::after {\n            background: linear-gradient(0deg, #101653 13%, rgba(23, 15, 67, 0) 75.45%);\n        }\n    }\n\n    &::after {\n        @include pseudo {\n            content: '';\n            position: absolute;\n            background: linear-gradient(0deg, #101653 0%, rgba(23, 15, 67, 0) 63.45%);\n            z-index: -1;\n            inset: 0;\n            bottom: -0.5rem;\n        }\n    }\n\n    &__content {\n        margin-top: auto;\n        padding-bottom: 11.7rem;\n\n        @include small-tablet {\n        }\n    }\n\n    &__title {\n        display: block;\n        line-height: 110%;\n        margin-bottom: 5.3rem;\n\n        .promo-page & {\n            max-width: 118rem;\n\n        }\n\n        @include small-tablet {\n            .promo-page & {\n                    max-width: 62rem;\n                    font-family: \"Space Age Cyrillic\";\n            }\n            span {\n                &:not(&.txt-green) {\n                color: $green;\n\n                }\n            }\n\n            line-height: 85%;\n            margin-bottom: 7.3rem;\n        }\n    }\n\n    &__poster-image {\n        position: absolute;\n        inset: 0;\n        z-index: -1;\n\n        &_has-backdrop {\n            &::after {\n                content: '';\n                position: absolute;width: 100%;height: 100%;top: 0;left: 0;background-color: rgba(0, 0, 0, 0.3);\n            }\n        }\n\n        img {\n            height: 100%;\n            object-fit: cover;\n\n            @include small-tablet {\n                .home-page & {\n                    object-position: -140rem;\n                }\n            }\n        }\n    }\n\n    &__request {\n        display: flex;\n        align-items: center;\n        gap: 3.7rem;\n\n        @include small-tablet {\n            gap: 5rem;\n        }\n\n        &-projects {\n            display: flex;\n            align-items: center;\n            gap: 1.8rem;\n            position: relative;\n\n            &::after {\n                @include pseudo {\n                    left: -2rem;\n                    height: 100%;\n                    width: 0.2rem;\n                    background: rgba(255, 255, 255, 0.2);\n\n                    @include small-tablet {\n                        left: -3rem;\n                        width: 0.4rem;\n                    }\n                }\n            }\n\n            @include small-tablet {\n                gap: 2.4rem;\n            }\n\n            &-counter {\n                flex: 0 0 5.8rem;\n                width: 5.8rem;\n                height: 5.8rem;\n                border-radius: 50%;\n                background: $green;\n\n                @include small-tablet {\n                    flex: 0 0 8.8rem;\n                    width: 8.8rem;\n                    height: 8.8rem;\n                }\n\n                span {\n                    color: #1a1a1a;\n                    font-family: $spaceAgeCyr;\n                    font-size: 1.7rem;\n                    font-style: normal;\n                    font-weight: 400;\n                    display: block;\n                    margin-top: 1.6rem;\n                    text-align: center;\n\n                    @include small-tablet {\n                        font-size: 2.48rem;\n                        font-style: normal;\n                        font-weight: 400;\n                        line-height: 0.7735rem;\n                        margin-top: 3.5rem;\n                    }\n                }\n            }\n\n            &-title {\n                max-width: 23rem;\n\n                @include small-tablet {\n                    font-size: 2.8rem;\n                    font-style: normal;\n                    font-weight: 400;\n                    line-height: normal;\n                }\n            }\n        }\n    }\n\n    &__articles {\n        display: grid;\n        grid-template-columns: repeat(3, minmax(51rem, 1fr));\n        gap: 3.7rem;\n        margin-top: 5.9rem;\n\n        @include small-tablet {\n            grid-template-columns: repeat(3, minmax(15.2rem, 1fr));\n            gap: 2.8rem;\n            margin-top: 17rem;\n        }\n    }\n\n    &__article {\n        border-radius: 3rem;\n        background: rgba(255, 255, 255, 0.1);\n        backdrop-filter: blur(2rem);\n        position: relative;\n\n        a:hover {\n            color: $green;\n        }\n\n        @include small-tablet {\n            border-radius: 2rem;\n        }\n\n        &-link {\n            padding: 1.1rem 6rem 1.1rem 4.1rem;\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            gap: 2rem;\n\n            @include small-tablet {\n                flex-direction: column;\n                gap: 2.6rem;\n                height: 100%;\n                padding: 11.5rem 2rem 3rem;\n            }\n\n\n            &-title {\n                font-size: 2.5rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: normal;\n                max-width: 18rem;\n                transition: 0.3s color ease;\n\n                @include small-tablet {\n                    font-size: 2.8rem;\n                    font-style: normal;\n                    font-weight: 400;\n                    line-height: normal;\n                    text-align: center;\n                    max-width: 100%;\n                    flex: 1 1 auto;\n                }\n            }\n\n            &-image {\n                @include sizes(20.2rem, 20.2rem);\n                flex: 0 0 20.2rem;\n                border-radius: 50%;\n\n                @include small-tablet {\n                    position: absolute;\n                    @include sizes(16.2rem, 16.2rem);\n                    flex: 0 0 16.2rem;\n                    top: 0;\n                    left: 50%;\n                    transform: translate(-50%, -50%);\n                }\n\n                img {\n                    border-radius: inherit;\n                    height: 100%;\n                    object-fit: cover;\n                }\n            }\n\n            &-icon {\n                position: absolute;\n                top: 1rem;\n                right: 1.3rem;\n\n                &_has-number {\n                    display: inline-flex;\n                    align-items: center;\n                    justify-content: center;\n                    font-weight: 300;\n                    transition: color 0.3s ease;\n                }\n\n                @include rotated-arrow;\n\n                @include small-tablet {\n                    position: static;\n                    padding: 0.8rem;\n                }\n            }\n        }\n    }\n}\n",".promotion {\n    margin-bottom: 31rem;\n\n    &__content {\n        display: flex;\n        flex-direction: column;\n        padding: 0 1.5rem 0 2.9rem;\n        position: relative;\n\n        @include small-tablet {\n            padding: 0;\n            gap: 1rem;\n        }\n\n        &::after {\n            @include pseudo {\n                content: '3';\n                -webkit-text-stroke-width: 0.5rem;\n                -webkit-text-stroke-color: rgba(41, 255, 127, 0.1);\n                font-family: $spaceAgeCyr;\n                font-size: 70rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: normal;\n                color: $bgColor;\n                left: 50%;\n                transform: translateX(-50%);\n                top: -34rem;\n                z-index: -1;\n            }\n        }\n    }\n\n    &__title {\n        @include small-tablet {\n            letter-spacing: 0.5rem;\n        }\n    }\n\n    &__block {\n        display: flex;\n        flex-direction: column;\n\n        @include small-tablet {\n            flex-direction: column-reverse;\n            gap: 1rem;\n\n            &:last-child {\n                .promotion__title {\n                    margin-left: auto;\n                    margin-right: 0 !important;\n                }\n            }\n        }\n\n        &:nth-child(even) {\n            text-align: end;\n\n            @include small-tablet {\n                text-align: start;\n            }\n\n            span {\n                display: block;\n                margin-right: 34rem;\n\n                @include small-tablet {\n                    margin-right: auto;\n                }\n            }\n        }\n\n        @include small-tablet {\n            &:nth-child(odd) {\n                text-align: end;\n\n                .promotion__title {\n                    margin-right: 5rem;\n                }\n            }\n        }\n    }\n\n    &__subtitle {\n        font-size: 1.8rem;\n        font-style: normal;\n        font-weight: 500;\n        line-height: normal;\n\n        @include small-tablet {\n            font-size: 2.8rem;\n            font-style: normal;\n            font-weight: 400;\n            line-height: normal;\n        }\n    }\n}\n",".marketing {\n    margin-bottom: 29rem;\n\n    @include small-tablet{\n        margin-bottom: 25rem;\n    }\n\n    &__image {\n        position: absolute;\n        left: -15.2rem;\n        top: -12rem;\n        max-width: 74rem;\n        width: 100%;\n\n        @include small-tablet {\n            position: static;\n            max-width: 68rem;\n        }\n    }\n\n    &__content {\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n\n        @include small-tablet {\n            flex-direction: column;\n        }\n    }\n\n    &__title {\n        margin-bottom: 4.8rem;\n\n        @include small-tablet {\n            margin-bottom: 4.4rem;\n            text-align: center;\n        }\n    }\n\n    &__info {\n        max-width: 51rem;\n        width: 100%;\n        margin-left: 21rem;\n\n        @include small-tablet {\n            max-width: 100%;\n            margin-left: 0;\n        }\n\n        &-row {\n            display: flex;\n            align-items: flex-start;\n            gap: 4.1rem;\n            justify-content: space-between;\n            margin-bottom: 5rem;\n\n            @include small-tablet {\n                gap: 3rem;\n            }\n        }\n\n        &-list {\n            display: flex;\n            flex-direction: column;\n            padding-left: 3rem;\n            width: 100%;\n\n            @include small-tablet {\n                gap: 2rem;\n            }\n        }\n\n        &-item {\n            font-size: 1.8rem;\n            font-style: normal;\n            font-weight: 400;\n            line-height: 3rem;\n\n            @include small-tablet {\n                font-size: 2.8rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: 2rem;\n            }\n\n            @include item-dot;\n        }\n\n        &-description {\n            font-size: 1.8rem;\n            font-style: normal;\n            font-weight: 600;\n            line-height: normal;\n            max-width: 21.7rem;\n\n            @include small-tablet {\n                max-width: 33.2rem;\n                font-size: 2.8rem;\n                font-style: normal;\n                font-weight: 600;\n                line-height: normal;\n            }\n        }\n    }\n}\n",".benefits {\n    margin-bottom: 17.7rem;\n\n    @include small-tablet {\n        margin-bottom: 26rem;\n    }\n\n    &__content {\n        display: grid;\n        grid-template-columns: repeat(4, minmax(37.4rem, 1fr));\n        gap: 3.6rem;\n\n        @include small-tablet {\n            grid-template-columns: repeat(2, minmax(32.8rem, 1fr));\n            gap: 2.6rem 2.2rem;\n        }\n    }\n\n    &__article {\n        border-radius: 3rem;\n        background: rgba(255, 255, 255, 0.1);\n        padding: 3.8rem 2.2rem;\n        display: flex;\n        flex-direction: column;\n\n        @include small-tablet {\n            padding: 3.4rem 2rem 2rem;\n        }\n\n        &-heading {\n            display: flex;\n            align-items: flex-start;\n            gap: 1.6rem;\n            margin-bottom: 4rem;\n            justify-content: space-between;\n\n            @include small-tablet {\n                margin-bottom: 3.4rem;\n            }\n\n            &-title {\n                font-size: 2.5rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: normal;\n                display: block;\n                max-width: 22.6rem;\n                width: 100%;\n\n                @include small-tablet {\n                    max-width: 100%;\n                }\n            }\n\n            &-counter {\n                color: $darkPurple;\n                font-size: 6rem;\n                font-style: normal;\n                font-weight: 700;\n                line-height: normal;\n\n                @include small-tablet {\n                    display: none;\n                }\n            }\n        }\n\n        &-poster {\n            border-radius: 3rem;\n            border: 0.1rem solid rgba(255, 255, 255, 0.3);\n            background: #101653;\n            height: 21.9rem;\n            position: relative;\n            margin-bottom: 3rem;\n            margin-top: auto;\n\n            @include small-tablet {\n                margin-bottom: 2rem;\n                height: 20rem;\n            }\n\n            &-image {\n                height: auto;\n                width: auto;\n                position: absolute;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n                @include sizes(28rem, 30rem);\n\n                @include small-tablet {\n                    @include sizes(26rem, 28rem);\n                }\n\n                img {\n                    width: 100%;\n                    height: 100%;\n                }\n            }\n        }\n\n        &-description {\n            font-size: 1.6rem;\n            font-style: normal;\n            font-weight: 300;\n            line-height: normal;\n            padding-right: 3rem;\n\n            @include small-tablet {\n                font-size: 2rem;\n                font-style: normal;\n                font-weight: 300;\n                line-height: normal;\n                padding-right: 0;\n            }\n        }\n    }\n}\n",".portfolio {\n    margin-bottom: 18.5rem;\n\n    @include small-tablet {\n        margin-bottom: 27rem;\n    }\n\n    &__heading {\n        margin-bottom: 6.3rem;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 2rem;\n\n        @include small-tablet {\n            flex-direction: column;\n            gap: 8rem;\n            margin-bottom: 8rem;\n        }\n    }\n\n    &__list {\n        display: grid;\n        grid-template-columns: repeat(2, minmax(78.4rem, 1fr));\n        gap: 3.6rem 3.3rem;\n        margin-bottom: 6.6rem;\n\n        @include small-tablet {\n            display: flex;\n            flex-direction: column;\n            gap: 3.2rem;\n            margin-bottom: 7.6rem;\n        }\n    }\n\n    &__item {\n        a {\n            display: flex;\n            flex-direction: column;\n            gap: 3.3rem;\n            border-radius: 3rem;\n            background: rgba(255, 255, 255, 0.1);\n            padding: 2.2rem;\n\n            @include small-tablet {\n                gap: 2.6rem;\n                padding: 2rem;\n            }\n\n            &:hover {\n                .portfolio__item-text {\n                    color: $green;\n                }\n\n                .portfolio__item-image img {\n                    transform: scale(1.1);\n                }\n            }\n        }\n\n        &-image {\n            @include sizes(100%, 36.5rem);\n            border-radius: 3rem;\n            border: 0.1rem solid rgba(255, 255, 255, 0.3);\n            overflow: hidden;\n\n            @include small-tablet {\n                @include sizes(100%, 32rem);\n            }\n\n            img {\n                height: 100%;\n                border-radius: inherit;\n                transition: 0.3s transform ease;\n            }\n        }\n\n        &-bottom {\n            display: flex;\n            align-items: flex-end;\n            justify-content: space-between;\n        }\n\n        &-text {\n            display: flex;\n            flex-direction: column;\n            gap: 1rem;\n            font-size: 2.5rem;\n            font-style: normal;\n            font-weight: 400;\n            line-height: 3rem;\n            transition: 0.3s color ease;\n\n            @include small-tablet {\n                font-size: 2.8rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: 1.5rem;\n                gap: 2rem;\n            }\n\n            span {\n                font-size: 1.6rem;\n                font-style: normal;\n                font-weight: 400;\n                line-height: 3rem;\n                color: $white;\n\n                @include small-tablet {\n                    font-size: 2rem;\n                    font-style: normal;\n                    font-weight: 400;\n                    line-height: 1.5rem;\n                }\n            }\n        }\n\n        &-icon {\n            @include rotated-arrow;\n\n            @include small-tablet{\n                padding: .6rem;\n                @include sizes(5.2rem, 5.2rem);\n            }\n        }\n    }\n\n    &__link {\n        margin: 0 auto;\n        width: fit-content;\n    }\n}\n","@import '../sections/intro';\n@import '../sections/promotion';\n@import '../sections/marketing';\n@import '../sections/benefits';\n@import '../sections/portfolio';\n\nfigure {\n    margin: 0;\n}\n\nbody::after {\n    content: '';\n    position: fixed;\n    z-index: 99;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(255, 255, 255, 0.1);\n    backdrop-filter: blur(2rem);\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.8s ease 0s;\n\n    ._menu-opened & {\n        opacity: 1;\n    }\n}\n\n@media (min-width: 48.01em) {\n    .mobile {\n        display: none;\n    }\n}\n\n@media (max-width: 48em) {\n    .desktop {\n        display: none;\n    }\n}\n",null],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpeUJBQWl5QixXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxRQUFRLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sU0FBUyxVQUFVLFVBQVUsVUFBVSxNQUFNLFNBQVMsVUFBVSxNQUFNLFNBQVMsVUFBVSxPQUFPLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxjQUFjLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLGNBQWMsWUFBWSxZQUFZLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFlBQVksUUFBUSxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sUUFBUSxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sWUFBWSxRQUFRLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxjQUFjLFlBQVksWUFBWSxZQUFZLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFlBQVksU0FBUyxPQUFPLFdBQVcsVUFBVSxRQUFRLE9BQU8sV0FBVyxVQUFVLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxZQUFZLFFBQVEsT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksT0FBTyxPQUFPLFVBQVUsV0FBVyxRQUFRLFVBQVUsV0FBVyxXQUFXLFdBQVcsUUFBUSxRQUFRLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLFFBQVEsVUFBVSxRQUFRLFFBQVEsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsUUFBUSxVQUFVLFNBQVMsT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxZQUFZLFVBQVUsVUFBVSxXQUFXLFFBQVEsT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLFlBQVksT0FBTyxRQUFRLFVBQVUsWUFBWSxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sY0FBYyxZQUFZLFlBQVksWUFBWSxXQUFXLFFBQVEsUUFBUSxXQUFXLFVBQVUsV0FBVyxRQUFRLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxhQUFhLFdBQVcsWUFBWSxRQUFRLFFBQVEsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxRQUFRLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsY0FBYyxZQUFZLFlBQVksUUFBUSxRQUFRLFVBQVUsVUFBVSxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sUUFBUSxXQUFXLE9BQU8sUUFBUSxXQUFXLFFBQVEsT0FBTyxhQUFhLFlBQVksWUFBWSxZQUFZLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxhQUFhLFdBQVcsWUFBWSxRQUFRLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFFBQVEsUUFBUSxVQUFVLFNBQVMsUUFBUSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxRQUFRLFFBQVEsVUFBVSxRQUFRLFFBQVEsTUFBTSxVQUFVLFFBQVEsT0FBTyxRQUFRLE1BQU0sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sUUFBUSxPQUFPLFVBQVUsTUFBTSxPQUFPLFFBQVEsT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLGNBQWMsWUFBWSxZQUFZLFlBQVksVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLGFBQWEsYUFBYSxZQUFZLFlBQVksT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sY0FBYyxZQUFZLFlBQVksT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxjQUFjLFlBQVksWUFBWSxRQUFRLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sWUFBWSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sUUFBUSxVQUFVLFFBQVEsUUFBUSxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFlBQVksT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFlBQVksV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsUUFBUSxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLGVBQWUsWUFBWSxZQUFZLFlBQVksVUFBVSxVQUFVLFdBQVcsUUFBUSxPQUFPLGFBQWEsWUFBWSxZQUFZLFFBQVEsT0FBTyxZQUFZLFVBQVUsUUFBUSxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxRQUFRLE9BQU8sVUFBVSxRQUFRLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxjQUFjLFlBQVksWUFBWSxRQUFRLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxhQUFhLFlBQVksWUFBWSxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxhQUFhLFlBQVksWUFBWSxRQUFRLE9BQU8sVUFBVSxjQUFjLFlBQVksWUFBWSxRQUFRLFFBQVEsVUFBVSxRQUFRLE1BQU0sUUFBUSxPQUFPLFVBQVUsV0FBVyxPQUFPLHVDQUF1Qyx1Q0FBdUMsdUJBQXVCLCtFQUErRSxHQUFHLGdCQUFnQix1Q0FBdUMsdUJBQXVCLGlGQUFpRixHQUFHLGdCQUFnQix1Q0FBdUMsdUJBQXVCLGdGQUFnRixHQUFHLGdCQUFnQix1Q0FBdUMsdUJBQXVCLGtGQUFrRixHQUFHLGdCQUFnQix1Q0FBdUMsdUJBQXVCLDhFQUE4RSxHQUFHLGdCQUFn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Q0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0Qjs7QUFFNUI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQzhCOztBQUU5QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDMkI7O0FBRTNCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDc0I7O0FBRXRCOztBQUV5QjtBQUNFO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvZGV2L3VraWswLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9saWJzL2RkLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy9oYW1idXJnZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL3V0aWxzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/NmMyZCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX25hdi1pdGVtLWhlYWRpbmcnKTtcblxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCctLWFjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuZnVuY3Rpb24gRHluYW1pY0FkYXB0KHR5cGUpIHtcbiAgdGhpcy50eXBlID0gdHlwZTtcbn1cbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICB0aGlzLtC+YmplY3RzID0gW107XG4gIHRoaXMuZGFDbGFzc25hbWUgPSAnX2R5bmFtaWNfYWRhcHRfJztcbiAgdGhpcy5ub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRhXScpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5ub2Rlc1tpXTtcbiAgICBjb25zdCBkYXRhID0gbm9kZS5kYXRhc2V0LmRhLnRyaW0oKTtcbiAgICBjb25zdCBkYXRhQXJyYXkgPSBkYXRhLnNwbGl0KCcsJyk7XG4gICAgY29uc3Qg0L5iamVjdCA9IHt9O1xuICAgINC+YmplY3QuZWxlbWVudCA9IG5vZGU7XG4gICAg0L5iamVjdC5wYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG4gICAg0L5iamVjdC5kZXN0aW5hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZGF0YUFycmF5WzBdLnRyaW0oKSk7XG4gICAg0L5iamVjdC5icmVha3BvaW50ID0gZGF0YUFycmF5WzFdID8gZGF0YUFycmF5WzFdLnRyaW0oKSA6ICc3NjcnO1xuICAgINC+YmplY3QucGxhY2UgPSBkYXRhQXJyYXlbMl0gPyBkYXRhQXJyYXlbMl0udHJpbSgpIDogJ2xhc3QnO1xuICAgINC+YmplY3QuaW5kZXggPSB0aGlzLmluZGV4SW5QYXJlbnQo0L5iamVjdC5wYXJlbnQsINC+YmplY3QuZWxlbWVudCk7XG4gICAgdGhpcy7QvmJqZWN0cy5wdXNoKNC+YmplY3QpO1xuICB9XG4gIHRoaXMuYXJyYXlTb3J0KHRoaXMu0L5iamVjdHMpO1xuICB0aGlzLm1lZGlhUXVlcmllcyA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChcbiAgICB0aGlzLtC+YmplY3RzLFxuICAgIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAnKCcgK1xuICAgICAgICB0aGlzLnR5cGUgK1xuICAgICAgICAnLXdpZHRoOiAnICtcbiAgICAgICAgaXRlbS5icmVha3BvaW50ICtcbiAgICAgICAgJ3B4KSwnICtcbiAgICAgICAgaXRlbS5icmVha3BvaW50XG4gICAgICApO1xuICAgIH0sXG4gICAgdGhpc1xuICApO1xuICB0aGlzLm1lZGlhUXVlcmllcyA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChcbiAgICB0aGlzLm1lZGlhUXVlcmllcyxcbiAgICBmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIHNlbGYpIHtcbiAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHNlbGYsIGl0ZW0pID09PSBpbmRleDtcbiAgICB9XG4gICk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tZWRpYVF1ZXJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtZWRpYSA9IHRoaXMubWVkaWFRdWVyaWVzW2ldO1xuICAgIGNvbnN0IG1lZGlhU3BsaXQgPSBTdHJpbmcucHJvdG90eXBlLnNwbGl0LmNhbGwobWVkaWEsICcsJyk7XG4gICAgY29uc3QgbWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKG1lZGlhU3BsaXRbMF0pO1xuICAgIGNvbnN0IG1lZGlhQnJlYWtwb2ludCA9IG1lZGlhU3BsaXRbMV07XG4gICAgY29uc3Qg0L5iamVjdHNGaWx0ZXIgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoXG4gICAgICB0aGlzLtC+YmplY3RzLFxuICAgICAgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uYnJlYWtwb2ludCA9PT0gbWVkaWFCcmVha3BvaW50O1xuICAgICAgfVxuICAgICk7XG4gICAgbWF0Y2hNZWRpYS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5tZWRpYUhhbmRsZXIobWF0Y2hNZWRpYSwg0L5iamVjdHNGaWx0ZXIpO1xuICAgIH0pO1xuICAgIHRoaXMubWVkaWFIYW5kbGVyKG1hdGNoTWVkaWEsINC+YmplY3RzRmlsdGVyKTtcbiAgfVxufTtcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUubWVkaWFIYW5kbGVyID0gZnVuY3Rpb24gKG1hdGNoTWVkaWEsINC+YmplY3RzKSB7XG4gIGlmIChtYXRjaE1lZGlhLm1hdGNoZXMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8INC+YmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCDQvmJqZWN0ID0g0L5iamVjdHNbaV07XG4gICAgICDQvmJqZWN0LmluZGV4ID0gdGhpcy5pbmRleEluUGFyZW50KNC+YmplY3QucGFyZW50LCDQvmJqZWN0LmVsZW1lbnQpO1xuICAgICAgdGhpcy5tb3ZlVG8o0L5iamVjdC5wbGFjZSwg0L5iamVjdC5lbGVtZW50LCDQvmJqZWN0LmRlc3RpbmF0aW9uKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy9mb3IgKGxldCBpID0gMDsgaSA8INC+YmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaSA9INC+YmplY3RzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCDQvmJqZWN0ID0g0L5iamVjdHNbaV07XG4gICAgICBpZiAo0L5iamVjdC5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmRhQ2xhc3NuYW1lKSkge1xuICAgICAgICB0aGlzLm1vdmVCYWNrKNC+YmplY3QucGFyZW50LCDQvmJqZWN0LmVsZW1lbnQsINC+YmplY3QuaW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUubW92ZVRvID0gZnVuY3Rpb24gKHBsYWNlLCBlbGVtZW50LCBkZXN0aW5hdGlvbikge1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5kYUNsYXNzbmFtZSk7XG4gIGlmIChwbGFjZSA9PT0gJ2xhc3QnIHx8IHBsYWNlID49IGRlc3RpbmF0aW9uLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgIGRlc3RpbmF0aW9uLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZWxlbWVudCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwbGFjZSA9PT0gJ2ZpcnN0Jykge1xuICAgIGRlc3RpbmF0aW9uLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIGVsZW1lbnQpO1xuICAgIHJldHVybjtcbiAgfVxuICBkZXN0aW5hdGlvbi5jaGlsZHJlbltwbGFjZV0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIGVsZW1lbnQpO1xufTtcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUubW92ZUJhY2sgPSBmdW5jdGlvbiAocGFyZW50LCBlbGVtZW50LCBpbmRleCkge1xuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5kYUNsYXNzbmFtZSk7XG4gIGlmIChwYXJlbnQuY2hpbGRyZW5baW5kZXhdICE9PSB1bmRlZmluZWQpIHtcbiAgICBwYXJlbnQuY2hpbGRyZW5baW5kZXhdLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBwYXJlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcbiAgfVxufTtcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUuaW5kZXhJblBhcmVudCA9IGZ1bmN0aW9uIChwYXJlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgYXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChwYXJlbnQuY2hpbGRyZW4pO1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhcnJheSwgZWxlbWVudCk7XG59O1xuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5hcnJheVNvcnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmICh0aGlzLnR5cGUgPT09ICdtaW4nKSB7XG4gICAgQXJyYXkucHJvdG90eXBlLnNvcnQuY2FsbChhcnIsIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICBpZiAoYS5icmVha3BvaW50ID09PSBiLmJyZWFrcG9pbnQpIHtcbiAgICAgICAgaWYgKGEucGxhY2UgPT09IGIucGxhY2UpIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhLnBsYWNlID09PSAnZmlyc3QnIHx8IGIucGxhY2UgPT09ICdsYXN0Jykge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhLnBsYWNlID09PSAnbGFzdCcgfHwgYi5wbGFjZSA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGEucGxhY2UgLSBiLnBsYWNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYS5icmVha3BvaW50IC0gYi5icmVha3BvaW50O1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIEFycmF5LnByb3RvdHlwZS5zb3J0LmNhbGwoYXJyLCBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgaWYgKGEuYnJlYWtwb2ludCA9PT0gYi5icmVha3BvaW50KSB7XG4gICAgICAgIGlmIChhLnBsYWNlID09PSBiLnBsYWNlKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gJ2ZpcnN0JyB8fCBiLnBsYWNlID09PSAnbGFzdCcpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhLnBsYWNlID09PSAnbGFzdCcgfHwgYi5wbGFjZSA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBiLnBsYWNlIC0gYS5wbGFjZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGIuYnJlYWtwb2ludCAtIGEuYnJlYWtwb2ludDtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbn07XG5jb25zdCBkYSA9IG5ldyBEeW5hbWljQWRhcHQoJ21heCcpO1xuZGEuaW5pdCgpO1xuIiwiaW1wb3J0IHsgYm9keUxvY2tTdGF0dXMsIGJvZHlMb2NrVG9nZ2xlIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IG1lbnVJbml0ID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJykpIHtcbiAgICAgICAgY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpO1xuXG4gICAgICAgIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoYm9keUxvY2tTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnX21lbnUtb3BlbmVkJyk7XG4gICAgICAgICAgICAgICAgYm9keUxvY2tUb2dnbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxubWVudUluaXQoKTtcbiIsImltcG9ydCB7IF9zbGlkZVVwLCBfc2xpZGVEb3duLCBfc2xpZGVUb2dnbGUgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY2xhc3MgU2VsZWN0IHtcbiAgICAvLyBzZXR1cCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl90aGlzID0gdGhpcztcblxuICAgICAgICAvLyBjdXN0b20gc2VsZWN0IGNsYXNzZXNcbiAgICAgICAgdGhpcy5jbGFzc2VzID0ge1xuICAgICAgICAgICAgLy8gaHRtbCBidWlsZCBjbGFzc2VzXG4gICAgICAgICAgICBzZWw6ICdzZWxlY3QnLFxuICAgICAgICAgICAgYm9keTogJ3NlbGVjdF9fYm9keScsXG4gICAgICAgICAgICBsYWJlbDogJ3NlbGVjdF9fbGFiZWwnLFxuICAgICAgICAgICAgdGl0bGU6ICdzZWxlY3RfX3RpdGxlJyxcbiAgICAgICAgICAgIHZhbDogJ3NlbGVjdF9fdmFsdWUnLFxuICAgICAgICAgICAgY29udGVudDogJ3NlbGVjdF9fY29udGVudCcsXG4gICAgICAgICAgICBvcHRpb25zOiAnc2VsZWN0X19vcHRpb25zJyxcbiAgICAgICAgICAgIG9wdGlvbjogJ3NlbGVjdF9fb3B0aW9uJyxcbiAgICAgICAgICAgIHNjcm9sbDogJ3NlbGVjdF9fc2Nyb2xsJyxcbiAgICAgICAgICAgIGdyb3VwOiAnc2VsZWN0X19ncm91cCcsXG4gICAgICAgICAgICBpbnA6ICdzZWxlY3RfX2lucHV0JyxcbiAgICAgICAgICAgIGFzc2V0OiAnc2VsZWN0X19hc3NldCcsXG4gICAgICAgICAgICB0eHQ6ICdzZWxlY3RfX3RleHQnLFxuICAgICAgICAgICAgaGludDogJ3NlbGVjdF9faGludCcsXG5cbiAgICAgICAgICAgIC8vIHN0YXRlIGNsYXNzZXNcbiAgICAgICAgICAgIGFjdGl2ZTogJ19zZWxlY3QtYWN0aXZlJyxcbiAgICAgICAgICAgIGZvY3VzZWQ6ICdfc2VsZWN0LWZvY3VzZWQnLFxuICAgICAgICAgICAgb3BlbmVkOiAnX3NlbGVjdC1vcGVuZWQnLFxuICAgICAgICAgICAgZmlsbGVkOiAnX3NlbGVjdC1maWxsZWQnLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6ICdfc2VsZWN0LXNlbGVjdGVkJyxcbiAgICAgICAgICAgIGRpc2FibGVkOiAnX3NlbGVjdC1kaXNhYmxlZCcsXG5cbiAgICAgICAgICAgIC8vIGFkZGl0aW9uYWwgY2xhc3Nlc1xuICAgICAgICAgICAgbGlzdDogJ19zZWxlY3QtbGlzdCcsXG4gICAgICAgICAgICBlcnJvcjogJ19zZWxlY3QtZXJyb3InLFxuICAgICAgICAgICAgbXVsdGlwbGU6ICdfc2VsZWN0LW11bHRpcGxlJyxcbiAgICAgICAgICAgIGNoZWNrYm94OiAnX3NlbGVjdC1jaGVja2JveCcsXG4gICAgICAgICAgICBsYWJlbDogJ19zZWxlY3QtbGFiZWwnXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gYWxsIHNlbGVjdCBpdGVtc1xuICAgICAgICBjb25zdCBzZWxlY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0Jyk7XG4gICAgICAgIGlmIChzZWxlY3RMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0KHNlbGVjdExpc3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc2VsZWN0IGluaXRpYWxpemF0aW9uICYgYnVpbGQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyBpbml0aWFsaXphdGlvblxuICAgIGluaXQoc2VsZWN0TGlzdCkge1xuICAgICAgICAvLyBpbml0XG4gICAgICAgIHNlbGVjdExpc3QuZm9yRWFjaCgoc2VsZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGFyLXJhdGluZycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0U2VsSXRlbShzZWxlY3QsIGluZGV4ICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGV2ZW50c1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb25zKGUpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAna2V5ZG93bicsXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2ZvY3VzaW4nLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGlvbnMoZSk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdmb2N1c291dCcsXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgIH1cbiAgICAvLyBzaW5nbGUgc2VsZWN0IGl0ZW0gaW5pdGlhbGl6YXRpb25cbiAgICBpbml0U2VsSXRlbShyZWxhdGl2ZVNlbCwgaW5kZXgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc2VsKTtcbiAgICAgICAgcmVsYXRpdmVTZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChyZWxhdGl2ZVNlbCk7XG4gICAgICAgIHJlbGF0aXZlU2VsLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIGluZGV4ID8gKHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSWQgPSBpbmRleCkgOiBudWxsO1xuXG4gICAgICAgIGlmICh0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKSkge1xuICAgICAgICAgICAgcmVsYXRpdmVTZWwuZGF0YXNldC5vcHRQbGFjZWhvbGRlciA9IHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLnZhbHVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLmxhYmVsLnNob3cpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxUaXRsZSA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLnRpdGxlKS50d2luU2VsO1xuICAgICAgICAgICAgICAgIHNlbFRpdGxlLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgICAgICAgICAgJ2FmdGVyYmVnaW4nLFxuICAgICAgICAgICAgICAgICAgICBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5sYWJlbH1cIj4ke1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkubGFiZWwudGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkubGFiZWwudGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfTwvc3Bhbj5gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCAhPT0gJzAnKSB7XG4gICAgICAgICAgICBzZWxlY3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgICAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuYm9keX1cIj48ZGl2IGhpZGRlbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLm9wdGlvbnN9XCI+PC9kaXY+PC9kaXY+YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICAgICAgICAgJ2JlZm9yZWVuZCcsXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5ib2R5fVwiPjxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5vcHRpb25zfVwiPjwvZGl2PjwvZGl2PmBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJ1aWxkKHJlbGF0aXZlU2VsKTtcblxuICAgICAgICByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkID0gcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCA/IHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgOiAnMTUwJztcbiAgICAgICAgcmVsYXRpdmVTZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLmluaXRTZWxlY3Rpb25zKGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gc2VsZWN0IGJ1aWxkXG4gICAgYnVpbGQocmVsYXRpdmVTZWwpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3Qgc2VsT2JqID0gdGhpcztcblxuICAgICAgICAvLyBzZXQgaWRcbiAgICAgICAgc2VsZWN0LmRhdGFzZXQuc2VsSWQgPSByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbElkO1xuICAgICAgICAvLyBzZXQgdmFsdWVcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKTtcbiAgICAgICAgLy8gc2V0IG9wdGlvbnNcbiAgICAgICAgdGhpcy5zZXRPcHRpb25zKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xuICAgICAgICAvLyBzZXQgY3NzIG1vZGlmaWNhdG9yXG4gICAgICAgIHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsQWRkb25DbGFzc1xuICAgICAgICAgICAgPyBzZWxlY3QuY2xhc3NMaXN0LmFkZChgc2VsZWN0XyR7cmVsYXRpdmVTZWwuZGF0YXNldC5zZWxBZGRvbkNsYXNzfWApXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIC8vIHNldCBjbGFzcyBpZiBzZWxlY3QgaXMgbXVsdGlwbGVcbiAgICAgICAgcmVsYXRpdmVTZWwubXVsdGlwbGVcbiAgICAgICAgICAgID8gc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLm11bHRpcGxlKVxuICAgICAgICAgICAgOiBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMubXVsdGlwbGUpO1xuICAgICAgICAvLyBzZXQgY2xhc3MgaWYgc2VsZWN0IGNoZWNrYm94ZXMgYXJlIHNldFxuICAgICAgICByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLWNoZWNrYm94ZXMnKSAmJiByZWxhdGl2ZVNlbC5tdWx0aXBsZVxuICAgICAgICAgICAgPyBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuY2hlY2tib3gpXG4gICAgICAgICAgICA6IHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5jaGVja2JveCk7XG4gICAgICAgIC8vIGRpc2FibGUgc2VsZWN0XG4gICAgICAgIHRoaXMuZGlzYWJsZVNlbGVjdChzZWxlY3QsIHJlbGF0aXZlU2VsKTtcbiAgICAgICAgLy8gc2V0IHNlYXJjaCBhY3Rpb25zIGlmIGRhdGEtc2VsLXNlYXJjaCBpcyBzZXRcbiAgICAgICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1zZWFyY2gnKSA/IHRoaXMuc2V0U2VhcmNoQWN0aW9ucyhzZWxlY3QpIDogbnVsbDtcbiAgICAgICAgLy8gc2V0IHNlbGVjdCBhY3Rpb25zIGlmIGl0J3MgaW5pdGlhbGx5IG9wZW5lZFxuICAgICAgICByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLW9wZW5lZCcpID8gdGhpcy5zZXRBY3Rpb24oc2VsZWN0KSA6IG51bGw7XG5cbiAgICAgICAgLy8gc2V0IHNlbGVjdCBoaW50XG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnQpIHtcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgICAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwic2VsZWN0X19oaW50XCI+JHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnR9PC9kaXY+YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkYXRlIHNlbGVjdFxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuY2xvc2VzdCgnZm9ybScpKSB7XG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5jbG9zZXN0KCdmb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyhzZWxPYmouY2xhc3Nlcy5maWxsZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbE9iai5hZGRFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsT2JqLnJlbW92ZUVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNob3cgLyBoaWRlIHNlbGVjdGlvbiBmcm9tIHNlbGVjdCB0aXRsZVxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNob3ctdmFsJykpIHtcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0LXNob3ctdmFsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnX3NlbGVjdC1zaG93LXZhbCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHNldCB0d2luIHNlbGVjdCB0aXRsZSB2YWx1ZVxuICAgIHNldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcbiAgICAgICAgY29uc3Qgc2VsQm9keSA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLmJvZHkpLnR3aW5TZWw7XG4gICAgICAgIGNvbnN0IHNlbFRpdGxlID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMudGl0bGUpLnR3aW5TZWw7XG5cbiAgICAgICAgaWYgKHNlbFRpdGxlKSBzZWxUaXRsZS5yZW1vdmUoKTtcbiAgICAgICAgc2VsQm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aGlzLmdldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpKTtcbiAgICB9XG4gICAgLy8gc2V0IHR3aW4gc2VsZWN0IG9wdGlvbnNcbiAgICBzZXRPcHRpb25zKHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnR3aW5TZWw7XG4gICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsT3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnJlbGF0aXZlU2VsO1xuXG4gICAgICAgIG9wdGlvbnMuaW5uZXJIVE1MID0gdGhpcy5nZXRPcHRpb25zKHJlbGF0aXZlU2VsKTtcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsT3B0aW9ucy5xdWVyeVNlbGVjdG9yKCdbc2VsZWN0ZWRdJykpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5jbGFzc2VzLm9wdGlvbn1gKS5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZGlzYWJsZSBzZWxlY3RcbiAgICBkaXNhYmxlU2VsZWN0KHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgICAgICAgdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMudGl0bGUpLnR3aW5TZWwuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLnRpdGxlKS50d2luU2VsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtYWluIGFjdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIHNldCBtYWluIGFjdGlvbnNcbiAgICBzZXRBY3Rpb25zKGUpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBlLnR5cGU7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMuc2VsKSkgfHxcbiAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IHRhcmdldC5jbG9zZXN0KCcuc2VsZWN0JylcbiAgICAgICAgICAgICAgICA/IHRhcmdldC5jbG9zZXN0KCcuc2VsZWN0JylcbiAgICAgICAgICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgYC4ke3RoaXMuY2xhc3Nlcy5zZWx9W2RhdGEtc2VsLWlkPVwiJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMubGlzdCkpLmRhdGFzZXQuc2VsZWN0SWRcbiAgICAgICAgICAgICAgICAgICAgICB9XCJdYFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0aXZlU2VsID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0KS5yZWxhdGl2ZVNlbDtcblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlbGF0aXZlU2VsLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5saXN0KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbExpc3QgPSB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5saXN0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAuJHt0aGlzLmNsYXNzZXMuc2VsfVtkYXRhLXNlbC1pZD1cIiR7c2VsTGlzdC5kYXRhc2V0LnNlbElkfVwiXSAuc2VsZWN0X19vcHRpb25bZGF0YS1vcHQtdmFsPVwiJHtzZWxMaXN0LmRhdGFzZXQub3B0VmFsfVwiXWBcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE9wdGlvbkFjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsLCBzZWxPcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnRpdGxlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9uKHNlbGVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3B0aW9uKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbE9wdGlvbiA9IHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wdGlvbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25BY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCwgc2VsT3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2ZvY3VzaW4nIHx8IHR5cGUgPT09ICdmb2N1c291dCcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMuc2VsKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdmb2N1c2luJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmZvY3VzZWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmZvY3VzZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5maWxsZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2tleWRvd24nICYmIGUuY29kZSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlR3JvdXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VHcm91cCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHNldCBzaW5nbGUgc2VsZWN0IGFjdGlvblxuICAgIHNldEFjdGlvbihzZWxlY3QpIHtcbiAgICAgICAgY29uc3QgcmVsYXRpdmVTZWwgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QpLnJlbGF0aXZlU2VsO1xuICAgICAgICBjb25zdCBzZWxPcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykudHdpblNlbDtcblxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuY2xvc2VzdCgnW2RhdGEtb25lLXNlbGVjdF0nKSkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0T25lR3JvdXAgPSByZWxhdGl2ZVNlbC5jbG9zZXN0KCdbZGF0YS1vbmUtc2VsZWN0XScpO1xuICAgICAgICAgICAgdGhpcy5jbG9zZUdyb3VwKHNlbGVjdE9uZUdyb3VwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2VsT3B0aW9ucy5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmNsYXNzZXMub3BlbmVkKTtcbiAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkICE9PSAnMCcpIHtcbiAgICAgICAgICAgICAgICBfc2xpZGVUb2dnbGUoc2VsT3B0aW9ucywgcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMub3BlbmVkKSAmJlxuICAgICAgICAgICAgICAgIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZScpICYmXG4gICAgICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuZXJyb3IpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBjbG9zZSBzaW5nbGUgc2VsZWN0IGdyb3VwXG4gICAgY2xvc2VHcm91cChncm91cCkge1xuICAgICAgICBjb25zdCBzZWxHcm91cCA9IGdyb3VwID8gZ3JvdXAgOiBkb2N1bWVudDtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IHNlbEdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICBgJHt0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5zZWwpfSR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3BlbmVkKX1gXG4gICAgICAgICk7XG4gICAgICAgIGlmIChzZWxlY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgc2VsZWN0aW9ucy5mb3JFYWNoKChzZWxlY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlSXRlbShzZWxlY3Rpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gY2xvc2Ugc2luZ2xlIHNlbGVjdCBpdGVtXG4gICAgY2xvc2VJdGVtKHNlbGVjdCkge1xuICAgICAgICBjb25zdCByZWxhdGl2ZVNlbCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCkucmVsYXRpdmVTZWw7XG4gICAgICAgIGNvbnN0IHNlbE9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS50d2luU2VsO1xuXG4gICAgICAgIGlmICghc2VsT3B0aW9ucy5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMub3BlbmVkKTtcbiAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkICE9PSAnMCcpIHtcbiAgICAgICAgICAgICAgICBfc2xpZGVVcChzZWxPcHRpb25zLCByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzZXQgc2luZ2xlIG9wdGlvbiBhY3Rpb25zXG4gICAgc2V0T3B0aW9uQWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwsIG9wdGlvbikge1xuICAgICAgICBpZiAocmVsYXRpdmVTZWwubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCk7XG4gICAgICAgICAgICBjb25zdCByZWxhdGl2ZVNlbGVjdGlvbnMgPSB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpLmVsZW1lbnRzO1xuXG4gICAgICAgICAgICByZWxhdGl2ZVNlbGVjdGlvbnMuZm9yRWFjaCgocmVsYXRpdmVTZWxlY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVNlbGVjdGlvbi5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgdHdpblNlbGVjdGlvbnMgPSBzZWxlY3QucXVlcnlTZWxlY3RvckFsbCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCkpO1xuICAgICAgICAgICAgdHdpblNlbGVjdGlvbnMuZm9yRWFjaCgodHdpblNlbGVjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHJlbGF0aXZlU2VsXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBvcHRpb25bdmFsdWU9XCIke3R3aW5TZWxlY3Rpb24uZGF0YXNldC5vcHRWYWx9XCJdYClcbiAgICAgICAgICAgICAgICAgICAgLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFvcHRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZWxhdGl2ZVNlbC5xdWVyeVNlbGVjdG9yKGBvcHRpb25bdmFsdWU9XCIke29wdGlvbi5kYXRhc2V0Lm9wdFZhbH1cIl1gKSk7XG4gICAgICAgICAgICAgICAgcmVsYXRpdmVTZWxcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7b3B0aW9uLmRhdGFzZXQub3B0VmFsfVwiXWApXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdF9fb3B0aW9uJylcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgob3B0KSA9PiBvcHQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpKTtcbiAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCk7XG4gICAgICAgICAgICBpZiAoIXJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zaG93LXNlbGVjdGlvbicpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdC5xdWVyeVNlbGVjdG9yKGAke3RoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wdGlvbil9W2hpZGRlbl1gKSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3QucXVlcnlTZWxlY3RvcihgJHt0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcHRpb24pfVtoaWRkZW5dYCkuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9wdGlvbi5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsYXRpdmVTZWwudmFsdWUgPSBvcHRpb24uaGFzQXR0cmlidXRlKCdkYXRhLW9wdC12YWwnKVxuICAgICAgICAgICAgICAgID8gb3B0aW9uLmRhdGFzZXQub3B0VmFsXG4gICAgICAgICAgICAgICAgOiBvcHRpb24udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB0aGlzLnNldEFjdGlvbihzZWxlY3QpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XG4gICAgICAgIHRoaXMuc2V0U2VsZWN0aW9ucyhyZWxhdGl2ZVNlbCk7XG4gICAgfVxuICAgIC8vIHNldCBzZWFyY2ggYWN0aW9uc1xuICAgIHNldFNlYXJjaEFjdGlvbnMoc2VsZWN0KSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgY29uc3Qgc2VsSW5wdXQgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5pbnApLnR3aW5TZWw7XG4gICAgICAgIGNvbnN0IHNlbE9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS50d2luU2VsLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICBgLiR7dGhpcy5jbGFzc2VzLm9wdGlvbn1gXG4gICAgICAgICk7XG5cbiAgICAgICAgc2VsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxPcHRpb25zLmZvckVhY2goKHNlbE9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWxPcHRpb24udGV4dENvbnRlbnQudG9VcHBlckNhc2UoKS5pbmRleE9mKHNlbElucHV0LnZhbHVlLnRvVXBwZXJDYXNlKCkpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsT3B0aW9uLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbE9wdGlvbi5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsT3B0aW9ucy5oaWRkZW4gPT09IHRydWUgPyBfdGhpcy5zZXRBY3Rpb24oc2VsZWN0KSA6IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBzZXQgc2VsZWN0IHN1YnRpdGxlXG4gICAgc2V0U3VidGl0bGUocmVsYXRpdmVTZWwpIHt9XG5cbiAgICAvLyB2YWxpZGF0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIGFkZCBhbiBlcnJvciB0byBhIHNlbGVjdFxuICAgIGFkZEVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KSB7XG4gICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5lcnJvcik7XG5cbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsRXJyb3IgJiYgIXJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSGludCkge1xuICAgICAgICAgICAgcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICAgICAgICAgJ2JlZm9yZWVuZCcsXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJzZWxlY3RfX2hpbnRcIj4ke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsRXJyb3J9PC9kaXY+YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyByZW1vdmUgYW4gZXJyb3IgZnJvbSBhIHNlbGVjdFxuICAgIHJlbW92ZUVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KSB7XG4gICAgICAgIGlmIChzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5lcnJvcikpIHtcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdF9faGludCcpICYmICFyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnQpIHtcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19oaW50JykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdXRpbHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyBnZXQgY3VzdG9tIGNsYXNzXG4gICAgZ2V0Q2xhc3MoY3NzQ2xhc3MpIHtcbiAgICAgICAgcmV0dXJuIGAuJHtjc3NDbGFzc31gO1xuICAgIH1cbiAgICAvLyBnZXQgc2luZ2xlIHNlbGVjdCBpdGVtXG4gICAgZ2V0U2VsZWN0KHNlbGVjdCwgY3NzQ2xhc3MpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlbGF0aXZlU2VsOiBzZWxlY3QucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksXG4gICAgICAgICAgICB0d2luU2VsOiBzZWxlY3QucXVlcnlTZWxlY3Rvcih0aGlzLmdldENsYXNzKGNzc0NsYXNzKSlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gZ2V0IHNlbGVjdGVkIGl0ZW0gdmFsdWVcbiAgICBnZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XG4gICAgICAgIGxldCBhdHRyLFxuICAgICAgICAgICAgYXR0ckNsYXNzLFxuICAgICAgICAgICAgdGl0bGVWYWwgPSB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwsIDIpLmh0bWw7XG5cbiAgICAgICAgLy8gc2V0IHRpdGxlIHZhbHVlXG4gICAgICAgIHRpdGxlVmFsID0gdGl0bGVWYWwubGVuZ3RoXG4gICAgICAgICAgICA/IHRpdGxlVmFsXG4gICAgICAgICAgICA6IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsTGFiZWxcbiAgICAgICAgICAgID8gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxMYWJlbFxuICAgICAgICAgICAgOiAnJztcblxuICAgICAgICAvLyBzZXQgYWN0aXZlIGNsYXNzIHRvIHNlbGVjdCBpZiBpdCBjb250YWlucyBhbnkgdmFsdWVzXG4gICAgICAgIGlmICh0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpLnZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXQgc2VsZWN0IGxhYmVsXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLWxhYmVsJykpIHtcbiAgICAgICAgICAgIGF0dHIgPSByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbExhYmVsXG4gICAgICAgICAgICAgICAgPyBgIGRhdGEtc2VsLWxhYmVsPVwiJHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbExhYmVsfVwiYFxuICAgICAgICAgICAgICAgIDogYCBkYXRhLXNlbC1sYWJlbD1cItCS0YvQsdC+0YBcImA7XG4gICAgICAgICAgICBhdHRyQ2xhc3MgPSBgICR7dGhpcy5jbGFzc2VzLmxhYmVsfWA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwdXNoIHNlbGVjdGlvbnMgdG8gdGhlIGxpc3QgaW5zaWRlIG9mIHNlbGVjdCB0aXRsZVxuICAgICAgICBpZiAocmVsYXRpdmVTZWwubXVsdGlwbGUgJiYgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1saXN0JykpIHtcbiAgICAgICAgICAgIHRpdGxlVmFsID0gdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKVxuICAgICAgICAgICAgICAgIC5lbGVtZW50cy5tYXAoXG4gICAgICAgICAgICAgICAgICAgIChvcHRpb24pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBgPHNwYW4gZGF0YS1vcHQtaWQ9XCIke3NlbGVjdC5kYXRhc2V0LnNlbElkfVwiIGRhdGEtb3B0LXZhbD1cIiR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCIgY2xhc3M9XCJfbGlzdC1pdGVtXCI+JHt0aGlzLmdldENvbnRlbnQob3B0aW9uKX08L3NwYW4+YFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuam9pbignJyk7XG5cbiAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0Lmxpc3QgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWxhdGl2ZVNlbC5kYXRhc2V0Lmxpc3QpKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWxhdGl2ZVNlbC5kYXRhc2V0Lmxpc3QpLmlubmVySFRNTCA9IHRpdGxlVmFsO1xuICAgICAgICAgICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNlYXJjaCcpKSB0aXRsZVZhbCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaW5pdCBzZWxlY3Qgc2VhcmNoXG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNlYXJjaCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy50aXRsZX1cIj48c3BhbiAke2F0dHJ9IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMudmFsfVwiPjxpbnB1dCBhdXRvY29tcGxldGU9XCJvZmZcIiB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCIke3RpdGxlVmFsfVwiIGRhdGEtcGxhY2Vob2xkZXI9XCIke3RpdGxlVmFsfVwiIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuaW5wfVwiPjwvc3Bhbj48L2Rpdj5gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tQ2xhc3MgPVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHMubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS5lbGVtZW50c1swXS5kYXRhc2V0Lm9wdENsYXNzXG4gICAgICAgICAgICAgICAgICAgID8gYCAke3RoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHNbMF0uZGF0YXNldC5vcHRDbGFzc31gXG4gICAgICAgICAgICAgICAgICAgIDogJyc7XG4gICAgICAgICAgICByZXR1cm4gYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMudGl0bGV9XCI+PHNwYW4gJHthdHRyID8gYXR0ciA6ICcnfSBjbGFzcz1cIiR7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzLnZhbFxuICAgICAgICAgICAgfSAke2F0dHJDbGFzcyA/IGF0dHJDbGFzcyA6ICcnfVwiPjxzcGFuIGNsYXNzPVwiJHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzZXMuY29udGVudFxuICAgICAgICAgICAgfSR7Y3VzdG9tQ2xhc3N9XCI+JHt0aXRsZVZhbH08L3NwYW4+PC9zcGFuPjwvYnV0dG9uPmA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZ2V0IG9wdGlvbnNcbiAgICBnZXRPcHRpb25zKHJlbGF0aXZlU2VsKSB7XG4gICAgICAgIGNvbnN0IHNlbFNjcm9sbCA9IHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtc2Nyb2xsJykgPyBgZGF0YS1zaW1wbGViYXJgIDogJyc7XG4gICAgICAgIGxldCBzZWxTY3JvbGxIZWlnaHQgPSByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbFNjcm9sbFxuICAgICAgICAgICAgPyBgc3R5bGU9XCJtYXgtaGVpZ2h0OiR7d2luZG93LmlubmVyV2lkdGggPiA3NjggPyByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbFNjcm9sbCA6IDIyfXJlbVwiYFxuICAgICAgICAgICAgOiAnJztcbiAgICAgICAgbGV0IHNlbE9wdGlvbnMgPSBBcnJheS5mcm9tKHJlbGF0aXZlU2VsLm9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChzZWxPcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHNlbE9wdGlvbnNIVE1MID0gYGA7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAodGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkgJiYgIXRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLnNob3cpIHx8XG4gICAgICAgICAgICAgICAgcmVsYXRpdmVTZWwubXVsdGlwbGVcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHNlbE9wdGlvbnMgPSBzZWxPcHRpb25zLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsT3B0aW9uc0hUTUwgKz0gc2VsU2Nyb2xsXG4gICAgICAgICAgICAgICAgPyBgPGRpdiAke3NlbFNjcm9sbH0gJHtzZWxTY3JvbGxIZWlnaHR9IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuc2Nyb2xsfVwiPmBcbiAgICAgICAgICAgICAgICA6ICcnO1xuICAgICAgICAgICAgc2VsT3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzZWxPcHRpb25zSFRNTCArPSB0aGlzLmdldE9wdGlvbihvcHRpb24sIHJlbGF0aXZlU2VsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsT3B0aW9uc0hUTUwgKz0gc2VsU2Nyb2xsID8gYDwvZGl2PmAgOiAnJztcbiAgICAgICAgICAgIHJldHVybiBzZWxPcHRpb25zSFRNTDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBnZXQgb3B0aW9uXG4gICAgZ2V0T3B0aW9uKG9wdGlvbiwgcmVsYXRpdmVTZWwpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IG9wdGlvbi5zZWxlY3RlZCAmJiByZWxhdGl2ZVNlbC5tdWx0aXBsZSA/IGAgJHt0aGlzLmNsYXNzZXMuc2VsZWN0ZWR9YCA6ICcnO1xuICAgICAgICBjb25zdCBzaG93U2VsZWN0aW9uID1cbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCAmJiAhcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNob3ctc2VsZWN0aW9uJykgJiYgIXJlbGF0aXZlU2VsLm11bHRpcGxlXG4gICAgICAgICAgICAgICAgPyBgaGlkZGVuYFxuICAgICAgICAgICAgICAgIDogYGA7XG4gICAgICAgIGNvbnN0IG9wdGlvbkNsYXNzID0gb3B0aW9uLmRhdGFzZXQub3B0Q2xhc3MgPyBgICR7b3B0aW9uLmRhdGFzZXQub3B0Q2xhc3N9YCA6ICcnO1xuICAgICAgICBjb25zdCBvcHRpb25MaW5rID0gb3B0aW9uLmRhdGFzZXQub3B0aW9uTGluayA/IG9wdGlvbi5kYXRhc2V0Lm9wdGlvbkxpbmsgOiBmYWxzZTtcbiAgICAgICAgY29uc3Qgb3B0aW9uTGlua1RhcmdldCA9IG9wdGlvbi5oYXNBdHRyaWJ1dGUoJ2RhdGEtb3B0aW9uLWxpbmstdGFyZ2V0JykgPyBgdGFyZ2V0PVwiX2JsYW5rXCJgIDogJyc7XG4gICAgICAgIGxldCBvcHRpb25IVE1MID0gYGA7XG5cbiAgICAgICAgb3B0aW9uSFRNTCArPSBvcHRpb25MaW5rXG4gICAgICAgICAgICA/IGA8YSAke29wdGlvbkxpbmtUYXJnZXR9ICR7c2hvd1NlbGVjdGlvbn0gaHJlZj1cIiR7b3B0aW9uTGlua31cIiBkYXRhLW9wdC12YWw9XCIke29wdGlvbi52YWx1ZX1cIiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLm9wdGlvbn0ke29wdGlvbkNsYXNzfSR7c2VsZWN0aW9uc31cIj5gXG4gICAgICAgICAgICA6IGA8YnV0dG9uICR7c2hvd1NlbGVjdGlvbn0gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5vcHRpb259JHtvcHRpb25DbGFzc30ke3NlbGVjdGlvbnN9XCIgZGF0YS1vcHQtdmFsPVwiJHtvcHRpb24udmFsdWV9XCIgdHlwZT1cImJ1dHRvblwiPmA7XG4gICAgICAgIG9wdGlvbkhUTUwgKz0gdGhpcy5nZXRDb250ZW50KG9wdGlvbik7XG4gICAgICAgIG9wdGlvbkhUTUwgKz0gb3B0aW9uTGluayA/IGA8L2E+YCA6IGA8L2J1dHRvbj5gO1xuICAgICAgICByZXR1cm4gb3B0aW9uSFRNTDtcbiAgICB9XG4gICAgLy8gZ2V0IHNlbGVjdCBjb250ZW50XG4gICAgZ2V0Q29udGVudChvcHRpb24pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uRGF0YSA9IG9wdGlvbi5kYXRhc2V0Lm9wdEFzc2V0ID8gYCR7b3B0aW9uLmRhdGFzZXQub3B0QXNzZXR9YCA6ICcnO1xuICAgICAgICBjb25zdCBvcHRpb25EYXRhSFRNTCA9XG4gICAgICAgICAgICBvcHRpb25EYXRhLmluZGV4T2YoJ2ltZycpID49IDAgPyBgPGltZyBzcmM9XCIke29wdGlvbkRhdGF9XCIgYWx0PVwiXCI+YCA6IG9wdGlvbkRhdGE7XG4gICAgICAgIGxldCBvcHRpb25Db250ZW50SFRNTCA9IGBgO1xuXG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5ncm91cH1cIj5gIDogJyc7XG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5hc3NldH1cIj5gIDogJyc7XG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBvcHRpb25EYXRhSFRNTCA6ICcnO1xuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDwvc3Bhbj5gIDogJyc7XG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy50eHR9XCI+YCA6ICcnO1xuICAgICAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb24udGV4dENvbnRlbnQ7XG4gICAgICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPC9zcGFuPmAgOiAnJztcbiAgICAgICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8L3NwYW4+YCA6ICcnO1xuICAgICAgICByZXR1cm4gb3B0aW9uQ29udGVudEhUTUw7XG4gICAgfVxuICAgIC8vIGdldCBzZWxlY3QgcGxhY2Vob2xkZXJcbiAgICBnZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkge1xuICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IEFycmF5LmZyb20ocmVsYXRpdmVTZWwub3B0aW9ucykuZmluZCgob3B0aW9uKSA9PiAhb3B0aW9uLnZhbHVlKTtcblxuICAgICAgICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnN1YnRpdGxlKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHBsYWNlaG9sZGVyLnRleHRDb250ZW50LFxuICAgICAgICAgICAgICAgIHNob3c6IHBsYWNlaG9sZGVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtcGgtc2hvdycpLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHBsYWNlaG9sZGVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtcGgnKSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcGxhY2Vob2xkZXIuZGF0YXNldC5vcHRQbGFjZWhvbGRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZ2V0IHNlbGVjdGVkIG9wdGlvbnMgZGF0YVxuICAgIGdldERhdGEocmVsYXRpdmVTZWwpIHtcbiAgICAgICAgbGV0IHNlbGVjdGlvbnMgPSBbXTtcblxuICAgICAgICBpZiAocmVsYXRpdmVTZWwubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbnMgPSBBcnJheS5mcm9tKHJlbGF0aXZlU2VsLm9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpXG4gICAgICAgICAgICAgICAgLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24uc2VsZWN0ZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0aW9ucy5wdXNoKHJlbGF0aXZlU2VsLm9wdGlvbnNbcmVsYXRpdmVTZWwuc2VsZWN0ZWRJbmRleF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50czogc2VsZWN0aW9ucy5tYXAoKG9wdGlvbikgPT4gb3B0aW9uKSxcbiAgICAgICAgICAgIHZhbHVlczogc2VsZWN0aW9ucy5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlKS5tYXAoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlKSxcbiAgICAgICAgICAgIGh0bWw6IHNlbGVjdGlvbnMubWFwKChvcHRpb24pID0+IHRoaXMuZ2V0Q29udGVudChvcHRpb24pKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIHNlbGVjdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gaW5pdCBzZWxlY3Rpb25zXG4gICAgaW5pdFNlbGVjdGlvbnMoZSkge1xuICAgICAgICBjb25zdCByZWxhdGl2ZVNlbCA9IGUudGFyZ2V0O1xuXG4gICAgICAgIHRoaXMuYnVpbGQocmVsYXRpdmVTZWwpO1xuICAgICAgICB0aGlzLnNldFNlbGVjdGlvbnMocmVsYXRpdmVTZWwpO1xuICAgIH1cbiAgICAvLyBzZXQgc2VsZWN0aW9uc1xuICAgIHNldFNlbGVjdGlvbnMocmVsYXRpdmVTZWwpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudDtcblxuICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXN1Ym1pdCcpICYmIHJlbGF0aXZlU2VsLnZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgdGVtcEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgdGVtcEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgICAgICAgICByZWxhdGl2ZVNlbC5jbG9zZXN0KCdmb3JtJykuYXBwZW5kKHRlbXBCdXR0b24pO1xuICAgICAgICAgICAgdGVtcEJ1dHRvbi5jbGljaygpO1xuICAgICAgICAgICAgdGVtcEJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmZpbGxlZCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xuICAgIH1cbiAgICAvLyBjdXN0b20gc2VsZWN0IGV2ZW50IChsaXN0ZW4gdG8gYW55IHNlbGVjdGlvbnMgLyBtdXRhdGlvbnMpXG4gICAgc2VsZWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudCgnc2VsZWN0aW9uJywge1xuICAgICAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3Q6IHJlbGF0aXZlU2VsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG59XG5uZXcgU2VsZWN0KHt9KTtcbiIsIi8qKlxuICogc2V0IGhhc2ggdG8gdXJsXG4gKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICovXG5leHBvcnQgY29uc3Qgc2V0SGFzaCA9IGhhc2ggPT4ge1xuICBoYXNoID0gaGFzaCA/IGAjJHtoYXNofWAgOiB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnIycpWzBdO1xuICBoaXN0b3J5LnB1c2hTdGF0ZSgnJywgJycsIGhhc2gpO1xufTtcblxuLyoqXG4gKiBnZXQgaGFzaCBmcm9tIHVybFxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRIYXNoID0gKCkgPT4ge1xuICBpZiAobG9jYXRpb24uaGFzaCkge1xuICAgIHJldHVybiBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG4gIH1cbn07XG5cbi8vIGJvZHkgbG9ja1xuZXhwb3J0IGxldCBib2R5TG9ja1N0YXR1cyA9IHRydWU7XG4vKipcbiAqIHRvZ2dsZXMgYm9keSBsb2NrXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcbiAqL1xuZXhwb3J0IGNvbnN0IGJvZHlMb2NrVG9nZ2xlID0gKGRlbGF5ID0gNTAwKSA9PiB7XG4gIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2NrJykpIHtcbiAgICBib2R5VW5sb2NrKGRlbGF5KTtcbiAgfSBlbHNlIHtcbiAgICBib2R5TG9jayhkZWxheSk7XG4gIH1cbn07XG4vKipcbiAqIHVubG9ja3MgYm9keVxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5XG4gKi9cbmV4cG9ydCBjb25zdCBib2R5VW5sb2NrID0gKGRlbGF5ID0gNTAwKSA9PiB7XG4gIGlmIChib2R5TG9ja1N0YXR1cykge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKTtcbiAgICB9LCBkZWxheSk7XG4gICAgYm9keUxvY2tTdGF0dXMgPSBmYWxzZTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcbiAgICB9LCBkZWxheSk7XG4gIH1cbn07XG4vKipcbiAqIGxvY2tzIGJvZHlcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheVxuICovXG5leHBvcnQgY29uc3QgYm9keUxvY2sgPSAoZGVsYXkgPSA1MDApID0+IHtcbiAgaWYgKGJvZHlMb2NrU3RhdHVzKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xvY2snKTtcblxuICAgIGJvZHlMb2NrU3RhdHVzID0gZmFsc2U7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBib2R5TG9ja1N0YXR1cyA9IHRydWU7XG4gICAgfSwgZGVsYXkpO1xuICB9XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJheVxuICogQHBhcmFtIHtudW1iZXJ9IGRhdGFTZXRWYWx1ZVxuICogcHJvY2VzcyBtZWRpYSByZXF1ZXN0cyBmcm9tIGF0dHJpYnV0ZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGRhdGFNZWRpYVF1ZXJpZXMgPSAoYXJyYXksIGRhdGFTZXRWYWx1ZSkgPT4ge1xuICAvLyBnZXQgb2JqZWN0cyB3aXRoIG1lZGlhIHF1ZXJpZXNcbiAgY29uc3QgbWVkaWEgPSBBcnJheS5mcm9tKGFycmF5KS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0sIGluZGV4LCBzZWxmKSB7XG4gICAgaWYgKGl0ZW0uZGF0YXNldFtkYXRhU2V0VmFsdWVdKSB7XG4gICAgICByZXR1cm4gaXRlbS5kYXRhc2V0W2RhdGFTZXRWYWx1ZV0uc3BsaXQoJywnKVswXTtcbiAgICB9XG4gIH0pO1xuICAvLyBvYmplY3RzIHdpdGggbWVkaWEgcXVlcmllcyBpbml0aWFsaXphdGlvblxuICBpZiAobWVkaWEubGVuZ3RoKSB7XG4gICAgY29uc3QgYnJlYWtwb2ludHNBcnJheSA9IFtdO1xuICAgIG1lZGlhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb25zdCBwYXJhbXMgPSBpdGVtLmRhdGFzZXRbZGF0YVNldFZhbHVlXTtcbiAgICAgIGNvbnN0IGJyZWFrcG9pbnQgPSB7fTtcbiAgICAgIGNvbnN0IHBhcmFtc0FycmF5ID0gcGFyYW1zLnNwbGl0KCcsJyk7XG4gICAgICBicmVha3BvaW50LnZhbHVlID0gcGFyYW1zQXJyYXlbMF07XG4gICAgICBicmVha3BvaW50LnR5cGUgPSBwYXJhbXNBcnJheVsxXSA/IHBhcmFtc0FycmF5WzFdLnRyaW0oKSA6ICdtYXgnO1xuICAgICAgYnJlYWtwb2ludC5pdGVtID0gaXRlbTtcbiAgICAgIGJyZWFrcG9pbnRzQXJyYXkucHVzaChicmVha3BvaW50KTtcbiAgICB9KTtcbiAgICAvLyBnZXQgdW5pcXVlIGJyZWFrcG9pbnRzXG4gICAgbGV0IG1kUXVlcmllcyA9IGJyZWFrcG9pbnRzQXJyYXkubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAnKCcgK1xuICAgICAgICBpdGVtLnR5cGUgK1xuICAgICAgICAnLXdpZHRoOiAnICtcbiAgICAgICAgaXRlbS52YWx1ZSArXG4gICAgICAgICdweCksJyArXG4gICAgICAgIGl0ZW0udmFsdWUgK1xuICAgICAgICAnLCcgK1xuICAgICAgICBpdGVtLnR5cGVcbiAgICAgICk7XG4gICAgfSk7XG4gICAgbWRRdWVyaWVzID0gdW5pcXVlQXJyYXkobWRRdWVyaWVzKTtcbiAgICBjb25zdCBtZFF1ZXJpZXNBcnJheSA9IFtdO1xuXG4gICAgaWYgKG1kUXVlcmllcy5sZW5ndGgpIHtcbiAgICAgIC8vIHdvcmsgd2l0aCBldmVyeSBicmVha3BvaW50XG4gICAgICBtZFF1ZXJpZXMuZm9yRWFjaChicmVha3BvaW50ID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW1zQXJyYXkgPSBicmVha3BvaW50LnNwbGl0KCcsJyk7XG4gICAgICAgIGNvbnN0IG1lZGlhQnJlYWtwb2ludCA9IHBhcmFtc0FycmF5WzFdO1xuICAgICAgICBjb25zdCBtZWRpYVR5cGUgPSBwYXJhbXNBcnJheVsyXTtcbiAgICAgICAgY29uc3QgbWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKHBhcmFtc0FycmF5WzBdKTtcbiAgICAgICAgLy8gb2JqZWN0cyB3aXRoIGNvbmRpdGlvbnNcbiAgICAgICAgY29uc3QgaXRlbXNBcnJheSA9IGJyZWFrcG9pbnRzQXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPT09IG1lZGlhQnJlYWtwb2ludCAmJiBpdGVtLnR5cGUgPT09IG1lZGlhVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbWRRdWVyaWVzQXJyYXkucHVzaCh7XG4gICAgICAgICAgaXRlbXNBcnJheSxcbiAgICAgICAgICBtYXRjaE1lZGlhLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1kUXVlcmllc0FycmF5O1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBzbW9vdGhseSBzbGlkZXMgdXBcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3dtb3JlXG4gKi9cbmV4cG9ydCBjb25zdCBfc2xpZGVVcCA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwLCBzaG93bW9yZSA9IDApID0+IHtcbiAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdfc2xpZGUnKTtcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2hlaWdodCwgbWFyZ2luLCBwYWRkaW5nJztcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBgJHt0YXJnZXQub2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xuICAgIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBzaG93bW9yZSA/IGAke3Nob3dtb3JlfXJlbWAgOiBgMGA7XG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gMDtcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0YXJnZXQuaGlkZGVuID0gIXNob3dtb3JlID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgIXNob3dtb3JlID8gdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKSA6IG51bGw7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJyk7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJyk7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKTtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpO1xuICAgICAgIXNob3dtb3JlID8gdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpIDogbnVsbDtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnX3NsaWRlJyk7XG4gICAgICAvLyBjcmVhdGUgZXZlbnRcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBDdXN0b21FdmVudCgnc2xpZGVVcERvbmUnLCB7XG4gICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9LCBkdXJhdGlvbik7XG4gIH1cbn07XG5cbi8qKlxuICogc21vb3RobHkgc2xpZGVzIGRvd25cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3dtb3JlXG4gKi9cbmV4cG9ydCBjb25zdCBfc2xpZGVEb3duID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDAsIHNob3dtb3JlID0gMCkgPT4ge1xuICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ19zbGlkZScpO1xuICAgIHRhcmdldC5oaWRkZW4gPSB0YXJnZXQuaGlkZGVuID8gZmFsc2UgOiBudWxsO1xuICAgIHNob3dtb3JlID8gdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKSA6IG51bGw7XG4gICAgbGV0IGhlaWdodCA9IHRhcmdldC5vZmZzZXRIZWlnaHQ7XG4gICAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHNob3dtb3JlID8gYCR7c2hvd21vcmV9cmVtYCA6IGAwYDtcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IDA7XG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xuICAgIHRhcmdldC5vZmZzZXRIZWlnaHQ7XG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdoZWlnaHQsIG1hcmdpbiwgcGFkZGluZyc7XG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJyk7XG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ19zbGlkZScpO1xuICAgICAgLy8gY3JlYXRlIGV2ZW50XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ3NsaWRlRG93bkRvbmUnLCB7XG4gICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9LCBkdXJhdGlvbik7XG4gIH1cbn07XG5cbi8qKlxuICogdG9nZ2xlcyBzbW9vdGggc2xpZGVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXG4gKiBAcmV0dXJucyBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgX3NsaWRlVG9nZ2xlID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDApID0+IHtcbiAgaWYgKHRhcmdldC5oaWRkZW4pIHtcbiAgICByZXR1cm4gX3NsaWRlRG93bih0YXJnZXQsIGR1cmF0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gX3NsaWRlVXAodGFyZ2V0LCBkdXJhdGlvbik7XG4gIH1cbn07XG5cbi8qKlxuICogY29udmVydHMgcmVtIHRvIHBpeGVsc1xuICogQHBhcmFtIHtudW1iZXJ9IHJlbVZhbHVlXG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbVRvUHgocmVtVmFsdWUpIHtcbiAgLy8g0J/QvtC70YPRh9Cw0LXQvCDRgtC10LrRg9GJ0LjQuSDQsdCw0LfQvtCy0YvQuSDRgNCw0LfQvNC10YAg0YjRgNC40YTRgtCwIChmb250LXNpemUpINC40Lcg0Y3Qu9C10LzQtdC90YLQsCA8aHRtbD5cbiAgdmFyIGh0bWxGb250U2l6ZSA9IHBhcnNlRmxvYXQoXG4gICAgZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmZvbnRTaXplXG4gICk7XG5cbiAgLy8g0J/QtdGA0LXQstC+0LTQuNC8INC30L3QsNGH0LXQvdC40LUg0LjQtyByZW0g0LIgcHhcbiAgdmFyIHB4VmFsdWUgPSByZW1WYWx1ZSAqIGh0bWxGb250U2l6ZTtcblxuICAvLyDQntC60YDRg9Cz0LvRj9C10Lwg0LfQvdCw0YfQtdC90LjQtSDQtNC+INGG0LXQu9GL0YUg0L/QuNC60YHQtdC70LXQuSAo0L/QviDQttC10LvQsNC90LjRjilcbiAgcmV0dXJuIE1hdGgucm91bmQocHhWYWx1ZSkgKyAncHgnO1xufVxuXG4vLyByZW1vdmUgY2xhc3MgZnJvbSBhbGwgYXJyYXkgZWxlbWVudHNcbmV4cG9ydCBjb25zdCByZW1vdmVDbGFzc2VzID0gKGFycmF5LCBjbGFzc05hbWUpID0+IHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGFycmF5W2ldLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfVxufTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRXVjbGlkIENpcmN1bGFyIEFcIjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgc3JjOiB1cmwoXCIuL2Fzc2V0cy9mb250cy9FdWNsaWQtQ2lyY3VsYXItQS1MaWdodC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJFdWNsaWQgQ2lyY3VsYXIgQVwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChcIi4vYXNzZXRzL2ZvbnRzL0V1Y2xpZC1DaXJjdWxhci1BLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRXVjbGlkIENpcmN1bGFyIEFcIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiB1cmwoXCIuL2Fzc2V0cy9mb250cy9FdWNsaWQtQ2lyY3VsYXItQS1NZWRpdW0ud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRXVjbGlkIENpcmN1bGFyIEFcIjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgc3JjOiB1cmwoXCIuL2Fzc2V0cy9mb250cy9FdWNsaWQtQ2lyY3VsYXItQS1TZW1pQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJFdWNsaWQgQ2lyY3VsYXIgQVwiO1xuICBmb250LXdlaWdodDogNzAwO1xuICBzcmM6IHVybChcIi4vYXNzZXRzL2ZvbnRzL0V1Y2xpZC1DaXJjdWxhci1BLUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU3BhY2UgQWdlXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKFwiLi9hc3NldHMvZm9udHMvU3BhY2UtQWdlLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNwYWNlIEFnZSBDeXJpbGxpY1wiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChcIi4vYXNzZXRzL2ZvbnRzL1NwYWNlLUFnZS1DeXJpbGxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJFdXJvcGVFeHRlbmRlZENcIjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoXCIuL2Fzc2V0cy9mb250cy9FdXJvcGUtRXh0ZW5kZWQtQy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwge1xuICBmb250LWZhbWlseTogXCJFdWNsaWQgQ2lyY3VsYXIgQVwiO1xuICBmb250LXNpemU6IDAuNTIwODMzNXZ3O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBidWdmaXggaW5maW5pdGUgMXM7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYnVnZml4IGluZmluaXRlIDFzO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxNjUzO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGJ1Z2ZpeCBpbmZpbml0ZSAxcztcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmEge1xuICBjb2xvcjogdW5zZXQ7XG59XG5cbmEsXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5idXR0b24sXG5pbnB1dCxcbmEsXG50ZXh0YXJlYSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udDogaW5oZXJpdDtcbn1cbmJ1dHRvbjpmb2N1cyxcbmlucHV0OmZvY3VzLFxuYTpmb2N1cyxcbnRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmJ1dHRvbjphY3RpdmUsXG5pbnB1dDphY3RpdmUsXG5hOmFjdGl2ZSxcbnRleHRhcmVhOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxucCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250OiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxudWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbnVsIGxpIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDE2MHJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cblxuc3ZnLFxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbmh0bWwubG9jayxcbmh0bWwubG9jayBib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxubWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi53cmFwcGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogMTkyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMi4zcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5oZWFkZXJfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhlYWRlcl9fYnVyZ2VyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oZWFkZXJfX2xvZ28ge1xuICBtYXgtd2lkdGg6IDE3LjhyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUuN3JlbTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaGVhZGVyX19sb2dvIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5oZWFkZXJfX21lbnUtY29udGFjdHMge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhlYWRlcl9fbmF2LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDYuM3JlbTtcbn1cbi5oZWFkZXJfX25hdi1pdGVtLWljb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhlYWRlcl9fbmF2LWl0ZW0tZHJvcGRvd24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhlYWRlcl9fbmF2LWl0ZW0tbGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogM3JlbTtcbiAgdHJhbnNpdGlvbjogMC4zcyBjb2xvciBlYXNlO1xufVxuLmhlYWRlcl9fbmF2LWl0ZW0tbGluazpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjkpO1xufVxuLmhlYWRlcl9fY29udGFjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEuN3JlbTtcbn1cbi5oZWFkZXJfX2NvbnRhY3RzOmhvdmVyIC5oZWFkZXJfX2NvbnRhY3RzLXRpdGxlIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OSk7XG59XG4uaGVhZGVyX19jb250YWN0czpob3ZlciBzdmcgcGF0aCB7XG4gIHN0cm9rZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY5KTtcbn1cbi5oZWFkZXJfX2NvbnRhY3RzLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcbn1cbi5oZWFkZXJfX2NvbnRhY3RzIHN2ZyB7XG4gIG1heC13aWR0aDogMi40cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyLjRyZW07XG59XG4uaGVhZGVyX19jb250YWN0cyBzdmcgcGF0aCB7XG4gIHRyYW5zaXRpb246IDAuM3Mgc3Ryb2tlIGVhc2U7XG59XG4uaGVhZGVyIC5oYW1idXJnZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiA0LjZyZW07XG4gIGhlaWdodDogMy42cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGVhZGVyIC5oYW1idXJnZXIgc3BhbiwgLmhlYWRlciAuaGFtYnVyZ2VyOjpiZWZvcmUsIC5oZWFkZXIgLmhhbWJ1cmdlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRyYW5zaXRpb246IHRvcCAwLjNzIGVhc2UsIHdpZHRoIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm90dG9tIDAuM3MgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbn1cbi5oZWFkZXIgLmhhbWJ1cmdlcjo6YmVmb3JlIHtcbiAgdG9wOiAwO1xufVxuLmhlYWRlciAuaGFtYnVyZ2VyOjphZnRlciB7XG4gIGJvdHRvbTogMDtcbn1cbi5oZWFkZXIgLmhhbWJ1cmdlciBzcGFuIHtcbiAgdG9wOiBjYWxjKDUwJSAtIDFweCk7XG59XG4uX21lbnUtb3BlbmVkIC5oZWFkZXIgLmhhbWJ1cmdlciBzcGFuIHtcbiAgd2lkdGg6IDA7XG59XG4uX21lbnUtb3BlbmVkIC5oZWFkZXIgLmhhbWJ1cmdlcjo6YmVmb3JlIHtcbiAgdG9wOiBjYWxjKDUwJSAtIDFweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4uX21lbnUtb3BlbmVkIC5oZWFkZXIgLmhhbWJ1cmdlcjo6YWZ0ZXIge1xuICBib3R0b206IGNhbGMoNTAlIC0gMXB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLl9tZW51LW9wZW5lZCAuaGVhZGVyIC5oYW1idXJnZXIgc3BhbiwgLl9tZW51LW9wZW5lZCAuaGVhZGVyIC5oYW1idXJnZXI6OmJlZm9yZSwgLl9tZW51LW9wZW5lZCAuaGVhZGVyIC5oYW1idXJnZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmZvb3RlciB7XG4gIHBhZGRpbmctYm90dG9tOiA3LjhyZW07XG59XG4uZm9vdGVyX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mb290ZXJfX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuOHJlbTtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbn1cbi5mb290ZXJfX2xpc3Q6bGFzdC1jaGlsZCAuZm9vdGVyX19pdGVtOmxhc3QtY2hpbGQgYSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uZm9vdGVyX19pdGVtIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcbn1cbi5mb290ZXJfX2l0ZW0gYTpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjkpO1xufVxuLmZvb3Rlcl9fbWlkZGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb290ZXJfX2xvZ28ge1xuICBtYXgtd2lkdGg6IDEwLjlyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEzcmVtO1xuICBtYXJnaW4tYm90dG9tOiA2LjFyZW07XG59XG4uZm9vdGVyX19jb250YWN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMi4ycmVtO1xufVxuLmZvb3Rlcl9fY29udGFjdCBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcbn1cbi5mb290ZXJfX2NvbnRhY3QgYTpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjkpO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogXCJTcGFjZSBBZ2VcIjtcbiAgZm9udC1zaXplOiA5cmVtO1xufVxuXG4uc3VidGl0bGUge1xuICBmb250LWZhbWlseTogXCJTcGFjZSBBZ2VcIjtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4udHh0MzAge1xuICBmb250LXNpemU6IDNyZW07XG59XG5cbi50eHQxNiB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uY3lyIHtcbiAgZm9udC1mYW1pbHk6IFwiU3BhY2UgQWdlIEN5cmlsbGljXCI7XG59XG5cbi5idG4ge1xuICBwYWRkaW5nOiAwLjZyZW0gMC42cmVtIDAuNnJlbSAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAycmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzgpO1xuICBib3JkZXItcmFkaXVzOiAwIDRyZW0gNHJlbSA0cmVtO1xufVxuLmJ0bl9fdGV4dCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uYnRuX19hcnJvdy13cmFwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAwIDAgNHJlbTtcbiAgd2lkdGg6IDQuNHJlbTtcbiAgaGVpZ2h0OiA0LjRyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5idG5fX2Fycm93LWljb24ge1xuICB3aWR0aDogMi40cmVtO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1lbWFpbF0sXG5pbnB1dFt0eXBlPXRlbF0sXG50ZXh0YXJlYSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xufVxuXG50ZXh0YXJlYTpmb2N1cyxcbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA0LjZyZW0gMi43cmVtIDJyZW0gMi43cmVtO1xuICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XG59XG4uaW5wdXRfdGV4dGFyZWEge1xuICBoZWlnaHQ6IDI1LjVyZW07XG59XG4uaW5wdXRfdGV4dGFyZWEgdGV4dGFyZWEge1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHJlc2l6ZTogbm9uZTtcbn1cbi5pbnB1dF9fZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4uaW5wdXRfX2ZpZWxkOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmlucHV0X19sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxLjhyZW07XG4gIGxlZnQ6IDIuN3JlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3BhY2l0eTogMC41O1xufVxuLnNlbGVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWxlY3RfX2JvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VsZWN0X190aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNlbGVjdF9fdmFsdWUge1xuICBwYWRkaW5nOiAxLjNyZW0gMS4zcmVtIDEuM3JlbSAyLjdyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAycmVtO1xuICBoZWlnaHQ6IDcuMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VsZWN0X192YWx1ZSA+ICoge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi5zZWxlY3RfX3ZhbHVlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMCAwIDVyZW07XG4gIHdpZHRoOiA1cmVtO1xuICBoZWlnaHQ6IDVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvaWNvbnMvYXJyLXdoaXRlLnN2Zyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMi40cmVtO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG4uc2VsZWN0X192YWx1ZS5fc2VsZWN0LWxhYmVsOjpiZWZvcmUge1xuICBjb250ZW50OiBhdHRyKGRhdGEtc2VsLWxhYmVsKTtcbn1cbi5fc2VsZWN0LWZpbGxlZCAuc2VsZWN0X192YWx1ZS5fc2VsZWN0LWxhYmVsOjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNlbGVjdF9fdmFsdWUuX3NlbGVjdC1sYWJlbDo6YmVmb3JlLFxuLnNlbGVjdF9fdmFsdWUgLnNlbGVjdF9fY29udGVudCB7XG4gIG1heC13aWR0aDogMzEuNHJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uc2VsZWN0X19jb250ZW50Om5vdCguX3NlbGVjdC1maWxsZWQgLnNlbGVjdF9fY29udGVudCkge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNlbGVjdF9fdGV4dCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLnNlbGVjdF9faW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5zZWxlY3RfX29wdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogY2FsYygxMDAlIC0gM3JlbSk7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDQuNnJlbSAyLjdyZW0gMi40cmVtIDIuN3JlbTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwIDAgM3JlbSAzcmVtO1xuICBiYWNrZ3JvdW5kOiAjMzYzOTZjO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XG59XG4uc2VsZWN0X19zY3JvbGwge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG1heC1oZWlnaHQ6IDE5cmVtO1xufVxuLnNlbGVjdF9fc2Nyb2xsLnNpbXBsZWJhci1zY3JvbGxhYmxlLXkgLnNpbXBsZWJhci10cmFjay5zaW1wbGViYXItdmVydGljYWwge1xuICByaWdodDogMS4ycmVtO1xuICB3aWR0aDogMC40cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU3ZWU7XG59XG4uc2VsZWN0X19zY3JvbGwuc2ltcGxlYmFyLXNjcm9sbGFibGUteSAuc2ltcGxlYmFyLXNjcm9sbGJhciB7XG4gIG1pbi1oZWlnaHQ6IDMuMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTJhZGMxO1xufVxuLnNlbGVjdF9fb3B0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcbn1cbi5zZWxlY3RfX29wdGlvbjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuLnNlbGVjdF9fb3B0aW9uLl9zZWxlY3Qtc2VsZWN0ZWQge1xuICBjb2xvcjogIzI5ZmY3Zjtcbn1cbi5zZWxlY3RfX2dyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG59XG4uc2VsZWN0X19oaW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoMTAwJSArIDAuOHJlbSk7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBsaW5lLWhlaWdodDogMTQyLjg1NyU7XG59XG4uc2VsZWN0X19zdWJ0aXRsZSB7XG4gIGN1cnNvcjogdGV4dDtcbn1cbi5zZWxlY3QuX3NlbGVjdC1vcGVuZWQge1xuICB6LWluZGV4OiA1O1xufVxuLnNlbGVjdC5fc2VsZWN0LW9wZW5lZCAuc2VsZWN0X192YWx1ZTo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbn1cbi5fc2VsZWN0LWxpc3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iYWRnZSB7XG4gIHBhZGRpbmc6IDFyZW0gM3JlbSAxcmVtIDFyZW07XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAyLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xufVxuLmJhZGdlLl9hY3RpdmUge1xuICBjb2xvcjogIzE0MGEzZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5iYWRnZS5fYWN0aXZlIC5iYWRnZV9faWNvbi13cmFwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MjY3ODtcbn1cbi5iYWRnZS5fYWN0aXZlIC5iYWRnZV9faWNvbi13cmFwOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2ljb25zL3N0YXItYWN0aXZlLnN2Zyk7XG59XG4uYmFkZ2VfX2ljb24td3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMCAwIDQuNXJlbTtcbiAgd2lkdGg6IDQuNXJlbTtcbiAgaGVpZ2h0OiA0LjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XG59XG4uYmFkZ2VfX2ljb24td3JhcDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOHJlbTtcbiAgaGVpZ2h0OiA4cmVtO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2ljb25zL3N0YXIuc3ZnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLnR4dC1ncmVlbiB7XG4gIGNvbG9yOiAjMjlmZjdmO1xufVxuXG4uX21vYmlsZS1vbmx5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmludHJvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAtOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTAuNXJlbTtcbiAgcGFkZGluZy10b3A6IDQwcmVtO1xufVxuLmludHJvIC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaW50cm86OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMTAxNjUzIDAlLCByZ2JhKDIzLCAxNSwgNjcsIDApIDYzLjQ1JSk7XG4gIHotaW5kZXg6IC0xO1xuICBpbnNldDogMDtcbiAgYm90dG9tOiAtMC41cmVtO1xufVxuLmludHJvX19jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDExLjdyZW07XG59XG4uaW50cm9fX3RpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICBtYXJnaW4tYm90dG9tOiA1LjNyZW07XG59XG4ucHJvbW8tcGFnZSAuaW50cm9fX3RpdGxlIHtcbiAgbWF4LXdpZHRoOiAxMThyZW07XG59XG4uaW50cm9fX3Bvc3Rlci1pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuLmludHJvX19wb3N0ZXItaW1hZ2VfaGFzLWJhY2tkcm9wOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4uaW50cm9fX3Bvc3Rlci1pbWFnZSBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmludHJvX19yZXF1ZXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAzLjdyZW07XG59XG4uaW50cm9fX3JlcXVlc3QtcHJvamVjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEuOHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmludHJvX19yZXF1ZXN0LXByb2plY3RzOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTJyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDAuMnJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuLmludHJvX19yZXF1ZXN0LXByb2plY3RzLWNvdW50ZXIge1xuICBmbGV4OiAwIDAgNS44cmVtO1xuICB3aWR0aDogNS44cmVtO1xuICBoZWlnaHQ6IDUuOHJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMjlmZjdmO1xufVxuLmludHJvX19yZXF1ZXN0LXByb2plY3RzLWNvdW50ZXIgc3BhbiB7XG4gIGNvbG9yOiAjMWExYTFhO1xuICBmb250LWZhbWlseTogXCJTcGFjZSBBZ2UgQ3lyaWxsaWNcIjtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEuNnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmludHJvX19yZXF1ZXN0LXByb2plY3RzLXRpdGxlIHtcbiAgbWF4LXdpZHRoOiAyM3JlbTtcbn1cbi5pbnRyb19fYXJ0aWNsZXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoNTFyZW0sIDFmcikpO1xuICBnYXA6IDMuN3JlbTtcbiAgbWFyZ2luLXRvcDogNS45cmVtO1xufVxuLmludHJvX19hcnRpY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbnRyb19fYXJ0aWNsZSBhOmhvdmVyIHtcbiAgY29sb3I6ICMyOWZmN2Y7XG59XG4uaW50cm9fX2FydGljbGUtbGluayB7XG4gIHBhZGRpbmc6IDEuMXJlbSA2cmVtIDEuMXJlbSA0LjFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAycmVtO1xufVxuLmludHJvX19hcnRpY2xlLWxpbmstdGl0bGUge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBtYXgtd2lkdGg6IDE4cmVtO1xuICB0cmFuc2l0aW9uOiAwLjNzIGNvbG9yIGVhc2U7XG59XG4uaW50cm9fX2FydGljbGUtbGluay1pbWFnZSB7XG4gIG1heC13aWR0aDogMjAuMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAuMnJlbTtcbiAgZmxleDogMCAwIDIwLjJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5pbnRyb19fYXJ0aWNsZS1saW5rLWltYWdlIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uaW50cm9fX2FydGljbGUtbGluay1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFyZW07XG4gIHJpZ2h0OiAxLjNyZW07XG4gIHBhZGRpbmc6IDAuNnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcbiAgbWF4LXdpZHRoOiA0LjZyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQuNnJlbTtcbn1cbi5pbnRyb19fYXJ0aWNsZS1saW5rLWljb25faGFzLW51bWJlciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xufVxuLmludHJvX19hcnRpY2xlLWxpbmstaWNvbiBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wcm9tb3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAzMXJlbTtcbn1cbi5wcm9tb3Rpb25fX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwIDEuNXJlbSAwIDIuOXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb21vdGlvbl9fY29udGVudDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiM1wiO1xuICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwLjVyZW07XG4gIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IHJnYmEoNDEsIDI1NSwgMTI3LCAwLjEpO1xuICBmb250LWZhbWlseTogXCJTcGFjZSBBZ2UgQ3lyaWxsaWNcIjtcbiAgZm9udC1zaXplOiA3MHJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzEwMTY1MztcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRvcDogLTM0cmVtO1xuICB6LWluZGV4OiAtMTtcbn1cbi5wcm9tb3Rpb25fX2Jsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5wcm9tb3Rpb25fX2Jsb2NrOm50aC1jaGlsZChldmVuKSB7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbi5wcm9tb3Rpb25fX2Jsb2NrOm50aC1jaGlsZChldmVuKSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMzRyZW07XG59XG4ucHJvbW90aW9uX19zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi5tYXJrZXRpbmcge1xuICBtYXJnaW4tYm90dG9tOiAyOXJlbTtcbn1cbi5tYXJrZXRpbmdfX2ltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMTUuMnJlbTtcbiAgdG9wOiAtMTJyZW07XG4gIG1heC13aWR0aDogNzRyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1hcmtldGluZ19fY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubWFya2V0aW5nX190aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDQuOHJlbTtcbn1cbi5tYXJrZXRpbmdfX2luZm8ge1xuICBtYXgtd2lkdGg6IDUxcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDIxcmVtO1xufVxuLm1hcmtldGluZ19faW5mby1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiA0LjFyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbn1cbi5tYXJrZXRpbmdfX2luZm8tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFya2V0aW5nX19pbmZvLWl0ZW0ge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogM3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1hcmtldGluZ19faW5mby1pdGVtOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDAuNXJlbTtcbiAgaGVpZ2h0OiAwLjVyZW07XG4gIHRvcDogMS41cmVtO1xuICBsZWZ0OiAtMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuLm1hcmtldGluZ19faW5mby1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIG1heC13aWR0aDogMjEuN3JlbTtcbn1cblxuLmJlbmVmaXRzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTcuN3JlbTtcbn1cbi5iZW5lZml0c19fY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgzNy40cmVtLCAxZnIpKTtcbiAgZ2FwOiAzLjZyZW07XG59XG4uYmVuZWZpdHNfX2FydGljbGUge1xuICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIHBhZGRpbmc6IDMuOHJlbSAyLjJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYmVuZWZpdHNfX2FydGljbGUtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDEuNnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmJlbmVmaXRzX19hcnRpY2xlLWhlYWRpbmctdGl0bGUge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAyMi42cmVtO1xuICB3aWR0aDogMTAwJTtcbn1cbi5iZW5lZml0c19fYXJ0aWNsZS1oZWFkaW5nLWNvdW50ZXIge1xuICBjb2xvcjogIzExMDczYjtcbiAgZm9udC1zaXplOiA2cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG4uYmVuZWZpdHNfX2FydGljbGUtcG9zdGVyIHtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBiYWNrZ3JvdW5kOiAjMTAxNjUzO1xuICBoZWlnaHQ6IDIxLjlyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cbi5iZW5lZml0c19fYXJ0aWNsZS1wb3N0ZXItaW1hZ2Uge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBtYXgtd2lkdGg6IDI4cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHJlbTtcbn1cbi5iZW5lZml0c19fYXJ0aWNsZS1wb3N0ZXItaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5iZW5lZml0c19fYXJ0aWNsZS1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XG59XG5cbi5wb3J0Zm9saW8ge1xuICBtYXJnaW4tYm90dG9tOiAxOC41cmVtO1xufVxuLnBvcnRmb2xpb19faGVhZGluZyB7XG4gIG1hcmdpbi1ib3R0b206IDYuM3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDJyZW07XG59XG4ucG9ydGZvbGlvX19saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDc4LjRyZW0sIDFmcikpO1xuICBnYXA6IDMuNnJlbSAzLjNyZW07XG4gIG1hcmdpbi1ib3R0b206IDYuNnJlbTtcbn1cbi5wb3J0Zm9saW9fX2l0ZW0gYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMy4zcmVtO1xuICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIHBhZGRpbmc6IDIuMnJlbTtcbn1cbi5wb3J0Zm9saW9fX2l0ZW0gYTpob3ZlciAucG9ydGZvbGlvX19pdGVtLXRleHQge1xuICBjb2xvcjogIzI5ZmY3Zjtcbn1cbi5wb3J0Zm9saW9fX2l0ZW0gYTpob3ZlciAucG9ydGZvbGlvX19pdGVtLWltYWdlIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi5wb3J0Zm9saW9fX2l0ZW0taW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM2LjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wb3J0Zm9saW9fX2l0ZW0taW1hZ2UgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybSBlYXNlO1xufVxuLnBvcnRmb2xpb19faXRlbS1ib3R0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5wb3J0Zm9saW9fX2l0ZW0tdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcbn1cbi5wb3J0Zm9saW9fX2l0ZW0tdGV4dCBzcGFuIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnBvcnRmb2xpb19faXRlbS1pY29uIHtcbiAgcGFkZGluZzogMC42cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xuICBtYXgtd2lkdGg6IDQuNnJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNC42cmVtO1xufVxuLnBvcnRmb2xpb19faXRlbS1pY29uIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5wb3J0Zm9saW9fX2xpbmsge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG5maWd1cmUge1xuICBtYXJnaW46IDA7XG59XG5cbmJvZHk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC44cyBlYXNlIDBzO1xufVxuLl9tZW51LW9wZW5lZCBib2R5OjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDguMDFlbSkge1xuICAubW9iaWxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xuICAuZm9vdGVyX19saXN0Omxhc3QtY2hpbGQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgfVxuICAudHh0MjUge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiA1cHg7XG4gICAgZm9udC1zaXplOiAxLjU2MjV2dztcbiAgICBmb250LXNpemU6IDEuMzMzMzMzMzMzM3Z3O1xuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcbiAgfVxuICBib2R5IHtcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyLjhyZW07XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAzLjJyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmhlYWRlciB7XG4gICAgcGFkZGluZy10b3A6IDMuNnJlbTtcbiAgfVxuICAuaGVhZGVyX19jb250ZW50IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XG4gICAgZ2FwOiAxNnJlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGdhcCBlYXNlO1xuICB9XG4gIC5fbWVudS1vcGVuZWQgLmhlYWRlcl9fY29udGVudCB7XG4gICAgZ2FwOiAxMS42cmVtO1xuICB9XG4gIC5fbWVudS1vcGVuZWQgLmhlYWRlcl9fY29udGVudDo6YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLmhlYWRlcl9fYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuaGVhZGVyX19sb2dvIHtcbiAgICBtYXgtd2lkdGg6IDI3cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOC42cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIC5oZWFkZXJfX21lbnUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDcuNHJlbSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2U7XG4gICAgYmFja2dyb3VuZDogIzEwMTY1MztcbiAgICBwYWRkaW5nOiAyMS40cmVtIDUuMnJlbSA4LjhyZW0gNy44cmVtO1xuICB9XG4gIC5fbWVudS1vcGVuZWQgLmhlYWRlcl9fbWVudSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgLmhlYWRlcl9fbWVudS1jb250YWN0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XG4gIH1cbiAgLmhlYWRlcl9fbWVudS1jb250YWN0cy1pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjRyZW07XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42Nyk7XG4gICAgZm9udC1zaXplOiAzLjJyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIH1cbiAgLmhlYWRlcl9fbWVudS1jb250YWN0cy1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgYm9yZGVyOiAwLjRyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4KTtcbiAgICBib3JkZXItcmFkaXVzOiAwcmVtIDI0cmVtIDI0cmVtIDI0cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG4gICAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gNHJlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGJvcmRlciBlYXNlO1xuICB9XG4gIC5oZWFkZXJfX21lbnUtY29udGFjdHMtYnV0dG9uOmFjdGl2ZSB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIH1cbiAgLmhlYWRlcl9fbWVudS1jb250YWN0cy1idXR0b246YWN0aXZlIHNwYW4ge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjkpO1xuICB9XG4gIC5oZWFkZXJfX21lbnUtY29udGFjdHMtYnV0dG9uOmFjdGl2ZSAuaGVhZGVyX19tZW51LWNvbnRhY3RzLWJ1dHRvbi1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjkpO1xuICB9XG4gIC5oZWFkZXJfX21lbnUtY29udGFjdHMtYnV0dG9uIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBjb2xvciBlYXNlO1xuICB9XG4gIC5oZWFkZXJfX21lbnUtY29udGFjdHMtYnV0dG9uLWljb24ge1xuICAgIHBhZGRpbmc6IDEuNHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBtYXgtd2lkdGg6IDYuOHJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYuOHJlbTtcbiAgfVxuICAuaGVhZGVyX19tZW51LWNvbnRhY3RzLWJ1dHRvbi1pY29uIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5oZWFkZXJfX25hdiB7XG4gICAgbWF4LWhlaWdodDogMTAxcmVtO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5oZWFkZXJfX25hdi1saXN0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogNy4ycmVtO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS4tLWFjdGl2ZSBhIHtcbiAgICBjb2xvcjogIzI5ZmY3ZjtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS1oZWFkaW5nIHtcbiAgICB3aWR0aDogOTglO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtLWhlYWRpbmcuLS1hY3RpdmUgLmhlYWRlcl9fbmF2LWl0ZW0taWNvbiB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIH1cbiAgLmhlYWRlcl9fbmF2LWl0ZW0taGVhZGluZy4tLWFjdGl2ZSB+IC5oZWFkZXJfX25hdi1pdGVtLWRyb3Bkb3duIHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS1oZWFkaW5nLi0tYWN0aXZlIH4gLmhlYWRlcl9fbmF2LWl0ZW0tZHJvcGRvd24gLmhlYWRlcl9fbmF2LWl0ZW0tZHJvcGRvd24td3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS1oZWFkaW5nIGEge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtLWljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtIGVhc2U7XG4gIH1cbiAgLmhlYWRlcl9fbmF2LWl0ZW0tZHJvcGRvd24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwZnI7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBncmlkLXRlbXBsYXRlLXJvd3MgZWFzZTtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS1kcm9wZG93bi13cmFwcGVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IDAuM3MgbWFyZ2luIGVhc2U7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQuOHJlbTtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS1kcm9wZG93bi1pdGVtIHtcbiAgICBmb250LXNpemU6IDMuMnJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgfVxuICAuaGVhZGVyX19uYXYtaXRlbS1kcm9wZG93bi1pdGVtOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICB9XG4gIC5oZWFkZXJfX25hdi1pdGVtLWxpbmsge1xuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICB9XG4gIC5oZWFkZXJfX2NvbnRhY3RzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgfVxuICAuaGVhZGVyX19jb250YWN0cy10aXRsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaGVhZGVyX19jb250YWN0cyBzdmcge1xuICAgIG1heC13aWR0aDogNC44cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNC44cmVtO1xuICB9XG4gIC5mb290ZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMXJlbTtcbiAgfVxuICAuZm9vdGVyX19jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ2FwOiAwO1xuICB9XG4gIC5mb290ZXJfX2xpc3Qge1xuICAgIGdhcDogM3JlbTtcbiAgfVxuICAuZm9vdGVyX19saXN0Omxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogNXJlbTtcbiAgfVxuICAuZm9vdGVyX19pdGVtIGEge1xuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICB9XG4gIC5mb290ZXJfX21pZGRsZSB7XG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgICBvcmRlcjogLTE7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG4gIC5mb290ZXJfX2xvZ28ge1xuICAgIG1heC13aWR0aDogMjdyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4LjZyZW07XG4gIH1cbiAgLmZvb3Rlcl9fY29udGFjdHMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDZyZW07XG4gIH1cbiAgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cbiAgLnR4dDMwIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cbiAgLnR4dDE2IHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgLmJ0biB7XG4gICAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gNHJlbTtcbiAgICBjb2x1bW4tZ2FwOiAzLjJyZW07XG4gICAgYm9yZGVyOiAwLjRyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4KTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDhyZW0gOHJlbSA4cmVtO1xuICB9XG4gIC5idG5fX2Fycm93LXdyYXAge1xuICAgIGZsZXg6IDAgMCA3cmVtO1xuICAgIHdpZHRoOiA3cmVtO1xuICAgIGhlaWdodDogN3JlbTtcbiAgfVxuICAuYnRuX19hcnJvdy1pY29uIHtcbiAgICB3aWR0aDogMy44cmVtO1xuICB9XG4gIC5pbnB1dCB7XG4gICAgcGFkZGluZzogN3JlbSA4cmVtIDIuNHJlbSAyLjRyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHJlbTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHJlbSk7XG4gIH1cbiAgLmlucHV0X3RleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDM0LjhyZW07XG4gIH1cbiAgLmlucHV0X19sYWJlbCB7XG4gICAgdG9wOiAyLjRyZW07XG4gICAgbGVmdDogMi40cmVtO1xuICB9XG4gIC5zZWxlY3RfX3RpdGxlIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cmVtO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcbiAgfVxuICAuc2VsZWN0X192YWx1ZSB7XG4gICAgcGFkZGluZzogMS42cmVtO1xuICAgIGdhcDogNHJlbTtcbiAgICBoZWlnaHQ6IDEwcmVtO1xuICB9XG4gIC5zZWxlY3RfX3ZhbHVlOjphZnRlciB7XG4gICAgZmxleDogMCAwIDZyZW07XG4gICAgd2lkdGg6IDZyZW07XG4gICAgaGVpZ2h0OiA2cmVtO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMy4ycmVtO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyLjRyZW0pO1xuICB9XG4gIC5zZWxlY3RfX29wdGlvbnMge1xuICAgIHRvcDogY2FsYygxMDAlIC0gNHJlbSk7XG4gICAgcGFkZGluZzogOHJlbSA0cmVtIDRyZW0gNHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNHJlbSA0cmVtO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcbiAgfVxuICAuc2VsZWN0X19vcHRpb246bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbiAgfVxuICAuYmFkZ2Uge1xuICAgIHBhZGRpbmc6IDJyZW0gOHJlbSAycmVtIDJyZW07XG4gICAgY29sdW1uLWdhcDogM3JlbTtcbiAgICBib3JkZXItcmFkaXVzOiA2cmVtO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcbiAgfVxuICAuYmFkZ2VfX2ljb24td3JhcCB7XG4gICAgZmxleDogMCAwIDZyZW07XG4gICAgd2lkdGg6IDZyZW07XG4gICAgaGVpZ2h0OiA2cmVtO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcbiAgfVxuICAuYmFkZ2VfX2ljb24td3JhcDo6YmVmb3JlIHtcbiAgICB3aWR0aDogMTByZW07XG4gICAgaGVpZ2h0OiAxMHJlbTtcbiAgfVxuICAudHh0LWdyZWVuX2RvIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuICAuX2Rlc2t0b3Atb25seSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuX21vYmlsZS1vbmx5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuaW50cm8ge1xuICAgIG1hcmdpbi1ib3R0b206IDE1LjVyZW07XG4gICAgcGFkZGluZy10b3A6IDY4cmVtO1xuICB9XG4gIC5pbnRybyB7XG4gICAgbWFyZ2luLXRvcDogLTE2cmVtO1xuICB9XG4gIC5pbnRybzo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMTAxNjUzIDEzJSwgcmdiYSgyMywgMTUsIDY3LCAwKSA3NS40NSUpO1xuICB9XG4gIC5pbnRyb19fdGl0bGUge1xuICAgIGxpbmUtaGVpZ2h0OiA4NSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNy4zcmVtO1xuICB9XG4gIC5wcm9tby1wYWdlIC5pbnRyb19fdGl0bGUge1xuICAgIG1heC13aWR0aDogNjJyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiU3BhY2UgQWdlIEN5cmlsbGljXCI7XG4gIH1cbiAgLmludHJvX190aXRsZSBzcGFuOm5vdCguaW50cm9fX3RpdGxlIHNwYW4udHh0LWdyZWVuKSB7XG4gICAgY29sb3I6ICMyOWZmN2Y7XG4gIH1cbiAgLmhvbWUtcGFnZSAuaW50cm9fX3Bvc3Rlci1pbWFnZSBpbWcge1xuICAgIG9iamVjdC1wb3NpdGlvbjogLTE0MHJlbTtcbiAgfVxuICAuaW50cm9fX3JlcXVlc3Qge1xuICAgIGdhcDogNXJlbTtcbiAgfVxuICAuaW50cm9fX3JlcXVlc3QtcHJvamVjdHM6OmFmdGVyIHtcbiAgICBsZWZ0OiAtM3JlbTtcbiAgICB3aWR0aDogMC40cmVtO1xuICB9XG4gIC5pbnRyb19fcmVxdWVzdC1wcm9qZWN0cyB7XG4gICAgZ2FwOiAyLjRyZW07XG4gIH1cbiAgLmludHJvX19yZXF1ZXN0LXByb2plY3RzLWNvdW50ZXIge1xuICAgIGZsZXg6IDAgMCA4LjhyZW07XG4gICAgd2lkdGg6IDguOHJlbTtcbiAgICBoZWlnaHQ6IDguOHJlbTtcbiAgfVxuICAuaW50cm9fX3JlcXVlc3QtcHJvamVjdHMtY291bnRlciBzcGFuIHtcbiAgICBmb250LXNpemU6IDIuNDhyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDAuNzczNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAzLjVyZW07XG4gIH1cbiAgLmludHJvX19yZXF1ZXN0LXByb2plY3RzLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB9XG4gIC5pbnRyb19fYXJ0aWNsZXMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgxNS4ycmVtLCAxZnIpKTtcbiAgICBnYXA6IDIuOHJlbTtcbiAgICBtYXJnaW4tdG9wOiAxN3JlbTtcbiAgfVxuICAuaW50cm9fX2FydGljbGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIH1cbiAgLmludHJvX19hcnRpY2xlLWxpbmsge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyLjZyZW07XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDExLjVyZW0gMnJlbSAzcmVtO1xuICB9XG4gIC5pbnRyb19fYXJ0aWNsZS1saW5rLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cbiAgLmludHJvX19hcnRpY2xlLWxpbmstaW1hZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXgtd2lkdGg6IDE2LjJyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNi4ycmVtO1xuICAgIGZsZXg6IDAgMCAxNi4ycmVtO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgLmludHJvX19hcnRpY2xlLWxpbmstaWNvbiB7XG4gICAgbWF4LXdpZHRoOiA2cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNnJlbTtcbiAgfVxuICAuaW50cm9fX2FydGljbGUtbGluay1pY29uIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHBhZGRpbmc6IDAuOHJlbTtcbiAgfVxuICAucHJvbW90aW9uX19jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGdhcDogMXJlbTtcbiAgfVxuICAucHJvbW90aW9uX190aXRsZSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcbiAgfVxuICAucHJvbW90aW9uX19ibG9jayB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIGdhcDogMXJlbTtcbiAgfVxuICAucHJvbW90aW9uX19ibG9jazpsYXN0LWNoaWxkIC5wcm9tb3Rpb25fX3RpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucHJvbW90aW9uX19ibG9jazpudGgtY2hpbGQoZXZlbikge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICB9XG4gIC5wcm9tb3Rpb25fX2Jsb2NrOm50aC1jaGlsZChldmVuKSBzcGFuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cbiAgLnByb21vdGlvbl9fYmxvY2s6bnRoLWNoaWxkKG9kZCkge1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgfVxuICAucHJvbW90aW9uX19ibG9jazpudGgtY2hpbGQob2RkKSAucHJvbW90aW9uX190aXRsZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xuICB9XG4gIC5wcm9tb3Rpb25fX3N1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB9XG4gIC5tYXJrZXRpbmcge1xuICAgIG1hcmdpbi1ib3R0b206IDI1cmVtO1xuICB9XG4gIC5tYXJrZXRpbmdfX2ltYWdlIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIG1heC13aWR0aDogNjhyZW07XG4gIH1cbiAgLm1hcmtldGluZ19fY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAubWFya2V0aW5nX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNC40cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubWFya2V0aW5nX19pbmZvIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgLm1hcmtldGluZ19faW5mby1yb3cge1xuICAgIGdhcDogM3JlbTtcbiAgfVxuICAubWFya2V0aW5nX19pbmZvLWxpc3Qge1xuICAgIGdhcDogMnJlbTtcbiAgfVxuICAubWFya2V0aW5nX19pbmZvLWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB9XG4gIC5tYXJrZXRpbmdfX2luZm8taXRlbTo6YWZ0ZXIge1xuICAgIHRvcDogMC41cmVtO1xuICAgIHdpZHRoOiAxcmVtO1xuICAgIGhlaWdodDogMXJlbTtcbiAgfVxuICAubWFya2V0aW5nX19pbmZvLWRlc2NyaXB0aW9uIHtcbiAgICBtYXgtd2lkdGg6IDMzLjJyZW07XG4gICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgfVxuICAuYmVuZWZpdHMge1xuICAgIG1hcmdpbi1ib3R0b206IDI2cmVtO1xuICB9XG4gIC5iZW5lZml0c19fY29udGVudCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDMyLjhyZW0sIDFmcikpO1xuICAgIGdhcDogMi42cmVtIDIuMnJlbTtcbiAgfVxuICAuYmVuZWZpdHNfX2FydGljbGUge1xuICAgIHBhZGRpbmc6IDMuNHJlbSAycmVtIDJyZW07XG4gIH1cbiAgLmJlbmVmaXRzX19hcnRpY2xlLWhlYWRpbmcge1xuICAgIG1hcmdpbi1ib3R0b206IDMuNHJlbTtcbiAgfVxuICAuYmVuZWZpdHNfX2FydGljbGUtaGVhZGluZy10aXRsZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4gIC5iZW5lZml0c19fYXJ0aWNsZS1oZWFkaW5nLWNvdW50ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmJlbmVmaXRzX19hcnRpY2xlLXBvc3RlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBoZWlnaHQ6IDIwcmVtO1xuICB9XG4gIC5iZW5lZml0c19fYXJ0aWNsZS1wb3N0ZXItaW1hZ2Uge1xuICAgIG1heC13aWR0aDogMjZyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyOHJlbTtcbiAgfVxuICAuYmVuZWZpdHNfX2FydGljbGUtZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbiAgLnBvcnRmb2xpbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjdyZW07XG4gIH1cbiAgLnBvcnRmb2xpb19faGVhZGluZyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogOHJlbTtcbiAgfVxuICAucG9ydGZvbGlvX19saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAzLjJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogNy42cmVtO1xuICB9XG4gIC5wb3J0Zm9saW9fX2l0ZW0gYSB7XG4gICAgZ2FwOiAyLjZyZW07XG4gICAgcGFkZGluZzogMnJlbTtcbiAgfVxuICAucG9ydGZvbGlvX19pdGVtLWltYWdlIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMnJlbTtcbiAgfVxuICAucG9ydGZvbGlvX19pdGVtLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgZ2FwOiAycmVtO1xuICB9XG4gIC5wb3J0Zm9saW9fX2l0ZW0tdGV4dCBzcGFuIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgfVxuICAucG9ydGZvbGlvX19pdGVtLWljb24ge1xuICAgIG1heC13aWR0aDogNnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDZyZW07XG4gIH1cbiAgLnBvcnRmb2xpb19faXRlbS1pY29uIHtcbiAgICBwYWRkaW5nOiAwLjZyZW07XG4gICAgbWF4LXdpZHRoOiA1LjJyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1LjJyZW07XG4gIH1cbiAgLmRlc2t0b3Age1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xuICAuc2VsZWN0X19vcHRpb246aG92ZXI6bm90KC5zZWxlY3RfX29wdGlvbjpob3Zlci5zZWxlY3RfX3N1YnRpdGxlKSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjMjlmZjdmO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc2VjdGlvbnMvaGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zZWN0aW9ucy9mb290ZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3VpL3N0eWxlcy9fdHlwby5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL19idXR0b24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3VpL3N0eWxlcy9faW5wdXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3VpL3N0eWxlcy9fc2VsZWN0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvX2JhZGdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Rldi92em1zazEuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc2VjdGlvbnMvX2ludHJvLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3NlY3Rpb25zL19wcm9tb3Rpb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc2VjdGlvbnMvX21hcmtldGluZy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zZWN0aW9ucy9iZW5lZml0cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zZWN0aW9ucy9fcG9ydGZvbGlvLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Rldi91a2lrMC5zY3NzXCIsXCI8bm8gc291cmNlPlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwi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LHFCQUFBO0VmNHBEVjtFZXZwRE07SUFTUSxXQUFBO0lBQ0EsYUFBQTtFZjJwRGQ7RWU3b0RNO0laL0NKLGVZc0QyQjtJWnJEM0IsV0FBQTtJQUNBLGFZb0RpQztFZjJwRG5DO0VlM29ETTtJQVdRLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsU0FBQTtFZnlwRGQ7RWV0cERVO0lBUVEsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFZjBwRGxCO0VlcnBETTtJWnhHSixlQTBDbUI7SUF6Q25CLFdBQUE7SUFDQSxZQXdDeUI7RUhzdUQzQjtFZXhxRE07SUFJUSxlQUFBO0laNUdaLGlCWTZHMkI7SVo1RzNCLFdBQUE7SUFDQSxjWTJHbUM7RWYycURyQztFZ0Jqd0RFO0lBQ0ksYUFBQTtFaEJxeUROO0FBN01GO0FpQjduREE7RVQyS2dCO0lBQ0ksZUFBQTtJQUNBLGNSM0paO0VBMjZCTjtBQXNzQkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRXVjbGlkIENpcmN1bGFyIEEnO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvRXVjbGlkLUNpcmN1bGFyLUEtTGlnaHQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0V1Y2xpZCBDaXJjdWxhciBBJztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0V1Y2xpZC1DaXJjdWxhci1BLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0V1Y2xpZCBDaXJjdWxhciBBJztcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0V1Y2xpZC1DaXJjdWxhci1BLU1lZGl1bS53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRXVjbGlkIENpcmN1bGFyIEEnO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvRXVjbGlkLUNpcmN1bGFyLUEtU2VtaUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0V1Y2xpZCBDaXJjdWxhciBBJztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0V1Y2xpZC1DaXJjdWxhci1BLUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1NwYWNlIEFnZSc7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9TcGFjZS1BZ2Uud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1NwYWNlIEFnZSBDeXJpbGxpYyc7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9TcGFjZS1BZ2UtQ3lyaWxsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0V1cm9wZUV4dGVuZGVkQyc7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9FdXJvcGUtRXh0ZW5kZWQtQy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuXCIsXCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWl4aW5zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcblxcbkBpbXBvcnQgJy4vbWl4aW5zJztcXG5cXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB2YXJpYWJsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcblxcbi8vIGZvbnRzXFxuJHNwYWNlQWdlOiAnU3BhY2UgQWdlJztcXG4kc3BhY2VBZ2VDeXI6ICdTcGFjZSBBZ2UgQ3lyaWxsaWMnO1xcbiRFdXJvcGVFOiAnRXVyb3BlRXh0ZW5kZWRDJztcXG4kRUNBOiAnRXVjbGlkIENpcmN1bGFyIEEnO1xcblxcbi8vIGNvbG9yc1xcbiR3aGl0ZTogI2ZmZmZmZjtcXG4kd2hpdGUtc2Vjb25kYXJ5OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjkpO1xcbiRibGFjazogIzAwMDAwMDtcXG4kZGFya1B1cnBsZTogIzExMDczYjtcXG4kZGFya1B1cnBsZTI6ICMxNDBhM2Y7XFxuJGdyZWVuOiAjMjlmZjdmO1xcbiRibHVlOiAjMTgyNjc4O1xcbiRiZ0NvbG9yOiAjMTAxNjUzO1xcblxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZm9udHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuLy8gbG9jYWwgZm9udHNcXG5AaW1wb3J0ICcuL2ZvbnRzJztcXG5cXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGJhc2Ugc3R5bGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcblxcbi8vIGJhc2Ugc2NzcyBmaWxlXFxuQGltcG9ydCAnLi9zZXQnO1xcblxcbi8vIGh0bWxcXG5odG1sLmxvY2ssXFxuaHRtbC5sb2NrIGJvZHkge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0b3VjaC1hY3Rpb246IG5vbmU7XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLy8gbWFpblxcbm1haW4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXgtd2lkdGg6IDE5MjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcblxcbi8vIGhlYWRlciAvIGZvb3RlclxcbkBpbXBvcnQgJy4vc2VjdGlvbnMvaGVhZGVyJztcXG5AaW1wb3J0ICcuL3NlY3Rpb25zL2Zvb3Rlcic7XFxuXFxuLy8gdWlcXG5AaW1wb3J0ICcuLi91aS9zdHlsZXMvdWkuc2Nzcyc7XFxuXFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5cXG5AaW1wb3J0ICcuL2Rldi92em1zazEuc2Nzcyc7XFxuQGltcG9ydCAnLi9kZXYvbWFya3VzRE0uc2Nzcyc7XFxuQGltcG9ydCAnLi9kZXYvdWtpazAuc2Nzcyc7XFxuQGltcG9ydCAnLi9kZXYva2llNmVyLnNjc3MnO1xcblwiLFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6ICRFQ0E7IC8vINGI0YDQuNGE0YIg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0L/QviDRgdCw0LnRgtGDXFxuICAgIGZvbnQtc2l6ZTogMC41MjA4MzM1dnc7IC8vINC90LAg0YDQsNC30YDQtdGI0LXQvdC40LggMTkyMCAwLjUyMDgzNXZ3ID09PSAxMHB4XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJ1Z2ZpeCBpbmZpbml0ZSAxcztcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBidWdmaXggaW5maW5pdGUgMXM7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgY29sb3I6ICR3aGl0ZTsgLy8g0YbQstC10YIg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0YLQtdC60YHRgtCwINC/0L4g0YHQsNC50YLRg1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdDb2xvcjtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYnVnZml4IGluZmluaXRlIDFzO1xcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuYSB7XFxuICAgIGNvbG9yOiB1bnNldDtcXG59XFxuYSxcXG5hOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxuYSxcXG50ZXh0YXJlYSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgJjpmb2N1cyB7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICB9XFxuICAgICY6YWN0aXZlIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbnAge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG5pbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbnVsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG51bCBsaSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxNjByZW07XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5pbnB1dFt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdudW1iZXInXSB7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbn1cXG5cXG5zdmcsXFxuaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDE5MjBweCkge1xcbiAgICBodG1sIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICBodG1sIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxLjU2MjV2dztcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygoMTAwIC8gMzc1KSAqIDV2dyk7IC8vINCz0LTQtSAzNzUg0Y3RgtC+INGI0LjRgNC40L3QsCDQvNC+0LEg0LLQtdGA0YHQuNC4INC80LDQutC10YLQsFxcbiAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xcbiAgICB9XFxuXFxuICAgIGJvZHkge1xcbiAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xcbiAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBwYWRkaW5nOiAwIDMuMnJlbTsgLy8g0LIg0LzQvtCxINCy0LXRgNGB0LjQuCDQvtGC0YHRgtGD0L8g0L7RgiDQutGA0LDRjyDQt9Cw0LTQsNC10Lwg0LTQu9GPINCy0YHQtdGFINC60L7QvdGC0LXQudC90LXRgNC+0LIsINCwINGC0LDQvCDQs9C00LUg0L3QtSDQvdGD0LbQvdC+INC80L7QttC10Lwg0YLQvtGH0LXRh9C90L4g0YPQsdGA0LDRgtGMXFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cXG5cIixcIi5oZWFkZXIge1xcbiAgICBwYWRkaW5nLXRvcDogMi4zcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG5cXG4gICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAzLjZyZW07XFxuICAgIH1cXG5cXG4gICAgJl9fY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XFxuICAgICAgICAgICAgZ2FwOiAxNnJlbTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGdhcCBlYXNlO1xcblxcbiAgICAgICAgICAgIC5fbWVudS1vcGVuZWQgJiB7XFxuICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgZ2FwOiAxMS42cmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19idXJnZXIge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fbG9nbyB7XFxuICAgICAgICBAaW5jbHVkZSBzaXplcygxNy44cmVtLCA1LjdyZW0pO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIHNpemVzKDI3cmVtLCA4LjZyZW0pO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fbWVudSB7XFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDcuNHJlbSk7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjpcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtIDAuM3MgZWFzZSxcXG4gICAgICAgICAgICAgICAgb3BhY2l0eSAwLjNzIGVhc2U7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGJnQ29sb3I7XFxuICAgICAgICAgICAgcGFkZGluZzogMjEuNHJlbSA1LjJyZW0gOC44cmVtIDcuOHJlbTtcXG5cXG4gICAgICAgICAgICAuX21lbnUtb3BlbmVkICYge1xcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1jb250YWN0cyB7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XFxuXFxuICAgICAgICAgICAgICAgICYtaXRlbSB7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyLjRyZW07XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY3KTtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICYtYnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAuNHJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzgpO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHJlbSAyNHJlbSAyNHJlbSAyNHJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiAycmVtO1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gNHJlbTtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgYm9yZGVyIGVhc2U7XFxuXFxuICAgICAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUtc2Vjb25kYXJ5O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LWNvbnRhY3RzLWJ1dHRvbi1pY29uIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlLXNlY29uZGFyeTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICYtaWNvbiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMS40cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc2l6ZXMoNi44cmVtLCA2LjhyZW0pO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX25hdiB7XFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMXJlbTtcXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtbGlzdCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogNi4zcmVtO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgICAgICBnYXA6IDcuMnJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLWl0ZW0ge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgICAgICAgICAgICAmLi0tYWN0aXZlIHtcXG4gICAgICAgICAgICAgICAgICAgIGEge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JlZW47XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJi1oZWFkaW5nIHtcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5OCU7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICYuLS1hY3RpdmUge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkZXJfX25hdi1pdGVtLWljb24ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgfiAuaGVhZGVyX19uYXYtaXRlbS1kcm9wZG93biB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaGVhZGVyX19uYXYtaXRlbS1kcm9wZG93bi13cmFwcGVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRyZW07XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICBhIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLWljb24ge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcblxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybSBlYXNlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICYtZHJvcGRvd24ge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcblxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMGZyO1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBncmlkLXRlbXBsYXRlLXJvd3MgZWFzZTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAmLXdyYXBwZXIge1xcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgbWFyZ2luIGVhc2U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQuOHJlbTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAmLWl0ZW0ge1xcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuMnJlbTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJi1saW5rIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGNvbG9yIGVhc2U7XFxuXFxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZS1zZWNvbmRhcnk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2NvbnRhY3RzIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxLjdyZW07XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgLmhlYWRlcl9fY29udGFjdHMtdGl0bGUge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlLXNlY29uZGFyeTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgc3ZnIHtcXG4gICAgICAgICAgICAgICAgcGF0aCB7XFxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICR3aGl0ZS1zZWNvbmRhcnk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLXRpdGxlIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGNvbG9yIGVhc2U7XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICBzdmcge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIHNpemVzKDIuNHJlbSwgMi40cmVtKTtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzaXplcyg0LjhyZW0sIDQuOHJlbSk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHBhdGgge1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIHN0cm9rZSBlYXNlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuaGFtYnVyZ2VyIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICB3aWR0aDogNC42cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAzLjZyZW07XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICBzcGFuLFxcbiAgICAgICAgJjo6YmVmb3JlLFxcbiAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIHBzZXVkbyB7XFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjpcXG4gICAgICAgICAgICAgICAgICAgIHRvcCAwLjNzIGVhc2UsXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCAwLjNzIGVhc2UsXFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMC4zcyBlYXNlLFxcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tIDAuM3MgZWFzZSxcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgJjo6YmVmb3JlIHtcXG4gICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICB9XFxuICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgfVxcbiAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDFweCk7XFxuICAgICAgICB9XFxuICAgICAgICAuX21lbnUtb3BlbmVkICYge1xcbiAgICAgICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcXG4gICAgICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDFweCk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgYm90dG9tOiBjYWxjKDUwJSAtIDFweCk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgc3BhbixcXG4gICAgICAgICAgICAmOjpiZWZvcmUsXFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiLFwiQG1peGluIHBzZXVkbygpIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgQGNvbnRlbnQ7XFxufVxcblxcbkBtaXhpbiBzbWFsbC10YWJsZXQge1xcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG59XFxuXFxuQG1peGluIHNpemVzKCR3aWR0aCwgJGhlaWdodCkge1xcbiAgICBtYXgtd2lkdGg6ICR3aWR0aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogJGhlaWdodDtcXG5cXG4gICAgQGNvbnRlbnQ7XFxufVxcblxcbkBtaXhpbiBpdGVtLWRvdCgpIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAmOjphZnRlciB7XFxuICAgICAgICBAaW5jbHVkZSBwc2V1ZG8ge1xcbiAgICAgICAgICAgIHdpZHRoOiAwLjVyZW07XFxuICAgICAgICAgICAgaGVpZ2h0OiAwLjVyZW07XFxuICAgICAgICAgICAgdG9wOiAxLjVyZW07XFxuICAgICAgICAgICAgbGVmdDogLTJyZW07XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgdG9wOiAwLjVyZW07XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFyZW07XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIEBjb250ZW50O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbkBtaXhpbiByb3RhdGVkLWFycm93KCkge1xcbiAgICBwYWRkaW5nOiAwLjZyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgIEBpbmNsdWRlIHNpemVzKDQuNnJlbSwgNC42cmVtKTtcXG5cXG4gICAgaW1nIHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcblxcbiAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgQGluY2x1ZGUgc2l6ZXMoNnJlbSwgNnJlbSk7XFxuICAgIH1cXG5cXG4gICAgQGNvbnRlbnQ7XFxufVxcblwiLFwiLmZvb3RlciB7XFxuICAgIHBhZGRpbmctYm90dG9tOiA3LjhyZW07XFxuXFxuICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTFyZW07XFxuICAgIH1cXG5cXG4gICAgJl9fY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgICAgICAgICBnYXA6IDA7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fbGlzdCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMC44cmVtO1xcbiAgICAgICAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgZ2FwOiAzcmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXJlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmZvb3Rlcl9faXRlbSB7XFxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XFxuICAgICAgICAgICAgICAgICAgICBhIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2l0ZW0ge1xcbiAgICAgICAgYSB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBjb2xvciBlYXNlO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZS1zZWNvbmRhcnk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX21pZGRsZSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gICAgICAgICAgICBvcmRlcjogLTE7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2xvZ28ge1xcbiAgICAgICAgQGluY2x1ZGUgc2l6ZXMoMTAuOXJlbSwgMTNyZW0pO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNi4xcmVtO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBzaXplcygyN3JlbSwgOC42cmVtKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19jb250YWN0cyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMi4ycmVtO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2NvbnRhY3Qge1xcbiAgICAgICAgYSB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGNvbG9yIGVhc2U7XFxuXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUtc2Vjb25kYXJ5O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcIi50aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAkc3BhY2VBZ2U7XFxuICAgIGZvbnQtc2l6ZTogOXJlbTtcXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gICAgfVxcbn1cXG5cXG4uc3VidGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJHNwYWNlQWdlO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICBmb250LXNpemU6IDRyZW07XFxuICAgIH1cXG59XFxuXFxuLnR4dDI1IHtcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICB9XFxufVxcblxcbi50eHQzMCB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgfVxcbn1cXG5cXG4udHh0MTYge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcbn1cXG5cXG4uY3lyIHtcXG4gICAgZm9udC1mYW1pbHk6ICRzcGFjZUFnZUN5cjtcXG59XFxuXCIsXCIuYnRuIHtcXG4gICAgcGFkZGluZzogMC42cmVtIDAuNnJlbSAwLjZyZW0gMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogMnJlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMCA0cmVtIDRyZW0gNHJlbTtcXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDRyZW07XFxuICAgICAgICBjb2x1bW4tZ2FwOiAzLjJyZW07XFxuICAgICAgICBib3JkZXI6IDAuNHJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzgpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA4cmVtIDhyZW0gOHJlbTtcXG4gICAgfVxcblxcbiAgICAvLyAuYnRuX190ZXh0XFxuXFxuICAgICZfX3RleHQge1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgfVxcblxcbiAgICAvLyAuYnRuX19hcnJvdy13cmFwXFxuXFxuICAgICZfX2Fycm93LXdyYXAge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBmbGV4OiAwIDAgNHJlbTtcXG4gICAgICAgIHdpZHRoOiA0LjRyZW07XFxuICAgICAgICBoZWlnaHQ6IDQuNHJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCA3cmVtO1xcbiAgICAgICAgICAgIHdpZHRoOiA3cmVtO1xcbiAgICAgICAgICAgIGhlaWdodDogN3JlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuYnRuX19hcnJvdy1pY29uXFxuXFxuICAgICZfX2Fycm93LWljb24ge1xcbiAgICAgICAgd2lkdGg6IDIuNHJlbTtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIHdpZHRoOiAzLjhyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCJpbnB1dFt0eXBlPSd0ZXh0J10sXFxuaW5wdXRbdHlwZT0nZW1haWwnXSxcXG5pbnB1dFt0eXBlPSd0ZWwnXSxcXG50ZXh0YXJlYSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG50ZXh0YXJlYTpmb2N1cyxcXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5pbnB1dCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogNC42cmVtIDIuN3JlbSAycmVtIDIuN3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xcbiAgICAmX3RleHRhcmVhIHtcXG4gICAgICAgIGhlaWdodDogMjUuNXJlbTtcXG4gICAgICAgIHRleHRhcmVhIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIHBhZGRpbmc6IDdyZW0gOHJlbSAyLjRyZW0gMi40cmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcXG4gICAgICAgICZfdGV4dGFyZWEge1xcbiAgICAgICAgICAgIGhlaWdodDogMzQuOHJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuaW5wdXRfX2ZpZWxkXFxuXFxuICAgICZfX2ZpZWxkIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XFxuICAgICAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5pbnB1dF9fbGFiZWxcXG5cXG4gICAgJl9fbGFiZWwge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAxLjhyZW07XFxuICAgICAgICBsZWZ0OiAyLjdyZW07XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICB0b3A6IDIuNHJlbTtcXG4gICAgICAgICAgICBsZWZ0OiAyLjRyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJi5fZm9ybS1mb2N1cyB7XFxuICAgIH1cXG4gICAgJi5fZm9ybS1lcnJvciB7XFxuICAgIH1cXG59XFxuXCIsXCIuc2VsZWN0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAvLyAuc2VsZWN0X19ib2R5XFxuXFxuICAgICZfX2JvZHkge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX3RpdGxlXFxuXFxuICAgICZfX3RpdGxlIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHotaW5kZXg6IDM7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X192YWx1ZVxcblxcbiAgICAmX192YWx1ZSB7XFxuICAgICAgICBwYWRkaW5nOiAxLjNyZW0gMS4zcmVtIDEuM3JlbSAyLjdyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMnJlbTtcXG4gICAgICAgIGhlaWdodDogNy4ycmVtO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgICA+ICoge1xcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgZmxleDogMCAwIDVyZW07XFxuICAgICAgICAgICAgd2lkdGg6IDVyZW07XFxuICAgICAgICAgICAgaGVpZ2h0OiA1cmVtO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcXG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9pY29ucy9hcnItd2hpdGUuc3ZnKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIuNHJlbTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbiAgICAgICAgfVxcbiAgICAgICAgJi5fc2VsZWN0LWxhYmVsIHtcXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtc2VsLWxhYmVsKTtcXG4gICAgICAgICAgICAgICAgLl9zZWxlY3QtZmlsbGVkICYge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgICYuX3NlbGVjdC1sYWJlbDo6YmVmb3JlLFxcbiAgICAgICAgLnNlbGVjdF9fY29udGVudCB7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMS40cmVtO1xcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgcGFkZGluZzogMS42cmVtO1xcbiAgICAgICAgICAgIGdhcDogNHJlbTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgICAgICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgZmxleDogMCAwIDZyZW07XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA2cmVtO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDZyZW07XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMy4ycmVtO1xcbiAgICAgICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMi40cmVtKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fY29udGVudFxcblxcbiAgICAmX19jb250ZW50IHtcXG4gICAgICAgIC8vIGhpZGUgLyBzaG93IHNlbGVjdGVkIHZhbHVlXFxuICAgICAgICAmOm5vdCguX3NlbGVjdC1maWxsZWQgJikge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fdGV4dFxcblxcbiAgICAmX190ZXh0IHtcXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX2lucHV0XFxuXFxuICAgICZfX2lucHV0IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fb3B0aW9uc1xcblxcbiAgICAmX19vcHRpb25zIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICB0b3A6IGNhbGMoMTAwJSAtIDNyZW0pO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHBhZGRpbmc6IDQuNnJlbSAyLjdyZW0gMi40cmVtIDIuN3JlbTtcXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAzcmVtIDNyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzYzOTZjO1xcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICB0b3A6IGNhbGMoMTAwJSAtIDRyZW0pO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDhyZW0gNHJlbSA0cmVtIDRyZW07XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDRyZW0gNHJlbTtcXG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHJlbSk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fc2Nyb2xsXFxuXFxuICAgICZfX3Njcm9sbCB7XFxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcblxcbiAgICAgICAgLy8gbWF4aW11bSBoZWlnaHRcXG4gICAgICAgIG1heC1oZWlnaHQ6IDE5cmVtO1xcblxcbiAgICAgICAgLy8gc2Nyb2xsYmFyIHN0eWxlc1xcbiAgICAgICAgJi5zaW1wbGViYXItc2Nyb2xsYWJsZS15IHtcXG4gICAgICAgICAgICAuc2ltcGxlYmFyLXRyYWNrLnNpbXBsZWJhci12ZXJ0aWNhbCB7XFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxLjJyZW07XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLjRyZW07XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTdlZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnNpbXBsZWJhci1zY3JvbGxiYXIge1xcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzLjJyZW07XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EyYWRjMTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fb3B0aW9uXFxuICAgICZfX29wdGlvbiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgJi5fc2VsZWN0LXNlbGVjdGVkIHtcXG4gICAgICAgICAgICBjb2xvcjogJGdyZWVuO1xcbiAgICAgICAgfVxcbiAgICAgICAgQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICY6bm90KCYuc2VsZWN0X19zdWJ0aXRsZSkge1xcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmVlbjtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X19ncm91cFxcblxcbiAgICAmX19ncm91cCB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX2Fzc2V0XFxuXFxuICAgICZfX2Fzc2V0IHtcXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X190ZXh0XFxuXFxuICAgICZfX3RleHQge1xcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX2hpbnRcXG5cXG4gICAgJl9faGludCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IGNhbGMoMTAwJSArIDAuOHJlbSk7XFxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNDIuODU3JTtcXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X19zdWJ0aXRsZVxcblxcbiAgICAmX19zdWJ0aXRsZSB7XFxuICAgICAgICBjdXJzb3I6IHRleHQ7XFxuICAgIH1cXG5cXG4gICAgLy8gc2VsZWN0IHN0YXRlXFxuICAgICYuX3NlbGVjdC1vcGVuZWQge1xcbiAgICAgICAgei1pbmRleDogNTtcXG4gICAgICAgIC5zZWxlY3RfX3ZhbHVlOjphZnRlciB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgJi5fc2VsZWN0LWZvY3VzZWQge1xcbiAgICB9XFxuICAgICYuX3NlbGVjdC1lcnJvciB7XFxuICAgICAgICAmOm5vdCgmLl9zZWxlY3QtZmlsbGVkLCAmLl9zZWxlY3Qtb3BlbmVkKSB7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgJi5fc2VsZWN0LWZpbGxlZCB7XFxuICAgICAgICAmOm5vdCgmLl9zZWxlY3Qtb3BlbmVkKSB7XFxuICAgICAgICAgICAgJjpub3QoJi5fc2VsZWN0LXNob3ctdmFsKSB7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgICYuX3NlbGVjdC1zaG93LXZhbCB7XFxuICAgICAgICAmLl9zZWxlY3QtZm9jdXNlZCxcXG4gICAgICAgICYuX3NlbGVjdC1maWxsZWQsXFxuICAgICAgICAmLl9zZWxlY3QtZXJyb3IsXFxuICAgICAgICAmLl9zZWxlY3QtZGlzYWJsZWQge1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgICYuX3NlbGVjdC1kaXNhYmxlZCB7XFxuICAgIH1cXG4gICAgJi5fc2VsZWN0LW11bHRpcGxlIHtcXG4gICAgfVxcbiAgICAmLl9zZWxlY3QtYWN0aXZlIHtcXG4gICAgfVxcbiAgICAmLl9zZWxlY3QtY2hlY2tib3gge1xcbiAgICB9XFxufVxcblxcbi8vIGxpc3RcXG4uX3NlbGVjdC1saXN0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIixcIi5iYWRnZSB7XFxuICAgIHBhZGRpbmc6IDFyZW0gM3JlbSAxcmVtIDFyZW07XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiAyLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xcbiAgICAmLl9hY3RpdmUge1xcbiAgICAgICAgY29sb3I6ICRkYXJrUHVycGxlMjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gICAgICAgIC5iYWRnZV9faWNvbi13cmFwIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2ljb25zL3N0YXItYWN0aXZlLnN2Zyk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICBwYWRkaW5nOiAycmVtIDhyZW0gMnJlbSAycmVtO1xcbiAgICAgICAgY29sdW1uLWdhcDogM3JlbTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZyZW07XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHJlbSk7XFxuICAgIH1cXG5cXG4gICAgLy8gLmJhZGdlX19pY29uLXdyYXBcXG5cXG4gICAgJl9faWNvbi13cmFwIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGZsZXg6IDAgMCA0LjVyZW07XFxuICAgICAgICB3aWR0aDogNC41cmVtO1xcbiAgICAgICAgaGVpZ2h0OiA0LjVyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICB3aWR0aDogOHJlbTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDhyZW07XFxuICAgICAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc3Rhci5zdmcpO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgIH1cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgZmxleDogMCAwIDZyZW07XFxuICAgICAgICAgICAgd2lkdGg6IDZyZW07XFxuICAgICAgICAgICAgaGVpZ2h0OiA2cmVtO1xcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cmVtKTtcXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTByZW07XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTByZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5iYWRnZV9fdGV4dFxcblxcbiAgICAmX190ZXh0IHtcXG4gICAgfVxcbn1cXG5cIixcIi50eHQtZ3JlZW4ge1xcbiAgICAgICAgY29sb3I6ICRncmVlbjtcXG4gICAgJl9kbyB7XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSl7XFxuICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcblxcbiAgICAgICAgICAgICAgICAgICAgLl9kZXNrdG9wLW9ubHkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKXtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIC5fbW9iaWxlLW9ubHkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pe1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XCIsXCIuaW50cm8ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi10b3A6IC04cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMC41cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogNDByZW07XFxuXFxuICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNS41cmVtO1xcbiAgICAgICAgcGFkZGluZy10b3A6IDY4cmVtO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcblxcbiAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTE2cmVtO1xcbiAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMTAxNjUzIDEzJSwgcmdiYSgyMywgMTUsIDY3LCAwKSA3NS40NSUpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICY6OmFmdGVyIHtcXG4gICAgICAgIEBpbmNsdWRlIHBzZXVkbyB7XFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMTAxNjUzIDAlLCByZ2JhKDIzLCAxNSwgNjcsIDApIDYzLjQ1JSk7XFxuICAgICAgICAgICAgei1pbmRleDogLTE7XFxuICAgICAgICAgICAgaW5zZXQ6IDA7XFxuICAgICAgICAgICAgYm90dG9tOiAtMC41cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2NvbnRlbnQge1xcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMS43cmVtO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX190aXRsZSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNS4zcmVtO1xcblxcbiAgICAgICAgLnByb21vLXBhZ2UgJiB7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMThyZW07XFxuXFxuICAgICAgICB9XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIC5wcm9tby1wYWdlICYge1xcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MnJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiU3BhY2UgQWdlIEN5cmlsbGljXFxcIjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgICAgICY6bm90KCYudHh0LWdyZWVuKSB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JlZW47XFxuXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDg1JTtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3LjNyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fcG9zdGVyLWltYWdlIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGluc2V0OiAwO1xcbiAgICAgICAgei1pbmRleDogLTE7XFxuXFxuICAgICAgICAmX2hhcy1iYWNrZHJvcCB7XFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTt0b3A6IDA7bGVmdDogMDtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgLmhvbWUtcGFnZSAmIHtcXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogLTE0MHJlbTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19yZXF1ZXN0IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAzLjdyZW07XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIGdhcDogNXJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtcHJvamVjdHMge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDEuOHJlbTtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBwc2V1ZG8ge1xcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTJyZW07XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMC4ycmVtO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcblxcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtM3JlbTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMC40cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIGdhcDogMi40cmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLWNvdW50ZXIge1xcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgNS44cmVtO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogNS44cmVtO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUuOHJlbTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JlZW47XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgOC44cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDguOHJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOC44cmVtO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxYTFhMWE7XFxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHNwYWNlQWdlQ3lyO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjZyZW07XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi40OHJlbTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMC43NzM1cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMuNXJlbTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLXRpdGxlIHtcXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyM3JlbTtcXG5cXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fYXJ0aWNsZXMge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCg1MXJlbSwgMWZyKSk7XFxuICAgICAgICBnYXA6IDMuN3JlbTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDUuOXJlbTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDE1LjJyZW0sIDFmcikpO1xcbiAgICAgICAgICAgIGdhcDogMi44cmVtO1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE3cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2FydGljbGUge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICAgIGE6aG92ZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JlZW47XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLWxpbmsge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuMXJlbSA2cmVtIDEuMXJlbSA0LjFyZW07XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBnYXA6IDJyZW07XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgZ2FwOiAyLjZyZW07XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTEuNXJlbSAycmVtIDNyZW07XFxuICAgICAgICAgICAgfVxcblxcblxcbiAgICAgICAgICAgICYtdGl0bGUge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE4cmVtO1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGNvbG9yIGVhc2U7XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJi1pbWFnZSB7XFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNpemVzKDIwLjJyZW0sIDIwLjJyZW0pO1xcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgMjAuMnJlbTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcblxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc2l6ZXMoMTYuMnJlbSwgMTYuMnJlbSk7XFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgMTYuMnJlbTtcXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJi1pY29uIHtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICB0b3A6IDFyZW07XFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxLjNyZW07XFxuXFxuICAgICAgICAgICAgICAgICZfaGFzLW51bWJlciB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgcm90YXRlZC1hcnJvdztcXG5cXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjhyZW07XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCIucHJvbW90aW9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzFyZW07XFxuXFxuICAgICZfX2NvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBwYWRkaW5nOiAwIDEuNXJlbSAwIDIuOXJlbTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgcHNldWRvIHtcXG4gICAgICAgICAgICAgICAgY29udGVudDogJzMnO1xcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwLjVyZW07XFxuICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IHJnYmEoNDEsIDI1NSwgMTI3LCAwLjEpO1xcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHNwYWNlQWdlQ3lyO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDcwcmVtO1xcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYmdDb2xvcjtcXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgICAgICAgICAgICAgIHRvcDogLTM0cmVtO1xcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fdGl0bGUge1xcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2Jsb2NrIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgICAgICAgICAgZ2FwOiAxcmVtO1xcblxcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XFxuICAgICAgICAgICAgICAgIC5wcm9tb3Rpb25fX3RpdGxlIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOm50aC1jaGlsZChldmVuKSB7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzRyZW07XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKG9kZCkge1xcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuXFxuICAgICAgICAgICAgICAgIC5wcm9tb3Rpb25fX3RpdGxlIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXJlbTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19zdWJ0aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiLFwiLm1hcmtldGluZyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI5cmVtO1xcblxcbiAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXR7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXJlbTtcXG4gICAgfVxcblxcbiAgICAmX19pbWFnZSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAtMTUuMnJlbTtcXG4gICAgICAgIHRvcDogLTEycmVtO1xcbiAgICAgICAgbWF4LXdpZHRoOiA3NHJlbTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICAgICAgICAgIG1heC13aWR0aDogNjhyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fY29udGVudCB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX190aXRsZSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0LjhyZW07XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQuNHJlbTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9faW5mbyB7XFxuICAgICAgICBtYXgtd2lkdGg6IDUxcmVtO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMjFyZW07XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtcm93IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgIGdhcDogNC4xcmVtO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIGdhcDogM3JlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLWxpc3Qge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgZ2FwOiAycmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtaXRlbSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIGl0ZW0tZG90O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1kZXNjcmlwdGlvbiB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIxLjdyZW07XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMy4ycmVtO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcIi5iZW5lZml0cyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE3LjdyZW07XFxuXFxuICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNnJlbTtcXG4gICAgfVxcblxcbiAgICAmX19jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMzcuNHJlbSwgMWZyKSk7XFxuICAgICAgICBnYXA6IDMuNnJlbTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDMyLjhyZW0sIDFmcikpO1xcbiAgICAgICAgICAgIGdhcDogMi42cmVtIDIuMnJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19hcnRpY2xlIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICAgICAgICBwYWRkaW5nOiAzLjhyZW0gMi4ycmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDMuNHJlbSAycmVtIDJyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLWhlYWRpbmcge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgZ2FwOiAxLjZyZW07XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMy40cmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLXRpdGxlIHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjIuNnJlbTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJi1jb3VudGVyIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRkYXJrUHVycGxlO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDZyZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG5cXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLXBvc3RlciB7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gICAgICAgICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzEwMTY1MztcXG4gICAgICAgICAgICBoZWlnaHQ6IDIxLjlyZW07XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLWltYWdlIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc2l6ZXMoMjhyZW0sIDMwcmVtKTtcXG5cXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNpemVzKDI2cmVtLCAyOHJlbSk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1kZXNjcmlwdGlvbiB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcIi5wb3J0Zm9saW8ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxOC41cmVtO1xcblxcbiAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjdyZW07XFxuICAgIH1cXG5cXG4gICAgJl9faGVhZGluZyB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA2LjNyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGdhcDogMnJlbTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBnYXA6IDhyZW07XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19saXN0IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoNzguNHJlbSwgMWZyKSk7XFxuICAgICAgICBnYXA6IDMuNnJlbSAzLjNyZW07XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA2LjZyZW07XFxuXFxuICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBnYXA6IDMuMnJlbTtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3LjZyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9faXRlbSB7XFxuICAgICAgICBhIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZ2FwOiAzLjNyZW07XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICAgICAgICAgICAgcGFkZGluZzogMi4ycmVtO1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldCB7XFxuICAgICAgICAgICAgICAgIGdhcDogMi42cmVtO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgLnBvcnRmb2xpb19faXRlbS10ZXh0IHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JlZW47XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLnBvcnRmb2xpb19faXRlbS1pbWFnZSBpbWcge1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1pbWFnZSB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgc2l6ZXMoMTAwJSwgMzYuNXJlbSk7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gICAgICAgICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzaXplcygxMDAlLCAzMnJlbSk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm0gZWFzZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLWJvdHRvbSB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi10ZXh0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZ2FwOiAxcmVtO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgY29sb3IgZWFzZTtcXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbC10YWJsZXQge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgICAgICAgICAgICAgICBnYXA6IDJyZW07XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcXG5cXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwtdGFibGV0IHtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi1pY29uIHtcXG4gICAgICAgICAgICBAaW5jbHVkZSByb3RhdGVkLWFycm93O1xcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsLXRhYmxldHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogLjZyZW07XFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNpemVzKDUuMnJlbSwgNS4ycmVtKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fbGluayB7XFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJy4uL3NlY3Rpb25zL2ludHJvJztcXG5AaW1wb3J0ICcuLi9zZWN0aW9ucy9wcm9tb3Rpb24nO1xcbkBpbXBvcnQgJy4uL3NlY3Rpb25zL21hcmtldGluZyc7XFxuQGltcG9ydCAnLi4vc2VjdGlvbnMvYmVuZWZpdHMnO1xcbkBpbXBvcnQgJy4uL3NlY3Rpb25zL3BvcnRmb2xpbyc7XFxuXFxuZmlndXJlIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDk5O1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjhzIGVhc2UgMHM7XFxuXFxuICAgIC5fbWVudS1vcGVuZWQgJiB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA0OC4wMWVtKSB7XFxuICAgIC5tb2JpbGUge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAuZGVza3RvcCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVxcblwiLG51bGxdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9ncm91cC1jc3MtbWVkaWEtcXVlcmllcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL2dyb3VwLWNzcy1tZWRpYS1xdWVyaWVzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9zY3NzL3N0eWxlLnNjc3MnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZvcm1zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBpbXBvcnQgKiBhcyBmb3JtcyBmcm9tICcuL3V0aWxzL2Zvcm1zLmpzJztcblxuLy8gZm9ybSBmaWVsZHNcbi8vIGZvcm1zLmZvcm1GaWVsZHNJbml0KHsgdmlld1Bhc3M6IGZhbHNlIH0pO1xuXG4vLyBmb3JtIHN1Ym1pdFxuLy8gZm9ybXMuZm9ybVN1Ym1pdCgpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHV0aWxzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vL2hhbWJ1cmdlclxuaW1wb3J0ICcuL3V0aWxzL2hhbWJ1cmdlci5qcyc7XG5cbi8vIHRhYnNcbi8vIGltcG9ydCAnLi91dGlscy90YWJzLmpzJztcblxuLy8gYWNjb3JkaW9uXG4vLyBpbXBvcnQgJy4vdXRpbHMvYWNjb3JkaW9uLmpzJztcblxuLy8gc2VsZWN0XG5pbXBvcnQgJy4vdXRpbHMvc2VsZWN0LmpzJztcblxuLy8gbW9kYWxzXG4vLyBpbXBvcnQgJy4vdXRpbHMvbW9kYWxzLmpzJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBsaWJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gZHluYW1pYyBkb21cbmltcG9ydCAnLi9saWJzL2RkLmpzJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0ICcuL2Rldi92em1zazEuanMnO1xuaW1wb3J0ICcuL2Rldi9tYXJrdXNETS5qcyc7XG5pbXBvcnQgJy4vZGV2L3VraWswLmpzJztcbmltcG9ydCAnLi9kZXYva2llNmVyLmpzJztcbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsImV2ZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiRHluYW1pY0FkYXB0IiwidHlwZSIsInByb3RvdHlwZSIsImluaXQiLCJfdGhpcyIsItC+YmplY3RzIiwiZGFDbGFzc25hbWUiLCJub2RlcyIsImkiLCJsZW5ndGgiLCJub2RlIiwiZGF0YSIsImRhdGFzZXQiLCJkYSIsInRyaW0iLCJkYXRhQXJyYXkiLCJzcGxpdCIsItC+YmplY3QiLCJlbGVtZW50IiwicGFyZW50IiwicGFyZW50Tm9kZSIsImRlc3RpbmF0aW9uIiwicXVlcnlTZWxlY3RvciIsImJyZWFrcG9pbnQiLCJwbGFjZSIsImluZGV4IiwiaW5kZXhJblBhcmVudCIsInB1c2giLCJhcnJheVNvcnQiLCJtZWRpYVF1ZXJpZXMiLCJBcnJheSIsIm1hcCIsImNhbGwiLCJmaWx0ZXIiLCJzZWxmIiwiaW5kZXhPZiIsIm1lZGlhIiwibWVkaWFTcGxpdCIsIlN0cmluZyIsIm1hdGNoTWVkaWEiLCJ3aW5kb3ciLCJtZWRpYUJyZWFrcG9pbnQiLCLQvmJqZWN0c0ZpbHRlciIsImFkZExpc3RlbmVyIiwibWVkaWFIYW5kbGVyIiwibWF0Y2hlcyIsIm1vdmVUbyIsImNvbnRhaW5zIiwibW92ZUJhY2siLCJhZGQiLCJjaGlsZHJlbiIsImluc2VydEFkamFjZW50RWxlbWVudCIsInJlbW92ZSIsInVuZGVmaW5lZCIsImFycmF5Iiwic2xpY2UiLCJhcnIiLCJzb3J0IiwiYSIsImIiLCJib2R5TG9ja1N0YXR1cyIsImJvZHlMb2NrVG9nZ2xlIiwibWVudUluaXQiLCJoYW1idXJnZXIiLCJlIiwiZG9jdW1lbnRFbGVtZW50IiwiX3NsaWRlVXAiLCJfc2xpZGVEb3duIiwiX3NsaWRlVG9nZ2xlIiwiU2VsZWN0IiwiY29uc3RydWN0b3IiLCJjbGFzc2VzIiwic2VsIiwiYm9keSIsImxhYmVsIiwidGl0bGUiLCJ2YWwiLCJjb250ZW50Iiwib3B0aW9ucyIsIm9wdGlvbiIsInNjcm9sbCIsImdyb3VwIiwiaW5wIiwiYXNzZXQiLCJ0eHQiLCJoaW50IiwiYWN0aXZlIiwiZm9jdXNlZCIsIm9wZW5lZCIsImZpbGxlZCIsInNlbGVjdGVkIiwiZGlzYWJsZWQiLCJsaXN0IiwiZXJyb3IiLCJtdWx0aXBsZSIsImNoZWNrYm94Iiwic2VsZWN0TGlzdCIsInNlbGVjdCIsImluaXRTZWxJdGVtIiwic2V0QWN0aW9ucyIsImJpbmQiLCJyZWxhdGl2ZVNlbCIsImNyZWF0ZUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsImhpZGRlbiIsInNlbElkIiwiZ2V0UGxhY2Vob2xkZXIiLCJvcHRQbGFjZWhvbGRlciIsInZhbHVlIiwic2hvdyIsInNlbFRpdGxlIiwiZ2V0U2VsZWN0IiwidHdpblNlbCIsImluc2VydEFkamFjZW50SFRNTCIsInRleHQiLCJzcGVlZCIsImJ1aWxkIiwiaW5pdFNlbGVjdGlvbnMiLCJwYXJlbnRFbGVtZW50Iiwic2VsT2JqIiwic2V0VmFsdWUiLCJzZXRPcHRpb25zIiwic2VsQWRkb25DbGFzcyIsImhhc0F0dHJpYnV0ZSIsImRpc2FibGVTZWxlY3QiLCJzZXRTZWFyY2hBY3Rpb25zIiwic2V0QWN0aW9uIiwic2VsSGludCIsImNsb3Nlc3QiLCJhZGRFcnIiLCJyZW1vdmVFcnIiLCJzZWxCb2R5IiwiZ2V0VmFsdWUiLCJyZWxhdGl2ZVNlbE9wdGlvbnMiLCJpbm5lckhUTUwiLCJnZXRPcHRpb25zIiwidGFyZ2V0IiwiZ2V0Q2xhc3MiLCJzZWxlY3RJZCIsInNlbExpc3QiLCJzZWxPcHRpb24iLCJvcHRWYWwiLCJzZXRPcHRpb25BY3Rpb24iLCJjb2RlIiwiY2xvc2VHcm91cCIsInNlbE9wdGlvbnMiLCJzZWxlY3RPbmVHcm91cCIsInNlbEdyb3VwIiwic2VsZWN0aW9ucyIsInNlbGVjdGlvbiIsImNsb3NlSXRlbSIsInJlbGF0aXZlU2VsZWN0aW9ucyIsImdldERhdGEiLCJlbGVtZW50cyIsInJlbGF0aXZlU2VsZWN0aW9uIiwicmVtb3ZlQXR0cmlidXRlIiwidHdpblNlbGVjdGlvbnMiLCJ0d2luU2VsZWN0aW9uIiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsIm9wdCIsInRleHRDb250ZW50Iiwic2V0U2VsZWN0aW9ucyIsInNlbElucHV0IiwidG9VcHBlckNhc2UiLCJzZXRTdWJ0aXRsZSIsInNlbEVycm9yIiwicmVtb3ZlQ2hpbGQiLCJjc3NDbGFzcyIsImF0dHIiLCJhdHRyQ2xhc3MiLCJ0aXRsZVZhbCIsImh0bWwiLCJzZWxMYWJlbCIsInZhbHVlcyIsImdldENvbnRlbnQiLCJqb2luIiwiY3VzdG9tQ2xhc3MiLCJvcHRDbGFzcyIsInNlbFNjcm9sbCIsInNlbFNjcm9sbEhlaWdodCIsImlubmVyV2lkdGgiLCJmcm9tIiwic2VsT3B0aW9uc0hUTUwiLCJnZXRPcHRpb24iLCJzaG93U2VsZWN0aW9uIiwib3B0aW9uQ2xhc3MiLCJvcHRpb25MaW5rIiwib3B0aW9uTGlua1RhcmdldCIsIm9wdGlvbkhUTUwiLCJvcHRpb25EYXRhIiwib3B0QXNzZXQiLCJvcHRpb25EYXRhSFRNTCIsIm9wdGlvbkNvbnRlbnRIVE1MIiwicGxhY2Vob2xkZXIiLCJmaW5kIiwic3VidGl0bGUiLCJzZWxlY3RlZEluZGV4IiwidGVtcEJ1dHRvbiIsImFwcGVuZCIsImNsaWNrIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwic2V0SGFzaCIsImhhc2giLCJsb2NhdGlvbiIsImhyZWYiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiZ2V0SGFzaCIsInJlcGxhY2UiLCJkZWxheSIsImFyZ3VtZW50cyIsImJvZHlVbmxvY2siLCJib2R5TG9jayIsInNldFRpbWVvdXQiLCJkYXRhTWVkaWFRdWVyaWVzIiwiZGF0YVNldFZhbHVlIiwiYnJlYWtwb2ludHNBcnJheSIsInBhcmFtcyIsInBhcmFtc0FycmF5IiwibWRRdWVyaWVzIiwidW5pcXVlQXJyYXkiLCJtZFF1ZXJpZXNBcnJheSIsIm1lZGlhVHlwZSIsIml0ZW1zQXJyYXkiLCJkdXJhdGlvbiIsInNob3dtb3JlIiwic3R5bGUiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvdmVyZmxvdyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwicmVtb3ZlUHJvcGVydHkiLCJyZW1Ub1B4IiwicmVtVmFsdWUiLCJodG1sRm9udFNpemUiLCJwYXJzZUZsb2F0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImZvbnRTaXplIiwicHhWYWx1ZSIsIk1hdGgiLCJyb3VuZCIsInJlbW92ZUNsYXNzZXMiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9