(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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
    }, event.title)), "\u02D9");
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./resources/js/components/Navbar.js":
/*!*******************************************!*\
  !*** ./resources/js/components/Navbar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/esm/index.js");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");





var Navbar = function Navbar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    as: "nav",
    p: ".8rem",
    bg: "gray.100",
    align: "center",
    justify: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    align: "center",
    mr: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    as: "h2",
    size: "lg",
    letterSpacing: "-.1rem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "span"
  }, "event"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "span",
    color: "red.400"
  }, "bryte"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    flex: "3",
    mr: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputLeftElement"], {
    pointerEvents: "none",
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__["SearchIcon"], {
      color: "gray.400"
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Search Events",
    bg: "gray.50"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    justify: "space-around",
    flex: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    mr: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outline",
    colorScheme: "red",
    mr: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/about"
  }, "Create Event")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/contact"
  }, "Sign in"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

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
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/esm/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ "./resources/js/components/Navbar.js");



function Layout(_ref) {
  var title = _ref.title,
      children = _ref.children;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.title = title;
  }, [title]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "main",
    bg: "gray.50",
    h: "100vh",
    w: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, children));
}

/***/ })

}]);