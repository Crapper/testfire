webpackJsonp([1,5],{1021:function(t,e,n){"use strict";var o=n(1),r=n(72),a=n(1037),i=n(1029),c=n(1028);n.d(e,"MenuModule",function(){return d});var u=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},f=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(){function t(){}return t=u([n.i(o.NgModule)({declarations:[i.a,c.a],imports:[r.CommonModule,a.a]}),f("design:paramtypes",[])],t)}()},1028:function(t,e,n){"use strict";var o=n(1);n.d(e,"a",function(){return i});var r=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t.prototype.ngOnInit=function(){},t=r([n.i(o.Component)({selector:"app-menu",template:"\n    <router-outlet></router-outlet>\n  ",styles:[]}),a("design:paramtypes",[])],t)}()},1029:function(t,e,n){"use strict";var o=n(1),r=n(121),a=n(60);n.d(e,"a",function(){return u});var i=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t,e){this.af=t,this.router=e,this.menuheader=[],this.menu=t.database.list("/menu"),this.menuheader.push({headeritem:"Menu Naam"},{headeritem:"Menu Volgorde"})}return t.prototype.addItem=function(t){this.menu.push({text:t})},t.prototype.updateItem=function(t,e,n){this.menu.update(t,{text:e,order:n})},t.prototype.deleteItem=function(t){this.menu.remove(t)},t.prototype.deleteEverything=function(){this.menu.remove()},t=i([n.i(o.Component)({selector:"app-menulist",template:n(1105),styles:[n(1101)]}),c("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.a&&r.a)&&e||Object,"function"==typeof(u="undefined"!=typeof a.Router&&a.Router)&&u||Object])],t);var e,u}()},1037:function(t,e,n){"use strict";var o=n(60),r=n(1028),a=n(1029);n.d(e,"a",function(){return c});var i=[{path:"",component:r.a,children:[{path:"",component:a.a}]}],c=o.RouterModule.forChild(i)},1101:function(t,e){t.exports=""},1105:function(t,e){t.exports='  <table class="table table-hover table-striped table-sortable">\n  <thead class="thead-inverse">\n    <tr>\n      <th *ngFor="let header of menuheader">\n        {{header.headeritem}}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor="let item of menu | async">\n      <td>\n          <div class="form-group row">\n            <div class="col-xs-10">\n              <input class="form-control" type="text" #updatetext [value]="item.text">\n            </div>\n          </div>\n      </td>\n      <td>\n        <div class="form-group row">\n            <div class="col-xs-10">\n              <input class="form-control" type="number" #updateorder [value]="item.order">\n            </div>\n          </div>\n      </td>\n      <td>\n        <button class="btn btn-primary" (click)="updateItem(item.$key, updatetext.value, updateorder.value)">Update</button>\n        <button class="btn btn-danger" (click)="deleteItem(item.$key)">Delete</button>\n      </td>\n    </tr>\n  </tbody>\n</table>'}});