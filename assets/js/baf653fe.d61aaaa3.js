"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2048],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},T=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),T=c(n),m=o,p=T["".concat(s,".").concat(m)]||T[m]||d[m]||a;return n?r.createElement(p,i(i({ref:t},u),{},{components:n})):r.createElement(p,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=T;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}T.displayName="MDXCreateElement"},8903:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"PT3SBT",sidebar_position:3},s=void 0,c={unversionedId:"react-native/thermometer/pt3sbt",id:"react-native/thermometer/pt3sbt",title:"PT3SBT",description:"API Reference",source:"@site/docs/react-native/thermometer/pt3sbt.md",sourceDirName:"react-native/thermometer",slug:"/react-native/thermometer/pt3sbt",permalink:"/ihealthlabs-sdk-docs/docs/react-native/thermometer/pt3sbt",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react-native/thermometer/pt3sbt.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"PT3SBT",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"TS28B",permalink:"/ihealthlabs-sdk-docs/docs/react-native/thermometer/ts28b"},next:{title:"AM3",permalink:"/ihealthlabs-sdk-docs/docs/react-native/tracker/am3"}},u={},d=[{value:"API Reference",id:"api-reference",level:2},{value:"Import PT3SBT Module",id:"import-pt3sbt-module",level:3},{value:"Add and remove listener",id:"add-and-remove-listener",level:3},{value:"set time",id:"set-time",level:3},{value:"get battery",id:"get-battery",level:3},{value:"set unit",id:"set-unit",level:3},{value:"get unit",id:"get-unit",level:3},{value:"get history data count",id:"get-history-data-count",level:3},{value:"get history data",id:"get-history-data",level:3},{value:"delete history data",id:"delete-history-data",level:3},{value:"online measurement",id:"online-measurement",level:3}],T={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"import-pt3sbt-module"},"Import PT3SBT Module"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  PT3SBTModule,\n  PT3SBTProfileModule\n} from '@ihealth/ihealthlibrary-react-native';\n")),(0,a.kt)("h3",{id:"add-and-remove-listener"},"Add and remove listener"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// add\nnotifyListener = DeviceEventEmitter.addListener(PT3SBTModule.Event_Notify,  (event) => {\n    console.log(event);\n});\n\n// remove\nnotifyListener.remove();\n")),(0,a.kt)("h3",{id:"set-time"},"set time"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'PT3SBTModule.setTime(mac);\n\n// response\n// {status: "success", type: "PT3SBT", mac: "004D320C41BE", action: "action_set_time"}\nnotifyListener = DeviceEventEmitter.addListener(PT3SBTModule.Event_Notify,  (event) => {\n    if (event.action === PT3SBTProfileModule.ACTION_SET_TIME) {\n        console.log(event[NT13BProfileModule.STATUS]);\n    } \n});\n')),(0,a.kt)("h3",{id:"get-battery"},"get battery"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'PT3SBTModule.getBattery(mac);\n\n// response\n// { battery: 70, type: "PT3SBT", mac: "004D320C41BE", action: "action_get_battery"}\nnotifyListener = DeviceEventEmitter.addListener(PT3SBTModule.Event_Notify,  (event) => {\n    if (event.action === PT3SBTProfileModule.ACTION_GET_BATTERY) {\n        console.log(event[PT3SBTProfileModule.BATTERY]);\n    } \n});\n')),(0,a.kt)("h3",{id:"set-unit"},"set unit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// 1: centigrade, 2: fahrenheit\nPT3SBTModule.setUnit(mac, unit);\n\n// response\n// {status: "success", type: "PT3SBT", mac: "004D320C41BE", action: "action_set_unit"}\nnotifyListener = DeviceEventEmitter.addListener(PT3SBTModule.Event_Notify,  (event) => {\n    if (event.action === PT3SBTProfileModule.ACTION_SET_UNIT) {\n        console.log(event[PT3SBTProfileModule.STATUS]);\n    } \n});\n')),(0,a.kt)("h3",{id:"get-unit"},"get unit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'PT3SBTModule.getUnit(mac);\n\n// response\n// {unit: 2, type: "PT3SBT", mac: "004D320C41BE", action: "action_get_unit"}\nnotifyListener = DeviceEventEmitter.addListener(PT3SBTModule.Event_Notify,  (event) => {\n    if (event.action === PT3SBTProfileModule.ACTION_GET_UNIT) {\n        console.log(event[PT3SBTProfileModule.UNIT]);\n    } \n});\n')),(0,a.kt)("h3",{id:"get-history-data-count"},"get history data count"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'PT3SBTModule.getHistoryCount(mac);\n\n// response\n// {count: 37, type: "PT3SBT", mac: "004D320C41BE", action: "action_get_history_count"}\nnotifyListener = DeviceEventEmitter.addListener(PT3SBTModule.Event_Notify,  (event) => {\n    if (event.action === PT3SBTProfileModule.ACTION_GET_HISTORY_COUNT) {\n        console.log(event[PT3SBTProfileModule.COUNT]);\n    } \n});\n')),(0,a.kt)("h3",{id:"get-history-data"},"get history data"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: After call get history data, must to delele history data. If don't, the PT3SBT will keep on offline mode.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'PT3SBTModule.getHistoryData(mac);\n\n// response\n// {history: Array, type: "PT3SBT", mac: "004D320C41BE", action: "action_get_history_data"}\nnotifyListener = DeviceEventEmitter.addListener(PT3SBTModule.Event_Notify,  (event) => {\n    if (event.action === PT3SBTProfileModule.ACTION_GET_HISTORY_DATA) {\n        const arr = event[PT3SBTProfileModule.HISTORY];\n        arr.foreach(item => {\n            console.log(item[PT3SBTProfileModule.TEMPERATURE]);\n            console.log(item[PT3SBTProfileModule.TS]);\n        })\n    } \n});\n')),(0,a.kt)("h3",{id:"delete-history-data"},"delete history data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'PT3SBTModule.deleteHistoryData(mac);\n\n// response\n// {status: "success", type: "PT3SBT", mac: "004D320C41BE", action: "action_delete_history_data"}\nnotifyListener = DeviceEventEmitter.addListener(PT3SBTModule.Event_Notify,  (event) => {\n    if (event.action === PT3SBTProfileModule.ACTION_DELETE_HISTORY_DATA) {\n        console.log(event[PT3SBTProfileModule.STATUS]);\n    } \n});\n')),(0,a.kt)("h3",{id:"online-measurement"},"online measurement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// response\n// {Tbody: 3845", type: "PT3SBT", mac: "004D320C41BE", action: "action_temperature_measurement"}\n// the real temperature is Tbody / 100, this is centigrade\nnotifyListener = DeviceEventEmitter.addListener(PT3SBTModule.Event_Notify,  (event) => {\n    if (event.action === PT3SBTProfileModule.ACTION_TEMPERATURE_MEASUREMENT) {\n        console.log(event[PT3SBTProfileModule.TEMPERATURE]);\n    } \n});\n')))}m.isMDXComponent=!0}}]);