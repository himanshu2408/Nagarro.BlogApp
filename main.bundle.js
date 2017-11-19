webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

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

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_base_component__ = __webpack_require__("../../../../../src/app/base/base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/base/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_footer_footer_component__ = __webpack_require__("../../../../../src/app/base/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_home_home_component__ = __webpack_require__("../../../../../src/app/base/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_blog_detail_blog_detail_component__ = __webpack_require__("../../../../../src/app/base/blog-detail/blog-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_all_blogs_all_blogs_component__ = __webpack_require__("../../../../../src/app/base/all-blogs/all-blogs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_edit_blog_edit_blog_component__ = __webpack_require__("../../../../../src/app/base/edit-blog/edit-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__base_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/base/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__base_login_login_component__ = __webpack_require__("../../../../../src/app/base/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__search_pipe__ = __webpack_require__("../../../../../src/app/search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__filter_by_category_pipe__ = __webpack_require__("../../../../../src/app/filter-by-category.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var approutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__base_base_component__["a" /* BaseComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_15__base_login_login_component__["a" /* LoginComponent */] }
        ] },
    { path: "home", component: __WEBPACK_IMPORTED_MODULE_3__base_base_component__["a" /* BaseComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_9__base_edit_blog_edit_blog_component__["a" /* EditBlogComponent */] }
        ] },
    { path: "about", component: __WEBPACK_IMPORTED_MODULE_3__base_base_component__["a" /* BaseComponent */] },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_14__base_not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__base_base_component__["a" /* BaseComponent */],
            __WEBPACK_IMPORTED_MODULE_4__base_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__base_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__base_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__base_blog_detail_blog_detail_component__["a" /* BlogDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_8__base_all_blogs_all_blogs_component__["a" /* AllBlogsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__base_edit_blog_edit_blog_component__["a" /* EditBlogComponent */],
            __WEBPACK_IMPORTED_MODULE_14__base_not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_15__base_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_16__search_pipe__["a" /* SearchPipe */],
            __WEBPACK_IMPORTED_MODULE_18__filter_by_category_pipe__["a" /* FilterByCategoryPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_router__["b" /* RouterModule */].forRoot(approutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__blog_service__["a" /* BlogService */], __WEBPACK_IMPORTED_MODULE_17__authentication_service__["a" /* AuthenticationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Base_URL = 'http://localhost:3000/';
var header = {
    headers: new Headers({ 'content-type': 'application/json' })
};
var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.loggedInUser = null;
        if (localStorage.getItem('user') != null) {
            this.loggedInUser = JSON.parse(localStorage.getItem('user'));
        }
    }
    AuthenticationService.prototype.login = function () {
        return this.http.get(Base_URL + "users")
            .map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.logout = function () {
        this.loggedInUser = null;
        localStorage.removeItem('user');
        this.router.navigate(['']);
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        if (this.loggedInUser && this.loggedInUser.id) {
            return true;
        }
        else {
            return false;
        }
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/base/all-blogs/all-blogs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/base/all-blogs/all-blogs.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" [(ngModel)]=\"searchText\" placeholder=\"search by blog title here\">\r\n<div class=\"row\" *ngFor=\"let blog of blogs | search: searchText | filterByCategory: filterByCategoryId\" >\r\n  <div class=\"col s12\">\r\n    <div class=\"card blue-grey darken-1\">\r\n      <div class=\"card-content white-text\">\r\n\r\n        <span class=\"card-title\">\r\n          {{blog.title}}\r\n          <small class=\"right\">~ by {{blog.authorName}}</small>\r\n        </span>\r\n\r\n        <!-- horizontal fab -->\r\n       <!-- <div class=\"fixed-action-btn horizontal\">\r\n          <a class=\"btn-floating btn-small teal\">\r\n            <i class=\"small material-icons\">mode_edit</i>\r\n          </a>\r\n          <ul>\r\n            <li><a class=\"btn-floating red\"><i class=\"material-icons\">insert_chart</i></a></li>\r\n            <li><a class=\"btn-floating yellow darken-1\"><i class=\"material-icons\">format_quote</i></a></li>\r\n            <li><a class=\"btn-floating green\"><i class=\"material-icons\">publish</i></a></li>\r\n            <li><a class=\"btn-floating blue\"><i class=\"material-icons\">attach_file</i></a></li>\r\n          </ul>\r\n        </div>-->\r\n        <!-- horizontal fab ends-->\r\n        <p>{{blog.desc | slice:0:200}}...</p>\r\n\r\n      </div>\r\n\r\n      <div class=\"card-action\">\r\n        <!--<a href=\"#\">This is a link</a>-->\r\n        <small class=\"white-text\">~ {{blog.date | date}}</small>\r\n        <span>\r\n          <a class=\"btn-floating btn-tiny waves-effect waves-light teal\" (click)=\"markAsFavourite(blog.id)\" *ngIf=\"!isFavourite(blog.id) && isLoggedIn()\"><i class=\"material-icons\">star_border</i></a>\r\n          <a class=\"btn-floating btn-tiny waves-effect waves-light teal\" (click)=\"markAsUnfavourite(blog.id)\" *ngIf=\"isFavourite(blog.id) && isLoggedIn()\"><i class=\"material-icons\">star</i></a>\r\n          <a class=\"btn-floating btn-tiny waves-effect waves-light teal\" (click)=\"selectBlog(blog)\" *ngIf=\"isLoggedIn() && isPostedByUser(blog)\"><i class=\"material-icons\">edit</i></a>\r\n          <a class=\"btn-floating btn-tiny waves-effect waves-light teal\" (click)=\"deleteBlog(blog)\" *ngIf=\"isLoggedIn() && isPostedByUser(blog)\"><i class=\"material-icons\">delete_forever</i></a>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/base/all-blogs/all-blogs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllBlogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllBlogsComponent = (function () {
    function AllBlogsComponent(blogService, auth) {
        this.blogService = blogService;
        this.auth = auth;
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.filterByCategoryId = null;
        this.searchText = null;
        if (this.auth.loggedInUser) {
            this.userFavourites = this.auth.loggedInUser.favourites;
        }
        else {
            this.userFavourites = [];
        }
    }
    AllBlogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogService.filterByCategoryNotifier.subscribe(function (categoryId) {
            _this.filterByCategoryId = categoryId;
        });
    };
    AllBlogsComponent.prototype.selectBlog = function (blog) {
        this.notify.emit(blog);
    };
    AllBlogsComponent.prototype.deleteBlog = function (blog) {
        this.blogService.deleteBlog(blog);
    };
    AllBlogsComponent.prototype.isLoggedIn = function () {
        return this.auth.isLoggedIn();
    };
    AllBlogsComponent.prototype.isPostedByUser = function (blog) {
        return (blog.authorId == this.auth.loggedInUser.id && blog.authorName == this.auth.loggedInUser.username);
    };
    AllBlogsComponent.prototype.markAsFavourite = function (blogId) {
        this.blogService.markAsFavourite(blogId)
            .subscribe(function (updatedUser) {
            localStorage.setItem('user', JSON.stringify(updatedUser));
            console.log(updatedUser);
        });
    };
    AllBlogsComponent.prototype.markAsUnfavourite = function (blogId) {
        this.blogService.markAsUnfavourite(blogId)
            .subscribe(function (updatedUser) {
            localStorage.setItem('user', JSON.stringify(updatedUser));
            console.log(updatedUser);
        });
    };
    AllBlogsComponent.prototype.isFavourite = function (blogId) {
        return this.userFavourites.includes(blogId);
    };
    return AllBlogsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], AllBlogsComponent.prototype, "blogs", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], AllBlogsComponent.prototype, "notify", void 0);
AllBlogsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-all-blogs',
        template: __webpack_require__("../../../../../src/app/base/all-blogs/all-blogs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/base/all-blogs/all-blogs.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object])
], AllBlogsComponent);

var _a, _b, _c;
//# sourceMappingURL=all-blogs.component.js.map

/***/ }),

/***/ "../../../../../src/app/base/base.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home{\r\n  margin-top: 60px;\r\n}\r\napp-edit-blog{\r\n  position: fixed;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/base/base.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar [categories]=\"blogService.categories\" (filterByCategoryNotify)=\"filterByCategory($event)\"></app-navbar>\r\n<div class=\"home row\">\r\n  <div class=\"col s5 offset-s1\">\r\n    <app-all-blogs [blogs]=\"blogService.blogs\" (notify) = selectBlog($event)></app-all-blogs>\r\n  </div>\r\n  <div class=\"col s4 offset-s1\">\r\n    <!--<app-edit-blog [categories]=\"categories\" [blog]=\"selectedBlog\"></app-edit-blog>\r\n    <app-login></app-login>-->\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/base/base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BaseComponent = (function () {
    /*blogs: Object [];
    categories: Object [];
    selectedBlog = null;*/
    function BaseComponent(blogService, auth, router) {
        var _this = this;
        this.blogService = blogService;
        this.auth = auth;
        this.router = router;
        this.blogService.loadCategories()
            .subscribe(function (categories) {
            _this.blogService.categories = categories;
            //console.log(this.blogService.categories);
        });
    }
    BaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('user') == null) {
            this.router.navigate(['/']);
        }
        this.blogService.loadBlogs()
            .subscribe(function (blogs) {
            _this.blogService.blogs = blogs;
            console.log(_this.blogService.blogs);
        });
    };
    BaseComponent.prototype.selectBlog = function (blog) {
        this.blogService.selectBlog(blog);
    };
    BaseComponent.prototype.filterByCategory = function (categoryId) {
        this.blogService.filterByCategory(categoryId);
    };
    return BaseComponent;
}());
BaseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-base',
        template: __webpack_require__("../../../../../src/app/base/base.component.html"),
        styles: [__webpack_require__("../../../../../src/app/base/base.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], BaseComponent);

var _a, _b, _c;
//# sourceMappingURL=base.component.js.map

/***/ }),

