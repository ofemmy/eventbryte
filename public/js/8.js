(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./resources/js/Pages/Event/Index.js":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Event/Index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/esm/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/Layout */ "./resources/js/shared/Layout.js");





var Index = function Index(_ref) {
  var events = _ref.events;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Events"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
    minChildWidth: "330px",
    spacing: "30px",
    p: 6
  }, events.map(function (event) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      key: event.id,
      borderWidth: "1px",
      borderRadius: "lg",
      overflow: "hidden",
      p: 4
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: event.imageUrl,
      alt: "hi there"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      mt: "1",
      fontWeight: "semibold",
      as: "h4",
      lineHeight: "tight",
      isTruncated: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"], {
      href: event.detailsUrl
    }, event.title)));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./resources/js/components/Navbar.js":
/*!*******************************************!*\
  !*** ./resources/js/components/Navbar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/oladayo_fagbemi/Dev/eventbryte/resources/js/components/Navbar.js: Unexpected token (15:8)\n\n\u001b[0m \u001b[90m 13 | \u001b[39m    \u001b[36mconst\u001b[39m handleClick\u001b[33m=\u001b[39m()\u001b[33m=>\u001b[39m{\u001b[0m\n\u001b[0m \u001b[90m 14 | \u001b[39m        isLoggedIn \u001b[33m?\u001b[39m \u001b[33mInertia\u001b[39m\u001b[33m.\u001b[39mpost(\u001b[32m\"/logout\"\u001b[39m) \u001b[33m:\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 15 | \u001b[39m        \u001b[36mif\u001b[39m (isLoggedIn) {\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 16 | \u001b[39m            \u001b[33mInertia\u001b[39m\u001b[33m.\u001b[39mpost(\u001b[32m\"/logout\"\u001b[39m)\u001b[0m\n\u001b[0m \u001b[90m 17 | \u001b[39m        } \u001b[36melse\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 18 | \u001b[39m            \u001b[33mInertia\u001b[39m\u001b[33m.\u001b[39mget(\u001b[32m\"/login\"\u001b[39m)\u001b[0m\n    at Object._raise (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:799:17)\n    at Object.raiseWithData (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:792:17)\n    at Object.raise (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:786:17)\n    at Object.unexpected (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9089:16)\n    at Object.parseExprAtom (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:10416:20)\n    at Object.parseExprAtom (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:4748:20)\n    at Object.parseExprSubscripts (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9976:23)\n    at Object.parseUpdate (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9956:21)\n    at Object.parseMaybeUnary (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9945:17)\n    at Object.parseExprOps (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9815:23)\n    at Object.parseMaybeConditional (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9789:23)\n    at Object.parseMaybeAssign (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9752:21)\n    at Object.parseConditional (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9804:29)\n    at Object.parseMaybeConditional (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9795:17)\n    at Object.parseMaybeAssign (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9752:21)\n    at Object.parseExpressionBase (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9696:23)\n    at allowInAnd (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9690:39)\n    at Object.allowInAnd (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:11448:12)\n    at Object.parseExpression (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9690:17)\n    at Object.parseStatementContent (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:11708:23)\n    at Object.parseStatement (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:11577:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:12159:25)\n    at Object.parseBlockBody (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:12145:10)\n    at Object.parseBlock (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:12129:10)\n    at Object.parseFunctionBody (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:11108:24)\n    at Object.parseArrowExpression (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:11077:10)\n    at Object.parseParenAndDistinguishExpression (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:10635:12)\n    at Object.parseExprAtom (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:10311:21)\n    at Object.parseExprAtom (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:4748:20)\n    at Object.parseExprSubscripts (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9976:23)\n    at Object.parseUpdate (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9956:21)\n    at Object.parseMaybeUnary (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9945:17)\n    at Object.parseExprOps (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9815:23)\n    at Object.parseMaybeConditional (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9789:23)\n    at Object.parseMaybeAssign (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9752:21)\n    at allowInAnd (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9718:39)");

/***/ }),

/***/ "./resources/js/shared/Layout.js":
/*!***************************************!*\
  !*** ./resources/js/shared/Layout.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/esm/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./resources/js/components/Navbar.js");




function Layout(_ref) {
  var title = _ref.title,
      children = _ref.children;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.title = title;
  }, [title]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "main",
    bg: "gray.50",
    minH: "100vh",
    w: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, children));
}

/***/ })

}]);