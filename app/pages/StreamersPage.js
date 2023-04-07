import React, { useState } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, Linking, RefreshControl} from 'react-native';
import TextTicker from 'react-native-text-ticker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { updateStreamersInfo, streamersInfo } from '../utils/ApiUtils';

export default function StreamersPage() {

    const [ refreshing , setRefreshing ] = useState(false);
    const [ streamersData, setStreamerData ] = useState(streamersInfo);
    const [ favStreamers, setFavStreamers ] = useState([]);

    async function updateStreamersData()
    {
        const res = await updateStreamersInfo();
        setStreamerData(res);
    }
    return (
        <View className="bg-black h-full flex-1 px-4">
            <ScrollView className="bg-black relative flex-1"
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={() => updateStreamersData()}/>
            }>
                <Text className='color-white text-3xl mt-12 font-bold ml-6 mb-6'>
                    Streams en live !
                </Text>
                {
                    streamersData.filter(streams => { return (streams.isUp == true && favStreamers.indexOf(streams.id) != -1) }).sort((a, b) => b.liveViewers - a.liveViewers).map((stream) =>
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
                                    <TouchableOpacity onPress={() => {setFavStreamers(favStreamers.filter(item => item != stream.id))}}>
                                        <MaterialCommunityIcons name="heart" color={'#FBC600'} size={30}/>
                                    </TouchableOpacity>                        
                                </View>
                            </View> 
                        </TouchableOpacity>
                        
                    )
                }
                {
                    streamersData.filter((streams) => {
                        return (streams.isUp == true && favStreamers.indexOf(streams.id) == -1)
                    }).sort((a, b) => b.liveViewers - a.liveViewers).map((stream) =>
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
                                    <TouchableOpacity onPress={() => {setFavStreamers(favStreamers => [...favStreamers, stream.id])}}>
                                        <MaterialCommunityIcons name="heart" color={'#ffffff'} size={30}/>
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
                    streamersData.filter((streams) => { return (streams.isUp == false && favStreamers.indexOf(streams.id) != -1)}).map((stream) =>
                        <View className="w-full my-3 border border-gray-600 flex flex-row rounded-xl">
                            <Image style={{resizeMode:"contain", opacity: 0.35}}  source={ { uri :  stream.iconUrl } } className='flex-none h-24 w-24 rounded-l-xl'/>
                            <View className='flex flex-col flex-grow'>
                                <Text className='text-opacity-30 color-white text-2xl ml-2 mt-1 font-bold'>
                                    {stream.name}
                                </Text>
                            </View>
                            <View className=' flex-none items-center justify-center w-12'>
                                <TouchableOpacity onPress={() => {setFavStreamers(favStreamers.filter(item => item != stream.id))}}>
                                    <MaterialCommunityIcons name="heart" color={'#FBC600'} size={30}/>
                                </TouchableOpacity> 
                            </View>
                        </View> 
                    )      
                }
                {
                    streamersData.filter((streams) => { return (streams.isUp == false && favStreamers.indexOf(streams.id) == -1)}).map((stream) =>
                        <View className="w-full my-3 border border-gray-600 flex flex-row rounded-xl">
                            <Image style={{resizeMode:"contain", opacity: 0.35}}  source={ { uri :  stream.iconUrl } } className='flex-none h-24 w-24 rounded-l-xl'/>
                            <View className='flex flex-col flex-grow'>
                                <Text className='text-opacity-30 color-white text-2xl ml-2 mt-1 font-bold'>
                                    {stream.name}
                                </Text>
                            </View>
                            <View className=' flex-none items-center justify-center w-12'>
                                <TouchableOpacity onPress={() => {setFavStreamers(favStreamers => [...favStreamers, stream.id])}}>
                                    <MaterialCommunityIcons name="heart" color={'#ffffff'} size={30}/>
                                </TouchableOpacity>         
                        </View>
                        </View> 
                    )      
                } 
            </ScrollView>
        </View>
    );
}