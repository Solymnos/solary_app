import React from "react";
import { Image, ScrollView, Text, View, ViewBase } from 'react-native';

export default function Players({staffs, players}) {

    let Staffs;
    let Players;

    if (staffs.length > 0)
    {
        Staffs = (
            <View className="mt-4"> 
                <Text className="text-white font-bold text-2xl mb-2 ml-3 border-b-2 border-primary">Staff</Text>
                <View className="flex flex-wrap flex-row">
                {
                    staffs.map((staff) => (
                        <View className="w-1/2 justify-center items-center py-2">
                            <Image style={{resizeMode:"contain"}} className='h-44 w-44' source={{uri : staff.icon }}/>
                            <Text className="text-white font-bold text-xl">{staff.name}</Text>
                            <Text className="text-white text-xl">{staff.role}</Text>
                        </View>
                    ))
                }
                </View>
            </View>
        )
    } else {
        Staffs = null
    }

    if (players.length > 0)
    {
        Players = (
            <View> 
                <Text className="text-white font-bold text-2xl mb-2 ml-3 border-b-2 border-primary">Joueurs</Text>
                <View className="flex flex-wrap flex-row">
                {
                    players.map((player) => (
                        <View className="w-1/2 justify-center items-center py-2">
                            <Image style={{resizeMode:"contain"}} className='h-44 w-44' source={{uri : player.icon }}/>
                            <Text className="text-white font-bold text-xl">{player.name}</Text>
                            <Text className="text-white text-xl">{player.role}</Text>
                        </View>
                    ))
                }
                </View>
            </View>
        )
    } else {
        Players = null
    }

    return (
        <ScrollView className="h-full w-full relative flex-1">
            {Players}
            {Staffs}
        </ScrollView>
    )
}