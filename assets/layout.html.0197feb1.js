var s=Object.defineProperty,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,e=(t,l,n)=>l in t?s(t,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[l]=n,o=(s,o)=>{for(var a in o||(o={}))l.call(o,a)&&e(s,a,o[a]);if(t)for(var a of t(o))n.call(o,a)&&e(s,a,o[a]);return s};"undefined"!=typeof require&&require;import{V as a,r,o as c,c as p,b as y,w as i,F as d,a as L,d as M,e as E}from"./app.cad036d6.js";var u={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:s,resolveComponent:t,withCtx:l,openBlock:n,createBlock:e}=a,r=s("div",{class:"title"},[s("img",{style:{height:"50px","margin-right":"10px"},src:"data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0IDQ0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzQwOWVmZjtmaWxsLXJ1bGU6ZXZlbm9kZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmVsZW1lbnQgcGx1cy1sb2dvLXNtYWxsIOWJr+acrDwvdGl0bGU+PHBhdGggaWQ9ImVsZW1lbnRfcGx1cy1sb2dvLXNtYWxsIiBkYXRhLW5hbWU9ImVsZW1lbnQgcGx1cy1sb2dvLXNtYWxsIiBjbGFzcz0iY2xzLTEiIGQ9Ik0zNy40MSwzMi4zN2MwLDEuNTctLjgzLDEuOTMtLjgzLDEuOTNMMjEuNTEsNDNBMS42OSwxLjY5LDAsMCwxLDIwLDQzUzUuMiwzNC40LDQuNjYsMzRhMS4yOSwxLjI5LDAsMCwxLS41NS0xVjE1LjI0YzAtLjc4LDEtMS4zMywxLTEuMzNMMTkuODYsNS4zNmEyLDIsMCwwLDEsMS43OSwwbDE0LjQ2LDguNDFhMi4wNiwyLjA2LDAsMCwxLDEuMjUsMi4wNlYzMi4zN1ptLTUuOS0xN0wyMS4zNSw5LjVhMS41OSwxLjU5LDAsMCwwLTEuNDEsMEw4LjMzLDE2LjE1cy0uNzcuNDYtLjc2LDEuMDgsMCwxMy45MiwwLDEzLjkyQTEsMSwwLDAsMCw4LDMxLjljLjQzLjMsMTIsNywxMiw3YTEuMzEsMS4zMSwwLDAsMCwxLjE5LDBDMjEuOTEsMzguNSwzMywzMi4xMSwzMywzMi4xMXMuNjUtLjI4LjY1LTEuNTFWMjcuMTNsLTEzLDcuOVYzMmEzLjA1LDMuMDUsMCwwLDEsMS0yLjA3TDMzLjIsMjNhMi40NCwyLjQ0LDAsMCwwLC41NS0xLjQ2VjE4LjQzTDIwLjY0LDI2LjM1di0zLjJhMi4yMiwyLjIyLDAsMCwxLC44My0xLjc5Wk00MS4wNyw0LjIyYS4zOS4zOSwwLDAsMC0uMzctLjQySDM4VjEuMDZjMC0uMTYtLjI2LS4yMi0uNTMtLjIyTDM2LDEuMDhjLS4xOCwwLS4zMS4xMi0uMzEuMjNWMy44SDMzYS40LjQsMCwwLDAtLjM2LjM3djJoM1Y5YzAsLjE2LjI2LjI3LjU0LjIzbDEuNTEtLjI1Yy4xOCwwLC4yOS0uMTMuMjktLjIzVjYuMTRoM1oiLz48L3N2Zz4="}),s("div",null,"测试标题")],-1),c=s("div",null,"admin",-1),p=s("div",null,"container",-1);const{defineComponent:y,reactive:i,toRefs:d}=a,L=y({setup(){const s=i({headerTitle:{slot:"title"},headerRight:{slot:"right"},menuData:[{title:"菜单列表",icon:"el-icon-s-goods",auth:"menu",path:"/menu",children:[{title:"数据",auth:"menu/data"},{title:"分析",auth:"menu/analysis"}]}],headerStyles:{backgroundColor:"#545c64",padding:"10px",color:"#fff"},menuProps:{backgroundColor:"#f7f6f2",textColor:"#333",activeTextColor:"#409eff",defaultActive:"0-0",defaultOpeneds:[0]},triggerCollapse:!0,footer:"@copyRight by footer"});return o({settings:s},d(s))}});return o({render:function(s,o){const a=t("sum-layout");return n(),e(a,{settings:s.settings,class:"sum-layout"},{title:l((()=>[r])),right:l((()=>[c])),default:l((()=>[p])),_:1},8,["settings"])}},L)}()}};const j=L("h3",{id:"sum-ui-layout",tabindex:"-1"},[L("a",{class:"header-anchor",href:"#sum-ui-layout","aria-hidden":"true"},"#"),M(" @sum-ui/layout")],-1),D=L("div",{class:"language-vue"},[L("pre",{class:"shiki",style:{"background-color":"#ffffff"}},[L("code",null,[L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"<"),L("span",{style:{color:"#22863A"}},"template"),L("span",{style:{color:"#24292E"}},">")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"  <"),L("span",{style:{color:"#22863A"}},"sum-layout"),L("span",{style:{color:"#24292E"}}," :"),L("span",{style:{color:"#005CC5"}},"settings"),L("span",{style:{color:"#24292E"}},"="),L("span",{style:{color:"#032F62"}},'"'),L("span",{style:{color:"#24292E"}},"settings"),L("span",{style:{color:"#032F62"}},'"'),L("span",{style:{color:"#24292E"}}," "),L("span",{style:{color:"#005CC5"}},"class"),L("span",{style:{color:"#24292E"}},"="),L("span",{style:{color:"#032F62"}},'"sum-layout"'),L("span",{style:{color:"#24292E"}},">")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"     <"),L("span",{style:{color:"#22863A"}},"template"),L("span",{style:{color:"#24292E"}}," #"),L("span",{style:{color:"#005CC5"}},"title"),L("span",{style:{color:"#24292E"}},">")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"       <"),L("span",{style:{color:"#22863A"}},"div"),L("span",{style:{color:"#24292E"}}," "),L("span",{style:{color:"#005CC5"}},"class"),L("span",{style:{color:"#24292E"}},"="),L("span",{style:{color:"#032F62"}},'"title"'),L("span",{style:{color:"#24292E"}},">")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"        <"),L("span",{style:{color:"#22863A"}},"img"),L("span",{style:{color:"#24292E"}}," "),L("span",{style:{color:"#005CC5"}},"style"),L("span",{style:{color:"#24292E"}},"="),L("span",{style:{color:"#032F62"}},'"height: 50px;margin-right: 10px;"'),L("span",{style:{color:"#24292E"}}," "),L("span",{style:{color:"#005CC5"}},"src"),L("span",{style:{color:"#24292E"}},"="),L("span",{style:{color:"#032F62"}},'"data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0IDQ0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzQwOWVmZjtmaWxsLXJ1bGU6ZXZlbm9kZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmVsZW1lbnQgcGx1cy1sb2dvLXNtYWxsIOWJr+acrDwvdGl0bGU+PHBhdGggaWQ9ImVsZW1lbnRfcGx1cy1sb2dvLXNtYWxsIiBkYXRhLW5hbWU9ImVsZW1lbnQgcGx1cy1sb2dvLXNtYWxsIiBjbGFzcz0iY2xzLTEiIGQ9Ik0zNy40MSwzMi4zN2MwLDEuNTctLjgzLDEuOTMtLjgzLDEuOTNMMjEuNTEsNDNBMS42OSwxLjY5LDAsMCwxLDIwLDQzUzUuMiwzNC40LDQuNjYsMzRhMS4yOSwxLjI5LDAsMCwxLS41NS0xVjE1LjI0YzAtLjc4LDEtMS4zMywxLTEuMzNMMTkuODYsNS4zNmEyLDIsMCwwLDEsMS43OSwwbDE0LjQ2LDguNDFhMi4wNiwyLjA2LDAsMCwxLDEuMjUsMi4wNlYzMi4zN1ptLTUuOS0xN0wyMS4zNSw5LjVhMS41OSwxLjU5LDAsMCwwLTEuNDEsMEw4LjMzLDE2LjE1cy0uNzcuNDYtLjc2LDEuMDgsMCwxMy45MiwwLDEzLjkyQTEsMSwwLDAsMCw4LDMxLjljLjQzLjMsMTIsNywxMiw3YTEuMzEsMS4zMSwwLDAsMCwxLjE5LDBDMjEuOTEsMzguNSwzMywzMi4xMSwzMywzMi4xMXMuNjUtLjI4LjY1LTEuNTFWMjcuMTNsLTEzLDcuOVYzMmEzLjA1LDMuMDUsMCwwLDEsMS0yLjA3TDMzLjIsMjNhMi40NCwyLjQ0LDAsMCwwLC41NS0xLjQ2VjE4LjQzTDIwLjY0LDI2LjM1di0zLjJhMi4yMiwyLjIyLDAsMCwxLC44My0xLjc5Wk00MS4wNyw0LjIyYS4zOS4zOSwwLDAsMC0uMzctLjQySDM4VjEuMDZjMC0uMTYtLjI2LS4yMi0uNTMtLjIyTDM2LDEuMDhjLS4xOCwwLS4zMS4xMi0uMzEuMjNWMy44SDMzYS40LjQsMCwwLDAtLjM2LjM3djJoM1Y5YzAsLjE2LjI2LjI3LjU0LjIzbDEuNTEtLjI1Yy4xOCwwLC4yOS0uMTMuMjktLjIzVjYuMTRoM1oiLz48L3N2Zz4="'),L("span",{style:{color:"#24292E"}},">")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"        <"),L("span",{style:{color:"#22863A"}},"div"),L("span",{style:{color:"#24292E"}},">测试标题</"),L("span",{style:{color:"#22863A"}},"div"),L("span",{style:{color:"#24292E"}},">")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"       </"),L("span",{style:{color:"#22863A"}},"div"),L("span",{style:{color:"#24292E"}},">")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"     </"),L("span",{style:{color:"#22863A"}},"template"),L("span",{style:{color:"#24292E"}},">")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"     <"),L("span",{style:{color:"#22863A"}},"template"),L("span",{style:{color:"#24292E"}}," #"),L("span",{style:{color:"#005CC5"}},"right"),L("span",{style:{color:"#24292E"}},">")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"        <"),L("span",{style:{color:"#22863A"}},"div"),L("span",{style:{color:"#24292E"}},">admin</"),L("span",{style:{color:"#22863A"}},"div"),L("span",{style:{color:"#24292E"}},">")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"      </"),L("span",{style:{color:"#22863A"}},"template"),L("span",{style:{color:"#24292E"}},">")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"      <"),L("span",{style:{color:"#22863A"}},"template"),L("span",{style:{color:"#24292E"}}," #"),L("span",{style:{color:"#005CC5"}},"default"),L("span",{style:{color:"#24292E"}},">")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"        <"),L("span",{style:{color:"#22863A"}},"div"),L("span",{style:{color:"#24292E"}},">container</"),L("span",{style:{color:"#22863A"}},"div"),L("span",{style:{color:"#24292E"}},">")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"      </"),L("span",{style:{color:"#22863A"}},"template"),L("span",{style:{color:"#24292E"}},">")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"  </"),L("span",{style:{color:"#22863A"}},"sum-layout"),L("span",{style:{color:"#24292E"}},">")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"</"),L("span",{style:{color:"#22863A"}},"template"),L("span",{style:{color:"#24292E"}},">")]),M("\n"),L("span",{class:"line"}),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"<"),L("span",{style:{color:"#22863A"}},"script"),L("span",{style:{color:"#24292E"}}," "),L("span",{style:{color:"#005CC5"}},"lang"),L("span",{style:{color:"#24292E"}},"="),L("span",{style:{color:"#032F62"}},'"ts"'),L("span",{style:{color:"#24292E"}},">")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#D73A49"}},"import"),L("span",{style:{color:"#24292E"}}," { defineComponent, reactive, toRefs } "),L("span",{style:{color:"#D73A49"}},"from"),L("span",{style:{color:"#24292E"}}," "),L("span",{style:{color:"#032F62"}},"'vue'")]),M("\n"),L("span",{class:"line"}),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#D73A49"}},"export"),L("span",{style:{color:"#E36209"}}," "),L("span",{style:{color:"#D73A49"}},"default"),L("span",{style:{color:"#E36209"}}," "),L("span",{style:{color:"#6F42C1"}},"defineComponent"),L("span",{style:{color:"#E36209"}},"({")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#E36209"}},"  "),L("span",{style:{color:"#6F42C1"}},"setup"),L("span",{style:{color:"#E36209"}},"() "),L("span",{style:{color:"#24292E"}},"{")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"    "),L("span",{style:{color:"#D73A49"}},"const"),L("span",{style:{color:"#24292E"}}," "),L("span",{style:{color:"#005CC5"}},"settings"),L("span",{style:{color:"#24292E"}}," "),L("span",{style:{color:"#D73A49"}},"="),L("span",{style:{color:"#24292E"}}," "),L("span",{style:{color:"#6F42C1"}},"reactive"),L("span",{style:{color:"#24292E"}},"({")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"        "),L("span",{style:{color:"#6A737D"}},'// 可以用slot插槽或者render渲染函数两种方式，当使用render的时候需要改成 <script lang="tsx">')]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"        headerTitle: {")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"          slot: "),L("span",{style:{color:"#032F62"}},"'title'")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"        },")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"        "),L("span",{style:{color:"#6A737D"}},"// headerTitle: () => ")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"        "),L("span",{style:{color:"#6A737D"}},'//        <div class="title">')]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"        "),L("span",{style:{color:"#6A737D"}},"//           <img")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"        "),L("span",{style:{color:"#6A737D"}},'//             src="./logo.png"')]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"        "),L("span",{style:{color:"#6A737D"}},'//             alt="header-logo"')]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"        "),L("span",{style:{color:"#6A737D"}},"//             />")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"        "),L("span",{style:{color:"#6A737D"}},"//             <div>测试标题</div>")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"        "),L("span",{style:{color:"#6A737D"}},"//        </div>,")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"        headerRight: {")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"          slot: "),L("span",{style:{color:"#032F62"}},"'right'")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"        },")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"        "),L("span",{style:{color:"#6A737D"}},"// headerRight: () => <div>admin</div>,")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"        menuData: [")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"          {")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"            title: "),L("span",{style:{color:"#032F62"}},"'菜单列表'"),L("span",{style:{color:"#24292E"}},", "),L("span",{style:{color:"#6A737D"}},"// 标题")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"            icon: "),L("span",{style:{color:"#032F62"}},"'el-icon-s-goods'"),L("span",{style:{color:"#24292E"}},", "),L("span",{style:{color:"#6A737D"}},"// icon")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"            auth: "),L("span",{style:{color:"#032F62"}},"'menu'"),L("span",{style:{color:"#24292E"}},", "),L("span",{style:{color:"#6A737D"}},"// 权限")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"            path: "),L("span",{style:{color:"#032F62"}},"'/menu'"),L("span",{style:{color:"#24292E"}},", "),L("span",{style:{color:"#6A737D"}},"// 路径")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"            children: [ "),L("span",{style:{color:"#6A737D"}},"// 子菜单")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"              {")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"                title: "),L("span",{style:{color:"#032F62"}},"'数据'"),L("span",{style:{color:"#24292E"}},",")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"                auth: "),L("span",{style:{color:"#032F62"}},"'menu/data'"),L("span",{style:{color:"#24292E"}},",")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"                "),L("span",{style:{color:"#6A737D"}},"// path: '/menu/data'")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"              },")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"              {")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"                title: "),L("span",{style:{color:"#032F62"}},"'分析'"),L("span",{style:{color:"#24292E"}},",")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"                auth: "),L("span",{style:{color:"#032F62"}},"'menu/analysis'"),L("span",{style:{color:"#24292E"}},",")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"                "),L("span",{style:{color:"#6A737D"}},"// path: '/menu/analysis'")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"              }")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"            ]")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"          }")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"       ],")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"       headerStyles: {")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"         backgroundColor: "),L("span",{style:{color:"#032F62"}},"'#545c64'"),L("span",{style:{color:"#24292E"}},",")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"         padding: "),L("span",{style:{color:"#032F62"}},"'10px'"),L("span",{style:{color:"#24292E"}},",")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"         color: "),L("span",{style:{color:"#032F62"}},"'#fff'")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"       },")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"       menuProps: {")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"         backgroundColor: "),L("span",{style:{color:"#032F62"}},"'#f7f6f2'"),L("span",{style:{color:"#24292E"}},",")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"         textColor: "),L("span",{style:{color:"#032F62"}},"'#333'"),L("span",{style:{color:"#24292E"}},",")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"         activeTextColor: "),L("span",{style:{color:"#032F62"}},"'#409eff'"),L("span",{style:{color:"#24292E"}},",")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"         defaultActive: "),L("span",{style:{color:"#032F62"}},"'0-0'"),L("span",{style:{color:"#24292E"}},",")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"         defaultOpeneds: ["),L("span",{style:{color:"#005CC5"}},"0"),L("span",{style:{color:"#24292E"}},"]")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"       },")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"       triggerCollapse: "),L("span",{style:{color:"#005CC5"}},"true"),L("span",{style:{color:"#24292E"}},",")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"       footer: "),L("span",{style:{color:"#032F62"}},"'@copyRight by footer'"),L("span",{style:{color:"#24292E"}},", "),L("span",{style:{color:"#6A737D"}},"// 字符串或者render函数")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"    })")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"    "),L("span",{style:{color:"#D73A49"}},"return"),L("span",{style:{color:"#24292E"}}," {")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"      settings,")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"      "),L("span",{style:{color:"#D73A49"}},"..."),L("span",{style:{color:"#6F42C1"}},"toRefs"),L("span",{style:{color:"#24292E"}},"(settings)")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"    }")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"  }")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#E36209"}},"})")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"</"),L("span",{style:{color:"#22863A"}},"script"),L("span",{style:{color:"#24292E"}},">")]),M("\n"),L("span",{class:"line"}),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"<"),L("span",{style:{color:"#22863A"}},"style"),L("span",{style:{color:"#24292E"}},">")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#005CC5"}},".sum-layout"),L("span",{style:{color:"#24292E"}}," {")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"   "),L("span",{style:{color:"#005CC5"}},"min-height"),L("span",{style:{color:"#24292E"}},": "),L("span",{style:{color:"#005CC5"}},"500"),L("span",{style:{color:"#D73A49"}},"px"),L("span",{style:{color:"#24292E"}},";")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"}")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#005CC5"}},".title"),L("span",{style:{color:"#24292E"}}," {")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"  "),L("span",{style:{color:"#005CC5"}},"display"),L("span",{style:{color:"#24292E"}},": "),L("span",{style:{color:"#005CC5"}},"flex"),L("span",{style:{color:"#24292E"}},";")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"  "),L("span",{style:{color:"#005CC5"}},"align-items"),L("span",{style:{color:"#24292E"}},": "),L("span",{style:{color:"#005CC5"}},"center"),L("span",{style:{color:"#24292E"}},";")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"}")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#22863A"}},"a"),L("span",{style:{color:"#005CC5"}},":hover"),L("span",{style:{color:"#24292E"}}," {")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"  "),L("span",{style:{color:"#005CC5"}},"text-decoration"),L("span",{style:{color:"#24292E"}},": "),L("span",{style:{color:"#005CC5"}},"none"),L("span",{style:{color:"#D73A49"}},"!important"),L("span",{style:{color:"#24292E"}},";")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"}")]),M("\n"),L("span",{class:"line"},[L("span",{style:{color:"#24292E"}},"</"),L("span",{style:{color:"#22863A"}},"style"),L("span",{style:{color:"#24292E"}},">")]),M("\n"),L("span",{class:"line"})])])],-1),w=E('<h3 id="sumlayout-attributes" tabindex="-1"><a class="header-anchor" href="#sumlayout-attributes" aria-hidden="true">#</a> SumLayout Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>settings</td><td>布局参数</td><td>object</td><td>—</td><td>{}</td></tr></tbody></table><h3 id="settings-attributes" tabindex="-1"><a class="header-anchor" href="#settings-attributes" aria-hidden="true">#</a> Settings Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>headerTitle</td><td>头栏左边内容</td><td>string/object/function（如果有rener函数则展示render函数内容，如果是object,{slot: &#39;title&#39;}则可以使用插槽，否则展示字符串）</td><td>—</td><td>{}</td></tr><tr><td>headerRight</td><td>头栏右边内容</td><td>string/object/function（如果有rener函数则展示render函数内容，如果是object,{slot: &#39;title&#39;}则可以使用插槽，否则展示字符串）</td><td>—</td><td>{}</td></tr><tr><td>headerStyles</td><td>头栏样式</td><td>object</td><td>—</td><td>{}</td></tr><tr><td>menuProps</td><td>侧栏属性传递（继承 el-menu 属性）</td><td>object</td><td>—</td><td>{}</td></tr><tr><td>triggerCollapse</td><td>是否显示 collapse 图标</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>menuData</td><td>菜单数据</td><td>array</td><td>—</td><td>[]</td></tr><tr><td>footer</td><td>底部footer</td><td>string/object/function（如果有rener函数则展示render函数内容，如果是object,{slot: &#39;title&#39;}则可以使用插槽，否则展示字符串）</td><td>—</td><td>{}</td></tr></tbody></table><h3 id="menuprops-attributes" tabindex="-1"><a class="header-anchor" href="#menuprops-attributes" aria-hidden="true">#</a> MenuProps Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>mode</td><td>模式</td><td>string</td><td>horizontal / vertical</td><td>vertical</td></tr><tr><td>collapse</td><td>是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>background-color</td><td>菜单的背景色（仅支持 hex 格式）</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>text-color</td><td>菜单的文字颜色（仅支持 hex 格式）</td><td>string</td><td>—</td><td>#303133</td></tr><tr><td>active-text-color</td><td>当前激活菜单的文字颜色（仅支持 hex 格式）</td><td>string</td><td>—</td><td>#409EFF</td></tr><tr><td>default-active</td><td>当前激活菜单的 index</td><td>string</td><td>—</td><td>—</td></tr><tr><td>default-openeds</td><td>当前打开的 sub-menu 的 index 的数组</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>unique-opened</td><td>是否只保持一个子菜单的展开</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>menu-trigger</td><td>子菜单打开的触发方式(只在 mode 为 horizontal 时有效)</td><td>string</td><td>hover / click</td><td>hover</td></tr><tr><td>router</td><td>是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>collapse-transition</td><td>是否开启折叠动画</td><td>boolean</td><td>—</td><td>true</td></tr></tbody></table>',6);u.render=function(s,t,l,n,e,o){const a=r("render-demo-0"),L=r("demo");return c(),p(d,null,[j,y(L,{sourceCode:"<template>\n  <sum-layout :settings=\"settings\" class=\"sum-layout\">\n     <template #title>\n       <div class=\"title\">\n        <img style=\"height: 50px;margin-right: 10px;\" src=\"data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0IDQ0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzQwOWVmZjtmaWxsLXJ1bGU6ZXZlbm9kZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmVsZW1lbnQgcGx1cy1sb2dvLXNtYWxsIOWJr+acrDwvdGl0bGU+PHBhdGggaWQ9ImVsZW1lbnRfcGx1cy1sb2dvLXNtYWxsIiBkYXRhLW5hbWU9ImVsZW1lbnQgcGx1cy1sb2dvLXNtYWxsIiBjbGFzcz0iY2xzLTEiIGQ9Ik0zNy40MSwzMi4zN2MwLDEuNTctLjgzLDEuOTMtLjgzLDEuOTNMMjEuNTEsNDNBMS42OSwxLjY5LDAsMCwxLDIwLDQzUzUuMiwzNC40LDQuNjYsMzRhMS4yOSwxLjI5LDAsMCwxLS41NS0xVjE1LjI0YzAtLjc4LDEtMS4zMywxLTEuMzNMMTkuODYsNS4zNmEyLDIsMCwwLDEsMS43OSwwbDE0LjQ2LDguNDFhMi4wNiwyLjA2LDAsMCwxLDEuMjUsMi4wNlYzMi4zN1ptLTUuOS0xN0wyMS4zNSw5LjVhMS41OSwxLjU5LDAsMCwwLTEuNDEsMEw4LjMzLDE2LjE1cy0uNzcuNDYtLjc2LDEuMDgsMCwxMy45MiwwLDEzLjkyQTEsMSwwLDAsMCw4LDMxLjljLjQzLjMsMTIsNywxMiw3YTEuMzEsMS4zMSwwLDAsMCwxLjE5LDBDMjEuOTEsMzguNSwzMywzMi4xMSwzMywzMi4xMXMuNjUtLjI4LjY1LTEuNTFWMjcuMTNsLTEzLDcuOVYzMmEzLjA1LDMuMDUsMCwwLDEsMS0yLjA3TDMzLjIsMjNhMi40NCwyLjQ0LDAsMCwwLC41NS0xLjQ2VjE4LjQzTDIwLjY0LDI2LjM1di0zLjJhMi4yMiwyLjIyLDAsMCwxLC44My0xLjc5Wk00MS4wNyw0LjIyYS4zOS4zOSwwLDAsMC0uMzctLjQySDM4VjEuMDZjMC0uMTYtLjI2LS4yMi0uNTMtLjIyTDM2LDEuMDhjLS4xOCwwLS4zMS4xMi0uMzEuMjNWMy44SDMzYS40LjQsMCwwLDAtLjM2LjM3djJoM1Y5YzAsLjE2LjI2LjI3LjU0LjIzbDEuNTEtLjI1Yy4xOCwwLC4yOS0uMTMuMjktLjIzVjYuMTRoM1oiLz48L3N2Zz4=\">\n        <div>测试标题</div>\n       </div>\n     </template>\n     <template #right>\n        <div>admin</div>\n      </template>\n      <template #default>\n        <div>container</div>\n      </template>\n  </sum-layout>\n</template>\n\n<script lang=\"ts\">\nimport { defineComponent, reactive, toRefs } from 'vue'\n\nexport default defineComponent({\n  setup() {\n    const settings = reactive({\n        // 可以用slot插槽或者render渲染函数两种方式，当使用render的时候需要改成 <script lang=\"tsx\">\n        headerTitle: {\n          slot: 'title'\n        },\n        // headerTitle: () => \n        //        <div class=\"title\">\n        //           <img\n        //             src=\"./logo.png\"\n        //             alt=\"header-logo\"\n        //             />\n        //             <div>测试标题</div>\n        //        </div>,\n        headerRight: {\n          slot: 'right'\n        },\n        // headerRight: () => <div>admin</div>,\n        menuData: [\n          {\n            title: '菜单列表', // 标题\n            icon: 'el-icon-s-goods', // icon\n            auth: 'menu', // 权限\n            path: '/menu', // 路径\n            children: [ // 子菜单\n              {\n                title: '数据',\n                auth: 'menu/data',\n                // path: '/menu/data'\n              },\n              {\n                title: '分析',\n                auth: 'menu/analysis',\n                // path: '/menu/analysis'\n              }\n            ]\n          }\n       ],\n       headerStyles: {\n         backgroundColor: '#545c64',\n         padding: '10px',\n         color: '#fff'\n       },\n       menuProps: {\n         backgroundColor: '#f7f6f2',\n         textColor: '#333',\n         activeTextColor: '#409eff',\n         defaultActive: '0-0',\n         defaultOpeneds: [0]\n       },\n       triggerCollapse: true,\n       footer: '@copyRight by footer', // 字符串或者render函数\n    })\n    return {\n      settings,\n      ...toRefs(settings)\n    }\n  }\n})\n<\/script>\n\n<style>\n.sum-layout {\n   min-height: 500px;\n}\n.title {\n  display: flex;\n  align-items: center;\n}\na:hover {\n  text-decoration: none!important;\n}\n</style>\n"},{highlight:i((()=>[D])),default:i((()=>[y(a)])),_:1}),w],64)};export{u as default};
