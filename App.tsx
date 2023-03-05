/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import type {PropsWithChildren} from 'react';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
// import {SignInScreen} from './screens/SignInScreen';
import {PasscodeScreen} from './screens/Passcode';
import {MainScreen} from './screens/MainScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  //Main screen
  return <MainScreen />;

  //Authen screen
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          alignItems: 'center',
          flexGrow: 1,
          justifyContent: 'space-evenly',
          height: '100%',
        }}>
        <PasscodeScreen />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
