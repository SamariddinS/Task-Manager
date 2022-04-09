/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/board.js":
/*!*********************************!*\
  !*** ./src/components/board.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boardTemplate": () => (/* binding */ boardTemplate)
/* harmony export */ });
const boardTemplate = () => {
    return (
        `<section class="board container">
        <div class="board__filter-list">
          <a href="#" class="board__filter" data-sort-type="default">SORT BY DEFAULT</a>
          <a href="#" class="board__filter" data-sort-type="date-up">SORT BY DATE up</a>
          <a href="#" class="board__filter" data-sort-type="date-down">SORT BY DATE down</a>
        </div>

        <div class="board__tasks"></div>
        </section>`
    );
}

/***/ }),

/***/ "./src/components/filters.js":
/*!***********************************!*\
  !*** ./src/components/filters.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterTemplate": () => (/* binding */ filterTemplate)
/* harmony export */ });
const filterTemplate = () => {
    return (
        `      <section class="main__filter filter container">
        <input
          type="radio"
          id="filter__all"
          class="filter__input visually-hidden"
          name="filter"
          checked
        />
        <label for="filter__all" class="filter__label">
          All <span class="filter__all-count">13</span></label
        >
        <input
          type="radio"
          id="filter__overdue"
          class="filter__input visually-hidden"
          name="filter"
          disabled
        />
        <label for="filter__overdue" class="filter__label"
          >Overdue <span class="filter__overdue-count">0</span></label
        >
        <input
          type="radio"
          id="filter__today"
          class="filter__input visually-hidden"
          name="filter"
          disabled
        />
        <label for="filter__today" class="filter__label"
          >Today <span class="filter__today-count">0</span></label
        >
        <input
          type="radio"
          id="filter__favorites"
          class="filter__input visually-hidden"
          name="filter"
        />
        <label for="filter__favorites" class="filter__label"
          >Favorites <span class="filter__favorites-count">1</span></label
        >
        <input
          type="radio"
          id="filter__repeating"
          class="filter__input visually-hidden"
          name="filter"
        />
        <label for="filter__repeating" class="filter__label"
          >Repeating <span class="filter__repeating-count">1</span></label
        >
        <input
          type="radio"
          id="filter__archive"
          class="filter__input visually-hidden"
          name="filter"
        />
        <label for="filter__archive" class="filter__label"
          >Archive <span class="filter__archive-count">115</span></label
        >
      </section>`
    );
}

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuTemplate": () => (/* binding */ menuTemplate)
/* harmony export */ });
const menuTemplate = () => {
    return (
        `<section class="control__btn-wrap">
          <input
            type="radio"
            name="control"
            id="control__new-task"
            class="control__input visually-hidden"
          />
          <label for="control__new-task" class="control__label control__label--new-task"
            >+ ADD NEW TASK</label
          >
          <input
            type="radio"
            name="control"
            id="control__task"
            class="control__input visually-hidden"
            checked
          />
          <label for="control__task" class="control__label">TASKS</label>
          <input
            type="radio"
            name="control"
            id="control__statistic"
            class="control__input visually-hidden"
          />
          <label for="control__statistic" class="control__label"
            >STATISTICS</label
          >
        </section>`
    );
}

/***/ }),

/***/ "./src/components/task.js":
/*!********************************!*\
  !*** ./src/components/task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskEditTemplate": () => (/* binding */ taskEditTemplate),
/* harmony export */   "taskTemplate": () => (/* binding */ taskTemplate)
/* harmony export */ });
const taskTemplate = () => {
    return (
        `<article class="card card--black">
            <div class="card__form">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--edit">
                    edit
                  </button>
                  <button type="button" class="card__btn card__btn--archive">
                    archive
                  </button>
                  <button
                    type="button"
                    class="card__btn card__btn--favorites card__btn--disabled"
                  >
                    favorites
                  </button>
                </div>

                <div class="card__color-bar">
                  <svg class="card__color-bar-wave" width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                  <p class="card__text">Example task with default color.</p>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <div class="card__date-deadline">
                        <p class="card__input-deadline-wrap">
                          <span class="card__date">23 September</span>
                          <span class="card__time">16:15</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>`
    );
}

