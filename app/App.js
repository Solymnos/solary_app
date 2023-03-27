import React, { useState, useEffect } from 'react';
import LoadingPage from './pages/LoadingPage';
import { apiGetInfo } from './utils/ApiUtils';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import StreamersPage from './pages/StreamersPage';
import EsportPage from './pages/EsportPage';
import MediasPage from './pages/MediasPage';
import SettingsPage from './pages/SettingsPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Tab = createBottomTabNavigator();

function StreamersScreen() {
  return (
    <StreamersPage />
  );
}

function SettingsScreen() {
  return (
    <SettingsPage />
  );
}

function EsportScreen() {
  return (
    <EsportPage />
  );
}

function MediasScreen() {
  return (
    <MediasPage />
  );
}

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
      <Tab.Screen name="Streams" component={StreamersScreen}
        options={{
          tabBarIcon : ({color, size}) => (
            <MaterialIcons name="live-tv" color={color} size={size} />
          )
        }}/>
      <Tab.Screen name="Esport" component={EsportScreen} 
        options={{
          tabBarIcon : ({color, size}) => (
            <MaterialIcons name="sports-esports" color={color} size={size} />
          )
        }}/>
      <Tab.Screen name="Medias" component={MediasScreen} 
        options={{
          tabBarIcon : ({color, size}) => (
            <MaterialIcons name="video-library" color={color} size={size} />
          )
        }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} 
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
      await apiGetInfo();
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
