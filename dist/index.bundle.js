/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/about.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/about.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.about-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 40px;
  flex-wrap: wrap;
  padding: 20px;
}
.about-section,.mission-section,.history-section,.team-section {
  border: 2px solid grey;
  padding: 1rem;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); 
  transition: transform 0.3s, box-shadow 0.3s; 
}

.about-section:hover ,.mission-section:hover ,.history-section:hover ,.team-section:hover {
  transform: translateY(-25px); 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 1);
}

.about-page h1 {
  font-size: 3rem;
  font-style: oblique;
  margin: 50px 0 20px 0;
  
}
.about-page h2{
  font-size: 2.3rem;
  font-family: roboto;
  font-style: oblique;
}
.about-page p {
  font-family: roboto-mono;
  font-size: 1.3rem;
}
.team-section {
  display: flex;
  gap: 20px;
  max-width: 100%;
  align-self: stretch;
  border: none;
}

.team-card {
  display: grid;
  grid-template-columns: repeat(1,1fr);
  text-align: center;
  border: 2px solid grey;
  border-radius: 10px;
  padding: 20px;
}
.team-card h3 {
  font-size: 2rem;
  font-family: roboto;
  font-style: oblique;
  margin-top: 50px;
}
.team-card img {
  width: 60%;
  aspect-ratio: 1/1;
  justify-self: center;
  transition: all 0.6s;
  transform: translateY(0);
  transition: all 0.6s;
  border-radius: 10px;
  box-shadow: 10px 10px 5px 0.5 rgb(110, 109, 109);
}
.team-card img:hover {
  width: 80%;
  transform: translateY(50px);
  transition: all 0.6s;
}`, "",{"version":3,"sources":["webpack://./src/css/about.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,SAAS;EACT,eAAe;EACf,aAAa;AACf;AACA;EACE,sBAAsB;EACtB,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,wCAAwC;EACxC,2CAA2C;AAC7C;;AAEA;EACE,4BAA4B;EAC5B,uCAAuC;AACzC;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,qBAAqB;;AAEvB;AACA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,wBAAwB;EACxB,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,SAAS;EACT,eAAe;EACf,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,kBAAkB;EAClB,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,eAAe;EACf,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,UAAU;EACV,iBAAiB;EACjB,oBAAoB;EACpB,oBAAoB;EACpB,wBAAwB;EACxB,oBAAoB;EACpB,mBAAmB;EACnB,gDAAgD;AAClD;AACA;EACE,UAAU;EACV,2BAA2B;EAC3B,oBAAoB;AACtB","sourcesContent":[".about-page {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  gap: 40px;\n  flex-wrap: wrap;\n  padding: 20px;\n}\n.about-section,.mission-section,.history-section,.team-section {\n  border: 2px solid grey;\n  padding: 1rem;\n  max-width: 500px;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); \n  transition: transform 0.3s, box-shadow 0.3s; \n}\n\n.about-section:hover ,.mission-section:hover ,.history-section:hover ,.team-section:hover {\n  transform: translateY(-25px); \n  box-shadow: 0 8px 16px rgba(0, 0, 0, 1);\n}\n\n.about-page h1 {\n  font-size: 3rem;\n  font-style: oblique;\n  margin: 50px 0 20px 0;\n  \n}\n.about-page h2{\n  font-size: 2.3rem;\n  font-family: roboto;\n  font-style: oblique;\n}\n.about-page p {\n  font-family: roboto-mono;\n  font-size: 1.3rem;\n}\n.team-section {\n  display: flex;\n  gap: 20px;\n  max-width: 100%;\n  align-self: stretch;\n  border: none;\n}\n\n.team-card {\n  display: grid;\n  grid-template-columns: repeat(1,1fr);\n  text-align: center;\n  border: 2px solid grey;\n  border-radius: 10px;\n  padding: 20px;\n}\n.team-card h3 {\n  font-size: 2rem;\n  font-family: roboto;\n  font-style: oblique;\n  margin-top: 50px;\n}\n.team-card img {\n  width: 60%;\n  aspect-ratio: 1/1;\n  justify-self: center;\n  transition: all 0.6s;\n  transform: translateY(0);\n  transition: all 0.6s;\n  border-radius: 10px;\n  box-shadow: 10px 10px 5px 0.5 rgb(110, 109, 109);\n}\n.team-card img:hover {\n  width: 80%;\n  transform: translateY(50px);\n  transition: all 0.6s;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/commomStyle.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/commomStyle.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/preview-image.jpg */ "./src/images/preview-image.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center center fixed; 
  background-size: cover; 
  position: relative;
  color: #fff;
  /* background: #000; */
}

body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); 
  z-index: -1; 
}
header {
  margin-bottom: 100px;
}
header nav{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10vw;
}
header nav .btn {
  background: none;
  color: #f2f2f2;
  padding: 10px 0;
  border: none;
  max-width: 10vw;
  min-width: 80px;
  flex-grow: 1;
  transform: skewY(30deg);
  cursor: pointer;
  font-size: 1.5rem;
  font-style: italic;
  font-weight: bolder;

}
.btn:hover{
  border-bottom: 2px solid grey;
}
header, footer {
  color: #fff;
  text-align: center;
  padding: 1rem;
}

`, "",{"version":3,"sources":["webpack://./src/css/commomStyle.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;EAC9B,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,iFAA4E;EAC5E,sBAAsB;EACtB,kBAAkB;EAClB,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,WAAW;AACb;AACA;EACE,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,gBAAgB;EAChB,cAAc;EACd,eAAe;EACf,YAAY;EACZ,eAAe;EACf,eAAe;EACf,YAAY;EACZ,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;;AAErB;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,aAAa;AACf","sourcesContent":["body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  background: url('../images/preview-image.jpg') no-repeat center center fixed; \n  background-size: cover; \n  position: relative;\n  color: #fff;\n  /* background: #000; */\n}\n\nbody::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6); \n  z-index: -1; \n}\nheader {\n  margin-bottom: 100px;\n}\nheader nav{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10vw;\n}\nheader nav .btn {\n  background: none;\n  color: #f2f2f2;\n  padding: 10px 0;\n  border: none;\n  max-width: 10vw;\n  min-width: 80px;\n  flex-grow: 1;\n  transform: skewY(30deg);\n  cursor: pointer;\n  font-size: 1.5rem;\n  font-style: italic;\n  font-weight: bolder;\n\n}\n.btn:hover{\n  border-bottom: 2px solid grey;\n}\nheader, footer {\n  color: #fff;\n  text-align: center;\n  padding: 1rem;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/home.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/home.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/RobotoMono-Italic-VariableFont_wght.ttf */ "./src/fonts/RobotoMono-Italic-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/mom.ttf */ "./src/fonts/mom.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto-Black.ttf */ "./src/fonts/Roboto-Black.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: roboto-mono;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: normal;
  font-size: normal;
}
@font-face {
  font-family: mom;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  font-weight: normal;
  font-size: normal;
}
@font-face {
  font-family: roboto;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  font-weight: normal;
  font-size: normal;
}
.home-page {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-areas: 
  "welcome-section description-section"
  "cards-section  cards-section";
  gap: 1rem;
}

.welcome-section {
  grid-area: welcome-section;
  text-align: center;
  align-self: center;
  border-bottom: 2px solid grey;
  border-right: 2px solid grey;
  padding-left: 30px;
  transform: skewY(10deg);
  margin-bottom: 50px;
}
.welcome-section h1 {
  font-size: 4rem;
  font-style: oblique;
  margin: 50px 0 20px 0;
  
}
.welcome-section p {
  font-size: 2.6rem;
  word-spacing: 15px;
  margin: 25px 0 60px 0;
  font-family:mom, serif;
}
.description-section {
  grid-area: description-section;
  text-align: center;
  align-self: center;
  padding-right: 30px;
  transform: skewY(10deg);
  border-top: 2px solid grey;
  border-left: 2px solid grey;
  font-family: roboto, serif;
}
.description-section h2 {
  font-size: 3rem;
  margin-bottom: 25px;
}
.description-section h3 {
margin: 10px 0 10px 0;

}
.description-section p {
  margin: 5px 0 5px 0;
  font-family: roboto-mono,serif;
  font-size: 1.3rem;
}
.cards-section {
  grid-area: cards-section;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 1rem;
}
.cards-section .img {
  border: 1px solid #000;
  height: 200px;
  max-width: 350px;
  min-width: 150px;
}
.card{
  border: 2px solid grey;
  padding: 1rem;
  max-width: 400px;
  border-radius: 10px;
  flex: 1 1 calc(50% - 1rem);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); 
  transition: transform 0.3s, box-shadow 0.3s; 
}
.card:hover {
  transform: translateY(-20px); 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 1); /* Enhance shadow on hover */
}
.card h3{
  font-size: 2.3rem;
  font-family: roboto;
  font-style: oblique;
  color: #db9f9f;
}
.card p {
  font-family: roboto-mono;
  font-size: 1.3rem;
}
.card img {
  width: 100%;
  overflow: hidden;
  object-fit: cover;
}
`, "",{"version":3,"sources":["webpack://./src/css/home.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,4CAA4D;EAC5D,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,gBAAgB;EAChB,4CAA4B;EAC5B,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,mBAAmB;EACnB,4CAAqC;EACrC,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,oCAAoC;EACpC;;gCAE8B;EAC9B,SAAS;AACX;;AAEA;EACE,0BAA0B;EAC1B,kBAAkB;EAClB,kBAAkB;EAClB,6BAA6B;EAC7B,4BAA4B;EAC5B,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,mBAAmB;EACnB,qBAAqB;;AAEvB;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;AACxB;AACA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,uBAAuB;EACvB,0BAA0B;EAC1B,2BAA2B;EAC3B,0BAA0B;AAC5B;AACA;EACE,eAAe;EACf,mBAAmB;AACrB;AACA;AACA,qBAAqB;;AAErB;AACA;EACE,mBAAmB;EACnB,8BAA8B;EAC9B,iBAAiB;AACnB;AACA;EACE,wBAAwB;EACxB,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,SAAS;EACT,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,aAAa;EACb,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,sBAAsB;EACtB,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,0BAA0B;EAC1B,wCAAwC;EACxC,2CAA2C;AAC7C;AACA;EACE,4BAA4B;EAC5B,uCAAuC,EAAE,4BAA4B;AACvE;AACA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,cAAc;AAChB;AACA;EACE,wBAAwB;EACxB,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,iBAAiB;AACnB","sourcesContent":["@font-face {\n  font-family: roboto-mono;\n  src: url('../fonts/RobotoMono-Italic-VariableFont_wght.ttf');\n  font-weight: normal;\n  font-size: normal;\n}\n@font-face {\n  font-family: mom;\n  src: url('../fonts/mom.ttf');\n  font-weight: normal;\n  font-size: normal;\n}\n@font-face {\n  font-family: roboto;\n  src: url('../fonts/Roboto-Black.ttf');\n  font-weight: normal;\n  font-size: normal;\n}\n.home-page {\n  display: grid;\n  grid-template-columns: repeat(2,1fr);\n  grid-template-areas: \n  \"welcome-section description-section\"\n  \"cards-section  cards-section\";\n  gap: 1rem;\n}\n\n.welcome-section {\n  grid-area: welcome-section;\n  text-align: center;\n  align-self: center;\n  border-bottom: 2px solid grey;\n  border-right: 2px solid grey;\n  padding-left: 30px;\n  transform: skewY(10deg);\n  margin-bottom: 50px;\n}\n.welcome-section h1 {\n  font-size: 4rem;\n  font-style: oblique;\n  margin: 50px 0 20px 0;\n  \n}\n.welcome-section p {\n  font-size: 2.6rem;\n  word-spacing: 15px;\n  margin: 25px 0 60px 0;\n  font-family:mom, serif;\n}\n.description-section {\n  grid-area: description-section;\n  text-align: center;\n  align-self: center;\n  padding-right: 30px;\n  transform: skewY(10deg);\n  border-top: 2px solid grey;\n  border-left: 2px solid grey;\n  font-family: roboto, serif;\n}\n.description-section h2 {\n  font-size: 3rem;\n  margin-bottom: 25px;\n}\n.description-section h3 {\nmargin: 10px 0 10px 0;\n\n}\n.description-section p {\n  margin: 5px 0 5px 0;\n  font-family: roboto-mono,serif;\n  font-size: 1.3rem;\n}\n.cards-section {\n  grid-area: cards-section;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 1rem;\n  padding: 2rem 1rem;\n}\n.cards-section .img {\n  border: 1px solid #000;\n  height: 200px;\n  max-width: 350px;\n  min-width: 150px;\n}\n.card{\n  border: 2px solid grey;\n  padding: 1rem;\n  max-width: 400px;\n  border-radius: 10px;\n  flex: 1 1 calc(50% - 1rem);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); \n  transition: transform 0.3s, box-shadow 0.3s; \n}\n.card:hover {\n  transform: translateY(-20px); \n  box-shadow: 0 8px 16px rgba(0, 0, 0, 1); /* Enhance shadow on hover */\n}\n.card h3{\n  font-size: 2.3rem;\n  font-family: roboto;\n  font-style: oblique;\n  color: #db9f9f;\n}\n.card p {\n  font-family: roboto-mono;\n  font-size: 1.3rem;\n}\n.card img {\n  width: 100%;\n  overflow: hidden;\n  object-fit: cover;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/menu.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/menu.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.menu-page {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}
.appetizers,.main-courses,.desserts,.beverages{
  border: 2px solid grey;
  padding: 1rem;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); 
  transition: transform 0.3s, box-shadow 0.3s; 
}
.appetizers:hover ,.main-courses:hover ,.desserts:hover ,.beverages:hover {
  transform: translateY(-25px); 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 1); /* Enhance shadow on hover */
}

.menu-page h2{
  font-size: 2.3rem;
  font-family: roboto;
  font-style: oblique;
}
.menu-page h3{
  font-size: 2rem;
  font-family: roboto;
  font-style: oblique;
}
.menu-page p {
  font-family: roboto-mono;
  font-size: 1.3rem;
}
.menu-page span {
  font-family: roboto;
  font-size: 1.6rem;
}`, "",{"version":3,"sources":["webpack://./src/css/menu.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,SAAS;AACX;AACA;EACE,sBAAsB;EACtB,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,wCAAwC;EACxC,2CAA2C;AAC7C;AACA;EACE,4BAA4B;EAC5B,uCAAuC,EAAE,4BAA4B;AACvE;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,wBAAwB;EACxB,iBAAiB;AACnB;AACA;EACE,mBAAmB;EACnB,iBAAiB;AACnB","sourcesContent":[".menu-page {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 30px;\n}\n.appetizers,.main-courses,.desserts,.beverages{\n  border: 2px solid grey;\n  padding: 1rem;\n  max-width: 500px;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); \n  transition: transform 0.3s, box-shadow 0.3s; \n}\n.appetizers:hover ,.main-courses:hover ,.desserts:hover ,.beverages:hover {\n  transform: translateY(-25px); \n  box-shadow: 0 8px 16px rgba(0, 0, 0, 1); /* Enhance shadow on hover */\n}\n\n.menu-page h2{\n  font-size: 2.3rem;\n  font-family: roboto;\n  font-style: oblique;\n}\n.menu-page h3{\n  font-size: 2rem;\n  font-family: roboto;\n  font-style: oblique;\n}\n.menu-page p {\n  font-family: roboto-mono;\n  font-size: 1.3rem;\n}\n.menu-page span {\n  font-family: roboto;\n  font-size: 1.6rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/about.css":
/*!***************************!*\
  !*** ./src/css/about.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./about.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/about.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/commomStyle.css":
/*!*********************************!*\
  !*** ./src/css/commomStyle.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_commomStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./commomStyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/commomStyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_commomStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_commomStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_commomStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_commomStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/home.css":
/*!**************************!*\
  !*** ./src/css/home.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/menu.css":
/*!**************************!*\
  !*** ./src/css/menu.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/about.js":
/*!*************************!*\
  !*** ./src/js/about.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateAboutPage: () => (/* binding */ generateAboutPage)
/* harmony export */ });
/* harmony import */ var _css_commomStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/commomStyle.css */ "./src/css/commomStyle.css");
/* harmony import */ var _css_about_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/about.css */ "./src/css/about.css");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/js/data.js");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules */ "./src/js/modules.js");







