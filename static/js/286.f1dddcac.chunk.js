"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[286],{5858:function(s,e,t){t.r(e),t.d(e,{default:function(){return K}});var o=t(5671),n=t(3144),r=t(136),i=t(5716),a=t(2791),l=t(885),c="ProfileInfo_descriptionBlock__-EtNQ",u="ProfileInfo_mainPhoto__dnC-E",d="ProfileInfo_my__JNBUx",f="ProfileInfo_label__A99uQ",p="ProfileInfo_flexBoxForInput__Wvs6l",h="ProfileInfo_inputBox__EllNE",m="ProfileInfo_input__RVZue",x="ProfileInfo_contact__fvg4t",j="ProfileInfo_contactsBox__fnMu5",v="ProfileInfo_b__LwTMH",_="ProfileInfo_word__VapyT",b="ProfileInfo_error__9ABVD",P=t(6674),N=t(8478),g=t(184),I=function(s){var e=(0,a.useState)(!1),t=(0,l.Z)(e,2),o=t[0],n=t[1],r=(0,a.useState)(s.status),i=(0,l.Z)(r,2),c=i[0],u=i[1];(0,a.useEffect)((function(){u(s.status)}),[s.status]);return(0,g.jsxs)("div",{children:[!o&&(0,g.jsx)("div",{className:h,children:(0,g.jsx)("span",{className:m,onClick:function(){n(!0)},children:s.status||"-------"})}),o&&(0,g.jsx)("div",{className:h,children:(0,g.jsx)("input",{autoFocus:!0,onChange:function(s){u(s.currentTarget.value)},onBlur:function(){n(!1),s.updateStatus(c)},value:c})})]})},k=t(6871),y=function(s){var e=(0,k.UO)().userId,t=(0,a.useState)(!1),o=(0,l.Z)(t,2),n=o[0],r=o[1];return(0,g.jsxs)("div",{children:[s.isOwner&&(0,g.jsx)("div",{children:(0,g.jsx)("button",{onClick:s.goToEditMode,className:"button",children:"Edit \u2193"})}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{className:v,children:"Full name"}),":",(0,g.jsx)("b",{className:_,children:s.profile.fullName})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{className:v,children:"Looking for a job"}),":",(0,g.jsx)("span",{className:_,children:s.profile.lookingForAJob?"yes":"no"})]}),s.profile.lookingForAJob&&(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{className:v,children:"My professional skills"}),": ",(0,g.jsx)("span",{className:_,children:s.profile.lookingForAJobDescription})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{onClick:function(){return r(!n)},className:j,children:"Contacts"}),": ",n?(0,g.jsx)("div",{children:Object.keys(s.profile.contacts).map((function(e){return(0,g.jsx)(S,{contactTitle:e,contactValue:s.profile.contacts[e]},e)}))}):" "]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{className:v,children:"About me"}),":",(0,g.jsx)("span",{className:_,children:s.profile.aboutMe})]}),(0,g.jsxs)("div",{className:p,children:[(0,g.jsx)("b",{className:v,children:"Status"}),":",e?(0,g.jsx)("span",{className:_,children:s.status}):(0,g.jsx)(I,{status:s.status,updateStatus:s.updateStatus})]})]})},S=function(s){return(0,g.jsx)("div",{children:(0,g.jsxs)("div",{className:x,children:[(0,g.jsx)("b",{className:v,children:s.contactTitle})," : ",(0,g.jsx)("span",{className:_,children:s.contactValue})]})})},Z=t(6139),C=t(704),w=t(214),A=t(2177),M=(0,C.Z)({form:"edit-profile"})((function(s){var e=(0,A.v9)((function(s){return s.profilePage.profile}));return(0,g.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,g.jsx)("div",{children:(0,g.jsx)("button",{className:"button",children:"Save \u2193"})}),s.error&&(0,g.jsxs)("div",{className:b,children:["ERROR:",s.error]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{className:v,children:"Full name"}),": ",(0,g.jsx)(Z.Z,{placeholder:"FullName",name:"fullName",component:w.I})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{className:v,children:"Looking for a job"}),":",(0,g.jsx)(Z.Z,{placeholder:"",name:"lookingForAJob",component:w.I,type:"checkbox"})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{className:v,children:"My professional skills"}),": ",(0,g.jsx)(Z.Z,{placeholder:"My Professional skills",name:"lookingForAJobDescription",component:w.I,type:"textarea"})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{className:v,children:"About me"}),": ",(0,g.jsx)(Z.Z,{placeholder:"About me",name:"aboutMe",component:w.I,type:"textarea"})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{className:v,children:"Contacts"}),": ",Object.keys(e.contacts).map((function(s){return(0,g.jsx)("div",{children:(0,g.jsxs)("b",{className:v,children:[s,": ",(0,g.jsx)(Z.Z,{placeholder:s,name:"contacts."+s,component:w.I})]})},s)}))]})]})})),E=function(s){var e=(0,a.useState)(!1),t=(0,l.Z)(e,2),o=t[0],n=t[1];if(!s.profile)return(0,g.jsx)(P.Z,{});return(0,g.jsx)("div",{children:(0,g.jsxs)("div",{className:c,children:[(0,g.jsx)("img",{src:s.profile.photos.large||N,className:u}),s.isOwner&&(0,g.jsxs)("label",{className:f,children:[" load avatar ",(0,g.jsx)("input",{type:"file",className:d,onChange:function(e){e.target.files.length&&s.savePhoto(e.target.files[0])}})]}),o?(0,g.jsx)(M,{initialValues:s.profile,onSubmit:function(e){s.saveProfile(e).then((function(){n(!1)}))}}):(0,g.jsx)(y,{profile:s.profile,updateStatus:s.updateStatus,status:s.status,isOwner:s.isOwner,userId:s.userId,goToEditMode:function(){n(!0)}})]})})},F="MyPosts_postsBlock__mT0rj",O="MyPosts_posts__6l7bT",T="MyPosts_nameBlock__LruI8",B="MyPosts_textArea__V37WH",V="Post_item__CLSZV",J=function(s){var e=(0,A.v9)((function(s){var e,t;return null===(e=s.profilePage.profile)||void 0===e||null===(t=e.photos)||void 0===t?void 0:t.small}));return(0,g.jsxs)("div",{className:V,children:[e?(0,g.jsx)("img",{src:e}):"Loading photo... ",s.message,(0,g.jsxs)("div",{children:[(0,g.jsx)("span",{children:"like"})," ",s.likesCount]})]})},U=t(3079),L=(0,U.B)(10),D=a.memo((function(s){var e=s.posts.map((function(s,e){return(0,g.jsx)(J,{message:s.message,likesCount:s.likesCount},e)}));console.log("123");return(0,g.jsxs)("div",{className:F,children:[(0,g.jsx)("h3",{className:T,children:"My posts"}),(0,g.jsx)(R,{onSubmit:function(e){s.addPost(e.newPostText)}}),(0,g.jsx)("div",{className:O,children:e})]})})),R=(0,C.Z)({form:"ProfileAddNewPostForm"})((function(s){return(0,g.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,g.jsx)("div",{children:(0,g.jsx)(Z.Z,{className:B,name:"newPostText",placeholder:"Enter your text",component:w.g,validate:[U.C,L]})}),(0,g.jsx)("div",{children:(0,g.jsx)("button",{className:"button",children:"Add post"})})]})})),W=D,z=t(81),H=(0,A.$j)((function(s){return{posts:s.profilePage.posts}}),(function(s){return{addPost:function(e){var t=(0,z.Wl)(e);s(t)}}}))(W),Q=function(s){return(0,g.jsxs)("div",{children:[(0,g.jsx)(E,{userId:s.userId,saveProfile:s.saveProfile,savePhoto:s.savePhoto,isOwner:s.isOwner,profile:s.profile,status:s.status,updateStatus:s.updateStatus}),(0,g.jsx)(H,{})]})},$=t(166),q=t(7781),G=function(s){(0,r.Z)(t,s);var e=(0,i.Z)(t);function t(){return(0,o.Z)(this,t),e.apply(this,arguments)}return(0,n.Z)(t,[{key:"refreshProfile",value:function(){var s=this.props.router.params.userId;s||(s=this.props.autorizedUserId)||this.props.router.navigate("/login"),this.props.getUserProfile(s),this.props.getStatus(s)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(s,e,t){this.props.router.params.userId!=s.router.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,g.jsx)("div",{children:(0,g.jsx)(Q,{isOwner:!this.props.router.params.userId,status:this.props.status,updateStatus:this.props.updateStatus,profile:this.props.profile,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile,userId:123})})}}]),t}(a.Component),K=(0,q.qC)((0,A.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,autorizedUserId:s.auth.usersId,isAuth:s.auth.isAuth}}),{getUserProfile:z.et,updateStatus:z.Nf,getStatus:z.lR,savePhoto:z.Ju,saveProfile:z.Ii}),$.E)(G)}}]);
//# sourceMappingURL=286.f1dddcac.chunk.js.map