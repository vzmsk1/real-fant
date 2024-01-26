/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 753:
/***/ (function() {

document.addEventListener('DOMContentLoaded', () => {
  let flag = true;
  const items = document.querySelectorAll('.header__nav-item-heading');
  items.forEach(item => {
    item.addEventListener('click', event => {
      if (flag) {
        item.classList.add('--active');
      } else {
        item.classList.remove('--active');
      }
      flag = !flag;
    });
  });
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

/***/ }),

/***/ 685:
/***/ (function() {

const menuInit = () => {
  if (document.querySelector('.hamburger')) {
    const hamburger = document.querySelector('.hamburger');
    let bodyLockStatus = true;
    hamburger.addEventListener('click', function (e) {
      if (bodyLockStatus) {
        document.documentElement.classList.add('_menu-opened');
        document.documentElement.classList.add('lock');
      } else {
        document.documentElement.classList.remove('_menu-opened');
        document.documentElement.classList.remove('lock');
      }
      bodyLockStatus = !bodyLockStatus;
    });
  }
};
menuInit();

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/* harmony import */ var _utils_hamburger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(685);
/* harmony import */ var _utils_hamburger_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_hamburger_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_dd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(283);
/* harmony import */ var _libs_dd_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_libs_dd_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dev_ukik0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(753);
/* harmony import */ var _dev_ukik0_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dev_ukik0_js__WEBPACK_IMPORTED_MODULE_2__);


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
// import './utils/select.js';

// modals
// import './utils/modals.js';

// ---------------------------------- libs ----------------------------------

// dynamic dom


// --------------------------------------------------------------------------





}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRTtRQUNoQnZFLFFBQVEsQ0FBQ3lFLGVBQWUsQ0FBQ2pFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztRQUN0RFQsUUFBUSxDQUFDeUUsZUFBZSxDQUFDakUsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQ2xELENBQUMsTUFBTTtRQUNIVCxRQUFRLENBQUN5RSxlQUFlLENBQUNqRSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDekRWLFFBQVEsQ0FBQ3lFLGVBQWUsQ0FBQ2pFLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQztNQUNyRDtNQUVBNkQsY0FBYyxHQUFHLENBQUNBLGNBQWM7SUFDcEMsQ0FBQyxDQUFDO0VBQ047QUFDSixDQUFDO0FBRURGLFFBQVEsQ0FBQyxDQUFDOzs7Ozs7VUNuQlY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7Ozs7Ozs7Ozs7O0FDQWxCOztBQUU1Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDOEI7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDc0I7O0FBRXRCOztBQUV5QjtBQUNFO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvZGV2L3VraWswLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9saWJzL2RkLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy9oYW1idXJnZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBsZXQgZmxhZyA9IHRydWU7XG5cbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX25hdi1pdGVtLWhlYWRpbmcnKTtcblxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGZsYWcpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJy0tYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnLS1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmxhZyA9ICFmbGFnO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5mdW5jdGlvbiBEeW5hbWljQWRhcHQodHlwZSkge1xyXG4gIHRoaXMudHlwZSA9IHR5cGU7XHJcbn1cclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IF90aGlzID0gdGhpcztcclxuICB0aGlzLtC+YmplY3RzID0gW107XHJcbiAgdGhpcy5kYUNsYXNzbmFtZSA9ICdfZHluYW1pY19hZGFwdF8nO1xyXG4gIHRoaXMubm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kYV0nKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLm5vZGVzW2ldO1xyXG4gICAgY29uc3QgZGF0YSA9IG5vZGUuZGF0YXNldC5kYS50cmltKCk7XHJcbiAgICBjb25zdCBkYXRhQXJyYXkgPSBkYXRhLnNwbGl0KCcsJyk7XHJcbiAgICBjb25zdCDQvmJqZWN0ID0ge307XHJcbiAgICDQvmJqZWN0LmVsZW1lbnQgPSBub2RlO1xyXG4gICAg0L5iamVjdC5wYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICDQvmJqZWN0LmRlc3RpbmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihkYXRhQXJyYXlbMF0udHJpbSgpKTtcclxuICAgINC+YmplY3QuYnJlYWtwb2ludCA9IGRhdGFBcnJheVsxXSA/IGRhdGFBcnJheVsxXS50cmltKCkgOiAnNzY3JztcclxuICAgINC+YmplY3QucGxhY2UgPSBkYXRhQXJyYXlbMl0gPyBkYXRhQXJyYXlbMl0udHJpbSgpIDogJ2xhc3QnO1xyXG4gICAg0L5iamVjdC5pbmRleCA9IHRoaXMuaW5kZXhJblBhcmVudCjQvmJqZWN0LnBhcmVudCwg0L5iamVjdC5lbGVtZW50KTtcclxuICAgIHRoaXMu0L5iamVjdHMucHVzaCjQvmJqZWN0KTtcclxuICB9XHJcbiAgdGhpcy5hcnJheVNvcnQodGhpcy7QvmJqZWN0cyk7XHJcbiAgdGhpcy5tZWRpYVF1ZXJpZXMgPSBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoXHJcbiAgICB0aGlzLtC+YmplY3RzLFxyXG4gICAgZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAnKCcgK1xyXG4gICAgICAgIHRoaXMudHlwZSArXHJcbiAgICAgICAgJy13aWR0aDogJyArXHJcbiAgICAgICAgaXRlbS5icmVha3BvaW50ICtcclxuICAgICAgICAncHgpLCcgK1xyXG4gICAgICAgIGl0ZW0uYnJlYWtwb2ludFxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICAgIHRoaXNcclxuICApO1xyXG4gIHRoaXMubWVkaWFRdWVyaWVzID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKFxyXG4gICAgdGhpcy5tZWRpYVF1ZXJpZXMsXHJcbiAgICBmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIHNlbGYpIHtcclxuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoc2VsZiwgaXRlbSkgPT09IGluZGV4O1xyXG4gICAgfVxyXG4gICk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1lZGlhUXVlcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgbWVkaWEgPSB0aGlzLm1lZGlhUXVlcmllc1tpXTtcclxuICAgIGNvbnN0IG1lZGlhU3BsaXQgPSBTdHJpbmcucHJvdG90eXBlLnNwbGl0LmNhbGwobWVkaWEsICcsJyk7XHJcbiAgICBjb25zdCBtYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEobWVkaWFTcGxpdFswXSk7XHJcbiAgICBjb25zdCBtZWRpYUJyZWFrcG9pbnQgPSBtZWRpYVNwbGl0WzFdO1xyXG4gICAgY29uc3Qg0L5iamVjdHNGaWx0ZXIgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoXHJcbiAgICAgIHRoaXMu0L5iamVjdHMsXHJcbiAgICAgIGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uYnJlYWtwb2ludCA9PT0gbWVkaWFCcmVha3BvaW50O1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgbWF0Y2hNZWRpYS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgIF90aGlzLm1lZGlhSGFuZGxlcihtYXRjaE1lZGlhLCDQvmJqZWN0c0ZpbHRlcik7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubWVkaWFIYW5kbGVyKG1hdGNoTWVkaWEsINC+YmplY3RzRmlsdGVyKTtcclxuICB9XHJcbn07XHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUubWVkaWFIYW5kbGVyID0gZnVuY3Rpb24gKG1hdGNoTWVkaWEsINC+YmplY3RzKSB7XHJcbiAgaWYgKG1hdGNoTWVkaWEubWF0Y2hlcykge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCDQvmJqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCDQvmJqZWN0ID0g0L5iamVjdHNbaV07XHJcbiAgICAgINC+YmplY3QuaW5kZXggPSB0aGlzLmluZGV4SW5QYXJlbnQo0L5iamVjdC5wYXJlbnQsINC+YmplY3QuZWxlbWVudCk7XHJcbiAgICAgIHRoaXMubW92ZVRvKNC+YmplY3QucGxhY2UsINC+YmplY3QuZWxlbWVudCwg0L5iamVjdC5kZXN0aW5hdGlvbik7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vZm9yIChsZXQgaSA9IDA7IGkgPCDQvmJqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgZm9yIChsZXQgaSA9INC+YmplY3RzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGNvbnN0INC+YmplY3QgPSDQvmJqZWN0c1tpXTtcclxuICAgICAgaWYgKNC+YmplY3QuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5kYUNsYXNzbmFtZSkpIHtcclxuICAgICAgICB0aGlzLm1vdmVCYWNrKNC+YmplY3QucGFyZW50LCDQvmJqZWN0LmVsZW1lbnQsINC+YmplY3QuaW5kZXgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5EeW5hbWljQWRhcHQucHJvdG90eXBlLm1vdmVUbyA9IGZ1bmN0aW9uIChwbGFjZSwgZWxlbWVudCwgZGVzdGluYXRpb24pIHtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5kYUNsYXNzbmFtZSk7XHJcbiAgaWYgKHBsYWNlID09PSAnbGFzdCcgfHwgcGxhY2UgPj0gZGVzdGluYXRpb24uY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICBkZXN0aW5hdGlvbi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAocGxhY2UgPT09ICdmaXJzdCcpIHtcclxuICAgIGRlc3RpbmF0aW9uLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIGVsZW1lbnQpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBkZXN0aW5hdGlvbi5jaGlsZHJlbltwbGFjZV0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIGVsZW1lbnQpO1xyXG59O1xyXG5EeW5hbWljQWRhcHQucHJvdG90eXBlLm1vdmVCYWNrID0gZnVuY3Rpb24gKHBhcmVudCwgZWxlbWVudCwgaW5kZXgpIHtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5kYUNsYXNzbmFtZSk7XHJcbiAgaWYgKHBhcmVudC5jaGlsZHJlbltpbmRleF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgcGFyZW50LmNoaWxkcmVuW2luZGV4XS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgZWxlbWVudCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBhcmVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xyXG4gIH1cclxufTtcclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5pbmRleEluUGFyZW50ID0gZnVuY3Rpb24gKHBhcmVudCwgZWxlbWVudCkge1xyXG4gIGNvbnN0IGFycmF5ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwocGFyZW50LmNoaWxkcmVuKTtcclxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhcnJheSwgZWxlbWVudCk7XHJcbn07XHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUuYXJyYXlTb3J0ID0gZnVuY3Rpb24gKGFycikge1xyXG4gIGlmICh0aGlzLnR5cGUgPT09ICdtaW4nKSB7XHJcbiAgICBBcnJheS5wcm90b3R5cGUuc29ydC5jYWxsKGFyciwgZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgaWYgKGEuYnJlYWtwb2ludCA9PT0gYi5icmVha3BvaW50KSB7XHJcbiAgICAgICAgaWYgKGEucGxhY2UgPT09IGIucGxhY2UpIHtcclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGEucGxhY2UgPT09ICdmaXJzdCcgfHwgYi5wbGFjZSA9PT0gJ2xhc3QnKSB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gJ2xhc3QnIHx8IGIucGxhY2UgPT09ICdmaXJzdCcpIHtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGEucGxhY2UgLSBiLnBsYWNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYS5icmVha3BvaW50IC0gYi5icmVha3BvaW50O1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIEFycmF5LnByb3RvdHlwZS5zb3J0LmNhbGwoYXJyLCBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICBpZiAoYS5icmVha3BvaW50ID09PSBiLmJyZWFrcG9pbnQpIHtcclxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gYi5wbGFjZSkge1xyXG4gICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gJ2ZpcnN0JyB8fCBiLnBsYWNlID09PSAnbGFzdCcpIHtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGEucGxhY2UgPT09ICdsYXN0JyB8fCBiLnBsYWNlID09PSAnZmlyc3QnKSB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYi5wbGFjZSAtIGEucGxhY2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBiLmJyZWFrcG9pbnQgLSBhLmJyZWFrcG9pbnQ7XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn07XHJcbmNvbnN0IGRhID0gbmV3IER5bmFtaWNBZGFwdCgnbWF4Jyk7XHJcbmRhLmluaXQoKTtcclxuIiwiY29uc3QgbWVudUluaXQgPSAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKSkge1xuICAgICAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJyk7XG4gICAgICAgIGxldCBib2R5TG9ja1N0YXR1cyA9IHRydWU7XG5cbiAgICAgICAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChib2R5TG9ja1N0YXR1cykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdfbWVudS1vcGVuZWQnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbG9jaycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX21lbnUtb3BlbmVkJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYm9keUxvY2tTdGF0dXMgPSAhYm9keUxvY2tTdGF0dXM7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbm1lbnVJbml0KCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsImltcG9ydCAnLi4vc2Nzcy9zdHlsZS5zY3NzJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmb3JtcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gaW1wb3J0ICogYXMgZm9ybXMgZnJvbSAnLi91dGlscy9mb3Jtcy5qcyc7XG5cbi8vIGZvcm0gZmllbGRzXG4vLyBmb3Jtcy5mb3JtRmllbGRzSW5pdCh7IHZpZXdQYXNzOiBmYWxzZSB9KTtcblxuLy8gZm9ybSBzdWJtaXRcbi8vIGZvcm1zLmZvcm1TdWJtaXQoKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB1dGlscyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy9oYW1idXJnZXJcbmltcG9ydCAnLi91dGlscy9oYW1idXJnZXIuanMnO1xuXG4vLyB0YWJzXG4vLyBpbXBvcnQgJy4vdXRpbHMvdGFicy5qcyc7XG5cbi8vIGFjY29yZGlvblxuLy8gaW1wb3J0ICcuL3V0aWxzL2FjY29yZGlvbi5qcyc7XG5cbi8vIHNlbGVjdFxuLy8gaW1wb3J0ICcuL3V0aWxzL3NlbGVjdC5qcyc7XG5cbi8vIG1vZGFsc1xuLy8gaW1wb3J0ICcuL3V0aWxzL21vZGFscy5qcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbGlicyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGR5bmFtaWMgZG9tXG5pbXBvcnQgJy4vbGlicy9kZC5qcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCAnLi9kZXYvdnptc2sxLmpzJztcbmltcG9ydCAnLi9kZXYvbWFya3VzRE0uanMnO1xuaW1wb3J0ICcuL2Rldi91a2lrMC5qcyc7XG5pbXBvcnQgJy4vZGV2L2tpZTZlci5qcyc7XG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZmxhZyIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiZXZlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJEeW5hbWljQWRhcHQiLCJ0eXBlIiwicHJvdG90eXBlIiwiaW5pdCIsIl90aGlzIiwi0L5iamVjdHMiLCJkYUNsYXNzbmFtZSIsIm5vZGVzIiwiaSIsImxlbmd0aCIsIm5vZGUiLCJkYXRhIiwiZGF0YXNldCIsImRhIiwidHJpbSIsImRhdGFBcnJheSIsInNwbGl0Iiwi0L5iamVjdCIsImVsZW1lbnQiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiZGVzdGluYXRpb24iLCJxdWVyeVNlbGVjdG9yIiwiYnJlYWtwb2ludCIsInBsYWNlIiwiaW5kZXgiLCJpbmRleEluUGFyZW50IiwicHVzaCIsImFycmF5U29ydCIsIm1lZGlhUXVlcmllcyIsIkFycmF5IiwibWFwIiwiY2FsbCIsImZpbHRlciIsInNlbGYiLCJpbmRleE9mIiwibWVkaWEiLCJtZWRpYVNwbGl0IiwiU3RyaW5nIiwibWF0Y2hNZWRpYSIsIndpbmRvdyIsIm1lZGlhQnJlYWtwb2ludCIsItC+YmplY3RzRmlsdGVyIiwiYWRkTGlzdGVuZXIiLCJtZWRpYUhhbmRsZXIiLCJtYXRjaGVzIiwibW92ZVRvIiwiY29udGFpbnMiLCJtb3ZlQmFjayIsImNoaWxkcmVuIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwidW5kZWZpbmVkIiwiYXJyYXkiLCJzbGljZSIsImFyciIsInNvcnQiLCJhIiwiYiIsIm1lbnVJbml0IiwiaGFtYnVyZ2VyIiwiYm9keUxvY2tTdGF0dXMiLCJlIiwiZG9jdW1lbnRFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==