/////////////////////////////ABOUT PAGE //////////////////////
// let teamdata = 
function createContentInAboutPage(data) {
  let sections = document.querySelectorAll('.menu-section');
  let teamIndex = 0;

  sections.forEach((section, index) => {
    if (!section.classList.contains('team-section')) {
      section.innerHTML = `<h2>${data[index].title}</h2>
      <p>${data[index].description}</p> 
      `;
    } else {
      data[index].forEach((item,i) =>{
        let div = document.createElement('div');
        div.classList.add('team-card');
        
        div.innerHTML = `
      <img src="${data[index][i].image}" alt="Chef">
      <h3>${data[index][i].title}</h3>
      <p>${data[index][i].description}</p>
    `;
      section.append(div);
      });
    }
  });
};



function generateAboutPage() {
  (0,_modules__WEBPACK_IMPORTED_MODULE_3__.createContentSections)(_data__WEBPACK_IMPORTED_MODULE_2__.aboutSections, 'content');
  createContentInAboutPage(_data__WEBPACK_IMPORTED_MODULE_2__.aboutSectionsData);
}




/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutSections: () => (/* binding */ aboutSections),
/* harmony export */   aboutSectionsData: () => (/* binding */ aboutSectionsData),
/* harmony export */   cardsData: () => (/* binding */ cardsData),
/* harmony export */   contentSections: () => (/* binding */ contentSections),
/* harmony export */   menuPageData: () => (/* binding */ menuPageData),
/* harmony export */   menuPageSetions: () => (/* binding */ menuPageSetions)
/* harmony export */ });
/* harmony import */ var _images_signature_dishes_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/signature-dishes.jpg */ "./src/images/signature-dishes.jpg");
/* harmony import */ var _images_cozy_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/cozy.jpg */ "./src/images/cozy.jpg");
/* harmony import */ var _images_service_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/service.jpg */ "./src/images/service.jpg");
/* harmony import */ var _images_ceo_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/ceo.jpg */ "./src/images/ceo.jpg");
/* harmony import */ var _images_manager_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/manager.jpg */ "./src/images/manager.jpg");





