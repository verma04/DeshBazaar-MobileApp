import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
function AnalyticsScreen({navigation}: {navigation: any}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Ionicons
        testID="nextButton"
        name="arrow-forward"
        color="rgba(255, 255, 255, .9)"
        size={24}
        style={{backgroundColor: 'transparent'}}
      />
      <Button
        onPress={() => navigation.navigate('Test')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}: {navigation: any}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function Analytics() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="AnalyticsScreen" component={AnalyticsScreen} />
    </Stack.Navigator>
  );
}
