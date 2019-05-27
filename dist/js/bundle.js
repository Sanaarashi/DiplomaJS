/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/formdata-polyfill/formdata.min.js":
/*!********************************************************!*\
  !*** ./node_modules/formdata-polyfill/formdata.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {;(function(){var k;function m(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var p="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},q="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function r(){r=function(){};q.Symbol||(q.Symbol=u)}function v(a,b){this.s=a;p(this,"description",{configurable:!0,writable:!0,value:b})}
v.prototype.toString=function(){return this.s};var u=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new v("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();function w(){r();var a=q.Symbol.iterator;a||(a=q.Symbol.iterator=q.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&p(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return x(m(this))}});w=function(){}}
function x(a){w();a={next:a};a[q.Symbol.iterator]=function(){return this};return a}function y(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:m(a)}}var z;if("function"==typeof Object.setPrototypeOf)z=Object.setPrototypeOf;else{var A;a:{var B={v:!0},C={};try{C.__proto__=B;A=C.v;break a}catch(a){}A=!1}z=A?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var D=z;
function E(){this.h=!1;this.c=null;this.o=void 0;this.b=1;this.m=this.w=0;this.g=null}function F(a){if(a.h)throw new TypeError("Generator is already running");a.h=!0}E.prototype.i=function(a){this.o=a};E.prototype.j=function(a){this.g={A:a,B:!0};this.b=this.w||this.m};E.prototype["return"]=function(a){this.g={"return":a};this.b=this.m};function G(a,b,c){a.b=c;return{value:b}}function H(a){this.C=a;this.l=[];for(var b in a)this.l.push(b);this.l.reverse()}function I(a){this.a=new E;this.D=a}
I.prototype.i=function(a){F(this.a);if(this.a.c)return J(this,this.a.c.next,a,this.a.i);this.a.i(a);return K(this)};function L(a,b){F(a.a);var c=a.a.c;if(c)return J(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.a["return"]);a.a["return"](b);return K(a)}I.prototype.j=function(a){F(this.a);if(this.a.c)return J(this,this.a.c["throw"],a,this.a.i);this.a.j(a);return K(this)};
function J(a,b,c,d){try{var e=b.call(a.a.c,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.a.h=!1,e;var f=e.value}catch(g){return a.a.c=null,a.a.j(g),K(a)}a.a.c=null;d.call(a.a,f);return K(a)}function K(a){for(;a.a.b;)try{var b=a.D(a.a);if(b)return a.a.h=!1,{value:b.value,done:!1}}catch(c){a.a.o=void 0,a.a.j(c)}a.a.h=!1;if(a.a.g){b=a.a.g;a.a.g=null;if(b.B)throw b.A;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function M(a){this.next=function(b){return a.i(b)};this["throw"]=function(b){return a.j(b)};this["return"]=function(b){return L(a,b)};w();this[Symbol.iterator]=function(){return this}}function N(a,b){var c=new M(new I(b));D&&D(c,a.prototype);return c}
if("function"===typeof Blob&&("undefined"===typeof FormData||!FormData.prototype.keys)){var O=function(a,b){for(var c=0;c<a.length;c++)b(a[c])},P=function(a,b,c){return b instanceof Blob?[String(a),b,void 0!==c?c+"":"string"===typeof b.name?b.name:"blob"]:[String(a),String(b)]},Q=function(a,b){if(a.length<b)throw new TypeError(b+" argument required, but only "+a.length+" present.");},S=function(a){var b=y(a);a=b.next().value;b=b.next().value;a instanceof Blob&&(a=new File([a],b,{type:a.type,lastModified:a.lastModified}));
return a},T="object"===typeof window?window:"object"===typeof self?self:this,U=T.FormData,V=T.XMLHttpRequest&&T.XMLHttpRequest.prototype.send,W=T.Request&&T.fetch,X=T.navigator&&T.navigator.sendBeacon;r();var Y=T.Symbol&&Symbol.toStringTag;Y&&(Blob.prototype[Y]||(Blob.prototype[Y]="Blob"),"File"in T&&!File.prototype[Y]&&(File.prototype[Y]="File"));try{new File([],"")}catch(a){T.File=function(b,c,d){b=new Blob(b,d);d=d&&void 0!==d.lastModified?new Date(d.lastModified):new Date;Object.defineProperties(b,
{name:{value:c},lastModifiedDate:{value:d},lastModified:{value:+d},toString:{value:function(){return"[object File]"}}});Y&&Object.defineProperty(b,Y,{value:"File"});return b}}r();w();var Z=function(a){this.f=Object.create(null);if(!a)return this;var b=this;O(a.elements,function(c){if(c.name&&!c.disabled&&"submit"!==c.type&&"button"!==c.type)if("file"===c.type){var d=c.files&&c.files.length?c.files:[new File([],"",{type:"application/octet-stream"})];O(d,function(e){b.append(c.name,e)})}else"select-multiple"===
c.type||"select-one"===c.type?O(c.options,function(e){!e.disabled&&e.selected&&b.append(c.name,e.value)}):"checkbox"===c.type||"radio"===c.type?c.checked&&b.append(c.name,c.value):(d="textarea"===c.type?c.value.replace(/\r\n/g,"\n").replace(/\n/g,"\r\n"):c.value,b.append(c.name,d))})};k=Z.prototype;k.append=function(a,b,c){Q(arguments,2);var d=y(P.apply(null,arguments));a=d.next().value;b=d.next().value;c=d.next().value;d=this.f;d[a]||(d[a]=[]);d[a].push([b,c])};k["delete"]=function(a){Q(arguments,
1);delete this.f[String(a)]};k.entries=function b(){var c=this,d,e,f,g,h,t;return N(b,function(l){switch(l.b){case 1:d=c.f,f=new H(d);case 2:var n;a:{for(n=f;0<n.l.length;){var R=n.l.pop();if(R in n.C){n=R;break a}}n=null}if(null==(e=n)){l.b=0;break}g=y(d[e]);h=g.next();case 5:if(h.done){l.b=2;break}t=h.value;return G(l,[e,S(t)],6);case 6:h=g.next(),l.b=5}})};k.forEach=function(b,c){Q(arguments,1);for(var d=y(this),e=d.next();!e.done;e=d.next()){var f=y(e.value);e=f.next().value;f=f.next().value;
b.call(c,f,e,this)}};k.get=function(b){Q(arguments,1);var c=this.f;b=String(b);return c[b]?S(c[b][0]):null};k.getAll=function(b){Q(arguments,1);return(this.f[String(b)]||[]).map(S)};k.has=function(b){Q(arguments,1);return String(b)in this.f};k.keys=function c(){var d=this,e,f,g,h,t;return N(c,function(l){1==l.b&&(e=y(d),f=e.next());if(3!=l.b){if(f.done){l.b=0;return}g=f.value;h=y(g);t=h.next().value;return G(l,t,3)}f=e.next();l.b=2})};k.set=function(c,d,e){Q(arguments,2);var f=P.apply(null,arguments);
this.f[f[0]]=[[f[1],f[2]]]};k.values=function d(){var e=this,f,g,h,t,l;return N(d,function(n){1==n.b&&(f=y(e),g=f.next());if(3!=n.b){if(g.done){n.b=0;return}h=g.value;t=y(h);t.next();l=t.next().value;return G(n,l,3)}g=f.next();n.b=2})};Z.prototype._asNative=function(){for(var d=new U,e=y(this),f=e.next();!f.done;f=e.next()){var g=y(f.value);f=g.next().value;g=g.next().value;d.append(f,g)}return d};Z.prototype._blob=function(){for(var d="----formdata-polyfill-"+Math.random(),e=[],f=y(this),g=f.next();!g.done;g=
f.next()){var h=y(g.value);g=h.next().value;h=h.next().value;e.push("--"+d+"\r\n");h instanceof Blob?e.push('Content-Disposition: form-data; name="'+g+'"; filename="'+h.name+'"\r\n',"Content-Type: "+(h.type||"application/octet-stream")+"\r\n\r\n",h,"\r\n"):e.push('Content-Disposition: form-data; name="'+g+'"\r\n\r\n'+h+"\r\n")}e.push("--"+d+"--");return new Blob(e,{type:"multipart/form-data; boundary="+d})};Z.prototype[Symbol.iterator]=function(){return this.entries()};Z.prototype.toString=function(){return"[object FormData]"};
Y&&(Z.prototype[Y]="FormData");if(V){var aa=T.XMLHttpRequest.prototype.setRequestHeader;T.XMLHttpRequest.prototype.setRequestHeader=function(d,e){"content-type"===d.toLowerCase()&&(this.u=!0);return aa.call(this,d,e)};T.XMLHttpRequest.prototype.send=function(d){d instanceof Z?(d=d._blob(),this.u||this.setRequestHeader("Content-Type",d.type),V.call(this,d)):V.call(this,d)}}if(W){var ba=T.fetch;T.fetch=function(d,e){e&&e.body&&e.body instanceof Z&&(e.body=e.body._blob());return ba.call(this,d,e)}}X&&
(T.navigator.sendBeacon=function(d,e){e instanceof Z&&(e=e._asNative());return X.call(this,d,e)});T.FormData=Z};
})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/nodelist-foreach-polyfill/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/nodelist-foreach-polyfill/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodelist-foreach-polyfill */ "./node_modules/nodelist-foreach-polyfill/index.js");
/* harmony import */ var nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formdata_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formdata-polyfill */ "./node_modules/formdata-polyfill/formdata.min.js");
/* harmony import */ var formdata_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formdata_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parts_calc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/calc */ "./src/js/parts/calc.js");
/* harmony import */ var _parts_sizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/sizes */ "./src/js/parts/sizes.js");
/* harmony import */ var _parts_modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/modals */ "./src/js/parts/modals.js");
/* harmony import */ var _parts_moreBlocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/moreBlocks */ "./src/js/parts/moreBlocks.js");
/* harmony import */ var _parts_mainSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/mainSlider */ "./src/js/parts/mainSlider.js");
/* harmony import */ var _parts_feedbackSlider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parts/feedbackSlider */ "./src/js/parts/feedbackSlider.js");
/* harmony import */ var _parts_accordeon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parts/accordeon */ "./src/js/parts/accordeon.js");
/* harmony import */ var _parts_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parts/filter */ "./src/js/parts/filter.js");










