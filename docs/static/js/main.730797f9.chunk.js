(this.webpackJsonpbearbear=this.webpackJsonpbearbear||[]).push([[6],{118:function(e,n,t){"use strict";t.d(n,"c",(function(){return a})),t.d(n,"b",(function(){return l})),t.d(n,"a",(function(){return o}));var a="layout/SET_SELECTED_KEYS",l="layout/SET_OPEN_KEYS",o="layout/SET_COLLAPSE"},252:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a="button/SET_BTN_LOADING"},284:function(e,n,t){e.exports=t(550)},490:function(e,n){},550:function(e,n,t){"use strict";t.r(n);t(285),t(294);var a=t(0),l=t.n(a),o=t(35),i=t.n(o),r=t(53),c=t(162),u=t(163);function s(){var e=Object(c.a)(["\nhtml, body, div, span, applet, object, iframe,\n    h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n    a, abbr, acronym, address, big, cite, code,\n    del, dfn, em, img, ins, kbd, q, s, samp,\n    small, strike, strong, sub, sup, tt, var,\n    b, u, i, center,\n    dl, dt, dd, ol, ul, li,\n    fieldset, form, label, legend,\n    table, caption, tbody, tfoot, thead, tr, th, td,\n    article, aside, canvas, details, embed, \n    figure, figcaption, footer, header, hgroup, \n    menu, nav, output, ruby, section, summary,\n    time, mark, audio, video {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        font-size: 100%;\n        font: inherit;\n        line-height: 1;\n        vertical-align: baseline;\n    }\n    /* HTML5 display-role reset for older browsers */\n    article, aside, details, figcaption, figure, \n    footer, header, hgroup, menu, nav, section {\n        display: block;\n    }\n    body {\n        line-height: 1;\n    }\n    ol, ul {\n        list-style: none;\n    }\n    blockquote, q {\n        quotes: none;\n    }\n    blockquote:before, blockquote:after,\n    q:before, q:after {\n        content: '';\n        content: none;\n    }\n    table {\n        border-collapse: collapse;\n        border-spacing: 0;\n    }\n    html {\n     font-size: 13.33333333vw;\n    }\n    body {\n        font-size: 14px;\n    }\n    @media (min-width: 560px) {\n        html {\n            font-size: 102.4px;\n        }\n    }\n    [class^=\"bacctage-icon-\"], [class*=\" bacctage-icon-\"] {\n        font-family: 'bacctage-icon' !important;\n        font-style: normal;\n        font-weight: normal;\n        font-variant: normal;\n        text-transform: none;\n        line-height: 1;\n        vertical-align: baseline;\n        display: inline-block;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n    .loading-skeleton {\n        margin: 20px;\n    }\n"]);return s=function(){return e},e}var b=Object(u.a)(s()),d=(t(490),t(491),t(156)),m=t.n(d),f=t(168),h=t(16),p=t(171),g=t.n(p),E=t(155),y=t.n(E),v=(t(497),t(75)),O=m.a.Button,j=function(){var e=Object(r.d)((function(e){return{isMobile:e.getIn(["base","isMobile"])}}),r.b).isMobile;return Object(a.useEffect)((function(){return y.a.start(),function(){y.a.done()}}),[]),l.a.createElement("div",{style:{display:"flex"}},e?null:l.a.createElement(O,{style:{height:"100vh",width:208,marginRigt:20},active:!0}),l.a.createElement(m.a,{active:!0,paragraph:{rows:10},className:"loading-skeleton"}))},S=Object(a.memo)((function(){var e=Object(r.c)(),n=Object(r.d)((function(e){return{isMobile:e.getIn(["base","isMobile"]),screenWidth:e.getIn(["base","screenWidth"]),screenHeight:e.getIn(["base","screenHeight"])}}),r.b),t=n.isMobile,o=n.screenWidth,i=n.screenHeight,c=g.a.throttle(300,(function(){t!==document.body.clientWidth<768&&e(function(e){return{type:"base/SET_IS_MOBILE",value:e}}(document.body.clientWidth<768)),o!==document.documentElement.clientWidth&&e({type:"base/SET_SCREEN_WIDTH",value:document.documentElement.clientWidth}),i!==document.documentElement.clientHeight&&e({type:"base/SET_SCREEN_HEIGHT",value:document.documentElement.clientHeight})}));return Object(a.useEffect)((function(){return c(),window.addEventListener("resize",c,!1),function(){window.removeEventListener("resize",c)}}),[i,o,t]),l.a.createElement(a.Suspense,{fallback:l.a.createElement(j,null)},l.a.createElement(f.a,null,l.a.createElement(h.d,null,l.a.createElement(h.b,{path:"/",exact:!0,render:function(){return l.a.createElement(h.a,{to:"/index"})}}),l.a.createElement(h.b,{path:"/login",component:v.b}),l.a.createElement(h.b,{path:"/404",component:v.c}),l.a.createElement(h.b,{component:v.a}))))})),x=t(76),T=t(258),_=t(259),z=t(61),w=Object(z.fromJS)({isMobile:!1,screenWidth:0,screenHeight:0}),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.value;switch(t){case"base/SET_IS_MOBILE":return e.set("isMobile",a);case"base/SET_SCREEN_WIDTH":return e.set("screenWidth",a);case"base/SET_SCREEN_HEIGHT":return e.set("screenHeight",a);default:return e}},k=t(118),H={menu:v.d,selectedKeys:[],openKeys:[],collapse:!1},M=Object(z.fromJS)(H),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.value;switch(t){case k.a:return e.set("collapse",a);case k.b:return e.set("openKeys",a);case k.c:return e.set("selectedKeys",a);default:return e}},q=t(252),L=Object(z.fromJS)({loading:!1}),P=Object(_.combineReducers)({base:I,layout:W,button:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.value;switch(t){case q.a:return e.set("loading",a);default:return e}}}),N=(0,x.c)(Object(x.a)(T.a)),B=Object(x.d)(P,N),C=document.getElementById("root"),K=function(){return l.a.createElement(r.a,{store:B},l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null),l.a.createElement(S,null)))};i.a.render(l.a.createElement(K,null),C)},75:function(e,n,t){"use strict";t.d(n,"a",(function(){return E})),t.d(n,"c",(function(){return y})),t.d(n,"b",(function(){return v}));var a=t(0),l=t.n(a),o=t(551),i=t(552),r=t(553),c=t(554),u=t(555),s=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(11),t.e(3)]).then(t.bind(null,563))})),b=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(12),t.e(4)]).then(t.bind(null,557))})),d=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(12),t.e(4)]).then(t.bind(null,564))})),m=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(12),t.e(4)]).then(t.bind(null,566))})),f=Object(a.lazy)((function(){return t.e(2).then(t.bind(null,558))})),h=Object(a.lazy)((function(){return t.e(2).then(t.bind(null,559))})),p=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(10),t.e(8)]).then(t.bind(null,565))})),g=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(10),t.e(8)]).then(t.bind(null,560))})),E=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(11),t.e(3)]).then(t.bind(null,562))})),y=Object(a.lazy)((function(){return t.e(1).then(t.bind(null,567))})),v=Object(a.lazy)((function(){return t.e(5).then(t.bind(null,561))})),O=[{path:"/index",exact:!0,name:"Index",component:s,title:"\u9996\u9875",icon:l.a.createElement(o.a,null)},{path:"/general",title:"\u901a\u7528",icon:l.a.createElement(i.a,null),subs:[{path:"/general/button",exact:!0,name:"Button",component:d,title:"\u6309\u94ae",icon:""},{path:"/general/icon",exact:!0,name:"Icon",component:m,title:"\u56fe\u6807",icon:""}]},{path:"/form-pages",title:"\u8868\u5355\u9875",icon:l.a.createElement(r.a,null),subs:[{path:"/form-pages/basic-table",exact:!0,name:"BasicForm",component:f,title:"\u57fa\u7840\u8868\u5355",icon:""},{path:"/form-pages/step-table",exact:!0,name:"StepForm",component:h,title:"\u5206\u5e03\u8868\u5355",icon:""}]},{path:"/table-pages",title:"\u5217\u8868\u9875",icon:l.a.createElement(c.a,null),subs:[{path:"/table-pages/query-table",exact:!0,name:"QueryTable",component:p,title:"\u67e5\u8be2\u8868\u683c",icon:""},{path:"/table-pages/standard-table",exact:!0,name:"StandardTable",component:g,title:"\u6807\u51c6\u8868\u683c",icon:""}]},{path:"/about",exact:!0,name:"About",component:b,title:"\u5173\u4e8e",icon:l.a.createElement(u.a,null)}];n.d=O}},[[284,7,9]]]);