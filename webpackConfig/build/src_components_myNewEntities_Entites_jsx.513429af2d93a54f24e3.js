"use strict";
(self["webpackChunkapp_redux"] = self["webpackChunkapp_redux"] || []).push([["src_components_myNewEntities_Entites_jsx"],{

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/components/comments/Modal.module.css":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/components/comments/Modal.module.css ***!
  \********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* binding */ Modal),
/* harmony export */   ModalContent: () => (/* binding */ ModalContent),
/* harmony export */   active: () => (/* binding */ active),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.rfzqwIwC0Movsx7BUq8q {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: none;
  background-color: rgba(0, 0, 0, 0.5);
}

.rfzqwIwC0Movsx7BUq8q.isiEQ0B3ADwr65hwZJif {
  display: flex;
  justify-content: center;
  align-items: center;
}

.g1TrVawsI4piEqFvl9AF {
  padding: 25px;
  margin: 10px;
  background-color: aliceblue;
  border: 1px;
  border-radius: 15px;
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/components/comments/Modal.module.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,OAAO;EACP,QAAQ;EACR,MAAM;EACN,SAAS;EACT,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,2BAA2B;EAC3B,WAAW;EACX,mBAAmB;EACnB,eAAe;AACjB","sourcesContent":[".Modal {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: none;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.Modal.active {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.ModalContent {\n  padding: 25px;\n  margin: 10px;\n  background-color: aliceblue;\n  border: 1px;\n  border-radius: 15px;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
var Modal = `rfzqwIwC0Movsx7BUq8q`;
var active = `isiEQ0B3ADwr65hwZJif`;
var ModalContent = `g1TrVawsI4piEqFvl9AF`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/comments/Modal.jsx":
/*!*******************************************!*\
  !*** ./src/components/comments/Modal.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modal_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.module.css */ "./src/components/comments/Modal.module.css");


const Modal = _ref => {
  let {
    children,
    visible,
    setVisible,
    handleResetForm
  } = _ref;
  const rootClasses = [_Modal_module_css__WEBPACK_IMPORTED_MODULE_1__.Modal];
  if (visible) {
    rootClasses.push(_Modal_module_css__WEBPACK_IMPORTED_MODULE_1__.active);
  }
  const handleCloseForm = () => {
    setVisible(false);
    handleResetForm();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: rootClasses.join(' '),
    onClick: handleCloseForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_1__.ModalContent,
    onClick: e => e.stopPropagation()
  }, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./src/components/comments/Modal.module.css":
/*!**************************************************!*\
  !*** ./src/components/comments/Modal.module.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_Modal_module_css__WEBPACK_IMPORTED_MODULE_6__.Modal),
/* harmony export */   ModalContent: () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_Modal_module_css__WEBPACK_IMPORTED_MODULE_6__.ModalContent),
/* harmony export */   active: () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_Modal_module_css__WEBPACK_IMPORTED_MODULE_6__.active),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_Modal_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./Modal.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/components/comments/Modal.module.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_Modal_module_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_Modal_module_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_Modal_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_Modal_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/myNewEntities/AddEntities.jsx":
/*!******************************************************!*\
  !*** ./src/components/myNewEntities/AddEntities.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slices_apiApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../slices/apiApp */ "./src/slices/apiApp.js");
/* harmony import */ var _comments_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comments/Modal */ "./src/components/comments/Modal.jsx");




const AddEntities = () => {
  const [addEntities] = (0,_slices_apiApp__WEBPACK_IMPORTED_MODULE_1__.useAddEntitiesMutation)();
  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [surname, setSurname] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [valid, setIsValid] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleValidButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((name, surname) => {
    if (!name || !surname) {
      return setIsValid(false);
    }
    return setIsValid(true);
  }, []);
  const handleReset = () => {
    setName('');
    setSurname('');
    handleValidButton();
  };
  const closeModalWindow = () => {
    setVisible(false);
    handleReset();
    handleValidButton();
  };
  const handleAddEnt = async e => {
    e.preventDefault();
    if (name && surname) {
      await addEntities({
        name,
        surname,
        id: Math.random(Math.random('hello'))
      });
      handleReset();
      setVisible(false);
    }
  };
  const handlChangeName = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    const name = e.target.value;
    setName(name);
    handleValidButton(name, surname);
  }, [handleValidButton, surname]);
  const handlChangeSurname = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    const surname = e.target.value;
    setSurname(e.target.value);
    handleValidButton(name, surname);
  }, [name, handleValidButton]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setVisible(true)
  }, "add "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_comments_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    visible: visible,
    setVisible: setVisible,
    handleResetForm: handleReset
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleAddEnt
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: name,
    onChange: handlChangeName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: surname,
    onChange: handlChangeSurname
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: !valid,
    type: "submit"
  }, "add")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: closeModalWindow
  }, "close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleReset
  }, "\u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddEntities);

