webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/account-plaid/account-plaid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account-plaid/account-plaid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-mini col-md-4 well-custom shadow-effect-1 fg-primary-text overflow-h bg-gray\">\n  <div class=\"block block-mini\">\n    <i (click)=\"openLink()\" class=\"icon-mini fa fa-credit-card-alt\"></i>\n    <h2 class=\"title-mini fg-white\">\n      Select account \n    </h2>\n  </div>\n  <span class=\"pull-left\">\n    <button *ngFor=\"let account of  accountsUser\" id={{account.account_id}} class=\"col-md-12\">\n      {{account.name}} ${{account.balances.available}}\n    </button>  \n  </span>\n</div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/account-plaid/account-plaid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accountPlaid_service__ = __webpack_require__("../../../../../src/app/accountPlaid.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPlaidComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountPlaidComponent = (function () {
    function AccountPlaidComponent(accountPlaidService) {
        this.accountPlaidService = accountPlaidService;
        this._accountPlaidService = accountPlaidService;
    }
    AccountPlaidComponent.prototype.ngOnInit = function () {
        this.configKeys();
    };
    AccountPlaidComponent.prototype.configKeys = function () {
        var _this = this;
        console.log('before ' + this.PLAID_PUBLIC_KEY);
        this._accountPlaidService
            .accountPlaidHome()
            .then(function (accountData) {
            _this.PLAID_ENV = accountData.PLAID_ENV;
            _this.PLAID_PUBLIC_KEY = accountData.PLAID_PUBLIC_KEY;
        });
        console.log('after' + this.PLAID_PUBLIC_KEY);
    };
    AccountPlaidComponent.prototype.openLink = function () {
        var accountPlaidComponent = this;
        var handler = window.Plaid.create({
            apiVersion: 'v2',
            clientName: 'Plaid Walkthrough Demo',
            env: this.PLAID_ENV,
            product: ['transactions'],
            key: this.PLAID_PUBLIC_KEY,
            // isWebview:false,
            onSuccess: function (public_token) {
                accountPlaidComponent._accountPlaidService.get_access_token(public_token)
                    .then(function () {
                    // console.log("llamar_a_los_accounts")
                    accountPlaidComponent._accountPlaidService.get_accounts()
                        .then(function (accounts) {
                        accountPlaidComponent.accountsUser = accounts.results;
                        accounts.results.forEach(function (element) {
                            console.log(element.name);
                        });
                    });
                });
                // $.post('/accountPlaid/get_access_token', {
                //   public_token: public_token
                // }, function() {
                //    $.post('/accountPlaid/accounts/get',function(data) {
                //       consoel.log(data);
                //     }).fail(function(){
                //       console.log("error in accounts")
                //     });
                // });
            },
        });
        handler.open();
        // handler.open({
        //   name: 'Demo Site',
        //   description: '2 widgets',
        //   amount: 2000
        // });
    };
    return AccountPlaidComponent;
}());
AccountPlaidComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-account-plaid',
        template: __webpack_require__("../../../../../src/app/account-plaid/account-plaid.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account-plaid/account-plaid.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__accountPlaid_service__["a" /* AccountPlaidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__accountPlaid_service__["a" /* AccountPlaidService */]) === "function" && _a || Object])
], AccountPlaidComponent);

var _a;
//# sourceMappingURL=account-plaid.component.js.map

/***/ }),

/***/ "../../../../../src/app/accountPlaid.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPlaidService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountPlaidService = (function () {
    function AccountPlaidService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        // tslint:disable-next-line:no-inferrable-types
        this.BASE_URL = 'http://localhost:3000';
    }
    AccountPlaidService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(e.json().message);
    };
    //get public data for plaid webview
    AccountPlaidService.prototype.accountPlaidHome = function () {
        return this.http.get(this.BASE_URL + '/accountPlaid')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //get account data
    AccountPlaidService.prototype.get_access_token = function (publicToken) {
        // const body = 'request='+ publicToken;
        // console.log('{{{{{{{{{{', body);
        var _this = this;
        // const headers = new Headers();
        // console.log('>>>>>>>', headers)
        // headers.append('Content-Type', 'application/json');
        return this.http.post(this.BASE_URL + "/accountPlaid/get_access_token", { publicToken: publicToken }, { withCredentials: true })
            .toPromise()
            .then(function (response) {
            console.log('?????????', response);
            response.json();
        })
            .catch(function () {
            console.log(_this.handleError);
        });
    };
    AccountPlaidService.prototype.get_accounts = function () {
        var _this = this;
        return this.http.post(this.BASE_URL + '/accountPlaid/accounts/get', null, { withCredentials: true })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function () { return console.log(_this.handleError); });
    };
    return AccountPlaidService;
}());
AccountPlaidService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AccountPlaidService);

var _a;
//# sourceMappingURL=accountPlaid.service.js.map

/***/ }),

/***/ "../../../../../src/app/agency-details/agency-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/agency-details/agency-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='agencyToDetails'>\n  <h2>{{agencyToDetails.nameAgency}}</h2>\n  <h3>{{agencyToDetails.contactPhone}}</h3>\n  \n    <div *ngIf='user'>\n      <p>Select {{agencyToDetails.nameAgency}} as your prefered agency</p>\n   <form>\n    <input type=\"radio\" name=\"selectedAgency\" value=\"selected\">\n    <!-- <input type=\"submit\" value=\"Select\"> -->\n    <button (click)=\"selectAgency(agencyToDetails._id)\" class=\"btn btn-lg\">Select</button>\n\n   </form>      \n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/agency-details/agency-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agency_service__ = __webpack_require__("../../../../../src/app/agency.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgencyDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgencyDetailsComponent = (function () {
    function AgencyDetailsComponent(agencyService, routetheuser) {
        this.agencyService = agencyService;
        this.routetheuser = routetheuser;
    }
    AgencyDetailsComponent.prototype.ngOnInit = function () {
        // this.route.params.subscribe(params => {
        //   this.getAgencyDetails(params['id']);
        //   console.log('--PAR', params['id'])
        // });
    };
    AgencyDetailsComponent.prototype.selectAgency = function (id) {
        var _this = this;
        this.agencyService.selectAgen(id)
            .then(function (theUserfromapi) {
            _this.routetheuser.navigate(['/portal']);
        })
            .catch(function (err) {
            _this.user = null;
            _this.err = err;
        });
    };
    return AgencyDetailsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], AgencyDetailsComponent.prototype, "agencyToDetails", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], AgencyDetailsComponent.prototype, "user", void 0);
AgencyDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-agency-details',
        template: __webpack_require__("../../../../../src/app/agency-details/agency-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/agency-details/agency-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__agency_service__["a" /* AgencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agency_service__["a" /* AgencyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AgencyDetailsComponent);

var _a, _b;
// getAgencyDetails(id) {
//   this.agencyService.getAgencyDetailsinService(id)
//   .then((theAgencyDetails) => {
//     this.agency = theAgencyDetails;
//     console.log('----', theAgencyDetails)
//     console.log('----', this.agency)
//   })
//     .catch((err) => {
//       this.err = 'Could not retreive phone details';
//     });
// }
//# sourceMappingURL=agency-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/agency-search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgencySearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgencySearchService = (function () {
    function AgencySearchService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:3000';
    }
    AgencySearchService.prototype.search = function (term) {
        return this.http
            .get(this.BASE_URL + ("/agency/?name=" + term))
            .map(function (response) { return response.json(); });
    };
    return AgencySearchService;
}());
AgencySearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AgencySearchService);

var _a;
//# sourceMappingURL=agency-search.service.js.map

/***/ }),

/***/ "../../../../../src/app/agency.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgencyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AgencyService = (function () {
    function AgencyService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        // tslint:disable-next-line:no-inferrable-types
        this.BASE_URL = 'http://localhost:3000';
    }
    AgencyService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(e.json().message);
    };
    // getAgency() {
    //   return this.http.get('http://localhost:3000/agencies')
    //     .map(res => res.json())
    //     .catch(this.handleError);
    // }
    AgencyService.prototype.getAgencies = function () {
        return this.http.get(this.BASE_URL + '/agencies')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AgencyService.prototype.getAgencyDetailsinService = function (id) {
        console.log('from agency service', id);
        return this.http.get(this.BASE_URL + ("/agency/" + id))
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AgencyService.prototype.selectAgen = function (id) {
        return this.http.post(this.BASE_URL + ("/agency/" + id + "/select"), {}, 
        ///with credentials es siempre el tercero
        { withCredentials: true })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AgencyService.prototype.delete = function (id) {
        // const url = `${this.BASE_URL}/${id}`;
        // return this.http.delete(url, {headers: this.headers})
        //   .toPromise()
        //   .then(() => null)
        //   .catch(this.handleError);
        return this.http.delete(this.BASE_URL + "/agency/" + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    return AgencyService;
}());
AgencyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AgencyService);

var _a;
//# sourceMappingURL=agency.service.js.map

/***/ }),

