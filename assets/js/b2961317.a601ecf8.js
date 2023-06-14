"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[654],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),d=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(a),g=n,v=p["".concat(o,".").concat(g)]||p[g]||u[g]||l;return a?r.createElement(v,c(c({ref:t},s),{},{components:a})):r.createElement(v,c({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var d=2;d<l;d++)c[d]=a[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7055:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const l={title:"ECG3USB",sidebar_position:2},c=void 0,i={unversionedId:"react-native/ecg/ecgusb",id:"react-native/ecg/ecgusb",title:"ECG3USB",description:"API Reference",source:"@site/docs/react-native/ecg/ecgusb.md",sourceDirName:"react-native/ecg",slug:"/react-native/ecg/ecgusb",permalink:"/ihealthlabs-sdk-docs/docs/react-native/ecg/ecgusb",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react-native/ecg/ecgusb.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"ECG3USB",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"ECG3",permalink:"/ihealthlabs-sdk-docs/docs/react-native/ecg/"}},o={},d=[{value:"API Reference",id:"api-reference",level:2},{value:"Import ECG3 module",id:"import-ecg3-module",level:3},{value:"Add and remove listener",id:"add-and-remove-listener",level:3},{value:"get device information",id:"get-device-information",level:3},{value:"get all connected devices",id:"get-all-connected-devices",level:3},{value:"get data stored in the ecg3 device",id:"get-data-stored-in-the-ecg3-device",level:3},{value:"delete data stored in the ecg3 device",id:"delete-data-stored-in-the-ecg3-device",level:3},{value:"splice data",id:"splice-data",level:3},{value:"get cache",id:"get-cache",level:3},{value:"delete cache data",id:"delete-cache-data",level:3},{value:"get filter data",id:"get-filter-data",level:3}],s={toc:d};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"api-reference"},"API Reference"),(0,n.kt)("h3",{id:"import-ecg3-module"},"Import ECG3 module"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  ECGModule,\n  ECGProfileModule\n} from '@ihealth/ihealthlibrary-react-native';\n")),(0,n.kt)("h3",{id:"add-and-remove-listener"},"Add and remove listener"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// add\nnotifyListener = DeviceEventEmitter.addListener(ECGModule.Event_Notify,  (event) => {\n    console.log(event);\n});\n\n// remove\nnotifyListener.remove();\n")),(0,n.kt)("h3",{id:"get-device-information"},"get device information"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"ECGUSBModule.getIdps()\n")),(0,n.kt)("h3",{id:"get-all-connected-devices"},"get all connected devices"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"ECGUSBModule.getAllConnectedDevices();\n")),(0,n.kt)("h3",{id:"get-data-stored-in-the-ecg3-device"},"get data stored in the ecg3 device"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"ECGUSBModule.syncData();\n")),(0,n.kt)("h3",{id:"delete-data-stored-in-the-ecg3-device"},"delete data stored in the ecg3 device"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"ECGUSBModule.deleteData();\n")),(0,n.kt)("h3",{id:"splice-data"},"splice data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'ECGUSBModule.spliceData(["ECGSDK_20160420025256",\n                         "ECGSDK_20160420025453",\n                         "ECGSDK_20160420030824",\n                         "ECGSDK_20160420082435"]);\n')),(0,n.kt)("h3",{id:"get-cache"},"get cache"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"ECGUSBModule.getCache();\n")),(0,n.kt)("h3",{id:"delete-cache-data"},"delete cache data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"ECGUSBModule.deleteCacheData();\n")),(0,n.kt)("h3",{id:"get-filter-data"},"get filter data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'ECGUSBModule.getFilterDataByFileName("ECG_Total_Data_20160420025256.dat","ECG_Total_Mark_20160420025256.txt");\n')))}u.isMDXComponent=!0}}]);