import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';

export default function AppNavigator() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Home" component = {HomeScreen}/>
            <Stack.Screen name = "Profile" component = {ProfileScreen} />
        </Stack.Navigator>
    );
}