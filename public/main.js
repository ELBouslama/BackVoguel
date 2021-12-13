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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts/post-create/post-create.component */ "./src/app/posts/post-create/post-create.component.ts");
/* harmony import */ var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/post-list/post-list.component */ "./src/app/posts/post-list/post-list.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth-guard */ "./src/app/auth/auth-guard.ts");
/* harmony import */ var _dashboard_component_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard-component/dashboard.component */ "./src/app/dashboard-component/dashboard.component.ts");
/* harmony import */ var _test_component_test_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./test-component/test.component */ "./src/app/test-component/test.component.ts");


 // import module for routes handling
 // component for creating new utility payment
 // comp. for listing all of users utility payments



 // component to check if user is authenticated before accessing to other assets


// we define components to be called upon activation of corresponding route
var routes = [
    { path: 'list', component: _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_4__["PostListComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    /**
     * Guarded route, before its activation system checks if
     * the user is logged in via authGuard route guard.
     */
    { path: 'create', component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_3__["PostCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    /**
     * Defining path as 'sth/:postId' we are defing dynamic part of URL from which data should be taken
     *  */
    { path: 'edit/:postId', component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_3__["PostCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: '', component: _dashboard_component_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'test', component: _test_component_test_component__WEBPACK_IMPORTED_MODULE_10__["TestComponent"] },
    { path: 'help', component: _help_help_component__WEBPACK_IMPORTED_MODULE_7__["HelpComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: '**', redirectTo: '/' }
];
/**
 * We define decorator. With this decorator
 * we are upgrading base class to be NgModule
 * by adding two more fields
 */
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] //route guard to protect unathorized URL access to server resource
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

module.exports = "\r\n\r\nmain{\r\n  width:80%;\r\n}\r\n\r\n::ng-deep .mat-progress-spinner circle, .mat-spinner circle {\r\n  stroke: maroon;\r\n  stroke-width: 4% !important;\r\n}\r\n\r\n::ng-deep .mat-progress-bar-fill::after {\r\n  background-color: goldenrod;\r\n}\r\n\r\n::ng-deep .mat-input-element {\r\n  caret-color: green;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGNBQWM7RUFDZCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxubWFpbntcclxuICB3aWR0aDo4MCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLCAubWF0LXNwaW5uZXIgY2lyY2xlIHtcclxuICBzdHJva2U6IG1hcm9vbjtcclxuICBzdHJva2Utd2lkdGg6IDQlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICBjYXJldC1jb2xvcjogZ3JlZW47XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main>\r\n  <router-outlet></router-outlet>\r\n</main>\r\n"

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
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        /**
         * From this component we call function
         * autoAuthUser form authService component.
         * This function checks if the user is logged
         * in and sets timer for token. On timer's expiration
         * function loggs out user. If user reloads page
         * or even closes it (and the token is still active)
         * it aoutomaticly loggs in user. We call it from here
         * because we are 100% sure that this component will
         * be first loaded when we start web app.
         *
         * */
        this.authService.autoAuthUser();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var mat_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mat-video */ "./node_modules/mat-video/fesm5/mat-video.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_side_menu_header_side_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header-side-menu/header-side-menu.component */ "./src/app/header-side-menu/header-side-menu.component.ts");
/* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./posts/post-create/post-create.component */ "./src/app/posts/post-create/post-create.component.ts");
/* harmony import */ var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./posts/post-list/post-list.component */ "./src/app/posts/post-list/post-list.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_component_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard-component/dashboard.component */ "./src/app/dashboard-component/dashboard.component.ts");
/* harmony import */ var _test_component_test_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./test-component/test.component */ "./src/app/test-component/test.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_10__["PostCreateComponent"],
                _header_side_menu_header_side_menu_component__WEBPACK_IMPORTED_MODULE_9__["HeaderSideMenuComponent"],
                _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_11__["PostListComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"],
                _help_help_component__WEBPACK_IMPORTED_MODULE_14__["HelpComponent"],
                _dashboard_component_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
                _test_component_test_component__WEBPACK_IMPORTED_MODULE_18__["TestComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                mat_video__WEBPACK_IMPORTED_MODULE_5__["MatVideoModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__["AuthInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth-guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuth = this.authService.getIsAuth(); //check if user is authenticated
        if (!isAuth) {
            this.router.navigate(['/login']); // if not, navigate user to login page
        }
        return isAuth;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    /* <any> - intercept all kinds of HTTP requests*/
    AuthInterceptor.prototype.intercept = function (req, next) {
        if (this.authService.getIsAuth()) {
            var authToken = this.authService.getToken();
            /**
             * We must not edit intercepted HTTP request.
             * Instead, we make exact copy of it, and append
             * token (retreived from front-end) to it.
             */
            var authRequest = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + authToken),
            });
            return next.handle(authRequest); // pass-through changed HTTP request on its voyage to server
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"](); // user authentication status listener
        this.rootURL = "/api";
    }
    /*
     * Method which returns user's token.
     * used in posts.service.ts
     * */
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.getIsAuth = function () {
        return this.isAuthenticated;
    };
    AuthService.prototype.getUserId = function () {
        return this.userId;
    };
    AuthService.prototype.getAuthStatusListener = function () {
        return this.authStatusListener.asObservable();
    };
    AuthService.prototype.createUser = function (firstName, lastName, email, password, phoneNumber, accountType) {
        var _this = this;
        var signupData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
            accountType: accountType,
        };
        console.log(signupData);
        this.http
            .post(this.rootURL + "/v1/auth/register", signupData)
            .subscribe(function (response) {
            _this.router.navigate(["/login"]);
            console.log(response);
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var authData = { email: email, password: password };
        this.http
            .post(this.rootURL + "/v1/auth/login", authData)
            .subscribe(function (response) {
            var token = response.tokens.access.token;
            _this.token = token;
            if (token) {
                var expiresDate = response.tokens.access.expires;
                _this.setAuthTimer(3600);
                _this.isAuthenticated = true;
                _this.authStatusListener.next(true);
                var expirationDate = new Date(expiresDate);
                _this.saveAuthData(token, expirationDate);
                _this.router.navigate(["/"]);
            }
        });
    };
    /**
     * Method which tries to authenticate user
     * if there is unexpired token in local storage
     * */
    AuthService.prototype.autoAuthUser = function () {
        var authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        var now = new Date();
        var expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.setAuthTimer(expiresIn / 1000); //ms
            this.authStatusListener.next(true);
        }
    };
    /**
     * Logout method. Before user is logged out
     * it first deletes token, then emits that
     * information through authStatusListener
     * and clears timeout timer
     */
    AuthService.prototype.logout = function () {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        if (!this.token && !this.isAuthenticated) {
            this.clearAuthData();
            this.router.navigate(["/login"]);
        }
    };
    /**
     * Timer function to call logout method after 1h expires
     */
    AuthService.prototype.setAuthTimer = function (duration) {
        var _this = this;
        this.tokenTimer = setTimeout(function () {
            _this.logout();
        }, duration * 1000);
    };
    /**
     * Private method used to store token in browsers local stroge.
     */
    AuthService.prototype.saveAuthData = function (token, expirationDate) {
        localStorage.setItem("token", token);
        localStorage.setItem("expiration", expirationDate.toISOString());
    };
    /**
     * Method to clear local storage.
     */
    AuthService.prototype.clearAuthData = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
    };
    /**
     * Method which returns token,
     * token expiration date and users
     * bankAccountID from browser local storage.
     * */
    AuthService.prototype.getAuthData = function () {
        var token = localStorage.getItem("token");
        var expirationDate = localStorage.getItem("expiration");
        if (!token && !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
        };
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\nmat-form-field {\r\n  min-width: 256px;\r\n}\r\n\r\nbutton {\r\n  margin-right: 2mm;\r\n  margin-top: 1mm;\r\n}\r\n\r\n.mat-raised-button.mat-red {\r\n  background-color: rgba(43, 130, 243, 0.863);\r\n  color: #ffffff;\r\n  margin-top: -12px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.button {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\nmat-spinner {\r\n  margin: auto;\r\n}\r\n\r\n:host {\r\n  display: flex;\r\n  position: relative;\r\n  left: 140px;\r\n  justify-content: center;\r\n  margin: 120px 0px;\r\n}\r\n\r\n.mat-form-field {\r\n  display: contents;\r\n  width: 100%;\r\n  min-width: 300px;\r\n}\r\n\r\nmat-card {\r\n  background-color: #ffffffe6;\r\n  border-radius: 15px;\r\n  top: -60px;\r\n  padding: 18px;\r\n}\r\n\r\nmat-card-title,\r\nmat-card-content {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nmat-card-title {\r\n  font-weight: 400;\r\n  font-size: 22px;\r\n}\r\n\r\n.logo-login {\r\n  width: 250px;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.logo-name {\r\n  color: rgba(182, 182, 182, 0.925);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgbWluLXdpZHRoOiAyNTZweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDJtbTtcclxuICBtYXJnaW4tdG9wOiAxbW07XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCAxMzAsIDI0MywgMC44NjMpO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMTQwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMjBweCAwcHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZGlzcGxheTogY29udGVudHM7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZlNjtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHRvcDogLTYwcHg7XHJcbiAgcGFkZGluZzogMThweDtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGUsXHJcbm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1jYXJkLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLmxvZ28tbG9naW4ge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5sb2dvLW5hbWUge1xyXG4gIGNvbG9yOiByZ2JhKDE4MiwgMTgyLCAxODIsIDAuOTI1KTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card layout=\"row\">\r\n  <img class=\"logo-login\" src=\"../../../assets/images/logo-login.png\" alt=\"\" />\r\n  <mat-card-title class=\"logo-name\">Voguel Banking</mat-card-title>\r\n  <p></p>\r\n  <mat-card-title>Sign In</mat-card-title>\r\n  <mat-card-content>\r\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n    <form (submit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\" *ngIf=\"!isLoading\">\r\n      <p>\r\n        <mat-form-field>\r\n          <input\r\n            matInput\r\n            ngModel\r\n            #emailInput=\"ngModel\"\r\n            type=\"email\"\r\n            name=\"email\"\r\n            placeholder=\"E-mail\"\r\n            required\r\n            email\r\n          />\r\n          <mat-error *ngIf=\"emailInput.invalid\"\r\n            >Please enter valid e-mail</mat-error\r\n          >\r\n        </mat-form-field>\r\n      </p>\r\n      <p>\r\n        <mat-form-field>\r\n          <input\r\n            matInput\r\n            ngModel\r\n            #passwordInput=\"ngModel\"\r\n            type=\"password\"\r\n            name=\"password\"\r\n            placeholder=\"Password\"\r\n            required\r\n          />\r\n          <mat-error *ngIf=\"passwordInput.invalid\"\r\n            >Please enter password.</mat-error\r\n          >\r\n        </mat-form-field>\r\n      </p>\r\n      <div>\r\n        <button\r\n          [disabled]=\"loginForm.invalid\"\r\n          mat-raised-button\r\n          color=\"red\"\r\n          type=\"submit\"\r\n          *ngIf=\"!isLoading\"\r\n        >\r\n          Log in\r\n        </button>\r\n        <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n      </div>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    LoginComponent.prototype.onLogin = function (form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.authService.login(form.value.email, form.value.password);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\nmat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nbutton {\r\n  margin-right: 2mm;\r\n  margin-top: 1mm;\r\n}\r\n\r\n.mat-raised-button.mat-red {\r\n  background-color: rgba(43, 130, 243, 0.863);\r\n  color: #ffffff;\r\n  margin-top: -12px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.button {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\nmat-spinner {\r\n  margin: auto;\r\n}\r\n\r\n:host {\r\n  display: flex;\r\n  position: relative;\r\n  left: 140px;\r\n  justify-content: center;\r\n  margin: 120px 0px;\r\n}\r\n\r\n.mat-form-field {\r\n  width: 100%;\r\n  min-width: 300px;\r\n}\r\n\r\nmat-card {\r\n  background-color: #ffffffe6;\r\n  top: -60px;\r\n}\r\n\r\nmat-card-title,\r\nmat-card-content {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nmat-card-title {\r\n  position: relative;\r\n  font-weight: 400;\r\n  font-size: 22px;\r\n  margin-left: -110px;\r\n  margin-right: 8px;\r\n  left: 259px;\r\n}\r\n\r\n.logo-signup {\r\n  width: 250px;\r\n  margin-right: -50px;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  padding-top: 69px;\r\n}\r\n\r\n.logo-name {\r\n  position: relative;\r\n  left: 110px;\r\n  top: 232px;\r\n  color: rgba(182, 182, 182, 0.925);\r\n}\r\n\r\n.signup-box {\r\n  display: flex;\r\n  position: relative;\r\n  top: -76px;\r\n  border-radius: 14px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFHQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAybW07XHJcbiAgbWFyZ2luLXRvcDogMW1tO1xyXG59XHJcblxyXG4ubWF0LXJhaXNlZC1idXR0b24ubWF0LXJlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MywgMTMwLCAyNDMsIDAuODYzKTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBtYXJnaW4tdG9wOiAtMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuXHJcbm1hdC1zcGlubmVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAxNDBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDEyMHB4IDBweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmU2O1xyXG4gIHRvcDogLTYwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkLXRpdGxlLFxyXG5tYXQtY2FyZC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtY2FyZC10aXRsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgbGVmdDogMjU5cHg7XHJcbn1cclxuXHJcbi5sb2dvLXNpZ251cCB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTUwcHg7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBwYWRkaW5nLXRvcDogNjlweDtcclxufVxyXG5cclxuLmxvZ28tbmFtZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDExMHB4O1xyXG4gIHRvcDogMjMycHg7XHJcbiAgY29sb3I6IHJnYmEoMTgyLCAxODIsIDE4MiwgMC45MjUpO1xyXG59XHJcblxyXG4uc2lnbnVwLWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtNzZweDtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"signup-box\" layout=\"row\">\r\n  <img\r\n    class=\"logo-signup\"\r\n    src=\"../../../assets//images/logo-login.png\"\r\n    alt=\"\"\r\n  />\r\n\r\n  <p></p>\r\n  <mat-card-title>Become a Client</mat-card-title>\r\n  <mat-card-content>\r\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n    <form\r\n      (submit)=\"onSignup(signupForm)\"\r\n      #signupForm=\"ngForm\"\r\n      *ngIf=\"!isLoading\"\r\n    >\r\n      <p>\r\n        <mat-form-field>\r\n          <input\r\n            matInput\r\n            ngModel\r\n            #fnameInput=\"ngModel\"\r\n            type=\"text\"\r\n            name=\"firstName\"\r\n            placeholder=\"first name\"\r\n            required\r\n            minlength=\"3\"\r\n          />\r\n          <mat-error *ngIf=\"fnameInput.invalid\"\r\n            >Please enter first name 3 minimum length</mat-error\r\n          >\r\n        </mat-form-field>\r\n      </p>\r\n      <p>\r\n        <mat-form-field>\r\n          <input\r\n            matInput\r\n            ngModel\r\n            #lnameInput=\"ngModel\"\r\n            type=\"text\"\r\n            name=\"lastName\"\r\n            placeholder=\"last name\"\r\n            required\r\n            minlength=\"3\"\r\n          />\r\n          <mat-error *ngIf=\"lnameInput.invalid\"\r\n            >Please enter last name</mat-error\r\n          >\r\n        </mat-form-field>\r\n      </p>\r\n      <p>\r\n        <mat-form-field>\r\n          <input\r\n            matInput\r\n            ngModel\r\n            #emailInput=\"ngModel\"\r\n            type=\"email\"\r\n            name=\"email\"\r\n            placeholder=\"E-mail\"\r\n            required\r\n            email\r\n          />\r\n          <mat-error *ngIf=\"emailInput.invalid\"\r\n            >Please enter valid e-mail</mat-error\r\n          >\r\n        </mat-form-field>\r\n      </p>\r\n      <p>\r\n        <mat-form-field>\r\n          <input\r\n            matInput\r\n            ngModel\r\n            #phoneInput=\"ngModel\"\r\n            type=\"number\"\r\n            name=\"phoneNumber\"\r\n            placeholder=\"phone number\"\r\n            required\r\n            minlength=\"8\"\r\n          />\r\n          <mat-error *ngIf=\"phoneInput.invalid\"\r\n            >Please enter a 8 digit phone number</mat-error\r\n          >\r\n        </mat-form-field>\r\n      </p>\r\n      <p>\r\n        <mat-form-field appearance=\"fill\">\r\n          <mat-label>Select account type</mat-label>\r\n          <mat-select\r\n            name=\"accountType\"\r\n            matInput\r\n            ngModel\r\n            #accountInput=\"ngModel\"\r\n            required\r\n          >\r\n            <mat-option>None</mat-option>\r\n            <mat-option value=\"BRONZE\">BRONZE</mat-option>\r\n            <mat-option value=\"SILVER\">SILVER</mat-option>\r\n            <mat-option value=\"GOLD\">GOLD</mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"accountInput.invalid\"\r\n            >Please enter chose account type</mat-error\r\n          >\r\n        </mat-form-field>\r\n      </p>\r\n      <p>\r\n        <mat-form-field>\r\n          <input\r\n            matInput\r\n            ngModel\r\n            #passwordInput=\"ngModel\"\r\n            type=\"password\"\r\n            name=\"password\"\r\n            minlength=\"4\"\r\n            placeholder=\"Password\"\r\n            required\r\n          />\r\n          <mat-error *ngIf=\"passwordInput.invalid\"\r\n            >Password must be at least 6 characters</mat-error\r\n          >\r\n        </mat-form-field>\r\n      </p>\r\n      <p>\r\n        <mat-form-field>\r\n          <input\r\n            matInput\r\n            ngModel\r\n            #verifypasswordInput=\"ngModel\"\r\n            type=\"password\"\r\n            name=\"verifypassword\"\r\n            minlength=\"4\"\r\n            placeholder=\"Verify Password\"\r\n            required\r\n          />\r\n          <mat-error\r\n            *ngIf=\"\r\n              verifypasswordInput.value != passwordInput.value &&\r\n              verifypasswordInput.dirty\r\n            \"\r\n            >Unmatching passwords</mat-error\r\n          >\r\n        </mat-form-field>\r\n      </p>\r\n      <div>\r\n        <button\r\n          [disabled]=\"signupForm.invalid\"\r\n          mat-raised-button\r\n          color=\"red\"\r\n          type=\"submit\"\r\n          *ngIf=\"!isLoading\"\r\n        >\r\n          Register\r\n        </button>\r\n        <mat-checkbox [checked]=\"true\"\r\n          >I agree to the Terms and Conditions</mat-checkbox\r\n        >\r\n      </div>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");



var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    SignupComponent.prototype.onSignup = function (form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.authService.createUser(form.value.firstName, form.value.lastName, form.value.email, form.value.password, form.value.phoneNumber, form.value.accountType);
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-component/dashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dashboard-component/dashboard.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.info {\r\n  display: block;\r\n  position: relative;\r\n  margin-left: 10px;\r\n  margin-top: 15px;\r\n  margin-bottom: 2px;\r\n  left: 233px;\r\n  bottom: 577px;\r\n  width: 90%;\r\n  height: 879px;\r\n  background-color: #fffffff5;\r\n}\r\n\r\n.avatar {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  right: 1022px;\r\n}\r\n\r\n.avatar-title {\r\n  position: relative;\r\n  left: 92px;\r\n  top: 6px;\r\n  margin-bottom: 3px;\r\n  font-size: 18px;\r\n  font-weight: lighter;\r\n  color: dimgray;\r\n}\r\n\r\n.contact-btn {\r\n  border-radius: 18px;\r\n  top: 6px;\r\n  right: 6px;\r\n}\r\n\r\n.flex {\r\n  display: inline-flex;\r\n  flex-direction: row;\r\n  position: relative;\r\n  margin-left: 14px;\r\n  margin-right: -8px;\r\n  margin-top: 0px;\r\n  margin-bottom: -71px;\r\n  left: 464px;\r\n  bottom: 61px;\r\n}\r\n\r\n.divider {\r\n  margin-right: 15px;\r\n  margin-left: 15px;\r\n  border-color: #daa5206e;\r\n  border-width: 2px !important;\r\n}\r\n\r\n.block-divider {\r\n  left: -37px !important;\r\n  width: 961px !important;\r\n  border-top-color: #daa5206e;\r\n}\r\n\r\n.grid-card {\r\n  max-width: 461px;\r\n  max-height: 249px;\r\n}\r\n\r\n.grid-card-header-image {\r\n  background-size: cover;\r\n}\r\n\r\n.icon {\r\n  font-size: 48px;\r\n}\r\n\r\n.current-balance {\r\n  font-size: 48px;\r\n  font-weight: 100;\r\n  color: goldenrod;\r\n  text-align: center;\r\n  margin: 0;\r\n}\r\n\r\n.current-balance-box {\r\n  bottom: 1%;\r\n  width: 352px;\r\n}\r\n\r\n#transfert {\r\n  bottom: 2%;\r\n  width: 352px;\r\n}\r\n\r\n.current-balance-btn {\r\n  position: relative;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  left: 29px;\r\n}\r\n\r\nmat-card {\r\n  margin: 15px;\r\n  display: inline-block;\r\n  left: 3px;\r\n  bottom: 55px;\r\n  padding: 15px;\r\n}\r\n\r\n.list {\r\n  width: auto;\r\n  height: 239px;\r\n  left: 0px;\r\n  overflow: hidden visible;\r\n  cursor: pointer;\r\n}\r\n\r\n.list-exchange-calc {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  height: 300px;\r\n  left: 0px;\r\n  overflow: hidden visible;\r\n}\r\n\r\n.no-overflow {\r\n  overflow: hidden hidden;\r\n  cursor: default;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n.transaction-box {\r\n  bottom: 37px;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n\r\n.exchange-box {\r\n  bottom: 37px;\r\n  width: 506px;\r\n}\r\n\r\n.transfer-box {\r\n  width: 355px;\r\n}\r\n\r\n.transfer-buttons {\r\n  bottom: 21px;\r\n  position: relative;\r\n}\r\n\r\ntr.transaction-detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.transaction-element-row:not(.transaction-expanded-row):hover {\r\n  background: rgba(156, 146, 0, 0.158);\r\n}\r\n\r\ntr.transaction-element-row:not(.transaction-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.transaction-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.transaction-element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.transaction-element-description {\r\n  padding: 16px;\r\n  padding-top: 0px;\r\n  padding-bottom: 18px;\r\n  opacity: 0.8;\r\n  width: 374px;\r\n}\r\n\r\n.elipsis {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: block;\r\n  width: 116px;\r\n}\r\n\r\n.sticky-header {\r\n  z-index: 2 !important;\r\n}\r\n\r\n.header-row {\r\n  height: 41px;\r\n}\r\n\r\n.no-transactions {\r\n  width: 225px;\r\n  margin: 0px 0px 9px 0px;\r\n  top: 27px;\r\n  left: 135px;\r\n  position: relative;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.no-transactions-message {\r\n  text-align: center;\r\n}\r\n\r\n.currency {\r\n  font-size: 23px;\r\n}\r\n\r\n.spinner {\r\n  left: 144px;\r\n  top: 63px;\r\n}\r\n\r\n.mat-progress-spinner circle,\r\n.mat-spinner circle {\r\n  stroke-width: 3%;\r\n  stroke: goldenrod !important;\r\n}\r\n\r\n.gear-transactions {\r\n  left: 178px;\r\n}\r\n\r\n.gear-currency-exchange {\r\n  left: 274px;\r\n}\r\n\r\n.gear-funds-transfer {\r\n  left: 74px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkLWNvbXBvbmVudC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsVUFBVTtFQUNWLGFBQWE7RUFDYiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFNBQVM7RUFDVCx3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixTQUFTO0VBQ1Qsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1jb21wb25lbnQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmluZm8ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxuICBsZWZ0OiAyMzNweDtcclxuICBib3R0b206IDU3N3B4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA4NzlweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmZjU7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgcmlnaHQ6IDEwMjJweDtcclxufVxyXG5cclxuLmF2YXRhci10aXRsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDkycHg7XHJcbiAgdG9wOiA2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBjb2xvcjogZGltZ3JheTtcclxufVxyXG5cclxuLmNvbnRhY3QtYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIHRvcDogNnB4O1xyXG4gIHJpZ2h0OiA2cHg7XHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogMTRweDtcclxuICBtYXJnaW4tcmlnaHQ6IC04cHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IC03MXB4O1xyXG4gIGxlZnQ6IDQ2NHB4O1xyXG4gIGJvdHRvbTogNjFweDtcclxufVxyXG5cclxuLmRpdmlkZXIge1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBib3JkZXItY29sb3I6ICNkYWE1MjA2ZTtcclxuICBib3JkZXItd2lkdGg6IDJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmxvY2stZGl2aWRlciB7XHJcbiAgbGVmdDogLTM3cHggIWltcG9ydGFudDtcclxuICB3aWR0aDogOTYxcHggIWltcG9ydGFudDtcclxuICBib3JkZXItdG9wLWNvbG9yOiAjZGFhNTIwNmU7XHJcbn1cclxuXHJcbi5ncmlkLWNhcmQge1xyXG4gIG1heC13aWR0aDogNDYxcHg7XHJcbiAgbWF4LWhlaWdodDogMjQ5cHg7XHJcbn1cclxuXHJcbi5ncmlkLWNhcmQtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG59XHJcblxyXG4uY3VycmVudC1iYWxhbmNlIHtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBjb2xvcjogZ29sZGVucm9kO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jdXJyZW50LWJhbGFuY2UtYm94IHtcclxuICBib3R0b206IDElO1xyXG4gIHdpZHRoOiAzNTJweDtcclxufVxyXG4jdHJhbnNmZXJ0IHtcclxuICBib3R0b206IDIlO1xyXG4gIHdpZHRoOiAzNTJweDtcclxufVxyXG5cclxuLmN1cnJlbnQtYmFsYW5jZS1idG4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgbGVmdDogMjlweDtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbGVmdDogM3B4O1xyXG4gIGJvdHRvbTogNTVweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiAyMzlweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiB2aXNpYmxlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxpc3QtZXhjaGFuZ2UtY2FsYyB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW4gdmlzaWJsZTtcclxufVxyXG5cclxuLm5vLW92ZXJmbG93IHtcclxuICBvdmVyZmxvdzogaGlkZGVuIGhpZGRlbjtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWJveCB7XHJcbiAgYm90dG9tOiAzN3B4O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmV4Y2hhbmdlLWJveCB7XHJcbiAgYm90dG9tOiAzN3B4O1xyXG4gIHdpZHRoOiA1MDZweDtcclxufVxyXG5cclxuLnRyYW5zZmVyLWJveCB7XHJcbiAgd2lkdGg6IDM1NXB4O1xyXG59XHJcblxyXG4udHJhbnNmZXItYnV0dG9ucyB7XHJcbiAgYm90dG9tOiAyMXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxudHIudHJhbnNhY3Rpb24tZGV0YWlsLXJvdyB7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG50ci50cmFuc2FjdGlvbi1lbGVtZW50LXJvdzpub3QoLnRyYW5zYWN0aW9uLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTU2LCAxNDYsIDAsIDAuMTU4KTtcclxufVxyXG5cclxudHIudHJhbnNhY3Rpb24tZWxlbWVudC1yb3c6bm90KC50cmFuc2FjdGlvbi1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWVsZW1lbnQtcm93IHRkIHtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tZWxlbWVudC1kZXRhaWwge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWVsZW1lbnQtZGVzY3JpcHRpb24ge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMThweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgd2lkdGg6IDM3NHB4O1xyXG59XHJcblxyXG4uZWxpcHNpcyB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMTZweDtcclxufVxyXG5cclxuLnN0aWNreS1oZWFkZXIge1xyXG4gIHotaW5kZXg6IDIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlci1yb3cge1xyXG4gIGhlaWdodDogNDFweDtcclxufVxyXG5cclxuLm5vLXRyYW5zYWN0aW9ucyB7XHJcbiAgd2lkdGg6IDIyNXB4O1xyXG4gIG1hcmdpbjogMHB4IDBweCA5cHggMHB4O1xyXG4gIHRvcDogMjdweDtcclxuICBsZWZ0OiAxMzVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4ubm8tdHJhbnNhY3Rpb25zLW1lc3NhZ2Uge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmN1cnJlbmN5IHtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuICBsZWZ0OiAxNDRweDtcclxuICB0b3A6IDYzcHg7XHJcbn1cclxuXHJcbi5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsXHJcbi5tYXQtc3Bpbm5lciBjaXJjbGUge1xyXG4gIHN0cm9rZS13aWR0aDogMyU7XHJcbiAgc3Ryb2tlOiBnb2xkZW5yb2QgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdlYXItdHJhbnNhY3Rpb25zIHtcclxuICBsZWZ0OiAxNzhweDtcclxufVxyXG5cclxuLmdlYXItY3VycmVuY3ktZXhjaGFuZ2Uge1xyXG4gIGxlZnQ6IDI3NHB4O1xyXG59XHJcblxyXG4uZ2Vhci1mdW5kcy10cmFuc2ZlciB7XHJcbiAgbGVmdDogNzRweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard-component/dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard-component/dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card layout=\"row\" class=\"info\">\r\n  <mat-card-title-group>\r\n    <mat-card-title class=\"avatar-title\"\r\n      >Hello, {{ user.firstName }}</mat-card-title\r\n    >\r\n\r\n    <img\r\n      mat-card-avatar\r\n      mat-card-sm-image\r\n      class=\"avatar\"\r\n      src=\"../../assets/images/bank.png\"\r\n      alt=\"Support avatar\"\r\n    />\r\n  </mat-card-title-group>\r\n  <mat-card-content class=\"mat-body-1 info-text flex\"\r\n    >You are signed in as: <br />\r\n    {{ user.firstName }} {{ user.lastName }}\r\n    <mat-divider\r\n      class=\"divider\"\r\n      vertical=\"true\"\r\n      vertical\r\n      style=\"height: 60px\"\r\n    ></mat-divider>\r\n  </mat-card-content>\r\n  <mat-card-content class=\"mat-body-1 info-text flex\"\r\n    >Your client number: <br />\r\n    {{ user.accountId }}\r\n    <mat-divider\r\n      class=\"divider\"\r\n      vertical=\"true\"\r\n      vertical\r\n      style=\"height: 60px\"\r\n    ></mat-divider>\r\n  </mat-card-content>\r\n\r\n  <mat-divider class=\"block-divider\"></mat-divider>\r\n  <br /><br /><br />\r\n\r\n  <mat-card class=\"transaction-box\">\r\n    <mat-card-header>\r\n      <div mat-card-avatar class=\"grid-card-header-image\">\r\n        <mat-icon class=\"icon\">swap_horiz</mat-icon>\r\n      </div>\r\n      <mat-card-title>Recent Transactions</mat-card-title>\r\n    </mat-card-header>\r\n\r\n    <div *ngIf=\"hasTransactions\" class=\"mat-elevation-z8 list\">\r\n      <table\r\n        mat-table\r\n        matSort\r\n        [dataSource]=\"dataSource\"\r\n        multiTemplateDataRows\r\n        class=\"mat-elevation-z8\"\r\n      >\r\n        <ng-container matColumnDef=\"description\">\r\n          <th\r\n            mat-header-cell\r\n            mat-sort-header\r\n            class=\"sticky-header\"\r\n            *matHeaderCellDef\r\n          >\r\n            Description\r\n          </th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            <span class=\"elipsis\">{{ element.description }}</span>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"amount\">\r\n          <th\r\n            mat-header-cell\r\n            mat-sort-header\r\n            class=\"sticky-header\"\r\n            *matHeaderCellDef\r\n          >\r\n            Amount\r\n          </th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            <span class=\"elipsis\">{{ element.value }}</span>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"senderAccountNumber\">\r\n          <th\r\n            mat-header-cell\r\n            mat-sort-header\r\n            class=\"sticky-header\"\r\n            *matHeaderCellDef\r\n          >\r\n            Account\r\n          </th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            <span class=\"elipsis\">{{ user.accountId.substring(0, 4) }}</span>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"date\">\r\n          <th\r\n            mat-header-cell\r\n            mat-sort-header\r\n            class=\"sticky-header\"\r\n            *matHeaderCellDef\r\n          >\r\n            Date\r\n          </th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            <span class=\"elipsis\">{{ element.nature }}</span>\r\n          </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"nature\">\r\n          <th\r\n            mat-header-cell\r\n            mat-sort-header\r\n            class=\"sticky-header\"\r\n            *matHeaderCellDef\r\n          >\r\n            Nature\r\n          </th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            <span class=\"elipsis\">{{ element.nature }}</span>\r\n          </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"BalanceAfterTransaction\">\r\n          <th\r\n            mat-header-cell\r\n            mat-sort-header\r\n            class=\"sticky-headedar\"\r\n            *matHeaderCellDef\r\n          >\r\n            BalanceAfterTransaction\r\n          </th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            <span class=\"elipsis\">{{ element.balanceAfterTransaction }}</span>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"expandedDetail\">\r\n          <td\r\n            mat-cell\r\n            *matCellDef=\"let element\"\r\n            [attr.colspan]=\"columnsToDisplayEng.length\"\r\n          >\r\n            <div\r\n              class=\"transaction-element-detail\"\r\n              [@detailExpand]=\"\r\n                element == expandedElement ? 'expanded' : 'collapsed'\r\n              \"\r\n            >\r\n              <div class=\"transaction-element-description\">\r\n                Description: {{ element.description }} <br />\r\n\r\n                <br />\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <tr\r\n          class=\"header-row\"\r\n          mat-header-row\r\n          *matHeaderRowDef=\"columnsToDisplayEng; sticky: true\"\r\n        ></tr>\r\n        <tr\r\n          mat-row\r\n          *matRowDef=\"let element; columns: columnsToDisplayEng\"\r\n          class=\"transaction-element-row\"\r\n          [class.transaction-expanded-row]=\"expandedElement === element\"\r\n          (click)=\"\r\n            expandedElement = expandedElement === element ? null : element\r\n          \"\r\n        ></tr>\r\n        <tr\r\n          mat-row\r\n          *matRowDef=\"let row; columns: ['expandedDetail']\"\r\n          class=\"transaction-detail-row\"\r\n        ></tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"isLoading\" class=\"mat-elevation-z8 list\">\r\n      <mat-spinner class=\"spinner\"></mat-spinner>\r\n    </div>\r\n    <div\r\n      *ngIf=\"!hasTransactions && !isLoading\"\r\n      class=\"mat-elevation-z8 list no-overflow\"\r\n    >\r\n      <img\r\n        mat-card-image\r\n        class=\"no-transactions\"\r\n        src=\"http://localhost:3000/repository/images/no-transactions.jpg\"\r\n        alt=\"Ништа није пронађено.\"\r\n      />\r\n      <p class=\"no-transactions-message\">You have no transactions.</p>\r\n    </div>\r\n  </mat-card>\r\n\r\n  <mat-card class=\"current-balance-box\">\r\n    <mat-card-header>\r\n      <div mat-card-avatar class=\"grid-card-header-image\">\r\n        <mat-icon class=\"icon\">monetization_on</mat-icon>\r\n      </div>\r\n      <mat-card-title>Available balance</mat-card-title>\r\n      <mat-card-subtitle\r\n        >account number: {{ user.accountId.substring(0, 4) }}</mat-card-subtitle\r\n      >\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <p class=\"current-balance\">\r\n        {{ user.balance }}<span class=\"currency\">,00 TND</span>\r\n      </p>\r\n    </mat-card-content>\r\n    <mat-card-actions class=\"current-balance-btn\">\r\n      <form #operationForm=\"ngForm\">\r\n        <p>\r\n          <mat-form-field>\r\n            <input\r\n              matInput\r\n              ngModel\r\n              #valueInput=\"ngModel\"\r\n              type=\"text\"\r\n              name=\"montant\"\r\n              placeholder=\"Value\"\r\n              required\r\n            />\r\n            <mat-error *ngIf=\"valueInput.invalid\"\r\n              >Please enter the value of the operation</mat-error\r\n            >\r\n          </mat-form-field>\r\n        </p>\r\n        <p>\r\n          <mat-form-field>\r\n            <input\r\n              matInput\r\n              ngModel\r\n              #descriptionInput=\"ngModel\"\r\n              type=\"text\"\r\n              name=\"description\"\r\n              placeholder=\"description\"\r\n              required\r\n            />\r\n            <mat-error *ngIf=\"valueInput.invalid\"\r\n              >Please enter the value of the description</mat-error\r\n            >\r\n          </mat-form-field>\r\n        </p>\r\n\r\n        <button (click)=\"onDeposit(operationForm)\" mat-button>Deposit</button>\r\n        <button (click)=\"onWithDraw(operationForm)\" mat-button>WithDraw</button>\r\n      </form>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n\r\n  <mat-card class=\"current-balance-box\" id=\"transfert\">\r\n    <mat-card-header>\r\n      <div mat-card-avatar class=\"grid-card-header-image\">\r\n        <mat-icon class=\"icon\">monetization_on</mat-icon>\r\n      </div>\r\n      <mat-card-title>Transfert Balance</mat-card-title>\r\n    </mat-card-header>\r\n\r\n    <mat-card-actions class=\"current-balance-btn\">\r\n      <form #transferForm=\"ngForm\">\r\n        <p>\r\n          <mat-form-field>\r\n            <input\r\n              matInput\r\n              ngModel\r\n              #valueInput=\"ngModel\"\r\n              type=\"text\"\r\n              name=\"montant\"\r\n              placeholder=\"Value\"\r\n              required\r\n            />\r\n            <mat-error *ngIf=\"valueInput.invalid\">Please enter value</mat-error>\r\n          </mat-form-field>\r\n        </p>\r\n        <p>\r\n          <mat-form-field>\r\n            <input\r\n              matInput\r\n              ngModel\r\n              #descriptionInput=\"ngModel\"\r\n              type=\"text\"\r\n              name=\"description\"\r\n              placeholder=\"description\"\r\n              required\r\n            />\r\n            <mat-error *ngIf=\"valueInput.invalid\"\r\n              >Please enter description</mat-error\r\n            >\r\n          </mat-form-field>\r\n        </p>\r\n        <p>\r\n          <mat-form-field>\r\n            <input\r\n              matInput\r\n              ngModel\r\n              #senderInput=\"ngModel\"\r\n              type=\"text\"\r\n              name=\"recipient\"\r\n              placeholder=\"recipient\"\r\n              required\r\n            />\r\n            <mat-error *ngIf=\"valueInput.invalid\"\r\n              >Please enter the id of the receiver</mat-error\r\n            >\r\n          </mat-form-field>\r\n        </p>\r\n\r\n        <button (click)=\"onTransfert(transferForm)\" mat-button>Transfer</button>\r\n      </form>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/dashboard-component/dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard-component/dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/dashboard-component/dashboard.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, dashService) {
        this.authService = authService;
        this.dashService = dashService;
        // Here, we will store retrieved user data form server
        this.user = {
            firstName: "",
            lastName: "",
            balance: 0,
            accountType: "",
            accountId: "",
            transactions: [],
        };
        //transactions table variables
        this.dataSource = [];
        this.columnsToDisplayEng = [
            "date",
            "description",
            "nature",
            "amount",
            "senderAccountNumber",
            "BalanceAfterTransaction",
        ];
        this.isLoading = false;
        this.userIsAuthenticated = false;
        this.hasTransactions = false; // if there are no transactions for logged user, set a flag for front-end
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.dashService.getUserData();
        this.userSub = this.dashService
            .getUserDataListener()
            .subscribe(function (userData) {
            _this.isLoading = false;
            _this.user = userData;
            _this.dataSource = _this.user.transactions;
            if (_this.dataSource.length > 0) {
                _this.hasTransactions = true;
            }
        });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
        });
    };
    DashboardComponent.prototype.onDeposit = function (form) {
        if (form.invalid) {
            return;
        }
        this.dashService.makeDeposit(form.value.montant, form.value.description);
    };
    DashboardComponent.prototype.onWithDraw = function (form) {
        if (form.invalid) {
            return;
        }
        this.dashService.makeWithdraw(form.value.montant, form.value.description);
    };
    DashboardComponent.prototype.onTransfert = function (form) {
        if (form.invalid) {
            return;
        }
        this.dashService.makeTransfer(form.value.montant, form.value.description, form.value.recipient);
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.userSub.unsubscribe();
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-dashboard",
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard-component/dashboard.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])("detailExpand", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])("collapsed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: "0px", minHeight: "0" })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])("expanded", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: "*" })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])("expanded <=> collapsed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
                ]),
            ],
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard-component/dashboard.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-component/dashboard.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard-component/dashboard.service.ts ***!
  \**********************************************************/
/*! exports provided: DashService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashService", function() { return DashService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var DashService = /** @class */ (function () {
    function DashService(http, router) {
        this.http = http;
        this.router = router;
        this.dashStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"](); // objekat klase koja odasilje podatke svim zaint. stranama
        this.rootURL = "/api";
    }
    /*
      Function to fetch all related user data from server
      to show it on Dasboard (Home) page
      */
    DashService.prototype.getUserData = function () {
        var _this = this;
        var userData = {
            firstName: "",
            lastName: "",
            balance: 0,
            accountType: "",
            accountId: "",
            transactions: [],
        };
        this.http
            .get(this.rootURL + "/v1/user/me")
            .subscribe(function (res) {
            userData.firstName = res[0].firstName;
            userData.lastName = res[0].lastName;
            userData.balance = res[0].accounts[0].balance;
            userData.accountId = res[0].accounts[0].id;
            userData.accountType = res[0].accounts[0].accountType;
            userData.transactions = res[0].accounts[0].transactions;
            _this.dashStatusListener.next(userData);
        });
    };
    DashService.prototype.makeDeposit = function (value, description) {
        var _this = this;
        var depositData = {
            value: value,
            description: description,
            issuer: "61b5e0d7181ed542a43fb302",
        };
        this.http
            .post(this.rootURL + "/v1/operation/deposit", depositData)
            .subscribe(function (response) {
            window.location.reload();
            _this.router.navigate(["/"]);
            console.log(response);
        });
    };
    DashService.prototype.makeWithdraw = function (value, description) {
        var _this = this;
        var withdrawData = {
            value: value,
            description: description,
        };
        this.http
            .post(this.rootURL + "/v1/operation/withdraw", withdrawData)
            .subscribe(function (response) {
            window.location.reload();
            _this.router.navigate(["/"]);
            console.log(response);
        });
    };
    DashService.prototype.makeTransfer = function (value, description, recipient) {
        var _this = this;
        var transferData = {
            value: value,
            description: description,
            recipient: recipient,
        };
        this.http
            .post(this.rootURL + "/v1/operation/transfer", transferData)
            .subscribe(function (response) {
            window.location.reload();
            _this.router.navigate(["/"]);
            console.log(response);
        });
    };
    DashService.prototype.getUserDataListener = function () {
        return this.dashStatusListener.asObservable();
    };
    /*
      Function for converting data from ISO8601 shape (from MySQL db)
      into dd-mm-yy format for frontend (transactions list table).
       */
    DashService.prototype.dateFromISO8601 = function (isostr) {
        var parts = isostr.match(/\d+/g);
        var date = new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]);
        var partialYearStr = date.getFullYear().toString().substring(2, 4);
        var day = date.getDate() + 1;
        var dayStr = day.toString();
        var month = date.getMonth() + 1;
        var monthStr = month.toString();
        if (day < 10) {
            dayStr = "0" + day;
        }
        if (month < 10) {
            monthStr = "0" + month;
        }
        return dayStr + "-" + monthStr + "-" + partialYearStr;
    };
    DashService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashService);
    return DashService;
}());



