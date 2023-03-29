import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Hello Food Market App</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
