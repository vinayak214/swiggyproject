import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import StackNavigator from './StackNavigator';

const App = () => {
  return (

    <StackNavigator></StackNavigator>
 
  )
}

const Styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"fff",
  }
})
export default App


