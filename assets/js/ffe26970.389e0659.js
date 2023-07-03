"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9225],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(o),m=r,v=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return o?n.createElement(v,i(i({ref:t},d),{},{components:o})):n.createElement(v,i({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},549:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={title:"AM5",sidebar_position:4},i=void 0,s={unversionedId:"ios/tracker/am5",id:"ios/tracker/am5",title:"AM5",description:"1.Listen to device notify",source:"@site/docs/ios/tracker/am5.md",sourceDirName:"ios/tracker",slug:"/ios/tracker/am5",permalink:"/ihealthlabs-sdk-docs/docs/ios/tracker/am5",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ios/tracker/am5.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"AM5",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"AM4",permalink:"/ihealthlabs-sdk-docs/docs/ios/tracker/am4"},next:{title:"AM6",permalink:"/ihealthlabs-sdk-docs/docs/ios/tracker/am6"}},l={},c=[{value:"1.Listen to device notify",id:"1listen-to-device-notify",level:3},{value:"2.Scan for AM5 devices",id:"2scan-for-am5-devices",level:3},{value:"3.Connect to AM5 devices",id:"3connect-to-am5-devices",level:3},{value:"API reference",id:"api-reference",level:2},{value:"BindingDevice",id:"bindingdevice",level:3},{value:"UnBinding Device",id:"unbinding-device",level:3},{value:"Get Device Info",id:"get-device-info",level:3},{value:"Get functional information",id:"get-functional-information",level:3},{value:"Get Device Mac",id:"get-device-mac",level:3},{value:"Get Live Data",id:"get-live-data",level:3},{value:"Get Activity Count",id:"get-activity-count",level:3},{value:"Set Current Time",id:"set-current-time",level:3},{value:"Set Alarm",id:"set-alarm",level:3},{value:"Set User Target",id:"set-user-target",level:3},{value:"Set User Info",id:"set-user-info",level:3},{value:"Set Unit",id:"set-unit",level:3},{value:"Set LongSit",id:"set-longsit",level:3},{value:"Set LeftRightHand",id:"set-leftrighthand",level:3},{value:"Set HrInterval",id:"set-hrinterval",level:3},{value:"Set HrMode",id:"set-hrmode",level:3},{value:"Set NoDisturbMode",id:"set-nodisturbmode",level:3},{value:"Set SportModeSelect",id:"set-sportmodeselect",level:3},{value:"Set SwitchNotice",id:"set-switchnotice",level:3},{value:"Sync ConfigComplete",id:"sync-configcomplete",level:3},{value:"SyncData",id:"syncdata",level:3},{value:"Set AppReboot",id:"set-appreboot",level:3},{value:"Set HandUp",id:"set-handup",level:3},{value:"Disconnect",id:"disconnect",level:3}],d={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:AM5Discover object:nil];\n            \n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnectFail:) name:AM5ConnectFailed object:nil];\n            \n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:AM5ConnectNoti object:nil];\n            \n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:AM5DisConnectNoti object:nil];\n            \n            \n[AM5Controller shareAM5Controller];\n\n\n")),(0,r.kt)("h3",{id:"2scan-for-am5-devices"},"2.Scan for AM5 devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_AM5];\n")),(0,r.kt)("h3",{id:"3connect-to-am5-devices"},"3.Connect to AM5 devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_AM5 andSerialNub:deviceMac];\n")),(0,r.kt)("h2",{id:"api-reference"},"API reference"),(0,r.kt)("h3",{id:"bindingdevice"},"BindingDevice"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n/**\n *Binding Device\n \n * @param bindingResult YES:success  NO:failed\n * @param disposeErrorBlock error code\n */\n-(void)commandBindingDevice:(DisposeBindingAM5Result)bindingResult DiaposeErrorBlock:(DisposeAM5ErrorBlock)disposeErrorBlock;\n")),(0,r.kt)("h3",{id:"unbinding-device"},"UnBinding Device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n *UnBindingDevice\n \n * @param unbindingResult YES:success  NO:failed\n * @param disposeErrorBlock error code\n */\n-(void)commandUnBindingDevice:(DisposeUnBindingAM5Result)unbindingResult DiaposeErrorBlock:(DisposeAM5ErrorBlock)disposeErrorBlock;\n")),(0,r.kt)("h3",{id:"get-device-info"},"Get Device Info"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * GetDeviceInfo\n \n * @param deviceInfo\n This dictionary includes key:\n Mode:Device mode    BatteryStatus:Battery status  BatteryLevel:Battery level RebootFlag:Whether to restart  BindTimeStr:Binding timestamp  BindState:Binding status\n * @param disposeErrorBlock error code\n */\n-(void)commandGetDeviceInfo:(DisposeGetAM5DeviceInfo)deviceInfo DiaposeErrorBlock:(DisposeAM5ErrorBlock)disposeErrorBlock;\n")),(0,r.kt)("h3",{id:"get-functional-information"},"Get functional information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Get functional information\n \n * @param deviceFunctionalInfo\n This dictionary includes key:\n Steps:Number of steps\n SleepDetection:Sleep detection\n SingleMovement:Single movement\n LiveData:Real-time data\n Update:Equipment Update\n HeartRate:Heart rate function\n Notification:Notification Center\n Timeline:Timeline\n * @param disposeErrorBlock error code\n */\n-(void)commandGetFuncTable:(DisposeGetAM5FuncTable)deviceFunctionalInfo DiaposeErrorBlock:(DisposeAM5ErrorBlock)disposeErrorBlock;\n")),(0,r.kt)("h3",{id:"get-device-mac"},"Get Device Mac"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * GetDeviceMac\n \n * @param deviceMac  This is the MAC for the device\n * @param disposeErrorBlock error code\n */\n-(void)commandGetDeviceMac:(DisposeGetAM5Mac)deviceMac DiaposeErrorBlock:(DisposeAM5ErrorBlock)disposeErrorBlock;\n")),(0,r.kt)("h3",{id:"get-live-data"},"Get Live Data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * GetLiveData\n \n * @param liveData\n This dictionary includes key:\n Step:Step count Calorie:Calorie  Distances:distance ActiveTime:Duration of activity HeartRate:Heart rate\n * @param disposeErrorBlock error code\n */\n-(void)commandGetLiveData:(DisposeGetAM5LiveData)liveData DiaposeErrorBlock:(DisposeAM5ErrorBlock)disposeErrorBlock;\n")),(0,r.kt)("h3",{id:"get-activity-count"},"Get Activity Count"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * GetActivityCount\n \n * @param activityCount\n \n This dictionary includes key:\n \n ActivityCount:Number of activities   ActivityPacketCount:Number of active packages GpsCount:Number of GPS data GpsPacketCount:Number of GPS packets\n \n * @param disposeErrorBlock error code\n */\n-(void)commandGetActivityCount:(DisposeGetAM5ActivityCount)activityCount DiaposeErrorBlock:(DisposeAM5ErrorBlock)disposeErrorBlock;\n")),(0,r.kt)("h3",{id:"set-current-time"},"Set Current Time"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * setCurrentTime\n * @param setCurrentTime  Synchronizes the current time to the device  YES:success  NO:failed\n * @param disposeErrorBlock error code\n */\n-(void)commandSetCurrentTime:(DisposeAM5SetCurrentTime)setCurrentTime DiaposeErrorBlock:(DisposeAM5ErrorBlock)disposeErrorBlock;\n")),(0,r.kt)("h3",{id:"set-alarm"},"Set Alarm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * setAlarm\n * @param alarm\n example code:\n IDOSetAlarmInfoBluetoothModel * alarmModel= [IDOSetAlarmInfoBluetoothModel currentModel];\n switch                                alarmModel.isOpen\n Whether the synchronization           alarmModel.isSync\n Whether or not to delete              alarmModel.isDelete\n Type                                  alarmModel.type\n Hour                                  alarmModel.hour\n Minute                                alarmModel.minute\n Repeat                                alarmModel.repeat\n TsnoozeDuration                       alarmModel.tsnoozeDuration\n AlarmId                               alarmModel.alarmId\n \n * @param setAlarmResult YES:success  NO:failed\n * @param disposeErrorBlock error code\n */\n-(void)commandSetAlarm:(IDOSetAlarmInfoBluetoothModel*)alarm setResult:(DisposeAM5SetAlarm)setAlarmResult DiaposeErrorBlock:(DisposeAM5ErrorBlock)disposeErrorBlock;\n")),(0,r.kt)("h3",{id:"set-user-target"},"Set User Target"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * SetUserTarget\n * @param target\n example code:\n IDOSetUserInfoBuletoothModel * userModel= [IDOSetUserInfoBuletoothModel currentModel];\n Target sleep time(hour)      userModel.goalSleepDataHour\n Target sleep time(minutes)   userModel.goalSleepDataMinute\n Target steps                 userModel.goalStepData\n Target Calorie               userModel.goalCalorieData\n Target Distance              userModel.goalDistanceData\n Target Weight                userModel.goalWeightData\n Target type  userModel.goalType (type: 0: steps 1: calories 2: distance) setting a type of target requires executing a command once\n \n * @param setUserTargetResult YES:success  NO:failed\n * @param disposeErrorBlock error code\n */\n-(void)commandSetUserTarget:(IDOSetUserInfoBuletoothModel*)target  setResult:(DisposeAM5SetUserTarget)setUserTargetResult DiaposeErrorBlock:(DisposeAM5ErrorBlock)disposeErrorBlock;\n")),(0,r.kt)("h3",{id:"set-user-info"},"Set User Info"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * SetUserInfo\n @param userInfo\n example code:\n IDOSetUserInfoBuletoothModel * userModel= [IDOSetUserInfoBuletoothModel currentModel];\n height     userModel.height\n weight     userModel.weight\n gender     userModel.gender   Gender 1: male 2: female\n year       userModel.year\n month      userModel.month\n day        userModel.day\n \n * @param setUserInfoResult YES:success  NO:failed\n * @param disposeErrorBlock error code\n */\n-(void)commandSetUserInfo:(IDOSetUserInfoBuletoothModel*)userInfo  setResult:(DisposeAM5SetUserInfo)setUserInfoResult DiaposeErrorBlock:(DisposeAM5ErrorBlock)disposeErrorBlock;\n")),(0,r.kt)("h3",{id:"set-unit"},"Set Unit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * SetUnit\n @param unit\n example code:\n IDOSetUnitInfoBluetoothModel * unitInfo = [IDOSetUnitInfoBluetoothModel currentModel];\n From the unit        unitInfo.distanceUnit  0x00: invalid, 0x01:km, 0x02:mi\n Unit of weight       unitInfo.weightUnit    0x00: invalid, 0x01:kg, 0x02:lb, 0x03: st\n Temperature of the unit  unitInfo.tempUnit  0x00: invalid, 0 x01: \xb0 C, 0 x02: \xb0 F\n The language unit    unitInfo.languageUnit  (Invalid :0, Chinese :1, English :2, French :3, German :4, Italian :5, Spanish :6, Japanese :7,Polish :8, Czech :9, Romania :10, Lithuanian :11, Dutch :12, Slovenia :13,Hungarian :14, Russian :15, Ukrainian :16, slovak :17, Danish :18, Croatian :19)\n Walking pace        unitInfo.strideWalk  Convert to the default value of 90 for men (unit: cm)\n Running pace        unitInfo.strideRun  According to the default value of male conversion 72 (unit: cm)\n GPS calibration step size unitInfo.strideGps  0x00: invalid, 0x01: on, 0x02: off\n Unit of time        unitInfo.timeUnit  0x00: invalid, 0x01:24 hours, 0x02: 12 hours\n The beginning of the week  unitInfo.weekStart     (Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6)\n \n * @param setUnitResult YES:success  NO:failed\n * @param disposeErrorBlock error code\n */\n-(void)commandSetUnit:(IDOSetUnitInfoBluetoothModel*)unit  setResult:(DisposeAM5SetUnit)setUnitResult DiaposeErrorBlock:(DisposeAM5ErrorBlock)disposeErrorBlock;\n")),(0,r.kt)("h3",{id:"set-longsit"},"Set LongSit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * SetLongSit\n @param longSit\n example code:\n IDOSetLongSitInfoBuletoothModel * SitInfo = [IDOSetLongSitInfoBuletoothModel currentModel];\n \n interval                  SitInfo.interval\n Start(Hour)               SitInfo.startHour\n Start(minutes)            SitInfo.startMinute\n End(Hour)                 SitInfo.endHour\n End(minutes)              SitInfo.endMinute\n Switch                    SitInfo.isOpen\n \n * @param setLongSitResult YES:success  NO:failed\n * @param disposeErrorBlock error code\n */\n-(void)commandSetLongSit:(IDOSetLongSitInfoBuletoothModel*)longSit  setResult:(DisposeAM5SetLongSit)setLongSitResult DiaposeErrorBlock:(DisposeAM5ErrorBlock)disposeErrorBlock;\n")),(0,r.kt)("h3",{id:"set-leftrighthand"},"Set LeftRightHand"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * SetLeftRightHand\n @param leftRightHand\n example code:\n IDOSetLeftOrRightInfoBuletoothModel * leftOrRightModel = [IDOSetLeftOrRightInfoBuletoothModel currentModel];\n \n Whether to wear right hand     leftOrRightModel.isRight  0:left 1:right\n \n * @param setLeftRightHandResult  YES:success  NO:failed\n * @param disposeErrorBlock error code\n */\n-(void)commandSetLeftRightHand:(IDOSetLeftOrRightInfoBuletoothModel*)leftRightHand  setResult:(DisposeAM5SetLeftRightHand)setLeftRightHandResult DiaposeErrorBlock:(DisposeAM5ErrorBlock)disposeErrorBlock;\n")),(0,r.kt)("h3",{id:"set-hrinterval"},"Set HrInterval"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * SetHrInterval\n @param hrInterval\n example code:\n IDOSetHrIntervalInfoBluetoothModel * hrIntervalInfo = [IDOSetHrIntervalInfoBluetoothModel currentModel];\n \n Fat burning threshold   hrIntervalInfo.burnFat\n Aerobic threshold       hrIntervalInfo.aerobic\n Threshold limit         hrIntervalInfo.limitValue\n Maximum heart rate      hrIntervalInfo.userMaxHr\n \n * @param setHrIntervalResult YES:success  NO:failed\n * @param disposeErrorBlock error code\n */\n-(void)commandSetHrInterval:(IDOSetHrIntervalInfoBluetoothModel*)hrInterval  setResult:(DisposeAM5SetHrInterval)setHrIntervalResult DiaposeErrorBlock:(DisposeAM5ErrorBlock)disposeErrorBlock;\n")),(0,r.kt)("h3",{id:"set-hrmode"},"Set HrMode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * SetHrMode\n @param hrMode\n example code:\n IDOSetHrModeInfoBluetoothModel * hrModeInfo = [IDOSetHrModeInfoBluetoothModel currentModel];\n Heart rate pattern        hrModeInfo.modeType   0: turn off heart rate monitoring function 1: manual mode 2: automatic mode (default: automatic mode)\n Is there an interval      hrModeInfo.isHasTimeRange\n Start(Hour)               hrModeInfo.startHour\n Start(minutes)            hrModeInfo.startMinute\n End(Hour)                 hrModeInfo.endHour\n End(minutes)              hrModeInfo.endMinute\n \n * @param setHrModeResult YES:success  NO:failed\n * @param disposeErrorBlock error code\n */\n-(void)commandSetHrMode:(IDOSetHrModeInfoBluetoothModel*)hrMode  setResult:(DisposeAM5SetHrMode)setHrModeResult DiaposeErrorBlock:(DisposeAM5ErrorBlock)disposeErrorBlock;\n")),(0,r.kt)("h3",{id:"set-nodisturbmode"},"Set NoDisturbMode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * SetNoDisturbMode\n @param noDisturbMode\n example code:\n IDOSetNoDisturbModeInfoBluetoothModel * noDisturbModeInfo = [IDOSetNoDisturbModeInfoBluetoothModel currentModel];\n \n Is there an interval      noDisturbModeInfo.isOpen\n Start(Hour)               noDisturbModeInfo.startHour\n Start(minutes)            noDisturbModeInfo.startMinute\n End(Hour)                 noDisturbModeInfo.endHour\n End(minutes)              noDisturbModeInfo.endMinute\n \n * @param setNoDisturbModeResult YES:success  NO:failed\n * @param disposeErrorBlock error code\n */\n-(void)commandSetNoDisturbMode:(IDOSetNoDisturbModeInfoBluetoothModel*)noDisturbMode  setResult:(DisposeAM5SetNoDisturbMode)setNoDisturbModeResult DiaposeErrorBlock:(DisposeAM5ErrorBlock)disposeErrorBlock;\n")),(0,r.kt)("h3",{id:"set-sportmodeselect"},"Set SportModeSelect"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * SetSportModeSelect\n @param sportModeSelect\n example code:\n IDOSetSportShortcutInfoBluetoothModel * sportShortcutInfo = [IDOSetSportShortcutInfoBluetoothModel currentModel];\n sportShortcutInfo.isWalk\n sportShortcutInfo.isRun\n sportShortcutInfo.isByBike\n sportShortcutInfo.isOnFoot\n sportShortcutInfo.isMountainClimbing\n sportShortcutInfo.isBadminton\n sportShortcutInfo.isSpinning\n sportShortcutInfo.isTreadmill\n sportShortcutInfo.isFitness\n sportShortcutInfo.isYoga\n sportShortcutInfo.isBasketball\n sportShortcutInfo.isTennis\n sportShortcutInfo.isDance\n sportShortcutInfo.isFootball\n \n * @param setSportModeSelectResult YES:success  NO:failed\n * @param disposeErrorBlock error code\n */\n-(void)commandSetSportModeSelect:(IDOSetSportShortcutInfoBluetoothModel*)sportModeSelect  setResult:(DisposeAM5SetSportModeSelect)setSportModeSelectResult DiaposeErrorBlock:(DisposeAM5ErrorBlock)disposeErrorBlock;\n")),(0,r.kt)("h3",{id:"set-switchnotice"},"Set SwitchNotice"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * SetSwitchNotice\n @param switchNotice\n example code:\n IDOSetNoticeInfoBuletoothModel* noticeInfo = [IDOSetNoticeInfoBuletoothModel currentModel];\n noticeInfo.isPairing\n noticeInfo.isOnChild\n * @param setSwitchNoticeResult  YES:success  NO:failed\n * @param disposeErrorBlock error code\n */\n-(void)commandSetSwitchNotice:(IDOSetNoticeInfoBuletoothModel*)switchNotice  setResult:(DisposeAM5SetSwitchNotice)setSwitchNoticeResult DiaposeErrorBlock:(DisposeAM5ErrorBlock)disposeErrorBlock;\n")),(0,r.kt)("h3",{id:"sync-configcomplete"},"Sync ConfigComplete"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * syncConfigComplete\n \n * @param syncConfigCompleteResult YES:success  NO:failed\n * @param disposeErrorBlock error code\n */\n-(void)commandSyncConfigComplete:(DisposeGetAM5SyncConfigComplete)syncConfigCompleteResult DiaposeErrorBlock:(DisposeAM5ErrorBlock)disposeErrorBlock;\n")),(0,r.kt)("h3",{id:"syncdata"},"SyncData"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * syncData\n \n * @param heartRateData  heartRateData\n * @param sleepData  sleepData\n * @param activityData  activityData\n * @param syncprogress  data progress\n * @param syncDataSuccess  sync finish\n * @param disposeErrorBlock error code\n */\n-(void)commandSyncData:(DisposeGetAM5SyncHeartRateData)heartRateData syncSleepData:(DisposeGetAM5SyncSleepData)sleepData syncActivityData:(DisposeGetAM5SyncActivityData)activityData syncDataProgress:(DisposeAM5SyncDataProgress)syncprogress syncDataSuccess:(DisposeAM5SyncDataSuccess)syncDataSuccess DiaposeErrorBlock:(DisposeAM5ErrorBlock)disposeErrorBlock;\n")),(0,r.kt)("h3",{id:"set-appreboot"},"Set AppReboot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * setAppReboot\n \n * @param setAppRebootResult  YES:success  NO:failed\n * @param disposeErrorBlock error code\n */\n-(void)commandSetAppReboot:(DisposeAM5SetAppReboot)setAppRebootResult DiaposeErrorBlock:(DisposeAM5ErrorBlock)disposeErrorBlock;\n")),(0,r.kt)("h3",{id:"set-handup"},"Set HandUp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * SetHandUp\n @param setHandUp\n example code:\n IDOSetHandUpInfoBuletoothModel * handUpModel= [IDOSetHandUpInfoBuletoothModel currentModel];\n handUpModel.isOpen   YES:open  NO:close\n * @param setHandUpResult  YES:success  NO:failed\n * @param disposeErrorBlock error code\n */\n-(void)commandSetHandUp:(IDOSetHandUpInfoBuletoothModel*)setHandUp setResult:(DisposeAM5SetHandUp)setHandUpResult DiaposeErrorBlock:(DisposeAM5ErrorBlock)disposeErrorBlock;\n")),(0,r.kt)("h3",{id:"disconnect"},"Disconnect"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Disconnect AM5 connection.\n */\n-(void)commandAM5Disconnect;\n")))}u.isMDXComponent=!0}}]);