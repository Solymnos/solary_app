import React, { useState , useContext } from 'react';
import { View, Button, Text, StyleSheet, Switch } from 'react-native';

import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../config/themeContext';

export default function HomeScreen({navigation}) {

    const [mode, setMode] = useState(false);
    const theme = useContext(themeContext);

    return (
        <View style = {[style.container, { backgroundColor : theme.background }]}>
            <Text style = {[style.text, { color : theme.color }]}>Welcome to HomeScreen</Text>
            <Switch value={mode} onValueChange={() => {
                setMode((value) => !value);
                EventRegister.emit('changeTheme', mode);
                }
            }/>
            <View style = {style.button}>
                <Button title = "View Profile" onPress = {() => navigation.navigate("Profile")}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent : "center",
        alignItems : "center"
    },
    text : {
        fontWeight : "bold",
        fontSize : 20,
        paddingBottom : 20
    },
    button: {
        paddingTop: 20
    }
});