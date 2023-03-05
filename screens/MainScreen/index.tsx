import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {WithdrawScreen} from './WithdrawScreen';
import {SettingScreen} from './SettingScreen';
import {HomeScreen} from './HomeScreen';
const Tab = createMaterialBottomTabNavigator();

export const MainScreen = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="HOME" component={HomeScreen} />
      <Tab.Screen name="WITHDRAW" component={WithdrawScreen} />
      <Tab.Screen name="SETTING" component={SettingScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);
