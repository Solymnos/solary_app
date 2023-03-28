import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

export default function EsportPage() {
    return (
      <View className="bg-black">
        <ScrollView className="bg-black p-5 pt-10">
        {
          esportData.map((data) => (
            <View className="p-4 border border-gray-700 rounded-xl shadow w-full flex-col my-3">
              <View className="flex flex-row">
                  <View className="w-2/5 relative float-left rounded-tl-xl items-center justify-center">
                      <Image style={{resizeMode:"contain"}} className="h-24" source={data.img}/>
                  </View>
                  <View className="h-10 w-3/5 relative float-right rounded-tr-xl">
                    <Text className="text-white">{data.label}</Text>
                  </View>
              </View>
            </View>
          ))
        }    
      </ScrollView>
      </View>
    );
}

let esportData = [
  {
    id : 0,
    label : 'LFL League of Legends',
    img : require('../assets/lfllogo.png'),
  }, {
    id : 1,
    label : 'Fortnite',
    img : require('../assets/fortnitelogo.png'),
  }, {
    id : 2,
    label : 'Hearthstone',
    img : require('../assets/hearthstonelogo.png'),
  }, {
    id : 3,
    label : 'SSBU',
    img : require('../assets/ssbulogo.png'),
  }, {
    id : 4,
    label : 'TFT',
    img : require('../assets/tftlogo.png'),
  }, {
    id : 5,
    label : 'Dofus',
    img : require('../assets/dofuslogo.png'),
  }, {
    id : 6,
    label : 'DBFZ',
    img : require('../assets/dbfzlogo.png'),
  }, {
    id : 7,
    label : 'Rocket League',
    img : require('../assets/rllogo.png'),
  }, {
    id : 8,
    label : 'Trackmania',
    img : require('../assets/tmlogo.png'),
  },
]
/// <Image style={{resizeMode: "contain"}} source={require('../assets/lfllogo.png')} className="h-20 my-4"/>

// <Image className="rounded-t-lg" source={require('../assets/slylogo.png')} alt=''/>