/***/ "../../../../../src/app/base/blog-detail/blog-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/base/blog-detail/blog-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  blog-detail works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/base/blog-detail/blog-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogDetailComponent = (function () {
    function BlogDetailComponent() {
    }
    BlogDetailComponent.prototype.ngOnInit = function () {
    };
    return BlogDetailComponent;
}());
BlogDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-blog-detail',
        template: __webpack_require__("../../../../../src/app/base/blog-detail/blog-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/base/blog-detail/blog-detail.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BlogDetailComponent);

//# sourceMappingURL=blog-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/base/edit-blog/edit-blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center{\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 100px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/base/edit-blog/edit-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <form class=\"col s12\">\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s12\">\r\n        <input type=\"text\" class=\"validate\" name=\"title\" [(ngModel)]=\"blog.title\" placeholder=\"Blog title goes here\">\r\n\r\n      </div>\r\n      <div class=\"input-field col s12\">\r\n        <textarea class=\"materialize-textarea\" name=\"desc\" [(ngModel)]=\"blog.desc\" placeholder=\"Blog desc goes here\"></textarea>\r\n\r\n      </div>\r\n      <!--<div class=\"input-field col s12\">\r\n        <input type=\"text\" class=\"validate\" name=\"authorId\" [(ngModel)]=\"blog.authorId\" placeholder=\"Author name goes here\">\r\n        <label>Author Name</label>\r\n      </div>-->\r\n      <div class=\"input-field col s6\">\r\n        <select name=\"category\" #category [(ngModel)]=\"blog.categoryId\">\r\n          <option name=\"category\" value=\"0\" disabled selected>Choose an option</option>\r\n          <option name=\"category\" value=\"1\">Cultural</option>\r\n          <option name=\"category\" value=\"2\">Technical</option>\r\n          <option name=\"category\" value=\"3\">Medical</option>\r\n          <option name=\"category\" value=\"4\">Social</option>\r\n          <option name=\"category\" value=\"5\">Others</option>\r\n        </select>\r\n        <label>Category</label>\r\n      </div>\r\n      <div class=\"col s12\">\r\n        <a class=\"waves-effect waves-light btn left\"(click)=\"save()\">Save</a>\r\n        <a class=\"waves-effect waves-light btn right\"(click)=\"resetForm()\">Reset</a>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/base/edit-blog/edit-blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditBlogComponent = (function () {
    function EditBlogComponent(blogService, auth) {
        this.blogService = blogService;
        this.auth = auth;
        this.categories = null;
        this.emptyBlog = {
            id: null,
            title: null,
            desc: null,
            authorId: null,
            authorName: null,
            categoryId: null,
            date: null
        };
        this.blog = this.emptyBlog;
    }
    EditBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogService.select.subscribe(function (selectedBlog) {
            _this.blog = selectedBlog;
        });
    };
    EditBlogComponent.prototype.ngDoCheck = function () {
        this.categories = this.blogService.categories;
    };
    EditBlogComponent.prototype.save = function () {
        if (this.blog.id == null) {
            this.addBlog(this.blog);
        }
        else {
            this.editBlog(this.blog);
        }
    };
    EditBlogComponent.prototype.addBlog = function (blog) {
        blog.categoryId = Number(this.category.nativeElement.value);
        blog.date = new Date().toDateString();
        if (this.auth.loggedInUser) {
            blog.authorId = this.auth.loggedInUser.id;
            blog.authorName = this.auth.loggedInUser.username;
        }
        this.blogService.addBlog(blog);
    };
    EditBlogComponent.prototype.editBlog = function (blog) {
        blog.categoryId = Number(this.category.nativeElement.value);
        blog.date = new Date().toDateString();
        this.blogService.editBlog(blog);
    };
    EditBlogComponent.prototype.resetForm = function () {
        this.blog = this.emptyBlog;
    };
    return EditBlogComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('category'),
    __metadata("design:type", Object)
], EditBlogComponent.prototype, "category", void 0);
EditBlogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-blog',
        template: __webpack_require__("../../../../../src/app/base/edit-blog/edit-blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/base/edit-blog/edit-blog.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], EditBlogComponent);

var _a, _b;
//# sourceMappingURL=edit-blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/base/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-footer{\r\n  margin-bottom: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/base/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer teal\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col l6 s12\">\r\n        <h5 class=\"white-text\">Footer Content</h5>\r\n        <p class=\"grey-text text-lighten-4\">You can use rows and columns here to organize your footer content.</p>\r\n      </div>\r\n      <div class=\"col l4 offset-l2 s12\">\r\n        <h5 class=\"white-text\">Links</h5>\r\n        <ul>\r\n          <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 1</a></li>\r\n          <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 2</a></li>\r\n          <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 3</a></li>\r\n          <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 4</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"footer-copyright\">\r\n    <div class=\"container\">\r\n      © 2014 Copyright Text\r\n      <a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/base/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/base/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/base/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/base/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home{\r\n  margin-top: 60px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/base/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"home row\">\r\n  <div class=\"col s5 offset-s2\">\r\n    <app-all-blogs></app-all-blogs>\r\n  </div>\r\n  <div class=\"col s5\">\r\n    <app-edit-blog></app-edit-blog>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/base/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/base/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/base/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/base/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin{\r\n  margin-top: 100px;\r\n}\r\n.center{\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/base/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"row margin\">\r\n      <form class=\"col s12\">\r\n        <div class=\"row\">\r\n          <div class=\"input-field col s12\">\r\n            <input placeholder=\"Enter Username Here\" name=\"username\" [(ngModel)]=\"user.username\" type=\"text\" class=\"validate\">\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"input-field col s12\">\r\n            <input placeholder=\"Enter Password Here\" name=\"password\" [(ngModel)]=\"user.password\" type=\"password\" class=\"validate\">\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col s12\">\r\n            <a class=\"waves-effect waves-light btn center\" (click)=\"login()\">Login</a>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/base/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.user = {
            username: null,
            password: null
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.auth.loggedInUser != null) {
            this.router.navigate(['home']);
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        /*console.log(this.auth.login(this.user));
        if (this.auth.login(this.user) ==  true) {
          console.log('logged in user ');
          this.router.navigate(['home']);
        }*/
        this.auth.login()
            .subscribe(function (users) {
            users.forEach(function (user) {
                if (user.username == _this.user.username && user.password == _this.user.password) {
                    localStorage.setItem('user', JSON.stringify(user));
                    _this.auth.loggedInUser = JSON.parse(localStorage.getItem('user'));
                    _this.router.navigate(['home']);
                }
            });
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/base/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/base/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/base/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".brand-logo{\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/base/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <div class=\"nav-wrapper teal\">\r\n    <a (click)=\"filterByCategories(null)\" class=\"brand-logo\">BlogItNow</a>\r\n    <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\r\n    <ul class=\"right hide-on-med-and-down\">\r\n      <li [ngClass]=\"{'active': categoryId == null}\" (click)=\"filterByCategories(null)\"><a>All Blogs</a></li>\r\n      <li [ngClass]=\"{'active': categoryId == -1}\" (click)=\"filterByCategories(-1)\" *ngIf=\"loggedIn()\"><a>My Blogs</a></li>\r\n      <li [ngClass]=\"{'active': categoryId == -2}\" (click)=\"filterByCategories(-2)\" *ngIf=\"loggedIn()\"><a>Favourites</a></li>\r\n      <li [ngClass]=\"{'active': categoryId == category.id}\" *ngFor=\"let category of categories\" (click)=\"filterByCategories(category.id)\"><a>{{category.name}}</a></li>\r\n      <li *ngIf=\"loggedIn()\"><a (click)=\"logout()\">Logout</a></li>\r\n    </ul>\r\n    <ul class=\"side-nav\" id=\"mobile-demo\">\r\n      <li [ngClass]=\"{'active': categoryId == null}\" (click)=\"filterByCategories(null)\"><a>All Blogs</a></li>\r\n      <li [ngClass]=\"{'active': categoryId == -1}\" (click)=\"filterByCategories(-1)\" *ngIf=\"loggedIn()\"><a>My Blogs</a></li>\r\n      <li [ngClass]=\"{'active': categoryId == -2}\" (click)=\"filterByCategories(-2)\" *ngIf=\"loggedIn()\"><a>Favourites</a></li>\r\n      <li [ngClass]=\"{'active': categoryId == category.id}\" *ngFor=\"let category of categories\" (click)=\"filterByCategories(category.id)\"><a>{{category.name}}</a></li>\r\n      <li *ngIf=\"loggedIn()\"><a class=\"waves-effect waves-light btn center\" (click)=\"logout()\">Logout</a></li>\r\n    </ul>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/base/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(auth) {
        this.auth = auth;
        this.filterByCategoryNotify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.categoryId = null;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    NavbarComponent.prototype.loggedIn = function () {
        return this.auth.isLoggedIn();
    };
    NavbarComponent.prototype.filterByCategories = function (categoryId) {
        this.categoryId = categoryId;
        this.filterByCategoryNotify.emit(categoryId);
    };
    return NavbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], NavbarComponent.prototype, "categories", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], NavbarComponent.prototype, "filterByCategoryNotify", void 0);
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/base/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/base/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/base/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#fof{display:block; width:100%; margin:100px 0; line-height:1.6em; text-align:center;}\r\n#fof .hgroup{text-transform:uppercase;}\r\n#fof .hgroup h1{margin-bottom:25px; font-size:80px;}\r\n#fof .hgroup h1 span{display:inline-block; margin-left:5px; padding:2px; border:1px solid #CCCCCC; overflow:hidden;}\r\n#fof .hgroup h1 span strong{display:inline-block; padding:0 20px 20px; border:1px solid #CCCCCC; font-weight:normal;}\r\n#fof .hgroup h2{font-size:60px;}\r\n#fof .hgroup h2 span{display:block; font-size:30px;}\r\n#fof p{margin:25px 0 0 0; padding:0; font-size:16px;}\r\n#fof p:first-child{margin-top:0;}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/base/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper row2\">\r\n  <div id=\"container\" class=\"clear\">\r\n    <!-- ####################################################################################################### -->\r\n    <!-- ####################################################################################################### -->\r\n    <!-- ####################################################################################################### -->\r\n    <!-- ####################################################################################################### -->\r\n    <section id=\"fof\" class=\"clear\">\r\n      <!-- ####################################################################################################### -->\r\n      <div class=\"hgroup\">\r\n        <h1><span><strong>4</strong></span><span><strong>0</strong></span><span><strong>4</strong></span></h1>\r\n        <h2>Error ! <span>Page Not Found</span></h2>\r\n      </div>\r\n      <p>For Some Reason The Page You Requested Could Not Be Found On Our Server</p>\r\n      <p><a href=\"javascript:history.go(-1)\">&laquo; Go Back</a> / <a href=\"#\">Go Home &raquo;</a></p>\r\n      <!-- ####################################################################################################### -->\r\n    </section>\r\n    <!-- ####################################################################################################### -->\r\n    <!-- ####################################################################################################### -->\r\n    <!-- ####################################################################################################### -->\r\n    <!-- ####################################################################################################### -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/base/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/base/not-found/not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/base/not-found/not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Base_URL = 'http://localhost:3000/';
var header = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' })
};
var BlogService = (function () {
    function BlogService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.filterByCategoryId = null;
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.filterByCategoryNotifier = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    BlogService.prototype.loadCategories = function () {
        return this.http.get(Base_URL + "categories")
            .map(function (res) { return res.json(); });
    };
    BlogService.prototype.loadBlogs = function () {
        return this.http.get(Base_URL + "blogs")
            .map(function (res) { return res.json(); });
    };
    BlogService.prototype.selectBlog = function (blog) {
        this.selectedBlog = blog;
        this.select.emit(this.selectedBlog);
    };
    BlogService.prototype.addBlog = function (blog) {
        var _this = this;
        return this.http.post(Base_URL + "blogs", blog, header)
            .map(function (res) { return res.json(); })
            .subscribe(function (newBlog) {
            _this.blogs.push(newBlog);
        });
    };
    BlogService.prototype.editBlog = function (blog) {
        blog.authorId = Number(blog.authorId);
        blog.date = (new Date()).toString();
        console.log('blog to be updated: ', blog);
        return this.http.patch(Base_URL + "blogs/" + blog.id, blog, header)
            .map(function (res) { return res.json(); })
            .subscribe(function (updatedBlog) {
            console.log(updatedBlog);
        });
    };
    BlogService.prototype.deleteBlog = function (blog) {
        var _this = this;
        return this.http.delete(Base_URL + "blogs/" + blog.id)
            .map(function (res) { return res.json(); })
            .subscribe((function (deletedBlog) {
            for (var i = 0; i < _this.blogs.length; i++) {
                if (_this.blogs[i]['id'] == blog.id) {
                    _this.blogs.splice(i, 1);
                    break;
                }
            }
        }));
    };
    BlogService.prototype.markAsFavourite = function (blogId) {
        this.auth.loggedInUser.favourites.push(blogId);
        return this.http.patch(Base_URL + "users/" + this.auth.loggedInUser.id, this.auth.loggedInUser, header)
            .map(function (res) { return res.json(); });
    };
    BlogService.prototype.markAsUnfavourite = function (blogId) {
        var index = this.auth.loggedInUser.favourites.includes(blogId);
        if (index > -1) {
            this.auth.loggedInUser.favourites.splice(index, 1);
        }
        return this.http.patch(Base_URL + "users/" + this.auth.loggedInUser.id, this.auth.loggedInUser, header)
            .map(function (res) { return res.json(); });
    };
    BlogService.prototype.filterByCategory = function (categoryId) {
        this.filterByCategoryId = categoryId;
        this.filterByCategoryNotifier.emit(this.filterByCategoryId);
    };
    return BlogService;
}());
BlogService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], BlogService);

