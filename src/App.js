/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {
  StatusBar,
  View,Text, SafeAreaView
} from 'react-native';
import HomeScreen from './Screens/HomeScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <HomeScreen />
      </SafeAreaView>
      
    </>
  );
};


export default App;
