import React from 'react';
import { Text, View } from 'react-native';

export default function MediasPage() {
    return (
      <View className="bg-black h-full flex-1 px-4">
        <Text className='color-white text-3xl mt-12 font-bold ml-6 mb-6'>
            YouTube
        </Text>
        <Text className='color-white text-3xl mt-12 font-bold ml-6 mb-6'>
            Twitter
        </Text>
        
      </View>
    );
}