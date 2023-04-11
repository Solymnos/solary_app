import React , { useState } from "react";
import { Text, Image, ScrollView, View, TouchableHighlight } from 'react-native';

export default function Result({result})
{
    let Footer;

    if (result.SLYWIN == true)
    {
        Footer = (
            <View className="bg-green-400 w-full rounded-b-xl">
                <Text className="font-bold text-center">
                    {result.competition}
                </Text>
            </View>
        )
    } else if (result.SLYWIN == false)
    {
        Footer = (
            <View className="bg-red-400 w-full rounded-b-xl">
                <Text className="font-bold text-center">
                    {result.competition}
                </Text>
            </View>
        )
    } else 
    {
        Footer = (
            <View className="bg-primary w-full rounded-b-xl">
                <Text className="font-bold text-center">
                    {result.competition}
                </Text>
            </View>
        )
    }

    if (result.style == "oppo")
    {
        return (
            <View className="my-2 flex flex-col w-full border border-gray-600 rounded-xl">
                <View className="flex flex-row">
                    <View className=" flex-col flex flex-grow items-center justify-center  w-2/5">
                        <Image style={{resizeMode:"contain"}}  source={ { uri :  result.team_1_icon } } className='h-16 w-16 mb-2 mt-3'/>
                        <Text className="text-white mb-2 font-bold text-lg">{result.team_1_name}</Text>
                    </View>
                    <View className=" w-1/5 justify-center">
                        <Text className="text-2xl font-bold text-white text-center mb-2">{result.team_1_score} - {result.team_2_score}</Text>
                    </View>
                    <View className=" flex-col flex flex-grow items-center w-2/5 justify-center">
                        <Image style={{resizeMode:"contain"}}  source={ { uri :  result.team_2_icon } } className='h-16 w-16 mb-2 mt-3'/>
                        <Text className="text-white mb-2 font-bold text-lg">{result.team_2_name}</Text>
                    </View>
                </View>
                {Footer}
            </View>
        )
    } else if (result.style == "tournament")
    {
        return (
            <View className="my-2 flex flex-col w-full border border-gray-600 rounded-xl">
                <View className="flex flex-row">
                    <View className="py-2 flex-col flex flex-grow items-center justify-center w-2/3">
                        {
                            result.players.map((player) =>
                            <Text className="text-white text-xl font-bold">
                                 {player.name} : {player.classement} 
                            </Text>)
                        }
                    </View>
                    <View className=" flex-col flex flex-grow w-1/3 justify-center items-end">
                    <Image style={{resizeMode:"contain"}}  source={ { uri :  result.tournament_icon } } className='h-28 w-28 rounded-tr-xl'/>
                    </View>
                </View>
                {Footer}
            </View>
        )
    } else {
        return
        {
            <Text className="text-green-500">
                {result.style}
            </Text>
        }
    }
}