/***/ "../../../../../src/app/agency/agency.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\ntext-decoration: none\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/agency/agency.component.html":
/***/ (function(module, exports) {

module.exports = "        <div class=\"row\">\n            <div class=\"col-lg-10 col-md-6 col-xs-6\">\n                <h1 class=\"page-header\">Agencies</h1>\n                 \n            </div>\n              \n        </div>\n    \n<div class=\"row\">\n  <div class=\"col-md-6 col-sm-6 col-xs-6\">\n    <div class=\"panel-group\">\n\n        <div class=\"panel panel-default\" *ngFor=\"let agency of agencies\">\n          <a  (click)=\"onSelect(agency)\">\n            <div class=\"panel-heading\">\n              <h4 class=\"panel-title\">\n                {{agency.nameAgency}}\n              </h4>\n            </div>\n          </a>\n          <div class=\"panel-collapse collapse\">\n      </div>\n\n        </div>\n   </div>\n  </div>\n  <div class=\"col-md-6 col-sm-6 col-xs-6\">\n          <div>\n            <div class=\"panel-body\">\n              <app-agency-details [agencyToDetails]=\"selectedAgency\" [user]=\"user\"></app-agency-details></div>\n          </div>\n  </div>\n      \n</div>\n<div>\n  <button [routerLink]=\"['/portal']\" >Home</button>\n</div>\n\n\n\n\n\n\n<!--<h2>list of agencies</h2>\n<div>\n  <label>Agency name:</label> <input #agencyName />\n  <button (click)=\"add(agencyName.value); agencyName.value=''\">\n    Add\n  </button>\n</div>\n<ul class=\"agencies\">\n  <li *ngFor=\"let agency of agencies\" (click)=\"onSelect(agency)\"[class.selected]=\"agency === selectedagency\">\n    <span class=\"badge\">{{agency.email}}</span>\n    <span>{{agency.nameAgency}}</span>\n    <button class=\"delete\"\n      (click)=\"delete(agency); $event.stopPropagation()\"> x </button>\n  </li>\n</ul>\n<div *ngIf=\"selectedAgency\">\n  <h2>\n    {{selectedAgency.nameAgency | uppercase}} is my agency\n  </h2>\n  <button (click)=\"gotoDetail()\">View Details</button>\n  <button (click)=\"agencyIsSelected()\">console view</button>\n</div>-->   \n        <!-- /.row -->\n\n        <!-- Project One -->\n<!--  <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\" col-md-12 \" data-toggle=\"collapse\" data-target=\"#demo\" *ngFor=\"let agency of agencies\" (click)=\"onSelect(agency)\"[class.selected]=\"agency === selectedagency\">\n            <div class=\"col-md-12 well\">\n                <h3>{{agency.nameAgency}}</h3>\n            <div class=\"col-md-3\">\n                <p>{{agency.email}}</p>\n            </div>-->\n            <!--<button class=\"delete\" (click)=\"delete(agency); $event.stopPropagation()\"> x </button>-->\n            \n           <!-- <a [routerLink]=\"['/agency', agency._id]\">agency details</a>\n            </div>\n          </div>\n        </div>--><!-- row -->\n<!--        <div class=\"col-md-6\">\n            <div *ngIf=\"selectedAgency\" id=\"demo\" class=\"col-md-5 collapse\">\n              <h2>\n                {{selectedAgency.nameAgency | uppercase}} is my agency\n              </h2>\n                <button (click)=\"gotoDetail()\">View Details</button>\n                <button (click)=\"agencyIsSelected()\">console view</button>\n                \n            </div>\n          </div> -->\n        <!-- /.row -->\n    <!-- </div> -->\n\n\n    <!-- ======PREGUNTAR A NICK SOBRE ESTO -->\n<!-- <div>\n  <label for=\"agency\"> Search agency: </label>\n  <input type=\"text\" [(ngModel)]=\"pattern\">\n</div>\n\n<div *ngFor=\"let agency of agencies | search:'name':pattern; let i = index\">\n    <h2> {{ agency.nameAgency }} </h2>\n</div> -->\n\n\n\n\n        "

/***/ }),

/***/ "../../../../../src/app/agency/agency.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agency_service__ = __webpack_require__("../../../../../src/app/agency.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sender_service__ = __webpack_require__("../../../../../src/app/sender.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgencyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgencyComponent = (function () {
    function AgencyComponent(agencyService, mySessionService) {
        this.agencyService = agencyService;
        this.mySessionService = mySessionService;
    }
    AgencyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAgencies();
        this.mySessionService.isLoggedIn()
            .then(function (theUsercomingFromApi) {
            _this.user = theUsercomingFromApi;
            console.log('the user in agencies', _this.user);
        })
            .catch(function (err) {
            console.log('user not logged');
        });
    };
    AgencyComponent.prototype.getAgencies = function () {
        var _this = this;
        this.agencyService
            .getAgencies()
            .then(function (agency) {
            _this.agencies = agency;
            console.log('AGENCIES', _this.agencies);
        });
    };
    // add(name: string): void {
    //   name = name.trim();
    //   if (!name) { return; }
    //   this.agencyService.create(name)
    //     .then(agency => {z
    //       this.agencies.push(agency);
    //       this.selectedagency = null;
    //     });
    // }
    AgencyComponent.prototype.delete = function (agency) {
        var _this = this;
        this.agencyService
            .delete(agency._id)
            .then(function () {
            _this.agencies = _this.agencies.filter(function (h) { return h !== agency; });
            if (_this.selectedAgency === agency) {
                _this.selectedAgency = null;
            }
        });
    };
    // ngOnInit(): void {
    //   this.getagencies();
    // }
    AgencyComponent.prototype.onSelect = function (agency) {
        this.selectedAgency = agency;
    };
    return AgencyComponent;
}());
AgencyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-agency',
        template: __webpack_require__("../../../../../src/app/agency/agency.component.html"),
        styles: [__webpack_require__("../../../../../src/app/agency/agency.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__agency_service__["a" /* AgencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__agency_service__["a" /* AgencyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__sender_service__["a" /* SenderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sender_service__["a" /* SenderService */]) === "function" && _b || Object])
], AgencyComponent);

