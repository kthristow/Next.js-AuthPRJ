"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth",{

/***/ "./components/auth/auth-form.js":
/*!**************************************!*\
  !*** ./components/auth/auth-form.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-form.module.css */ \"./components/auth/auth-form.module.css\");\n/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_auth_form_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nasync function createUser(email, password) {\n    const res = await fetch(\"/api/auth/signup\", {\n        method: \"POST\",\n        body: JSON.stringify({\n            email,\n            password\n        }),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    if (!res.ok) {\n        throw new Error(data.message || \"Something wrong\");\n    }\n    return data;\n}\nfunction AuthForm() {\n    _s();\n    const setEmail = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const setPass = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    function switchAuthModeHandler() {\n        setIsLogin((prevState)=>!prevState);\n    }\n    async function submitHander(event) {\n        event.preventDefault();\n        const email = setEmail.current.value;\n        const password = setPass.current.value;\n        if (isLogin) {} else {\n            try {\n                const result = await createUser(email, password);\n                console.log(result);\n            } catch (error) {}\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().auth),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: isLogin ? \"Login\" : \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"C:\\\\React\\\\next-js\\\\project\\\\Next.js-AuthPRJ\\\\components\\\\auth\\\\auth-form.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                children: \"Your Email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\React\\\\next-js\\\\project\\\\Next.js-AuthPRJ\\\\components\\\\auth\\\\auth-form.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                id: \"email\",\n                                required: true,\n                                ref: setEmail\n                            }, void 0, false, {\n                                fileName: \"C:\\\\React\\\\next-js\\\\project\\\\Next.js-AuthPRJ\\\\components\\\\auth\\\\auth-form.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\React\\\\next-js\\\\project\\\\Next.js-AuthPRJ\\\\components\\\\auth\\\\auth-form.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                children: \"Your Password\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\React\\\\next-js\\\\project\\\\Next.js-AuthPRJ\\\\components\\\\auth\\\\auth-form.js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                required: true,\n                                ref: setPass\n                            }, void 0, false, {\n                                fileName: \"C:\\\\React\\\\next-js\\\\project\\\\Next.js-AuthPRJ\\\\components\\\\auth\\\\auth-form.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\React\\\\next-js\\\\project\\\\Next.js-AuthPRJ\\\\components\\\\auth\\\\auth-form.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().actions),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: isLogin ? \"Login\" : \"Create Account\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\React\\\\next-js\\\\project\\\\Next.js-AuthPRJ\\\\components\\\\auth\\\\auth-form.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().toggle),\n                                onClick: switchAuthModeHandler,\n                                children: isLogin ? \"Create new account\" : \"Login with existing account\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\React\\\\next-js\\\\project\\\\Next.js-AuthPRJ\\\\components\\\\auth\\\\auth-form.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\React\\\\next-js\\\\project\\\\Next.js-AuthPRJ\\\\components\\\\auth\\\\auth-form.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\React\\\\next-js\\\\project\\\\Next.js-AuthPRJ\\\\components\\\\auth\\\\auth-form.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\React\\\\next-js\\\\project\\\\Next.js-AuthPRJ\\\\components\\\\auth\\\\auth-form.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthForm, \"Av93y3ajxeKXB9lW6ztj0/wqcK0=\");\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F1dGgvYXV0aC1mb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5QztBQUNJO0FBRTdDLGVBQWVHLFdBQVdDLEtBQUssRUFBRUMsUUFBUTtJQUN2QyxNQUFNQyxNQUFNLE1BQU1DLE1BQU0sb0JBQW9CO1FBQzFDQyxRQUFRO1FBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztZQUFFUDtZQUFPQztRQUFTO1FBQ3ZDTyxTQUFTO1lBQ1AsZ0JBQWdCO1FBQ2xCO0lBQ0Y7SUFDQSxJQUFJLENBQUNOLElBQUlPLEVBQUUsRUFBRTtRQUNYLE1BQU0sSUFBSUMsTUFBTUMsS0FBS0MsT0FBTyxJQUFJO0lBQ2xDO0lBRUEsT0FBT0Q7QUFDVDtBQUVBLFNBQVNFOztJQUNQLE1BQU1DLFdBQVdqQiw2Q0FBTUE7SUFDdkIsTUFBTWtCLFVBQVVsQiw2Q0FBTUE7SUFFdEIsTUFBTSxDQUFDbUIsU0FBU0MsV0FBVyxHQUFHckIsK0NBQVFBLENBQUM7SUFFdkMsU0FBU3NCO1FBQ1BELFdBQVcsQ0FBQ0UsWUFBYyxDQUFDQTtJQUM3QjtJQUVBLGVBQWVDLGFBQWFDLEtBQUs7UUFDL0JBLE1BQU1DLGNBQWM7UUFFcEIsTUFBTXRCLFFBQVFjLFNBQVNTLE9BQU8sQ0FBQ0MsS0FBSztRQUNwQyxNQUFNdkIsV0FBV2MsUUFBUVEsT0FBTyxDQUFDQyxLQUFLO1FBRXRDLElBQUlSLFNBQVMsQ0FDYixPQUFPO1lBQ0wsSUFBSTtnQkFDRixNQUFNUyxTQUFTLE1BQU0xQixXQUFXQyxPQUFPQztnQkFDdkN5QixRQUFRQyxHQUFHLENBQUNGO1lBQ2QsRUFBRSxPQUFPRyxPQUFPLENBQUM7UUFDbkI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFXaEMsbUVBQVk7OzBCQUM5Qiw4REFBQ2tDOzBCQUFJaEIsVUFBVSxVQUFVOzs7Ozs7MEJBQ3pCLDhEQUFDaUI7O2tDQUNDLDhEQUFDQzt3QkFBSUosV0FBV2hDLHNFQUFlOzswQ0FDN0IsOERBQUNzQztnQ0FBTUMsU0FBUTswQ0FBUTs7Ozs7OzBDQUN2Qiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQVFDLElBQUc7Z0NBQVFDLFFBQVE7Z0NBQUNDLEtBQUs1Qjs7Ozs7Ozs7Ozs7O2tDQUUvQyw4REFBQ29CO3dCQUFJSixXQUFXaEMsc0VBQWU7OzBDQUM3Qiw4REFBQ3NDO2dDQUFNQyxTQUFROzBDQUFXOzs7Ozs7MENBQzFCLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBV0MsSUFBRztnQ0FBV0MsUUFBUTtnQ0FBQ0MsS0FBSzNCOzs7Ozs7Ozs7Ozs7a0NBRXJELDhEQUFDbUI7d0JBQUlKLFdBQVdoQyxzRUFBZTs7MENBQzdCLDhEQUFDOEM7MENBQVE1QixVQUFVLFVBQVU7Ozs7OzswQ0FDN0IsOERBQUM0QjtnQ0FDQ0wsTUFBSztnQ0FDTFQsV0FBV2hDLHFFQUFjO2dDQUN6QmdELFNBQVM1QjswQ0FFUkYsVUFBVSx1QkFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU05QztHQWxEU0g7S0FBQUE7QUFvRFQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL2F1dGgtZm9ybS5qcz82MWZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2F1dGgtZm9ybS5tb2R1bGUuY3NzXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoZW1haWwsIHBhc3N3b3JkKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9hdXRoL3NpZ251cFwiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICB9KTtcbiAgaWYgKCFyZXMub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlIHx8IFwiU29tZXRoaW5nIHdyb25nXCIpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIEF1dGhGb3JtKCkge1xuICBjb25zdCBzZXRFbWFpbCA9IHVzZVJlZigpO1xuICBjb25zdCBzZXRQYXNzID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgZnVuY3Rpb24gc3dpdGNoQXV0aE1vZGVIYW5kbGVyKCkge1xuICAgIHNldElzTG9naW4oKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzdWJtaXRIYW5kZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZW1haWwgPSBzZXRFbWFpbC5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gc2V0UGFzcy5jdXJyZW50LnZhbHVlO1xuXG4gICAgaWYgKGlzTG9naW4pIHtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3JlYXRlVXNlcihlbWFpbCwgcGFzc3dvcmQpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuYXV0aH0+XG4gICAgICA8aDE+e2lzTG9naW4gPyBcIkxvZ2luXCIgOiBcIlNpZ24gVXBcIn08L2gxPlxuICAgICAgPGZvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5Zb3VyIEVtYWlsPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHJlcXVpcmVkIHJlZj17c2V0RW1haWx9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+WW91ciBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiByZXF1aXJlZCByZWY9e3NldFBhc3N9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICA8YnV0dG9uPntpc0xvZ2luID8gXCJMb2dpblwiIDogXCJDcmVhdGUgQWNjb3VudFwifTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRvZ2dsZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3N3aXRjaEF1dGhNb2RlSGFuZGxlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNMb2dpbiA/IFwiQ3JlYXRlIG5ldyBhY2NvdW50XCIgOiBcIkxvZ2luIHdpdGggZXhpc3RpbmcgYWNjb3VudFwifVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUmVmIiwiY2xhc3NlcyIsImNyZWF0ZVVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJvayIsIkVycm9yIiwiZGF0YSIsIm1lc3NhZ2UiLCJBdXRoRm9ybSIsInNldEVtYWlsIiwic2V0UGFzcyIsImlzTG9naW4iLCJzZXRJc0xvZ2luIiwic3dpdGNoQXV0aE1vZGVIYW5kbGVyIiwicHJldlN0YXRlIiwic3VibWl0SGFuZGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJhdXRoIiwiaDEiLCJmb3JtIiwiZGl2IiwiY29udHJvbCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwicmVxdWlyZWQiLCJyZWYiLCJhY3Rpb25zIiwiYnV0dG9uIiwidG9nZ2xlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/auth/auth-form.js\n"));

/***/ })

});