let cardsData = [
  {
    image: `${_images_signature_dishes_jpg__WEBPACK_IMPORTED_MODULE_0__}`,
    title: 'Our Signature Dishes',
    description: 'Experience a vareity of flavors with our signature dishes, meticulously crafted to perfection.',
  },
  {
    image: `${_images_cozy_jpg__WEBPACK_IMPORTED_MODULE_1__}`,
    title: 'Cozy Ambiance',
    description: 'Relax in our cozy and elegant dining area, designed to provide a comfortable and enjoyable experience.',
  },
  {
    image: `${_images_service_jpg__WEBPACK_IMPORTED_MODULE_2__ }`,
    title: 'Exceptional Service',
    description: 'Our friendly and attentive staff are here to ensure that your dining experience is nothing short of exceptional.',
  }
];

let contentSections = ['welcome-section','description-section','cards-section'];

let menuPageSetions = ['appetizers','main-courses','desserts','beverages'];

let menuPageData = [
  {
    title:'Appetizers',
    foods:[
      {
        name:'Bruschetta',
        description:'Grilled bread topped with a mixture of fresh tomatoes, garlic, basil, and olive oil.',
        price:'$8.99'
      },
      {
        name:'Stuffed Mushrooms',
        description:'Mushrooms filled with a blend of cheeses, herbs, and breadcrumbs, baked to perfection.',
        price:'$9.99'
      },
    ],
  },
  {
    title:'Main Courses',
    foods:[
      {
        name:'Grilled Salmon',
        description:'Fresh salmon fillet grilled and served with a lemon-dill sauce and seasonal vegetables.',
        price:'$18.99'
      },
      {
        name:'Ribeye Steak',
        description:'Juicy ribeye steak cooked to your liking, served with garlic mashed potatoes and steamed broccoli.',
        price:'$24.99'
      },
    ],
  },
  {
    title:'Desserts',
    foods:[
      {
        name:'Chocolate Lava Cake',
        description:'Rich chocolate cake with a molten chocolate center, served with vanilla ice cream.',
        price:'$7.99'
      },
      {
        name:'CheeseCake',
        description:'Creamy cheesecake with a graham cracker crust, topped with a strawberry glaze.',
        price:'$6.99'
      },
    ],
  },
  {
    title:'Beverages',
    foods:[
      {
        name:'Fresh Lemonade',
        description:'Refreshing lemonade made with freshly squeezed lemons and a hint of mint.',
        price:'$3.99'
      },
      {
        name:'Espresso',
        description:'Rich and smooth espresso, made from premium coffee beans.',
        price:'$2.99'
      },
    ],
  },
];

let aboutSections = ['about-section','mission-section','history-section','team-section'];
let aboutSectionsData = [
  {
    title:'About Gourmet Delighted',
    description:'Welcome to Gourmet Delighted, where culinary artistry meets exceptional hospitality. Our restaurant is dedicated to providing a dining experience that delights all your senses.'
  },
  {
    title:'Our Mission',
    description:'At Gourmet Delighted, our mission is to offer exquisite cuisine, exceptional service, and a warm, inviting atmosphere. We strive to create memorable dining experiences that bring joy to our guests.'
  },
  {
    title:'Our History',
    description:'Founded in 2024, Gourmet Delighted has quickly become a favorite dining destination in the heart of the city. Our journey began with a passion for culinary excellence and a commitment to using the finest ingredients.'
  },
  [
    {
      image:_images_ceo_jpg__WEBPACK_IMPORTED_MODULE_3__,
      title:'Karolina Kaboomp',
      description:'With over 20 years of experience, Chef Karolina Kaboomp brings creativity and expertise to our kitchen, crafting dishes that are both innovative and delicious.'
    },
   ,
    {
      
      image:_images_manager_jpg__WEBPACK_IMPORTED_MODULE_4__,
      title:'Edmond Dantès',
      description:'Our manager, Edmond Dantès, ensures that every guest enjoys a seamless and memorable dining experience with her impeccable attention to detail.'
    },
   
    
  ],
];





/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateMenuPage: () => (/* binding */ generateMenuPage)
/* harmony export */ });
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ "./src/js/modules.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/js/data.js");
/* harmony import */ var _css_commomStyle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/commomStyle.css */ "./src/css/commomStyle.css");
/* harmony import */ var _css_menu_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/menu.css */ "./src/css/menu.css");






/////////////////////////////////////////////////MENU/////////////////////////////////////

function putContentInMenuPage(data) {
  let sections = document.querySelectorAll('.menu-section');
  sections.forEach((section, index) => {
    section.innerHTML = `<h2>${data[index].title}</h2>
    <div class="menu-item">
      <h3>${data[index].foods[0].name}</h3>
      <p>${data[index].foods[0].description}</p>
      <span>${data[index].foods[0].price}</span>
    </div>
    <div class="menu-item">
      <h3>${data[index].foods[1].name}</h3>
      <p>${data[index].foods[1].description}</p>
      <span>${data[index].foods[1].price}</span>
    </div>`;
  });
}

function generateMenuPage() {
  (0,_modules__WEBPACK_IMPORTED_MODULE_0__.createContentSections)(_data__WEBPACK_IMPORTED_MODULE_1__.menuPageSetions, 'content');
  putContentInMenuPage(_data__WEBPACK_IMPORTED_MODULE_1__.menuPageData);
}



/***/ }),

/***/ "./src/js/modules.js":
/*!***************************!*\
  !*** ./src/js/modules.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCards: () => (/* binding */ createCards),
/* harmony export */   createContentSections: () => (/* binding */ createContentSections),
/* harmony export */   putsContentDescriptionSection: () => (/* binding */ putsContentDescriptionSection),
/* harmony export */   putsContentInWelcomeSection: () => (/* binding */ putsContentInWelcomeSection)
/* harmony export */ });

// this funtion creates diffrent section in content container
function createContentSections(contentsecArray, id) {
  let content = document.getElementById(id);
  contentsecArray.forEach(element => {
    let section = document.createElement('section');
    section.classList.add('menu-section');
    section.classList.add(element);
    content.appendChild(section);
  });
}

// this function puts content inside the welcome section of the content container for home page
function putsContentInWelcomeSection() {
  let welcomeSection = document.querySelector('.welcome-section');

  let title = document.createElement('h1');
  title.textContent = 'Welcome to Gourmet Delighted';

  let paragraph = document.createElement('p');
  paragraph.textContent = `Your culnary journey begins here!`;

  welcomeSection.appendChild(title);
  welcomeSection.appendChild(paragraph);
}


