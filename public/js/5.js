(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./resources/js/Pages/Event/CreateEvent.js":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Event/CreateEvent.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-draft-wysiwyg/dist/react-draft-wysiwyg.css */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css");
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/esm/index.js");
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/Layout */ "./resources/js/shared/Layout.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-draft-wysiwyg */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js");
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_AddressInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/AddressInput */ "./resources/js/components/AddressInput.js");
/* harmony import */ var _components_ImageBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ImageBox */ "./resources/js/components/ImageBox.js");
/* harmony import */ var _utils_CreateEventSchema__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/CreateEventSchema */ "./resources/js/utils/CreateEventSchema.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















var CreateEvent = function CreateEvent(_ref) {
  var _React$createElement, _React$createElement2;

  var categories = _ref.categories,
      user = _ref.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("online"),
      _useState2 = _slicedToArray(_useState, 2),
      location = _useState2[0],
      setLocation = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("paid"),
      _useState4 = _slicedToArray(_useState3, 2),
      pricingModel = _useState4[0],
      setPricingModel = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("limited"),
      _useState6 = _slicedToArray(_useState5, 2),
      attendanceModel = _useState6[0],
      setAttendanceModel = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(draft_js__WEBPACK_IMPORTED_MODULE_1__["EditorState"].createEmpty()),
      _useState8 = _slicedToArray(_useState7, 2),
      editorState = _useState8[0],
      setEditorState = _useState8[1];

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_11__["useForm"])({
    resolver: Object(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_12__["yupResolver"])(_utils_CreateEventSchema__WEBPACK_IMPORTED_MODULE_10__["default"])
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors,
      setValue = _useForm.setValue,
      control = _useForm.control;

  var prepareDate = function prepareDate(date, time) {
    var d = Object(date_fns__WEBPACK_IMPORTED_MODULE_14__["format"])(date, "yyyy-MM-dd");
    var t = time.toLocaleTimeString();
    return Object(date_fns__WEBPACK_IMPORTED_MODULE_14__["format"])(new Date("".concat(d, "T").concat(t)), "yyyy-MM-dd hh:mm:ss");
  };

  var submitData = function submitData(data) {
    data = _objectSpread(_objectSpread({}, data), {}, {
      user_id: user.id
    });
    data.startDate = prepareDate(data.startDate, data.startTime);
    data.endDate = prepareDate(data.endDate, data.endTime);
    var formData = new FormData();

    for (var name in data) {
      formData.append(name, data[name]);
    }

    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_13__["Inertia"].post("/events", formData);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    register("description");
  }, [register]);

  var handleEditorChange = function handleEditorChange(editorState) {
    setEditorState(editorState);
    setValue("description", JSON.stringify(Object(draft_js__WEBPACK_IMPORTED_MODULE_1__["convertToRaw"])(editorState.getCurrentContent())));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Create New Event"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    maxW: "815px",
    minH: "100vh",
    mt: 6,
    p: 6,
    display: "flex",
    flexDirection: "column",
    borderWidth: "1px",
    borderColor: "gray.300",
    bg: "white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    justify: "space-between",
    mb: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Heading"], {
    color: "gray.700"
  }, "Create your event"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["HStack"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], (_React$createElement = {
    variant: "outline"
  }, _defineProperty(_React$createElement, "variant", "outline"), _defineProperty(_React$createElement, "colorScheme", "gray"), _React$createElement), "Discard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    colorScheme: "red",
    onClick: function onClick() {
      return setSubmitAction("draft");
    }
  }, "Save Draft"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    as: "form",
    rounded: "md",
    direction: "column",
    noValidate: true,
    onSubmit: handleSubmit(submitData)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    id: "title",
    isRequired: true,
    mb: 6,
    isInvalid: errors.title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], {
    fontWeight: "bold"
  }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: "Please enter title of event",
    size: "lg",
    name: "title",
    ref: register
  }), !!errors.title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormErrorMessage"], {
    mt: 2
  }, errors.title.message) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    mb: 6,
    isInvalid: errors.organizer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], {
    fontWeight: "bold"
  }, "Organizer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    size: "lg",
    value: user === null || user === void 0 ? void 0 : user.name,
    variant: "filled",
    isDisabled: true,
    name: "organizer"
  }), !!errors.organizer ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormErrorMessage"], {
    mt: 2
  }, errors.organizer.message) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    id: "category",
    mb: 6,
    isInvalid: errors.category
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], {
    fontWeight: "bold"
  }, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    placeholder: "Select Event Category",
    size: "lg",
    name: "category",
    ref: register
  }, categories.map(function (cat) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: cat.id,
      value: cat.name
    }, cat.name);
  })), !!errors.category ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormErrorMessage"], {
    mt: 2
  }, errors.category.message) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    mb: 6,
    isInvalid: errors.location
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], {
    fontWeight: "bold"
  }, "Location"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["RadioGroup"], {
    onChange: setLocation,
    value: location
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Stack"], {
    direction: "row",
    spacing: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Radio"], {
    value: "online",
    colorScheme: "red",
    ref: register,
    name: "location"
  }, "Online"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Radio"], {
    value: "venue",
    colorScheme: "red",
    ref: register,
    name: "location"
  }, "Venue")))), location === "venue" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AddressInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
    inputRef: register,
    error: errors.venue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    justify: "space-between",
    mb: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    isRequired: true,
    flexBasis: "35%",
    isInvalid: errors.startDate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], {
    fontWeight: "bold"
  }, "Start Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_11__["Controller"], {
    control: control,
    defaultValue: Date.now(),
    name: "startDate",
    render: function render(_ref2) {
      var onChange = _ref2.onChange,
          onBlur = _ref2.onBlur,
          value = _ref2.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_6___default.a, {
        selected: value,
        onChange: onChange,
        isClearable: true,
        dateFormat: "dd/MM/yyyy",
        customInput: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          size: "lg",
          name: "startDate"
        })
      });
    }
  }), !!errors.startDate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormErrorMessage"], {
    mt: 2
  }, errors.startDate.message) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    isRequired: true,
    flexBasis: "35%",
    isInvalid: errors.startTime
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], {
    fontWeight: "bold"
  }, "Start Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_11__["Controller"], {
    control: control,
    defaultValue: Date.now(),
    name: "startTime",
    render: function render(_ref3) {
      var onChange = _ref3.onChange,
          value = _ref3.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_6___default.a, {
        selected: value,
        onChange: onChange,
        showTimeSelect: true,
        showTimeSelectOnly: true,
        timeIntervals: 30,
        timeCaption: "Time",
        isClearable: true,
        dateFormat: "HH:mm",
        customInput: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          size: "lg",
          name: "startTime"
        })
      });
    }
  }), !!errors.startTime ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormErrorMessage"], {
    mt: 2
  }, errors.startTime.message) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    mb: 6,
    justify: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    isRequired: true,
    flexBasis: "35%",
    isInvalid: errors.endDate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], {
    fontWeight: "bold"
  }, "End Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_11__["Controller"], {
    control: control,
    defaultValue: Date.now(),
    name: "endDate",
    render: function render(_ref4) {
      var onChange = _ref4.onChange,
          onBlur = _ref4.onBlur,
          value = _ref4.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_6___default.a, {
        selected: value,
        onChange: onChange,
        isClearable: true,
        dateFormat: "dd/MM/yyyy",
        customInput: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          size: "lg",
          name: "endDate"
        })
      });
    }
  }), !!errors.endDate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormErrorMessage"], {
    mt: 2
  }, errors.endDate.message) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    isRequired: true,
    flexBasis: "35%",
    isInvalid: errors.endDate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], {
    fontWeight: "bold"
  }, "End Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_11__["Controller"], {
    control: control,
    defaultValue: Date.now(),
    name: "endTime",
    render: function render(_ref5) {
      var onChange = _ref5.onChange,
          onBlur = _ref5.onBlur,
          value = _ref5.value,
          defaultValue = _ref5.defaultValue;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_6___default.a, {
        defaultValue: defaultValue,
        selected: value,
        onChange: onChange,
        showTimeSelect: true,
        showTimeSelectOnly: true,
        timeIntervals: 30,
        timeCaption: "Time",
        isClearable: true,
        dateFormat: "HH:mm",
        customInput: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          size: "lg",
          name: "endTime"
        })
      });
    }
  }), !!errors.endTime ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormErrorMessage"], {
    mt: 2
  }, errors.endTime.message) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    justifyContent: "space-between",
    mb: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    flexBasis: "35%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], {
    fontWeight: "bold"
  }, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["RadioGroup"], {
    onChange: setPricingModel,
    value: pricingModel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Stack"], {
    direction: "row",
    spacing: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Radio"], {
    value: "free",
    colorScheme: "red",
    ref: register,
    name: "priceModel"
  }, "Free"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Radio"], {
    value: "paid",
    colorScheme: "red",
    ref: register,
    name: "priceModel"
  }, "Paid")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    flexBasis: "35%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], {
    fontWeight: "bold"
  }, "Max number of attendees"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["RadioGroup"], {
    onChange: setAttendanceModel,
    value: attendanceModel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Stack"], {
    direction: "row",
    spacing: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Radio"], {
    value: "limited",
    colorScheme: "red",
    ref: register,
    name: "attendanceModel"
  }, "Limited"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Radio"], {
    value: "unlimited",
    colorScheme: "red",
    ref: register,
    name: "attendanceModel"
  }, "Unlimited"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    mb: 6,
    justify: "space-between"
  }, pricingModel === "paid" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    flexBasis: "35%",
    isInvalid: errors.price
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLeftElement"], {
    pointerEvents: "none",
    color: "gray.300",
    fontSize: "1.2em",
    children: "\u20AC",
    size: "lg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: "Enter ticket price",
    name: "price",
    ref: register
  })), !!errors.price ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormErrorMessage"], {
    mt: 2
  }, errors.price.message) : null), attendanceModel === "limited" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    flexBasis: "35%",
    marginLeft: pricingModel === "free" ? "65%" : "0%",
    isInvalid: errors.maxAttendance
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: "Enter max number of attendees",
    type: "number",
    name: "maxAttendees",
    ref: register
  }), !!errors.maxAttendance ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormErrorMessage"], {
    mt: 2
  }, errors.maxAttendance.message) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    mb: 6,
    isInvalid: errors.description
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], {
    fontWeight: "bold"
  }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    rounded: "sm",
    borderWidth: ".5px",
    borderColor: "gray.200",
    minH: "215px",
    overflow: "hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_7__["Editor"], {
    editorState: editorState,
    onEditorStateChange: handleEditorChange,
    hashtag: {
      separator: " ",
      trigger: "#"
    },
    name: "description"
  })), !!errors.description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormErrorMessage"], {
    mt: 2
  }, errors.description.message) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ImageBox__WEBPACK_IMPORTED_MODULE_9__["default"], {
    register: register,
    setValue: setValue,
    error: errors.coverImage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["HStack"], {
    alignSelf: "flex-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], (_React$createElement2 = {
    variant: "outline"
  }, _defineProperty(_React$createElement2, "variant", "outline"), _defineProperty(_React$createElement2, "colorScheme", "gray"), _defineProperty(_React$createElement2, "onClick", function onClick() {
    return setSubmitAction("draft");
  }), _React$createElement2), "Save Draft"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    colorScheme: "red",
    type: "submit"
  }, "Publish")))));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateEvent);