window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  Object(_parts_accordeon__WEBPACK_IMPORTED_MODULE_8__["accordeon"])();
  Object(_parts_calc__WEBPACK_IMPORTED_MODULE_2__["calculate"])();
  Object(_parts_filter__WEBPACK_IMPORTED_MODULE_9__["filterBlock"])();
  Object(_parts_sizes__WEBPACK_IMPORTED_MODULE_3__["sizes"])();
  Object(_parts_modals__WEBPACK_IMPORTED_MODULE_4__["showAllModals"])();
  Object(_parts_moreBlocks__WEBPACK_IMPORTED_MODULE_5__["moreBlocks"])();
  Object(_parts_mainSlider__WEBPACK_IMPORTED_MODULE_6__["mainSlider"])();
  Object(_parts_feedbackSlider__WEBPACK_IMPORTED_MODULE_7__["feedbackSlider"])();
});

/***/ }),

/***/ "./src/js/parts/accordeon.js":
/*!***********************************!*\
  !*** ./src/js/parts/accordeon.js ***!
  \***********************************/
/*! exports provided: accordeon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accordeon", function() { return accordeon; });
var accordeon = function accordeon() {
  var aHeadings = document.querySelectorAll('.accordion-heading'),
      aBlocks = document.querySelectorAll('.accordion-block'),
      target;
  aBlocks.forEach(function (elem) {
    elem.style.display = 'none';
  });

  var showAnswer = function showAnswer(target) {
    aHeadings.forEach(function (elem) {
      elem.classList.remove('ui-accordion-header-active');
    });
    aBlocks.forEach(function (elem) {
      elem.style.display = 'none';
    });
    target.classList.add('ui-accordion-header-active');
    target.nextElementSibling.style.display = 'block';
    target.nextElementSibling.classList.add('animated');
    target.nextElementSibling.classList.add('fadeInDown');
  };

  document.body.addEventListener('click', function (event) {
    target = event.target;

    if (target.classList.contains('accordion-heading')) {
      showAnswer(target);
    }

    if (target.parentElement.classList.contains('accordion-heading')) {
      showAnswer(target.parentElement);
    }
  });
};

/***/ }),

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! exports provided: calculate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculate", function() { return calculate; });
var calculate = function calculate() {
  var calc = document.querySelector('.calc'),
      size = document.querySelector('#size'),
      material = document.querySelector('#material'),
      options = document.querySelector('#options'),
      promocode = document.querySelector('.promocode'),
      calcPrice = document.querySelector('.calc-price');
  var calcValue, sizeVal, matVal, optVal;
  calc.addEventListener('change', function () {
    var discount = false;
    sizeVal = +size.options[size.selectedIndex].value;
    matVal = +material.options[material.selectedIndex].value;
    optVal = +options.options[options.selectedIndex].value;

    if (sizeVal > 0 && matVal > 0) {
      if (optVal > 0) {
        calcValue = sizeVal + matVal + optVal;
      } else {
        calcValue = sizeVal + matVal;
      }
    }

    if (promocode.value.trim() == 'IWANTPOPART') {
      discount = true;
    }

    if (discount) {
      calcPrice.innerText = calcValue - calcValue / 100 * 30;
    } else {
      calcPrice.innerText = calcValue;
    }

    if (sizeVal == undefined || matVal == undefined || sizeVal == 0 || matVal == 0) {
      calcPrice.innerText = "0";
    }
  });
};

