import React, { useState } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, Linking, RefreshControl} from 'react-native';
import TextTicker from 'react-native-text-ticker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getStreamersInfo, streamersData } from '../utils/ApiUtils';

export default function StreamersPage() {
    const [refreshing, setRefreshing ] = useState(false);
    return (
        <View className="bg-black h-full flex-1 px-4">
            <ScrollView className="bg-black relative flex-1"
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={() => getStreamersInfo()}/>
            }>
                <Text className='color-white text-3xl mt-12 font-bold ml-6 mb-6'>
                    Streams en live !
                </Text>
                {
                    streamersData.filter(streams => streams.isUp == true).map((stream) =>
                        <TouchableOpacity onPress={() => { Linking.openURL('https://www.twitch.tv/' + stream.login.toLowerCase())}}>
                            <View className="w-full my-3 border border-gray-600 flex flex-row rounded-xl">
                                <Image style={{resizeMode:"contain"}}  source={ { uri :  stream.iconUrl } } className='flex-none h-24 w-24 rounded-l-xl'/>
                                <View className='flex flex-col flex-grow'>
                                    <Text className='color-white text-2xl ml-2 mt-1 font-bold'>
                                        {stream.name}
                                    </Text>
                                    <Text className='color-white ml-2 font-bold text-xs'>
                                        stream sur <Text className='color-primary'> {stream.liveGame}</Text>
                                    </Text>
                                    <TextTicker loop duration={12000} marqueeDelay={1000} repeatSpacer={50} className='color-white ml-2 font-bold text-ms w-48'>
                                        {stream.liveTitle}
                                    </TextTicker>
                                </View>
                                <View className=' flex-none items-center justify-center w-12'>
                                    <TouchableOpacity onPress={() => { console.log('like')}}>
                                        <MaterialCommunityIcons name="heart" color={'#ffffff'} size={35}/>
                                    </TouchableOpacity>                         
                                </View>
                            </View> 
                        </TouchableOpacity>
                        
                    )      
                }
                <Text className='color-white text-3xl mt-6 font-bold ml-6 mb-6'>
                    Streams AFK !
                </Text>
                {
                    streamersData.filter(streams => streams.isUp == false).map((stream) =>
                        <View className="w-full my-3 border border-gray-600 flex flex-row rounded-xl">
                            <Image style={{resizeMode:"contain", opacity: 0.35}}  source={ { uri :  stream.iconUrl } } className='flex-none h-24 w-24 rounded-l-xl'/>
                            <View className='flex flex-col flex-grow'>
                                <Text className='text-opacity-30 color-white text-2xl ml-2 mt-1 font-bold'>
                                    {stream.name}
                                </Text>
                            </View>
                            <View className=' flex-none items-center justify-center w-12'>
                            <View>
                                <MaterialCommunityIcons name="heart" color={'#ffffff'} size={35}/>
                            </View>                         
                        </View>
                        </View> 
                    )      
                } 
            </ScrollView>
        </View>
    );
}