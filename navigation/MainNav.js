import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import OnboardingScreen from '../screens/OnboardingScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LegalScreen from '../screens/LegalScreen';
import RecoverScreen from '../screens/RecoveryScreen';
const MainNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={OnboardingScreen} />
      <Stack.Screen name="Legal" component={LegalScreen}/>
      <Stack.Screen name="recover" component={RecoverScreen}/>
    </Stack.Navigator>
  );
};

export default MainNav;
