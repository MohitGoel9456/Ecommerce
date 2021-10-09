/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';
import Navigation from './src/navigation/Navigation';
import {UserContext, UserProvider} from './src/screens/ParentComponent'

const App = () => {

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar />
      <UserProvider>
        <Navigation/>
      </UserProvider>
    </SafeAreaView>
  );
};

export default App;
