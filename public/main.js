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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: 'signin', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'chat', canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]], component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n<!-- <app-chat></app-chat> -->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'simple-chat-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _chat_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chat/message.service */ "./src/app/chat/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"],
                _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__["SigninComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"],
            ],
            providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _chat_message_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"], _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/signin']);
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        this.hasLoggedIn = false;
        this.apiUrl = 'https://simple-chat-app-bookboost.herokuapp.com/api';
        this.usersUrl = 'https://simple-chat-app-bookboost.herokuapp.com/api/users';
        this.authUrl = 'https://simple-chat-app-bookboost.herokuapp.com/api/authenticate';
        this.token = '';
    }
    AuthService.prototype.ngOnInit = function () {
    };
    AuthService.prototype.ngOnDestroy = function () {
        this.signupSubscribtion.unsubscribe();
    };
    AuthService.prototype.signupUser = function (email, password, name) {
        var _this = this;
        var signupBody = { email: email, password: password, name: name };
        this.signupSubscribtion = this.sendCredentials(signupBody).subscribe(function (user) {
            _this.token = user['token'];
            _this.activeUserId = user['id'];
            _this.hasLoggedIn = true;
            _this.router.navigate(['/chat']);
        }, function (error) {
            console.log(error);
        });
    };
    AuthService.prototype.getActiveToken = function () { return this.token; };
    AuthService.prototype.getActiveUserId = function () { return this.activeUserId; };
    AuthService.prototype.getApiUrl = function () { return this.apiUrl; };
    AuthService.prototype.sendCredentials = function (body) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var params = "email=" + body.email + "&password=" + body.password + "&name=" + body.name;
        return this.http.post(this.usersUrl, params, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var data = response.json();
            return data;
        }));
    };
    AuthService.prototype.getToken = function (body) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var params = "email=" + body.email + "&password=" + body.password;
        return this.http.post(this.authUrl, params, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var data = response.json();
            return data;
        }));
    };
    AuthService.prototype.signinUser = function (email, password) {
        var _this = this;
        var signinBody = { email: email, password: password };
        this.getToken(signinBody).subscribe(function (user) {
            _this.token = user['token'];
            _this.activeUserId = user['id'];
            console.log('comming straight from the api: ', _this.activeUserId);
            _this.hasLoggedIn = true;
            _this.router.navigate(['/chat']);
        });
    };
    AuthService.prototype.logout = function () {
        console.log('User logged out!');
        this.token = '';
        this.activeUserId = -1;
        this.hasLoggedIn = false;
        this.router.navigate(['/signin']);
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.hasLoggedIn;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n    width: 400px;\n    margin: 0 auto;\n    background-color: #eeeeeb;\n    border-style: solid;\n    border-width: 2px;\n    border-color: #cacac6;\n    margin-top: 10px;\n}\n\n#title {\n    text-align:center;\n    margin-top:10px;\n}\n\ninput.ng-invalid.ng-touched {\n    border: 1px solid red;\n}"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-md-offset-6\" id=\"content\">\n    <h3 id=\"title\">Login</h3>\n    <hr>\n    <form class=\"form-horizontal\" (ngSubmit)=\"onSignin(f)\" #f=\"ngForm\">\n        <div class=\"form-group\">\n            <label class=\"col-sm-3 control-label\" for=\"email\">Email</label>\n            <div class=\"col-sm-12\">\n                <input\n                type=\"email\"\n                id=\"email\"\n                name=\"email\"\n                ngModel class=\"form-control\"\n                placeholder=\"Email\"\n                email\n                required\n                #email=\"ngModel\">\n            </div>\n            <span class=\"col-sm-3 help-block\" *ngIf=\"!email.valid && email.touched\">\n                Please enter a valid email!\n            </span>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-3 control-label\" for=\"password\">Password</label>\n            <div class=\"col-sm-12\">\n                <input type=\"password\"\n                id=\"password\"\n                name=\"password\"\n                ngModel\n                class=\"form-control\"\n                placeholder=\"Password\"\n                required>\n            </div>\n            <span class=\"col-sm-3 help-block\" *ngIf=\"hasWrongCredentials()\">\n                Oops, wrong credentials!\n            </span>\n        </div>\n        <div class=\"form-group last\">\n            <div class=\"col-sm-offset-3 col-sm-9\">\n                <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"f.form.invalid\">Sign In</button>\n                <small class=\"float-right\">Or click <a  class=\"text-right\" [routerLink]=\"['/signup']\">here </a> to register</small>\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService) {
        this.authService = authService;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSignin = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signinUser(email, password);
        console.log('Passed email and password to Auth.Service');
    };
    SigninComponent.prototype.hasWrongCredentials = function () {
        return false; // TODO
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/auth/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n    width: 400px;\n    margin: 0 auto;\n    background-color: #eeeeeb;\n    border-style: solid;\n    border-width: 2px;\n    border-color: #cacac6;\n    margin-top: 10px;\n}\n\n#title {\n    text-align:center;\n    margin-top:10px;\n}\n\ninput.ng-invalid.ng-touched {\n    border: 1px solid red;\n}"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-md-offset-6\" id=\"content\">\n    <h3 id=\"title\">Sign Up</h3>\n    <hr>\n    <form class=\"form-horizontal\" (ngSubmit)=\"onSignup(f)\" #f=\"ngForm\">\n        <div class=\"form-group\">\n            <label class=\"col-sm-3 control-label\" for=\"email\">Email</label>\n            <div class=\"col-sm-12\">\n                <input type=\"email\" id=\"email\" name=\"email\" ngModel class=\"form-control\" placeholder=\"Email\" email required #email=\"ngModel\">\n                <span class=\"col-sm-3 help-block\" *ngIf=\"!email.valid && email.touched\">\n                    Please enter a valid email!\n                </span>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-3 control-label\" for=\"name\">Name</label>\n            <div class=\"col-sm-12\">\n                <input type=\"text\" id=\"name\" name=\"name\" ngModel class=\"form-control\" placeholder=\"Name\">\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-3 control-label\" for=\"password\">Password</label>\n            <div class=\"col-sm-12\">\n                <input type=\"password\" id=\"password\" name=\"password\" ngModel class=\"form-control\" placeholder=\"Password\">\n            </div>\n        </div>\n        <div class=\"form-group last\">\n            <div class=\"col-sm-offset-3 col-sm-9\">\n                <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Sign Up</button>\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignup = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        var name = form.value.name;
        this.authService.signupUser(email, password, name);
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n    width: 400px;\n    margin: 0 auto;\n    background-color: #eeeeeb;\n    border-style: solid;\n    border-width: 2px;\n    border-color: #cacac6;\n    margin-top: 10px;\n}\n\n#title {\n    text-align:center;\n    margin-top:10px;\n    margin-left:165px;\n}\n\n#chatlog {\n    background: #e5e5e5;\n    height:50vh;\n    overflow: scroll;\n    overflow-x:hidden;\n    display: flex;\n    border-style: solid;\n    border-width: 2px;\n    border-color: #cacac6;\n}\n\n.logout {\n    margin-top: 10px;\n    margin-left: 50px;\n}\n\n.messages {\n  background: white;\n  padding: 5px;\n  padding-bottom: 0px;\n  border-radius: 2px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  max-width: 80%;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.messages > p {\n  font-size: 11px;\n}\n\n.msg_sent {\n\n   margin-right: 0;\n   margin-left: auto;\n}\n\n.msg_receive {\n    padding-left: 0;\n    margin-right: auto;\n}\n\n.timestamp {\n    color: #c0c0c0;\n    font-size: 60%;\n}"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\"> -->\n<div id=\"content\" class=\"col-md-12 col-md-offset-6\">\n    <div class=\"row\">\n        <h3 id=\"title\">Chat</h3>\n        <div class=\"col-md-2 float-right\">\n            <button class=\"btn btn-danger logout\" (click)=\"onLogout()\">Log Out</button>\n        </div>\n    </div>\n    <hr>\n    <select #receiverSelect (change)=\"onSelectChange($event)\" ([ngModel])=\"reciever_id\" name=\"reciever\" class=\"form-control\">\n        <option *ngFor=\"let user of users\" value=\"{{user.id}}\">{{ user.name }} ({{user.email}})</option>\n    </select>\n    <br>\n    <div #chatlog id=\"chatlog\" (change)=\"onScroll($event)\" class=\"pre-scrollable well well-sm\">\n        <div class=\"col-md-12\" style=\"padding-left: 30px;\">\n            <div class=\"row messages\" [ngClass]=\"message.user_id === user_id ? 'msg_sent' : 'msg_recieve'\" *ngFor=\"let message of conversation\">\n                <p> {{ message.content }} <br> <span class=\"timestamp\">Sent: {{message.created_at}} by {{decideSender(message.user_id)}}</span></p>\n            </div>\n        </div>\n    </div>\n    <br>\n    <form (ngSubmit)=\"onSend()\" #f=\"ngForm\">\n        <div class=\"form-group\">\n            <div class=\"row\">\n                <div class=\"col-md-9\">\n                    <input type=\"text\" class=\"form-control\" name=\"message\" ngModel [value]=\"message\" required>\n                </div>\n                <div class=\"col-md-3 float-right\">\n                    <button class=\"btn btn-primary float-center\" type=\"submit\">Send</button>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_message_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/message.model */ "./src/app/shared/message.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.service */ "./src/app/chat/message.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatComponent = /** @class */ (function () {
    function ChatComponent(msgService, authService) {
        this.msgService = msgService;
        this.authService = authService;
        this.conversation = [];
        this.users = [];
        this.user_id = -1;
        this.user_name = 'Me';
        this.receiver_id = 0;
        this.receiver_name = '';
        this.current_page_nr = -1;
        this.trigger_next_page = 19;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user_id = this.msgService.getActiveUserId();
        // Check for new  messages
        this.updateInterval = setInterval(function () {
            if (_this.receiver_id !== 0) {
                _this.updateConversation();
            }
        }, 4000);
        // Init Users
        this.userSubscription = this.msgService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
            _this.users = _this.users.filter(function (userEl) { return userEl['id'] !== _this.user_id; }); // removing active user
            console.log('getting users from subscribtion', _this.users);
            console.log('active user is: ', _this.user_id);
            _this.receiver_id = _this.users[0]['id'];
            _this.updateConversation();
        }, function (error) {
            console.log(error);
        });
    };
    // When user hits send
    ChatComponent.prototype.onSend = function () {
        var _this = this;
        var newMessage = new _shared_message_model__WEBPACK_IMPORTED_MODULE_1__["Message"](0, this.user_id, this.receiver_id, this.messageForm.value.message, new Date().toString());
        // this.messages.push(newMessage);
        // this.conversation.push(newMessage);
        this.msgSubscription = this.msgService.saveMessage({
            user_id: this.user_id,
            receiver_id: this.receiver_id,
            content: newMessage.content
        })
            .subscribe(function (data) {
            console.log(data);
            _this.scrollChatDown();
        });
        this.messageForm.reset();
    };
    // Update chat log depending on whom is selected
    ChatComponent.prototype.updateConversation = function () {
        var _this = this;
        // Decide page nr
        // Ex. this.conversation.length = 21 => page_nr = 2
        var page_nr = Math.floor(this.conversation.length / this.trigger_next_page) + 1;
        // console.log('Current page: ' , this.current_page_nr, '--',this.conversation.length, ' / ', this.trigger_next_page, ' = ', page_nr);
        // console.log(page_nr, "current" , this.current_page_nr);
        if (page_nr > this.current_page_nr) {
            this.current_page_nr = page_nr;
            this.convSubscription = this.msgService.getConversation(this.receiver_id, this.current_page_nr)
                .subscribe(function (conversationData) {
                // this.conversation = <Message[]>conversationData;
                // this.conversation.concat(<Message[]>conversationData);
                var new_page_messages = conversationData;
                console.log('pushing new messages - size(): ', new_page_messages.length);
                for (var index = 0; index < new_page_messages.length; index++) {
                    _this.conversation.push(new_page_messages[index]);
                }
                _this.scrollChatDown();
                // this.conversation.concat(<Message[]>conversationData);
            });
        }
    };
    // Helper function to scroll down after new message
    ChatComponent.prototype.scrollChatDown = function () {
        var objDiv = document.getElementById('chatlog');
        objDiv.scrollTop = objDiv.scrollHeight;
    };
    // Change chat log and update whom is active reciever
    ChatComponent.prototype.onSelectChange = function (event) {
        var _this = this;
        this.receiver_id = +event.target.value;
        var selectedUsers = this.users.find(function (user) { return user['id'] === _this.receiver_id; });
        console.log(selectedUsers);
        this.receiver_name = selectedUsers['name'];
        this.current_page_nr = 0;
        this.conversation = [];
        this.updateConversation();
    };
    // Logout
    ChatComponent.prototype.onLogout = function () {
        clearInterval(this.updateInterval);
        this.authService.logout();
    };
    // Used in template to add sender in every message
    ChatComponent.prototype.decideSender = function (id) {
        if (id === this.user_id) {
            return this.user_name;
        }
        else {
            return this.receiver_name;
        }
    };
    // Destroy our subscribtions
    ChatComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
        this.convSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], ChatComponent.prototype, "messageForm", void 0);
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/chat/message.service.ts":
/*!*****************************************!*\
  !*** ./src/app/chat/message.service.ts ***!
  \*****************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessageService = /** @class */ (function () {
    function MessageService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.apiUrl = this.authService.getApiUrl();
        this.token = this.authService.getActiveToken();
        this.activeUserId = this.authService.getActiveUserId();
        console.log(this.activeUserId);
        console.log('MessageService has been created with api url: ', this.apiUrl);
    }
    MessageService.prototype.setActiveUserId = function (id) {
        this.activeUserId = id; // is set by auth Service when logging in.
    };
    MessageService.prototype.getActiveUserId = function () {
        return this.activeUserId;
    };
    MessageService.prototype.getMessages = function () {
        console.log(this.apiUrl + "/users/" + this.activeUserId);
        return this.http.get(this.apiUrl + "/users/" + this.activeUserId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json().data.messages;
        }));
    };
    // This function give the first or last page. Needs rework to be fully functional
    MessageService.prototype.getConversation = function (receiver_id, page_nr) {
        var conversationUrl = this.apiUrl + "/messages/";
        conversationUrl += "from/" + this.activeUserId + "/";
        conversationUrl += "to/" + receiver_id;
        conversationUrl += "?page=" + page_nr;
        conversationUrl += "&token=" + this.token;
        return this.http.get(conversationUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            console.log(response.json());
            var data = response.json();
            return response.json().conversation.data;
        }));
    };
    MessageService.prototype.saveMessage = function (body) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({ headers: headers });
        var params = "&user_id=" + body.user_id + "\n                                        &receiver_id=" + body.receiver_id + "\n                                        &content=" + body.content;
        return this.http.post(this.apiUrl + "/messages?token=" + this.token, params, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            var data = response.json();
            return data;
        }));
    };
    MessageService.prototype.getUsers = function () {
        return this.http.get(this.apiUrl + "/users")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            var data = response.json();
            return data['data'];
        }));
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/shared/message.model.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/message.model.ts ***!
  \*****************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(id, user_id, receiver_id, content, created_at) {
        this.id = id;
        this.user_id = user_id;
        this.receiver_id = receiver_id;
        this.content = content;
        this.created_at = created_at;
    }
    return Message;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/frozenb/Programming/Job-Applications/bookboost_chatapp/simple-chat-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map