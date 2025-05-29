"use strict";
(self["webpackChunkapp_redux"] = self["webpackChunkapp_redux"] || []).push([["src_components_UserAdress_jsx"],{

/***/ "./src/components/UserAdress.jsx":
/*!***************************************!*\
  !*** ./src/components/UserAdress.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _slices_tasksSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slices/tasksSlice */ "./src/slices/tasksSlice.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");




const UserAdress = () => {
  const params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)();
  const posts = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_slices_tasksSlice__WEBPACK_IMPORTED_MODULE_1__.selectors.selectAll);
  const route = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, posts.map(_ref => {
    let {
      address
    } = _ref;
    return address ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: params.id
    }, address.city)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " \u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0441 id = ", params.id, " \u043D\u0435\u0442\u0443 \u0430\u0434\u0440\u0435\u0441\u0430 ");
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => route('/postsApp')
  }, "\u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430\u0437\u0430\u0434")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserAdress);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfVXNlckFkcmVzc19qc3guNjVkYWRjYTJhM2Y3ZmVkNjJmZTIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBQ087QUFDUztBQUMxRCxNQUFNSyxVQUFVLEdBQUdBLENBQUEsS0FBTTtFQUN2QixNQUFNQyxNQUFNLEdBQUdGLDJEQUFTLENBQUMsQ0FBQztFQUMxQixNQUFNRyxLQUFLLEdBQUdOLHdEQUFXLENBQUNDLHlEQUFTLENBQUNNLFNBQVMsQ0FBQztFQUM5QyxNQUFNQyxLQUFLLEdBQUdOLDZEQUFXLENBQUMsQ0FBQztFQUUzQixvQkFDRUgsMERBQUEsY0FDR08sS0FBSyxDQUFDSSxHQUFHLENBQUNDLElBQUE7SUFBQSxJQUFDO01BQUVDO0lBQVEsQ0FBQyxHQUFBRCxJQUFBO0lBQUEsT0FDckJDLE9BQU8sZ0JBQ0xiLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJYyxHQUFHLEVBQUVSLE1BQU0sQ0FBQ1M7SUFBRyxHQUFFRixPQUFPLENBQUNHLElBQVMsQ0FDcEMsQ0FBQyxnQkFFTGhCLDBEQUFBLGVBQU0sK0ZBQXVCLEVBQUNNLE1BQU0sQ0FBQ1MsRUFBRSxFQUFDLGlFQUFtQixDQUM1RDtFQUFBLENBQ0gsQ0FBQyxlQUNEZiwwREFBQSwyQkFDRUEsMERBQUE7SUFBUWlCLE9BQU8sRUFBRUEsQ0FBQSxLQUFNUixLQUFLLENBQUMsV0FBVztFQUFFLEdBQUMsdUZBQXVCLENBQy9ELENBQ0YsQ0FBQztBQUVWLENBQUM7QUFFRCxpRUFBZUosVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC1yZWR1eC8uL3NyYy9jb21wb25lbnRzL1VzZXJBZHJlc3MuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJy4uL3NsaWNlcy90YXNrc1NsaWNlJztcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmNvbnN0IFVzZXJBZHJlc3MgPSAoKSA9PiB7XG4gIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtcygpO1xuICBjb25zdCBwb3N0cyA9IHVzZVNlbGVjdG9yKHNlbGVjdG9ycy5zZWxlY3RBbGwpO1xuICBjb25zdCByb3V0ZSA9IHVzZU5hdmlnYXRlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3Bvc3RzLm1hcCgoeyBhZGRyZXNzIH0pID0+XG4gICAgICAgIGFkZHJlc3MgPyAoXG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpIGtleT17cGFyYW1zLmlkfT57YWRkcmVzcy5jaXR5fTwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8c3Bhbj4g0YMg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINGBIGlkID0ge3BhcmFtcy5pZH0g0L3QtdGC0YMg0LDQtNGA0LXRgdCwIDwvc3Bhbj5cbiAgICAgICAgKSxcbiAgICAgICl9XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlKCcvcG9zdHNBcHAnKX0+0LLQtdGA0L3Rg9GC0YzRgdGPINC90LDQt9Cw0LQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlckFkcmVzcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVNlbGVjdG9yIiwic2VsZWN0b3JzIiwidXNlTmF2aWdhdGUiLCJ1c2VQYXJhbXMiLCJVc2VyQWRyZXNzIiwicGFyYW1zIiwicG9zdHMiLCJzZWxlY3RBbGwiLCJyb3V0ZSIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJfcmVmIiwiYWRkcmVzcyIsImtleSIsImlkIiwiY2l0eSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9