"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2368],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return u}});var o=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),m=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=m(e.components);return o.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(t),u=a,k=p["".concat(l,".").concat(u)]||p[u]||d[u]||n;return t?o.createElement(k,i(i({ref:r},c),{},{components:t})):o.createElement(k,i({ref:r},c))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,i=new Array(n);i[0]=p;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var m=2;m<n;m++)i[m]=t[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7089:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return d}});var o=t(7462),a=t(3366),n=(t(7294),t(3905)),i=["components"],s={title:"AM4",sidebar_position:3},l=void 0,m={unversionedId:"ios/tracker/am4",id:"ios/tracker/am4",title:"AM4",description:"WorkFlow",source:"@site/docs/ios/tracker/am4.md",sourceDirName:"ios/tracker",slug:"/ios/tracker/am4",permalink:"/ihealthlabs-sdk-docs/docs/ios/tracker/am4",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ios/tracker/am4.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"AM4",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"AM3S",permalink:"/ihealthlabs-sdk-docs/docs/ios/tracker/am3s"},next:{title:"AM5",permalink:"/ihealthlabs-sdk-docs/docs/ios/tracker/am5"}},c={},d=[{value:"WorkFlow",id:"workflow",level:2},{value:"Connection to device",id:"connection-to-device",level:2},{value:"1.Listen to device notify",id:"1listen-to-device-notify",level:3},{value:"2.Scan for AM4 devices",id:"2scan-for-am4-devices",level:3},{value:"3.Connect to AM4 devices",id:"3connect-to-am4-devices",level:3},{value:"API reference",id:"api-reference",level:2},{value:"Get device userID",id:"get-device-userid",level:3},{value:"Set RandomNumber",id:"set-randomnumber",level:3},{value:"Sync time",id:"sync-time",level:3},{value:"Set time format and nation",id:"set-time-format-and-nation",level:3},{value:"Binding AM4",id:"binding-am4",level:3},{value:"SetUserInfo",id:"setuserinfo",level:3},{value:"Set swimming",id:"set-swimming",level:3},{value:"Upload AM4 data",id:"upload-am4-data",level:3},{value:"Upload AM4 5 minutes of sleep data",id:"upload-am4-5-minutes-of-sleep-data",level:3},{value:"Upload AM4 current active data",id:"upload-am4-current-active-data",level:3},{value:"Upload AM4 report data",id:"upload-am4-report-data",level:3},{value:"Get totoal alarm infomation",id:"get-totoal-alarm-infomation",level:3},{value:"Set alarm",id:"set-alarm",level:3},{value:"Delete alarm",id:"delete-alarm",level:3},{value:"Get reminder",id:"get-reminder",level:3},{value:"Set reminders",id:"set-reminders",level:3},{value:"Get device state infomation",id:"get-device-state-infomation",level:3},{value:"Restore factory settings",id:"restore-factory-settings",level:3},{value:"Get time format and nation",id:"get-time-format-and-nation",level:3},{value:"Get user infomation",id:"get-user-infomation",level:3},{value:"Get swimming infomation",id:"get-swimming-infomation",level:3},{value:"Set BMR",id:"set-bmr",level:3},{value:"Disconnect AM4 connection",id:"disconnect-am4-connection",level:3}],p={toc:d};function u(e){var r=e.components,t=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"workflow"},"WorkFlow"),(0,n.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,n.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:AM4Discover object:nil];\n            \n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnectFail:) name:AM4ConnectFailed object:nil];\n            \n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:AM4ConnectNoti object:nil];\n            \n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:AM4DisConnectNoti object:nil];\n            \n[AM4Controller shareIHAM4Controller];\n\n")),(0,n.kt)("h3",{id:"2scan-for-am4-devices"},"2.Scan for AM4 devices"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_AM4];\n")),(0,n.kt)("h3",{id:"3connect-to-am4-devices"},"3.Connect to AM4 devices"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_AM4 andSerialNub:deviceMac];\n")),(0,n.kt)("h2",{id:"api-reference"},"API reference"),(0,n.kt)("h3",{id:"get-device-userid"},"Get device userID"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Get device userID\n * @param getDeviceUserIDBlock  get userID\n * @param errorBlock Communication error codes, see AM4 error descriptions.\n */\n-(void)commandAM4GetDeviceUserID:(DisposeAM4GetDeviceUserIDBlock)getDeviceUserIDBlock withErrorBlock:(DisposeAM4ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"set-randomnumber"},"Set RandomNumber"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n Set RandomNumber\n\n @param setRandomNumberBlock randomNumber\n @param errorBlock Communication error codes, see AM4 error descriptions.\n */\n-(void)commandAM4SetRandomNumber:(DisposeAM4SetRandomNumberBlock)setRandomNumberBlock withErrorBlock:(DisposeAM4ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"sync-time"},"Sync time"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Sync time\n * @param syncTimeBlock True: Success\uff0c False: Failed.\n * @param errorBlock Communication error codes, see AM4 error descriptions.\n */\n-(void)commandAM4SyncTime:(DisposeAM4SyncTimeBlock)syncTimeBlock withErrorBlock:(DisposeAM4ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"set-time-format-and-nation"},"Set time format and nation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Set time format and nation\n * @param timeFormatAndNation AM4TimeFormat_hh,AM4TimeFormat_HH,AM4TimeFormat_NoEuropeAndhh,AM4TimeFormat_EuropeAndhh,AM4TimeFormat_NoEuropeAndHH,AM4TimeFormat_EuropeAndHH\n * @param setTimeFormatBlock True: Success\uff0c False: Failed.\n * @param errorBlock Communication error codes, see AM4 error descriptions.\n */\n-(void)commandAM4SetTimeFormatAndNation:(AM4TimeFormatAndNation)timeFormatAndNation withFinishResult:(DisposeAM4TimeFormatAndNationSettingBlock)setTimeFormatBlock withErrorBlock:(DisposeAM4ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"binding-am4"},"Binding AM4"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Binding AM4 to user,Account binding requires an active internet connection.\n * @param userID userID, ranging from 1 \u2013 2147483647.\n * @param finishResultBlock True: Success\uff0c False: Failed.\n * @param errorBlock Communication error codes, see AM4 error descriptions.\n */\n-(void)commandAM4SetUserID:(NSNumber*)userID withFinishResult:(DisposeAM4SetDeviceUserIDBlock)finishResultBlock withErrorBlock:(DisposeAM4ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"setuserinfo"},"SetUserInfo"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * AM4 initialization,Must be called the first time to ensure that the AM4 has correct user information, goals, time, battery checks, etc.\n * @param user User information, needs to include the following\uff1aage(int)\u3001height(cm,1-255)\u3001weight(kg,1-255)\u3001bmr(user basal metabolic)\u3001sex(UserSex_Female or UserSex_Male)\u3001activityLevel (activityLevel=1, Sedentary,spend most of day sitting.activityLevel=2, Active,spend a good part of day doing some physical activity.activityLevel=3, Very Active,spend most of day doing heavy physical activity.)\n * @param unit AM4KmUnit_mile or AM4KmUnit_km\n * @param activeGoalNumber User goal number of steps,ranging from 4 \u2013 2147483647. Default is 10,000\n * @param swimmingGoal User goal number of swimming.ranging from 1\u20131439. Default is 30min\n * @param setUserInfoFinishBlock True: Success\uff0c False: Failed.\n * @param setBMRfinishResultBlock True: Success\uff0c False: Failed.\n * @param errorBlock Communication error codes, see AM4 error descriptions.\n */\n\n-(void)commandAM4SetUserInfo:(HealthUser *)user withUnit:(AM4KmUnit)unit withActiveGoal:(NSNumber *)activeGoalNumber withSwimmingGoal:(NSNumber *)swimmingGoal withSetUserInfoFinishResult:(DisposeAM4SetUserInfoBlock)setUserInfoFinishBlock withSetBMR:(DisposeAM4SetBMRBlock)setBMRfinishResultBlock withErrorBlock:(DisposeAM4ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"set-swimming"},"Set swimming"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Set swimming\n * @param swimmingIsOpen YES:open swimming function NO:close swimming function default:no\n * @param swimmingPoolLength swimming Pool Length,ranging from 0 \u2013 255.\n * @param noSwimmingDate automatic drop out swim duration\n * @param unit swim unit (AM4SwimmingUnit_m or AM4SwimmingUnit_km)\n * @param finishResultBlock True: Success\uff0c False: Failed.\n * @param errorBlock Communication error codes, see AM4 error descriptions.\n */\n-(void)commandAM4SetSwimmingState:(BOOL)swimmingIsOpen withSwimmingPoolLength:(NSNumber *)swimmingPoolLength withNOSwimmingTime:(NSDate *)noSwimmingDate withUnit:(AM4SwimmingUnit)unit withFinishResult:(DisposeAM4SettingSwimmingBlock)finishResultBlock withErrorBlock:(DisposeAM4ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"upload-am4-data"},"Upload AM4 data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Upload AM4 data,Data type: 5 minutes of active data, total number of steps for the day, and total calories.Also includes the number of steps for the 5 minutes of motion data, total calories for the current time, calories of the steps, and total calories.\n * @param activeTransmissionBlock activeTransmission: Start uploading motion data, including parameters\uff1aStart date\uff0cyyyy-MM-dd(ActiveHistoryDateYear,ActiveHistoryDateMonth,ActiveHistoryDateDay)\uff0cActiveStepSize\uff1aLength of each step\uff0cActiveHistoryTotoalNum\uff1aNumber of records.\n * @param activeHistoryDataBlock active data\uff0cincluding the following parameters\uff1aAMDate\u3001AMCalorie\u3001AMstepNum\u3001AMstepSize\u3001dataID\u3001Start. AMDate\uff1aWorkout time,AMCalorie: Current time total calories,AMStepNum\uff1aTotal number of steps,dataID\uff1adata ID,Start\uff1arepresents the beginning of a movement.\n * @param activeFinishTransmissionBlock Upload complete.\n * @param errorBlock Communication error codes, see AM4 error descriptions.\n */\n-(void)commandAM4StartSyncActiveData:(DisposeAM4ActiveStartTransmission)activeTransmissionBlock\n               withActiveHistoryData:(DisposeAM4ActiveHistoryData)activeHistoryDataBlock\n        withActiveFinishTransmission:(DisposeAM4ActiveFinishTransmission)activeFinishTransmissionBlock withErrorBlock:(DisposeAM4ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"upload-am4-5-minutes-of-sleep-data"},"Upload AM4 5 minutes of sleep data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Upload AM4 data,Data type: 5 minutes of sleep data\n * @param sleepTransmissionBlock sleepTransmission:Start uploading sleep data,, including parameters\uff1aSleepHistoryDate\u3001AM4SleepHistoryTotoalNum.SleepHistoryDate\uff1aSleep start time\uff0cyyyy-MM-dd HH:mm:ss(SleepHistoryDateYear,SleepHistoryDateMonth,SleepHistoryDateDay,SleepHistoryDateHour,SleepHistoryDateMinute,SleepHistoryDateSeconds).SleepHistoryTotoalNum: Number of records\n  * @param sleepHistoryDataBlock Sleep data, including the following parameters:\uff1aAMDate\u3001SleepData\u3001dataID.AMDate\uff1aSleep time, SleepData: Sleep grade, 0: awake, 1: light sleep, 2: deep sleep ,dataID: data ID.\n * @param sleepFinishTransmissionBlock Upload complete.\n * @param errorBlock Communication error codes, see AM4 error descriptions.\n */\n-(void)commandAM4StartSyncSleepData:(DisposeAM4SleepStartTransmission)sleepTransmissionBlock withSleepHistoryData:(DisposeAM4SleepHistoryData)sleepHistoryDataBlock\n        withSleepFinishTransmission:(DisposeAM4SleepFinishTransmission)sleepFinishTransmissionBlock withErrorBlock:(DisposeAM4ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"upload-am4-current-active-data"},"Upload AM4 current active data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Upload AM4 data,Data type: Sync current active data\n * @param currentActiveInfoBlock Total calories and steps for today, including parameters\uff1aStep\u3001Calories\u3001TotalCalories.Step\uff1aNumber of steps taken today.Calories\uff1aNumber of calories burned today.TotalCalories\uff1aSum calories burned and bmr today.\n * @param errorBlock Communication error codes, see AM4 error descriptions.\n */\n-(void)commandAM4StartSyncCurrentActiveData:(DisposeAM4GetCurrentActiveInfo)currentActiveInfoBlock withErrorBlock:(DisposeAM4ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"upload-am4-report-data"},"Upload AM4 report data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Upload AM4 report data.\n * @param stageDataBlock Report data, including parameters:ReportStage_Swimming(0)\u3001ReportStage_Work_out(1)\u3001ReportStage_Sleep_summary(2).ReportStage_Swimming:Report Stage Swimming.including parameters:SwimmingMeasureDate(swimming Measure date)\u3001SwimmingTimeNumber(swimming time number)\u3001SwimmingTimes(swimming times)\u3001Swimmingcalories(swimming calories)\u3001SwimmingAct(swimming action)\u3001SwimmingCircleCount(swimming circle count)\u3001SwimmingPoollength(swimming pool length)\u3001EnterSwimmingTime(enter swimming time)\u3001OutSwimmingTime\uff08out swimming time\uff09\u3001SwimmingProcessMark\uff08swimming process mark\uff09\u3001SwimStartTimeStamp\uff08swim start time stamp\uff09\u3001dataID(data ID).ReportStage_Work_out:Report Stage active,including parameters:Work_outCalories(Workout calories burned)\u3001Work_outLengthNumber(Workout distance)\u3001Work_outMeasureDate(Start time)\u3001Work_outStepNumber(Workout number of steps)\u3001Work_outTimeNumber(Length of workout)\u3001dataID(data ID).ReportStage_Sleep_summary:Report Stage sleep,including parameters:Sleep_summaryMeasureDate\uff08Sleep start time\uff09\u3001Sleep_summarySleepTime\uff08Sleep duration\uff09\u3001Sleep_summarysleepAddMinute\uff08Correct sleep duration length\uff09\u3001Sleep_summarysleepEfficiency\uff08Sleep efficiency percentage, range is 0-100\uff09\n * @param stageDataFinishTransmissionBlock YES: Success\uff0cNO: Failed.\n * @param errorBlock Communication error codes, see AM4 error descriptions.\n */\n-(void)commandAM4StartSyncStageData:(DisposeAM4StageMeasureDataBlock)stageDataBlock withStageDataFinishTransmission:(DisposeAM4StageMeasureFinishBlock)stageDataFinishTransmissionBlock withErrorBlock:(DisposeAM4ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"get-totoal-alarm-infomation"},"Get totoal alarm infomation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Get totoal alarm infomation\n * @param totoalAlarmInfoBlock Alarm array contains up to 3 alarms, each one needs the following parameters\uff1aAlarmId\u3001Time\u3001Week.AlarmId\uff1a1, 2, 3.Time\uff1aHH:mm.Week(Sun\u3001Mon\u3001Tue\u3001Wed\u3001Thu\u3001Fri\u3001Sat)True: On, False: Off\n * @param errorBlock Communication error codes, see AM4 error descriptions.\n */\n-(void)commandAM4GetTotoalAlarmInfo:(DisposeAM4TotoalAlarmData)totoalAlarmInfoBlock withErrorBlock:(DisposeAM4ErrorBlock)errorBlock;\n\n")),(0,n.kt)("h3",{id:"set-alarm"},"Set alarm"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Set alarm.\n * @param alarmDic Alarm information, include parameters\uff1aAlarmId(1\u30012\u30013)\u3001Time\u3001IsRepeat\u3001Switch\u3001Week\uff08Sun\u3001Mon\u3001Tue\u3001Wed\u3001Thu\u3001Fri\u3001Sat)\n * @param finishResultBlock True: Alarm set successfully\uff0cFalse: Failed.\n * @param errorBlock Communication error codes, see AM4 error descriptions.\n */\n-(void)commandAM4SetAlarmDictionary:(NSDictionary *)alarmDic withFinishResult:(DisposeAM4SetAlarmBlock)finishResultBlock withErrorBlock:(DisposeAM4ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"delete-alarm"},"Delete alarm"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Delete alarm.\n * @param alarmID alarmID\uff1a1, 2, 3.\n * @param finishResultBlock True: Delete successful\uff0cFalse: Failed\n * @param errorBlock Communication error codes, see AM4 error descriptions.\n */\n-(void)commandAM4DeleteAlarmID:(NSNumber *)alarmID withFinishResult:(DisposeAM4DeleteAlarmBlock)finishResultBlock withErrorBlock:(DisposeAM4ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"get-reminder"},"Get reminder"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Get reminder.\n * @param remindInfoBlock Array containing following parameters\uff1aReminderID\u3001Time\u3001Switch.ReminderID\uff1aReminder ID.Time\uff1aformat HH:mm, time between reminders (HH*60+mm) minutes.Switch\uff1aReminder on/off\uff0cTrue: On\uff0c False: Off.\n * @param errorBlock Communication error codes, see AM4 error descriptions.\n */\n-(void)commandAM4GetReminderInfo:(DisposeAM4RemindInfoBlock)remindInfoBlock withErrorBlock:(DisposeAM4ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"set-reminders"},"Set reminders"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Set reminders.\n * @param reminderDic Array containing collowing parameters\uff1aTime\u3001Switch\u3002\n * @param finishResultBlock YES: Successfully set, NO: Failed.\n * @param errorBlock Communication error codes, see AM4 error descriptions.\n */\n-(void)commandAM4SetReminderDictionary:(NSDictionary *)reminderDic withFinishResult:(DisposeAM4SetReminderBlock)finishResultBlock withErrorBlock:(DisposeAM4ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"get-device-state-infomation"},"Get device state infomation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Get device state infomation\n * @param deviceStateInfoBlock AM status\uff0cState_wrist  (AM4 being worn on the wrist)\uff0cState_waist (AM4 worn with belt clip).\n * @param batteryBlock AM battery percentage, from 0\uff5e100.\n * @param errorBlock Communication error codes, see AM4 error descriptions.\n */\n-(void)commandAM4GetDeviceStateInfo:(DisposeAM4StateInfoBlock)deviceStateInfoBlock withBattery:(DisposeAM4BatteryBlock)batteryBlock withErrorBlock:(DisposeAM4ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"restore-factory-settings"},"Restore factory settings"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Restore factory settings.\n * @param resetDeviceBlock True: Success\uff0c False: Failed.\n * @param errorBlock Communication error codes, see AM4 error descriptions.\n */\n-(void)commandAM4ResetDevice:(DisposeAM4ResetDeviceBlock)resetDeviceBlock withErrorBlock:(DisposeAM4ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"get-time-format-and-nation"},"Get time format and nation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Get time format and nation\n * @param timeAndNationBlock  (AM4TimeFormat_hh,AM4TimeFormat_HH,AM4TimeFormat_NoEuropeAndhh,AM4TimeFormat_EuropeAndhh,AM4TimeFormat_NoEuropeAndHH,AM4TimeFormat_EuropeAndHH)\n * @param errorBlock Communication error codes, see AM4 error descriptions.\n */\n-(void)commandAM4GetTimeFormatAndNation:(DisposeAM4TimeFormatAndNationBlock)timeAndNationBlock withErrorBlock:(DisposeAM4ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"get-user-infomation"},"Get user infomation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Get user infomation\n * @param userInfoBlock including parameters:Age,Step,Height,Gender,Weight,Unit,goal(TotalStep1\u3001TotalStep2\u3001TotalStep3)\n * @param errorBlock Communication error codes, see AM4 error descriptions.\n */\n-(void)commandAM4GetUserInfo:(DisposeAM4UserInfoBlock)userInfoBlock withErrorBlock:(DisposeAM4ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"get-swimming-infomation"},"Get swimming infomation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Get swimming infomation\n * @param swimmingInfoBlock including parameters:swimmingIsOpen,swimmingLaneLength,NOSwimmingTime,unit\n * @param errorBlock Communication error codes, see AM4 error descriptions.\n */\n-(void)commandAM4GetSwimmingInfo:(DisposeAM4SwimmingBlock)swimmingInfoBlock withErrorBlock:(DisposeAM4ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"set-bmr"},"Set BMR"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Set BMR\n * @param bmr ranging from 0 \u2013 5000.\n * @param finishResultBlock True: Delete successful\uff0cFalse: Failed\n * @param errorBlock Communication error codes, see AM4 error descriptions.\n */\n-(void)commandAM4SetBMR:(NSNumber *)bmr withFinishResult:(DisposeAM4SetBMRBlock)finishResultBlock withErrorBlock:(DisposeAM4ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"disconnect-am4-connection"},"Disconnect AM4 connection"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Disconnect AM4 connection.\n * @param disconnectBlock  True: Success\uff0cFalse: Failed.\n * @param errorBlock Communication error codes, see AM4 error descriptions.\n */\n-(void)commandAM4Disconnect:(DisposeAM4DisconnectBlock)disconnectBlock withErrorBlock:(DisposeAM4ErrorBlock)errorBlock;\n")))}u.isMDXComponent=!0}}]);