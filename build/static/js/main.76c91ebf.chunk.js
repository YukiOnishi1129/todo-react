(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(7),o=a.n(l),s=(a(13),a(2)),d=a(3),c=a(1),h=a(5),r=a(4),u=function(e){Object(h.a)(a,e);var t=Object(r.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{className:"common-area"},i.a.createElement("h2",{className:"add-title"},"ADD TASK"),i.a.createElement("input",{type:"text",placeholder:"New Task",value:this.props.value,onChange:this.props.onChange,onKeyDown:this.props.handleAdd}))}}]),a}(n.Component),p=function(e){Object(h.a)(a,e);var t=Object(r.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{className:"common-area"},i.a.createElement("input",{type:"text",placeholder:"Search Keyword",onKeyUp:this.props.handleSearch}))}}]),a}(n.Component),g=function(e){Object(h.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={text:n.props.title},n.handleChangeText=n.handleChangeText.bind(Object(c.a)(n)),n.handleClickUpdate=n.handleClickUpdate.bind(Object(c.a)(n)),n.handleClickEditFlg=n.handleClickEditFlg.bind(Object(c.a)(n)),n.handleClickDelete=n.handleClickDelete.bind(Object(c.a)(n)),n}return Object(d.a)(a,[{key:"handleChangeText",value:function(e){this.setState({text:e.target.value})}},{key:"handleClickUpdate",value:function(e){13===e.keyCode&&this.props.onChangeTitle(this.props.id,e)}},{key:"handleClickEditFlg",value:function(){this.props.onChangeFlg(this.props.id)}},{key:"handleClickDelete",value:function(){window.confirm("todo\u3092\u524a\u9664\u3057\u3066\u3082\u3044\u3044\u3067\u3059\u304b\uff1f")&&this.props.onRemove(this.props.id)}},{key:"render",value:function(){var e=this.props.editFlg?i.a.createElement("input",{type:"text",className:"editForm",value:this.state.text,onChange:this.handleChangeText,onKeyUp:this.handleClickUpdate}):i.a.createElement("span",{className:"todo-task",onClick:this.handleClickEditFlg},this.state.text);return i.a.createElement("li",{className:"todo"},e,i.a.createElement("i",{className:"far fa-trash-alt delete fa-lg",onClick:this.handleClickDelete}))}}]),a}(n.Component),m=function(e){Object(h.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChangeTitle=n.handleChangeTitle.bind(Object(c.a)(n)),n.handleChangeFlg=n.handleChangeFlg.bind(Object(c.a)(n)),n.handleRemove=n.handleRemove.bind(Object(c.a)(n)),n}return Object(d.a)(a,[{key:"handleChangeTitle",value:function(e,t){this.props.handleUpdate(e,t)}},{key:"handleChangeFlg",value:function(e){this.props.changeEditFlg(e)}},{key:"handleRemove",value:function(e){this.props.handleDelete(e)}},{key:"render",value:function(){var e=this,t=this.props.todos.map((function(t){return i.a.createElement(g,Object.assign({key:t.id},t,{onChangeTitle:e.handleChangeTitle,onChangeFlg:e.handleChangeFlg,onRemove:e.handleRemove}))}));return i.a.createElement("section",{className:"common-area"},i.a.createElement("ul",{className:"todolist"},t))}}]),a}(n.Component),v=(a(14),function(e){Object(h.a)(a,e);var t=Object(r.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={todos:[{id:1,title:"Task1",editFlg:!1},{id:2,title:"Task2",editFlg:!1}],uniqueId:2,inputValue:"",searchKeyWord:""},e.handleAdd=e.handleAdd.bind(Object(c.a)(e)),e.onChange=e.onChange.bind(Object(c.a)(e)),e.handleSearch=e.handleSearch.bind(Object(c.a)(e)),e.searchResult=e.searchResult.bind(Object(c.a)(e)),e.handleUpdate=e.handleUpdate.bind(Object(c.a)(e)),e.changeEditFlg=e.changeEditFlg.bind(Object(c.a)(e)),e.handleDelete=e.handleDelete.bind(Object(c.a)(e)),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){console.log("componentDidMount")}},{key:"handleAdd",value:function(e){13===e.keyCode&&""!==e.target.value&&(this.setState({todos:this.state.todos.concat({id:this.state.uniqueId+1,title:e.target.value,editFlg:!1}),uniqueId:this.state.uniqueId+1}),this.setState({inputValue:""}))}},{key:"onChange",value:function(e){this.setState({inputValue:e.target.value})}},{key:"handleSearch",value:function(e){this.setState({searchKeyWord:e.target.value})}},{key:"searchResult",value:function(e){var t=new RegExp("^"+this.state.searchKeyWord,"i");return e.title.match(t)}},{key:"handleUpdate",value:function(e,t){var a=this.state.todos.findIndex((function(t){return t.id===e})),n=this.state.todos;n[a].title=t.target.value,n[a].editFlg=!1,this.setState({todos:n})}},{key:"changeEditFlg",value:function(e){var t=this.state.todos.findIndex((function(t){return t.id===e})),a=this.state.todos;a[t].editFlg=!0,this.setState({todos:a})}},{key:"handleDelete",value:function(e){var t=this.state.todos.findIndex((function(t){return t.id===e}));this.state.todos.splice(t,1),this.setState({todos:this.state.todos})}},{key:"render",value:function(){var e=this.state.searchKeyWord?this.state.todos.filter(this.searchResult):this.state.todos;return i.a.createElement("div",{className:"wrapper"},i.a.createElement("h1",{className:"title"},"Todo List"),i.a.createElement(u,{value:this.state.inputValue,handleAdd:this.handleAdd,onChange:this.onChange}),i.a.createElement(p,{handleSearch:this.handleSearch}),i.a.createElement(m,{todos:e,handleUpdate:this.handleUpdate,changeEditFlg:this.changeEditFlg,handleDelete:this.handleDelete}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.76c91ebf.chunk.js.map