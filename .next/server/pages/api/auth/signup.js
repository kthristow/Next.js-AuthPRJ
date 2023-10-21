"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/signup";
exports.ids = ["pages/api/auth/signup"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fsignup&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Csignup.js&middlewareConfigBase64=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fsignup&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Csignup.js&middlewareConfigBase64=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_auth_signup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\auth\\signup.js */ \"(api)/./pages/api/auth/signup.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_signup_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_signup_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/auth/signup\",\n        pathname: \"/api/auth/signup\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_auth_signup_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmF1dGglMkZzaWdudXAmcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZwYWdlcyU1Q2FwaSU1Q2F1dGglNUNzaWdudXAuanMmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ0w7QUFDMUQ7QUFDMEQ7QUFDMUQ7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLHNEQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLGVBQWUsd0VBQUssQ0FBQyxzREFBUTtBQUNwQztBQUNPLHdCQUF3QixnSEFBbUI7QUFDbEQ7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLz81Y2RmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlc1xcXFxhcGlcXFxcYXV0aFxcXFxzaWdudXAuanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL3NpZ251cFwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvc2lnbnVwXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fsignup&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Csignup.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hashPassword: () => (/* binding */ hashPassword)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function hashPassword(password) {\n    const hashedPassword = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 12);\n    return hashedPassword;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEI7QUFHdkIsZUFBZUMsYUFBYUMsUUFBUTtJQUN6QyxNQUFNQyxpQkFBaUIsTUFBT0gsNENBQUlBLENBQUNFLFVBQVU7SUFFN0MsT0FBT0M7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9saWIvYXV0aC5qcz8yODdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhc2ggfSBmcm9tIFwiYmNyeXB0XCI7XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhc2hQYXNzd29yZChwYXNzd29yZCkge1xyXG4gIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgIGhhc2gocGFzc3dvcmQsIDEyKTtcclxuXHJcbiAgcmV0dXJuIGhhc2hlZFBhc3N3b3JkO1xyXG59Il0sIm5hbWVzIjpbImhhc2giLCJoYXNoUGFzc3dvcmQiLCJwYXNzd29yZCIsImhhc2hlZFBhc3N3b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/auth.js\n");

/***/ }),

