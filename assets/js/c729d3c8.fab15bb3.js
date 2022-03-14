"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[9503],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},v=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),v=s(t),d=r,m=v["".concat(l,".").concat(d)]||v[d]||u[d]||i;return t?a.createElement(m,c(c({ref:n},p),{},{components:t})):a.createElement(m,c({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=v;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},15256:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),c=["components"],o={title:"TS28B",sidebar_position:2},l=void 0,s={unversionedId:"thermometer/ts28b",id:"version-2.7.7/thermometer/ts28b",isDocsHomePage:!1,title:"TS28B",description:"WorkFlow",source:"@site/ios_versioned_docs/version-2.7.7/thermometer/ts28b.md",sourceDirName:"thermometer",slug:"/thermometer/ts28b",permalink:"/ios/thermometer/ts28b",editUrl:"https://github.com/chenxuewei-ihealth/ihealthlabs-sdk-docs/tree/main/ios_versioned_docs/version-2.7.7/thermometer/ts28b.md",tags:[],version:"2.7.7",sidebarPosition:2,frontMatter:{title:"TS28B",sidebar_position:2},sidebar:"version-1.33.x/mainSidebar",previous:{title:"NT13B",permalink:"/ios/thermometer/nt13b"},next:{title:"PT3SBT",permalink:"/ios/thermometer/pt3sbt"}},p=[{value:"WorkFlow",id:"workflow",children:[]},{value:"Connection to device",id:"connection-to-device",children:[{value:"1.Listen to device notify",id:"1listen-to-device-notify",children:[]},{value:"2.Scan for PO3 devices",id:"2scan-for-po3-devices",children:[]},{value:"3.Connect to PO3 devices",id:"3connect-to-po3-devices",children:[]}]},{value:"API reference",id:"api-reference",children:[{value:"Get the PO3 battery status",id:"get-the-po3-battery-status",children:[]},{value:"Start real-time measurement",id:"start-real-time-measurement",children:[]},{value:"Specify Online Users",id:"specify-online-users",children:[]},{value:"Disconnect the HS2",id:"disconnect-the-hs2",children:[]}]}],u={toc:p};function v(e){var n=e.components,t=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"workflow"},"WorkFlow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scan and connect PO3 scale.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"PO3 support online measurement and offline measurement."))),(0,i.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,i.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { }\n\n    @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData){ }\n\n    @Override\n    public void onScanError(String reason, long latency) { }\n\n    @Override\n    public void onScanFinish() { }\n\n    @Override\n    public void onDeviceNotify(String mac, String deviceType,\n                                String action, String message) { }\n}\nint callbackId = iHealthDevicesManager.getInstance().registerClientCallback(miHealthDevicesCallback);\niHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_PO3);\niHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)\n")),(0,i.kt)("h3",{id:"2scan-for-po3-devices"},"2.Scan for PO3 devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.PO3);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Return\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { \n        Log.i(TAG, "onScanDevice - mac:" + mac + " - deviceType:" + deviceType + " - rssi:" + rssi + " - manufactorData:" + manufactorData);\n    }\n}\n')),(0,i.kt)("h3",{id:"3connect-to-po3-devices"},"3.Connect to PO3 devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_PO3)\nPo3Control control = iHealthDevicesManager.getInstance().getPo3Control(mDeviceMac);\n')),(0,i.kt)("h2",{id:"api-reference"},"API reference"),(0,i.kt)("h3",{id:"get-the-po3-battery-status"},"Get the PO3 battery status"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Po3Control control = iHealthDevicesManager.getInstance().getPo3Control(mDeviceMac);\ncontrol.getBattery();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (PoProfile.ACTION_BATTERY_PO.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int battery = obj.getInt(PoProfile.BATTERY_PO);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"start-real-time-measurement"},"Start real-time measurement"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Po3Control control = iHealthDevicesManager.getInstance().getPo3Control(mDeviceMac);\ncontrol.startMeasure() \n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (HsProfile.ACTION_HISTORICAL_DATA_COMPLETE_HS.equals(action)) {\n            try {\n                JSONArray historyArr = new JSONArray(message);\n                for (int i = 0; i < historyArr.length(); i++) {\n                    JSONObject obj = historyArr.getJSONObject(i);\n                    String measureTs = obj.getString(HsProfile.MEASUREMENT_DATE_HS);\n                    String weight    = obj.getString(HsProfile.WEIGHT_HS);\n                 \n                }\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"specify-online-users"},"Specify Online Users"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Hs2Control control = iHealthDevicesManager.getInstance().getHs2Control(mDeviceMac);\n/*\n * @param unit 1 kg; 2 lb; 3 st\n * @param userId user identify number\n */\ncontrol.measureOnline(int unit, int userId)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (HsProfile.ACTION_LIVEDATA_HS.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                String weight = obj.getString(HsProfile.DATA_LIVEDATA_HSWEIGHT);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } else if (HsProfile.ACTION_ONLINE_RESULT_HS.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                String weight = obj.getString(HsProfile.WEIGHT_HS);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } \n    }\n}\n")),(0,i.kt)("h3",{id:"disconnect-the-hs2"},"Disconnect the HS2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Hs2Control control = iHealthDevicesManager.getInstance().getHs2Control(mDeviceMac);\ncontrol.disconnect();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n     @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData) { \n        \n    }\n}\n")))}v.isMDXComponent=!0}}]);