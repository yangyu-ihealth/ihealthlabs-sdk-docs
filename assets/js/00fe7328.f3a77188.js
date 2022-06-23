"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8781],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},v=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),v=s(t),p=i,f=v["".concat(l,".").concat(p)]||v[p]||d[p]||r;return t?a.createElement(f,c(c({ref:n},u),{},{components:t})):a.createElement(f,c({ref:n},u))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,c=new Array(r);c[0]=v;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var s=2;s<r;s++)c[s]=t[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},5115:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),c=["components"],o={title:"HS5S",sidebar_position:6},l=void 0,s={unversionedId:"android/scale/hs5s",id:"android/scale/hs5s",title:"HS5S",description:"WorkFlow",source:"@site/docs/android/scale/hs5s.md",sourceDirName:"android/scale",slug:"/android/scale/hs5s",permalink:"/ihealthlabs-sdk-docs/docs/android/scale/hs5s",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/android/scale/hs5s.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"HS5S",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"HS5",permalink:"/ihealthlabs-sdk-docs/docs/android/scale/hs5"},next:{title:"HS6",permalink:"/ihealthlabs-sdk-docs/docs/android/scale/hs6"}},u={},d=[{value:"WorkFlow",id:"workflow",level:2},{value:"Connection to device",id:"connection-to-device",level:2},{value:"1.Listen to device notify",id:"1listen-to-device-notify",level:3},{value:"2.Scan for HS5(Bluetooth) devices",id:"2scan-for-hs5bluetooth-devices",level:3},{value:"3.Connect to HS5(Bluetooth) devices",id:"3connect-to-hs5bluetooth-devices",level:3},{value:"4.Scan for HS5(WIFI) devices",id:"4scan-for-hs5wifi-devices",level:3},{value:"5.Connect to HS5(WIFI) devices",id:"5connect-to-hs5wifi-devices",level:3},{value:"API reference",id:"api-reference",level:2},{value:"Set the wifi information to the scale(Bluetooth)",id:"set-the-wifi-information-to-the-scalebluetooth",level:3},{value:"Create user management(WIFI)",id:"create-user-managementwifi",level:3}],v={toc:d};function p(e){var n=e.components,t=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"workflow"},"WorkFlow"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The HS5 is Wifi body fat scale. If you've already set up wifi information, please jump to step 2. If you need to set wifi information, please scan and connect HS5(Bluetooth) scale.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Call funtion "setWifi" for setting wifi information to HS5(Bluetooth) scale.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"HS5 support online measurement and offline measurement."))),(0,r.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,r.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { }\n\n    @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData){ }\n\n    @Override\n    public void onScanError(String reason, long latency) { }\n\n    @Override\n    public void onScanFinish() { }\n\n    @Override\n    public void onDeviceNotify(String mac, String deviceType,\n                                String action, String message) { }\n}\nint callbackId = iHealthDevicesManager.getInstance().registerClientCallback(miHealthDevicesCallback);\niHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_HS5, iHealthDevicesManager.TYPE_HS5_BT);\niHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)\n")),(0,r.kt)("h3",{id:"2scan-for-hs5bluetooth-devices"},"2.Scan for HS5(Bluetooth) devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.TYPE_HS5_BT);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Return\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { \n        Log.i(TAG, "onScanDevice - mac:" + mac + " - deviceType:" + deviceType + " - rssi:" + rssi + " - manufactorData:" + manufactorData);\n    }\n}\n')),(0,r.kt)("h3",{id:"3connect-to-hs5bluetooth-devices"},"3.Connect to HS5(Bluetooth) devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_HS5_BT)\nHs4sControl control = iHealthDevicesManager.getInstance().getHs4sControl(mDeviceMac);\n')),(0,r.kt)("h3",{id:"4scan-for-hs5wifi-devices"},"4.Scan for HS5(WIFI) devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.TYPE_HS5_BT);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Return\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { \n        Log.i(TAG, "onScanDevice - mac:" + mac + " - deviceType:" + deviceType + " - rssi:" + rssi + " - manufactorData:" + manufactorData);\n    }\n}\n')),(0,r.kt)("h3",{id:"5connect-to-hs5wifi-devices"},"5.Connect to HS5(WIFI) devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_HS5)\nHs4sControl control = iHealthDevicesManager.getInstance().getHs4sControl(mDeviceMac);\n')),(0,r.kt)("h2",{id:"api-reference"},"API reference"),(0,r.kt)("h3",{id:"set-the-wifi-information-to-the-scalebluetooth"},"Set the wifi information to the scale(Bluetooth)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Hs5ControlForBt control = iHealthDevicesManager.getInstance().getHs5ControlForBt(mDeviceMac);\ncontrol.setWifi(String ssid, int type, String pw)() \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (HsProfile.ACTION_SETTINGWIFI.equals(action)) {\n            Log.i("", "setting wifi");\n        } else if (HsProfile.ACTION_SETWIFI_SUCCESS.equals(action) {\n            Log.i("", "set wifi success");\n        } else if (HsProfile.ACTION_SETWIFI_FAIL.equals(action) {\n            Log.i("", "set wifi fail");\n        } else if (HsProfile.ACTION_SETWIFI_UNKNOW.equals(action) {\n            Log.i("", "set wifi unknow");\n        }\n    } \n}\n')),(0,r.kt)("h3",{id:"create-user-managementwifi"},"Create user management(WIFI)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Hs5Control control = iHealthDevicesManager.getInstance().getHs5Control(mDeviceMac);\n/*\n * @param userId user identify number, The range: 1 ~ 2147483647(0x7FFFFFFF)\n */\ncontrol.createManagement(int userId)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (HsProfile.ACTION_LIVEDATA_HS.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                String weight = obj.getString(HsProfile.DATA_LIVEDATA_HSWEIGHT);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } else if (HsProfile.ACTION_ONLINE_RESULT_HS.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                String weight = obj.getString(HsProfile.WEIGHT_HS);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } \n    }\n}\n")))}p.isMDXComponent=!0}}]);