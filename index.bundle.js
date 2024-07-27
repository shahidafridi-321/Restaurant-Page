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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sbUZBQW1GLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFN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LGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7QUNBNkM7QUFDSDtBQUNFOztBQUU1QztBQUNBLDBEQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwwREFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVEQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx5REFBaUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL2Fib3V0LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL2NvbW1vbVN0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL2hvbWUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvbWVudS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvYWJvdXQuY3NzPzM4N2YiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9jb21tb21TdHlsZS5jc3M/NmY1OSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL2hvbWUuY3NzPzA4NDUiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9tZW51LmNzcz9kZGVjIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9kYXRhLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9tb2R1bGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmFib3V0LXBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZ2FwOiA0MHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uYWJvdXQtc2VjdGlvbiwubWlzc2lvbi1zZWN0aW9uLC5oaXN0b3J5LXNlY3Rpb24sLnRlYW0tc2VjdGlvbiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7IFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgYm94LXNoYWRvdyAwLjNzOyBcbn1cblxuLmFib3V0LXNlY3Rpb246aG92ZXIgLC5taXNzaW9uLXNlY3Rpb246aG92ZXIgLC5oaXN0b3J5LXNlY3Rpb246aG92ZXIgLC50ZWFtLXNlY3Rpb246aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpOyBcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDEpO1xufVxuXG4uYWJvdXQtcGFnZSBoMSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgbWFyZ2luOiA1MHB4IDAgMjBweCAwO1xuICBcbn1cbi5hYm91dC1wYWdlIGgye1xuICBmb250LXNpemU6IDIuM3JlbTtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbn1cbi5hYm91dC1wYWdlIHAge1xuICBmb250LWZhbWlseTogcm9ib3RvLW1vbm87XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuLnRlYW0tc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi50ZWFtLWNhcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLDFmcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cbi50ZWFtLWNhcmQgaDMge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4udGVhbS1jYXJkIGltZyB7XG4gIHdpZHRoOiA2MCU7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggMC41IHJnYigxMTAsIDEwOSwgMTA5KTtcbn1cbi50ZWFtLWNhcmQgaW1nOmhvdmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYWJvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHFCQUFxQjs7QUFFdkI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGdEQUFnRDtBQUNsRDtBQUNBO0VBQ0UsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmFib3V0LXBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IDQwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4uYWJvdXQtc2VjdGlvbiwubWlzc2lvbi1zZWN0aW9uLC5oaXN0b3J5LXNlY3Rpb24sLnRlYW0tc2VjdGlvbiB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTsgXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgYm94LXNoYWRvdyAwLjNzOyBcXG59XFxuXFxuLmFib3V0LXNlY3Rpb246aG92ZXIgLC5taXNzaW9uLXNlY3Rpb246aG92ZXIgLC5oaXN0b3J5LXNlY3Rpb246aG92ZXIgLC50ZWFtLXNlY3Rpb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTsgXFxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMSk7XFxufVxcblxcbi5hYm91dC1wYWdlIGgxIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxuICBtYXJnaW46IDUwcHggMCAyMHB4IDA7XFxuICBcXG59XFxuLmFib3V0LXBhZ2UgaDJ7XFxuICBmb250LXNpemU6IDIuM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbn1cXG4uYWJvdXQtcGFnZSBwIHtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG8tbW9ubztcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG4udGVhbS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udGVhbS1jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLDFmcik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbi50ZWFtLWNhcmQgaDMge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG4udGVhbS1jYXJkIGltZyB7XFxuICB3aWR0aDogNjAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAwLjUgcmdiKDExMCwgMTA5LCAxMDkpO1xcbn1cXG4udGVhbS1jYXJkIGltZzpob3ZlciB7XFxuICB3aWR0aDogODAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3ByZXZpZXctaW1hZ2UuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjZmZmO1xuICAvKiBiYWNrZ3JvdW5kOiAjMDAwOyAqL1xufVxuXG5ib2R5OjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTsgXG4gIHotaW5kZXg6IC0xOyBcbn1cbmhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuaGVhZGVyIG5hdntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTB2dztcbn1cbmhlYWRlciBuYXYgLmJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjZjJmMmYyO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWF4LXdpZHRoOiAxMHZ3O1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgdHJhbnNmb3JtOiBza2V3WSgzMGRlZyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcblxufVxuLmJ0bjpob3ZlcntcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XG59XG5oZWFkZXIsIGZvb3RlciB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9jb21tb21TdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsaUZBQTRFO0VBQzVFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxXQUFXO0FBQ2I7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjs7QUFFckI7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL3ByZXZpZXctaW1hZ2UuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIC8qIGJhY2tncm91bmQ6ICMwMDA7ICovXFxufVxcblxcbmJvZHk6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTsgXFxuICB6LWluZGV4OiAtMTsgXFxufVxcbmhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuaGVhZGVyIG5hdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwdnc7XFxufVxcbmhlYWRlciBuYXYgLmJ0biB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6ICNmMmYyZjI7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXgtd2lkdGg6IDEwdnc7XFxuICBtaW4td2lkdGg6IDgwcHg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICB0cmFuc2Zvcm06IHNrZXdZKDMwZGVnKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG5cXG59XFxuLmJ0bjpob3ZlcntcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xcbn1cXG5oZWFkZXIsIGZvb3RlciB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUm9ib3RvTW9uby1JdGFsaWMtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvbW9tLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1JvYm90by1CbGFjay50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG8tbW9ubztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBtb207XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiBub3JtYWw7XG59XG4uaG9tZS1wYWdlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJ3ZWxjb21lLXNlY3Rpb24gZGVzY3JpcHRpb24tc2VjdGlvblwiXG4gIFwiY2FyZHMtc2VjdGlvbiAgY2FyZHMtc2VjdGlvblwiO1xuICBnYXA6IDFyZW07XG59XG5cbi53ZWxjb21lLXNlY3Rpb24ge1xuICBncmlkLWFyZWE6IHdlbGNvbWUtc2VjdGlvbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBncmV5O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHRyYW5zZm9ybTogc2tld1koMTBkZWcpO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLndlbGNvbWUtc2VjdGlvbiBoMSB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgbWFyZ2luOiA1MHB4IDAgMjBweCAwO1xuICBcbn1cbi53ZWxjb21lLXNlY3Rpb24gcCB7XG4gIGZvbnQtc2l6ZTogMi42cmVtO1xuICB3b3JkLXNwYWNpbmc6IDE1cHg7XG4gIG1hcmdpbjogMjVweCAwIDYwcHggMDtcbiAgZm9udC1mYW1pbHk6bW9tLCBzZXJpZjtcbn1cbi5kZXNjcmlwdGlvbi1zZWN0aW9uIHtcbiAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbi1zZWN0aW9uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgdHJhbnNmb3JtOiBza2V3WSgxMGRlZyk7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBncmV5O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGdyZXk7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG8sIHNlcmlmO1xufVxuLmRlc2NyaXB0aW9uLXNlY3Rpb24gaDIge1xuICBmb250LXNpemU6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uZGVzY3JpcHRpb24tc2VjdGlvbiBoMyB7XG5tYXJnaW46IDEwcHggMCAxMHB4IDA7XG5cbn1cbi5kZXNjcmlwdGlvbi1zZWN0aW9uIHAge1xuICBtYXJnaW46IDVweCAwIDVweCAwO1xuICBmb250LWZhbWlseTogcm9ib3RvLW1vbm8sc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuLmNhcmRzLXNlY3Rpb24ge1xuICBncmlkLWFyZWE6IGNhcmRzLXNlY3Rpb247XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xufVxuLmNhcmRzLXNlY3Rpb24gLmltZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIG1pbi13aWR0aDogMTUwcHg7XG59XG4uY2FyZHtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZmxleDogMSAxIGNhbGMoNTAlIC0gMXJlbSk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7IFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgYm94LXNoYWRvdyAwLjNzOyBcbn1cbi5jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAxKTsgLyogRW5oYW5jZSBzaGFkb3cgb24gaG92ZXIgKi9cbn1cbi5jYXJkIGgze1xuICBmb250LXNpemU6IDIuM3JlbTtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgY29sb3I6ICNkYjlmOWY7XG59XG4uY2FyZCBwIHtcbiAgZm9udC1mYW1pbHk6IHJvYm90by1tb25vO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cbi5jYXJkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ob21lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4Qiw0Q0FBNEQ7RUFDNUQsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRDQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsNENBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEM7O2dDQUU4QjtFQUM5QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHFCQUFxQjs7QUFFdkI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsd0NBQXdDO0VBQ3hDLDJDQUEyQztBQUM3QztBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLHVDQUF1QyxFQUFFLDRCQUE0QjtBQUN2RTtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogcm9ib3RvLW1vbm87XFxuICBzcmM6IHVybCgnLi4vZm9udHMvUm9ib3RvTW9uby1JdGFsaWMtVmFyaWFibGVGb250X3dnaHQudHRmJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IG1vbTtcXG4gIHNyYzogdXJsKCcuLi9mb250cy9tb20udHRmJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIHNyYzogdXJsKCcuLi9mb250cy9Sb2JvdG8tQmxhY2sudHRmJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBub3JtYWw7XFxufVxcbi5ob21lLXBhZ2Uge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcIndlbGNvbWUtc2VjdGlvbiBkZXNjcmlwdGlvbi1zZWN0aW9uXFxcIlxcbiAgXFxcImNhcmRzLXNlY3Rpb24gIGNhcmRzLXNlY3Rpb25cXFwiO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ud2VsY29tZS1zZWN0aW9uIHtcXG4gIGdyaWQtYXJlYTogd2VsY29tZS1zZWN0aW9uO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBncmV5O1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgdHJhbnNmb3JtOiBza2V3WSgxMGRlZyk7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG4ud2VsY29tZS1zZWN0aW9uIGgxIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxuICBtYXJnaW46IDUwcHggMCAyMHB4IDA7XFxuICBcXG59XFxuLndlbGNvbWUtc2VjdGlvbiBwIHtcXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xcbiAgd29yZC1zcGFjaW5nOiAxNXB4O1xcbiAgbWFyZ2luOiAyNXB4IDAgNjBweCAwO1xcbiAgZm9udC1mYW1pbHk6bW9tLCBzZXJpZjtcXG59XFxuLmRlc2NyaXB0aW9uLXNlY3Rpb24ge1xcbiAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbi1zZWN0aW9uO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gIHRyYW5zZm9ybTogc2tld1koMTBkZWcpO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGdyZXk7XFxuICBmb250LWZhbWlseTogcm9ib3RvLCBzZXJpZjtcXG59XFxuLmRlc2NyaXB0aW9uLXNlY3Rpb24gaDIge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG59XFxuLmRlc2NyaXB0aW9uLXNlY3Rpb24gaDMge1xcbm1hcmdpbjogMTBweCAwIDEwcHggMDtcXG5cXG59XFxuLmRlc2NyaXB0aW9uLXNlY3Rpb24gcCB7XFxuICBtYXJnaW46IDVweCAwIDVweCAwO1xcbiAgZm9udC1mYW1pbHk6IHJvYm90by1tb25vLHNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcbi5jYXJkcy1zZWN0aW9uIHtcXG4gIGdyaWQtYXJlYTogY2FyZHMtc2VjdGlvbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcXG59XFxuLmNhcmRzLXNlY3Rpb24gLmltZyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIG1heC13aWR0aDogMzUwcHg7XFxuICBtaW4td2lkdGg6IDE1MHB4O1xcbn1cXG4uY2FyZHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmbGV4OiAxIDEgY2FsYyg1MCUgLSAxcmVtKTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7IFxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJveC1zaGFkb3cgMC4zczsgXFxufVxcbi5jYXJkOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7IFxcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDEpOyAvKiBFbmhhbmNlIHNoYWRvdyBvbiBob3ZlciAqL1xcbn1cXG4uY2FyZCBoM3tcXG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxuICBjb2xvcjogI2RiOWY5ZjtcXG59XFxuLmNhcmQgcCB7XFxuICBmb250LWZhbWlseTogcm9ib3RvLW1vbm87XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuLmNhcmQgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tZW51LXBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDMwcHg7XG59XG4uYXBwZXRpemVycywubWFpbi1jb3Vyc2VzLC5kZXNzZXJ0cywuYmV2ZXJhZ2Vze1xuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjUpOyBcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJveC1zaGFkb3cgMC4zczsgXG59XG4uYXBwZXRpemVyczpob3ZlciAsLm1haW4tY291cnNlczpob3ZlciAsLmRlc3NlcnRzOmhvdmVyICwuYmV2ZXJhZ2VzOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTsgXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAxKTsgLyogRW5oYW5jZSBzaGFkb3cgb24gaG92ZXIgKi9cbn1cblxuLm1lbnUtcGFnZSBoMntcbiAgZm9udC1zaXplOiAyLjNyZW07XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG59XG4ubWVudS1wYWdlIGgze1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG59XG4ubWVudS1wYWdlIHAge1xuICBmb250LWZhbWlseTogcm9ib3RvLW1vbm87XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuLm1lbnUtcGFnZSBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgZm9udC1zaXplOiAxLjZyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21lbnUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsU0FBUztBQUNYO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLDJDQUEyQztBQUM3QztBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLHVDQUF1QyxFQUFFLDRCQUE0QjtBQUN2RTs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWVudS1wYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMzBweDtcXG59XFxuLmFwcGV0aXplcnMsLm1haW4tY291cnNlcywuZGVzc2VydHMsLmJldmVyYWdlc3tcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjUpOyBcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBib3gtc2hhZG93IDAuM3M7IFxcbn1cXG4uYXBwZXRpemVyczpob3ZlciAsLm1haW4tY291cnNlczpob3ZlciAsLmRlc3NlcnRzOmhvdmVyICwuYmV2ZXJhZ2VzOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjVweCk7IFxcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDEpOyAvKiBFbmhhbmNlIHNoYWRvdyBvbiBob3ZlciAqL1xcbn1cXG5cXG4ubWVudS1wYWdlIGgye1xcbiAgZm9udC1zaXplOiAyLjNyZW07XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG59XFxuLm1lbnUtcGFnZSBoM3tcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbn1cXG4ubWVudS1wYWdlIHAge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90by1tb25vO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcbi5tZW51LXBhZ2Ugc3BhbiB7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hYm91dC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hYm91dC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tbW9tU3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tbW9tU3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuLi9jc3MvY29tbW9tU3R5bGUuY3NzJztcbmltcG9ydCAnLi4vY3NzL2Fib3V0LmNzcyc7XG5cbmltcG9ydCB7IGFib3V0U2VjdGlvbnMsIGFib3V0U2VjdGlvbnNEYXRhIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRlbnRTZWN0aW9ucyB9IGZyb20gJy4vbW9kdWxlcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9BQk9VVCBQQUdFIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIGxldCB0ZWFtZGF0YSA9IFxuZnVuY3Rpb24gY3JlYXRlQ29udGVudEluQWJvdXRQYWdlKGRhdGEpIHtcbiAgbGV0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtc2VjdGlvbicpO1xuICBsZXQgdGVhbUluZGV4ID0gMDtcblxuICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgIGlmICghc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3RlYW0tc2VjdGlvbicpKSB7XG4gICAgICBzZWN0aW9uLmlubmVySFRNTCA9IGA8aDI+JHtkYXRhW2luZGV4XS50aXRsZX08L2gyPlxuICAgICAgPHA+JHtkYXRhW2luZGV4XS5kZXNjcmlwdGlvbn08L3A+IFxuICAgICAgYDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YVtpbmRleF0uZm9yRWFjaCgoaXRlbSxpKSA9PntcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGVhbS1jYXJkJyk7XG4gICAgICAgIFxuICAgICAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgPGltZyBzcmM9XCIke2RhdGFbaW5kZXhdW2ldLmltYWdlfVwiIGFsdD1cIkNoZWZcIj5cbiAgICAgIDxoMz4ke2RhdGFbaW5kZXhdW2ldLnRpdGxlfTwvaDM+XG4gICAgICA8cD4ke2RhdGFbaW5kZXhdW2ldLmRlc2NyaXB0aW9ufTwvcD5cbiAgICBgO1xuICAgICAgc2VjdGlvbi5hcHBlbmQoZGl2KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQWJvdXRQYWdlKCkge1xuICBjcmVhdGVDb250ZW50U2VjdGlvbnMoYWJvdXRTZWN0aW9ucywgJ2NvbnRlbnQnKTtcbiAgY3JlYXRlQ29udGVudEluQWJvdXRQYWdlKGFib3V0U2VjdGlvbnNEYXRhKTtcbn1cblxuXG4iLCJcbmltcG9ydCBzaWduYXR1cmVEaXNoZXMgZnJvbSAnLi4vaW1hZ2VzL3NpZ25hdHVyZS1kaXNoZXMuanBnJztcbmltcG9ydCBzY296eUFyZWEgZnJvbSAnLi4vaW1hZ2VzL2NvenkuanBnJztcbmltcG9ydCBzZXJ2aWNlIGZyb20gJy4uL2ltYWdlcy9zZXJ2aWNlLmpwZyc7XG5cbmV4cG9ydCBsZXQgY2FyZHNEYXRhID0gW1xuICB7XG4gICAgaW1hZ2U6IGAke3NpZ25hdHVyZURpc2hlc31gLFxuICAgIHRpdGxlOiAnT3VyIFNpZ25hdHVyZSBEaXNoZXMnLFxuICAgIGRlc2NyaXB0aW9uOiAnRXhwZXJpZW5jZSBhIHZhcmVpdHkgb2YgZmxhdm9ycyB3aXRoIG91ciBzaWduYXR1cmUgZGlzaGVzLCBtZXRpY3Vsb3VzbHkgY3JhZnRlZCB0byBwZXJmZWN0aW9uLicsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogYCR7c2NvenlBcmVhfWAsXG4gICAgdGl0bGU6ICdDb3p5IEFtYmlhbmNlJyxcbiAgICBkZXNjcmlwdGlvbjogJ1JlbGF4IGluIG91ciBjb3p5IGFuZCBlbGVnYW50IGRpbmluZyBhcmVhLCBkZXNpZ25lZCB0byBwcm92aWRlIGEgY29tZm9ydGFibGUgYW5kIGVuam95YWJsZSBleHBlcmllbmNlLicsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogYCR7c2VydmljZSB9YCxcbiAgICB0aXRsZTogJ0V4Y2VwdGlvbmFsIFNlcnZpY2UnLFxuICAgIGRlc2NyaXB0aW9uOiAnT3VyIGZyaWVuZGx5IGFuZCBhdHRlbnRpdmUgc3RhZmYgYXJlIGhlcmUgdG8gZW5zdXJlIHRoYXQgeW91ciBkaW5pbmcgZXhwZXJpZW5jZSBpcyBub3RoaW5nIHNob3J0IG9mIGV4Y2VwdGlvbmFsLicsXG4gIH1cbl07XG5cbmV4cG9ydCBsZXQgY29udGVudFNlY3Rpb25zID0gWyd3ZWxjb21lLXNlY3Rpb24nLCdkZXNjcmlwdGlvbi1zZWN0aW9uJywnY2FyZHMtc2VjdGlvbiddO1xuXG5leHBvcnQgbGV0IG1lbnVQYWdlU2V0aW9ucyA9IFsnYXBwZXRpemVycycsJ21haW4tY291cnNlcycsJ2Rlc3NlcnRzJywnYmV2ZXJhZ2VzJ107XG5cbmV4cG9ydCBsZXQgbWVudVBhZ2VEYXRhID0gW1xuICB7XG4gICAgdGl0bGU6J0FwcGV0aXplcnMnLFxuICAgIGZvb2RzOltcbiAgICAgIHtcbiAgICAgICAgbmFtZTonQnJ1c2NoZXR0YScsXG4gICAgICAgIGRlc2NyaXB0aW9uOidHcmlsbGVkIGJyZWFkIHRvcHBlZCB3aXRoIGEgbWl4dHVyZSBvZiBmcmVzaCB0b21hdG9lcywgZ2FybGljLCBiYXNpbCwgYW5kIG9saXZlIG9pbC4nLFxuICAgICAgICBwcmljZTonJDguOTknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOidTdHVmZmVkIE11c2hyb29tcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOidNdXNocm9vbXMgZmlsbGVkIHdpdGggYSBibGVuZCBvZiBjaGVlc2VzLCBoZXJicywgYW5kIGJyZWFkY3J1bWJzLCBiYWtlZCB0byBwZXJmZWN0aW9uLicsXG4gICAgICAgIHByaWNlOickOS45OSdcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOidNYWluIENvdXJzZXMnLFxuICAgIGZvb2RzOltcbiAgICAgIHtcbiAgICAgICAgbmFtZTonR3JpbGxlZCBTYWxtb24nLFxuICAgICAgICBkZXNjcmlwdGlvbjonRnJlc2ggc2FsbW9uIGZpbGxldCBncmlsbGVkIGFuZCBzZXJ2ZWQgd2l0aCBhIGxlbW9uLWRpbGwgc2F1Y2UgYW5kIHNlYXNvbmFsIHZlZ2V0YWJsZXMuJyxcbiAgICAgICAgcHJpY2U6JyQxOC45OSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6J1JpYmV5ZSBTdGVhaycsXG4gICAgICAgIGRlc2NyaXB0aW9uOidKdWljeSByaWJleWUgc3RlYWsgY29va2VkIHRvIHlvdXIgbGlraW5nLCBzZXJ2ZWQgd2l0aCBnYXJsaWMgbWFzaGVkIHBvdGF0b2VzIGFuZCBzdGVhbWVkIGJyb2Njb2xpLicsXG4gICAgICAgIHByaWNlOickMjQuOTknXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTonRGVzc2VydHMnLFxuICAgIGZvb2RzOltcbiAgICAgIHtcbiAgICAgICAgbmFtZTonQ2hvY29sYXRlIExhdmEgQ2FrZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOidSaWNoIGNob2NvbGF0ZSBjYWtlIHdpdGggYSBtb2x0ZW4gY2hvY29sYXRlIGNlbnRlciwgc2VydmVkIHdpdGggdmFuaWxsYSBpY2UgY3JlYW0uJyxcbiAgICAgICAgcHJpY2U6JyQ3Ljk5J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTonQ2hlZXNlQ2FrZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOidDcmVhbXkgY2hlZXNlY2FrZSB3aXRoIGEgZ3JhaGFtIGNyYWNrZXIgY3J1c3QsIHRvcHBlZCB3aXRoIGEgc3RyYXdiZXJyeSBnbGF6ZS4nLFxuICAgICAgICBwcmljZTonJDYuOTknXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTonQmV2ZXJhZ2VzJyxcbiAgICBmb29kczpbXG4gICAgICB7XG4gICAgICAgIG5hbWU6J0ZyZXNoIExlbW9uYWRlJyxcbiAgICAgICAgZGVzY3JpcHRpb246J1JlZnJlc2hpbmcgbGVtb25hZGUgbWFkZSB3aXRoIGZyZXNobHkgc3F1ZWV6ZWQgbGVtb25zIGFuZCBhIGhpbnQgb2YgbWludC4nLFxuICAgICAgICBwcmljZTonJDMuOTknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOidFc3ByZXNzbycsXG4gICAgICAgIGRlc2NyaXB0aW9uOidSaWNoIGFuZCBzbW9vdGggZXNwcmVzc28sIG1hZGUgZnJvbSBwcmVtaXVtIGNvZmZlZSBiZWFucy4nLFxuICAgICAgICBwcmljZTonJDIuOTknXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgbGV0IGFib3V0U2VjdGlvbnMgPSBbJ2Fib3V0LXNlY3Rpb24nLCdtaXNzaW9uLXNlY3Rpb24nLCdoaXN0b3J5LXNlY3Rpb24nLCd0ZWFtLXNlY3Rpb24nXTtcbmV4cG9ydCBsZXQgYWJvdXRTZWN0aW9uc0RhdGEgPSBbXG4gIHtcbiAgICB0aXRsZTonQWJvdXQgR291cm1ldCBEZWxpZ2h0ZWQnLFxuICAgIGRlc2NyaXB0aW9uOidXZWxjb21lIHRvIEdvdXJtZXQgRGVsaWdodGVkLCB3aGVyZSBjdWxpbmFyeSBhcnRpc3RyeSBtZWV0cyBleGNlcHRpb25hbCBob3NwaXRhbGl0eS4gT3VyIHJlc3RhdXJhbnQgaXMgZGVkaWNhdGVkIHRvIHByb3ZpZGluZyBhIGRpbmluZyBleHBlcmllbmNlIHRoYXQgZGVsaWdodHMgYWxsIHlvdXIgc2Vuc2VzLidcbiAgfSxcbiAge1xuICAgIHRpdGxlOidPdXIgTWlzc2lvbicsXG4gICAgZGVzY3JpcHRpb246J0F0IEdvdXJtZXQgRGVsaWdodGVkLCBvdXIgbWlzc2lvbiBpcyB0byBvZmZlciBleHF1aXNpdGUgY3Vpc2luZSwgZXhjZXB0aW9uYWwgc2VydmljZSwgYW5kIGEgd2FybSwgaW52aXRpbmcgYXRtb3NwaGVyZS4gV2Ugc3RyaXZlIHRvIGNyZWF0ZSBtZW1vcmFibGUgZGluaW5nIGV4cGVyaWVuY2VzIHRoYXQgYnJpbmcgam95IHRvIG91ciBndWVzdHMuJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6J091ciBIaXN0b3J5JyxcbiAgICBkZXNjcmlwdGlvbjonRm91bmRlZCBpbiAyMDI0LCBHb3VybWV0IERlbGlnaHRlZCBoYXMgcXVpY2tseSBiZWNvbWUgYSBmYXZvcml0ZSBkaW5pbmcgZGVzdGluYXRpb24gaW4gdGhlIGhlYXJ0IG9mIHRoZSBjaXR5LiBPdXIgam91cm5leSBiZWdhbiB3aXRoIGEgcGFzc2lvbiBmb3IgY3VsaW5hcnkgZXhjZWxsZW5jZSBhbmQgYSBjb21taXRtZW50IHRvIHVzaW5nIHRoZSBmaW5lc3QgaW5ncmVkaWVudHMuJ1xuICB9LFxuICBbXG4gICAge1xuICAgICAgaW1hZ2U6Y2VvLFxuICAgICAgdGl0bGU6J0thcm9saW5hIEthYm9vbXAnLFxuICAgICAgZGVzY3JpcHRpb246J1dpdGggb3ZlciAyMCB5ZWFycyBvZiBleHBlcmllbmNlLCBDaGVmIEthcm9saW5hIEthYm9vbXAgYnJpbmdzIGNyZWF0aXZpdHkgYW5kIGV4cGVydGlzZSB0byBvdXIga2l0Y2hlbiwgY3JhZnRpbmcgZGlzaGVzIHRoYXQgYXJlIGJvdGggaW5ub3ZhdGl2ZSBhbmQgZGVsaWNpb3VzLidcbiAgICB9LFxuICAgLFxuICAgIHtcbiAgICAgIGltYWdlOm1hbmFnZXIsXG4gICAgICB0aXRsZTonRWRtb25kIERhbnTDqHMnLFxuICAgICAgZGVzY3JpcHRpb246J091ciBtYW5hZ2VyLCBFZG1vbmQgRGFudMOocywgZW5zdXJlcyB0aGF0IGV2ZXJ5IGd1ZXN0IGVuam95cyBhIHNlYW1sZXNzIGFuZCBtZW1vcmFibGUgZGluaW5nIGV4cGVyaWVuY2Ugd2l0aCBoZXIgaW1wZWNjYWJsZSBhdHRlbnRpb24gdG8gZGV0YWlsLidcbiAgICB9LFxuICAgLFxuICBcbiAgXSxcbl07XG5cbmltcG9ydCBjZW8gZnJvbSAnLi4vaW1hZ2VzL2Nlby5qcGcnO1xuaW1wb3J0IG1hbmFnZXIgZnJvbSAnLi4vaW1hZ2VzL21hbmFnZXIuanBnJzsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZW50U2VjdGlvbnMgfSBmcm9tIFwiLi9tb2R1bGVzXCI7XG5pbXBvcnQgeyBtZW51UGFnZVNldGlvbnMsIG1lbnVQYWdlRGF0YSB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgJy4uL2Nzcy9jb21tb21TdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9jc3MvbWVudS5jc3MnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9NRU5VLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5mdW5jdGlvbiBwdXRDb250ZW50SW5NZW51UGFnZShkYXRhKSB7XG4gIGxldCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LXNlY3Rpb24nKTtcbiAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICBzZWN0aW9uLmlubmVySFRNTCA9IGA8aDI+JHtkYXRhW2luZGV4XS50aXRsZX08L2gyPlxuICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAgIDxoMz4ke2RhdGFbaW5kZXhdLmZvb2RzWzBdLm5hbWV9PC9oMz5cbiAgICAgIDxwPiR7ZGF0YVtpbmRleF0uZm9vZHNbMF0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgPHNwYW4+JHtkYXRhW2luZGV4XS5mb29kc1swXS5wcmljZX08L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxuICAgICAgPGgzPiR7ZGF0YVtpbmRleF0uZm9vZHNbMV0ubmFtZX08L2gzPlxuICAgICAgPHA+JHtkYXRhW2luZGV4XS5mb29kc1sxXS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8c3Bhbj4ke2RhdGFbaW5kZXhdLmZvb2RzWzFdLnByaWNlfTwvc3Bhbj5cbiAgICA8L2Rpdj5gO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTWVudVBhZ2UoKSB7XG4gIGNyZWF0ZUNvbnRlbnRTZWN0aW9ucyhtZW51UGFnZVNldGlvbnMsICdjb250ZW50Jyk7XG4gIHB1dENvbnRlbnRJbk1lbnVQYWdlKG1lbnVQYWdlRGF0YSk7XG59XG5cbiIsIlxuLy8gdGhpcyBmdW50aW9uIGNyZWF0ZXMgZGlmZnJlbnQgc2VjdGlvbiBpbiBjb250ZW50IGNvbnRhaW5lclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnRTZWN0aW9ucyhjb250ZW50c2VjQXJyYXksIGlkKSB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICBjb250ZW50c2VjQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtc2VjdGlvbicpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChlbGVtZW50KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICB9KTtcbn1cblxuLy8gdGhpcyBmdW5jdGlvbiBwdXRzIGNvbnRlbnQgaW5zaWRlIHRoZSB3ZWxjb21lIHNlY3Rpb24gb2YgdGhlIGNvbnRlbnQgY29udGFpbmVyIGZvciBob21lIHBhZ2VcbmV4cG9ydCBmdW5jdGlvbiBwdXRzQ29udGVudEluV2VsY29tZVNlY3Rpb24oKSB7XG4gIGxldCB3ZWxjb21lU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWxjb21lLXNlY3Rpb24nKTtcblxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvIEdvdXJtZXQgRGVsaWdodGVkJztcblxuICBsZXQgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBgWW91ciBjdWxuYXJ5IGpvdXJuZXkgYmVnaW5zIGhlcmUhYDtcblxuICB3ZWxjb21lU2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHdlbGNvbWVTZWN0aW9uLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG59XG5cblxuLy8gdGhpcyBmdW5jdGlvbiBwdXRzIGNvbnRlbnQgaW5zaWRlIHRoZSBkZXNjcmlwdGlvbiBzZWN0aW9uIG9mIHRoZSBjb250ZW50IGNvbnRhaW5lclxuZXhwb3J0IGZ1bmN0aW9uIHB1dHNDb250ZW50RGVzY3JpcHRpb25TZWN0aW9uKCkge1xuICBsZXQgZGVzY3JpcHRpb25TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLXNlY3Rpb24nKTtcbiAgZGVzY3JpcHRpb25TZWN0aW9uLmlubmVySFRNTCA9IGA8aDI+V2UgTG92ZSBUbyBTZXJ2ZSBZb3UuLi48L2gyPjxoMz5CbGVzcyB1cyB3aXRoIGEgY2hhbmNlPC9oMz5cbiAgICAgIDxwPkF0IEdvdXJtZXQgRGVsaWdodGVkLCB3ZSBvZmZlciBhbiB1bmZvcmdldHRhYmxlIGRpbm5pbmcgZXhwZXJpZW5jZSxjb21iaW5pbmcgZXhxdWlzaXRlIGN1aXNpbmUsIGV4Y2VwdGlvbmFsIHNlcnZpY2UsIGFuZCBhIHdhcm0sIGludml0aW5nIGF0bW9zcGhlcmUuIE91ciBjaGVmcyB1c2V0aGUgZmluZXN0IGluZ3JlZGllbnRzIHRvIGNyZWF0ZSBkaXNoZXMgdGhhdCB3aWxsIHRhbnRhbGl6ZSB5b3VyIHRhc3RlIGJ1ZHMgYW5kIGxlYXZlIHlvdSBjcmF2aW5nIGZvciBtb3JlLlxuICAgICAgPC9wPmA7XG59XG5cblxuXG4vLyB0aGlzIGZ1bmN0aW9uIGNyZWF0ZXMgY2FyZHMgdGhhdCBoYXMgYW4gaW1hZ2UgLGEgdGl0bGUgYW5kIGRlc2NyaXB0aW9uXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyZHMoZGF0YSkge1xuICBsZXQgY2FyZHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzLXNlY3Rpb24nKTtcbiAgZGF0YS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGxldCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSBlbGVtZW50LmltYWdlO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGU7XG5cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBlbGVtZW50LmRlc2NyaXB0aW9uO1xuXG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGNhcmRzU2VjdGlvbi5hcHBlbmRDaGlsZChjYXJkQ29udGFpbmVyKTtcblxuICB9KTtcbn1cblxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGVudFNlY3Rpb25zLCBwdXRzQ29udGVudEluV2VsY29tZVNlY3Rpb24sIHB1dHNDb250ZW50RGVzY3JpcHRpb25TZWN0aW9uLCBjcmVhdGVDYXJkcyB9IGZyb20gXCIuL21vZHVsZXNcIjtcbmltcG9ydCB7IGNhcmRzRGF0YSwgY29udGVudFNlY3Rpb25zIH0gZnJvbSBcIi4vZGF0YVwiXG5pbXBvcnQgJy4uL2Nzcy9jb21tb21TdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9jc3MvaG9tZS5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbFBhZ2VMb2FkKCkge1xuICBjcmVhdGVDb250ZW50U2VjdGlvbnMoY29udGVudFNlY3Rpb25zLCdjb250ZW50Jyk7XG4gIHB1dHNDb250ZW50SW5XZWxjb21lU2VjdGlvbigpO1xuICBwdXRzQ29udGVudERlc2NyaXB0aW9uU2VjdGlvbigpO1xuICBjcmVhdGVDYXJkcyhjYXJkc0RhdGEpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaW5pdGlhbFBhZ2VMb2FkIH0gZnJvbSAnLi9wYWdlTG9hZCc7XG5pbXBvcnQgeyBnZW5lcmF0ZU1lbnVQYWdlIH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IGdlbmVyYXRlQWJvdXRQYWdlIH0gZnJvbSAnLi9hYm91dCc7XG5cbi8vIGl0cyBpbml0aWFsbHkgbG9hZHMgdGhlIHBhZ2Ugc3RhbmRzIG9uIEhvbWUgcGFnZVxuaW5pdGlhbFBhZ2VMb2FkKCk7XG5sZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb250ZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZScpO1xuXG4vL3NlbGVjdHMgdGhlIEhvbWUgYnRuXG5sZXQgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLWJ0bicpO1xuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICBpbml0aWFsUGFnZUxvYWQoKTtcbiAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXBhZ2UnKTtcbiAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdhYm91dC1wYWdlJyk7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaG9tZS1wYWdlJyk7XG59KTtcblxuLy8gc2VsZWN0cyB0aGUgTWVudSBidG5cbmxldCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYnRuJyk7XG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gIGdlbmVyYXRlTWVudVBhZ2UoKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdtZW51LXBhZ2UnKTtcbiAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdob21lLXBhZ2UnKTtcbiAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdhYm91dC1wYWdlJyk7XG59KTtcblxuXG4vLyBzZWxlY3RzIHRoZSBhYm91dCBwYWdlIFxubGV0IGFib3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LWJ0bicpO1xuYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgZ2VuZXJhdGVBYm91dFBhZ2UoKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdhYm91dC1wYWdlJyk7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1wYWdlJyk7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnaG9tZS1wYWdlJyk7XG4gIFxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9