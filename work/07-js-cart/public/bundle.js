/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cats": () => (/* binding */ cats)
/* harmony export */ });
var cats = [{
  name: 'Fluffball',
  price: 0.99,
  img: 'http://placekitten.com/150/150?image=1',
  amount: 0
}, {
  name: 'Ninja Four',
  price: 3.14,
  img: 'http://placekitten.com/150/150?image=2',
  amount: 0
}, {
  name: 'General Mayhem',
  price: 2.73,
  img: 'http://placekitten.com/150/150?image=3',
  amount: 0
}];

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
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

(function () {
  var appEl = document.querySelector('#app');
  var cartHtml = document.querySelector('.cart');
  var cartHidden = false;
  var getCartHtml = function getCartHtml() {
    if (getCartAmount() === 'View Cart (0)') {
      cartHtml = "\n                <div class=\"empty-cart\">Nothing in the cart</div>\n            ";
    } else if (!cartHidden) {
      var checkout = document.querySelector('.checkout');
      checkout.innerHTML = "";
      cartHtml = "\n                <div class=\"icon\"><i class=\"gg-shopping-cart\"></i></div>\n            ";
    } else {
      cartHtml = _data__WEBPACK_IMPORTED_MODULE_0__.cats.filter(function (cat) {
        return cat.amount > 0;
      }).map(function (cat) {
        var checkout = document.querySelector('.checkout');
        checkout.innerHTML = "<button class=\"checkout-button\">Checkout</button>";
        return "\n                    <li class=\"cart-cat cat".concat(_data__WEBPACK_IMPORTED_MODULE_0__.cats.indexOf(cat), "\">\n                        <img src=\"").concat(cat.img, "\"/><span>").concat(cat.name, "</span>\n                        <span class=\"cat").concat(_data__WEBPACK_IMPORTED_MODULE_0__.cats.indexOf(cat), "-number\">amount: ").concat(cat.amount, "</span>\n                        <span class=\"cat").concat(_data__WEBPACK_IMPORTED_MODULE_0__.cats.indexOf(cat), "-number-total\">total price: $").concat((cat.amount * cat.price).toFixed(2), "</span>\n                        <div class=\"operation\">\n                            <span class=\"add cart-number\" data-index=\"").concat(_data__WEBPACK_IMPORTED_MODULE_0__.cats.indexOf(cat), "\"> + </span>\n                            <span class=\"reduce\" data-index=\"").concat(_data__WEBPACK_IMPORTED_MODULE_0__.cats.indexOf(cat), "\"> - </span>\n                            <button class=\"delete\" data-index=\"").concat(_data__WEBPACK_IMPORTED_MODULE_0__.cats.indexOf(cat), "\">Delete</button>\n                        </div>\n                    </li>\n                ");
      }).join('');
    }
    return cartHtml;
  };
  var render = function render() {
    var catsHtml = _data__WEBPACK_IMPORTED_MODULE_0__.cats.map(function (cat, index) {
      return "\n                <li class=\"cat\">\n                    <img src=\"".concat(cat.img, "\"/>\n                    <div>").concat(cat.name, ": $").concat(cat.price, "/each</div>\n                    <div><button data-index=\"").concat(index, "\" class=\"add-cart\" type=\"button\"> Add to cart </button></div>\n                </li>\n            ");
    }).join('');
    appEl.innerHTML = "\n            <ul class=\"cat-list\">\n                ".concat(catsHtml, "\n            </ul>\n            <button class=\"cats-number show\">").concat(getCartAmount(), "</button>\n            <div class=\"cart\">").concat(getCartHtml(), "</div>\n            <div class=\"checkout\">").concat(getCheckoutButton(), "</div>\n        ");
  };
  var getCheckoutButton = function getCheckoutButton() {
    if (cartHidden && getCartAmount() !== 'View Cart (0)') {
      return "<button class=\"checkout-button\">Checkout</button>";
    } else {
      return "";
    }
  };
  var getCartAmount = function getCartAmount() {
    var amountSum = 0;
    var _iterator = _createForOfIteratorHelper(_data__WEBPACK_IMPORTED_MODULE_0__.cats),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var cat = _step.value;
        amountSum += cat.amount;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return "View Cart (".concat(amountSum, ")");
  };
  appEl.addEventListener('click', function (e) {
    if (e.target.classList.contains('add-cart')) {
      var index = e.target.dataset.index;
      _data__WEBPACK_IMPORTED_MODULE_0__.cats[index].amount += 1;
      var catsNumber = document.querySelector('.cats-number');
      var emptyCart = document.querySelector('.empty-cart');
      if (emptyCart) {
        emptyCart.innerText = '';
      }
      catsNumber.innerText = getCartAmount();
      cartHtml = getCartHtml();
      return;
    }
    if (e.target.classList.contains('add')) {
      var _index = e.target.dataset.index;
      _data__WEBPACK_IMPORTED_MODULE_0__.cats[_index].amount += 1;
      var catNumber = document.querySelector(".cat".concat(_index, "-number"));
      var catTotalPrice = document.querySelector(".cat".concat(_index, "-number-total"));
      catTotalPrice.innerText = "total price: $".concat((_data__WEBPACK_IMPORTED_MODULE_0__.cats[_index].amount * _data__WEBPACK_IMPORTED_MODULE_0__.cats[_index].price).toFixed(2));
      catNumber.innerText = "amount: ".concat(_data__WEBPACK_IMPORTED_MODULE_0__.cats[_index].amount);
      return;
    }
    if (e.target.classList.contains('show')) {
      var _cartHtml = document.querySelector('.cart');
      var cartNumber = document.querySelector('.cats-number');
      var addCartButton = document.querySelectorAll(".add-cart");
      if (cartHidden && getCartAmount() !== 'View Cart(0)') {
        cartHidden = false;
        cartNumber.innerText = getCartAmount();
        addCartButton.forEach(function (button) {
          return button.disabled = false;
        });
      } else {
        cartNumber.innerText = 'Hide cart';
        cartHidden = true;
        addCartButton.forEach(function (button) {
          return button.disabled = true;
        });
      }
      _cartHtml.innerHTML = getCartHtml();
      return;
    }
    if (e.target.classList.contains('reduce')) {
      var _index2 = e.target.dataset.index;
      var currCat = document.querySelector(".cat".concat(_index2));
      if (_data__WEBPACK_IMPORTED_MODULE_0__.cats[_index2].amount > 1) {
        _data__WEBPACK_IMPORTED_MODULE_0__.cats[_index2].amount -= 1;
        var _catNumber = document.querySelector(".cat".concat(_index2, "-number"));
        var _catTotalPrice = document.querySelector(".cat".concat(_index2, "-number-total"));
        _catTotalPrice.innerText = "total price: $".concat((_data__WEBPACK_IMPORTED_MODULE_0__.cats[_index2].amount * _data__WEBPACK_IMPORTED_MODULE_0__.cats[_index2].price).toFixed(2));
        _catNumber.innerText = "amount: ".concat(_data__WEBPACK_IMPORTED_MODULE_0__.cats[_index2].amount);
      } else {
        _data__WEBPACK_IMPORTED_MODULE_0__.cats[_index2].amount -= 1;
        currCat.remove();
      }
      var checkout = document.querySelector('.checkout');
      checkout.innerHTML = getCheckoutButton();
    }
    if (e.target.classList.contains('delete')) {
      var _index3 = e.target.dataset.index;
      var _currCat = document.querySelector(".cat".concat(_index3));
      _data__WEBPACK_IMPORTED_MODULE_0__.cats[_index3].amount = 0;
      _currCat.remove();
      var _checkout = document.querySelector('.checkout');
      _checkout.innerHTML = getCheckoutButton();
    }
    if (e.target.classList.contains('checkout-button')) {
      var _iterator2 = _createForOfIteratorHelper(_data__WEBPACK_IMPORTED_MODULE_0__.cats),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var cat = _step2.value;
          cat.amount = 0;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      cartHidden = false;
      render();
    }
  });
  render();
})();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map