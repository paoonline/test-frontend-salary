Please run first step

yarn install and pod install for ios, build gradle for android

 "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
  },
  
 prefixApi for ios and android local api,

const prefixApi =
  Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://192.168.1.6:3000'; // depend on ip such as computer

Please recheck file services/api.ts first
