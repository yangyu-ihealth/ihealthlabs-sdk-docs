"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[1484],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return v}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=s(t),v=i,m=u["".concat(c,".").concat(v)]||u[v]||d[v]||r;return t?a.createElement(m,o(o({ref:n},g),{},{components:t})):a.createElement(m,o({ref:n},g))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},11817:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return g}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],l={title:"BG5S",sidebar_position:4},c=void 0,s={unversionedId:"blood_glucose/bg5s",id:"version-2.7.7/blood_glucose/bg5s",isDocsHomePage:!1,title:"BG5S",description:"WorkFlow",source:"@site/ios_versioned_docs/version-2.7.7/blood_glucose/bg5s.md",sourceDirName:"blood_glucose",slug:"/blood_glucose/bg5s",permalink:"/ios/blood_glucose/bg5s",editUrl:"https://github.com/chenxuewei-ihealth/ihealthlabs-sdk-docs/tree/main/ios_versioned_docs/version-2.7.7/blood_glucose/bg5s.md",tags:[],version:"2.7.7",sidebarPosition:4,frontMatter:{title:"BG5S",sidebar_position:4},sidebar:"version-1.33.x/mainSidebar",previous:{title:"BG5",permalink:"/ios/blood_glucose/bg5"},next:{title:"PO1",permalink:"/ios/blood_oxygen/po1"}},g=[{value:"WorkFlow",id:"workflow",children:[]},{value:"Connection to device",id:"connection-to-device",children:[{value:"1.Listen to device notify",id:"1listen-to-device-notify",children:[]},{value:"2.Scan for BG5S devices",id:"2scan-for-bg5s-devices",children:[]},{value:"3.Connect to BG5S devices",id:"3connect-to-bg5s-devices",children:[]}]},{value:"API reference",id:"api-reference",children:[{value:"Get status information from BG5S",id:"get-status-information-from-bg5s",children:[]},{value:"Set offline measurement mode",id:"set-offline-measurement-mode",children:[]},{value:"Set time to BG5 device",id:"set-time-to-bg5-device",children:[]},{value:"Set unit to BG5S device",id:"set-unit-to-bg5s-device",children:[]},{value:"Set BG5S display mode",id:"set-bg5s-display-mode",children:[]},{value:"Delete used strip of BG5S",id:"delete-used-strip-of-bg5s",children:[]},{value:"Delete offline data of BG5S",id:"delete-offline-data-of-bg5s",children:[]},{value:"Get offline data from BG5S",id:"get-offline-data-from-bg5s",children:[]},{value:"Start measure",id:"start-measure",children:[]},{value:"Close Bluetooth",id:"close-bluetooth",children:[]},{value:"Correct the measurement time of the offline data according to the flag and return in format JSON String",id:"correct-the-measurement-time-of-the-offline-data-according-to-the-flag-and-return-in-format-json-string",children:[]}]}],d={toc:g};function u(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"workflow"},"WorkFlow"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scan and connect BG5S blood pressure monitor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"BG5S only support online measurement."))),(0,r.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,r.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { }\n\n    @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData){ }\n\n    @Override\n    public void onScanError(String reason, long latency) { }\n\n    @Override\n    public void onScanFinish() { }\n\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) { }\n}\nint callbackId = iHealthDevicesManager.getInstance().registerClientCallback(miHealthDevicesCallback);\niHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_BG5S);\niHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)\n")),(0,r.kt)("h3",{id:"2scan-for-bg5s-devices"},"2.Scan for BG5S devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.BG5S);\n")),(0,r.kt)("h3",{id:"3connect-to-bg5s-devices"},"3.Connect to BG5S devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_BG5S)\nBg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);\n')),(0,r.kt)("h2",{id:"api-reference"},"API reference"),(0,r.kt)("h3",{id:"get-status-information-from-bg5s"},"Get status information from BG5S"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);\ncontrol.getStatusInfo();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Bg5sProfile.ACTION_GET_STATUS_INFO.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int batteryLevel = obj.getInt(Bg5sProfile.INFO_BATTERY_LEVEL);\n                String timeStr = obj.getString(Bg5sProfile.INFO_TIME);\n                int timeZone = obj.getInt(Bg5sProfile.INFO_TIMEZONE);\n                int usedStrip = obj.getInt(Bg5sProfile.INFO_USED_STRIP);\n                int offlineDataNum = obj.getInt(Bg5sProfile.INFO_OFFLINE_DATA_NUM);\n                int mCodeVersionBlood = obj.getInt(Bg5sProfile.INFO_CODE_VERSION_BLOOD);\n                int mCodeVersionCTL = obj.getInt(Bg5sProfile.INFO_CODE_VERSION_CTL);\n                int unit = obj.getInt(Bg5sProfile.INFO_UNIT);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }    \n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"set-offline-measurement-mode"},"Set offline measurement mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);\ncontrol.getStatusInfo();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Bg5sProfile.ACTION_SET_OFFLINE_MEASUREMENT_MODE.equals(action)) { }\n    } \n}\n")),(0,r.kt)("h3",{id:"set-time-to-bg5-device"},"Set time to BG5 device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);\ncontrol.setTime(Date date, float timeZone);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Bg5sProfile.ACTION_SET_TIME.equals(action)) {\n           \n        } \n    } \n}\n")),(0,r.kt)("h3",{id:"set-unit-to-bg5s-device"},"Set unit to BG5S device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);\n/**\n * @param unitType the unit type set to BG5S. Can be one of\n *                 {@link Bg5sProfile#UNIT_MMOL}  or\n *                 {@link Bg5sProfile#UNIT_MG}\n */\ncontrol.setUnit(int type);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Bg5sProfile.ACTION_SET_UNIT.equals(action)) {\n            \n        } \n    } \n}\n")),(0,r.kt)("h3",{id:"set-bg5s-display-mode"},"Set BG5S display mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);\n/**\n * @param unitType the unit type set to BG5S. Can be one of\n *                 {@link Bg5sProfile#UNIT_MMOL}  or\n *                 {@link Bg5sProfile#UNIT_MG}\n */\ncontrol.setDisplayMode(boolean mode);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Bg5sProfile.ACTION_SET_DISPLAY_MODE.equals(action)) {\n           \n        } \n    } \n}\n")),(0,r.kt)("h3",{id:"delete-used-strip-of-bg5s"},"Delete used strip of BG5S"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);\ncontrol.deleteUsedStrip();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Bg5sProfile.ACTION_DELETE_USED_STRIP.equals(action)) {\n           \n        } \n    } \n}\n")),(0,r.kt)("h3",{id:"delete-offline-data-of-bg5s"},"Delete offline data of BG5S"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);\ncontrol.deleteOfflineData();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Bg5sProfile.ACTION_DELETE_USED_STRIP.equals(action)) {\n           \n        } \n    } \n}\n")),(0,r.kt)("h3",{id:"get-offline-data-from-bg5s"},"Get offline data from BG5S"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);\ncontrol.getOfflineData();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Bg5sProfile.ACTION_GET_OFFLINE_DATA.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                JSONArray historyArr = obj.getgetJSONArray(Bg5sProfile.OFFLINE_DATA);\n                for (int i = 0; i < historyArr.length(); i++) {\n                    JSONObject obj = historyArr.getJSONObject(i);\n                    boolean dateStr = obj.getBoolean(Bg5sProfile.DATA_TIME_PROOF);\n                    int value = obj.getString(Bg5sProfile.DATA_VALUE);\n                    String time = obj.getString(Bg5sProfile.DATA_MEASURE_TIME);\n                    String timezone = obj.getString(Bg5sProfile.DATA_MEASURE_TIMEZONE);\n                }\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"start-measure"},"Start measure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);\n/**\n * @param measureType the measure type set to BG5S.Can be one of\n *                    {@link Bg5sProfile#MEASURE_BLOOD}  or\n *                    {@link Bg5sProfile#MEASURE_CTL}\n */\ncontrol.startMeasure(int measureType);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Bg5sProfile.ACTION_START_MEASURE.equals(action)) {\n            \n        } else if (Bg5sProfile.ACTION_STRIP_IN.equals(action)) {\n\n        } else if (Bg5sProfile.ACTION_GET_BLOOD.equals(action)) {\n\n        } else if (Bg5sProfile.ACTION_RESULT.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int value = obj.getInt((Bg5sProfile.RESULT_VALUE);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } else if (Bg5sProfile.ACTION_STRIP_OUT.equals(action)) {\n\n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"close-bluetooth"},"Close Bluetooth"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);\ncontrol.closeBluetooth();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Bg5sProfile.ACTION_CLOSE_BLUETOOTH.equals(action)) {\n            \n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"correct-the-measurement-time-of-the-offline-data-according-to-the-flag-and-return-in-format-json-string"},"Correct the measurement time of the offline data according to the flag and return in format JSON String"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bg5Control control = iHealthDevicesManager.getInstance().getBg5Control(mDeviceMac);\n\n// Return value\nString message = control.adjustOfflineData(String timeString, String originData);\n")))}u.isMDXComponent=!0}}]);