"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[2361],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,v=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68421:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={title:"ECG3",sidebar_position:1},l=void 0,s={unversionedId:"ecg/ecg",id:"version-1.4.9/ecg/ecg",isDocsHomePage:!1,title:"ECG3",description:"API Reference",source:"@site/react-native_versioned_docs/version-1.4.9/ecg/ecg.md",sourceDirName:"ecg",slug:"/ecg/ecg",permalink:"/react-native/ecg/ecg",editUrl:"https://github.com/chenxuewei-ihealth/ihealthlabs-sdk-docs/tree/main/react-native_versioned_docs/version-1.4.9/ecg/ecg.md",tags:[],version:"1.4.9",sidebarPosition:1,frontMatter:{title:"ECG3",sidebar_position:1},sidebar:"version-0.23.x/mainSidebar",previous:{title:"AM5",permalink:"/react-native/tracker/am5"},next:{title:"ECG3USB",permalink:"/react-native/ecg/ecgusb"}},u=[{value:"API Reference",id:"api-reference",children:[]},{value:"Import ECG3 module",id:"import-ecg3-module",children:[{value:"Add and remove listener",id:"add-and-remove-listener",children:[]},{value:"get all connected devices",id:"get-all-connected-devices",children:[]},{value:"start a measurement",id:"start-a-measurement",children:[]},{value:"cancel a measurement",id:"cancel-a-measurement",children:[]},{value:"get battery",id:"get-battery",children:[]},{value:"set current time to device",id:"set-current-time-to-device",children:[]}]}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h2",{id:"import-ecg3-module"},"Import ECG3 module"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  ECGModule,\n  ECGProfileModule\n} from '@ihealth/ihealthlibrary-react-native';\n")),(0,o.kt)("h3",{id:"add-and-remove-listener"},"Add and remove listener"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// add\nnotifyListener = DeviceEventEmitter.addListener(ECGModule.Event_Notify,  (event) => {\n    console.log(event);\n});\n\n// remove\nnotifyListener.remove();\n")),(0,o.kt)("h3",{id:"get-all-connected-devices"},"get all connected devices"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"ECGModule.getAllConnectedDevices();\n")),(0,o.kt)("h3",{id:"start-a-measurement"},"start a measurement"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"ECGModule.startMeasure(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(ECGModule.Event_Notify,  (event) => {\n    if (event.action === ECGModule.ACTION_ELECTRODE_STATUS) {\n        console.log(event[ECGProfileModule.ELECTRODE_STATUS]);\n        console.log(event[ECGProfileModule.ERROR_DESCRIPTION_ECG]);\n    }\n});\n")),(0,o.kt)("h3",{id:"cancel-a-measurement"},"cancel a measurement"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"ECGModule.stopMeasure(mac);\n")),(0,o.kt)("h3",{id:"get-battery"},"get battery"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"ECGModule.getBattery(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(ECGModule.Event_Notify,  (event) => {\n    if (event.action === ECGModule.ACTION_BATTERY_ECG) {\n        console.log(event[ECGProfileModule.BATTERY_ECG])\n    }\n});\n")),(0,o.kt)("h3",{id:"set-current-time-to-device"},"set current time to device"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"ECGModule.sysTime(mac);\n")))}m.isMDXComponent=!0}}]);