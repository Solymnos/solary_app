import React from 'react';
import { Text, View, Image } from 'react-native';

export default function EsportPage() {
    return (
      <View className="flex-1 items-center justify-center bg-black p-8">
        <View className="p-4 border border-gray-700 rounded-xl shadow w-full flex-col">
            <View className="flex flex-row">
                <View className=" w-2/5 relative float-left rounded-tl-xl items-center justify-center">
                    <Image style={{resizeMode:"contain"}} className="h-24" source={require('../assets/lfllogo.png')}/>
                </View>
                <View className="bg-blue-400 h-10 w-3/5 relative float-right rounded-tr-xl">

                </View>
            </View>
            
        </View>
      </View>
    );
}

/// <Image style={{resizeMode: "contain"}} source={require('../assets/lfllogo.png')} className="h-20 my-4"/>

// <Image className="rounded-t-lg" source={require('../assets/slylogo.png')} alt=''/>