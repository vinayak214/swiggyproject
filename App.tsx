import React from 'react';
import type { PropsWithChildren } from 'react';
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
import { Provider } from "react-redux";
import Store from './Store';
const App = () => {
  return (

    <Provider store={Store}>
      <StackNavigator></StackNavigator>
    </Provider>

  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "fff",
  }
})
export default App


