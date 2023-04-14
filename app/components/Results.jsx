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
                <Text className="text-white font-bold text-2xl mb-2 ml-3 border-b-2 border-primary">Pas encore de résultats</Text>
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
    } else {
        if (watchMoreResults == false)
        {
            Results = (
                <View>
                    <Text className="text-white font-bold text-3xl mb-2 ml-3 border-b-2 border-primary">Résultats</Text>
                    <View className="flex flex-col">
                        {
                            results.slice(0,3).map((result) => (
                                <Result result={result} />
                            ))
                        }
                    </View>
                    <TouchableHighlight className="w-full border border-gray-400 rounded-xl my-3" onPress={() => setWatchMoreResults(true)}>
                        <Text className="text-white text-center text-lg">
                            Voir Plus
                        </Text>
                    </TouchableHighlight>
                </View>
            )
        } else {
            Results = (
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
    }

    return (
        <ScrollView className="h-full w-full relative flex-1">
            {Results}
        </ScrollView>
    )
}