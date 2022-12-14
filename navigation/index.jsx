import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator, CardStyleInterpolators } from '@react-navigation/native-stack';
import * as React from 'react';
import { Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import EventListScreen from '../screens/EventListScreen';
import ExtensionsListScreen from '../screens/ExtensionsListScreen';
import ExtensionDetails from '../screens/ExtensionDetails';
import EventDetails from '../screens/EventDetails'


export default function Navigation({ colorScheme }) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DefaultTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="EventDetails" component={EventDetails} options={{title: 'Detalhes do Evento'}}/>
        <Stack.Screen name="ExtensionDetails" component={ExtensionDetails} options={{title: 'Detalhes da Extensão'}}/>
      </Stack.Group>
    </Stack.Navigator>
  );
}
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Eventos"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        // tabBarActiveTintColor: '#D32F2F',
      }}>
      <BottomTab.Screen
        name="Eventos"
        component={EventListScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Extensões"
        component={ExtensionsListScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