/***/ }),

/***/ "./src/app/header-side-menu/header-side-menu.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/header-side-menu/header-side-menu.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nul {\r\n  list-style: none;\r\n  padding:0;\r\n  margin:0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color:white;\r\n}\r\n\r\n.spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n}\r\n\r\n.sticky {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  z-index: 10;\r\n}\r\n\r\nmat-toolbar {\r\n  background-color: rgba(62, 89, 105, 0.863);\r\n}\r\n\r\n.btn-selected {\r\n  color: rgba(71, 139, 170, 0.932);\r\n  background-color: rgba(212, 216, 218, 0.911);\r\n}\r\n\r\n.btn-menu {\r\n  color: white;\r\n}\r\n\r\n.logo {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 150px;\r\n}\r\n\r\n.menu-dots {\r\n  width: 40px;\r\n  color: rgba(255, 255, 255, 0.932);\r\n}\r\n\r\n.sticky {\r\n    --default-height: 64px;\r\n    z-index: 900;\r\n    top: 0;\r\n    height: var(--default-height);\r\n  }\r\n\r\n.sticky-side-menu {\r\n    --default-height: 70px;\r\n    top: 0;\r\n    height: var(--default-height);\r\n  }\r\n\r\n/*\r\n  Side menu\r\n  */\r\n\r\n.mat-drawer-container {\r\n    width: 233px;\r\n    height: 570px;\r\n}\r\n\r\n.menu-color {\r\n  color: goldenrod;\r\n  padding-right: 8px;\r\n}\r\n\r\n.mat-list-item {\r\n  color:maroon;\r\n}\r\n\r\n.mat-nav-list {\r\n  color:maroon;\r\n}\r\n\r\n.mat-list-base .mat-list-option .mat-list-item-content {\r\n  padding: 0px 24px;\r\n}\r\n\r\n.hr-bottom {\r\n  color:rgba(128, 0, 0, 0.623);\r\n}\r\n\r\n.menu-list-item-selected {\r\n  color: goldenrod;\r\n}\r\n\r\n.maroon {\r\n  color: maroon;\r\n}\r\n\r\n.user-header {\r\n  position: relative;\r\n  left: 5px;\r\n  top: 2px;\r\n  padding: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyLXNpZGUtbWVudS9oZWFkZXItc2lkZS1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLE1BQU07SUFDTiw2QkFBNkI7RUFDL0I7O0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsTUFBTTtJQUNOLDZCQUE2QjtFQUMvQjs7QUFFQTs7R0FFQzs7QUFFRDtJQUNFLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci1zaWRlLW1lbnUvaGVhZGVyLXNpZGUtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6MDtcclxuICBtYXJnaW46MDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxudWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zdGlja3kge1xyXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MiwgODksIDEwNSwgMC44NjMpO1xyXG59XHJcblxyXG4uYnRuLXNlbGVjdGVkIHtcclxuICBjb2xvcjogcmdiYSg3MSwgMTM5LCAxNzAsIDAuOTMyKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMiwgMjE2LCAyMTgsIDAuOTExKTtcclxufVxyXG5cclxuLmJ0bi1tZW51IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5tZW51LWRvdHMge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTMyKTtcclxufVxyXG5cclxuLnN0aWNreSB7XHJcbiAgICAtLWRlZmF1bHQtaGVpZ2h0OiA2NHB4O1xyXG4gICAgei1pbmRleDogOTAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiB2YXIoLS1kZWZhdWx0LWhlaWdodCk7XHJcbiAgfVxyXG4gIC5zdGlja3ktc2lkZS1tZW51IHtcclxuICAgIC0tZGVmYXVsdC1oZWlnaHQ6IDcwcHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBoZWlnaHQ6IHZhcigtLWRlZmF1bHQtaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgU2lkZSBtZW51XHJcbiAgKi9cclxuICBcclxuICAubWF0LWRyYXdlci1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDIzM3B4O1xyXG4gICAgaGVpZ2h0OiA1NzBweDtcclxufVxyXG5cclxuLm1lbnUtY29sb3Ige1xyXG4gIGNvbG9yOiBnb2xkZW5yb2Q7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcblxyXG4ubWF0LWxpc3QtaXRlbSB7XHJcbiAgY29sb3I6bWFyb29uO1xyXG59XHJcblxyXG4ubWF0LW5hdi1saXN0IHtcclxuICBjb2xvcjptYXJvb247XHJcbn1cclxuXHJcbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saXN0LWl0ZW0tY29udGVudCB7XHJcbiAgcGFkZGluZzogMHB4IDI0cHg7XHJcbn1cclxuXHJcbi5oci1ib3R0b20ge1xyXG4gIGNvbG9yOnJnYmEoMTI4LCAwLCAwLCAwLjYyMyk7XHJcbn1cclxuXHJcbi5tZW51LWxpc3QtaXRlbS1zZWxlY3RlZCB7XHJcbiAgY29sb3I6IGdvbGRlbnJvZDtcclxufVxyXG5cclxuLm1hcm9vbiB7XHJcbiAgY29sb3I6IG1hcm9vbjtcclxufVxyXG5cclxuLnVzZXItaGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogNXB4O1xyXG4gIHRvcDogMnB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/header-side-menu/header-side-menu.component.html":
/*!******************************************************************!*\
  !*** ./src/app/header-side-menu/header-side-menu.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"sticky\">\r\n  <span>\r\n    <img\r\n      class=\"logo\"\r\n      src=\"../../assets/images/logo-white.png\"\r\n      alt=\"Voguel Banking\"\r\n      routerLink=\"/\"\r\n    />\r\n  </span>\r\n  <span class=\"spacer\"></span>\r\n  <ul>\r\n    <li>\r\n      <a\r\n        mat-button\r\n        routerLink=\"/login\"\r\n        *ngIf=\"!userIsAuthenticated\"\r\n        routerLinkActive=\"btn-selected\"\r\n        >Log in</a\r\n      >\r\n    </li>\r\n    <li>\r\n      <a\r\n        mat-button\r\n        routerLink=\"/signup\"\r\n        *ngIf=\"!userIsAuthenticated\"\r\n        routerLinkActive=\"btn-selected\"\r\n        >Sign up</a\r\n      >\r\n    </li>\r\n    <li>\r\n      <button\r\n        mat-button\r\n        class=\"btn-menu user-header\"\r\n        *ngIf=\"userIsAuthenticated\"\r\n      >\r\n        {{ user.name + \" \" + user.surname }}\r\n      </button>\r\n    </li>\r\n\r\n    <li>\r\n      <button mat-icon-button (click)=\"onLogout()\" *ngIf=\"userIsAuthenticated\">\r\n        <mat-icon class=\"menu-dots\">logout</mat-icon>\r\n      </button>\r\n    </li>\r\n  </ul>\r\n</mat-toolbar>\r\n\r\n<!--Left side menu-->\r\n<mat-sidenav-container class=\"sticky-side-menu\" *ngIf=\"userIsAuthenticated\">\r\n  <mat-sidenav-content class=\"mat-drawer-container\">\r\n    <mat-nav-list>\r\n      <a\r\n        mat-list-item\r\n        routerLink=\"/\"\r\n        routerLinkActive=\"menu-list-item-selected\"\r\n      >\r\n        <mat-icon class=\"menu-color\">dashboard</mat-icon> Dashboard\r\n      </a>\r\n      <hr color=\"maroon\" />\r\n      <a mat-list-item>\r\n        <mat-icon class=\"menu-color\">account_balance_wallet</mat-icon>Accounts\r\n      </a>\r\n\r\n      <hr class=\"hr-bottom\" />\r\n    </mat-nav-list>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/header-side-menu/header-side-menu.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/header-side-menu/header-side-menu.component.ts ***!
  \****************************************************************/
/*! exports provided: HeaderSideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSideMenuComponent", function() { return HeaderSideMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _dashboard_component_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard-component/dashboard.service */ "./src/app/dashboard-component/dashboard.service.ts");




var HeaderSideMenuComponent = /** @class */ (function () {
    /**
     * Here we inject two services:
     * 1. authService - to check if user is authenticated
     * 2. dashService - If an user is authenticated, we load its full name from dashService
     *
     */
    function HeaderSideMenuComponent(authService, dashService) {
        this.authService = authService;
        this.dashService = dashService;
        this.isLoading = false;
        this.userIsAuthenticated = false;
        this.user = {
            name: "",
            surname: "",
        };
    }
    HeaderSideMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        var userId = this.authService.getUserId();
        this.dashService.getUserData();
        this.userSub = this.dashService
            .getUserDataListener()
            .subscribe(function (userData) {
            _this.isLoading = false;
        });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
        });
    };
    HeaderSideMenuComponent.prototype.ngOnDestroy = function () {
        this.authStatusSub.unsubscribe();
        this.userSub.unsubscribe();
    };
    HeaderSideMenuComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    HeaderSideMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-header",
            template: __webpack_require__(/*! ./header-side-menu.component.html */ "./src/app/header-side-menu/header-side-menu.component.html"),
            styles: [__webpack_require__(/*! ./header-side-menu.component.css */ "./src/app/header-side-menu/header-side-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _dashboard_component_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashService"]])
    ], HeaderSideMenuComponent);
    return HeaderSideMenuComponent;
}());



/***/ }),

/***/ "./src/app/help/help.component.css":
/*!*****************************************!*\
  !*** ./src/app/help/help.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nmat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nbutton {\r\n margin-right: 2mm;\r\n margin-top: 1mm;\r\n}\r\n\r\n.mat-raised-button.mat-red {\r\n  background-color: rgba(197, 59, 59, 0.863);\r\n  color: #ffffff;\r\n  margin-top: -12px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.button {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\nmat-spinner {\r\n  margin: auto;\r\n}\r\n\r\n:host {\r\n  display: flex;\r\n  position: relative;\r\n  left: 133px;\r\n  bottom: 513px;\r\n  justify-content: center;\r\n  margin: 15px 4px;\r\n}\r\n\r\n.mat-form-field {\r\n  width: 100%;\r\n  min-width: 300px;\r\n}\r\n\r\nmat-card {\r\n  position: relative;\r\n  display: block;\r\n  background-color: #fffffff5;\r\n  bottom: 64px;\r\n  left: 76px;\r\n  margin-right: 51px;\r\n  margin-left:30px;\r\n  width: -webkit-fill-available;\r\n}\r\n\r\nmat-card-title,\r\nmat-card-content {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nmat-card-title {\r\n  font-weight: 400;\r\n  font-size: 22px;\r\n}\r\n\r\n.logo-login {\r\n  position: relative;\r\n  left: 85px;\r\n}\r\n\r\n.logo-name {\r\n  color: rgba(182, 182, 182, 0.925);\r\n}\r\n\r\nul {\r\n  list-style: none; \r\n  padding:0;\r\n  margin:0;\r\n}\r\n\r\np {\r\n  text-align: justify;\r\n  text-justify: inter-word;\r\n}\r\n\r\nvideo {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.box-video {\r\n  display: -webkit-inline-box;\r\n  position: relative;\r\n  flex-direction: column;\r\n  margin: 16px;\r\n  width: 39%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscC9oZWxwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7QUFDaEI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUMvQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvaGVscC9oZWxwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gbWFyZ2luLXJpZ2h0OiAybW07XHJcbiBtYXJnaW4tdG9wOiAxbW07XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NywgNTksIDU5LCAwLjg2Myk7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgbWFyZ2luLXRvcDogLTEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbm1hdC1zcGlubmVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAxMzNweDtcclxuICBib3R0b206IDUxM3B4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMTVweCA0cHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmZjU7XHJcbiAgYm90dG9tOiA2NHB4O1xyXG4gIGxlZnQ6IDc2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MXB4O1xyXG4gIG1hcmdpbi1sZWZ0OjMwcHg7XHJcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbn1cclxuXHJcbm1hdC1jYXJkLXRpdGxlLFxyXG5tYXQtY2FyZC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtY2FyZC10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5sb2dvLWxvZ2luIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogODVweDtcclxufVxyXG5cclxuLmxvZ28tbmFtZSB7XHJcbiAgY29sb3I6IHJnYmEoMTgyLCAxODIsIDE4MiwgMC45MjUpO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTsgXHJcbiAgcGFkZGluZzowO1xyXG4gIG1hcmdpbjowO1xyXG59XHJcblxyXG5wIHtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcclxufVxyXG5cclxudmlkZW8ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmJveC12aWRlbyB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMTZweDtcclxuICB3aWR0aDogMzklO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/help/help.component.html":
/*!******************************************!*\
  !*** ./src/app/help/help.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <mat-card layout='row'>\r\n    <mat-card-title><h3>Help section</h3></mat-card-title>\r\n    <hr>\r\n    <mat-card-content>\r\n      <ul>\r\n      <li>\r\n          <h3>Video tutorial</h3>\r\n          <p>\r\n            <video width=\"400\" controls poster=\"http://localhost:3000/repository/images/ebankhelp3.jpg\" controlsList=\"nodownload\">\r\n              <source src=\"http://localhost:3000/repository/videos/ebankhelp2.mp4\"  type=\"video/mp4\">\r\n              Your web browser does not support video.\r\n            </video>\r\n          </p>\r\n        </li>\r\n      <li>\r\n          <h3>Forgotten username or password</h3>\r\n        <p justify=\"even\">\r\n          Ukoliko ste zaboravili korisničko ime ili lozinku, ili zaključali vaš nalog unosom pogrešne\r\n          kombinacije korisničkog imena i lozinke, potrebno je da ponovo napravite nalog.</p>\r\n          <p>Zatim je potrebno izabrati opciju Napravite novi nalog a zatim popunjavate tražene podatke kao prilikom Kreiranja novog korisničkog naloga.</p>\r\n          <p>1. Meni Vam omogućuje da na lak način pristupite željenim uslugama. Odabirom opcije iz...\r\n         </li>\r\n      </ul>\r\n      <mat-spinner *ngIf = \"isLoading\"></mat-spinner>\r\n    </mat-card-content>\r\n  </mat-card>\r\n"

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
        this.isLoading = false;
    }
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/help/help.component.css")]
        })
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-create/mime-type.validator.ts":
/*!**********************************************************!*\
  !*** ./src/app/posts/post-create/mime-type.validator.ts ***!
  \**********************************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var mimeType = function (control) {
    if (typeof (control.value) === 'string') { // ako je slika blob vrati null
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    var file = control.value;
    var fileReader = new FileReader();
    var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
        fileReader.addEventListener('loadend', function () {
            var arr = new Uint8Array(fileReader.result).subarray(0, 4);
            var header = '';
            var isValid = false;
            // tslint:disable-next-line: prefer-for-of
            for (var i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case '89504e47':
                    isValid = true;
                    break;
                case 'ffd8ffe0':
                case 'ffd8ffe1':
                case 'ffd8ffe2':
                case 'ffd8ffe3':
                case 'ffd8ffe8':
                    isValid = true;
                    break;
                default:
                    isValid = false;
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.css":
/*!*************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nmat-form-field, textarea\r\n{\r\n  width: 100%;\r\n}\r\n\r\nbutton{\r\n margin-right: 2mm;\r\n margin-top: 1mm;\r\n}\r\n\r\nmat-spinner {\r\n  margin: auto;\r\n}\r\n\r\n/*\r\n* Special way of defining CSS element to be aplied only to 'file' type of input\r\n*/\r\n\r\ninput[type=\"file\"]{\r\n  visibility: hidden;\r\n}\r\n\r\n.image-preview {\r\n  height: 5rem;\r\n  margin: 1rem 0;\r\n}\r\n\r\n.image-preview img {\r\n  height:100%;\r\n}\r\n\r\n.mat-raised-button.mat-red {\r\n  background-color: rgba(197, 59, 59, 0.863);\r\n  color: #ffffff;\r\n}\r\n\r\n.align {\r\n  position: relative;\r\n  left: 240px;\r\n  bottom: 561px; \r\n  width: 736px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1jcmVhdGUvcG9zdC1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0VBRUUsV0FBVztBQUNiOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0NBRUM7O0FBQ0Q7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdC1jcmVhdGUvcG9zdC1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5tYXQtZm9ybS1maWVsZCwgdGV4dGFyZWFcclxue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5idXR0b257XHJcbiBtYXJnaW4tcmlnaHQ6IDJtbTtcclxuIG1hcmdpbi10b3A6IDFtbTtcclxufVxyXG5cclxubWF0LXNwaW5uZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLypcclxuKiBTcGVjaWFsIHdheSBvZiBkZWZpbmluZyBDU1MgZWxlbWVudCB0byBiZSBhcGxpZWQgb25seSB0byAnZmlsZScgdHlwZSBvZiBpbnB1dFxyXG4qL1xyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXXtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5pbWFnZS1wcmV2aWV3IHtcclxuICBoZWlnaHQ6IDVyZW07XHJcbiAgbWFyZ2luOiAxcmVtIDA7XHJcbn1cclxuXHJcbi5pbWFnZS1wcmV2aWV3IGltZyB7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NywgNTksIDU5LCAwLjg2Myk7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5hbGlnbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDI0MHB4O1xyXG4gIGJvdHRvbTogNTYxcHg7IFxyXG4gIHdpZHRoOiA3MzZweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.html":
/*!**************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-card class=\"align\">\r\n  <mat-spinner class=\"color\" *ngIf=\"isLoading\"></mat-spinner>\r\n  <form [formGroup]=\"form\" (submit)=\"onSavePost()\" *ngIf=\"!isLoading\">\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"title\" placeholder=\"Payment title\">\r\n      <mat-error *ngIf=\"form.get('title').invalid\">{{error.title}}</mat-error>\r\n    </mat-form-field>\r\n    <div>\r\n      <button mat-stroked-button type=\"button\" (click)=\"filePicker.click()\">Choose picture</button>\r\n      <input type=\"file\" #filePicker (change)=\"onImagePicked($event)\">\r\n    </div>\r\n    <div class=\"image-preview\" *ngIf=\"imagePreview!=='' && imagePreview && form.get('image').valid\">\r\n      <img [src]=\"imagePreview\" [alt]=\"form.value.title\"></div>\r\n    <mat-form-field>\r\n      <textarea matInput rows=\"4\" name=\"content\" formControlName=\"content\" placeholder=\"Payment details:\">\r\n          </textarea>\r\n      <mat-error *ngIf=\"form.get('content').invalid\">{{error.content}}</mat-error>\r\n    </mat-form-field>\r\n    <button mat-raised-button color=\"red\" type=\"submit\">Commit</button>\r\n    <button mat-raised-button color=\"red\" (click)=\"form.reset()\">Abort</button>\r\n  </form>\r\n  </mat-card>\r\n"

/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.ts ***!
  \************************************************************/
/*! exports provided: PostCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function() { return PostCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mime_type_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mime-type.validator */ "./src/app/posts/post-create/mime-type.validator.ts");






var PostCreateComponent = /** @class */ (function () {
    function PostCreateComponent(postsService, route) {
        this.postsService = postsService;
        this.route = route;
        this.enteredTitle = '';
        this.enteredContent = '';
        this.mode = 'create';
        this.isLoading = false;
        this.error = { title: 'Enter title', content: 'Enter details' };
    }
    PostCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)] // payment title must be longer than 3 chrs
            }),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_5__["mimeType"]] })
        });
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('postId')) {
                _this.mode = 'edit';
                _this.postId = paramMap.get('postId');
                _this.isLoading = true;
                _this.postsService.getPost(_this.postId).subscribe(function (postData) {
                    _this.isLoading = false;
                    _this.post = { id: postData._id, title: postData.title, content: postData.content, imagePath: postData.imagePath };
                    _this.form.setValue({
                        title: _this.post.title,
                        content: _this.post.content,
                        image: _this.post.imagePath
                    });
                });
            }
            else {
                _this.mode = 'create';
                _this.postId = null;
            }
        });
    };
    PostCreateComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get('image').updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    PostCreateComponent.prototype.onSavePost = function () {
        if (this.form.invalid) {
            return;
        }
        this.isLoading = true;
        if (this.mode === 'create') {
            this.postsService.addPost(this.form.value.title, this.form.value.content, this.form.value.image);
        }
        else {
            this.postsService.updatePost(this.postId, this.form.value.title, this.form.value.content, this.form.value.image);
        }
        this.form.reset();
    };
    PostCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-create',
            template: __webpack_require__(/*! ./post-create.component.html */ "./src/app/posts/post-create/post-create.component.html"),
            styles: [__webpack_require__(/*! ./post-create.component.css */ "./src/app/posts/post-create/post-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], PostCreateComponent);
    return PostCreateComponent;
}());

