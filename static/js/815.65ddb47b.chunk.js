"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[815],{5815:function(t,e,s){s.r(e),s.d(e,{default:function(){return M}});var n=s(1413),r=s(5671),u=s(3144),i=s(136),o=s(5716),a=s(2791),l="ProfileInfo_descriptionBlock__wqeiH",c=s(1628),p=s(885),d=s(184),f=function(t){var e=(0,a.useState)(!1),s=(0,p.Z)(e,2),n=s[0],r=s[1],u=(0,a.useState)(t.status),i=(0,p.Z)(u,2),o=i[0],l=i[1];(0,a.useEffect)((function(){l(t.status)}),[t.status]);return(0,d.jsxs)("div",{children:[!n&&(0,d.jsx)("div",{children:(0,d.jsx)("span",{onDoubleClick:function(){r(!0)},children:t.status||"-------"})}),n&&(0,d.jsx)("div",{children:(0,d.jsx)("input",{onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),t.updateStatus(o)},value:o})})]})},h=function(t){var e=t.profile,s=t.status,n=t.updateStatus;return e?(0,d.jsx)("div",{children:(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)("img",{src:e.photos.large}),(0,d.jsx)(f,{status:s,updateStatus:n})]})}):(0,d.jsx)(c.Z,{})},v=s(6070),x="MyPosts_postsBlock__ww54-",j="MyPosts_posts__mBZBT",m="Post_item__vTVNB",g=function(t){return(0,d.jsxs)("div",{className:m,children:[(0,d.jsx)("img",{src:"https://pp.userapi.com/c836320/v836320225/63fbc/-AL8gmuPvCM.jpg",alt:""}),t.message,(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"like"}),"  ",t.likesCount]})]})},y=s(6139),P=s(704),Z=s(5304),S=s(7492),b=(0,Z.D)(20),w=a.memo((function(t){var e=t.posts.map((function(t){return(0,d.jsx)(g,{message:t.message,likesCount:t.likesCount},t.id)}));return(0,d.jsxs)("div",{className:x,children:[(0,d.jsx)("h3",{children:"My posts"}),(0,d.jsx)(_,{onSubmit:function(e){t.addPost(e.newPostText)}}),(0,d.jsx)("div",{children:"New post"}),(0,d.jsx)("div",{className:j,children:e})]})})),_=(0,P.Z)({form:"profileAddNewPostForm"})((function(t){return(0,d.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,d.jsx)("div",{children:(0,d.jsx)(y.Z,{placeholder:"Post message",component:S.gx,cols:"15",rows:"2",name:"newPostText",validate:[Z.l,b]})}),(0,d.jsx)("div",{children:(0,d.jsx)("button",{children:"Add post"})})]})})),k=w,C=s(364),A=(0,C.$j)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t((0,v.Wl)(e))}}}))(k),N=function(t){return(0,d.jsxs)("div",{children:[(0,d.jsx)(h,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,d.jsx)(A,{store:t.store})]})},T=s(9271),I=s(5927),B=s(7781),D=function(t){(0,i.Z)(s,t);var e=(0,o.Z)(s);function s(){return(0,r.Z)(this,s),e.apply(this,arguments)}return(0,u.Z)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||(t=23095),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return(0,d.jsx)("div",{children:(0,d.jsx)(N,(0,n.Z)((0,n.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))})}}]),s}(a.Component),M=(0,B.qC)((0,C.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:v.et,getStatus:v.lR,updateStatus:v.Nf}),T.EN,I.D)(D)},5927:function(t,e,s){s.d(e,{D:function(){return f}});var n=s(1413),r=s(5671),u=s(3144),i=s(136),o=s(5716),a=s(2791),l=s(9271),c=s(364),p=s(184),d=function(t){return{isAuth:t.auth.isAuth}},f=function(t){var e=function(e){(0,i.Z)(a,e);var s=(0,o.Z)(a);function a(){return(0,r.Z)(this,a),s.apply(this,arguments)}return(0,u.Z)(a,[{key:"render",value:function(){return this.props.isAuth?(0,p.jsx)(t,(0,n.Z)({},this.props)):(0,p.jsx)(l.l_,{to:"/login"})}}]),a}(a.Component);return(0,c.$j)(d)(e)}},885:function(t,e,s){s.d(e,{Z:function(){return r}});var n=s(181);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var s=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=s){var n,r,u=[],i=!0,o=!1;try{for(s=s.call(t);!(i=(n=s.next()).done)&&(u.push(n.value),!e||u.length!==e);i=!0);}catch(a){o=!0,r=a}finally{try{i||null==s.return||s.return()}finally{if(o)throw r}}return u}}(t,e)||(0,n.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=815.65ddb47b.chunk.js.map