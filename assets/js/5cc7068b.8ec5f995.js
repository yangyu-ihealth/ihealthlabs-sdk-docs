"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[2362],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return v}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),v=r,g=u["".concat(l,".").concat(v)]||u[v]||d[v]||i;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5995:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],c={title:"BP7",sidebar_position:4},l=void 0,s={unversionedId:"blood_pressure/bp7",id:"version-2.9.9/blood_pressure/bp7",isDocsHomePage:!1,title:"BP7",description:"WorkFlow",source:"@site/android_versioned_docs/version-2.9.9/blood_pressure/bp7.md",sourceDirName:"blood_pressure",slug:"/blood_pressure/bp7",permalink:"/ihealthlabs-sdk-docs/android/blood_pressure/bp7",editUrl:"https://github.com/chenxuewei-ihealth/ihealthlabs-sdk-docs/tree/main/android_versioned_docs/version-2.9.9/blood_pressure/bp7.md",tags:[],version:"2.9.9",sidebarPosition:4,frontMatter:{title:"BP7",sidebar_position:4},sidebar:"version-2.9.9/mainSidebar",previous:{title:"BP5S",permalink:"/ihealthlabs-sdk-docs/android/blood_pressure/bp5s"},next:{title:"BP7S",permalink:"/ihealthlabs-sdk-docs/android/blood_pressure/bp7s"}},p=[{value:"WorkFlow",id:"workflow",children:[]},{value:"Connection to device",id:"connection-to-device",children:[{value:"1.Listen to device notify",id:"1listen-to-device-notify",children:[]},{value:"2.Scan for BP7 devices",id:"2scan-for-bp7-devices",children:[]},{value:"3.Connect to BP7 devices",id:"3connect-to-bp7-devices",children:[]}]},{value:"API reference",id:"api-reference",children:[{value:"Get the device battery",id:"get-the-device-battery",children:[]},{value:"Enable BP7 to be measured offline",id:"enable-bp7-to-be-measured-offline",children:[]},{value:"Disable BP7 to be measured offline",id:"disable-bp7-to-be-measured-offline",children:[]},{value:"Get the number of history data",id:"get-the-number-of-history-data",children:[]},{value:"Get history data",id:"get-history-data",children:[]},{value:"Start a measurement",id:"start-a-measurement",children:[]},{value:"Stop measurement",id:"stop-measurement",children:[]},{value:"Disconnect Bp7 device",id:"disconnect-bp7-device",children:[]}]}],d={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"workflow"},"WorkFlow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scan and connect BP7 blood pressure monitor.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"BP7 support online measurement and offline measurement."))),(0,i.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,i.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { }\n\n    @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData){ }\n\n    @Override\n    public void onScanError(String reason, long latency) { }\n\n    @Override\n    public void onScanFinish() { }\n\n    @Override\n    public void onDeviceNotify(String mac, String deviceType,\n                                String action, String message) { }\n}\nint callbackId = iHealthDevicesManager.getInstance().registerClientCallback(miHealthDevicesCallback);\niHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_BP7);\niHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)\n")),(0,i.kt)("h3",{id:"2scan-for-bp7-devices"},"2.Scan for BP7 devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.BP7);\n")),(0,i.kt)("h3",{id:"3connect-to-bp7-devices"},"3.Connect to BP7 devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_BP7)\n\nBp7Control control = iHealthDevicesManager.getInstance().getBp7Control(mDeviceMac);\n')),(0,i.kt)("h2",{id:"api-reference"},"API reference"),(0,i.kt)("h3",{id:"get-the-device-battery"},"Get the device battery"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp7Control control = iHealthDevicesManager.getInstance().getBp7Control(mDeviceMac);\ncontrol.getBattery();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_BATTERY_BP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int battery = obj.getInt(BpProfile.BATTERY_BP);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"enable-bp7-to-be-measured-offline"},"Enable BP7 to be measured offline"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp7Control control = iHealthDevicesManager.getInstance().getBp7Control(mDeviceMac);\ncontrol.enableOffline();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_ENABLE_OFFLINE_BP.equals(action)) {\n            \n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"disable-bp7-to-be-measured-offline"},"Disable BP7 to be measured offline"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp7Control control = iHealthDevicesManager.getInstance().getBp7Control(mDeviceMac);\ncontrol.disableOfflineMeasure();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_DISENABLE_OFFLINE_BP.equals(action)) {\n           \n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"get-the-number-of-history-data"},"Get the number of history data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp7Control control = iHealthDevicesManager.getInstance().getBp7Control(mDeviceMac);\ncontrol.getOfflineNum();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_HISTORICAL_NUM_BP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int count = obj.getInt(BpProfile.HISTORICAL_NUM_BP);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"get-history-data"},"Get history data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp7Control control = iHealthDevicesManager.getInstance().getBp7Control(mDeviceMac);\ncontrol.getOfflineData();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_HISTORICAL_NUM_BP.equals(action)) {\n            try {\n                JSONArray historyArr = new JSONArray(message);\n                for (int i = 0; i < historyArr.length(); i++) {\n                    JSONObject obj = historyArr.getJSONObject(i);\n                    String dateStr = obj.getString(BpProfile.MEASUREMENT_DATE_BP);\n                    int sys = obj.getString(BpProfile.HIGH_BLOOD_PRESSURE_BP);\n                    int dia = obj.getString(BpProfile.LOW_BLOOD_PRESSURE_BP);\n                    int pulse = obj.getString(BpProfile.PULSE_BP);\n                    int ahr = obj.getString(BpProfile.MEASUREMENT_AHR_BP);\n                    int hsd = obj.getString(BpProfile.MEASUREMENT_HSD_BP);\n              \n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"start-a-measurement"},"Start a measurement"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp7Control control = iHealthDevicesManager.getInstance().getBp7Control(mDeviceMac);\ncontrol.startMeasure();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_ANGLE_BP.equals(action)) {\n            try {\n                int arm = obj.getInt(BpProfile.WHICH_ARM);\n                int angle = obj.getInt(BpProfile.ANGLE_BP);\n                if (angle < 30) {\n                    control.conformAngle();\n                }\n            } catch(JSONException e) {\n                e.printStackTrace();\n            }\n        } else if (BpProfile.ACTION_ZOREING_BP.equals(action)) {\n           \n        } else if (BpProfile.ACTION_ZOREOVER_BP.equals(action)) {\n            \n        } else if (BpProfile.ACTION_ONLINE_PRESSURE_BP.equals(action)) {\n            try {\n                int pressure = obj.getInt(BpProfile.BLOOD_PRESSURE_BP);\n            } catch(JSONException e) {\n                e.printStackTrace();\n            }\n            \n        } else if (BpProfile.ACTION_ONLINE_PULSEWAVE_BP.equals(action)) {\n            try {\n               JSONObject obj = new JSONObject(message);\n               int pressure = obj.getInt(BpProfile.BLOOD_PRESSURE_BP);\n               Sting wave = obj.getString(BpProfile.PULSEWAVE_BP);\n               Boolean heartbeat = obj.getBoolean(BpProfile.FLAG_HEARTBEAT_BP);\n            } catch(JSONException e) {\n                e.printStackTrace();\n            }\n            \n        } else if (BpProfile.ACTION_ONLINE_RESULT_BP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int highBloodPressure = obj.getInt(BpProfile.HIGH_BLOOD_PRESSURE_BP);\n                int lowBloodPressure  = obj.getInt(BpProfile.LOW_BLOOD_PRESSURE_BP);\n                int pulse = obj.getInt(BpProfile.PULSE_BP);\n                int ahr   = obj.getBoolean(BpProfile.MEASUREMENT_AHR_BP);\n                int hsd   = obj.getBoolean(BpProfile.MEASUREMENT_HSD_BP);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } \n    } \n}\n")),(0,i.kt)("h3",{id:"stop-measurement"},"Stop measurement"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp7Control control = iHealthDevicesManager.getInstance().getBp7Control(mDeviceMac);\ncontrol.interruptMeasure();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_INTERRUPTED_BP.equals(action)) {\n            \n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"disconnect-bp7-device"},"Disconnect Bp7 device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp7Control control = iHealthDevicesManager.getInstance().getBp7Control(mDeviceMac);\ncontrol.disconnect();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData) { \n        if (iHealthDevicesManager.DEVICE_STATE_DISCONNECTED == status) {\n            Log.i("The device is disconnected");\n        }\n    }\n}\n')))}u.isMDXComponent=!0}}]);