import {SafeAreaView, Text, View} from 'react-native';
import React, {Component} from 'react';
import MyTabs from './component/Navigation/BottomStackNaviagtion';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './component/auth/Auth';
import {NativeBaseProvider} from 'native-base';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();
const App = () => {
  const [active, setActive] = React.useState(true);
  return (
    <SafeAreaView style={{flex: 1}}>
      <NativeBaseProvider>
        <NavigationContainer>
          {active ? <Auth setActive={setActive} /> : <MyTabs />}
          {/* <Auth /> */}
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaView>
  );
};

export default App;
