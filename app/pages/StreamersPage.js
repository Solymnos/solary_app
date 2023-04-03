import React, { useState } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, Linking, RefreshControl} from 'react-native';
import TextTicker from 'react-native-text-ticker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function StreamersPage() {
    const [refreshing, setRefreshing ] = useState(false);
    return (
        <View className="bg-black h-full flex-1 px-4">
            <ScrollView className="bg-black relative flex-1"
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={() => console.log('refresh')}/>
            }>
                <Text className='color-white text-3xl mt-12 font-bold ml-6 mb-6'>
                    Streams en live !
                </Text>
                {
                    streamersData.filter(streams => streams.isUp == true).map((stream) =>
                        <TouchableOpacity onPress={() => { Linking.openURL('https://google.com')}}>
                            <View className="w-full my-3 border border-gray-600 flex flex-row rounded-xl">
                                <Image style={{resizeMode:"contain"}}  source={ stream.icon } className='flex-none h-24 w-24 rounded-l-xl'/>
                                <View className='flex flex-col flex-grow'>
                                    <Text className='color-white text-2xl ml-2 mt-1 font-bold'>
                                        {stream.name}
                                    </Text>
                                    <Text className='color-white ml-2 font-bold text-xs'>
                                        stream sur <Text className='color-primary'> {stream.game}</Text>
                                    </Text>
                                    <TextTicker loop duration={12000} marqueeDelay={1000} repeatSpacer={50} className='color-white ml-2 font-bold text-ms w-48'>
                                        {stream.streamName}
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
                            <Image style={{resizeMode:"contain", opacity: 0.35}}  source={ stream.icon } className='flex-none h-24 w-24 rounded-l-xl'/>
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

let streamersData = [
  {
    id : 0,
    name : 'Sakor_',
    link : 'https://twitch.tv/streamer',
    icon : { uri : 'https://static-cdn.jtvnw.net/jtv_user_pictures/a66a7cd6-c11d-48cb-840d-2ccb716ccd3f-profile_image-70x70.png' },
    isUp : true,
    streamName : 'DEBRIEF RECAP ESPORT SOLARY & RE4 REMAKE TOUTE LA NIGHT !Waterdrop !fnac !Discord !RS',
    game : 'Resident Evil 4'
  },{
    id : 1,
    name : 'Streamer1',
    link : 'https://twitch.tv/streamer',
    icon : { uri : 'https://static-cdn.jtvnw.net/jtv_user_pictures/a66a7cd6-c11d-48cb-840d-2ccb716ccd3f-profile_image-70x70.png' },
    isUp : true,
    streamName : 'SOLARY VS KC LE CLASSICO',
    game : 'Resident Evil 4'
  },
  {
    id : 2,
    name : 'Streamer2',
    link : 'https://twitch.tv/streamer',
    icon : { uri : 'https://static-cdn.jtvnw.net/jtv_user_pictures/a66a7cd6-c11d-48cb-840d-2ccb716ccd3f-profile_image-70x70.png' },
    isUp : true,
    streamName : 'SOLARY VS KC LE CLASSICO',
    game : 'Resident Evil 4'
  },
  {
    id : 3,
    name : 'Streamer3',
    link : 'https://twitch.tv/streamer',
    icon : { uri : 'https://static-cdn.jtvnw.net/jtv_user_pictures/a66a7cd6-c11d-48cb-840d-2ccb716ccd3f-profile_image-70x70.png' },
    isUp : false,
    streamName : 'SOLARY VS KC LE CLASSICO',
    game : 'Resident Evil 4'
  },
  {
    id : 4,
    name : 'Streamer4',
    link : 'https://twitch.tv/streamer',
    icon : { uri : 'https://static-cdn.jtvnw.net/jtv_user_pictures/a66a7cd6-c11d-48cb-840d-2ccb716ccd3f-profile_image-70x70.png' },
    isUp : true,
    streamName : 'SOLARY VS KC LE CLASSICO',
    game : 'Resident Evil 4'
  },
  {
    id : 5,
    name : 'Streamer5',
    link : 'https://twitch.tv/streamer',
    icon : { uri : 'https://static-cdn.jtvnw.net/jtv_user_pictures/a66a7cd6-c11d-48cb-840d-2ccb716ccd3f-profile_image-70x70.png' },
    isUp : false,
    streamName : 'SOLARY VS KC LE CLASSICO',
    game : 'Resident Evil 4'
  },
]