(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-271cf026"],{"45f0":function(e,t,a){"use strict";a("e706")},"4ec3":function(e,t,a){"use strict";a.d(t,"f",(function(){return n})),a.d(t,"e",(function(){return s})),a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return c})),a.d(t,"d",(function(){return m})),a.d(t,"a",(function(){return f})),a.d(t,"g",(function(){return u}));var o=a("ba5f"),r=a("4328"),l=a.n(r);function n(e){return Object(o["a"])({method:"get",url:"/students",params:e})}function s(e){return Object(o["a"])({method:"delete",url:"/students/".concat(e)})}function i(e,t){t=l.a.stringify(t);var a={method:e,url:"/info",data:t};return Object(o["a"])(a)}function c(){return Object(o["a"])({method:"get",url:"/info"})}function m(e){return Object(o["a"])({method:"delete",url:"/info/".concat(e)})}function f(){return Object(o["a"])({method:"get",url:"/dataview"})}function u(){return Object(o["a"])({method:"get",url:"/travel"})}},d9b1:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"infoList"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,size:"small"}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.addStudent}},[e._v("新增")])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"name",label:"姓名",align:"center"}}),a("el-table-column",{attrs:{prop:"sex",label:"性别",align:"center"}}),a("el-table-column",{attrs:{prop:"age",label:"年龄",align:"center"}}),a("el-table-column",{attrs:{prop:"father",label:"父亲",align:"center"}}),a("el-table-column",{attrs:{prop:"mather",label:"母亲",align:"center"}}),a("el-table-column",{attrs:{prop:"address",label:"家庭住址",align:"center"}}),a("el-table-column",{attrs:{prop:"time",label:"入校时间",align:"center"}}),a("el-table-column",{attrs:{prop:"phone",label:"联系方式",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-edit"},on:{click:function(a){return e.edit(t.row)}}}),a("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},on:{click:function(a){return e.del(t.row)}}})]}}])})],1),a("el-dialog",{attrs:{title:e.state?"添加学生信息":"修改学生信息",visible:e.dialogFormVisible,width:"500px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[a("el-form-item",{attrs:{label:"姓名","label-width":e.formLabelWidth,prop:"name"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"性别","label-width":e.formLabelWidth,prop:"sex"}},[a("el-radio",{attrs:{label:"1"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("男")]),a("el-radio",{attrs:{label:"2"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("女")])],1),a("el-form-item",{attrs:{label:"年龄","label-width":e.formLabelWidth,prop:"age"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),a("el-form-item",{attrs:{label:"父亲姓名","label-width":e.formLabelWidth,prop:"father"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.father,callback:function(t){e.$set(e.form,"father",t)},expression:"form.father"}})],1),a("el-form-item",{attrs:{label:"母亲姓名","label-width":e.formLabelWidth,prop:"mather"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.mather,callback:function(t){e.$set(e.form,"mather",t)},expression:"form.mather"}})],1),a("el-form-item",{attrs:{label:"家庭住址","label-width":e.formLabelWidth,prop:"address"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),a("el-form-item",{attrs:{label:"入校时间","label-width":e.formLabelWidth,prop:"time"}},[a("el-date-picker",{attrs:{format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:e.form.time,callback:function(t){e.$set(e.form,"time",t)},expression:"form.time"}})],1),a("el-form-item",{attrs:{label:"联系方式","label-width":e.formLabelWidth,prop:"phone"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.closeInfo("form")}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.sure("form")}}},[e._v("确 定")])],1)],1)],1)},r=[],l=a("5530"),n=a("4ec3"),s={data:function(){return{tableData:[],dialogFormVisible:!1,form:{name:"",sex:"1",age:"",father:"",mather:"",address:"",time:"",phone:""},formLabelWidth:"80px",rules:{name:[{required:!0,message:"请输入姓名"}],sex:[{required:!0}],age:[{required:!0,message:"请输入年龄"}],address:[{required:!0,message:"请输入地址"}],time:[{required:!0,message:"请输入入学时间"}],phone:[{required:!0,message:"请输入联系方式"}]},state:!0,total:0}},created:function(){this.getData()},methods:{edit:function(e){console.log(e),this.form=Object(l["a"])({},e),this.state=!1,this.dialogFormVisible=!0},closeInfo:function(e){console.log(e),this.$refs[e].resetFields(),this.dialogFormVisible=!1},del:function(e){var t=this;console.log(e),this.$alert("你确定要删除吗？","提示",{confirmButtonText:"确定",callback:function(){Object(n["d"])(e.id).then((function(e){200===e.data.status&&(t.getData(),t.$message({message:e.data.message,type:"success"}))}))}})},addStudent:function(){this.form={name:"",sex:"1",age:"",father:"",mather:"",address:"",time:"",phone:""},this.state=!0,this.dialogFormVisible=!0},getData:function(){var e=this;Object(n["b"])().then((function(t){200===t.data.status&&(e.tableData=t.data.data,e.total=t.data.total)}))},sure:function(e){var t=this;this.$refs[e].validate((function(a){a&&(console.log(e,t.form),t.state?Object(n["c"])("post",t.form).then((function(e){200===e.data.status&&(t.getData(),t.dialogFormVisible=!1,t.$message({type:"success",message:e.data.message}))})):Object(n["c"])("put",t.form).then((function(e){200===e.data.status&&(t.getData(),t.dialogFormVisible=!1,t.$message({type:"success",message:e.data.message}))})))}))}}},i=s,c=(a("45f0"),a("2877")),m=Object(c["a"])(i,o,r,!1,null,null,null);t["default"]=m.exports},e706:function(e,t,a){}}]);
//# sourceMappingURL=chunk-271cf026.06379b3b.js.map