/***/ "(api)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectToDatabase() {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://kthristow:NwxXNyEFW4kft1TO@cluster0.00exydu.mongodb.net/auth-demo?retryWrites=true&w=majority\");\n    return client;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBRTVCLGVBQWVDO0lBQ2xCLE1BQU1DLFNBQVMsTUFBTUYsZ0RBQVdBLENBQUNHLE9BQU8sQ0FBQztJQUV6QyxPQUFPRDtBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL2xpYi9kYi5qcz8zZGM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW9uZ29DbGllbnR9IGZyb20gJ21vbmdvZGInXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL2t0aHJpc3RvdzpOd3hYTnlFRlc0a2Z0MVRPQGNsdXN0ZXIwLjAwZXh5ZHUubW9uZ29kYi5uZXQvYXV0aC1kZW1vP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScpO1xyXG5cclxuICAgIHJldHVybiBjbGllbnQ7XHJcbn0iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNsaWVudCIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/signup.js":
/*!**********************************!*\
  !*** ./pages/api/auth/signup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/auth */ \"(api)/./lib/auth.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/db */ \"(api)/./lib/db.js\");\n\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const { email, password } = data;\n        if (!email || !email.includes(\"@\") || !password || password.trim().length < 7) {\n            res.status(422).json({\n                message: \"Invalid input\"\n            });\n            return;\n        }\n        const client = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n        const db = client.db();\n        const existing = await db.collection(\"users\").findOne({\n            email: email\n        });\n        if (existing) {\n            res.status(422).json({\n                message: \"User exists already!\"\n            });\n            client.close();\n            return;\n        }\n        const hashedPassword = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_0__.hashPassword)(password);\n        const result = await db.collection(\"users\").insertOne({\n            email: email,\n            password: hashedPassword\n        });\n        res.status(201).json({\n            message: \"Created user!\"\n        });\n        client.close();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBQ0c7QUFFcEQsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBRTNCLElBQUdELElBQUlFLE1BQU0sS0FBSyxRQUFPO1FBQ3JCLE1BQU1DLE9BQU9ILElBQUlJLElBQUk7UUFFckIsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHSDtRQUU1QixJQUFHLENBQUNFLFNBQVMsQ0FBQ0EsTUFBTUUsUUFBUSxDQUFDLFFBQVEsQ0FBQ0QsWUFBWUEsU0FBU0UsSUFBSSxHQUFHQyxNQUFNLEdBQUcsR0FBRTtZQUUzRVIsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBQ0MsU0FBUztZQUFlO1lBQzlDO1FBQ0Y7UUFFQSxNQUFNQyxTQUFTLE1BQU1mLDBEQUFpQkE7UUFFdEMsTUFBTWdCLEtBQUtELE9BQU9DLEVBQUU7UUFFcEIsTUFBTUMsV0FBVyxNQUFNRCxHQUFHRSxVQUFVLENBQUMsU0FBU0MsT0FBTyxDQUFDO1lBQUNaLE9BQU9BO1FBQUs7UUFFbkUsSUFBR1UsVUFBUztZQUNSZCxJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFDQyxTQUFTO1lBQXNCO1lBQ3JEQyxPQUFPSyxLQUFLO1lBQ1o7UUFDSjtRQUVBLE1BQU1DLGlCQUFpQixNQUFNdEIsdURBQVlBLENBQUNTO1FBRTNDLE1BQU1jLFNBQVMsTUFBTU4sR0FBR0UsVUFBVSxDQUFDLFNBQVNLLFNBQVMsQ0FBQztZQUNuRGhCLE9BQU1BO1lBQ05DLFVBQVVhO1FBQ1o7UUFFQWxCLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBQ0MsU0FBUztRQUFlO1FBQzlDQyxPQUFPSyxLQUFLO0lBQ2hCO0FBR0o7QUFFQSxpRUFBZW5CLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL2F1dGgvc2lnbnVwLmpzP2EyYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFzaFBhc3N3b3JkIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9hdXRoXCI7XHJcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYlwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG5cclxuICAgIGlmKHJlcS5tZXRob2QgPT09ICdQT1NUJyl7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG5cclxuICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gZGF0YTtcclxuICAgICAgXHJcbiAgICAgICAgaWYoIWVtYWlsIHx8ICFlbWFpbC5pbmNsdWRlcygnQCcpIHx8ICFwYXNzd29yZCB8fCBwYXNzd29yZC50cmltKCkubGVuZ3RoIDwgNyl7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHttZXNzYWdlOiAnSW52YWxpZCBpbnB1dCd9KTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5maW5kT25lKHtlbWFpbDogZW1haWx9KVxyXG5cclxuICAgICAgICBpZihleGlzdGluZyl7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHttZXNzYWdlOiAnVXNlciBleGlzdHMgYWxyZWFkeSEnfSlcclxuICAgICAgICAgICAgY2xpZW50LmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgaGFzaFBhc3N3b3JkKHBhc3N3b3JkKTtcclxuICAgICAgXHJcbiAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuaW5zZXJ0T25lKHtcclxuICAgICAgICAgIGVtYWlsOmVtYWlsLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHttZXNzYWdlOiAnQ3JlYXRlZCB1c2VyISd9KTtcclxuICAgICAgICBjbGllbnQuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsiaGFzaFBhc3N3b3JkIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJlbWFpbCIsInBhc3N3b3JkIiwiaW5jbHVkZXMiLCJ0cmltIiwibGVuZ3RoIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJjbGllbnQiLCJkYiIsImV4aXN0aW5nIiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJjbG9zZSIsImhhc2hlZFBhc3N3b3JkIiwicmVzdWx0IiwiaW5zZXJ0T25lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/signup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fsignup&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Csignup.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();