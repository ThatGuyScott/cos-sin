(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        // program options
        this.rad = true;
        this.invert_y = true;
        this.grid_size = 100;
        this.animation_delay = 2;
        // background_color = 'black';
        // background_color = '#252525';
        this.background_color = '#002525';
        this.grid_color = 'darkgrey';
        this.line_color = 'lightgrey';
        this.text_color = 'darkgrey';
        this.center_x = 0;
        this.center_y = 0;
        this.unit_circle_size = 0;
        this.angle = 0;
        this.x = 0;
        this.y = 0;
        this.t = 0;
        this.wave_y = [];
        this.wave_add_interval = 3;
        this.wave_add_counter = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.canvas.nativeElement.width = window.innerWidth;
        this.canvas.nativeElement.height = window.innerHeight;
        this.center_x = this.canvas.nativeElement.width / 2;
        this.center_y = this.canvas.nativeElement.height / 2;
        this.unit_circle_size = this.center_y - 50;
        this.ctx.font = '18px Arial';
        this.animate();
    };
    AppComponent.prototype.animate = function () {
        var _this = this;
        setInterval(function () {
            // rad
            _this.angle += .001;
            if (_this.angle >= 2 * Math.PI) {
                _this.angle = 0;
                _this.wave_y = [];
            }
            _this.draw();
        }, this.animation_delay);
    };
    AppComponent.prototype.draw = function () {
        this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
        this.drawGridPlane(this.unit_circle_size / this.grid_size);
        this.drawUnitCircle_radians();
        // this.drawUnitCircle_degrees();
        this.drawAngle();
        // this.drawWave();
        this.printText();
    };
    AppComponent.prototype.drawGridPlane = function (grid_size) {
        this.ctx.fillStyle = this.background_color;
        this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        this.ctx.fillStyle = this.grid_color;
        // draw x +
        for (var x1 = this.center_x; x1 < this.canvas.nativeElement.width; x1 += grid_size) {
            this.ctx.fillRect(x1, this.center_y, 1, 1);
        }
        // draw x2 -
        for (var x2 = this.center_x; x2 > 0; x2 -= grid_size) {
            this.ctx.fillRect(x2, this.center_y, 1, 1);
        }
        // draw y +
        for (var y = this.center_y; y < this.canvas.nativeElement.height; y += grid_size) {
            this.ctx.fillRect(this.center_x, y, 1, 1);
        }
        // draw y -
        for (var y = this.center_y; y > 0; y -= grid_size) {
            this.ctx.fillRect(this.center_x, y, 1, 1);
        }
    };
    AppComponent.prototype.drawUnitCircle_radians = function () {
        this.ctx.fillStyle = this.grid_color;
        for (var angle = 0; angle < (2 * Math.PI); angle += .01) {
            var x = this.center_x + Math.cos(angle) * this.unit_circle_size;
            var y = this.center_y + Math.sin(angle) * this.unit_circle_size;
            this.ctx.fillRect(x, y, 1, 1);
        }
    };
    AppComponent.prototype.drawUnitCircle_degrees = function () {
        // we draw 60 dots (360 / 6 = 60)
        for (var angle = 0; angle < 360; angle += 6) {
            var x = this.center_x + Math.cos(angle * Math.PI / 180) * this.unit_circle_size;
            var y = this.center_y + Math.sin(angle * Math.PI / 180) * this.unit_circle_size;
            this.ctx.fillStyle = this.grid_color;
            this.ctx.fillRect(x, y, 1, 1);
        }
    };
    AppComponent.prototype.drawAngle = function () {
        this.ctx.fillStyle = this.line_color;
        // rad
        this.x = this.center_x + Math.cos(this.angle) * this.unit_circle_size;
        this.y = this.center_y + Math.sin(this.angle) * this.unit_circle_size;
        this.t = this.center_x + Math.tan(this.angle) * this.unit_circle_size;
        this.ctx.strokeStyle = this.line_color;
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(this.center_x, this.center_y);
        // inverts they y axis for counter clockwise rotation
        // if (this.invert_y) {
        this.ctx.lineTo(this.x, this.canvas.nativeElement.height - this.y); // y=0 at bottom of screen
        // } else {
        //   this.ctx.lineTo(this.x, this.y); // y=0 at top of screen
        // }
        this.ctx.lineTo(this.x, this.center_y);
        this.ctx.lineTo(this.center_x, this.center_y);
        this.ctx.stroke();
    };
    AppComponent.prototype.drawWave = function () {
        this.ctx.fillStyle = this.line_color;
        var wy = (this.center_y + Math.sin(this.angle) * this.unit_circle_size).toFixed(0);
        if (this.wave_add_counter == this.wave_add_interval) {
            // @ts-ignore
            this.wave_y.push(this.canvas.nativeElement.height - wy);
            this.wave_add_counter = 0;
        }
        else {
            this.wave_add_counter++;
        }
        // draw the wave
        for (var i = 0; i < this.wave_y.length; i++) {
            this.ctx.fillRect(i, this.wave_y[i], 1, 1);
        }
    };
    AppComponent.prototype.printText = function () {
        this.ctx.fillStyle = this.text_color;
        var tx = 20;
        var ty = 20;
        this.ctx.fillText("Angle:" + this.angle.toFixed(2) + " rad | " + (this.angle * 180 / Math.PI).toFixed(2) + " deg", tx, ty);
        ty += 25;
        this.ctx.fillText("Cos " + Math.cos(this.angle).toFixed(2), tx, ty);
        ty += 25;
        this.ctx.fillText("Sin " + Math.sin(this.angle).toFixed(2), tx, ty);
        ty += 25;
        this.ctx.fillText("Tan " + Math.tan(this.angle).toFixed(2), tx, ty);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "canvas", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            // templateUrl: './app.component.html',
            template: "\n    <canvas #canvas></canvas>",
            styles: ["canvas { position: absolute;top: 0px;left: 0px;margin: 0px;padding: 0px; }"]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/owner/data/repo/cos-sin/math/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map