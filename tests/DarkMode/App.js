import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import themeContext from './config/themeContext';
import theme from './config/theme';
import { EventRegister } from 'react-native-event-listeners';

export default function App() {

  const [ mode, setMode ] = useState(false);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener("changeTheme", (data) => {
      setMode(data);
      console.log(data);
    });
    return () => {
      EventRegister.removeEventListener(eventListener);
    }
  })
  return (
    <themeContext.Provider value = { mode === false ? theme.dark : theme.light }>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </themeContext.Provider>
  );
}