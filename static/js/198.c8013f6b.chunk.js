/*! For license information please see 198.c8013f6b.chunk.js.LICENSE.txt */
(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[198],{2198:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return R}});var r=t(5671),o=t(3144),i=t(136),u=t(5716),s=t(2791),a=t(364),l=t(2338),c=t(5987),f=t(4942),p=t(885),g="Paginator_paginator__OUYZM",d="Paginator_pageNumber__xi3fe",h="Paginator_selectedPage__Ybjuq",v=t(1694),m=t.n(v),y=t(184),w=function(n){for(var e=n.totalItemsCount,t=n.pageSize,r=n.currentPage,o=n.onPageChanged,i=n.portionSize,u=void 0===i?10:i,a=Math.ceil(e/t),l=[],c=1;c<=a;c++)l.push(c);var v=Math.ceil(a/u),w=(0,s.useState)(1),x=(0,p.Z)(w,2),A=x[0],j=x[1],O=(A-1)*u+1,b=A*u;return(0,y.jsxs)("div",{className:g,children:[A>1&&(0,y.jsx)("button",{onClick:function(){j(A-1)},children:"PREV"}),l.filter((function(n){return n>=O&&n<=b})).map((function(n){return(0,y.jsx)("span",{className:m()((0,f.Z)({},h,r===n),d),onClick:function(e){o(n)},children:n},n)})),v>A&&(0,y.jsx)("button",{onClick:function(){j(A+1)},children:"NEXT"})]})},x="Users_userPhoto__aMXey",A=t(1523),j=function(n){var e=n.user,t=n.followingInProgress,r=n.unfollow,o=n.follow;return(0,y.jsxs)("div",{children:[(0,y.jsxs)("span",{children:[(0,y.jsx)("div",{children:(0,y.jsx)(A.OL,{to:"/profile/"+e.id,children:(0,y.jsx)("img",{src:null!=e.photos.small?e.photos.small:"data:image/png;base64,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",className:x})})}),(0,y.jsx)("div",{children:e.followed?(0,y.jsx)("button",{disabled:t.some((function(n){return n===e.id})),onClick:function(){r(e.id)},children:"Unfollow"}):(0,y.jsx)("button",{disabled:t.some((function(n){return n===e.id})),onClick:function(){o(e.id)},children:"Follow"})})]}),(0,y.jsxs)("span",{children:[(0,y.jsxs)("span",{children:[(0,y.jsx)("div",{children:e.name}),(0,y.jsx)("div",{children:e.status})]}),(0,y.jsxs)("span",{children:[(0,y.jsx)("div",{children:"user.location.country"}),(0,y.jsx)("div",{children:"user.location.city"})]})]})]})},O=["currentPage","totalUsersCount","pageSize","onPageChanged","users"],b=function(n){var e=n.currentPage,t=n.totalUsersCount,r=n.pageSize,o=n.onPageChanged,i=n.users,u=(0,c.Z)(n,O);return(0,y.jsxs)("div",{children:[(0,y.jsx)(w,{currentPage:e,pageSize:r,onPageChanged:o,totalItemsCount:t}),(0,y.jsx)("div",{children:i.map((function(n){return(0,y.jsx)(j,{user:n,followingInProgress:u.followingInProgress,unfollow:u.unfollow,follow:u.follow},n.id)}))})]})},C=t(1628),Z=t(5927),P=t(7781),D="NOT_FOUND";var z=function(n,e){return n===e};function S(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?z:r,i=t.maxSize,u=void 0===i?1:i,s=t.resultEqualityCheck,a=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),l=1===u?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:D},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(a):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return D}return{get:r,put:function(e,o){r(e)===D&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(u,a);function c(){var e=l.get(arguments);if(e===D){if(e=n.apply(null,arguments),s){var t=l.getEntries(),r=t.find((function(n){return s(n.value,e)}));r&&(e=r.value)}l.put(arguments,e)}return e}return c.clearCache=function(){return l.clear()},c}function U(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function V(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,u=0,s={memoizeOptions:void 0},a=r.pop();if("object"===typeof a&&(s=a,a=r.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var l=s,c=l.memoizeOptions,f=void 0===c?t:c,p=Array.isArray(f)?f:[f],g=U(r),d=n.apply(void 0,[function(){return u++,a.apply(null,arguments)}].concat(p)),h=n((function(){for(var n=[],e=g.length,t=0;t<e;t++)n.push(g[t].apply(null,arguments));return i=d.apply(null,n)}));return Object.assign(h,{resultFunc:a,memoizedResultFunc:d,dependencies:g,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),h};return o}var N=V(S),F=N((function(n){return n.usersPage.users}),(function(n){return n.filter((function(n){return!0}))})),H=function(n){return n.usersPage.pageSize},X=function(n){return n.usersPage.totalUsersCount},k=function(n){return n.usersPage.currentPage},M=function(n){return n.usersPage.isFetching},W=function(n){return n.usersPage.followingInProgress},G=function(n){(0,i.Z)(t,n);var e=(0,u.Z)(t);function t(){var n;(0,r.Z)(this,t);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return(n=e.call.apply(e,[this].concat(i))).onPageChanged=function(e){var t=n.props.pageSize;n.props.getUsers(e,t)},n}return(0,o.Z)(t,[{key:"componentDidMount",value:function(){var n=this.props,e=n.currentPage,t=n.pageSize;this.props.getUsers(e,t)}},{key:"render",value:function(){return(0,y.jsxs)(y.Fragment,{children:[this.props.isFetching?(0,y.jsx)(C.Z,{}):null,(0,y.jsx)(b,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),t}(s.Component),R=(0,P.qC)(Z.D,(0,a.$j)((function(n){return{users:F(n),pageSize:H(n),totalUsersCount:X(n),currentPage:k(n),isFetching:M(n),followingInProgress:W(n)}}),{follow:l.ZN,unfollow:l.fv,setCurrentPage:l.D4,toggleFollowingProgress:l.ZH,getUsers:l.D7}))(G)},5927:function(n,e,t){"use strict";t.d(e,{D:function(){return g}});var r=t(1413),o=t(5671),i=t(3144),u=t(136),s=t(5716),a=t(2791),l=t(9271),c=t(364),f=t(184),p=function(n){return{isAuth:n.auth.isAuth}},g=function(n){var e=function(e){(0,u.Z)(a,e);var t=(0,s.Z)(a);function a(){return(0,o.Z)(this,a),t.apply(this,arguments)}return(0,i.Z)(a,[{key:"render",value:function(){return this.props.isAuth?(0,f.jsx)(n,(0,r.Z)({},this.props)):(0,f.jsx)(l.l_,{to:"/login"})}}]),a}(a.Component);return(0,c.$j)(p)(e)}},1694:function(n,e){var t;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var n=[],e=0;e<arguments.length;e++){var t=arguments[e];if(t){var i=typeof t;if("string"===i||"number"===i)n.push(t);else if(Array.isArray(t)){if(t.length){var u=o.apply(null,t);u&&n.push(u)}}else if("object"===i)if(t.toString===Object.prototype.toString)for(var s in t)r.call(t,s)&&t[s]&&n.push(s);else n.push(t.toString())}}return n.join(" ")}n.exports?(o.default=o,n.exports=o):void 0===(t=function(){return o}.apply(e,[]))||(n.exports=t)}()},885:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});var r=t(181);function o(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],u=!0,s=!1;try{for(t=t.call(n);!(u=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(a){s=!0,o=a}finally{try{u||null==t.return||t.return()}finally{if(s)throw o}}return i}}(n,e)||(0,r.Z)(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=198.c8013f6b.chunk.js.map