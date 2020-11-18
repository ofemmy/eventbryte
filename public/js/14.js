(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

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
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/Layout */ "./resources/js/shared/Layout.js");
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "My Events"
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyEventsIndex);

/***/ })

}]);