/***/ }),

/***/ "./resources/js/components/AddressInput.js":
/*!*************************************************!*\
  !*** ./resources/js/components/AddressInput.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SelectAutoComplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectAutoComplete */ "./resources/js/components/SelectAutoComplete.js");
/* harmony import */ var _utils_countries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/countries */ "./resources/js/utils/countries.js");





var AddressInput = function AddressInput(_ref) {
  var inputRef = _ref.inputRef;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    mb: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["FormControl"], {
    mb: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["FormLabel"], null, "Address Line 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    ref: inputRef,
    name: "addressLine1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["FormControl"], {
    mb: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["FormLabel"], null, "Address Line 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    ref: inputRef,
    name: "addressLine2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["HStack"], {
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["FormControl"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["FormLabel"], null, "Zip Code"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    ref: inputRef,
    name: "zipcode"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["FormControl"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["FormLabel"], null, "City"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    ref: inputRef,
    name: "city"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["FormControl"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["FormLabel"], null, "Country"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SelectAutoComplete__WEBPACK_IMPORTED_MODULE_2__["default"], {
    options: _utils_countries__WEBPACK_IMPORTED_MODULE_3__["default"],
    registerFn: inputRef
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (AddressInput);

/***/ }),

/***/ "./resources/js/components/ImageBox.js":
/*!*********************************************!*\
  !*** ./resources/js/components/ImageBox.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ImageBox = function ImageBox(_ref) {
  var register = _ref.register,
      setValue = _ref.setValue,
      error = _ref.error;
  var fileInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      image = _useState2[0],
      setImage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isHovered = _useState4[0],
      setIsHovered = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState6 = _slicedToArray(_useState5, 2),
      imagePreview = _useState6[0],
      setImagePreview = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (image) {
      var reader = new FileReader();

      reader.onloadend = function () {
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(image);
    } else {
      setImagePreview(null);
    }
  }, [image]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    register("coverImage");
  }, [register]);

  var getFileName = function getFileName(file) {
    if (file && file.type.substr(0, 5) == "image") {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  var handleChange = function handleChange(e) {
    var file = e.target.files[0]; //set file into main form data

    setValue("coverImage", e.target.files[0]);
    getFileName(file);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    width: "423px",
    height: "221px",
    pos: "relative",
    _hover: {
      cursor: "pointer",
      boxShadow: "md"
    },
    onMouseEnter: function onMouseEnter() {
      setIsHovered(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHovered(false);
    },
    mb: 6
  }, imagePreview ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["Image"], {
    objectFit: "cover",
    src: imagePreview,
    width: "100%",
    height: "100%"
  }), isHovered && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["Fade"], {
    "in": isHovered
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
    justify: "center",
    align: "center",
    position: "absolute",
    top: "auto",
    bottom: "0",
    width: "100%",
    height: "100%",
    bg: "black",
    opacity: "0.85"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiFillDelete"], {
    color: "white",
    size: "50px",
    onClick: function onClick() {
      return setImage(null);
    }
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
    width: "100%",
    height: "100%",
    bg: "gray.200",
    direction: "column",
    justify: "center",
    align: "center",
    rounded: "sm",
    onClick: function onClick() {
      return fileInputRef.current.click();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__["BiImageAlt"], {
    size: "50px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    fontSize: "2xl"
  }, "Click to upload cover image"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    type: "file",
    ref: fileInputRef,
    accept: "image/*",
    display: "none",
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["Text"], null, "2160x1080px (.jpeg or .png Max Size-10MB)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["Text"], null, imagePreview)), error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    color: "primary-dark",
    mt: 2
  }, error.message) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (ImageBox);

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
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Navbar = function Navbar(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoggedIn = _useState2[0],
      setIsLoggedIn = _useState2[1];

  var user = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["usePage"])().props.user;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [user]);

  var handleClick = function handleClick() {
    isLoggedIn ? _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__["Inertia"].post("/logout") : _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__["Inertia"].get("/login");
  };

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
    href: "/events/create"
  }, "Create Event")), isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Menu"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuButton"], {
    as: _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"],
    rightIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__["ChevronDownIcon"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    size: "sm",
    name: user === null || user === void 0 ? void 0 : user.name
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["AvatarBadge"], {
    boxSize: "1.2rem",
    bg: (user === null || user === void 0 ? void 0 : user.hasVerifiedEmail) ? "green.500" : "red.500"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuList"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["VStack"], {
    align: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontWeight: "bold"
  }, user === null || user === void 0 ? void 0 : user.name), (user === null || user === void 0 ? void 0 : user.hasVerifiedEmail) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: "sm"
  }, user === null || user === void 0 ? void 0 : user.email) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["HStack"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__["InfoIcon"], {
    color: "red.500"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "small",
    fontSize: "xs",
    color: "red.500"
  }, "Please verify your email")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuDivider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/events/me"
  }, "My Events")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], null, "Liked"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], null, "Registered"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuDivider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
    as: "button",
    onClick: handleClick,
    variant: "outline"
  }, "Log out"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: handleClick
  }, "Sign in")));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./resources/js/components/SelectAutoComplete.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/SelectAutoComplete.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var SelectAutoComplete = function SelectAutoComplete(_ref) {
  var options = _ref.options,
      registerFn = _ref.registerFn;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      input = _useState2[0],
      setInput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      suggestions = _useState4[0],
      setSuggestions = _useState4[1];

  var onTextChanged = function onTextChanged(e) {
    var inputValue = e.target.value;
    var filteredSuggestions = [];

    if (inputValue.length > 0) {
      var regex = new RegExp("^".concat(inputValue), "i");
      filteredSuggestions = options.sort().filter(function (v) {
        return regex.test(v);
      });
    }

    setSuggestions(filteredSuggestions);
    setInput(inputValue);
  };

  var suggestionSelected = function suggestionSelected(val) {
    setInput(val);
    setSuggestions([]);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    position: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    onChange: onTextChanged,
    value: input,
    ref: registerFn,
    name: "country"
  }), suggestions.length == 0 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["List"], {
    position: "absolute",
    width: "100%",
    zIndex: 2,
    borderWidth: "2px",
    borderColor: "gray.100",
    rounded: "md",
    boxShadow: "md"
  }, suggestions.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItem"], {
      p: 2,
      listStyleType: "none",
      key: item,
      cursor: "pointer",
      _hover: {
        background: "gray.100"
      },
      onClick: function onClick() {
        return suggestionSelected(item);
      }
    }, item);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectAutoComplete);

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
      children = _ref.children,
      bG = _ref.bG;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.title = title;
  }, [title]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "main",
    bg: bG ? bG : "gray.50",
    minH: "100vh",
    w: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, children));
}

/***/ }),

/***/ "./resources/js/utils/CreateEventSchema.js":
/*!*************************************************!*\
  !*** ./resources/js/utils/CreateEventSchema.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");

var FILE_SIZE_LIMIT = 200000; //custom function to vaildate inputs with timestamps; default cast expects string

var customDate = function customDate() {
  return yup__WEBPACK_IMPORTED_MODULE_0__["date"]("Date is invlaid").transform(function (castValue, originalValue) {
    return this.isType(castValue) ? castValue : new Date(originalValue);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  title: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required("Title is required").max(200),
  category: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().notRequired("Category is notRequired"),
  startDate: customDate().notRequired(),
  startTime: customDate().notRequired(),
  endDate: customDate().notRequired(),
  endTime: customDate().notRequired(),
  location: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().notRequired(),
  addressLine1: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().when("location", {
    is: "venue",
    then: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().notRequired().test("addressLine1", function (value) {
      if (!!value) {
        var schema = yup__WEBPACK_IMPORTED_MODULE_0__["string"]();
        return schema.isValidSync(value);
      }

      return true;
    })
  }),
  addressLine2: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().when("location", {
    is: "venue",
    then: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().notRequired().test("addressLine2", function (value) {
      if (!!value) {
        var schema = yup__WEBPACK_IMPORTED_MODULE_0__["string"]();
        return schema.isValidSync(value);
      }

      return true;
    })
  }),
  zipcode: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().when("location", {
    is: "venue",
    then: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().notRequired().test("zipcode", function (value) {
      if (!!value) {
        var schema = yup__WEBPACK_IMPORTED_MODULE_0__["number"]();
        return schema.isValidSync(value);
      }

      return true;
    })
  }),
  city: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().when("location", {
    is: "venue",
    then: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().notRequired().test("city", function (value) {
      if (!!value) {
        var schema = yup__WEBPACK_IMPORTED_MODULE_0__["string"]();
        return schema.isValidSync(value);
      }

      return true;
    })
  }),
  country: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().when("location", {
    is: "venue",
    then: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().notRequired().test("country", function (value) {
      if (!!value) {
        var schema = yup__WEBPACK_IMPORTED_MODULE_0__["string"]();
        return schema.isValidSync(value);
      }

      return true;
    })
  }),
  priceModel: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
  price: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().when("priceModel", {
    is: "paid",
    then: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().notRequired().test("price", function (value) {
      if (!!value) {
        var schema = yup__WEBPACK_IMPORTED_MODULE_0__["number"]().min(0)["default"](0);
        return schema.isValidSync(value);
      }

      return true;
    })
  }),
  attendanceModel: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
  maxAttendees: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().when("attendanceModel", {
    is: "limited",
    then: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().notRequired().test("maxAttendees", function (value) {
      if (!!value) {
        var schema = yup__WEBPACK_IMPORTED_MODULE_0__["number"]()["default"](10000000).min(1);
        return schema.isValidSync(value);
      }

      return true;
    })
  }),
  description: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().notRequired().test("description", function (value) {
    if (!!value) {
      var schema = yup__WEBPACK_IMPORTED_MODULE_0__["string"]();
      return schema.isValidSync(value);
    }

    return true;
  }),
  coverImage: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().notRequired().test("imageSize", "File size is too large", function (image) {
    if (!!image) {
      return image.size <= FILE_SIZE_LIMIT;
    }

    return true;
  }).test("fileType", "Invalid file type", function (image) {
    if (!!image) {
      return ["image/jpg", "image/jpeg", "image/png"].includes(image.type);
    }

    return true;
  }) // .image()
  // .test("imageSize", "File is too large", image => image.size <=FILE_SIZE_LIMIT)
  // .test("fileType", "invalid file type", image =>
  //     ["image/jpg", "image/jpeg", "image/gif", "image/png"].includes(
  //         image.type
  //     ))

}));

/***/ }),

