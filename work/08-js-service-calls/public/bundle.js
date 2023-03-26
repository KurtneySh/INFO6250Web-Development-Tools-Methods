/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchDelete": () => (/* binding */ fetchDelete),
/* harmony export */   "fetchSession": () => (/* binding */ fetchSession),
/* harmony export */   "fetchUpdateWord": () => (/* binding */ fetchUpdateWord),
/* harmony export */   "fetchUser": () => (/* binding */ fetchUser),
/* harmony export */   "fetchWord": () => (/* binding */ fetchWord)
/* harmony export */ });
var fetchSession = function fetchSession() {
  return fetch('/api/session')["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    return response.json();
  });
};
var fetchUser = function fetchUser(username) {
  return fetch('/api/session', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username: username
    })
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
  });
};
var fetchWord = function fetchWord() {
  return fetch('/api/word')["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    return response.json();
  });
};
var fetchUpdateWord = function fetchUpdateWord(word) {
  return fetch('/api/word', {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      word: word
    })
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
  });
};
var fetchDelete = function fetchDelete() {
  return fetch('/api/session', {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
  });
};

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
var app = document.querySelector('#app');
var render = function render(username, storedWord) {
  app.innerHTML = generateHtml(username, storedWord);
  return;
};
var generateHtml = function generateHtml(username, storedWord) {
  if (!username && !storedWord) {
    return "\n            <div class=\"container\">\n                <input\n                    class=\"input\"\n                    type=\"text\"\n                    placeholder=\"Please enter a username to login\"\n                    maxlength=\"15\"\n                />\n                <button class=\"login\">Login</button>\n            </div>\n            <div class=\"error\"></div>\n        ";
  } else {
    return "\n            <div class=\"container\">\n                <div class=\"info\">\n                    <div>User: ".concat(username, "</div>\n                    <div>Stored Word: ").concat(storedWord || '', "</div>\n                </div>\n            \n                <input\n                    class=\"input\"\n                    type=\"text\"\n                    placeholder=\"Update your word\"\n                    maxlength=\"15\"\n                />\n                <button class=\"update\">update</button>\n                <button class=\"delete\">Log out</button>\n            </div>\n            <div class=\"error\"></div>\n        ");
  }
};

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
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.js");


var app = document.querySelector('#app');
var errorEl = document.querySelector('.error');
app.addEventListener('click', function (e) {
  if (e.target.classList.contains('login')) {
    var inputEl = document.querySelector('.input');
    var username = inputEl.value;
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchUser)(username)["catch"](function (err) {
      if (err.error == 'network-error') {
        errorEl.innerHTML = "<p>Error: Please check your network connection</p>";
        return;
      } else if (err.error == 'required-username') {
        errorEl.innerHTML = "<p>Error: Invalid username</p>";
        return;
      } else if (err.error == 'auth-insufficient') {
        errorEl.innerHTML = "<p>Error: Wrong user - Hint: Dog is not welcomed</p>";
        return;
      }
    }).then(function (response) {
      (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchWord)()["catch"](function (err) {
        if (err.error == 'network-error') {
          errorEl.innerHTML = "<p>Error: Please check your network connection</p>";
          return;
        } else if (err.error == 'auth-missing') {
          errorEl.innerHTML = "<p>Error: No valid session</p>";
          return;
        }
      }).then(function (response) {
        var username = response.username,
          storedWord = response.storedWord;
        (0,_view__WEBPACK_IMPORTED_MODULE_1__.render)(username, storedWord);
        errorEl.innerHTML = response.error ? errorEl.innerHTML : '';
      });
    });
    return;
  }
  if (e.target.classList.contains('update')) {
    var _inputEl = document.querySelector('.input');
    var updatedWord = _inputEl.value;
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchUpdateWord)(updatedWord)["catch"](function (err) {
      if (err.error == 'auth-missing') {
        errorEl.innerHTML = "<p>Error: No valid session</p>";
        return;
      } else if (err.error == 'invalid-word') {
        errorEl.innerHTML = "<p>Error: Not a valid word</p>";
        return;
      } else if (err.error == 'network-error') {
        errorEl.innerHTML = "<p>Error: Please check your network connection</p>";
        return;
      }
    }).then(function (response) {
      if (response) {
        var _username = response.username,
          storedWord = response.storedWord;
        (0,_view__WEBPACK_IMPORTED_MODULE_1__.render)(_username, storedWord);
        errorEl.innerHTML = response.error ? errorEl.innerHTML : '';
      }
      return;
    });
    return;
  }
  if (e.target.classList.contains('delete')) {
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchDelete)()["catch"](function (err) {
      if (err.error == 'network-error') {
        errorEl.innerHTML = "<p>Error: Please check your network connection</p>";
        return;
      }
    }).then(function (response) {
      errorEl.innerHTML = response.error ? errorEl.innerHTML : '';
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.render)('', '');
      return;
    });
  }
});
(0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchSession)()["catch"](function (err) {
  if (err.error == 'network-error') {
    errorEl.innerHTML = "<p>Error: Please check your network connection</p>";
    return;
  } else if (err.error == 'auth-missing') {
    errorEl.innerHTML = "<p>Error: No valid session</p>";
    return;
  }
}).then(function (response) {
  if (!response.error) {
    var username = response.username;
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchWord)(username)["catch"](function (err) {
      if (err.error == 'network-error') {
        errorEl.innerHTML = "<p>Error: Please check your network connection</p>";
        return;
      } else if (err.error == 'auth-missing') {
        errorEl.innerHTML = "<p>Error: No valid session</p>";
        return;
      }
    }).then(function (response) {
      var username = response.username,
        storedWord = response.storedWord;
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.render)(username, storedWord);
      errorEl.innerHTML = response.error ? errorEl.innerHTML : '';
      return;
    });
  }
  (0,_view__WEBPACK_IMPORTED_MODULE_1__.render)('', '');
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map