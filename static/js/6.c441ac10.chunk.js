"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[6],{3006:function(t,s,e){e.r(s),e.d(s,{default:function(){return L}});var n=e(5671),r=e(3144),i=e(136),o=e(8557),a=e(2791),u=e(9439),c="ProfileInfo_descriptionBlock__gCslS",l="ProfileInfo_mainPhoto__C0THS",d="ProfileInfo_contact__HsKT-",h=e(1920),f=e(3846),p=e(184),x=function(t){var s=(0,a.useState)(!1),e=(0,u.Z)(s,2),n=e[0],r=e[1],i=(0,a.useState)(t.status),o=(0,u.Z)(i,2),c=o[0],l=o[1];(0,a.useEffect)((function(){l(t.status)}),[t.status]);var d=function(){r(!1),t.updateStatus(c.trim())};return(0,p.jsxs)(p.Fragment,{children:[!n&&(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Status"}),": ",(0,p.jsx)("span",{onDoubleClick:function(){return r(!0)},children:t.status||"--------"})]}),n&&(0,p.jsx)("div",{children:(0,p.jsx)("input",{value:c,onBlur:d,autoFocus:!0,onChange:function(t){l(t.currentTarget.value)},onKeyDown:function(t){"Enter"===t.key&&d()}})})]})},j=e(1117),m=e(704),v=e(9234),b=(0,m.Z)({form:"edit-profile"})((function(t){var s=t.handleSubmit,e=t.initialValues,n=t.error;return(0,p.jsxs)("form",{onSubmit:s,children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Full name"}),": ",(0,j.Gr)("Full name","fullName",[],j.II,"input")]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Looking for a job"}),":",(0,j.Gr)("","lookingForAJob",[],j.II,"input",{type:"checkbox"},"looking for a job")]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"My skills"}),":",(0,j.Gr)("My skills","lookingForAJobDescription",[],j.gx,"textarea")]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"About me"}),":",(0,j.Gr)("About me","aboutMe",[],j.gx,"textarea")]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Contacts"}),": ",e.contacts&&Object.keys(e.contacts).map((function(t){return(0,p.jsx)("div",{className:d,children:(0,p.jsxs)("b",{children:[t,": ",(0,j.Gr)(t,"contacts."+t,[],j.II,"input")]})},t)}))]}),n&&(0,p.jsx)("div",{className:v.Z.formSummaryError,children:n}),(0,p.jsx)("div",{children:(0,p.jsx)("button",{children:"Save"})})]})})),g=function(t){var s=t.isOwner,e=t.profile,n=t.status,r=t.updateStatus,i=t.saveMainPhoto,o=t.saveProfile,d=(0,a.useState)(!1),j=(0,u.Z)(d,2),m=j[0],v=j[1];if(!e)return(0,p.jsx)(f.p,{});return(0,p.jsx)("div",{children:(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)("img",{src:e.photos.large||h,alt:"user",className:l}),s&&(0,p.jsx)("input",{type:"file",onChange:function(t){t.target.files&&i(t.target.files[0])}}),(0,p.jsx)(x,{status:n,updateStatus:r}),m?(0,p.jsx)(b,{initialValues:e,onSubmit:function(t){o(t).then((function(){v(!1)}))}}):(0,p.jsx)(k,{profile:e,isOwner:s,turnOnEditMode:function(){return v(!0)}})]})})},k=function(t){var s=t.profile,e=t.isOwner,n=t.turnOnEditMode;return(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{children:["Hi, my name is ",s.fullName," ",e&&(0,p.jsx)("button",{onClick:n,children:"Edit profile"})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Looking for a job"}),": ",s.lookingForAJob?"yes":"no"]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"My skills"}),": ",s.lookingForAJobDescription]}),(0,p.jsx)("div",{children:s.aboutMe}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Contacts"}),": ",s.contacts&&Object.keys(s.contacts).map((function(t){return(0,p.jsx)(P,{contactTitle:t,contactValue:s.contacts&&s.contacts[t]},t)}))]})]})},P=function(t){var s=t.contactTitle,e=t.contactValue;return(0,p.jsxs)("div",{className:d,children:[(0,p.jsx)("b",{children:s}),": ",e]})},C="MyPosts_postsBlock__d3D3L",y="MyPosts_posts__53ep-",S="Post_item__5eqmj",_=function(t){return(0,p.jsxs)("div",{className:S,children:[(0,p.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpH2L9SxARizd9V_dTyF1xaNW_71Tj0QjKQ&usqp=CAU",alt:"avatar"}),t.message,(0,p.jsxs)("div",{children:[(0,p.jsx)("span",{children:"like"})," ",t.likesCount]})]})},T=e(6139),M=e(3079),A=(0,M.D)(10),I=a.memo((function(t){var s=t.posts.map((function(t){return(0,p.jsx)(_,{id:t.id,message:t.message,likesCount:t.likesCount},t.id)}));return(0,p.jsxs)("div",{className:C,children:[(0,p.jsx)("h3",{children:"My posts"}),(0,p.jsx)(N,{onSubmit:function(s){t.addPost(s.newPostText)}}),(0,p.jsx)("div",{className:y,children:s})]})})),N=(0,m.Z)({form:"profileAddPostReduxForm"})((function(t){return(0,p.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,p.jsx)("div",{children:(0,p.jsx)(T.Z,{name:"newPostText",placeholder:"write a post",component:j.gx,validate:[M.C,A],FieldType:"textarea"})}),(0,p.jsx)("div",{children:(0,p.jsx)("button",{children:"Add post"})})]})})),w=e(81),Z=e(364),D=(0,Z.$j)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(s){return t((0,w.WA)(s))}}}))(I),F=function(t){var s=t.isOwner,e=t.profile,n=t.status,r=t.updateStatus,i=t.saveMainPhoto,o=t.saveProfile;return(0,p.jsxs)("div",{children:[(0,p.jsx)(g,{isOwner:s,profile:e,status:n,updateStatus:r,saveMainPhoto:i,saveProfile:o}),(0,p.jsx)(D,{})]})},O=e(9271),U=e(7781),E=e(2932),G=function(t){(0,i.Z)(e,t);var s=(0,o.Z)(e);function e(){return(0,n.Z)(this,e),s.apply(this,arguments)}return(0,r.Z)(e,[{key:"refreshProfile",value:function(){var t,s=null!==(t=this.props.match.params.userId)&&void 0!==t?t:this.props.authorizedUserId;s||this.props.history.push("/login"),this.props.getUserProfileTC(Number(s)),this.props.getUserStatusThunkCreator(Number(s))}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,s,e){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,p.jsx)(F,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateUserStatusThunkCreator,saveMainPhoto:this.props.saveMainPhotoTC,saveProfile:this.props.saveProfileTC})}}]),e}(a.Component),L=(0,U.qC)((0,Z.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.id}}),{getUserProfileTC:w.d$,getUserStatusThunkCreator:w.fG,updateUserStatusThunkCreator:w.X8,saveMainPhotoTC:w.D3,saveProfileTC:w.Ms}),O.EN,E.D)(G)},2932:function(t,s,e){e.d(s,{D:function(){return l}});var n=e(1413),r=e(5987),i=(e(2791),e(9271)),o=e(364),a=e(184),u=["isAuth"],c=function(t){return{isAuth:t.auth.isAuth}};function l(t){return(0,o.$j)(c)((function(s){var e=s.isAuth,o=(0,r.Z)(s,u);return e?(0,a.jsx)(t,(0,n.Z)({},o)):(0,a.jsx)(i.l_,{to:"/login"})}))}}}]);
//# sourceMappingURL=6.c441ac10.chunk.js.map