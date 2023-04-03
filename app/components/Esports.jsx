import React from 'react';

export default function Esports() {
  return (
    <View className="w-full my-3">
        <View className="bg-black absolute border border-gray-600 rounded-xl z-20 h-28 w-28 items-center justify-center">
            <Image style={{resizeMode:"contain"}} className="h-24" source={data.logo}/>
        </View>
        <View className="border border-gray-600 w-max rounded-xl h-24 ml-8 mt-8 z-10">
            <View className='ml-20 w-max h-full flex flex-row'>
                <View className='border w-3/4'>
                    <Text className='color-white text-2xl mt-2 ml-2 font-bold'>
                        {data.label}
                    </Text>
                </View> 
                <View className='w-1/4 items-center pt-5'>
                    <View>
                        <MaterialCommunityIcons name="heart" color={'#ffffff'} size={35}/>
                    </View>                         
                </View>  
            </View>
        </View>
    </View>
  )
}