/***/ }),

/***/ "./src/components/myNewEntities/Entites.jsx":
/*!**************************************************!*\
  !*** ./src/components/myNewEntities/Entites.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddEntities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddEntities */ "./src/components/myNewEntities/AddEntities.jsx");
/* harmony import */ var _MapEntites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapEntites */ "./src/components/myNewEntities/MapEntites.jsx");



const Entites = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AddEntities__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MapEntites__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Entites);

/***/ }),

/***/ "./src/components/myNewEntities/MapEntites.jsx":
/*!*****************************************************!*\
  !*** ./src/components/myNewEntities/MapEntites.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slices_apiApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../slices/apiApp */ "./src/slices/apiApp.js");



const MapEntites = () => {
  const [sorted, setSorted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('id');
  const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    data = []
  } = (0,_slices_apiApp__WEBPACK_IMPORTED_MODULE_1__.useGetEntitiesQuery)();
  const [remove] = (0,_slices_apiApp__WEBPACK_IMPORTED_MODULE_1__.useDeleteEntitiesMutation)();
  const deleteEntities = async id => await remove(id);
  const sortedData = [...data].sort((a, b) => a[sorted].localeCompare(b[sorted])).filter(dat => dat.name.includes(text));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: sorted,
    onChange: e => setSorted(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "",
    disabled: true
  }, "\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "id"
  }, "\u043F\u043E id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "name"
  }, "\u043F\u043E \u0438\u043C\u0435\u043D\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "surname"
  }, "\u043F\u043E \u0444\u0430\u043C\u0438\u043B\u0438\u0438")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: text,
    onChange: e => setText(e.target.value)
  }), sortedData.map(ent => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    key: ent.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, ent.name, " ", ent.surname, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => deleteEntities(ent.id)
  }, "delete"), ' '))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapEntites);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfbXlOZXdFbnRpdGllc19FbnRpdGVzX2pzeC41MTM0MjlhZjJkOTNhNTRmMjRlMy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyR0FBMkcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLGtDQUFrQyxvQkFBb0IsWUFBWSxhQUFhLFdBQVcsY0FBYyxrQkFBa0IseUNBQXlDLEdBQUcsbUJBQW1CLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsbUJBQW1CLGtCQUFrQixpQkFBaUIsZ0NBQWdDLGdCQUFnQix3QkFBd0Isb0JBQW9CLEdBQUcscUJBQXFCO0FBQ251QjtBQUNPO0FBQ0E7QUFDQTtBQUNQLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ2I7QUFDZTtBQUN6QyxNQUFNRSxLQUFLLEdBQUdDLElBQUEsSUFBd0Q7RUFBQSxJQUF2RDtJQUFFQyxRQUFRO0lBQUVDLE9BQU87SUFBRUMsVUFBVTtJQUFFQztFQUFnQixDQUFDLEdBQUFKLElBQUE7RUFDL0QsTUFBTUssV0FBVyxHQUFHLENBQUNQLG9EQUFRLENBQUM7RUFDOUIsSUFBSUksT0FBTyxFQUFFO0lBQ1hHLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDUixxREFBUyxDQUFDO0VBQzdCO0VBRUEsTUFBTVUsZUFBZSxHQUFHQSxDQUFBLEtBQU07SUFDNUJMLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDakJD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QUFDLENBQUM7RUFDekMsb0JBQ0VwRCwwREFBQSwyQkFDRUEsMERBQUE7SUFBUXdDLEtBQUssRUFBRVUsTUFBTztJQUFDTixRQUFRLEVBQUUzQixDQUFDLElBQUlrQyxTQUFTLENBQUNsQyxDQUFDLENBQUNzQixNQUFNLENBQUNDLEtBQUs7RUFBRSxnQkFDOUR4QywwREFBQTtJQUFRd0MsS0FBSyxFQUFDLEVBQUU7SUFBQ0ssUUFBUTtFQUFBLEdBQUMsMkVBRWxCLENBQUMsZUFDVDdDLDBEQUFBO0lBQVF3QyxLQUFLLEVBQUM7RUFBSSxHQUFDLGlCQUFhLENBQUMsZUFDakN4QywwREFBQTtJQUFRd0MsS0FBSyxFQUFDO0VBQU0sR0FBQyw2Q0FBZ0IsQ0FBQyxlQUN0Q3hDLDBEQUFBO0lBQVF3QyxLQUFLLEVBQUM7RUFBUyxHQUFDLHlEQUFrQixDQUNwQyxDQUFDLGVBQ1R4QywwREFBQTtJQUFPMkMsSUFBSSxFQUFDLE1BQU07SUFBQ0gsS0FBSyxFQUFFWSxJQUFLO0lBQUNSLFFBQVEsRUFBRTNCLENBQUMsSUFBSW9DLE9BQU8sQ0FBQ3BDLENBQUMsQ0FBQ3NCLE1BQU0sQ0FBQ0MsS0FBSztFQUFFLENBQUUsQ0FBQyxFQUN6RWlCLFVBQVUsQ0FBQ1EsR0FBRyxDQUFDQyxHQUFHLGlCQUNqQmxFLDBEQUFBO0lBQUltRSxHQUFHLEVBQUVELEdBQUcsQ0FBQy9CO0VBQUcsZ0JBQ2RuQywwREFBQSxhQUNHa0UsR0FBRyxDQUFDMUMsSUFBSSxFQUFDLEdBQUMsRUFBQzBDLEdBQUcsQ0FBQ3hDLE9BQU8sRUFBQyxHQUFDLGVBQUExQiwwREFBQTtJQUFRZSxPQUFPLEVBQUVBLENBQUEsS0FBTXlDLGNBQWMsQ0FBQ1UsR0FBRyxDQUFDL0IsRUFBRTtFQUFFLEdBQUMsUUFBYyxDQUFDLEVBQUMsR0FDdEYsQ0FDRixDQUNMLENBQ0UsQ0FBQztBQUVWLENBQUM7QUFFRCxpRUFBZVcsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC1yZWR1eC8uL3NyYy9jb21wb25lbnRzL2NvbW1lbnRzL01vZGFsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vYXBwLXJlZHV4Ly4vc3JjL2NvbXBvbmVudHMvY29tbWVudHMvTW9kYWwuanN4Iiwid2VicGFjazovL2FwcC1yZWR1eC8uL3NyYy9jb21wb25lbnRzL2NvbW1lbnRzL01vZGFsLm1vZHVsZS5jc3M/NmNjMiIsIndlYnBhY2s6Ly9hcHAtcmVkdXgvLi9zcmMvY29tcG9uZW50cy9teU5ld0VudGl0aWVzL0FkZEVudGl0aWVzLmpzeCIsIndlYnBhY2s6Ly9hcHAtcmVkdXgvLi9zcmMvY29tcG9uZW50cy9teU5ld0VudGl0aWVzL0VudGl0ZXMuanN4Iiwid2VicGFjazovL2FwcC1yZWR1eC8uL3NyYy9jb21wb25lbnRzL215TmV3RW50aXRpZXMvTWFwRW50aXRlcy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5yZnpxd0l3QzBNb3ZzeDdCVXE4cSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5yZnpxd0l3QzBNb3ZzeDdCVXE4cS5pc2lFUTBCM0FEd3I2NWh3WkppZiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZzFUclZhd3NJNHBpRXFGdmw5QUYge1xuICBwYWRkaW5nOiAyNXB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgYm9yZGVyOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvY29tbWVudHMvTW9kYWwubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU07RUFDTixTQUFTO0VBQ1QsYUFBYTtFQUNiLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5Nb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4uTW9kYWwuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5Nb2RhbENvbnRlbnQge1xcbiAgcGFkZGluZzogMjVweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGJvcmRlcjogMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgdmFyIE1vZGFsID0gYHJmenF3SXdDME1vdnN4N0JVcThxYDtcbmV4cG9ydCB2YXIgYWN0aXZlID0gYGlzaUVRMEIzQUR3cjY1aHdaSmlmYDtcbmV4cG9ydCB2YXIgTW9kYWxDb250ZW50ID0gYGcxVHJWYXdzSTRwaUVxRnZsOUFGYDtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIGNsIGZyb20gJy4vTW9kYWwubW9kdWxlLmNzcyc7XG5jb25zdCBNb2RhbCA9ICh7IGNoaWxkcmVuLCB2aXNpYmxlLCBzZXRWaXNpYmxlLCBoYW5kbGVSZXNldEZvcm0gfSkgPT4ge1xuICBjb25zdCByb290Q2xhc3NlcyA9IFtjbC5Nb2RhbF07XG4gIGlmICh2aXNpYmxlKSB7XG4gICAgcm9vdENsYXNzZXMucHVzaChjbC5hY3RpdmUpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2VGb3JtID0gKCkgPT4ge1xuICAgIHNldFZpc2libGUoZmFsc2UpO1xuICAgIGhhbmRsZVJlc2V0Rm9ybSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3Jvb3RDbGFzc2VzLmpvaW4oJyAnKX0gb25DbGljaz17aGFuZGxlQ2xvc2VGb3JtfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5Nb2RhbENvbnRlbnR9IG9uQ2xpY2s9e2UgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuL01vZGFsLm1vZHVsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4vTW9kYWwubW9kdWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFkZEVudGl0aWVzTXV0YXRpb24gfSBmcm9tICcuLi8uLi9zbGljZXMvYXBpQXBwJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbW1lbnRzL01vZGFsJztcbmNvbnN0IEFkZEVudGl0aWVzID0gKCkgPT4ge1xuICBjb25zdCBbYWRkRW50aXRpZXNdID0gdXNlQWRkRW50aXRpZXNNdXRhdGlvbigpO1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzdXJuYW1lLCBzZXRTdXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdmFsaWQsIHNldElzVmFsaWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZVZhbGlkQnV0dG9uID0gdXNlQ2FsbGJhY2soKG5hbWUsIHN1cm5hbWUpID0+IHtcbiAgICBpZiAoIW5hbWUgfHwgIXN1cm5hbWUpIHtcbiAgICAgIHJldHVybiBzZXRJc1ZhbGlkKGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNldElzVmFsaWQodHJ1ZSk7XG4gIH0sIFtdKTtcbiAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XG4gICAgc2V0TmFtZSgnJyk7XG4gICAgc2V0U3VybmFtZSgnJyk7XG4gICAgaGFuZGxlVmFsaWRCdXR0b24oKTtcbiAgfTtcbiAgY29uc3QgY2xvc2VNb2RhbFdpbmRvdyA9ICgpID0+IHtcbiAgICBzZXRWaXNpYmxlKGZhbHNlKTtcbiAgICBoYW5kbGVSZXNldCgpO1xuICAgIGhhbmRsZVZhbGlkQnV0dG9uKCk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUFkZEVudCA9IGFzeW5jIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAobmFtZSAmJiBzdXJuYW1lKSB7XG4gICAgICBhd2FpdCBhZGRFbnRpdGllcyh7IG5hbWUsIHN1cm5hbWUsIGlkOiBNYXRoLnJhbmRvbShNYXRoLnJhbmRvbSgnaGVsbG8nKSkgfSk7XG4gICAgICBoYW5kbGVSZXNldCgpO1xuICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsQ2hhbmdlTmFtZSA9IHVzZUNhbGxiYWNrKFxuICAgIGUgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgc2V0TmFtZShuYW1lKTtcbiAgICAgIGhhbmRsZVZhbGlkQnV0dG9uKG5hbWUsIHN1cm5hbWUpO1xuICAgIH0sXG4gICAgW2hhbmRsZVZhbGlkQnV0dG9uLCBzdXJuYW1lXSxcbiAgKTtcblxuICBjb25zdCBoYW5kbENoYW5nZVN1cm5hbWUgPSB1c2VDYWxsYmFjayhcbiAgICBlID0+IHtcbiAgICAgIGNvbnN0IHN1cm5hbWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHNldFN1cm5hbWUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgaGFuZGxlVmFsaWRCdXR0b24obmFtZSwgc3VybmFtZSk7XG4gICAgfSxcbiAgICBbbmFtZSwgaGFuZGxlVmFsaWRCdXR0b25dLFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSh0cnVlKX0+YWRkIDwvYnV0dG9uPlxuICAgICAgPE1vZGFsIHZpc2libGU9e3Zpc2libGV9IHNldFZpc2libGU9e3NldFZpc2libGV9IGhhbmRsZVJlc2V0Rm9ybT17aGFuZGxlUmVzZXR9PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlQWRkRW50fT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e2hhbmRsQ2hhbmdlTmFtZX0gLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17c3VybmFtZX0gb25DaGFuZ2U9e2hhbmRsQ2hhbmdlU3VybmFtZX0gLz5cbiAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXshdmFsaWR9IHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIGFkZFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17Y2xvc2VNb2RhbFdpbmRvd30+Y2xvc2U8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZXNldH0+0YHQsdGA0L7RgdC40YLRjDwvYnV0dG9uPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZEVudGl0aWVzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBZGRFbnRpdGllcyBmcm9tICcuL0FkZEVudGl0aWVzJztcbmltcG9ydCBNYXBFbnRpdGVzIGZyb20gJy4vTWFwRW50aXRlcyc7XG5jb25zdCBFbnRpdGVzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8QWRkRW50aXRpZXMgLz5cbiAgICAgIDxNYXBFbnRpdGVzIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbnRpdGVzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUdldEVudGl0aWVzUXVlcnksIHVzZURlbGV0ZUVudGl0aWVzTXV0YXRpb24gfSBmcm9tICcuLi8uLi9zbGljZXMvYXBpQXBwJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgTWFwRW50aXRlcyA9ICgpID0+IHtcbiAgY29uc3QgW3NvcnRlZCwgc2V0U29ydGVkXSA9IHVzZVN0YXRlKCdpZCcpO1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHsgZGF0YSA9IFtdIH0gPSB1c2VHZXRFbnRpdGllc1F1ZXJ5KCk7XG4gIGNvbnN0IFtyZW1vdmVdID0gdXNlRGVsZXRlRW50aXRpZXNNdXRhdGlvbigpO1xuXG4gIGNvbnN0IGRlbGV0ZUVudGl0aWVzID0gYXN5bmMgaWQgPT4gYXdhaXQgcmVtb3ZlKGlkKTtcbiAgY29uc3Qgc29ydGVkRGF0YSA9IFsuLi5kYXRhXVxuICAgIC5zb3J0KChhLCBiKSA9PiBhW3NvcnRlZF0ubG9jYWxlQ29tcGFyZShiW3NvcnRlZF0pKVxuICAgIC5maWx0ZXIoZGF0ID0+IGRhdC5uYW1lLmluY2x1ZGVzKHRleHQpKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHNlbGVjdCB2YWx1ZT17c29ydGVkfSBvbkNoYW5nZT17ZSA9PiBzZXRTb3J0ZWQoZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkPlxuICAgICAgICAgINGB0L7RgNGC0LjRgNC+0LLQutCwINC/0L5cbiAgICAgICAgPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJpZFwiPtC/0L4gaWQ8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5hbWVcIj7Qv9C+INC40LzQtdC90Lg8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInN1cm5hbWVcIj7Qv9C+INGE0LDQvNC40LvQuNC4PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0ZXh0fSBvbkNoYW5nZT17ZSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgIHtzb3J0ZWREYXRhLm1hcChlbnQgPT4gKFxuICAgICAgICA8dWwga2V5PXtlbnQuaWR9PlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIHtlbnQubmFtZX0ge2VudC5zdXJuYW1lfSA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUVudGl0aWVzKGVudC5pZCl9PmRlbGV0ZTwvYnV0dG9uPnsnICd9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFwRW50aXRlcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNsIiwiTW9kYWwiLCJfcmVmIiwiY2hpbGRyZW4iLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImhhbmRsZVJlc2V0Rm9ybSIsInJvb3RDbGFzc2VzIiwicHVzaCIsImFjdGl2ZSIsImhhbmRsZUNsb3NlRm9ybSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJqb2luIiwib25DbGljayIsIk1vZGFsQ29udGVudCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJ1c2VDYWxsYmFjayIsInVzZUFkZEVudGl0aWVzTXV0YXRpb24iLCJ1c2VTdGF0ZSIsIkFkZEVudGl0aWVzIiwiYWRkRW50aXRpZXMiLCJuYW1lIiwic2V0TmFtZSIsInN1cm5hbWUiLCJzZXRTdXJuYW1lIiwidmFsaWQiLCJzZXRJc1ZhbGlkIiwiaGFuZGxlVmFsaWRCdXR0b24iLCJoYW5kbGVSZXNldCIsImNsb3NlTW9kYWxXaW5kb3ciLCJoYW5kbGVBZGRFbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwiTWF0aCIsInJhbmRvbSIsImhhbmRsQ2hhbmdlTmFtZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxDaGFuZ2VTdXJuYW1lIiwib25TdWJtaXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJkaXNhYmxlZCIsIk1hcEVudGl0ZXMiLCJFbnRpdGVzIiwidXNlR2V0RW50aXRpZXNRdWVyeSIsInVzZURlbGV0ZUVudGl0aWVzTXV0YXRpb24iLCJzb3J0ZWQiLCJzZXRTb3J0ZWQiLCJ0ZXh0Iiwic2V0VGV4dCIsImRhdGEiLCJyZW1vdmUiLCJkZWxldGVFbnRpdGllcyIsInNvcnRlZERhdGEiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiZmlsdGVyIiwiZGF0IiwiaW5jbHVkZXMiLCJtYXAiLCJlbnQiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9