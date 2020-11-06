(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/Pages/Index.js":
/*!*************************************!*\
  !*** ./resources/js/Pages/Index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/esm/index.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Hero */ "./resources/js/components/Hero.js");
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Layout */ "./resources/js/shared/Layout.js");
/* harmony import */ var _components_EventCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/EventCard */ "./resources/js/components/EventCard.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Pagination */ "./resources/js/components/Pagination.js");






function Index(_ref) {
  var events = _ref.events;
  var paginationData = {
    firstPageUrl: events.first_page_url,
    lastPageUrl: events.last_page_url,
    lastPageNum: events.last_page,
    prevPageUrl: events.prev_page_url,
    nextPageUrl: events.next_page_url,
    baseUrl: events.path,
    activePage: events.current_page,
    totalRecord: events.total,
    recordPerPage: events.per_page,
    lastPage: events.last_page
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "1200px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    mb: 2
  }, "Popular Events"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "1200px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
    minChildWidth: "300px",
    spacing: "40px"
  }, events.data.map(function (event) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EventCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      event: event,
      key: event.id
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "1200px",
    my: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paginationData: paginationData
  })));
}

/***/ }),

/***/ "./resources/js/components/EventCard.js":
/*!**********************************************!*\
  !*** ./resources/js/components/EventCard.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/esm/index.js");
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.esm.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__);






var EventCard = function EventCard(_ref) {
  var event = _ref.event;

  var formatDateToString = function formatDateToString(date) {
    var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en-US";
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZoneName: "short"
    };
    return new Date(date).toLocaleString(locale, options);
  };

  var formatPrice = function formatPrice(price) {
    var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "de-DE";
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      currencyDisplay: "symbol"
    }).format(price);
  };

  var showDetails = function showDetails() {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__["Inertia"].get(event.detailsUrl);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "370px",
    overflow: "hidden",
    shadow: "sm",
    bg: "white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "180px",
    overflow: "hidden",
    position: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "https://source.unsplash.com/featured/?event,party,people",
    alt: "hi there",
    fit: "cover",
    objectPosition: "50%"
  }), event.price == 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    position: "absolute",
    top: "10px",
    right: "10px"
  }, "Free")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: "1",
    fontWeight: "semibold",
    as: "h4",
    lineHeight: "tight",
    isTruncated: true,
    fontSize: "lg",
    color: "primary-dark"
  }, event.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "sm"
  }, formatDateToString(event.startDate))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stat"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["StatNumber"], null, formatPrice(event.price)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    mt: 4,
    justify: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["HStack"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    variant: "outline",
    "aria-label": "Share",
    isRound: true,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      as: react_icons_hi__WEBPACK_IMPORTED_MODULE_2__["HiOutlineShare"]
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    variant: "outline",
    isRound: true,
    "aria-label": "Save",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      as: react_icons_hi__WEBPACK_IMPORTED_MODULE_2__["HiOutlineHeart"]
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["HStack"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "sm",
    variant: "outline",
    colorScheme: "red",
    textTransform: "uppercase",
    onClick: showDetails
  }, "See more")))));
};

/* harmony default export */ __webpack_exports__["default"] = (EventCard);

/***/ }),

/***/ "./resources/js/components/Hero.js":
/*!*****************************************!*\
  !*** ./resources/js/components/Hero.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/esm/index.js");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");




var Hero = function Hero() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    background: "white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "1200px",
    display: "flex",
    flexDir: "row-reverse",
    justify: "center",
    align: "center",
    p: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/images/hero.svg",
    alt: "hero",
    objectFit: "cover",
    borderWidth: "5px",
    flex: "2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    flex: "1",
    py: 4,
    textAlign: "center",
    alignSelf: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, " ", "your ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " one-", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "span",
    color: "primary"
  }, "stop"), "-shop", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "for events"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    mt: 3,
    variant: "outline",
    colorScheme: "red",
    rightIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowForwardIcon"], null)
  }, "Browse Events"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

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
    mr: 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    as: "h2",
    size: "lg",
    letterSpacing: "-.1rem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "span"
  }, "event"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "span",
    color: "primary"
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

/***/ "./resources/js/components/PageBox.js":
/*!********************************************!*\
  !*** ./resources/js/components/PageBox.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/esm/index.js");




var PageBox = function PageBox(_ref) {
  var page = _ref.page,
      active = _ref.active,
      clickfn = _ref.clickfn;

  var clickHandler2 = function clickHandler2() {
    if (page === "...") {
      return;
    } else {
      clickfn(page);
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__["Inertia"].get("http://localhost:8000?page=".concat(page));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    justify: "center",
    align: "center",
    as: "button",
    height: "35px",
    width: "35px",
    textAlign: "center",
    color: "gray",
    _notLast: {
      borderRight: "0"
    },
    fontWeight: active ? "bold" : null,
    border: "1px",
    bg: active ? "primary" : "white",
    borderColor: "#ccc",
    _hover: {
      bg: active ? "primary" : "#ebedf0",
      cursor: "pointer"
    },
    onClick: clickfn
  }, page);
};

/* harmony default export */ __webpack_exports__["default"] = (PageBox);