// this function puts content inside the description section of the content container
function putsContentDescriptionSection() {
  let descriptionSection = document.querySelector('.description-section');
  descriptionSection.innerHTML = `<h2>We Love To Serve You...</h2><h3>Bless us with a chance</h3>
      <p>At Gourmet Delighted, we offer an unforgettable dinning experience,combining exquisite cuisine, exceptional service, and a warm, inviting atmosphere. Our chefs usethe finest ingredients to create dishes that will tantalize your taste buds and leave you craving for more.
      </p>`;
}



// this function creates cards that has an image ,a title and description
function createCards(data) {
  let cardsSection = document.querySelector('.cards-section');
  data.forEach(element => {
    let cardContainer = document.createElement('div');
    cardContainer.classList.add('card');
    let img = new Image();
    img.src = element.image;

    let title = document.createElement('h3');
    title.textContent = element.title;

    let description = document.createElement('p');
    description.textContent = element.description;

    cardContainer.appendChild(img);
    cardContainer.appendChild(title);
    cardContainer.appendChild(description);
    cardsSection.appendChild(cardContainer);

  });
}



/***/ }),

/***/ "./src/js/pageLoad.js":
/*!****************************!*\
  !*** ./src/js/pageLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialPageLoad: () => (/* binding */ initialPageLoad)
/* harmony export */ });
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ "./src/js/modules.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/js/data.js");
/* harmony import */ var _css_commomStyle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/commomStyle.css */ "./src/css/commomStyle.css");
/* harmony import */ var _css_home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/home.css */ "./src/css/home.css");





function initialPageLoad() {
  (0,_modules__WEBPACK_IMPORTED_MODULE_0__.createContentSections)(_data__WEBPACK_IMPORTED_MODULE_1__.contentSections,'content');
  (0,_modules__WEBPACK_IMPORTED_MODULE_0__.putsContentInWelcomeSection)();
  (0,_modules__WEBPACK_IMPORTED_MODULE_0__.putsContentDescriptionSection)();
  (0,_modules__WEBPACK_IMPORTED_MODULE_0__.createCards)(_data__WEBPACK_IMPORTED_MODULE_1__.cardsData);
}

/***/ }),

/***/ "./src/fonts/Roboto-Black.ttf":
/*!************************************!*\
  !*** ./src/fonts/Roboto-Black.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf56c1b149d0a5e8d7c6.ttf";

/***/ }),

/***/ "./src/fonts/RobotoMono-Italic-VariableFont_wght.ttf":
/*!***********************************************************!*\
  !*** ./src/fonts/RobotoMono-Italic-VariableFont_wght.ttf ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a53103a7b0e22765d7ff.ttf";

/***/ }),

/***/ "./src/fonts/mom.ttf":
/*!***************************!*\
  !*** ./src/fonts/mom.ttf ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5df507d250664357937f.ttf";

/***/ }),

/***/ "./src/images/ceo.jpg":
/*!****************************!*\
  !*** ./src/images/ceo.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f480f05961398466b2a.jpg";

/***/ }),

/***/ "./src/images/cozy.jpg":
/*!*****************************!*\
  !*** ./src/images/cozy.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "454085c71b8047e59673.jpg";

/***/ }),

/***/ "./src/images/manager.jpg":
/*!********************************!*\
  !*** ./src/images/manager.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62df5778d9b2dcdfa95c.jpg";

/***/ }),

/***/ "./src/images/preview-image.jpg":
/*!**************************************!*\
  !*** ./src/images/preview-image.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b29ee862506208aab9e8.jpg";

/***/ }),

/***/ "./src/images/service.jpg":
/*!********************************!*\
  !*** ./src/images/service.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea7bfe37461cca876316.jpg";

/***/ }),

