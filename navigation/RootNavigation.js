import React from 'react';
import { createAppContainer, StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../src/screens/HomeScreen';
import EmailScreen from '../src/screens/EmailScreen'
import FirstFamilyIncome from '../src/screens/FirstFamilyIncome';
import FamilySize from '../src/screens/FamilySize';
import Enrollment from '../src/screens/Enrollment';
import Work from '../src/screens/Work';
import ResultsScreen from '../src/screens/ResultsScreen';
import SecondFamilyIncome from '../src/screens/SecondFamilyScreen';
import TotalAid from '../src/screens/TotalAid';
import ResultsBreakdown from '../src/screens/ResultsBreakdown';
import FederalScreen from '../src/screens/FederalScreen';
import FoodScreen from '../src/screens/FoodScreen';
import NextSteps from '../src/screens/NextSteps';
import StateComponent from '../src/screens/components/StateComponent';
import EITC from '../src/screens/EITC';
import WelcomeScreen from '../src/screens/WelcomeScreen';
import ThinkingScreen from '../src/screens/ThinkingScreen';
import NextSteps2 from '../src/screens/NextSteps2';

const RootStackNavigator =  createStackNavigator(
  {
      screen: HomeScreen,
      email: EmailScreen,
      firstFamily: FirstFamilyIncome,
      familySize: FamilySize,
      Enrollment: Enrollment,
      Work: Work,
      Results: ResultsScreen,
      SecondFamily: SecondFamilyIncome,
      TotalAid: TotalAid,
      ResultsBreakdown: ResultsBreakdown,
      FederalScreen: FederalScreen,
      FoodScreen: FoodScreen,
      NextSteps: NextSteps,
      StateComponent: StateComponent,
      EITC: EITC,
      WelcomeScreen: WelcomeScreen,
      ThinkingScreen: ThinkingScreen,
      NextSteps2: NextSteps2
  },
  {
    initialRouteName:"WelcomeScreen", // first component that should be displayed
    defaultNavigationOptions: {
      title: "My College Cash" 
    }
  }
);

export default createAppContainer(RootStackNavigator)