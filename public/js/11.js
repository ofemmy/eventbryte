(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./resources/js/Pages/Event/MyEventsIndex.js":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Event/MyEventsIndex.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_CommonLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/CommonLayout */ "./resources/js/shared/CommonLayout.js");
/* harmony import */ var _components_Eventslisting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Eventslisting */ "./resources/js/components/Eventslisting.js");




var MyEventsIndex = function MyEventsIndex(_ref) {
  var events = _ref.events;
  console.log(events);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_CommonLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "My Events"
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyEventsIndex);

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