/***/ "./src/images/signature-dishes.jpg":
/*!*****************************************!*\
  !*** ./src/images/signature-dishes.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe03fc181fa109f43fb1.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ "./src/js/pageLoad.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/js/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/js/about.js");




// its initially loads the page stands on Home page
(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad)();
let content = document.querySelector('#content');
content.classList.add('home-page');

//selects the Home btn
let homeBtn = document.querySelector('.home-btn');
homeBtn.addEventListener('click', () => {
  let content = document.querySelector('#content');
  content.innerHTML = '';
  (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad)();
  content.classList.remove('menu-page');
  content.classList.remove('about-page');
  content.classList.add('home-page');
});

// selects the Menu btn
let menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
  let content = document.querySelector('#content');
  content.innerHTML = '';
  (0,_menu__WEBPACK_IMPORTED_MODULE_1__.generateMenuPage)();
  content.classList.add('menu-page');
  content.classList.remove('home-page');
  content.classList.remove('about-page');
});


// selects the about page 
let aboutBtn = document.querySelector('.about-btn');
aboutBtn.addEventListener('click', () => {
  let content = document.querySelector('#content');
  content.innerHTML = '';
  (0,_about__WEBPACK_IMPORTED_MODULE_2__.generateAboutPage)();
  content.classList.add('about-page');
  content.classList.remove('menu-page');
  content.classList.remove('home-page');
  
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sbUZBQW1GLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFN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QUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7O0FDQTZDO0FBQ0g7QUFDRTs7QUFFNUM7QUFDQSwwREFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMERBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBZ0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseURBQWlCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9hYm91dC5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9jb21tb21TdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9ob21lLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL21lbnUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL2Fib3V0LmNzcz8zODdmIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvY29tbW9tU3R5bGUuY3NzPzZmNTkiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9ob21lLmNzcz8wODQ1Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvbWVudS5jc3M/ZGRlYyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvZGF0YS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvbW9kdWxlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5hYm91dC1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGdhcDogNDBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmFib3V0LXNlY3Rpb24sLm1pc3Npb24tc2VjdGlvbiwuaGlzdG9yeS1zZWN0aW9uLC50ZWFtLXNlY3Rpb24ge1xuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjUpOyBcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJveC1zaGFkb3cgMC4zczsgXG59XG5cbi5hYm91dC1zZWN0aW9uOmhvdmVyICwubWlzc2lvbi1zZWN0aW9uOmhvdmVyICwuaGlzdG9yeS1zZWN0aW9uOmhvdmVyICwudGVhbS1zZWN0aW9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTsgXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAxKTtcbn1cblxuLmFib3V0LXBhZ2UgaDEge1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gIG1hcmdpbjogNTBweCAwIDIwcHggMDtcbiAgXG59XG4uYWJvdXQtcGFnZSBoMntcbiAgZm9udC1zaXplOiAyLjNyZW07XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG59XG4uYWJvdXQtcGFnZSBwIHtcbiAgZm9udC1mYW1pbHk6IHJvYm90by1tb25vO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cbi50ZWFtLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4udGVhbS1jYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwxZnIpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4udGVhbS1jYXJkIGgzIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLnRlYW0tY2FyZCBpbWcge1xuICB3aWR0aDogNjAlO1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjZzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjZzO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IDAuNSByZ2IoMTEwLCAxMDksIDEwOSk7XG59XG4udGVhbS1jYXJkIGltZzpob3ZlciB7XG4gIHdpZHRoOiA4MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Fib3V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QywyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixxQkFBcUI7O0FBRXZCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixnREFBZ0Q7QUFDbEQ7QUFDQTtFQUNFLFVBQVU7RUFDViwyQkFBMkI7RUFDM0Isb0JBQW9CO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5hYm91dC1wYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZ2FwOiA0MHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuLmFib3V0LXNlY3Rpb24sLm1pc3Npb24tc2VjdGlvbiwuaGlzdG9yeS1zZWN0aW9uLC50ZWFtLXNlY3Rpb24ge1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7IFxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJveC1zaGFkb3cgMC4zczsgXFxufVxcblxcbi5hYm91dC1zZWN0aW9uOmhvdmVyICwubWlzc2lvbi1zZWN0aW9uOmhvdmVyICwuaGlzdG9yeS1zZWN0aW9uOmhvdmVyICwudGVhbS1zZWN0aW9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjVweCk7IFxcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDEpO1xcbn1cXG5cXG4uYWJvdXQtcGFnZSBoMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbiAgbWFyZ2luOiA1MHB4IDAgMjBweCAwO1xcbiAgXFxufVxcbi5hYm91dC1wYWdlIGgye1xcbiAgZm9udC1zaXplOiAyLjNyZW07XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG59XFxuLmFib3V0LXBhZ2UgcCB7XFxuICBmb250LWZhbWlseTogcm9ib3RvLW1vbm87XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuLnRlYW0tc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRlYW0tY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwxZnIpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4udGVhbS1jYXJkIGgzIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuLnRlYW0tY2FyZCBpbWcge1xcbiAgd2lkdGg6IDYwJTtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggMC41IHJnYigxMTAsIDEwOSwgMTA5KTtcXG59XFxuLnRlYW0tY2FyZCBpbWc6aG92ZXIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9wcmV2aWV3LWltYWdlLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2ZmZjtcbiAgLyogYmFja2dyb3VuZDogIzAwMDsgKi9cbn1cblxuYm9keTo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7IFxuICB6LWluZGV4OiAtMTsgXG59XG5oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cbmhlYWRlciBuYXZ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwdnc7XG59XG5oZWFkZXIgbmF2IC5idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogI2YyZjJmMjtcbiAgcGFkZGluZzogMTBweCAwO1xuICBib3JkZXI6IG5vbmU7XG4gIG1heC13aWR0aDogMTB2dztcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBmbGV4LWdyb3c6IDE7XG4gIHRyYW5zZm9ybTogc2tld1koMzBkZWcpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG5cbn1cbi5idG46aG92ZXJ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xufVxuaGVhZGVyLCBmb290ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvY29tbW9tU3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGlGQUE0RTtFQUM1RSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsV0FBVztBQUNiO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7O0FBRXJCO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9wcmV2aWV3LWltYWdlLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6ICNmZmY7XFxuICAvKiBiYWNrZ3JvdW5kOiAjMDAwOyAqL1xcbn1cXG5cXG5ib2R5OjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7IFxcbiAgei1pbmRleDogLTE7IFxcbn1cXG5oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxufVxcbmhlYWRlciBuYXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHZ3O1xcbn1cXG5oZWFkZXIgbmF2IC5idG4ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiAjZjJmMmYyO1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWF4LXdpZHRoOiAxMHZ3O1xcbiAgbWluLXdpZHRoOiA4MHB4O1xcbiAgZmxleC1ncm93OiAxO1xcbiAgdHJhbnNmb3JtOiBza2V3WSgzMGRlZyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuXFxufVxcbi5idG46aG92ZXJ7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcXG59XFxuaGVhZGVyLCBmb290ZXIge1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1JvYm90b01vbm8tSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL21vbS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Sb2JvdG8tQmxhY2sudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogcm9ib3RvLW1vbm87XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogbW9tO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogbm9ybWFsO1xufVxuLmhvbWUtcGFnZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwid2VsY29tZS1zZWN0aW9uIGRlc2NyaXB0aW9uLXNlY3Rpb25cIlxuICBcImNhcmRzLXNlY3Rpb24gIGNhcmRzLXNlY3Rpb25cIjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ud2VsY29tZS1zZWN0aW9uIHtcbiAgZ3JpZC1hcmVhOiB3ZWxjb21lLXNlY3Rpb247XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgZ3JleTtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICB0cmFuc2Zvcm06IHNrZXdZKDEwZGVnKTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi53ZWxjb21lLXNlY3Rpb24gaDEge1xuICBmb250LXNpemU6IDRyZW07XG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gIG1hcmdpbjogNTBweCAwIDIwcHggMDtcbiAgXG59XG4ud2VsY29tZS1zZWN0aW9uIHAge1xuICBmb250LXNpemU6IDIuNnJlbTtcbiAgd29yZC1zcGFjaW5nOiAxNXB4O1xuICBtYXJnaW46IDI1cHggMCA2MHB4IDA7XG4gIGZvbnQtZmFtaWx5Om1vbSwgc2VyaWY7XG59XG4uZGVzY3JpcHRpb24tc2VjdGlvbiB7XG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb24tc2VjdGlvbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIHRyYW5zZm9ybTogc2tld1koMTBkZWcpO1xuICBib3JkZXItdG9wOiAycHggc29saWQgZ3JleTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBncmV5O1xuICBmb250LWZhbWlseTogcm9ib3RvLCBzZXJpZjtcbn1cbi5kZXNjcmlwdGlvbi1zZWN0aW9uIGgyIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmRlc2NyaXB0aW9uLXNlY3Rpb24gaDMge1xubWFyZ2luOiAxMHB4IDAgMTBweCAwO1xuXG59XG4uZGVzY3JpcHRpb24tc2VjdGlvbiBwIHtcbiAgbWFyZ2luOiA1cHggMCA1cHggMDtcbiAgZm9udC1mYW1pbHk6IHJvYm90by1tb25vLHNlcmlmO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cbi5jYXJkcy1zZWN0aW9uIHtcbiAgZ3JpZC1hcmVhOiBjYXJkcy1zZWN0aW9uO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcbn1cbi5jYXJkcy1zZWN0aW9uIC5pbWcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBtaW4td2lkdGg6IDE1MHB4O1xufVxuLmNhcmR7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZsZXg6IDEgMSBjYWxjKDUwJSAtIDFyZW0pO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjUpOyBcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJveC1zaGFkb3cgMC4zczsgXG59XG4uY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7IFxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMSk7IC8qIEVuaGFuY2Ugc2hhZG93IG9uIGhvdmVyICovXG59XG4uY2FyZCBoM3tcbiAgZm9udC1zaXplOiAyLjNyZW07XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gIGNvbG9yOiAjZGI5ZjlmO1xufVxuLmNhcmQgcCB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG8tbW9ubztcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG4uY2FyZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaG9tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQTREO0VBQzVELG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQiw0Q0FBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDOztnQ0FFOEI7RUFDOUIsU0FBUztBQUNYOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixxQkFBcUI7O0FBRXZCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLHdDQUF3QztFQUN4QywyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLDRCQUE0QjtFQUM1Qix1Q0FBdUMsRUFBRSw0QkFBNEI7QUFDdkU7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90by1tb25vO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL1JvYm90b01vbm8tSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb207XFxuICBzcmM6IHVybCgnLi4vZm9udHMvbW9tLnR0ZicpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICBzcmM6IHVybCgnLi4vZm9udHMvUm9ib3RvLUJsYWNrLnR0ZicpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogbm9ybWFsO1xcbn1cXG4uaG9tZS1wYWdlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJ3ZWxjb21lLXNlY3Rpb24gZGVzY3JpcHRpb24tc2VjdGlvblxcXCJcXG4gIFxcXCJjYXJkcy1zZWN0aW9uICBjYXJkcy1zZWN0aW9uXFxcIjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLndlbGNvbWUtc2VjdGlvbiB7XFxuICBncmlkLWFyZWE6IHdlbGNvbWUtc2VjdGlvbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgZ3JleTtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIHRyYW5zZm9ybTogc2tld1koMTBkZWcpO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuLndlbGNvbWUtc2VjdGlvbiBoMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbiAgbWFyZ2luOiA1MHB4IDAgMjBweCAwO1xcbiAgXFxufVxcbi53ZWxjb21lLXNlY3Rpb24gcCB7XFxuICBmb250LXNpemU6IDIuNnJlbTtcXG4gIHdvcmQtc3BhY2luZzogMTVweDtcXG4gIG1hcmdpbjogMjVweCAwIDYwcHggMDtcXG4gIGZvbnQtZmFtaWx5Om1vbSwgc2VyaWY7XFxufVxcbi5kZXNjcmlwdGlvbi1zZWN0aW9uIHtcXG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb24tc2VjdGlvbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICB0cmFuc2Zvcm06IHNrZXdZKDEwZGVnKTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBncmV5O1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bywgc2VyaWY7XFxufVxcbi5kZXNjcmlwdGlvbi1zZWN0aW9uIGgyIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcbi5kZXNjcmlwdGlvbi1zZWN0aW9uIGgzIHtcXG5tYXJnaW46IDEwcHggMCAxMHB4IDA7XFxuXFxufVxcbi5kZXNjcmlwdGlvbi1zZWN0aW9uIHAge1xcbiAgbWFyZ2luOiA1cHggMCA1cHggMDtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG8tbW9ubyxzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG4uY2FyZHMtc2VjdGlvbiB7XFxuICBncmlkLWFyZWE6IGNhcmRzLXNlY3Rpb247XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAycmVtIDFyZW07XFxufVxcbi5jYXJkcy1zZWN0aW9uIC5pbWcge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgbWluLXdpZHRoOiAxNTBweDtcXG59XFxuLmNhcmR7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZmxleDogMSAxIGNhbGMoNTAlIC0gMXJlbSk7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjUpOyBcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBib3gtc2hhZG93IDAuM3M7IFxcbn1cXG4uY2FyZDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpOyBcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAxKTsgLyogRW5oYW5jZSBzaGFkb3cgb24gaG92ZXIgKi9cXG59XFxuLmNhcmQgaDN7XFxuICBmb250LXNpemU6IDIuM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbiAgY29sb3I6ICNkYjlmOWY7XFxufVxcbi5jYXJkIHAge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90by1tb25vO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcbi5jYXJkIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubWVudS1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAzMHB4O1xufVxuLmFwcGV0aXplcnMsLm1haW4tY291cnNlcywuZGVzc2VydHMsLmJldmVyYWdlc3tcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTsgXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBib3gtc2hhZG93IDAuM3M7IFxufVxuLmFwcGV0aXplcnM6aG92ZXIgLC5tYWluLWNvdXJzZXM6aG92ZXIgLC5kZXNzZXJ0czpob3ZlciAsLmJldmVyYWdlczpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjVweCk7IFxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMSk7IC8qIEVuaGFuY2Ugc2hhZG93IG9uIGhvdmVyICovXG59XG5cbi5tZW51LXBhZ2UgaDJ7XG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xufVxuLm1lbnUtcGFnZSBoM3tcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xufVxuLm1lbnUtcGFnZSBwIHtcbiAgZm9udC1mYW1pbHk6IHJvYm90by1tb25vO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cbi5tZW51LXBhZ2Ugc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tZW51LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFNBQVM7QUFDWDtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QywyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLDRCQUE0QjtFQUM1Qix1Q0FBdUMsRUFBRSw0QkFBNEI7QUFDdkU7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1lbnUtcGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDMwcHg7XFxufVxcbi5hcHBldGl6ZXJzLC5tYWluLWNvdXJzZXMsLmRlc3NlcnRzLC5iZXZlcmFnZXN7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTsgXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgYm94LXNoYWRvdyAwLjNzOyBcXG59XFxuLmFwcGV0aXplcnM6aG92ZXIgLC5tYWluLWNvdXJzZXM6aG92ZXIgLC5kZXNzZXJ0czpob3ZlciAsLmJldmVyYWdlczpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpOyBcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAxKTsgLyogRW5oYW5jZSBzaGFkb3cgb24gaG92ZXIgKi9cXG59XFxuXFxuLm1lbnUtcGFnZSBoMntcXG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxufVxcbi5tZW51LXBhZ2UgaDN7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG59XFxuLm1lbnUtcGFnZSBwIHtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG8tbW9ubztcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG4ubWVudS1wYWdlIHNwYW4ge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWJvdXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWJvdXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbW1vbVN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbW1vbVN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi4vY3NzL2NvbW1vbVN0eWxlLmNzcyc7XG5pbXBvcnQgJy4uL2Nzcy9hYm91dC5jc3MnO1xuXG5pbXBvcnQgeyBhYm91dFNlY3Rpb25zLCBhYm91dFNlY3Rpb25zRGF0YSB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgeyBjcmVhdGVDb250ZW50U2VjdGlvbnMgfSBmcm9tICcuL21vZHVsZXMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vQUJPVVQgUEFHRSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBsZXQgdGVhbWRhdGEgPSBcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnRJbkFib3V0UGFnZShkYXRhKSB7XG4gIGxldCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LXNlY3Rpb24nKTtcbiAgbGV0IHRlYW1JbmRleCA9IDA7XG5cbiAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICBpZiAoIXNlY3Rpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCd0ZWFtLXNlY3Rpb24nKSkge1xuICAgICAgc2VjdGlvbi5pbm5lckhUTUwgPSBgPGgyPiR7ZGF0YVtpbmRleF0udGl0bGV9PC9oMj5cbiAgICAgIDxwPiR7ZGF0YVtpbmRleF0uZGVzY3JpcHRpb259PC9wPiBcbiAgICAgIGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGFbaW5kZXhdLmZvckVhY2goKGl0ZW0saSkgPT57XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RlYW0tY2FyZCcpO1xuICAgICAgICBcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgIDxpbWcgc3JjPVwiJHtkYXRhW2luZGV4XVtpXS5pbWFnZX1cIiBhbHQ9XCJDaGVmXCI+XG4gICAgICA8aDM+JHtkYXRhW2luZGV4XVtpXS50aXRsZX08L2gzPlxuICAgICAgPHA+JHtkYXRhW2luZGV4XVtpXS5kZXNjcmlwdGlvbn08L3A+XG4gICAgYDtcbiAgICAgIHNlY3Rpb24uYXBwZW5kKGRpdik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUFib3V0UGFnZSgpIHtcbiAgY3JlYXRlQ29udGVudFNlY3Rpb25zKGFib3V0U2VjdGlvbnMsICdjb250ZW50Jyk7XG4gIGNyZWF0ZUNvbnRlbnRJbkFib3V0UGFnZShhYm91dFNlY3Rpb25zRGF0YSk7XG59XG5cblxuIiwiXG5pbXBvcnQgc2lnbmF0dXJlRGlzaGVzIGZyb20gJy4uL2ltYWdlcy9zaWduYXR1cmUtZGlzaGVzLmpwZyc7XG5pbXBvcnQgc2NvenlBcmVhIGZyb20gJy4uL2ltYWdlcy9jb3p5LmpwZyc7XG5pbXBvcnQgc2VydmljZSBmcm9tICcuLi9pbWFnZXMvc2VydmljZS5qcGcnO1xuXG5leHBvcnQgbGV0IGNhcmRzRGF0YSA9IFtcbiAge1xuICAgIGltYWdlOiBgJHtzaWduYXR1cmVEaXNoZXN9YCxcbiAgICB0aXRsZTogJ091ciBTaWduYXR1cmUgRGlzaGVzJyxcbiAgICBkZXNjcmlwdGlvbjogJ0V4cGVyaWVuY2UgYSB2YXJlaXR5IG9mIGZsYXZvcnMgd2l0aCBvdXIgc2lnbmF0dXJlIGRpc2hlcywgbWV0aWN1bG91c2x5IGNyYWZ0ZWQgdG8gcGVyZmVjdGlvbi4nLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IGAke3Njb3p5QXJlYX1gLFxuICAgIHRpdGxlOiAnQ296eSBBbWJpYW5jZScsXG4gICAgZGVzY3JpcHRpb246ICdSZWxheCBpbiBvdXIgY296eSBhbmQgZWxlZ2FudCBkaW5pbmcgYXJlYSwgZGVzaWduZWQgdG8gcHJvdmlkZSBhIGNvbWZvcnRhYmxlIGFuZCBlbmpveWFibGUgZXhwZXJpZW5jZS4nLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IGAke3NlcnZpY2UgfWAsXG4gICAgdGl0bGU6ICdFeGNlcHRpb25hbCBTZXJ2aWNlJyxcbiAgICBkZXNjcmlwdGlvbjogJ091ciBmcmllbmRseSBhbmQgYXR0ZW50aXZlIHN0YWZmIGFyZSBoZXJlIHRvIGVuc3VyZSB0aGF0IHlvdXIgZGluaW5nIGV4cGVyaWVuY2UgaXMgbm90aGluZyBzaG9ydCBvZiBleGNlcHRpb25hbC4nLFxuICB9XG5dO1xuXG5leHBvcnQgbGV0IGNvbnRlbnRTZWN0aW9ucyA9IFsnd2VsY29tZS1zZWN0aW9uJywnZGVzY3JpcHRpb24tc2VjdGlvbicsJ2NhcmRzLXNlY3Rpb24nXTtcblxuZXhwb3J0IGxldCBtZW51UGFnZVNldGlvbnMgPSBbJ2FwcGV0aXplcnMnLCdtYWluLWNvdXJzZXMnLCdkZXNzZXJ0cycsJ2JldmVyYWdlcyddO1xuXG5leHBvcnQgbGV0IG1lbnVQYWdlRGF0YSA9IFtcbiAge1xuICAgIHRpdGxlOidBcHBldGl6ZXJzJyxcbiAgICBmb29kczpbXG4gICAgICB7XG4gICAgICAgIG5hbWU6J0JydXNjaGV0dGEnLFxuICAgICAgICBkZXNjcmlwdGlvbjonR3JpbGxlZCBicmVhZCB0b3BwZWQgd2l0aCBhIG1peHR1cmUgb2YgZnJlc2ggdG9tYXRvZXMsIGdhcmxpYywgYmFzaWwsIGFuZCBvbGl2ZSBvaWwuJyxcbiAgICAgICAgcHJpY2U6JyQ4Ljk5J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTonU3R1ZmZlZCBNdXNocm9vbXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjonTXVzaHJvb21zIGZpbGxlZCB3aXRoIGEgYmxlbmQgb2YgY2hlZXNlcywgaGVyYnMsIGFuZCBicmVhZGNydW1icywgYmFrZWQgdG8gcGVyZmVjdGlvbi4nLFxuICAgICAgICBwcmljZTonJDkuOTknXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTonTWFpbiBDb3Vyc2VzJyxcbiAgICBmb29kczpbXG4gICAgICB7XG4gICAgICAgIG5hbWU6J0dyaWxsZWQgU2FsbW9uJyxcbiAgICAgICAgZGVzY3JpcHRpb246J0ZyZXNoIHNhbG1vbiBmaWxsZXQgZ3JpbGxlZCBhbmQgc2VydmVkIHdpdGggYSBsZW1vbi1kaWxsIHNhdWNlIGFuZCBzZWFzb25hbCB2ZWdldGFibGVzLicsXG4gICAgICAgIHByaWNlOickMTguOTknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOidSaWJleWUgU3RlYWsnLFxuICAgICAgICBkZXNjcmlwdGlvbjonSnVpY3kgcmliZXllIHN0ZWFrIGNvb2tlZCB0byB5b3VyIGxpa2luZywgc2VydmVkIHdpdGggZ2FybGljIG1hc2hlZCBwb3RhdG9lcyBhbmQgc3RlYW1lZCBicm9jY29saS4nLFxuICAgICAgICBwcmljZTonJDI0Ljk5J1xuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6J0Rlc3NlcnRzJyxcbiAgICBmb29kczpbXG4gICAgICB7XG4gICAgICAgIG5hbWU6J0Nob2NvbGF0ZSBMYXZhIENha2UnLFxuICAgICAgICBkZXNjcmlwdGlvbjonUmljaCBjaG9jb2xhdGUgY2FrZSB3aXRoIGEgbW9sdGVuIGNob2NvbGF0ZSBjZW50ZXIsIHNlcnZlZCB3aXRoIHZhbmlsbGEgaWNlIGNyZWFtLicsXG4gICAgICAgIHByaWNlOickNy45OSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6J0NoZWVzZUNha2UnLFxuICAgICAgICBkZXNjcmlwdGlvbjonQ3JlYW15IGNoZWVzZWNha2Ugd2l0aCBhIGdyYWhhbSBjcmFja2VyIGNydXN0LCB0b3BwZWQgd2l0aCBhIHN0cmF3YmVycnkgZ2xhemUuJyxcbiAgICAgICAgcHJpY2U6JyQ2Ljk5J1xuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6J0JldmVyYWdlcycsXG4gICAgZm9vZHM6W1xuICAgICAge1xuICAgICAgICBuYW1lOidGcmVzaCBMZW1vbmFkZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOidSZWZyZXNoaW5nIGxlbW9uYWRlIG1hZGUgd2l0aCBmcmVzaGx5IHNxdWVlemVkIGxlbW9ucyBhbmQgYSBoaW50IG9mIG1pbnQuJyxcbiAgICAgICAgcHJpY2U6JyQzLjk5J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTonRXNwcmVzc28nLFxuICAgICAgICBkZXNjcmlwdGlvbjonUmljaCBhbmQgc21vb3RoIGVzcHJlc3NvLCBtYWRlIGZyb20gcHJlbWl1bSBjb2ZmZWUgYmVhbnMuJyxcbiAgICAgICAgcHJpY2U6JyQyLjk5J1xuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXTtcblxuZXhwb3J0IGxldCBhYm91dFNlY3Rpb25zID0gWydhYm91dC1zZWN0aW9uJywnbWlzc2lvbi1zZWN0aW9uJywnaGlzdG9yeS1zZWN0aW9uJywndGVhbS1zZWN0aW9uJ107XG5leHBvcnQgbGV0IGFib3V0U2VjdGlvbnNEYXRhID0gW1xuICB7XG4gICAgdGl0bGU6J0Fib3V0IEdvdXJtZXQgRGVsaWdodGVkJyxcbiAgICBkZXNjcmlwdGlvbjonV2VsY29tZSB0byBHb3VybWV0IERlbGlnaHRlZCwgd2hlcmUgY3VsaW5hcnkgYXJ0aXN0cnkgbWVldHMgZXhjZXB0aW9uYWwgaG9zcGl0YWxpdHkuIE91ciByZXN0YXVyYW50IGlzIGRlZGljYXRlZCB0byBwcm92aWRpbmcgYSBkaW5pbmcgZXhwZXJpZW5jZSB0aGF0IGRlbGlnaHRzIGFsbCB5b3VyIHNlbnNlcy4nXG4gIH0sXG4gIHtcbiAgICB0aXRsZTonT3VyIE1pc3Npb24nLFxuICAgIGRlc2NyaXB0aW9uOidBdCBHb3VybWV0IERlbGlnaHRlZCwgb3VyIG1pc3Npb24gaXMgdG8gb2ZmZXIgZXhxdWlzaXRlIGN1aXNpbmUsIGV4Y2VwdGlvbmFsIHNlcnZpY2UsIGFuZCBhIHdhcm0sIGludml0aW5nIGF0bW9zcGhlcmUuIFdlIHN0cml2ZSB0byBjcmVhdGUgbWVtb3JhYmxlIGRpbmluZyBleHBlcmllbmNlcyB0aGF0IGJyaW5nIGpveSB0byBvdXIgZ3Vlc3RzLidcbiAgfSxcbiAge1xuICAgIHRpdGxlOidPdXIgSGlzdG9yeScsXG4gICAgZGVzY3JpcHRpb246J0ZvdW5kZWQgaW4gMjAyNCwgR291cm1ldCBEZWxpZ2h0ZWQgaGFzIHF1aWNrbHkgYmVjb21lIGEgZmF2b3JpdGUgZGluaW5nIGRlc3RpbmF0aW9uIGluIHRoZSBoZWFydCBvZiB0aGUgY2l0eS4gT3VyIGpvdXJuZXkgYmVnYW4gd2l0aCBhIHBhc3Npb24gZm9yIGN1bGluYXJ5IGV4Y2VsbGVuY2UgYW5kIGEgY29tbWl0bWVudCB0byB1c2luZyB0aGUgZmluZXN0IGluZ3JlZGllbnRzLidcbiAgfSxcbiAgW1xuICAgIHtcbiAgICAgIGltYWdlOmNlbyxcbiAgICAgIHRpdGxlOidLYXJvbGluYSBLYWJvb21wJyxcbiAgICAgIGRlc2NyaXB0aW9uOidXaXRoIG92ZXIgMjAgeWVhcnMgb2YgZXhwZXJpZW5jZSwgQ2hlZiBLYXJvbGluYSBLYWJvb21wIGJyaW5ncyBjcmVhdGl2aXR5IGFuZCBleHBlcnRpc2UgdG8gb3VyIGtpdGNoZW4sIGNyYWZ0aW5nIGRpc2hlcyB0aGF0IGFyZSBib3RoIGlubm92YXRpdmUgYW5kIGRlbGljaW91cy4nXG4gICAgfSxcbiAgICxcbiAgICB7XG4gICAgICBcbiAgICAgIGltYWdlOm1hbmFnZXIsXG4gICAgICB0aXRsZTonRWRtb25kIERhbnTDqHMnLFxuICAgICAgZGVzY3JpcHRpb246J091ciBtYW5hZ2VyLCBFZG1vbmQgRGFudMOocywgZW5zdXJlcyB0aGF0IGV2ZXJ5IGd1ZXN0IGVuam95cyBhIHNlYW1sZXNzIGFuZCBtZW1vcmFibGUgZGluaW5nIGV4cGVyaWVuY2Ugd2l0aCBoZXIgaW1wZWNjYWJsZSBhdHRlbnRpb24gdG8gZGV0YWlsLidcbiAgICB9LFxuICAgXG4gICAgXG4gIF0sXG5dO1xuXG5pbXBvcnQgY2VvIGZyb20gJy4uL2ltYWdlcy9jZW8uanBnJztcbmltcG9ydCBtYW5hZ2VyIGZyb20gJy4uL2ltYWdlcy9tYW5hZ2VyLmpwZyc7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZW50U2VjdGlvbnMgfSBmcm9tIFwiLi9tb2R1bGVzXCI7XG5pbXBvcnQgeyBtZW51UGFnZVNldGlvbnMsIG1lbnVQYWdlRGF0YSB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgJy4uL2Nzcy9jb21tb21TdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9jc3MvbWVudS5jc3MnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9NRU5VLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5mdW5jdGlvbiBwdXRDb250ZW50SW5NZW51UGFnZShkYXRhKSB7XG4gIGxldCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LXNlY3Rpb24nKTtcbiAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICBzZWN0aW9uLmlubmVySFRNTCA9IGA8aDI+JHtkYXRhW2luZGV4XS50aXRsZX08L2gyPlxuICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAgIDxoMz4ke2RhdGFbaW5kZXhdLmZvb2RzWzBdLm5hbWV9PC9oMz5cbiAgICAgIDxwPiR7ZGF0YVtpbmRleF0uZm9vZHNbMF0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgPHNwYW4+JHtkYXRhW2luZGV4XS5mb29kc1swXS5wcmljZX08L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxuICAgICAgPGgzPiR7ZGF0YVtpbmRleF0uZm9vZHNbMV0ubmFtZX08L2gzPlxuICAgICAgPHA+JHtkYXRhW2luZGV4XS5mb29kc1sxXS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8c3Bhbj4ke2RhdGFbaW5kZXhdLmZvb2RzWzFdLnByaWNlfTwvc3Bhbj5cbiAgICA8L2Rpdj5gO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTWVudVBhZ2UoKSB7XG4gIGNyZWF0ZUNvbnRlbnRTZWN0aW9ucyhtZW51UGFnZVNldGlvbnMsICdjb250ZW50Jyk7XG4gIHB1dENvbnRlbnRJbk1lbnVQYWdlKG1lbnVQYWdlRGF0YSk7XG59XG5cbiIsIlxuLy8gdGhpcyBmdW50aW9uIGNyZWF0ZXMgZGlmZnJlbnQgc2VjdGlvbiBpbiBjb250ZW50IGNvbnRhaW5lclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnRTZWN0aW9ucyhjb250ZW50c2VjQXJyYXksIGlkKSB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICBjb250ZW50c2VjQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtc2VjdGlvbicpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChlbGVtZW50KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICB9KTtcbn1cblxuLy8gdGhpcyBmdW5jdGlvbiBwdXRzIGNvbnRlbnQgaW5zaWRlIHRoZSB3ZWxjb21lIHNlY3Rpb24gb2YgdGhlIGNvbnRlbnQgY29udGFpbmVyIGZvciBob21lIHBhZ2VcbmV4cG9ydCBmdW5jdGlvbiBwdXRzQ29udGVudEluV2VsY29tZVNlY3Rpb24oKSB7XG4gIGxldCB3ZWxjb21lU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWxjb21lLXNlY3Rpb24nKTtcblxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvIEdvdXJtZXQgRGVsaWdodGVkJztcblxuICBsZXQgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBgWW91ciBjdWxuYXJ5IGpvdXJuZXkgYmVnaW5zIGhlcmUhYDtcblxuICB3ZWxjb21lU2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHdlbGNvbWVTZWN0aW9uLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG59XG5cblxuLy8gdGhpcyBmdW5jdGlvbiBwdXRzIGNvbnRlbnQgaW5zaWRlIHRoZSBkZXNjcmlwdGlvbiBzZWN0aW9uIG9mIHRoZSBjb250ZW50IGNvbnRhaW5lclxuZXhwb3J0IGZ1bmN0aW9uIHB1dHNDb250ZW50RGVzY3JpcHRpb25TZWN0aW9uKCkge1xuICBsZXQgZGVzY3JpcHRpb25TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLXNlY3Rpb24nKTtcbiAgZGVzY3JpcHRpb25TZWN0aW9uLmlubmVySFRNTCA9IGA8aDI+V2UgTG92ZSBUbyBTZXJ2ZSBZb3UuLi48L2gyPjxoMz5CbGVzcyB1cyB3aXRoIGEgY2hhbmNlPC9oMz5cbiAgICAgIDxwPkF0IEdvdXJtZXQgRGVsaWdodGVkLCB3ZSBvZmZlciBhbiB1bmZvcmdldHRhYmxlIGRpbm5pbmcgZXhwZXJpZW5jZSxjb21iaW5pbmcgZXhxdWlzaXRlIGN1aXNpbmUsIGV4Y2VwdGlvbmFsIHNlcnZpY2UsIGFuZCBhIHdhcm0sIGludml0aW5nIGF0bW9zcGhlcmUuIE91ciBjaGVmcyB1c2V0aGUgZmluZXN0IGluZ3JlZGllbnRzIHRvIGNyZWF0ZSBkaXNoZXMgdGhhdCB3aWxsIHRhbnRhbGl6ZSB5b3VyIHRhc3RlIGJ1ZHMgYW5kIGxlYXZlIHlvdSBjcmF2aW5nIGZvciBtb3JlLlxuICAgICAgPC9wPmA7XG59XG5cblxuXG4vLyB0aGlzIGZ1bmN0aW9uIGNyZWF0ZXMgY2FyZHMgdGhhdCBoYXMgYW4gaW1hZ2UgLGEgdGl0bGUgYW5kIGRlc2NyaXB0aW9uXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyZHMoZGF0YSkge1xuICBsZXQgY2FyZHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzLXNlY3Rpb24nKTtcbiAgZGF0YS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGxldCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSBlbGVtZW50LmltYWdlO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGU7XG5cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBlbGVtZW50LmRlc2NyaXB0aW9uO1xuXG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGNhcmRzU2VjdGlvbi5hcHBlbmRDaGlsZChjYXJkQ29udGFpbmVyKTtcblxuICB9KTtcbn1cblxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGVudFNlY3Rpb25zLCBwdXRzQ29udGVudEluV2VsY29tZVNlY3Rpb24sIHB1dHNDb250ZW50RGVzY3JpcHRpb25TZWN0aW9uLCBjcmVhdGVDYXJkcyB9IGZyb20gXCIuL21vZHVsZXNcIjtcbmltcG9ydCB7IGNhcmRzRGF0YSwgY29udGVudFNlY3Rpb25zIH0gZnJvbSBcIi4vZGF0YVwiXG5pbXBvcnQgJy4uL2Nzcy9jb21tb21TdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9jc3MvaG9tZS5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbFBhZ2VMb2FkKCkge1xuICBjcmVhdGVDb250ZW50U2VjdGlvbnMoY29udGVudFNlY3Rpb25zLCdjb250ZW50Jyk7XG4gIHB1dHNDb250ZW50SW5XZWxjb21lU2VjdGlvbigpO1xuICBwdXRzQ29udGVudERlc2NyaXB0aW9uU2VjdGlvbigpO1xuICBjcmVhdGVDYXJkcyhjYXJkc0RhdGEpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaW5pdGlhbFBhZ2VMb2FkIH0gZnJvbSAnLi9wYWdlTG9hZCc7XG5pbXBvcnQgeyBnZW5lcmF0ZU1lbnVQYWdlIH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IGdlbmVyYXRlQWJvdXRQYWdlIH0gZnJvbSAnLi9hYm91dCc7XG5cbi8vIGl0cyBpbml0aWFsbHkgbG9hZHMgdGhlIHBhZ2Ugc3RhbmRzIG9uIEhvbWUgcGFnZVxuaW5pdGlhbFBhZ2VMb2FkKCk7XG5sZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb250ZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZScpO1xuXG4vL3NlbGVjdHMgdGhlIEhvbWUgYnRuXG5sZXQgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLWJ0bicpO1xuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICBpbml0aWFsUGFnZUxvYWQoKTtcbiAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXBhZ2UnKTtcbiAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdhYm91dC1wYWdlJyk7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaG9tZS1wYWdlJyk7XG59KTtcblxuLy8gc2VsZWN0cyB0aGUgTWVudSBidG5cbmxldCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYnRuJyk7XG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gIGdlbmVyYXRlTWVudVBhZ2UoKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdtZW51LXBhZ2UnKTtcbiAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdob21lLXBhZ2UnKTtcbiAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdhYm91dC1wYWdlJyk7XG59KTtcblxuXG4vLyBzZWxlY3RzIHRoZSBhYm91dCBwYWdlIFxubGV0IGFib3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LWJ0bicpO1xuYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgZ2VuZXJhdGVBYm91dFBhZ2UoKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdhYm91dC1wYWdlJyk7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1wYWdlJyk7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnaG9tZS1wYWdlJyk7XG4gIFxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9