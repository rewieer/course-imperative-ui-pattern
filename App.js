import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Scene from "./Scene";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Scene />
      </SafeAreaView>
    </>
  );
};

export default App;
