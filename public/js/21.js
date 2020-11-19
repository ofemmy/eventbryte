(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hero */ "./resources/js/components/Hero.js");
/* harmony import */ var _shared_CommonLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/CommonLayout */ "./resources/js/shared/CommonLayout.js");
/* harmony import */ var _components_EventCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/EventCard */ "./resources/js/components/EventCard.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Pagination */ "./resources/js/components/Pagination.js");
/* harmony import */ var _components_FlashBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/FlashBox */ "./resources/js/components/FlashBox.js");
/* harmony import */ var _components_Eventslisting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Eventslisting */ "./resources/js/components/Eventslisting.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










function Index(_ref) {
  var events = _ref.events,
      rest = _objectWithoutProperties(_ref, ["events"]);

  var flash = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["usePage"])().props.flash;
  var toast = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useToast"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (flash.message) {
      toast({
        position: "top",
        duration: 3000,
        isClosable: true,
        render: function render() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FlashBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
            description: flash.message,
            status: "success"
          });
        }
      });
    }
  }, [flash.message]);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_CommonLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "1200px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    mb: 2
  }, "Popular Events"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Eventslisting__WEBPACK_IMPORTED_MODULE_8__["default"], {
    events: events,
    paginationData: paginationData,
    isMe: false
  }));
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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.esm.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./resources/js/utils/index.js");







var EventCard = function EventCard(_ref) {
  var event = _ref.event;

  var showDetails = function showDetails() {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__["Inertia"].get(event.detailsUrl);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "370px",
    overflow: "hidden",
    shadow: "sm",
    bg: "white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "180px",
    overflow: "hidden",
    position: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "https://source.unsplash.com/featured/?event,party,people",
    alt: "hi there",
    fit: "cover",
    objectPosition: "50%"
  }), event.price == 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    position: "absolute",
    top: "10px",
    right: "10px"
  }, "Free")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: "1",
    fontWeight: "semibold",
    as: "h4",
    lineHeight: "tight",
    isTruncated: true,
    fontSize: "lg",
    color: "primary-dark"
  }, event.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "sm"
  }, Object(_utils__WEBPACK_IMPORTED_MODULE_5__["formatDateToString"])(event.startDate))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Stat"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["StatNumber"], null, Object(_utils__WEBPACK_IMPORTED_MODULE_5__["formatPrice"])(event.price)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    mt: 4,
    justify: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["HStack"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    variant: "outline",
    "aria-label": "Share",
    isRound: true,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      as: react_icons_hi__WEBPACK_IMPORTED_MODULE_2__["HiOutlineShare"]
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    variant: "outline",
    isRound: true,
    "aria-label": "Save",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      as: react_icons_hi__WEBPACK_IMPORTED_MODULE_2__["HiOutlineHeart"]
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["HStack"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "sm",
    variant: "outline",
    colorScheme: "red",
    textTransform: "uppercase",
    onClick: showDetails
  }, "See more")))));
};

/* harmony default export */ __webpack_exports__["default"] = (EventCard);

/***/ }),

/***/ "./resources/js/components/Eventslisting.js":
/*!**************************************************!*\
  !*** ./resources/js/components/Eventslisting.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Pagination */ "./resources/js/components/Pagination.js");
/* harmony import */ var _components_EventCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/EventCard */ "./resources/js/components/EventCard.js");





var Eventslisting = function Eventslisting(_ref) {
  var events = _ref.events,
      paginationData = _ref.paginationData,
      isMe = _ref.isMe;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "1200px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
    minChildWidth: "300px",
    spacing: "40px"
  }, events.data.map(function (event) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EventCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      event: event,
      key: event.id
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "1200px",
    my: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"], {
    paginationData: paginationData
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Eventslisting);

/***/ }),

/***/ "./resources/js/components/FlashBox.js":
/*!*********************************************!*\
  !*** ./resources/js/components/FlashBox.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");




var FlashBox = function FlashBox(_ref) {
  var title = _ref.title,
      description = _ref.description,
      status = _ref.status;
  var statusMap = {
    success: {
      color: "green.500",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__["CheckCircleIcon"], null)
    },
    warning: {
      color: "yellow.500",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__["WarningTwoIcon"], null)
    },
    error: {
      color: "red.500",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__["WarningIcon"], null)
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    m: 8,
    color: "white",
    p: 3,
    bg: statusMap[status].color,
    width: "500px",
    rounded: "md",
    boxShadow: "lg"
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    size: "md"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["HStack"], {
    spacing: 2
  }, statusMap[status].icon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], null, description)));
};

/* harmony default export */ __webpack_exports__["default"] = (FlashBox);

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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__);





var Hero = function Hero() {
  var createEvent = function createEvent() {
    return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__["Inertia"].get("/events/create");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    background: "white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "1200px",
    display: "flex",
    flexDir: "row-reverse",
    justify: "center",
    align: "center",
    p: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/images/hero.svg",
    alt: "hero",
    objectFit: "cover",
    borderWidth: "5px",
    flex: "2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    flex: "1",
    py: 4,
    textAlign: "center",
    alignSelf: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, " ", "your ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " one-", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "span",
    color: "primary"
  }, "stop"), "-shop", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "for events"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    mt: 3,
    colorScheme: "red",
    rightIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowForwardIcon"], null),
    onClick: createEvent
  }, "Get Started"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./resources/js/shared/CommonLayout.js":
/*!*********************************************!*\
  !*** ./resources/js/shared/CommonLayout.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommonLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./resources/js/components/Navbar.js");
/* harmony import */ var _BaseLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BaseLayout */ "./resources/js/shared/BaseLayout.js");





function CommonLayout(_ref) {
  var title = _ref.title,
      children = _ref.children,
      bG = _ref.bG;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.title = title;
  }, [title]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BaseLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, children));
}

/***/ })

}]);