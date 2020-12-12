module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/auth/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/santhosh-umapathi/Desktop/React/NextJs/components/User.js\";\n\n\n\nconst User = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-1384122699\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      className: \"jsx-1384122699\",\n      children: props.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"jsx-1384122699\",\n      children: props.age\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"1384122699\",\n      children: \"div.jsx-1384122699{border:1px solid orange;box-shadow:2px 2px black;margin:20px auto;padding:20px;text-align:center;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW50aG9zaC11bWFwYXRoaS9EZXNrdG9wL1JlYWN0L05leHRKcy9jb21wb25lbnRzL1VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUWUsQUFJOEIsd0JBQ0MseUJBQ1IsaUJBQ0osYUFDSSxrQkFDbEIiLCJmaWxlIjoiL1VzZXJzL3NhbnRob3NoLXVtYXBhdGhpL0Rlc2t0b3AvUmVhY3QvTmV4dEpzL2NvbXBvbmVudHMvVXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgVXNlciA9IChwcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8aDE+e3Byb3BzLm5hbWV9PC9oMT5cblx0XHRcdDxwPntwcm9wcy5hZ2V9PC9wPlxuXHRcdFx0XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdGRpdlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDJweCAycHggYmxhY2s7XG5cdFx0XHRcdFx0bWFyZ2luOiAyMHB4IGF1dG87XG5cdFx0XHRcdFx0cGFkZGluZzogMjBweDtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0XHRcdFx0fVxuXHRcdFx0YH1cblx0XHRcdDwvc3R5bGU+XG5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIl19 */\\n/*@ sourceURL=/Users/santhosh-umapathi/Desktop/React/NextJs/components/User.js */\"\n    }, void 0, false, void 0, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 3\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXIuanM/NTY1OCJdLCJuYW1lcyI6WyJVc2VyIiwicHJvcHMiLCJuYW1lIiwiYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFJQyxLQUFELElBQVc7QUFDdkIsc0JBQ0M7QUFBQTtBQUFBLDRCQUNDO0FBQUE7QUFBQSxnQkFBS0EsS0FBSyxDQUFDQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFFQztBQUFBO0FBQUEsZ0JBQUlELEtBQUssQ0FBQ0U7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBbUJBLENBcEJEOztBQXNCZUgsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFVzZXIgPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGgxPntwcm9wcy5uYW1lfTwvaDE+XG5cdFx0XHQ8cD57cHJvcHMuYWdlfTwvcD5cblx0XHRcdFxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRkaXZcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAycHggMnB4IGJsYWNrO1xuXHRcdFx0XHRcdG1hcmdpbjogMjBweCBhdXRvO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDIwcHg7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdFx0XHRcdH1cblx0XHRcdGB9XG5cdFx0XHQ8L3N0eWxlPlxuXG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/User.js\n");

/***/ }),

/***/ "./pages/auth/index.js":
/*!*****************************!*\
  !*** ./pages/auth/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/User */ \"./components/User.js\");\n\nvar _jsxFileName = \"/Users/santhosh-umapathi/Desktop/React/NextJs/pages/auth/index.js\";\n\n\n\nconst AuthIndexPage = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: [\"Auth Index Page \", props.appName]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      name: \"NEXT Js\",\n      age: \"new\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 4\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 3\n  }, undefined);\n};\n\nAuthIndexPage.getInitialProps = async (context) => {\n  const promise = new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve({\n        appName: \"Super App (Auth)\"\n      });\n    }, 5000);\n  });\n  return promise;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthIndexPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoL2luZGV4LmpzPzZjNTUiXSwibmFtZXMiOlsiQXV0aEluZGV4UGFnZSIsInByb3BzIiwiYXBwTmFtZSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsTUFBTUEsYUFBYSxHQUFJQyxLQUFELElBQVc7QUFDaEMsc0JBQ0M7QUFBQSw0QkFDQztBQUFBLHFDQUFzQkEsS0FBSyxDQUFDQyxPQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFHQyxxRUFBQyx3REFBRDtBQUFNLFVBQUksRUFBQyxTQUFYO0FBQXFCLFNBQUcsRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBUUEsQ0FURDs7QUFXQUYsYUFBYSxDQUFDRyxlQUFkLEdBQWdDLE9BQU9DLE9BQVAsS0FDaEM7QUFFRSxRQUFNQyxPQUFPLEdBQUcsSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUM1QjtBQUNDQyxjQUFVLENBQUMsTUFDYjtBQUNFRixhQUFPLENBQUM7QUFBRUwsZUFBTyxFQUFFO0FBQVgsT0FBRCxDQUFQO0FBQ0EsS0FIVSxFQUdSLElBSFEsQ0FBVjtBQUlBLEdBTmUsQ0FBaEI7QUFTRCxTQUFPRyxPQUFQO0FBQ0EsQ0FiRDs7QUFnQmVMLDRFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXV0aC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Vc2VyJ1xuXG5jb25zdCBBdXRoSW5kZXhQYWdlID0gKHByb3BzKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxoMT5BdXRoIEluZGV4IFBhZ2UgeyBwcm9wcy5hcHBOYW1lfTwvaDE+XG5cblx0XHRcdDxVc2VyIG5hbWU9XCJORVhUIEpzXCIgYWdlPVwibmV3XCIgLz5cblx0XHRcdFxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbkF1dGhJbmRleFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+XG57XG5cdFxuXHRcdGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PlxuXHRcdHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT5cblx0e1xuXHRcdFx0cmVzb2x2ZSh7IGFwcE5hbWU6IFwiU3VwZXIgQXBwIChBdXRoKVwiIH0pXG5cdFx0fSwgNTAwMCk7XG5cdFx0fSlcblx0XG5cblx0cmV0dXJuIHByb21pc2Vcbn1cblx0XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhJbmRleFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });