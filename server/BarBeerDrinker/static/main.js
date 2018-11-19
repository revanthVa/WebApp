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
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _beerslist_beerslist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./beerslist/beerslist.component */ "./src/app/beerslist/beerslist.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _manf_list_manf_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manf-list/manf-list.component */ "./src/app/manf-list/manf-list.component.ts");
/* harmony import */ var _manf_details_manf_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manf-details/manf-details.component */ "./src/app/manf-details/manf-details.component.ts");
/* harmony import */ var _bar_analytics_bar_analytics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bar-analytics/bar-analytics.component */ "./src/app/bar-analytics/bar-analytics.component.ts");
/* harmony import */ var _bartender_bartender_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bartender/bartender.component */ "./src/app/bartender/bartender.component.ts");
/* harmony import */ var _bartender_analytics_bartender_analytics_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bartender-analytics/bartender-analytics.component */ "./src/app/bartender-analytics/bartender-analytics.component.ts");
/* harmony import */ var _sqlquery_sqlquery_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sqlquery/sqlquery.component */ "./src/app/sqlquery/sqlquery.component.ts");
/* harmony import */ var _modification_modification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modification/modification.component */ "./src/app/modification/modification.component.ts");
/* harmony import */ var _drinkerslist_drinkerslist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./drinkerslist/drinkerslist.component */ "./src/app/drinkerslist/drinkerslist.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: 'static',
        pathMatch: 'full',
        redirectTo: 'bars'
    },
    {
        path: 'bars',
        pathMatch: 'full',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]
    },
    {
        path: 'bars/:bar',
        pathMatch: 'full',
        component: _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__["BarDetailsComponent"]
    },
    {
        path: 'beers',
        pathMatch: 'full',
        component: _beerslist_beerslist_component__WEBPACK_IMPORTED_MODULE_4__["BeerslistComponent"]
    },
    {
        path: 'beers/:beer',
        pathMatch: 'full',
        component: _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_5__["BeerDetailsComponent"]
    },
    {
        path: 'manfs',
        pathMatch: 'full',
        component: _manf_list_manf_list_component__WEBPACK_IMPORTED_MODULE_6__["ManfListComponent"]
    },
    {
        path: 'manfs/:manf',
        pathMatch: 'full',
        component: _manf_details_manf_details_component__WEBPACK_IMPORTED_MODULE_7__["ManfDetailsComponent"]
    },
    {
        path: 'barsAnalytics',
        pathMatch: 'full',
        component: _bar_analytics_bar_analytics_component__WEBPACK_IMPORTED_MODULE_8__["BarAnalyticsComponent"]
    },
    {
        path: 'bartenders',
        pathMatch: 'full',
        component: _bartender_bartender_component__WEBPACK_IMPORTED_MODULE_9__["BartenderComponent"]
    },
    {
        path: 'bartendersAnalytics',
        pathMatch: 'full',
        component: _bartender_analytics_bartender_analytics_component__WEBPACK_IMPORTED_MODULE_10__["BartenderAnalyticsComponent"]
    },
    {
        path: 'sqlquery',
        pathMatch: 'full',
        component: _sqlquery_sqlquery_component__WEBPACK_IMPORTED_MODULE_11__["SqlqueryComponent"]
    },
    {
        path: 'modification',
        pathMatch: 'full',
        component: _modification_modification_component__WEBPACK_IMPORTED_MODULE_12__["ModificationComponent"]
    },
    {
        path: 'drinkers',
        pathMatch: 'full',
        component: _drinkerslist_drinkerslist_component__WEBPACK_IMPORTED_MODULE_13__["DrinkerslistComponent"]
    },
    {
        path: 'drinkers/:drinker',
        pathMatch: 'full',
        component: _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_14__["DrinkerDetailsComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/bars\">BarBeerDrinker</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/bars\">Bars <span class=\"sr-only\">(current) </span></a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/drinkers\">Drinkers</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/beers\">Beers </a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/manfs\">Manufacturers</a>\n      </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/bartenders\">Bartenders</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/modification\">Modify</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/sqlquery\">SQLQuery</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n\n\n\n<router-outlet></router-outlet>\n"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bar-beer-drinker-ui';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _beerslist_beerslist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./beerslist/beerslist.component */ "./src/app/beerslist/beerslist.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _manf_list_manf_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./manf-list/manf-list.component */ "./src/app/manf-list/manf-list.component.ts");
/* harmony import */ var _manf_details_manf_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./manf-details/manf-details.component */ "./src/app/manf-details/manf-details.component.ts");
/* harmony import */ var _bar_analytics_bar_analytics_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bar-analytics/bar-analytics.component */ "./src/app/bar-analytics/bar-analytics.component.ts");
/* harmony import */ var _bartender_bartender_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bartender/bartender.component */ "./src/app/bartender/bartender.component.ts");
/* harmony import */ var _bartender_analytics_bartender_analytics_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bartender-analytics/bartender-analytics.component */ "./src/app/bartender-analytics/bartender-analytics.component.ts");
/* harmony import */ var _modification_modification_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modification/modification.component */ "./src/app/modification/modification.component.ts");
/* harmony import */ var _sqlquery_sqlquery_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sqlquery/sqlquery.component */ "./src/app/sqlquery/sqlquery.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _drinkerslist_drinkerslist_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./drinkerslist/drinkerslist.component */ "./src/app/drinkerslist/drinkerslist.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"],
                _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_8__["BarDetailsComponent"],
                _beerslist_beerslist_component__WEBPACK_IMPORTED_MODULE_9__["BeerslistComponent"],
                _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_10__["BeerDetailsComponent"],
                _manf_list_manf_list_component__WEBPACK_IMPORTED_MODULE_12__["ManfListComponent"],
                _manf_details_manf_details_component__WEBPACK_IMPORTED_MODULE_13__["ManfDetailsComponent"],
                _bar_analytics_bar_analytics_component__WEBPACK_IMPORTED_MODULE_14__["BarAnalyticsComponent"],
                _bartender_bartender_component__WEBPACK_IMPORTED_MODULE_15__["BartenderComponent"],
                _bartender_analytics_bartender_analytics_component__WEBPACK_IMPORTED_MODULE_16__["BartenderAnalyticsComponent"],
                _modification_modification_component__WEBPACK_IMPORTED_MODULE_17__["ModificationComponent"],
                _sqlquery_sqlquery_component__WEBPACK_IMPORTED_MODULE_18__["SqlqueryComponent"],
                _drinkerslist_drinkerslist_component__WEBPACK_IMPORTED_MODULE_21__["DrinkerslistComponent"],
                _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_22__["DrinkerDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_11__["DropdownModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_20__["ButtonModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bar-analytics/bar-analytics.component.css":
/*!***********************************************************!*\
  !*** ./src/app/bar-analytics/bar-analytics.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci1hbmFseXRpY3MvYmFyLWFuYWx5dGljcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/bar-analytics/bar-analytics.component.html":
/*!************************************************************!*\
  !*** ./src/app/bar-analytics/bar-analytics.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Bar Analytics</h1>\n  </div>\n</div>\n\n<div>\n  <br>\n  <p-dropdown class = \"float-right text-left\" *ngIf=\"selectBeers\" [options]=\"selectBeers\"  (onChange)=\"sortBeers($event.value)\" ></p-dropdown>\n  <p-dropdown class = \"float-right text-left\" *ngIf=\"filterOptions\" [options]=\"filterOptions\"  (onChange)=\"sortBy($event.value)\"></p-dropdown>\n  <div id = \"bargraph\"></div>\n</div>"

/***/ }),

/***/ "./src/app/bar-analytics/bar-analytics.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/bar-analytics/bar-analytics.component.ts ***!
  \**********************************************************/
/*! exports provided: BarAnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarAnalyticsComponent", function() { return BarAnalyticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarAnalyticsComponent = /** @class */ (function () {
    function BarAnalyticsComponent(barService, route) {
        var _this = this;
        this.barService = barService;
        this.route = route;
        barService.getBeersOnly().subscribe(function (data) {
            console.log(data);
            _this.beers = data;
        });
        barService.getBeersOnly().subscribe(function (data) {
            _this.selectBeers = data.map(function (beers) {
                return {
                    label: beers.name,
                    value: beers.name,
                };
            });
        });
        this.filterOptions = [
            {
                'label': 'Monday',
                'value': 'Monday'
            },
            {
                'label': 'Tuesday',
                'value': 'Tuesday'
            },
            {
                'label': 'Wednesday',
                'value': 'Wednesday'
            },
            {
                'label': 'Thursday',
                'value': 'Thursday'
            },
            {
                'label': 'Friday',
                'value': 'Friday'
            },
            {
                'label': 'Saturday',
                'value': 'Saturday'
            },
            {
                'label': 'Sunday',
                'value': 'Sunday'
            },
        ];
        this.currBeer = "AleSmith IPA";
        this.currDay = "Monday";
        this.barService.getBarAnalytics("AleSmith IPA", "Monday").subscribe(function (data) {
            console.log(data);
            var bar = [];
            var Sold = [];
            data.forEach(function (bars) {
                bar.push(bars.bar);
                Sold.push(bars.Sold);
            });
            _this.renderChart(bar, Sold);
        });
    }
    BarAnalyticsComponent.prototype.sortBeers = function (selectedOption) {
        var _this = this;
        this.currBeer = selectedOption;
        if (selectedOption === selectedOption) {
            this.barService.getBarAnalytics(selectedOption, this.currDay).subscribe(function (data) {
                console.log(data);
                var bar = [];
                var Sold = [];
                data.forEach(function (bars) {
                    bar.push(bars.bar);
                    Sold.push(bars.Sold);
                });
                _this.renderChart(bar, Sold);
            });
        }
    };
    BarAnalyticsComponent.prototype.sortBy = function (selectedOption) {
        var _this = this;
        this.currDay = selectedOption;
        if (selectedOption === selectedOption) {
            this.barService.getBarAnalytics(this.currBeer, selectedOption).subscribe(function (data) {
                console.log(data);
                var bar = [];
                var Sold = [];
                data.forEach(function (bars) {
                    bar.push(bars.bar);
                    Sold.push(bars.Sold);
                });
                _this.renderChart(bar, Sold);
            });
        }
    };
    BarAnalyticsComponent.prototype.ngOnInit = function () {
    };
    BarAnalyticsComponent.prototype.renderChart = function (bar, Sold) {
        Highcharts.chart('bargraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top Bars of a Specific Beer'
            },
            xAxis: {
                categories: bar,
                title: {
                    text: 'Bar Name'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Amount Sold'
                },
                overflow: 'justify'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: Sold
                }]
        });
    };
    BarAnalyticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-analytics',
            template: __webpack_require__(/*! ./bar-analytics.component.html */ "./src/app/bar-analytics/bar-analytics.component.html"),
            styles: [__webpack_require__(/*! ./bar-analytics.component.css */ "./src/app/bar-analytics/bar-analytics.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_2__["BarsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BarAnalyticsComponent);
    return BarAnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/bar-details/bar-details.component.css":
/*!*******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci1kZXRhaWxzL2Jhci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">{{ barName }}</h1>\n    <p class=\"bar-details\">\n      {{ barDetails?.addr }} <span>|</span> {{barDetails?.city }} \n      <span>|</span> {{barDetails?.state }}\n        <br>\n        {{ barDetails?.phone }}\n        <br>\n        {{ barDetails?.license }}\n    </p>\n  </div>\n</div>\n\n<div>\n  <br>\n  <div id = \"bargraph\"></div>\n</div>\n\n\n<br>\n<br>\n\n<div>\n  <br>\n  <p-dropdown class = \"float-right text-left\" *ngIf=\"filterOptions\" [options]=\"filterOptions\"  (onChange)=\"sortBy($event.value)\"></p-dropdown>\n  <div id = \"bargraph2\"></div>\n</div>\n\n<div>\n  <br>\n  <p-dropdown class = \"float-right text-left\" *ngIf=\"filterOptions2\" [options]=\"filterOptions2\"  (onChange)=\"sortByTime($event.value)\"></p-dropdown>\n  <div id = \"bargraph3\"></div>\n</div>\n\n<div>\n  <br>\n  <div id = \"bargraph4\"></div>\n</div>"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.ts ***!
  \******************************************************/
/*! exports provided: BarDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarDetailsComponent", function() { return BarDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarDetailsComponent = /** @class */ (function () {
    function BarDetailsComponent(barService, route) {
        var _this = this;
        this.barService = barService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.barName = paramMap.get('bar');
            barService.getBar(_this.barName).subscribe(function (data) {
                _this.barDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Bar not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occured on the server. Please check the browser console.');
                }
            });
            _this.filterOptions = [
                {
                    'label': 'Monday',
                    'value': 'Monday'
                },
                {
                    'label': 'Tuesday',
                    'value': 'Tuesday'
                },
                {
                    'label': 'Wednesday',
                    'value': 'Wednesday'
                },
                {
                    'label': 'Thursday',
                    'value': 'Thursday'
                },
                {
                    'label': 'Friday',
                    'value': 'Friday'
                },
                {
                    'label': 'Saturday',
                    'value': 'Saturday'
                },
                {
                    'label': 'Sunday',
                    'value': 'Sunday'
                },
            ];
            _this.filterOptions2 = [
                {
                    'label': 'Monday',
                    'value': 'Monday'
                },
                {
                    'label': 'Tuesday',
                    'value': 'Tuesday'
                },
                {
                    'label': 'Wednesday',
                    'value': 'Wednesday'
                },
                {
                    'label': 'Thursday',
                    'value': 'Thursday'
                },
                {
                    'label': 'Friday',
                    'value': 'Friday'
                },
                {
                    'label': 'Saturday',
                    'value': 'Saturday'
                },
                {
                    'label': 'Sunday',
                    'value': 'Sunday'
                },
                {
                    'label': 'Week',
                    'value': 'Week'
                }
            ];
            _this.barService.getTopBeers(_this.barName, "Monday").subscribe(function (data) {
                console.log(data);
                var beername = [];
                var Quantity = [];
                data.forEach(function (topBeers) {
                    beername.push(topBeers.beername);
                    Quantity.push(topBeers.Quantity);
                });
                _this.renderChart2(beername, Quantity);
            });
            _this.barService.getTimeDistribution(_this.barName, "Monday").subscribe(function (data) {
                console.log(data);
                var Hour = [];
                var Quantity = [];
                data.forEach(function (bar) {
                    Hour.push(bar.Hour);
                    Quantity.push(bar.Quantity);
                });
                _this.renderChart3(_this.convertTime(Hour), Quantity);
            });
            barService.getTopSpenderGraph(_this.barName).subscribe(function (data) {
                _this.topSpenders = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Bar not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occured on the server. Please check the browser console.');
                }
            });
        });
        this.barService.getTopSpenderGraph(this.barName).subscribe(function (data) {
            console.log(data);
            var Drinkersname = [];
            var totalprice = [];
            data.forEach(function (topSpenders) {
                Drinkersname.push(topSpenders.Drinkersname);
                totalprice.push(topSpenders.totalprice);
            });
            _this.renderChart(Drinkersname, totalprice);
        });
        this.barService.getInventoryFraction(this.barName).subscribe(function (data) {
            console.log(data);
            var Dateday = [];
            var fraction = [];
            data.forEach(function (fractionInv) {
                Dateday.push(fractionInv.Dateday);
                fraction.push(fractionInv.fraction);
            });
            _this.renderChart4(Dateday, fraction);
        });
    }
    BarDetailsComponent.prototype.ngOnInit = function () {
    };
    BarDetailsComponent.prototype.sortBy = function (selectedOption) {
        var _this = this;
        if (selectedOption === selectedOption) {
            this.barService.getTopBeers(this.barName, selectedOption).subscribe(function (data) {
                console.log(data);
                var beername = [];
                var Quantity = [];
                data.forEach(function (topBeers) {
                    beername.push(topBeers.beername);
                    Quantity.push(topBeers.Quantity);
                });
                _this.renderChart2(beername, Quantity);
            });
        }
    };
    BarDetailsComponent.prototype.sortByTime = function (selectedOption) {
        var _this = this;
        if ((selectedOption === selectedOption) && (selectedOption != 'Week')) {
            this.barService.getTimeDistribution(this.barName, selectedOption).subscribe(function (data) {
                console.log(data);
                var Hour = [];
                var Quantity = [];
                data.forEach(function (bar) {
                    Hour.push(bar.Hour);
                    Quantity.push(bar.Quantity);
                });
                _this.renderChart3(_this.convertTime(Hour), Quantity);
            });
        }
        if (selectedOption === 'Week') {
            this.barService.getTimeDistributionWeek(this.barName).subscribe(function (data) {
                console.log(data);
                var Hour = [];
                var Quantity = [];
                data.forEach(function (bar) {
                    Hour.push(bar.Hour);
                    Quantity.push(bar.Quantity);
                });
                _this.renderChart3(_this.convertTime(Hour), Quantity);
            });
        }
    };
    BarDetailsComponent.prototype.renderChart = function (Drinkersname, totalprice) {
        Highcharts.chart('bargraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top Spenders'
            },
            xAxis: {
                categories: Drinkersname,
                title: {
                    text: 'Name'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Money Spent'
                },
                overflow: 'justify'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: totalprice
                }]
        });
    };
    BarDetailsComponent.prototype.renderChart2 = function (beername, Quantity) {
        Highcharts.chart('bargraph2', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Most Popular Beers'
            },
            xAxis: {
                categories: beername,
                title: {
                    text: 'Beer Name'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Amount Sold'
                },
                overflow: 'justify'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: Quantity
                }]
        });
    };
    BarDetailsComponent.prototype.renderChart3 = function (Hour, Quantity) {
        Highcharts.chart('bargraph3', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Time Distribution of Sales'
            },
            xAxis: {
                categories: Hour,
                title: {
                    text: 'Time'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Sales'
                },
                overflow: 'justify'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: Quantity
                }]
        });
    };
    BarDetailsComponent.prototype.renderChart4 = function (Dateday, fraction) {
        Highcharts.chart('bargraph4', {
            chart: {
                type: 'column'
            },
            title: {
                text: '% of Inventory Sold on Each Day'
            },
            xAxis: {
                categories: Dateday,
                title: {
                    text: 'Day'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: '% of Inventory Sold'
                },
                overflow: 'justify'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: fraction
                }]
        });
    };
    BarDetailsComponent.prototype.convertTime = function (Hour) {
        var i;
        var strHour = [];
        var strHour = new Array();
        if (parseInt(Hour[0]) == 0) {
            strHour[0] = "12 AM";
        }
        for (i = 1; i < Hour.length; i++) {
            if (parseInt(Hour[i]) < 12) {
                strHour[i] = Hour[i] + " AM";
            }
            if (parseInt(Hour[i]) == 12) {
                strHour[i] = Hour[i] + " PM";
            }
            if (parseInt(Hour[i]) > 12) {
                strHour[i] = Hour[i] % 12 + " PM";
            }
        }
        return strHour;
    };
    BarDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-details',
            template: __webpack_require__(/*! ./bar-details.component.html */ "./src/app/bar-details/bar-details.component.html"),
            styles: [__webpack_require__(/*! ./bar-details.component.css */ "./src/app/bar-details/bar-details.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_2__["BarsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BarDetailsComponent);
    return BarDetailsComponent;
}());



/***/ }),

/***/ "./src/app/bars.service.ts":
/*!*********************************!*\
  !*** ./src/app/bars.service.ts ***!
  \*********************************/
/*! exports provided: BarsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarsService", function() { return BarsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarsService = /** @class */ (function () {
    function BarsService(http) {
        this.http = http;
    }
    BarsService.prototype.getBars = function () {
        return this.http.get('/api/bar');
    };
    BarsService.prototype.getBar = function (bar) {
        return this.http.get('api/bar/' + bar);
    };
    BarsService.prototype.getTopSpenderGraph = function (bar) {
        return this.http.get('api/bar/' + bar + '/top10spenders');
    };
    BarsService.prototype.getTopBeers = function (bar, day) {
        return this.http.get('/api/bar/' + bar + '/' + day + '/top10Beers');
    };
    BarsService.prototype.getTimeDistribution = function (bar, day) {
        return this.http.get('/api/bar/' + bar + '/' + day + '/timeDistribution');
    };
    BarsService.prototype.getTimeDistributionWeek = function (bar) {
        return this.http.get('/api/bar/' + bar + '/timeDistributionWeek');
    };
    BarsService.prototype.getInventoryFraction = function (bar) {
        return this.http.get('/api/bar/' + bar + '/fractionInventory');
    };
    BarsService.prototype.getBarAnalytics = function (beer, day) {
        return this.http.get('/api/barAnalytics/' + beer + '/' + day);
    };
    BarsService.prototype.getBeersOnly = function () {
        return this.http.get('/api/beersOnly');
    };
    BarsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BarsService);
    return BarsService;
}());



/***/ }),

/***/ "./src/app/bartender-analytics/bartender-analytics.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/bartender-analytics/bartender-analytics.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhcnRlbmRlci1hbmFseXRpY3MvYmFydGVuZGVyLWFuYWx5dGljcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/bartender-analytics/bartender-analytics.component.html":
/*!************************************************************************!*\
  !*** ./src/app/bartender-analytics/bartender-analytics.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n  <h1 class=\"display-4\">Bartender Analytics</h1>\n  <p class=\"lead\">Filter in the conditions below to see some advanced statistics and analytics about all the bartenders</p>\n  <p class=\"lead\"> \n      <b>***Make sure to choose a bar first and select the start shift corresponding to the end shift***</b>\n  </div>\n</div>\n<div>\n  <br>\n  <p-dropdown placeholder=\"Shift End\" class = \"float-right text-left\" *ngIf=\"selectEnd\" [options]=\"selectEnd\" (onChange)=\"sortEnd($event.value)\"  ></p-dropdown>\n  <p-dropdown placeholder=\"Shift Start\" class = \"float-right text-left\" *ngIf=\"selectStart\" [options]=\"selectStart\" (onChange)=\"sortStart($event.value)\" ></p-dropdown>\n  <p-dropdown placeholder=\"Bar\" class = \"float-right text-left\" *ngIf=\"selectBars\" [options]=\"selectBars\" (onChange)=\"sortBars($event.value)\" ></p-dropdown>\n</div>\n\n<div>\n  <br>\n  <div id = \"bargraph\"></div>\n</div>"

/***/ }),

/***/ "./src/app/bartender-analytics/bartender-analytics.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/bartender-analytics/bartender-analytics.component.ts ***!
  \**********************************************************************/
/*! exports provided: BartenderAnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BartenderAnalyticsComponent", function() { return BartenderAnalyticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
/* harmony import */ var _bartenders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bartenders.service */ "./src/app/bartenders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BartenderAnalyticsComponent = /** @class */ (function () {
    function BartenderAnalyticsComponent(barService, bartenderService, route) {
        var _this = this;
        this.barService = barService;
        this.bartenderService = bartenderService;
        this.route = route;
        barService.getBars().subscribe(function (data) {
            console.log(data);
            _this.bars = data;
        });
        barService.getBars().subscribe(function (data) {
            _this.selectBars = data.map(function (Bar) {
                return {
                    label: Bar.name,
                    value: Bar.name,
                };
            });
        });
        bartenderService.getBartendersHours("Club No Minors").subscribe(function (data) {
            console.log(data);
            _this.BartenderHours = data;
        });
        bartenderService.getBartendersHours("sdsfdsff").subscribe(function (data) {
            _this.selectStart = data.map(function (Bar) {
                return {
                    label: Bar.start,
                    value: Bar.start,
                };
            });
        });
        bartenderService.getBartendersHours("sddsfdfs").subscribe(function (data) {
            _this.selectEnd = data.map(function (Bar) {
                return {
                    label: Bar.end,
                    value: Bar.end,
                };
            });
        });
    }
    BartenderAnalyticsComponent.prototype.sortBars = function (selectedOption) {
        var _this = this;
        this.currStart = '';
        this.currEnd = '';
        this.currBar = selectedOption;
        this.bartenderService.getBartendersHours(this.currBar).subscribe(function (data) {
            _this.shiftHours = data;
        });
        {
            this.bartenderService.getBartendersHours(this.currBar).subscribe(function (data) {
                _this.selectStart = data.map(function (Bartender) {
                    return {
                        label: Bartender.start,
                        value: Bartender.start,
                    };
                });
            });
            this.bartenderService.getBartendersHours(this.currBar).subscribe(function (dataa) {
                _this.selectEnd = dataa.map(function (er) {
                    return {
                        label: er.end,
                        value: er.end,
                    };
                });
            });
        }
    };
    BartenderAnalyticsComponent.prototype.sortStart = function (selectedOption) {
        var _this = this;
        if (this.currEnd = '') {
            return;
        }
        this.currStart = selectedOption;
        if (selectedOption === selectedOption) {
            this.bartenderService.getBartendersAnalytics(this.currBar, selectedOption, this.currEnd).subscribe(function (data) {
                console.log(data);
                var Bartendersname = [];
                var sold = [];
                data.forEach(function (bars) {
                    Bartendersname.push(bars.Bartendersname);
                    sold.push(bars.sold);
                });
                _this.renderChart(Bartendersname, sold);
            });
        }
    };
    BartenderAnalyticsComponent.prototype.sortEnd = function (selectedOption) {
        var _this = this;
        this.currEnd = selectedOption;
        if (selectedOption === selectedOption) {
            this.bartenderService.getBartendersAnalytics(this.currBar, this.currStart, selectedOption).subscribe(function (data) {
                console.log(data);
                var Bartendersname = [];
                var sold = [];
                data.forEach(function (bars) {
                    Bartendersname.push(bars.Bartendersname);
                    sold.push(bars.sold);
                });
                _this.renderChart(Bartendersname, sold);
            });
        }
    };
    BartenderAnalyticsComponent.prototype.ngOnInit = function () {
    };
    BartenderAnalyticsComponent.prototype.renderChart = function (Bartendersname, sold) {
        Highcharts.chart('bargraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Beers Sold by Different Bartenders'
            },
            xAxis: {
                categories: Bartendersname,
                title: {
                    text: 'Bartenders'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Amount Sold'
                },
                overflow: 'justify'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: sold
                }]
        });
    };
    BartenderAnalyticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bartender-analytics',
            template: __webpack_require__(/*! ./bartender-analytics.component.html */ "./src/app/bartender-analytics/bartender-analytics.component.html"),
            styles: [__webpack_require__(/*! ./bartender-analytics.component.css */ "./src/app/bartender-analytics/bartender-analytics.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_2__["BarsService"],
            _bartenders_service__WEBPACK_IMPORTED_MODULE_3__["BartendersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BartenderAnalyticsComponent);
    return BartenderAnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/bartender/bartender.component.css":
/*!***************************************************!*\
  !*** ./src/app/bartender/bartender.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhcnRlbmRlci9iYXJ0ZW5kZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/bartender/bartender.component.html":
/*!****************************************************!*\
  !*** ./src/app/bartender/bartender.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n  <h1 class=\"display-4\">Bartenders</h1>\n  <p class=\"lead\">Filter in the conditions below to see some advanced statistics and analytics about a bartender.\n      <p class=\"lead\"> \n        <b>***Make sure to select a bartender after selecting a different bar.***</b>\n  <a class=\"nav-link\" routerLink=\"/bartendersAnalytics\">Bartender Analytics</a>\n  </div>\n</div>\n<div>\n  <p class=\"float-left\">Time of shift:\n    {{ bartenderShift[0].Dateday }}\n      <br>\n      {{ bartenderShift[0].start }} <span>-</span> {{bartenderShift[0].end }} \n</p>\n</div>\n<div>\n  <p-dropdown placeholder=\"Bartender\" class = \"float-right text-left\" *ngIf=\"selectBartenders\" [options]=\"selectBartenders\"  (onChange)=\"sortBartenders($event.value)\" ></p-dropdown>\n  <p-dropdown placeholder=\"Bar\" class = \"float-right text-left\" *ngIf=\"selectBars\" [options]=\"selectBars\"  (onChange)=\"sortBars($event.value)\" ></p-dropdown>\n  <div id = \"bargraph\"></div>\n</div>"

/***/ }),

/***/ "./src/app/bartender/bartender.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bartender/bartender.component.ts ***!
  \**************************************************/
/*! exports provided: BartenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BartenderComponent", function() { return BartenderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
/* harmony import */ var _bartenders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bartenders.service */ "./src/app/bartenders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BartenderComponent = /** @class */ (function () {
    function BartenderComponent(barService, bartenderService, route) {
        var _this = this;
        this.barService = barService;
        this.bartenderService = bartenderService;
        this.route = route;
        barService.getBars().subscribe(function (data) {
            _this.selectBars = data.map(function (Bar) {
                return {
                    label: Bar.name,
                    value: Bar.name,
                };
            });
            _this.bars = data;
        });
        bartenderService.getBartendersFromBars("sfdf").subscribe(function (data) {
            _this.selectBartenders = data.map(function (Bartender) {
                return {
                    label: Bartender.Bartendersname,
                    value: Bartender.Bartendersname,
                };
            });
            _this.bartendersfrombars = data;
        });
        this.bartenderService.getBartenderSales("33 Taps", "Meilani Wells").subscribe(function (data) {
            console.log(data);
            var Itemsname = [];
            var Sold = [];
            data.forEach(function (bars) {
                Itemsname.push(bars.Itemsname);
                Sold.push(bars.Sold);
            });
        });
        this.currDateday = '';
        this.bartenderService.getBartenderShift(this.currBartender).subscribe(function (data) {
            _this.bartenderShift = data;
        });
    }
    BartenderComponent.prototype.sortBars = function (selectedOption) {
        var _this = this;
        this.currBar = selectedOption;
        if (selectedOption === selectedOption) {
            this.bartenderService.getBartendersFromBars(this.currBar).subscribe(function (data) {
                _this.selectBartenders = data.map(function (Bartender) {
                    return {
                        label: Bartender.Bartendersname,
                        value: Bartender.Bartendersname,
                    };
                });
            });
            this.bartenderService.getBartenderSales(selectedOption, this.currBartender).subscribe(function (data) {
                console.log(data);
                var Itemsname = [];
                var Sold = [];
                data.forEach(function (bars) {
                    Itemsname.push(bars.Itemsname);
                    Sold.push(bars.Sold);
                });
                _this.renderChart(Itemsname, Sold);
            });
        }
    };
    BartenderComponent.prototype.sortBartenders = function (selectedOption) {
        var _this = this;
        this.currBartender = selectedOption;
        if (selectedOption === selectedOption) {
            this.bartenderService.getBartenderSales(this.currBar, selectedOption).subscribe(function (data) {
                console.log(data);
                var Itemsname = [];
                var Sold = [];
                data.forEach(function (bars) {
                    Itemsname.push(bars.Itemsname);
                    Sold.push(bars.Sold);
                });
                _this.renderChart(Itemsname, Sold);
            });
            this.bartenderService.getBartenderShift(this.currBartender).subscribe(function (data) {
                _this.bartenderShift = data;
            });
        }
    };
    BartenderComponent.prototype.ngOnInit = function () {
    };
    BartenderComponent.prototype.renderChart = function (Itemsname, Sold) {
        Highcharts.chart('bargraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Bartender Sales of Different Beers'
            },
            xAxis: {
                categories: Itemsname,
                title: {
                    text: 'Beer Name'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Amount Sold'
                },
                overflow: 'justify'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: Sold
                }]
        });
    };
    BartenderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bartender',
            template: __webpack_require__(/*! ./bartender.component.html */ "./src/app/bartender/bartender.component.html"),
            styles: [__webpack_require__(/*! ./bartender.component.css */ "./src/app/bartender/bartender.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_2__["BarsService"],
            _bartenders_service__WEBPACK_IMPORTED_MODULE_3__["BartendersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BartenderComponent);
    return BartenderComponent;
}());



/***/ }),

/***/ "./src/app/bartenders.service.ts":
/*!***************************************!*\
  !*** ./src/app/bartenders.service.ts ***!
  \***************************************/
/*! exports provided: BartendersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BartendersService", function() { return BartendersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BartendersService = /** @class */ (function () {
    function BartendersService(http) {
        this.http = http;
    }
    BartendersService.prototype.getBartendersFromBars = function (name) {
        return this.http.get('/api/bartender/' + name);
    };
    BartendersService.prototype.getBartendersHours = function (name) {
        return this.http.get('/api/bartendersHours/' + name);
    };
    BartendersService.prototype.getBartendersAnalytics = function (name, start, end) {
        return this.http.get('/api/bartenderAnalytics/' + name + '/' + start + '/' + end);
    };
    BartendersService.prototype.getBartenderSales = function (name, bartender) {
        return this.http.get('api/bartender/' + name + '/' + bartender + '/BartenderSales');
    };
    BartendersService.prototype.getBartenderShift = function (name) {
        return this.http.get('api/bartendershift/' + name);
    };
    BartendersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BartendersService);
    return BartendersService;
}());



/***/ }),

/***/ "./src/app/beer-details/beer-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXItZGV0YWlscy9iZWVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n      <h1 class=\"display-4\">{{ beerName }}</h1>\n      <p class=\"bar-details\"> \n         Manufacturer: {{ beerDetails?.manf }}\n      </p>\n  </div>\n</div>\n\n\n<div>\n  <br>\n  <div id = \"bargraph\"></div>\n</div>\n\n<div>\n    <br>\n    <div id = \"bargraph2\"></div>\n  </div>\n\n  \n<div>\n  <br>\n  <div id = \"bargraph3\"></div>\n</div>"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.ts ***!
  \********************************************************/
/*! exports provided: BeerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerDetailsComponent", function() { return BeerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeerDetailsComponent = /** @class */ (function () {
    function BeerDetailsComponent(beerService, route) {
        var _this = this;
        this.beerService = beerService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.beerName = paramMap.get('beer');
            beerService.getBeer(_this.beerName).subscribe(function (data) {
                _this.beerDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Beer not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occured on the server. Please check the browser console.');
                }
            });
            _this.beerName = paramMap.get('beer');
            beerService.getTop10Bars(_this.beerName).subscribe(function (data) {
                _this.topBars = data;
            });
        });
        beerService.getTimeDistribution(this.beerName).subscribe(function (data) {
            _this.timeDist = data;
        });
        this.beerService.getTop10Bars(this.beerName).subscribe(function (data) {
            console.log(data);
            var Barsname = [];
            var BeersSold = [];
            data.forEach(function (beer) {
                Barsname.push(beer.Barsname);
                BeersSold.push(beer.BeersSold);
            });
            _this.renderChart(Barsname, BeersSold);
        });
        this.beerService.getTimeDistribution(this.beerName).subscribe(function (data) {
            console.log(data);
            var Quantity = [];
            var Hour = [];
            var Hour = new Array();
            data.forEach(function (beer) {
                Hour.push(beer.Hour);
                Quantity.push(beer.Quantity);
            });
            _this.renderChart3(_this.convertTime(Hour), Quantity);
        });
        this.beerService.getTop10Drinkers(this.beerName).subscribe(function (data) {
            console.log(data);
            var DrinkersName = [];
            var amountBought = [];
            data.forEach(function (beer) {
                DrinkersName.push(beer.Drinkersname);
                amountBought.push(beer.amountBought);
            });
            _this.renderChart2(DrinkersName, amountBought);
        });
    }
    BeerDetailsComponent.prototype.ngOnInit = function () {
    };
    BeerDetailsComponent.prototype.renderChart = function (Barsname, BeersSold) {
        Highcharts.chart('bargraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top Selling Bars'
            },
            xAxis: {
                categories: Barsname,
                title: {
                    text: 'Bar Name'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Beers Sold'
                },
                overflow: 'justify'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: BeersSold
                }]
        });
    };
    BeerDetailsComponent.prototype.renderChart2 = function (DrinkersName, amountBought) {
        Highcharts.chart('bargraph2', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top Buying Drinkers'
            },
            xAxis: {
                categories: DrinkersName,
                title: {
                    text: 'Drinker Name'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Amount Bought'
                },
                overflow: 'justify'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: amountBought
                }]
        });
    };
    BeerDetailsComponent.prototype.renderChart3 = function (Hour, Quantity) {
        Highcharts.chart('bargraph3', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Time Distribution of Sales'
            },
            xAxis: {
                categories: Hour,
                title: {
                    text: 'Time'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Amount Bought'
                },
                overflow: 'justify'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: Quantity
                }]
        });
    };
    BeerDetailsComponent.prototype.convertTime = function (Hour) {
        var i;
        var strHour = [];
        var strHour = new Array();
        if (parseInt(Hour[0]) == 0) {
            strHour[0] = "12 AM";
        }
        for (i = 1; i < Hour.length; i++) {
            if (parseInt(Hour[i]) < 12) {
                strHour[i] = Hour[i] + " AM";
            }
            if (parseInt(Hour[i]) == 12) {
                strHour[i] = Hour[i] + " PM";
            }
            if (parseInt(Hour[i]) > 12) {
                strHour[i] = Hour[i] % 12 + " PM";
            }
        }
        return strHour;
    };
    BeerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beer-details',
            template: __webpack_require__(/*! ./beer-details.component.html */ "./src/app/beer-details/beer-details.component.html"),
            styles: [__webpack_require__(/*! ./beer-details.component.css */ "./src/app/beer-details/beer-details.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_2__["BeersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BeerDetailsComponent);
    return BeerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/beers.service.ts":
/*!**********************************!*\
  !*** ./src/app/beers.service.ts ***!
  \**********************************/
/*! exports provided: BeersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeersService", function() { return BeersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeersService = /** @class */ (function () {
    function BeersService(http) {
        this.http = http;
    }
    BeersService.prototype.getBeers = function () {
        return this.http.get('/api/beer');
    };
    BeersService.prototype.getBeer = function (beer) {
        return this.http.get('api/beer/' + beer);
    };
    BeersService.prototype.getTop10Bars = function (beer) {
        return this.http.get('api/beer/' + beer + '/top10Bars');
    };
    BeersService.prototype.getTop10Drinkers = function (beer) {
        return this.http.get('api/beer/' + beer + '/top10Drinkers');
    };
    BeersService.prototype.getTimeDistribution = function (beer) {
        return this.http.get('api/beer/' + beer + '/timeDistribution');
    };
    BeersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BeersService);
    return BeersService;
}());



/***/ }),

/***/ "./src/app/beerslist/beerslist.component.css":
/*!***************************************************!*\
  !*** ./src/app/beerslist/beerslist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXJzbGlzdC9iZWVyc2xpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/beerslist/beerslist.component.html":
/*!****************************************************!*\
  !*** ./src/app/beerslist/beerslist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">Beers</h1>\n      <p class=\"lead\">Select a beer below to see some advanced statistics and analytics about it.</p>\n    </div>\n  </div>\n\n  <div class=\"container\">\n      <p-table [value]=\"beers\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n              <th>Name</th>\n              <th>Manufacturer</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-beer>\n            <tr>\n              \n              <td>\n                <a routerLink=\"/beers/{{ beer.name }}\">\n                  {{beer.name}}\n                </a>\n              </td>\n              <td>{{beer.manf}}</td>\n            </tr>\n        </ng-template>\n      </p-table>\n    </div>\n  \n    <br><br>"

/***/ }),

/***/ "./src/app/beerslist/beerslist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/beerslist/beerslist.component.ts ***!
  \**************************************************/
/*! exports provided: BeerslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerslistComponent", function() { return BeerslistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeerslistComponent = /** @class */ (function () {
    function BeerslistComponent(BeerService) {
        this.BeerService = BeerService;
        this.getBeers();
    }
    BeerslistComponent.prototype.ngOnInit = function () {
    };
    BeerslistComponent.prototype.getBeers = function () {
        var _this = this;
        this.BeerService.getBeers().subscribe(function (data) {
            _this.beers = data;
        }, function (error) {
            alert('Could not retrieve a list of beer');
        });
    };
    BeerslistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beerslist',
            template: __webpack_require__(/*! ./beerslist.component.html */ "./src/app/beerslist/beerslist.component.html"),
            styles: [__webpack_require__(/*! ./beerslist.component.css */ "./src/app/beerslist/beerslist.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_1__["BeersService"]])
    ], BeerslistComponent);
    return BeerslistComponent;
}());



/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXItZGV0YWlscy9kcmlua2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n      <h1 class=\"display-4\">{{ drinkerName }}</h1>\n  </div>\n</div>\n\n<div class=\"container\">\n    <a>Transactions</a>\n    <br>\n  <p-table [value]=\"transacts\">\n    <ng-template pTemplate=\"header\">\n        <tr>\n          <th>Barsname</th>\n          <th>Transaction ID</th>\n          <th>Time</th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-transact>\n        <tr>\n          <td>{{transact.Barsname}}</td>\n          <td>{{transact.BillstransactionID}}</td>\n          <td>{{transact.timet}}</td>\n        </tr>\n    </ng-template>\n  </p-table>\n</div>\n\n<div class=\"container\">\n  <br>\n  <div id = \"bargraph\"></div>\n</div>\n\n<div class=\"container\">\n    <p-dropdown [options]=\"weeks\" [(ngModel)]=\"selectedWeek\" (onChange)=\"onChange($event)\" class=\"float-left text-left\" [style]=\"{'width':'200px'}\"></p-dropdown>\n    <br>\n    <div id = \"bargraph2\"></div>\n  </div>\n\n  <br>\n  <br>"

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.ts ***!
  \**************************************************************/
/*! exports provided: DrinkerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerDetailsComponent", function() { return DrinkerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _drinkers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drinkers.service */ "./src/app/drinkers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DrinkerDetailsComponent = /** @class */ (function () {
    function DrinkerDetailsComponent(drinkerService, route) {
        var _this = this;
        this.drinkerService = drinkerService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.drinkerName = paramMap.get('drinker');
            drinkerService.getDrinker(_this.drinkerName).subscribe(function (data) {
                console.log(data);
                _this.drinkerDetails = data;
                console.log(_this.drinkerDetails);
                console.log(_this.drinkerDetails.phone);
            });
            //this.drinkerName = paramMap.get('drinker');
            drinkerService.getTransacts(_this.drinkerName).subscribe(function (data) {
                _this.transacts = data;
            });
        });
        this.drinkerService.getTopBeers(this.drinkerName).subscribe(function (data) {
            console.log(data);
            var BeersBought = [];
            var Quantity = [];
            data.forEach(function (beer) {
                BeersBought.push(beer.beername);
                Quantity.push(beer.quantity);
            });
            _this.renderChart(BeersBought, Quantity);
        });
        this.drinkerService.getSpending(this.drinkerName, "sunday").subscribe(function (data) {
            console.log(data);
            var Barsname = [];
            var total = [];
            data.forEach(function (beer) {
                Barsname.push(beer.Barsname);
                total.push(beer.totalprice);
            });
            _this.renderChart2(Barsname, total);
        });
        this.weeks = [
            { label: 'Sunday', value: 'Sunday' },
            { label: 'Monday', value: 'Monday' },
            { label: 'Tuesday', value: 'Tuesday' },
            { label: 'Wednesday', value: 'Wednesday' },
            { label: 'Thursday', value: 'Thursday' },
            { label: 'Friday', value: 'Friday' },
            { label: 'Saturday', value: 'Saturday' },
        ];
    }
    DrinkerDetailsComponent.prototype.onChange = function (event) {
        var _this = this;
        console.log(event.value);
        this.drinkerService.getSpending(this.drinkerName, event.value).subscribe(function (data) {
            console.log(data);
            var Barsname = [];
            var total = [];
            data.forEach(function (beer) {
                Barsname.push(beer.Barsname);
                total.push(beer.totalprice);
            });
            _this.renderChart2(Barsname, total);
        });
    };
    DrinkerDetailsComponent.prototype.ngOnInit = function () {
    };
    DrinkerDetailsComponent.prototype.renderChart = function (Beersname, Quantity) {
        Highcharts.chart('bargraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Most Ordered Beers'
            },
            xAxis: {
                categories: Beersname,
                title: {
                    text: 'Beer Name'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Quantity'
                },
                overflow: 'justify'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: Quantity
                }]
        });
    };
    DrinkerDetailsComponent.prototype.renderChart2 = function (Barsname, totalPrice) {
        Highcharts.chart('bargraph2', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Spending'
            },
            xAxis: {
                categories: Barsname,
                title: {
                    text: 'Bar'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Amount Spent'
                },
                overflow: 'justify'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: totalPrice
                }]
        });
    };
    DrinkerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinker-details',
            template: __webpack_require__(/*! ./drinker-details.component.html */ "./src/app/drinker-details/drinker-details.component.html"),
            styles: [__webpack_require__(/*! ./drinker-details.component.css */ "./src/app/drinker-details/drinker-details.component.css")]
        }),
        __metadata("design:paramtypes", [_drinkers_service__WEBPACK_IMPORTED_MODULE_2__["DrinkersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DrinkerDetailsComponent);
    return DrinkerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/drinkers.service.ts":
/*!*************************************!*\
  !*** ./src/app/drinkers.service.ts ***!
  \*************************************/
/*! exports provided: DrinkersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkersService", function() { return DrinkersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkersService = /** @class */ (function () {
    function DrinkersService(http) {
        this.http = http;
    }
    DrinkersService.prototype.getDrinkers = function () {
        return this.http.get('/api/drinker');
    };
    DrinkersService.prototype.getDrinker = function (drinker) {
        return this.http.get('api/drinker/' + drinker);
    };
    DrinkersService.prototype.getTopBeers = function (drinker) {
        return this.http.get('api/drinker/' + drinker + '/topbeers');
    };
    DrinkersService.prototype.getSpending = function (drinker, time) {
        return this.http.get('api/drinker/' + drinker + '/spend/' + time);
    };
    DrinkersService.prototype.getTransacts = function (drinker) {
        return this.http.get('/api/drinker/' + drinker + '/transacts');
    };
    DrinkersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DrinkersService);
    return DrinkersService;
}());



/***/ }),

/***/ "./src/app/drinkerslist/drinkerslist.component.css":
/*!*********************************************************!*\
  !*** ./src/app/drinkerslist/drinkerslist.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXJzbGlzdC9kcmlua2Vyc2xpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/drinkerslist/drinkerslist.component.html":
/*!**********************************************************!*\
  !*** ./src/app/drinkerslist/drinkerslist.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Drinkers</h1>\n    <p class=\"lead\">Select a drinker below to see some advanced statistics and analytics about him/her.</p>\n  </div>\n</div>\n\n<div class=\"container\">\n    <p-table [value]=\"drinkers\" [columns]=\"cols\" [paginator]=\"true\" [rows]=\"20\">\n        \n      <ng-template pTemplate=\"header\">\n          <tr>\n            <th>Name</th>\n            <th>Addr</th>\n            <th>City</th>\n            <th>Phone</th>\n            <th>State</th>\n          </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-drinker>\n          <tr>\n            <td>\n              <a routerLink=\"/drinkers/{{ drinker.name }}\">\n                {{drinker.name}}\n              </a>\n            </td>\n            <td>{{drinker.addr}}</td>\n            <td>{{drinker.city}}</td>\n            <td>{{drinker.phone}}</td>\n            <td>{{drinker.state}}</td>\n          </tr>\n      </ng-template>\n    </p-table>\n  </div>\n\n  <br><br>"

/***/ }),

/***/ "./src/app/drinkerslist/drinkerslist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/drinkerslist/drinkerslist.component.ts ***!
  \********************************************************/
/*! exports provided: DrinkerslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerslistComponent", function() { return DrinkerslistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drinkers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drinkers.service */ "./src/app/drinkers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkerslistComponent = /** @class */ (function () {
    function DrinkerslistComponent(DrinkerService) {
        this.DrinkerService = DrinkerService;
        this.getDrinkers();
    }
    DrinkerslistComponent.prototype.ngOnInit = function () {
    };
    DrinkerslistComponent.prototype.getDrinkers = function () {
        var _this = this;
        this.DrinkerService.getDrinkers().subscribe(function (data) {
            _this.drinkers = data;
        }, function (error) {
            alert('Could not retrieve a list of drinker');
        });
    };
    DrinkerslistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinkerslist',
            template: __webpack_require__(/*! ./drinkerslist.component.html */ "./src/app/drinkerslist/drinkerslist.component.html"),
            styles: [__webpack_require__(/*! ./drinkerslist.component.css */ "./src/app/drinkerslist/drinkerslist.component.css")]
        }),
        __metadata("design:paramtypes", [_drinkers_service__WEBPACK_IMPORTED_MODULE_1__["DrinkersService"]])
    ], DrinkerslistComponent);
    return DrinkerslistComponent;
}());



/***/ }),

/***/ "./src/app/manf-details/manf-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/manf-details/manf-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmYtZGV0YWlscy9tYW5mLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/manf-details/manf-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/manf-details/manf-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n      <h1 class=\"display-4\">{{ manfName }}</h1>\n  </div>\n</div>\n\n<div>\n  <br>\n  <div id = \"bargraph\"></div>\n</div>\n\n<div>\n  <br>\n  <div id = \"bargraph2\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/manf-details/manf-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/manf-details/manf-details.component.ts ***!
  \********************************************************/
/*! exports provided: ManfDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManfDetailsComponent", function() { return ManfDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manfs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manfs.service */ "./src/app/manfs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManfDetailsComponent = /** @class */ (function () {
    function ManfDetailsComponent(manfsService, route) {
        var _this = this;
        this.manfsService = manfsService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.manfName = paramMap.get('manf');
            _this.manfsService.getTop10Regions(_this.manfName).subscribe(function (data) {
                console.log(data);
                var citystate = [];
                var sold = [];
                data.forEach(function (manf) {
                    citystate.push(manf.city + ", " + manf.state);
                    sold.push(manf.sold);
                });
                _this.renderChart(citystate, sold);
            });
        });
        this.manfsService.getTop10RegionsLikes(this.manfName).subscribe(function (data) {
            console.log(data);
            var citystate = [];
            var manfLikes = [];
            data.forEach(function (manf) {
                citystate.push(manf.city + ", " + manf.state);
                manfLikes.push(manf.manfLikes);
            });
            _this.renderChart2(citystate, manfLikes);
        });
    }
    ManfDetailsComponent.prototype.ngOnInit = function () {
    };
    ManfDetailsComponent.prototype.renderChart = function (citystate, sold) {
        Highcharts.chart('bargraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top Sales by Region'
            },
            xAxis: {
                categories: citystate,
                title: {
                    text: 'Region'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Beers Sold'
                },
                overflow: 'justify'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: sold
                }]
        });
    };
    ManfDetailsComponent.prototype.renderChart2 = function (citystate, manfLikes) {
        Highcharts.chart('bargraph2', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Regions where ' + this.manfName + "'s" + ' beers are liked the most'
            },
            xAxis: {
                categories: citystate,
                title: {
                    text: 'Region'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Amount of Likes'
                },
                overflow: 'justify'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: manfLikes
                }]
        });
    };
    ManfDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manf-details',
            template: __webpack_require__(/*! ./manf-details.component.html */ "./src/app/manf-details/manf-details.component.html"),
            styles: [__webpack_require__(/*! ./manf-details.component.css */ "./src/app/manf-details/manf-details.component.css")]
        }),
        __metadata("design:paramtypes", [_manfs_service__WEBPACK_IMPORTED_MODULE_2__["ManfsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ManfDetailsComponent);
    return ManfDetailsComponent;
}());



/***/ }),

/***/ "./src/app/manf-list/manf-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/manf-list/manf-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmYtbGlzdC9tYW5mLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/manf-list/manf-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/manf-list/manf-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n  <h1 class=\"display-4\">Manufacturers</h1>\n  <p class=\"lead\">Select a manufacturer below to see some advanced statistics and analytics about it.</p>\n  </div>\n</div>\n\n   <div class=\"container\">\n      <p-table [value]=\"manfs\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n              <th>Manufacturer</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-manfs>\n            <tr>\n              <td>\n                <a routerLink=\"/manfs/{{ manfs.manf }}\">\n                  {{manfs.manf}}\n                </a>\n              </td>\n            </tr>\n        </ng-template>\n      </p-table>\n    </div>"

/***/ }),

/***/ "./src/app/manf-list/manf-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/manf-list/manf-list.component.ts ***!
  \**************************************************/
/*! exports provided: ManfListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManfListComponent", function() { return ManfListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _manfs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manfs.service */ "./src/app/manfs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManfListComponent = /** @class */ (function () {
    function ManfListComponent(manfService) {
        this.manfService = manfService;
    }
    ManfListComponent.prototype.ngOnInit = function () {
        this.getManfs();
    };
    ManfListComponent.prototype.getManfs = function () {
        var _this = this;
        this.manfService.getManfs().subscribe(function (data) {
            _this.manfs = data;
        }, function (error) {
            alert('Could not retrieve a list of manf');
        });
    };
    ManfListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manf-list',
            template: __webpack_require__(/*! ./manf-list.component.html */ "./src/app/manf-list/manf-list.component.html"),
            styles: [__webpack_require__(/*! ./manf-list.component.css */ "./src/app/manf-list/manf-list.component.css")]
        }),
        __metadata("design:paramtypes", [_manfs_service__WEBPACK_IMPORTED_MODULE_1__["ManfsService"]])
    ], ManfListComponent);
    return ManfListComponent;
}());



/***/ }),

/***/ "./src/app/manfs.service.ts":
/*!**********************************!*\
  !*** ./src/app/manfs.service.ts ***!
  \**********************************/
/*! exports provided: ManfsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManfsService", function() { return ManfsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManfsService = /** @class */ (function () {
    function ManfsService(http) {
        this.http = http;
    }
    ManfsService.prototype.getManfs = function () {
        return this.http.get('/api/manf');
    };
    ManfsService.prototype.getTop10Regions = function (manf) {
        return this.http.get('/api/manf/' + manf + '/top10Regions');
    };
    ManfsService.prototype.getTop10RegionsLikes = function (manf) {
        return this.http.get('api/manf/' + manf + '/top10RegionsLikes');
    };
    ManfsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ManfsService);
    return ManfsService;
}());



/***/ }),

/***/ "./src/app/modification.service.ts":
/*!*****************************************!*\
  !*** ./src/app/modification.service.ts ***!
  \*****************************************/
/*! exports provided: ModificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificationService", function() { return ModificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModificationService = /** @class */ (function () {
    function ModificationService(http) {
        this.http = http;
    }
    ModificationService.prototype.getModification = function (modification) {
        return this.http.get('/api/modification/' + encodeURIComponent(modification));
    };
    ModificationService.prototype.sendQuery = function (query) {
        return this.http.get('/api/update/' + query);
    };
    ModificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ModificationService);
    return ModificationService;
}());



/***/ }),

/***/ "./src/app/modification/modification.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modification/modification.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGlmaWNhdGlvbi9tb2RpZmljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modification/modification.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modification/modification.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">Modification Page</h1>\n       <p class=\"modify\" *ngIf=\"modify\">\n          </p>\n    </div>\n  </div>\n  <div class = \"container\">\n    <br>\n    <p-dropdown [options]=\"functions\" [(ngModel)]=\"funct\"></p-dropdown>\n    <p-dropdown [options]=\"tables\" [(ngModel)]=\"tbl\"></p-dropdown>\n    <textarea [rows]=\"5\" [cols]=\"10\" pInputTextarea autoResize=\"autoResize\"\n    type=\"text\" class=\"form-control\" id=\"query\" required [(ngModel)]=\"query\"\n    name=\"query\" placeholder=\"Enter Values, Set And/Or Where Parameters: &emsp; ex: (name, id) VALUES ('sam', 'qwerty');'\"></textarea>\n  </div>\n  <div class = \"container\" id = \"content\">\n  <br>\n  \n  <p-button label=\"Modify\" (onClick)=\"handleClick($event)\"></p-button>\n  <p id = \"Message\">{{ resultMessage }}</p>\n  </div>"

/***/ }),

/***/ "./src/app/modification/modification.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modification/modification.component.ts ***!
  \********************************************************/
/*! exports provided: ModificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificationComponent", function() { return ModificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modification.service */ "./src/app/modification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModificationComponent = /** @class */ (function () {
    function ModificationComponent(modService, route) {
        this.modService = modService;
        this.route = route;
        this.value = '';
        this.resultMessage = '';
        this.query = '';
        this.executedQuery = '';
        this.funct = 'INSERT INTO';
        this.tbl = 'Bars';
        this.functions = [
            { label: 'INSERT INTO', value: 'INSERT INTO' },
            { label: 'UPDATE', value: 'UPDATE' },
            { label: 'DELETE FROM', value: 'DELETE FROM' }
        ];
        this.tables = [
            { label: 'Bars', value: 'Bars' },
            { label: 'Bartenders', value: 'Bartenders' },
            { label: 'Beers', value: 'Beers' },
            { label: 'BillsNew', value: 'BillsNew' },
            { label: 'Bought', value: 'Bought' },
            { label: 'Date', value: 'Date' },
            { label: 'Drinks', value: 'Drinks' },
            { label: 'Foods', value: 'Frequents' },
            { label: 'Has', value: 'Has' },
            { label: 'Hours', value: 'Hours' },
            { label: 'Items', value: 'Items' },
            { label: 'Sells', value: 'Sells' },
            { label: 'Stocked', value: 'Stocked' },
            { label: 'Works', value: 'Works' }
        ];
    }
    ModificationComponent.prototype.handleClick = function () {
        var _this = this;
        if (this.query == '') {
            alert('Specify Parameters');
            //this.clickMessage = 'Please enter a query';
        }
        else {
            //this.query="INSERT INTO Test (name, id) VALUES ('"+this.beername+"', '"+this.manfname+"')";
            this.executedQuery = this.funct + ' ' + this.tbl + ' ' + this.query;
            console.log(this.executedQuery);
            this.modService.sendQuery(this.executedQuery).subscribe(function (data) {
                _this.result = data;
                _this.resultMessage = _this.result.first;
            }, function (error) {
                alert('could not process query');
            });
        }
        this.executedQuery = '';
    };
    ModificationComponent.prototype.ngOnInit = function () {
    };
    ModificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modification',
            template: __webpack_require__(/*! ./modification.component.html */ "./src/app/modification/modification.component.html"),
            styles: [__webpack_require__(/*! ./modification.component.css */ "./src/app/modification/modification.component.css")],
        }),
        __metadata("design:paramtypes", [_modification_service__WEBPACK_IMPORTED_MODULE_2__["ModificationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ModificationComponent);
    return ModificationComponent;
}());



/***/ }),

/***/ "./src/app/sqlquery.service.ts":
/*!*************************************!*\
  !*** ./src/app/sqlquery.service.ts ***!
  \*************************************/
/*! exports provided: SqlqueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlqueryService", function() { return SqlqueryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SqlqueryService = /** @class */ (function () {
    function SqlqueryService(http) {
        this.http = http;
    }
    SqlqueryService.prototype.getSQLquery = function (query) {
        return this.http.get('/api/sqlquery/' + encodeURIComponent(query));
    };
    SqlqueryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SqlqueryService);
    return SqlqueryService;
}());



/***/ }),

/***/ "./src/app/sqlquery/sqlquery.component.css":
/*!*************************************************!*\
  !*** ./src/app/sqlquery/sqlquery.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NxbHF1ZXJ5L3NxbHF1ZXJ5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/sqlquery/sqlquery.component.html":
/*!**************************************************!*\
  !*** ./src/app/sqlquery/sqlquery.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n      <h1 class=\"display-4\">SQLQuery Interface</h1>\n  </div>\n</div>\n\n<div class = \"container\">\n<textarea [rows]=\"5\" [cols]=\"10\" pInputTextarea autoResize=\"autoResize\"\ntype=\"text\" class=\"form-control\" id=\"query\" required [(ngModel)]=\"query\"\nname=\"query\" placeholder=\"Enter your SQL query here\"></textarea>\n<br/>\n<input type=\"Submit\" value=\"Submit\" (click)=\"getSQLquery()\">\n<br/>\n<p-table *ngIf=\"queryResults\" [value]=\"queryResults\" [columns]=\"cols\" [paginator]=\"true\" [rows]=\"20\">\n  <ng-template pTemplate=\"header\">\n      <tr>\n          <th *ngFor=\"let col of columns\">\n              {{col}}\n          </th>\n      </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-row>\n      <tr>\n          <td *ngFor=\"let col of columns\">\n                  {{row[col]}}\n          </td>\n      </tr>\n  </ng-template>\n</p-table>\n</div>\n"

/***/ }),

/***/ "./src/app/sqlquery/sqlquery.component.ts":
/*!************************************************!*\
  !*** ./src/app/sqlquery/sqlquery.component.ts ***!
  \************************************************/
/*! exports provided: SqlqueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlqueryComponent", function() { return SqlqueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sqlquery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sqlquery.service */ "./src/app/sqlquery.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SqlqueryComponent = /** @class */ (function () {
    function SqlqueryComponent(sqlQueryService) {
        this.sqlQueryService = sqlQueryService;
    }
    SqlqueryComponent.prototype.ngOnInit = function () {
    };
    SqlqueryComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    SqlqueryComponent.prototype.getSQLquery = function () {
        var _this = this;
        this.columns = [];
        this.sqlQueryService.getSQLquery(this.query).subscribe(function (data) {
            _this.queryResults = data;
        }, function (error) {
            if (error.status === 404) {
                alert('Query not found');
            }
            else {
                console.error(error.status + ' - ' + error.body);
                alert('Invalid query');
            }
        }, function () {
            for (var _i = 0, _a = _this.queryResults; _i < _a.length; _i++) {
                var row = _a[_i];
                for (var col in row) {
                    _this.columns.push(col);
                }
                break;
            }
        });
    };
    SqlqueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sqlquery',
            template: __webpack_require__(/*! ./sqlquery.component.html */ "./src/app/sqlquery/sqlquery.component.html"),
            styles: [__webpack_require__(/*! ./sqlquery.component.css */ "./src/app/sqlquery/sqlquery.component.css")]
        }),
        __metadata("design:paramtypes", [_sqlquery_service__WEBPACK_IMPORTED_MODULE_1__["SqlqueryService"]])
    ], SqlqueryComponent);
    return SqlqueryComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body background=\"https://www.bostonmagazine.com/wp-content/uploads/sites/2/2015/06/shutterstock_Glasses-of-light-and-dark-beer-on-a-pub-background.jpg\">\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    \n    <h1 class=\"display-4\"> Welcome to BarBeerDrinker!</h1>\n    <p class=\"lead\">Select a bar below to see some advanced statistics and analytics about it.\n    </p>\n      <a class=\"nav-link\" routerLink=\"/barsAnalytics\">Bar Analytics</a>\n  </div>\n</div>\n\n<div class=\"container\">\n    <p-table [value]=\"bars\" styleClass=\"someStyleClass\">\n      <ng-template pTemplate=\"header\">\n          <tr>\n            <th>Name</th>\n            <th>License</th>\n            <th>Phone</th>\n            <th>Address</th>\n            <th>City</th>\n            <th>State</th>\n          </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-bar>\n          <tr>\n            <td>\n              <a routerLink=\"/bars/{{ bar.name }}\">\n                {{bar.name}}\n              </a>\n            </td>\n            <td>{{bar.license}}</td>\n            <td>{{bar.phone}}</td>\n            <td>{{bar.addr}}</td>\n            <td>{{bar.city}}</td>\n            <td>{{bar.state}}</td>\n          </tr>\n      </ng-template>\n    </p-table>\n  </div>\n\n  <br><br>\n</body>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(barService) {
        this.barService = barService;
        this.getBars();
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent.prototype.getBars = function () {
        var _this = this;
        this.barService.getBars().subscribe(function (data) {
            _this.bars = data;
        }, function (error) {
            alert('Could not retrieve a list of bars');
        });
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Revanth\Documents\BARBEERDRINKER\bar-beer-drinker-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map