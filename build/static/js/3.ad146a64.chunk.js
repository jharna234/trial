(this["webpackJsonpnews-portal"]=this["webpackJsonpnews-portal"]||[]).push([[3],{91:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n="https://frozen-atoll-28362.herokuapp.com"},92:function(e,t,a){"use strict";var n=a(1),o=a.n(n),l=a(5);t.a=function(e){return o.a.createElement(l.a,{color:"success",closeButton:!0},e.message)}},93:function(e,t,a){"use strict";var n=a(1),o=a.n(n),l=a(5);t.a=function(e){return o.a.createElement(l.a,{color:"danger",closeButton:!0},e.message)}},98:function(e,t,a){"use strict";a.r(t);var n=a(14),o=a(15),l=a(18),s=a(16),r=a(1),c=a.n(r),i=a(5),u=a(35),m=a(23),p=a(12),d=a(17),h=a(91),g=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).handleInputChange=function(e){var t=e.target,a=t.name,n=t.value;o.setState(Object(u.a)({},a,n))},o.imageUploader=function(e){e.preventDefault(),console.log(e.target.files),o.setState({selectedFile:e.target.files[0]})},o.handleFormSubmit=function(e){e.preventDefault();var t=new d.a,a=new FormData;a.append("images",o.state.selectedFile),a.append("posttitle",o.state.posttitle),a.append("postcategory",o.state.postcategory),a.append("postdetails",o.state.postdetails),a.append("postconclusion",o.state.postconclusion),m.post(h.a+"/posts/",a,{headers:{Authorization:t.get("token")}}).then((function(e){m.get(h.a+"/usersnews/").then((function(e){console.log(e.data);var t=e.data;o.props.updateNews(t),console.log("o/p"+o.state.newsList)})),o.props.manageTabController(),o.props.showAlert()})).catch((function(e){e.response&&console.log(e.response),this.showError(e.response)}))},console.log(e),o.state={posttitle:"",postcategory:"",postdetails:"",postconclusion:"",uploading:!1,selectedFile:null},o}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(i.g,null,c.a.createElement(i.h,null,c.a.createElement(i.u,{onSubmit:this.handleFormSubmit},c.a.createElement(i.v,null,c.a.createElement(i.E,{htmlFor:"posttitle"},"Post tittle"),c.a.createElement(i.z,{name:"posttitle",id:"posttitle",value:this.state.posttitle,onChange:this.handleInputChange,placeholder:"Enter Post Tittle",required:"required"})),c.a.createElement(i.v,null,c.a.createElement(i.E,{htmlFor:"postcategory"},"Post Category"),c.a.createElement(i.z,{name:"postcategory",id:"postcategory",value:this.state.postcategory,onChange:this.handleInputChange,placeholder:"Enter Post Category",required:"required"})),c.a.createElement(i.v,null,c.a.createElement(i.E,{htmlFor:"postdetails"},"Post Details"),c.a.createElement(i.z,{id:"postdetails",name:"postdetails",value:this.state.postdetails,onChange:this.handleInputChange,placeholder:"Enter Post Details"})),c.a.createElement(i.v,null,c.a.createElement(i.E,{htmlFor:"postconclusion"},"Post Conclusion"),c.a.createElement(i.db,{name:"postconclusion",id:"postconclusion",value:this.state.postconclusion,onChange:this.handleInputChange,placeholder:"Enter Post Conclusion",required:"required"})),c.a.createElement(i.v,null,c.a.createElement(i.E,{htmlFor:"images"},"Images"),c.a.createElement(i.z,{type:"file",name:"file",onChange:this.imageUploader,placeholder:"Enter Post Details"})),c.a.createElement(i.v,null,c.a.createElement(i.f,{type:"submit",size:"sm",color:"primary"},c.a.createElement(p.a,{name:"cil-scrubber"})," Submit")))))}}]),a}(c.a.Component),E=a(94),f=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).handleDeleteBtn=function(t){var a=new d.a;m.delete(h.a+"/posts/".concat(t),{headers:{Authorization:a.get("token")}}).then((function(t){m.get(h.a+"/usersnews/").then((function(t){console.log(t.data);var a=t.data;e.props.updateNews(a)})),e.props.toggle(),e.props.showDeleteAlert()}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.I,{show:this.props.modal,onClose:this.props.toggle},c.a.createElement(i.L,{closeButton:!0},"Delete Product"),c.a.createElement(i.J,null,"Are you sure want to delete?"),c.a.createElement(i.K,null,c.a.createElement(i.f,{color:"secondary",onClick:this.props.toggle},"Cancel")," ",c.a.createElement(i.f,{onClick:function(){return e.handleDeleteBtn(e.props.selectedItem)},color:"danger"},"Delete"))))}}]),a}(c.a.Component),b=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).modalCancelBtn=function(){o.props.selectedItem=null,o.props.detailModalToggle()},o.state={news:{}},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new d.a;m.get(h.a+"/posts/".concat(this.props.selectedItem),{headers:{Authorization:t.get("token")}}).then((function(t){e.setState({news:t.data})}))}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.I,{size:"xl",show:this.props.detailModal,onClose:this.props.detailModalToggle},c.a.createElement(i.L,{closeButton:!0},"News Detail"),c.a.createElement(i.J,null,c.a.createElement(i.Q,null,c.a.createElement(i.k,{xs:"12",sm:"6"},c.a.createElement(i.g,null,c.a.createElement(i.h,null,c.a.createElement(i.v,null,c.a.createElement(i.E,{htmlFor:"posttitle"},"Post Tittle"),c.a.createElement(i.z,{name:"posttitle",value:this.state.news.posttitle,disabled:"disabled"})),c.a.createElement(i.v,null,c.a.createElement(i.E,{htmlFor:"productCategory"},"Post Category"),c.a.createElement(i.z,{name:"postcategory",value:this.state.news.postcategory,disabled:"disabled"})),c.a.createElement(i.v,null,c.a.createElement(i.E,{htmlFor:"postdetails"},"Post Details"),c.a.createElement(i.z,{name:"postdetails",value:this.state.news.postdetails,disabled:"disabled"})),c.a.createElement(i.v,null,c.a.createElement(i.E,{htmlFor:"postconclusion"},"Post Conclusion"),c.a.createElement(i.z,{name:"postconclusion",value:this.state.news.postconclusion,disabled:"disabled"}))))),c.a.createElement(i.k,{xs:"12",sm:"6"},c.a.createElement(i.g,null,c.a.createElement(i.h,null,c.a.createElement(i.v,null,c.a.createElement(i.E,{htmlFor:"productCategory"},"Image"),c.a.createElement("br",null),c.a.createElement(i.y,{src:"https://frozen-refuge-74833.herokuapp.com/PostImage/"+this.state.news.images,style:{width:500,height:400}})))))))))}}]),a}(c.a.Component),v=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).handleInputChange=function(e){var t=e.target,a=t.name,n=t.value;o.setState(Object(u.a)({},a,n))},o.handleFormSubmit=function(e){e.preventDefault();var t=new d.a,a={posttitle:o.state.posttitle,postcategory:o.state.postcategory,postdetails:o.state.postdetails,postconclusion:o.state.postconclusion};m.put(h.a+"/posts/".concat(o.state._id),a,{headers:{Authorization:t.get("token")}}).then((function(e){m.get("https://frozen-refuge-74833.herokuapp.com/posts/",{headers:{Authorization:t.get("token")}}).then((function(e){console.log(e.data);var t=e.data;o.props.updateNews(t),console.log("o/p"+o.state.newsList)})),o.props.editModalToggle()})).catch((function(e){e.response&&console.log(e.response),this.showError(e.response)}))},o.state={news:{},_id:o.props.editItem,posttitle:"",postcategory:"",postdetails:"",postconclusion:""},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new d.a;m.get("https://frozen-refuge-74833.herokuapp.com/posts/".concat(this.props.editItem),{headers:{Authorization:t.get("token")}}).then((function(t){var a=t.data;e.setState({posttitle:a.posttitle,postcategory:a.postcategory,postdetails:a.postdetails,postconclusion:a.postconclusion})}))}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.I,{size:"xl",show:this.props.editModal,onClose:this.props.editModalToggle},c.a.createElement(i.L,{closeButton:!0},"News Detail"),c.a.createElement(i.J,null,c.a.createElement(i.u,{onSubmit:this.handleFormSubmit},c.a.createElement(i.v,null,c.a.createElement(i.E,{htmlFor:"posttitle"},"Post tittle"),c.a.createElement(i.z,{name:"posttitle",id:"posttitle",value:this.state.posttitle,onChange:this.handleInputChange,placeholder:"Enter Post Tittle",required:"required"})),c.a.createElement(i.v,null,c.a.createElement(i.E,{htmlFor:"postcategory"},"Post Category"),c.a.createElement(i.z,{name:"postcategory",id:"postcategory",value:this.state.postcategory,onChange:this.handleInputChange,placeholder:"Enter Post Category",required:"required"})),c.a.createElement(i.v,null,c.a.createElement(i.E,{htmlFor:"postdetails"},"Post Details"),c.a.createElement(i.z,{id:"postdetails",name:"postdetails",value:this.state.postdetails,onChange:this.handleInputChange,placeholder:"Enter Post Details"})),c.a.createElement(i.v,null,c.a.createElement(i.E,{htmlFor:"postconclusion"},"Post Conclusion"),c.a.createElement(i.db,{name:"postconclusion",id:"postconclusion",value:this.state.postconclusion,onChange:this.handleInputChange,placeholder:"Enter Post Conclusion",required:"required"})),c.a.createElement(i.v,null,c.a.createElement(i.f,{type:"submit",size:"sm",color:"primary"},c.a.createElement(p.a,{name:"cil-scrubber"})," Submit"),c.a.createElement(i.f,{type:"reset",size:"sm",color:"danger"},c.a.createElement(p.a,{name:"cil-ban"})," Reset"))))))}}]),a}(c.a.Component),w=a(84),y=a(85),C=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).imageUploader=function(e){e.preventDefault(),console.log(e.target.files),o.setState({selectedFile:e.target.files[0]})},o.handleFormSubmit=function(e){e.preventDefault();var t=new d.a;m.post(h.a+"/posts/updateImage/".concat(o.props.imageItem),o.state.selectedFile,{headers:{Authorization:t.get("token")}}).then((function(e){m.get(h.a+"/usersnews/").then((function(e){console.log(e.data);var t=e.data;o.props.updateNews(t),console.log("o/p"+o.state.newsList)})),o.props.updateImageToggle()})).catch((function(e){e.response&&console.log(e.response),this.showError(e.response)}))},o.state={_id:o.props.imageItem},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new d.a;m.get(h.a+"/posts/".concat(this.props.imageItem),{headers:{Authorization:t.get("token")}}).then((function(t){var a=t.data;e.setState({images:a.images})}))}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.I,{size:"xl",show:this.props.updateImageModal,onClose:this.props.updateImageToggle},c.a.createElement(i.L,{closeButton:!0},"Update Image"),c.a.createElement(i.J,null,c.a.createElement(i.u,{onSubmit:this.handleFormSubmit},c.a.createElement(i.v,null,c.a.createElement(i.E,{htmlFor:"images"},"Images"),c.a.createElement(i.y,{src:h.a+"/PostImage/"+this.state.images,alt:"image",style:{width:500,height:400}}),c.a.createElement(i.z,{type:"file",name:"files",onChange:this.imageUploader,placeholder:"Enter Post Details"})),c.a.createElement(i.v,null,c.a.createElement(i.f,{type:"submit",size:"sm",color:"primary"},c.a.createElement(p.a,{name:"cil-scrubber"})," Submit"),c.a.createElement(i.f,{type:"reset",size:"sm",color:"danger"},c.a.createElement(p.a,{name:"cil-ban"})," Reset"))))))}}]),a}(c.a.Component),k=["posttitle","postcategory","postdetails","postconclusion","images","share","actions"],I=function(e){var t=e.newsList,a=Object(r.useState)(!1),n=Object(E.a)(a,2),o=n[0],l=n[1],s=Object(r.useState)(!1),u=Object(E.a)(s,2),p=u[0],h=u[1],g=Object(r.useState)(!1),I=Object(E.a)(g,2),O=I[0],j=I[1],S=Object(r.useState)(!1),A=Object(E.a)(S,2),z=A[0],F=A[1],D=Object(r.useState)(!1),N=Object(E.a)(D,2),P=N[0],T=N[1],M=Object(r.useState)(!1),L=Object(E.a)(M,2),q=L[0],_=L[1],B=Object(r.useState)(!1),x=Object(E.a)(B,2),J=x[0],U=x[1],Q=function(e){T(e),h(!p)},R=function(e){U(e),F(!z)},K=function(e){_(e),j(!O)},V=function(e){T(e),l(!o)};return c.a.createElement(c.a.Fragment,null,P?c.a.createElement(b,{selectedItem:P,detailModal:p,detailModalToggle:Q}):null,J?c.a.createElement(C,{updateNews:e.updateNews,imageItem:J,updateImageModal:z,updateImageToggle:R}):null,q?c.a.createElement(v,{updateNews:e.updateNews,editItem:q,editModal:O,editModalToggle:K}):null,c.a.createElement(f,{showDeleteAlert:e.showDeleteAlert,updateNews:e.updateNews,selectedItem:P,modal:o,toggle:V}),c.a.createElement(i.n,{items:t,fields:k,bordered:!0,itemsPerPage:10,pagination:!0,scopedSlots:{images:function(t){return c.a.createElement("td",null,null!==t.images?c.a.createElement(i.y,{src:"https://frozen-refuge-74833.herokuapp.com/PostImage/"+t.images,alt:"image",style:{width:500,height:400}}):c.a.createElement(i.y,{src:"",alt:"image",style:{width:500,height:400}}),null!==t.images?c.a.createElement("button",{onClick:function(){return function(e,t){var a=new d.a;console.log(a.get("token")),m.put("https://frozen-refuge-74833.herokuapp.com/posts/deleteImage/".concat(e),null,{headers:{Authorization:a.get("token")}}).then((function(e){m.get("https://frozen-refuge-74833.herokuapp.com/posts/",{headers:{Authorization:a.get("token")}}).then((function(e){var a=e.data;t.updateNews(a)}))}))}(t._id,e)}},"Delete Image"):null)},share:function(e){return c.a.createElement("td",null,c.a.createElement(w.a,{quote:e.posttitle,url:"https://festive-jepsen-4d10b9.netlify.app/#/feeds/details/".concat(e._id)},c.a.createElement(y.a,{logoFillColor:"white"})))},actions:function(e){return c.a.createElement("td",null,c.a.createElement(i.o,{className:"m-1 btn-group"},c.a.createElement(i.r,{color:"primary"},"Actions"),c.a.createElement(i.q,null,c.a.createElement(i.p,{onClick:function(){return Q(e._id)}},"View"),c.a.createElement(i.p,{onClick:function(){return R(e._id)}},"Update Image"),c.a.createElement(i.p,{onClick:function(){return K(e._id)}},"Edit"),c.a.createElement(i.p,{key:e._id,onClick:function(){return V(e._id)}},"Delete"))))}}}))},O=a(92),j=a(93),S=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).updateNews=function(e){o.setState({newsList:e})},o.editProduct=function(){},o.deleteNews=function(e){return o.setState({deleteModal:!0}),c.a.createElement(f,{deleteModal:o.props.deleteModal})},o.showAlert=function(){o.setState({showSuccessAlert:!0})},o.showDeleteAlert=function(){o.setState({showSuccessAlert:!1,showDeleteAlert:!0})},o.showErrorAlert=function(e){o.setState({errorMessage:{showErrorAlert:!0,message:e}})},o.addTabController=function(){o.setState({modal:{addNavLink:!0,addTab:!0,manageNavLink:!1,manageTab:!1}})},o.manageTabController=function(){var e=new d.a;m.get(h.a+"/posts/",{headers:{Authorization:e.get("token")}}).then((function(e){console.log(e.data);var t=e.data;o.setState({newsList:t,modal:{addNavLink:!1,addTab:!1,manageNavLink:!0,manageTab:!0}})}))},o.state={newsList:[],deleteModal:!1,showSuccessAlert:!1,showDeleteAlert:!1,errorMessage:{showErrorAlert:!1,message:""},modal:{addNavLink:!0,manageNavLink:!1,addTab:!0,manageTab:!1}},o}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,!0===this.state.errorMessage.showErrorAlert?c.a.createElement(j.a,{message:this.state.errorMessage.showErrorAlert.errorMessage}):null,!0===this.state.showSuccessAlert?c.a.createElement(O.a,{message:"News is added Successfully..."}):null,!0===this.state.showDeleteAlert?c.a.createElement(j.a,{message:"News is deleted..."}):null,c.a.createElement(i.Q,null,c.a.createElement(i.k,{xs:"12",md:"12",className:"mb-4"},c.a.createElement(i.g,null,c.a.createElement(i.h,null,c.a.createElement(i.cb,null,c.a.createElement(i.N,{variant:"tabs"},c.a.createElement(i.O,{onClick:this.addTabController},c.a.createElement(i.P,{active:this.state.modal.addNavLink},"Add News")),c.a.createElement(i.O,{onClick:this.manageTabController},c.a.createElement(i.P,{active:this.state.modal.manageNavLink},"Manage"))),c.a.createElement(i.ab,null,c.a.createElement(i.bb,{active:this.state.modal.addTab},c.a.createElement(g,{showErrorAlert:this.showErrorAlert,showAlert:this.showAlert,manageTabController:this.manageTabController,updateNews:this.updateNews})),c.a.createElement(i.bb,{active:this.state.modal.manageTab},c.a.createElement(I,{showDeleteAlert:this.showDeleteAlert,updateNews:this.updateNews,deleteSupplier:this.deleteSupplier,editProduct:this.editProduct,newsList:this.state.newsList})))))))))}}]),a}(c.a.Component);t.default=S}}]);
//# sourceMappingURL=3.ad146a64.chunk.js.map