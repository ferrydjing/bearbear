(this.webpackJsonpbearbear=this.webpackJsonpbearbear||[]).push([[7],{112:function(e,n,t){e.exports=t(187)},187:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(12),c=t.n(l),r=t(25),i=t(56),u=t(57);function s(){var e=Object(i.a)(["\nhtml, body, div, span, applet, object, iframe,\n    h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n    a, abbr, acronym, address, big, cite, code,\n    del, dfn, em, img, ins, kbd, q, s, samp,\n    small, strike, strong, sub, sup, tt, var,\n    b, u, i, center,\n    dl, dt, dd, ol, ul, li,\n    fieldset, form, label, legend,\n    table, caption, tbody, tfoot, thead, tr, th, td,\n    article, aside, canvas, details, embed, \n    figure, figcaption, footer, header, hgroup, \n    menu, nav, output, ruby, section, summary,\n    time, mark, audio, video {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        font-size: 100%;\n        font: inherit;\n        line-height: 1;\n        vertical-align: baseline;\n    }\n    /* HTML5 display-role reset for older browsers */\n    article, aside, details, figcaption, figure, \n    footer, header, hgroup, menu, nav, section {\n        display: block;\n    }\n    body {\n        line-height: 1;\n    }\n    ol, ul {\n        list-style: none;\n    }\n    blockquote, q {\n        quotes: none;\n    }\n    blockquote:before, blockquote:after,\n    q:before, q:after {\n        content: '';\n        content: none;\n    }\n    table {\n        border-collapse: collapse;\n        border-spacing: 0;\n    }\n    html {\n     font-size: 13.33333333vw;\n    }\n    body {\n        font-size: 14px;\n    }\n    @media (min-width: 560px) {\n        html {\n            font-size: 102.4px;\n        }\n    }\n    [class^=\"bacctage-icon-\"], [class*=\" bacctage-icon-\"] {\n        font-family: 'bacctage-icon' !important;\n        font-style: normal;\n        font-weight: normal;\n        font-variant: normal;\n        text-transform: none;\n        line-height: 1;\n        vertical-align: baseline;\n        display: inline-block;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n"]);return s=function(){return e},e}var b=Object(u.a)(s()),d=(t(121),t(91)),m=t.n(d),f=t(62),h=t(4),p=t(72),E=t.n(p),g=t(50),y=t.n(g),v=(t(127),t(27)),O=function(){return Object(a.useEffect)((function(){return y.a.start(),function(){y.a.done()}}),[]),o.a.createElement(m.a,{active:!0})},S=Object(a.memo)((function(){var e=Object(r.c)(),n=Object(r.d)((function(e){return{isMobile:e.getIn(["base","isMobile"]),screenWidth:e.getIn(["base","screenWidth"]),screenHeight:e.getIn(["base","screenHeight"])}}),r.b),t=n.isMobile,l=n.screenWidth,c=n.screenHeight,i=E.a.throttle(300,(function(){t!==document.body.clientWidth<768&&e(function(e){return{type:"base/SET_IS_MOBILE",value:e}}(document.body.clientWidth<768)),l!==document.documentElement.clientWidth&&e({type:"base/SET_SCREEN_WIDTH",value:document.documentElement.clientWidth}),c!==document.documentElement.clientHeight&&e({type:"base/SET_SCREEN_HEIGHT",value:document.documentElement.clientHeight})}));return Object(a.useEffect)((function(){return i(),window.addEventListener("resize",i,!1),function(){window.removeEventListener("resize",i)}}),[c,l,t]),o.a.createElement(a.Suspense,{fallback:o.a.createElement(O,null)},o.a.createElement(f.a,null,o.a.createElement(h.d,null,o.a.createElement(h.b,{path:"/",exact:!0,render:function(){return o.a.createElement(h.a,{to:"/index"})}}),o.a.createElement(h.b,{path:"/login",component:v.b}),o.a.createElement(h.b,{path:"/404",component:v.c}),o.a.createElement(h.b,{component:v.a}))))})),j=t(28),T=t(93),_=t(94),x=t(20),z=Object(x.fromJS)({isMobile:!1,screenWidth:0,screenHeight:0}),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.value;switch(t){case"base/SET_IS_MOBILE":return e.set("isMobile",a);case"base/SET_SCREEN_WIDTH":return e.set("screenWidth",a);case"base/SET_SCREEN_HEIGHT":return e.set("screenHeight",a);default:return e}},w=t(39),H={menu:v.d,selectedKeys:[],openKeys:[],collapse:!1},k=Object(x.fromJS)(H),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.value;switch(t){case w.a:return e.set("collapse",a);case w.b:return e.set("openKeys",a);case w.c:return e.set("selectedKeys",a);default:return e}},W=t(85),q=Object(x.fromJS)({loading:!1}),L=Object(_.combineReducers)({base:I,layout:P,button:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.value;switch(t){case W.a:return e.set("loading",a);default:return e}}}),M=(0,j.c)(Object(j.a)(T.a)),N=Object(j.d)(L,M),B=document.getElementById("root"),C=function(){return o.a.createElement(r.a,{store:N},o.a.createElement(o.a.Fragment,null,o.a.createElement(b,null),o.a.createElement(S,null)))};c.a.render(o.a.createElement(C,null),B)},27:function(e,n,t){"use strict";t.d(n,"a",(function(){return g})),t.d(n,"c",(function(){return y})),t.d(n,"b",(function(){return v}));var a=t(0),o=t.n(a),l=t(188),c=t(189),r=t(190),i=t(191),u=t(192),s=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(12),t.e(4)]).then(t.bind(null,200))})),b=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(13),t.e(5)]).then(t.bind(null,194))})),d=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(13),t.e(5)]).then(t.bind(null,201))})),m=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(13),t.e(5)]).then(t.bind(null,202))})),f=Object(a.lazy)((function(){return t.e(3).then(t.bind(null,195))})),h=Object(a.lazy)((function(){return t.e(3).then(t.bind(null,196))})),p=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(10),t.e(9)]).then(t.bind(null,203))})),E=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(10),t.e(9)]).then(t.bind(null,197))})),g=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(12),t.e(4)]).then(t.bind(null,199))})),y=Object(a.lazy)((function(){return t.e(2).then(t.bind(null,204))})),v=Object(a.lazy)((function(){return t.e(6).then(t.bind(null,198))})),O=[{path:"/index",exact:!0,name:"Index",component:s,title:"\u9996\u9875",icon:o.a.createElement(l.a,null)},{path:"/general",title:"\u901a\u7528",icon:o.a.createElement(c.a,null),subs:[{path:"/general/button",exact:!0,name:"Button",component:d,title:"\u6309\u94ae",icon:""},{path:"/general/icon",exact:!0,name:"Icon",component:m,title:"\u56fe\u6807",icon:""}]},{path:"/form-pages",title:"\u8868\u5355\u9875",icon:o.a.createElement(r.a,null),subs:[{path:"/form-pages/basic-table",exact:!0,name:"BasicForm",component:f,title:"\u57fa\u7840\u8868\u5355",icon:""},{path:"/form-pages/step-table",exact:!0,name:"StepForm",component:h,title:"\u5206\u5e03\u8868\u5355",icon:""}]},{path:"/tablePage",title:"\u5217\u8868\u9875",icon:o.a.createElement(i.a,null),subs:[{path:"/tablePage/query-table",exact:!0,name:"QueryTable",component:p,title:"\u67e5\u8be2\u8868\u683c",icon:""},{path:"/tablePage/standard-table",exact:!0,name:"StandardTable",component:E,title:"\u6807\u51c6\u8868\u683c",icon:""}]},{path:"/about",exact:!0,name:"About",component:b,title:"\u5173\u4e8e",icon:o.a.createElement(u.a,null)}];n.d=O},39:function(e,n,t){"use strict";t.d(n,"c",(function(){return a})),t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return l}));var a="layout/SET_SELECTED_KEYS",o="layout/SET_OPEN_KEYS",l="layout/SET_COLLAPSE"},85:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a="button/SET_BTN_LOADING"}},[[112,8,11]]]);
//# sourceMappingURL=main.de3f64a2.chunk.js.map