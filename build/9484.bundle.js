"use strict";(self.webpackChunkwsfs=self.webpackChunkwsfs||[]).push([[9484],{69484:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var s=a(52536),n=a(23132),l=a.n(n),o=a(29496),r=a(28),c=a(74428),i=a(46057),m=a(12552),d=a(67784),h=a(90256),p=a(61562),u=a(79592),g=a(68857),f=a(54563),E=a(4632);class v extends n.Component{constructor(e){super(e),(0,s.c)(this,"handleOnChange1",(e=>{this.setState({file1:e.target.files[0],filename1:e.target.files[0].name}),console.log("eeee",e.target.files[0].name,this.state.file1)})),(0,s.c)(this,"onSubmit1",(e=>{e.preventDefault(),this.addlogo(),console.log("hello we have clicked the button")})),(0,s.c)(this,"addlogo",(async()=>{const e=new FormData;e.append("filename",this.state.file1),e.append("userid",this.state.UserId),console.log("newdata",JSON.stringify(e)),this.setState({formLoader:!0});if(200===(await(0,m.Wj)(e,this.state.token)).status){this.setState({formLoader:!1});const e="Upload Update Success";this.props.enqueueSnackbar(e,{variant:"info",autoHideDuration:3e3})}else{this.setState({formLoader:!1});const e="Something went wrong";this.props.enqueueSnackbar(e,{variant:"error",autoHideDuration:3e3})}})),(0,s.c)(this,"handleClicks",(()=>{console.log("hello we have clicked the button"),this.props.history.push({pathname:this.state.component})})),this.state={userrole:sessionStorage.getItem("userrole"),component:sessionStorage.getItem("component"),token:sessionStorage.getItem("token"),UserId:sessionStorage.getItem("userid"),formLoader:!1,formLoaderOff:!1,display:sessionStorage.getItem("subnetaccaddress"),screenloader:!1,file1:""}}render(){return l().createElement(l().Fragment,null,l().createElement("div",{className:"page"},l().createElement(o.c,{activeComponent:"Investor"==this.state.userrole?"InvestorDashboard_Portfolio":"IssuerDashboard"}),l().createElement("div",{className:"content1"},1==this.state.screenloader?l().createElement(c.c,null):l().createElement("div",{className:"page-contentofpool1"},l().createElement("div",{className:"row1"},l().createElement("div",{className:"col-12 col-sm-6 col-md-8 d-flex justigy-content-center align-center hellocard"},l().createElement(f.c,{onClick:this.handleClicks,className:"left-arrow-muis1 left-arrow-servicer"}),l().createElement("h3",{className:"headerdashboard"},"Profile"))),l().createElement("div",null,l().createElement("div",{className:"servicer-modal-acc"},l().createElement(h.c,{defaultExpanded:!0},l().createElement(p.c,{expandIcon:l().createElement(E.c,null),"aria-controls":"panel1a-content",id:"panel1a-header"},l().createElement("div",{className:"editcontainer1"},l().createElement("h5",{className:"headingpayment"},"Logo"))),l().createElement(u.c,null,l().createElement(g.c,null,l().createElement("div",{className:"paymentsetting"},l().createElement("div",{className:"ps_page-in-out-main-container1"},l().createElement("div",{className:"ps_page-left-container"},l().createElement("div",{className:"ps_outer-container"},l().createElement("div",{className:"ps-inner-bottom-contianer"},l().createElement("div",{className:"modalshiftcontent"},l().createElement("form",{className:"form-container",onSubmit:this.onSubmit1},l().createElement("h6",{className:"e1class"},"Upload Logo"),l().createElement("div",{className:"kyc-card__button-container1"},l().createElement("div",null,l().createElement("button",{className:"card__button",style:{position:"relative"}},l().createElement("label",{htmlFor:"icon-button-file-id2",className:"upload-button-label"},"Select File"),l().createElement("input",{required:!0,id:"icon-button-file-id2",type:"file",accept:"image/png, image/jpg, image/jpeg",style:{position:"absolute",width:"60%",height:"100%",cursor:"pointer",top:"0",right:"0px",opacity:"0",border:"1.2px solid #212121"},onChange:this.handleOnChange1}))),""!==this.state.file1&&l().createElement("div",{className:"kyc-card__select_name-container"},l().createElement("p",null,this.state.filename1))),l().createElement("div",{className:"modalsubmit"},l().createElement("div",{className:"submitbuttonbg"},l().createElement("div",{className:"row"},l().createElement("div",{className:"row justify-content-end2"},l().createElement(i.c,{variant:"contained",color:"primary",type:"submit"},"Upload",!0===this.state.formLoader?l().createElement(d.c,{size:"22px",color:"primary"}):"")))))))))))))))))))))}}const b=(0,r.withSnackbar)(v)}}]);