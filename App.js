import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNav from './navigation/MainNav';
import {GlobalStyles} from './styles/GlobalStyles';
GlobalStyles;
const App = () => {
  return (
    <NavigationContainer>
      <MainNav />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
