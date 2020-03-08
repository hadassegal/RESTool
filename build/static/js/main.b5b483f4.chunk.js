(this.webpackJsonprestool=this.webpackJsonprestool||[]).push([[0],{32:function(e,t,a){e.exports=a(69)},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),l=a(2),i=a.n(l),u=a(4),s=a(15),d=a(13),m=a(8),f=a(10),p=a(11),v=a(18),h=a(16),b=a(19),y=new(function(){function e(){Object(f.a)(this,e)}return Object(p.a)(e,[{key:"extractDataByDataPath",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!e||!t)return a?e[a]:e;var n=e,r=t.split("."),c=!0,o=!1,l=void 0;try{for(var i,u=r[Symbol.iterator]();!(c=(i=u.next()).done);c=!0){var s=i.value;if("undefined"===typeof n[s])return null;n=n[s]}}catch(d){o=!0,l=d}finally{try{c||null==u.return||u.return()}finally{if(o)throw l}}return n?a?n[a]:n:null}},{key:"checkIfFieldIsObject",value:function(e){return"object"===e.type||!("array"!==e.type||e.arrayType&&"object"!==e.arrayType)}}]),e}()),g=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";Object(f.a)(this,e),this.baseUrl=void 0,this.unauthorizedRedirectUrl=void 0,this.errorMessageDataPath=void 0,this.requestHeaders=void 0,this.baseUrl=t||"",this.unauthorizedRedirectUrl=a||"",this.errorMessageDataPath=n||"",this.requestHeaders={}}return Object(p.a)(e,[{key:"urlIsAbsolute",value:function(e){return 0===e.indexOf("http")||0===e.indexOf("https")}},{key:"replaceParamsInUrl",value:function(e,t){if(!t||"object"!==typeof t)return e;var a=e;return Object.keys(t).forEach((function(e){var n=":".concat(e);a=a.replace(n,t[e])})),a}},{key:"buildUrl",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0;if(!t||!t.length)return this.replaceParamsInUrl(e,a);var n=e,r=[],c=!0,o=!1,l=void 0;try{for(var i,u=t[Symbol.iterator]();!(c=(i=u.next()).done);c=!0){var s=i.value;if(s.name&&"undefined"!==typeof s.value)if(s.urlReplaceOnly){var d=":".concat(s.name);n=n.replace(d,s.value)}else r.push("".concat(s.name,"=").concat(s.value||""))}}catch(f){o=!0,l=f}finally{try{c||null==u.return||u.return()}finally{if(o)throw l}}if(r.length){var m=e.indexOf("?")>=0?"&":"?";return n+m+r.join("&")}return n}},{key:"buildRequest",value:function(e){var t=this.urlIsAbsolute(e.origUrl)?e.origUrl:this.baseUrl+e.origUrl;return{url:this.buildUrl(t,e.queryParams,e.rawData),params:{method:e.method||"get",headers:Object.assign({},this.requestHeaders,e.headers||{}),body:"post"===e.method||"put"===e.method?e.body:void 0}}}},{key:"getErrorMessage",value:function(e){var t,a,n,r,c,o,l,u,s;return i.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:return t="",d.prev=1,d.next=4,i.a.awrap(e.json());case 4:for(a=d.sent,n=!0,r=!1,c=void 0,d.prev=8,o=this.errorMessageDataPath[Symbol.iterator]();!(n=(l=o.next()).done);n=!0)u=l.value,(s=y.extractDataByDataPath(a,u))&&(t=s);d.next=16;break;case 12:d.prev=12,d.t0=d.catch(8),r=!0,c=d.t0;case 16:d.prev=16,d.prev=17,n||null==o.return||o.return();case 19:if(d.prev=19,!r){d.next=22;break}throw c;case 22:return d.finish(19);case 23:return d.finish(16);case 24:d.next=28;break;case 26:d.prev=26,d.t1=d.catch(1);case 28:return d.abrupt("return",t&&t.length?t:"".concat(e.status," - ").concat(e.statusText||""));case 29:case"end":return d.stop()}}),null,this,[[1,26],[8,12,16,24],[17,,19,23]])}},{key:"handleError",value:function(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(401!==e.status||!this.unauthorizedRedirectUrl){a.next=4;break}return t=this.unauthorizedRedirectUrl.replace(":returnUrl",encodeURIComponent(document.location.href)),document.location.href=t,a.abrupt("return");case 4:return a.t0=Error,a.next=7,i.a.awrap(this.getErrorMessage(e));case 7:throw a.t1=a.sent,new a.t0(a.t1);case 9:case"end":return a.stop()}}),null,this)}},{key:"makeRequest",value:function(e){var t,a,n,r=arguments;return i.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:{},a=r.length>2&&void 0!==r[2]?r[2]:"json",c.next=4,i.a.awrap(fetch(e,Object.assign({},t,{})));case 4:if(!(n=c.sent).ok){c.next=17;break}c.t0=a,c.next="json"===c.t0?9:"text"===c.t0?12:"boolean"===c.t0?15:16;break;case 9:return c.next=11,i.a.awrap(n.json());case 11:return c.abrupt("return",c.sent);case 12:return c.next=14,i.a.awrap(n.text());case 14:return c.abrupt("return",c.sent);case 15:case 16:return c.abrupt("return",!0);case 17:return c.next=19,i.a.awrap(this.handleError(n));case 19:case"end":return c.stop()}}),null,this)}},{key:"fetch",value:function(e){var t,a,n,r,c,o,l,u,s,d;return i.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:return t=e.method,a=e.origUrl,n=e.queryParams,r=e.rawData,c=e.body,o=e.headers,l=e.responseType,u=this.buildRequest({method:t,origUrl:a,queryParams:n,rawData:r,body:c,headers:o}),s=u.url,d=u.params,m.next=4,i.a.awrap(this.makeRequest(s,d,l));case 4:return m.abrupt("return",m.sent);case 5:case"end":return m.stop()}}),null,this)}}]),e}(),E=new g,w=new(function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"getRemoteConfig",value:function(e){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.endsWith(".js")){t.next=4;break}return t.next=3,i.a.awrap(import(e));case 3:return t.abrupt("return",t.sent.default);case 4:return t.next=6,i.a.awrap(E.fetch({origUrl:e}));case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}))}},{key:"loadDefaultConfig",value:function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.awrap(this.getRemoteConfig("/config.json"));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.next=10,i.a.awrap(this.getRemoteConfig("/config.js"));case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),null,this,[[0,6]])}},{key:"validateConfig",value:function(e){return{isValid:!0,errorMessage:null}}}]),t}(g)),k=a(14),x=a(29),j=a(22),O=r.a.createContext({config:null,activePage:null,error:null,setError:function(){},setActivePage:function(){},httpService:new g}),C=function(e){return function(t){return r.a.createElement(O.Consumer,null,(function(a){return r.a.createElement(e,Object.assign({},t,{context:a}))}))}},N=(a(49),function(){return r.a.createElement("div",{className:"app-loader cp-spinner cp-balls small"})}),S=(a(50),function(e){return r.a.createElement("button",Object.assign({},e,{className:"button ".concat(e.className||""," ").concat(e.color||"")}),e.children)}),P=(a(51),function(e){var t=e.items,a=e.fields,n=e.callbacks,c=e.customActions;return r.a.createElement("div",{className:"table-wrapper"},r.a.createElement("table",{className:"pure-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,a.map((function(e){return r.a.createElement("th",{key:"th_".concat(e.name)},e.label||e.name)})),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement("tr",{key:"tr_".concat(t)},a.map((function(a,n){var c=y.extractDataByDataPath(e,a.dataPath,a.name);return r.a.createElement("td",{key:"td_".concat(t,"_").concat(n)},function(e,t){if(t&&"object"===typeof t)return"object";switch(e.type){case"text":return r.a.createElement("span",null,t);case"boolean":return r.a.createElement("div",{className:"bool ".concat(t?"true":"false")});case"image":return r.a.createElement("img",{src:t,alt:t});case"url":var a=(e.url||t).replace(":".concat(e.name),t);return r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},t);case"colorbox":return r.a.createElement("div",{className:"colorbox",style:{backgroundColor:t}});default:return t}}(a,c))})),r.a.createElement("td",null,r.a.createElement("div",{className:"actions-wrapper"},n.put&&r.a.createElement(S,{onClick:function(){var t;return null===(t=n.put)||void 0===t?void 0:t.call(n,e)},title:"Edit"},r.a.createElement("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"})),c&&c.length>0&&c.map((function(a,c){return r.a.createElement(S,{key:"action_".concat(t,"_").concat(c),onClick:function(){return n.action(e,a)},title:a.name},r.a.createElement("i",{className:"fa fa-".concat(a.icon||"cogs"),"aria-hidden":"true"}))})),n.delete&&r.a.createElement(S,{onClick:function(){var t;return null===(t=n.delete)||void 0===t?void 0:t.call(n,e)},title:"Delete"},r.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"})))))})))))}),D=(a(52),function(e){var t=e.items,a=e.fields,n=e.callbacks,c=e.customActions;return r.a.createElement("div",{className:"cards-wrapper"},t.map((function(e,t){return r.a.createElement("div",{className:"card",key:"card_".concat(t)},a.map((function(a,n){var c=y.extractDataByDataPath(e,a.dataPath,a.name);return r.a.createElement("div",{className:"card-row ".concat(a.type),key:"card_".concat(t,"_").concat(n)},"image"!==a.type&&r.a.createElement("label",null,a.label||a.name,": "),function(e,t){if(t&&"object"===typeof t)return"object";switch(e.type){case"text":return r.a.createElement("span",null,t);case"boolean":return r.a.createElement("div",{className:"bool ".concat(t?"true":"false")});case"image":return r.a.createElement("img",{src:t,alt:t});case"url":var a=(e.url||t).replace(":".concat(e.name),t);return r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},t);case"colorbox":return r.a.createElement("div",{className:"colorbox",style:{backgroundColor:t}});default:return t}}(a,c))})),r.a.createElement("div",{className:"actions-wrapper"},n.put&&r.a.createElement(S,{onClick:function(){var t;return null===(t=n.put)||void 0===t?void 0:t.call(n,e)},title:"Edit"},r.a.createElement("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"})),c&&c.length>0&&c.map((function(a,c){return r.a.createElement(S,{key:"action_".concat(t,"_").concat(c),onClick:function(){return n.action(e,a)},title:a.name},r.a.createElement("i",{className:"fa fa-".concat(a.icon||"cogs"),"aria-hidden":"true"}))})),n.delete&&r.a.createElement(S,{onClick:function(){var t;return null===(t=n.delete)||void 0===t?void 0:t.call(n,e)},title:"Delete"},r.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"}))))})))}),q=a(17),U=a(21),_=(a(53),C((function(e){var t=e.context,a=e.field,c=e.direction,o=e.showReset,l=e.onChange,s=Object(n.useState)({}),d=Object(u.a)(s,2),f=d[0],p=d[1],v=t.httpService,h=t.activePage,b=(null===h||void 0===h?void 0:h.requestHeaders)||{};function g(e){var t=e.value||[];return r.a.createElement("div",{className:"array-form"},t.map((function(t,n){var c=E({value:t,name:"".concat(e.name,".").concat(n)},(function(t,a){var r=(e.value||[]).map((function(e,t){return t===n?a:e}));l(e.name,r)}));return r.a.createElement("div",{className:"array-form-item",key:"array_form_".concat(n)},c,r.a.createElement("i",{title:"Clear",onClick:function(){return function(e,t){var n=Object(q.a)(e.value||[]);n.splice(t,1),l(a.name,n)}(e,n)},"aria-label":"Remove",className:"clear-input fa fa-times"}))})),r.a.createElement(S,{className:"add-array-item",onClick:function(t){return function(e,t){e.preventDefault(),l(a.name,[].concat(Object(q.a)(t.value||[]),[""]))}(t,e)},title:"Add Item"},r.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"})))}function E(e,t){var a=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{value:e.value,placeholder:e.placeholder||a,disabled:e.readonly,required:e.required,onChange:function(a){return t(e.name,a.target.value)}}};switch(e.type){case"boolean":return r.a.createElement("input",Object.assign({type:"checkbox"},a(),{checked:e.value,onChange:function(a){return t(e.name,a.target.checked,!0)}}));case"select":var n,c=e.optionSource;if(c&&!f[e.name])return function(e,t){var a,n,r,c,o,l,u;i.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(s.prev=0,a=t.url,n=t.dataPath,r=t.actualMethod,c=t.requestHeaders,a){s.next=4;break}throw new Error('URL option source (for field "'.concat(e,'") is empty.'));case 4:return s.next=6,i.a.awrap(v.fetch({method:r||"get",origUrl:a,queryParams:[],headers:Object.assign({},b,c||{})}));case 6:if(o=s.sent,(l=y.extractDataByDataPath(o,n))&&l.length){s.next=10;break}throw new Error('Option source data is empty (for field "'.concat(e,'")'));case 10:u=l.map((function(e,a){var n=t.valuePath,r=t.displayPath;return"string"===typeof e?e:{display:r&&e[r]?e[r]:"Option ".concat(a+1),value:n&&e[n]?e[n]:"".concat(a)}})),p(Object(k.a)({},f,Object(U.a)({},e,u))),s.next=17;break;case 14:s.prev=14,s.t0=s.catch(0),m.b.error(s.t0.message);case 17:case"end":return s.stop()}}),null,null,[[0,14]])}(e.name,c),r.a.createElement("select",a(),r.a.createElement("option",null,"-- Loading Options... --"));var o=null===(n=e.optionSource)||void 0===n?void 0:n.sortBy,l=f[e.name]||e.options||[],u=Object(j.a)(l,"string"===typeof o?[o]:o||[]);return r.a.createElement("select",a(),r.a.createElement("option",null,"-- Select --"),u.map((function(e,t){var a="option_".concat(t,"_");return"object"!==typeof e?r.a.createElement("option",{key:"".concat(a,"_").concat(e),value:e},e):r.a.createElement("option",{key:"".concat(a,"_").concat(e.value),value:e.value},e.display||e.value)})));case"object":return r.a.createElement("textarea",a("Enter JSON..."));case"array":var s=e.arrayType;return e.value&&s&&"object"!==s?g(e):r.a.createElement("textarea",a("Enter JSON array..."));case"long-text":return r.a.createElement("textarea",a("Enter text..."));case"number":case"integer":return r.a.createElement("input",Object.assign({type:"number"},a("0"),{onChange:function(a){return t(e.name,a.target.valueAsNumber)}}));case"color":return r.a.createElement("input",Object.assign({type:"color"},a("Enter color...")));case"email":return r.a.createElement("input",Object.assign({type:"email"},a("Enter email...")));case"password":return r.a.createElement("input",Object.assign({type:"password"},a("Enter password...")));case"hidden":return r.a.createElement("input",{type:"hidden",value:e.value});case"file":return r.a.createElement("input",{type:"file",accept:e.accept||"*",placeholder:e.placeholder||"Select file...",name:e.name||"file",disabled:e.readonly,required:e.required});case"note":return r.a.createElement("p",{className:"note"},e.value);case"date":return r.a.createElement("input",Object.assign({type:"date"},a("Enter date...")));case"text":default:return r.a.createElement("input",Object.assign({type:"text"},a("Enter text...")))}}return r.a.createElement("div",{className:"form-row ".concat(c||"row")},"hidden"!==a.type&&r.a.createElement("label",null,a.label||a.originalName,a.required?" *":""),E(a,l),o&&!a.readonly&&a.value&&a.value.length>0&&r.a.createElement("i",{title:"Clear",onClick:function(){return l(a.name,"",!0)},"aria-label":"Clear",className:"clear-input fa fa-times"}))}))),I=(a(56),function(e){var t=e.initialParams,a=e.submitCallback,c=Object(n.useState)(t),o=Object(u.a)(c,2),l=o[0],i=o[1];function s(e){e&&e.preventDefault(),a(l)}function d(e,t,a){var n=Object(q.a)(l).map((function(a){return a.name===e&&(a.value=t),a}));i(n),a&&s()}return Object(n.useEffect)((function(){i(t)}),[t]),l.length?r.a.createElement("section",{className:"query-params-form"},r.a.createElement("h5",null,"Query Params:"),r.a.createElement("form",{onSubmit:s},l.map((function(e,t){return r.a.createElement(_,{key:"query_param_".concat(t),field:e,onChange:d,showReset:!e.type||"text"===e.type})})),r.a.createElement(S,{type:"submit",onClick:s},"Submit"))):r.a.createElement(r.a.Fragment,null)}),R=(a(57),document.getElementById("popup-portal"));R||((R=document.createElement("div")).setAttribute("id","popup-portal"),document.body.append(R));var A=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(v.a)(this,Object(h.a)(t).call(this,e))).el=void 0,a.componentDidMount=function(){R.appendChild(a.el)},a.componentWillUnmount=function(){R.removeChild(a.el)},a.el=document.createElement("div"),a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createPortal(this.props.children,this.el)}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r))))._handleKeyDown=function(e){var t=a.props,n=t.show,r=t.closeCallback;n&&27===e.keyCode&&r(e)},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=Object.assign({},{display:this.props.show?"block":"none"},this.props.style||{});return r.a.createElement(A,null,this.props.show?r.a.createElement("div",{className:"popup ".concat(this.props.className||""),style:t},r.a.createElement("div",{className:"overlay",onClick:function(t){return e.props.closeCallback(t)}}),r.a.createElement("div",{className:"popup-content",ref:this.props.refCallback},this.props.children,r.a.createElement("button",{title:"Close",className:"close-popup",onClick:function(t){return e.props.closeCallback(t)}},r.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"})))):null)}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this._handleKeyDown.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this._handleKeyDown.bind(this))}}]),t}(n.Component),T=new(function(){function e(){Object(f.a)(this,e)}return Object(p.a)(e,[{key:"isMultipartForm",value:function(e){for(var t in e){if("file"===e[t].type)return!0}return!1}}]),e}()),H=(a(58),a(27)),J=a(27).unflatten,B=C((function(e){var t=e.context,a=e.title,c=e.fields,o=e.rawData,l=e.getSingleConfig,s=e.methodConfig,d=e.submitCallback,f=e.closeCallback,p=JSON.parse(JSON.stringify(c)),v=t.httpService,h=t.activePage,b=Object(n.useState)(!0),g=Object(u.a)(b,2),E=g[0],w=g[1],k=Object(n.useState)([]),x=Object(u.a)(k,2),j=x[0],O=x[1],C=Object(n.useState)(null),P=Object(u.a)(C,2),D=P[0],q=P[1],U=(null===h||void 0===h?void 0:h.requestHeaders)||{};function I(e){var t,a,n,r,c;return i.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(e.preventDefault(),t=s.includeOriginalFields?Object.assign({},D):{},a=new FormData,n=T.isMultipartForm(j),r=null,j.forEach((function(c){if("file"!==c.type){if(t[c.name]=c.value,n&&a.append(c.name,c.value),c.required&&"boolean"!==c.type&&!c.value&&(r="Please fill up all required fields."),y.checkIfFieldIsObject(c)&&c.value)try{t[c.name]=JSON.parse(c.value)}catch(e){r='Invalid JSON for field "'.concat(c.name,'".')}"boolean"===c.type&&(t[c.name]=c.value||!1),"encode"===c.type&&(t[c.name]=encodeURIComponent(c.value))}else{var o=document.querySelector('input[name="'.concat(c.name||"file",'"]'));if(o.files.length>0){var l=o.files[0];a.append(c.name||"file",l,l.name)}}})),!r){o.next=9;break}return m.b.error(r),o.abrupt("return");case 9:return w(!0),o.prev=10,c=n?a:J(t),o.next=14,i.a.awrap(d(c,n));case 14:m.b.success("Great Success!"),f(!0),o.next=21;break;case 18:o.prev=18,o.t0=o.catch(10),m.b.error(o.t0.message);case 21:w(!1);case 22:case"end":return o.stop()}}),null,null,[[10,18]])}function R(e,t){var a=JSON.parse(JSON.stringify(j));a=a.map((function(a){return a.name===e&&(a.value=t),a})),O(a)}return Object(n.useEffect)((function(){!function(){var e,t,a,n,r,c,u,s,d;i.a.async((function(f){for(;;)switch(f.prev=f.next){case 0:if(e=o||{},!l||!l.url){f.next=15;break}return f.prev=2,t=l.url,a=l.requestHeaders,n=l.actualMethod,r=l.dataPath,c=l.queryParams,f.next=6,i.a.awrap(v.fetch({method:n||"get",origUrl:t,queryParams:c,headers:Object.assign({},U,a||{}),rawData:o}));case 6:u=f.sent,(s=y.extractDataByDataPath(u,r))&&"object"===typeof s&&(e=s),f.next=15;break;case 11:f.prev=11,f.t0=f.catch(2),console.error("Could not load single item's data.",f.t0),m.b.error("Could not load single item's data.");case 15:q(e),d=H(e||{}),O(p.map((function(t){var a=t.name;return t.originalName=t.name,t.dataPath&&(a="".concat(t.dataPath,".").concat(t.name)),t.name=a,y.checkIfFieldIsObject(t)?((e[a]||t.value)&&(t.value=JSON.stringify(e[a]||t.value,null,"  ")||""),t):"array"===t.type?(t.value=e[a]||t.value||[],t):(d[a]?t.value=d[a]:t.value=t.value||"",t)}))),w(!1);case 19:case"end":return f.stop()}}),null,null,[[2,11]])}()}),[]),r.a.createElement(M,{show:!0,className:"form-popup",closeCallback:function(){return f(!1)}},r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,a),r.a.createElement("section",null,E?r.a.createElement(N,null):r.a.createElement("form",{onSubmit:I},j.map((function(e,t){return r.a.createElement(_,{key:"field_".concat(t),field:e,onChange:R,showReset:!e.type||"text"===e.type})})),r.a.createElement("div",{className:"buttons-wrapper center"},r.a.createElement(S,{type:"submit",onClick:I,color:"green"},"Submit"))))))})),F=(a(60),function(e){var t=e.onChange;return r.a.createElement("section",{className:"filter-wrapper"},r.a.createElement("h5",null,"Filter:"),r.a.createElement("div",{className:"form-row"},r.a.createElement("input",{type:"text",placeholder:"Search...",onChange:function(e){return t(e.target.value.toLowerCase())}})))}),L=(a(61),C((function(e){var t,a=e.context,c=Object(d.h)().page,o=Object(d.g)(),l=o.push,s=o.location,f=a.activePage,p=a.error,v=a.setError,h=a.httpService,b=(null===f||void 0===f?void 0:f.requestHeaders)||{},g=null===f||void 0===f?void 0:f.methods,E=(null===f||void 0===f?void 0:f.customActions)||[],w=null===g||void 0===g?void 0:g.getAll,O=null===g||void 0===g?void 0:g.getSingle,C=null===g||void 0===g?void 0:g.post,q=null===g||void 0===g?void 0:g.put,U=null===g||void 0===g?void 0:g.delete,_=Object(n.useState)(!1),R=Object(u.a)(_,2),A=R[0],M=R[1],T=Object(n.useState)(null),H=Object(u.a)(T,2),J=H[0],L=H[1],z=Object(n.useState)((null===w||void 0===w?void 0:w.queryParams)||[]),W=Object(u.a)(z,2),K=W[0],G=W[1],V=Object(n.useState)([]),Y=Object(u.a)(V,2),Q=Y[0],$=Y[1],X=Object(n.useState)(""),Z=Object(u.a)(X,2),ee=Z[0],te=Z[1];function ae(e){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:L({rawData:e,type:"update",title:"Update Item",config:q,getSingleConfig:O,submitCallback:function(t,a){return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(ie(t,e,a));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}))}});case 2:case"end":return t.stop()}}))}function ne(e,t){var a={rawData:e,type:"action",title:t.name||"Custom Action",config:t,submitCallback:function(a,n){return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.awrap(re(a,e,t,n));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}))}};L(a)}function re(e,t,a,n){var r,c,o;return i.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return r=a.url,c=a.requestHeaders,o=a.actualMethod,l.next=3,i.a.awrap(h.fetch({method:o||"put",origUrl:r,rawData:t,body:n?e:JSON.stringify(e),headers:Object(k.a)({},b,{},c||{},{},n?{}:{"content-type":"application/json"}),responseType:"boolean"}));case 3:return l.abrupt("return",l.sent);case 4:case"end":return l.stop()}}))}function ce(){var e=x.parse(s.search);return((null===w||void 0===w?void 0:w.queryParams)||[]).map((function(t){return"undefined"!==typeof e[t.name]?t.value="boolean"===t.type?"true"===e[t.name]:decodeURIComponent(e[t.name]):t.value=t.value||"",t}))}function oe(){var e,t,a,n,r,c,o,l,u;return i.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(M(!0),v(null),s.prev=2,w){s.next=5;break}throw new Error("Get all method is not defined.");case 5:return e=w.url,t=w.requestHeaders,a=w.actualMethod,n=w.dataPath,r=w.sortBy,c=w.dataTransform,s.next=8,i.a.awrap(h.fetch({method:a||"get",origUrl:e,queryParams:ce(),headers:Object.assign({},b,t||{})}));case 8:if(o=s.sent,l=y.extractDataByDataPath(o,n)){s.next=12;break}throw new Error("Could not extract data from response.");case 12:if(Array.isArray(l)){s.next=14;break}throw new Error("Extracted data is invalid.");case 14:if("function"!==typeof c){s.next=18;break}return s.next=17,i.a.awrap(c(l));case 17:l=s.sent;case 18:u=Object(j.a)(l,"string"===typeof r?[r]:r||[]),$(u),s.next=25;break;case 22:s.prev=22,s.t0=s.catch(2),v(s.t0.message);case 25:M(!1);case 26:case"end":return s.stop()}}),null,null,[[2,22]])}function le(e,t){var a,n,r;return i.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(C){c.next=2;break}throw new Error("Post method is not defined.");case 2:return a=C.url,n=C.requestHeaders,r=C.actualMethod,c.next=5,i.a.awrap(h.fetch({method:r||"post",origUrl:a,body:t?e:JSON.stringify(e),headers:Object(k.a)({},b,{},n||{},{},t?{}:{"content-type":"application/json"}),responseType:"boolean"}));case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}}))}function ie(e,t,a){var n,r,c;return i.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(q){o.next=2;break}throw new Error("Put method is not defined.");case 2:return n=q.url,r=q.requestHeaders,c=q.actualMethod,o.next=5,i.a.awrap(h.fetch({method:c||"put",origUrl:n,rawData:t,body:a?e:JSON.stringify(e),headers:Object(k.a)({},b,{},r||{},{},a?{}:{"content-type":"application/json"}),responseType:"boolean"}));case 5:return o.abrupt("return",o.sent);case 6:case"end":return o.stop()}}))}function ue(e){var t,a,n;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(window.confirm("Are you sure you want to delete this item?")){r.next=3;break}return r.abrupt("return");case 3:if(r.prev=3,U){r.next=6;break}throw new Error("Delete method is not defined.");case 6:return t=U.url,a=U.requestHeaders,n=U.actualMethod,r.next=9,i.a.awrap(h.fetch({method:n||"delete",origUrl:t,rawData:e,headers:Object.assign({},b,a||{}),responseType:"boolean"}));case 9:r.sent&&oe(),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(3),m.b.error(r.t0.message);case 16:case"end":return r.stop()}}),null,null,[[3,13]])}function se(e){if(G(e),!A){var t=K.map((function(e,t){return"".concat(0===t?"?":"").concat(e.name,"=").concat(encodeURIComponent(e.value||""))})).join("&");l(t)}}return Object(n.useEffect)((function(){var e,t,n=(null===a||void 0===a?void 0:null===(e=a.config)||void 0===e?void 0:null===(t=e.pages)||void 0===t?void 0:t.filter((function(e,t){return e.id===c||t+1===parseInt(c||"")}))[0])||null;a.setActivePage(n)}),[c]),Object(n.useEffect)((function(){G(ce())}),[f]),Object(n.useEffect)((function(){oe()}),[K]),r.a.createElement("div",{className:"app-page"},r.a.createElement("header",{className:"app-page-header"},r.a.createElement("hgroup",null,r.a.createElement("h2",null,null===f||void 0===f?void 0:f.name),(null===f||void 0===f?void 0:f.description)&&r.a.createElement("h4",null,null===f||void 0===f?void 0:f.description)),C&&r.a.createElement(S,{className:"add-item",color:"green",onClick:function(){return L({type:"add",title:"Add Item",config:C,submitCallback:le})}},"+ Add Item")),r.a.createElement("main",{className:"app-page-content"},function(){var e,t=((null===w||void 0===w?void 0:w.fields)||(null===w||void 0===w?void 0:null===(e=w.display)||void 0===e?void 0:e.fields)||[]).filter((function(e){return e.filterable})).map((function(e){return e.name}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{initialParams:K,submitCallback:se}),t.length>0&&r.a.createElement(F,{onChange:te}),p?r.a.createElement("div",{className:"app-error"},p):function(){var e;if(A)return r.a.createElement(N,null);var t=(null===w||void 0===w?void 0:w.fields)||(null===w||void 0===w?void 0:null===(e=w.display)||void 0===e?void 0:e.fields)||[],a=t.filter((function(e){return e.filterable})).map((function(e){return e.name})),n=Q;if(ee&&a.length&&(n=Q.filter((function(e){var t=!1;return a.forEach((function(a){var n=e[a];"string"===typeof n&&n.toLowerCase().indexOf(ee)>=0&&(t=!0)})),t}))),!n.length)return r.a.createElement("div",{className:"app-error"},"Nothing to see here. Result is empty.");var c={delete:U?ue:null,put:q?ae:null,action:E.length?ne:function(){}};return"cards"===(null===w||void 0===w?void 0:w.display.type)?r.a.createElement(D,{callbacks:c,fields:t,items:n,customActions:E}):r.a.createElement(P,{callbacks:c,fields:t,items:n,customActions:E})}())}()),J&&r.a.createElement(B,{title:J.title,closeCallback:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];L(null),!0===e&&oe()},submitCallback:J.submitCallback,fields:(null===(t=J.config)||void 0===t?void 0:t.fields)||[],rawData:J.rawData,getSingleConfig:J.getSingleConfig,methodConfig:J.config}))}))),z=(a(65),C((function(e){var t=e.context.config,a=Object(n.useState)(!1),c=Object(u.a)(a,2),o=c[0],l=c[1];return r.a.createElement("nav",{className:"app-nav"},r.a.createElement(S,{className:"app-nav-opener",onClick:function(){return l(!o)}},o?r.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"}):r.a.createElement("i",{className:"fa fa-bars","aria-hidden":"true"})),r.a.createElement("div",{className:"app-nav-wrapper ".concat(o?"opened":"")},r.a.createElement("div",{className:"app-nav-links"},((null===t||void 0===t?void 0:t.pages)||[]).map((function(e,t){return r.a.createElement(s.b,{to:"/".concat(e.id||t+1),activeClassName:"active",key:"page_".concat(t),onClick:function(){return l(!1)}},e.name)})))))}))),W=(a(66),a(67),function(e){var t=e.styles.vars||{},a=[];for(var n in t)a.push("--".concat(n,": ").concat(t[n]));return r.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n      :root {\n        ".concat(a.join(";"),"\n      }\n    ")}})}),K=new g,G="RESTool App";function V(e){var t=document.createElement("link"),a=document.getElementById("favicon");t.id="favicon",t.rel="shortcut icon",t.href=e,a&&document.head.removeChild(a),document.head.appendChild(t)}var Y=function(){var e,t,a,c=Object(n.useState)(!0),o=Object(u.a)(c,2),l=o[0],f=o[1],p=Object(n.useState)(null),v=Object(u.a)(p,2),h=v[0],b=v[1],y=Object(n.useState)((null===h||void 0===h?void 0:null===(e=h.pages)||void 0===e?void 0:e[0])||null),g=Object(u.a)(y,2),E=g[0],k=g[1],x=Object(n.useState)(null),j=Object(u.a)(x,2),C=j[0],N=j[1];Object(n.useEffect)((function(){!function e(t){var a;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!t){n.next=7;break}return n.next=4,i.a.awrap(w.getRemoteConfig(t));case 4:n.t0=n.sent,n.next=10;break;case 7:return n.next=9,i.a.awrap(w.loadDefaultConfig());case 9:n.t0=n.sent;case 10:if(a=n.t0,K.baseUrl=a.baseUrl||"",K.errorMessageDataPath=a.errorMessageDataPath||"",K.unauthorizedRedirectUrl=a.unauthorizedRedirectUrl||"",K.requestHeaders=a.requestHeaders||{},document.title=a.name||G,(null===a||void 0===a?void 0:a.favicon)&&V(a.favicon),!(null===a||void 0===a?void 0:a.remoteUrl)){n.next=21;break}return n.next=20,i.a.awrap(e(a.remoteUrl));case 20:return n.abrupt("return",n.sent);case 21:b(a),n.next=27;break;case 24:n.prev=24,n.t1=n.catch(0),console.error("Could not load config file",n.t1);case 27:f(!1);case 28:case"end":return n.stop()}}),null,null,[[0,24]])}()}),[]),Object(n.useEffect)((function(){var e=w.validateConfig(h),t=e.isValid,a=e.errorMessage;t||N(a)}),[h]);var S=(null===h||void 0===h?void 0:h.name)||G;return r.a.createElement("div",{className:"restool-app"},h?r.a.createElement(O.Provider,{value:{config:h,activePage:E,setActivePage:k,error:C,setError:N,httpService:K}},h.customStyles&&r.a.createElement(W,{styles:h.customStyles}),r.a.createElement(s.a,null,r.a.createElement("aside",null,r.a.createElement("h1",{title:S,onClick:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:250,t=window.scrollY/2,a=0,n=performance.now();window.requestAnimationFrame((function r(c){(a+=Math.PI/(e/(c-n)))>=Math.PI&&window.scrollTo(0,0),0!==window.scrollY&&(window.scrollTo(0,Math.round(t+t*Math.cos(a))),n=c,window.requestAnimationFrame(r))}))}()}},S),r.a.createElement(z,null)),h&&r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/:page",component:L}),r.a.createElement(d.a,{path:"/",to:"/".concat((null===h||void 0===h?void 0:null===(t=h.pages)||void 0===t?void 0:null===(a=t[0])||void 0===a?void 0:a.id)||"1")})),r.a.createElement(m.a,{position:m.b.POSITION.TOP_CENTER,autoClose:4e3,draggable:!1}))):r.a.createElement("div",{className:"app-error"},l?"Loading Configuration...":"Could not find config file."))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(68);o.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.b5b483f4.chunk.js.map