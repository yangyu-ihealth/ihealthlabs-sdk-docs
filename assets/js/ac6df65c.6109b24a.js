"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6184],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),v=s(n),u=r,g=v["".concat(c,".").concat(u)]||v[u]||d[u]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=v;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},6817:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"KN550",sidebar_position:6},c=void 0,s={unversionedId:"android/blood_pressure/kn550",id:"android/blood_pressure/kn550",title:"KN550",description:"WorkFlow",source:"@site/docs/android/blood_pressure/kn550.md",sourceDirName:"android/blood_pressure",slug:"/android/blood_pressure/kn550",permalink:"/ihealthlabs-sdk-docs/docs/android/blood_pressure/kn550",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/android/blood_pressure/kn550.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"KN550",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"BP7S",permalink:"/ihealthlabs-sdk-docs/docs/android/blood_pressure/bp7s"},next:{title:"KD723",permalink:"/ihealthlabs-sdk-docs/docs/android/blood_pressure/kd723"}},p={},d=[{value:"WorkFlow",id:"workflow",level:2},{value:"Connection to device",id:"connection-to-device",level:2},{value:"1.Listen to device notify",id:"1listen-to-device-notify",level:3},{value:"2.Scan for KN-550BT devices",id:"2scan-for-kn-550bt-devices",level:3},{value:"3.Connect to KN-550BT devices",id:"3connect-to-kn-550bt-devices",level:3},{value:"API reference",id:"api-reference",level:2},{value:"Get the device battery",id:"get-the-device-battery",level:3},{value:"Get the number of history data",id:"get-the-number-of-history-data",level:3},{value:"Get history data",id:"get-history-data",level:3},{value:"Set locat time to KN-550BT",id:"set-locat-time-to-kn-550bt",level:3},{value:"Get the KN-550BT display status",id:"get-the-kn-550bt-display-status",level:3},{value:"Set the KN-550BT display status",id:"set-the-kn-550bt-display-status",level:3},{value:"Disconnect KN-550BT device",id:"disconnect-kn-550bt-device",level:3}],v={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"workflow"},"WorkFlow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scan and connect KN-550BT blood pressure monitor.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"KN-550BT only support offline measurement."))),(0,i.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,i.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { }\n\n    @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData){ }\n\n    @Override\n    public void onScanError(String reason, long latency) { }\n\n    @Override\n    public void onScanFinish() { }\n\n    @Override\n    public void onDeviceNotify(String mac, String deviceType,\n                                String action, String message) { }\n}\nint callbackId = iHealthDevicesManager.getInstance().registerClientCallback(miHealthDevicesCallback);\niHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_550BT);\niHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)\n")),(0,i.kt)("h3",{id:"2scan-for-kn-550bt-devices"},"2.Scan for KN-550BT devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.BP550BT);\n")),(0,i.kt)("h3",{id:"3connect-to-kn-550bt-devices"},"3.Connect to KN-550BT devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_550BT)\n\nBp550BTControl control = iHealthDevicesManager.getInstance().getBp550BTControl(mDeviceMac);\n')),(0,i.kt)("h2",{id:"api-reference"},"API reference"),(0,i.kt)("h3",{id:"get-the-device-battery"},"Get the device battery"),(0,i.kt)("p",null,"The KN-550BT doesn't support this feature above firmware 2.0.0 or later."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp550BTControl control = iHealthDevicesManager.getInstance().getBp550BTControl(mDeviceMac);\ncontrol.getBattery();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_BATTERY_BP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int battery = obj.getInt(BpProfile.BATTERY_BP);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"get-the-number-of-history-data"},"Get the number of history data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp550BTControl control = iHealthDevicesManager.getInstance().getBp550BTControl(mDeviceMac);\ncontrol.getOfflineNum();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_HISTORICAL_NUM_BP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int count = obj.getInt(BpProfile.HISTORICAL_NUM_BP);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"get-history-data"},"Get history data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp550BTControl control = iHealthDevicesManager.getInstance().getBp550BTControl(mDeviceMac);\ncontrol.getOfflineData();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_HISTORICAL_NUM_BP.equals(action)) {\n            try {\n                JSONArray historyArr = new JSONArray(message);\n                for (int i = 0; i < historyArr.length(); i++) {\n                    JSONObject obj = historyArr.getJSONObject(i);\n                    String time = obj.getString(BpProfile.MEASUREMENT_DATE_BP);\n                    int sys = obj.getInt(BpProfile.HIGH_BLOOD_PRESSURE_BP)\n                    int dia = obj.getInt(BpProfile.LOW_BLOOD_PRESSURE_BP)\n                    int heartRate = obj.getInt(BpProfile.PULSE_BP)\n                    int ahr = obj.getInt(BpProfile.MEASUREMENT_AHR_BP)\n                    int hsd = obj.getInt(BpProfile.MEASUREMENT_HSD_BP)\n\n                }\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"set-locat-time-to-kn-550bt"},"Set locat time to KN-550BT"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp550BTControl control = iHealthDevicesManager.getInstance().getBp550BTControl(mDeviceMac);\ncontrol.getFunctionInfo();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_FUNCTION_INFORMATION_BP.equals(action)) {\n            try {\n               JSONObject obj = new JSONObject(message);\n               Boolean upAirMeasureFlg    = obj.getBoolean(BpProfile.FUNCTION_IS_UPAIR_MEASURE);\n               Boolean armMeasureFlg      = obj.getBoolean(BpProfile.FUNCTION_IS_ARM_MEASURE);\n               Boolean haveAngleSensorFlg = obj.getBoolean(BpProfile.FUNCTION_HAVE_ANGLE_SENSOR);\n               Boolean haveOfflineFlg     = obj.getBoolean(BpProfile.FUNCTION_HAVE_OFFLINE);\n               Boolean haveHSDFlg         = obj.getBoolean(BpProfile.FUNCTION_HAVE_HSD);\n               Boolean haveAngleSetFlg    = obj.getBoolean(BpProfile.FUNCTION_HAVE_ANGLE_SETTING);\n               Boolean mutableUploadFlg   = obj.getBoolean(BpProfile.FUNCTION_IS_MULTI_UPLOAD);\n               Boolean selfUpdateFlg      = obj.getBoolean(BpProfile.FUNCTION_HAVE_SELF_UPDATE);\n            } catch(JSONException e) {\n                e.printStackTrace();\n            }\n        } \n    } \n}\n")),(0,i.kt)("h3",{id:"get-the-kn-550bt-display-status"},"Get the KN-550BT display status"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp550BTControl control = iHealthDevicesManager.getInstance().getBp550BTControl(mDeviceMac);\ncontrol.getStatusOfDisplay();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_SHOW_CONFIG_BP.equals(action)) {\n            try {\n               JSONObject obj = new JSONObject(message);\n               Boolean isBackLightOn = obj.getBoolean(BpProfile.IS_BACKLIGHT_ON_BP);\n               Boolean isClockOn     = obj.getBoolean(BpProfile.IS_CLOCK_ON_BP);\n               \n            } catch(JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"set-the-kn-550bt-display-status"},"Set the KN-550BT display status"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp550BTControl control = iHealthDevicesManager.getInstance().getBp550BTControl(mDeviceMac);\ncontrol.getStatusOfDisplay();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_SET_STATUS_DISPLAY_SUCCESS.equals(action)) {\n            Log.i("set display success");\n        }\n    } \n}\n')),(0,i.kt)("h3",{id:"disconnect-kn-550bt-device"},"Disconnect KN-550BT device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp550BTControl control = iHealthDevicesManager.getInstance().getBp550BTControl(mDeviceMac);\ncontrol.disconnect();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n     @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData) { \n        if (iHealthDevicesManager.DEVICE_STATE_DISCONNECTED == status) {\n            Log.i("The device is disconnected");\n        }\n    }\n}\n')))}u.isMDXComponent=!0}}]);