var _a, _b;
//# sourceMappingURL=agency.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!-- Loader -->\n\t<!--<div class=\"fh5co-loader\"></div>-->\n\t\t<!--Header-->\n       \n\t\t<!--Content-->\n\t\t\n        <router-outlet></router-outlet>\n\t\n\t<!-- END #fh5co-page -->\n    "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Sender';
        // loginInfo = {};
        // user: any; 
        // error: any;
        // isLoggedIn: boolean = false;
        // constructor(
        //   private mySessionService: SenderService,
        //   private routetheuser: Router
        // ) { }
        //     ngOnInit() {
        //     this.mySessionService.loggedIn$.subscribe((userFromApi) => {
        //         this.isLoggedIn = true;
        //     });
        //     this.mySessionService.isLoggedIn()
        //       // if logged in, redirect to /profile
        //       .then((userInfo) => {
        //           this.routetheuser.navigate(['/profile']);
        //           this.isLoggedIn = true;
        //       })
        //       // else redirect to /
        //       .catch((err) => {
        //           this.routetheuser.navigate(['/']);
        //       });
        // }
        // logMeOut() {
        //     this.mySessionService.logout()
        //       .then(() => {
        //           this.routetheuser.navigate(['/']);
        //           this.isLoggedIn = false;
        //       })
        //       .catch(() => {});
        // }
        // handleLogin(userFromApi) {
        //     this.isLoggedIn = true;
        // }
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sender_service__ = __webpack_require__("../../../../../src/app/sender.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__miniprofile_miniprofile_component__ = __webpack_require__("../../../../../src/app/miniprofile/miniprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__agency_agency_component__ = __webpack_require__("../../../../../src/app/agency/agency.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__agency_details_agency_details_component__ = __webpack_require__("../../../../../src/app/agency-details/agency-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__agency_service__ = __webpack_require__("../../../../../src/app/agency.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__relative_relative_component__ = __webpack_require__("../../../../../src/app/relative/relative.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__account_plaid_account_plaid_component__ = __webpack_require__("../../../../../src/app/account-plaid/account-plaid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__accountPlaid_service__ = __webpack_require__("../../../../../src/app/accountPlaid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__relative_list_relative_list_component__ = __webpack_require__("../../../../../src/app/relative-list/relative-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__portal_portal_component__ = __webpack_require__("../../../../../src/app/portal/portal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ministart_ministart_component__ = __webpack_require__("../../../../../src/app/ministart/ministart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__miniplaid_miniplaid_component__ = __webpack_require__("../../../../../src/app/miniplaid/miniplaid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__editprofile_editprofile_component__ = __webpack_require__("../../../../../src/app/editprofile/editprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__search_agency_search_agency_component__ = __webpack_require__("../../../../../src/app/search-agency/search-agency.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__agency_search_service__ = __webpack_require__("../../../../../src/app/agency-search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__payment_payment_component__ = __webpack_require__("../../../../../src/app/payment/payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__secure_layout_secure_layout_component__ = __webpack_require__("../../../../../src/app/secure-layout/secure-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__page_not_found_component_page_not_found_component_component__ = __webpack_require__("../../../../../src/app/page-not-found-component/page-not-found-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pipes_search_pipe__ = __webpack_require__("../../../../../src/app/pipes/search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__relative_new_relative_new_component__ = __webpack_require__("../../../../../src/app/relative-new/relative-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__relative_service__ = __webpack_require__("../../../../../src/app/relative.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { MaterialModule } from '@angular/material';





// import { AppRoutingModule } from './app-routing.module';
// import { PhoneDetailsComponent } from './phone-details/phone-details.component';
// import { PhoneListComponent } from './phone-list/phone-list.component';



// import { EmiterComponent } from './emiter/emiter.component';























var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_28__secure_layout_secure_layout_component__["a" /* SecureLayoutComponent */], children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */] },
            { path: 'agency', component: __WEBPACK_IMPORTED_MODULE_12__agency_agency_component__["a" /* AgencyComponent */] },
            { path: 'agency/:id', component: __WEBPACK_IMPORTED_MODULE_13__agency_details_agency_details_component__["a" /* AgencyDetailsComponent */] },
            { path: 'portal', component: __WEBPACK_IMPORTED_MODULE_21__portal_portal_component__["a" /* PortalComponent */] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_20__profile_profile_component__["a" /* ProfileComponent */] },
            { path: 'profile/edit', component: __WEBPACK_IMPORTED_MODULE_24__editprofile_editprofile_component__["a" /* EditprofileComponent */] },
            { path: 'relativelist', component: __WEBPACK_IMPORTED_MODULE_19__relative_list_relative_list_component__["a" /* RelativeListComponent */] },
            { path: 'fundingaccount', component: __WEBPACK_IMPORTED_MODULE_16__account_plaid_account_plaid_component__["a" /* AccountPlaidComponent */] },
            { path: 'relatives', component: __WEBPACK_IMPORTED_MODULE_19__relative_list_relative_list_component__["a" /* RelativeListComponent */] },
            { path: 'relative/new', component: __WEBPACK_IMPORTED_MODULE_31__relative_new_relative_new_component__["a" /* RelativeNewComponent */] },
            { path: 'payment', component: __WEBPACK_IMPORTED_MODULE_27__payment_payment_component__["a" /* PaymentComponent */] },
        ] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__["a" /* SignupComponent */] },
    // { path: 'phone/:id', component: PhoneDetailsComponent }
    { path: '**', redirectTo: '' },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__miniprofile_miniprofile_component__["a" /* MiniprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
            // EmiterComponent,
            __WEBPACK_IMPORTED_MODULE_10__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__agency_agency_component__["a" /* AgencyComponent */],
            __WEBPACK_IMPORTED_MODULE_13__agency_details_agency_details_component__["a" /* AgencyDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__relative_relative_component__["a" /* RelativeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__account_plaid_account_plaid_component__["a" /* AccountPlaidComponent */],
            __WEBPACK_IMPORTED_MODULE_19__relative_list_relative_list_component__["a" /* RelativeListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_20__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_21__portal_portal_component__["a" /* PortalComponent */],
            __WEBPACK_IMPORTED_MODULE_22__ministart_ministart_component__["a" /* MinistartComponent */],
            __WEBPACK_IMPORTED_MODULE_23__miniplaid_miniplaid_component__["a" /* MiniplaidComponent */],
            __WEBPACK_IMPORTED_MODULE_24__editprofile_editprofile_component__["a" /* EditprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_25__search_agency_search_agency_component__["a" /* SearchAgencyComponent */],
            __WEBPACK_IMPORTED_MODULE_27__payment_payment_component__["a" /* PaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_28__secure_layout_secure_layout_component__["a" /* SecureLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_29__page_not_found_component_page_not_found_component_component__["a" /* PageNotFoundComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_30__pipes_search_pipe__["a" /* SearchPipe */],
            __WEBPACK_IMPORTED_MODULE_31__relative_new_relative_new_component__["a" /* RelativeNewComponent */]
            // MaterialModule,
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(routes)
            // AppRoutingModule
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__sender_service__["a" /* SenderService */], __WEBPACK_IMPORTED_MODULE_14__agency_service__["a" /* AgencyService */],
            __WEBPACK_IMPORTED_MODULE_17__accountPlaid_service__["a" /* AccountPlaidService */], __WEBPACK_IMPORTED_MODULE_26__agency_search_service__["a" /* AgencySearchService */],
            __WEBPACK_IMPORTED_MODULE_32__relative_service__["a" /* RelativeService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/editprofile/editprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/editprofile/editprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 well-custom bg-white overflow-h\">\n      <div class=\"row\">\n        <div class=\"content-mini col-md-4 well-custom shadow-effect-1 shadow-effect-null fg-primary-text overflow-h\">\n          <div class=\"block block-mini\">\n\n            <i class=\"fa fa-user fg-acent-color icon-mini\"></i>\n            <div class=\"title-mini\">\n              <h3>Profile Edition should be an angular call to show the form</h3>\n            </div>\n          </div>\n        </div>\n        <div class=\"content-mini col-md-8  well-custom shadow-effect-1 shadow-effect-null fg-white overflow-h\">\n          <div class=\"block block-mini\">\n            <form class=\"form\">\n              <div class=\"control-group form-group\">\n                <div class=\"controls\">\n                  <input type=\"text\" placeholder=\"First name\" name=\"firstNameInput\" [(ngModel)]=\"editInfo.firstNameInput\" id=\"firstNameInput\"\n                    class=\"form-control\" placeholder=\"name\" autofocus>\n                  <p class=\"help-block\"></p>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" placeholder=\"Last name\" name=\"lastNameInput\" [(ngModel)]=\"editInfo.lastNameInput\" id=\"lastNameInput\" class=\"form-control\"\n                  placeholder=\"last name\">\n              </div>\n              <div class=\"form-group\">\n                <input type=\"phone\" placeholder=\"Your phone\" name=\"phoneInput\" [(ngModel)]=\"editInfo.phoneInput\" id=\"phoneInput\" class=\"form-control\"\n                  placeholder=\"phone\">\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" placeholder=\"Current Password\" name=\"currentPassword \" [(ngModel)]=\"editInfo.currentPassword\" class=\"form-control\"\n                  placeholder=\"current password\">\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" placeholder=\"New Password\" name=\"editedPassword \" [(ngModel)]=\"editInfo.editedPassword\" class=\"form-control\"\n                  placeholder=\"new password\">\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" placeholder=\"country\" name=\"countryInput\" [(ngModel)]=\"editInfo.countryInput\" id=\"countryInput\" class=\"form-control\"\n                  placeholder=\"{country\">\n              </div>\n              <div id=\"success\"></div>\n              <!-- For success/fail messages -->\n              <button (click)=\"editProfile()\" class=\"btn btn-default btn-sm pull-left\" [routerLink]=\"['/profile']\">Cancel</button>\n              <button (click)=\"editProfile()\" class=\"btn btn-primary btn-sm pull-right\">Done</button>\n\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/editprofile/editprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sender_service__ = __webpack_require__("../../../../../src/app/sender.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditprofileComponent = (function () {
    function EditprofileComponent(mySessionService, routetheuser) {
        this.mySessionService = mySessionService;
        this.routetheuser = routetheuser;
        this.editInfo = {};
    }
    EditprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mySessionService.isLoggedIn()
            .then(function (userInfo) {
            _this.user = userInfo;
            console.log('this.user inside oninit', _this.user);
        })
            .catch(function (err) { _this.routetheuser.navigate(['/profile']); });
    };
    EditprofileComponent.prototype.editProfile = function () {
        var _this = this;
        this.mySessionService.editProfile(this.editInfo)
            .then(function (theEditedUsercomingFromApi) {
            _this.routetheuser.navigate(['/profile']);
        })
            .catch(function (err) {
            // fix this if error redirect to profile with a message
            _this.user = null;
            _this.error = err;
        });
        // thePromise.then((userInfo) => {
        //   this.user = userInfo;
        //   this.error = null;
        // });
        // thePromise.catch((err) => {
        //   this.user = null;
        //   this.error = err;
        // });
    };
    return EditprofileComponent;
}());
EditprofileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-editprofile',
        template: __webpack_require__("../../../../../src/app/editprofile/editprofile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/editprofile/editprofile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sender_service__["a" /* SenderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sender_service__["a" /* SenderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], EditprofileComponent);

var _a, _b;
//# sourceMappingURL=editprofile.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    &copy; 2017 <a target=\"_blank\" href=\"#\" title=\"Description\">MoneySender</a>. All Rights Reserved.\n                </div>\n                \n            </div>\n        </div>\n "

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "                <section id=\"main-slider\" class=\"carousel\">\n        <div class=\"carousel-inner\">\n            <div class=\"item active\">\n                <div class=\"container\">\n                    <div class=\"carousel-content\">\n                        <h1>Send money is easy</h1>\n                        <p class=\"lead\">In a few clicks your relatives will receive the money.</p>\n                    </div>\n                </div>\n            </div><!--/.item-->\n            <div class=\"item\">\n                <div class=\"container\">\n                    <div class=\"carousel-content\">\n                        <h1>Do not wait more</h1>\n                        <p class=\"lead\"><b>Easy</b>, <b>safe</b> and <b>very fast</b>. From your cell phone send money right now.</p>\n                    </div>\n                </div>\n            </div><!--/.item-->\n        </div><!--/.carousel-inner-->\n        <a class=\"prev\" href=\"#main-slider\" data-slide=\"prev\"><i class=\"fa fa-angle-left\"></i></a>\n        <a class=\"next\" href=\"#main-slider\" data-slide=\"next\"><i class=\"fa fa-angle-right\"></i></a>\n    </section><!--/#main-slider-->\n                \n                <section id=\"services\">\n            <div class=\"container\">\n                <div class=\"box first\">\n                <div class=\"row\">\n                    <div class=\"col-md-4 col-sm-6\">\n                        <div class=\"center\">\n                            <i class=\"fa fa-send-o icon-lg icon-color4\"></i>\n                            <h4>Send now</h4>\n                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>\n                        </div>\n                    </div><!--/.col-md-4-->\n                    <div class=\"col-md-4 col-sm-6\">\n                        <div class=\"center\">\n                            <i class=\"fa fa-android icon-lg icon-color2\"></i>\n                            <h4>Be fast</h4>\n                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>\n                        </div>\n                    </div><!--/.col-md-4-->\n                    <div class=\"col-md-4 col-sm-6\">\n                        <div class=\"center\">\n                            <i class=\"fa fa-windows icon-lg icon-color3\"></i>\n                            <h4>Lorens insu</h4>\n                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>\n                        </div>\n                    </div><!--/.col-md-4-->\n                </div><!--/.row-->\n</div>\n            </div>\n         </section>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .form-control-placeholder {\n  position: absolute;\n  top: 50px;\n  padding: 7px 0 0 13px;\n  pointer-events: none;\n  color: #aaa;\n  transition: all 200ms;\n}\n\n.form-control:focus + .form-control-placeholder {\n  color: #000;\n  font-size: 75%;\n  top: 33px;\n} */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section-login\" >\n \n  <div class=\"col-sm-8 col-md-9 hidden-xs\">  \n   <img  class=\"back-single-layout\" src=\"assets/images/cash-flow-button.jpg\"/>\n   <h2 class=\"title-single-layout\">Take advantage of your time!</h2>\n  </div>\n  <div *ngIf=\"!user\" class=\"col-xs-12  col-sm-4 col-md-3\" style=\"background:#fff;height:100vh\">\n      <h3 class=\"margin-bottom-30 fg-black\">Login</h3>\n      <div class=\"margin-bottom-30\">\n\n      <form class=\"login\">\n        <fieldset>\n          <div class=\"form-group\">\n            <input type='text' placeholder=\"Email address\" name='loginEmailInput' [(ngModel)]='loginInfo.loginEmailInput' id=\"emailInput\"\n              class=\"form-control\" autofocus>\n          </div>\n          <div class=\"form-group\">\n            <input type='password' placeholder=\"Password\" name='loginPassword' [(ngModel)]='loginInfo.loginPassword' id=\"password\" class=\"form-control\"\n              placeholder=\"password\">\n          </div>\n          <!-- Change this to a button or input when using this as a form -->\n          <button (click)=\"login()\" class=\"btn btn-sm btn-primary col-md-4\">Login</button>\n          <small class=\"pull-right\"> Not account?<a [routerLink]=\"['/signup']\"> Create one! </a></small>\n        </fieldset>\n      </form>\n\n      \n      </div>\n      <div id=\"footer_table\" class=\"footer_block\">\n        <div class=\"corporate_footer\">\n          <div>\n            <small class=\"footer_link text-caption\" id=\"footer_copyright_link\">\n                © 2017 KinPay                          \n            </small>\n            <div class=\"pull-right\">\n              <img src=\"assets/images/logo.png\" alt=\"logo\" width=\"100\" style=\"margin-top:-10px\">\n            </div>\n          </div>\n        </div>\n      </div>\n    \n  </div>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sender_service__ = __webpack_require__("../../../../../src/app/sender.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(mySessionService, routetheuser) {
        this.mySessionService = mySessionService;
        this.routetheuser = routetheuser;
        this.logMe = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.loginInfo = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mySessionService.isLoggedIn()
            .then(function (theUsercomingFromApi) {
            _this.user = theUsercomingFromApi;
        })
            .catch(function (err) {
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.mySessionService.login(this.loginInfo)
            .then(function (theUsercomingFromApi) {
            _this.mySessionService.loggedIn(theUsercomingFromApi);
            // this.user = theUsercomingFromApi;
            _this.error = null;
            _this.routetheuser.navigate(['/portal']);
            console.log('USER INFO form api', theUsercomingFromApi);
            console.log('USER', _this.user);
        })
            .catch(function (err) {
            var apiInfo = err.json();
            _this.error = apiInfo.message;
        });
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], LoginComponent.prototype, "logMe", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__sender_service__["a" /* SenderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sender_service__["a" /* SenderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/miniplaid/miniplaid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/miniplaid/miniplaid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4\">\n  <div class=\"row \" [routerLink]=\"['/fundingaccount']\" >\n\n        \n    <h3>ngIf hay cuenta mostrar saldo y bank name</h3>\n    <h3>sino choose your bank</h3>\n    \n    </div>\n\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/miniplaid/miniplaid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiniplaidComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MiniplaidComponent = (function () {
    function MiniplaidComponent() {
    }
    MiniplaidComponent.prototype.ngOnInit = function () {
    };
    return MiniplaidComponent;
}());
MiniplaidComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-miniplaid',
        template: __webpack_require__("../../../../../src/app/miniplaid/miniplaid.component.html"),
        styles: [__webpack_require__("../../../../../src/app/miniplaid/miniplaid.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MiniplaidComponent);

//# sourceMappingURL=miniplaid.component.js.map

/***/ }),

/***/ "../../../../../src/app/miniprofile/miniprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/miniprofile/miniprofile.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"content-mini col-md-4 well-custom shadow-effect-1 shadow-effect-null fg-primary-text overflow-h\">\n  <div class=\"block block-mini cursor\"  [routerLink]=\"['/profile']\">\n    <i class=\"fa fa-user fg-acent-color icon-mini\"></i>\n    <span class=\"title-mini\">\n      <h4>\n        <b> {{user.firstName}} {{user.lastName}}</b>\n        <br/>\n        <small> {{user.country}}</small>\n      </h4>\n    </span>\n  </div>\n  <span class=\"pull-left description-mini\" >You are currently using <b class=\"cursor\" [routerLink]=\"['agency/:id', user.agencyInUseId._id]\">{{user.agencyInUseId.nameAgency}}</b> agency \n    <span class=\"hidden-md\">for send money to your families</span>\n    <small class=\"cursor\" [routerLink]=\"['/agency']\"><i>view more</i></small>\n  </span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/miniprofile/miniprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sender_service__ = __webpack_require__("../../../../../src/app/sender.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiniprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MiniprofileComponent = (function () {
    function MiniprofileComponent(mySessionService, routetheuser) {
        this.mySessionService = mySessionService;
        this.routetheuser = routetheuser;
        this.user = {
            agencyInUseId: {}
        };
    }
    MiniprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mySessionService.isLoggedIn()
            .then(function (userInfo) {
            _this.mySessionService.getProfile()
                .then(function (theUsercomingFromApi) {
                // console.log("asdasdasdasdasdasdas" +theUsercomingFromApi.theUserProfile.firstName)
                _this.user = theUsercomingFromApi.theUserProfile;
                _this.errorMessage = null;
                _this.routetheuser.navigate(['/portal']);
            })
                .catch(function (err) {
                var apiInfo = err.json();
                _this.errorMessage = apiInfo.message;
            });
            // this.routetheuser.navigate(['/profile']);
        })
            .catch(function (err) { _this.routetheuser.navigate(['/']); });
    };
    return MiniprofileComponent;
}());
MiniprofileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-miniprofile',
        template: __webpack_require__("../../../../../src/app/miniprofile/miniprofile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/miniprofile/miniprofile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sender_service__["a" /* SenderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sender_service__["a" /* SenderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MiniprofileComponent);

var _a, _b;
//# sourceMappingURL=miniprofile.component.js.map

/***/ }),

/***/ "../../../../../src/app/ministart/ministart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ministart/ministart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-mini col-md-4 well-custom shadow-effect-1 overflow-h bg-primary-blue \" [routerLink]=\"['/relatives']\">\n  <div class=\"block block-mini\">\n    <i class=\"icon-mini fa fa-send-o\"></i>\n    <h2 class=\"fg-white title-mini\">Start Sending </h2>\n  </div>\n  <div class=\"description-mini\" >\n    <span>Star sending the money to your family </span>\n    <span class=\"hidden-md hidden-lg\"> as fast as possible, only within reach of your family member will the money arrive.</span>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ministart/ministart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinistartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MinistartComponent = (function () {
    function MinistartComponent() {
    }
    MinistartComponent.prototype.ngOnInit = function () {
    };
    return MinistartComponent;
}());
MinistartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-ministart',
        template: __webpack_require__("../../../../../src/app/ministart/ministart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ministart/ministart.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MinistartComponent);

//# sourceMappingURL=ministart.component.js.map

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "\n        <div class=\"col-ms-12\">\n            <div id=\"navbar\" class=\"navbar navbar-default\">\n                <div class=\"navbar-header\">\n                    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                        <span class=\"sr-only\">Toggle navigation</span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n                    <a class=\"navbar-brand\" [routerLink]=\"['/portal']\"></a>\n                </div>\n                <div class=\"collapse navbar-collapse\">\n                    <ul class=\"nav navbar-nav\">\n                        <li *ngIf='userLogged' class=\"active\">\n                            <a [routerLink]=\"['/portal']\"><i class=\"fa fa-home\"></i></a>\n                        </li>\n                        <li *ngIf='!userLogged'>\n                            <a [routerLink]=\"['/login']\">Log In</a>\n                        </li>\n                        <li *ngIf='userLogged'>\n                            <a (click)='logMeOut()'>Log Out</a>\n                        </li>\n                        <li *ngIf='userLogged'>\n                            <a [routerLink]=\"['/portal']\">portal</a>\n                        </li>\n                        <li *ngIf='userLogged'>\n                            <a [routerLink]=\"['/profile']\">profile</a>\n                        </li>\n                        <li *ngIf='!userLogged'>\n                            <a [routerLink]=\"['/signup']\">signup</a>\n                        </li>\n                        <li>\n                        <a [routerLink]=\"['/agency']\" >Agencies</a>\n                        </li>\n                         \n                        \n                    </ul>\n                </div>\n            </div>\n        </div>\n  "

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sender_service__ = __webpack_require__("../../../../../src/app/sender.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = (function () {
    function NavigationComponent(mySessionService, routetheuser) {
        this.mySessionService = mySessionService;
        this.routetheuser = routetheuser;
        this.userLogged = false;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mySessionService.loggedIn$.subscribe(function (userFromApi) {
            _this.userLogged = true;
            console.log('userlogged inside Oninit. should be true', _this.userLogged);
        });
        this.mySessionService.isLoggedIn()
            .then(function (userInfo) {
            _this.routetheuser.navigate(['/portal']);
            _this.userLogged = true;
            console.log('userlogged inside Oninit after isLogged is called. should be true', _this.userLogged);
        })
            .catch(function (err) {
            _this.routetheuser.navigate(['/']);
        });
    };
    NavigationComponent.prototype.logMeOut = function () {
        var _this = this;
        this.mySessionService.logout()
            .then(function () {
            _this.routetheuser.navigate(['/']);
            _this.userLogged = false;
            console.log('userlogged inside logMeOut. should be false', _this.userLogged);
        })
            .catch(function (err) {
            _this.routetheuser.navigate(['/']);
            _this.userLogged = true;
            console.log('userlogged inside logMeOut and catch', _this.userLogged);
            console.log(err);
        });
    };
    NavigationComponent.prototype.handleLogin = function (userFromApi) {
        this.userLogged = true;
        console.log(this.userLogged, 'handle');
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sender_service__["a" /* SenderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sender_service__["a" /* SenderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NavigationComponent);

var _a, _b;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/page-not-found-component/page-not-found-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found-component/page-not-found-component.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found-component \n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found-component/page-not-found-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponentComponent = (function () {
    function PageNotFoundComponentComponent() {
    }
    PageNotFoundComponentComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponentComponent;
}());
PageNotFoundComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-page-not-found-component',
        template: __webpack_require__("../../../../../src/app/page-not-found-component/page-not-found-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page-not-found-component/page-not-found-component.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponentComponent);

//# sourceMappingURL=page-not-found-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/payment/payment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/payment/payment.component.html":
/***/ (function(module, exports) {

module.exports = "<div>calculadora</div>\n<label for=\"cucInput\">amount to be paid in Cuba in CUC</label>\n<input type='number' [(ngModel)]='cucAmount' (keyup)=\"onKeycuc()\">\n<hr>\n<br>\n <label for=\"usdInput\">amount you pay now in USD</label>\n<input type=\"number\" [(ngModel)]='usdAmount' (keyup)=\"onKeyusd()\"> \n<p>{{usdAmount}}</p>\n<hr>\nYuo are sending money to {{sending}}\n\n\n<!-- <app-ministart></app-ministart>\n<app-miniplaid></app-miniplaid> -->\n"

/***/ }),

/***/ "../../../../../src/app/payment/payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sender_service__ = __webpack_require__("../../../../../src/app/sender.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentComponent = (function () {
    function PaymentComponent(mySenderService, routetheuser) {
        this.mySenderService = mySenderService;
        this.routetheuser = routetheuser;
    }
    PaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mySenderService.isLoggedIn()
            .then(function (userInfo) {
            _this.user = userInfo;
            console.log('ASDFGHJK', _this.user);
            _this.getRelatives(userInfo);
            // this.mySenderService.getPrle()
            //       .then((theUsercomingFromApi) => {
            //       this.user = theUsercomingFromApi.theUserProfile;
            //       this.error = null;
            //       this.routetheuser.navigate(['/portal']);
            //     })
            //     .catch((err) => {
            //       const apiInfo = err.json();
            //             this.error = apiInfo.message;
            //     });
            // this.routetheuser.navigate(['/profile']);
        })
            .catch(function (err) { _this.routetheuser.navigate(['/']); });
    };
    PaymentComponent.prototype.onKeycuc = function () {
        this.usdAmount = this.cucAmount * 1.12;
    };
    PaymentComponent.prototype.onKeyusd = function () {
        this.cucAmount = this.usdAmount / 1.12;
    };
    PaymentComponent.prototype.getRelatives = function (userInfo) {
        var _this = this;
        this.mySenderService
            .getRelatives()
            .then(function (relatives) {
            _this.relatives = relatives;
            console.log('the fam in getR', _this.relatives);
            _this.relatives.forEach(function (oneRelative) {
                if (oneRelative._id === _this.user.relativeSendingNow) {
                    _this.sending = oneRelative.name;
                    console.log('sending', _this.sending);
                }
            });
        });
    };
    return PaymentComponent;
}());
PaymentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-payment',
        template: __webpack_require__("../../../../../src/app/payment/payment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/payment/payment.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sender_service__["a" /* SenderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sender_service__["a" /* SenderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], PaymentComponent);

var _a, _b;
//# sourceMappingURL=payment.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, field, value) {
        if (!items) {
            return [];
        }
        if (!value) {
            return items;
        }
        var myPattern = new RegExp(value, 'i');
        return items.filter(function (it) { return it[field].match(myPattern); });
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'search',
        pure: false
    })
], SearchPipe);

//# sourceMappingURL=search.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/portal/portal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/portal.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n    <div class=\"container\" style=\"margin-top:7em\">\n        <div class=\"row\">\n            <app-miniprofile></app-miniprofile>\n            <app-ministart></app-ministart>\n            <!-- <app-miniplaid></app-miniplaid> -->\n            <app-account-plaid></app-account-plaid>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/portal/portal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortalComponent = (function () {
    function PortalComponent() {
    }
    PortalComponent.prototype.ngOnInit = function () {
    };
    return PortalComponent;
}());
PortalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-portal',
        template: __webpack_require__("../../../../../src/app/portal/portal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portal/portal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PortalComponent);

//# sourceMappingURL=portal.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">  \n    <div class=\"row\" >\n        <div class=\"content-mini col-md-4 well-custom shadow-effect-1 shadow-effect-null fg-primary-text overflow-h\">\n          <div class=\"block block-mini\"  [routerLink]=\"['/profile']\">\n            <i class=\"fa fa-user fg-acent-color icon-mini\"></i>\n            <div class=\"title-mini\">\n              <h3> {{user.firstname}} {{user.lastName}} </h3>\n                <p> {{user.email}}</p>\n                <p> {{user.phone}}</p>\n                <p> {{user.address}}</p>   \n            </div>\n          </div>\n          <span class=\"pull-left description-mini\" >You are currently using <b class=\"cursor\" [routerLink]=\"['agency/:id', user.agencyInUseId._id]\">{{user.agencyInUseId.nameAgency}}</b> agency \n            <span class=\"hidden-md hidden-lg\">for send money to your families</span>\n            <small class=\"cursor\" [routerLink]=\"['/agency']\"><i>view more</i></small>\n          </span>\n          \n          <div class=\"btn btn-primary pull-left btn-sm\" [routerLink]=\"['/relative/new']\">Add a family member</div>\n          <div class=\"btn btn-primary pull-rigth btn-sm\" [routerLink]=\"['/profile/edit']\">Edit your profile</div>\n          \n        </div>\n       \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sender_service__ = __webpack_require__("../../../../../src/app/sender.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(mySessionService, routetheuser) {
        this.mySessionService = mySessionService;
        this.routetheuser = routetheuser;
        this.user = {
            agencyInUseId: {}
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mySessionService.isLoggedIn()
            .then(function (userInfo) {
            _this.mySessionService.getProfile()
                .then(function (theUsercomingFromApi) {
                // console.log("asdasdasdasdasdasdas" +theUsercomingFromApi.theUserProfile.firstName)
                _this.user = theUsercomingFromApi.theUserProfile;
                _this.errorMessage = null;
                _this.routetheuser.navigate(['/portal']);
            })
                .catch(function (err) {
                var apiInfo = err.json();
                _this.errorMessage = apiInfo.message;
            });
            // this.routetheuser.navigate(['/profile']);
        })
            .catch(function (err) { _this.routetheuser.navigate(['/']); });
    };
    ProfileComponent.prototype.editUserProfile = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sender_service__["a" /* SenderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sender_service__["a" /* SenderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/relative-list/relative-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/relative-list/relative-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-10 col-md-6 col-xs-6\">\n    <h1 class=\"page-header\">Relatives</h1>\n  </div>\n</div>\n\n<div class='row'>\n  <div class=\"col-md-6\">\n    <div class=\"panel-group\">\n      <div *ngIf='!relatives'>\n        <h3>You still dont have any relative added</h3>\n        <button [routerLink]=\"['/relative/new']\" > Add a relative</button>\n\n      </div>\n      \n      <div *ngIf='relatives'> \n        <button [routerLink]=\"['/relative/new']\" > Add a relative</button>\n        <div class=\"panel panel-default\" *ngFor=\"let relative of relatives\">\n          <a  (click)=\"onSelect(relative)\">\n            <div class=\"panel-heading\">\n              <h4 class=\"panel-title\">\n                {{relative.name}}\n              </h4>\n            </div>\n          </a>\n      </div>\n    </div>\n\n    </div> \n   </div>\n<div>\n        <div class=\"panel-body\"><app-relative [relativeToDetails]=\"selectedRelative\"></app-relative></div>\n  </div>\n</div>\n<!-- <div *ngIf='user'>\n <a [routerLink]=\"['/payment']\">Next</a>\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/relative-list/relative-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sender_service__ = __webpack_require__("../../../../../src/app/sender.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelativeListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RelativeListComponent = (function () {
    function RelativeListComponent(relativeServive, mySessionService, routetheuser) {
        this.relativeServive = relativeServive;
        this.mySessionService = mySessionService;
        this.routetheuser = routetheuser;
    }
    RelativeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mySessionService.isLoggedIn()
            .then(function (theUsercomingFromApi) {
            _this.user = theUsercomingFromApi;
            _this.getRelatives();
            console.log('the family  in this.getR', _this.relatives);
        })
            .catch(function (err) {
            console.log('user not logged');
        });
    };
    RelativeListComponent.prototype.getRelatives = function () {
        var _this = this;
        this.mySessionService
            .getRelatives()
            .then(function (relatives) {
            _this.relatives = relatives;
            console.log('the fam in getR', _this.relatives);
        });
    };
    RelativeListComponent.prototype.onSelect = function (relative) {
        this.selectedRelative = relative;
        console.log('selected Relative', this.selectedRelative);
    };
    return RelativeListComponent;
}());
RelativeListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-relative-list',
        template: __webpack_require__("../../../../../src/app/relative-list/relative-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/relative-list/relative-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sender_service__["a" /* SenderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sender_service__["a" /* SenderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__sender_service__["a" /* SenderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sender_service__["a" /* SenderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RelativeListComponent);

var _a, _b, _c;
//# sourceMappingURL=relative-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/relative-new/relative-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/relative-new/relative-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12 well-custom bg-white overflow-h\">\n            <div class=\"row\">\n                <div class=\"content-mini col-md-4 well-custom shadow-effect-1 shadow-effect-null fg-primary-text overflow-h\">\n                    <div class=\"block block-mini\">\n\n                        <i class=\"fa fa-user fg-acent-color icon-mini\"></i>\n                        <div class=\"title-mini\">\n                            <h3>Add a family member</h3>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"content-mini col-md-8  well-custom shadow-effect-1 shadow-effect-null fg-white overflow-h\">\n                    <div class=\"block block-mini\">\n                        <form class=\"new-relative\" (ngSubmit)='addRelative(relativeInfoForm)' #relativeInfoForm='ngForm' onSubmit=\"return false\">\n                            <div class=\"control-group form-group\">\n                                <div class=\"controls\">\n                                    <input type=\"text\" placeholder=\"Your Relative's Name\" class=\"form-control\" id=\"relativeName\" name='relativeName' [(ngModel)]=\"relativeName\"\n                                        autofocus>\n                                    <p class=\"help-block\"></p>\n                                </div>\n                            </div>\n                            <div class=\"control-group form-group\">\n                                <div class=\"controls\">\n                                    <input class=\"form-control\" placeholder=\"First Surname\" type=\"text\" name='firstApell' [(ngModel)]=\"firstApell\" id=\"firstApell\">\n                                </div>\n                            </div>\n                            <div class=\"control-group form-group\">\n                                <div class=\"controls\">\n                                    <input class=\"form-control\" placeholder=\"Second Surname\" type=\"text\" name='secondApell' [(ngModel)]=\"secondApell\" id=\"secondApell\">\n                                </div>\n                            </div>\n                            <div class=\"control-group form-group\">\n                                <div class=\"controls\">\n                                    <input class=\"form-control\" placeholder=\"Parentesco\" type=\"text\" name='parentesco' [(ngModel)]=\"parentesco\" id=\"parentesco\">\n                                </div>\n                            </div>\n                            <div class=\"control-group form-group\">\n                                <div class=\"controls\">\n                                    <input class=\"form-control\" placeholder=\"Relative's Address\" type=\"text\" name='addressRelative' [(ngModel)]=\"addressRelative\"\n                                        id=\"addressRelative\">\n                                </div>\n                            </div>\n                            <div class=\"control-group form-group\">\n                                <div class=\"controls\">\n                                    <input class=\"form-control\" placeholder=\"Carnet Id\" type=\"text\" name='carnetId' [(ngModel)]=\"carnetId\" id=\"carnetId\">\n                                </div>\n                            </div>\n                            <div class=\"control-group form-group\">\n                                <div class=\"controls\">\n                                    <input class=\"form-control\" placeholder=\"Relative's Phone\" type=\"text\" name='phoneRelative' [(ngModel)]=\"phoneRelative\" id=\"phoneRelative\">\n                                </div>\n                            </div>\n                            <div class=\"control-group form-group\">\n                                <div class=\"controls\">\n                                    <input class=\"form-control\" placeholder=\"Relative's Email\" type=\"text\" name=\"emailRelative\" [(ngModel)]=\"emailRelative\" id=\"emailRelative\">\n                                </div>\n                            </div>\n                            <div id=\"success\"></div>\n                            <!-- For success/fail messages -->\n                            <button [routerLink]=\"['/profile']\" class=\"btn btn-default btn-sm pull-left\">Cancel</button>\n                            <input class=\"btn btn-sm btn-primary pull-right\" type=\"submit\" value=\"Done\">\n                        </form>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/relative-new/relative-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__relative_service__ = __webpack_require__("../../../../../src/app/relative.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sender_service__ = __webpack_require__("../../../../../src/app/sender.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelativeNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RelativeNewComponent = (function () {
    function RelativeNewComponent(relativeService, mySessionService, routetheuser) {
        this.relativeService = relativeService;
        this.mySessionService = mySessionService;
        this.routetheuser = routetheuser;
    }
    RelativeNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getRelatives();
        this.mySessionService.isLoggedIn()
            .then(function (theUsercomingFromApi) {
            _this.user = theUsercomingFromApi;
            console.log('the user in RELATIVE', _this.user);
        })
            .catch(function (err) {
            console.log('user not logged');
        });
    };
    RelativeNewComponent.prototype.getRelatives = function () {
        var _this = this;
        this.mySessionService
            .getRelatives()
            .then(function (relatives) {
            _this.relative = relatives;
            console.log('Relative', _this.relative);
        });
    };
    RelativeNewComponent.prototype.addRelative = function (relativeInfoForm) {
        var _this = this;
        this.newRelativeInfo =
            {
                relativeName: relativeInfoForm.value.relativeName,
                firstApell: relativeInfoForm.value.firstApell,
                secondApell: relativeInfoForm.value.secondApell,
                email: relativeInfoForm.value.emailRelative,
                phoneRelative: relativeInfoForm.value.phoneRelative,
                cIdentidad: relativeInfoForm.value.carnetId,
                addressRelative: relativeInfoForm.value.addressRelative,
                parentesco: relativeInfoForm.value.parentesco,
            };
        console.log('IIINFO', this.newRelativeInfo);
        this.relativeService.addRelativeInService(this.newRelativeInfo)
            .then(function (theNewRelativeFromApi) {
            _this.routetheuser.navigate(['/relatives']);
        })
            .catch(function (err) {
            _this.user = null;
            _this.error = err;
        });
    };
    return RelativeNewComponent;
}()); ////////////////////////////////////////////////////////////
RelativeNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-relative-new',
        template: __webpack_require__("../../../../../src/app/relative-new/relative-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/relative-new/relative-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__relative_service__["a" /* RelativeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__relative_service__["a" /* RelativeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__sender_service__["a" /* SenderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sender_service__["a" /* SenderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RelativeNewComponent);

var _a, _b, _c;
// delete(agency): void {
//   this.agencyService
//       .delete(agency._id)
//       .then(() => {
//         this.agencies = this.agencies.filter(h => h !== agency);
//         if (this.selectedAgency === agency) { this.selectedAgency = null; }
//       });
// }
//# sourceMappingURL=relative-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/relative.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelativeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RelativeService = (function () {
    function RelativeService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        // tslint:disable-next-line:no-inferrable-types
        this.BASE_URL = 'http://localhost:3000';
    }
    RelativeService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(e.json().message);
    };
    RelativeService.prototype.selectRelative = function (id) {
        return this.http.post(this.BASE_URL + ("/relative/" + id + "/select"), {}, 
        /// with credentials es siempre el tercero
        { withCredentials: true })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RelativeService.prototype.addRelativeInService = function (relative) {
        console.log('relative________)))))))from service', relative);
        return this.http.post(this.BASE_URL + "/relative/new", relative, { withCredentials: true })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    return RelativeService;
}());
RelativeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], RelativeService);

var _a;
//# sourceMappingURL=relative.service.js.map

/***/ }),

/***/ "../../../../../src/app/relative/relative.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/relative/relative.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='relativeToDetails'>\n  <h2>{{relativeToDetails.name}} {{relativeToDetails.firstApell}} {{relativeToDetails.secondApell}}</h2>\n  <h3>choose your relative</h3>\n  <form>\n    <input type=\"radio\" name=\"selectedAgency\" value=\"selected\">\n    <!-- <input type=\"submit\" value=\"Select\"> -->\n    <button (click)=\"selectRelative(relativeToDetails._id)\" class=\"btn btn-lg\">Select</button>\n\n   </form> \n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/relative/relative.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sender_service__ = __webpack_require__("../../../../../src/app/sender.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__relative_service__ = __webpack_require__("../../../../../src/app/relative.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelativeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RelativeComponent = (function () {
    function RelativeComponent(mySessionService, routetheuser, relativeService) {
        this.mySessionService = mySessionService;
        this.routetheuser = routetheuser;
        this.relativeService = relativeService;
    }
    RelativeComponent.prototype.ngOnInit = function () {
        //   this.mySessionService.isLoggedIn()
        //   .then((user) => {this.relatives = relativesToDetails;
        //     console.log('relatives', this.relatives)
        // })
        // .catch((err) => { this.routetheuser.navigate(['/signup'])})
    };
    RelativeComponent.prototype.selectRelative = function (id) {
        var _this = this;
        this.relativeService.selectRelative(id)
            .then(function (theUserFromApi) {
            _this.routetheuser.navigate(['/payment']);
            _this.error = null;
        })
            .catch(function (err) {
            _this.relatives = null;
            _this.error = err;
        });
    };
    return RelativeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], RelativeComponent.prototype, "relativeToDetails", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], RelativeComponent.prototype, "user", void 0);
RelativeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-relative',
        template: __webpack_require__("../../../../../src/app/relative/relative.component.html"),
        styles: [__webpack_require__("../../../../../src/app/relative/relative.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sender_service__["a" /* SenderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sender_service__["a" /* SenderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__relative_service__["a" /* RelativeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__relative_service__["a" /* RelativeService */]) === "function" && _c || Object])
], RelativeComponent);

var _a, _b, _c;
//# sourceMappingURL=relative.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-agency/search-agency.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-agency/search-agency.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n  <h4>Search</h4>\n  <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n  <div>\n    \n    <div *ngFor=\"let agency of agencies | async\"\n         (click)=\"gotoDetail(agency)\" class=\"search-result\" >\n      {{agency.nameAgency}}\n    </div>\n  </div>\n</div>\n<div *ngIf='selectedAgency'>\n      <div class=\"panel-body\"><app-agency-details [agencyToDetails]=\"selectedAgency\" [user]=\"user\"></app-agency-details></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/search-agency/search-agency.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agency_search_service__ = __webpack_require__("../../../../../src/app/agency-search.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchAgencyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Observable class extensions

// Observable operators




var SearchAgencyComponent = (function () {
    function SearchAgencyComponent(agencySearchService, router) {
        this.agencySearchService = agencySearchService;
        this.router = router;
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    // Push a search term into the observable stream.
    SearchAgencyComponent.prototype.search = function (term) {
        console.log('ageniiiiiii', term);
        this.searchTerms.next(term);
        console.log(this.agencies);
    };
    SearchAgencyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.agencies = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) {
            var searchAjax = _this.agencySearchService.search(term);
            // searchAjax.subscribe(res => console.log('holaaaaaaaaaaaaa', res))
            return term ? searchAjax
                : __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]);
        })
            .catch(function (error) {
            // TODO: add real error handling
            console.log('ERROR MES', error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]);
        });
        console.log('agen222222yyyyy', this.agencies);
        console.log('agen222222', this.searchTerms);
    };
    SearchAgencyComponent.prototype.gotoDetail = function (agency) {
        // const link = ['/detail', agency._id];
        // this.router.navigate(link);
        this.selectedAgency = agency;
    };
    return SearchAgencyComponent;
}());
SearchAgencyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-search-agency',
        template: __webpack_require__("../../../../../src/app/search-agency/search-agency.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-agency/search-agency.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_8__agency_search_service__["a" /* AgencySearchService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__agency_search_service__["a" /* AgencySearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__agency_search_service__["a" /* AgencySearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SearchAgencyComponent);

var _a, _b;
//# sourceMappingURL=search-agency.component.js.map

/***/ }),

