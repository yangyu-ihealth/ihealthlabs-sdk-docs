"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[6095],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(t),p=o,m=f["".concat(d,".").concat(p)]||f[p]||u[p]||i;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},90469:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={title:"BP7S",sidebar_position:5},d=void 0,s={unversionedId:"blood_pressure/bp7s",id:"version-1.4.9/blood_pressure/bp7s",isDocsHomePage:!1,title:"BP7S",description:"API Reference",source:"@site/react-native_versioned_docs/version-1.4.9/blood_pressure/bp7s.md",sourceDirName:"blood_pressure",slug:"/blood_pressure/bp7s",permalink:"/ihealthlabs-sdk-docs/react-native/blood_pressure/bp7s",editUrl:"https://github.com/chenxuewei-ihealth/ihealthlabs-sdk-docs/tree/main/react-native_versioned_docs/version-1.4.9/blood_pressure/bp7s.md",tags:[],version:"1.4.9",sidebarPosition:5,frontMatter:{title:"BP7S",sidebar_position:5},sidebar:"version-0.23.x/mainSidebar",previous:{title:"BP7",permalink:"/ihealthlabs-sdk-docs/react-native/blood_pressure/bp7"},next:{title:"KN550",permalink:"/ihealthlabs-sdk-docs/react-native/blood_pressure/kn550"}},c=[{value:"API Reference",id:"api-reference",children:[{value:"Import BP7S Module",id:"import-bp7s-module",children:[]},{value:"Add and remove listener",id:"add-and-remove-listener",children:[]},{value:"get battery",id:"get-battery",children:[]},{value:"set unit",id:"set-unit",children:[]},{value:"get quantity of data stored in the bp5 device",id:"get-quantity-of-data-stored-in-the-bp5-device",children:[]},{value:"get data stored in the bp5 device",id:"get-data-stored-in-the-bp5-device",children:[]},{value:"disconnect device",id:"disconnect-device",children:[]},{value:"set angle range",id:"set-angle-range",children:[]},{value:"get bp7s device information",id:"get-bp7s-device-information",children:[]},{value:"get all connected devices",id:"get-all-connected-devices",children:[]}]}],u={toc:c};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("h3",{id:"import-bp7s-module"},"Import BP7S Module"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  BP7SModule,\n  BPProfileModule\n} from '@ihealth/ihealthlibrary-react-native';\n")),(0,i.kt)("h3",{id:"add-and-remove-listener"},"Add and remove listener"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// add\nnotifyListener = DeviceEventEmitter.addListener(BP7SModule.Event_Notify,  (event) => {\n    console.log(event);\n});\n\n// remove\nnotifyListener.remove();\n")),(0,i.kt)("h3",{id:"get-battery"},"get battery"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"BP7SModule.getBattery(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP7SModule.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_BATTERY_BP) {\n        console.log(event[BPProfileModule.BATTERY_BP]);\n    }\n});\n")),(0,i.kt)("h3",{id:"set-unit"},"set unit"),(0,i.kt)("p",null,"The API can change the unit of the bg5 display."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// unit :0 mmHg;1 kPa\nBP7SModule.setUnit(mac, 1);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(BP7SModule.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_SET_UNIT_SUCCESS_BP) {\n        console.log("set Unit");\n    }\n});\n')),(0,i.kt)("h3",{id:"get-quantity-of-data-stored-in-the-bp5-device"},"get quantity of data stored in the bp5 device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"BP7SModule.getOfflineNum(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(BP7SModule.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_HISTORICAL_NUM_BP) {\n        console.log(event[BPProfileModule.HISTORICAL_NUM_BP]);\n    }\n});\n")),(0,i.kt)("h3",{id:"get-data-stored-in-the-bp5-device"},"get data stored in the bp5 device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'BP7SModule.getOfflineData(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP7SModule.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_HISTORICAL_DATA_BP) {\n        let dataArray = event[BPProfileModule.HISTORICAL_DATA_BP];\n        if (dataArray == undefined) {\n            result = "There is not offline data in device"\n        }else {\n            for (let i = 0; i < dataArray.length; i++) {\n                let offlineData = dataArray[i];\n\n                console.log(offlineData[BPProfileModule.MEASUREMENT_DATE_BP]);\n                console.log(offlineData[BPProfileModule.HIGH_BLOOD_PRESSURE_BP]);\n                console.log(offlineData[BPProfileModule.LOW_BLOOD_PRESSURE_BP]);\n                console.log(offlineData[BPProfileModule.PULSE_BP]);\n                console.log(offlineData[BPProfileModule.MEASUREMENT_AHR_BP]);\n                console.log(offlineData[BPProfileModule.MEASUREMENT_HSD_BP]);\n                console.log(offlineData[BPProfileModule.DATAID]);\n            }\n        }\n    }\n});\n')),(0,i.kt)("h3",{id:"disconnect-device"},"disconnect device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"BP7SModule.disConnect(mac);\n")),(0,i.kt)("h3",{id:"set-angle-range"},"set angle range"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * leftHigh  the maximum measure angle of left hand, the maximum value must less than 90\n * leftLow   the minimum measure angle of left hand, the minimum value must more than 0, and less than leftUpper\n * rightHigh the maximum measure angle of right hand, the maximum value must less than 90\n * leftLow   the minimum measure angle of right hand, the minimum value must more than 0, and less than rightUpper\n */\nBP7SModule.angleSet(mac, 80, 30, 80, 30);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(BP7SModule.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_SET_ANGLE_SUCCESS_BP) {\n        console.log("set angle");\n    }\n});\n')),(0,i.kt)("h3",{id:"get-bp7s-device-information"},"get bp7s device information"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"BP7SModule.getFunctionInfo(mac);\n")),(0,i.kt)("h3",{id:"get-all-connected-devices"},"get all connected devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"BP7SModule.getAllConnectedDevices();\n")))}f.isMDXComponent=!0}}]);