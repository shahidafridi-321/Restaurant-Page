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
   ,
    {
      image:_images_manager_jpg__WEBPACK_IMPORTED_MODULE_4__,
      title:'Edmond Dantès',
      description:'Our manager, Edmond Dantès, ensures that every guest enjoys a seamless and memorable dining experience with her impeccable attention to detail.'
    },
   ,
    {
      image:_images_manager_jpg__WEBPACK_IMPORTED_MODULE_4__,
      title:'Edmond Dantès',
      description:'Our manager, Edmond Dantès, ensures that every guest enjoys a seamless and memorable dining experience with her impeccable attention to detail.'
    },
   ,
    {
      image:_images_manager_jpg__WEBPACK_IMPORTED_MODULE_4__,
      title:'Edmond Dantès',
      description:'Our manager, Edmond Dantès, ensures that every guest enjoys a seamless and memorable dining experience with her impeccable attention to detail.'
    },
    {
      image:_images_manager_jpg__WEBPACK_IMPORTED_MODULE_4__,
      title:'Edmond Dantès',
      description:'Our manager, Edmond Dantès, ensures that every guest enjoys a seamless and memorable dining experience with her impeccable attention to detail.'
    }
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sbUZBQW1GLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFN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QUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7OztBQ0E2QztBQUNIO0FBQ0U7O0FBRTVDO0FBQ0EsMERBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDBEQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHlEQUFpQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvYWJvdXQuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvY29tbW9tU3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvaG9tZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9tZW51LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9hYm91dC5jc3M/Mzg3ZiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL2NvbW1vbVN0eWxlLmNzcz82ZjU5Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvaG9tZS5jc3M/MDg0NSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL21lbnUuY3NzP2RkZWMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL21vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYWJvdXQtcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBnYXA6IDQwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5hYm91dC1zZWN0aW9uLC5taXNzaW9uLXNlY3Rpb24sLmhpc3Rvcnktc2VjdGlvbiwudGVhbS1zZWN0aW9uIHtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTsgXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBib3gtc2hhZG93IDAuM3M7IFxufVxuXG4uYWJvdXQtc2VjdGlvbjpob3ZlciAsLm1pc3Npb24tc2VjdGlvbjpob3ZlciAsLmhpc3Rvcnktc2VjdGlvbjpob3ZlciAsLnRlYW0tc2VjdGlvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjVweCk7IFxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMSk7XG59XG5cbi5hYm91dC1wYWdlIGgxIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICBtYXJnaW46IDUwcHggMCAyMHB4IDA7XG4gIFxufVxuLmFib3V0LXBhZ2UgaDJ7XG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xufVxuLmFib3V0LXBhZ2UgcCB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG8tbW9ubztcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG4udGVhbS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnRlYW0tY2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsMWZyKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnRlYW0tY2FyZCBoMyB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi50ZWFtLWNhcmQgaW1nIHtcbiAgd2lkdGg6IDYwJTtcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAwLjUgcmdiKDExMCwgMTA5LCAxMDkpO1xufVxuLnRlYW0tY2FyZCBpbWc6aG92ZXIge1xuICB3aWR0aDogODAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjZzO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9hYm91dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0FBQ2Y7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIscUJBQXFCOztBQUV2QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsZ0RBQWdEO0FBQ2xEO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYWJvdXQtcGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGdhcDogNDBweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbi5hYm91dC1zZWN0aW9uLC5taXNzaW9uLXNlY3Rpb24sLmhpc3Rvcnktc2VjdGlvbiwudGVhbS1zZWN0aW9uIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjUpOyBcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBib3gtc2hhZG93IDAuM3M7IFxcbn1cXG5cXG4uYWJvdXQtc2VjdGlvbjpob3ZlciAsLm1pc3Npb24tc2VjdGlvbjpob3ZlciAsLmhpc3Rvcnktc2VjdGlvbjpob3ZlciAsLnRlYW0tc2VjdGlvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpOyBcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAxKTtcXG59XFxuXFxuLmFib3V0LXBhZ2UgaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG4gIG1hcmdpbjogNTBweCAwIDIwcHggMDtcXG4gIFxcbn1cXG4uYWJvdXQtcGFnZSBoMntcXG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxufVxcbi5hYm91dC1wYWdlIHAge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90by1tb25vO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcbi50ZWFtLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi50ZWFtLWNhcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsMWZyKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuLnRlYW0tY2FyZCBoMyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcbi50ZWFtLWNhcmQgaW1nIHtcXG4gIHdpZHRoOiA2MCU7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IDAuNSByZ2IoMTEwLCAxMDksIDEwOSk7XFxufVxcbi50ZWFtLWNhcmQgaW1nOmhvdmVyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvcHJldmlldy1pbWFnZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNmZmY7XG4gIC8qIGJhY2tncm91bmQ6ICMwMDA7ICovXG59XG5cbmJvZHk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpOyBcbiAgei1pbmRleDogLTE7IFxufVxuaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5oZWFkZXIgbmF2e1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHZ3O1xufVxuaGVhZGVyIG5hdiAuYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICNmMmYyZjI7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXgtd2lkdGg6IDEwdnc7XG4gIG1pbi13aWR0aDogODBweDtcbiAgZmxleC1ncm93OiAxO1xuICB0cmFuc2Zvcm06IHNrZXdZKDMwZGVnKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuXG59XG4uYnRuOmhvdmVye1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcbn1cbmhlYWRlciwgZm9vdGVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2NvbW1vbVN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixpRkFBNEU7RUFDNUUsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLFdBQVc7QUFDYjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1COztBQUVyQjtBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvcHJldmlldy1pbWFnZS5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgLyogYmFja2dyb3VuZDogIzAwMDsgKi9cXG59XFxuXFxuYm9keTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpOyBcXG4gIHotaW5kZXg6IC0xOyBcXG59XFxuaGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbn1cXG5oZWFkZXIgbmF2e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTB2dztcXG59XFxuaGVhZGVyIG5hdiAuYnRuIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogI2YyZjJmMjtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1heC13aWR0aDogMTB2dztcXG4gIG1pbi13aWR0aDogODBweDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHRyYW5zZm9ybTogc2tld1koMzBkZWcpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcblxcbn1cXG4uYnRuOmhvdmVye1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XFxufVxcbmhlYWRlciwgZm9vdGVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Sb2JvdG9Nb25vLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9tb20udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUm9ib3RvLUJsYWNrLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IHJvYm90by1tb25vO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IG1vbTtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IG5vcm1hbDtcbn1cbi5ob21lLXBhZ2Uge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcIndlbGNvbWUtc2VjdGlvbiBkZXNjcmlwdGlvbi1zZWN0aW9uXCJcbiAgXCJjYXJkcy1zZWN0aW9uICBjYXJkcy1zZWN0aW9uXCI7XG4gIGdhcDogMXJlbTtcbn1cblxuLndlbGNvbWUtc2VjdGlvbiB7XG4gIGdyaWQtYXJlYTogd2VsY29tZS1zZWN0aW9uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGdyZXk7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgdHJhbnNmb3JtOiBza2V3WSgxMGRlZyk7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4ud2VsY29tZS1zZWN0aW9uIGgxIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICBtYXJnaW46IDUwcHggMCAyMHB4IDA7XG4gIFxufVxuLndlbGNvbWUtc2VjdGlvbiBwIHtcbiAgZm9udC1zaXplOiAyLjZyZW07XG4gIHdvcmQtc3BhY2luZzogMTVweDtcbiAgbWFyZ2luOiAyNXB4IDAgNjBweCAwO1xuICBmb250LWZhbWlseTptb20sIHNlcmlmO1xufVxuLmRlc2NyaXB0aW9uLXNlY3Rpb24ge1xuICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uLXNlY3Rpb247XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB0cmFuc2Zvcm06IHNrZXdZKDEwZGVnKTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgZ3JleTtcbiAgZm9udC1mYW1pbHk6IHJvYm90bywgc2VyaWY7XG59XG4uZGVzY3JpcHRpb24tc2VjdGlvbiBoMiB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5kZXNjcmlwdGlvbi1zZWN0aW9uIGgzIHtcbm1hcmdpbjogMTBweCAwIDEwcHggMDtcblxufVxuLmRlc2NyaXB0aW9uLXNlY3Rpb24gcCB7XG4gIG1hcmdpbjogNXB4IDAgNXB4IDA7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG8tbW9ubyxzZXJpZjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG4uY2FyZHMtc2VjdGlvbiB7XG4gIGdyaWQtYXJlYTogY2FyZHMtc2VjdGlvbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAycmVtIDFyZW07XG59XG4uY2FyZHMtc2VjdGlvbiAuaW1nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbn1cbi5jYXJke1xuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmbGV4OiAxIDEgY2FsYyg1MCUgLSAxcmVtKTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTsgXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBib3gtc2hhZG93IDAuM3M7IFxufVxuLmNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpOyBcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDEpOyAvKiBFbmhhbmNlIHNoYWRvdyBvbiBob3ZlciAqL1xufVxuLmNhcmQgaDN7XG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICBjb2xvcjogI2RiOWY5Zjtcbn1cbi5jYXJkIHAge1xuICBmb250LWZhbWlseTogcm9ib3RvLW1vbm87XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuLmNhcmQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2hvbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRDQUE0RDtFQUM1RCxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsNENBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiw0Q0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztFQUNwQzs7Z0NBRThCO0VBQzlCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIscUJBQXFCOztBQUV2QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQix3Q0FBd0M7RUFDeEMsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsdUNBQXVDLEVBQUUsNEJBQTRCO0FBQ3ZFO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG8tbW9ubztcXG4gIHNyYzogdXJsKCcuLi9mb250cy9Sb2JvdG9Nb25vLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGYnKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogbW9tO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL21vbS50dGYnKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL1JvYm90by1CbGFjay50dGYnKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IG5vcm1hbDtcXG59XFxuLmhvbWUtcGFnZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwid2VsY29tZS1zZWN0aW9uIGRlc2NyaXB0aW9uLXNlY3Rpb25cXFwiXFxuICBcXFwiY2FyZHMtc2VjdGlvbiAgY2FyZHMtc2VjdGlvblxcXCI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi53ZWxjb21lLXNlY3Rpb24ge1xcbiAgZ3JpZC1hcmVhOiB3ZWxjb21lLXNlY3Rpb247XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICB0cmFuc2Zvcm06IHNrZXdZKDEwZGVnKTtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcbi53ZWxjb21lLXNlY3Rpb24gaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG4gIG1hcmdpbjogNTBweCAwIDIwcHggMDtcXG4gIFxcbn1cXG4ud2VsY29tZS1zZWN0aW9uIHAge1xcbiAgZm9udC1zaXplOiAyLjZyZW07XFxuICB3b3JkLXNwYWNpbmc6IDE1cHg7XFxuICBtYXJnaW46IDI1cHggMCA2MHB4IDA7XFxuICBmb250LWZhbWlseTptb20sIHNlcmlmO1xcbn1cXG4uZGVzY3JpcHRpb24tc2VjdGlvbiB7XFxuICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uLXNlY3Rpb247XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgdHJhbnNmb3JtOiBza2V3WSgxMGRlZyk7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgZ3JleTtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG8sIHNlcmlmO1xcbn1cXG4uZGVzY3JpcHRpb24tc2VjdGlvbiBoMiB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbn1cXG4uZGVzY3JpcHRpb24tc2VjdGlvbiBoMyB7XFxubWFyZ2luOiAxMHB4IDAgMTBweCAwO1xcblxcbn1cXG4uZGVzY3JpcHRpb24tc2VjdGlvbiBwIHtcXG4gIG1hcmdpbjogNXB4IDAgNXB4IDA7XFxuICBmb250LWZhbWlseTogcm9ib3RvLW1vbm8sc2VyaWY7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuLmNhcmRzLXNlY3Rpb24ge1xcbiAgZ3JpZC1hcmVhOiBjYXJkcy1zZWN0aW9uO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xcbn1cXG4uY2FyZHMtc2VjdGlvbiAuaW1nIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgbWF4LXdpZHRoOiAzNTBweDtcXG4gIG1pbi13aWR0aDogMTUwcHg7XFxufVxcbi5jYXJke1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZsZXg6IDEgMSBjYWxjKDUwJSAtIDFyZW0pO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTsgXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgYm94LXNoYWRvdyAwLjNzOyBcXG59XFxuLmNhcmQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgXFxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMSk7IC8qIEVuaGFuY2Ugc2hhZG93IG9uIGhvdmVyICovXFxufVxcbi5jYXJkIGgze1xcbiAgZm9udC1zaXplOiAyLjNyZW07XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG4gIGNvbG9yOiAjZGI5ZjlmO1xcbn1cXG4uY2FyZCBwIHtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG8tbW9ubztcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG4uY2FyZCBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1lbnUtcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMzBweDtcbn1cbi5hcHBldGl6ZXJzLC5tYWluLWNvdXJzZXMsLmRlc3NlcnRzLC5iZXZlcmFnZXN7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7IFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgYm94LXNoYWRvdyAwLjNzOyBcbn1cbi5hcHBldGl6ZXJzOmhvdmVyICwubWFpbi1jb3Vyc2VzOmhvdmVyICwuZGVzc2VydHM6aG92ZXIgLC5iZXZlcmFnZXM6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpOyBcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDEpOyAvKiBFbmhhbmNlIHNoYWRvdyBvbiBob3ZlciAqL1xufVxuXG4ubWVudS1wYWdlIGgye1xuICBmb250LXNpemU6IDIuM3JlbTtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbn1cbi5tZW51LXBhZ2UgaDN7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbn1cbi5tZW51LXBhZ2UgcCB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG8tbW9ubztcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG4ubWVudS1wYWdlIHNwYW4ge1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixTQUFTO0FBQ1g7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsdUNBQXVDLEVBQUUsNEJBQTRCO0FBQ3ZFOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tZW51LXBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG4uYXBwZXRpemVycywubWFpbi1jb3Vyc2VzLC5kZXNzZXJ0cywuYmV2ZXJhZ2Vze1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7IFxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJveC1zaGFkb3cgMC4zczsgXFxufVxcbi5hcHBldGl6ZXJzOmhvdmVyICwubWFpbi1jb3Vyc2VzOmhvdmVyICwuZGVzc2VydHM6aG92ZXIgLC5iZXZlcmFnZXM6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTsgXFxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMSk7IC8qIEVuaGFuY2Ugc2hhZG93IG9uIGhvdmVyICovXFxufVxcblxcbi5tZW51LXBhZ2UgaDJ7XFxuICBmb250LXNpemU6IDIuM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbn1cXG4ubWVudS1wYWdlIGgze1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxufVxcbi5tZW51LXBhZ2UgcCB7XFxuICBmb250LWZhbWlseTogcm9ib3RvLW1vbm87XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuLm1lbnUtcGFnZSBzcGFuIHtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fib3V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fib3V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21tb21TdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21tb21TdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4uL2Nzcy9jb21tb21TdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9jc3MvYWJvdXQuY3NzJztcblxuaW1wb3J0IHsgYWJvdXRTZWN0aW9ucywgYWJvdXRTZWN0aW9uc0RhdGEgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHsgY3JlYXRlQ29udGVudFNlY3Rpb25zIH0gZnJvbSAnLi9tb2R1bGVzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0FCT1VUIFBBR0UgLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gbGV0IHRlYW1kYXRhID0gXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50SW5BYm91dFBhZ2UoZGF0YSkge1xuICBsZXQgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1zZWN0aW9uJyk7XG4gIGxldCB0ZWFtSW5kZXggPSAwO1xuXG4gIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgaWYgKCFzZWN0aW9uLmNsYXNzTGlzdC5jb250YWlucygndGVhbS1zZWN0aW9uJykpIHtcbiAgICAgIHNlY3Rpb24uaW5uZXJIVE1MID0gYDxoMj4ke2RhdGFbaW5kZXhdLnRpdGxlfTwvaDI+XG4gICAgICA8cD4ke2RhdGFbaW5kZXhdLmRlc2NyaXB0aW9ufTwvcD4gXG4gICAgICBgO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhW2luZGV4XS5mb3JFYWNoKChpdGVtLGkpID0+e1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0ZWFtLWNhcmQnKTtcbiAgICAgICAgXG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICA8aW1nIHNyYz1cIiR7ZGF0YVtpbmRleF1baV0uaW1hZ2V9XCIgYWx0PVwiQ2hlZlwiPlxuICAgICAgPGgzPiR7ZGF0YVtpbmRleF1baV0udGl0bGV9PC9oMz5cbiAgICAgIDxwPiR7ZGF0YVtpbmRleF1baV0uZGVzY3JpcHRpb259PC9wPlxuICAgIGA7XG4gICAgICBzZWN0aW9uLmFwcGVuZChkaXYpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVBYm91dFBhZ2UoKSB7XG4gIGNyZWF0ZUNvbnRlbnRTZWN0aW9ucyhhYm91dFNlY3Rpb25zLCAnY29udGVudCcpO1xuICBjcmVhdGVDb250ZW50SW5BYm91dFBhZ2UoYWJvdXRTZWN0aW9uc0RhdGEpO1xufVxuXG5cbiIsIlxuaW1wb3J0IHNpZ25hdHVyZURpc2hlcyBmcm9tICcuLi9pbWFnZXMvc2lnbmF0dXJlLWRpc2hlcy5qcGcnO1xuaW1wb3J0IHNjb3p5QXJlYSBmcm9tICcuLi9pbWFnZXMvY296eS5qcGcnO1xuaW1wb3J0IHNlcnZpY2UgZnJvbSAnLi4vaW1hZ2VzL3NlcnZpY2UuanBnJztcblxuZXhwb3J0IGxldCBjYXJkc0RhdGEgPSBbXG4gIHtcbiAgICBpbWFnZTogYCR7c2lnbmF0dXJlRGlzaGVzfWAsXG4gICAgdGl0bGU6ICdPdXIgU2lnbmF0dXJlIERpc2hlcycsXG4gICAgZGVzY3JpcHRpb246ICdFeHBlcmllbmNlIGEgdmFyZWl0eSBvZiBmbGF2b3JzIHdpdGggb3VyIHNpZ25hdHVyZSBkaXNoZXMsIG1ldGljdWxvdXNseSBjcmFmdGVkIHRvIHBlcmZlY3Rpb24uJyxcbiAgfSxcbiAge1xuICAgIGltYWdlOiBgJHtzY296eUFyZWF9YCxcbiAgICB0aXRsZTogJ0NvenkgQW1iaWFuY2UnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVsYXggaW4gb3VyIGNvenkgYW5kIGVsZWdhbnQgZGluaW5nIGFyZWEsIGRlc2lnbmVkIHRvIHByb3ZpZGUgYSBjb21mb3J0YWJsZSBhbmQgZW5qb3lhYmxlIGV4cGVyaWVuY2UuJyxcbiAgfSxcbiAge1xuICAgIGltYWdlOiBgJHtzZXJ2aWNlIH1gLFxuICAgIHRpdGxlOiAnRXhjZXB0aW9uYWwgU2VydmljZScsXG4gICAgZGVzY3JpcHRpb246ICdPdXIgZnJpZW5kbHkgYW5kIGF0dGVudGl2ZSBzdGFmZiBhcmUgaGVyZSB0byBlbnN1cmUgdGhhdCB5b3VyIGRpbmluZyBleHBlcmllbmNlIGlzIG5vdGhpbmcgc2hvcnQgb2YgZXhjZXB0aW9uYWwuJyxcbiAgfVxuXTtcblxuZXhwb3J0IGxldCBjb250ZW50U2VjdGlvbnMgPSBbJ3dlbGNvbWUtc2VjdGlvbicsJ2Rlc2NyaXB0aW9uLXNlY3Rpb24nLCdjYXJkcy1zZWN0aW9uJ107XG5cbmV4cG9ydCBsZXQgbWVudVBhZ2VTZXRpb25zID0gWydhcHBldGl6ZXJzJywnbWFpbi1jb3Vyc2VzJywnZGVzc2VydHMnLCdiZXZlcmFnZXMnXTtcblxuZXhwb3J0IGxldCBtZW51UGFnZURhdGEgPSBbXG4gIHtcbiAgICB0aXRsZTonQXBwZXRpemVycycsXG4gICAgZm9vZHM6W1xuICAgICAge1xuICAgICAgICBuYW1lOidCcnVzY2hldHRhJyxcbiAgICAgICAgZGVzY3JpcHRpb246J0dyaWxsZWQgYnJlYWQgdG9wcGVkIHdpdGggYSBtaXh0dXJlIG9mIGZyZXNoIHRvbWF0b2VzLCBnYXJsaWMsIGJhc2lsLCBhbmQgb2xpdmUgb2lsLicsXG4gICAgICAgIHByaWNlOickOC45OSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6J1N0dWZmZWQgTXVzaHJvb21zJyxcbiAgICAgICAgZGVzY3JpcHRpb246J011c2hyb29tcyBmaWxsZWQgd2l0aCBhIGJsZW5kIG9mIGNoZWVzZXMsIGhlcmJzLCBhbmQgYnJlYWRjcnVtYnMsIGJha2VkIHRvIHBlcmZlY3Rpb24uJyxcbiAgICAgICAgcHJpY2U6JyQ5Ljk5J1xuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6J01haW4gQ291cnNlcycsXG4gICAgZm9vZHM6W1xuICAgICAge1xuICAgICAgICBuYW1lOidHcmlsbGVkIFNhbG1vbicsXG4gICAgICAgIGRlc2NyaXB0aW9uOidGcmVzaCBzYWxtb24gZmlsbGV0IGdyaWxsZWQgYW5kIHNlcnZlZCB3aXRoIGEgbGVtb24tZGlsbCBzYXVjZSBhbmQgc2Vhc29uYWwgdmVnZXRhYmxlcy4nLFxuICAgICAgICBwcmljZTonJDE4Ljk5J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTonUmliZXllIFN0ZWFrJyxcbiAgICAgICAgZGVzY3JpcHRpb246J0p1aWN5IHJpYmV5ZSBzdGVhayBjb29rZWQgdG8geW91ciBsaWtpbmcsIHNlcnZlZCB3aXRoIGdhcmxpYyBtYXNoZWQgcG90YXRvZXMgYW5kIHN0ZWFtZWQgYnJvY2NvbGkuJyxcbiAgICAgICAgcHJpY2U6JyQyNC45OSdcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOidEZXNzZXJ0cycsXG4gICAgZm9vZHM6W1xuICAgICAge1xuICAgICAgICBuYW1lOidDaG9jb2xhdGUgTGF2YSBDYWtlJyxcbiAgICAgICAgZGVzY3JpcHRpb246J1JpY2ggY2hvY29sYXRlIGNha2Ugd2l0aCBhIG1vbHRlbiBjaG9jb2xhdGUgY2VudGVyLCBzZXJ2ZWQgd2l0aCB2YW5pbGxhIGljZSBjcmVhbS4nLFxuICAgICAgICBwcmljZTonJDcuOTknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOidDaGVlc2VDYWtlJyxcbiAgICAgICAgZGVzY3JpcHRpb246J0NyZWFteSBjaGVlc2VjYWtlIHdpdGggYSBncmFoYW0gY3JhY2tlciBjcnVzdCwgdG9wcGVkIHdpdGggYSBzdHJhd2JlcnJ5IGdsYXplLicsXG4gICAgICAgIHByaWNlOickNi45OSdcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOidCZXZlcmFnZXMnLFxuICAgIGZvb2RzOltcbiAgICAgIHtcbiAgICAgICAgbmFtZTonRnJlc2ggTGVtb25hZGUnLFxuICAgICAgICBkZXNjcmlwdGlvbjonUmVmcmVzaGluZyBsZW1vbmFkZSBtYWRlIHdpdGggZnJlc2hseSBzcXVlZXplZCBsZW1vbnMgYW5kIGEgaGludCBvZiBtaW50LicsXG4gICAgICAgIHByaWNlOickMy45OSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6J0VzcHJlc3NvJyxcbiAgICAgICAgZGVzY3JpcHRpb246J1JpY2ggYW5kIHNtb290aCBlc3ByZXNzbywgbWFkZSBmcm9tIHByZW1pdW0gY29mZmVlIGJlYW5zLicsXG4gICAgICAgIHByaWNlOickMi45OSdcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBsZXQgYWJvdXRTZWN0aW9ucyA9IFsnYWJvdXQtc2VjdGlvbicsJ21pc3Npb24tc2VjdGlvbicsJ2hpc3Rvcnktc2VjdGlvbicsJ3RlYW0tc2VjdGlvbiddO1xuZXhwb3J0IGxldCBhYm91dFNlY3Rpb25zRGF0YSA9IFtcbiAge1xuICAgIHRpdGxlOidBYm91dCBHb3VybWV0IERlbGlnaHRlZCcsXG4gICAgZGVzY3JpcHRpb246J1dlbGNvbWUgdG8gR291cm1ldCBEZWxpZ2h0ZWQsIHdoZXJlIGN1bGluYXJ5IGFydGlzdHJ5IG1lZXRzIGV4Y2VwdGlvbmFsIGhvc3BpdGFsaXR5LiBPdXIgcmVzdGF1cmFudCBpcyBkZWRpY2F0ZWQgdG8gcHJvdmlkaW5nIGEgZGluaW5nIGV4cGVyaWVuY2UgdGhhdCBkZWxpZ2h0cyBhbGwgeW91ciBzZW5zZXMuJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6J091ciBNaXNzaW9uJyxcbiAgICBkZXNjcmlwdGlvbjonQXQgR291cm1ldCBEZWxpZ2h0ZWQsIG91ciBtaXNzaW9uIGlzIHRvIG9mZmVyIGV4cXVpc2l0ZSBjdWlzaW5lLCBleGNlcHRpb25hbCBzZXJ2aWNlLCBhbmQgYSB3YXJtLCBpbnZpdGluZyBhdG1vc3BoZXJlLiBXZSBzdHJpdmUgdG8gY3JlYXRlIG1lbW9yYWJsZSBkaW5pbmcgZXhwZXJpZW5jZXMgdGhhdCBicmluZyBqb3kgdG8gb3VyIGd1ZXN0cy4nXG4gIH0sXG4gIHtcbiAgICB0aXRsZTonT3VyIEhpc3RvcnknLFxuICAgIGRlc2NyaXB0aW9uOidGb3VuZGVkIGluIDIwMjQsIEdvdXJtZXQgRGVsaWdodGVkIGhhcyBxdWlja2x5IGJlY29tZSBhIGZhdm9yaXRlIGRpbmluZyBkZXN0aW5hdGlvbiBpbiB0aGUgaGVhcnQgb2YgdGhlIGNpdHkuIE91ciBqb3VybmV5IGJlZ2FuIHdpdGggYSBwYXNzaW9uIGZvciBjdWxpbmFyeSBleGNlbGxlbmNlIGFuZCBhIGNvbW1pdG1lbnQgdG8gdXNpbmcgdGhlIGZpbmVzdCBpbmdyZWRpZW50cy4nXG4gIH0sXG4gIFtcbiAgICB7XG4gICAgICBpbWFnZTpjZW8sXG4gICAgICB0aXRsZTonS2Fyb2xpbmEgS2Fib29tcCcsXG4gICAgICBkZXNjcmlwdGlvbjonV2l0aCBvdmVyIDIwIHllYXJzIG9mIGV4cGVyaWVuY2UsIENoZWYgS2Fyb2xpbmEgS2Fib29tcCBicmluZ3MgY3JlYXRpdml0eSBhbmQgZXhwZXJ0aXNlIHRvIG91ciBraXRjaGVuLCBjcmFmdGluZyBkaXNoZXMgdGhhdCBhcmUgYm90aCBpbm5vdmF0aXZlIGFuZCBkZWxpY2lvdXMuJ1xuICAgIH0sXG4gICAsXG4gICAge1xuICAgICAgaW1hZ2U6bWFuYWdlcixcbiAgICAgIHRpdGxlOidFZG1vbmQgRGFudMOocycsXG4gICAgICBkZXNjcmlwdGlvbjonT3VyIG1hbmFnZXIsIEVkbW9uZCBEYW50w6hzLCBlbnN1cmVzIHRoYXQgZXZlcnkgZ3Vlc3QgZW5qb3lzIGEgc2VhbWxlc3MgYW5kIG1lbW9yYWJsZSBkaW5pbmcgZXhwZXJpZW5jZSB3aXRoIGhlciBpbXBlY2NhYmxlIGF0dGVudGlvbiB0byBkZXRhaWwuJ1xuICAgIH0sXG4gICAsXG4gICAge1xuICAgICAgaW1hZ2U6bWFuYWdlcixcbiAgICAgIHRpdGxlOidFZG1vbmQgRGFudMOocycsXG4gICAgICBkZXNjcmlwdGlvbjonT3VyIG1hbmFnZXIsIEVkbW9uZCBEYW50w6hzLCBlbnN1cmVzIHRoYXQgZXZlcnkgZ3Vlc3QgZW5qb3lzIGEgc2VhbWxlc3MgYW5kIG1lbW9yYWJsZSBkaW5pbmcgZXhwZXJpZW5jZSB3aXRoIGhlciBpbXBlY2NhYmxlIGF0dGVudGlvbiB0byBkZXRhaWwuJ1xuICAgIH0sXG4gICAsXG4gICAge1xuICAgICAgaW1hZ2U6bWFuYWdlcixcbiAgICAgIHRpdGxlOidFZG1vbmQgRGFudMOocycsXG4gICAgICBkZXNjcmlwdGlvbjonT3VyIG1hbmFnZXIsIEVkbW9uZCBEYW50w6hzLCBlbnN1cmVzIHRoYXQgZXZlcnkgZ3Vlc3QgZW5qb3lzIGEgc2VhbWxlc3MgYW5kIG1lbW9yYWJsZSBkaW5pbmcgZXhwZXJpZW5jZSB3aXRoIGhlciBpbXBlY2NhYmxlIGF0dGVudGlvbiB0byBkZXRhaWwuJ1xuICAgIH0sXG4gICAsXG4gICAge1xuICAgICAgaW1hZ2U6bWFuYWdlcixcbiAgICAgIHRpdGxlOidFZG1vbmQgRGFudMOocycsXG4gICAgICBkZXNjcmlwdGlvbjonT3VyIG1hbmFnZXIsIEVkbW9uZCBEYW50w6hzLCBlbnN1cmVzIHRoYXQgZXZlcnkgZ3Vlc3QgZW5qb3lzIGEgc2VhbWxlc3MgYW5kIG1lbW9yYWJsZSBkaW5pbmcgZXhwZXJpZW5jZSB3aXRoIGhlciBpbXBlY2NhYmxlIGF0dGVudGlvbiB0byBkZXRhaWwuJ1xuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2U6bWFuYWdlcixcbiAgICAgIHRpdGxlOidFZG1vbmQgRGFudMOocycsXG4gICAgICBkZXNjcmlwdGlvbjonT3VyIG1hbmFnZXIsIEVkbW9uZCBEYW50w6hzLCBlbnN1cmVzIHRoYXQgZXZlcnkgZ3Vlc3QgZW5qb3lzIGEgc2VhbWxlc3MgYW5kIG1lbW9yYWJsZSBkaW5pbmcgZXhwZXJpZW5jZSB3aXRoIGhlciBpbXBlY2NhYmxlIGF0dGVudGlvbiB0byBkZXRhaWwuJ1xuICAgIH1cbiAgICBcbiAgXSxcbl07XG5cbmltcG9ydCBjZW8gZnJvbSAnLi4vaW1hZ2VzL2Nlby5qcGcnO1xuaW1wb3J0IG1hbmFnZXIgZnJvbSAnLi4vaW1hZ2VzL21hbmFnZXIuanBnJzsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZW50U2VjdGlvbnMgfSBmcm9tIFwiLi9tb2R1bGVzXCI7XG5pbXBvcnQgeyBtZW51UGFnZVNldGlvbnMsIG1lbnVQYWdlRGF0YSB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgJy4uL2Nzcy9jb21tb21TdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9jc3MvbWVudS5jc3MnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9NRU5VLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5mdW5jdGlvbiBwdXRDb250ZW50SW5NZW51UGFnZShkYXRhKSB7XG4gIGxldCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LXNlY3Rpb24nKTtcbiAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICBzZWN0aW9uLmlubmVySFRNTCA9IGA8aDI+JHtkYXRhW2luZGV4XS50aXRsZX08L2gyPlxuICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAgIDxoMz4ke2RhdGFbaW5kZXhdLmZvb2RzWzBdLm5hbWV9PC9oMz5cbiAgICAgIDxwPiR7ZGF0YVtpbmRleF0uZm9vZHNbMF0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgPHNwYW4+JHtkYXRhW2luZGV4XS5mb29kc1swXS5wcmljZX08L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxuICAgICAgPGgzPiR7ZGF0YVtpbmRleF0uZm9vZHNbMV0ubmFtZX08L2gzPlxuICAgICAgPHA+JHtkYXRhW2luZGV4XS5mb29kc1sxXS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8c3Bhbj4ke2RhdGFbaW5kZXhdLmZvb2RzWzFdLnByaWNlfTwvc3Bhbj5cbiAgICA8L2Rpdj5gO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTWVudVBhZ2UoKSB7XG4gIGNyZWF0ZUNvbnRlbnRTZWN0aW9ucyhtZW51UGFnZVNldGlvbnMsICdjb250ZW50Jyk7XG4gIHB1dENvbnRlbnRJbk1lbnVQYWdlKG1lbnVQYWdlRGF0YSk7XG59XG5cbiIsIlxuLy8gdGhpcyBmdW50aW9uIGNyZWF0ZXMgZGlmZnJlbnQgc2VjdGlvbiBpbiBjb250ZW50IGNvbnRhaW5lclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnRTZWN0aW9ucyhjb250ZW50c2VjQXJyYXksIGlkKSB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICBjb250ZW50c2VjQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtc2VjdGlvbicpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChlbGVtZW50KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICB9KTtcbn1cblxuLy8gdGhpcyBmdW5jdGlvbiBwdXRzIGNvbnRlbnQgaW5zaWRlIHRoZSB3ZWxjb21lIHNlY3Rpb24gb2YgdGhlIGNvbnRlbnQgY29udGFpbmVyIGZvciBob21lIHBhZ2VcbmV4cG9ydCBmdW5jdGlvbiBwdXRzQ29udGVudEluV2VsY29tZVNlY3Rpb24oKSB7XG4gIGxldCB3ZWxjb21lU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWxjb21lLXNlY3Rpb24nKTtcblxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvIEdvdXJtZXQgRGVsaWdodGVkJztcblxuICBsZXQgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBgWW91ciBjdWxuYXJ5IGpvdXJuZXkgYmVnaW5zIGhlcmUhYDtcblxuICB3ZWxjb21lU2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHdlbGNvbWVTZWN0aW9uLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG59XG5cblxuLy8gdGhpcyBmdW5jdGlvbiBwdXRzIGNvbnRlbnQgaW5zaWRlIHRoZSBkZXNjcmlwdGlvbiBzZWN0aW9uIG9mIHRoZSBjb250ZW50IGNvbnRhaW5lclxuZXhwb3J0IGZ1bmN0aW9uIHB1dHNDb250ZW50RGVzY3JpcHRpb25TZWN0aW9uKCkge1xuICBsZXQgZGVzY3JpcHRpb25TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLXNlY3Rpb24nKTtcbiAgZGVzY3JpcHRpb25TZWN0aW9uLmlubmVySFRNTCA9IGA8aDI+V2UgTG92ZSBUbyBTZXJ2ZSBZb3UuLi48L2gyPjxoMz5CbGVzcyB1cyB3aXRoIGEgY2hhbmNlPC9oMz5cbiAgICAgIDxwPkF0IEdvdXJtZXQgRGVsaWdodGVkLCB3ZSBvZmZlciBhbiB1bmZvcmdldHRhYmxlIGRpbm5pbmcgZXhwZXJpZW5jZSxjb21iaW5pbmcgZXhxdWlzaXRlIGN1aXNpbmUsIGV4Y2VwdGlvbmFsIHNlcnZpY2UsIGFuZCBhIHdhcm0sIGludml0aW5nIGF0bW9zcGhlcmUuIE91ciBjaGVmcyB1c2V0aGUgZmluZXN0IGluZ3JlZGllbnRzIHRvIGNyZWF0ZSBkaXNoZXMgdGhhdCB3aWxsIHRhbnRhbGl6ZSB5b3VyIHRhc3RlIGJ1ZHMgYW5kIGxlYXZlIHlvdSBjcmF2aW5nIGZvciBtb3JlLlxuICAgICAgPC9wPmA7XG59XG5cblxuXG4vLyB0aGlzIGZ1bmN0aW9uIGNyZWF0ZXMgY2FyZHMgdGhhdCBoYXMgYW4gaW1hZ2UgLGEgdGl0bGUgYW5kIGRlc2NyaXB0aW9uXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyZHMoZGF0YSkge1xuICBsZXQgY2FyZHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzLXNlY3Rpb24nKTtcbiAgZGF0YS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGxldCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSBlbGVtZW50LmltYWdlO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGU7XG5cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBlbGVtZW50LmRlc2NyaXB0aW9uO1xuXG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGNhcmRzU2VjdGlvbi5hcHBlbmRDaGlsZChjYXJkQ29udGFpbmVyKTtcblxuICB9KTtcbn1cblxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGVudFNlY3Rpb25zLCBwdXRzQ29udGVudEluV2VsY29tZVNlY3Rpb24sIHB1dHNDb250ZW50RGVzY3JpcHRpb25TZWN0aW9uLCBjcmVhdGVDYXJkcyB9IGZyb20gXCIuL21vZHVsZXNcIjtcbmltcG9ydCB7IGNhcmRzRGF0YSwgY29udGVudFNlY3Rpb25zIH0gZnJvbSBcIi4vZGF0YVwiXG5pbXBvcnQgJy4uL2Nzcy9jb21tb21TdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9jc3MvaG9tZS5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbFBhZ2VMb2FkKCkge1xuICBjcmVhdGVDb250ZW50U2VjdGlvbnMoY29udGVudFNlY3Rpb25zLCdjb250ZW50Jyk7XG4gIHB1dHNDb250ZW50SW5XZWxjb21lU2VjdGlvbigpO1xuICBwdXRzQ29udGVudERlc2NyaXB0aW9uU2VjdGlvbigpO1xuICBjcmVhdGVDYXJkcyhjYXJkc0RhdGEpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaW5pdGlhbFBhZ2VMb2FkIH0gZnJvbSAnLi9wYWdlTG9hZCc7XG5pbXBvcnQgeyBnZW5lcmF0ZU1lbnVQYWdlIH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IGdlbmVyYXRlQWJvdXRQYWdlIH0gZnJvbSAnLi9hYm91dCc7XG5cbi8vIGl0cyBpbml0aWFsbHkgbG9hZHMgdGhlIHBhZ2Ugc3RhbmRzIG9uIEhvbWUgcGFnZVxuaW5pdGlhbFBhZ2VMb2FkKCk7XG5sZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb250ZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZScpO1xuXG4vL3NlbGVjdHMgdGhlIEhvbWUgYnRuXG5sZXQgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLWJ0bicpO1xuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICBpbml0aWFsUGFnZUxvYWQoKTtcbiAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXBhZ2UnKTtcbiAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdhYm91dC1wYWdlJyk7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaG9tZS1wYWdlJyk7XG59KTtcblxuLy8gc2VsZWN0cyB0aGUgTWVudSBidG5cbmxldCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYnRuJyk7XG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gIGdlbmVyYXRlTWVudVBhZ2UoKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdtZW51LXBhZ2UnKTtcbiAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdob21lLXBhZ2UnKTtcbiAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdhYm91dC1wYWdlJyk7XG59KTtcblxuXG4vLyBzZWxlY3RzIHRoZSBhYm91dCBwYWdlIFxubGV0IGFib3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LWJ0bicpO1xuYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgZ2VuZXJhdGVBYm91dFBhZ2UoKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdhYm91dC1wYWdlJyk7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1wYWdlJyk7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnaG9tZS1wYWdlJyk7XG4gIFxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9