/***/ "../../../../../src/app/secure-layout/secure-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/secure-layout/secure-layout.component.html":
/***/ (function(module, exports) {

module.exports = "  <header id=\"header\" role=\"banner\">\n            <app-navigation></app-navigation>\n        </header>\n\n        <!--Content-->\n        <div style=\"margin-top:7em;min-height:80vh\">\n            <router-outlet></router-outlet>\n        </div>\n\n        <!--Footer-->\n        <footer id=\"footer\">\n            <app-footer></app-footer>\n        </footer><!--/#footer-->"

/***/ }),

/***/ "../../../../../src/app/secure-layout/secure-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecureLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SecureLayoutComponent = (function () {
    function SecureLayoutComponent() {
    }
    SecureLayoutComponent.prototype.ngOnInit = function () {
    };
    return SecureLayoutComponent;
}());
SecureLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-secure-layout',
        template: __webpack_require__("../../../../../src/app/secure-layout/secure-layout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/secure-layout/secure-layout.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SecureLayoutComponent);

//# sourceMappingURL=secure-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/sender.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SenderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SenderService = (function () {
    // app component will subscribe to "loggedIn$"
    function SenderService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:3000';
        this.loggedInSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.loggedIn$ = this.loggedInSource.asObservable();
    }
    SenderService.prototype.loggedIn = function (userInfo) {
        // next line recieve the user info and next pass that
        // info to 
        this.loggedInSource.next(userInfo);
    };
    // ------isLoggedIn  start-----
    SenderService.prototype.isLoggedIn = function () {
        return this.http
            .get(this.BASE_URL + '/loggedin', { withCredentials: true })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    // ------isLoggedIn  end-----
    // ------Relative start-----
    SenderService.prototype.getRelatives = function () {
        return this.http
            .get(this.BASE_URL + '/relatives', { withCredentials: true })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    // ------Relative end-----
    SenderService.prototype.login = function (credentials) {
        return this.http
            .post(this.BASE_URL + '/login', credentials, { withCredentials: true })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    SenderService.prototype.signup = function (user) {
        return this.http
            .post(this.BASE_URL + '/signup', user, { withCredentials: true })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    SenderService.prototype.logout = function () {
        return this.http
            .post(this.BASE_URL + '/logout', {}, { withCredentials: true })
            .toPromise()
            .then(function (res) {
            res.json();
        });
    };
    SenderService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["Observable"].throw(e.json().message);
    };
    SenderService.prototype.getProfile = function () {
        return this.http.get(this.BASE_URL + '/profile', { withCredentials: true })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    // ---EDIT PROFILE-----
    SenderService.prototype.editProfile = function (editInfo) {
        return this.http
            .post(this.BASE_URL + '/profile/edit', editInfo, { withCredentials: true })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    return SenderService;
}());
SenderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], SenderService);

var _a;
//# sourceMappingURL=sender.service.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section-login\" >\n\n   <div class=\"col-sm-8 col-md-9 hidden-xs\">  \n   <img  class=\"back-single-layout\" src=\"assets/images/cash-flow-button.jpg\"/>\n   <h2 class=\"title-single-layout\">Take advantage of your time!</h2>\n  </div>\n\n \n    <div class=\"col-xs-12  col-sm-4 col-md-3\" style=\"background:#fff;height:100vh\">\n      <h3 class=\"margin-bottom-30 fg-black\">Sing Up</h3>\n      <div class=\"margin-bottom-30\">\n      <form class=\"signup\" >\n       <fieldset>\n\n       <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"First name\"  name=\"firstNameInput\" [(ngModel)]=\"signupInfo.firstNameInput\" id=\"firstNameInput\" class=\"form-control\" placeholder=\"first name\" autofocus>\n        </div>\n\n        <div class=\"form-group\">\n          <input type=\"text\"  placeholder=\"Last name\" name=\"lastNameInput\" [(ngModel)]=\"signupInfo.lastNameInput\" id=\"lastNameInput\" class=\"form-control\" placeholder=\"last name\">\n        </div>\n\n        <div class=\"form-group\">\n          <input type=\"email\" placeholder=\"Email address\" name=\"emailInput\" [(ngModel)]=\"signupInfo.emailInput\" id=\"emailInput\" class=\"form-control\" placeholder=\"email\">\n        </div>\n\n        <div class=\"form-group\">\n          <input type=\"phone\" placeholder=\"Phone number\" name=\"phoneInput\" [(ngModel)]=\"signupInfo.phoneInput\" id=\"phoneInput\" class=\"form-control\" placeholder=\"phones\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" placeholder=\"Password\" name=\"signupPassword \" [(ngModel)]=\"signupInfo.signupPassword\" class=\"form-control\" placeholder=\"password\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"Country\" name=\"countryInput\" [(ngModel)]=\"signupInfo.countryInput\" id=\"countryInput\" class=\"form-control\" placeholder=\"country\">\n        </div>\n                                \n<!-- Change this to a button or input when using this as a form -->\n       <button (click)=\"signup()\" class=\"btn btn-sm btn-primary col-md-4\">Sign Up</button>\n       <small class=\"pull-right\"> Do you already have an account?<a href=\"/login\"> login! </a></small>\n       </fieldset>\n      </form>\n      </div>\n      <div id=\"footer_table\" class=\"footer_block\">\n        <div class=\"corporate_footer\">\n          <div>\n            <small class=\"footer_link text-caption\" id=\"footer_copyright_link\">\n                © 2017 KinPay                           \n            </small>\n            <div class=\"pull-right\">\n              <img src=\"assets/images/logo.png\" alt=\"logo\" width=\"100\" style=\"margin-top:-10px\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n \n</section>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sender_service__ = __webpack_require__("../../../../../src/app/sender.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// importing the service that will call the Express API


var SignupComponent = (function () {
    function SignupComponent(mySessionService, routetheuser) {
        this.mySessionService = mySessionService;
        this.routetheuser = routetheuser;
        // loginInfo = {};
        this.signupInfo = {};
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mySessionService.isLoggedIn()
            .then(function (userInfo) {
            _this.routetheuser.navigate(['/portal']);
        })
            .catch(function (err) { _this.routetheuser.navigate(['/signup']); });
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this.mySessionService.signup(this.signupInfo)
            .then(function (theUsercomingFromApi) {
            _this.routetheuser.navigate(['/portal']);
        })
            .catch(function (err) {
            _this.user = null;
            _this.error = err;
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sender_service__["a" /* SenderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sender_service__["a" /* SenderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map