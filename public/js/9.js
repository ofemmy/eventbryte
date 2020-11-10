(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./resources/js/Pages/Register.js":
/*!****************************************!*\
  !*** ./resources/js/Pages/Register.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/esm/index.js");





var schema = Object(yup__WEBPACK_IMPORTED_MODULE_3__["object"])().shape({
  firstname: Object(yup__WEBPACK_IMPORTED_MODULE_3__["string"])().required("First name is required"),
  lastname: Object(yup__WEBPACK_IMPORTED_MODULE_3__["string"])().required("Last name is required"),
  email: Object(yup__WEBPACK_IMPORTED_MODULE_3__["string"])().email("Please enter a valid email").required("Email is required"),
  password: Object(yup__WEBPACK_IMPORTED_MODULE_3__["string"])().required("Password cannot be empty"),
  confirmpassword: Object(yup__WEBPACK_IMPORTED_MODULE_3__["string"])().oneOf([Object(yup__WEBPACK_IMPORTED_MODULE_3__["ref"])("password"), null], "Passwords must match")
});

var Register = function Register() {
  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])({
    resolver: Object(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_1__["yupResolver"])(schema)
  }),
      register = _useForm.register,
      errors = _useForm.errors,
      handleSubmit = _useForm.handleSubmit;

  var submitData = function submitData(data) {
    return console.log(data);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    as: "main",
    bg: "#EEF1F4",
    minH: "100vh",
    minW: "100%",
    justify: "center",
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    as: "form",
    bg: "white",
    rounded: "lg",
    boxShadow: "md",
    borderWidth: "1px",
    direction: "column",
    width: "35%",
    p: 10,
    onSubmit: handleSubmit(submitData),
    noValidate: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Heading"], {
    mx: "auto",
    color: "gray.800"
  }, "Register"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    isRequired: true,
    mb: 4,
    isInvalid: errors.email
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: "Enter Email",
    name: "email",
    ref: register,
    type: "email"
  }), !!errors.email ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["HStack"], {
    spacing: 1,
    mt: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormErrorIcon"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormErrorMessage"], null, errors.email.message)) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["HStack"], {
    spacing: 4,
    mb: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    id: "first-name",
    isRequired: true,
    isInvalid: errors.firstname
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], null, "First name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: "First name",
    name: "first-name",
    ref: register
  }), !!errors.firstname ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["HStack"], {
    spacing: 1,
    mt: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormErrorIcon"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormErrorMessage"], null, errors.firstname.message)) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    id: "last-name",
    isRequired: true,
    isInvalid: errors.lastname
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], null, "Last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: "Last name",
    name: "lastname",
    ref: register
  }), !!errors.lastname ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["HStack"], {
    spacing: 1,
    mt: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormErrorIcon"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormErrorMessage"], null, errors.lastname.message)) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    id: "password",
    isRequired: true,
    mb: 4,
    isInvalid: errors.password
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], null, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: "Enter Password",
    name: "password",
    ref: register
  }), !!errors.password ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["HStack"], {
    spacing: 1,
    mt: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormErrorIcon"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormErrorMessage"], null, errors.password.message)) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    id: "confirm-password",
    isRequired: true,
    mb: 4,
    isInvalid: errors.confirmpassword
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], null, "Confirm Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: "Confirm password",
    name: "confirmpassword",
    ref: register
  }), !!errors.confirmpassword ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["HStack"], {
    spacing: 1,
    mt: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormErrorIcon"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormErrorMessage"], null, errors.confirmpassword.message)) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    w: "100%",
    type: "submit",
    colorScheme: "red",
    size: "lg",
    mb: 4
  }, "Sign up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    alignSelf: "flex-end",
    variant: "link",
    color: "#0e918c"
  }, "Already a user? Log in")));
};

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ })

}]);