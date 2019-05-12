import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import PermissionScreen from '../screens/PermissionScreen'
import LoginScreen from '../screens/WelcomeScreen'
import InfoScreen from '../screens/InfoScreen'
import MissionScreen from '../screens/MissionScreen'

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Permission: PermissionScreen,
  Login: LoginScreen,
  Main: MainTabNavigator,
  Info: InfoScreen,
  Mission: MissionScreen
}));