var _a, _b;
//# sourceMappingURL=blog.service.js.map

/***/ }),

/***/ "../../../../../src/app/filter-by-category.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByCategoryPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByCategoryPipe = (function () {
    function FilterByCategoryPipe() {
    }
    FilterByCategoryPipe.prototype.transform = function (blogs, categoryId) {
        if (!blogs) {
            return [];
        }
        if (!categoryId) {
            return blogs;
        }
        if (categoryId === -1) {
            return blogs.filter(function (blog) { return blog['authorName'] == JSON.parse(localStorage.getItem('user')).username; });
        } // my blogs
        if (categoryId === -2) {
            return blogs.filter(function (blog) { return JSON.parse(localStorage.getItem('user')).favourites.includes(blog['id']); });
        } // favourite blogs
        return blogs.filter(function (blog) { return blog['categoryId'] === categoryId; });
    };
    return FilterByCategoryPipe;
}());
FilterByCategoryPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'filterByCategory',
        pure: false
    })
], FilterByCategoryPipe);

//# sourceMappingURL=filter-by-category.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (blogs, searchText) {
        if (!blogs) {
            return [];
        }
        if (!searchText) {
            return blogs;
        }
        searchText = searchText.toLowerCase();
        return blogs.filter(function (blog) {
            if (blog['title']) {
                return blog['title'].toLowerCase().includes(searchText);
            }
            return blogs;
        });
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'search'
    })
], SearchPipe);

//# sourceMappingURL=search.pipe.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map