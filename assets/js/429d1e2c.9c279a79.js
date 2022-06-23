"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4257],{3905:function(e,o,t){t.d(o,{Zo:function(){return d},kt:function(){return m}});var n=t(7294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function s(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?s(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=n.createContext({}),l=function(e){var o=n.useContext(a),t=o;return e&&(t="function"==typeof e?e(o):c(c({},o),e)),t},d=function(e){var o=l(e.components);return n.createElement(a.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},p=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,f=p["".concat(a,".").concat(m)]||p[m]||u[m]||s;return t?n.createElement(f,c(c({ref:o},d),{},{components:t})):n.createElement(f,c({ref:o},d))}));function m(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var s=t.length,c=new Array(s);c[0]=p;var i={};for(var a in o)hasOwnProperty.call(o,a)&&(i[a]=o[a]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<s;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2361:function(e,o,t){t.r(o),t.d(o,{assets:function(){return d},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=t(7462),r=t(3366),s=(t(7294),t(3905)),c=["components"],i={title:"BG1S",sidebar_position:2},a=void 0,l={unversionedId:"ios/blood_glucose/bg1s",id:"ios/blood_glucose/bg1s",title:"BG1S",description:"WorkFlow",source:"@site/docs/ios/blood_glucose/bg1s.md",sourceDirName:"ios/blood_glucose",slug:"/ios/blood_glucose/bg1s",permalink:"/ihealthlabs-sdk-docs/docs/ios/blood_glucose/bg1s",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ios/blood_glucose/bg1s.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"BG1S",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"BG1",permalink:"/ihealthlabs-sdk-docs/docs/ios/blood_glucose/bg1"},next:{title:"BG5",permalink:"/ihealthlabs-sdk-docs/docs/ios/blood_glucose/bg5"}},d={},u=[{value:"WorkFlow",id:"workflow",level:2},{value:"Connection to device",id:"connection-to-device",level:2},{value:"1.Listen to device notify",id:"1listen-to-device-notify",level:3},{value:"2.Scan for BG1S devices",id:"2scan-for-bg1s-devices",level:3},{value:"3.Connect to BG1S devices",id:"3connect-to-bg1s-devices",level:3},{value:"API reference",id:"api-reference",level:2},{value:"Get the measure mode of BG1S",id:"get-the-measure-mode-of-bg1s",level:3},{value:"Set the measure mode of BG1S",id:"set-the-measure-mode-of-bg1s",level:3},{value:"Get the device code of BG1S",id:"get-the-device-code-of-bg1s",level:3},{value:"Set the device code of BG1S",id:"set-the-device-code-of-bg1s",level:3},{value:"Disconnect",id:"disconnect",level:3}],p={toc:u};function m(e){var o=e.components,t=(0,r.Z)(e,c);return(0,s.kt)("wrapper",(0,n.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"workflow"},"WorkFlow"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Scan and connect BG1S blood glucose monitor.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"BG1S only support online measurement."))),(0,s.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,s.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:BG1SDiscover object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnectFail:) name:BG1SConnectFailed object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:BG1SConnectNoti object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:BG1SDisConnectNoti object:nil];\n            \n[BG1SController shareIHBG1SController];\n")),(0,s.kt)("h3",{id:"2scan-for-bg1s-devices"},"2.Scan for BG1S devices"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_BG1S];\n")),(0,s.kt)("h3",{id:"3connect-to-bg1s-devices"},"3.Connect to BG1S devices"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_BG1S andSerialNub:deviceMac];\n")),(0,s.kt)("h2",{id:"api-reference"},"API reference"),(0,s.kt)("h3",{id:"get-the-measure-mode-of-bg1s"},"Get the measure mode of BG1S"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Get device battary\n * @param function  A block to return the function and states that the device supports.\n * @param disposeBGErrorBlock  A block to refer \u2018error\u2019 in \u2018Establish measurement connection\u2019 in BG1S.\n */\n-(void)commandFunction:(BlockBG1SDeviceFunction)function DisposeBGErrorBlock:(BlockBG1SError)disposeBGErrorBlock;\n")),(0,s.kt)("h3",{id:"set-the-measure-mode-of-bg1s"},"Set the measure mode of BG1S"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Button-pressing booting mode\n * @param testMode  Set the measurement mode,must be the same as the testType in send code method, BGMeasureMode_Blood means blood measurement mode, BGMeasureMode_NoBlood means control solution measurement mode.\n * @param disposeBGStripInBlock  This block returns yes means strip slides in.\n * @param disposeBGBloodBlock This block returns yes means the blood drop has beed sensed from the strip.\n * @param disposeBGResultBlock  This block returns the measurement by the unit of mg/dL, range from 20-600.\n * @param disposeBGErrorBlock   This block returns error codes,please refer to error codes list in BGMacroFile.\n */\n-(void)commandCreateBG1STestModel:(BGMeasureMode)testMode\n          DisposeBGStripInBlock:(DisposeBG1SStripInBlock)disposeBGStripInBlock\n            DisposeBGBloodBlock:(DisposeBGBloodBlock)disposeBGBloodBlock\n           DisposeBGResultBlock:(DisposeBGResultBlock)disposeBGResultBlock\n            DisposeBGErrorBlock:(BlockBG1SError)disposeBGErrorBlock;\n")),(0,s.kt)("h3",{id:"get-the-device-code-of-bg1s"},"Get the device code of BG1S"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n* Read the information of the strip from the BG meter\n* @param  disposeBGCodeDic  This block returns the information of the strip, Strips means the number of strips which has been used, Date means expired date.\n* @param  disposeBGErrorBlock  This block returns error codes,please refer to error codes list in BGMacroFile.\n*/\n-(void)commandReadBGCodeDic:(DisposeBGCodeDic)disposeBGCodeDic\n        DisposeBGErrorBlock:(BlockBG1SError)disposeBGErrorBlock;\n")),(0,s.kt)("h3",{id:"set-the-device-code-of-bg1s"},"Set the device code of BG1S"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Send code\n\n * @param encodeString  The code String gets by scanning the QR code. Only used when codetype is GOD\n \n * @param disposeBGSendCodeBlock  YES means success, NO means fail.\n\n * @param disposeBGErrorBlock This block returns error codes,please refer to error codes list in BGMacroFile.\n */\n-(void)commandSendBGCodeWithCodeString:(NSString*)encodeString DisposeBGSendCodeBlock:(DisposeBGSendCodeBlock)disposeBGSendCodeBlock DisposeBGErrorBlock:(BlockBG1SError)disposeBGErrorBlock;\n")),(0,s.kt)("h3",{id:"disconnect"},"Disconnect"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Disconnect current device\n */\n-(void)commandDisconnectDevice;\n")))}m.isMDXComponent=!0}}]);