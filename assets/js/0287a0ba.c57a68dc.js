"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[705],{3905:function(e,r,t){t.d(r,{Zo:function(){return m},kt:function(){return u}});var o=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=c(e.components);return o.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=a,k=p["".concat(l,".").concat(u)]||p[u]||d[u]||n;return t?o.createElement(k,i(i({ref:r},m),{},{components:t})):o.createElement(k,i({ref:r},m))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,i=new Array(n);i[0]=p;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9080:function(e,r,t){t.r(r),t.d(r,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var o=t(7462),a=t(3366),n=(t(7294),t(3905)),i=["components"],s={title:"AM3",sidebar_position:1},l=void 0,c={unversionedId:"ios/tracker/am3",id:"ios/tracker/am3",title:"AM3",description:"WorkFlow",source:"@site/docs/ios/tracker/am3.md",sourceDirName:"ios/tracker",slug:"/ios/tracker/am3",permalink:"/ihealthlabs-sdk-docs/docs/ios/tracker/am3",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ios/tracker/am3.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"AM3",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"PT3SBT",permalink:"/ihealthlabs-sdk-docs/docs/ios/thermometer/pt3sbt"},next:{title:"AM3S",permalink:"/ihealthlabs-sdk-docs/docs/ios/tracker/am3s"}},m={},d=[{value:"WorkFlow",id:"workflow",level:2},{value:"Connection to device",id:"connection-to-device",level:2},{value:"1.Listen to device notify",id:"1listen-to-device-notify",level:3},{value:"2.Scan for AM3 devices",id:"2scan-for-am3-devices",level:3},{value:"3.Connect to AM3 devices",id:"3connect-to-am3-devices",level:3},{value:"API reference",id:"api-reference",level:2},{value:"Get device userID",id:"get-device-userid",level:3},{value:"Sync time",id:"sync-time",level:3},{value:"Set time format and nation",id:"set-time-format-and-nation",level:3},{value:"Binding AM3",id:"binding-am3",level:3},{value:"SetUserInfo",id:"setuserinfo",level:3},{value:"Upload AM3 data",id:"upload-am3-data",level:3},{value:"Upload AM3 5 minutes of sleep data",id:"upload-am3-5-minutes-of-sleep-data",level:3},{value:"Upload AM3 current active data",id:"upload-am3-current-active-data",level:3},{value:"Get totoal alarm infomation",id:"get-totoal-alarm-infomation",level:3},{value:"Set alarm",id:"set-alarm",level:3},{value:"Delete alarm",id:"delete-alarm",level:3},{value:"Get reminder",id:"get-reminder",level:3},{value:"Set reminders",id:"set-reminders",level:3},{value:"Get device state infomation",id:"get-device-state-infomation",level:3},{value:"Restore factory settings",id:"restore-factory-settings",level:3},{value:"Disconnect AM3 connection",id:"disconnect-am3-connection",level:3},{value:"Get time format",id:"get-time-format",level:3},{value:"Get user infomation",id:"get-user-infomation",level:3},{value:"Set state model",id:"set-state-model",level:3},{value:"Set BMR",id:"set-bmr",level:3}],p={toc:d};function u(e){var r=e.components,t=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"workflow"},"WorkFlow"),(0,n.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,n.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:AM3Discover object:nil];\n            \n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnectFail:) name:AM3ConnectFailed object:nil];\n            \n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:AM3ConnectNoti object:nil];\n            \n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:AM3DisConnectNoti object:nil];\n            \n[AM3Controller shareIHAM3Controller];\n\n")),(0,n.kt)("h3",{id:"2scan-for-am3-devices"},"2.Scan for AM3 devices"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_AM3];\n")),(0,n.kt)("h3",{id:"3connect-to-am3-devices"},"3.Connect to AM3 devices"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_AM3 andSerialNub:deviceMac];\n")),(0,n.kt)("h2",{id:"api-reference"},"API reference"),(0,n.kt)("h3",{id:"get-device-userid"},"Get device userID"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Get device userID \n * @param getDeviceUserIDBlock  get userID\n * @param errorBlock Communication error codes, see AM3 error descriptions.\n */\n-(void)commandAM3GetDeviceUserID:(DisposeAM3GetDeviceUserIDBlock)getDeviceUserIDBlock withErrorBlock:(DisposeAM3ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"sync-time"},"Sync time"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Sync time\n * @param syncTimeBlock True: Success\uff0c False: Failed.\n * @param errorBlock Communication error codes, see AM3 error descriptions.\n */\n-(void)commandAM3SyncTime:(DisposeAM3SyncTimeBlock)syncTimeBlock withErrorBlock:(DisposeAM3ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"set-time-format-and-nation"},"Set time format and nation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Set time format and nation\n * @param timeFormat  AM3TimeFormat_hh,AM3TimeFormat_HH\n * @param setTimeFormatBlock True: Success\uff0c False: Failed.\n * @param errorBlock Communication error codes, see AM3 error descriptions.\n * @Notice  Notice: Firmware version 1.1.9 and above supports this function\n */\n-(void)commandAM3SetTimeFormatAndNation:(AM3TimeFormat)timeFormat withFinishResult:(DisposeAM3TimeFormatSettingBlock)setTimeFormatBlock withErrorBlock:(DisposeAM3ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"binding-am3"},"Binding AM3"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Binding AM3 to user,Account binding requires an active internet connection.\n * @param userID userID, ranging from 1 \u2013 2147483647.\n * @param finishResultBlock True: Success\uff0c False: Failed.\n * @param errorBlock Communication error codes, see AM3 error descriptions.\n */\n-(void)commandAM3SetUserID:(NSNumber*)userID withFinishResult:(DisposeAM3SetDeviceUserIDBlock)finishResultBlock withErrorBlock:(DisposeAM3ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"setuserinfo"},"SetUserInfo"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * AM3 initialization,Must be called the first time to ensure that the AM3 has correct user information, goals, time, battery checks, etc.\n * @param user User information, needs to include the following\uff1aage(int)\u3001height(cm,1-255)\u3001weight(kg,1-255)\u3001bmr(user basal metabolic)\u3001sex(UserSex_Female or UserSex_Male)\u3001activityLevel (activityLevel=1, Sedentary,spend most of day sitting.activityLevel=2, Active,spend a good part of day doing some physical activity.activityLevel=3, Very Active,spend most of day doing heavy physical activity.)\n * @param unit AM3StateUnit_mile or AM3StateUnit_km\n * @param activeGoalNumber User goal number of steps,ranging from 4 \u2013 65535. Default is 10,000\n * @param setUserInfoFinishBlock True: Success\uff0c False: Failed.\n * @param setBMRFinishResultBlock True: Success\uff0c False: Failed.\n * @param errorBlock Communication error codes, see AM3 error descriptions.\n */\n-(void)commandAM3SetUserInfo:(HealthUser *)user withUnit:(AM3StateUnit)unit withActiveGoal:(NSNumber *)activeGoalNumber withSetUserInfoFinishResult:(DisposeAM3SetUserInfoBlock)setUserInfoFinishBlock withSetBMR:(DisposeAM3SetBMRBlock)setBMRFinishResultBlock withErrorBlock:(DisposeAM3ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"upload-am3-data"},"Upload AM3 data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Upload AM3 data,Data type: 5 minutes of active data, total number of steps for the day, and total calories.Also includes the number of steps for the 5 minutes of motion data, total calories for the current time, calories of the steps, and total calories.\n * @param activeTransmissionBlock activeTransmission: Start uploading motion data, including parameters\uff1aStart date\uff0cyyyy-MM-dd(ActiveHistoryDateYear,ActiveHistoryDateMonth,ActiveHistoryDateDay)\uff0cActiveStepSize\uff1aLength of each step\uff0cActiveHistoryTotoalNum\uff1aNumber of records.\n * @param activeHistoryDataBlock active data\uff0cincluding the following parameters\uff1aAMDate\u3001AMCalorie\u3001AMstepNum\u3001AMstepSize\u3001dataID\u3001Start. AMDate\uff1aWorkout time,AMCalorie: Current time total calories,AMStepNum\uff1aTotal number of steps,dataID\uff1adata ID,Start\uff1arepresents the beginning of a movement.\n * @param activeFinishTransmissionBlock Upload complete.\n * @param errorBlock Communication error codes, see AM3 error descriptions.\n */\n-(void)commandAM3StartSyncActiveData:(DisposeAM3ActiveStartTransmission)activeTransmissionBlock withActiveHistoryData:(DisposeAM3ActiveHistoryData)activeHistoryDataBlock withActiveFinishTransmission:(DisposeAM3ActiveFinishTransmission)activeFinishTransmissionBlock withErrorBlock:(DisposeAM3ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"upload-am3-5-minutes-of-sleep-data"},"Upload AM3 5 minutes of sleep data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Upload AM3 data,Data type: 5 minutes of sleep data,\n * @param sleepTransmissionBlock sleepTransmission:Start uploading sleep data,, including parameters\uff1aSleepHistoryDate\u3001AM3SleepHistoryTotoalNum.SleepHistoryDate\uff1aSleep start time\uff0cyyyy-MM-dd HH:mm:ss(SleepHistoryDateYear,SleepHistoryDateMonth,SleepHistoryDateDay,SleepHistoryDateHour,SleepHistoryDateMinute,SleepHistoryDateSeconds).SleepHistoryTotoalNum: Number of records\n * @param sleepHistoryDataBlock Sleep data, including the following parameters:\uff1aAMDate\u3001SleepData\u3001dataID.AMDate\uff1aSleep time, SleepData: Sleep grade, 0: awake, 1: light sleep, 2: deep sleep ,dataID: data ID.\n * @param sleepFinishTransmissionBlock Upload complete.\n * @param errorBlock Communication error codes, see AM3 error descriptions.\n */\n-(void)commandAM3StartSyncSleepData:(DisposeAM3SleepStartTransmission)sleepTransmissionBlock withSleepHistoryData:(DisposeAM3SleepHistoryData)sleepHistoryDataBlock withSleepFinishTransmission:(DisposeAM3SleepFinishTransmission)sleepFinishTransmissionBlock withErrorBlock:(DisposeAM3ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"upload-am3-current-active-data"},"Upload AM3 current active data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Upload AM3 data,Data type: Sync current active data\n * @param currentActiveInfoBlock Total calories and steps for today, including parameters\uff1aStep\u3001Calories\u3001TotalCalories.Step\uff1aNumber of steps taken today.Calories\uff1aNumber of calories burned today.TotalCalories\uff1aSum calories burned and bmr today.\n * @param errorBlock Communication error codes, see AM3 error descriptions.\n */\n-(void)commandAM3StartSyncCurrentActiveData:(DisposeAM3GetCurrentActiveInfo)currentActiveInfoBlock withErrorBlock:(DisposeAM3ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"get-totoal-alarm-infomation"},"Get totoal alarm infomation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Get totoal alarm infomation\n * @param totoalAlarmInfoBlock Alarm array contains up to 3 alarms, each one needs the following parameters\uff1aAlarmId\u3001Time\u3001Week.AlarmId\uff1a1, 2, 3.Time\uff1aHH:mm.Week(Sun\u3001Mon\u3001Tue\u3001Wed\u3001Thu\u3001Fri\u3001Sat)True: On, False: Off\n * @param errorBlock Communication error codes, see AM3 error descriptions.\n */\n-(void)commandAM3GetTotoalAlarmInfo:(DisposeAM3TotoalAlarmData)totoalAlarmInfoBlock withErrorBlock:(DisposeAM3ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"set-alarm"},"Set alarm"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Set alarm.\n * @param alarmDic Alarm information, include parameters\uff1aAlarmId\u3001Time\u3001IsRepeat\u3001Switch\u3001\uff08Sun\u3001Mon\u3001Tue\u3001Wed\u3001Thu\u3001Fri\u3001Sat)\n * @param finishResultBlock True: Alarm set successfully\uff0cFalse: Failed.\n * @param errorBlock Communication error codes, see AM3 error descriptions.\n */\n-(void)commandAM3SetAlarmDictionary:(NSDictionary *)alarmDic withFinishResult:(DisposeAM3SetAlarmBlock)finishResultBlock withErrorBlock:(DisposeAM3ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"delete-alarm"},"Delete alarm"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Delete alarm.\n * @param alarmID alarmID\uff1a1, 2, 3.\n * @param finishResultBlock True: Delete successful\uff0cFalse: Failed\n * @param errorBlock Communication error codes, see AM3 error descriptions.\n */\n-(void)commandAM3DeleteAlarmID:(NSNumber *)alarmID withFinishResult:(DisposeAM3DeleteAlarmBlock)finishResultBlock withErrorBlock:(DisposeAM3ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"get-reminder"},"Get reminder"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Get reminder.\n * @param remindInfoBlock Array containing following parameters\uff1aReminderID\u3001Time\u3001Switch.ReminderID\uff1aReminder ID.Time\uff1aformat HH:mm, time between reminders (HH*60+mm) minutes.Switch\uff1aReminder on/off\uff0cTrue: On\uff0c False: Off.\n * @param errorBlock Communication error codes, see AM3 error descriptions.\n */\n-(void)commandAM3GetReminderInfo:(DisposeAM3RemindInfoBlock)remindInfoBlock withErrorBlock:(DisposeAM3ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"set-reminders"},"Set reminders"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Set reminders.\n * @param reminderDic Array containing collowing parameters\uff1aTime\u3001Switch\u3002\n * @param finishResultBlock YES: Successfully set, NO: Failed.\n * @param errorBlock Communication error codes, see AM3 error descriptions.\n */\n-(void)commandAM3SetReminderDictionary:(NSDictionary *)reminderDic withFinishResult:(DisposeAM3SetReminderBlock)finishResultBlock withErrorBlock:(DisposeAM3ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"get-device-state-infomation"},"Get device state infomation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Get device state infomation\n * @param deviceStateInfoBlock AM status\uff0cState_wrist  (AM3 being worn on the wrist)\uff0cState_waist (AM3 worn with belt clip).\n * @param batteryBlock AM3 battery percentage, from 0\uff5e100.\n * @param errorBlock Communication error codes, see AM3 error descriptions.\n */\n-(void)commandAM3GetDeviceStateInfo:(DisposeAM3StateInfoBlock)deviceStateInfoBlock withBattery:(DisposeAM3BatteryBlock)batteryBlock withErrorBlock:(DisposeAM3ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"restore-factory-settings"},"Restore factory settings"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Restore factory settings.\n * @param resetDeviceBlock True: Success\uff0c False: Failed.\n * @param errorBlock Communication error codes, see AM3 error descriptions.\n */\n-(void)commandAM3ResetDevice:(DisposeAM3ResetDeviceBlock)resetDeviceBlock  withErrorBlock:(DisposeAM3ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"disconnect-am3-connection"},"Disconnect AM3 connection"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Disconnect AM3 connection.\n * @param disconnectBlock  True: Success\uff0cFalse: Failed.\n * @param errorBlock Communication error codes, see AM3 error descriptions.\n */\n-(void)commandAM3Disconnect:(DisposeAM3DisconnectBlock)disconnectBlock withErrorBlock:(DisposeAM3ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"get-time-format"},"Get time format"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Get time format\n * @param timeFormat  (AM3TimeFormat_hh,AM3TimeFormat_HH)\n * @param errorBlock Communication error codes, see AM3 error descriptions.\n * @Notice  Notice: Firmware version 1.1.9 and above supports this function\n */\n-(void)commandAM3GetTimeFormat:(DisposeAM3TimeFormatBlock)timeFormat withErrorBlock:(DisposeAM3ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"get-user-infomation"},"Get user infomation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Get user infomation\n * @param userInfoBlock including parameters:Age,Step,Height,Gender,Weight,Unit,goal(TotalStep1\u3001TotalStep2\u3001TotalStep3)\n * @param errorBlock Communication error codes, see AM3 error descriptions.\n */\n-(void)commandAM3GetUserInfo:(DisposeAM3UserInfoBlock)userInfoBlock withErrorBlock:(DisposeAM3ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"set-state-model"},"Set state model"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Set state model\n * @param state including AM3SetStateModel_sleep,AM3SetStateModel_active,AM3SetStateModel_fly,AM3SetStateModel_drive\n * @param finishResultBlock True: Delete successful\uff0cFalse: Failed\n * @param errorBlock Communication error codes, see AM3 error descriptions.\n * @Notice  Notice: Firmware version 1.1.1 and above supports AM3SetStateModel_drive\n */\n-(void)commandAM3SetStateModel:(AM3StateModel)state withFinishResult:(DisposeAM3SetStateModelBlock)finishResultBlock withErrorBlock:(DisposeAM3ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"set-bmr"},"Set BMR"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Set BMR\n * @param bmr ranging from 0 \u2013 5000.\n * @param finishResultBlock True: Delete successful\uff0cFalse: Failed\n * @param errorBlock Communication error codes, see AM3 error descriptions.\n * @Notice  Notice: Firmware version 1.0.2 and above supports this function\n */\n-(void)commandAM3SetBMR:(NSNumber *)bmr withFinishResult:(DisposeAM3SetBMRBlock)finishResultBlock withErrorBlock:(DisposeAM3ErrorBlock)errorBlock;\n")))}u.isMDXComponent=!0}}]);