(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_AdminLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/AdminLayout */ "./resources/js/shared/AdminLayout.js");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");
/* harmony import */ var _components_Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Alert */ "./resources/js/components/Alert.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Pagination */ "./resources/js/components/Pagination.js");









var TableRow = function TableRow(_ref) {
  var children = _ref.children,
      bg = _ref.bg,
      textColor = _ref.textColor,
      isHeader = _ref.isHeader;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    templateColumns: "repeat(8,1fr) 60px",
    width: "100%",
    bg: bg,
    textColor: textColor,
    p: 4,
    gap: 2,
    mb: "5px",
    boxShadow: "sm",
    _hover: isHeader ? null : {
      cursor: "pointer",
      boxShadow: "lg"
    }
  }, children);
};

var TableHeader = function TableHeader(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableRow, {
    bg: "gray.700",
    textColor: "whitesmoke",
    isHeader: true
  }, children);
};

var Index = function Index(_ref3) {
  var events = _ref3.events;

  var _useDisclosure = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useDisclosure"])(),
      isOpen = _useDisclosure.isOpen,
      onOpen = _useDisclosure.onOpen,
      onClose = _useDisclosure.onClose;

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_AdminLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "My Events"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "1200px",
    mt: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["HStack"], {
    mb: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    size: "lg"
  }, "Events")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableHeader, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
    colSpan: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    size: "sm"
  }, "Title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
    colSpan: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    size: "sm"
  }, "Start Date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
    colSpan: 1,
    textAlign: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    size: "sm"
  }, "Registered")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
    colSpan: 1,
    textAlign: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    size: "sm"
  }, "Status"))), events.data.map(function (event) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableRow, {
      bg: "white",
      textColor: "gray.900",
      key: event.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colSpan: 5,
      py: "5px",
      display: "flex",
      alignItems: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      fontSize: "lg",
      color: "gray.700"
    }, event.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colSpan: 1,
      py: "5px"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], null, Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(new Date(event.startDate), "LLL Mo yyyy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      as: "sub",
      color: "gray.500"
    }, Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["formatDistanceToNow"])(new Date(event.startDate), {
      addSuffix: true
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colSpan: 1,
      py: "5px",
      textAlign: "center",
      alignItems: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], null, event.registered, "/", event.maxAttendees)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colSpan: 1,
      py: "5px",
      justifyContent: "center",
      display: "flex",
      alignItems: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
      variant: "outline",
      borderRadius: "sm",
      colorScheme: "pink"
    }, event.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colSpan: 1,
      py: "5px",
      justifyContent: "center",
      display: "flex",
      alignItems: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["HStack"], {
      spacing: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
      label: "Edit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__["EditIcon"], null),
      isRound: true,
      size: "xs"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
      label: "Delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__["DeleteIcon"], {
        color: "primary-dark"
      }),
      isRound: true,
      size: "xs",
      onClick: onOpen
    })))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Alert__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClose: onClose,
    isOpen: isOpen,
    message: "Are you sure you want to delete this event?"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    my: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
    paginationData: paginationData
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./resources/js/components/Alert.js":
/*!******************************************!*\
  !*** ./resources/js/components/Alert.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");



var Alert = function Alert(_ref) {
  var isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      message = _ref.message;
  var cancelRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AlertDialog"], {
    motionPreset: "slideInBottom",
    leastDestructiveRef: cancelRef,
    onClose: onClose,
    isOpen: isOpen,
    isCentered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AlertDialogOverlay"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AlertDialogContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AlertDialogHeader"], null, "Discard Changes?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AlertDialogCloseButton"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AlertDialogBody"], null, message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AlertDialogFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    ref: cancelRef,
    onClick: onClose
  }, "No"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    colorScheme: "red",
    ml: 3
  }, "Yes")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Alert);

function TransitionExample() {
  var _useDisclosure = useDisclosure(),
      isOpen = _useDisclosure.isOpen,
      onOpen = _useDisclosure.onOpen,
      onClose = _useDisclosure.onClose;

  var cancelRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
}

/***/ }),

/***/ "./resources/js/shared/AdminLayout.js":
/*!********************************************!*\
  !*** ./resources/js/shared/AdminLayout.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./resources/js/components/Navbar.js");
/* harmony import */ var _BaseLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseLayout */ "./resources/js/shared/BaseLayout.js");




var AdminLayout = function AdminLayout(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BaseLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null), children);
};

/* harmony default export */ __webpack_exports__["default"] = (AdminLayout);

/***/ })

}]);