(self["webpackChunktermineplannerapp"] = self["webpackChunktermineplannerapp"] || []).push([["src_app_listRegistrations_listRegistrations_module_ts"],{

/***/ 74717:
/*!******************************************************************!*\
  !*** ./src/app/listRegistrations/listRegistrations.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListRegistrationsComponent": function() { return /* binding */ ListRegistrationsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_listRegistrations_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./listRegistrations.component.html */ 77939);
/* harmony import */ var _listRegistrations_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listRegistrations.component.css */ 85677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer.service */ 59747);
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popover/popover.component */ 93238);
/* harmony import */ var _smileyhunting_smileyhunting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../smileyhunting/smileyhunting.component */ 60264);








let ListRegistrationsComponent = class ListRegistrationsComponent {
    constructor(customersService, smileyhunting, popoverController) {
        this.customersService = customersService;
        this.smileyhunting = smileyhunting;
        this.popoverController = popoverController;
    }
    presentPopover(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_3__.PopoverComponent,
                componentProps: { id: id },
                translucent: true
            });
            return yield popover.present();
        });
    }
    DismissClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.popoverController.dismiss();
            this.reload();
        });
    }
    ngOnInit() {
        this.customers = this.customersService.getAllCustomers();
    }
    backToHome() {
        console.log("zurück zum Menü");
    }
    reload() {
        window.location.reload();
    }
    startsmileyhunting(userid) {
        console.log(userid);
        this.customersService.userIdHuntingService = userid;
    }
};
ListRegistrationsComponent.ctorParameters = () => [
    { type: _customer_service__WEBPACK_IMPORTED_MODULE_2__.CustomerService },
    { type: _smileyhunting_smileyhunting_component__WEBPACK_IMPORTED_MODULE_4__.SmileyHuntingComponent },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PopoverController }
];
ListRegistrationsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-listRegistrations',
        template: _raw_loader_listRegistrations_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_listRegistrations_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ListRegistrationsComponent);

//https://www.youtube.com/watch?v=5xQlIYHgesg diese sort direction einbauen


/***/ }),

/***/ 83551:
/*!***************************************************************!*\
  !*** ./src/app/listRegistrations/listRegistrations.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListRegistrationsModule": function() { return /* binding */ ListRegistrationsModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.page */ 19460);
/* harmony import */ var _listRegistrations_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listRegistrations.component */ 74717);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 6899);
/* harmony import */ var _smileyhunting_smileyhunting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../smileyhunting/smileyhunting.component */ 60264);










let ListRegistrationsModule = class ListRegistrationsModule {
};
ListRegistrationsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([
                {
                    path: '',
                    component: _listRegistrations_component__WEBPACK_IMPORTED_MODULE_1__.ListRegistrationsComponent
                },
                {
                    path: 'home',
                    component: _home_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
                },
            ]),
        ],
        declarations: [_listRegistrations_component__WEBPACK_IMPORTED_MODULE_1__.ListRegistrationsComponent],
        providers: [_listRegistrations_component__WEBPACK_IMPORTED_MODULE_1__.ListRegistrationsComponent, _smileyhunting_smileyhunting_component__WEBPACK_IMPORTED_MODULE_3__.SmileyHuntingComponent],
    })
], ListRegistrationsModule);



/***/ }),

/***/ 85677:
/*!*******************************************************************!*\
  !*** ./src/app/listRegistrations/listRegistrations.component.css ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* DOES NOT WORK - not specific enough */\r\n.popover-content {\r\n    background: #222;\r\n  }\r\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\r\n.my-custom-class .popover-content {\r\n    background: #222;\r\n  }\r\n.header1 {\r\n  margin-left: 20%;\r\n}\r\n.header2 {\r\n  margin-left: 20%;\r\n}\r\n.inline-div {\r\n  display: block;\r\n  text-align: left;\r\n}\r\nh4\r\n{\r\n  display: inline-block;\r\n  text-align: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RSZWdpc3RyYXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQXdDO0FBQ3hDO0lBQ0ksZ0JBQWdCO0VBQ2xCO0FBRUEsdUVBQXVFO0FBQ3pFO0lBQ0ksZ0JBQWdCO0VBQ2xCO0FBRUY7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoibGlzdFJlZ2lzdHJhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERPRVMgTk9UIFdPUksgLSBub3Qgc3BlY2lmaWMgZW5vdWdoICovXHJcbi5wb3BvdmVyLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogIzIyMjtcclxuICB9XHJcbiAgXHJcbiAgLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cclxuLm15LWN1c3RvbS1jbGFzcyAucG9wb3Zlci1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgfVxyXG5cclxuLmhlYWRlcjEge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbn1cclxuXHJcbi5oZWFkZXIyIHtcclxuICBtYXJnaW4tbGVmdDogMjAlO1xyXG59XHJcblxyXG4uaW5saW5lLWRpdiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuaDRcclxue1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59Il19 */");

/***/ }),

/***/ 77939:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listRegistrations/listRegistrations.component.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-searchbar\r\n  [(ngModel)]=\"searchTerm\">\r\n</ion-searchbar>\r\n  <ion-button  id=\"backToMenu\" text=\"Zurück zum Menü\" (click)=\"backToHome()\" class=\"button\" [routerLink]=\"['/home']\">Zurück zum Menü</ion-button>\r\n</ion-header>\r\n \r\n  <ion-content>\r\n    <div>\r\n      <ion-grid>\r\n        <ion-row nowrap class=\"headers\">\r\n          <ion-col size=\"4\" class=\"single-border\">\r\n           <h4>Name</h4> \r\n          </ion-col>\r\n          <ion-col size=\"2\" class=\"single-border\">\r\n           <h4>Grüne Smileys</h4>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"single-border\">\r\n          <h4>Rote Smileys</h4>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row nowrap *ngFor=\"let customer of customers | filter:searchTerm\">\r\n          <ion-col size=\"5\">{{ customer.username }} </ion-col>\r\n          <ion-col size=\"2\">{{ customer.greenSmile }}</ion-col>\r\n          <ion-col size=\"3\">{{ customer.redSmile }}</ion-col>\r\n          <ion-button (click)=\"startsmileyhunting(customer.id)\" [routerLink]=\"['/hunting']\">\r\n            <ion-icon name=\"car-sport-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </ion-content>\r\n\r\n\r\n  <!-- ion-content [fullscreen]=\"true\">\r\n    <ion-list *ngFor=\"let customer of customers | filter:searchTerm\">\r\n    <ion-item>\r\n      <ion-label >\r\n        {{ customer.username }}\r\n      </ion-label>\r\n      <ion-label >\r\n        {{ customer.greenSmile }}\r\n      </ion-label>\r\n      <ion-label >\r\n        {{ customer.redSmile }}\r\n      </ion-label>\r\n      <ion-button (click)=\"startsmileyhunting(customer.id)\" [routerLink]=\"['/hunting']\">\r\n        <ion-icon name=\"car-sport-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content -->\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_listRegistrations_listRegistrations_module_ts-es2015.js.map