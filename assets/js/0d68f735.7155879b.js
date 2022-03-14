"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[3431],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return v}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),v=i,d=u["".concat(c,".").concat(v)]||u[v]||g[v]||o;return t?a.createElement(d,r(r({ref:n},p),{},{components:t})):a.createElement(d,r({ref:n},p))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},64334:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var a=t(87462),i=t(63366),o=(t(67294),t(3905)),r=["components"],l={title:"BP5S",sidebar_position:3},c=void 0,s={unversionedId:"blood_pressure/bp5s",id:"version-2.9.9/blood_pressure/bp5s",isDocsHomePage:!1,title:"BP5S",description:"WorkFlow",source:"@site/android_versioned_docs/version-2.9.9/blood_pressure/bp5s.md",sourceDirName:"blood_pressure",slug:"/blood_pressure/bp5s",permalink:"/android/blood_pressure/bp5s",editUrl:"https://github.com/chenxuewei-ihealth/ihealthlabs-sdk-docs/tree/main/android_versioned_docs/version-2.9.9/blood_pressure/bp5s.md",tags:[],version:"2.9.9",sidebarPosition:3,frontMatter:{title:"BP5S",sidebar_position:3},sidebar:"version-2.9.9/mainSidebar",previous:{title:"BP5",permalink:"/android/blood_pressure/bp5"},next:{title:"BP7",permalink:"/android/blood_pressure/bp7"}},p=[{value:"WorkFlow",id:"workflow",children:[]},{value:"Connection to device",id:"connection-to-device",children:[{value:"1.Listen to device notify",id:"1listen-to-device-notify",children:[]},{value:"2.Scan for BP5S devices",id:"2scan-for-bp5s-devices",children:[]},{value:"3.Connect to BP5S devices",id:"3connect-to-bp5s-devices",children:[]}]},{value:"API reference",id:"api-reference",children:[{value:"Get the device battery",id:"get-the-device-battery",children:[]},{value:"Get function of BP5S device",id:"get-function-of-bp5s-device",children:[]},{value:"Set the BP5S mode",id:"set-the-bp5s-mode",children:[]},{value:"Set the BP5S display unit",id:"set-the-bp5s-display-unit",children:[]},{value:"Get the number of history data",id:"get-the-number-of-history-data",children:[]},{value:"Get history data",id:"get-history-data",children:[]},{value:"Start a measurement",id:"start-a-measurement",children:[]},{value:"Stop measurement",id:"stop-measurement",children:[]},{value:"Disconnect BP5S device",id:"disconnect-bp5s-device",children:[]}]}],g={toc:p};function u(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"workflow"},"WorkFlow"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scan and connect BP5S blood pressure monitor.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"BP5S support online measurement and offline measurement."))),(0,o.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,o.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { }\n\n    @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData){ }\n\n    @Override\n    public void onScanError(String reason, long latency) { }\n\n    @Override\n    public void onScanFinish() { }\n\n    @Override\n    public void onDeviceNotify(String mac, String deviceType,\n                                String action, String message) { }\n}\nint callbackId = iHealthDevicesManager.getInstance().registerClientCallback(miHealthDevicesCallback);\niHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_BP5S);\niHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)\n")),(0,o.kt)("h3",{id:"2scan-for-bp5s-devices"},"2.Scan for BP5S devices"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.BP5S);\n")),(0,o.kt)("h3",{id:"3connect-to-bp5s-devices"},"3.Connect to BP5S devices"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_BP5S)\n\nBp5sControl control = iHealthDevicesManager.getInstance().getBp5sControl(mDeviceMac);\n')),(0,o.kt)("h2",{id:"api-reference"},"API reference"),(0,o.kt)("h3",{id:"get-the-device-battery"},"Get the device battery"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Bp5sControl control = iHealthDevicesManager.getInstance().getBp5sControl(mDeviceMac);\ncontrol.getBattery();\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_BATTERY_BP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int battery = obj.getInt(BpProfile.BATTERY_BP);\n                int status = obj.getInt(BpProfile.BATTERY_STATUS);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,o.kt)("h3",{id:"get-function-of-bp5s-device"},"Get function of BP5S device"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Bp5sControl control = iHealthDevicesManager.getInstance().getBp5sControl(mDeviceMac);\ncontrol.getFunctionInfo();\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_FUNCTION_INFORMATION_BP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int lastOperationStatus     = obj.getInt(BpProfile.FUNCTION_OPERATING_STATE);\n                boolean upAirMeasureFlg     = obj.getBoolean(BpProfile.FUNCTION_IS_UPAIR_MEASURE);\n                boolean armMeasureFlg       = obj.getBoolean(BpProfile.FUNCTION_IS_ARM_MEASURE);\n                boolean haveAngleSensorFlg  = obj.getBoolean(BpProfile.FUNCTION_HAVE_ANGLE_SENSOR);\n                boolean havePowerOffFlg     = obj.getBoolean(BpProfile.FUNCTION_HAVE_POWER_OFF);\n                boolean haveOfflineFlg      = obj.getBoolean(BpProfile.FUNCTION_HAVE_OFFLINE);\n                boolean userCanDeleteMemoryFlg = obj.getBoolean(BpProfile.FUNCTION_USER_CAN_DELETE_MEMORY);\n                boolean haveHSDFlg             = obj.getBoolean(BpProfile.FUNCTION_HAVE_HSD);\n                boolean haveBodyMovementFlg    = obj.getBoolean(BpProfile.FUNCTION_HAVE_BODY_MOVEMENT);\n                boolean memoryGroup            = obj.getBoolean(BpProfile.FUNCTION_MEMORY_GROUP);\n                \n                boolean haveReconnectFlg = obj.getBoolean(BpProfile.FUNCTION_HAVE_RECONNECT);\n                boolean ReonnectOpenFlg  = obj.getBoolean(BpProfile.FUNCTION_RECONNECT_OPEN);\n\n                boolean haveOfflineMeasureSettingFlg = obj.getBoolean(BpProfile.FUNCTION_HAVE_MEASURE_OFFLINE);\n                boolean OfflineMeasureOpenFlg        = obj.getBoolean(BpProfile.FUNCTION_MEASURE_OFFLINE_OPEN);\n                boolean haveUnitSettingFlg           = obj.getBoolean(BpProfile.FUNCTION_HAVE_SHOW_UNIT_SETTING);\n                boolean unitSettingFlg               = obj.getBoolean(BpProfile.FUNCTION_SHOW_UNIT);\n                boolean blueToothOpenFlg             = obj.getBoolean(BpProfile.FUNCTION_BLUETOOTH_OPEN_MODE);\n                boolean ifABIFlg                     = obj.getBoolean(BpProfile.FUNCTION_IF_ABI_MACHINE);\n                boolean upperOrLowerMachineFlg       = obj.getBoolean(BpProfile.FUNCTION_LOWER_OR_UPPER_MACHINE);\n                boolean limbsSimultaneousMeasureFlg  = obj.getBoolean(BpProfile.FUNCTION_LIMBS_SIMULTANEOUS_MEASURE);\n                boolean leftOrRightMachineFlg        = obj.getBoolean(BpProfile.FUNCTION_LEFT_OR_RIGHT_LIMB_MACHINE);\n\n                int maxMemoryCapacity = obj.getInt(BpProfile.FUNCTION_MAX_MEMORY_CAPACITY);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,o.kt)("h3",{id:"set-the-bp5s-mode"},"Set the BP5S mode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Bp5sControl control = iHealthDevicesManager.getInstance().getBp5sControl(mDeviceMac);\n/**\n * BpProfile.STATUS_MODE_TO_B: On-line measurement only, connecting bluetooth manually.\n * BpProfile.STATUS_MODE_TO_C: On-line and off-line measurement,connecting bluetooth often.\n */\ncontrol.setMode(int mode);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_SET_MODE.equals(action)) {\n            \n        }\n    } \n}\n")),(0,o.kt)("h3",{id:"set-the-bp5s-display-unit"},"Set the BP5S display unit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Bp5sControl control = iHealthDevicesManager.getInstance().getBp5sControl(mDeviceMac);\n/**\n * BpProfile.STATUS_UNIT_DISPLAY_MMHG\n * BpProfile.STATUS_UNIT_DISPLAY_KPA\n */\ncontrol.setUnitDisplay(int type);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_SHOW_UNIT_DISPLAY.equals(action)) {\n            \n        }\n    } \n}\n")),(0,o.kt)("h3",{id:"get-the-number-of-history-data"},"Get the number of history data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Bp5sControl control = iHealthDevicesManager.getInstance().getBp5sControl(mDeviceMac);\ncontrol.getOfflineNum();\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_HISTORICAL_NUM_BP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int count = obj.getInt(BpProfile.HISTORICAL_NUM_BP);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,o.kt)("h3",{id:"get-history-data"},"Get history data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Bp5sControl control = iHealthDevicesManager.getInstance().getBp5sControl(mDeviceMac);\ncontrol.getOfflineData();\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_HISTORICAL_NUM_BP.equals(action)) {\n            try {\n                JSONArray historyArr = new JSONArray(message);\n                for (int i = 0; i < historyArr.length(); i++) {\n                    JSONObject obj = historyArr.getJSONObject(i);\n                    String dateStr = obj.getString(BpProfile.MEASUREMENT_DATE_BP);\n                    int sys = obj.getString(BpProfile.HIGH_BLOOD_PRESSURE_BP);\n                    int dia = obj.getString(BpProfile.LOW_BLOOD_PRESSURE_BP);\n                    int pulse = obj.getString(BpProfile.PULSE_BP);\n                    int ahr = obj.getString(BpProfile.MEASUREMENT_AHR_BP);\n                    int hsd = obj.getString(BpProfile.MEASUREMENT_HSD_BP);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,o.kt)("h3",{id:"start-a-measurement"},"Start a measurement"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Bp5sControl control = iHealthDevicesManager.getInstance().getBp5sControl(mDeviceMac);\ncontrol.startMeasure();\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_ZOREING_BP.equals(action)) {\n           \n        } else if (BpProfile.ACTION_ZOREOVER_BP.equals(action)) {\n            \n        } else if (BpProfile.ACTION_ONLINE_PRESSURE_BP.equals(action)) {\n            try {\n                int pressure = obj.getInt(BpProfile.BLOOD_PRESSURE_BP);\n            } catch(JSONException e) {\n                e.printStackTrace();\n            }\n            \n        } else if (BpProfile.ACTION_ONLINE_PULSEWAVE_BP.equals(action)) {\n            try {\n               JSONObject obj = new JSONObject(message);\n               int pressure = obj.getInt(BpProfile.BLOOD_PRESSURE_BP);\n               Sting wave = obj.getString(BpProfile.PULSEWAVE_BP);\n               Boolean heartbeat = obj.getBoolean(BpProfile.FLAG_HEARTBEAT_BP);\n            } catch(JSONException e) {\n                e.printStackTrace();\n            }\n            \n        } else if (BpProfile.ACTION_ONLINE_RESULT_BP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int highBloodPressure = obj.getInt(BpProfile.HIGH_BLOOD_PRESSURE_BP);\n                int lowBloodPressure  = obj.getInt(BpProfile.LOW_BLOOD_PRESSURE_BP);\n                int pulse = obj.getInt(BpProfile.PULSE_BP);\n                int ahr   = obj.getBoolean(BpProfile.MEASUREMENT_AHR_BP);\n                int hsd   = obj.getBoolean(BpProfile.MEASUREMENT_HSD_BP);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } \n    } \n}\n")),(0,o.kt)("h3",{id:"stop-measurement"},"Stop measurement"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Bp5sControl control = iHealthDevicesManager.getInstance().getBp5sControl(mDeviceMac);\ncontrol.getDeviceInfo();\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_INTERRUPTED_BP.equals(action)) {\n            \n        }\n    } \n}\n")),(0,o.kt)("h3",{id:"disconnect-bp5s-device"},"Disconnect BP5S device"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Bp5sControl control = iHealthDevicesManager.getInstance().getBp5sControl(mDeviceMac);\ncontrol.disconnect();\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n     @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData) { \n        \n    }\n}\n")))}u.isMDXComponent=!0}}]);