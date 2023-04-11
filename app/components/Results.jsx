import React , { useState } from "react";
import { Text, Image, ScrollView, View, TouchableHighlight } from 'react-native';
import Result from "./Result";

export default function Results({results})
{   
    let [ watchMoreResults, setWatchMoreResults ] = useState(false);

    let Results;

    if (results.length <= 0)
    {
        Results =
        (
            <View>
                <Text className="text-white font-bold text-2xl mb-2 ml-3 border-b-2 border-primary">Pas encore de matchs de prévus</Text>
            </View>
        )
    } else if (results.length <= 3)
    {
        Results = 
        (
            <View>
                <Text className="text-white font-bold text-3xl mb-2 ml-3 border-b-2 border-primary">Résultats</Text>
                <View className="flex flex-col">
                    {
                        results.map((result) => (
                            <Result result={result} />
                        ))
                    }
                </View>
            </View>
        )
    }

    /*
    if (games.incoming.length <= 0)
    {
        incomingGames = (
            <View>
                <Text className="text-white font-bold text-2xl mb-2 ml-3 border-b-2 border-primary">Pas encore de matchs de prévus</Text>
            </View>
        )
    } else if (games.incoming.length <= 3)
    {
        incomingGames = (
            <View>
                <Text className="text-white font-bold text-3xl mb-2 ml-3 border-b-2 border-primary">Prochains Matchs</Text>
                <View className="flex flex-col">
                    {
                        games.incoming.map((game) => (
                            <View className="my-2 flex flex-col w-full border border-gray-600 rounded-xl">
                                <View className="flex flex-row">
                                    <View className=" flex-col flex flex-grow items-center justify-center  w-2/5">
                                        <Image style={{resizeMode:"contain"}}  source={ { uri :  game.team_1_icon } } className='h-16 w-16 mb-2 mt-3'/>
                                        <Text className="text-white mb-2 font-bold text-lg">{game.team_1_name}</Text>
                                    </View>
                                    <View className=" w-1/5 justify-center">
                                        <View className="bg-white items-center rounded-xl">
                                            <Text className="text-black font-bold text-xl">{game.type}</Text>
                                        </View>
                                        <Text className="text-white font-bold text-center my-2">{game.date}</Text>
                                    </View>
                                    <View className=" flex-col flex flex-grow items-center w-2/5 justify-center">
                                        <Image style={{resizeMode:"contain"}}  source={ { uri :  game.team_2_icon } } className='h-16 w-16 mb-2 mt-3'/>
                                        <Text className="text-white mb-2 font-bold text-lg">{game.team_2_name}</Text>
                                    </View>
                                </View>
                                <View className="bg-primary w-full rounded-b-xl">
                                    <Text className="font-bold text-center">
                                        {game.competition}
                                    </Text>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </View>
        )
    } else {
        if (incomingMore == false)
        {
            incomingGames = (
                <View>
                    <Text className="text-white font-bold text-3xl mb-2 ml-3 border-b-2 border-primary">Prochains Matchs</Text>
                    <View className="flex flex-col">
                        {
                            games.incoming.slice(0,3).map((game) => (
                                <View className="my-2 flex flex-col w-full border border-gray-600 rounded-xl">
                                    <View className="flex flex-row">
                                        <View className=" flex-col flex flex-grow items-center justify-center  w-2/5">
                                            <Image style={{resizeMode:"contain"}}  source={ { uri :  game.team_1_icon } } className='h-16 w-16 mb-2 mt-3'/>
                                            <Text className="text-white mb-2 font-bold text-lg">{game.team_1_name}</Text>
                                        </View>
                                        <View className=" w-1/5 justify-center">
                                            <View className="bg-white items-center rounded-xl">
                                                <Text className="text-black font-bold text-xl">{game.type}</Text>
                                            </View>
                                            <Text className="text-white font-bold text-center my-2">{game.date}</Text>
                                        </View>
                                        <View className=" flex-col flex flex-grow items-center w-2/5 justify-center">
                                            <Image style={{resizeMode:"contain"}}  source={ { uri :  game.team_2_icon } } className='h-16 w-16 mb-2 mt-3'/>
                                            <Text className="text-white mb-2 font-bold text-lg">{game.team_2_name}</Text>
                                        </View>
                                    </View>
                                    <View className="bg-primary w-full rounded-b-xl">
                                        <Text className="font-bold text-center">
                                            {game.competition}
                                        </Text>
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                    <TouchableHighlight className="w-full border border-gray-400 rounded-xl my-3" onPress={() => setIncomingMore(true)}>
                        <Text className="text-white text-center text-lg">
                            Voir Plus
                        </Text>
                    </TouchableHighlight>
                </View>
            )
        } else {
            incomingGames = (
                <View>
                    <Text className="text-white font-bold text-3xl mb-2 ml-3 ">Prochains Matchs</Text>
                    <View className="flex flex-col">
                        {
                            games.incoming.map((game) => (
                                <View className="my-2 flex flex-col w-full border border-gray-600 rounded-xl">
                                    <View className="flex flex-row">
                                        <View className=" flex-col flex flex-grow items-center justify-center  w-2/5">
                                            <Image style={{resizeMode:"contain"}}  source={ { uri :  game.team_1_icon } } className='h-16 w-16 mb-2 mt-3'/>
                                            <Text className="text-white mb-2 font-bold text-lg">{game.team_1_name}</Text>
                                        </View>
                                        <View className=" w-1/5 justify-center">
                                            <View className="bg-white items-center rounded-xl">
                                                <Text className="text-black font-bold text-xl">{game.type}</Text>
                                            </View>
                                            <Text className="text-white font-bold text-center my-2">{game.date}</Text>
                                        </View>
                                        <View className=" flex-col flex flex-grow items-center w-2/5 justify-center">
                                            <Image style={{resizeMode:"contain"}}  source={ { uri :  game.team_2_icon } } className='h-16 w-16 mb-2 mt-3'/>
                                            <Text className="text-white mb-2 font-bold text-lg">{game.team_2_name}</Text>
                                        </View>
                                    </View>
                                    <View className="bg-primary w-full rounded-b-xl">
                                        <Text className="font-bold text-center">
                                            {game.competition}
                                        </Text>
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                </View>
            )
        }
    }


    if (games.passed.length <= 0)
    {
        passedGames = (
            <View>
                <Text className="text-white font-bold text-2xl mb-2 ml-3 border-b-2 border-primary">Pas encore de résultats</Text>
            </View>
        )
    } else if (games.passed.length <= 3)
    {
        passedGames = (
            <View>
                <Text className="text-white font-bold text-3xl mb-2 mt-3 ml-3 border-b-2 border-primary">Résultats</Text>
                <View className="flex flex-col">
                    {
                        games.passed.map((game) => (
                            <View className="my-2 flex flex-col w-full border border-gray-600 rounded-xl">
                                <View className="flex flex-row">
                                    <View className=" flex-col flex flex-grow items-center justify-center  w-2/5">
                                        <Image style={{resizeMode:"contain"}}  source={ { uri :  game.team_1_icon } } className='h-16 w-16 mb-2 mt-3'/>
                                        <Text className="text-white mb-2 font-bold text-lg">{game.team_1_name}</Text>
                                    </View>
                                    <View className=" w-1/5 justify-center">
                                        <Text className="text-2xl font-bold text-white text-center mb-2">{game.team_1_score} - {game.team_2_score}</Text>
                                    </View>
                                    <View className=" flex-col flex flex-grow items-center w-2/5 justify-center">
                                        <Image style={{resizeMode:"contain"}}  source={ { uri :  game.team_2_icon } } className='h-16 w-16 mb-2 mt-3'/>
                                        <Text className="text-white mb-2 font-bold text-lg">{game.team_2_name}</Text>
                                    </View>
                                </View>
                                <View className="bg-primary w-full rounded-b-xl">
                                    <Text className="font-bold text-center">
                                        {game.competition}
                                    </Text>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </View>
        )
    } else {
        if (passedMore == false)
        {
            passedGames = (
                <View>
                    <Text className="text-white font-bold text-3xl mb-2 ml-3 border-b-2 border-primary">Résultats</Text>
                    <View className="flex flex-col">
                        {
                            games.passed.slice(0,3).map((game) => (
                                <View className="my-2 flex flex-col w-full border border-gray-600 rounded-xl">
                                    <View className="flex flex-row">
                                        <View className=" flex-col flex flex-grow items-center justify-center  w-2/5">
                                            <Image style={{resizeMode:"contain"}}  source={ { uri :  game.team_1_icon } } className='h-16 w-16 mb-2 mt-3'/>
                                            <Text className="text-white mb-2 font-bold text-lg">{game.team_1_name}</Text>
                                        </View>
                                        <View className=" w-1/5 justify-center">
                                            <Text className="text-2xl font-bold text-white text-center mb-2">{game.team_1_score} - {game.team_2_score}</Text>
                                        </View>
                                        <View className=" flex-col flex flex-grow items-center w-2/5 justify-center">
                                            <Image style={{resizeMode:"contain"}}  source={ { uri :  game.team_2_icon } } className='h-16 w-16 mb-2 mt-3'/>
                                            <Text className="text-white mb-2 font-bold text-lg">{game.team_2_name}</Text>
                                        </View>
                                    </View>
                                    <View className="bg-primary w-full rounded-b-xl">
                                        <Text className="font-bold text-center">
                                            {game.competition}
                                        </Text>
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                    <TouchableHighlight className="w-full border border-gray-400 rounded-xl my-3" onPress={() => setPassedMore(true)}>
                        <Text className="text-white text-center text-lg">
                            Voir Plus
                        </Text>
                    </TouchableHighlight>
                </View>
            )
        } else {
            passedGames = (
                <View>
                    <Text className="text-white font-bold text-3xl mb-2 ml-3 border-b-2 border-primary">Résultats</Text>
                    <View className="flex flex-col">
                        {
                            games.incoming.map((game) => (
                                <View className="my-2 flex flex-col w-full border border-gray-600 rounded-xl">
                                    <View className="flex flex-row">
                                        <View className=" flex-col flex flex-grow items-center justify-center  w-2/5">
                                            <Image style={{resizeMode:"contain"}}  source={ { uri :  game.team_1_icon } } className='h-16 w-16 mb-2 mt-3'/>
                                            <Text className="text-white mb-2 font-bold text-lg">{game.team_1_name}</Text>
                                        </View>
                                        <View className=" w-1/5 justify-center">
                                            <Text className="text-2xl font-bold text-white text-center mb-2">{game.team_1_score} - {game.team_2_score}</Text>
                                        </View>
                                        <View className=" flex-col flex flex-grow items-center w-2/5 justify-center">
                                            <Image style={{resizeMode:"contain"}}  source={ { uri :  game.team_2_icon } } className='h-16 w-16 mb-2 mt-3'/>
                                            <Text className="text-white mb-2 font-bold text-lg">{game.team_2_name}</Text>
                                        </View>
                                    </View>
                                    <View className="bg-primary w-full rounded-b-xl">
                                        <Text className="font-bold text-center">
                                            {game.competition}
                                        </Text>
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                </View>
            )
        }
    }


   */

    return (
        <ScrollView className="h-full w-full relative flex-1">
            {Results}
        </ScrollView>
    )
}