const taskEditTemplate = () => {
    return (
        `          <article class="card card--edit card--yellow card--repeat">
            <form class="card__form" method="get">
              <div class="card__inner">
                <div class="card__color-bar">
                  <svg class="card__color-bar-wave" width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                  <label>
                    <textarea
                      class="card__text"
                      placeholder="Start typing your text here..."
                      name="text"
                    >Here is a card with filled data</textarea>
                  </label>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <button class="card__date-deadline-toggle" type="button">
                        date: <span class="card__date-status">yes</span>
                      </button>

                      <fieldset class="card__date-deadline">
                        <label class="card__input-deadline-wrap">
                          <input
                            class="card__date"
                            type="text"
                            placeholder=""
                            name="date"
                            value="23 September 16:15"
                          />
                        </label>
                      </fieldset>

                      <button class="card__repeat-toggle" type="button">
                        repeat:<span class="card__repeat-status">yes</span>
                      </button>

                      <fieldset class="card__repeat-days">
                        <div class="card__repeat-days-inner">
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-mo-4"
                            name="repeat"
                            value="mo"
                          />
                          <label class="card__repeat-day" for="repeat-mo-4"
                            >mo</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-tu-4"
                            name="repeat"
                            value="tu"
                            checked
                          />
                          <label class="card__repeat-day" for="repeat-tu-4"
                            >tu</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-we-4"
                            name="repeat"
                            value="we"
                          />
                          <label class="card__repeat-day" for="repeat-we-4"
                            >we</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-th-4"
                            name="repeat"
                            value="th"
                          />
                          <label class="card__repeat-day" for="repeat-th-4"
                            >th</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-fr-4"
                            name="repeat"
                            value="fr"
                            checked
                          />
                          <label class="card__repeat-day" for="repeat-fr-4"
                            >fr</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            name="repeat"
                            value="sa"
                            id="repeat-sa-4"
                          />
                          <label class="card__repeat-day" for="repeat-sa-4"
                            >sa</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-su-4"
                            name="repeat"
                            value="su"
                            checked
                          />
                          <label class="card__repeat-day" for="repeat-su-4"
                            >su</label
                          >
                        </div>
                      </fieldset>
                    </div>
                  </div>

                  <div class="card__colors-inner">
                    <h3 class="card__colors-title">Color</h3>
                    <div class="card__colors-wrap">
                      <input
                        type="radio"
                        id="color-black-4"
                        class="card__color-input card__color-input--black visually-hidden"
                        name="color"
                        value="black"
                      />
                      <label
                        for="color-black-4"
                        class="card__color card__color--black"
                        >black</label
                      >
                      <input
                        type="radio"
                        id="color-yellow-4"
                        class="card__color-input card__color-input--yellow visually-hidden"
                        name="color"
                        value="yellow"
                        checked
                      />
                      <label
                        for="color-yellow-4"
                        class="card__color card__color--yellow"
                        >yellow</label
                      >
                      <input
                        type="radio"
                        id="color-blue-4"
                        class="card__color-input card__color-input--blue visually-hidden"
                        name="color"
                        value="blue"
                      />
                      <label
                        for="color-blue-4"
                        class="card__color card__color--blue"
                        >blue</label
                      >
                      <input
                        type="radio"
                        id="color-green-4"
                        class="card__color-input card__color-input--green visually-hidden"
                        name="color"
                        value="green"
                      />
                      <label
                        for="color-green-4"
                        class="card__color card__color--green"
                        >green</label
                      >
                      <input
                        type="radio"
                        id="color-pink-4"
                        class="card__color-input card__color-input--pink visually-hidden"
                        name="color"
                        value="pink"
                      />
                      <label
                        for="color-pink-4"
                        class="card__color card__color--pink"
                        >pink</label
                      >
                    </div>
                  </div>
                </div>

                <div class="card__status-btns">
                  <button class="card__save" type="submit">save</button>
                  <button class="card__delete" type="button">delete</button>
                </div>
              </div>
            </form>
          </article>`
    );
}

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/menu */ "./src/components/menu.js");
/* harmony import */ var _components_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/filters */ "./src/components/filters.js");
/* harmony import */ var _components_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/board */ "./src/components/board.js");
/* harmony import */ var _components_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/task */ "./src/components/task.js");







const render = (container, template, place = 'beforeend') => {
    container.insertAdjacentHTML(place, template);
}

const main = document.querySelector('.main');
const header = main.querySelector('.main__control');

render(header, (0,_components_menu__WEBPACK_IMPORTED_MODULE_0__.menuTemplate)());
render(main, (0,_components_filters__WEBPACK_IMPORTED_MODULE_1__.filterTemplate)());
render(main, (0,_components_board__WEBPACK_IMPORTED_MODULE_2__.boardTemplate)());

const taskLoList = main.querySelector('.board__tasks');
const board = main.querySelector('.board');

render(taskLoList, (0,_components_task__WEBPACK_IMPORTED_MODULE_3__.taskEditTemplate)());

const TASK_COUNT = 3;
for (let i = 0; i < TASK_COUNT; i++) {
    render(taskLoList, taskTemplate());
}
render(board, loadMoreButton(), );
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map