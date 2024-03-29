import React, { useState, useEffect } from 'react';
import LoadingPage from './pages/LoadingPage';
import { initAPIInfos } from './utils/ApiUtils';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import StreamersPage from './pages/StreamersPage';
import EsportPage from './pages/EsportPage';
import ProgPage from './pages/ProgPage';
import SettingsPage from './pages/SettingsPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator clas screenOptions={({ route }) =>({
      headerShown : false,
      tabBarStyle : {
        backgroundColor : '#000000',
      },
      tabBarLabelStyle : {
        fontSize : 13,
      },
      tabBarActiveTintColor : '#FBC600',
    })}>
      <Tab.Screen name="Streams" component={StreamersPage}
        options={{
          tabBarIcon : ({color, size}) => (
            <MaterialIcons name="live-tv" color={color} size={size} />
          )
        }}/>
      <Tab.Screen name="Esport" component={EsportPage} 
        options={{
          tabBarIcon : ({color, size}) => (
            <MaterialIcons name="sports-esports" color={color} size={size} />
          )
        }}/>
      <Tab.Screen name="Programme" component={ProgPage} 
        options={{
          tabBarIcon : ({color, size}) => (
            <MaterialIcons name="calendar-today" color={color} size={size} />
          )
        }}/>
      <Tab.Screen name="Settings" component={SettingsPage} 
        options={{
          tabBarIcon : ({color, size}) => (
            <MaterialIcons name="settings" color={color} size={size} />
          )
        }}/>
    </Tab.Navigator>
  )
}

export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      await initAPIInfos();
      setAppIsReady(true);
    }

    prepare();
  }, [])
  return appIsReady ? (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  ) : (
    <LoadingPage />
  )
}
