(this.webpackJsonpbearbear=this.webpackJsonpbearbear||[]).push([[6],{102:function(e,n,t){"use strict";t.d(n,"d",(function(){return s})),t.d(n,"c",(function(){return d})),t.d(n,"a",(function(){return b})),t.d(n,"e",(function(){return m})),t.d(n,"b",(function(){return f}));var a=t(156),r=t(72),i=t.n(r),o=t(50),c=t(39),l=t(64),u=[];l.d.forEach((function(e){e.subs?u.push.apply(u,Object(a.a)(e.subs)):u.push(e)}));var s=function(e){return{type:c.e,value:e}},d=function(e){return{type:c.d,value:e}},b=function(e){return{type:c.a,value:e}},m=function(e){return{type:c.c,value:Object(o.fromJS)(e)}},f=function(e){return function(n,t){var r,o=t().getIn(["base","panes"]).toJS(),l=i.a.find((function(n){return n.path===e}),u);if(l){l={title:l.title,key:l.path};var s=i.a.flowRight(i.a.uniqBy("key"),(function(e){return[].concat(Object(a.a)(e),[l])}))(o);n(m(s)),n((r=e,{type:c.b,value:r}))}}}},122:function(e,n,t){"use strict";t.d(n,"c",(function(){return a})),t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return i}));var a="layout/SET_SELECTED_KEYS",r="layout/SET_OPEN_KEYS",i="layout/SET_COLLAPSE"},257:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a="button/SET_BTN_LOADING"},289:function(e,n,t){e.exports=t(555)},39:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"e",(function(){return r})),t.d(n,"d",(function(){return i})),t.d(n,"c",(function(){return o})),t.d(n,"b",(function(){return c}));var a="base/SET_IS_MOBILE",r="base/SET_SCREEN_WIDTH",i="base/SET_SCREEN_HEIGHT",o="base/SET_MENU_TABS",c="base/SET_MENU_ACTIVE"},495:function(e,n){},555:function(e,n,t){"use strict";t.r(n);t(290),t(299);var a=t(0),r=t.n(a),i=t(35),o=t.n(i),c=t(55),l=t(165),u=t(166);function s(){var e=Object(l.a)(["\nhtml, body, div, span, applet, object, iframe,\n    h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n    a, abbr, acronym, address, big, cite, code,\n    del, dfn, em, img, ins, kbd, q, s, samp,\n    small, strike, strong, sub, sup, tt, var,\n    b, u, i, center,\n    dl, dt, dd, ol, ul, li,\n    fieldset, form, label, legend,\n    table, caption, tbody, tfoot, thead, tr, th, td,\n    article, aside, canvas, details, embed, \n    figure, figcaption, footer, header, hgroup, \n    menu, nav, output, ruby, section, summary,\n    time, mark, audio, video {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        font-size: 100%;\n        font: inherit;\n        line-height: 1;\n        vertical-align: baseline;\n    }\n    /* HTML5 display-role reset for older browsers */\n    article, aside, details, figcaption, figure, \n    footer, header, hgroup, menu, nav, section {\n        display: block;\n    }\n    body {\n        line-height: 1;\n    }\n    ol, ul {\n        list-style: none;\n    }\n    blockquote, q {\n        quotes: none;\n    }\n    blockquote:before, blockquote:after,\n    q:before, q:after {\n        content: '';\n        content: none;\n    }\n    table {\n        border-collapse: collapse;\n        border-spacing: 0;\n    }\n    html {\n     font-size: 13.33333333vw;\n    }\n    body {\n        font-size: 14px;\n    }\n    @media (min-width: 560px) {\n        html {\n            font-size: 102.4px;\n        }\n    }\n    [class^=\"bacctage-icon-\"], [class*=\" bacctage-icon-\"] {\n        font-family: 'bacctage-icon' !important;\n        font-style: normal;\n        font-weight: normal;\n        font-variant: normal;\n        text-transform: none;\n        line-height: 1;\n        vertical-align: baseline;\n        display: inline-block;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n    .loading-skeleton {\n        margin: 20px;\n    }\n    .ant-pagination-item {\n        a {\n        line-height: 32px;\n        }\n    }\n"]);return s=function(){return e},e}var d=Object(u.a)(s()),b=(t(495),t(496),t(161)),m=t.n(b),f=t(173),h=t(16),p=t(72),g=t.n(p),E=t(160),y=t.n(E),v=(t(502),t(64)),O=t(102),j=m.a.Button,S=function(){var e=Object(c.d)((function(e){return{isMobile:e.getIn(["base","isMobile"])}}),c.b).isMobile;return Object(a.useEffect)((function(){return y.a.start(),function(){y.a.done()}}),[]),r.a.createElement("div",{style:{display:"flex"}},e?null:r.a.createElement(j,{style:{height:"100vh",width:208,marginRigt:20},active:!0}),r.a.createElement(m.a,{active:!0,paragraph:{rows:10},className:"loading-skeleton"}))},x=Object(a.memo)((function(){var e=Object(c.c)(),n=Object(c.d)((function(e){return{isMobile:e.getIn(["base","isMobile"]),screenWidth:e.getIn(["base","screenWidth"]),screenHeight:e.getIn(["base","screenHeight"])}}),c.b),t=n.isMobile,i=n.screenWidth,o=n.screenHeight,l=g.a.throttle(300,(function(){t!==document.body.clientWidth<768&&e(O.a(document.body.clientWidth<768)),i!==document.documentElement.clientWidth&&e(O.d(document.documentElement.clientWidth)),o!==document.documentElement.clientHeight&&e(O.c(document.documentElement.clientHeight))}));return Object(a.useEffect)((function(){return l(),window.addEventListener("resize",l,!1),function(){window.removeEventListener("resize",l)}}),[o,i,t]),r.a.createElement(a.Suspense,{fallback:r.a.createElement(S,null)},r.a.createElement(f.a,null,r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/",exact:!0,render:function(){return r.a.createElement(h.a,{to:"/index"})}}),r.a.createElement(h.b,{path:"/login",component:v.b}),r.a.createElement(h.b,{path:"/404",component:v.c}),r.a.createElement(h.b,{component:v.a}))))})),k=t(78),z=t(263),T=t(264),w=t(50),_=t(39),I=Object(w.fromJS)({isMobile:!1,screenWidth:0,screenHeight:0,panes:[{key:"/index",title:"\u9996\u9875"}],menuActive:"/index"}),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.value;switch(t){case _.a:return e.set("isMobile",a);case _.e:return e.set("screenWidth",a);case _.d:return e.set("screenHeight",a);case _.c:return e.set("panes",a);case _.b:return e.set("menuActive",a);default:return e}},q=t(122),H={menu:v.d,selectedKeys:[],openKeys:[],collapse:!1},W=Object(w.fromJS)(H),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.value;switch(t){case q.a:return e.set("collapse",a);case q.b:return e.set("openKeys",a);case q.c:return e.set("selectedKeys",a);default:return e}},B=t(257),L=Object(w.fromJS)({loading:!1}),N=Object(T.combineReducers)({base:M,layout:P,button:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.value;switch(t){case B.a:return e.set("loading",a);default:return e}}}),A=(0,k.c)(Object(k.a)(z.a)),J=Object(k.d)(N,A),K=document.getElementById("root"),C=function(){return r.a.createElement(c.a,{store:J},r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(x,null)))};o.a.render(r.a.createElement(C,null),K)},64:function(e,n,t){"use strict";t.d(n,"a",(function(){return E})),t.d(n,"c",(function(){return y})),t.d(n,"b",(function(){return v}));var a=t(0),r=t.n(a),i=t(556),o=t(557),c=t(558),l=t(559),u=t(560),s=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(11),t.e(3)]).then(t.bind(null,567))})),d=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(12),t.e(4)]).then(t.bind(null,562))})),b=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(12),t.e(4)]).then(t.bind(null,568))})),m=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(12),t.e(4)]).then(t.bind(null,571))})),f=Object(a.lazy)((function(){return t.e(2).then(t.bind(null,563))})),h=Object(a.lazy)((function(){return t.e(2).then(t.bind(null,564))})),p=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(10),t.e(8)]).then(t.bind(null,569))})),g=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(10),t.e(8)]).then(t.bind(null,570))})),E=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(11),t.e(3)]).then(t.bind(null,566))})),y=Object(a.lazy)((function(){return t.e(1).then(t.bind(null,572))})),v=Object(a.lazy)((function(){return t.e(5).then(t.bind(null,565))})),O=[{path:"/index",exact:!0,name:"Index",component:s,title:"\u9996\u9875",icon:r.a.createElement(i.a,null)},{path:"/general",title:"\u901a\u7528",icon:r.a.createElement(o.a,null),subs:[{path:"/general/button",exact:!0,name:"Button",component:b,title:"\u6309\u94ae",icon:""},{path:"/general/icon",exact:!0,name:"Icon",component:m,title:"\u56fe\u6807",icon:""}]},{path:"/form-pages",title:"\u8868\u5355\u9875",icon:r.a.createElement(c.a,null),subs:[{path:"/form-pages/basic-table",exact:!0,name:"BasicForm",component:f,title:"\u57fa\u7840\u8868\u5355",icon:""},{path:"/form-pages/step-table",exact:!0,name:"StepForm",component:h,title:"\u5206\u5e03\u8868\u5355",icon:""}]},{path:"/table-pages",title:"\u5217\u8868\u9875",icon:r.a.createElement(l.a,null),subs:[{path:"/table-pages/query-table",exact:!0,name:"QueryTable",component:p,title:"\u67e5\u8be2\u8868\u683c",icon:""},{path:"/table-pages/standard-table",exact:!0,name:"StandardTable",component:g,title:"\u6807\u51c6\u8868\u683c",icon:""}]},{path:"/about",exact:!0,name:"About",component:d,title:"\u5173\u4e8e",icon:r.a.createElement(u.a,null)}];n.d=O}},[[289,7,9]]]);