/***/ }),

/***/ "./resources/js/components/Pagination.js":
/*!***********************************************!*\
  !*** ./resources/js/components/Pagination.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/esm/index.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _PageBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageBox */ "./resources/js/components/PageBox.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./resources/js/utils/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Pagination = function Pagination(_ref) {
  var paginationData = _ref.paginationData;
  var activePage = paginationData.activePage,
      totalRecord = paginationData.totalRecord,
      recordPerPage = paginationData.recordPerPage,
      firstPageUrl = paginationData.firstPageUrl,
      lastPageUrl = paginationData.lastPageUrl,
      prevPageUrl = paginationData.prevPageUrl,
      nextPageUrl = paginationData.nextPageUrl,
      baseUrl = paginationData.baseUrl,
      lastPage = paginationData.lastPage;
  var totalPages = Math.ceil(totalRecord / recordPerPage);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Math.min(activePage, totalPages)),
      _useState2 = _slicedToArray(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      pages = _useState4[0],
      setPages = _useState4[1];

  var MINIMUM_PAGE_BEFORE_SPLIT = 5;
  var MINIMUM_PAGINATION_NUMBER = 8;
  var START_PAGE = 1;
  var LAST_PAGE = totalPages;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var hasNoSpill = totalPages < MINIMUM_PAGINATION_NUMBER;
    var hasRightSpill = totalPages - MINIMUM_PAGE_BEFORE_SPLIT >= 3;
    var hasBothSpill = currentPage >= MINIMUM_PAGE_BEFORE_SPLIT && totalPages - currentPage >= 3;
    var hasLeftSpill = currentPage > MINIMUM_PAGE_BEFORE_SPLIT && totalPages - currentPage <= 3;

    switch (true) {
      case hasNoSpill:
        setPages(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["range"])(1, totalPages));
        break;

      case hasLeftSpill:
        setPages([1, "..."].concat(_toConsumableArray(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["range"])(totalPages - 4, totalPages))));
        break;

      case hasBothSpill:
        setPages([1, "..."].concat(_toConsumableArray(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["range"])(currentPage - 1, currentPage + 1)), ["...", totalPages]));
        break;

      case hasRightSpill:
        setPages([].concat(_toConsumableArray(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["range"])(1, 5)), ["...", totalPages]));
        break;

      default:
        break;
    }
  }, [currentPage]);

  var pageChangeHandler = function pageChangeHandler(page) {
    if (page !== "...") {
      setCurrentPage(page);
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__["Inertia"].get(encodeURI("".concat(baseUrl, "?page=").concat(page)), {
        preserveScroll: true,
        preserveState: true
      });
    }
  };

  var goToFirstPage = function goToFirstPage() {
    if (activePage != 1) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__["Inertia"].get(encodeURI(firstPageUrl), {
        preserveScroll: true
      });
    }
  };

  var goToLastPage = function goToLastPage() {
    if (activePage != lastPage) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__["Inertia"].get(encodeURI(lastPageUrl), {
        preserveScroll: true
      });
    }
  };

  var goToPrevpage = function goToPrevpage() {
    if (activePage != 1) {
      setCurrentPage(Math.max(currentPage - 1, START_PAGE));
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__["Inertia"].get(encodeURI(prevPageUrl));
    }
  };

  var goToNextPage = function goToNextPage() {
    if (activePage != lastPage) {
      setCurrentPage(Math.min(currentPage + 1, LAST_PAGE));
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__["Inertia"].get(encodeURI(nextPageUrl));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    justify: "flex-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PageBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    page: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiOutlineDoubleLeft"], null),
    clickfn: goToFirstPage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PageBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    page: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiOutlineLeft"], null),
    clickfn: goToPrevpage
  }), pages.map(function (page, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PageBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
      page: page,
      active: page === currentPage,
      key: idx,
      clickfn: function clickfn() {
        return pageChangeHandler(page);
      }
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PageBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    page: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiOutlineRight"], null),
    clickfn: goToNextPage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PageBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    page: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiOutlineDoubleRight"], null),
    clickfn: goToLastPage
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

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
    h: "100%",
    w: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, children));
}

/***/ }),

/***/ "./resources/js/utils/index.js":
/*!*************************************!*\
  !*** ./resources/js/utils/index.js ***!
  \*************************************/
/*! exports provided: range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
function range(start, end) {
  var res = [];

  for (var i = start; i <= end; i++) {
    res.push(i);
  }

  return res;
}

/***/ })

}]);