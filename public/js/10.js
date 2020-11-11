(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

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

/***/ "./resources/js/shared/Layout.js":
/*!***************************************!*\
  !*** ./resources/js/shared/Layout.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/oladayo_fagbemi/Dev/eventbryte/resources/js/shared/Layout.js: Unexpected token, expected \":\" (12:28)\n\n\u001b[0m \u001b[90m 10 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 11 | \u001b[39m  \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 12 | \u001b[39m    \u001b[33m<\u001b[39m\u001b[33mBox\u001b[39m as\u001b[33m=\u001b[39m\u001b[32m\"main\"\u001b[39m bg\u001b[33m=\u001b[39m{bG\u001b[33m?\u001b[39mbG\u001b[32m\"gray.50\"\u001b[39m} minH\u001b[33m=\u001b[39m\u001b[32m\"100vh\"\u001b[39m w\u001b[33m=\u001b[39m\u001b[32m\"100%\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                            \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 13 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mNavbar\u001b[39m\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 14 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m{children}\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 15 | \u001b[39m    \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mBox\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at Object._raise (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:799:17)\n    at Object.raiseWithData (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:792:17)\n    at Object.raise (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:786:17)\n    at Object.unexpected (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9089:16)\n    at Object.expect (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9075:28)\n    at Object.parseConditional (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9803:12)\n    at Object.parseMaybeConditional (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9795:17)\n    at Object.parseMaybeAssign (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9752:21)\n    at Object.parseExpressionBase (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9696:23)\n    at allowInAnd (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9690:39)\n    at Object.allowInAnd (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:11448:12)\n    at Object.parseExpression (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9690:17)\n    at Object.jsxParseExpressionContainer (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:4599:30)\n    at Object.jsxParseAttributeValue (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:4566:21)\n    at Object.jsxParseAttribute (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:4617:44)\n    at Object.jsxParseOpeningElementAfterName (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:4637:28)\n    at Object.jsxParseOpeningElementAt (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:4630:17)\n    at Object.jsxParseElementAt (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:4662:33)\n    at Object.jsxParseElement (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:4736:17)\n    at Object.parseExprAtom (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:4743:19)\n    at Object.parseExprSubscripts (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9976:23)\n    at Object.parseUpdate (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9956:21)\n    at Object.parseMaybeUnary (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9945:17)\n    at Object.parseExprOps (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9815:23)\n    at Object.parseMaybeConditional (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9789:23)\n    at Object.parseMaybeAssign (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9752:21)\n    at allowInAnd (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9718:39)\n    at Object.allowInAnd (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:11448:12)\n    at Object.parseMaybeAssignAllowIn (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9718:17)\n    at Object.parseParenAndDistinguishExpression (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:10607:28)\n    at Object.parseExprAtom (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:10311:21)\n    at Object.parseExprAtom (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:4748:20)\n    at Object.parseExprSubscripts (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9976:23)\n    at Object.parseUpdate (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9956:21)\n    at Object.parseMaybeUnary (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9945:17)\n    at Object.parseExprOps (/Users/oladayo_fagbemi/Dev/eventbryte/node_modules/@babel/parser/lib/index.js:9815:23)");

/***/ })

}]);