/**
 * When we want to edit ultility payment we fetch its data form
 * posts.service.ts and not from server. Same method should be applied for
 * dahboard component.
 */ 


/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n:host{\r\n  display:block;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.info-text{\r\n  text-align:center;\r\n}\r\n\r\nmat-spinner {\r\n  margin: auto;\r\n}\r\n\r\n.post-image {\r\n  width: 70%;\r\n}\r\n\r\n.post-image img {\r\n  display: block;\r\n  margin-left: auto;\r\n  /*margin-right: auto;*/\r\n  width: 50%;\r\n  box-shadow: 1px 1px 5px rgba(0,0,0,0.5);\r\n}\r\n\r\nmat-expansion-panel {\r\n  display: block;\r\n  position: relative;\r\n  margin-left: 10px;\r\n  margin-top: 2px;\r\n  margin-bottom: 2px;\r\n  left: 233px;\r\n  bottom: 577px;\r\n  width: 90%;\r\n  background-color: #fffffff6;\r\n  }\r\n\r\n.info {\r\n    display: block;\r\n    position: relative;\r\n    margin-left: 10px;\r\n    margin-top: 2px;\r\n    margin-bottom: 2px;\r\n    left: 233px;\r\n    bottom: 577px;\r\n    width: 90%;\r\n    background-color: #fffffff6;\r\n  }\r\n\r\nmat-paginator {\r\n    position: relative;\r\n    bottom: 577px;\r\n    display: block;\r\n    -webkit-margin-before: 3px;\r\n            margin-block-start: 3px;\r\n    -webkit-margin-after: 9px;\r\n            margin-block-end: 9px;\r\n    margin-left: 244px;\r\n    width: auto;\r\n    padding: 0px 78px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCOztBQUVGO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLFVBQVU7SUFDViwyQkFBMkI7RUFDN0I7O0FBRUY7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7SUFDZCwwQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wb3N0cy9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbjpob3N0e1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmluZm8tdGV4dHtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxubWF0LXNwaW5uZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnBvc3QtaW1hZ2Uge1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5wb3N0LWltYWdlIGltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgLyptYXJnaW4tcmlnaHQ6IGF1dG87Ki9cclxuICB3aWR0aDogNTAlO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwwLDAsMC41KTtcclxufVxyXG5cclxubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgbGVmdDogMjMzcHg7XHJcbiAgYm90dG9tOiA1NzdweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZmNjtcclxuICB9XHJcblxyXG4uaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgbGVmdDogMjMzcHg7XHJcbiAgICBib3R0b206IDU3N3B4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZmNjtcclxuICB9XHJcbiAgXHJcbm1hdC1wYWdpbmF0b3Ige1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiA1NzdweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAzcHg7XHJcbiAgICBtYXJnaW4tYmxvY2stZW5kOiA5cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjQ0cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDBweCA3OHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n<!--hide list of pyments untill all of them are loaded form server-->\r\n<mat-accordion multi=\"true\" *ngIf=\"posts.length>0 && !isLoading\">\r\n  <mat-expansion-panel *ngFor=\"let post of posts\">\r\n    <mat-expansion-panel-header>\r\n      {{post.title}}\r\n    </mat-expansion-panel-header>\r\n    <hr>\r\n    <div class='post-image'>\r\n      <img [src]='post.imagePath' [alt]='post.title'></div>\r\n    <mat-action-row>\r\n      <a mat-button color=\"primary\" [routerLink]=\"['/edit', post.id]\">Edit</a>\r\n      <button mat-button color=\"warn\" (click)=\"onDelete(post.id)\">Delete</button>\r\n    </mat-action-row>\r\n    {{post.content}}\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n<div class=\"footer\">\r\n  <mat-paginator [length]=\"totalPosts\" [pageSize]=\"postsPerPage\" [pageSizeOptions]=\"pageSizeOptions\"\r\n    (page)=\"onChangedPage($event)\" *ngIf=\"posts.length > 0\">\r\n  </mat-paginator>\r\n</div>\r\n\r\n<mat-card layout='row' class=\"info\" *ngIf=\"posts.length<=0 && !isLoading\">\r\n  <mat-card-content class=\"mat-body-1 info-text\">There are no payments.</mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.ts ***!
  \********************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");




var PostListComponent = /** @class */ (function () {
    function PostListComponent(postsService, authService) {
        this.postsService = postsService;
        this.authService = authService;
        this.posts = [];
        this.isLoading = false; // varible to set if we are fetching data (in a meantime front-end shows spinner)
        this.totalPosts = 0;
        this.postsPerPage = 2;
        this.currentPage = 1;
        this.pageSizeOptions = [1, 2, 5, 10];
        this.userIsAuthenticated = false;
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true; // show loading spinner on frontend
        var userId = this.authService.getUserId(); //get logged in user id
        this.postsService.getPosts(this.postsPerPage, this.currentPage, userId); // get chunk of utility payments
        this.postSub = this.postsService.getPostUpdateListener()
            .subscribe(function (postData) {
            _this.isLoading = false;
            _this.totalPosts = postData.postCount;
            _this.posts = postData.posts;
        });
        this.userIsAuthenticated = this.authService.getIsAuth(); //check if user is authenticated
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
        });
    };
    PostListComponent.prototype.ngOnDestroy = function () {
        this.postSub.unsubscribe();
    };
    PostListComponent.prototype.onChangedPage = function (pageData) {
        this.isLoading = true;
        this.currentPage = pageData.pageIndex + 1;
        this.postsPerPage = pageData.pageSize;
        var userId = this.authService.getUserId();
        this.postsService.getPosts(this.postsPerPage, this.currentPage, userId);
    };
    PostListComponent.prototype.onDelete = function (postId) {
        var _this = this;
        this.isLoading = true;
        this.postsService.deletePost(postId).subscribe(function () {
            var userId = _this.authService.getUserId();
            _this.postsService.getPosts(_this.postsPerPage, _this.currentPage, userId);
        });
    };
    PostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-list',
            template: __webpack_require__(/*! ./post-list.component.html */ "./src/app/posts/post-list/post-list.component.html"),
            styles: [__webpack_require__(/*! ./post-list.component.css */ "./src/app/posts/post-list/post-list.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.service.ts":
/*!****************************************!*\
  !*** ./src/app/posts/posts.service.ts ***!
  \****************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var PostsService = /** @class */ (function () {
    function PostsService(http, router) {
        this.http = http;
        this.router = router;
        this.posts = [];
        this.postsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    // function to fetch utility payments from server in a chunks for a given userId
    PostsService.prototype.getPosts = function (postsPerPage, currentPage, userId) {
        var _this = this;
        var queryParams = "?pagesize=" + [
            postsPerPage,
        ] + "&page=" + currentPage + "&creator=" + userId;
        this.http
            .get("http://localhost:3000/api/posts" + queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (postData) {
            return {
                posts: postData.posts.map(function (post) {
                    return {
                        id: post._id,
                        title: post.title,
                        content: post.content,
                        imagePath: post.imagePath,
                        creator: post.creator,
                    };
                }),
                maxPosts: postData.maxPosts,
            };
        }))
            .subscribe(function (transformedPostsData) {
            _this.posts = transformedPostsData.posts;
            _this.postsUpdated.next({
                posts: _this.posts.slice(),
                postCount: transformedPostsData.maxPosts,
            });
        });
    };
    PostsService.prototype.getPostUpdateListener = function () {
        return this.postsUpdated.asObservable();
    };
    PostsService.prototype.getPost = function (id) {
        return this.http.get("http://localhost:3000/api/posts/" + id);
    };
    PostsService.prototype.addPost = function (title, content, image) {
        var _this = this;
        var postData = new FormData();
        postData.append("title", title);
        postData.append("content", content);
        postData.append("image", image, title);
        this.http
            .post("http://localhost:3000/api/posts/", postData)
            .subscribe(function (responseData) {
            _this.router.navigate(["/list"]); // upon successful payment editing navigate user to list of all payments
        });
    };
    // method for updating utility payment
    PostsService.prototype.updatePost = function (id, title, content, image) {
        var _this = this;
        var postData;
        if (typeof image === "object") {
            postData = new FormData();
            postData.append("id", id);
            postData.append("title", title);
            postData.append("content", content);
            postData.append("image", image, title);
        }
        else {
            postData = {
                id: id,
                title: title,
                content: content,
                imagePath: image,
            };
        }
        this.http
            .put("http://localhost:3000/api/posts/" + id, postData)
            .subscribe(function (response) {
            _this.router.navigate(["/list"]);
        });
    };
    PostsService.prototype.deletePost = function (postId) {
        return this.http.delete("http://localhost:3000/api/posts/" + postId);
    };
    PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/app/test-component/test.component.css":
/*!***************************************************!*\
  !*** ./src/app/test-component/test.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtY29tcG9uZW50L3Rlc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/test-component/test.component.html":
/*!****************************************************!*\
  !*** ./src/app/test-component/test.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n <h3 align=\"center\">Test component</h3>"

/***/ }),

/***/ "./src/app/test-component/test.component.ts":
/*!**************************************************!*\
  !*** ./src/app/test-component/test.component.ts ***!
  \**************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test-component/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/test-component/test.component.css")]
        })
    ], TestComponent);
    return TestComponent;
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
var environment = {
    production: false
};


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
/**
 * First part of function call start Angular app in browser and the
 * second part starts module (defined in app.module.ts in export class)
 */
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bouslama\Desktop\Voguel Test\angular\E-BANK-Web-App\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map