import * as React from 'react';
import {Text, View, Button, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeScreen/Home';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Analytics from './Analytics/AnalyticsScreen';
import ContentScreen from '../content/Content';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function TestScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Test!</Text>
    </View>
  );
}

function HomeScreen(props: any) {
  const gotoTestStackScreen = () => {
    props.navigation.navigate('Test');
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <Button title="Go to test stack screen" onPress={gotoTestStackScreen} />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Dashboard',

          tabBarIcon: ({color, size}) => (
            <AntDesign
              name="home"
              size={Platform.OS === 'android' ? 30 : 30}
              color={color}
            />
          ),
        }}
        name="Homes"
        component={HomeNavigation}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Content',

          tabBarIcon: ({color, size}) => (
            <Foundation
              name="database"
              size={Platform.OS === 'android' ? 30 : 30}
              color={color}
            />
          ),
        }}
        name="Content"
        component={ContentScreen}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Analytics',

          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="analytics"
              size={Platform.OS === 'android' ? 30 : 30}
              color={color}
            />
          ),
        }}
        name="Analytics"
        component={Analytics}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Orders',

          tabBarIcon: ({color, size}) => (
            <FontAwesome name="shopping-basket" size={28} color={color} />
          ),
        }}
        name="Orders"
        component={SettingsScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Settings',

          tabBarIcon: ({color, size}) => (
            <AntDesign
              name="setting"
              size={Platform.OS === 'android' ? 30 : 30}
              color={color}
            />
          ),
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Tabs">
      <Stack.Screen name="Test" component={TestScreen} />
      <Stack.Screen name="Tabs" component={MyTabs} />
    </Stack.Navigator>
  );
}