/***/ }),

/***/ "./src/js/parts/feedbackSlider.js":
/*!****************************************!*\
  !*** ./src/js/parts/feedbackSlider.js ***!
  \****************************************/
/*! exports provided: feedbackSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackSlider", function() { return feedbackSlider; });
var feedbackSlider = function feedbackSlider() {
  var fSlides = document.body.querySelectorAll('.feedback-slider-item'),
      nextSlBtn = document.body.querySelector('.main-next-btn'),
      prevSlBtn = document.body.querySelector('.main-prev-btn'),
      fSlideIndex = 1;

  var showFSlide = function showFSlide(n) {
    fSlides.forEach(function (elem) {
      elem.style.display = 'none';
    });

    if (n > fSlides.length) {
      fSlideIndex = 1;
    } else if (n < 1) {
      fSlideIndex = fSlides.length;
    }

    fSlides[fSlideIndex - 1].style.display = 'block';
    fSlides[fSlideIndex - 1].classList.add('animated');
    fSlides[fSlideIndex - 1].classList.add('slideInLeft');
  };

  var showNextFSlide = function showNextFSlide() {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    showFSlide(fSlideIndex += n);
  };

  nextSlBtn.addEventListener('click', function () {
    showNextFSlide(1);
  });
  prevSlBtn.addEventListener('click', function () {
    showNextFSlide(-1);
  });
  showFSlide(fSlideIndex);
  setInterval(showNextFSlide, 4000);
};

/***/ }),

