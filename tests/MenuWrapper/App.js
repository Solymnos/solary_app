import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

async function loadAllYourData()
{
  const delay = ms => new Promise(res => setTimeout(res, ms));

  await delay(5000);
  console.log('wait 5s');
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      await loadAllYourData();
      setAppIsReady(true);
    }

    prepare();
  }, []);


  return appIsReady ? (
    <View>
      <Text>My App</Text>
    </View>
  ) : (
    <View>
      <Text>NOT READY</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//https://docs.expo.dev/guides/splash-screens/