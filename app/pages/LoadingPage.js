import React from 'react';
import { Text, View, Image } from 'react-native';

export default function LoadingPage() {

    return (
        <View className="flex-1 items-center justify-center bg-black">
            <View className="flex h-2/3 w-full justify-center items-center">
                <View className="flex h-1/2 w-full justify-center items-center">
                    <Image style={{resizeMode: "contain"}} className='h-5/6 w-5/6 mt-10'   source={require('../assets/slylogo.png')}/>
                </View>
            </View>
            <View className="flex h-1/3 w-full">
                <Text className="text-black">Just test</Text>
            </View>
        </View>        
    )
}