/***/ "./resources/js/utils/countries.js":
/*!*****************************************!*\
  !*** ./resources/js/utils/countries.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nAfghanistan\nAlbania\nAlgeria\nAndorra\nAngola\nAntigua & Deps\nArgentina\nArmenia\nAustralia\nAustria\nAzerbaijan\nBahamas\nBahrain\nBangladesh\nBarbados\nBelarus\nBelgium\nBelize\nBenin\nBhutan\nBolivia\nBosnia Herzegovina\nBotswana\nBrazil\nBrunei\nBulgaria\nBurkina\nBurundi\nCambodia\nCameroon\nCanada\nCape Verde\nCentral African Rep\nChad\nChile\nChina\nColombia\nComoros\nCongo\nCongo {Democratic Rep}\nCosta Rica\nCroatia\nCuba\nCyprus\nCzech Republic\nDenmark\nDjibouti\nDominica\nDominican Republic\nEast Timor\nEcuador\nEgypt\nEl Salvador\nEquatorial Guinea\nEritrea\nEstonia\nEthiopia\nFiji\nFinland\nFrance\nGabon\nGambia\nGeorgia\nGermany\nGhana\nGreece\nGrenada\nGuatemala\nGuinea\nGuinea-Bissau\nGuyana\nHaiti\nHonduras\nHungary\nIceland\nIndia\nIndonesia\nIran\nIraq\nIreland {Republic}\nIsrael\nItaly\nIvory Coast\nJamaica\nJapan\nJordan\nKazakhstan\nKenya\nKiribati\nKorea North\nKorea South\nKosovo\nKuwait\nKyrgyzstan\nLaos\nLatvia\nLebanon\nLesotho\nLiberia\nLibya\nLiechtenstein\nLithuania\nLuxembourg\nMacedonia\nMadagascar\nMalawi\nMalaysia\nMaldives\nMali\nMalta\nMarshall Islands\nMauritania\nMauritius\nMexico\nMicronesia\nMoldova\nMonaco\nMongolia\nMontenegro\nMorocco\nMozambique\nMyanmar, {Burma}\nNamibia\nNauru\nNepal\nNetherlands\nNew Zealand\nNicaragua\nNiger\nNigeria\nNorway\nOman\nPakistan\nPalau\nPanama\nPapua New Guinea\nParaguay\nPeru\nPhilippines\nPoland\nPortugal\nQatar\nRomania\nRussian Federation\nRwanda\nSt Kitts & Nevis\nSt Lucia\nSaint Vincent & the Grenadines\nSamoa\nSan Marino\nSao Tome & Principe\nSaudi Arabia\nSenegal\nSerbia\nSeychelles\nSierra Leone\nSingapore\nSlovakia\nSlovenia\nSolomon Islands\nSomalia\nSouth Africa\nSouth Sudan\nSpain\nSri Lanka\nSudan\nSuriname\nSwaziland\nSweden\nSwitzerland\nSyria\nTaiwan\nTajikistan\nTanzania\nThailand\nTogo\nTonga\nTrinidad & Tobago\nTunisia\nTurkey\nTurkmenistan\nTuvalu\nUganda\nUkraine\nUnited Arab Emirates\nUnited Kingdom\nUnited States\nUruguay\nUzbekistan\nVanuatu\nVatican City\nVenezuela\nVietnam\nYemen\nZambia\nZimbabwe\n".split('\n'));

/***/ })

}]);