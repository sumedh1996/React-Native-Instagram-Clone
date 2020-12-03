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
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Router from './Router'
import { withAuthenticator } from 'aws-amplify-react-native'

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Router />

    </NavigationContainer>

  );
};


export default withAuthenticator(App)
