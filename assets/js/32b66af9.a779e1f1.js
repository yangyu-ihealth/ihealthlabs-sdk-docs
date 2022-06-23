"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6223],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return p}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(t),p=o,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||a;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function p(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},408:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={title:"KN550",sidebar_position:6},s=void 0,l={unversionedId:"ios/blood_pressure/kn550",id:"ios/blood_pressure/kn550",title:"KN550",description:"WorkFlow",source:"@site/docs/ios/blood_pressure/kn550.md",sourceDirName:"ios/blood_pressure",slug:"/ios/blood_pressure/kn550",permalink:"/ihealthlabs-sdk-docs/docs/ios/blood_pressure/kn550",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ios/blood_pressure/kn550.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"KN550",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"BP7S",permalink:"/ihealthlabs-sdk-docs/docs/ios/blood_pressure/bp7s"},next:{title:"KD723",permalink:"/ihealthlabs-sdk-docs/docs/ios/blood_pressure/kd723"}},u={},d=[{value:"WorkFlow",id:"workflow",level:2},{value:"Connection to device",id:"connection-to-device",level:2},{value:"1.Listen to device notify",id:"1listen-to-device-notify",level:3},{value:"2.Scan for KN-550BT devices",id:"2scan-for-kn-550bt-devices",level:3},{value:"3.Connect to KN-550BT devices",id:"3connect-to-kn-550bt-devices",level:3},{value:"API reference",id:"api-reference",level:2},{value:"Get the device battery",id:"get-the-device-battery",level:3},{value:"Get the number of history data",id:"get-the-number-of-history-data",level:3},{value:"Get history data",id:"get-history-data",level:3},{value:"Set locat time to KN-550BT",id:"set-locat-time-to-kn-550bt",level:3},{value:"Get the KN-550BT display status",id:"get-the-kn-550bt-display-status",level:3},{value:"Set the KN-550BT display status",id:"set-the-kn-550bt-display-status",level:3},{value:"Disconnect KN-550BT device",id:"disconnect-kn-550bt-device",level:3}],m={toc:d};function p(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"workflow"},"WorkFlow"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Scan and connect KN-550BT blood pressure monitor.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"KN-550BT only support offline measurement."))),(0,a.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,a.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:KN550BTDiscover object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnectFail:) name:KN550BTConnectFailed object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:KN550BTConnectNoti object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:KN550BTDisConnectNoti object:nil];\n            \n[KN550BTController shareKN550BTController];\n")),(0,a.kt)("h3",{id:"2scan-for-kn-550bt-devices"},"2.Scan for KN-550BT devices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_KN550BT];\n")),(0,a.kt)("h3",{id:"3connect-to-kn-550bt-devices"},"3.Connect to KN-550BT devices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_KN550BT andSerialNub:deviceMac];\n")),(0,a.kt)("h2",{id:"api-reference"},"API reference"),(0,a.kt)("h3",{id:"get-the-device-battery"},"Get the device battery"),(0,a.kt)("p",null,"The KN-550BT doesn't support this feature above firmware 2.0.0 or later."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Query battery remaining energy.\n * @param energyValue  A block to return the device battery remaining energy percentage, \u201880\u2019 stands for 80%.\n * @param error  A block to return the error in \u2018Establish measurement connection\u2019\n */\n-(void)commandEnergy:(BlockEnergyValue)energyValue errorBlock:(BlockError)error;\n")),(0,a.kt)("h3",{id:"get-the-number-of-history-data"},"Get the number of history data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Upload offline data total Count.\n * @param  totalCount item quantity of total data.\n * @param error  A block to return the error.\n */\n-(void)commandTransferMemoryTotalCount:(BlockBachCount)totalCount errorBlock:(BlockError)error;\n")),(0,a.kt)("h3",{id:"get-history-data"},"Get history data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Upload offline data.\n * @param  totalCount item quantity of total data\n * @param  progress upload completion ratio , from 0.0 to 1.0 or 0%~100\uff05, 100% means upload completed.\n * @param  uploadDataArray    offline data set, including measurement time, systolic pressure, diastolic pressure, pulse rate, irregular judgment. corresponding KEYs are time, sys, dia, heartRate, irregular.\n * @param error   error codes.\n * Specification:\n *   1.  BPError0 = 0: Unable to take measurements due to arm/wrist movements.\n *   2.  BPError1:  Failed to detect systolic pressure.\n *   3.  BPError2:  Failed to detect diastolic pressure.\n *   4.  BPError3:  Pneumatic system blocked or cuff is too tight during inflation.\n *   5.  BPError4:  Pneumatic system leakage or cuff is too loose during inflation.\n *   6.  BPError5:  Cuff pressure reached over 300mmHg.\n *   7.  BPError6:  Cuff pressure reached over 15 mmHg for more than 160 seconds.\n *   8.  BPError7:  Data retrieving error.\n *   9.  BPError8:  Data retrieving error.\n *   10.  BPError9:  Data retrieving error.\n *   11.  BPError10:  Data retrieving error.\n *   12.  BPError11:  Communication Error.\n *   13.  BPError12:  Communication Error.\n *   14.  BPError13:  Low battery.\n *   15.  BPError14:  Device bluetooth set failed.\n *   16.  BPError15:  Systolic exceeds 260mmHg or diastolic exceeds 199mmHg.\n *   17.  BPError16:  Systolic below 60mmHg or diastolic below 40mmHg.\n *   18.  BPError17:  Arm/wrist movement beyond range.\n *   19.  BPNormalError=30:  device error, error message displayed automatically.\n *   20.  BPOverTimeError:  Abnormal communication.\n *   21.  BPNoRespondError:  Abnormal communication.\n *   22.  BPBeyondRangeError:  device is out of communication range.\n *   23.  BPDidDisconnect:  device is disconnected.\n *   24.  BPAskToStopMeasure:  measurement has been stopped.\n *   25.  BPInputParameterError=400:  Parameter input error.\n */\n-(void)commandTransferMemoryDataWithTotalCount:(BlockBachCount)totalCount progress:(BlockBachProgress)progress dataArray:(BlockBachArray)uploadDataArray errorBlock:(BlockError)error;\n")),(0,a.kt)("h3",{id:"set-locat-time-to-kn-550bt"},"Set locat time to KN-550BT"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Synchronize time and judge if the device supports the function of up Air Measurement, arm Measurement, Angle Sensor, Angle Setting, HSD, Offline Memory, mutable Groups Upload, Self Upgrade. \u2018True\u2019 means yes or on, \u2018False\u2019 means no or off.\n * @param function  A block to return the function and states that the device supports.\n * @param error  A block to refer \u2018error\u2019 in \u2018Establish measurement connection\u2019 in KN550BT.\n */\n-(void)commandFunction:(BlockDeviceFunction)function errorBlock:(BlockError)error;\n")),(0,a.kt)("h3",{id:"get-the-kn-550bt-display-status"},"Get the KN-550BT display status"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n get status of device display\n\n @param displayStatusBlock feedback status\n @param errorBlock A block to return the error\n */\n-(void)commandGetStatusOfDisplay:(BlockDisplayStatus)displayStatusBlock error:(BlockError)errorBlock;\n")),(0,a.kt)("h3",{id:"set-the-kn-550bt-display-status"},"Set the KN-550BT display status"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n set status of device display\n\n @param backLightOn turn on back light or not\n @param clockOn show clock or not\n @param successBlock This block return means set success\n @param errorBlock A block to return the error\n */\n-(void)commandSetStatusOfDisplayForBackLight:(BOOL)backLightOn andClock:(BOOL)clockOn resultSuccess:(BlockSuccess)successBlock error:(BlockError)errorBlock;\n")),(0,a.kt)("h3",{id:"disconnect-kn-550bt-device"},"Disconnect KN-550BT device"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Disconnect current device\n */\n-(void)commandDisconnectDevice;\n")))}p.isMDXComponent=!0}}]);