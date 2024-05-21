/*! For license information please see src_container_admin_Profile_Profile_js.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkwsfs=self.webpackChunkwsfs||[]).push([["src_container_admin_Profile_Profile_js"],{"./src/container/admin/Profile/Profile.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?c217");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/sidebar */ "./src/components/sidebar/index.js");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! notistack */ "webpack/sharing/consume/default/notistack/notistack");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_loader_LinearLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/loader/LinearLoader */ "./src/components/loader/LinearLoader.js");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");\n/* harmony import */ var _servies_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../servies/services */ "./src/servies/services.js");\n/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js");\n/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Accordion */ "./node_modules/@mui/material/Accordion/Accordion.js");\n/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/AccordionSummary */ "./node_modules/@mui/material/AccordionSummary/AccordionSummary.js");\n/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/AccordionDetails */ "./node_modules/@mui/material/AccordionDetails/AccordionDetails.js");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");\n/* harmony import */ var _material_ui_icons_KeyboardBackspace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/KeyboardBackspace */ "./node_modules/@material-ui/icons/KeyboardBackspace.js");\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ "./node_modules/@mui/icons-material/ExpandMore.js");\n\n/* eslint-disable require-jsdoc */\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass Profile extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n  constructor(props) {\n    super(props);\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleOnChange1", e => {\n      this.setState({\n        file1: e.target.files[0],\n        filename1: e.target.files[0].name\n      });\n      console.log("eeee", e.target.files[0].name, this.state.file1);\n    });\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSubmit1", e => {\n      e.preventDefault();\n      this.addlogo();\n      console.log("hello we have clicked the button");\n    });\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "addlogo", async () => {\n      const newdata = new FormData();\n      newdata.append("filename", this.state.file1);\n      newdata.append("userid", this.state.UserId);\n      console.log("newdata", JSON.stringify(newdata));\n      this.setState({\n        formLoader: true\n      });\n      const APIResponse = await (0,_servies_services__WEBPACK_IMPORTED_MODULE_5__.addlogo)(newdata, this.state.token);\n      if (APIResponse.status === 200) {\n        this.setState({\n          formLoader: false\n        });\n        const message = "Upload Update Success";\n        this.props.enqueueSnackbar(message, {\n          variant: "info",\n          autoHideDuration: 3000\n        });\n      } else {\n        this.setState({\n          formLoader: false\n        });\n        const message = "Something went wrong";\n        this.props.enqueueSnackbar(message, {\n          variant: "error",\n          autoHideDuration: 3000\n        });\n      }\n    });\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleClicks", () => {\n      console.log("hello we have clicked the button");\n      this.props.history.push({\n        pathname: this.state.component\n      });\n    });\n    this.state = {\n      userrole: sessionStorage.getItem("userrole"),\n      component: sessionStorage.getItem("component"),\n      token: sessionStorage.getItem("token"),\n      UserId: sessionStorage.getItem("userid"),\n      formLoader: false,\n      formLoaderOff: false,\n      display: sessionStorage.getItem("subnetaccaddress"),\n      screenloader: false,\n      file1: ""\n    };\n  }\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n      className: "page"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {\n      activeComponent: this.state.userrole == "Investor" ? "InvestorDashboard_Portfolio" : "IssuerDashboard"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n      className: "content1"\n    }, this.state.screenloader == true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_loader_LinearLoader__WEBPACK_IMPORTED_MODULE_4__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n      className: "page-contentofpool1"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n      className: "row1"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n      className: "col-12 col-sm-6 col-md-8 d-flex justigy-content-center align-center hellocard"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_icons_KeyboardBackspace__WEBPACK_IMPORTED_MODULE_6__["default"], {\n      onClick: this.handleClicks,\n      className: "left-arrow-muis1 left-arrow-servicer"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", {\n      className: "headerdashboard"\n    }, "Profile"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n      className: "servicer-modal-acc"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_7__["default"], {\n      defaultExpanded: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_8__["default"], {\n      expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_9__["default"], null),\n      "aria-controls": "panel1a-content",\n      id: "panel1a-header"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n      className: "editcontainer1"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h5", {\n      className: "headingpayment"\n    }, "Logo"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n      className: "paymentsetting"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n      className: "ps_page-in-out-main-container1"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n      className: "ps_page-left-container"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n      className: "ps_outer-container"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n      className: "ps-inner-bottom-contianer"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n      className: "modalshiftcontent"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("form", {\n      className: "form-container",\n      onSubmit: this.onSubmit1\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h6", {\n      className: "e1class"\n    }, "Upload Logo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n      className: "kyc-card__button-container1"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {\n      className: "card__button",\n      style: {\n        position: "relative"\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {\n      htmlFor: "icon-button-file-id2",\n      className: "upload-button-label"\n    }, "Select File"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {\n      required: true,\n      id: "icon-button-file-id2",\n      type: "file",\n      accept: "image/png, image/jpg, image/jpeg",\n      style: {\n        position: "absolute",\n        width: "60%",\n        height: "100%",\n        cursor: "pointer",\n        top: "0",\n        right: "0px",\n        opacity: "0",\n        border: "1.2px solid #212121"\n      },\n      onChange: this.handleOnChange1\n    }))), this.state.file1 !== "" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n      className: "kyc-card__select_name-container"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, this.state.filename1))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n      className: "modalsubmit"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n      className: "submitbuttonbg"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n      className: "row"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n      className: "row justify-content-end2"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {\n      variant: "contained",\n      color: "primary",\n      type: "submit"\n    }, "Upload", this.state.formLoader === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_13__["default"], {\n      size: "22px",\n      color: "primary"\n    }) : "")))))))))))))))))))));\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,notistack__WEBPACK_IMPORTED_MODULE_3__.withSnackbar)(Profile));\n\n//# sourceURL=webpack://wsfs/./src/container/admin/Profile/Profile.js?')}}]);