import React from 'react';
import { createAppContainer, StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../src/screens/HomeScreen';

const RootStackNavigator =  createStackNavigator(
  {
      screen: HomeScreen
  },
  {
    initialRouteName:"screen", // first component that should be displayed
    defaultNavigationOptions: {
      title: "App" 
    }
  }
);

export default createAppContainer(RootStackNavigator)