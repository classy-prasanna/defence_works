webpackJsonp([77],{

/***/ 1810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModForumDiscussionPageModule", function() { return AddonModForumDiscussionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entry__ = __webpack_require__(1931);
// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AddonModForumDiscussionPageModule = /** @class */ (function () {
    function AddonModForumDiscussionPageModule() {
    }
    AddonModForumDiscussionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__entry__["a" /* AddonModGlossaryEntryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__entry__["a" /* AddonModGlossaryEntryPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModForumDiscussionPageModule);
    return AddonModForumDiscussionPageModule;
}());

//# sourceMappingURL=entry.module.js.map

/***/ }),

/***/ 1931:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModGlossaryEntryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_glossary__ = __webpack_require__(136);
// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Page that displays a glossary entry.
 */
var AddonModGlossaryEntryPage = /** @class */ (function () {
    function AddonModGlossaryEntryPage(navParams, domUtils, glossaryProvider) {
        this.domUtils = domUtils;
        this.glossaryProvider = glossaryProvider;
        this.component = __WEBPACK_IMPORTED_MODULE_3__providers_glossary__["a" /* AddonModGlossaryProvider */].COMPONENT;
        this.loaded = false;
        this.showAuthor = false;
        this.showDate = false;
        this.courseId = navParams.get('courseId');
        this.entryId = navParams.get('entryId');
    }
    /**
     * View loaded.
     */
    AddonModGlossaryEntryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fetchEntry().then(function () {
            _this.glossaryProvider.logEntryView(_this.entry.id);
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Refresh the data.
     *
     * @param {any} [refresher] Refresher.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonModGlossaryEntryPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        return this.glossaryProvider.invalidateEntry(this.entry.id).catch(function () {
            // Ignore errors.
        }).then(function () {
            return _this.fetchEntry(true);
        }).finally(function () {
            refresher && refresher.complete();
        });
    };
    /**
     * Convenience function to get the glossary entry.
     *
     * @param {boolean} [refresh] Whether we're refreshing data.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonModGlossaryEntryPage.prototype.fetchEntry = function (refresh) {
        var _this = this;
        return this.glossaryProvider.getEntry(this.entryId).then(function (result) {
            _this.entry = result;
            if (!refresh) {
                // Load the glossary.
                return _this.glossaryProvider.getGlossaryById(_this.courseId, _this.entry.glossaryid).then(function (glossary) {
                    _this.componentId = glossary.coursemodule;
                    switch (glossary.displayformat) {
                        case 'fullwithauthor':
                        case 'encyclopedia':
                            _this.showAuthor = true;
                            _this.showDate = true;
                            break;
                        case 'fullwithoutauthor':
                            _this.showAuthor = false;
                            _this.showDate = true;
                            break;
                        default:// Default, and faq, simple, entrylist, continuous.
                            _this.showAuthor = false;
                            _this.showDate = false;
                    }
                });
            }
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.mod_glossary.errorloadingentry', true);
            return Promise.reject(null);
        });
    };
    AddonModGlossaryEntryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-glossary-entry',template:/*ion-inline-start:"D:\xampp\htdocs\mobile\yelm\src\addon\mod\glossary\pages\entry\entry.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title *ngIf="entry"><core-format-text [text]="entry.concept"></core-format-text></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="loaded" (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <core-loading [hideUntil]="loaded">\n\n        <ng-container *ngIf="entry">\n\n            <ion-item text-wrap *ngIf="showAuthor">\n\n                <ion-avatar item-start (click)="openUserProfile(post.userid)">\n\n                    <img [src]="entry.userpictureurl" onError="this.src=\'assets/img/user-avatar.png\'" core-external-content [alt]="\'core.pictureof\' | translate:{$a: entry.userfullname}" role="presentation">\n\n                </ion-avatar>\n\n                <h2><core-format-text [text]="entry.concept"></core-format-text></h2>\n\n                <ion-note item-end *ngIf="showDate">{{ entry.timemodified | coreDateDayOrTime }}</ion-note>\n\n                <p><core-format-text [text]="entry.userfullname"></core-format-text></p>\n\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="!showAuthor">\n\n                <h2><core-format-text [text]="entry.concept"></core-format-text></h2>\n\n                <ion-note item-end *ngIf="showDate">{{ entry.timemodified | coreDateDayOrTime }}</ion-note>\n\n            </ion-item>\n\n            <ion-item text-wrap>\n\n                <core-format-text [component]="component" [componentId]="componentId" [text]="entry.definition"></core-format-text>\n\n            </ion-item>\n\n            <ng-container *ngIf="entry.attachment">\n\n                <core-file *ngFor="let file of entry.attachments" [file]="file" [component]="component" [componentId]="componentId"></core-file>\n\n            </ng-container>\n\n            <ion-item text-wrap *ngIf="entry.approved != 1">\n\n                <p><em>{{ \'addon.mod_glossary.entrypendingapproval\' | translate }}</em></p>\n\n            </ion-item>\n\n        </ng-container>\n\n\n\n        <ion-card *ngIf="!entry">\n\n            <ion-item class="core-error-card">\n\n                {{ \'addon.mod_glossary.errorloadingentry\' | translate }}\n\n            </ion-item>\n\n        </ion-card>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\xampp\htdocs\mobile\yelm\src\addon\mod\glossary\pages\entry\entry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_utils_dom__["a" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_glossary__["a" /* AddonModGlossaryProvider */]])
    ], AddonModGlossaryEntryPage);
    return AddonModGlossaryEntryPage;
}());

//# sourceMappingURL=entry.js.map

/***/ })

});
//# sourceMappingURL=77.js.map