"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwsfs"] = self["webpackChunkwsfs"] || []).push([["src_container_admin_Underwriter_UW_Dashboard_Deals_UW_Dashboard_Deals_js"],{

/***/ "./src/container/admin/Underwriter/UW_Dashboard_Deals/UW_Dashboard_Deals.js":
/*!**********************************************************************************!*\
  !*** ./src/container/admin/Underwriter/UW_Dashboard_Deals/UW_Dashboard_Deals.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?c217\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/header */ \"./src/components/header/index.js\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/sidebar */ \"./src/components/sidebar/index.js\");\n/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mui-datatables */ \"webpack/sharing/consume/default/mui-datatables/mui-datatables\");\n/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mui_datatables__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/TextField */ \"./node_modules/@material-ui/core/esm/TextField/TextField.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/Button.js\");\n/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/loader */ \"./src/components/loader/index.js\");\n/* harmony import */ var _components_snackbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/snackbar */ \"./src/components/snackbar/index.js\");\n/* harmony import */ var _components_loader_LinearLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/loader/LinearLoader */ \"./src/components/loader/LinearLoader.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"webpack/sharing/consume/default/axios/axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/Close */ \"./node_modules/@material-ui/icons/Close.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ \"webpack/sharing/consume/default/moment/moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! notistack */ \"webpack/sharing/consume/default/notistack/notistack\");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_jsonschema_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-jsonschema-form */ \"webpack/sharing/consume/default/react-jsonschema-form/react-jsonschema-form\");\n/* harmony import */ var react_jsonschema_form__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsonschema_form__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var rjsf_material_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rjsf-material-ui */ \"webpack/sharing/consume/default/rjsf-material-ui/rjsf-material-ui\");\n/* harmony import */ var rjsf_material_ui__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rjsf_material_ui__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _components_loader_formLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/loader/formLoader */ \"./src/components/loader/formLoader.js\");\n/* harmony import */ var _servies_services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../servies/services */ \"./src/servies/services.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ \"webpack/sharing/consume/default/prop-types/prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons */ \"webpack/sharing/consume/default/@material-ui/icons/@material-ui/icons\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/createTheme.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js\");\n/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-input-range */ \"webpack/sharing/consume/default/react-input-range/react-input-range\");\n/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_input_range__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var react_input_range_lib_css_index_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-input-range/lib/css/index.css */ \"./node_modules/react-input-range/lib/css/index.css\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ \"webpack/sharing/consume/default/react-router-dom/react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _components_NumberComp2__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../components/NumberComp2 */ \"./src/components/NumberComp2.js\");\n\n/* eslint-disable require-jsdoc */\n\n// import { connect } from 'react-redux';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst token = sessionStorage.getItem(\"token\");\nclass UW_Dashboard_Deals extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n  constructor(props) {\n    super(props);\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"handleClickDeals\", () => {\n      this.setState({\n        activePools: false,\n        activeDeals: true,\n        activeInsights3: false\n      });\n      window.location.assign(\"/admin/uw_dashboard_deals\");\n    });\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"handleClickPools\", () => {\n      this.setState({\n        activePools: false,\n        activeDeals: false,\n        activeInsights3: true\n      });\n      window.location.assign(\"/admin/uw_dashboard_pools\");\n    });\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"onchange\", e => {\n      this.setState({\n        searchText: e.target.value,\n        searchType: true\n      });\n      console.log(\"search: e.target.value\", e.target.value);\n    });\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"searchBar\", () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n      className: \"search-bar-main-container\",\n      id: \"searchBox\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n      className: \"tableSearch1\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_21__[\"default\"], {\n      value: this.state.searchText,\n      onChange: this.onchange,\n      placeholder: \"Search\",\n      variant: \"standard\",\n      size: \"small\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n      type: \"button\",\n      onClick: this.onClickCloseSearchBar,\n      className: \"close-mui-icon\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_22__[\"default\"], null))));\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"onClickCloseSearchBar\", () => {\n      this.setState({\n        searchText: \"\"\n      });\n      this.setState({\n        showSearchBox: false\n      });\n    });\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"onClickSearchButton\", () => {\n      this.setState({\n        showSearchBox: true\n      });\n    });\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"getDealsByUnderwriter\", async () => {\n      this.setState({\n        getLoansLoader: true,\n        tableData: [],\n        loading: true\n      });\n      var data = {};\n      data.underwriterId = this.state.UserId;\n      data.mailid = this.state.EmailAddress;\n      data.token = this.state.token;\n      const APIResponse = await (0,_servies_services__WEBPACK_IMPORTED_MODULE_14__.getDealsByUnderwriter)(data);\n      if (APIResponse.status === 200) {\n        console.log(\"AllGetAllPoolsdata--\", APIResponse);\n        this.setState({\n          getLoansLoader: false,\n          open: true,\n          tableData: APIResponse.data,\n          loading: false\n        });\n      } else {\n        this.setState({\n          getLoansLoader: false,\n          loading: false\n        });\n        const message = \"Couldn't fetch the record\";\n        this.props.enqueueSnackbar(message, {\n          variant: \"error\",\n          autoHideDuration: 3000\n        });\n      }\n    });\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"ViewDetails\", value => {\n      console.log('value', value);\n      sessionStorage.setItem(\"dealId\", value);\n      window.location.assign('/admin/uw_deals_details');\n    });\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"getMuiTheme\", () => (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_23__[\"default\"])({\n      typography: {\n        useNextVariants: true\n      },\n      overrides: {\n        MUIDataTable: {\n          root: {\n            border: \"none !important\"\n          }\n        },\n        MUIDataTableBodyRow: {\n          root: {\n            \"&:nth-child(even)\": {\n              backgroundColor: \"rgb(229,229,229,0.3) !important\"\n            },\n            \"&.Mui-selected\": {\n              backgroundColor: \"white !important\"\n            }\n          },\n          hoverCursor: {\n            cursor: \"auto !important\"\n          }\n        },\n        MuiTableCell: {\n          root: {\n            fontFamily: \"Mulish, sans-serif !important\",\n            padding: \"20px\",\n            fontSize: \"0.980rem !important\"\n          }\n        },\n        MuiCircularProgress: {\n          colorSecondary: {\n            color: \"#048c88 !important\"\n          }\n        },\n        MUIDataTableBodyCell: {\n          root: {\n            borderBottom: \"none !important\"\n          }\n        },\n        MUIDataTableHeadCell: {\n          root: {\n            fontFamily: \"Mulish, sans-serif !important\",\n            backgroundColor: \"rgba(1, 142, 130, 0.1) !important\",\n            borderBottom: \"none !important\",\n            paddingBottom: \"5px !important\",\n            paddingTop: \"5px !important\",\n            paddingLeft: \"15px !important\"\n          },\n          toolButton: {\n            fontFamily: \"Catamaran !important\",\n            fontWeight: \"600 !important\",\n            fontSize: \"15px !important\",\n            backgroundColor: \"none !important\",\n            padding: \"none !important\",\n            marginLeft: \"none !important\",\n            textTransform: \"none !important\",\n            border: \"none !important\",\n            borderRadius: \"none !important\"\n          }\n        },\n        MUIDataTableToolbar: {\n          root: {\n            fontFamily: \"Mulish !important\",\n            paddingLeft: \"5px !important\",\n            paddingRight: \"5px !important\"\n          },\n          titleText: {\n            fontFamily: \"Mulish !important\",\n            fontSize: \"28px\",\n            color: \"#212121\",\n            fontWeight: \"600\",\n            fontFamily: \"arial\",\n            marginBottom: \"20px\",\n            marginTop: \"20px\"\n          },\n          icon: {\n            color: \"#018E82\",\n            paddingRight: \"14px !important\",\n            \"&:hover\": {\n              color: \"#018E82 !important\"\n            }\n          },\n          iconActive: {\n            color: \"#018E82 !important\"\n          }\n        },\n        MuiButton: {\n          contained: {\n            backgroundColor: \"#FFC000 !important\",\n            padding: \"5px 30px !important\",\n            marginLeft: \"10px !important\",\n            textTransform: \"none !important\",\n            border: \"1.2px solid #212121 !important\",\n            borderRadius: \"20px !important\",\n            boxShadow: \"none !important\"\n          },\n          outlined: {\n            backgroundColor: \"#fff !important\",\n            padding: \"5px 30px !important\",\n            marginLeft: \"10px !important\",\n            textTransform: \"none !important\",\n            border: \"1.2px solid #212121 !important\",\n            borderRadius: \"20px !important\",\n            boxShadow: \"none !important\"\n          },\n          label: {\n            fontSize: \"15px !important\",\n            fontWeight: \"600 !important\",\n            fontFamily: \"Mulish !important\"\n          },\n          textPrimary: {\n            color: \"#018E82 !important\"\n          }\n        },\n        MUIDataTablePagination: {\n          tableCellContainer: {\n            borderBottom: \"none !important\"\n          },\n          navContainer: {\n            justifyContent: \"center\"\n          },\n          toolbar: {\n            paddingLeft: \"50px !important\"\n          }\n        },\n        MuiTableSortLabel: {\n          icon: {\n            color: \"#018E82 !important\"\n          },\n          active: {\n            color: \"#018E82 !important\"\n          }\n        },\n        MuiTablePagination: {\n          caption: {\n            color: \"#8C8C8C\",\n            marginRight: \"\".concat(this.state.currentPage >= 1 && this.state.currentPage <= 9 ? \"-138\" : this.state.currentPage >= 10 ? '-142' : \"-130\", \"px\"),\n            fontSize: \"0.80rem\"\n          }\n        },\n        MuiIconButton: {\n          colorInherit: {\n            color: \"#018E82 !important\",\n            zIndex: \"1000\",\n            marginRight: \"60px\",\n            paddingLeft: \"-25px\"\n          }\n        },\n        MUIDataTable: {\n          paper: {\n            boxShadow: \"none !important\"\n          },\n          responsiveBase: {\n            border: \"1px solid #212121 !important\",\n            borderRadius: \"10px !important\"\n          }\n        }\n      }\n    }));\n    this.state = {\n      selectedRecords: [],\n      eligibleloans: {},\n      tableData: [],\n      loading: false,\n      getLoansLoader: false,\n      open: false,\n      openPopup: false,\n      selectedLoanId: [],\n      searchText: \"\",\n      rowsSelected: null,\n      UserId: sessionStorage.getItem(\"userid\"),\n      poolName: sessionStorage.getItem(\"poolname\"),\n      token: sessionStorage.getItem(\"token\"),\n      EmailAddress: sessionStorage.getItem('EmailAddress'),\n      activePools: false,\n      activeDeals: true,\n      showSearchBox: false\n    };\n  }\n  async selectedpoolid(selected) {\n    const arr = [];\n    for (var i = 0; i < selected.length; i++) {\n      var j = selected[i];\n      let PoolID = this.state.tableData[j].dealid;\n      arr.push(PoolID);\n    }\n    console.log(\"selected Loans\", arr);\n    sessionStorage.setItem(\"rundd\", JSON.stringify(arr));\n  }\n  async componentDidMount() {\n    var component = window.location.pathname;\n    sessionStorage.setItem('component', component);\n    this.getDealsByUnderwriter();\n  }\n  render() {\n    const {\n      classes\n    } = this.props;\n    const options = {\n      filterType: \"dropdown\",\n      filter: false,\n      search: false,\n      print: false,\n      viewColumns: false,\n      download: false,\n      rowHover: false,\n      selectableRowsOnClick: false,\n      selectableRows: false,\n      onRowClick: this.onRowClick,\n      onRowsSelect: this.onRowsSelect,\n      onChangePage: this.onChangePage,\n      rowsSelected: this.state.rowsSelected,\n      rowsPerPage: [10],\n      rowsPerPageOptions: false,\n      jumpToPage: false,\n      pagination: _material_ui_icons__WEBPACK_IMPORTED_MODULE_16__.TrainRounded,\n      onRowsSelect: (rowsSelected, allRows) => {\n        console.log(\"allRows\", allRows);\n        console.log(\"rowsSelected\", rowsSelected);\n        this.setState({\n          rowsSelected: allRows.map(row => row.dataIndex)\n        });\n        const selected = allRows.map(row => row.dataIndex);\n        console.log(\"selected\" + selected);\n        this.selectedpoolid(selected);\n      },\n      onChangePage: currentPage => {\n        console.log(\"currentPage\", currentPage);\n        this.setState({\n          currentPage: currentPage\n        });\n      },\n      searchText: this.state.searchText,\n      searchPlaceholder: \"Search\",\n      customSearch: (searchQuery, currentRow, columns) => {\n        let isFound = false;\n        currentRow.forEach(col => {\n          if (col.toString().indexOf(searchQuery) >= 0) {\n            isFound = true;\n          }\n        });\n        return isFound;\n      },\n      //\n      loading: false,\n      textLabels: {\n        body: {\n          noMatch: this.state.loading === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_loader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            msg: \"Please wait, Loading Deal Data\"\n          }) : \"Sorry, there is no matching data to display\",\n          toolTip: \"Sort\",\n          columnHeaderTooltip: column => \"Sort for \".concat(column.label)\n        },\n        filter: {\n          all: \"All\",\n          title: \"FILTERS\",\n          reset: \"RESET\"\n        },\n        selectedRows: {\n          text: \"row(s) selected\",\n          delete: \"Delete\",\n          deleteAria: \"Delete Selected Rows\"\n        },\n        pagination: {\n          next: \"Next \",\n          previous: \"Previous\",\n          rowsPerPage: \"\",\n          displayRows: \"Of\"\n        }\n      }\n    };\n    const columns = [{\n      name: \"dealId\",\n      label: \"Deal Id\",\n      options: {\n        filter: true,\n        sort: true\n      }\n    }, {\n      name: \"dealName\",\n      label: \"Deal Name\",\n      options: {\n        filter: true,\n        sort: true\n      }\n    }, {\n      name: \"assetclass\",\n      label: \"Asset Class\",\n      options: {\n        filter: true,\n        sort: true\n      }\n    }, {\n      name: \"originalbalance\",\n      label: \"Principal Balance\",\n      options: {\n        filter: true,\n        sort: true,\n        customBodyRender: (value, tableMeta, updateValue) => {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_NumberComp2__WEBPACK_IMPORTED_MODULE_20__[\"default\"], {\n            value: value\n          }));\n        }\n      }\n    }, {\n      name: \"numberofloans\",\n      label: \"No. of Loans\",\n      options: {\n        filter: true,\n        sort: true\n      }\n    }, {\n      name: \"numberofTranches\",\n      label: \"No. of Tranches\",\n      options: {\n        filter: true,\n        sort: true\n      }\n    }, {\n      name: \"createdDate\",\n      label: \"Set-Up On\",\n      options: {\n        filter: true,\n        sort: true\n      }\n    }, {\n      name: \"status\",\n      label: \"Status\",\n      options: {\n        filter: true,\n        sort: true\n      }\n    }, {\n      name: \"dealId\",\n      label: \"Actions\",\n      options: {\n        filter: false,\n        sort: false,\n        customHeadRender: (columnMeta, updateDirection) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"th\", {\n          style: {\n            backgroundColor: \"rgba(1, 142, 130, 0.1)\",\n            borderBottom: \"none\",\n            paddingBottom: \"5px\",\n            paddingTop: \"5px\",\n            textAlign: \"center\"\n          }\n        }, columnMeta.label),\n        customBodyRender: (value, tableMeta, updateValue) => {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n            className: \"text-center\"\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n            onClick: () => this.ViewDetails(value)\n            // to={\"/admin/uw_deals_details\"}\n            ,\n            className: \"login-sign_up-link\"\n          }, \"View Details\")));\n        }\n      }\n    }];\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n      className: \"page\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      activeComponent: \"Deals\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n      className: \"content\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n      className: \"header\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n      className: \"page-content\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n      className: \"row row1\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n      className: \"investor-heading-container\"\n    }, this.state.showSearchBox == true ? this.searchBar() : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h1\", {\n      className: \"headerdashboard\"\n    }, \"Deals\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n      className: \"dashboard-top-right-container1\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n      className: \"search-bar-outer-container uw-search-button-container\"\n    }, this.state.showSearchBox == false && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_24__[\"default\"], {\n      variant: \"contained\",\n      color: \"primary\",\n      type: \"button\",\n      onClick: this.onClickSearchButton\n    }, \"Search\"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n      className: \"workbench-table-container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_25__[\"default\"], {\n      theme: this.getMuiTheme()\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((mui_datatables__WEBPACK_IMPORTED_MODULE_4___default())\n    // title={'Dashboard'}\n    , {\n      data: this.state.tableData,\n      columns: columns,\n      options: options\n    }))))))));\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,notistack__WEBPACK_IMPORTED_MODULE_10__.withSnackbar)(UW_Dashboard_Deals));\n\n//# sourceURL=webpack://wsfs/./src/container/admin/Underwriter/UW_Dashboard_Deals/UW_Dashboard_Deals.js?");

/***/ })

}]);