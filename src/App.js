import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import store from './redux/store';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Router />
        <FlashMessage position="top" />
      </Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
