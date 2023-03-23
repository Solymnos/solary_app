import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import themeContext from '../config/themeContext';

export default function HomeScreen() {

    const theme = useContext(themeContext);
    return (
        <View style = {[style.container, {backgroundColor : theme.background }]}>
            <Text style = {[style.text, { color : theme.color }]}>Welcome to ProfileScreen</Text>
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
    }
});