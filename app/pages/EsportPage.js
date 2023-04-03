import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function EsportPage() {
    return (
      <View className="bg-black h-full flex-1 px-4">
        <Text className='color-white text-3xl mt-12 font-bold ml-6 mb-6'>
            Les équipes Solary
        </Text>
        <ScrollView className="bg-black relative flex-1">
        {
          esportData.map((data) => (
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
          ))
        }    
      </ScrollView>
      </View>
    );
}

let esportData = [
  {
    id : 0,
    label : 'League of Legends',
    st_label : 'LFL',
    logo : require('../assets/logo/League_of_Legends.png'),
  }, {
    id : 1,
    label : 'Fortnite',
    st_label : '',
    logo : require('../assets/logo/Fortnite.png'),
  }, {
    id : 2,
    label : 'Hearthstone',
    st_label : '',
    logo : require('../assets/logo/Hearthstone.png'),
  }, {
    id : 3,
    label : 'SSBU',
    st_label : '',
    logo : require('../assets/logo/SSBU.png'),
  }, {
    id : 4,
    label : 'TFT',
    st_label : '',
    logo : require('../assets/logo/TFT.png'),
  }, {
    id : 5,
    label : 'Dofus',
    st_label : '',
    logo : require('../assets/logo/Dofus.png'),
  }, {
    id : 6,
    label : 'DBFZ',
    st_label : '',
    logo : require('../assets/logo/DBFZ.png'),
  }, {
    id : 7,
    label : 'Rocket League',
    st_label : '',
    logo : require('../assets/logo/RL.png'),
  }, {
    id : 8,
    label : 'Trackmania',
    st_label : '',
    logo : require('../assets/logo/TM.png'),
  },
]
/// <Image style={{resizeMode: "contain"}} source={require('../assets/lfllogo.png')} className="h-20 my-4"/>

// <Image className="rounded-t-lg" source={require('../assets/slylogo.png')} alt=''/>

/*
<View className="border border-secondary rounded-xl shadow w-full flex-col my-3">
    <View className="flex flex-col">
        <View className="bg-secondary w-1/2 relative float-left rounded-xl items-center justify-center">
            <Image style={{resizeMode:"contain"}} className="h-24" source={data.img}/>
        </View>
        <View className="h-10 w-1/2 relative float-right rounded-tr-xl">
            <Text className="text-white">{data.label}</Text>
        </View>
    </View>
</View>
*/