/***/ "./src/js/parts/filter.js":
/*!********************************!*\
  !*** ./src/js/parts/filter.js ***!
  \********************************/
/*! exports provided: filterBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterBlock", function() { return filterBlock; });
var filterBlock = function filterBlock() {
  var portfolio = document.querySelector('#portfolio'),
      portfolioBlock = document.querySelectorAll('.portfolio-block'),
      btns = portfolio.querySelectorAll('li'),
      noPortfolio = document.querySelector('.portfolio-no');

  var filterSomeBlocks = function filterSomeBlocks(target, active) {
    portfolioBlock.forEach(function (elem) {
      elem.style.display = 'none';
    });
    noPortfolio.style.display = 'none';
    btns.forEach(function (elem) {
      if (elem.classList.contains('active')) elem.classList.remove('active');
    });
    target.classList.add('active');
    portfolioBlock.forEach(function (elem) {
      if (elem.classList.contains(active)) {
        elem.style.display = 'block';
      }

      if (active == 'grandmother' || active == 'granddad') {
        noPortfolio.style.display = 'block';
      }
    });
  };

  portfolio.addEventListener('click', function (event) {
    var target = event.target;

    if (target.tagName == "LI") {
      filterSomeBlocks(target, target.className);
    }
  });
};

/***/ }),

/***/ "./src/js/parts/mainSlider.js":
/*!************************************!*\
  !*** ./src/js/parts/mainSlider.js ***!
  \************************************/
