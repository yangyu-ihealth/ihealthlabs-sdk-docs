"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[386],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=r,S=d["".concat(c,".").concat(g)]||d[g]||p[g]||i;return n?a.createElement(S,o(o({ref:t},u),{},{components:n})):a.createElement(S,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2309:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"HS6",sidebar_position:7},c=void 0,s={unversionedId:"scale/hs6",id:"version-2.9.8/scale/hs6",isDocsHomePage:!1,title:"HS6",description:"WorkFlow",source:"@site/android_versioned_docs/version-2.9.8/scale/hs6.md",sourceDirName:"scale",slug:"/scale/hs6",permalink:"/ihealthlabs-sdk-docs/android/2.9.8/scale/hs6",editUrl:"https://github.com/chenxuewei-ihealth/ihealthlabs-sdk-docs/tree/main/android_versioned_docs/version-2.9.8/scale/hs6.md",tags:[],version:"2.9.8",sidebarPosition:7,frontMatter:{title:"HS6",sidebar_position:7},sidebar:"version-2.9.9/mainSidebar",previous:{title:"HS5S",permalink:"/ihealthlabs-sdk-docs/android/2.9.8/scale/hs5s"},next:{title:"BG1",permalink:"/ihealthlabs-sdk-docs/android/2.9.8/blood_glucose/bg1"}},u=[{value:"WorkFlow",id:"workflow",children:[]},{value:"API reference",id:"api-reference",children:[{value:"Set the wifi information to the scale(Bluetooth)",id:"set-the-wifi-information-to-the-scalebluetooth",children:[]},{value:"Bind the user with HS6 scale",id:"bind-the-user-with-hs6-scale",children:[]},{value:"UnBind the user with HS6 scale",id:"unbind-the-user-with-hs6-scale",children:[]},{value:"Get AccessToken of HS6 user",id:"get-accesstoken-of-hs6-user",children:[]},{value:"Set unit of HS6 Scale",id:"set-unit-of-hs6-scale",children:[]},{value:"Get data of HS6 user",id:"get-data-of-hs6-user",children:[]}]}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"workflow"},"WorkFlow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The HS6 is Wifi body fat scale. If you've already set up wifi information, please jump to step 2. If you need to set wifi information, please call the setWifi.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Call funtion "setWifi" for setting wifi information to HS6 scale.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"HS6 scale is based on Cloud, so it only support offline measurement."))),(0,i.kt)("h2",{id:"api-reference"},"API reference"),(0,i.kt)("h3",{id:"set-the-wifi-information-to-the-scalebluetooth"},"Set the wifi information to the scale(Bluetooth)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Hs6Control control = iHealthDevicesManager.getInstance().getHs5ControlForBt(mDeviceMac);\ncontrol.setWifi(String ssid, String password);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Return value\nprivate iHealthDeviceHs6Callback mIHealthDeviceHs6Callback = new iHealthDeviceHs6Callback() {\n    @Override\n    public void setWifiNotify(String Type, String action, String message) {\n        if (action.equals(HS6Control.ACTION_HS6_SETWIFI)) {\n           JSONTokener jsonTokener = new JSONTokener(message);\n            JSONObject jsonObject;\n            try {\n                    jsonObject = (JSONObject) jsonTokener.nextValue();\n                    boolean result = jsonObject.getBoolean(HS6Control.SETWIFI_RESULT);\n                    Log.d(TAG, "Set Wifi Result:" + result);\n                } catch (JSONException e) {\n                    e.printStackTrace();\n                }\n        }\n    } \n}\n')),(0,i.kt)("h3",{id:"bind-the-user-with-hs6-scale"},"Bind the user with HS6 scale"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Hs6Control control = iHealthDevicesManager.getInstance().getHs6Control(mDeviceMac);\n/**\n * @param birthday     format like yyyy-MM-dd HH:mm:ss\n * @param height       the unit is cm\n * @param weight       the unit is kg\n * @param isSporter    is sporter; 2 is not ;3 unknown\n * @param gender       0 is male ;1 is female\n * @param serialNumber the mac address of the scale\n */\ncontrol.bindDeviceHS6(String birthday, float weight, int height, int isSporter, int gender, String serialNumber)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onNotify(String mac, String deviceType, String action, String message) {\n        if (HS6Control.ACTION_HS6_BIND.equals(action)) {\n            try {\n                JSONObject jsonObject = (JSONObject) jsonTokener.nextValue();\n                JSONArray jsonArray = jsonObject.getJSONArray(HS6Control.HS6_BIND_EXTRA);\n                for (int i = 0; i < jsonArray.length(); i++) {\n                    JSONObject jsonObject2 = (JSONObject) jsonArray.get(i);\n                    int result = jsonObject2.getInt(HS6Control.BIND_HS6_RESULT);\n                    String model = jsonObject2.getString(HS6Control.HS6_MODEL);\n                    int position = jsonObject2.getInt(HS6Control.HS6_POSITION);\n                    int settedWifi = jsonObject2.getInt(HS6Control.HS6_SETTED_WIFI);\n                    if (result == 1) {\n                        Log.i("bind success");\n                    } else if (result == 2) {\n                        Log.i("the scale has no empty positions");\n                    } else {\n                        Log.i("bind fail");\n                    }\n                }\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } \n    }\n}\n')),(0,i.kt)("h3",{id:"unbind-the-user-with-hs6-scale"},"UnBind the user with HS6 scale"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Hs6Control control = iHealthDevicesManager.getInstance().getHs6Control(mDeviceMac);\n/**\n * @param serialNumber the mac address of scale\n */\ncontrol.unBindDeviceHS6(String serialNumber)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onNotify(String mac, String deviceType, String action, String message) {\n        if (HS6Control.ACTION_HS6_UNBIND.equals(action)) {\n            try {\n                JSONObject jsonObject = (JSONObject) jsonTokener.nextValue();\n                 boolean result = jsonObject.getBoolean(HS6Control.HS6_UNBIND_RESULT);\n                Log.d(TAG, "UnBind result:" + result);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } \n    }\n}\n')),(0,i.kt)("h3",{id:"get-accesstoken-of-hs6-user"},"Get AccessToken of HS6 user"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Hs6Control control = iHealthDevicesManager.getInstance().getHs6Control(mDeviceMac);\n/**\n * @param clientId     the identification of the SDK        If you don't assign a value to this parameter, let's use the default clientId.\n * @param clientSecret the identification of the SDK        If you don't assign a value to this parameter, let's use the default clientSecret.\n * @param username     the identification of the user\n * @param clientPara   a random string,return back without change\n*/\ncontrol.getToken(String clientId, String clientSecret, String username, String clientPara)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onNotify(String mac, String deviceType, String action, String message) {\n        if (HS6Control.ACTION_HS6_GET_TOKEN.equals(action)) {\n            try {\n                JSONObject jsonObject = (JSONObject) jsonTokener.nextValue();\n                String result = jsonObject.getString(HS6Control.GET_TOKEN_RESULT);\n                Log.d(TAG, "Get Token result:" + result);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } \n    }\n}\n')),(0,i.kt)("h3",{id:"set-unit-of-hs6-scale"},"Set unit of HS6 Scale"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Hs6Control control = iHealthDevicesManager.getInstance().getHs6Control(mDeviceMac);\n/**\n * @param username the identification of the user\n * @param unitType the unit type\n *                 <p>0 Kg\n *                 <p>1 lbs\n *                 <p>2 st\n */\ncontrol.setUnit(String username, int unitType);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onNotify(String mac, String deviceType, String action, String message) {\n        if (HS6Control.ACTION_HS6_SET_UNIT.equals(action)) {\n            try {\n                JSONObject jsonObject = (JSONObject) jsonTokener.nextValue();\n                int result = jsonObject.getInt(HS6Control.SET_UNIT_RESULT);\n                Log.d(TAG, "Scale unit: " + result);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } \n    }\n}\n')),(0,i.kt)("h3",{id:"get-data-of-hs6-user"},"Get data of HS6 user"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Hs6Control control = iHealthDevicesManager.getInstance().getHs6Control(mDeviceMac);\n/**\n * @param clientId     the identification of the SDK\n * @param clientSecret the identification of the SDK\n * @param username     the identification of the user\n * @param downloadTS   the time offset of this operation\n */\ncontrol.getDataFromCloud(String clientId, String clientSecret, String username, long downloadTS);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onNotify(String mac, String deviceType, String action, String message) {\n        if (HS6Control.ACTION_HS6_GET_DATA.equals(action)) {\n            try {\n                JSONObject jsonObject = (JSONObject) jsonTokener.nextValue();\n                long left_number = jsonObject.getLong(HS6Control.DATA_LEFTNUMBER);\n                long download_ts = jsonObject.getLong(HS6Control.DATA_DOWNLOAD_TS);\n                JSONArray arr = jsonObject.getInt(HS6Control.DATA_RESULT);\n                for (int i = 0; i < arr.length(); i++) { \n                    JSONObject resultObj = arr.get(i);\n                }\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } \n    }\n}\n")))}d.isMDXComponent=!0}}]);