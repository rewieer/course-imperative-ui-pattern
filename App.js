import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Scene from "./Scene";
import { DeleteModalProvider } from "./DeleteModal";

const App = () => {
  return (
    <DeleteModalProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Scene />
      </SafeAreaView>
    </DeleteModalProvider>
  );
};

export default App;