/*! exports provided: mainSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainSlider", function() { return mainSlider; });
var mainSlider = function mainSlider() {
  var mSliderItems = document.body.querySelectorAll('.main-slider-item'),
      mSlideIndex = 1;

  var showNextMSlide = function showNextMSlide() {
    mSliderItems.forEach(function (elem) {
      elem.style.display = 'none';
    });
    mSliderItems[mSlideIndex - 1].style.display = 'block';
    mSliderItems[mSlideIndex - 1].classList.add('animated');
    mSliderItems[mSlideIndex - 1].classList.add('fadeInDown');
    mSlideIndex++;
    if (mSlideIndex > mSliderItems.length) mSlideIndex = 1;
  };

  showNextMSlide();
  setInterval(showNextMSlide, 4500);
};

/***/ }),

/***/ "./src/js/parts/modals.js":
/*!********************************!*\
  !*** ./src/js/parts/modals.js ***!
  \********************************/
/*! exports provided: showAllModals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAllModals", function() { return showAllModals; });
var showAllModals = function showAllModals() {
  var consultation = document.querySelector('.popup-consultation'),
      design = document.querySelector('.popup-design'),
      giftBtn = document.querySelector('.fixed-gift'),
      giftModal = document.querySelector('.popup-gift'),
      isABtnPressed = false,
      isModalActive = false;

  var showModal = function showModal(target, modalOnOff) {
    var display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'block';
    var overflow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'hidden';
    var giftButton = arguments.length > 4 ? arguments[4] : undefined;
    if (giftButton) giftBtn.style.display = giftButton;
    target.style.display = display;
    document.body.style.overflow = overflow;
    isModalActive = modalOnOff;
  };

  var timer = function timer() {
    if (isModalActive == false) {
      showModal(consultation, true, 'block', 'hidden');
    }
  };

  document.body.addEventListener('click', function (event) {
    var target = event.target;

    if (target.classList.contains('button-consultation')) {
      showModal(consultation, true, 'block', 'hidden');
    } else if (target.classList.contains('popup-close') || target.classList.contains('popup-consultation')) {
      showModal(consultation, false, 'none', '');
    }

    if (target.classList.contains('button-design')) {
      showModal(design, true, 'block', 'hidden');
    } else if (target.classList.contains('popup-design') || target.classList.contains('popup-close')) {
      showModal(design, false, 'none', '');
    }

    if (target.classList.contains('fixed-gift')) {
      showModal(giftModal, true, 'block', 'hidden', 'none');
    } else if (target.classList.contains('popup-gift') || target.classList.contains('popup-close')) {
      showModal(giftModal, false, 'none', '');
    }

    if (target.tagName == 'BUTTON') {
      isABtnPressed = true;
    }
  });
  window.addEventListener('scroll', function () {
    if (!isABtnPressed && document.documentElement.scrollTop > 12000) {
      showModal(giftModal, true, 'block', 'hidden', 'none');
    }
  });
  setTimeout(timer, 60000);
};

/***/ }),

/***/ "./src/js/parts/moreBlocks.js":
/*!************************************!*\
  !*** ./src/js/parts/moreBlocks.js ***!
  \************************************/
/*! exports provided: moreBlocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreBlocks", function() { return moreBlocks; });
var moreBlocks = function moreBlocks() {
  var moreBlocks = document.body.querySelectorAll('.hidden-lg');
  document.body.addEventListener('click', function (event) {
    var target = event.target;

    if (target.classList.contains('button-styles')) {
      target.style.display = 'none';
      moreBlocks.forEach(function (elem) {
        elem.className = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1';
      });
    }
  });
};

/***/ }),

/***/ "./src/js/parts/sizes.js":
/*!*******************************!*\
  !*** ./src/js/parts/sizes.js ***!
  \*******************************/
/*! exports provided: sizes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizes", function() { return sizes; });
var sizes = function sizes() {
  var size = document.querySelectorAll('[class^=size-]');
  document.body.addEventListener('click', function (event) {
    var target = event.target;

    if (target.classList.contains('size-1')) {
      target.style.backgroundColor = 'red';
    }
  });
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map